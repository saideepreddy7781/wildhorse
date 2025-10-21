# 🚀 Complete Google Apps Script Setup Guide for Beginners

## 📖 Table of Contents
1. [What is Google Apps Script?](#what-is-google-apps-script)
2. [Prerequisites](#prerequisites)
3. [Step-by-Step Setup](#step-by-step-setup)
4. [Complete Code](#complete-code)
5. [Testing Your Setup](#testing-your-setup)
6. [Connecting to Your Website](#connecting-to-your-website)
7. [Troubleshooting](#troubleshooting)

---

## What is Google Apps Script?

**Google Apps Script** is a cloud-based scripting language provided by Google. Think of it as a mini programming environment that runs on Google's servers and can interact with Google services like Sheets, Gmail, Drive, etc.

**Why are we using it?**
- It's **free** and hosted by Google
- It can receive data from your website
- It can write data to Google Sheets automatically
- No server setup required - Google handles everything

**How does it work for our project?**
```
Your Website Form → Internet → Google Apps Script → Google Sheets
                                (receives data)     (stores data)
```

---

## Prerequisites

Before you start, you need:
- ✅ A Google Account (Gmail account)
- ✅ Access to Google Drive
- ✅ A web browser (Chrome, Firefox, Safari, etc.)
- ✅ 10-15 minutes of time

**No programming experience needed!** Just follow the steps exactly as written.

---

## Step-by-Step Setup

### **STEP 1: Create Your Google Spreadsheet** (3 minutes)

This is where your form data will be stored.

1. **Open Google Sheets**
   - Go to [https://sheets.google.com](https://sheets.google.com)
   - Make sure you're logged into your Google account

2. **Create a New Spreadsheet**
   - Click the **+ Blank** button (big plus sign)
   - A new empty spreadsheet will open

3. **Name Your Spreadsheet**
   - Click on "Untitled spreadsheet" at the top
   - Type: `Wild Horse Media - Form Submissions`
   - Press Enter

4. **Create Three Sheets (Tabs)**
   
   You'll see a tab at the bottom called "Sheet1". We need to create 3 specific sheets.
   
   **First Sheet:**
   - Right-click on "Sheet1" tab at the bottom
   - Click "Rename"
   - Type exactly: `Contact Inquiries`
   - Press Enter
   
   **Second Sheet:**
   - Click the **+** button next to "Contact Inquiries" tab
   - A new sheet appears (Sheet2)
   - Right-click on it and click "Rename"
   - Type exactly: `Service Bookings`
   - Press Enter
   
   **Third Sheet:**
   - Click the **+** button again
   - Right-click the new sheet and click "Rename"
   - Type exactly: `Camera Rentals`
   - Press Enter

5. **Verify Your Sheets**
   
   You should now see three tabs at the bottom:
   - ✅ Contact Inquiries
   - ✅ Service Bookings
   - ✅ Camera Rentals
   
   **IMPORTANT**: The names must match EXACTLY (including spaces and capitalization).

---

### **STEP 2: Open Google Apps Script Editor** (1 minute)

Now we'll open the code editor.

1. **In your spreadsheet, click on the menu:**
   ```
   Extensions → Apps Script
   ```
   
   If you don't see "Extensions":
   - Look for "Tools" menu instead
   - Then click "Script editor"

2. **A new tab will open** - This is the Apps Script Editor
   
   You'll see:
   - A code editor with some default code (like `function myFunction() {`)
   - A toolbar at the top
   - Project name "Untitled project"

3. **Name Your Project**
   - Click on "Untitled project" at the top left
   - Type: `Wild Horse Forms Handler`
   - It will save automatically

---

### **STEP 3: Delete Default Code and Paste New Code** (2 minutes)

1. **Select ALL the default code in the editor**
   - Click anywhere in the code area
   - Press `Ctrl+A` (Windows) or `Cmd+A` (Mac)
   - This selects everything

2. **Delete it**
   - Press `Delete` or `Backspace`
   - The editor should now be empty

3. **Copy the Complete Code Below**
   
   Scroll down to the [Complete Code](#complete-code) section below and copy ALL of it.

4. **Paste into the Editor**
   - Click in the empty editor
   - Press `Ctrl+V` (Windows) or `Cmd+V` (Mac)

5. **Verify the Code is Pasted**
   - You should see code starting with `/**`
   - The code should have colorful syntax highlighting
   - Scroll down - you should see multiple functions

---

### **STEP 4: Save Your Script** (30 seconds)

1. **Click the Save icon** (💾 disk icon) in the toolbar
   
   OR
   
   Press `Ctrl+S` (Windows) or `Cmd+S` (Mac)

2. **Wait for "Saved" message**
   - You'll see a brief notification saying the project is saved

---

### **STEP 5: Deploy as Web App** (5 minutes)

This is the most important step - it makes your script accessible from your website.

1. **Click the "Deploy" button**
   - Look at the top right of the Apps Script editor
   - Click the blue **"Deploy"** button
   - Select **"New deployment"** from the dropdown

2. **Configure Deployment Settings**
   
   A dialog box will appear:
   
   **a) Select Type:**
   - You'll see a gear/settings icon (⚙️) next to "Select type"
   - Click it
   - Choose **"Web app"** from the list
   
   **b) Description (Optional):**
   - Type: `Wild Horse Forms API v1`
   
   **c) Execute as:**
   - Select: **"Me (your-email@gmail.com)"**
   - This means the script runs with YOUR permissions
   
   **d) Who has access:**
   - Select: **"Anyone"**
   - This allows your website (and anyone on the internet) to submit forms
   - Don't worry - they can only submit data, not read or delete

3. **Click "Deploy"**
   - The blue "Deploy" button at the bottom of the dialog

4. **Authorize the Script** (IMPORTANT - First time only)
   
   A new dialog will appear asking for permissions:
   
   **a) Click "Review permissions"**
   
   **b) Choose your Google account**
   - Select the account that owns this spreadsheet
   
   **c) You'll see a warning: "Google hasn't verified this app"**
   - This is NORMAL for personal scripts
   - Click **"Advanced"** (small link at bottom left)
   
   **d) Click "Go to Wild Horse Forms Handler (unsafe)"**
   - It's not actually unsafe - it's YOUR script
   - Google shows this warning for all custom scripts
   
   **e) Review permissions**
   - The script needs permission to:
     - See and manage spreadsheets
     - Connect to external service
   - Click **"Allow"**

