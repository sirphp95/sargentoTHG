const localQuotes1 = [
    {
      "texto": "Gênio é um por cento de inspiração e noventa e nove por cento de transpiração.",
      "autor": "Thomas Edison"
    },
    {
      "text": "Você pode observar muito apenas observando.",
      "autor": "Yogue Berra"
    },
    {
      "texto": "Uma casa dividida contra si mesma não pode subsistir.",
      "autor": "Abraham Lincoln"
    },
    {
      "text": "As dificuldades aumentam quanto mais nos aproximamos da meta.",
      "autor": "Johann Wolfgang von Goethe"
    },
    {
      "texto": "O destino está em suas mãos e mais ninguém",
      "autor": "Byron Pulsifer"
    },
    {
      "texto": "Seja o chefe, mas nunca o senhor.",
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
      "texto": "A vida é uma experiência de aprendizado, somente se você aprender.",
      "autor": "Yogue Berra"
    },
    {
      "text": "A autocomplacência é fatal para o progresso.",
      "autor": "Margaret Sangster"
    },
    {
      "texto": "A paz vem de dentro. Não a busque fora.",
      "autor": "Buda"
    },
    {
      "texto": "O que você dá é o que você recebe.",
      "autor": "Byron Pulsifer"
    },
    {
      "texto": "Só podemos aprender a amar amando.",
      "autor": "Iris Murdoch"
    },
    {
      "texto": "A vida é mudança. O crescimento é opcional. Escolha sabiamente.",
      "autor": "Karen Clark"
    },
    {
      "texto": "Você verá quando acreditar.",
      "autor": "Wayne Dyer"
    },
    {
      "texto": "Hoje é o amanhã com o qual nos preocupamos ontem.",
      "autor": null
    },
    {
      "texto": "É mais fácil ver os erros no papel de outra pessoa.",
      "autor": null
    },
    {
      "texto": "Todo homem morre. Nem todo homem realmente vive.",
      "autor": null
    },
    {
      "texto": "Para liderar as pessoas ande atrás delas.",
      "autor": "Lao Tzu"
    },
    {
      "texto": "Não tendo nada, nada ele pode perder.",
      "autor": "William Shakespeare"
    },
    {
      "texto": "Problema só é oportunidade em roupas de trabalho.",
      "autor": "Henry J. Kaiser"
    },
    {
      "texto": "Uma pedra rolante não acumula musgo.",
      "autor": "Públio Siro"
    },
    {
      "texto": "As ideias são o ponto de partida de todas as fortunas.",
      "autor": "Colina Napoleão"
    },
    {
      "texto": "Tudo na vida é sorte.",
      "autor": "Donald Trump"
    },
    {
      "text": "Não fazer nada é melhor do que estar ocupado sem fazer nada.",
      "autor": "Lao Tzu"
    },
    {
      "texto": "Confie em si mesmo. Você sabe mais do que pensa.",
      "autor": "Benjamin Spock"
    },
    {
      "texto": "Estude o passado, se você pudesse adivinhar o futuro.",
      "autor": "Confúcio"
    },
    {
      "texto": "O dia já está abençoado, encontre paz nele.",
      "autor": null
    },
    {
      "texto": "De erro em erro se descobre toda a verdade.",
      "autor": "Sigmund Freud"
    },
    {
      "texto": "Bem feito é melhor do que bem dito.",
      "autor": "Benjamin Franklin"
    },
    {
      "texto": "Morda mais do que você pode mastigar, depois mastigue.",
      "autor": "Ella Williams"
    },
    {
      "texto": "Elabore sua própria salvação. Não dependa dos outros.",
      "autor": "Buda"
    },
    {
      "texto": "Um hoje vale dois amanhãs.",
      "autor": "Benjamin Franklin"
    },
    {
      "texto": "Uma vez que você escolhe a esperança, tudo é possível.",
      "autor": "Christopher Reeve"
    },
    {
      "texto": "Deus sempre segue o caminho mais simples.",
      "autor": "Albert Einstein"
    },
    {
      "text": "Um falha em direção ao sucesso.",
      "autor": "Charles Kettering"
    },
    {
      "texto": "De pequenos começos vêm grandes coisas.",
      "autor": null
    },
    {
      "texto": "Aprender é um tesouro que seguirá seu dono em todos os lugares",
      "autor": "provérbio chinês"
    },
    {
      "text": "Seja como você deseja parecer.",
      "autor": "Sócrates"
    },
    {
      "texto": "O mundo está sempre em movimento.",
      "autor": "V. Naipaul"
    },
    {
      "text": "Nunca confunda atividade com conquista.",
      "autor": "João Madeira"
    },
    {
      "texto": "O que preocupa você domina você.",
      "autor": "Haddon Robinson"
    },
    {
      "texto": "Enfrentamos o futuro com o passado.",
      "autor": "Pérola Buck"
    },
    {
      "texto": "As metas são o combustível na fornalha da conquista.",
      "autor": "Brian Tracy"
    },
    {
      "texto": "Quem semeia virtude colhe honra.",
      "autor": "Leonardo da Vinci"
    },
    {
      "text": "Seja gentil sempre que possível. É sempre possível.",
      "autor": "Dalai Lama"
    },
    {
      "texto": "Falar não cozinha arroz.",
      "autor": "provérbio chinês"
    },
    {
      "texto": "É capaz quem pensa que é capaz.",
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
      "texto": "Aprenda com o ontem, viva o hoje, espere pelo amanhã.",
      "autor": "Albert Einstein"
    },
    {
      "texto": "Uma erva daninha não é mais do que uma flor disfarçada.",
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
      "texto": "O melhor professor é a experiência aprendida com os fracassos.",
      "autor": "Byron Pulsifer"
    },
    {
      "texto": "Pense em quão difícil seria a física se as partículas pudessem pensar.",
      "autor": "Murray Gell-Mann"
    },
    {
      "texto": "O amor é a flor que você tem que deixar crescer.",
      "autor": "John Lennon"
    },
    {
      "texto": "Não espere. A hora nunca será a certa.",
      "autor": "Colina Napoleão"
    },
    {
      "texto": "O tempo é o conselheiro mais sábio de todos.",
      "autor": "Péricles"
    },
    {
      "texto": "Você dá antes de receber.",
      "autor": "Colina Napoleão"
    },
    {
      "texto": "A sabedoria começa na maravilha.",
      "autor": "Sócrates"
    },
    {
      "texto": "Sem coragem, a sabedoria não dá frutos.",
      "autor": "Baltasar Gracian"
    },
    {
      "text": "A mudança em todas as coisas é doce.",
      "autor": "Aristóteles"
    },
    {
      "texto": "O que você teme é o que requer ação para superar.",
      "autor": "Byron Pulsifer"
    },
    {
      "text": "Quando o desempenho excede a ambição, a sobreposição é chamada de sucesso.",
      "autor": "Cullen Hightower"
    },
    {
      "texto": "Quando as ações falam, as palavras não são nada.",
      "autor": "provérbio africano"
    },
    {
      "texto": "A verdadeira magia nos relacionamentos significa ausência de julgamento dos outros.",
      "autor": "Wayne Dyer"
    },
    {
      "texto": "Eu nunca penso no futuro. Ele vem em breve.",
      "autor": "Albert Einstein"
    },
    {
      "text": "Habilidade para fazer vem de fazer.",
      "autor": "Ralph Emerson"
    },
    {
      "texto": "A sabedoria é a parte suprema da felicidade.",
      "autor": "Sófocles"
    },
    {
      "texto": "Acredito que toda pessoa nasce com talento.",
      "autor": "Maya Angelou"
    },
    {
      "texto": "Princípios importantes podem e devem ser inflexíveis.",
      "autor": "Abraham Lincoln"
    },
    {
      "texto": "A realização de uma nova ação traz uma nova força.",
      "autor": "Richard Evans"
    },
    {
      "texto": "Os anos ensinam muito que os dias nunca sabem.",
      "autor": "Ralph Emerson"
    },
    {
      "texto": "Nossa desconfiança é muito cara.",
      "autor": "Ralph Emerson"
    },
    {
      "texto": "Todos conhecem o caminho; poucos realmente o percorrem.",
      "autor": "Bodhidharma"
    },
    {
      "text": "Grandes talentos encontram a felicidade na execução.",
      "autor": "Johann Wolfgang von Goethe"
    },
    {
      "texto": "A fé em si mesmo é o melhor e mais seguro caminho.",
      "autor": "Michelangelo"
    },
    {
      "texto": "Coragem é ir de fracasso em fracasso sem perder o entusiasmo.",
      "autor": "Winston Churchill"
    },
    {
      "texto": "Os dois guerreiros mais poderosos são paciência e tempo.",
      "autor": "Leo Tolstoi"
    },
    {
      "texto": "Antecipar o difícil gerenciando o fácil.",
      "autor": "Lao Tzu"
    },
    {
      "texto": "Aqueles que estão livres de pensamentos ressentidos certamente encontram paz.",
      "autor": "Buda"
    },
    {
      "texto": "Um ditado curto geralmente contém muita sabedoria.",
      "autor": "Sófocles"
    },
    {
      "text": "É preciso tanto sol quanto chuva para fazer um arco-íris.",
      "autor": null
    },
    {
      "texto": "Uma coisa bonita nunca é perfeita.",
      "autor": null
    },
    {
      "texto": "Faça apenas o que seu coração mandar.",
      "autor": "Princesa Diana"
    },
    {
      "texto": "A vida é movimento - respiramos, comemos, andamos, nos movemos!",
      "autor": "John Pierrakos"
    },
    {
      "texto": "Ninguém pode fazer você se sentir inferior sem o seu consentimento.",
      "autor": "Eleanor Roosevelt"
    },
    {
      "text": "Argumente sobre suas limitações, e com certeza elas são suas.",
      "autor": "Richard Bach"
    },
    {
      "texto": "Sorte é o que acontece quando a preparação encontra a oportunidade.",
      "autor": "Sêneca"
    },
    {
      "texto": "A vitória pertence ao mais perseverante.",
      "autor": "Napoleão Bonaparte"
    },
    {
      "texto": "Ame a todos, confie em alguns, não faça mal a ninguém.",
      "autor": "William Shakespeare"
    },
    {
      "texto": "Para ganhar, você deve esperar ganhar.",
      "autor": "Richard Bach"
    },
    {
      "texto": "Um objetivo é um sonho com um prazo.",
      "autor": "Colina Napoleão"
    },
    {
      "texto": "Você pode fazer isso se você acredita que pode!",
      "autor": "Colina Napoleão"
    },
    {
      "text": "Estabeleça metas altas e não pare até chegar lá.",
      "autor": "Bo Jackson"
    },
    {
      "texto": "Cada novo dia é mais uma chance de mudar sua vida.",
      "autor": null
    },
    {
      "texto": "Sorria, respire e vá devagar.",
      "autor": "Thich Nhat Hanh"
    },
    {
      "texto": "Ninguém vai acreditar em você a menos que você acredite em si mesmo.",
      "autor": "Liberdade"
    },
    {
      "text": "Faça mais do que sonhar: trabalhe.",
      "autor": "William Arthur Ward"
    },
    {
      "texto": "Nenhum homem jamais foi sábio por acaso.",
      "autor": "Sêneca"
    },
    {
      "texto": "Alguns buscam a felicidade, outros a criam.",
      "autor": null
    },
    {
      "texto": "Aquele que é tonto pensa que o mundo gira.",
      "autor": "William Shakespeare"
    },
    {
      "texto": "Não estrague o presente com o passado arruinado.",
      "autor": "Ellen Gilchrist"
    },
    {
      "texto": "Faça algo maravilhoso, as pessoas podem imitá-lo.",
      "autor": "Albert Schweitzer"
    },
    {
      "texto": "Fazemos o que fazemos porque acreditamos.",
      "autor": null
    },
    {
      "texto": "Faça uma coisa todos os dias que te assusta.",
      "autor": "Eleanor Roosevelt"
    },
    {
      "texto": "Se você não pode ficar em silêncio, seja brilhante e atencioso.",
      "autor": "Byron Pulsifer"
    },
    {
      "texto": "Quem olha para fora, sonha; quem olha para dentro, acorda.",
      "autor": "Carl Jung"
    },
    {
      "texto": "O que pensamos, nos tornamos.",
      "autor": "Buda"
    },
    {
      "texto": "A resposta mais curta é fazer.",
      "autor": "Lorde Herbert"
    },
    {
      "texto": "Todo o nosso conhecimento tem suas origens em nossas percepções.",
      "autor": "Leonardo da Vinci"
    },
    {
      "texto": "Quanto mais forte você cai, mais alto você quica.",
      "autor": null
    },
    {
      "texto": "Confiar em nossa intuição muitas vezes nos salva do desastre.",
      "autor": "Anne Wilson Schaef"
    },
    {
      "text": "A verdade é poderosa e prevalece.",
      "autor": "Verdade do Peregrino"
    },
    {
      "texto": "Ilumine o amanhã com o hoje!",
      "autor": "Elizabeth Browning"
    },
    {
      "text": "O silêncio é uma cerca em torno da sabedoria.",
      "autor": "provérbio alemão"
    },
    {
      "texto": "A sociedade desenvolve a inteligência, mas somente sua contemplação forma o gênio.",
      "autor": "Madame de Stael"
    },
    {
      "texto": "As coisas mais simples geralmente são as mais verdadeiras.",
      "autor": "Richard Bach"
    },
    {
      "texto": "Todos sorriem no mesmo idioma.",
      "autor": null
    },
    {
      "texto": "Ontem ousei lutar. Hoje ouso vencer.",
      "autor": "Bernadette Devlin"
    },
    {
      "texto": "Nenhum álibi o salvará de aceitar a responsabilidade.",
      "autor": "Colina Napoleão"
    },
    {
      "texto": "Se você pode sonhar, você pode realizar.",
      "autor": "Walt Disney"
    },
    {
      "texto": "É melhor viajar bem do que chegar.",
      "autor": "Buda"
    },
    {
      "texto": "A vida encolhe ou se expande na proporção da coragem de alguém.",
      "autor": "Anais Nin"
    },
    {
      "texto": "Você tem que acreditar em si mesmo.",
      "autor": "Sun Tzu"
    },
    {
      "texto": "Nossa intenção cria nossa realidade.",
      "autor": "Wayne Dyer"
    },
    {
      "texto": "O silêncio é um verdadeiro amigo que nunca trai.",
      "autor": "Confúcio"
    },
    {
      "texto": "O personagem se desenvolve no fluxo da vida.",
      "autor": "Johann Wolfgang von Goethe"
    },
    {
      "text": "De pequenas bolotas crescem carvalhos poderosos.",
      "autor": "provérbio americano"
    },
    {
      "texto": "Você não pode parar as ondas, mas pode aprender a surfar.",
      "autor": "Jon Kabat-Zinn"
    },
    {
      "texto": "A realidade não se conforma ao ideal, mas o confirma.",
      "autor": "Gustave Flaubert"
    },
    {
      "texto": "Fale baixo, se você fala amor.",
      "autor": "William Shakespeare"
    },
    {
      "texto": "Um talento realmente grande encontra sua felicidade na execução.",
      "autor": "Johann Wolfgang von Goethe"
    },
    {
      "texto": "A realidade deixa muito para a imaginação.",
      "autor": "John Lennon"
    },
    {
      "texto": "O maior remédio para a raiva é o atraso.",
      "autor": "Sêneca"
    },
    {
      "texto": "O próprio crescimento contém o germe da felicidade.",
      "autor": "Pérola Buck"
    },
    {
      "texto": "Você pode fazer o que é razoável ou pode decidir o que é possível.",
      "autor": null
    },
    {
      "texto": "Nada fortalece tanto a autoridade quanto o silêncio.",
      "autor": "Leonardo da Vinci"
    },
    {
      "texto": "Aonde quer que você vá, vá com todo o seu coração.",
      "autor": "Confúcio"
    },
    {
      "texto": "A única coisa realmente valiosa é a intuição.",
      "autor": "Albert Einstein"
    },
    {
      "text": "Boa sorte é outro nome para tenacidade de propósito.",
      "autor": "Ralph Emerson"
    },
    {
      "texto": "Arco-íris pede desculpas por céus furiosos.",
      "autor": "Sylvia Voirol"
    },
    {
      "texto": "Amizade não é grande coisa. É um milhão de pequenas coisas.",
      "autor": null
    },
    {
      "texto": "Tempo é a coisa mais valiosa que um homem pode gastar.",
      "autor": "Teofrasto"
    },
    {
      "texto": "Aconteça o que acontecer, assuma a responsabilidade.",
      "autor": "Tony Robbins"
    },
    {
      "text": "Experiência é simplesmente o nome que damos aos nossos erros.",
      "autor": "Oscar Wilde"
    },
    {
      "texto": "Eu penso e isso é tudo que eu sou.",
      "autor": "Wayne Dyer"
    },
    {
      "texto": "Um bom plano hoje é melhor do que um plano perfeito amanhã.",
      "autor": null
    },
    {
      "texto": "Se o sapato não servir, devemos trocar o pé?",
      "autor": "Glória Steinem"
    },
    {
      "texto": "Cada dia oferece seus próprios presentes.",
      "autor": "Marco Aurélio"
    },
    {
      "texto": "Enquanto paramos para pensar, muitas vezes perdemos nossa oportunidade.",
      "autor": "Públio Siro"
    },
    {
      "texto": "A vida não é sobre encontrar a si mesmo. A vida é sobre criar a si mesmo.",
      "autor": "Bernard Shaw"
    },
    {
      "texto": "Para trazer algo para sua vida, imagine que já está lá.",
      "autor": "Richard Bach"
    },
    {
      "texto": "Comece a tecer e Deus lhe dará o fio.",
      "autor": "provérbio alemão"
    },
    {
      "texto": "Quanto mais você se conhece, mais você se perdoa.",
      "autor": "Confúcio"
    },
    {
      "texto": "Alguém lembra, alguém se importa; seu nome é sussurrado nas orações de alguém.",
      "autor": null
    },
    {
      "texto": "Sem fé, nada é possível. Com ela, nada é impossível.",
      "autor": "Mary Bethune"
    },
    {
      "texto": "Uma vez que aceitamos nossos limites, vamos além deles.",
      "autor": "Albert Einstein"
    },
    {
      "texto": "Não seja empurrado pelos seus problemas; seja conduzido pelos seus sonhos.",
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
    },
    {
      "texto": "A vida é a flor para a qual o amor é o mel.",
      "autor": "Victor Hugo"
    },
    {
      "text": "Liberdade é o direito de viver como desejamos.",
      "autor": "Epicteto"
    },
    {
      "texto": "Mude seus pensamentos, mude sua vida!",
      "autor": null
    },
    {
      "texto": "Nunca ignore um pressentimento, mas nunca acredite que é o suficiente.",
      "autor": "Robert Heller"
    },
    {
      "texto": "A perda nada mais é do que mudança, e a mudança é o deleite da Natureza.",
      "autor": "Marco Aurélio"
    },
    {
      "texto": "Alguém só é especial se você contar.",
      "autor": "Byron Pulsifer"
    },
    {
      "texto": "Hoje é o amanhã com o qual você se preocupou ontem.",
      "autor": null
    },
    {
      "texto": "Não há caminho para a felicidade, a felicidade é o caminho.",
      "autor": "Thich Nhat Hanh"
    },
    {
      "texto": "O dia sempre parece mais brilhante por trás de um sorriso.",
      "autor": null
    },
    {
      "texto": "Um tropeço pode evitar uma queda.",
      "autor": null
    },
    {
      "texto": "Aquele que fala mais se esgota mais cedo.",
      "autor": "Lao Tzu"
    },
    {
      "texto": "Aquele que está contente é rico.",
      "autor": "Lao Tzu"
    },
    {
      "texto": "O que alcançamos internamente mudará a realidade externa.",
      "autor": "Plutarco"
    },
    {
      "texto": "Nossa força cresce a partir de nossas fraquezas.",
      "autor": "Ralph Waldo Emerson"
    },
    {
      "texto": "Devemos nos tornar a mudança que queremos ver.",
      "autor": "Mahatma Gandhi"
    },
    {
      "texto": "A felicidade é encontrada em fazer, não apenas em possuir.",
      "autor": "Colina Napoleão"
    },
    {
      "texto": "Coloque seu futuro em boas mãos, você mesmo.",
      "autor": null
    },
    {
      "texto": "Escolhemos nosso destino na forma como tratamos os outros.",
      "autor": "Sabedoria"
    },
    {
      "texto": "Nenhum floco de neve em uma avalanche se sente responsável.",
      "autor": "Voltaire"
    },
    {
      "texto": "A sorte favorece os corajosos.",
      "autor": "Virgílio"
    },
    {
      "texto": "Acredito em apenas uma coisa, o poder da vontade humana.",
      "autor": "Joseph Stalin"
    },
    {
      "texto": "A melhor saída é sempre através.",
      "autor": "Robert Frost"
    },
    {
      "texto": "A mente desaprende com dificuldade o que aprendeu há muito tempo.",
      "autor": "Sêneca"
    },
    {
      "texto": "Eu destruo meus inimigos quando os faço meus amigos.",
      "autor": "Abraham Lincoln"
    },
    {
      "texto": "Nenhum jardim está sem suas ervas daninhas.",
      "autor": "Thomas Fuller"
    },
    {
      "text": "Não há falha exceto em não tentar mais.",
      "autor": "Elbert Hubbard"
    },
    {
      "texto": "Palavras gentis abrirão uma porta de ferro.",
      "autor": "provérbio turco"
    },
    {
      "text": "Problemas são apenas oportunidades com espinhos.",
      "autor": "Hugh Miller"
    },
    {
      "texto": "A vida é apenas uma chance de desenvolver uma alma.",
      "autor": "A. Powell Davies"
    },
    {
      "text": "Montanhas não podem ser superadas exceto por caminhos sinuosos.",
      "autor": "Johann Wolfgang von Goethe"
    },
    {
      "texto": "Que nosso jardim do despertar floresça com centenas de flores.",
      "autor": "Thich Nhat Hanh"
    },
    {
      "texto": "A fortuna faz amizade com os corajosos.",
      "autor": "John Dryden"
    },
    {
      "texto": "Mantenha-se fiel aos sonhos da sua juventude.",
      "autor": "Friedrich von Schiller"
    },
    {
      "texto": "Você nunca é um perdedor até que pare de tentar.",
      "autor": "Mike Ditka"
    },
    {
      "texto": "Ciência é conhecimento organizado. Sabedoria é vida organizada.",
      "autor": "Emanuel Kant"
    },
    {
      "text": "Saber não é suficiente; devemos aplicar!",
      "autor": "Johann Wolfgang von Goethe"
    },
    {
      "texto": "Crenças fortes conquistam homens fortes e depois os tornam mais fortes.",
      "autor": "Richard Bach"
    },
    {
      "text": "O outono é uma segunda primavera quando cada folha é uma flor.",
      "autor": "Albert Camus"
    },
    {
      "texto": "Se você se render ao vento, você pode montá-lo.",
      "autor": "Toni Morrison"
    },
    {
      "text": "Mantenha-se ao sol e você não poderá ver a sombra.",
      "autor": "Helen Keller"
    },
    {
      "texto": "Escreva seus planos a lápis e dê a borracha a Deus.",
      "autor": "Paulo Coelho"
    },
    {
      "texto": "A inspiração existe, mas tem que nos encontrar trabalhando.",
      "autor": "Pablo Picasso"
    },
    {
      "text": "Escolha batalhas grandes o suficiente para importar, pequenas o suficiente para vencer.",
      "autor": "Jonathan Kozol"
    },
    {
      "texto": "Não se comprometa. Você é tudo que você tem.",
      "autor": "Janis Joplin"
    },
    {
      "texto": "Um ditado curto geralmente contém muita sabedoria.",
      "autor": "Sófocles"
    },
    {
      "texto": "Dificuldades são coisas que mostram a uma pessoa o que ela é.",
      "autor": "Epicteto"
    },
    {
      "texto": "Quando você duvida do seu poder, você dá poder à sua dúvida.",
      "autor": "Honoré de Balzac"
    },
    {
      "text": "A causa está oculta. O efeito é visível para todos.",
      "autor": "Ovídio"
    },
    {
      "texto": "Uma pergunta prudente é metade da sabedoria.",
      "autor": "Francisco Bacon"
    },
    {
      "text": "O caminho para o sucesso é tomar uma ação massiva e determinada.",
      "autor": "Tony Robbins"
    },
    {
      "texto": "Eu permito que minha intuição guie meu caminho.",
      "autor": "Manuel Puig"
    },
    {
      "texto": "A natureza tira qualquer faculdade que não é usada.",
      "autor": "William R. Inge"
    },
    {
      "texto": "Se você deseja ser um escritor, escreva.",
      "autor": "Epicteto"
    },
    {
      "texto": "Não há caminho para a prosperidade, a prosperidade é o caminho.",
      "autor": "Wayne Dyer"
    },
    {
      "text": "Ou você comanda o dia ou o dia comanda você.",
      "autor": "Jim Rohn"
    },
    {
      "texto": "É melhor ser ignorante de um assunto do que saber pela metade.",
      "autor": "Públio Siro"
    },
    {
      "texto": "Siga seus instintos. É aí que a verdadeira sabedoria se manifesta.",
      "autor": "Oprah Winfrey"
    },
    {
      "texto": "Nunca houve uma faca boa feita de aço ruim.",
      "autor": "Benjamin Franklin"
    },
    {
      "texto": "Para realizar grandes coisas, devemos sonhar e agir.",
      "autor": "Anatole France"
    },
    {
      "texto": "A paciência é a companheira da sabedoria.",
      "autor": "Santo Agostinho"
    },
    {
      "texto": "A mente é tudo. O que você pensa que você se torna.",
      "autor": "Buda"
    },
    {
      "texto": "Para aproveitar a vida, devemos tocá-la levemente.",
      "autor": "Voltaire"
    },
    {
      "texto": "Para voar, temos que ter resistência.",
      "autor": "Maya Lin"
    },
    {
      "text": "O que você vê depende do que você está procurando.",
      "autor": null
    },
    {
      "texto": "O coração tem razões que a razão desconhece.",
      "autor": "Blaise Pascal"
    },
    {
      "texto": "Seja ótimo em ação, como você foi em pensamento.",
      "autor": "William Shakespeare"
    },
    {
      "texto": "A imaginação governa o mundo.",
      "autor": "Napoleão Bonaparte"
    },
    {
      "texto": "Palavras gentis não custam muito. No entanto, elas realizam muito.",
      "autor": "Blaise Pascal"
    },
    {
      "texto": "Não há mal maior do que perder tempo.",
      "autor": "Michelangelo"
    },
    {
      "texto": "A intuição dirá à mente pensante para onde olhar em seguida.",
      "autor": "Jonas Salk"
    },
    {
      "text": "A preocupação dá uma grande sombra a uma coisa pequena.",
      "autor": null
    },
    {
      "texto": "Os medos nada mais são do que um estado de espírito.",
      "autor": "Colina Napoleão"
    },
    {
      "texto": "A jornada de mil milhas começa com um passo.",
      "autor": "Lao Tzu"
    },]
