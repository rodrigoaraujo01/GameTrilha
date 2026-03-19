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
// QUESTION BANK
// ==========================================
const ALL_QUESTIONS = [
    {
        question: "Segundo o poster, quais habilidades eram raras na comunidade de RR-EE em 2020?",
        options: [
            "Programação e ciência de dados",
            "Perfuração e completação",
            "Geologia e geofísica",
            "Reservas e elevação"
        ],
        correct: 0,
        explanation: "A introdução afirma que, em 2020, programação e ciência de dados eram habilidades raras na comunidade de RR-EE."
    },
    {
        question: "Qual transformação geral o poster atribui ao trabalho da GDTD?",
        options: [
            "A criação de um ecossistema de capacitação em dados e IA",
            "A substituição completa dos cursos formais por IA",
            "A redução das atividades de treinamento presencial",
            "A centralização de toda a formação em uma única trilha"
        ],
        correct: 0,
        explanation: "O poster apresenta um ecossistema de capacitação que tornou possível ampliar o domínio de dados e IA na comunidade."
    },
    {
        question: "Quantas trilhas de conhecimento foram construídas para sustentar esse ecossistema?",
        options: [
            "5 trilhas",
            "2 trilhas",
            "8 trilhas",
            "10 trilhas"
        ],
        correct: 0,
        explanation: "A introdução informa que foram construídas 5 trilhas de conhecimento."
    },
    {
        question: "Qual ideia orienta o desenho das trilhas de conhecimento?",
        options: [
            "Atender perfis diferentes com múltiplos pontos de entrada e saída",
            "Obrigar todos a seguir exatamente a mesma sequência",
            "Separar os cursos apenas por senioridade hierárquica",
            "Focar somente em formações longas e externas"
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
            "Oferecer capacitação fundamental para todos os profissionais de RR-EE e EXP",
            "Formar apenas cientistas de dados avançados",
            "Preparar exclusivamente para certificações internacionais",
            "Treinar somente quem já domina Python"
        ],
        correct: 0,
        explanation: "A trilha básica é descrita como a capacitação fundamental em governança, qualidade e cultura de dados para todos os profissionais."
    },
    {
        question: "Na Trilha Básica Gestão de Dados, a formação vai de que tipo de conteúdo até qual tema mais amplo?",
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
        question: "Além de cultura de dados, quais temas aparecem como base da Trilha Básica?",
        options: [
            "Governança e qualidade de dados",
            "Apenas deep learning e LLMs",
            "Somente gestão acadêmica",
            "Perfuração e elevação artificial"
        ],
        correct: 0,
        explanation: "A descrição da trilha básica fala em governança, qualidade e cultura de dados."
    },
    {
        question: "Qual é o foco principal da Trilha Intermediária Gestão e Curadoria?",
        options: [
            "Gestão, saneamento e arquitetura de dados de geociências e geoengenharia",
            "Modelos de linguagem para automação de texto",
            "Somente visualização de dados em Power BI",
            "Criação de podcasts com IA"
        ],
        correct: 0,
        explanation: "A trilha intermediária é descrita como voltada à gestão, saneamento e arquitetura de dados de geociências e geoengenharia."
    },
    {
        question: "Que tipo de atuação profissional a Trilha Intermediária pretende desenvolver?",
        options: [
            "A de guardião da qualidade e integridade dos dados",
            "A de instrutor exclusivo de IA generativa",
            "A de gerente financeiro do portfólio",
            "A de especialista em licenciamento ambiental"
        ],
        correct: 0,
        explanation: "O poster afirma que essa trilha prepara o profissional para atuar como guardião da qualidade e integridade dos dados."
    },
    {
        question: "Qual trilha conecta análise e visualização de dados com ferramentas como Python e Power BI?",
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
        question: "Qual trilha aprofunda Machine Learning, Deep Learning e modelos de linguagem?",
        options: [
            "Trilha Cientista de Dados",
            "Trilha Básica Gestão de Dados",
            "Trilha Intermediária Gestão e Curadoria",
            "Trilha de Inclusão e Diversidade"
        ],
        correct: 0,
        explanation: "A Trilha Cientista de Dados é descrita como a capacitação avançada em ML, DL e LLMs."
    },
    {
        question: "Segundo o poster, as soluções desenvolvidas na Trilha Cientista de Dados se aplicam a quais desafios?",
        options: [
            "Reservatórios e engenharia de petróleo",
            "Apenas comunicação corporativa",
            "Somente administração de contratos",
            "Exclusivamente logística de materiais"
        ],
        correct: 0,
        explanation: "O poster associa a trilha cientista de dados aos desafios de reservatórios e engenharia de petróleo."
    },
    {
        question: "Qual trilha é apresentada como o caminho de especialização acadêmica e certificações internacionais?",
        options: [
            "Trilha Avançada Gestão de Dados",
            "Trilha Cientista de Dados",
            "Trilha Analista de Dados",
            "Trilha Básica Gestão de Dados"
        ],
        correct: 0,
        explanation: "A trilha avançada é descrita como uma especialização acadêmica e de certificações em gestão de dados."
    },
    {
        question: "Que tipo de formação a Trilha Avançada Gestão de Dados inclui?",
        options: [
            "Cursos externos, MBAs e mestrados",
            "Somente cursos internos curtos",
            "Apenas eventos periódicos sem avaliação",
            "Exclusivamente treinamentos em Power BI"
        ],
        correct: 0,
        explanation: "O poster informa que a trilha avançada inclui cursos externos, MBAs, mestrados e certificações."
    },
    {
        question: "Quais referências acadêmicas aparecem ligadas à Trilha Avançada Gestão de Dados?",
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
        question: "Quais certificações são citadas como parte da trilha avançada?",
        options: [
            "DAMA e PPDM",
            "PMP e Scrum",
            "AWS e Azure",
            "ITIL e COBIT"
        ],
        correct: 0,
        explanation: "As certificações mencionadas no poster são DAMA e PPDM."
    },
    {
        question: "Como o poster descreve a grade de cursos de programação e ciência de dados?",
        options: [
            "Progressiva, do básico ao avançado",
            "Restrita a um único nível introdutório",
            "Voltada apenas para pesquisa acadêmica",
            "Substituída pelas trilhas de IA para domínio"
        ],
        correct: 0,
        explanation: "A seção 3 fala em uma grade progressiva de cursos técnicos e em progressão do básico ao avançado."
    },
    {
        question: "Qual mensagem o poster passa ao dizer que os cursos foram desenvolvidos no RES e adaptados à realidade de E&P?",
        options: [
            "Que a capacitação foi pensada para problemas reais do trabalho",
            "Que o conteúdo evita qualquer aplicação prática",
            "Que os cursos servem apenas para uso externo",
            "Que a formação depende exclusivamente de fornecedores"
        ],
        correct: 0,
        explanation: "A adaptação à realidade de E&P indica foco em contexto real de trabalho, não em exemplos genéricos."
    },
    {
        question: "O que a progressão contínua de competências sugere sobre a formação apresentada no poster?",
        options: [
            "Que o aprendizado pode evoluir de forma acumulativa ao longo do tempo",
            "Que cada curso é isolado e sem relação com os demais",
            "Que o objetivo é substituir a experiência prática",
            "Que só vale a pena fazer os módulos finais"
        ],
        correct: 0,
        explanation: "O poster destaca construção contínua de competências, indicando evolução gradual e conectada entre os cursos."
    },
    {
        question: "Qual destes cursos faz parte da grade de programação e ciência de dados mostrada no poster?",
        options: [
            "Python 1 para RR-EE",
            "IA Avançada",
            "Ciência de Dados para Perfuração",
            "Modelagem de Reservatórios com Python"
        ],
        correct: 0,
        explanation: "'Python 1 para RR-EE' aparece explicitamente na grade do poster."
    },
    {
        question: "Qual curso do poster mostra que a formação não ficou restrita a programação pura?",
        options: [
            "Ciência de Dados para Gestores",
            "IA para Completação",
            "Modelagem de Reservatórios com Python",
            "IA Avançada"
        ],
        correct: 0,
        explanation: "'Ciência de Dados para Gestores' amplia a oferta para além da programação tradicional."
    },
    {
        question: "Qual curso da grade indica a entrada formal de IA no percurso de capacitação geral?",
        options: [
            "Introdução à Inteligência Artificial",
            "IA para Reservas",
            "IA para Geologia",
            "Chat Petrobras"
        ],
        correct: 0,
        explanation: "'Introdução à Inteligência Artificial' aparece na grade de cursos técnicos como parte da evolução da formação."
    },
    {
        question: "Qual curso da seção 3 evidencia um avanço para técnicas mais sofisticadas de aprendizagem?",
        options: [
            "Deep Learning 1 para RR-RR",
            "Storytelling com Dados",
            "Gestão de Dados Básica",
            "Encontros de Cientistas de Dados"
        ],
        correct: 0,
        explanation: "O poster lista 'Deep Learning 1 para RR-RR' como parte da progressão técnica mais avançada."
    },
    {
        question: "Qual curso da grade reforça a ideia de conectar IA ao conhecimento físico do domínio?",
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
        question: "Qual curso da seção 3 mostra preocupação com levar modelos à prática?",
        options: [
            "Produtização de Soluções",
            "Ciência de Dados para Gestores",
            "Python 2 para RR-EE",
            "Deep Learning 1 para RR-RR"
        ],
        correct: 0,
        explanation: "'Produtização de Soluções' aponta para a etapa de transformar soluções em algo aplicável no contexto real."
    },
    {
        question: "Em que contexto temporal o poster situa a criação dos cursos de IA específicos para os domínios?",
        options: [
            "Em 2025",
            "Em 2020",
            "Em 2023",
            "Em 2026"
        ],
        correct: 0,
        explanation: "A seção 4 começa afirmando que, em 2025, a GDTD criou esses cursos específicos para os domínios."
    },
    {
        question: "A parceria com as Gerências Funcionais, na seção de IA para RR-EE, sugere qual estratégia?",
        options: [
            "Construir capacitação conectada às necessidades dos domínios",
            "Terceirizar toda a formação para instituições externas",
            "Padronizar um conteúdo genérico para toda a companhia",
            "Substituir as trilhas por treinamentos avulsos"
        ],
        correct: 0,
        explanation: "A parceria com as Gerências Funcionais reforça a ideia de cursos alinhados às necessidades concretas de cada domínio."
    },
    {
        question: "Qual era o objetivo central dos cursos de Introdução à IA específicos para os domínios?",
        options: [
            "Aplicar essas tecnologias ao dia a dia de geocientistas e engenheiros",
            "Substituir completamente os cursos formais",
            "Treinar apenas especialistas em computação",
            "Criar um programa voltado somente a gestão"
        ],
        correct: 0,
        explanation: "A seção 4 afirma que os cursos buscavam aplicar essas tecnologias ao dia a dia de geocientistas e engenheiros."
    },
    {
        question: "Por que o poster destaca que cada curso de IA é construído com exemplos e dados do domínio específico?",
        options: [
            "Porque isso ajuda o profissional a enxergar a aplicação direta da IA no seu trabalho",
            "Porque evita qualquer adaptação ao contexto da área",
            "Porque o foco principal é a teoria abstrata dos modelos",
            "Porque elimina a necessidade de prática"
        ],
        correct: 0,
        explanation: "O poster liga exemplos e dados do domínio à visualização da aplicação direta da IA no contexto de trabalho."
    },
    {
        question: "Qual destes cursos exemplifica a estratégia de IA para domínios específicos mostrada no poster?",
        options: [
            "IA para Avaliação",
            "IA para Completação",
            "IA Avançada",
            "Modelagem de Reservatórios com Python"
        ],
        correct: 0,
        explanation: "'IA para Avaliação' aparece entre os cursos de IA para RR-EE mostrados no poster."
    },
    {
        question: "Qual destes também faz parte dos cursos de IA para RR-EE listados no poster?",
        options: [
            "IA para Elevação",
            "IA para Reservas",
            "IA para Completação",
            "Ciência de Dados para Perfuração"
        ],
        correct: 0,
        explanation: "'IA para Elevação' aparece explicitamente entre os cursos mostrados na seção 4."
    },
    {
        question: "Qual curso da seção 4 está ligado à mecânica das rochas e comportamento do meio?",
        options: [
            "IA para Geomecânica",
            "IA para Simulação",
            "IA para Avaliação",
            "IA para Gerenciamento"
        ],
        correct: 0,
        explanation: "O poster lista 'IA para Geomecânica' como um dos cursos por domínio."
    },
    {
        question: "Qual destes cursos de IA é voltado explicitamente à modelagem ou análise de comportamento de reservatórios no poster?",
        options: [
            "IA para Simulação",
            "IA para Gerenciamento",
            "IA para Geologia",
            "IA para Elevação"
        ],
        correct: 0,
        explanation: "'IA para Simulação' aparece como um dos cursos da seção 4."
    },
    {
        question: "Qual nome NÃO aparece entre os cursos de IA para RR-EE mostrados no poster?",
        options: [
            "IA para Completação",
            "IA para Geologia",
            "IA para Geomecânica",
            "IA para Simulação"
        ],
        correct: 0,
        explanation: "O poster lista Avaliação, Elevação, Geofísica, Geologia, Geomecânica, Gerenciamento, Petrofísica e Simulação, mas não 'IA para Completação'."
    },
    {
        question: "Qual problema a seção de inclusão e diversidade busca enfrentar?",
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
        question: "O curso Python para MulheRES EXPetaculares foi construído em parceria com qual área?",
        options: [
            "Exploração",
            "Perfuração",
            "Suprimento",
            "Logística"
        ],
        correct: 0,
        explanation: "O poster informa que o curso foi construído em parceria com a Exploração."
    },
    {
        question: "O sucesso do curso Python para MulheRES EXPetaculares é associado, no poster, a quê?",
        options: [
            "À forte demanda por capacitação inclusiva",
            "À substituição das trilhas existentes",
            "Ao fim dos cursos de Python tradicionais",
            "Ao foco exclusivo em certificações"
        ],
        correct: 0,
        explanation: "O poster diz que os cursos foram extremamente disputados, evidenciando demanda por capacitação inclusiva."
    },
    {
        question: "Qual resultado concreto da iniciativa de inclusão aparece em destaque no poster?",
        options: [
            "Aumento de 40% no número de mulheres treinadas",
            "Redução de 40% no tempo dos cursos",
            "Criação de 40 novas trilhas",
            "Participação exclusiva de 40 especialistas"
        ],
        correct: 0,
        explanation: "Uma das caixas de destaque da seção 5 informa aumento de 40% no número de mulheres treinadas."
    },
    {
        question: "Qual informação de escala da iniciativa de inclusão também aparece no poster?",
        options: [
            "Foram realizadas 2 turmas em 2024 e 2025",
            "Foram realizadas 5 turmas em 2026",
            "Houve uma turma única sem continuidade",
            "As turmas ocorreram apenas fora da empresa"
        ],
        correct: 0,
        explanation: "A seção 5 destaca 2 turmas realizadas em 2024 e 2025."
    },
    {
        question: "O que a expressão 'participação massiva de RR-EE e EXP' sugere sobre essa iniciativa?",
        options: [
            "Que houve engajamento amplo de diferentes partes da comunidade",
            "Que a participação ficou restrita ao time organizador",
            "Que o curso foi focado só em perfis técnicos avançados",
            "Que a adesão aconteceu apenas na Exploração"
        ],
        correct: 0,
        explanation: "O destaque de participação massiva indica adesão ampla da comunidade de RR-EE e EXP."
    },
    {
        question: "Na seção de ferramentas de apoio ao aprendizado, qual papel os LLMs assumem?",
        options: [
            "O de tutores para tirar dúvidas, revisar código e explorar conceitos",
            "O de substituir todas as trilhas de capacitação",
            "O de certificar profissionais automaticamente",
            "O de avaliar desempenho gerencial"
        ],
        correct: 0,
        explanation: "A caixa 'LLMs como tutores' diz que Chat Petrobras e Copilot permitem tirar dúvidas, revisar código e explorar conceitos."
    },
    {
        question: "Segundo o poster, qual é a principal vantagem desses tutores baseados em LLM?",
        options: [
            "Adaptar o aprendizado ao ritmo de cada profissional",
            "Eliminar a necessidade de prática",
            "Substituir todos os encontros presenciais",
            "Restringir o conteúdo a respostas curtas"
        ],
        correct: 0,
        explanation: "O poster enfatiza que os conceitos podem ser explorados de forma fácil e adaptada ao ritmo de cada profissional."
    },
    {
        question: "Quais ferramentas são citadas como apoio para gerar material extra de aprendizado?",
        options: [
            "NotebookLM e GitHub Copilot",
            "Power BI e DAMA",
            "Chat Petrobras e PPDM",
            "Aberdeen e IFP School"
        ],
        correct: 0,
        explanation: "Na seção 6, NotebookLM e GitHub Copilot aparecem como ferramentas para geração de material extra."
    },
    {
        question: "O poster usa a geração de podcasts a partir de documentos técnicos para ilustrar qual ideia?",
        options: [
            "Tornar o consumo de conteúdo mais acessível e flexível",
            "Substituir cursos por áudio automático",
            "Reduzir a importância dos materiais técnicos originais",
            "Trocar ciência de dados por comunicação institucional"
        ],
        correct: 0,
        explanation: "A geração de podcasts é apresentada como uma forma de consumir conteúdo técnico de maneira mais acessível."
    },
    {
        question: "O que os Encontros de Cientistas de Dados agregam ao ecossistema, segundo o poster?",
        options: [
            "Aprender com quem já está fazendo, por meio do compartilhamento de projetos e lições aprendidas",
            "Substituir as trilhas formais por eventos esporádicos",
            "Oferecer apenas certificações externas",
            "Concentrar o aprendizado em um único especialista"
        ],
        correct: 0,
        explanation: "O poster descreve esses encontros como fóruns periódicos onde praticantes compartilham projetos, resultados e lições aprendidas."
    },
    {
        question: "Na conclusão, como a GDTD resume o alcance da capacitação construída?",
        options: [
            "Como um ecossistema completo, dos conceitos fundamentais às fronteiras avançadas",
            "Como uma coleção de cursos isolados e independentes",
            "Como uma iniciativa limitada a ferramentas de IA generativa",
            "Como uma trilha única para um público especializado"
        ],
        correct: 0,
        explanation: "A conclusão fala em um ecossistema completo de capacitação que vai do fundamental às fronteiras avançadas."
    },
    {
        question: "Qual indicador de escala da atuação recente aparece na conclusão do poster?",
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
        question: "Que direção futura o poster aponta para 2026?",
        options: [
            "Novas turmas, novos cursos e criação de mentorias digitais",
            "Encerramento das trilhas e foco apenas em eventos",
            "Substituição dos cursos por certificações obrigatórias",
            "Redução do portfólio para conteúdos introdutórios"
        ],
        correct: 0,
        explanation: "A conclusão prevê novas turmas, novos cursos como Deep Learning 2 para RR-EE e IA para Reservas, além de mentorias digitais."
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

function prepareQuestionForRound(question) {
    const options = question.options.map((option, index) => ({
        option,
        isCorrect: index === question.correct,
    }));

    shuffleArray(options);

    return {
        ...question,
        options: options.map(item => item.option),
        correct: options.findIndex(item => item.isCorrect),
    };
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