5. **Copy the Web App URL**
   
   After deployment, you'll see a dialog with:
   - ✅ Deployment ID
   - ✅ **Web app URL** ← This is what you need!
   
   The URL looks like:
   ```
   https://script.google.com/macros/s/AKfycby...random-characters.../exec
   ```
   
   **COPY THIS ENTIRE URL!**
   - Click the copy icon next to it
   - Or select it and press Ctrl+C (Cmd+C on Mac)
   - **Save it in a notepad** - you'll need it in Step 6

6. **Click "Done"**

**🎉 Congratulations!** Your Google Apps Script is now deployed and running on Google's servers!

---

## Complete Code

Copy this ENTIRE code and paste it into your Apps Script editor:

```javascript
/**
 * Wild Horse Media - Google Apps Script Backend
 * 
 * This script handles form submissions from the Wild Horse Media website.
 * It writes data to separate sheets for different form types.
 * 
 * NO EMAIL NOTIFICATIONS - Data is only saved to Google Sheets
 */

// ========================================
// CONFIGURATION
// ========================================
const CONFIG = {
  // Sheet names - must match exactly!
  SHEETS: {
    CONTACT: 'Contact Inquiries',
    SERVICE_BOOKING: 'Service Bookings',
    CAMERA_RENTAL: 'Camera Rentals'
  }
};

// ========================================
// MAIN ENTRY POINT - Receives POST requests from website
// ========================================
/**
 * This function runs when your website sends data
 * It's called automatically by Google Apps Script
 */
function doPost(e) {
  try {
    // Parse the incoming JSON data from the website
    const data = JSON.parse(e.postData.contents);
    const formType = data.formType;
    
    // Remove formType from data (we don't need it in the sheet)
    delete data.formType;
    
    let result;
    
    // Decide which form handler to use based on formType
    switch(formType) {
      case 'contact':
        result = handleContactForm(data);
        break;
      case 'service-booking':
        result = handleServiceBookingForm(data);
        break;
      case 'camera-rental':
        result = handleCameraRentalForm(data);
        break;
      default:
        throw new Error('Invalid form type: ' + formType);
    }
    
    // Send success response back to website
    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    // If something goes wrong, send error response
    Logger.log('Error in doPost: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ========================================
// TEST ENDPOINT - For checking if script is running
// ========================================
/**
 * This function responds to GET requests (when you visit the URL in browser)
 * Use this to test if your deployment is working
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'active',
      message: 'Wild Horse Media Form Handler is running',
      timestamp: new Date().toISOString(),
      version: '1.0'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ========================================
// FORM HANDLERS - One for each form type
// ========================================

/**
 * Handle Contact Form Submissions
 * Saves data to "Contact Inquiries" sheet
 */
function handleContactForm(data) {
  const sheet = getOrCreateSheet(CONFIG.SHEETS.CONTACT);
  
  // Define column headers - TIMESTAMP FIRST, SERVICE SECOND for easy filtering!
  const headers = ['Timestamp', 'Service', 'Name', 'Mobile', 'Email', 'City', 'Message'];
  ensureHeaders(sheet, headers);
  
  // Prepare row data in the same order as headers
  const rowData = [
    new Date(),              // Timestamp - current date/time - FIRST COLUMN!
    data.service || '',      // Service they're interested in - SECOND COLUMN!
    data.name || '',         // Name from form
    data.mobile || '',       // Mobile number
    data.email || '',        // Email address
    data.city || '',         // Their city
    data.message || ''       // Any message they wrote
  ];
  
  // Add the row to the sheet
  sheet.appendRow(rowData);
  
  // Log success for debugging
  Logger.log('Contact form saved: ' + data.name);
  
  // Return success response
  return {
    success: true,
    message: 'Contact inquiry submitted successfully',
    formType: 'contact'
  };
}

/**
 * Handle Service Booking Form Submissions
 * Saves data to "Service Bookings" sheet
 */
function handleServiceBookingForm(data) {
  const sheet = getOrCreateSheet(CONFIG.SHEETS.SERVICE_BOOKING);
  
  // Define column headers - TIMESTAMP FIRST, SERVICE SECOND for easy filtering!
  const headers = ['Timestamp', 'Service', 'Name', 'Mobile', 'Email', 'City', 'Message'];
  ensureHeaders(sheet, headers);
  
  // Prepare row data
  const rowData = [
    new Date(),              // FIRST COLUMN!
    data.service || '',      // This will be pre-filled (Wedding, Maternity, etc.) - SECOND COLUMN!
    data.name || '',
    data.mobile || '',
    data.email || '',
    data.city || '',
    data.message || ''
  ];
  
  // Add the row to the sheet
  sheet.appendRow(rowData);
  
  // Log success
  Logger.log('Service booking saved: ' + data.service + ' - ' + data.name);
  
  // Return success response
  return {
    success: true,
    message: 'Service booking submitted successfully',
    formType: 'service-booking'
  };
}

/**
 * Handle Camera Rental Form Submissions
 * Saves data to "Camera Rentals" sheet
 */
function handleCameraRentalForm(data) {
  const sheet = getOrCreateSheet(CONFIG.SHEETS.CAMERA_RENTAL);
  
  // Define column headers - TIMESTAMP FIRST, SERVICE SECOND for easy filtering!
  const headers = ['Timestamp', 'Service', 'Name', 'Mobile', 'Email', 'City', 'Message'];
  ensureHeaders(sheet, headers);
  
  // Prepare row data
  const rowData = [
    new Date(),              // FIRST COLUMN!
    'Camera Rentals',        // Service is always "Camera Rentals" for this form - SECOND COLUMN!
    data.name || '',
    data.mobile || '',
    data.email || '',
    data.city || '',
    data.message || ''       // This contains equipment details
  ];
  
  // Add the row to the sheet
  sheet.appendRow(rowData);
  
  // Log success
  Logger.log('Camera rental saved: ' + data.name);
  
  // Return success response
  return {
    success: true,
    message: 'Camera rental inquiry submitted successfully',
    formType: 'camera-rental'
  };
}

// ========================================
// HELPER FUNCTIONS - Utility functions used by handlers
// ========================================

/**
 * Get a sheet by name, or create it if it doesn't exist
 * @param {string} sheetName - Name of the sheet to get/create
 * @return {Sheet} The sheet object
 */
function getOrCreateSheet(sheetName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(sheetName);
  
  // If sheet doesn't exist, create it
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    Logger.log('Created new sheet: ' + sheetName);
  }
  
  return sheet;
}

/**
 * Ensure the sheet has headers in the first row
 * If first row is empty, add headers and format them
 * @param {Sheet} sheet - The sheet to check
 * @param {Array} headers - Array of header names
 */
function ensureHeaders(sheet, headers) {
  // Get the first row
  const firstRow = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  
  // Check if first row is empty
  const isEmpty = firstRow.every(cell => cell === '');
  
  if (isEmpty) {
    // Add headers
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Make headers bold
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    
    // Freeze the header row so it stays visible when scrolling
    sheet.setFrozenRows(1);
    
    Logger.log('Added headers to sheet: ' + sheet.getName());
  }
}

// ========================================
// TEST FUNCTION - Use this to verify your setup
// ========================================
/**
 * Run this function to test if everything is set up correctly
 * 
 * HOW TO RUN:
 * 1. Select this function from the dropdown at the top
 * 2. Click the "Run" button (▶️)
 * 3. Check the "Execution log" at the bottom for results
 */
function testSetup() {
  Logger.log('========================================');
  Logger.log('Testing Google Apps Script Setup...');
  Logger.log('========================================');
  
  // Get the spreadsheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log('Spreadsheet name: ' + ss.getName());
  Logger.log('Spreadsheet ID: ' + ss.getId());
  
  // Test each sheet
  const sheets = [
    CONFIG.SHEETS.CONTACT,
    CONFIG.SHEETS.SERVICE_BOOKING,
    CONFIG.SHEETS.CAMERA_RENTAL
  ];
  
  let allGood = true;
  
  sheets.forEach(sheetName => {
    try {
      const sheet = getOrCreateSheet(sheetName);
      Logger.log('✓ Sheet "' + sheetName + '" exists and is ready');
      Logger.log('  - Sheet ID: ' + sheet.getSheetId());
      Logger.log('  - Rows: ' + sheet.getLastRow());
    } catch(error) {
      Logger.log('✗ Error with sheet "' + sheetName + '": ' + error.toString());
      allGood = false;
    }
  });
  
  Logger.log('========================================');
  if (allGood) {
    Logger.log('✓ ALL TESTS PASSED! Setup is complete.');
  } else {
    Logger.log('✗ Some tests failed. Check the errors above.');
  }
  Logger.log('========================================');
}

/**
 * Test function to simulate a form submission
 * Run this to test if data is being saved correctly
 */
function testFormSubmission() {
  Logger.log('Testing form submission...');
  
  // Simulate a contact form submission
  const testData = {
    formType: 'contact',
    name: 'Test User',
    mobile: '+91 98765 43210',
    email: 'test@example.com',
    service: 'Wedding Photography',
    city: 'Bangalore',
    message: 'This is a test submission'
  };
  
  // Create a mock request object
  const mockRequest = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  // Call the doPost function
  const result = doPost(mockRequest);
  
  // Log the result
  Logger.log('Result: ' + result.getContent());
  Logger.log('Check the "Contact Inquiries" sheet for the test data');
}
```

