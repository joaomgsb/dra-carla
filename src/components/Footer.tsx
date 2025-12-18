import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">Dra. Carla Kassiane</h3>
          <p className="text-gray-400">
            Fisioterapia Integrativa e Regenerativa
          </p>
          <div className="pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center">
              © {new Date().getFullYear()} Dra. Carla Kassiane. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-600 text-center mt-2 flex items-center justify-center gap-1">
              Feito com <Heart className="w-3 h-3 text-red-500 fill-red-500" /> por{' '}
              <a 
                href="https://www.agenciadigitalprime.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors duration-300 font-medium"
              >
                Agência Digital Prime
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
