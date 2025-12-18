import { Award, Users, Target } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function About() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5542999511238?text=Olá! Gostaria de agendar uma avaliação.', '_blank');
  };

  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2 leading-tight">
            Quem e a{' '}
            <span className="text-green-600">Dra. Carla Kassiane?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-green-200 to-amber-200 rounded-3xl shadow-2xl overflow-hidden">
              <img
                src="/images/foto2.jpeg"
                alt="Dra. Carla Kassiane em ambiente clinico"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                <div>
                  <p className="font-bold text-gray-900 text-sm sm:text-base">CREFITO</p>
                  <p className="text-xs sm:text-sm text-gray-600">Certificada</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify lg:text-left">
              Fisioterapeuta com ampla experiencia em reabilitacao e tecnicas regenerativas.
              Atua com foco no atendimento integrativo e personalizado, promovendo bem-estar,
              mobilidade e qualidade de vida.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify lg:text-left">
              Sua missao e ajudar cada paciente a voltar a ser protagonista da propria vida,
              com autonomia, leveza e movimento.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="font-bold text-gray-900">100+</p>
                <p className="text-sm text-gray-600">Pacientes Atendidos</p>
              </div>
              <div className="text-center p-6 bg-amber-50 rounded-xl">
                <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="font-bold text-gray-900">95%</p>
                <p className="text-sm text-gray-600">Taxa de Sucesso</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="font-bold text-gray-900">+5</p>
                <p className="text-sm text-gray-600">Anos de Experiência</p>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold px-6 sm:px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-base sm:text-lg"
              >
                <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                Agende pelo WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
