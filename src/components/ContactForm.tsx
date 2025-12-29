import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome_completo: '',
    email: '',
    whatsapp: '',
    motivo_contato: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const motivoMap: Record<string, string> = {
    "dor_lombar": "Dor Lombar",
    "dor_joelho": "Dor no Joelho",
    "pos_cirurgia": "Pós-Cirurgia",
    "ergonomia": "Ergonomia / Empresas",
    "pediatria": "Fisioterapia Pediátrica",
    "regenerativa": "Fisioterapia Regenerativa",
    "outro": "Outro"
  };

  const formatMotivo = (codigo: string): string => {
    return motivoMap[codigo] || codigo;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Salvar no Supabase
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([formData]);

      if (supabaseError) throw supabaseError;

      // Preparar dados para EmailJS
      const motivoFormatado = formatMotivo(formData.motivo_contato);
      const whatsappLink = formData.whatsapp.replace(/\D/g, '');
      const timestamp = new Date().toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      // Enviar email via EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Configuração do EmailJS não encontrada. Verifique as variáveis de ambiente.');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.nome_completo,
          nome_completo: formData.nome_completo,
          email: formData.email,
          whatsapp: formData.whatsapp,
          whatsapp_link: whatsappLink,
          motivo_contato: motivoFormatado,
          timestamp: timestamp,
          origem: 'Site'
        },
        publicKey
      );

      setIsSuccess(true);
      setFormData({
        nome_completo: '',
        email: '',
        whatsapp: '',
        motivo_contato: ''
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError('Erro ao enviar formulário. Tente novamente.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="formulario" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-2xl text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Formulario Enviado com Sucesso!
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 text-justify sm:text-center">
              Recebemos seu pedido! Nossa equipe entrara em contato em breve para confirmar seu horario.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Enviar outro formulario
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="formulario" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-2 leading-tight">
            Agende sua{' '}
            <span className="text-green-600">Avaliacao Gratuita</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 px-2">
            Preencha o formulario e nossa equipe entrara em contato
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl space-y-5 sm:space-y-6">
          <div>
            <label htmlFor="nome_completo" className="block text-sm font-semibold text-gray-700 mb-2">
              Nome Completo *
            </label>
            <input
              type="text"
              id="nome_completo"
              name="nome_completo"
              value={formData.nome_completo}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300"
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              E-mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
              WhatsApp *
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300"
              placeholder="(42) 99999-9999"
            />
          </div>

          <div>
            <label htmlFor="motivo_contato" className="block text-sm font-semibold text-gray-700 mb-2">
              Motivo do Contato *
            </label>
            <select
              id="motivo_contato"
              name="motivo_contato"
              value={formData.motivo_contato}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300"
            >
              <option value="">Selecione uma opção</option>
              <option value="dor_lombar">Dor Lombar</option>
              <option value="dor_joelho">Dor no Joelho</option>
              <option value="pos_cirurgia">Pós-Cirurgia</option>
              <option value="ergonomia">Ergonomia / Empresas</option>
              <option value="pediatria">Fisioterapia Pediátrica</option>
              <option value="regenerativa">Fisioterapia Regenerativa</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Marque sua consulta
              </>
            )}
          </button>

          <p className="text-sm text-gray-600 text-center">
            Ao enviar, você concorda em receber contato da nossa equipe
          </p>
        </form>
      </div>
    </section>
  );
}
