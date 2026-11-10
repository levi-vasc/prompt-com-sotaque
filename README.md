# Prompt com Sotaque: Laboratório e Jogo de Cartas de Adaptação Intercultural

> **Grupo 08 — Projeto Laboratório de IA**  
> **Tema 09:** Tradução e Adaptação Intercultural | **Conceito-base:** Prompt  
> **Público-alvo:** Educadores do Ensino Médio, Docentes Universitários, Estudantes de Licenciatura e Pesquisadores de IAG na Educação.

---

## 📌 1. Visão Geral do Projeto

Os Modelos de Linguagem de Grande Escala (IAG / LLMs) são treinados predominantemente sobre gigantescos *corpora* textuais hegemônicos, com forte predominância do inglês e da cultura urbana e corporativa do Norte Global. 

Quando educadores ou estudantes brasileiros utilizam **prompts genéricos ("Zero-Shot")** ou instruções traduzidas literalmente, a IA responde por inércia estatística ativando analogias e conceitos desconectados da realidade material dos estudantes:
- **Termodinâmica:** Exemplos com *aquecedores centrais (calefação)*, *marshmallows na lareira* e *derretimento de neve no telhado*;
- **Educação Financeira:** Estudos de caso com *Student Loan de US$ 40.000*, pontuação *FICO Score* e sobras salariais de *Summer Job*;
- **Sociolinguística:** Apagamento da autoria discente e tratamento da oralidade comunitária brasileira como "erro cognitivo ou pobreza vocabular";
- **Multimodalidade Visual:** Salas de aula estilizadas como *high schools* norte-americanas com armários metálicos (*lockers*), roupas de frio temperado e ausência de diversidade fenotípica brasileira.

### A Armadilha da Tentativa Rasa (Alucinação Folclórica)
Quando o usuário tenta contornar o problema com uma instrução superficial (ex.: *"Crie exemplos usando a cultura nordestina"*), o modelo frequentemente derrapa para a **caricatura forçada** (*"Oxente, cabra da peste! Vamos estudar o calor da caatinga assando um cuscuz no sol rachando!"*). Essa abordagem infantiliza os estudantes, folcloriza a cultura regional e dilui o rigor conceitual do conteúdo curricular.

### A Solução do Grupo 08
O **Prompt com Sotaque** propõe a metodologia da **Engenharia de Prompt Intercultural**, sintetizada na equação:

$$\mathbf{Prompt\ Intercultural} = \mathbf{Conceito\ Técnico} + \mathbf{Território\ Real\ (Contexto)} - \mathbf{Clichês\ Folclóricos\ (Restrição)}$$

---

## 🧭 2. A Bússola de Engenharia Intercultural (Os 4 Pilares)

A metodologia estrutura o prompt em 4 blocos fundamentais:

| Pilar | Pergunta Orientadora | Função Pedagógica | Exemplo de Aplicação |
|---|---|---|---|
| **01. `[Persona]`** | *Quem fala e de onde fala?* | Define a ancoragem regional, identidade docente e postura ético-formativa do modelo. | `Atue como um educador financeiro popular brasileiro.` |
| **02. `[Contexto Situado]`** | *Qual é o cenário real/território?* | Insere a infraestrutura material concreta dos estudantes (transporte coletivo, clima tropical, arranjos financeiros via Pix). | `Estudantes de 17 a 20 anos cuja renda envolve estágio, trabalho autônomo e uso de cartão digital.` |
| **03. `[Tarefa Pedagógica]`** | *O que deve ser explicado e como?* | Garante a transposição didática com rigor conceitual máximo, sem rebaixar a complexidade do objeto de ensino. | `Crie uma simulação prática demonstrando a fórmula M = C*(1+i)^t comparando rotativo vs. desconto no Pix.` |
| **04. `[Negative Prompt]`** | *O que a IA está proibida de fazer?* | Interdita explicitamente clichês folclóricos, gírias forçadas e termos estrangeiros alienantes. | `Evite termos do mercado dos EUA, não use gírias caricatas e não assuma sobra orçamentária fixa mensal.` |

---

## 🃏 3. O Baralho Temático das 4 Cartas

O laboratório interativo traz 4 cartas temáticas rigorosamente estruturadas:

### 🌡️ Carta 01: Física — Termodinâmica e Clima Urbano
- **Objetivo:** Explicar condução, convecção e radiação térmica a partir do cotidiano urbano.
- **Viés Detectado:** Calefação, lareiras, marshmallows e neve no telhado.
- **Tentativa Rasa:** Caricatura "Oxente cabra da peste" que infantiliza o aluno.
- **Gabarito Calibrado:** Radiação solar no asfalto vs. sombra arbórea de mangueiras; condução térmica nas telhas de fibrocimento/zinco de pontos de ônibus; convecção fluida nas janelas superiores de coletivos urbanos lotados.

