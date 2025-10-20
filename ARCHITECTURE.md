# 🏗️ Architecture Diagram

## System Architecture: Wild Horse Media Forms

```
┌─────────────────────────────────────────────────────────────────────┐
│                         CLIENT SIDE (React/TypeScript)              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐ │
│  │  ContactSection  │  │   BookingForm    │  │ CameraRentals    │ │
│  │      .tsx        │  │      .tsx        │  │  Section.tsx     │ │
│  │                  │  │                  │  │                  │ │
│  │  [Name Input]    │  │  [Name Input]    │  │  [Name Input]    │ │
│  │  [Mobile Input]  │  │  [Mobile Input]  │  │  [Mobile Input]  │ │
│  │  [Email Input]   │  │  [Email Input]   │  │  [Email Input]   │ │
│  │  [Service Input] │  │  Service: Wedding│  │  Service: Rentals│ │
│  │  [City Input]    │  │  [City Input]    │  │  [City Input]    │ │
│  │  [Message Input] │  │  [Message Input] │  │  [Message Input] │ │
│  │  [Submit Button] │  │  [Submit Button] │  │  [Submit Button] │ │
│  └────────┬─────────┘  └────────┬─────────┘  └────────┬─────────┘ │
│           │                     │                     │             │
│           └─────────────────────┼─────────────────────┘             │
│                                 │                                   │
│                        ┌────────▼────────┐                         │
│                        │   formApi.ts    │                         │
│                        │                 │                         │
│                        │  submitContact  │                         │
│                        │  submitBooking  │                         │
│                        │  submitRental   │                         │
│                        └────────┬────────┘                         │
└─────────────────────────────────┼───────────────────────────────────┘
                                  │
                    fetch(POST, JSON)
                                  │
                    ┌─────────────▼─────────────┐
                    │  Environment Variable     │
                    │  VITE_GOOGLE_APPS_       │
                    │  SCRIPT_URL              │
                    └─────────────┬─────────────┘
                                  │
                                  │ HTTPS
                                  │
┌─────────────────────────────────▼───────────────────────────────────┐
│                    GOOGLE APPS SCRIPT (Backend)                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  doPost(e) - Main Entry Point                                │  │
│  │  - Parse JSON from request body                              │  │
│  │  - Check formType                                            │  │
│  │  - Route to appropriate handler                              │  │
│  └─────────────┬────────────────────────────────────────────────┘  │
│                │                                                    │
│       ┌────────┴────────┬─────────────────────┐                   │
│       │                 │                     │                   │
│  ┌────▼────────┐  ┌────▼────────┐  ┌────────▼──────┐            │
│  │   Contact   │  │   Service   │  │    Rental     │            │
│  │   Handler   │  │   Handler   │  │    Handler    │            │
│  │             │  │             │  │               │            │
│  │ • Validate  │  │ • Validate  │  │ • Validate    │            │
│  │ • Format    │  │ • Format    │  │ • Format      │            │
│  │ • Store     │  │ • Store     │  │ • Store       │            │
│  │ • Notify    │  │ • Notify    │  │ • Notify      │            │
│  └────┬────────┘  └────┬────────┘  └────────┬──────┘            │
│       │                │                     │                   │
│       └────────┬───────┴─────────────────────┘                   │
│                │                                                  │
└────────────────┼──────────────────────────────────────────────────┘
                 │
        ┌────────┴────────┐
        │                 │
┌───────▼────────┐  ┌────▼──────────┐
│ GOOGLE SHEETS  │  │  EMAIL (SMTP) │
│                │  │               │
│ Sheet 1:       │  │ To:           │
│ Contact        │  │ teamwild      │
│ Inquiries      │  │ horse@        │
│ [Timestamp]    │  │ gmail.com     │
│ [Name]         │  │               │
│ [Mobile]       │  │ Subject:      │
│ [Email]        │  │ New Contact   │
│ [Service]      │  │ Inquiry -     │
│ [City]         │  │ {name}        │
│ [Message]      │  │               │
│                │  │ Body:         │
│ Sheet 2:       │  │ [Formatted    │
│ Service        │  │  details]     │
│ Bookings       │  │               │
│ [...]          │  └───────────────┘
│                │
│ Sheet 3:       │
│ Camera         │
│ Rentals        │
│ [...]          │
│                │
└────────────────┘

LEGEND:
━━━━  Data Flow
┌───┐ Component/Module
│   │ Container
```

---

## Data Flow Sequence

### **1. User Fills Form**
```
User → Fills fields → Clicks Submit
```

### **2. Form Validation**
```
Component → Validates required fields → Disables button
```

### **3. API Call**
```typescript
Component → formApi.submitContactForm({
  name: "John Doe",
  mobile: "+91 98765 43210",
  email: "john@example.com",
  service: "Wedding",
  city: "Bangalore",
  message: "Looking for photographer..."
})
```

### **4. Backend Processing**
```
Apps Script → doPost() → Parse JSON → Route by formType
             → contactHandler()
             → Prepare data
             → Write to sheet
             → Send email
             → Return success
```

