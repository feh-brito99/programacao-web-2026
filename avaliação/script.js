/* INICIALIZAÇÃO DO SCRIPT APÓS O CARREGAMENTO COMPLETO DO DOM */
document.addEventListener("DOMContentLoaded", () => {

  /* 1. DADOS DOS INTEGRANTES (ARRAY DE OBJETOS PARA ALIMENTAR O CARD) */
  const membros = [
    {
      id: "btn-chan",
      nome: "Bang Chan",
      dn: "03.10.1997",
      posicao: "Líder, Produtor, Vocalista e Dançarino",
      bio: "Líder do Stray Kids, treinou durante sete anos antes de montar a formação do grupo com os integrantes em quem mais confiava. Como pilar central da sub-unit 3RACHA, assina a composição, produção e os arranjos dos maiores lançamentos da carreira do grupo. É reconhecido por sua ética de trabalho incansável no estúdio, guiando as direções musicais da equipe e atuando como o refúgio seguro dos meninos e do fandom STAY.",
      foto: "imagens/bio-bangchan.png",
      assinatura: "imagens/ass-bangchan.png"
    },
    {
      id: "btn-leeknow",
      nome: "Lee Know",
      dn: "25.10.1998",
      posicao: "Dançarino Principal, Vocalista e Sub-Rapper",
      bio: "Com técnica lapidada desde seus anos de atuação como dançarino profissional de apoio, comanda o alinhamento das coreografias do grupo com rigor cirúrgico e precisão. Por trás de sua expressão séria no palco e de um humor espirituoso no convívio diário, entrega linhas vocais limpos e firmes. É o elemento de estabilidade que conduz a DanceRACHA em apresentações complexas de alta intensidade.",
      foto: "imagens/bio-leeknow.png",
      assinatura: "imagens/ass-leeknow.png"
    },
    {
      id: "btn-changbin",
      nome: "Changbin",
      dn: "11.08.1999",
      posicao: "Rapper Principal e Produtor",
      bio: "Dono de um flow veloz e de uma dicção agressiva, Changbin é a força rítmica que define o peso das faixas do grupo. Membro do 3RACHA com dezenas de créditos na KOMCA, constrói versos autobiográficos e batidas impactantes do conceito 'Mala Taste'. Essa presença cênica intimidadora contrasta com sua personalidade acolhedora e brincalhona nos bastidores, atuando como o principal animador da equipe.",
      foto: "imagens/bio-changbin.png",
      assinatura: "imagens/ass-changbin.png"
    },
    {
      id: "btn-hyunjin",
      nome: "Hyunjin",
      dn: "20.03.2000",
      posicao: "Dançarino Principal, Visual e Rapper",
      bio: "Reconhecido pelo apelo visual marcante e movimentos expressivos inspirados na dança contemporânea, transforma cada coreografia em uma encenação dramática sobre o palco. Além de atuar como embaixador de grifes internacionais no circuito da alta moda, canaliza sua sensibilidade artística compondo faixas melancólicas e dedicando-se à pintura em tela, consolidando-se como uma das figuras mais magnéticas da geração.",
      foto: "imagens/bio-hyunjin.png",
      assinatura: "imagens/ass-hyunjin.png"
    },
    {
      id: "btn-han",
      nome: "Han",
      dn: "14.09.2000",
      posicao: "Rapper Principal, Vocalista Líder e Produtor",
      bio: "Considerado o membro mais multifacetado do Stray Kids, alterna velocidade de rima e notas agudas de alta exigência vocal com naturalidade. Integrante do 3RACHA, escreve melodias e letras que traduzem sentimentos reais, momentos de ansiedade e superação pessoal em baladas aclamadas pelo público. Sua energia cômica espontânea divide espaço com uma maturidade musical fundamental para a sonoridade do grupo.",
      foto: "imagens/bio-han.png",
      assinatura: "imagens/ass-han.png"
    },
    {
      id: "btn-felix",
      nome: "Felix",
      dn: "15.09.2000",
      posicao: "Dançarino Líder e Rapper",
      bio: "Mundialmente famoso pelo contraste entre seu tom de voz grave inconfundível e sua presença calorosa, Felix é responsável pelas linhas de efeito que marcam a identidade de hits históricos como God's Menu. Nascido na Austrália, superou barreiras culturais no início da carreira e converteu-se em um ícone da moda global, aliando linhas de dança limpas a um magnetismo constante nos palcos internacionais.",
      foto: "imagens/bio-felix.png",
      assinatura: "imagens/ass-felix.png"
    },
    {
      id: "btn-seungmin",
      nome: "Seungmin",
      dn: "22.09.2000",
      posicao: "Vocalista Principal",
      bio: "Com postura disciplinada e dedicação contínua ao aprimoramento de suas técnicas de canto, Seungmin é a voz que sustenta as harmonias mais expressivas do grupo sobre bases industriais pesadas. Seu timbre quente e estável em apresentações ao vivo rendeu interpretações elogiadas em trilhas sonoras oficiais de grandes produções televisivas, servindo como o equilíbrio clássico na estrutura musical do conjunto.",
      foto: "imagens/bio-seungmin.png",
      assinatura: "imagens/ass-seungmin.png"
    },
    {
      id: "btn-in",
      nome: "I.N",
      dn: "08.02.2001",
      posicao: "Vocalista e Maknae",
      bio: "O membro mais jovem do grupo cresceu e amadureceu sob os holofotes, transformando-se de um aprendiz tímido em um dos artistas mais carismáticos e expressivos da 4ª geração. Pilar vocal da sub-unit VocalRACHA, destaca-se por seu timbre melódico doce e identidade única em baladas e faixas enérgicas. Querido e protegido por todos os sete integrantes desde os dias de formação, sua sofisticação no palco, estilo afiado e energia contagiante completam a dinâmica perfeita que fecha a química do Stray Kids.",
      foto: "imagens/bio-in.png",
      assinatura: "imagens/ass-in.png"
    }
  ];

  /* 2. CAPTURA DOS ELEMENTOS DO DOM PARA O CARD DINÂMICO */
  const foto = document.getElementById("foto-membro");
  const nome = document.getElementById("nome-membro");
  const dn = document.getElementById("data-nascimento")
  const posicao = document.getElementById("posicao-membro");
  const bio = document.getElementById("bio-membro");
  const assinatura = document.getElementById("ass-membro")
  const botoes = document.querySelectorAll(".btn-membro");

  /* 3. FUNÇÃO QUE ATUALIZA O CONTEÚDO DO CARD NA TELA */
  function exibirMembro(dados) {
    foto.src = dados.foto;
    foto.alt = `Foto do ${dados.nome}`;
    nome.textContent = dados.nome;
    dn.textContent = dados.dn;
    posicao.innerHTML = `<strong>Posição:</strong> ${dados.posicao}`;
    bio.textContent = dados.bio;
    assinatura.src = dados.assinatura;
    assinatura.alt = `Assinatura e SKZoo do ${dados.nome}`;
  }

  /* 4. EXIBIÇÃO INICIAL DO PRIMEIRO MEMBRO E SELEÇÃO DE ABA ATIVA */
  exibirMembro(membros[0]);

  const primeiroBotao = document.getElementById("btn-chan");
  if (primeiroBotao) {
      primeiroBotao.classList.add("ativo");
  }

  /* 5. EVENTO DE CLIQUE PARA TROCA DE ABAS E INTEGRANTES */
  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      botoes.forEach((b) => b.classList.remove("ativo"));
      botao.classList.add("ativo");
      const membroEscolhido = membros.find((m) => m.id === botao.id);
      if (membroEscolhido) {
        exibirMembro(membroEscolhido);
      }
    });
  });

  /* 6. MAPEAMENTO DAS IMAGENS DE RESULTADO DA ENQUETE */
  const fotosBias = {
    "Bang Chan": "imagens/bias-bangchan.png",
    "Lee Know": "imagens/bias-leeknow.png",
    "Changbin": "imagens/bias-changbin.png",
    "Hyunjin": "imagens/bias-hyunjin.png",
    "Han": "imagens/bias-han.png",
    "Felix": "imagens/bias-felix.png",
    "Seungmin": "imagens/bias-seungmin.png",
    "I.N": "imagens/bias-in.png"
  };

  /* 7. CAPTURA DOS ELEMENTOS DA ENQUETE NO DOM */
  const btnVotar = document.getElementById("btn-votar");
  const mensagemEnquete = document.getElementById("mensagem-enquete");
  const fotoResultado = document.getElementById("foto-bias-resultado");
  const radiosBias = document.querySelectorAll('input[name="bias"]');

  /* 8. EVENTO 'CHANGE': REAÇÃO EM TEMPO REAL À SELEÇÃO DOS BOTÕES DE RÁDIO */
  radiosBias.forEach((radio) => {
    radio.addEventListener("change", () => {
      mensagemEnquete.textContent = `Você escolheu ${radio.value}! Clique em registrar para confirmar.`;
      mensagemEnquete.style.color = "#a1a1aa";
      fotoResultado.src = "imagens/enquete.png";
      fotoResultado.alt = "Stray Kids";
    });
  });

  /* 9. EVENTO 'CLICK': VALIDAÇÃO DO FORMULÁRIO E CONFIRMAÇÃO DO VOTO */
  btnVotar.addEventListener("click", () => {
    const opcaoMarcada = document.querySelector('input[name="bias"]:checked');

    // Validação caso tente clicar sem marcar nenhum
    if (!opcaoMarcada) {
      mensagemEnquete.textContent = "Por favor, selecione um integrante antes de registrar o voto!";
      mensagemEnquete.style.color = "#ef4444";
      return;
    }

    const biasVotado = opcaoMarcada.value;

    // Troca a foto na hora pelo caminho do bias escolhido!
    fotoResultado.src = fotosBias[biasVotado];
    fotoResultado.alt = `Colagem oficial de ${biasVotado}`;

    // Mensagem de sucesso
    mensagemEnquete.textContent = `Seu bias oficial é: ${biasVotado}! 🎉`;
    mensagemEnquete.style.color = "#22c55e";
    mensagemEnquete.style.fontWeight = "bold";
    mensagemEnquete.style.marginBottom = "10px";
  });
});