import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/5542999511238?text=Olá! Gostaria de agendar uma avaliação.', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale Conosco pelo WhatsApp
      </span>
    </button>
  );
}
