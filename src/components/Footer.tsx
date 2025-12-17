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
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-green-500 fill-green-500" />
            <span>para seus pacientes</span>
          </div>
          <p className="text-xs text-gray-500 pt-4">
            © {new Date().getFullYear()} Dra. Carla Kassiane. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
