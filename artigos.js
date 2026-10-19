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
