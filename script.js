const quoteContainer = document.getElementById("quote-container");
const quotetext = document.getElementById("quote");
const authorText = document.getElementById("quote");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// let apiQuotes = [];
// mostra carregamento
// function loading() {
//   loader.hidden = false;
//   quoteContainer.hidden = true;
// }
// esconde carregamento
// function complete() {
//   quoteContainer.hidden = false;
//   loader.hidden = true;
// }

// mostra nova frase
// function newQuote() {
//     loading();
//   // escolhe uma frase aleatoria do array da api
//   const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
//   // largura da frase determina oe stilo
//   if (quote.text.length > 50) {
//     quotetext.classList.add("long-quote");
//   } else {
//     quotetext.classList.remove("long-quote");
//   }
// //   esconder carregamento
//   quotetext.textContent = quote.text;
//   complete()
// }
// pega frase da api
// async function getQuotes() {
//     loading();
//   let apiUrl =
//     "https://type.fit/api/quotes/?method=getQuote&lang=pt-br&format=json";

//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     newQuote();
//   } catch (error) {
//     // caso ocorra erro
//     console.log("aconteceu um erro");
//   }
// }

// twitter
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quotetext.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}
// evento listen
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// getQuotes();

// frases locais
const localQuotes = [
    {
      "text": "Gênio é um por cento de inspiração e noventa e nove por cento de transpiração.",
      "autor": "Thomas Edison"
    },
    {
      "text": "Você pode observar muito apenas observando.",
      "autor": "Yogue Berra"
    },
    {
      "text": "Uma casa dividida contra si mesma não pode subsistir.",
      "autor": "Abraham Lincoln"
    },
    {
      "text": "As dificuldades aumentam quanto mais nos aproximamos da meta.",
      "autor": "Johann Wolfgang von Goethe"
    },
    {
      "text": "O destino está em suas mãos e mais ninguém",
      "autor": "Byron Pulsifer"
    },
    {
      "text": "Seja o chefe, mas nunca o senhor.",
      "autor": "Lao Tzu"
    },
    {
      "text": "Nada acontece a menos que primeiro sonhemos.",
      "autor": "Carl Sandburg"
    },
    {
      "text": "Bem começado está pela metade.",
      "autor": "Aristóteles"
    },
    {
      "text": "A vida é uma experiência de aprendizado, somente se você aprender.",
      "autor": "Yogue Berra"
    },
    {
      "text": "A autocomplacência é fatal para o progresso.",
      "autor": "Margaret Sangster"
    },
    {
      "text": "A paz vem de dentro. Não a busque fora.",
      "autor": "Buda"
    },
    {
      "text": "O que você dá é o que você recebe.",
      "autor": "Byron Pulsifer"
    },
    {
      "text": "Só podemos aprender a amar amando.",
      "autor": "Iris Murdoch"
    },
    {
      "text": "A vida é mudança. O crescimento é opcional. Escolha sabiamente.",
      "autor": "Karen Clark"
    },
    {
      "text": "Você verá quando acreditar.",
      "autor": "Wayne Dyer"
    },
    {
      "text": "Hoje é o amanhã com o qual nos preocupamos ontem.",
      "autor": null
    },
    {
      "text": "É mais fácil ver os erros no papel de outra pessoa.",
      "autor": null
    },
    {
      "text": "Todo homem morre. Nem todo homem realmente vive.",
      "autor": null
    },
    {
      "text": "Para liderar as pessoas ande atrás delas.",
      "autor": "Lao Tzu"
    },
    {
      "text": "Não tendo nada, nada ele pode perder.",
      "autor": "William Shakespeare"
    },
    {
      "text": "Problema só é oportunidade em roupas de trabalho.",
      "autor": "Henry J. Kaiser"
    },
    {
      "text": "Uma pedra rolante não acumula musgo.",
      "autor": "Públio Siro"
    },
    {
      "text": "As ideias são o ponto de partida de todas as fortunas.",
      "autor": "Colina Napoleão"
    },
    {
      "text": "Tudo na vida é sorte.",
      "autor": "Donald Trump"
    },
    {
      "text": "Não fazer nada é melhor do que estar ocupado sem fazer nada.",
      "autor": "Lao Tzu"
    },
    {
      "text": "Confie em si mesmo. Você sabe mais do que pensa.",
      "autor": "Benjamin Spock"
    },
    {
      "text": "Estude o passado, se você pudesse adivinhar o futuro.",
      "autor": "Confúcio"
    },
    {
      "text": "O dia já está abençoado, encontre paz nele.",
      "autor": null
    },
    {
      "text": "De erro em erro se descobre toda a verdade.",
      "autor": "Sigmund Freud"
    },
    {
      "text": "Bem feito é melhor do que bem dito.",
      "autor": "Benjamin Franklin"
    },
    {
      "text": "Morda mais do que você pode mastigar, depois mastigue.",
      "autor": "Ella Williams"
    },
    {
      "text": "Elabore sua própria salvação. Não dependa dos outros.",
      "autor": "Buda"
    },
    {
      "text": "Um hoje vale dois amanhãs.",
      "autor": "Benjamin Franklin"
    },
    {
      "text": "Uma vez que você escolhe a esperança, tudo é possível.",
      "autor": "Christopher Reeve"
    },
    {
      "text": "Deus sempre segue o caminho mais simples.",
      "autor": "Albert Einstein"
    },
    {
      "text": "Um falha em direção ao sucesso.",
      "autor": "Charles Kettering"
    },
    {
      "text": "De pequenos começos vêm grandes coisas.",
      "autor": null
    },
    {
      "text": "Aprender é um tesouro que seguirá seu dono em todos os lugares",
      "autor": "provérbio chinês"
    },
    {
      "text": "Seja como você deseja parecer.",
      "autor": "Sócrates"
    },
    {
      "text": "O mundo está sempre em movimento.",
      "autor": "V. Naipaul"
    },
    {
      "text": "Nunca confunda atividade com conquista.",
      "autor": "João Madeira"
    },
    {
      "text": "O que preocupa você domina você.",
      "autor": "Haddon Robinson"
    },
    {
      "text": "Enfrentamos o futuro com o passado.",
      "autor": "Pérola Buck"
    },
    {
      "text": "As metas são o combustível na fornalha da conquista.",
      "autor": "Brian Tracy"
    },
    {
      "text": "Quem semeia virtude colhe honra.",
      "autor": "Leonardo da Vinci"
    },
    {
      "text": "Seja gentil sempre que possível. É sempre possível.",
      "autor": "Dalai Lama"
    },
    {
      "text": "Falar não cozinha arroz.",
      "autor": "provérbio chinês"
    },
    {
      "text": "É capaz quem pensa que é capaz.",
      "autor": "Buda"
    },
    {
      "text": "Um objetivo sem um plano é apenas um desejo.",
      "autor": "Larry Elder"
    },
    {
      "text": "Para ter sucesso, devemos primeiro acreditar que podemos.",
      "autor": "Michael Korda"
    },
    {
      "text": "Aprenda com o ontem, viva o hoje, espere pelo amanhã.",
      "autor": "Albert Einstein"
    },
    {
      "text": "Uma erva daninha não é mais do que uma flor disfarçada.",
      "autor": "James Lowell"
    },
    {
      "text": "Faça ou não faça. Não há tentativa.",
      "autor": "Yoda"
    },
    {
      "text": "Toda ousadia séria começa de dentro.",
      "autor": "Harriet Beecher Stowe"
    },
    {
      "text": "O melhor professor é a experiência aprendida com os fracassos.",
      "autor": "Byron Pulsifer"
    },
    {
      "text": "Pense em quão difícil seria a física se as partículas pudessem pensar.",
      "autor": "Murray Gell-Mann"
    },
    {
      "text": "O amor é a flor que você tem que deixar crescer.",
      "autor": "John Lennon"
    },
    {
      "text": "Não espere. A hora nunca será a certa.",
      "autor": "Colina Napoleão"
    },
    {
      "text": "O tempo é o conselheiro mais sábio de todos.",
      "autor": "Péricles"
    },
    {
      "text": "Você dá antes de receber.",
      "autor": "Colina Napoleão"
    },
    {
      "text": "A sabedoria começa na maravilha.",
      "autor": "Sócrates"
    },
    {
      "text": "Sem coragem, a sabedoria não dá frutos.",
      "autor": "Baltasar Gracian"
    },
    {
      "text": "A mudança em todas as coisas é doce.",
      "autor": "Aristóteles"
    },
    {
      "text": "O que você teme é o que requer ação para superar.",
      "autor": "Byron Pulsifer"
    },
    {
      "text": "Quando o desempenho excede a ambição, a sobreposição é chamada de sucesso.",
      "autor": "Cullen Hightower"
    },
    {
      "text": "Quando as ações falam, as palavras não são nada.",
      "autor": "provérbio africano"
    },
    {
      "text": "A verdadeira magia nos relacionamentos significa ausência de julgamento dos outros.",
      "autor": "Wayne Dyer"
    },
    {
      "text": "Eu nunca penso no futuro. Ele vem em breve.",
      "autor": "Albert Einstein"
    },
    {
      "text": "Habilidade para fazer vem de fazer.",
      "autor": "Ralph Emerson"
    },
    {
      "text": "A sabedoria é a parte suprema da felicidade.",
      "autor": "Sófocles"
    },
    {
      "text": "Acredito que toda pessoa nasce com talento.",
      "autor": "Maya Angelou"
    },
    {
      "text": "Princípios importantes podem e devem ser inflexíveis.",
      "autor": "Abraham Lincoln"
    },
    {
      "text": "A realização de uma nova ação traz uma nova força.",
      "autor": "Richard Evans"
    },
    {
      "text": "Os anos ensinam muito que os dias nunca sabem.",
      "autor": "Ralph Emerson"
    },
    {
      "text": "Nossa desconfiança é muito cara.",
      "autor": "Ralph Emerson"
    },
    {
      "text": "Todos conhecem o caminho; poucos realmente o percorrem.",
      "autor": "Bodhidharma"
    },
    {
      "text": "Grandes talentos encontram a felicidade na execução.",
      "autor": "Johann Wolfgang von Goethe"
    },
    {
      "text": "A fé em si mesmo é o melhor e mais seguro caminho.",
      "autor": "Michelangelo"
    },
    {
      "text": "Coragem é ir de fracasso em fracasso sem perder o entusiasmo.",
      "autor": "Winston Churchill"
    },
    {
      "text": "Os dois guerreiros mais poderosos são paciência e tempo.",
      "autor": "Leo Tolstoi"
    },
    {
      "text": "Antecipar o difícil gerenciando o fácil.",
      "autor": "Lao Tzu"
    },
    {
      "text": "Aqueles que estão livres de pensamentos ressentidos certamente encontram paz.",
      "autor": "Buda"
    },
    {
      "text": "Um ditado curto geralmente contém muita sabedoria.",
      "autor": "Sófocles"
    },
    {
      "text": "É preciso tanto sol quanto chuva para fazer um arco-íris.",
      "autor": null
    },
    {
      "text": "Uma coisa bonita nunca é perfeita.",
      "autor": null
    },
    {
      "text": "Faça apenas o que seu coração mandar.",
      "autor": "Princesa Diana"
    },
    {
      "text": "A vida é movimento - respiramos, comemos, andamos, nos movemos!",
      "autor": "John Pierrakos"
    },
    {
      "text": "Ninguém pode fazer você se sentir inferior sem o seu consentimento.",
      "autor": "Eleanor Roosevelt"
    },
    {
      "text": "Argumente sobre suas limitações, e com certeza elas são suas.",
      "autor": "Richard Bach"
    },
    {
      "text": "Sorte é o que acontece quando a preparação encontra a oportunidade.",
      "autor": "Sêneca"
    },
    {
      "text": "A vitória pertence ao mais perseverante.",
      "autor": "Napoleão Bonaparte"
    },
    {
      "text": "Ame a todos, confie em alguns, não faça mal a ninguém.",
      "autor": "William Shakespeare"
    },
    {
      "text": "Para ganhar, você deve esperar ganhar.",
      "autor": "Richard Bach"
    },
    {
      "text": "Um objetivo é um sonho com um prazo.",
      "autor": "Colina Napoleão"
    },
    {
      "text": "Você pode fazer isso se você acredita que pode!",
      "autor": "Colina Napoleão"
    },
    {
      "text": "Estabeleça metas altas e não pare até chegar lá.",
      "autor": "Bo Jackson"
    },
    {
      "text": "Cada novo dia é mais uma chance de mudar sua vida.",
      "autor": null
    },
    {
      "text": "Sorria, respire e vá devagar.",
      "autor": "Thich Nhat Hanh"
    },
    {
      "text": "Ninguém vai acreditar em você a menos que você acredite em si mesmo.",
      "autor": "Liberdade"
    },
    {
      "text": "Faça mais do que sonhar: trabalhe.",
      "autor": "William Arthur Ward"
    },
    {
      "text": "Nenhum homem jamais foi sábio por acaso.",
      "autor": "Sêneca"
    },
    {
      "text": "Alguns buscam a felicidade, outros a criam.",
      "autor": null
    },
    {
      "text": "Aquele que é tonto pensa que o mundo gira.",
      "autor": "William Shakespeare"
    },
    {
      "text": "Não estrague o presente com o passado arruinado.",
      "autor": "Ellen Gilchrist"
    },
    {
      "text": "Faça algo maravilhoso, as pessoas podem imitá-lo.",
      "autor": "Albert Schweitzer"
    },
    {
      "text": "Fazemos o que fazemos porque acreditamos.",
      "autor": null
    },
    {
      "text": "Faça uma coisa todos os dias que te assusta.",
      "autor": "Eleanor Roosevelt"
    },
    {
      "text": "Se você não pode ficar em silêncio, seja brilhante e atencioso.",
      "autor": "Byron Pulsifer"
    },
    {
      "text": "Quem olha para fora, sonha; quem olha para dentro, acorda.",
      "autor": "Carl Jung"
    },
    {
      "text": "O que pensamos, nos tornamos.",
      "autor": "Buda"
    },
    {
      "text": "A resposta mais curta é fazer.",
      "autor": "Lorde Herbert"
    },
    {
      "text": "Todo o nosso conhecimento tem suas origens em nossas percepções.",
      "autor": "Leonardo da Vinci"
    },
    {
      "text": "Quanto mais forte você cai, mais alto você quica.",
      "autor": null
    },
    {
      "text": "Confiar em nossa intuição muitas vezes nos salva do desastre.",
      "autor": "Anne Wilson Schaef"
    },
    {
      "text": "A verdade é poderosa e prevalece.",
      "autor": "Verdade do Peregrino"
    },
    {
      "text": "Ilumine o amanhã com o hoje!",
      "autor": "Elizabeth Browning"
    },
    {
      "text": "O silêncio é uma cerca em torno da sabedoria.",
      "autor": "provérbio alemão"
    },
    {
      "text": "A sociedade desenvolve a inteligência, mas somente sua contemplação forma o gênio.",
      "autor": "Madame de Stael"
    },
    {
      "text": "As coisas mais simples geralmente são as mais verdadeiras.",
      "autor": "Richard Bach"
    },
    {
      "text": "Todos sorriem no mesmo idioma.",
      "autor": null
    },
    {
      "text": "Ontem ousei lutar. Hoje ouso vencer.",
      "autor": "Bernadette Devlin"
    },
    {
      "text": "Nenhum álibi o salvará de aceitar a responsabilidade.",
      "autor": "Colina Napoleão"
    },
    {
      "text": "Se você pode sonhar, você pode realizar.",
      "autor": "Walt Disney"
    },
    {
      "text": "É melhor viajar bem do que chegar.",
      "autor": "Buda"
    },
    {
      "text": "A vida encolhe ou se expande na proporção da coragem de alguém.",
      "autor": "Anais Nin"
    },
    {
      "text": "Você tem que acreditar em si mesmo.",
      "autor": "Sun Tzu"
    },
    {
      "text": "Nossa intenção cria nossa realidade.",
      "autor": "Wayne Dyer"
    },
    {
      "text": "O silêncio é um verdadeiro amigo que nunca trai.",
      "autor": "Confúcio"
    },
    {
      "text": "O personagem se desenvolve no fluxo da vida.",
      "autor": "Johann Wolfgang von Goethe"
    },
    {
      "text": "De pequenas bolotas crescem carvalhos poderosos.",
      "autor": "provérbio americano"
    },
    {
      "text": "Você não pode parar as ondas, mas pode aprender a surfar.",
      "autor": "Jon Kabat-Zinn"
    },
    {
      "text": "A realidade não se conforma ao ideal, mas o confirma.",
      "autor": "Gustave Flaubert"
    },
    {
      "text": "Fale baixo, se você fala amor.",
      "autor": "William Shakespeare"
    },
    {
      "text": "Um talento realmente grande encontra sua felicidade na execução.",
      "autor": "Johann Wolfgang von Goethe"
    },
    {
      "text": "A realidade deixa muito para a imaginação.",
      "autor": "John Lennon"
    },
    {
      "text": "O maior remédio para a raiva é o atraso.",
      "autor": "Sêneca"
    },
    {
      "text": "O próprio crescimento contém o germe da felicidade.",
      "autor": "Pérola Buck"
    },
    {
      "text": "Você pode fazer o que é razoável ou pode decidir o que é possível.",
      "autor": null
    },
    {
      "text": "Nada fortalece tanto a autoridade quanto o silêncio.",
      "autor": "Leonardo da Vinci"
    },
    {
      "text": "Aonde quer que você vá, vá com todo o seu coração.",
      "autor": "Confúcio"
    },
    {
      "text": "A única coisa realmente valiosa é a intuição.",
      "autor": "Albert Einstein"
    },
    {
      "text": "Boa sorte é outro nome para tenacidade de propósito.",
      "autor": "Ralph Emerson"
    },
    {
      "text": "Arco-íris pede desculpas por céus furiosos.",
      "autor": "Sylvia Voirol"
    },
    {
      "text": "Amizade não é grande coisa. É um milhão de pequenas coisas.",
      "autor": null
    },
    {
      "text": "Tempo é a coisa mais valiosa que um homem pode gastar.",
      "autor": "Teofrasto"
    },
    {
      "text": "Aconteça o que acontecer, assuma a responsabilidade.",
      "autor": "Tony Robbins"
    },
    {
      "text": "Experiência é simplesmente o nome que damos aos nossos erros.",
      "autor": "Oscar Wilde"
    },
    {
      "text": "Eu penso e isso é tudo que eu sou.",
      "autor": "Wayne Dyer"
    },
    {
      "text": "Um bom plano hoje é melhor do que um plano perfeito amanhã.",
      "autor": null
    },
    {
      "text": "Se o sapato não servir, devemos trocar o pé?",
      "autor": "Glória Steinem"
    },
    {
      "text": "Cada dia oferece seus próprios presentes.",
      "autor": "Marco Aurélio"
    },
    {
      "text": "Enquanto paramos para pensar, muitas vezes perdemos nossa oportunidade.",
      "autor": "Públio Siro"
    },
    {
      "text": "A vida não é sobre encontrar a si mesmo. A vida é sobre criar a si mesmo.",
      "autor": "Bernard Shaw"
    },
    {
      "text": "Para trazer algo para sua vida, imagine que já está lá.",
      "autor": "Richard Bach"
    },
    {
      "text": "Comece a tecer e Deus lhe dará o fio.",
      "autor": "provérbio alemão"
    },
    {
      "text": "Quanto mais você se conhece, mais você se perdoa.",
      "autor": "Confúcio"
    },
    {
      "text": "Alguém lembra, alguém se importa; seu nome é sussurrado nas orações de alguém.",
      "autor": null
    },
    {
      "text": "Sem fé, nada é possível. Com ela, nada é impossível.",
      "autor": "Mary Bethune"
    },
    {
      "text": "Uma vez que aceitamos nossos limites, vamos além deles.",
      "autor": "Albert Einstein"
    },
    {
      "text": "Não seja empurrado pelos seus problemas; seja conduzido pelos seus sonhos.",
      "autor": null
    },
    {
      "texto": "Tudo o que esperamos com confiança torna-se nossa própria profecia auto-realizável.",
      "autor": "Brian Tracy"
    },
    {
      "text": "Tudo o que você pode imaginar é real.",
      "autor": "Pablo Picasso"
    },
    {
      "texto": "O medo é uma câmara escura onde os negativos se desenvolvem.",
      "autor": "Usman Asif"
    },
    {
      "texto": "A mais verdadeira sabedoria é uma determinação resoluta.",
      "autor": "Napoleão Bonaparte"
    },]
    
function newQuote() {
    
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote) 
      if (quote.text.length > 30)  {
    quotetext.classList.add("long-quote");
  } else {
    quotetext.classList.remove("long-quote");
  }

  quotetext.textContent = quote.text;

}

    newQuote();
  