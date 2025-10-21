/**
 * API Service for Wild Horse Media Forms
 * Handles all communication with Google Apps Script backend
 */

const APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;

export type FormType = 'contact' | 'service-booking' | 'camera-rental';

export interface FormSubmissionData {
  name: string;
  mobile: string;
  email: string;
  service?: string;
  city: string;
  message?: string;
}

export interface FormResponse {
  success: boolean;
  message?: string;
  error?: string;
  formType?: FormType;
}

/**
 * Submit form data to Google Apps Script
 * @param formType Type of form being submitted
 * @param data Form data
 * @returns Promise with response
 */
export async function submitForm(
  formType: FormType,
  data: FormSubmissionData
): Promise<FormResponse> {
  try {
    // Validate URL is configured
    if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
      throw new Error('Google Apps Script URL is not configured. Please check your .env file.');
    }

    // Add form type to the data
    const payload = {
      ...data,
      formType
    };

    // Submit to Google Apps Script
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      // Use no-cors mode as Google Apps Script requires it
      mode: 'no-cors'
    });

    // Note: no-cors mode doesn't allow reading the response
    // We assume success if no error was thrown
    return {
      success: true,
      message: 'Form submitted successfully',
      formType
    };

  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit form',
      formType
    };
  }
}

/**
 * Submit contact form
 */
export async function submitContactForm(data: FormSubmissionData): Promise<FormResponse> {
  return submitForm('contact', data);
}

/**
 * Submit service booking form
 */
export async function submitServiceBookingForm(data: FormSubmissionData): Promise<FormResponse> {
  return submitForm('service-booking', data);
}

/**
 * Submit camera rental form
 */
export async function submitCameraRentalForm(data: FormSubmissionData): Promise<FormResponse> {
  return submitForm('camera-rental', data);
}

/**
 * Test connection to Google Apps Script
 */
export async function testConnection(): Promise<boolean> {
  try {
    if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
      console.error('Google Apps Script URL not configured');
      return false;
    }

    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'GET',
    });

    return response.ok;
  } catch (error) {
    console.error('Connection test failed:', error);
    return false;
  }
}
