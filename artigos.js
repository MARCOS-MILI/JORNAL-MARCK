/*
  Os textos do jornal ficam todos aqui, do mais novo pro mais antigo.

  Cada texto tem:
    id        nome curto sem espaços nem acentos, usado no link
    secao     "Crônica", "Reportagem", "História" ou "Nota da redação"
    titulo    o título
    subtitulo uma linha que resume o texto (pode ficar vazio)
    autor     o pseudônimo que assina (F.Y, M.J, A.F) ou "A redação"
    edicao    ex.: "Edição nº 1"
    corpo     lista de parágrafos
*/
window.ARTIGOS = [
  {
    id: "terror-na-terra-sem-lei",
    secao: "Reportagem",
    titulo: "Terror na Terra Sem Lei: bombas de gás deixam a cidade em alucinação",
    subtitulo: "Boatos apontam a Alemanha e seus aliados. Polícia e governo não dizem nada, e a população tenta se salvar sozinha.",
    autor: "F.Y",
    edicao: "Edição nº 2, extra",
    corpo: [
      "A cidade que todo mundo chama de Terra Sem Lei está sob ataque. Bombas de gás explodem em vários pontos, e quem respira a fumaça começa a ver e a ouvir coisas que não existem.",
      "Moradores contam que o efeito vem em minutos. Gente pacata passa a gritar com as paredes, a atacar o vizinho, a correr sem saber pra onde. Quem fica muito tempo no meio da fumaça enlouquece de vez, e as fontes da redação afirmam que muita gente não vai aguentar até o amanhecer.",
      "A suspeita é que o gás seja uma arma de guerra da Alemanha e de seus aliados. Ninguém assumiu o ataque, mas as fontes apontam um nome: o Coringa, também chamado de Espantalho, que teria criado o gás. Ele não trabalha sozinho. Estaria junto com um criminoso conhecido como Macaco Louco, e os dois, com a ajuda de outros homens, vêm espalhando as bombas pela cidade. Tudo indica que agem a mando da Alemanha. A recomendação sobre eles é uma só: se encontrar, fuja.",
      "Por que ninguém faz nada? A cidade fica na divisa entre dois estados, e nenhum deles consegue mandar ali sem pisar no território do outro. Por isso ela é chamada de Terra Sem Lei. Pra quem quer atacar sem ser incomodado, não existe lugar melhor.",
      "O governo não disse uma palavra. A polícia, que há pouco invadiu o maior cassino da cidade, não aparece nas ruas. As máfias da região estão envolvidas na confusão e nenhuma delas se mexe pra impedir o ataque. Um pedaço do país está sendo destruído por estrangeiros, e ninguém levanta a mão.",
      "A pergunta que ninguém quer fazer em voz alta é essa: será que este é o começo do declínio? Uma cidade sem lei, um governo calado e uma população sofrendo. Se a fumaça de hoje é só o início, o que vem depois?",
      "Algo está marcado pra esta noite, e dizem que tem a ver com um show. A redação segue acompanhando. Leiam as entrevistas desta edição.",
      "Fiquem ligados. Se protejam. E fiquem de olho. Eles estão entre nós."
    ]
  },
  {
    id: "buck-mcpato-no-cassino",
    secao: "Crônica",
    titulo: "Buck McPato entrou no cassino invadido pela polícia",
    subtitulo: "Notícias dizem que a segurança do lugar é praticamente dele. Suspeito demais.",
    autor: "M.J",
    edicao: "Edição nº 2",
    corpo: [
      "O homem mais rico dos Estados Unidos, Buck McPato, esteve na Terra Sem Lei. Fontes entregaram à redação uma fotografia dele caminhando pela cidade e entrando no cassino que a polícia invadiu. Agora ninguém sabe onde ele está. Foi embora do mesmo jeito que chegou, sem avisar.",
      "Uma das notícias que chegaram é a mais estranha. A empresa de segurança que vigia o cassino invadido seria, na prática, dele. Quem cuida do lugar que a polícia invadiu é o homem mais rico do país. A redação acha suspeito demais.",
      "Ele também não andava sozinho. Duas mulheres famosas, uma de cartola e outra vestida de circo, foram vistas pela cidade ao lado do sobrinho de McPato, e a redação recebeu uma fotografia dos autógrafos das duas. Quem entende do assunto diz que gente desse tamanho não assina nada à toa. Vem coisa grande por aí.",
      "A pergunta é difícil de evitar. O homem mais rico do país chega, entra no cassino, a cidade vira um inferno, e ele some. Será que está por trás disso tudo? A redação não afirma nada. Só não tira os olhos dele."
    ]
  },
  {
    id: "ao-vivo-no-meio-do-caos",
    secao: "Crônica",
    titulo: "Ao vivo, no meio do caos",
    subtitulo: "Entrevistas feitas enquanto a fumaça ainda subia.",
    autor: "A.F",
    edicao: "Edição nº 2",
    corpo: [
      "Enquanto as bombas explodiam, A.F conseguiu falar com algumas pessoas da cidade. Todas contaram a mesma coisa: o caos é geral, e cada um se salva como pode.",
      "Parte da população não esperou ninguém. Gente comum abriu a porta de casa, dividiu água e panos molhados e tirou vizinhos do meio da fumaça. Já que a polícia não faz nada e o governo também não, a própria cidade resolveu se cuidar.",
      "As máfias, que raramente concordam em alguma coisa, estão se ajudando entre elas. Uma se destaca: a máfia da Bela Dona. Os entrevistados diziam o nome baixinho. Ela ajuda sem parar e, a cada dia que passa, se firma como a maior da região. Ninguém soube explicar tanta generosidade. Quem sabe ela tenha a ver com o que está acontecendo. Quem sabe.",
      "Os entrevistados também falaram de um carro comprido, preto e dourado, de seis rodas e com uma cruz vermelha na frente, que andava pelas ruas no meio da confusão. Ninguém sabe de quem é, e ninguém chegou perto pra descobrir.",
      "Um dos informantes do jornal contou ainda que uma cantora conhecida como Quartzo, do grupo Nice Players, também está tentando resolver a situação. Os Nice Players vão fazer um show nesta noite, e ela pretende usar a influência que tem pra isso. O que ela tem em mente, ninguém sabe. Mas algo vai acontecer, e vai ser na noite do show."
    ]
  },
  {
    id: "o-governo-nao-vem",
    secao: "Crônica",
    titulo: "O governo não vem. A cidade não espera.",
    subtitulo: "A lei acabou na divisa. O resto é com a gente.",
    autor: "M.J",
    edicao: "Edição nº 2",
    corpo: [
      "Já procuraram o governo nas ruas, nas delegacias e nos jornais, e nada. A fumaça sobe, a cidade tosse e os vizinhos tiram uns aos outros do meio do gás.",
      "Ninguém de gravata apareceu, e ninguém de gravata vai aparecer, porque este endereço não está em nenhum mapa que eles leiam. Quem ficou aqui sabe: se a gente espera, a gente morre esperando."
    ]
  },
  {
    id: "o-carro-nao-me-ouve",
    secao: "Crônica",
    titulo: "Ó carro, por que não me ouves?",
    subtitulo: "Uma conversa que não leva a lugar nenhum, como quase tudo por aqui.",
    autor: "M.J",
    edicao: "Edição nº 2",
    corpo: [
      "Seu Bibi comprou o primeiro automóvel da rua e, desde então, não tem um dia de sossego. Hoje de manhã, com a cidade em fumaça e os vizinhos correndo pra todo lado, ele passou duas horas de joelhos diante do motor.",
      "“Ó carro, por que não me ouves? Mesmo amaldiçoado, tu deves me ouvir. Eu te dei óleo, te dei água, te dei até nome.”",
      "O carro, que nunca pegou antes das dez, tossiu duas vezes e respondeu no idioma dos carros: “Não adianta, Seu Bibi. Eu sou um carro.”",
      "Jota, o vizinho, passava com um balde d'água e parou pra assistir. “Seu Bibi, o senhor está falando com um pedaço de ferro.” Seu Bibi respondeu que já tinha falado com coisa pior. Tinha falado com o governo, e o governo também não ouviu.",
      "Foi aí que o carro, por pura teimosia, pegou. Andou três metros, engasgou e parou de novo, bem na porta da prefeitura. Dizem que foi coincidência. Outros dizem que o carro entende de política melhor que muita gente.",
      "No fim do dia, o carro seguia parado. O governo também. Pelo menos o carro tinha a desculpa de ser um carro."
    ]
  },
  {
    id: "pequenos-anuncios-e-avisos",
    secao: "Crônica",
    titulo: "Pequenos anúncios e avisos",
    subtitulo: "Vende-se, aluga-se e procura-se, com a previsão do tempo e uma nota oficial.",
    autor: "M.J",
    edicao: "Edição nº 2",
    corpo: [
      "Vende-se automóvel pouco rodado. Só anda quando quer, e quase nunca quer. Tratar com Seu Bibi, que não aguenta mais.",
      "Aluga-se quarto com vista para a divisa. Muito sossego, a lei nunca passa por aqui.",
      "Lenços molhados à venda, entrega na hora. Respire hoje, pague amanhã.",
      "Procura-se autoridade competente. Aceita-se qualquer uma que apareça.",
      "Previsão do tempo: fumaça de manhã, mais fumaça à tarde. À noite, show, se sobrar quem assista.",
      "Nota oficial: o governo informa que não tem nada a informar, e que continua informado."
    ]
  },
  {
    id: "cassino-de-las-vegas-invadido",
    secao: "Reportagem",
    titulo: "Alerta: o maior cassino de Las Vegas é invadido pela polícia",
    subtitulo: "Chefe do lugar morre em tiroteio, e boatos falam em Hydra, em um agente do Reino Unido e em um evento marcado pra esta semana.",
    autor: "F.Y",
    edicao: "Edição extra, atualizada",
    corpo: [
      "A polícia dos Estados Unidos invadiu o maior cassino de Las Vegas. A operação terminou em tiroteio dentro do salão.",
      "O motivo seria a suspeita de que a Hydra havia se infiltrado no cassino. Nos bastidores, ele era conhecido como um ponto onde se vendiam informações, e quem mandava ali era um homem que só se conhecia por Corvo.",
      "Corvo foi morto durante a ação. Era um homem corpulento, de sobretudo escuro, chapéu de aba curta e gravata clara, sempre de cara fechada. O posto de chefe do cassino agora está vago, e ninguém sabe dizer quem vai ocupá-lo.",
      "Mas nem tudo foi o que pareceu. Fontes ouvidas pela redação afirmam que a morte de Corvo já vinha sendo planejada, e que a ordem partiu do Reino Unido. O disparo teria sido de um agente britânico: um rapaz ruivo, de chapéu e casaco longo e escuro, que estava no salão durante a ação. A redação teve acesso a fotografias dele no momento da morte de Corvo.",
      "Fica a pergunta que ninguém consegue responder. Corvo foi morto só por ser um criminoso, ou os boatos de que ele vendia informações pra Hydra eram verdadeiros?",
      "Os mesmos boatos dizem que Corvo e outras organizações se preparavam para algum tipo de evento, e que ele pode acontecer ainda esta semana. Ninguém sabe dizer o que é.",
      "Há também um símbolo ligado ao caso: um olho aberto dentro de uma forma oval escura, com garras curvas em volta, como as patas de uma aranha. Quem vir esse desenho em qualquer lugar deve tomar cuidado.",
      "Do lado de fora, a situação também é grave. A região do cassino, conhecida por apostas e crimes, tenta apagar os vestígios do que aconteceu. Fotografias em poder da redação mostram o método: pessoas estripadas e corpos cortados e mutilados em plena luz do dia. Uma das imagens comprova isso.",
      "Outra fotografia mostra a polícia no local e, aparentemente, uma empresa de segurança privada vigiando o cassino. Segundo quem passou por lá, de noite a segurança parece fraca. Fica a dúvida se ainda existe dinheiro ou algo valioso lá dentro.",
      "Fiquem de olho nos cassinos. Fiquem de olho em todos os lugares. Eles já estão entre nós."
    ]
  },
  {
    id: "este-jornal-nasce-hoje",
    secao: "Nota da redação",
    titulo: "Este jornal nasce hoje",
    subtitulo: "Crônicas, reportagens e histórias de toda parte.",
    autor: "A redação",
    edicao: "Edição nº 1",
    corpo: [
      "A guerra não cabe em um comunicado oficial. Ela está nas trincheiras, mas também nas cidades, nos porões, nas filas de racionamento e nos salões onde se decide quem vive e quem morre.",
      "Este jornal vai contar tudo isso: crônicas do cotidiano, reportagens sobre o que acontece e histórias que alguém precisa registrar. Cada texto leva a assinatura de quem o escreveu.",
      "Todo mundo tem direito de saber de tudo, o bom e o ruim. Quanto ao que é verdade, isso fica por conta de quem lê."
    ]
  }
];