---

## Testing Your Setup

Before connecting to your website, let's make sure everything works.

### **Test 1: Run testSetup Function** (2 minutes)

1. **In the Apps Script editor:**
   - Find the dropdown menu at the top (next to the Run button ▶️)
   - Click it and select **`testSetup`**

2. **Click the Run button** (▶️ play icon)

3. **First time authorization:**
   - You might be asked for permissions again
   - Click "Review permissions" and allow

4. **Check the Execution Log:**
   - At the bottom of the screen, click **"Execution log"**
   - You should see:
     ```
     Testing Google Apps Script Setup...
     ✓ Sheet "Contact Inquiries" exists and is ready
     ✓ Sheet "Service Bookings" exists and is ready
     ✓ Sheet "Camera Rentals" exists and is ready
     ✓ ALL TESTS PASSED! Setup is complete.
     ```

5. **If you see errors:**
   - Check that sheet names match exactly
   - Make sure you're in the right spreadsheet
   - Try running the function again

### **Test 2: Test Form Submission** (1 minute)

1. **Select `testFormSubmission` from the dropdown**

2. **Click Run** (▶️)

3. **Check the Execution log**
   - Should say "Testing form submission..."
   - Should show a success message

4. **Check your Google Sheet:**
   - Go back to your spreadsheet tab
   - Click on "Contact Inquiries" tab
   - You should see:
     - Row 1: Headers (Timestamp, Name, Mobile, etc.)
     - Row 2: Test data (Test User, +91 98765 43210, etc.)

