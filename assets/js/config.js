/* =========================================================
   TRELs-TECH Algorithms — SITE SETTINGS
   Edit ONLY this file to change contact details, links,
   products and prices. Everything on the site updates.
   ========================================================= */

window.TRELS = {
  brand: "TRELs-TECH Algorithms",

  // WhatsApp number: digits only, with country code, no + or spaces.
  // Example: "237670000000"
  whatsapp: "237682649893",
  whatsappDisplay: "+237 682 649 893",

  email: "trelstechalgorithms@gmail.com",
  location: "Buea, Cameroon · Serving clients worldwide",
  hours: "Mon – Sat, 8:00 – 19:00 (WAT). Our chatbot replies 24/7.",

  // Social links. Leave "" for any platform you don't have yet — it will be hidden.
  socials: {
    facebook:  "https://www.facebook.com/profile.php?id=61594734272372",
    instagram: "",   // e.g. "https://instagram.com/trelstech"
    linkedin:  "",   // e.g. "https://www.linkedin.com/company/trelstech"
    tiktok:    "https://www.tiktok.com/@trelstech4",
    youtube:   "",   // e.g. "https://www.youtube.com/@trelstech"
    x:         "",   // e.g. "https://x.com/trelstech"
    threads:   "",
    github:    "",
    whatsappChannel: ""
  },

  // Reviews shown publicly on the Reviews page.
  // Reviews submitted through the form arrive in your Netlify dashboard (Forms).
  // Copy the ones clients agree to publish here. Only add REAL client reviews.
  // Example:
  // { name: "Grace N.", business: "Salon owner, Buea", rating: 5, service: "WhatsApp Booking Bot",
  //   text: "Bookings now come in while I sleep.", date: "2026-10" },
  reviews: [],

  // Purchase page catalogue. Prices are STARTING prices in FCFA.
  // type: "website" or "chatbot"
  products: [
    { id: "W1", type: "website", name: "Restaurant & Café Website", for: "Restaurants, cafés, snack bars", price: 75000,
      features: ["Menu with photos & prices", "WhatsApp order button", "Google Maps location", "Opening hours & gallery"], icon: "utensils" },
    { id: "W2", type: "website", name: "Boutique & Online Shop", for: "Fashion, cosmetics, retail", price: 120000,
      features: ["Product catalogue with categories", "Order via WhatsApp or form", "Mobile Money payment details", "Instagram feed section"], icon: "bag" },
    { id: "W3", type: "website", name: "Church, NGO & Association Site", for: "Churches, NGOs, community groups", price: 90000,
      features: ["Mission, team & programmes", "Events calendar", "Donation / support section", "Photo & video gallery"], icon: "heart" },
    { id: "W4", type: "website", name: "School & Training Centre Site", for: "Schools, tutors, training centres", price: 110000,
      features: ["Programmes & fees pages", "Online admission form", "News & announcements", "Parent contact section"], icon: "cap" },
    { id: "W5", type: "website", name: "Professional Portfolio", for: "Teachers, doctors, lawyers, creatives", price: 50000,
      features: ["Bio, skills & CV download", "Projects or case gallery", "Booking / contact form", "Custom domain ready"], icon: "user" },
    { id: "W6", type: "website", name: "Real Estate & Rentals Site", for: "Agents, landlords, hotels", price: 130000,
      features: ["Property listings with filters", "Photo galleries per listing", "Viewing request form", "WhatsApp enquiry per property"], icon: "home" },

    { id: "C1", type: "chatbot", name: "Website FAQ Chatbot", for: "Any business with a website", price: 60000,
      features: ["Answers prices, hours, location", "Trained on your business info", "Hands over to you on WhatsApp", "English & French"], icon: "chat" },
    { id: "C2", type: "chatbot", name: "WhatsApp Booking Bot", for: "Salons, clinics, consultants", price: 100000,
      features: ["Takes appointments 24/7", "Sends reminders automatically", "Shows available time slots", "Daily booking summary to you"], icon: "calendar" },
    { id: "C3", type: "chatbot", name: "Restaurant Ordering Bot", for: "Restaurants & food delivery", price: 120000,
      features: ["Menu browsing in chat", "Collects order & address", "Mobile Money payment instructions", "Order alerts to your kitchen"], icon: "utensils" },
    { id: "C4", type: "chatbot", name: "School Admissions Assistant", for: "Schools & training centres", price: 90000,
      features: ["Answers parents' questions", "Collects applicant details", "Shares fees & requirements", "Follows up automatically"], icon: "cap" },
    { id: "C5", type: "chatbot", name: "Lead Capture & Sales Bot", for: "Real estate, services, sales teams", price: 100000,
      features: ["Qualifies new enquiries", "Saves leads to a Google Sheet", "Sends follow-up messages", "Works on Facebook & Instagram DMs"], icon: "target" },
    { id: "C6", type: "chatbot", name: "Customer Support Bot", for: "Shops, telecoms & repair services", price: 80000,
      features: ["Order & repair status answers", "Complaint logging", "Escalates urgent cases to you", "Weekly report of top questions"], icon: "headset" }
  ]
};
