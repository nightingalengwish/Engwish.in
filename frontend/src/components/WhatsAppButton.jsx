import { PHONE_RAW } from "../data/courses";

export const WhatsAppButton = () => (
  <a
    data-testid="whatsapp-button"
    href={`https://wa.me/${PHONE_RAW}?text=Hi%20Engwish%20Skills%20Academy%2C%20I%20want%20to%20know%20more%20about%20your%20courses.`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-300 animate-pulse-slow"
    aria-label="Chat on WhatsApp"
  >
    <svg viewBox="0 0 32 32" className="h-8 w-8 fill-white">
      <path d="M16 .8C7.6.8.8 7.6.8 16c0 2.7.7 5.3 2 7.6L.8 31.2l7.8-2c2.2 1.2 4.7 1.9 7.4 1.9 8.4 0 15.2-6.8 15.2-15.2S24.4.8 16 .8zm0 27.7c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.6 1.2 1.2-4.5-.3-.5c-1.3-2-2-4.4-2-6.8C3.1 8.9 8.9 3.1 16 3.1S28.9 8.9 28.9 16 23.1 28.5 16 28.5zm7.1-9.4c-.4-.2-2.3-1.1-2.6-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.3-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6.1-.3 0-.5-.1-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.7c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.3 2.8 4.3 6.8 6 .9.4 1.7.7 2.2.8.9.3 1.8.3 2.5.2.8-.1 2.3-.9 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.1-.3-.2-.8-.5z" />
    </svg>
  </a>
);