5. **Success!** If you see the test data, everything is working!

### **Test 3: Test the Web URL** (1 minute)

1. **Copy your Web App URL** (from Step 5 earlier)

2. **Open it in a new browser tab**

3. **You should see:**
   ```json
   {
     "status": "active",
     "message": "Wild Horse Media Form Handler is running",
     "timestamp": "2025-10-20T...",
     "version": "1.0"
   }
   ```

4. **If you see this**, your script is publicly accessible and ready!

---

## Connecting to Your Website

Now let's connect your deployed script to your website.

### **Step 6: Add URL to Your Project** (2 minutes)

1. **Open your project folder in VS Code**

2. **Find the `.env` file**
   - It's in the root of your project
   - If you don't see it, make sure "Show hidden files" is enabled

3. **Open the `.env` file**

4. **Replace the placeholder URL:**
   
   **Before:**
   ```env
   VITE_GOOGLE_APPS_SCRIPT_URL=YOUR_GOOGLE_APPS_SCRIPT_URL_HERE
   ```
   
   **After:**
   ```env
   VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ACTUAL_ID/exec
   ```
   
   Paste the ENTIRE URL you copied in Step 5.

5. **Save the file** (Ctrl+S or Cmd+S)

### **Step 7: Restart Your Development Server** (1 minute)

