import { Calendar } from 'lucide-react';

export default function Hero() {
  const handleCTAClick = () => {
    const formSection = document.getElementById('formulario');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-amber-50 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight text-center lg:text-left">
              Recupere seus movimentos,{' '}
              <span className="text-green-600">viva sem dor</span> e com qualidade
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed text-justify lg:text-left">
              Fisioterapia especializada com resultado para voce voltar a ser protagonista da sua vida!
            </p>
            <p className="text-base sm:text-lg text-gray-700 text-justify lg:text-left">
              Protocolos exclusivos que tratam a causa da dor e aceleram sua recuperacao com tecnicas integrativas e regenerativas.
            </p>
            <button
              onClick={handleCTAClick}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold px-6 sm:px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-base sm:text-lg"
            >
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              Agendar Avaliacao Gratuita
            </button>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">CREFITO</p>
                  <p className="text-sm text-gray-600">Regularizado</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">+</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Anos de</p>
                  <p className="text-sm text-gray-600">Experiência</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xl">★</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">100%</p>
                  <p className="text-sm text-gray-600">Satisfação</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-green-200 to-amber-200 rounded-3xl shadow-2xl overflow-hidden">
              <img
                src="/images/foto1.jpeg"
                alt="Dra. Carla Kassiane - Fisioterapeuta"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl max-w-[200px] sm:max-w-xs">
              <p className="text-xs sm:text-sm text-gray-600 italic">
                "Minha missão é ajudar voce a voltar a ser protagonista da sua vida"
              </p>
              <p className="text-xs sm:text-sm font-semibold text-green-600 mt-2">
                - Dra. Carla Kassiane
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
