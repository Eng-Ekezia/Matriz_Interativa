# Matriz Curricular Interativa

Um visualizador web interativo e dinâmico para matrizes curriculares, desenvolvido em JavaScript puro (Vanilla JS) com HTML5 e Tailwind CSS. O projeto foi inicialmente criado para o curso de Engenharia Civil e de Energia do CEFET-MG, Campus Curvelo.

**[(https://matriz-interativa-engcivil.netlify.app/)]** **[(https://matriz-interativa-engenergia.netlify.app/)]** 

 ## 📜 Descrição

Este projeto fornece uma interface limpa, responsiva e acessível para que alunos e professores possam explorar a grade curricular de um curso. Ele permite visualizar disciplinas, suas ementas, bibliografias e, o mais importante, suas interdependências (pré-requisitos, co-requisitos e disciplinas futuras que dependem dela).

A aplicação é 100% *client-side* e é totalmente configurada por um único arquivo `json`, tornando-a facilmente adaptável para qualquer curso ou instituição.

## ✨ Funcionalidades Principais

  * **Visualização em Grade:** Exibe todas as disciplinas divididas por períodos.
  * **Destaque de Dependências:** Ao passar o mouse ou focar (via teclado) em uma disciplina, a grade destaca visualmente:
      * Pré-requisitos
      * Co-requisitos
      * Dependências Diretas (Nível 1)
      * Dependências Indiretas (Nível 2)
  * **Linhas de Conexão:** Renderiza linhas SVG (curvas de Bézier) em tempo real para conectar visualmente as disciplinas e suas dependências. Esta função pode ser ativada ou desativada.
  * **Detalhes da Disciplina:** Ao clicar em um card, um modal exibe informações completas, como ementa, carga horária, bibliografia básica e complementar.
  * **Navegação por Requisitos:** Dentro do modal, os pré-requisitos são clicáveis, permitindo "saltar" para a visualização de outra disciplina.
  * **Design Responsivo:** Funciona em desktops, tablets e celulares. Em telas pequenas, os cards adotam um layout vertical para melhor legibilidade.
  * **Temas Claro e Escuro:** Inclui um seletor de tema (Light/Dark Mode) que salva a preferência do usuário no `localStorage`.
  * **Legenda Dinâmica:** A legenda de eixos (ex: "Matemática", "Estruturas") é gerada automaticamente com base na configuração.
  * **Acessibilidade:** Interações via teclado são suportadas (`Tab`, `Enter`, `Esc`) e o foco é gerenciado em modais.

## 🚀 Arquitetura e Detalhes Técnicos

A aplicação é construída com **JavaScript moderno (ESM)**, sem a necessidade de *frameworks* ou *build steps*. A estrutura modular separa claramente as responsabilidades.

### Estrutura dos Arquivos

```
/
├── Matriz_atualizada_completa.json  # O CORAÇÃO DO PROJETO: Todos os dados do curso
├── index.html                       # Estrutura principal da página
├── css/
│   └── style.css                    # Estilos customizados, modo escuro e animações
└── js/
    ├── app.js                       # Ponto de entrada: carrega dados, inicializa módulos
    └── modules/
        ├── state.js                 # Gerenciador de estado global simples
        ├── dom.js                   # Cache de seletores do DOM
        ├── ui.js                    # Funções de renderização (header, legenda)
        ├── card.js                  # Lógica de renderização dos cards e da grade
        ├── events.js                # Gerenciador de todos os eventos de interação
        ├── modal.js                 # Lógica de abertura e população dos modais
        ├── lines.js                 # Lógica de desenho das linhas de conexão (SVG)
        └── utils.js                 # Funções utilitárias (cálculo de contraste, etc.)
```

### Principais Destaques Técnicos

1.  **Fonte de Dados Única (`.json`)**
    Toda a aplicação é alimentada pelo arquivo `Matriz_atualizada_completa.json`. Ele define não apenas as disciplinas (`courses`), mas também as informações do curso (`courseInfo`), o número de períodos (`totalPeriods`) e, crucialmente, as cores de cada eixo (`axisConfig`). Isso significa que para adaptar o projeto para outro curso, **nenhuma linha de código JavaScript precisa ser alterada.**

2.  **Mapeamento de Sucessores**
    Para permitir o destaque de dependências futuras (o que uma disciplina "libera"), o `app.js` constrói um `successorMap` (`Map`) durante a inicialização. Ele inverte a lógica dos pré-requisitos, criando um mapa onde cada ID de disciplina tem uma lista de disciplinas que dependem dela.

3.  **Contraste de Cor Automático**
    A função `getTextColorForBackground` em `utils.js` garante a acessibilidade. Ela calcula a luminosidade da cor de fundo de um card (definida no JSON) e decide dinamicamente se o texto deve ser claro (`text-white`) ou escuro (`text-slate-800`), garantindo sempre a melhor legibilidade.

4.  **Desenho de Linhas SVG Dinâmico**
    Quando as linhas estão ativadas, `lines.js` usa `getBoundingClientRect()` para obter as coordenadas exatas dos cards de origem e destino e desenha uma **curva de Bézier** SVG (`<path d="M... C...">`) entre eles. Isso cria uma conexão visual fluida que se adapta ao layout.

5.  **Responsividade com `style.css`**
    O CSS utiliza uma abordagem *mobile-first*. Em telas pequenas (`@media (max-width: 767px)`), os cards se tornam mais altos e usam `writing-mode: vertical-rl` para exibir o texto da sigla verticalmente, otimizando o espaço. Em telas de desktop, os nomes completos das disciplinas são exibidos.

## 🔧 Como Usar ou Adaptar para Outro Curso

Adaptar este projeto para um novo currículo é simples:

1.  **Clone o repositório.**
2.  **Edite `Matriz_atualizada_completa.json`:**
      * **`courseInfo`**: Altere `title`, `name` e `institution`.
      * **`totalPeriods`**: Defina o número de períodos/semestres do seu curso.
      * **`courses`**: Substitua o array com as disciplinas do seu curso. O formato de cada objeto de disciplina é crucial:
        ```json
        {
          "id": "CODIGO_UNICO_DA_DISCIPLINA",
          "nome": "Nome Completo da Disciplina",
          "ch": "Carga Horária (ex: 60h)",
          "periodo": 1, // Número do período
          "eixo": "NomeDoEixo", // Deve corresponder a uma chave em 'axisConfig'
          "prerequisitos": ["ID_DISCIPLINA_1", "ID_DISCIPLINA_2"],
          "corequisitos": [],
          "ementa": "Texto da ementa...",
          "bibliografiaBasica": ["Livro 1", "Livro 2"],
          "bibliografiaComplementar": [],
          "Sigla": "SIGLA", // Usado em telas menores
          "tipo": "Optativa" // Opcional. Use "Optativa" para borda tracejada
        }
        ```
      * **`axisConfig`**: Defina os "eixos" (categorias) do seu curso e as classes de cor do Tailwind CSS para cada um.
        ```json
        "axisConfig": {
          "NomeDoEixo": {
            "bg": "bg-blue-500",
            "text": "text-blue-800",
            "border": "border-blue-700",
            "lightBg": "bg-blue-100"
          },
          "OutroEixo": {
            "bg": "bg-green-500",
            "text": "text-green-800",
            "border": "border-green-700",
            "lightBg": "bg-green-100"
          }
        }
        ```
3.  **Execute Localmente:**
    Como o projeto usa Módulos ES (`import`/`export`), ele precisa ser servido por um servidor web (não funciona abrindo o `index.html` diretamente do arquivo).
      * Se você usa **VS Code**, instale a extensão `Live Server` e clique em "Go Live".
      * Se você tem **Python 3**, navegue até a pasta e execute:
        ```bash
        python -m http.server
        ```
      * Acesse `http://localhost:8000`.

## 🧑‍💻 Créditos

Criado pela **Prof.ª Carolina Vieira** e **Prof. Ezequiel Lima** ezequiel@cefetmg.br (CEFET-MG, Campus Curvelo), com o auxílio da IA Gemini do Google.
