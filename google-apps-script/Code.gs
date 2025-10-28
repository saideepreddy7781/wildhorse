/**
 * Wild Horse Media - Google Apps Script Backend
 * 
 * This script handles form submissions from the Wild Horse Media website.
 * It writes data to separate sheets for different form types.
 * 
 * Setup Instructions:
 * 1. Create a new Google Spreadsheet
 * 2. Go to Extensions > Apps Script
 * 3. Copy this code into Code.gs
 * 4. Create three sheets in your spreadsheet:
 *    - "Contact Inquiries"
 *    - "Service Bookings"
 *    - "Camera Rentals"
 * 5. Deploy as Web App (Execute as: Me, Access: Anyone)
 * 6. Copy the deployment URL and add it to your .env file
 */

// Configuration
const CONFIG = {
  // Sheet names
  SHEETS: {
    CONTACT: 'Contact Inquiries',
    SERVICE_BOOKING: 'Service Bookings',
    CAMERA_RENTAL: 'Camera Rentals'
  }
};

/**
 * Main function to handle POST requests
 */
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    const formType = data.formType;
    
    // Remove formType from data before processing
    delete data.formType;
    
    let result;
    
    // Route to appropriate handler based on form type
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
        throw new Error('Invalid form type');
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'active',
      message: 'Wild Horse Media Form Handler is running',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handle Contact Form Submissions
 */
function handleContactForm(data) {
  const sheet = getOrCreateSheet(CONFIG.SHEETS.CONTACT);
  
  // Ensure headers exist - TIMESTAMP FIRST, THEN SERVICE
  const headers = ['Timestamp', 'Service', 'Name', 'Mobile', 'Email', 'City', 'Message'];
  ensureHeaders(sheet, headers);
  
  // Prepare row data - TIMESTAMP FIRST, SERVICE SECOND for easy filtering
  const rowData = [
    new Date(),              // TIMESTAMP FIRST!
    data.service || '',      // SERVICE SECOND!
    data.name || '',
    data.mobile || '',
    data.email || '',
    data.city || '',
    data.message || ''
  ];
  
  // Append to sheet
  sheet.appendRow(rowData);
  
  return {
    success: true,
    message: 'Contact inquiry submitted successfully',
    formType: 'contact'
  };
}

/**
 * Handle Service Booking Form Submissions
 */
function handleServiceBookingForm(data) {
  const sheet = getOrCreateSheet(CONFIG.SHEETS.SERVICE_BOOKING);
  
  // Ensure headers exist - TIMESTAMP FIRST, THEN SERVICE, THEN PACKAGE
  const headers = ['Timestamp', 'Service', 'Package', 'Name', 'Mobile', 'Email', 'City', 'Message'];
  ensureHeaders(sheet, headers);
  
  // Prepare row data - TIMESTAMP FIRST, SERVICE SECOND, PACKAGE THIRD for easy filtering
  const rowData = [
    new Date(),              // TIMESTAMP FIRST!
    data.service || '',      // SERVICE SECOND!
    data.package || '',      // PACKAGE THIRD!
    data.name || '',
    data.mobile || '',
    data.email || '',
    data.city || '',
    data.message || ''
  ];
  
  // Append to sheet
  sheet.appendRow(rowData);
  
  return {
    success: true,
    message: 'Service booking submitted successfully',
    formType: 'service-booking'
  };
}

/**
 * Handle Camera Rental Form Submissions
 */
function handleCameraRentalForm(data) {
  const sheet = getOrCreateSheet(CONFIG.SHEETS.CAMERA_RENTAL);
  
  // Ensure headers exist - TIMESTAMP FIRST, THEN SERVICE
  const headers = ['Timestamp', 'Service', 'Name', 'Mobile', 'Email', 'City', 'Message'];
  ensureHeaders(sheet, headers);
  
  // Prepare row data - TIMESTAMP FIRST, SERVICE SECOND for easy filtering
  const rowData = [
    new Date(),                        // TIMESTAMP FIRST!
    data.service || 'Camera Rentals',  // SERVICE SECOND!
    data.name || '',
    data.mobile || '',
    data.email || '',
    data.city || '',
    data.message || ''
  ];
  
  // Append to sheet
  sheet.appendRow(rowData);
  
  return {
    success: true,
    message: 'Camera rental inquiry submitted successfully',
    formType: 'camera-rental'
  };
}

/**
 * Get or create a sheet with the given name
 */
function getOrCreateSheet(sheetName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(sheetName);
  
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
  }
  
  return sheet;
}

/**
 * Ensure headers exist in the sheet
 */
function ensureHeaders(sheet, headers) {
  const firstRow = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  const isEmpty = firstRow.every(cell => cell === '');
  
  if (isEmpty) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
}

/**
 * Test function to verify setup
 */
function testSetup() {
  Logger.log('Testing Google Apps Script Setup...');
  
  // Test each sheet
  const sheets = [
    CONFIG.SHEETS.CONTACT,
    CONFIG.SHEETS.SERVICE_BOOKING,
    CONFIG.SHEETS.CAMERA_RENTAL
  ];
  
  sheets.forEach(sheetName => {
    const sheet = getOrCreateSheet(sheetName);
    Logger.log(`Sheet "${sheetName}" is ready: ${sheet.getName()}`);
  });
  
  Logger.log('Setup test completed successfully!');
}
