const quizData = [
    {
        question: "Quem são os fundadores da Oracle?",
        a: "Larry Ellison, Bill Gates e Steve Jobs", 
        b: "Larry Ellison, Bob Miner e Ed Oates", 
        c: "Jeff Bezos, Larry Page e Sergey Brin", 
        d: "Mark Zuckerberg, Elon Musk e Jack Dorsey",
        correct: "b"
    },

    {
        question: "Em que ano a Oracle foi fundada?",
        a: "1977", 
        b: "1980", 
        c: "1995", 
        d: "2000",
        correct: "a"
    },

    {
        question: "Qual é o principal produto da Oracle?",
        a: "Serviços de Computação em Nuvem", 
        b: "Banco de Dados", 
        c: "Sistemas Operacionais", 
        d: "Dispositivos Móveis",
        correct: "b"
    },

    {
        question: "Qual o nome do banco de dados inicial criado pela Oracle?",
        a: " SQL Pro", 
        b: "Oracle RDBMS", 
        c: "MySQL", 
        d: "Oracle Base",
        correct: "b"
    },

    {
        question: "Onde fica a sede da Oracle?",
        a: "Nova York, Estados Unidos", 
        b: "Redwood Shores, Califórnia", 
        c: "Austin, Texas", 
        d: "Seattle, Washington",
        correct: "b"
    },
];

const quiz = document.getElementById('quiz');
const respostaEls = document.querySelectorAll('.resposta');
const perguntaEls = document.getElementById('pergunta');
const a_texto = document.getElementById('a_texto');
const b_texto = document.getElementById('b_texto');
const c_texto = document.getElementById('c_texto');
const d_texto = document.getElementById('d_texto');
const EnviarBtn = document.getElementById('Enviar');

let currentQuiz = 0;  //Controle de pontuação do Quiz
let score = 0;

loadQuiz();  // Inicializa ou Reinia Pergunta

function loadQuiz() {
    deselectAnswers();  //Desmarcar qualquer opção selecionada

    const currentQuizData = quizData[currentQuiz];   //Pegar dados da pergunta

    perguntaEls.innerText = currentQuizData.question;  //Mostra pergunta
    a_texto.innerText = currentQuizData.a;
    b_texto.innerText = currentQuizData.b;
    c_texto.innerText = currentQuizData.c;
    d_texto.innerText = currentQuizData.d;
}

function deselectAnswers() {  //Desmarcarcar opções slecionadas
    respostaEls.forEach(respostaEl => respostaEl.checked = false);
}

function getSelected() {  // Verifica qual opção está marcada
    let answer;
    respostaEls.forEach(respostaEl => {
        if (respostaEl.checked) { // Se uyma delas estiver marcada, o ID da opção é armazenado em respostas
            answer = respostaEl.id; 
        }
    });
    return answer;
}

EnviarBtn.addEventListener('click', () => {
    const answer = getSelected(); // Pega resposta selecionada

    if (!answer) {  // Se nenhuma resposta for selecionada
        alert('Por favor, selecione uma resposta antes de enviar.');
        return;  // Não avança para a próxima pergunta
    }

    if (answer === quizData[currentQuiz].correct) {
        score++;  // Se a resposta estiver correta
        EnviarBtn.style.backgroundColor = '#44b927';
        EnviarBtn.style.color = 'white';
        
        setTimeout(() => { 
            EnviarBtn.style.backgroundColor = '#03cae4';
            EnviarBtn.style.color = 'white';
        }, 1000);
    } else {  // Se a resposta estiver errada
        EnviarBtn.style.backgroundColor = 'red';
        EnviarBtn.style.color = 'white';
        
        setTimeout(() => { 
            EnviarBtn.style.backgroundColor = '#03cae4'; 
            EnviarBtn.style.color = 'white';
        }, 1000);
    }

    currentQuiz++;  // Passa para a próxima pergunta

    setTimeout(() => {
        if (currentQuiz < quizData.length) {
            loadQuiz();  // Carrega a próxima pergunta
        } else {
            quiz.innerHTML = `  
                <h2>Você respondeu ${score}/${quizData.length} perguntas corretamente.</h2>
                <button onclick="location.reload()">Reiniciar</button>
            `; //Alterar conteúdo do elementO Html
        }
    }, 1000);
});
