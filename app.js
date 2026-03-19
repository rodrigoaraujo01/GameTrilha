/* ============================================
   TRILHA DO CONHECIMENTO — Quiz GDTD
   Application Logic
   ============================================ */

// ==========================================
// CONFIGURATION
// ==========================================
const SUPABASE_URL = 'https://uhzhexuxosvxkwqypywb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoemhleHV4b3N2eGt3cXlweXdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3NzM2MjIsImV4cCI6MjA4OTM0OTYyMn0.omeGmKUqpSwD_7n6544eQQGEEmzUgnvISBJI7qzcH4M';
const QUESTIONS_PER_GAME = 10;
const TIME_PER_QUESTION = 15; // seconds
const MAX_SCORE_PER_QUESTION = 1000;

// ==========================================
// QUESTION BANK  (50 questions — 10 drawn randomly per round)
// correct: 0 means the first option is correct BEFORE shuffling.
// prepareQuestionForRound() shuffles positions each round.
// ==========================================
const ALL_QUESTIONS = [
    // ── SEÇÃO 1 · INTRODUÇÃO ──────────────────────────────────────────────────
    {
        question: "Segundo o poster, quais habilidades eram raras na comunidade de RR-EE em 2020?",
        options: [
            "Programação e ciência de dados",
            "Interpretação sísmica e petrofísica",
            "Perfuração e completação",
            "Geomecânica e simulação"
        ],
        correct: 0,
        explanation: "A introdução afirma que, em 2020, programação e ciência de dados eram habilidades raras na comunidade de RR-EE."
    },
    // ── SEÇÃO 2 · TRILHAS DE CONHECIMENTO ────────────────────────────────────
    {
        question: "Quantos profissionais já foram capacitados pela GDTD, segundo o poster?",
        options: [
            "Mais de 300 profissionais",
            "Exatamente 100 profissionais",
            "Mais de 1.000 profissionais",
            "Menos de 50 profissionais"
        ],
        correct: 0,
        explanation: "A introdução afirma que hoje mais de 300 profissionais já foram capacitados pela GDTD."
    },
    {
        question: "Quantas trilhas de conhecimento foram construídas para capacitar a comunidade?",
        options: [
            "5 trilhas",
            "3 trilhas",
            "7 trilhas",
            "10 trilhas"
        ],
        correct: 0,
        explanation: "A introdução informa que foram construídas 5 trilhas de conhecimento."
    },
    {
        question: "Como as trilhas de conhecimento foram redesenhadas, segundo o poster?",
        options: [
            "Com múltiplos pontos de entrada e saída",
            "Com sequência obrigatória única para todos",
            "Focadas somente em formação presencial",
            "Restritas a especialistas seniores"
        ],
        correct: 0,
        explanation: "O poster destaca que as trilhas foram reconstruídas e modernizadas com múltiplos pontos de entrada e saída."
    },
    {
        question: "Por que o poster enfatiza múltiplos pontos de entrada e saída nas trilhas?",
        options: [
            "Para atender de forma individualizada as necessidades de cada profissional",
            "Para eliminar cursos introdutórios",
            "Para restringir o acesso aos especialistas em dados",
            "Para substituir mentorias por certificações"
        ],
        correct: 0,
        explanation: "A seção 2 afirma que a reconstrução das trilhas busca atender de forma individualizada as necessidades de cada profissional."
    },
    {
        question: "Qual é o papel da Trilha Básica Gestão de Dados no ecossistema?",
        options: [
            "Capacitação fundamental em governança, qualidade e cultura de dados para todos",
            "Formar apenas cientistas de dados avançados",
            "Preparar exclusivamente para certificações internacionais",
            "Treinar somente quem já domina Python"
        ],
        correct: 0,
        explanation: "A trilha básica é descrita como a capacitação fundamental em governança, qualidade e cultura de dados para todos os profissionais de RR-EE e EXP."
    },
    {
        question: "Na Trilha Básica, a formação vai desde qual tema até qual tema mais amplo?",
        options: [
            "De storytelling com dados até transformação digital",
            "De geologia básica até perfuração direcional",
            "De petrofísica até simulação numérica",
            "De reservatórios até gestão financeira"
        ],
        correct: 0,
        explanation: "O poster diz que a trilha básica aborda desde storytelling com dados até transformação digital."
    },
    {
        question: "Além de cultura de dados, quais outros temas compõem a base da Trilha Básica?",
        options: [
            "Governança e qualidade de dados",
            "Machine Learning e Deep Learning",
            "Certificações DAMA e PPDM",
            "Física de reservatórios e petrofísica"
        ],
        correct: 0,
        explanation: "A descrição da trilha básica fala em governança, qualidade e cultura de dados."
    },
    {
        question: "Qual é o foco da Trilha Intermediária Gestão e Curadoria?",
        options: [
            "Gestão, saneamento e arquitetura de dados de geociências e geoengenharia",
            "Análise de dados com Power BI e Python",
            "Formação em modelos de linguagem (LLMs)",
            "Especialização acadêmica em universidades externas"
        ],
        correct: 0,
        explanation: "A trilha intermediária é descrita como voltada à gestão, saneamento e arquitetura de dados de geociências e geoengenharia."
    },
    {
        question: "Que tipo de profissional a Trilha Intermediária Gestão e Curadoria busca desenvolver?",
        options: [
            "Guardião da qualidade e integridade dos dados",
            "Especialista em perfuração direcional",
            "Gerente de projetos de IA generativa",
            "Instrutor exclusivo de ciência de dados"
        ],
        correct: 0,
        explanation: "O poster afirma que essa trilha prepara o profissional para atuar como guardião da qualidade e integridade dos dados."
    },
    {
        question: "Qual trilha combina análise e visualização de dados com Python e Power BI?",
        options: [
            "Trilha Analista de Dados",
            "Trilha Básica Gestão de Dados",
            "Trilha Avançada Gestão de Dados",
            "Trilha Intermediária Gestão e Curadoria"
        ],
        correct: 0,
        explanation: "A Trilha Analista de Dados combina programação, análise e visualização usando Python e Power BI."
    },
    {
        question: "Qual é o resultado esperado da Trilha Analista de Dados no contexto de E&P?",
        options: [
            "Transformar dados em informações acionáveis",
            "Substituir a interpretação humana por dashboards",
            "Eliminar a necessidade de curadoria de dados",
            "Focar apenas em apresentações executivas"
        ],
        correct: 0,
        explanation: "A trilha analista é apresentada como um caminho para transformar dados em informações acionáveis no contexto de E&P."
    },
    {
        question: "Qual trilha aprofunda Machine Learning, Deep Learning e modelos de linguagem (LLMs)?",
        options: [
            "Trilha Cientista de Dados",
            "Trilha Básica Gestão de Dados",
            "Trilha Analista de Dados",
            "Trilha Avançada Gestão de Dados"
        ],
        correct: 0,
        explanation: "A Trilha Cientista de Dados é descrita como a capacitação avançada em ML, DL e LLMs."
    },
    {
        question: "Aos quais desafios se aplicam as soluções desenvolvidas na Trilha Cientista de Dados?",
        options: [
            "Desafios de reservatórios e engenharia de petróleo",
            "Apenas à comunicação corporativa",
            "Somente à logística de materiais",
            "Exclusivamente à gestão financeira"
        ],
        correct: 0,
        explanation: "O poster associa a Trilha Cientista de Dados aos desafios de reservatórios e engenharia de petróleo."
    },
    {
        question: "Qual trilha representa o caminho de especialização acadêmica e certificações em gestão de dados?",
        options: [
            "Trilha Avançada Gestão de Dados",
            "Trilha Cientista de Dados",
            "Trilha Analista de Dados",
            "Trilha Intermediária Gestão e Curadoria"
        ],
        correct: 0,
        explanation: "A trilha avançada é descrita como uma especialização acadêmica e de certificações em gestão de dados."
    },
    {
        question: "Que tipo de formação compõe a Trilha Avançada Gestão de Dados?",
        options: [
            "Cursos externos, MBAs e mestrados",
            "Somente cursos internos curtos",
            "Apenas eventos periódicos sem avaliação",
            "Exclusivamente treinamentos em Python"
        ],
        correct: 0,
        explanation: "O poster informa que a trilha avançada inclui cursos externos, MBAs, mestrados e certificações."
    },
    {
        question: "Quais universidades são citadas como referência na Trilha Avançada Gestão de Dados?",
        options: [
            "Aberdeen e IFP School",
            "USP e Unicamp",
            "MIT e Stanford",
            "Oxford e Cambridge"
        ],
        correct: 0,
        explanation: "O poster cita Aberdeen e IFP School como universidades de referência nessa trilha."
    },
    {
        question: "Quais certificações profissionais são mencionadas na Trilha Avançada?",
        options: [
            "DAMA e PPDM",
            "PMP e Scrum",
            "AWS e Azure",
            "ITIL e COBIT"
        ],
        correct: 0,
        explanation: "As certificações mencionadas no poster são DAMA e PPDM."
    },

    // ── SEÇÃO 3 · CURSOS DE PROGRAMAÇÃO E CIÊNCIA DE DADOS ───────────────────
    {
        question: "Como o poster descreve a grade de cursos de programação e ciência de dados da GDTD?",
        options: [
            "Progressiva, do básico ao avançado, com construção contínua de competências",
            "Restrita a um único nível introdutório",
            "Voltada apenas para pesquisa acadêmica",
            "Dividida somente por senioridade hierárquica"
        ],
        correct: 0,
        explanation: "A seção 3 fala em uma grade progressiva de cursos técnicos e progressão do básico ao avançado."
    },
    {
        question: "Quantas turmas foram realizadas nos cursos de Python, Ciência de Dados e Deep Learning?",
        options: [
            "Mais de 20 turmas",
            "Mais de 100 turmas",
            "Exatamente 5 turmas",
            "Menos de 10 turmas"
        ],
        correct: 0,
        explanation: "O poster destaca '+20 turmas realizadas nos cursos de Python, Ciência de Dados e Deep Learning'."
    },
    {
        question: "Onde foram desenvolvidos os cursos de programação e ciência de dados?",
        options: [
            "No RES, adaptados à realidade de E&P",
            "Em universidades externas internacionais",
            "Em parceria somente com fornecedores privados",
            "No departamento de TI corporativo"
        ],
        correct: 0,
        explanation: "O poster afirma que os cursos foram desenvolvidos no RES e adaptados à realidade do E&P."
    },
    {
        question: "Qual destes cursos faz parte da grade de programação e ciência de dados mostrada no poster?",
        options: [
            "Python 1 para RR-EE",
            "IA Avançada",
            "Ciência de Dados para Perfuração",
            "Avaliando Reservas com Python"
        ],
        correct: 0,
        explanation: "'Python 1 para RR-EE' aparece explicitamente na grade do poster. Os demais não existem no ecossistema GDTD."
    },
    {
        question: "Qual curso da grade mostra que a formação não ficou restrita à programação pura?",
        options: [
            "Ciência de Dados para Gestores",
            "IA para Completação",
            "Modelos autoregressivos para gerenciamento",
            "Modelagem de Reservatórios com Python"
        ],
        correct: 0,
        explanation: "'Ciência de Dados para Gestores' amplia a oferta para além da programação tradicional."
    },
    {
        question: "Qual curso da grade marca a entrada formal de Inteligência Artificial no percurso de capacitação geral?",
        options: [
            "Introdução à Inteligência Artificial",
            "IA para Reservas",
            "Modelos autoregressivos para gerenciamento",
            "Ciência de Dados para Perfuração"
        ],
        correct: 0,
        explanation: "'Introdução à Inteligência Artificial' aparece na grade de cursos técnicos como parte da evolução da formação."
    },
    {
        question: "Qual curso da grade evidencia avanço para técnicas mais sofisticadas de aprendizagem de máquina?",
        options: [
            "Deep Learning 1 para RR-RR",
            "Modelos autoregressivos para gerenciamento",
            "Avaliando Reservas com Python",
            "Ciência de Dados para Perfuração"
        ],
        correct: 0,
        explanation: "O poster lista 'Deep Learning 1 para RR-RR' como parte da progressão técnica mais avançada da grade."
    },
    {
        question: "Qual curso reforça a ideia de conectar IA ao conhecimento físico do domínio de RR-EE?",
        options: [
            "Physics Informed Machine Learning",
            "Python 1 para RR-EE",
            "Ciência de Dados para Gestores",
            "Introdução à Inteligência Artificial"
        ],
        correct: 0,
        explanation: "'Physics Informed Machine Learning' explicita a conexão entre aprendizado de máquina e conhecimento físico do domínio."
    },
    {
        question: "Qual curso da grade mostra preocupação com levar modelos de dados à prática produtiva?",
        options: [
            "Produtização de Soluções",
            "Ciência de Dados para Gestores",
            "Python 2 para RR-EE",
            "Deep Learning 1 para RR-RR"
        ],
        correct: 0,
        explanation: "'Produtização de Soluções' aponta para a etapa de transformar soluções em algo aplicável no contexto real."
    },

    // ── SEÇÃO 4 · IA PARA RR-EE ──────────────────────────────────────────────
    {
        question: "Em que ano foram criados os cursos de IA específicos para os domínios de RR-EE?",
        options: [
            "Em 2025",
            "Em 2020",
            "Em 2022",
            "Em 2026"
        ],
        correct: 0,
        explanation: "A seção 4 afirma que, em 2025, a GDTD criou esses cursos específicos para os domínios."
    },
    {
        question: "Em parceria com quem foram criados os cursos de Introdução à IA para os domínios?",
        options: [
            "Com as Gerências Funcionais",
            "Com universidades externas internacionais",
            "Com fornecedores de tecnologia",
            "Com a área de TI corporativa"
        ],
        correct: 0,
        explanation: "A seção 4 afirma que os cursos foram criados em parceria com as Gerências Funcionais."
    },
    {
        question: "Qual era o objetivo central dos cursos de IA criados especificamente para os domínios de RR-EE?",
        options: [
            "Aplicar IA ao dia a dia de geocientistas e engenheiros",
            "Substituir completamente os cursos formais das trilhas",
            "Treinar apenas especialistas em computação",
            "Criar um programa voltado somente à gestão"
        ],
        correct: 0,
        explanation: "A seção 4 afirma que os cursos buscavam aplicar IA ao dia a dia de geocientistas e engenheiros."
    },
    {
        question: "Por que cada curso de IA para domínios é construído com exemplos e dados do domínio específico?",
        options: [
            "Para que o profissional enxergue a aplicação direta da IA no seu trabalho",
            "Para evitar qualquer adaptação ao contexto da área",
            "Para focar na teoria abstrata dos modelos",
            "Para simplificar os conceitos ao máximo"
        ],
        correct: 0,
        explanation: "O poster liga exemplos e dados do domínio à visualização da aplicação direta da IA no contexto de trabalho."
    },
    {
        question: "Qual destes é um curso real de IA para RR-EE mostrado no poster?",
        options: [
            "IA para Avaliação",
            "IA para Completação",
            "IA Avançada",
            "Modelos autoregressivos para gerenciamento"
        ],
        correct: 0,
        explanation: "'IA para Avaliação' aparece entre os cursos de IA para RR-EE mostrados no poster. Os demais não existem no ecossistema."
    },
    {
        question: "Qual destes também está na lista de cursos de IA para RR-EE do poster?",
        options: [
            "IA para Elevação",
            "IA para Reservas",
            "Avaliando Reservas com Python",
            "Ciência de Dados para Perfuração"
        ],
        correct: 0,
        explanation: "'IA para Elevação' aparece explicitamente entre os cursos mostrados na seção 4."
    },
    {
        question: "Qual curso de IA da seção 4 está relacionado à mecânica das rochas?",
        options: [
            "IA para Geomecânica",
            "IA para Simulação",
            "IA para Avaliação",
            "IA para Gerenciamento"
        ],
        correct: 0,
        explanation: "O poster lista 'IA para Geomecânica' como um dos cursos por domínio, associado à mecânica das rochas."
    },
    {
        question: "Qual curso de IA é voltado diretamente à modelagem do comportamento de reservatórios?",
        options: [
            "IA para Simulação",
            "IA para Gerenciamento",
            "IA para Geologia",
            "IA para Elevação"
        ],
        correct: 0,
        explanation: "'IA para Simulação' aparece como um dos cursos de IA para RR-EE na seção 4."
    },
    {
        question: "Qual destes NÃO aparece entre os cursos de IA para RR-EE mostrados no poster?",
        options: [
            "IA para Completação",
            "IA para Geologia",
            "IA para Petrofísica",
            "IA para Geomecânica"
        ],
        correct: 0,
        explanation: "O poster lista Avaliação, Elevação, Geofísica, Geologia, Geomecânica, Gerenciamento, Petrofísica e Simulação — mas não 'IA para Completação'."
    },
    {
        question: "Quantos cursos de IA para domínios específicos de RR-EE são apresentados no poster?",
        options: [
            "8 cursos",
            "4 cursos",
            "6 cursos",
            "10 cursos"
        ],
        correct: 0,
        explanation: "O poster mostra 8 cursos: IA para Avaliação, Elevação, Geofísica, Geologia, Geomecânica, Gerenciamento, Petrofísica e Simulação."
    },

    // ── SEÇÃO 5 · INCLUSÃO E DIVERSIDADE ─────────────────────────────────────
    {
        question: "Qual problema social a seção de Inclusão e Diversidade do poster busca enfrentar?",
        options: [
            "A sub-representação de certos grupos nas áreas de STEM",
            "A falta de cursos avançados em universidades externas",
            "A baixa oferta de ferramentas de IA para geologia",
            "A ausência de certificações internacionais em dados"
        ],
        correct: 0,
        explanation: "A seção 5 relaciona a iniciativa à sub-representação de certos grupos nas áreas de STEM."
    },
    {
        question: "Qual é o nome do curso criado para promover inclusão no ecossistema de dados?",
        options: [
            "Python para MulheRES EXPetaculares",
            "Python para Diversidade em EXP",
            "Dados para Todas em RR-EE",
            "Inclusão Digital para Geocientistas"
        ],
        correct: 0,
        explanation: "O nome do curso de inclusão é 'Python para MulheRES EXPetaculares'."
    },
    {
        question: "O curso Python para MulheRES EXPetaculares foi construído em parceria com qual área?",
        options: [
            "Exploração",
            "Perfuração",
            "Suprimento",
            "TI corporativa"
        ],
        correct: 0,
        explanation: "O poster informa que o curso foi construído em parceria com a Exploração."
    },
    {
        question: "Como o poster descreve a recepção dos cursos de inclusão?",
        options: [
            "Extremamente disputados, evidenciando demanda por capacitação inclusiva",
            "Com baixa demanda inicial, mas crescimento gradual",
            "Substituindo as trilhas formais existentes",
            "Oferecidos apenas de forma virtual e assíncrona"
        ],
        correct: 0,
        explanation: "O poster diz que os cursos foram extremamente disputados, evidenciando a demanda por capacitação inclusiva."
    },
    {
        question: "Qual resultado quantitativo de inclusão é destacado no poster?",
        options: [
            "Aumento de 40% no número de mulheres treinadas",
            "Redução de 40% no tempo dos cursos",
            "Criação de 40 novas trilhas",
            "Formação de 40 novos instrutores"
        ],
        correct: 0,
        explanation: "Uma das caixas de destaque da seção 5 informa aumento de 40% no número de mulheres treinadas."
    },
    {
        question: "Quantas turmas do curso de inclusão foram realizadas e em quais anos?",
        options: [
            "2 turmas, em 2024 e 2025",
            "5 turmas entre 2020 e 2024",
            "Uma turma única em 2023",
            "3 turmas em 2023, 2024 e 2025"
        ],
        correct: 0,
        explanation: "A seção 5 destaca 2 turmas realizadas em 2024 e 2025."
    },

    // ── SEÇÃO 6 · FERRAMENTAS DE APOIO AO APRENDIZADO ────────────────────────
    {
        question: "Na seção de ferramentas de apoio, qual papel os LLMs assumem no ecossistema de capacitação?",
        options: [
            "O de tutores: tirar dúvidas, revisar código e explorar conceitos",
            "O de substituir todas as trilhas de capacitação",
            "O de certificar profissionais automaticamente",
            "O de avaliar o desempenho dos gestores"
        ],
        correct: 0,
        explanation: "A caixa 'LLMs como tutores' diz que Chat Petrobras e Copilot permitem tirar dúvidas, revisar código e explorar conceitos."
    },
    {
        question: "Quais ferramentas baseadas em LLM são citadas no poster como apoio à capacitação?",
        options: [
            "Chat Petrobras e Copilot",
            "NotebookLM e GitHub Copilot",
            "Power BI e Python",
            "DAMA e PPDM"
        ],
        correct: 0,
        explanation: "O poster cita Chat Petrobras e Copilot como as ferramentas LLM de apoio ao aprendizado."
    },
    {
        question: "Segundo o poster, qual é a principal vantagem dos tutores baseados em LLM?",
        options: [
            "Adaptar o aprendizado ao ritmo de cada profissional",
            "Substituir todos os encontros presenciais",
            "Eliminar a necessidade de prática",
            "Restringir o conteúdo a respostas curtas"
        ],
        correct: 0,
        explanation: "O poster enfatiza que os conceitos podem ser explorados de forma fácil e adaptada ao ritmo de cada profissional."
    },
    {
        question: "Quais ferramentas são citadas para geração de material extra de aprendizado, como podcasts?",
        options: [
            "NotebookLM e GitHub Copilot",
            "Chat Petrobras e Copilot",
            "Power BI e DAMA",
            "Aberdeen e IFP School"
        ],
        correct: 0,
        explanation: "Na seção 6, NotebookLM e GitHub Copilot aparecem como ferramentas para geração de material extra de aprendizado."
    },
    {
        question: "O que os Encontros de Cientistas de Dados agregam ao ecossistema de capacitação?",
        options: [
            "Aprender com praticantes via compartilhamento de projetos, resultados e lições aprendidas",
            "Substituir as trilhas formais por eventos esporádicos",
            "Oferecer apenas certificações externas",
            "Concentrar o aprendizado em um único especialista"
        ],
        correct: 0,
        explanation: "O poster descreve esses encontros como fóruns periódicos onde praticantes compartilham projetos, resultados e lições aprendidas."
    },

    // ── SEÇÃO 7 · CONCLUSÕES ──────────────────────────────────────────────────
    {
        question: "Qual indicador de escala aparece na conclusão do poster?",
        options: [
            "Mais de 30 turmas ministradas e mais de 300 profissionais treinados",
            "Exatamente 5 turmas e 50 profissionais treinados",
            "Somente cursos piloto sem continuidade",
            "Uma única formação anual obrigatória"
        ],
        correct: 0,
        explanation: "A conclusão destaca que, ao longo dos últimos anos, mais de 30 turmas foram ministradas e mais de 300 profissionais treinados."
    },
    {
        question: "Que direção futura o poster aponta especificamente para 2026?",
        options: [
            "Novas turmas, novos cursos (Deep Learning 2 para RR-EE e IA para Reservas) e mentorias digitais",
            "Encerramento das trilhas e foco apenas em eventos",
            "Substituição dos cursos por certificações obrigatórias",
            "Redução do portfólio para conteúdos introdutórios"
        ],
        correct: 0,
        explanation: "A conclusão prevê novas turmas, novos cursos como Deep Learning 2 para RR-EE e IA para Reservas, além da criação de mentorias digitais."
    }
];

