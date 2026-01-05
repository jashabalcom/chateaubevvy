import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/lGWGJpTJV7SUWX7mHYuY/webhook-trigger/b9321087-6250-4a05-b972-fca2f2169e0d";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface LeadData {
  source: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  phone?: string;
  interest?: string;
  membershipTier?: string;
  eventType?: string;
  preferredDate?: string;
  estimatedGuests?: string;
  message?: string;
  subject?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const leadData: LeadData = await req.json();
    
    console.log('Received lead data:', JSON.stringify(leadData, null, 2));

    // Parse name into first and last if only name is provided
    let firstName = leadData.firstName || '';
    let lastName = leadData.lastName || '';
    
    if (leadData.name && !firstName) {
      const nameParts = leadData.name.trim().split(' ');
      firstName = nameParts[0] || '';
      lastName = nameParts.slice(1).join(' ') || '';
    }

    // Build the payload for Go High Level
    const ghlPayload: Record<string, any> = {
      first_name: firstName,
      last_name: lastName,
      email: leadData.email,
      phone: leadData.phone || '',
      source: leadData.source,
      tags: ['website-lead', leadData.source],
    };

    // Add custom fields based on form type
    const customFields: Record<string, string> = {};
    
    if (leadData.interest) {
      customFields.interest = leadData.interest;
    }
    if (leadData.membershipTier) {
      customFields.membership_tier = leadData.membershipTier;
    }
    if (leadData.eventType) {
      customFields.event_type = leadData.eventType;
    }
    if (leadData.preferredDate) {
      customFields.preferred_date = leadData.preferredDate;
    }
    if (leadData.estimatedGuests) {
      customFields.estimated_guests = leadData.estimatedGuests;
    }
    if (leadData.subject) {
      customFields.subject = leadData.subject;
    }
    if (leadData.message) {
      customFields.message = leadData.message;
    }

    if (Object.keys(customFields).length > 0) {
      ghlPayload.customField = customFields;
    }

    console.log('Sending to GHL:', JSON.stringify(ghlPayload, null, 2));

    // Send to Go High Level webhook
    const response = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ghlPayload),
    });

    const responseText = await response.text();
    console.log('GHL Response Status:', response.status);
    console.log('GHL Response Body:', responseText);

    if (!response.ok) {
      console.error('GHL webhook failed:', response.status, responseText);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Failed to send to GHL',
          status: response.status 
        }),
        { 
          status: 200, // Return 200 so form submission still succeeds
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Lead sent to GHL' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in send-to-ghl function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { 
        status: 200, // Return 200 so form submission still succeeds
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
