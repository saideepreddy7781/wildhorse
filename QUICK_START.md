# Quick Start Guide - Form Setup

## 🚀 5-Minute Setup

### Step 1: Create Google Sheet (2 min)
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create new spreadsheet: **"Wild Horse Media - Form Submissions"**
3. Create 3 sheets: `Contact Inquiries`, `Service Bookings`, `Camera Rentals`

### Step 2: Deploy Script (2 min)
1. Extensions > Apps Script
2. Copy code from `google-apps-script/Code.gs`
3. Deploy > New deployment > Web app
4. Execute as: **Me**, Access: **Anyone**
5. Copy the URL

### Step 3: Configure Website (1 min)
1. Open `.env` file
2. Paste URL:
   ```
   VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ID/exec
   ```
3. Restart server: `bun dev`

### ✅ Done! Test your forms.

---

## 📋 Quick Test

1. Visit http://localhost:8080
2. Fill out contact form
3. Check Google Sheet for new row in "Contact Inquiries" tab

---

## 🔧 Troubleshooting

**Forms not working?**
- Check browser console (F12)
- Verify URL in `.env`
- Restart server

**Email notifications?**
- Not included - data only goes to Google Sheets
- You can set up Google Sheets notifications if needed

**No data in sheet?**
- Check sheet names (case-sensitive)
- View > Executions in Apps Script

---

## 📖 Full Documentation

See `GOOGLE_APPS_SCRIPT_SETUP.md` for detailed instructions.
