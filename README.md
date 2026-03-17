# 🎯 Trilha do Conhecimento — Quiz Interativo GDTD

Quiz gamificado para o poster SIDARE 2026 sobre capacitação em Ciência e Gestão de Dados para RR-EE e EXP.

## Como usar

### 1. Deploy no GitHub Pages

```bash
git init
git add index.html style.css app.js README.md
git commit -m "Quiz Trilha do Conhecimento"
git remote add origin https://github.com/SEU_USUARIO/GameTrilha.git
git push -u origin main
```

No GitHub: Settings → Pages → Source: main branch → Save.

### 2. Configurar Supabase (High Scores online)

1. Crie uma conta em [supabase.com](https://supabase.com)
2. Crie um novo projeto
3. No SQL Editor, execute:

```sql
CREATE TABLE scores (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    score INTEGER NOT NULL DEFAULT 0,
    correct INTEGER NOT NULL DEFAULT 0,
    total INTEGER NOT NULL DEFAULT 10,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar acesso público (anon) para leitura e escrita
ALTER TABLE scores ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read" ON scores
    FOR SELECT USING (true);

CREATE POLICY "Allow public insert" ON scores
    FOR INSERT WITH CHECK (true);

-- Índice para ranking
CREATE INDEX idx_scores_ranking ON scores (score DESC);
```

4. Em Project Settings → API, copie:
   - **Project URL** → cole em `SUPABASE_URL` no `app.js`
   - **anon public key** → cole em `SUPABASE_ANON_KEY` no `app.js`

### 3. Sem Supabase

O quiz funciona perfeitamente sem Supabase, usando `localStorage` como fallback para o ranking local.

## QR Code para o Poster

Gere um QR Code apontando para `https://SEU_USUARIO.github.io/GameTrilha/` e inclua no poster.
