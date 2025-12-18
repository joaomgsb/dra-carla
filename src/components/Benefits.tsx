import { CheckCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Benefits() {
  const benefits = [
    'Tratamentos individualizados com protocolos exclusivos',
    'Recuperação rápida e duradoura',
    'Técnicas integradas que tratam a causa da dor',
    'Atendimento humanizado, acolhedor e sem pressa',
    'Resultados reais e duradouros'
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/5542999511238?text=Olá! Gostaria de agendar uma avaliação.', '_blank');
  };

  return (
    <section id="beneficios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight px-2">
            Por que escolher a Fisioterapia Integrativa da{' '}
            <span className="text-green-600">Dra. Carla?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 group">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify lg:text-left">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-green-50 to-amber-50 p-8 rounded-2xl shadow-xl">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Fale Diretamente com a Dra. Carla
                </h3>
              </div>
              <p className="text-gray-700 text-lg">
                Tire suas dúvidas e agende sua avaliação gratuita pelo WhatsApp agora mesmo.
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Falar no WhatsApp Agora
              </button>
              <p className="text-sm text-gray-600 text-center">
                Resposta rápida • Atendimento humanizado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