### **5. Frontend Response**
```
Component → Receives success → Shows toast → Resets form
```

---

## File Dependencies

```
ContactSection.tsx
  ↓ imports
formApi.ts
  ↓ uses
import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL
  ↓ from
.env
  ↓ loaded by
vite.config.ts
  ↓ with types from
vite-env.d.ts
```

---

## API Request/Response

### **Request:**
```http
POST https://script.google.com/macros/s/{SCRIPT_ID}/exec
Content-Type: application/json

{
  "formType": "contact",
  "name": "John Doe",
  "mobile": "+91 98765 43210",
  "email": "john@example.com",
  "service": "Wedding Photography",
  "city": "Bangalore",
  "message": "Need photographer..."
}
```

### **Response:**
```json
{
  "success": true,
  "message": "Contact inquiry submitted successfully",
  "formType": "contact"
}
```

---

## Error Handling Flow

```
User Submits Form
       ↓
API Call (fetch)
       ↓
  ┌────┴────┐
  │         │
Success   Error
  │         │
  ↓         ↓
Toast     Toast
Success   Error
  ↓         ↓
Reset     Keep
Form      Form
```

---

## Sheet Structure

```
┌─────────────────────────────────────────────────────────────┐
│  SPREADSHEET: Wild Horse Media - Form Submissions          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Sheet Tab 1: "Contact Inquiries"                          │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Timestamp │ Name │ Mobile │ Email │ Service │ ... │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │ 10/20... │ John │ +91... │ john@ │ Wedding │ ... │  │
│  │ 10/20... │ Jane │ +91... │ jane@ │ Maternity...│  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  Sheet Tab 2: "Service Bookings"                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Timestamp │ Name │ Mobile │ Email │ Service │ ... │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │ 10/20... │ Bob  │ +91... │ bob@  │ Wedding │ ... │  │
│  │ 10/20... │ Mary │ +91... │ mary@ │ Baby... │ ... │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  Sheet Tab 3: "Camera Rentals"                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Timestamp │ Name │ Mobile │ Email │ Service │ ... │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │ 10/20... │ Mike │ +91... │ mike@ │ Camera..│ ... │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Hierarchy

```
App.tsx
  └── BrowserRouter
      └── Routes
          ├── Route: /
          │   └── Index.tsx
          │       ├── Header
          │       ├── HeroSection
          │       ├── ContactSection ──────┐ Form 1
          │       ├── ServicesSection      │
          │       ├── YouTubeGallery       │
          │       ├── PortfolioSection     │
          │       ├── CameraRentalsSection ┤ Form 3
          │       ├── AboutSection         │
          │       ├── TestimonialsSection  │
          │       ├── FaqSection           │
          │       ├── Footer               │
          │       └── WhatsAppButton       │
          │                                │
          └── Route: /service/:slug        │
              └── ServiceBookingPage       │
                  ├── Header               │
                  ├── BookingForm ─────────┘ Form 2
                  └── Footer
```

---

## Environment Configuration

```
Development:
  .env (local) ─────► loaded by Vite
                      ↓
                 Injects into code as
                 import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL
                      ↓
                 Used by formApi.ts

Production:
  Hosting Platform ─► Environment Variable
  (Vercel/Netlify)    VITE_GOOGLE_APPS_SCRIPT_URL
                      ↓
                 Build time injection
                      ↓
                 Used by formApi.ts
```

---

## Security Model

```
┌────────────────────────────────────────────────┐
│  Frontend (Public)                             │
│  - No API keys in code                         │
│  - Only knows the deployment URL               │
│  - CORS handled by no-cors mode                │
└─────────────┬──────────────────────────────────┘
              │
              │ HTTPS (encrypted)
              │
┌─────────────▼──────────────────────────────────┐
│  Google Apps Script (Google Cloud)             │
│  - Runs with your Google account permissions   │
│  - Can access your spreadsheets                │
│  - Can send emails from your account           │
│  - Deployed with "Anyone" can execute          │
└─────────────┬──────────────────────────────────┘
              │
    ┌─────────┴─────────┐
    │                   │
┌───▼──────────┐  ┌────▼─────────┐
│ Sheets API   │  │  Gmail API   │
│ (restricted) │  │ (restricted) │
└──────────────┘  └──────────────┘
```

---

## Scaling Considerations

```
Current Setup:
  3 Forms → 1 Apps Script → 1 Spreadsheet

Future Scaling Options:

Option A: More Forms
  5 Forms → 1 Apps Script → 1 Spreadsheet (5 sheets)
  
Option B: Database
  X Forms → 1 Apps Script → External DB (PostgreSQL/MySQL)
  
Option C: Microservices
  X Forms → Multiple APIs → Multiple Services
  
Current setup easily handles:
  ✅ 100-1000 submissions/day
  ✅ Multiple form types
  ✅ Complex validation
  ✅ Email notifications
```

---

This architecture provides:
✅ **Separation of concerns**
✅ **Type safety**
✅ **Easy maintenance**
✅ **Scalability**
✅ **Professional implementation**