// ==========================================
// STATE
// ==========================================
let state = {
    playerName: '',
    questions: [],
    currentIndex: 0,
    score: 0,
    correctCount: 0,
    totalTime: 0,
    timer: null,
    timeLeft: TIME_PER_QUESTION,
    answered: false,
    supabase: null,
};

// ==========================================
// SUPABASE INIT
// ==========================================
function initSupabase() {
    if (SUPABASE_URL === 'YOUR_SUPABASE_URL') return;
    try {
        state.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    } catch (e) {
        console.warn('Supabase init failed:', e);
    }
}

// ==========================================
// NAVIGATION
// ==========================================
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// ==========================================
// GAME FLOW
// ==========================================
function startGame() {
    const nameInput = document.getElementById('player-name');
    const name = nameInput.value.trim();
    if (!name) {
        nameInput.style.borderColor = 'var(--wrong)';
        nameInput.focus();
        return;
    }
    state.playerName = name;
    state.questions = shuffleArray([...ALL_QUESTIONS])
        .slice(0, QUESTIONS_PER_GAME)
        .map(prepareQuestionForRound);
    state.currentIndex = 0;
    state.score = 0;
    state.correctCount = 0;
    state.totalTime = 0;
    state.answered = false;

    showScreen('screen-quiz');
    renderQuestion();
}

