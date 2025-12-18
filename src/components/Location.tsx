import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

export default function Location() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua Rosa Mildemberg Mayer, 253 – Vila Mayer, Palmeira/PR',
      link: 'https://maps.google.com/?q=Rua+Rosa+Mildemberg+Mayer+253+Palmeira+PR'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '(42) 99927-8081',
      link: 'https://wa.me/5542999278081'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'factor.ergonomia@gmail.com',
      link: 'mailto:factor.ergonomia@gmail.com'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Segunda a sexta, das 8h às 18h',
      link: null
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@carla_ksn',
      link: 'https://instagram.com/carla_ksn'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2 leading-tight">
            Sua saude{' '}
            <span className="text-green-600">mais perto de você!</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 px-2">
            Visite nosso consultório em Palmeira/PR
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4 sm:space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = info.link ? (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-green-600 transition-colors duration-300 break-words"
                >
                  {info.content}
                </a>
              ) : (
                <span className="text-gray-700">{info.content}</span>
              );

              return (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-r from-green-50 to-amber-50 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{info.title}</h3>
                    <div className="text-sm sm:text-base lg:text-lg break-words">{content}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative h-[280px] sm:h-[350px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4368.808462193814!2d-50.01388867775162!3d-25.407654473998583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dd57e55b7a83e3%3A0xf32f306622a1a7f5!2sR.%20Rosa%20Mildemberg%20Mayer%2C%20253%20-%20Vila%20Mayer%2C%20Palmeira%20-%20PR%2C%2084130-000!5e1!3m2!1spt-BR!2sbr!4v1765928487622!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localizacao da Clinica"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
