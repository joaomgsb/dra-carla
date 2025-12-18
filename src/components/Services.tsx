import { Heart, Sparkles, Activity, Stethoscope, Briefcase, Baby } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Tratamento de Dores Agudas e Crônicas',
      description: 'Foco em dores musculares, articulares, hérnias de disco, artrose e dores na coluna. O tratamento vai além do sintoma: atua na origem da dor para devolver sua qualidade de vida.'
    },
    {
      icon: Sparkles,
      title: 'Fisioterapia Integrativa',
      description: 'Combinação de terapias manuais, neurais e exercícios específicos que aceleram a recuperação e promovem equilíbrio físico e emocional.'
    },
    {
      icon: Activity,
      title: 'Fisioterapia Regenerativa (PRP, PRF e Plasma Gel)',
      description: 'Técnicas avançadas que estimulam a regeneração tecidual e a cicatrização, reduzindo inflamações e aliviando dores articulares.'
    },
    {
      icon: Stethoscope,
      title: 'Reabilitação Traumato-Ortopédica',
      description: 'Recuperação pós-lesão ou cirurgia com programas individualizados de reabilitação.'
    },
    {
      icon: Briefcase,
      title: 'Fisioterapia Preventiva do Trabalho (Ergonomia)',
      description: 'Avaliações e programas ergonômicos para prevenir lesões e melhorar a produtividade em empresas.'
    },
    {
      icon: Baby,
      title: 'Fisioterapia Pediátrica e Avaliação de DNPM',
      description: 'Acompanhamento do desenvolvimento infantil com protocolos seguros e eficazes.'
    }
  ];

  const handleCTAClick = () => {
    const formSection = document.getElementById('formulario');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2 leading-tight">
            Especialidades para cada{' '}
            <span className="text-green-600">necessidade</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-100 to-amber-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify lg:text-left">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center px-4">
          <button
            onClick={handleCTAClick}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold px-6 sm:px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg"
          >
            Descubra o tratamento ideal
          </button>
        </div>
      </div>
    </section>
  );
}
