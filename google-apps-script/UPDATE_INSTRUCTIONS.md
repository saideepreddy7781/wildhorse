# Google Apps Script Update Instructions

## Overview
The booking form now includes a **Package Selection** dropdown that allows customers to select their preferred package tier when requesting a quote. This update requires changes to the Google Apps Script backend to capture and store the package information.

## Changes Made to Website

### 1. BookingForm Component (`src/components/BookingForm.tsx`)
- Added `packages?: Package[]` prop to accept available packages
- Added `package` field to form state
- Added Select dropdown UI component to display packages
- Package dropdown shows package name, price, and popular badge (⭐)
- Package field is optional - customers can submit without selecting a package

### 2. Service Booking Page (`src/pages/ServiceBookingPage.tsx`)
- Updated `<BookingForm>` to pass `packages={service.packages}`
- Form now receives all available packages for the selected service

### 3. Form API (`src/lib/formApi.ts`)
- Updated `FormSubmissionData` interface to include `package?: string`
- Package data is now sent to Google Apps Script with form submission

## Google Apps Script Updates Required

### Step 1: Update the Code.gs File

The `Code.gs` file has been updated with the following changes in the `handleServiceBookingForm` function:

**Before:**
```javascript
const headers = ['Timestamp', 'Service', 'Name', 'Mobile', 'Email', 'City', 'Message'];

const rowData = [
  new Date(),
  data.service || '',
  data.name || '',
  data.mobile || '',
  data.email || '',
  data.city || '',
  data.message || ''
];
```

**After:**
```javascript
const headers = ['Timestamp', 'Service', 'Package', 'Name', 'Mobile', 'Email', 'City', 'Message'];

const rowData = [
  new Date(),
  data.service || '',
  data.package || '',  // NEW: Package field added
  data.name || '',
  data.mobile || '',
  data.email || '',
  data.city || '',
  data.message || ''
];
```

### Step 2: Deploy the Updated Script

1. Open your Google Spreadsheet
2. Go to **Extensions > Apps Script**
3. Replace the entire `Code.gs` content with the updated version from this folder
4. Click **Save** (💾 icon)
5. Click **Deploy > Manage deployments**
6. Click **Edit** (✏️ icon) on your existing deployment
7. Under "New version", select **New version**
8. Click **Deploy**
9. Verify the deployment URL hasn't changed (it should stay the same)

### Step 3: Verify Spreadsheet Setup

Your Google Spreadsheet should have a sheet named **"Service Bookings"** with these columns:

| Timestamp | Service | Package | Name | Mobile | Email | City | Message |
|-----------|---------|---------|------|--------|-------|------|---------|

The script will automatically add the "Package" column if it doesn't exist when the first form with a package is submitted.

### Step 4: Test the Integration

1. Go to your website's service page (e.g., Wedding Photography)
2. Scroll to the booking form
3. Fill in the form details
4. Select a package from the dropdown (e.g., "Gold Package - ₹80,000")
5. Submit the form
6. Check your Google Spreadsheet - the new row should include the package name in the "Package" column

## Package Data Structure

Each service now has 2-3 package tiers with the following structure:

```typescript
{
  name: "Gold Package",
  price: "₹80,000",
  features: [
    "2 Professional Photographers",
    "8 Hours Coverage",
    "500+ Edited Photos"
  ],
  popular: true  // Shows ⭐ badge
}
```

### Available Packages by Service

1. **Wedding**: Silver (₹50k), Gold (₹80k), Platinum (₹120k)
2. **Pre-wedding**: Basic (₹25k), Premium (₹40k), Luxury (₹60k)
3. **Engagement**: Intimate (₹20k), Grand (₹35k), Royal (₹50k)
4. **Maternity**: Standard (₹15k), Deluxe (₹25k)
5. **Baby Shower**: Basic (₹12k), Premium (₹20k)
6. **Baby Photoshoots**: Mini (₹8k), Complete (₹15k), Annual (₹40k)
7. **Model Portfolio**: Starter (₹15k), Professional (₹30k), Premium (₹50k)
8. **Family**: Session (₹12k), Extended (₹20k)
9. **Product-Interior**: Product (₹8k), Interior (₹15k), Commercial (₹30k)
10. **House Warming**: Basic (₹10k), Complete (₹18k)

## Troubleshooting

### Issue: Package column not appearing in spreadsheet
**Solution**: Delete the first row of headers in the "Service Bookings" sheet and let the script recreate it on the next submission.

### Issue: Getting "undefined" in Package column
**Solution**: Verify that the frontend is sending the package field. Check browser console for any errors.

### Issue: Form submission fails
**Solution**: 
1. Check that the Apps Script deployment URL is correct in your `.env` file
2. Verify the script has permission to access the spreadsheet
3. Check Apps Script execution logs: Extensions > Apps Script > Executions

## Email Notifications (Optional Enhancement)

If you want to receive email notifications when someone selects a package, you can add this to the `handleServiceBookingForm` function:

```javascript
// Add email notification
if (data.package) {
  MailApp.sendEmail({
    to: "your-email@example.com",
    subject: `New ${data.service} Booking - ${data.package}`,
    body: `
      New service booking received:
      
      Service: ${data.service}
      Package: ${data.package}
      Name: ${data.name}
      Mobile: ${data.mobile}
      Email: ${data.email}
      City: ${data.city}
      Message: ${data.message || 'N/A'}
      
      Timestamp: ${new Date()}
    `
  });
}
```

## Support

For any issues with the Apps Script setup, check:
1. Apps Script execution logs
2. Browser console for frontend errors
3. Network tab to verify the POST request is being sent with package data

---

**Last Updated**: October 2025  
**Version**: 2.0 (Package Selection Support)
