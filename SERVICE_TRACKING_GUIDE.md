# 📋 Quick Reference: Form Service Tracking

## How Service Identification Works

Your Wild Horse Media website has **3 types of forms**, and each one automatically tracks which service the customer is interested in.

---

## 1. 🎯 Service Booking Forms (12+ forms)

### Where:
Individual service pages like:
- `https://wildhorse.vercel.app/service/wedding`
- `https://wildhorse.vercel.app/service/maternity`
- `https://wildhorse.vercel.app/service/baby-shower`
- And 9 more...

### How Service is Tracked:
✅ **Automatically pre-filled** with the service name  
✅ Shows clearly on the form: "Service Selected: Wedding"  
✅ Saved to **"Service Bookings"** sheet

### What You'll See in Google Sheets:

| **Service** | Timestamp | Name | Mobile | Email | City | Message |
|-------------|-----------|------|--------|-------|------|---------|
| **Wedding** | 10/21/2025 10:30 AM | Priya Sharma | +91 98765... | priya@... | Bangalore | Need photographer for Feb 2026 |
| **Maternity** | 10/21/2025 11:15 AM | Rahul Kumar | +91 97654... | rahul@... | Chennai | Looking for maternity shoot package |
| **Baby Shower** | 10/21/2025 2:45 PM | Anita Singh | +91 96543... | anita@... | Hyderabad | Baby shower on Dec 15th |

**👉 The Service column is FIRST - making it super easy to sort and filter!**

---

## 2. 💬 Contact Form (Homepage)

### Where:
Homepage contact section - `https://wildhorse.vercel.app/#contact`

### How Service is Tracked:
⚠️ **User manually types** their service need  
✅ Field labeled: "Service Needed (e.g., Wedding, Rental)"  
✅ Saved to **"Contact Inquiries"** sheet

### What You'll See in Google Sheets:

| **Service** | Timestamp | Name | Mobile | Email | City | Message |
|-------------|-----------|------|--------|-------|------|---------|
| **Wedding Photography** | 10/21/2025 9:00 AM | Vijay Reddy | +91 95432... | vijay@... | Mumbai | Need quote for destination wedding |
| **Pre-wedding shoot** | 10/21/2025 3:30 PM | Meera Joshi | +91 94321... | meera@... | Pune | Looking for outdoor locations |

**👉 Service shows what the customer typed in the form - and it's the FIRST column!**

---

## 3. 📷 Camera Rental Form

### Where:
Camera Rentals section - `https://wildhorse.vercel.app/#rentals`

### How Service is Tracked:
✅ **Fixed value**: Always "Camera Rentals"  
✅ Shows on form: "Service: Camera Rentals"  
✅ Saved to **"Camera Rentals"** sheet

### What You'll See in Google Sheets:

| **Service** | Timestamp | Name | Mobile | Email | City | Message |
|-------------|-----------|------|--------|-------|------|---------|
| **Camera Rentals** | 10/21/2025 1:00 PM | Arun Patel | +91 93210... | arun@... | Bangalore | Need Canon 5D for 3 days |
| **Camera Rentals** | 10/21/2025 4:20 PM | Kavya Nair | +91 92109... | kavya@... | Kochi | Looking for lighting equipment |

**👉 All rental inquiries automatically marked with "Camera Rentals" in the FIRST column!**

---

## 📊 Your Google Sheets Setup

```
📗 Spreadsheet: "Wild Horse Media - Form Submissions"
│
├── 📄 Contact Inquiries
│   └── General inquiries from homepage
│   └── Service: Whatever user typed
│
├── 📄 Service Bookings
│   └── From individual service pages
│   └── Service: Wedding, Maternity, Baby Shower, etc. (pre-filled)
│
└── 📄 Camera Rentals
    └── Equipment rental inquiries
    └── Service: Always "Camera Rentals"
```

---

## 🎯 Why This is Helpful

### 1. **Easy Filtering**
Click the filter button on "Service" column and select:
- Show only "Wedding" inquiries
- Show only "Maternity" inquiries
- Show only "Camera Rentals" inquiries

### 2. **Quick Sorting**
Sort by Service column (A→Z) to group all inquiries by service type

### 3. **Clear Context**
You instantly know:
- What service they want
- Which page they came from
- How to respond appropriately

### 4. **Business Insights**
Track which services are most popular:
- Count entries per service
- See which services get most inquiries
- Adjust marketing based on demand

---

## 💡 Pro Tips

### Tip 1: Use Color Coding
In Google Sheets:
1. Select the "Service" column
2. Format → Conditional formatting
3. Set rules like:
   - "Wedding" = Light blue background
   - "Maternity" = Light pink background
   - "Camera Rentals" = Light yellow background

### Tip 2: Create Filter Views
1. Click Data → Filter views → Create new filter view
2. Name it "Wedding Inquiries"
3. Filter Service = "Wedding"
4. Save it!

Repeat for each service type. Quick access to filtered views!

### Tip 3: Set Up Notifications
1. Tools → Notification rules
2. Choose: "Notify me when: A user submits a form"
3. Get instant email when new inquiry comes in!

### Tip 4: Weekly Summary
Every Monday morning:
1. Open "Service Bookings" sheet
2. Filter by last 7 days (Timestamp column)
3. Count inquiries per service
4. Follow up on pending responses

---

## 🔍 Example: Finding All Wedding Inquiries

1. Open your Google Sheet
2. Go to "Service Bookings" tab
3. Click the filter button in header row
4. Click dropdown on "Service" column
5. Uncheck "Select all"
6. Check only "Wedding"
7. Click OK

**Result**: Now you see ONLY wedding photography inquiries! 🎉

---

## ✅ Verification

To test if service tracking is working:

1. **Submit a test from Wedding page** (`/service/wedding`)
   - Check "Service Bookings" sheet
   - Service column should say "Wedding" ✓

2. **Submit a test from homepage Contact form**
   - Type "Test Service" in service field
   - Check "Contact Inquiries" sheet
   - Service column should say "Test Service" ✓

3. **Submit a test from Camera Rentals**
   - Check "Camera Rentals" sheet
   - Service column should say "Camera Rentals" ✓

---

## 📞 Need Help?

If service names aren't showing correctly:
1. Check that you're looking at the right sheet tab
2. Verify the form submitted successfully (check timestamp)
3. Refresh your Google Sheets page
4. Check the Google Apps Script execution log

---

## Summary

| Form Type | Sheet Name | Service Value | How It's Set |
|-----------|------------|---------------|--------------|
| Service Pages (12+) | Service Bookings | Wedding, Maternity, etc. | Pre-filled automatically |
| Homepage Contact | Contact Inquiries | User's input | User types it |
| Camera Rental | Camera Rentals | Camera Rentals | Fixed value |

**🎯 Bottom Line**: You will ALWAYS know which service the customer wants because it's clearly labeled in the "Service" column!

---

**Created**: October 21, 2025  
**For**: Wild Horse Media Project  
**Purpose**: Understanding form service tracking  

🚀 Happy tracking!