**IMPORTANT**: You must restart the server for it to read the new .env file.

1. **Stop the current server:**
   - Go to your terminal in VS Code
   - Press `Ctrl+C` to stop the server

2. **Start it again:**
   ```powershell
   bun dev
   ```

3. **Wait for it to start:**
   - You'll see: "Local: http://localhost:8080"

### **Step 8: Test the Forms on Your Website** (5 minutes)

Now test each form:

**Test Contact Form:**
1. Open http://localhost:8080
2. Scroll to the contact section
3. Fill out the form with test data:
   - Name: Your Name
   - Mobile: Your number
   - Email: Your email
   - Service: Wedding Photography
   - City: Your city
   - Message: Testing the form
4. Click "Submit Inquiry"
5. You should see: "Inquiry Submitted!" toast message
6. Check your Google Sheet → "Contact Inquiries" tab
7. ✅ You should see a new row with your data!

**Test Service Booking Form:**
1. On the homepage, click on any service (e.g., "Wedding")
2. You'll go to `/service/wedding`
3. Fill out the booking form
4. Click "Request Quote"
5. Check Google Sheet → "Service Bookings" tab
6. ✅ New row should appear!

**Test Camera Rental Form:**
1. Go back to homepage
2. Scroll to "Camera & Equipment Rentals" section
3. Fill out the rental form
4. Click "Submit Rental Inquiry"
5. Check Google Sheet → "Camera Rentals" tab
6. ✅ New row should appear!

**If all three forms work:**
🎉 **CONGRATULATIONS!** Your forms are fully connected and working!

---

## Troubleshooting

### Problem: "Forms not submitting" or "Submission Failed" error

**Solution 1: Check the URL**
- Open `.env` file
- Make sure the URL starts with `https://script.google.com`
- Make sure there are no extra spaces
- The URL should end with `/exec`

**Solution 2: Restart the server**
```powershell
# Press Ctrl+C to stop
bun dev
```

**Solution 3: Check browser console**
- Press F12 in browser
- Click "Console" tab
- Look for error messages
- Share the error if you need help

### Problem: "Script is disabled" or "Authorization required"

**Solution:**
- Go back to Apps Script editor
- Click Deploy → Manage deployments
- Make sure status is "Active"
- If not, click the pencil icon and redeploy

### Problem: Data not appearing in Google Sheets

**Solution 1: Check sheet names**
- Sheet names must match EXACTLY:
  - `Contact Inquiries` (capital C and I)
  - `Service Bookings` (capital S and B)
  - `Camera Rentals` (capital C and R)

**Solution 2: Check Apps Script logs**
- Apps Script editor → View → Executions
- Look for recent executions
- Click on one to see if there are errors

