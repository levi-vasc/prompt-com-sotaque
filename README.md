# Prompt com Sotaque: Jogo de Cartas de Adaptação Intercultural

> **Projeto Laboratório de IA**  
> **Tema:** Tradução e Adaptação Intercultural | **Conceito-base:** Prompt  
> **Público-alvo:** Educadores e Estudantes do Ensino Médio

---

## 📌 1. Visão Geral do Projeto

Os Modelos de Linguagem de Grande Escala (IAG / LLMs) são treinados predominantemente sobre gigantescos *corpora* textuais hegemônicos, com forte predominância do inglês e da cultura urbana e corporativa do Norte Global. 

Quando educadores ou estudantes brasileiros utilizam **prompts genéricos ("Zero-Shot")** ou instruções traduzidas literalmente, a IA responde por inércia estatística ativando analogias e conceitos desconectados da realidade dos estudantes:

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
| **02. `[Contexto]`** | *Qual é o cenário real/território?* | Insere a infraestrutura material concreta dos estudantes (transporte coletivo, clima tropical, arranjos financeiros via Pix). | `Estudantes de 17 a 20 anos cuja renda envolve estágio, trabalho autônomo e uso de cartão digital.` |
| **03. `[Tarefa]`** | *O que deve ser explicado e como?* | Garante a transposição didática com rigor conceitual máximo, sem rebaixar a complexidade do objeto de ensino. | `Crie uma simulação prática demonstrando a fórmula M = C*(1+i)^t comparando rotativo vs. desconto no Pix.` |
| **04. `[Negative Prompt]`** | *O que a IA está proibida de fazer?* | Interdita explicitamente clichês folclóricos, gírias forçadas e termos estrangeiros alienantes. | `Evite termos do mercado dos EUA, não use gírias caricatas e não assuma sobra orçamentária fixa mensal.` |

---

## 🃏 3. O Baralho Temático das 4 Cartas

O laboratório interativo traz 4 cartas temáticas rigorosamente estruturadas:

### 🌡️ Carta 01: Física — Termodinâmica e Clima Urbano
- **Objetivo:** Explicar condução, convecção e radiação térmica a partir do cotidiano urbano.

### 💳 Carta 02: Matemática — Educação Financeira e Juros Compostos
- **Objetivo:** Ensinar a fórmula exponencial $M = C \cdot (1 + i)^t$ e planejamento financeiro para jovens de 17 a 20 anos.

### 🗣️ Carta 03: Português — Variação Linguística vs. Norma-Padrão
- **Objetivo:** Praticar reescrita e translação de registro formal sem reproduzir preconceito linguístico.

### 🎨 Carta 04: Artes — Representatividade Visual em IA de Imagem
- **Objetivo:** Gerar diretivas visuais onde a juventude escolar brasileira se reconheça com dignidade.

---

## ⚖️ 4. Ficha Crítica & Diretrizes Éticas

O projeto atende a quatro critérios centrais de letramento crítico em Inteligência Artificial:

1. **Autoria Humana e Agência Pedagógica:** A IA é um sistema probabilístico auxiliar; a mediação pedagógica, o juízo ético e a autoria pertencem ao educador e aos estudantes.
2. **Transparência Algorítmica:** O viés cultural não é uma "falha acidental", mas o comportamento padrão esperado de modelos estatísticos treinados em uma cultura dominante.
3. **Equidade Cognitiva:** A ancoragem territorial é condição prévia para a construção autêntica do conhecimento científico e cidadão.
4. **Mitigação do Folclorismo:** A necessidade de *Negative Prompting* para barrar estereótipos que reduzem identidades culturais a esquetes cômicos.

---

## 🎮 5. Recursos Interativos da Aplicação Web

- **3D Flip Card:** Rotação 3D realista com sincronização dinâmica de altura para transição suave sem recortes.
- **Caça ao Viés:** Checkboxes com justificativas críticas para cada item selecionado.
- **Laboratório do Estudante:** Espaço para rascunhar o prompt com botões de inserção de tags.
- **Comparador Lado a Lado:** No verso da carta, o rascunho do aluno é apresentado paralelamente ao gabarito.
- **Sintetizador Web Audio API:** Efeitos sonoros sutis sintetizados dinamicamente pelo navegador, com opção de mudo.
- **Atalhos de Apresentação:**
  - <kbd>1</kbd>, <kbd>2</kbd>, <kbd>3</kbd>, <kbd>4</kbd>: Seleção direta das cartas;
  - <kbd>Espaço</kbd>: Vira a carta 3D;
  - <kbd>Esc</kbd>: Fecha modais.
- **Celebração com Confetes:** Animação comemorativa ao concluir as 4 cartas.
- **Reset de Demonstração:** Botão que reinicia o estado da aplicação.

---

## 🚀 6. Como Executar o Projeto

1. Clone o repositório ou baixe o arquivo `index.html`:
   ```bash
   git clone https://github.com/levin/prompt-com-sotaque.git
   cd prompt-com-sotaque
   ```
2. Abra o arquivo `index.html` em qualquer navegador moderno (ex.: Chrome, Firefox).
   - Não requer `npm install`, nem servidor web dedicado, nem configuração de ambiente.
   - Opcionalmente, pode ser executado com o Live Server do VS Code ou Python:
     ```bash
     python -m http.server 8000
     ```

---

## 👥 Créditos & Autoria

- **Projeto:** Laboratório de Inteligência Artificial
- **Autor:** Levi Nogueira Vasconcelos
- **Tema:** Tradução e Adaptação Intercultural | **Conceito-base:** Prompt
- **Licença:** MIT (Livre para fins educativos e não-comerciais com citação da autoria).

