/*
  # Criar tabela de leads para formulário de contato

  1. Nova Tabela
    - `leads`
      - `id` (uuid, chave primária) - Identificador único do lead
      - `nome_completo` (text) - Nome completo do paciente
      - `email` (text) - E-mail para contato
      - `whatsapp` (text) - Número de WhatsApp
      - `motivo_contato` (text) - Motivo do contato (dor lombar, pós-cirurgia, etc.)
      - `created_at` (timestamptz) - Data e hora do cadastro
      
  2. Segurança
    - Habilitar RLS na tabela `leads`
    - Adicionar política para permitir INSERT público (formulário de contato aberto)
    - Adicionar política para permitir apenas usuários autenticados lerem os dados
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome_completo text NOT NULL,
  email text NOT NULL,
  whatsapp text NOT NULL,
  motivo_contato text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Permite que qualquer pessoa insira um lead (formulário público)
CREATE POLICY "Qualquer pessoa pode enviar formulário"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Apenas usuários autenticados podem visualizar os leads
CREATE POLICY "Apenas autenticados podem visualizar leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);