function restartGame() {
    document.getElementById('player-name').value = state.playerName;
    showScreen('screen-name');
}

function renderQuestion() {
    const q = state.questions[state.currentIndex];
    const total = state.questions.length;

    document.getElementById('question-counter').textContent = `${state.currentIndex + 1} / ${total}`;
    document.getElementById('score-display').textContent = `${state.score} pts`;
    document.getElementById('progress-fill').style.width = `${((state.currentIndex) / total) * 100}%`;
    document.getElementById('question-text').textContent = q.question;

    const optionsEl = document.getElementById('options');
    optionsEl.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="option-letter">${letters[i]}</span>${escapeHtml(opt)}`;
        btn.addEventListener('click', () => handleAnswer(i));
        optionsEl.appendChild(btn);
    });

    // Show question card, hide explanation
    document.getElementById('question-card').classList.remove('hidden');
    document.getElementById('explanation-card').classList.add('hidden');

    state.answered = false;
    startTimer();
}

function handleAnswer(selected) {
    if (state.answered) return;
    state.answered = true;
    clearInterval(state.timer);

    const q = state.questions[state.currentIndex];
    const isCorrect = selected === q.correct;
    const elapsed = TIME_PER_QUESTION - state.timeLeft;
    state.totalTime += elapsed;

    // Highlight buttons
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, i) => {
        btn.classList.add('disabled');
        if (i === q.correct) btn.classList.add('correct');
        if (i === selected && !isCorrect) btn.classList.add('wrong');
    });

    // Score: faster = more points (max 1000 per question)
    let pointsEarned = 0;
    if (isCorrect) {
        state.correctCount++;
        const timeFraction = state.timeLeft / TIME_PER_QUESTION;
        pointsEarned = Math.round(MAX_SCORE_PER_QUESTION * (0.5 + 0.5 * timeFraction));
        state.score += pointsEarned;
        document.getElementById('score-display').textContent = `${state.score} pts`;
    }

    // Score popup
    showScorePopup(isCorrect ? `+${pointsEarned}` : '😢');

    // Show explanation after a short delay
    setTimeout(() => {
        document.getElementById('question-card').classList.add('hidden');
        document.getElementById('explanation-card').classList.remove('hidden');
        document.getElementById('explanation-icon').textContent = isCorrect ? '✅' : '❌';
        document.getElementById('explanation-text').textContent = q.explanation;
    }, 800);
}

function handleTimeout() {
    if (state.answered) return;
    state.answered = true;
    clearInterval(state.timer);
    state.totalTime += TIME_PER_QUESTION;

    const q = state.questions[state.currentIndex];
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, i) => {
        btn.classList.add('disabled');
        if (i === q.correct) btn.classList.add('correct');
    });

    showScorePopup('⏰');

    setTimeout(() => {
        document.getElementById('question-card').classList.add('hidden');
        document.getElementById('explanation-card').classList.remove('hidden');
        document.getElementById('explanation-icon').textContent = '⏰';
        document.getElementById('explanation-text').textContent = 'Tempo esgotado! ' + q.explanation;
    }, 600);
}

function nextQuestion() {
    state.currentIndex++;
    if (state.currentIndex >= state.questions.length) {
        showResults();
    } else {
        renderQuestion();
    }
}

// ==========================================
// TIMER
// ==========================================
function startTimer() {
    state.timeLeft = TIME_PER_QUESTION;
    const circle = document.getElementById('timer-circle');
    const text = document.getElementById('timer-text');
    const circumference = 2 * Math.PI * 45; // r=45

    circle.classList.remove('warning', 'danger');
    circle.style.strokeDashoffset = '0';
    text.textContent = state.timeLeft;

    state.timer = setInterval(() => {
        state.timeLeft--;
        text.textContent = state.timeLeft;

        const progress = (1 - state.timeLeft / TIME_PER_QUESTION) * circumference;
        circle.style.strokeDashoffset = progress;

        if (state.timeLeft <= 5) {
            circle.classList.add('danger');
            circle.classList.remove('warning');
        } else if (state.timeLeft <= 8) {
            circle.classList.add('warning');
        }

        if (state.timeLeft <= 0) {
            clearInterval(state.timer);
            handleTimeout();
        }
    }, 1000);
}

// ==========================================
// RESULTS
// ==========================================
function showResults() {
    const avgTime = state.correctCount > 0
        ? (state.totalTime / state.questions.length).toFixed(1)
        : (TIME_PER_QUESTION).toFixed(1);

    document.getElementById('final-score').textContent = state.score.toLocaleString('pt-BR');
    document.getElementById('stat-correct').textContent = `${state.correctCount}/${state.questions.length}`;
    document.getElementById('stat-time').textContent = `${avgTime}s`;

    // Result tiers
    const pct = state.correctCount / state.questions.length;
    let icon, title, message;
    if (pct >= 0.9) {
        icon = '🏆'; title = 'Extraordinário!';
        message = 'Você é um expert em capacitação GDTD! Que tal se inscrever como instrutor?';
    } else if (pct >= 0.7) {
        icon = '🌟'; title = 'Muito bem!';
        message = 'Ótimo conhecimento! Explore as trilhas da GDTD para ir ainda mais longe.';
    } else if (pct >= 0.5) {
        icon = '💡'; title = 'Bom começo!';
        message = 'Você já conhece bastante! Visite nosso poster para descobrir mais oportunidades.';
    } else {
        icon = '🚀'; title = 'Hora de explorar!';
        message = 'Essa é a sua oportunidade! Converse conosco para descobrir a trilha ideal para você.';
    }

    document.getElementById('result-icon').textContent = icon;
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-message').textContent = message;

    document.getElementById('progress-fill').style.width = '100%';

    showScreen('screen-result');

    if (pct >= 0.7) launchConfetti();
    saveScore();
}

// ==========================================
// LEADERBOARD
// ==========================================
async function showLeaderboard() {
    showScreen('screen-leaderboard');
    const listEl = document.getElementById('leaderboard-list');
    listEl.innerHTML = '<p class="loading">Carregando...</p>';

    const scores = await fetchScores();
    if (scores.length === 0) {
        listEl.innerHTML = '<p class="no-scores">Nenhuma pontuação ainda. Seja o primeiro!</p>';
        return;
    }

    listEl.innerHTML = scores.map((s, i) => {
        const medals = ['🥇', '🥈', '🥉'];
        const rank = i < 3 ? medals[i] : `${i + 1}`;
        const isMe = s.name === state.playerName && s.score === state.score;
        return `<div class="lb-row${isMe ? ' highlight' : ''}">
            <span class="lb-rank">${rank}</span>
            <span class="lb-name">${escapeHtml(s.name)}</span>
            <span class="lb-score">${s.score.toLocaleString('pt-BR')} pts</span>
        </div>`;
    }).join('');
}

async function saveScore() {
    // Always save locally as backup
    saveLocalScore();
    if (!state.supabase || state.score === 0) return;
    try {
        const { error } = await state.supabase.from('scores').insert({
            name: state.playerName.substring(0, 30),
            score: state.score,
            correct: state.correctCount,
            total: state.questions.length,
        });
        if (error) {
            console.error('Supabase insert error:', error.message, error.details, error.hint);
        }
    } catch (e) {
        console.warn('Error saving score:', e);
    }
}

async function fetchScores() {
    if (!state.supabase) return getLocalScores();
    try {
        const { data, error } = await state.supabase
            .from('scores')
            .select('name, score')
            .order('score', { ascending: false })
            .limit(20);
        if (error) {
            console.error('Supabase select error:', error.message, error.details, error.hint);
            throw error;
        }
        return data || [];
    } catch (e) {
        console.warn('Supabase fetch failed, using local:', e);
        return getLocalScores();
    }
}

// Fallback: localStorage leaderboard
function saveLocalScore() {
    if (state.score === 0) return;
    const scores = getLocalScores();
    scores.push({ name: state.playerName, score: state.score });
    scores.sort((a, b) => b.score - a.score);
    try {
        localStorage.setItem('gdtd_scores', JSON.stringify(scores.slice(0, 50)));
    } catch (e) { /* ignore */ }
}

function getLocalScores() {
    try {
        const raw = localStorage.getItem('gdtd_scores');
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

// ==========================================
// SCORE POPUP
// ==========================================
function showScorePopup(text) {
    const popup = document.getElementById('score-popup');
    popup.textContent = text;
    popup.classList.remove('hidden', 'show');
    // Force reflow
    void popup.offsetWidth;
    popup.classList.add('show');
    setTimeout(() => popup.classList.add('hidden'), 900);
}

// ==========================================
// CONFETTI (lightweight)
// ==========================================
function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#6c63ff', '#00d2ff', '#ffd740', '#ff5252', '#00e676', '#ff6ec7'];

    for (let i = 0; i < 120; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: Math.random() * 8 + 4,
            h: Math.random() * 4 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 4 + 2,
            rotation: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 10,
        });
    }

    let frame = 0;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;
        pieces.forEach(p => {
            if (p.y > canvas.height + 20) return;
            alive = true;
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.05;
            p.rotation += p.rotSpeed;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = Math.max(0, 1 - frame / 180);
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });
        frame++;
        if (alive && frame < 200) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    animate();
}

// ==========================================
// UTILITIES
// ==========================================
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ==========================================
// EVENT LISTENERS
// ==========================================
document.getElementById('player-name').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') startGame();
    e.target.style.borderColor = 'var(--card-border)';
});

// ==========================================
// INIT
// ==========================================
initSupabase();
console.log('Supabase initialized:', !!state.supabase);
