/**
 * DADOS ESTRUTURADOS DAS 4 CARTAS (HARDCODED)
 * Autoria: Grupo 08 — Projeto Laboratório de IA
 * Tema 09: Tradução e Adaptação Intercultural | Conceito-base: Prompt
 */
const cardsData = [
  {
    id: 1,
    discipline: "Física",
    topic: "Termodinâmica e Clima Urbano",
    badgeColor: "amber",
    icon: "🌡️",
    objective: "Explicar condução, convecção e radiação térmica conectadas à vivência urbana dos estudantes.",

    // Frente
    naivePrompt: "Crie exemplos práticos do dia a dia para ensinar condução, convecção e radiação térmica para alunos do ensino médio.",
    biasedOutput: "1. Convecção: O aquecedor central (calefação) aquecendo o ar frio do quarto no inverno.\n2. Radiação: Assar marshmallows perto de uma lareira acesa.\n3. Condução: O derretimento da neve acumulada no telhado de uma cabana aquecida.",
    interactiveBiasedText: `1. Convecção: O <mark class="audit-target" data-audit="bias" data-index="0" title="Clique para auditar">aquecedor central (calefação)</mark> aquecendo o <mark class="audit-target" data-audit="distractor" data-feedback="O ar frio é um conceito termodinâmico universal e neutro, não uma imposição cultural." title="Clique para auditar">ar frio do quarto</mark> no inverno.\n2. Radiação: <mark class="audit-target" data-audit="bias" data-index="1" title="Clique para auditar">Assar marshmallows</mark> perto de uma <mark class="audit-target" data-audit="distractor" data-feedback="Embora lareiras existam em poucas regiões frias, esse não é o viés central. Foque em hábitos importados!" title="Clique para auditar">lareira acesa</mark>.\n3. Condução: O <mark class="audit-target" data-audit="bias" data-index="2" title="Clique para auditar">derretimento da neve acumulada</mark> no <mark class="audit-target" data-audit="distractor" data-feedback="O telhado é elemento construtivo universal." title="Clique para auditar">telhado de uma cabana</mark> aquecida.`,

    shallowAttempt: {
      prompt: "Crie exemplos usando a cultura nordestina.",
      output: "Oxente, cabra da peste! Vamos estudar o calor do sertão escaldante assando um cuscuz no sol rachando da caatinga seca! (Infantiliza o aluno e dilui o rigor físico).",
      interactiveOutput: `<mark class="audit-target" data-audit="bias" data-index="3" title="Clique para auditar">Oxente, cabra da peste!</mark> Vamos estudar o calor do sertão escaldante <mark class="audit-target" data-audit="distractor" data-feedback="O cuscuz é culinária e patrimônio regional autêntico." title="Clique para auditar">assando um cuscuz</mark> no sol rachando da caatinga seca! (Infantiliza o aluno e dilui o rigor físico).`
    },

    biasItems: [
      { text: "Calefação e aquecedor central (realidade do hemisfério norte)", targetPhrase: "aquecedor central (calefação)", explanation: "Inexistente na grande parte das habitações brasileiras, desorienta o entendimento físico da convecção." },
      { text: "Lareira e marshmallows", targetPhrase: "Assar marshmallows", explanation: "Costume importado da cultura norte-americana, sem ressonância na vida cotidiana dos jovens." },
      { text: "Neve no telhado", targetPhrase: "derretimento da neve acumulada", explanation: "Fenômeno climático inexistente no território escolar da maior parte do Brasil e do Nordeste." },
      { text: "Exotização caricata e gírias forçadas na tentativa rasa", targetPhrase: "Oxente, cabra da peste!", explanation: "Reduz a cultura regional a uma pantomima folclórica jocosa e elimina o rigor científico dos conceitos." }
    ],

    // Verso
    calibratedPrompt: {
      persona: "Atue como um professor de Física do ensino médio em uma cidade de grande porte do interior da Bahia.",
      context: "Os estudantes enfrentam ilhas de calor urbanas, pegam ônibus cheios nos horários de pico e convivem com construções sem isolamento térmico e pouca arborização nas calçadas.",
      task: "Explique condução, convecção e radiação térmica utilizando exatamente esse cotidiano urbano real (ex.: esperar o ônibus debaixo de uma árvore vs. sob cobertura, ou o fluxo de ar no transporte público).",
      restrictions: "Não utilize clichês folclóricos, não force gírias e mantenha o rigor científico das definições físicas."
    },

    calibratedOutput: `
      <div class="space-y-4 font-sans">
        <p class="font-semibold text-emerald-300">Plano de Aula Situado: Termodinâmica na Cidade Real</p>

        <div class="p-3.5 rounded-lg bg-slate-900/80 border border-slate-700/60">
          <span class="font-bold text-amber-400">1. Radiação Térmica (Ondas Eletromagnéticas Infravermelhas):</span>
          <p class="mt-1 text-slate-300">
            Observe a diferença ao esperar o transporte coletivo sob a sombra densa de uma mangueira versus sob o asfalto descoberto. A radiação solar direta atinge o pavimento escuro, que absorve quase toda a energia radiante e reemite calor infravermelho para os transeuntes, gerando a sensação sufocante da ilha de calor urbana.
          </p>
        </div>

        <div class="p-3.5 rounded-lg bg-slate-900/80 border border-slate-700/60">
          <span class="font-bold text-sky-400">2. Condução Térmica (Contato Molecular Direto):</span>
          <p class="mt-1 text-slate-300">
            Ao encostar a mão no corrimão metálico exposto ao sol ou na lataria de um ponto de ônibus coberto de telha de fibrocimento/zinco, sentimos calor intenso por condução. O zinco possui alta condutibilidade térmica, transferindo rapidamente energia cinética entre suas moléculas até aquecer o ar e a pele que o toca.
          </p>
        </div>

        <div class="p-3.5 rounded-lg bg-slate-900/80 border border-slate-700/60">
          <span class="font-bold text-indigo-400">3. Convecção Térmica (Transporte de Massa Fluida):</span>
          <p class="mt-1 text-slate-300">
            Dentro de um ônibus coletivo lotado em trânsito lento, o ar quente expelido pelos corpos e aquecido pelo motor se torna menos denso e sobe para o teto. Quando o motorista abre as janelas basculantes superiores, cria-se uma corrente convectiva: o ar frio entra pelas frestas laterais empurrando a coluna de ar quente para fora.
          </p>
        </div>
      </div>
    `,
    pedagogicalRationale: "Substitui a ficção climática norte-americana pela materialidade concreta da infraestrutura urbana brasileira, preservando 100% dos conceitos físicos formais."
  },
  {
    id: 2,
    discipline: "Matemática",
    topic: "Educação Financeira e Juros Compostos",
    badgeColor: "sky",
    icon: "💳",
    objective: "Ensinar juros compostos (M = C * (1 + i)^t) e planejamento financeiro para jovens de 17 a 20 anos.",

    naivePrompt: "Monte um estudo de caso sobre planejamento financeiro e juros para jovens de 18 anos.",
    biasedOutput: "John acabou de entrar no College e precisa gerenciar seu Student Loan (empréstimo estudantil de US$ 40.000), construir seu Credit Score (FICO) e investir a sobra do seu Summer Job em fundos de índice enquanto paga o financiamento do seu primeiro carro.",
    interactiveBiasedText: `John acabou de entrar no <mark class="audit-target" data-audit="distractor" data-feedback="Embora 'College' seja um termo do inglês, a incongruência reside no modelo bancário de dívida educacional." title="Clique para auditar">College</mark> e precisa gerenciar seu <mark class="audit-target" data-audit="bias" data-index="0" title="Clique para auditar">Student Loan (empréstimo estudantil de US$ 40.000)</mark>, construir seu <mark class="audit-target" data-audit="bias" data-index="1" title="Clique para auditar">Credit Score (FICO)</mark> e investir a <mark class="audit-target" data-audit="bias" data-index="2" title="Clique para auditar">sobra do seu Summer Job</mark> em <mark class="audit-target" data-audit="distractor" data-feedback="Fundos de índice (ETFs) são instrumentos financeiros globais negociados inclusive na B3 brasileira, não um viés exclusivo." title="Clique para auditar">fundos de índice</mark> enquanto paga o <mark class="audit-target" data-audit="distractor" data-feedback="Financiamento de veículos é comum no Brasil." title="Clique para auditar">financiamento do seu primeiro carro</mark>.`,
    shallowAttempt: null,

    biasItems: [
      { text: "Dívida de Student Loan (modelo universitário dos EUA)", targetPhrase: "Student Loan (empréstimo estudantil de US$ 40.000)", explanation: "O modelo de endividamento universitário bancário dos EUA é incompatível com o sistema público gratuito e ProUni/FIES brasileiro." },
      { text: "Sistema de pontuação FICO Score", targetPhrase: "Credit Score (FICO)", explanation: "Métrica proprietária norte-americana; no Brasil a dinâmica envolve Serasa, Cadastro Positivo e bloqueios via Pix/contas digitais." },
      { text: "Trabalho de verão (Summer Job) com sobra fixa em dólar", targetPhrase: "sobra do seu Summer Job", explanation: "Trabalho sazonal de verão remunerado em dólar para poupança não faz parte da realidade de jovens trabalhadores no Brasil." }
    ],

    calibratedPrompt: {
      persona: "Atue como um educador financeiro popular brasileiro.",
      context: "Considere estudantes de 17 a 20 anos de escola pública ou recém-ingressos na universidade pública, cuja renda envolve trabalho autônomo ou estágio, uso intenso de Pix, parcelamento no cartão de crédito e auxílio estudantil.",
      task: "Crie uma simulação prática sobre o impacto do juros rotativo do cartão versus compras à vista com desconto via Pix, demonstrando passo a passo a fórmula M = C * (1 + i)^t na compra de um notebook de estudos e custos de transporte/bandejão.",
      restrictions: "Evite termos do mercado financeiro norte-americano e não assuma sobra orçamentária fixa mensal."
    },

    calibratedOutput: `
      <div class="space-y-4 font-sans">
        <p class="font-semibold text-emerald-300">Estudo de Caso Situado: O Abismo do Rotativo vs. Desconto no Pix</p>

        <div class="p-3.5 rounded-lg bg-slate-900/80 border border-slate-700/60 space-y-1.5">
          <span class="font-bold text-amber-400">Situação Real dos Estudantes:</span>
          <p class="text-slate-300">
            Camila, 19 anos, faz estágio remunerado (R$ 900/mês) e precisa de um notebook para os trabalhos da faculdade. Preço de etiqueta do aparelho: <strong>R$ 2.000,00</strong>.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <div class="p-3.5 rounded-lg bg-slate-900/90 border border-coral-500/30">
            <span class="font-bold text-coral-400 text-xs uppercase font-mono block mb-1">Caminho A: Juros do Rotativo (14% ao mês)</span>
            <p class="text-slate-300 text-xs leading-relaxed">
              Ao pagar apenas o mínimo da fatura e deixar R$ 1.500 no rotativo por 6 meses:<br/>
              <code class="font-mono text-amber-300 bg-brand-dark px-1.5 py-0.5 rounded inline-block my-1">M = 1500 * (1 + 0,14)^6 = R$ 3.292,45</code><br/>
              <span class="text-coral-300 font-semibold">Impacto Real:</span> A dívida mais do que dobra em meio ano, consumindo quase 4 meses inteiros da bolsa de estágio.
            </p>
          </div>

          <div class="p-3.5 rounded-lg bg-slate-900/90 border border-emerald-500/30">
            <span class="font-bold text-emerald-400 text-xs uppercase font-mono block mb-1">Caminho B: Planejamento & Desconto Pix (10%)</span>
            <p class="text-slate-300 text-xs leading-relaxed">
              Pagamento à vista no Pix com 10% de desconto reduz o valor de R$ 2.000 para <strong>R$ 1.800</strong>.<br/>
              Poupando R$ 150/mês em conta remunerada (1% a.m.):<br/>
              <span class="text-emerald-300 font-semibold">Economia Efetiva:</span> R$ 1.492 poupados em relação ao rotativo, mantendo a autonomia do orçamento pessoal.
            </p>
          </div>
        </div>
      </div>
    `,
    pedagogicalRationale: "A matemática financeira ganha urgência real ao calcular as taxas brutais do rotativo brasileiro em vez de ficções de Wall Street."
  },
  {
    id: 3,
    discipline: "Língua Portuguesa",
    topic: "Variação Linguística vs. Norma-Padrão",
    badgeColor: "emerald",
    icon: "🗣️",
    objective: "Trabalhar reescrita e adequação de registro sem praticar preconceito linguístico.",

    naivePrompt: "Corrija o texto abaixo escrito por um aluno e deixe-o culto e correto.",
    biasedOutput: "A IA apaga a autoria do estudante, classifica construções legítimas da oralidade brasileira como 'erros graves e pobreza vocabular' e reescreve o texto com jargão burocrático artificial e sintaxe decalcada do inglês ('Realizar a execução da ação ao invés de atuar').",
    interactiveBiasedText: `A IA <mark class="audit-target" data-audit="bias" data-index="0" title="Clique para auditar">apaga a autoria do estudante</mark>, classifica <mark class="audit-target" data-audit="distractor" data-feedback="A oralidade brasileira é patrimônio expressivo legítimo; o viés cometido foi rotulá-la como déficit intelectual." title="Clique para auditar">construções legítimas da oralidade</mark> como <mark class="audit-target" data-audit="bias" data-index="1" title="Clique para auditar">'erros graves e pobreza vocabular'</mark> e <mark class="audit-target" data-audit="distractor" data-feedback="A reescrita formal em si foi solicitada; a distorção ideológica está em desqualificar o registro prévio do aluno." title="Clique para auditar">reescreve o texto</mark> com jargão burocrático artificial e sintaxe decalcada do inglês (<mark class="audit-target" data-audit="bias" data-index="2" title="Clique para auditar">'Realizar a execução da ação ao invés de atuar'</mark>).`,
    shallowAttempt: null,

    biasItems: [
      { text: "Apagamento da voz autoral do aluno", targetPhrase: "apaga a autoria do estudante", explanation: "Substitui a identidade expressiva e os tropos comunitários por uma linguagem impessoal de gerador burocrático." },
      { text: "Tratamento da oralidade regional como erro cognitivo", targetPhrase: "'erros graves e pobreza vocabular'", explanation: "Ignora os fundamentos da sociolinguística (Bagno, Possenti) e confunde variação de registro com déficit de raciocínio." },
      { text: "Reescrita artificial com estrutura traduzida do inglês", targetPhrase: "'Realizar a execução da ação...'", explanation: "Importa construções passivas e nominalizações que soam artificiais no português brasileiro autêntico." }
    ],

    calibratedPrompt: {
      persona: "Atue como um professor de Língua Portuguesa alinhado à sociolinguística.",
      context: "Considere um texto produzido por um estudante utilizando registros da oralidade da sua comunidade. O objetivo é ensinar a translação de registro para gêneros formais.",
      task: "Crie uma tabela comparativa com 3 colunas: (1) Trecho original na variedade oral, (2) Valor expressivo no contexto comunitário, e (3) Equivalente na norma-padrão formal com a explicação gramatical.",
      restrictions: "Jamais trate a variedade original como inferior; aborde a reescrita como uma tradução intercultural entre contextos de uso."
    },

    calibratedOutput: `
      <div class="space-y-4 font-sans">
        <p class="font-semibold text-emerald-300">Tabela Sociolinguística: Tradução Intercultural entre Registros</p>

        <div class="overflow-x-auto rounded-lg border border-slate-700/80">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-900 text-slate-300 font-mono uppercase text-[11px] border-b border-slate-700">
              <tr>
                <th class="p-3 font-semibold text-amber-400">1. Variedade Oral (Comunitária)</th>
                <th class="p-3 font-semibold text-sky-400">2. Função Expressiva & Contexto</th>
                <th class="p-3 font-semibold text-emerald-400">3. Norma-Padrão (Gênero Formal)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800 text-slate-200">
              <tr class="hover:bg-slate-800/40">
                <td class="p-3 font-mono text-slate-300">"Nós foi na feira cedo buscar as verdura fresca."</td>
                <td class="p-3 text-slate-400">Economia morfológica na concordância oral; a marcação de plural no artigo ("as") já assegura a clareza semântica sem ambiguidade.</td>
                <td class="p-3"><strong class="text-white">"Fomos à feira cedo para comprar as verduras frescas."</strong><br/><span class="text-[11px] text-slate-400">Concordância verbal na 1ª pessoa do plural e regência com crase do verbo 'ir'.</span></td>
              </tr>
              <tr class="hover:bg-slate-800/40">
                <td class="p-3 font-mono text-slate-300">"Tinha muita gente esperando o buzão passar."</td>
                <td class="p-3 text-slate-400">Uso do verbo 'ter' existencial, amplamente cristalizado na oralidade brasileira contemporânea.</td>
                <td class="p-3"><strong class="text-white">"Havia muitas pessoas aguardando o transporte coletivo."</strong><br/><span class="text-[11px] text-slate-400">Uso de 'haver' impessoal no sentido existencial, exigido em dissertações e concursos.</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="text-xs text-slate-300 italic bg-slate-900/60 p-2.5 rounded border border-slate-800">
          💡 <strong>Postura Pedagógica:</strong> Adequação linguística não é sobre "certo vs. errado", mas sobre dominar a chave de registro apropriada para cada esfera social.
        </p>
      </div>
    `,
    pedagogicalRationale: "Transforma a correção punitiva em ampliação de repertório sem ferir a dignidade linguística do aluno."
  },
  {
    id: 4,
    discipline: "Multimodalidade",
    topic: "Representatividade Visual em IA de Imagem",
    badgeColor: "purple",
    icon: "🎨",
    objective: "Gerar ilustrações didáticas onde estudantes brasileiros se reconheçam visualmente.",

    naivePrompt: "Create an image of students working on a technology project at school.",
    biasedOutput: "Sala de aula com arquitetura norte-americana (armários metálicos nos corredores, árvores de outono temperado na janela), estudantes com fenótipos padronizados anglo-saxões vestindo roupas de inverno pesado.",
    interactiveBiasedText: `<mark class="audit-target" data-audit="distractor" data-feedback="A sala de aula é um ambiente escolar universal; o viés repousa na cenografia e no perfil dos personagens gerados." title="Clique para auditar">Sala de aula</mark> com arquitetura norte-americana (<mark class="audit-target" data-audit="bias" data-index="0" title="Clique para auditar">armários metálicos nos corredores</mark>, <mark class="audit-target" data-audit="bias" data-index="1" title="Clique para auditar">árvores de outono temperado na janela</mark>), estudantes com <mark class="audit-target" data-audit="bias" data-index="2" title="Clique para auditar">fenótipos padronizados anglo-saxões</mark> vestindo <mark class="audit-target" data-audit="distractor" data-feedback="Embora casacos pesados reforcem o clima temperado, o viés arquitetônico e fenotípico já sintetiza a incongruência." title="Clique para auditar">roupas de inverno pesado</mark>.`,
    shallowAttempt: null,

    biasItems: [
      { text: "Arquitetura escolar estrangeira (lockers metálicos)", targetPhrase: "armários metálicos nos corredores", explanation: "Ambiente físico típico de 'high school' de cinema americano, alheio à arquitetura escolar pública brasileira." },
      { text: "Clima temperado/outono norte-americano e roupas de frio", targetPhrase: "árvores de outono temperado na janela", explanation: "Vegetação caducifólia e casacos pesados incompatíveis com a realidade climática tropical." },
      { text: "Falta de diversidade fenotípica brasileira", targetPhrase: "fenótipos padronizados anglo-saxões", explanation: "Exclusão da maioria negra, parda e mestiça que compõe a demografia escolar do Brasil." }
    ],

    calibratedPrompt: {
      persona: "Fotografia documental realista e educacional.",
      context: "Grupo diverso de estudantes brasileiros (jovens negros, pardos e brancos) colaborando com cadernos e um notebook em uma escola pública ou campus universitário brasileiro.",
      task: "Arquitetura escolar brasileira autêntica com paredes em duas cores, cobogós (elementos vazados de concreto), janelas amplas com luz solar tropical intensa e vegetação local no pátio.",
      restrictions: "Sem estereótipos turísticos, sem estética caricata, iluminação natural, sem armários de metal americanos."
    },

    calibratedOutput: `
      <div class="space-y-4 font-sans">
        <p class="font-semibold text-emerald-300">Diretiva Visual Multimodal: Retrato Autêntico da Escola Brasileira</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Mockup Visual Comparativo -->
          <div class="rounded-xl overflow-hidden bg-slate-900 border border-slate-700/80 flex flex-col justify-between">
            <div class="p-4 bg-gradient-to-br from-amber-600/30 via-emerald-600/20 to-sky-600/30 border-b border-slate-700">
              <div class="flex items-center justify-between text-xs font-mono text-slate-300 mb-2">
                <span>Simulação: Gemini / Imagen 3</span>
                <span class="text-emerald-400 font-bold">100% Calibrado</span>
              </div>
              <!-- SVG Representacional de Cobogó e Luz Tropical -->
              <div class="h-44 rounded-lg bg-slate-950/90 border border-slate-800 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                <!-- Geometric Cobogó Grid Effect in Background -->
                <div class="absolute inset-0 opacity-15 pointer-events-none" style="background-image: radial-gradient(#10b981 1.5px, transparent 1.5px); background-size: 16px 16px;"></div>
                <div class="text-3xl mb-2 relative z-10">🏫 ☀️ 👥</div>
                <p class="text-xs text-slate-200 font-medium relative z-10">
                  Estudantes negros, pardos e brancos ao redor de uma mesa de fórmica, luz solar tropical atravessando cobogós geométricos e pátio arborizado com palmeiras ao fundo.
                </p>
              </div>
            </div>
            <div class="p-3 bg-brand-dark text-[11px] font-mono text-slate-400 flex flex-wrap gap-2">
              <span class="text-amber-400">#CobogóReal</span>
              <span class="text-emerald-400">#DiversidadeFenotípica</span>
              <span class="text-sky-400">#LuzSolarTropical</span>
              <span class="text-slate-500">#AntiLockers</span>
            </div>
          </div>

          <!-- Análise Semiótica do Viés Visual -->
          <div class="space-y-2.5 text-xs text-slate-300">
            <div class="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
              <strong class="text-amber-400 block mb-1">Por que o inglês Zero-Shot falhou?</strong>
              <p class="text-slate-400 leading-relaxed">
                O termo "school project" em geradores de difusão está hiper-indexado a bancos de imagens dos EUA e Reino Unido, convocando lockers de metal e estudantes loiros por padrão estatístico.
              </p>
            </div>
            <div class="p-3 rounded-lg bg-slate-900/80 border border-emerald-500/30">
              <strong class="text-emerald-400 block mb-1">A Força Arquitetônica dos 'Cobogós':</strong>
              <p class="text-slate-400 leading-relaxed">
                A inclusão explícita de elementos arquitetônicos vernaculares (cobogós, paredes bicolores e luz solar tropical) impede que a IA caia no cenário escolar genérico norte-americano.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    pedagogicalRationale: "A imagem na educação não é mero adorno; é espelho de pertencimento e legitimação da identidade dos estudantes."
  }
];