**Solution 3: Re-run testFormSubmission**
- In Apps Script, run `testFormSubmission`
- If test data appears, the script works
- Problem might be in the website connection

### Problem: "Cannot find module" or TypeScript errors in VS Code

**Solution:**
```powershell
# Install dependencies
bun install

# Then restart
bun dev
```

### Problem: Deployment says "Pending" or stuck

**Solution:**
- Wait 1-2 minutes
- Refresh the page
- Try deploying again
- Make sure you saved the script first (Ctrl+S)

---

## Understanding the Code (For Beginners)

Let me explain what each part of the code does:

### **CONFIG Section**
```javascript
const CONFIG = {
  SHEETS: {
    CONTACT: 'Contact Inquiries',
    // ... other sheets
  }
};
```
This is like a settings file. It tells the script which sheet names to use.

### **doPost Function**
```javascript
function doPost(e) {
  // This runs when your website sends data
}
```
Think of this as the "mailbox" - when your website sends data, it arrives here first.

### **Form Handlers**
```javascript
function handleContactForm(data) {
  // Process contact form
  sheet.appendRow(rowData);  // Add a new row to the sheet
}
```
These functions take the data and write it to the correct sheet.

**IMPORTANT - Service Tracking:**
Notice the `service` field in every handler? This is how you know which form was filled:
- **Service Booking Forms** (Wedding, Maternity, etc.): The service name is automatically pre-filled (e.g., "Wedding", "Maternity", "Baby Shower")
- **Contact Form**: User manually types the service they're interested in
- **Camera Rental Form**: Always shows "Camera Rentals"

When you open your Google Sheet, the **Service column** will clearly show which specific service the customer is interested in! This makes it super easy to:
- Sort inquiries by service type
- Know which service page they came from
- Respond with relevant information

### **Helper Functions**
```javascript
function getOrCreateSheet(sheetName) {
  // Get the sheet, or make it if it doesn't exist
}
```
These are utilities that help the main functions work.

---

## Quick Reference

### **Key URLs:**
- Google Sheets: https://sheets.google.com
- Your spreadsheet: (Bookmarkit!)
- Apps Script: Extensions → Apps Script in your sheet

### **Important Files in Your Project:**
- `.env` - Contains your Apps Script URL
- `google-apps-script/Code.gs` - Backup of the script code
- `src/lib/formApi.ts` - Frontend code that calls your script

### **Commands:**
```powershell
bun dev          # Start development server
Ctrl+C           # Stop server
bun install      # Install dependencies
```

### **To Update the Script:**
1. Edit code in Apps Script editor
2. Save (Ctrl+S)
3. Deploy → Manage deployments
4. Click pencil icon next to active deployment
5. Version: "New version"
6. Deploy
7. URL stays the same - no need to update .env

---

## Next Steps

After everything is working:

1. **Bookmark your Google Sheet** - You'll be checking it often!

2. **Set up Google Sheets notifications:**
   - In your sheet: Tools → Notification rules
   - "Notify me when: A user submits a form"
   - Or: "Notify me when: Any changes are made"
   - You'll get emails when forms are submitted

3. **Organize your data:**
   - Add filters to headers (Data → Create a filter)
   - Sort by timestamp to see newest first
   - Use conditional formatting to highlight important ones

4. **Backup your data:**
   - File → Download → Microsoft Excel (.xlsx)
   - Do this weekly or monthly

5. **Deploy to production:**
   - See the main docs for deploying to Vercel/Netlify
   - Add the same `VITE_GOOGLE_APPS_SCRIPT_URL` environment variable there

---

## Summary

You've successfully:
- ✅ Created a Google Spreadsheet with 3 sheets
- ✅ Created a Google Apps Script
- ✅ Deployed it as a web app
- ✅ Connected it to your website
- ✅ Tested all 3 forms

Your forms now automatically save to Google Sheets whenever someone submits them!

---

## Getting Help

If you get stuck:
1. Read the error message carefully
2. Check the Troubleshooting section above
3. Run the test functions in Apps Script
4. Check the Execution log in Apps Script
5. Check the browser console (F12)

---

**Created**: October 20, 2025  
**For**: Wild Horse Media Project  
**Level**: Complete Beginner  
**Time Required**: 15-20 minutes  

🎉 **You did it!** Welcome to the world of form automation!
