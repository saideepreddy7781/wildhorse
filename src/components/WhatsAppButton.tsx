// src/components/WhatsAppButton.tsx

import wpImg from "@/assets/wp-img.webp";

const WhatsAppButton = () => {
  const whatsappNumber = '9740944666';
  const message = encodeURIComponent("Hi Wildhorse Media! I'm interested in learning more about your services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-50 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
      style={{ boxShadow: "0 8px 40px 0 rgba(37, 211, 102, 0.44)" }} // subtle green drop shadow
    >
      <img
        src={wpImg}
        alt="WhatsApp"
        className="h-20 w-20 object-contain drop-shadow-lg"
        style={{ filter: "drop-shadow(0 4px 20px rgba(37,211,102,0.45))" }}
      />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-poppins text-sm">
        Chat with us!
      </span>
    </a>
  );
};

export default WhatsAppButton;