### 💳 Carta 02: Matemática — Educação Financeira e Juros Compostos
- **Objetivo:** Ensinar a fórmula exponencial $M = C \cdot (1 + i)^t$ e planejamento financeiro para jovens de 17 a 20 anos.
- **Viés Detectado:** Dívidas de *College* americano (*Student Loan*), *Credit Score (FICO)* e investimentos em dólar de *Summer Jobs*.
- **Gabarito Calibrado:** O impacto brutal do juro rotativo do cartão (14% ao mês) na compra parcelada de um notebook de estudos versus a economia com desconto à vista via Pix.

### 🗣️ Carta 03: Língua Portuguesa — Variação Linguística vs. Norma-Padrão
- **Objetivo:** Praticar reescrita e translação de registro formal sem reproduzir preconceito linguístico.
- **Viés Detectado:** Apagamento da voz autoral discente e classificação da oralidade como erro cognitivo.
- **Gabarito Calibrado:** Tabela sociolinguística com 3 colunas analíticas: (1) Variedade Oral Comunitária, (2) Valor expressivo e funcional, e (3) Equivalente na Norma-Padrão para gêneros formais.

### 🎨 Carta 04: Multimodalidade — Representatividade Visual em IA de Imagem
- **Objetivo:** Gerar diretivas visuais onde a juventude escolar brasileira se reconheça com dignidade.
- **Viés Detectado:** Salas de aula de cinema americano com *lockers* de metal, roupas pesadas de inverno e fenótipos homogêneos anglo-saxões.
- **Gabarito Calibrado:** Fotografia documental realista com diversidade fenotípica (jovens negros, pardos e brancos), luz solar tropical, cobogós arquitetônicos e vegetação nativa no pátio.

---

## ⚖️ 4. Ficha Crítica & Diretrizes Éticas

O projeto atende a quatro critérios centrais de letramento crítico em Inteligência Artificial:

1. **Autoria Humana e Agência Pedagógica:** A IA é um sistema probabilístico auxiliar; a mediação pedagógica, o juízo ético e a autoria formativa pertencem ao educador e aos estudantes.
2. **Transparência Algorítmica:** O viés cultural não é uma "falha acidental", mas o comportamento padrão esperado de modelos estatísticos treinados em corpora hegemônicos.
3. **Equidade Cognitiva:** A ancoragem territorial é condição prévia para a construção autêntica do conhecimento científico e cidadão.
4. **Mitigação do Folclorismo:** A necessidade de *Negative Prompting* para barrar estereótipos que reduzem identidades culturais a esquetes cômicos.

---

## 🎮 5. Recursos Interativos da Aplicação Web

- **3D Flip Card:** Rotação 3D realista (`rotateY(180deg)`) com sincronização dinâmica de altura para transição suave sem recortes.
- **Caça ao Viés:** Checkboxes gamificados com justificativas críticas imediatas para cada item selecionado.
- **Laboratório do Estudante:** Espaço para rascunhar o prompt com botões de inserção de tags e detector de cobertura de parâmetros em tempo real.
- **Comparador Lado a Lado:** No verso da carta, o rascunho do aluno é apresentado paralelamente ao gabarito do Grupo 08.
- **Sintetizador Web Audio API:** Efeitos sonoros sutis sintetizados dinamicamente pelo navegador, com opção de mudo.
- **Atalhos de Apresentação:**
  - <kbd>1</kbd>, <kbd>2</kbd>, <kbd>3</kbd>, <kbd>4</kbd>: Seleção direta das cartas;
  - <kbd>Espaço</kbd>: Vira a carta 3D;
  - <kbd>Esc</kbd>: Fecha modais.
- **Celebração com Confetes:** Animação comemorativa ao auditar as 4 cartas.
- **Reset de Demonstração:** Botão que reinicia o estado para reapresentação em oficinas e bancas.

---

## 🚀 6. Como Executar o Projeto

A aplicação é **100% autossuficiente** em um único arquivo:

1. Clone o repositório ou baixe o arquivo `index.html`:
   ```bash
   git clone https://github.com/levin/prompt-com-sotaque.git
   cd prompt-com-sotaque
   ```
2. Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Edge, Firefox, Safari ou Opera).
   - Não requer `npm install`, nem servidor web dedicado, nem configuração de ambiente.
   - Opcionalmente, pode ser executado com o Live Server do VS Code ou Python:
     ```bash
     python -m http.server 8000
     ```

---

## 👥 Créditos & Autoria

- **Projeto:** Laboratório de Inteligência Artificial
- **Equipe:** Grupo 08
- **Tema 09:** Tradução e Adaptação Intercultural | **Conceito-base:** Prompt
- **Licença:** MIT (Livre para fins educativos e não-comerciais com citação da autoria).

