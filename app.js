(function () {
  var raiz = document.getElementById('conteudo');
  var artigos = window.ARTIGOS || [];

  var SECOES = {
    cronica: { nome: 'Crônicas', valor: 'Crônica' },
    reportagem: { nome: 'Reportagens', valor: 'Reportagem' },
    historia: { nome: 'Histórias', valor: 'História' }
  };

  function el(tag, classe, texto) {
    var e = document.createElement(tag);
    if (classe) e.className = classe;
    if (texto) e.textContent = texto;
    return e;
  }

  function link(href, classe, texto) {
    var a = el('a', classe, texto);
    a.href = href;
    return a;
  }

  function assinatura(artigo) {
    var partes = [];
    partes.push(artigo.autor === 'A redação' ? 'Pela redação' : 'Por ' + artigo.autor);
    if (artigo.edicao) partes.push(artigo.edicao);
    return partes.join(', ');
  }

  function marcarSecao(chave) {
    var links = document.querySelectorAll('.secoes a');
    Array.prototype.forEach.call(links, function (a) {
      var ativo = a.getAttribute('data-secao') === chave;
      if (ativo) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  function foco() {
    raiz.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }

  function inicio(chave) {
    var secao = SECOES[chave];
    var lista = artigos.filter(function (a) {
      return !secao || a.secao === secao.valor;
    });

    raiz.innerHTML = '';
    marcarSecao(secao ? chave : '');
    document.title = secao ? secao.nome + ' | Viva ou Morra' : 'Viva ou Morra';

    if (!lista.length) {
      var vazio = el('section', 'vazio');
      vazio.appendChild(el('h2', null, secao ? 'Ainda não há ' + secao.nome.toLowerCase() + ' nesta edição' : 'A primeira edição está no prelo'));
      vazio.appendChild(el('p', null, secao ? 'Os textos desta seção chegam nas próximas edições.' : 'Os textos chegam em breve. Volte para ler.'));
      if (secao) vazio.appendChild(link('#/', 'voltar', 'Ver todos os textos'));
      raiz.appendChild(vazio);
      return;
    }

    var primeiro = lista[0];
    var destaque = el('article', 'destaque');
    destaque.appendChild(el('p', 'tag', primeiro.secao));
    var h2 = el('h2');
    h2.appendChild(link('#/artigo/' + primeiro.id, null, primeiro.titulo));
    destaque.appendChild(h2);
    if (primeiro.subtitulo) destaque.appendChild(el('p', 'subtitulo', primeiro.subtitulo));
    destaque.appendChild(el('p', 'assinatura', assinatura(primeiro)));
    destaque.appendChild(link('#/artigo/' + primeiro.id, 'ler', 'Ler o texto'));
    raiz.appendChild(destaque);

    var resto = lista.slice(1);
    if (resto.length) {
      raiz.appendChild(el('h3', 'mais', 'Mais textos'));
      var grade = el('div', 'grade');
      resto.forEach(function (a) {
        var item = el('article', 'item');
        item.appendChild(el('p', 'tag', a.secao));
        var h = el('h4');
        h.appendChild(link('#/artigo/' + a.id, null, a.titulo));
        item.appendChild(h);
        if (a.subtitulo) item.appendChild(el('p', 'subtitulo', a.subtitulo));
        item.appendChild(el('p', 'assinatura', assinatura(a)));
        grade.appendChild(item);
      });
      raiz.appendChild(grade);
    }
  }

  function artigo(id) {
    var a = artigos.filter(function (x) { return x.id === id; })[0];
    raiz.innerHTML = '';
    marcarSecao('');

    if (!a) {
      var perdido = el('section', 'vazio');
      perdido.appendChild(el('h2', null, 'Esse texto não foi encontrado'));
      perdido.appendChild(el('p', null, 'O link pode estar errado ou o texto saiu do ar.'));
      perdido.appendChild(link('#/', 'voltar', 'Voltar à primeira página'));
      raiz.appendChild(perdido);
      document.title = 'Texto não encontrado | Viva ou Morra';
      return;
    }

    document.title = a.titulo + ' | Viva ou Morra';
    var pagina = el('article', 'texto');
    pagina.appendChild(link('#/', 'voltar', 'Voltar à primeira página'));
    pagina.appendChild(el('p', 'tag', a.secao));
    pagina.appendChild(el('h2', null, a.titulo));
    if (a.subtitulo) pagina.appendChild(el('p', 'subtitulo', a.subtitulo));
    pagina.appendChild(el('p', 'assinatura', assinatura(a)));
    var corpo = el('div', 'corpo');
    a.corpo.forEach(function (p) { corpo.appendChild(el('p', null, p)); });
    pagina.appendChild(corpo);
    raiz.appendChild(pagina);
  }

  function rota() {
    var partes = location.hash.replace(/^#\/?/, '').split('/');
    if (partes[0] === 'artigo' && partes[1]) artigo(decodeURIComponent(partes[1]));
    else if (partes[0] === 'secao' && partes[1]) inicio(partes[1]);
    else inicio('');
    foco();
  }

  window.addEventListener('hashchange', rota);
  rota();
})();
