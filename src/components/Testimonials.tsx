import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria',
      age: '58 anos',
      text: 'Após anos com dor no joelho, finalmente voltei a caminhar sem limitações. Recomendo demais a Dra. Carla!',
      rating: 5
    },
    {
      name: 'João',
      age: '42 anos',
      text: 'Senti melhora logo nas primeiras sessões. Atendimento humano e eficiente!',
      rating: 5
    },
    {
      name: 'Patrícia',
      age: '35 anos',
      text: 'A Dra. Carla mudou minha rotina. Hoje trabalho sem dor e com disposição.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2 leading-tight">
            Historias reais de quem voltou a{' '}
            <span className="text-green-600">viver sem dor</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 px-2">
            Veja o que nossos pacientes dizem sobre seus resultados
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-4 sm:mb-6">
                <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-green-200" />
              </div>
              <div className="flex mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 italic text-justify">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-200 to-amber-200 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold text-base sm:text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{testimonial.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Avaliações no Google
            </h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-3xl font-bold text-gray-900">5.0</span>
            </div>
            <p className="text-gray-600 text-lg">
              Baseado em dezenas de avaliações verificadas de pacientes reais
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
