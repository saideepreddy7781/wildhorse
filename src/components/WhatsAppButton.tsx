// src/components/WhatsAppButton.tsx

const WhatsAppButton = () => {
  const whatsappNumber = '9740944666';
  const message = encodeURIComponent("Hi Wildhorse Media! I'm interested in learning more about your services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      // Increased padding (p-5), adjusted position (bottom-8, right-8)
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG */}
      {/* Increased icon size (h-8 w-8) and set fill="white" */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="h-8 w-8" // Increased size
        fill="white" // Explicitly set fill to white
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .9c43.9 0 86.4 15.3 119 45.4 32.5 30.1 49.8 71.9 49.8 115.8 0 98.8-80.3 179.1-179.1 179.1-34 0-67.1-9.7-96.8-27.7l-6.8-4-69.6 18.3 18.7-68 .3-6.9c-19.1-30.8-30.1-66.6-30.1-104.2 0-98.8 80.3-179.1 179.1-179.1zm127.3 179.1c-3.1-15.6-18.7-27.7-38.2-32.1-19.5-4.4-44.1-6.8-47.2-7.6-3.1-.8-8.5-.8-12.8 4.4-4.3 5.2-16.1 19.5-19.7 23.6-3.6 4.1-7.2 4.9-11.1 1.6-3.9-3.3-16.4-6-32.9-20.1-12.9-11.1-21.7-24.8-24.8-29.9-3.1-5.2-.4-8 1.2-10.4 1.6-2.4 3.6-4.1 5.2-5.7 1.6-1.6 3.1-3.6 4.4-6 1.3-2.4.8-4.9-.4-6.8-1.2-1.9-11.1-26.6-15.2-36.1-4.1-9.4-8.1-8-11.1-8.1-3-.1-6.8-.1-10.4-.1-3.6 0-9.4 1.2-14.3 6C-1.8 198.8 3.9 214.4 3.9 231.7c0 17.3 12.8 33.3 14.3 35.1 1.6 1.8 28.1 43.1 68.3 61l40.2 14.8c13.1 4.9 24.8 7.8 35.1 10 10.3 2.2 19.8 1.8 27.2 .6 7.9-1.2 24.8-10 28.4-19.5 3.6-9.4 3.6-17.6 2.4-19.5-1.2-1.9-4.3-3.1-9.4-5.2z"/>
      </svg>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-poppins text-sm">
        Chat with us!
      </span>
    </a>
  );
};

export default WhatsAppButton;