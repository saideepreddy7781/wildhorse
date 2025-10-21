# Google Apps Script Setup Guide

This guide will help you set up Google Apps Script as the backend for Wild Horse Media form submissions.

## Overview

The website now uses **Google Apps Script** instead of Google Forms for better control and flexibility. Each form (Contact, Service Booking, Camera Rentals) is handled separately and data is stored in different sheets.

## Prerequisites

- A Google Account
- Access to Google Drive and Google Sheets

---

## Step 1: Create a Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it **"Wild Horse Media - Form Submissions"**
4. Create three sheets (tabs) with these exact names:
   - `Contact Inquiries`
   - `Service Bookings`
   - `Camera Rentals`

---

## Step 2: Set Up Google Apps Script

1. In your spreadsheet, go to **Extensions > Apps Script**
2. Delete any default code in the editor
3. Copy the entire content from `google-apps-script/Code.gs` file
4. Paste it into the Apps Script editor
5. Click the **Save** icon (💾) and name your project (e.g., "Wild Horse Forms Handler")

---

## Step 3: Configure the Script

1. In the `Code.gs` file, verify the sheet names match exactly:
   ```javascript
   SHEETS: {
     CONTACT: 'Contact Inquiries',
     SERVICE_BOOKING: 'Service Bookings',
     CAMERA_RENTAL: 'Camera Rentals'
   }
   ```
   
**Note**: Email notifications have been removed. All form submissions will only be stored in Google Sheets.

---

## Step 4: Test the Setup (Optional)

1. In Apps Script editor, select the function **`testSetup`** from the dropdown menu
2. Click the **Run** button (▶️)
3. When prompted, click **Review permissions**
4. Choose your Google account
5. Click **Advanced** → **Go to [Project Name] (unsafe)**
6. Click **Allow**
7. Check the **Execution log** at the bottom - you should see success messages

---

## Step 5: Deploy as Web App

1. Click the **Deploy** button in the top right
2. Select **New deployment**
3. Click the gear icon (⚙️) next to "Select type"
4. Choose **Web app**
5. Configure the deployment:
   - **Description**: "Wild Horse Media Forms API v1"
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone**
6. Click **Deploy**
7. **Important**: Copy the **Web app URL** (it looks like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`)
8. Click **Done**

---

## Step 6: Update Your Website Environment Variables

1. In your project root, open the `.env` file
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your actual Web app URL:
   ```env
   VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
3. Save the file

---

## Step 7: Test the Forms

1. Start your development server:
   ```bash
   bun dev
   ```
2. Open your website at `http://localhost:8080`
3. Test each form:
   - Contact form (homepage)
   - Service booking form (click any service)
   - Camera rentals form (homepage)
4. Check your Google Sheet - you should see new rows added in the respective sheets

---

## Form Types and Data Structure

### Contact Form (`contact`)
- **Sheet**: Contact Inquiries
- **Fields**: Timestamp, Name, Mobile, Email, Service, City, Message

### Service Booking Form (`service-booking`)
- **Sheet**: Service Bookings
- **Fields**: Timestamp, Name, Mobile, Email, Service, City, Message

### Camera Rental Form (`camera-rental`)
- **Sheet**: Camera Rentals
- **Fields**: Timestamp, Name, Mobile, Email, Service (always "Camera Rentals"), City, Message

---

## Troubleshooting

### Forms not submitting
1. Check the console for errors (F12 in browser)
2. Verify the `.env` file has the correct URL
3. Restart your dev server after changing `.env`
4. Make sure the Web App is deployed with "Anyone" access

### Email notifications not working
### Email notifications
Email notifications have been intentionally removed from this implementation. All form submissions are only stored in Google Sheets. If you need email notifications in the future, you can add them back using MailApp.sendEmail() in the handler functions.
### Data not appearing in sheets
1. Verify sheet names match exactly (case-sensitive)
2. Check Apps Script execution logs (View > Executions)
3. Make sure you authorized the script with correct permissions

### "Script disabled" or permission errors
1. Redeploy the Web App
2. Make sure "Execute as: Me" is selected
3. Re-authorize the script if needed

---

## Updating the Script

If you need to make changes to the Google Apps Script:

1. Edit the code in Apps Script editor
2. Save the changes (💾)
3. Click **Deploy** → **Manage deployments**
4. Click the pencil icon (✏️) to edit
5. Update the **Version** to "New version"
6. Click **Deploy**
7. The URL remains the same - no need to update `.env`

---

## Security Notes

- ✅ The `.env` file is in `.gitignore` - never commit it
- ✅ Use the `.env.example` as a template for team members
- ✅ The Web App uses "no-cors" mode for compatibility
- ✅ Forms use POST requests to prevent CSRF
- ✅ All submissions are timestamped
- ✅ Email notifications provide immediate alerts

---

## Production Deployment

When deploying to production (e.g., Vercel, Netlify):

1. Add the environment variable in your hosting platform:
   - Variable name: `VITE_GOOGLE_APPS_SCRIPT_URL`
   - Value: Your Web App URL
2. Rebuild and deploy your site
3. Test all forms on production

---

## Support

If you encounter issues:
1. Check the Apps Script execution logs
2. Verify all configuration steps
3. Test with a simple submission
4. Check browser console for errors

---

## Advantages Over Google Forms

✅ **Separate sheets** for different form types  
✅ **Better error handling** and user feedback  
✅ **No iframe hacks** needed  
✅ **Full control** over data processing  
✅ **Easy to extend** with additional features  
✅ **Professional appearance** - no Google branding  
✅ **Simple and clean** - only stores data, no email overhead  

---

## Next Steps

Once everything is working:
- ✅ Monitor submissions in your Google Sheet
- ✅ Consider adding data validation in the script
- ✅ Add more sheets for additional form types if needed
- ✅ Set up automatic backup of your spreadsheet
- ✅ Set up Google Sheets notifications if you want to be alerted of new submissions

---

**Last Updated**: October 20, 2025  
**Project**: Wild Horse Media Website  
**Maintained by**: Development Team
