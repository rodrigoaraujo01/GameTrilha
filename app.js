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
    // --- BLOCO 1: Capacitação e Trilhas GDTD ---
    {
        question: "Qual foi o primeiro curso de programação oferecido pela GDTD para a comunidade de Reservatórios?",
        options: [
            "Python I para Reservatórios",
            "Deep Learning para Reservatórios",
            "Ciência de Dados para Gestores",
            "Produtização de Soluções"
        ],
        correct: 0,
        explanation: "O Python I para Reservatórios foi o primeiro e mais popular curso da GDTD, com mais de 20 turmas realizadas ao longo dos anos."
    },
    {
        question: "Quantas trilhas de conhecimento a GDTD oferece atualmente?",
        options: [
            "3 trilhas",
            "5 trilhas",
            "7 trilhas",
            "4 trilhas"
        ],
        correct: 1,
        explanation: "São 5 trilhas: Básica, Curador de Dados, Analista de Dados, Cientista de Dados e Avançada de Dados. Cada uma com múltiplos pontos de entrada e saída!"
    },
    {
        question: "O curso 'Python para MulheRES EXPetaculares' capacitou quantas mulheres na sua primeira turma (2024)?",
        options: [
            "10",
            "15",
            "18",
            "25"
        ],
        correct: 2,
        explanation: "18 mulheres foram capacitadas na primeira turma, representando um aumento de 40% no número de mulheres nos cursos de Python nos últimos 4 anos."
    },
    {
        question: "O que a sigla GDTD representa?",
        options: [
            "Gerência de Dados e Tecnologia Digital",
            "Gestão de Dados e Transformação Digital",
            "Grupo de Desenvolvimento e Transformação de Dados",
            "Gerência Digital de Tratamento de Dados"
        ],
        correct: 1,
        explanation: "GDTD = Gestão de Dados e Transformação Digital. É a gerência responsável pela capacitação e transformação digital no RES."
    },
    {
        question: "Qual destes NÃO é um curso de 'IA para Disciplinas' oferecido pela GDTD?",
        options: [
            "IA para Geologia",
            "IA para Simulação de Reservatórios",
            "IA para Perfuração",
            "IA para Petrofísica"
        ],
        correct: 2,
        explanation: "Os cursos de IA para Disciplinas cobrem: Simulação de Reservatórios, Petrofísica, Avaliação de Reservatórios, Geologia, Geofísica, Gerenciamento de Reservatórios, Elevação e Escoamento e Reservas."
    },
    {
        question: "A Trilha Básica GDTD inclui qual destes cursos como principal?",
        options: [
            "Python II para Reservatórios",
            "Deep Learning 1",
            "Storytelling com Dados",
            "Machine Learning I"
        ],
        correct: 2,
        explanation: "Storytelling com Dados é um dos cursos principais da Trilha Básica, junto com Gestão e Governança de Dados e Conscientização em Transformação Digital."
    },
    {
        question: "Qual é a carga horária do curso Python I para Reservatórios?",
        options: [
            "8 horas",
            "12 horas",
            "16 horas",
            "24 horas"
        ],
        correct: 1,
        explanation: "O Python I para Reservatórios tem 12h de carga horária e é pré-requisito para diversas outras formações nas trilhas da GDTD."
    },
    {
        question: "Quais certificações são mencionadas na Trilha Avançada de Dados?",
        options: [
            "AWS e Azure",
            "DAMA e PPDM",
            "PMP e Scrum",
            "Google Cloud e IBM"
        ],
        correct: 1,
        explanation: "DAMA (Data Management Association) e PPDM (Professional Petroleum Data Management) são as certificações de referência para gestão de dados no setor de óleo e gás."
    },
    {
        question: "A Trilha de Cientista de Dados inclui qual tópico como opcional?",
        options: [
            "Gestão de Projetos",
            "Reinforcement Learning",
            "Gestão de Dados",
            "Storytelling"
        ],
        correct: 1,
        explanation: "A trilha de Cientista de Dados inclui cursos de LLM e Reinforcement Learning como opcionais, refletindo as tecnologias mais avançadas da área."
    },
    {
        question: "Qual curso da Trilha Curador de Dados aborda conformidade legal?",
        options: [
            "Governança de Dados",
            "Curador de Dados Programa Básico",
            "Conformidade Legal Aplicada a Dados Geológicos",
            "Qualidade de Dados"
        ],
        correct: 2,
        explanation: "O curso 'Conformidade Legal Aplicada a Dados Geológicos' (20h) é parte da trilha complementar do Curador de Dados, garantindo alinhamento regulatório."
    },
    // --- BLOCO 2: Ferramentas de IA para Aprendizado ---
    {
        question: "Qual ferramenta de IA é ideal para gerar podcasts e resumos de áudio a partir de documentos técnicos?",
        options: [
            "ChatGPT",
            "NotebookLM (Google)",
            "Midjourney",
            "DALL-E"
        ],
        correct: 1,
        explanation: "O NotebookLM do Google permite carregar documentos e gerar podcasts, resumos e conversas sobre o conteúdo — excelente para aprender no trânsito ou Academia!"
    },
    {
        question: "Como LLMs (Large Language Models) podem ajudar no aprendizado de conteúdos complexos?",
        options: [
            "Substituindo os professores completamente",
            "Gerando certificados automáticos",
            "Permitindo aprendizado incremental via chats e explicações personalizadas",
            "Criando provas automaticamente"
        ],
        correct: 2,
        explanation: "LLMs permitem que conteúdos complexos sejam explorados de forma incremental e personalizada, adaptando a explicação ao nível do aluno — como uma tutoria particular 24h."
    },
    {
        question: "Qual dessas é uma aplicação prática do Gemini para estudo?",
        options: [
            "Compilar código Python",
            "Criar infográficos e materiais visuais a partir de conteúdo técnico",
            "Gerenciar repositórios Git",
            "Simular reservatórios"
        ],
        correct: 1,
        explanation: "O Gemini pode ser usado para construir infográficos, resumos visuais e materiais de estudo atraentes a partir de textos técnicos densos."
    },
    {
        question: "O que são mapas mentais gerados por IA e como podem ajudar na capacitação?",
        options: [
            "Imagens aleatórias geradas por redes neurais",
            "Diagramas hierárquicos que organizam visualmente conceitos e suas relações",
            "Mapas geográficos de jazidas de petróleo",
            "Listas lineares de tópicos de estudo"
        ],
        correct: 1,
        explanation: "Mapas mentais gerados por IA (ex: via NotebookLM ou ferramentas como Miro AI) organizam conceitos em hierarquias visuais, facilitando a compreensão de temas interconectados."
    },
    {
        question: "Qual é a principal vantagem de usar IA generativa como ferramenta complementar de estudo?",
        options: [
            "Elimina a necessidade de cursos formais",
            "Permite aprender no próprio ritmo, tirando dúvidas sob demanda",
            "Gera automaticamente os certificados necessários",
            "Substitui completamente o instrutor"
        ],
        correct: 1,
        explanation: "A IA generativa complementa os cursos formais permitindo exploração sob demanda — você pode aprofundar um tema, pedir exemplos ou simplificações a qualquer momento."
    },
    // --- BLOCO 3: Ciência de Dados e conceitos ---
    {
        question: "O que é 'Prompt Engineering' e por que é relevante para engenheiros de reservatórios?",
        options: [
            "Técnica de perfuração assistida por computador",
            "A arte de formular perguntas eficazes para ferramentas de IA",
            "Método de simulação de fluxo em reservatórios",
            "Processo de otimização de bombas de elevação"
        ],
        correct: 1,
        explanation: "Prompt Engineering é a habilidade de formular perguntas/comandos eficazes para IAs. Está na Trilha Analista de Dados como curso opcional indicado pelo DeepLearning.AI."
    },
    {
        question: "O que são PINNs (Physics-Informed Neural Networks)?",
        options: [
            "Redes sociais para engenheiros de petróleo",
            "Redes neurais que incorporam leis da física no seu treinamento",
            "Protocolos de integração de dados",
            "Painéis de instrumentação numérica"
        ],
        correct: 1,
        explanation: "PINNs combinam redes neurais com equações da física, sendo especialmente úteis em simulação de reservatórios. A GDTD oferece um Workshop específico sobre o tema!"
    },
    {
        question: "Na Trilha de Cientista de Dados, qual é a diferença entre Machine Learning I e II?",
        options: [
            "I é teórico e II é prático",
            "I trata de Aprendizado Supervisionado e II de Não Supervisionado",
            "I usa Python e II usa R",
            "I é para iniciantes e II para avançados"
        ],
        correct: 1,
        explanation: "ML I (35h) foca em Aprendizado Supervisionado (classificação, regressão) e ML II (16h) em Aprendizado Não Supervisionado (clustering, redução de dimensionalidade)."
    },
    {
        question: "Qual é a área que NÃO faz parte das esferas de conhecimento cobertas pela GDTD?",
        options: [
            "Gestão de Dados",
            "Python",
            "Perfuração Direcional",
            "Inteligência Artificial"
        ],
        correct: 2,
        explanation: "As esferas de conhecimento da GDTD são: Gestão de Dados, Qualidade de Dados, Curadoria de Dados, Python, PowerBI, IA e GenAI."
    },
    {
        question: "O que significa STEM e por que é relevante para o programa da GDTD?",
        options: [
            "System Technology for Energy Management",
            "Science, Technology, Engineering and Mathematics — área com sub-representação de certos grupos",
            "Standard Training for Engineering Methods",
            "Simulation Tools for Engineering Models"
        ],
        correct: 1,
        explanation: "STEM é a sigla para ciência, tecnologia, engenharia e matemática. O programa 'Python para MulheRES EXPetaculares' busca reduzir a sub-representação de mulheres nessas áreas."
    },
    // --- BLOCO 4: Ferramentas modernas e futuro ---
    {
        question: "Qual plataforma é recomendada na Trilha de Cientista de Dados para cursos de LLM e agentes?",
        options: [
            "Udemy",
            "DeepLearning.AI",
            "Khan Academy",
            "Alura"
        ],
        correct: 1,
        explanation: "Diversos cursos opcionais da trilha de Cientista de Dados são do DeepLearning.AI, incluindo LangChain, LlamaIndex, ChromaDB e LLMOps."
    },
    {
        question: "O que é RAG (Retrieval Augmented Generation) mencionado nos cursos da trilha avançada?",
        options: [
            "Tipo de rocha reservatório",
            "Técnica que combina busca em documentos próprios com geração de texto por IA",
            "Relatório Anual de Gestão",
            "Método de recuperação de petróleo"
        ],
        correct: 1,
        explanation: "RAG permite que LLMs consultem seus próprios documentos antes de responder — essencial para uso corporativo. O curso 'Building Agentic RAG with LlamaIndex' está na trilha!"
    },
    {
        question: "Qual abordagem a GDTD adotou ao reconstruir as trilhas de conhecimento?",
        options: [
            "Trilha linear obrigatória de 200 horas",
            "Múltiplos pontos de entrada e saída para atender cada perfil",
            "Trilha única para todos os profissionais",
            "Somente cursos presenciais"
        ],
        correct: 1,
        explanation: "As trilhas foram modernizadas com múltiplos pontos de entrada e saída, atendendo de forma individualizada as necessidades de cada profissional."
    },
    {
        question: "Além de cursos, qual evento recorrente a GDTD promove para a comunidade de dados?",
        options: [
            "Maratona de Programação",
            "Encontros de Cientistas de Dados do RES-EE",
            "Hackathon de IA",
            "Semana do Petróleo"
        ],
        correct: 1,
        explanation: "Os Encontros de Cientistas de Dados do RES-EE são eventos regulares para troca de experiências e disseminação de conhecimento na comunidade."
    },
    {
        question: "Na Trilha Avançada de Dados, qual tipo de formação de longa duração é oferecida?",
        options: [
            "Apenas certificações online",
            "MBA e Mestrado em Gestão de Dados voltados para energia",
            "Doutorado em IA",
            "Residência técnica"
        ],
        correct: 1,
        explanation: "A Trilha Avançada inclui MBAs (PUC Minas, RGU) e Mestrados (Aberdeen, IFP School) especializados em gestão de dados para o setor de energia."
    },
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
    state.questions = shuffleArray([...ALL_QUESTIONS]).slice(0, QUESTIONS_PER_GAME);
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
    if (!state.supabase || state.score === 0) return;
    try {
        await state.supabase.from('scores').insert({
            name: state.playerName.substring(0, 30),
            score: state.score,
            correct: state.correctCount,
            total: state.questions.length,
        });
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
        if (error) throw error;
        // Also save locally
        saveLocalScore();
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
// If no supabase, ensure local scores work
if (!state.supabase) {
    // Override saveScore to also save locally  
    const originalSaveScore = saveScore;
    window.saveScoreOriginal = originalSaveScore;
    // Always save locally as backup
    const _saveScore = saveScore;
    saveScore = function() {
        saveLocalScore();
        return _saveScore();
    };
}
