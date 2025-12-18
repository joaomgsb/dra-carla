import { useState, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const getBasePath = (src: string) => src.replace(/\.(png|jpe?g)$/i, '');
  const getDesktopSrc = (src: string) => {
    // Desktop: use .png only for images that actually have a .png variant.
    // We know escritorio1/2/3 have both .jpeg and .png. Others (ex: foto3.jpg) may not.
    if (/\.png$/i.test(src)) return src;
    if (/\/images\/escritorio/i.test(src)) return `${getBasePath(src)}.png`;
    return src; // fallback to original extension (jpg/jpeg)
  };

  const getMobileSrc = (src: string) => {
    // Mobile: prefer .jpeg to reduce payload when a PNG exists.
    // Exceção: no mobile, o slide da foto3 deve usar a foto1.
    if (/\/images\/foto3\.jpg$/i.test(src)) return '/images/foto1.jpeg';
    if (/\.png$/i.test(src)) return `${getBasePath(src)}.jpeg`;
    return src; // keep jpg/jpeg
  };

  const slides = [
    {
      image: '/images/foto3.jpg',
      title: 'Atendimento Personalizado e Humanizado',
      subtitle: 'Cuidado especial em cada etapa do seu tratamento',
      text: 'Experiência e dedicação para proporcionar o melhor resultado para sua saúde.',
      position: 'object-[center_25%]' // Ajuste fino para focar no rosto
    },
    {
      image: '/images/escritorio1.png',
      title: 'Recupere seus movimentos, viva sem dor e com qualidade',
      subtitle: 'Fisioterapia especializada com resultado para você voltar a ser protagonista da sua vida!',
      text: 'Protocolos exclusivos que tratam a causa da dor e aceleram sua recuperação com técnicas integrativas e regenerativas.',
      position: 'object-center'
    },
    {
      image: '/images/escritorio2.png',
      title: 'Tecnologia e Conforto para sua Reabilitação',
      subtitle: 'Ambiente preparado para oferecer o melhor tratamento',
      text: 'Espaço moderno e acolhedor pensado no seu bem-estar.',
      position: 'object-center'
    },
    {
      image: '/images/escritorio3.png',
      title: 'Tratamentos Inovadores',
      subtitle: 'As melhores técnicas da fisioterapia ao seu alcance',
      text: 'Métodos comprovados para garantir sua recuperação plena.',
      position: 'object-center'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleCTAClick = () => {
    const formSection = document.getElementById('formulario');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />
          <picture>
            {/* Desktop (sm+) usa PNG */}
            <source media="(min-width: 640px)" srcSet={getDesktopSrc(slide.image)} />
            {/* Mobile usa JPEG/JPG */}
            <img
              src={getMobileSrc(slide.image)}
              alt={`Slide ${index + 1}`}
              className={`w-full h-full object-cover ${slide.position}`}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </picture>
          
          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full text-center text-white space-y-6 sm:space-y-8 animate-fade-in-up">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                {slide.title.includes('viva sem dor') ? (
                  <>
                    Recupere seus movimentos,{' '}
                    <span className="text-green-400">viva sem dor</span> e com qualidade
                  </>
                ) : (
                  slide.title
                )}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-light text-gray-100 drop-shadow-md">
                {slide.subtitle}
              </p>
              <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto hidden sm:block">
                {slide.text}
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleCTAClick}
                  className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-base sm:text-lg transform hover:scale-105 border-2 border-transparent hover:border-green-400"
                >
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                  Agendar Avaliação Gratuita
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all text-white border border-white/30 hidden sm:block"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all text-white border border-white/30 hidden sm:block"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-green-500 w-8' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
      
      {/* Bottom Gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20"></div>
    </section>
  );
}
