const data = [  
  { 
    question: "O que é Vanilla JavaScript?",    
    options: ["JavaScript puro","Uma biblioteca JavaScript","Um framework JavaScript","Um compilador de JavaScript"],
    answer: "JavaScript puro",
  },
  {
    question: "Com qual instrução declaramos uma constante em JavaScript?",
    options: ["const", "let", "var", "define"],
    answer: "const",
  },
  {
    question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
    options: ["string", "number", "boolean", "float"],
    answer: "float",
  },
  {
    question: "Qual dos métodos a seguir seleciona um elemento?",
    options: ["querySelector", "parseInt", "sort", "reduce"],
    answer: "querySelector",
  },
  {
    question:
      "Qual destas propriedades da a quantidade de elementos de um array?",
    options: ["qty", "length", "items", "index"],
    answer: "length",
  },
  {
    question: "O que é uma closure em JavaScript?",
    options: [
      "Uma função que retorna outra função",
      "Uma variável definida fora de uma função",
      "Um objeto que permite que você crie instâncias de classes",
      "Uma estrutura de dados que armazena pares chave-valor",
    ],
    answer: "Uma função que retorna outra função",
  },
  {
    question: "Qual o operador utilizado para fazer a comparação de igualdade em valor e tipo em JavaScript?",
    options: ["===", "==", "=", "!=="],
    answer: "===",
  },
  {
    question: "Qual o método utilizado para transformar uma string em um array em JavaScript?",
    options: ["split()", "join()", "slice()", "pop()"],
    answer: "split()",
  },
  {
    question: "Qual é a saída do código a seguir?\n\nconsole.log(1 + '2' + 2)",
    options: ["'122'", "'32'", "'14'", "'NaN'"],
    answer: "'122'",
  },
  {
    question: "Qual o método utilizado para adicionar um elemento ao final de um array em JavaScript?",
    options: ["push()", "pop()", "unshift()", "shift()"],
    answer: "push()",
  },{
    question: "Qual é a diferença entre uma arrow function e uma função regular em JavaScript?",
    options: [
    "Arrow functions não podem ter parâmetros",
    "Arrow functions não podem ser aninhadas",
    "Arrow functions não possuem contexto de 'this'",
    "Arrow functions não podem ser chamadas recursivamente",
    ],
    answer: "Arrow functions não possuem contexto de 'this'",
    },
    {
    question: "O que é hoisting em JavaScript?",
    options: [
    "Um mecanismo que previne que variáveis sejam sobrescritas",
    "Um mecanismo que evita a ocorrência de erros de sintaxe",
    "Um mecanismo que permite o acesso a variáveis antes de sua declaração",
    "Um mecanismo que garante que todas as variáveis sejam declaradas antes de serem usadas",
    ],
    answer: "Um mecanismo que permite o acesso a variáveis antes de sua declaração",
    },
    {
    question: "Qual é a diferença entre let e var em JavaScript?",
    options: [
    "let é utilizado para declaração de variáveis globais, enquanto var é utilizado para variáveis locais",
    "let é utilizado para variáveis que não podem ser reatribuídas, enquanto var pode ser reatribuída",
    "let é uma palavra-chave mais antiga que var e não é mais utilizada em versões modernas de JavaScript",
    "let é utilizada para declaração de variáveis locais, enquanto var é utilizada para variáveis globais",
    ],
    answer: "let é utilizado para variáveis que não podem ser reatribuídas, enquanto var pode ser reatribuída",
    },
    {
    question: "O que é o operador ternário em JavaScript?",
    options: [
    "Um operador que realiza a multiplicação de dois valores",
    "Um operador que compara dois valores e retorna um booleano",
    "Um operador que permite atribuir um valor a uma variável com base em uma condição",
    "Um operador que permite criar loops em JavaScript",
    ],
    answer: "Um operador que permite atribuir um valor a uma variável com base em uma condição",
    },
    {
    question: "O que é o DOM em JavaScript?",
    options: [
    "Um conjunto de regras de sintaxe que definem como o JavaScript deve ser escrito",
    "Um conjunto de bibliotecas que permitem a criação de animações em JavaScript",
    "Uma interface de programação de aplicações que permite a integração de JavaScript com outras linguagens",
    "A estrutura em árvore que representa os elementos HTML de uma página e que pode ser manipulada com JavaScript",
    ],
    answer: "A estrutura em árvore que representa os elementos HTML de uma página e que pode ser manipulada com JavaScript",
    },
    {
    question: "O que é o evento 'click' em JavaScript?",
    options: [
    "Um evento que é disparado quando o usuário clica em um elemento da página",
    "Um evento que é disparado quando o usuário carrega a página",
    "Um evento que é disparado quando o usuário digita algo no teclado",
    "Um evento que é disparado quando o usuário faz scroll na página",
    ],
    answer: "Um evento que é disparado quando o usuário clica em um elemento da página",
    }
    {
    question: "Qual é a diferença entre null e undefined em JavaScript?",
    options: ["Não há diferença", "Null é um objeto e undefined é um tipo primitivo", "Null é um valor atribuído e undefined significa que uma variável não foi declarada", "Null é falso e undefined é verdadeiro"],
    answer: "Null é um valor atribuído e undefined significa que uma variável não foi declarada"
    },
    {
    question: "Qual método de array em JavaScript retorna um novo array com todos os elementos que passam no teste implementado pela função fornecida?",
    options: ["map()", "filter()", "reduce()", "forEach()"],
    answer: "filter()"
    },
    {
    question: "Qual é o resultado da expressão a seguir?\n\ntypeof NaN",
    options: ["'number'", "'NaN'", "'undefined'", "'object'"],
    answer: "'number'"
    }
];

export default data;
