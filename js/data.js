const coursesData = [
    // Período 1
    {
        "id": "G10CFVR0.01",
        "nome": "Cálculo com Funções de uma Variável Real",
        "ch": "90h",
        "periodo": 1,
        "eixo": "Matemática",
        "prerequisitos": [],
        "corequisitos": [],
        "ementa": "Funções Reais: polinomiais, modulares, exponenciais e logarítmicas, trigonométricas e trigonométricas inversas. Limites e continuidade. Derivadas: conceito, regras de derivação e diferenciais. Aplicações de derivadas: taxas relacionadas, esboço de gráficos e otimização. Primitivas elementares.",
        "bibliografiaBasica": [
            "FLEMMING, Diva Marília; GONÇALVES, Mírian Buss. Cálculo A: funções, limite, derivação e integração. 6. ed. rev. e ampl. São Paulo: Pearson Prentice Hall, c2007.",
            "THOMAS, George Brinton; WEIR, Maurice D.; HASS, Joel. Cálculo: volume 1. 12. ed. São Paulo: Pearson Education do Brasil, c2013.",
            "STEWART, James. Cálculo: volume 1. 7. ed. São Paulo: Cengage Learning, c2014."
        ],
        "bibliografiaComplementar": [
            "LEITHOLD, Louis. O cálculo com geometria analítica. 3. ed. São Paulo: Harbra, c1994. v. 1.",
            "IEZZI, Gelson; MURAKAMI, Carlos. Fundamentos de matemática elementar, 1: conjuntos, funções. 8. ed. São Paulo: Atual, 2004.",
            "IEZZI, Gelson; DOLCE, Osvaldo; MURAKAMI, Carlos. Fundamentos de matemática elementar, 2: logaritmos. 9. ed. São Paulo: Atual, 2004.",
            "IEZZI, Gelson. Fundamentos de matemática elementar, 3: trigonometria. 8. ed. São Paulo: Atual, 2004.",
            "IEZZI, Gelson. Fundamentos de matemática elementar, 6: complexos, polinômios, equações. 7. ed. São Paulo: Atual, 2005."
        ]
    },
    {
        "id": "G10GAAL0.01",
        "nome": "Geometria Analítica e Álgebra Linear",
        "ch": "60h",
        "periodo": 1,
        "eixo": "Matemática",
        "prerequisitos": [],
        "corequisitos": [],
        "ementa": "Matrizes, sistemas de equações lineares e determinantes. Álgebra vetorial. Retas e planos. Espaços vetoriais em R2 e R3. Autovalores e autovetores de matrizes. Diagonalização de matrizes. Cônicas.",
        "bibliografiaBasica": [
            "BOLDRINI, José Luiz. Álgebra linear. 3. ed. São Paulo: Harbra, c1986.",
            "BOULOS, Paulo. Geometria analítica: um tratamento vetorial. 3. ed. São Paulo: Pearson Education do Brasil, 2005.",
            "WINTERLE, Paulo. Geometria analítica. 2. ed. São Paulo: Pearson Makron Books, c1987."
        ],
        "bibliografiaComplementar": [
            "CALLIOLI, Carlos A.; DOMINGUES, Hygino H.; COSTA, Roberto C. F. Álgebra linear e aplicações. 6. ed. reform. São Paulo: Atual, c1990.",
            "LANG, Serge. Álgebra linear. Rio de Janeiro: Ciência Moderna, c2003.",
            "STENINBRUCH, Alfredo. WINTERLE, Paulo. Álgebra linear. 2. ed. São Paulo: Pearson Education do Brasil, c1987.",
            "SANTOS, Nathan Moreira dos. Vetores e matrizes: uma introdução à álgebra linear. 4. ed. São Paulo: Cencage Learning, c2007.",
            "POOLE, David. Álgebra linear. São Paulo: Cengage Learning, c2004."
        ]
    },
    {
        "id": "G10QUIM0.01",
        "nome": "Química",
        "ch": "60h",
        "periodo": 1,
        "eixo": "Física e Química",
        "prerequisitos": [],
        "corequisitos": [],
        "ementa": "Estrutura atômica. Propriedades periódicas dos elementos. Propriedades físico-químicas dos elementos e compostos. Ligações químicas. Reações químicas. Cálculos estequiométricos. Teoria ácido-base. Soluções. Termoquímica. Eletroquímica.",
        "bibliografiaBasica": [
            "BROWN, Theodore L. [et al.]. Química: a ciência central. São Paulo: Editora Pearson, 2017.",
            "KOTZ, J.C.; TREICHEL, P., TOWNSEND, J. R., TREICHEL, D. A. Química geral e reações químicas. 3. ed. São Paulo, CENGAGE LEARNING, 2016, v. 1.",
            "LIMA, Ana Luiza Lorenzen. Estudos de eletroquímica: reações químicas e energia. Editora Intersaberes, 2020."
        ],
        "bibliografiaComplementar": [
            "ATKINS, P.; LORETA, J., LAVERMAN, L. Princípios de Química: questionando a vida e o meio ambiente. 5. ed. São Paulo: Bookman. 2012.",
            "NERI, Kátia Dias; SOUSA, Marcia Cristina de. Análise instrumental inorgânica. Editora Intersaberes, 2022.",
            "KOTZ, J.C.; TREICHEL, P., TOWNSEND, J. R., TREICHEL, D. A. Química geral e reações químicas. 3. ed. São Paulo, Cengage Learning, 2016, v. 2.",
            "MAHAN, B.H. Química um curso universitário. São Paulo: Edgard Blucher, 1995.",
            "MASTERTAN, W. L.; SLOWINSKI, E. J.; STANISTKI, C. L. Princípios de química. 6. ed. Rio de Janeiro: LTC, 2012."
        ]
    },
    {
        "id": "G10LQUI0.01",
        "nome": "Laboratório de Química",
        "ch": "30h",
        "periodo": 1,
        "eixo": "Física e Química",
        "prerequisitos": [],
        "corequisitos": ["G10QUIM0.01"],
        "ementa": "Organização e funcionamento de um laboratório. Normas e procedimentos de segurança, incluindo primeiros socorros. Técnicas básicas de laboratório, manuseio de vidrarias e equipamentos de uso comum. Avaliação de resultados experimentais. Propriedades físico-químicas dos compostos. Soluções. Reações Químicas. Eletroquímica e Corrosão.",
        "bibliografiaBasica": [
            "OLIVEIRA, Marcelo Ribeiro leite de; BRAATHEN, Per Christian. Laboratório de química inorgânica: Volume 1. Viçosa (MG): UFV, 2003.",
            "NERI, Kátia Dias; SOUSA, Marcia Cristina de. Análise instrumental inorgânica. Editora Intersaberes, 2022.",
            "CIENFUEGOS, Freddy. Segurança no laboratório. Rio de Janeiro: Interciência, 2001."
        ],
        "bibliografiaComplementar": [
            "ROQUETO, M. A. Química experimental: manual de aula prática. 1. ed. Curitiba. Editorial CRV, 2020.",
            "TRINDADE, Diamantino Fernandes et al. Química básica experimental. 4. ed. São Paulo: Ícone, 2010.",
            "CHRISPINO, Álvaro; FARIA, Pedro. Manual de química experimental. Campinas, SP: Átomo, 2010.",
            "SILVA, R. R.; BOCCHI, N.; ROCHA-FILHO, R., MACHADO, P. F. Introdução à química experimental. 3. ed. São Paulo. EDUFSCar, 2021.",
            "MORITA, T. Assumpção, R. M. V. Manual de soluções, reagentes e solventes. 2. ed. São Paulo: Editora Edgard Blucher, 2007."
        ]
    },
    {
        "id": "G10LPTA0.01",
        "nome": "Leitura e Produção de Textos Acadêmicos",
        "ch": "30h",
        "periodo": 1,
        "eixo": "Humanidades e ciências sociais",
        "prerequisitos": [],
        "corequisitos": [],
        "ementa": "Estratégias de leitura. O texto e suas condições de produção. O texto, os elementos de textualidade e os processos argumentativos. Produção e recepção de textos técnicos e científicos, tais como: esquema, resumo, resenha, fichamento, relatório, artigo, entre outros que circulam na esfera de atividade social em que atuará o profissional do curso. Autoria e autonomia na produção textual. Reflexão sobre o plágio. O gerenciamento de vozes e o trabalho com citações.",
        "bibliografiaBasica": [
            "FARACO, Carlos Alberto; FARACO, Carlos Alberto. Prática de texto: para estudantes universitários. 21. ed. Petrópolis: Vozes, 2011.",
            "FIORIN, José Luiz; SAVIOLI, Francisco Platão. Para entender o texto: leitura e redação. 17. ed. São Paulo: Ática, 2007.",
            "MACHADO, Anna Rachel (coord.). Planejar gêneros acadêmicos. São Paulo: Parábola, 2005."
        ],
        "bibliografiaComplementar": [
            "MACHADO, A. R.; LOUSADA, E.; ABREU-TARDELLI, L. S. Resenha. São Paulo: Parábola Editorial, 2005.",
            "MACHADO, A. R.; LOUSADA, E.; ABREU-TARDELLI, L. S. Resumo. São Paulo: Parábola Editorial, 2005.",
            "GONÇALVES, Carlos Alberto; MEIRELLES, Anthero de Moraes. Projetos e relatórios de pesquisa em administração. São Paulo: Atlas, 2004.",
            "SAVIOLI, Francisco Platão. Gramática em 44 lições: com mais de 1700 exercícios. 32. ed. São Paulo: Ática, 2002.",
            "BECHARA, Evanildo. Moderna gramática portuguesa. 37. ed. rev. e ampl. Rio de Janeiro: Lucerna, 2009."
        ]
    },
    {
        "id": "G10DTEC0.01",
        "nome": "Desenho Técnico",
        "ch": "30h",
        "periodo": 1,
        "eixo": "Expressão Gráfica",
        "prerequisitos": [],
        "corequisitos": [],
        "ementa": "A importância da comunicação gráfica na engenharia civil. Desenho técnico: normas técnicas e prática. Projeções ortográficas. Representação tridimensional.",
        "bibliografiaBasica": [
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 16752: Desenho técnico - requisitos para apresentação em folhas de desenho. Rio de Janeiro: ABNT, 2020.",
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 17068: desenho técnico: requisitos para representação de dimensões e tolerâncias: Rio de Janeiro: ABNT, 2022.",
            "SILVA, Arlindo. Desenho técnico moderno. 4. ed. Rio de Janeiro: LTC, c2006."
        ],
        "bibliografiaComplementar": [
            "PACHECO, Beatriz de Almeida; SOUZA-CONCILIO, Ilana de Almeida; PESSOA FILHO, Joaquim. Desenho técnico. Curitiba: Editora Intersaberes, 2017.",
            "RIBEIRO, Antonio Clelio; PERES, Mauro Pedro. Curso de desenho técnico e AutoCAD. São Paulo: Editora Pearson, 2013.",
            "BUENO, C. P.; PAPAZOGLOU, R. S. Desenho técnico para engenharias. Curitiba: Juruá, 2008.",
            "FARRELLY, Lorraine. Técnicas de representação. Porto Alegre: Bookman, 2011.",
            "PEREIRA, Aldemar. Desenho técnico básico. 2. ed. Rio de Janeiro: F. Alves, 1977."
        ]
    },
    {
        "id": "G10CSPEC.01",
        "nome": "Contexto Social e Profissional da Engenharia Civil",
        "ch": "30h",
        "periodo": 1,
        "eixo": "Prática profissional e formação diversificada",
        "prerequisitos": [],
        "corequisitos": [],
        "ementa": "O curso de Engenharia Civil e o espaço de atuação do Engenheiro Civil; Cenários da Engenharia Civil no Brasil e no mundo; Conceituação e áreas da Engenharia Civil; O sistema profissional da Engenharia Civil: regulamentos, normas e ética profissional; Desenvolvimento tecnológico e o processo de estudo e de pesquisa; Interação com outros ramos da área tecnológica; Mercado de trabalho; Ética e cidadania.",
        "bibliografiaBasica": [
            "BAZZO, W. A.; PEREIRA; L. T. V. Introdução à engenharia: conceitos, ferramentas e comportamentos. Florianópolis: Ed. UFSC. 2006.",
            "REECE, W. D. Introdução à engenharia. Rio Janeiro. LTC. 2012.",
            "YAZIGI, W. A técnica de edificar. São Paulo: PINI, 2004."
        ],
        "bibliografiaComplementar": [
            "QUEIROZ, R. C. Introdução à Engenharia Civil: história, principais áreas e atribuições da profissão. São Paulo: BLUCHER, 2019.",
            "CONFEA. Resolução nº 1073, de 19 de abril de 2016. Regulamenta a atribuição de títulos, atividades, competências e campos de atuação profissionais aos profissionais registrados no Sistema Confea/Crea para efeito de fiscalização do exercício profissional no âmbito da Engenharia e da Agronomia. Brasília: DOU, 22 abr. 2016.",
            "CONSELHO FEDERAL DE ENGENHARIA E AGRONOMIA (org.). Código de Ética Profissional da Engenharia, da Agronomia, da Geologia, da Geografia e da Meteorologia. 11. ed. Brasília: CONFEA, 2019.",
            "BRASIL. Congresso Nacional. Lei No. 5.194, de 24 de dezembro de 1966. Regula o exercício das profissões de Engenheiro, Arquiteto e Engenheiro-Agrônomo, e dá outras providências. Brasília: Congresso Nacional, 1966.",
            "CONFEA. Resolução nº 1.025, de 30 de outubro de 2009. Dispõe sobre a Anotação de Responsabilidade Técnica e o Acervo Técnico Profissional, e dá outras providências. Brasília: CONFEA [2009]."
        ]
    },
    // Período 2
    {
        "id": "G10CFVV1.01",
        "nome": "Cálculo com Funções de Várias Variáveis I",
        "ch": "60h",
        "periodo": 2,
        "eixo": "Matemática",
        "prerequisitos": ["G10CFVR0.01", "G10GAAL0.01"],
        "corequisitos": [],
        "ementa": "Coordenadas polares. Superfícies quádricas. Funções reais de várias variáveis: limites, continuidade, gráficos, curvas e superfícies de níveis. Derivadas parciais: conceito, cálculo e aplicações. Introdução aos Números Complexos e Fórmula de Euler.",
        "bibliografiaBasica": [
            "THOMAS, George Brinton; WEIR, Maurice D. Cálculo: volume 2. 12. ed. São Paulo: Pearson Education do Brasil, c2013. v. 2",
            "STEWART, James. Cálculo: volume 2. 7. ed. São Paulo: Cengage Learning, c2014. v. 2",
            "LEITHOLD, Louis. O cálculo com geometria analítica. 3. ed. São Paulo: Harbra, c1994. v. 2"
        ],
        "bibliografiaComplementar": [
            "SIMMONS, George F. Cálculo com geometria analítica. São Paulo: Pearson Makron Books, 1988. v. 2.",
            "FLEMMING, Diva Marília. Cálculo B: funções de variáveis, integrais múltiplas, integrais curvilíneas e de superfície. 2. ed. rev. e ampl. São Paulo: Pearson Prentice Hall, c2007.",
            "ANTON, HOWARD; BIVENS, Irl; DAVIS, Stephen. Cálculo. 10. ed. Porto Alegre: Bookman, 2014. ν. 2",
            "SWOKOWSKI, Earl William. Cálculo: com geometria analítica. 2. ed. São Paulo: Makron Books, 1995, v. 2",
            "MUNEM, Mustafa A.; FOULIS, David J. Cálculo. Rio de Janeiro: Guanabara Dois, 1986. v. 2"
        ]
    },
    {
        "id": "G10INSE0.01",
        "nome": "Integração e Séries",
        "ch": "60h",
        "periodo": 2,
        "eixo": "Matemática",
        "prerequisitos": ["G10CFVR0.01"],
        "corequisitos": [],
        "ementa": "Integrais definidas: conceito, Teorema Fundamental do Cálculo e aplicações. Integrais indefinidas: conceito e métodos de integração. Integrais impróprias. Sequências e séries numéricas. Séries de potências, séries de Taylor e aplicações.",
        "bibliografiaBasica": [
            "THOMAS, George Brinton; WEIR, Maurice D.; HASS, Joel. Cálculo: volume 1 e 2. 12. ed. São Paulo: Pearson Education do Brasil, c2013. 2 v",
            "FLEMMING, Diva Marília; GONÇALVES, Mírian Buss. Cálculo A: funções, limite, derivação e integração. 6. ed. rev. e ampl. São Paulo: Pearson Prentice Hall, c2007.",
            "STEWART, James. Cálculo: volume 1. 7. ed. São Paulo: Cengage Learning, c2014. v.1"
        ],
        "bibliografiaComplementar": [
            "STEWART, James. Cálculo: volume 2. 7. ed. São Paulo: Cengage Learning, c2014. v. 2",
            "LEITHOLD, Louis. O cálculo com geometria analítica. 3. ed. São Paulo: Harbra, c1994. v. 1",
            "LEITHOLD, Louis. O cálculo com geometria analítica. 3. ed. São Paulo: Harbra, c1994. v. 2",
            "SIMMONS, George F. Cálculo com geometria analítica. São Paulo: Pearson Education do Brasil, c1987. v.1",
            "SIMMONS, George F. Cálculo com geometria analítica. São Paulo: Pearson Makron Books, 1988. v. 2"
        ]
    },
    {
        "id": "G10FMEC0.01",
        "nome": "Fundamentos de Mecânica",
        "ch": "60h",
        "periodo": 2,
        "eixo": "Física e Química",
        "prerequisitos": ["G10CFVR0.01", "G10GAAL0.01"],
        "corequisitos": [],
        "ementa": "Cinemática em uma dimensão e no espaço; princípios da dinâmica; aplicações das leis de Newton; trabalho e energia mecânica; conservação da energia; momento linear e conservação do momento linear; momento angular e conservação do momento angular; dinâmica dos corpos rígidos. Equilíbrio e Elasticidade.",
        "bibliografiaBasica": [
            "HALLIDAY, David; RESNICK, Robert; WALKER, Jearl. Fundamentos de física, volume 1: Mecânica. 9. ed. Rio de Janeiro: LTC, 2012.",
            "YOUNG, H. D.; FREEDMAN, R. A. Sears & Zemansky: Física I: mecânica. 12. ed. São Paulo: Addison Wesley, 2009.",
            "TIPLER, P.; MOSCA, G. Física para cientistas e engenheiros: mecânica, oscilações e ondas, termodinâmica. 6. ed. Rio de Janeiro: LTC, 2009. v. 1."
        ],
        "bibliografiaComplementar": [
            "NUSSENZVEIG, H. M. Curso de física básica: mecânica. 4. ed. São Paulo: Edgard Blücher, 2002.",
            "CHAVES, A.; SAMPAIO, J. F. Física básica: mecânica. Rio de Janeiro: LTC/LAB, 2007.",
            "HEWIT, G. PAUL. Física Conceitual. 9. ed. Porto Alegre: Bookman, 2002.",
            "FEYNMAN, R. P.; SANDS, M.; LEIGHTON, R. B. Lições de física de Feynman. Porto Alegre: Bookman, 2008. v.1.",
            "SERWAY, R. A.; JEWETT JR., J. W. Princípios de física: volume 1: mecânica clássica. 3. ed. São Paulo: Thomson, 2004."
        ]
    },
    {
        "id": "G10FEME0.01",
        "nome": "Física Experimental - Mecânica",
        "ch": "30h",
        "periodo": 2,
        "eixo": "Física e Química",
        "prerequisitos": [],
        "corequisitos": ["G10FMEC0.01"],
        "ementa": "Práticas em laboratório de temas e tópicos abordados nas disciplinas básicas de Física, mais especificamente, experimentos na área de Mecânica.",
        "bibliografiaBasica": [
            "CAMPOS, A. A.; ALVES, E. S.; SPEZIALI, N. L. Física experimental básica na universidade. 2. ed., rev. Belo Horizonte: UFMG, 2008.",
            "HALLIDAY, David; RESNICK, Robert; WALKER, Jearl. Fundamentos de física, volume 1: Mecânica. 9. ed. Rio de Janeiro: LTC, 2012.",
            "YOUNG, H. D.; FREEDMAN, R. A. Sears & Zemansky: física I: mecânica. 12. ed. São Paulo: Addison Wesley, 2009."
        ],
        "bibliografiaComplementar": [
            "TIPLER, P.; MOSCA, G. Física para cientistas e engenheiros: mecânica, oscilações e ondas, termodinâmica. 6. ed. Rio de Janeiro: LTC, 2009. v. 1.",
            "CHAVES, A.; SAMPAIO, J. F. Física básica: mecânica. Rio de Janeiro: LTC/LAB, 2007.",
            "HEWIT, G. PAUL. Física Conceitual. Porto Alegre: Bookman, 2002.",
            "FEYNMAN, R. P.; SANDS, M.; LEIGHTON, R. B. Lições de física de Feynman. Porto Alegre: Bookman, 2008. v. 1.",
            "SERWAY, R. A.; JEWETT JR., J. W. Princípios de física: volume 1: mecânica clássica. 3. ed. São Paulo: Thomson, 2004."
        ]
    },
    {
        "id": "G10PCOM1.01",
        "nome": "Programação de Computadores I",
        "ch": "30h",
        "periodo": 2,
        "eixo": "Computação e matemática aplicada",
        "prerequisitos": [],
        "corequisitos": ["G10LPCO1.01"],
        "ementa": "Conceitos básicos de software, hardware e dado. Conceitos básicos de organização de computadores. Conceitos de algoritmo, programa e linguagem de programação. Programação estruturada: variáveis, tipos básicos de dados, expressões, comandos, entrada e saída de dados, comandos de fluxo de controle, estruturas de dados homogêneas, estruturas de dados heterogêneas, funções, recursividade.",
        "bibliografiaBasica": [
            "DEITEL, Harvey M. Java: como programar. 8. ed. São Paulo: Pearson Prentice Hall, 2010.",
            "FORBELLONE, André Luiz Villar. Lógica de programação: a construção de algoritmos e estruturas de dados. 3. ed. São Paulo: Pearson Education do Brasil, 2005.",
            "PURGA, Sandra; RISSETTI, Gerson. Lógica de programação e estrutura de dados, com aplicações em Java. 2. ed. São Paulo: Pearson, 2016."
        ],
        "bibliografiaComplementar": [
            "ASCENCIO, Ana Fernanda Gomes; CAMPOS, Edilene Aparecida Veneruchi de. Fundamentos da programação de computadores: algoritmos, Pascal, C/C++ (padrão Ansi) e java. 3. ed. São Paulo: Pearson, 2012.",
            "FURGERI, Sérgio. Java 7: ensino didático. 2. ed. São Paulo: Érica, 2014.",
            "WIRTH, Niklaus. Algoritmos e estruturas de dados. Rio de Janeiro: LTC, 2009.",
            "MANZANO, José Augusto N. G.; OLIVEIRA, Jayr Figueiredo de. Algoritmos: lógica para desenvolvimento de programação de computadores. 27. ed. rev. São Paulo: Érica, 2014.",
            "ANSELMO, Fernando. Aplicando lógica orientada a objetos em Java: da lógica à certificação. 3. ed. Florianópolis: Visual Books, 2013."
        ]
    },
    {
        "id": "G10LPCO1.01",
        "nome": "Laboratório de Programação de Computadores I",
        "ch": "30h",
        "periodo": 2,
        "eixo": "Computação e matemática aplicada",
        "prerequisitos": [],
        "corequisitos": ["G10PCOM1.01"],
        "ementa": "Práticas em laboratório dos temas e tópicos abordados na disciplina Programação de Computadores I.",
        "bibliografiaBasica": [
            "DEITEL, Harvey M. Java: como programar. 8. ed. São Paulo: Pearson Prentice Hall, 2010.",
            "FORBELLONE, André Luiz Villar. Lógica de programação: a construção de algoritmos e estruturas de dados. 3. ed. São Paulo: Pearson Education do Brasil, 2005.",
            "PURGA, Sandra; RISSETTI, Gerson. Lógica de programação e estrutura de dados, com aplicações em Java. 2. ed. São Paulo: Pearson, 2016."
        ],
        "bibliografiaComplementar": [
            "ASCENCIO, Ana Fernanda Gomes; CAMPOS, Edilene Aparecida Veneruchi de. Fundamentos da programação de computadores: algoritmos, Pascal, C/C++ (padrão Ansi) e java. 3. ed. São Paulo: Pearson, 2012.",
            "FURGERI, Sérgio. Java 7: ensino didático. 2. ed. São Paulo: Érica, 2014.",
            "WIRTH, Niklaus. Algoritmos e estruturas de dados. Rio de Janeiro: LTC, 2009.",
            "MANZANO, José Augusto N. G.; OLIVEIRA, Jayr Figueiredo de. Algoritmos: lógica para desenvolvimento de programação de computadores. 27. ed. rev. São Paulo: Érica, 2014.",
            "ANSELMO, Fernando. Aplicando lógica orientada a objetos em Java: da lógica à certificação. 3. ed. Florianópolis: Visual Books, 2013."
        ]
    },
    {
        "id": "G10DARQ0.01",
        "nome": "Desenho Arquitetônico",
        "ch": "30h",
        "periodo": 2,
        "eixo": "Expressão Gráfica",
        "prerequisitos": ["G10DTEC0.01"],
        "corequisitos": [],
        "ementa": "Desenho projetivo aplicado ao desenho arquitetônico. Desenho arquitetônico: normas técnicas e prática. Circulação vertical: escadas e rampas. Telhados. Levantamento arquitetônico.",
        "bibliografiaBasica": [
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 6492: representação de projetos de arquitetura. Rio de Janeiro: ABNT, 2021.",
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 9050: Acessibilidade a edificações, mobiliário, espaços e equipamentos urbanos. Rio de Janeiro: ABNT, 2020.",
            "FERREIRA, Patricia. Desenho de arquitetura. 2. ed. atual. Rio de Janeiro: Imperial Novo Milênio, 2011."
        ],
        "bibliografiaComplementar": [
            "CHING, Francis D. K. Representação gráfica em arquitetura. 5. ed. Porto Alegre: Bookman, 2011.",
            "FARRELLY, Lorraine. Técnicas de representação. Porto Alegre: Bookman, 2011.",
            "LEGGITT, Jim. Desenho de arquitetura: técnicas e atalhos que usam tecnologia. Porto Alegre: Bookman, 2004.",
            "MONTENEGRO, Gildo A. Desenho arquitetônico: para cursos técnicos de 2º grau e faculdades de arquitetura. 4. ed. São Paulo: Edgar Blucher, c2001.",
            "CAMBIAGHI, Silvana. Desenho universal: métodos e técnicas para arquitetos e urbanistas. 2. ed. rev. São Paulo: Senac São Paulo, 2011."
        ]
    },
    // Período 3
    {
        "id": "G10CFVV2.01",
        "nome": "Cálculo com Funções de Várias Variáveis II",
        "ch": "60h",
        "periodo": 3,
        "eixo": "Matemática",
        "prerequisitos": ["G10CFVV1.01", "G10INSE0.01"],
        "corequisitos": [],
        "ementa": "Integrais duplas: conceito, cálculo, mudanças de coordenadas cartesianas para polares e aplicações. Integrais triplas: conceito, cálculo, mudanças de coordenadas cartesianas para cilíndricas e esféricas, e aplicações. Comprimento de arco de curva parametrizada. Campos vetoriais, campo gradiente, Rotacional e Divergente. Integrais curvilíneas e de superfície. Teoremas integrais: Green, Gauss e Stokes.",
        "bibliografiaBasica": [
            "THOMAS, George Brinton; WEIR, Maurice D. Cálculo: volume 2. 12. ed. São Paulo: Pearson Education do Brasil, c2013. v. 2",
            "STEWART, James. Cálculo: volume 2. 7. ed. São Paulo: Cengage Learning, c2014. 2v., il.",
            "SIMMONS, George F. Cálculo com geometria analítica. São Paulo: Pearson Makron Books, 1988. 2 v"
        ],
        "bibliografiaComplementar": [
            "LEITHOLD, Louis. O cálculo com geometria analítica. 3. ed. São Paulo: Harbra, c1994. 2 ν.",
            "FLEMMING, Diva Marília. Cálculo B: funções de variáveis, integrais múltiplas, integrais curvilíneas e de superfície. 2. ed. rev. e ampl. São Paulo: Pearson Prentice Hall, c2007.",
            "ANTON, HOWARD; BIVENS, Irl; DAVIS, Stephen. Cálculo. 10. ed. Porto Alegre: Bookman, 2014. v. 2",
            "SWOKOWSKI, Earl William. Cálculo: com geometria analítica. 2. ed. São Paulo: Makron Books, 1995. v.2",
            "MUNEM, Mustafa A.; FOULIS, David J. Cálculo. Rio de Janeiro: Guanabara Dois, 1986. v. 2"
        ]
    },
    {
        "id": "G10EDOR0.01",
        "nome": "Equações Diferenciais Ordinárias",
        "ch": "60h",
        "periodo": 3,
        "eixo": "Matemática",
        "prerequisitos": ["G10CFVV1.01", "G10INSE0.01"],
        "corequisitos": [],
        "ementa": "Equações diferenciais ordinárias de primeira ordem: resolução e aplicações; Equações diferenciais ordinárias de segunda ordem: resolução e aplicações; e Equações diferenciais ordinárias de ordem superior; sistemas de equações diferenciais; Transformada de Laplace e sua aplicação em equações diferenciais.",
        "bibliografiaBasica": [
            "ZILL, Dennis G. Equações diferenciais: com aplicações em modelagem. 3. ed. São Paulo: Cencage Learning, 2016.",
            "BOYCE, William E; DIPRIMA, Richard C. Equações diferenciais elementares e problemas de valores de contorno. 9. ed. Rio de Janeiro: LTC, c2010.",
            "NAGLE, R. KENT; SAFF, EDWAR B. Equações Diferenciais. 8. ed. São Paulo: Editora Pearson, 2012."
        ],
        "bibliografiaComplementar": [
            "AYRES JÚNIOR, Frank. Equações diferenciais. Rio de Janeiro: McGraw Hill do Brasil, 1970. (Coleção Schaum).",
            "LEIGHTON, Walter. Equações diferenciais ordinárias. Rio de Janeiro: LTC, 1970.",
            "OLIVEIRA, Rafael Lima. Equações diferenciais ordinárias: métodos de resolução e aplicações. Curitiba: Editora Intersaberes, 2019.",
            "ABUNAHMAN, Sérgio Antônio. Equações diferenciais. Rio de Janeiro: EDC-Editora Didática e Científica, 1989.",
            "EDWARDS, C. H.; PENNEY, David E. Equações diferenciais elementares com problemas de contorno. 3. ed. Rio de Janeiro: Prentice Hall do Brasil, 1995."
        ]
    },
    {
        "id": "G10FOFT0.01",
        "nome": "Fundamentos de Oscilações, Fluidos e Termodinâmica (OFT)",
        "ch": "60h",
        "periodo": 3,
        "eixo": "Física e Química",
        "prerequisitos": ["G10FMEC0.01"],
        "corequisitos": ["G10EDOR0.01", "G10FEOFT0.01"],
        "ementa": "Estática e dinâmica dos fluidos; Movimento periódico; Ondas Mecânicas; Som e Audição; Temperatura; calor; 1ª e 2ª leis da termodinâmica; Propriedade dos gases; Teoria cinética dos gases; Transferência de calor e massa.",
        "bibliografiaBasica": [
            "HALLIDAY, David; RESNICK, Robert; WALKER, Jearl. Fundamentos de física, volume 2: gravitação, ondas e termodinâmica. 9. ed. Rio de Janeiro: LTC, c2012.",
            "YOUNG, H. D.; FREEDMAN, R. A. Sears & Zemansky: física II: termodinâmica e ondas. 12. ed. São Paulo: Addison Wesley, 2009.",
            "TIPLER, P.; MOSCA, G. Física para cientistas e engenheiros: mecânica, oscilações e ondas, termodinâmica. 6. ed. Rio de Janeiro: LTC, 2009. v. 1."
        ],
        "bibliografiaComplementar": [
            "NUSSENZVEIG, H. M. Curso de física básica: fluidos, oscilações e ondas, calor. 5. ed. São Paulo: Edgard Blücher, 2014.",
            "CHAVES, A. Física básica: gravitação, fluidos, ondas, termodinâmica. Rio de Janeiro: LTC: LAB, 2007.",
            "HEWIT, G. PAUL. Física Conceitual. Porto Alegre: Bookman, 2002.",
            "FEYNMAN, R. P.; SANDS, M.; LEIGHTON, R. B. Lições de física de Feynman. Porto Alegre: Bookman, 2008. v. 1.",
            "SERWAY, Raymond A.; JEWETT JR., John W. Princípios de física: volume 2: oscilações, ondas e termodinâmica. São Paulo: Cencage Learning, c2015."
        ]
    },
    {
        "id": "G10FEOFT0.01",
        "nome": "Física Experimental - OFT",
        "ch": "30h",
        "periodo": 3,
        "eixo": "Física e Química",
        "prerequisitos": [],
        "corequisitos": ["G10FOFT0.01"],
        "ementa": "Práticas em laboratório de temas e tópicos abordados nas disciplinas básicas de Física, mais especificamente, experimentos nas áreas de Oscilações, Fluidos e Termodinâmica.",
        "bibliografiaBasica": [
            "CAMPOS, A. A.; ALVES, E. S.; SPEZIALI, N. L. Física experimental básica na universidade. 2. ed., rev. Belo Horizonte: UFMG, 2008.",
            "HALLIDAY, David; RESNICK, Robert; WALKER, Jearl. Fundamentos de física, volume 2: gravitação, ondas e termodinâmica. 9. ed. Rio de Janeiro: LTC, c2012.",
            "YOUNG, H. D.; FREEDMAN, R. A. Sears & Zemansky: física II: termodinâmica e ondas. 12. ed. São Paulo: Addison Wesley, 2009."
        ],
        "bibliografiaComplementar": [
            "TIPLER, P.; MOSCA, G. Física para cientistas e engenheiros: mecânica, oscilações e ondas, termodinâmica. 6. ed. Rio de Janeiro: LTC, 2009. v. 1.",
            "CHAVES, A. Física básica: gravitação, fluidos, ondas, termodinâmica. Rio de Janeiro: LTC: LAB, 2007.",
            "HEWIT, G. PAUL. Física Conceitual. Porto Alegre: Bookman, 2002.",
            "FEYNMAN, R. P.; SANDS, M.; LEIGHTON, R. B. Lições de física de Feynman. Porto Alegre: Bookman, 2008. v. 1.",
            "ERWAY, Raymond A.; JEWETT JR., John W. Princípios de física: volume 2: oscilações, ondas e termodinâmica. São Paulo: Cencage Learning, c2015."
        ]
    },
    {
        "id": "G10FTEC0.01",
        "nome": "Filosofia da Tecnologia",
        "ch": "30h",
        "periodo": 3,
        "eixo": "Humanidades e ciências sociais",
        "prerequisitos": [],
        "corequisitos": [],
        "ementa": "Estudo dos fundamentos filosóficos necessários à compreensão da tecnologia, tratando de questões ontológicas, epistemológicas, estéticas, éticas e políticas, abordando: a distinção entre o natural e o artificial, bem como o lugar ocupado pela produção técnica/tecnológica entre as áreas do conhecimento; o domínio humano da natureza por meio dos saberes técnicos e científicos e suas consequências; a relação da tecnologia com o trabalho, compreendido como atividade humana fundamental para produção dos meios de vida; a subordinação dos desenvolvimentos tecnológicos ao modo de produção capitalista; a crítica à modernidade e à tecnociência.",
        "bibliografiaBasica": [
            "GALIMBERTI, U. Psiche e techne: o homem na idade da técnica, São Paulo: Paulus, 2006.",
            "PINTO, A. V. O conceito de tecnologia: volume 1. Rio de Janeiro: Contraponto, 2005.",
            "MORAIS, Regis de (ORG.). Filosofia da ciência e da tecnologia: Introdução metodológica e crítica. Papirus Editora, 2013."
        ],
        "bibliografiaComplementar": [
            "MIRANDA, Luiz Felipe Sigwalt de. Introdução histórica à filosofia das ciências. Curitiba: Editora Intersaberes, 2016.",
            "REVISTA CULT - Dossiê: Heidegger e as fendas do ser. Edição 44. São Paulo: Editora Bregantini, 2001.",
            "OLIVEIRA, Rita de Cássia Matiusso de. Por uma tecnoética: Hans Jonas e o princípio responsabilidade. 2019. 87 p. Dissertação (mestrado) Centro Federal de Educação Tecnológica de Minas Gerais, Programa de Pós-Graduação em Educação Tecnológica. Belo Horizonte, 2019.",
            "OLIVEIRA, N. F.; SOUZA, R. T. Fenomenologia hoje III: bioética, biotecnologia, biopolítica. Rio Grande do Sul: EDIPUC, 2008.",
            "LEVY, P. As tecnologias da inteligência: o futuro do pensamento na era da informática. 2. ed. Rio de Janeiro: Editora 34, 2010."
        ]
    },
    {
        "id": "G10TOPO1.01",
        "nome": "Topografia I",
        "ch": "60h",
        "periodo": 3,
        "eixo": "Construção Civil e materiais",
        "prerequisitos": ["G10GAAL0.01", "G10DTEC0.01"],
        "corequisitos": [],
        "ementa": "Levantamentos planimétricos; Extensão e campo de ação da topografia; Instrumentos utilizados em topografia (descrição e manejo); Elaboração de plantas topográficas planimétricas; Normas vinculadas à topografia; Erros em topografia; Tecnologias aplicada à topografia; Noções de Locação; Noções de georreferenciamento.",
        "bibliografiaBasica": [
            "TULER, M.; SARAIVA, S. Fundamentos de topografia. Porto Alegre: Bookman, 2014.",
            "CASACA, João Martins. Topografia geral. 4. ed. Rio de Janeiro: LTC, 2011.",
            "McCORMAC, Jack C. Topografia. 5. ed. Rio de Janeiro: LTC, 2007."
        ],
        "bibliografiaComplementar": [
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 13133: execução de levantamento topográfico - procedimento. Rio de Janeiro: ABNT, 2021.",
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 17047: levantamento cadastral territorial para registro público – procedimento. Rio de Janeiro: ABNT, 2022.",
            "BORGES, A. C. Topografia aplicada à engenharia civil. São paulo: Editora Blucher. 1992. v. 1.",
            "TULER, M; SARAIVA, S; TEIXEIRA, A. Manual de práticas de topografia. Porto Alegre. Bookman. 2017.",
            "MENZORI, M. Georreferenciamento: conceitos. 1 ed. São Paulo. Editora Baraúna. 2017."
        ]
    },
    {
        "id": "G10DCOM0.01",
        "nome": "Desenho Computacional",
        "ch": "30h",
        "periodo": 3,
        "eixo": "Expressão Gráfica",
        "prerequisitos": ["G10DARQ0.01"],
        "corequisitos": [],
        "ementa": "Aplicação da computação gráfica em projetos de engenharia; Modelagem computacional 3D/2D; Ferramentas de suporte; Criação e modificação de objetos; Criação de bibliotecas; Ferramentas de Anotação: dimensionamento e texto; Montagem das pranchas de Impressão; introdução a experimentação e o desenvolvimento de protótipos e projetos; elaboração de um protótipo (como trabalho conclusivo de disciplina).",
        "bibliografiaBasica": [
            "HATHORN, Tobias; HATHORN, Tessa Reist. Autodesk Revit architecture 2015: essentials. Indianopolis: John Wiley & Sons, 2014.",
            "KATORI, R. AutoCAD 2015: projetos em 3D. São Paulo: Senac São Paulo, 2015.",
            "KATORI, R. AutoCAD 2015: projetos em 2D. São Paulo: Senac São Paulo, 2015."
        ],
        "bibliografiaComplementar": [
            "EASTMAN, Chuck; SANTOS, Eduardo Toledo (rev. téc.). Manual de BIM: um guia de modelagem da informação da construção para arquitetos, engenheiros, gerentes, construtores e incorporadores. Porto Alegre: Bookman, 2014.",
            "KATORI, R. AutoCAD 2015. São Paulo: Senac São Paulo, 2015.",
            "CHAPPELL, Eric. AutoCAD Civil 3D 2012. Porto Alegre: Bookman, 2012. (Essencial).",
            "COSTA, Lourenço. AutoCAD 2010: utilizando totalmente. São Paulo: Érica, 2010.",
            "OLIVEIRA, Mauro Machado de. Autocad 2010: um guia prático 2D, 3D e perspectiva. Campinas, SP: Komedi, 2010."
        ]
    },
    // Período 4
    {
        "id": "G10FELE0.01",
        "nome": "Fundamentos de Eletromagnetismo",
        "ch": "60h",
        "periodo": 4,
        "eixo": "Física e Química",
        "prerequisitos": ["G10FOFT0.01", "G10CFVV2.01"],
        "corequisitos": ["G10FEEL0.01"],
        "ementa": "Carga elétrica e matéria; lei de Coulomb; o campo elétrico; fluxo elétrico e lei de Gauss; potencial elétrico; capacitores e dielétricos; corrente elétrica; resistência elétrica; força eletromotriz; circuitos de corrente contínua e regras de Kirchhoff; campo magnético; lei de Biot-Savart; lei de Ampère; indução eletromagnética; lei de Faraday; indutância e energia do campo magnético; circuitos de corrente alternada; equações de Maxwell.",
        "bibliografiaBasica": [
            "HALLIDAY, David; RESNICK, Robert. Fundamentos de física, volume 3: Eletromagnetismo. 9. ed. Rio de Janeiro: LTC, с2012.",
            "YOUNG, H. D.; FREEDMAN, R. A. Sears & Zemansky: física III: eletromagnetismo. 12. ed. São Paulo: Addison Wesley, 2009.",
            "TIPLER, P.; MOSCA, G. Física para cientistas e engenheiros: eletricidade e magnetismo, óptica. 6. ed. Rio de Janeiro: LTC, 2009. v. 2."
        ],
        "bibliografiaComplementar": [
            "NUSSENZVEIG, H. M. Curso de física básica: eletromagnetismo. 2. ed. rev. São Paulo: Edgard Blücher, 2014.",
            "CHAVES, A. Física básica: eletromagnetismo. Rio de Janeiro: LTC: LAB, 2007.",
            "HEWIT, G. PAUL. Física Conceitual. Porto Alegre: Bookman, 2002.",
            "FEYNMAN, R. P.; SANDS, M.; LEIGHTON, R. B. Lições de física de Feynman. Porto Alegre: Bookman, 2008. v.2",
            "SERWAY, R. A.; JEWETT JR., J. W. Princípios de física: eletromagnetismo. 5. ed. São Paulo: Thomson, 2015."
        ]
    },
    {
        "id": "G10FEEL0.01",
        "nome": "Física Experimental - Eletromagnetismo",
        "ch": "30h",
        "periodo": 4,
        "eixo": "Física e Química",
        "prerequisitos": [],
        "corequisitos": ["G10FELE0.01"],
        "ementa": "Práticas em laboratório de temas e tópicos abordados nas disciplinas básicas de Física, mais especificamente, experimentos na área de Eletromagnetismo.",
        "bibliografiaBasica": [
            "CAMPOS, A. A.; ALVES, E. S.; SPEZIALI, N. L. Física experimental básica na universidade. 2. ed., rev. Belo Horizonte: UFMG, 2008.",
            "HALLIDAY, David; RESNICK, Robert. Fundamentos de física, volume 3: Eletromagnetismo. 9. ed. Rio de Janeiro: LTC, c2012.",
            "YOUNG, H. D.; FREEDMAN, R. A. Sears & Zemansky: física III: eletromagnetismo. 12. ed. São Paulo: Addison Wesley, 2009."
        ],
        "bibliografiaComplementar": [
            "TIPLER, P.; MOSCA, G. Física para cientistas e engenheiros: eletricidade e magnetismo, óptica. 6. ed. Rio de Janeiro: LTC, 2009. v. 2.",
            "CHAVES, A. Física básica: eletromagnetismo. Rio de Janeiro: LTC: LAB, 2007.",
            "HEWIT, G. PAUL. Física Conceitual. Porto Alegre: Bookman, 2002.",
            "FEYNMAN, R. P.; SANDS, M.; LEIGHTON, R. B. Lições de física de Feynman. Porto Alegre: Bookman, 2008. v.2",
            "SERWAY, R. A.; JEWETT JR., J. W. Princípios de física: volume 3: eletromagnetismo. 5. ed. São Paulo: Thomson, 2015."
        ]
    },
    {
        "id": "G10EAEN0.01",
        "nome": "Estatística Aplicada à Engenharia",
        "ch": "45h",
        "periodo": 4,
        "eixo": "Computação e matemática aplicada",
        "prerequisitos": ["G10INSE0.01"],
        "corequisitos": [],
        "ementa": "Fundamentos de Inferência Estatística. Inferências para Médias e Desvios Padrões. Testes estatísticos. Intervalos de confiança para uma e duas amostras. Modelos e análise de variância. Transformação de dados. Testes de comparação de médias. Grupos de experimentos. Regressão. Análise de covariância. Controle estatístico de processo. Softwares de estatística.",
        "bibliografiaBasica": [
            "MONTGOMERY, Douglas C.; RUNGER, George C. Estatística aplicada e probabilidade para engenheiros. 5. ed. Rio de Janeiro: LTC, с2012.",
            "BUSSAB, W. O.; MORETTIN, P. A. Estatística básica. 8. ed. São Paulo: Saraiva, 2013.",
            "FONSECA, J. S.; MARTINS, G. A.; TOLEDO, G. L. Estatística aplicada. 2. ed. São Paulo: Atlas, c1985."
        ],
        "bibliografiaComplementar": [
            "SPIEGEL, Murray R; STEPHENS, Larry J. Estatística. 4. ed. Porto Alegre: Bookman, 2009.",
            "LOURENÇO FILHO, R. C. B. Controle estatístico da qualidade. Rio de Janeiro: Livro Técnico, 1970.",
            "MORETTIN, Luiz Gonzaga. Estatística básica: probabilidade e inferência: volume único. São Paulo: Pearson Prentice Hall, 2010.",
            "SOARES, J. F. Introdução à estatística. Rio de Janeiro: LTC, 1991.",
            "COSTA NETO, P. L. O. Estatística. 2. ed. São Paulo: Edgard Blücher, 2002."
        ]
    },
    {
        "id": "G10IINS1.01",
        "nome": "Inglês Instrumental I",
        "ch": "30h",
        "periodo": 4,
        "eixo": "Humanidades e ciências sociais",
        "prerequisitos": [],
        "corequisitos": [],
        "ementa": "Compreensão e produção escrita de textos em língua inglesa de gêneros textuais variados, com foco nos gêneros acadêmicos, científicos e profissionais. Reconhecimento das características dos gêneros textuais. Desenvolvimento de habilidades de leitura (competências e conhecimentos) através da aplicação de estratégias, produção e retextualização escrita de gêneros textuais.",
        "bibliografiaBasica": [
            "MURPHY, Joseph. English grammar in use: a self-study reference and practice book for elementary students of english, with answers. 3rd. Cambridge, Mass.: Cambridge University Press, 2004.",
            "SANTOS, Denise. Como ler melhor em inglês. Barueri: Disal, c2011.",
            "SWAN, Michael. Practical english usage. 3rd Oxford: Oxford University Press, 2005."
        ],
        "bibliografiaComplementar": [
            "PASSWORD: k dictionaries: english dictionary for speakers of portuguese. 2. ed. São Paulo: Martins Fontes, 1998.",
            "OSHIMA, Alice; HOGUE, Ann. Writing academic english. 4. ed. White Plains: Pearson Longman, c2006.",
            "NETTLE, Mark; HOPKINS, Diana. Developing grammar in context: intermediate with answers. Cambridge: Cambridge University Press, 2003.",
            "LONGMAN dictionary of contemporary English: for advanced learners. 5. ed. Harlow: Pearson Education, 2009.",
            "MURPHY, Raymond; SMALZER, William R. Grammar in use intermediate. 3. ed. Cambridge; New York: Cambridge University Press, 2009."
        ]
    },
    {
        "id": "G10TOPO2.01",
        "nome": "Topografia II",
        "ch": "30h",
        "periodo": 4,
        "eixo": "Construção Civil e materiais",
        "prerequisitos": ["G10TOPO1.01"],
        "corequisitos": [],
        "ementa": "Noções de altimetria; Noções de aerofotogrametria; Nivelamentos: trigonométricos e geométricos; Instrumentos utilizados (descrição e manejo); Estudo e representação do relevo (traçado de Curvas de Nível); Cálculo de volumes de corte e aterro.",
        "bibliografiaBasica": [
            "TULER, M.; SARAIVA, S. Fundamentos de topografia. Porto Alegre: Bookman, 2014.",
            "CASACA, João Martins. Topografia geral. 4. ed. Rio de Janeiro: LTC, 2011.",
            "BORGES, A. C. Topografia aplicada à engenharia civil. 2. ed. E. Blucher. 2013. v. 2."
        ],
        "bibliografiaComplementar": [
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 13133: execução de levantamento topográfico - procedimento. Rio de Janeiro: ABNT, 2021.",
            "MINISTÉRIO DA DEFESA. Trafego Aéreo - ICA 100-40 : aeronaves não tripuladas e o acesso ao espaço aéreo brasileiro. Brasilia: DECEA. 2020.",
            "McCORMAC, Jack C. Topografia. 5. ed. Rio de Janeiro: LTC, 2007.",
            "TULER, M; SARAIVA, S; TEIXEIRA, A. Manual de práticas de topografia. Porto Alegre. Bookman. 2017.",
            "BORGES, A. C. Topografia aplicada à engenharia civil. E. Blucher. 1992. v. 1."
        ]
    },
    {
        "id": "G10FEST0.01",
        "nome": "Fundamentos de Estática",
        "ch": "60h",
        "periodo": 4,
        "eixo": "Estruturas e geotecnia",
        "prerequisitos": ["G10FMEC0.01", "G10INSE0.01", "G10CFVV1.01"],
        "corequisitos": [],
        "ementa": "Diagrama de corpo livre; sistemas de forças resultantes; equilíbrio de um corpo rígido; análise estrutural; forças internas; atrito; centro de gravidade e centróide; momentos de inércia; trabalho virtual.",
        "bibliografiaBasica": [
            "BEER, F. P.; EISENBERG, E. R.; JOHNSTON, E. R. Mecânica vetorial para engenheiros: estática. 9. ed. Porto Alegre: AMGH, 2012.",
            "HIBBELER, R. C. Estática: mecânica para engenharia. 12. ed. São Paulo: Pearson Prentice Hall, 2011.",
            "MERIAM, J. L.; KRAIGE, L. G. Mecânica para engenharia: volume 1: estática. 7. ed. Rio de Janeiro: LTC, 2016."
        ],
        "bibliografiaComplementar": [
            "SHAMES, I. H. Estática: mecânica para engenharia. 4. ed. São Paulo: Prentice Hall, 2002.",
            "SORIANO, H. L. Estática das estruturas. 3. ed. rev. e ampl. Rio de Janeiro: Ciência Moderna, 2013.",
            "ALMEIDA, M. C. F. Estruturas isostáticas. São Paulo: Oficina de Textos, 2009.",
            "KRIPKA, M. Análise estrutural para engenharia civil e arquitetura: estruturas isostáticas. 3. ed. São Paulo: PINI, 2020.",
            "HIBBELER, R. C. Análise das estruturas. 8. ed. São Paulo: Pearson, 2013."
        ]
    },
    {
        "id": "G10GAEN0.01",
        "nome": "Geologia Aplicada à Engenharia",
        "ch": "60h",
        "periodo": 4,
        "eixo": "Estruturas e geotecnia",
        "prerequisitos": [],
        "corequisitos": [],
        "ementa": "A Terra: composição, estrutura e processos geológicos. Minerais primários. Rochas Ígneas. Rochas Sedimentares. Rochas Metamórficas. Problemas Geotécnicos associados aos diferentes tipos de rochas. Propriedades e elementos estruturais das rochas. Intemperismo. Fatores de formação do solo. Tipos de solos.",
        "bibliografiaBasica": [
            "TEIXEIRA, Wilson (Org.). Decifrando a terra. 2. ed. São Paulo: Ed. Nacional, 2009.",
            "CHIOSSI, Nivaldo José. Geologia de engenharia. 3. ed. São Paulo: Oficina de Textos, c2013.",
            "LEPSCH, I. F. 19 lições de Pedologia. Editora Oficina de Textos, São Paulo. 456 p. 2011."
        ],
        "bibliografiaComplementar": [
            "MACIEL FILHO, C. L. Introdução à geologia de engenharia. Santa Maria: UFSM, 1994.",
            "MASSAD, F. Obras de Terra: curso básico de geotecnia. 2. ed. São Paulo: Oficina de Textos, 2010.",
            "POPP, J. H. Geologia geral. 7. ed. Rio de Janeiro: LTC, 2017.",
            "SCHNAID, F.; ODEBRECHT, E. Ensaios de campo e suas aplicações à engenharia de fundações. 2. ed. São Paulo: Oficina de Texto, 2012.",
            "FIORI, A. P.; CARMIGNANI, L. Fundamentos de mecânica dos solos e das rochas: aplicações na estabilidade de taludes. 2. ed. Curitiba: UFPR, 2009."
        ]
    },
    {
        "id": "G10GAAP0.01",
        "nome": "Gestão Ambiental Aplicada",
        "ch": "60h",
        "periodo": 4,
        "eixo": "Hidrotecnia e Recursos Ambientais",
        "prerequisitos": [],
        "corequisitos": [],
        "ementa": "Engenharia e meio ambiente. Movimento ambientalista no Brasil e no mundo. Fundamentos de ecologia. Poluição ambiental. Interações entre atividades humanas e compartimentos da biosfera: atmosfera, hidrosfera e litosfera. Impacto ambiental. Levantamento, classificação e análise de impactos ambientais de projetos de engenharia. Educação Ambiental e Sustentabilidade.",
        "bibliografiaBasica": [
            "BRAGA, B. et al. Introdução à engenharia ambiental: o desafio do desenvolvimento sustentável. 3. ed. São Paulo: Pearson, 2021.",
            "MILLER JUNIOR, G.T.; SPOOLMAN, S, E. Ciência ambiental. 16. ed. São Paulo: Cengage Learning, 2021.",
            "SÁNCHEZ, L. E. Avaliação de impacto ambiental: conceitos e métodos. 3. ed. São Paulo: Oficina de Textos, 2020."
        ],
        "bibliografiaComplementar": [
            "BEGON, M; HARPER, J. L.; TOWNSEND, C. R. Ecologia: de indivíduos a ecossistemas. Porto Alegre: Artmed, 2007.",
            "CALIJURI, M. C; CUNHA, D. G. F. Engenharia Ambiental: conceitos, tecnologias e gestão. 2. ed. Rio de Janeiro: Elsevier, 2019.",
            "MAKOWER, J. A economia verde: descubra as oportunidades e os desafios de uma nova era dos negócios. São Paulo: Gente, 2009.",
            "RICKLEFS, R. E. A economia da natureza. 6. ed. Rio de Janeiro: Guanabara Koogan, .2010.",
            "GOLDEMBERG, J., AGOPYAN, V., JOHN V. M. O desafio da sustentabilidade na construção Civil. 1. ed. Editora Blucher. 2011."
        ]
    },
    // Período 5
    {
        "id": "G10MNCO0.01",
        "nome": "Métodos Numéricos Computacionais",
        "ch": "60h",
        "periodo": 5,
        "eixo": "Computação e matemática aplicada",
        "prerequisitos": ["G10PCOM1.01", "G10LPCO1.01"],
        "corequisitos": ["G10EDOR0.01"],
        "ementa": "Erros; diferenças finitas; métodos iterativos; interpolação e aproximação de funções; integração numérica; resolução numérica de equações algébricas e transcendentes; sistemas algébricos lineares; resolução numérica de equações diferenciais ordinárias; utilização de softwares de análise numérica.",
        "bibliografiaBasica": [
            "CAMPOS, Frederico Ferreira. Algoritmos numéricos. 2. ed. Rio de Janeiro: LTC, 2007.",
            "FRANCO, Neide Bertoldi. Cálculo numérico. São Paulo: Pearson Prentice Hall, c2007.",
            "RUGGIERO, Márcia A. Gomes; LOPES, Vera Lúcia da Rocha. Cálculo numérico: aspectos teóricos e computacionais. 2. ed. São Paulo: Pearson Makron Books, c1997."
        ],
        "bibliografiaComplementar": [
            "GILAT, Amos; SUBRAMANIAM, Vish. Métodos numéricos para engenheiros e cientistas: uma introdução com aplicações usando o MATLAB. Porto Alegre: Bookman, 2008.",
            "CHAPRA, Steven C.; CANALE, Raymond P. Métodos numéricos para engenharia. 7. ed. São Paulo: McGraw Hill, 2016.",
            "SPERANDIO, Décio; MENDES, João Teixeira; SILVA, Luiz Henry Monken e. Cálculo numérico: características matemáticas e computacionais dos métodos numéricos. São Paulo: Prentice Hall, 2003.",
            "BURDEN, Richard L. Análise numérica. São Paulo: Cengage Learning, 2008.",
            "BARROSO, Leônidas Conceição et al. Cálculo numérico: (com aplicações). 2. ed. São Paulo: Harbra, c1987."
        ]
    },
    {
        "id": "G10CMAT0.01",
        "nome": "Ciência dos Materiais",
        "ch": "30h",
        "periodo": 5,
        "eixo": "Construção Civil e materiais",
        "prerequisitos": ["G10QUIM0.01", "G10LQUI0.01"],
        "corequisitos": [],
        "ementa": "Materiais de engenharia; estruturas e propriedades físicas, químicas e mecânicas dos materiais sólidos, tais como metais, cerâmicas, polímeros e compósitos; força e energia de ligação; imperfeições em sólidos; falhas dos materiais; alterações microestruturais; noções de materiais compósitos; impactos ambientais, sociais e econômicos dos materiais de engenharia na sociedade; reciclagem e reutilização de resíduos de construção e demolição na construção civil.",
        "bibliografiaBasica": [
            "CALLISTER, William D., Jr.; RETHWISCH, David G. Ciência e engenharia de materiais: uma introdução. 8. ed. Rio de Janeiro: LTC, c2012.",
            "VAN VLACK, Lawrence Hall. Princípios de ciência e tecnologia dos materiais. Rio de Janeiro: Elsevier, 1984.",
            "ASKELAND, D.R; WRIGHT, W.J. Ciência e engenharia dos materiais. São Paulo: Cengage Learning. 2015."
        ],
        "bibliografiaComplementar": [
            "BEER, Ferdinand Pierre. Mecânica dos materiais. 7. ed. Porto Alegre: AMGH, 2015.",
            "AMBROZEWICZ, Paulo Henrique Laporte. Materiais de construção. São Paulo: PINI, 2012.",
            "PINHEIRO, Antônio Carlos da Fonseca Bragança; CRIVELARO, Marcos. Fundamentos de resistência dos materiais. Rio de Janeiro: LTC, c2016.",
            "MAROTTA, Theodore W. et al. Basic construction materials. 8th ed. London: Person Prentice Hall, c2011.",
            "ADDIS, B. Reuso de materiais e elementos de construção. São Paulo: Oficina de Textos, 2010."
        ]
    },
    {
        "id": "G10MCON1.01",
        "nome": "Materiais de Construção I",
        "ch": "60h",
        "periodo": 5,
        "eixo": "Construção Civil e materiais",
        "prerequisitos": [],
        "corequisitos": ["G10RMAT1.01"],
        "ementa": "Agregados e aglomerados: cal, cimento, gesso; concreto: dosagem, controle tecnológico, reologia, propriedades físicas; argamassas: tipos, dosagem, propriedades físicas; aulas teóricas e de laboratório.",
        "bibliografiaBasica": [
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 12655: Concreto de cimento Portland - Preparo, controle, recebimento e aceitação – Procedimento. ABNT: Rio de Janeiro, 2022.",
            "BAUER, L. A. F. Materiais de construção. 6. ed. Rio de Janeiro: LTC, 2019. v. 1.",
            "METHA, P. K.; MONTEIRO, P. J. M. Concreto: microestrutura, propriedades e materiais. 2. ed. São Paulo: IBRACON, 2014."
        ],
        "bibliografiaComplementar": [
            "ISAIA, G. C. Materiais de construção civil e princípios de ciência e engenharia de materiais. 3. ed. São Paulo: IBRACON, 2017. v. 1 e 2.",
            "NEVILLE, A. M. Propriedades do concreto. 5. ed. Porto Alegre: Bookman, 2015.",
            "NEVILLE, A. M.; BROOKS, J. J. Tecnologia do concreto. 2. ed. Porto Alegre: Bookman, 2013.",
            "RIBEIRO, D. V. Princípios da ciência dos materiais cimentícios: produção, reações, aplicações e avanços tecnológicos. 1. ed. Curitiba: Appris, 2021.",
            "HELENE, P.; CHRIST, R.; TUTIKIAN, B. Concreto de ultra alto desempenho uhpc: fundamentos, propriedades e dosagem. 1. ed. São Paulo: Leud, 2022."
        ]
    },
    {
        "id": "G10RMAT1.01",
        "nome": "Resistência dos Materiais I",
        "ch": "60h",
        "periodo": 5,
        "eixo": "Estruturas e geotecnia",
        "prerequisitos": ["G10EDOR0.01", "G10FEST0.01"],
        "corequisitos": ["G10TEST1.01"],
        "ementa": "Tensão; Deformação; Propriedades mecânicas dos materiais; Carga axial; Torção; Flexão; Cisalhamento transversal.",
        "bibliografiaBasica": [
            "HIBBELER, R. C., Resistência dos materiais. 10ª ed. São Paulo: Pearson Educação, 2018.",
            "BEER, F. P.; JOHNSTON Jr, E. R.; DEWOLF, J. T.; MAZUREK, D. F. Mecânica dos Materiais. 8ª ed. Porto Alegre: AMGH , 2021.",
            "GERE, J. M.; GOODNO, B. J. Mecânica dos materiais. Tradução: Roberto Henrique Torrejon. São Paulo: Cengage Learning , 2017."
        ],
        "bibliografiaComplementar": [
            "NASH, W. A. Resistência dos materiais. 3. ed. São Paulo: McGraw-Hill, 1990.",
            "CRAIG JR., R. R. Mecânica dos materiais. 2. ed. Rio de Janeiro: LTC, 2003.",
            "BOTELHO, M. H. C. Resistência dos materiais: para entender e gostar. 3ª ed. São Paulo: Blucher, 2015.",
            "TIMOSHENKO, S. P.. Resistência dos materiais. Rio de Janeiro: LTC, 1981. v.1.",
            "TIMOSHENKO, S. P.. Resistência dos materiais. Rio de Janeiro: LTC, 1979. v.2."
        ]
    },
    {
        "id": "G10TEST1.01",
        "nome": "Teoria das Estruturas I",
        "ch": "60h",
        "periodo": 5,
        "eixo": "Estruturas e geotecnia",
        "prerequisitos": ["G10EDOR0.01", "G10FEST0.01"],
        "corequisitos": [],
        "ementa": "Estruturas reticuladas isostáticas; Morfologia das estruturas, carregamentos, idealização; Classificação das estruturas quanto ao equilíbrio estático; Esforços internos em estruturas isostáticas: Vigas, pórticos planos, grelhas, treliças, arcos triarticulados; Forças móveis: Linhas de influência de vigas isostáticas.",
        "bibliografiaBasica": [
            "SORIANO, H. L. Estática das estruturas. 3. ed. rev. e ampl. Rio de Janeiro: Ciência Moderna, 2013.",
            "ALMEIDA, M. C. F. Estruturas isostáticas. São Paulo: Oficina de Textos, 2009.",
            "MARTHA, L. F. Análise de estruturas: conceito e métodos básicos. 2. ed. Rio de Janeiro: Elsevier, 2017."
        ],
        "bibliografiaComplementar": [
            "KRIPKA, M. Análise estrutural para engenharia civil e arquitetura: estruturas isostáticas. 2. ed. São Paulo: PINI, 2011.",
            "PORTO, T. B. Mecânica dos sólidos: módulo 2: Introdução à análise estrutural. Belo Horizonte: FUMARC, 2014.",
            "HIBBELER, R. C. Análise das estruturas. 8. ed. São Paulo: Pearson, 2013.",
            "HIBBELER, R. C. Resistência dos materiais. 10. ed. São Paulo: Pearson Educação, 2018.",
            "BEER, F. P.; EISENBERG, E. R.; JOHNSTON, E. R. Mecânica vetorial para engenheiros: estática. 9. ed. São Paulo: McGraw-Hill, 2011."
        ]
    },
    {
        "id": "G10FTRA0.01",
        "nome": "Fenômenos de Transporte",
        "ch": "90h",
        "periodo": 5,
        "eixo": "Hidrotecnia e Recursos Ambientais",
        "prerequisitos": ["G10FOFT0.01", "G10CFVV2.01", "G10FEOFT0.01"],
        "corequisitos": [],
        "ementa": "Conceitos básicos: viscosidade, pressão, temperatura, tensão superficial; fluido newtoniano e não newtoniano; camada limite; equação fundamental da fluido-estática; princípios da manometria; empuxo hidrostático; esforços sobre corpos submersos; fluidos em movimento; derivada particular; equação de conservação para volume de controle teorema de transporte de Reynolds; conservação da massa; equação da quantidade de movimento, na forma integral; equação de Euler; equação de Bernoulli; tubo de Pitot e Venturi; escoamento de fluido viscoso; perda de carga em tubos e dutos; perdas distribuídas e perdas localizadas; diagrama de Moody; condução térmica através de paredes planas; analogia elétrica; condução térmica através de paredes curvas e compostas; convecção térmica sobre placas planas; convecção térmica para escoamentos laminares e turbulentos, em tubos e dutos; correlações empíricas; radiação térmica.",
        "bibliografiaBasica": [
            "FOX, R.W.; MCDONALD, A. T. Introdução à mecânica dos fluidos. 8. ed. Rio de Janeiro: LTC, c2014.",
            "BERGMAN, T. L. LAVINE, A. S. INCROPERA, F. P.; DE WITT, D. P. Fundamentos de transferência de calor e massa. 7. ed. Rio de Janeiro: LTC, c2014.",
            "BRUNETTI, F. Mecânica dos fluidos. 2 ed. São Paulo: Pearson, 2008."
        ],
        "bibliografiaComplementar": [
            "BIRD, R. B.; STEWART, W. E.; LIGHTFOOT, E. N. Fenômenos de transporte. 2. ed. Rio de Janeiro: LTC, 2004.",
            "ÇENGEL, Y. A.; CIMBALA, J. M. Mecânica dos fluidos: fundamentos e aplicações. 3. ed. São Paulo: McGraw-Hill, 2015.",
            "MUNSON, B. R.; YOUNG, D. F.; OKIISHI, T. H. Fundamentos da mecânica dos fluidos. São Paulo: Edgard Blucher, 1997. v. 2.",
            "POTTER, M. C.; WIGGERT, D. C.; HONDZO, M. Mecânica dos fluidos. São Paulo: Pioneira, 2004.",
            "SCHIMIDT, F.W.; HENDERSON, R. E.; WOLGEMUTH, C. H. Introdução às ciências térmicas: termodinâmica, mecânica dos fluidos e transferência de calor. São Paulo: Edgard Blucher, 1996."
        ]
    },
    {
        "id": "G10MCIE0.01",
        "nome": "Metodologia Científica",
        "ch": "30h",
        "periodo": 5,
        "eixo": "Prática profissional e formação diversificada",
        "prerequisitos": [],
        "corequisitos": [],
        "ementa": "Conceito de ciência; pesquisa em ciência e tecnologia; tipos de conhecimento; epistemologia das ciências; métodos de pesquisa; produção da pesquisa científica.",
        "bibliografiaBasica": [
            "FRANÇA, J. L. Manual de normalização de publicações técnico- científicas. 8. ed. Belo Horizonte: Ed. UFMG, 2007.",
            "LAKATOS, E. M.; MARCONI, M. A. Metodologia científica. 8. ed. São Paulo: Atlas, 2022.",
            "LAKATOS, E. M.; MARCONI, M. A. Técnicas de pesquisa: planejamento e execução de pesquisas, amostragens e técnicas de pesquisa, elaboração, análise e interpretação de dados. 9. ed. São Paulo: Atlas, 2021."
        ],
        "bibliografiaComplementar": [
            "CERVO, Amado Luiz; BERVIAN, Pedro Alcino; SILVA, Roberto da. Metodologia científica. 6. ed. São Paulo: Prentice-Hall, 2007.",
            "DEMO, P. Metodologia científica em ciências sociais. 3. ed. São Paulo: Atlas, 2000.",
            "OLIVEIRA, Silvio Luiz de. Tratado de metodologia científica: projetos de pesquisas, TGI, PFC, monografias, dissertações e teses. 2. ed. São Paulo: Pioneira, c1999.",
            "SEVERINO, A. J. Metodologia do trabalho científico. 23. ed. São Paulo: Cortez, 2007.",
            "TAKAHASHI, Ricardo H. C. A estrutura do conhecimento tecnológico do tipo científico. Belo Horizonte: Editora UFMG, 2009."
        ]
    },
    // Período 6
    {
        "id": "G10ADFI0.01",
        "nome": "Administração Financeira",
        "ch": "60h",
        "periodo": 6,
        "eixo": "Humanidades e ciências sociais",
        "prerequisitos": [],
        "corequisitos": [],
        "ementa": "Introdução às finanças corporativas. Função e estrutura financeira da empresa. Decisões financeiras: de investimento, de financiamento da empresa e distribuição de dividendos. As decisões financeiras e a informação contábil. Administração de capital de giro: Finanças de curto prazo. Análise de lucratividade e risco. Custo e estrutura de Capital.",
        "bibliografiaBasica": [
            "BRIGHAM, E. F.; EHRHARDT, Michael C. Administração financeira: teoria e prática. 3. ed. São Paulo: Cengage Learning, 2016.",
            "ROSS, S. A.; WESTERFIELD. R. W.; JAFFE, J; LAMB, R. Administração Financeira. 10. Ed. São Paulo: AMGH, 2015.",
            "CASAROTTO FILHO, Nélson; KOPITTKE, Bruno Hartmut. Análise de investimentos: matemática financeira, engenharia econômica, tomada de decisão, estratégia empresarial. 11. ed. São Paulo: Atlas, 2010."
        ],
        "bibliografiaComplementar": [
            "ASSAF, Alexandre Neto. Matemática Financeira e suas aplicações. 15. Ed. São Paulo: Atlas, 2019.",
            "MAWKIN, N. G. Introdução à economia. 6. Ed. São Paulo: Cengane Learning, 2014.",
            "SAMANEZ, C. P. Engenharia econômica. São Paulo: Pearson, 2009.",
            "VASCONCELLOS, M. A. S. Economia micro e macro. 6. ed. São Paulo: Atlas, 2015.",
            "BLANK, L.; TARQUIN, A. Engenharia econômica. 6 ed. São Paulo: McGraw-Hill, 2008."
        ]
    },
    {
        "id": "G10IESE0.01",
        "nome": "Introdução à Engenharia de Segurança",
        "ch": "30h",
        "periodo": 6,
        "eixo": "Humanidades e ciências sociais",
        "prerequisitos": [],
        "corequisitos": [],
        "ementa": "Prevenção de riscos nas atividades de trabalho com vistas à defesa da integridade das pessoas. Políticas prevencionistas e normas regulamentadoras. Programas de Segurança do Trabalho. Sistemas de proteção administrativo, coletivo e individual. Legislação Acidentária. Segurança Contra Incêndio e Pânico.",
        "bibliografiaBasica": [
            "FERREIRA FILHO, Fernando Guedes (coord.). Segurança e saúde na indústria da construção: prevenção e inovação. Brasília: CВІС, 2019.",
            "HEMÉRITAS, Adhemar Batista. Organização e normas. 5. ed. São Paulo: Atlas, 1991.",
            "HOEPPNER, Marcos Garcia (org.). NR: Normas regulamentadoras relativas à segurança e saúde no trabalho (Capítulo V. Título II, da CLT): NR-1 à NR-36. 6. ed. São Paulo: Ícone, 2015."
        ],
        "bibliografiaComplementar": [
            "CIENFUEGOS, Freddy. Segurança no laboratório. Rio de Janeiro: Interciência, 2001.",
            "DE CICCO, Francesco M.G.A.F. Introdução à engenharia de segurança de sistemas. 2. ed. São Paulo: FUNDACENTRO, 1981.",
            "KROEMER, K. H. E. Manual de ergonomia: adaptando o trabalho ao homem. 5. ed. Porto Alegre: Bookman, 2005.",
            "EQUIPE ATLAS. Segurança e medicina do trabalho. 75. ed. São Paulo: Atlas, 2015.",
            "SENAI. Regras de segurança (mecânica). Rio de Janeiro: Senai, 1962."
        ]
    },
    {
        "id": "G10MCON2.01",
        "nome": "Materiais de Construção II",
        "ch": "60h",
        "periodo": 6,
        "eixo": "Construção Civil e materiais",
        "prerequisitos": ["G10MCON1.01"],
        "corequisitos": [],
        "ementa": "Madeira como material de construção; materiais cerâmicos: produção, especificação, controle tecnológico; materiais metálicos na construção, produtos siderúrgicos; asfaltos e alcatrões; vidros e vernizes; polímeros.",
        "bibliografiaBasica": [
            "BAUER, L. A. F. Materiais de construção. 6. ed. Rio de Janeiro: LTC, 2019. v. 1.",
            "BAUER, L. A. F. Materiais de construção 2. 6. ed. Rio de Janeiro: LTC, 2019. v. 2.",
            "VAN VLACK, L. H. Princípios de ciência e tecnologia dos materiais. Rio de Janeiro: Elsevier, 1984."
        ],
        "bibliografiaComplementar": [
            "RIBEIRO, C. C.; PINTO, J. D. S.; STARLING, T. Materiais de construção civil. 4. ed. Belo Horizonte: Editora, UFMG, 2013.",
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 15270: componentes cerâmicos: blocos e tijolos para alvenaria - Parte 1 e 2. Rio de Janeiro: ABNT, 2017.",
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 7190: Projeto de estruturas de madeira - Parte 2, 3 e 4. Rio de Janeiro: ABNT, 2022.",
            "PARSEKIAN, G. A; SOARES, M. M. Alvenaria estrutural em blocos cerâmicos: projeto, execução e controle. São Paulo: O Nome da Rosa, 2010.",
            "ADDIS, B. Reuso de materiais e elementos de construção. São Paulo: Oficina de Textos, 2010."
        ]
    },
    {
        "id": "G10RMAT2.01",
        "nome": "Resistência dos Materiais II",
        "ch": "60h",
        "periodo": 6,
        "eixo": "Estruturas e geotecnia",
        "prerequisitos": ["G10RMAT1.01"],
        "corequisitos": [],
        "ementa": "Deslocamentos em vigas: linha elástica; determinação do deslocamento e da inclinação pelo processo de integração direta; Princípio de superposição de efeitos, vigas e eixos estaticamente indeterminados; Análise de peças submetidas a carregamentos combinados; Flambagem de colunas: conceito de carga crítica, coluna ideal; Colunas com vários tipos de apoios; Transformação de tensão; Critérios de Falha.",
        "bibliografiaBasica": [
            "HIBBELER, R. C. Resistência dos materiais. 10. ed. São Paulo: Pearson Educação, 2018.",
            "BEER, F. P.; JOHNSTON Jr, E. R.; DEWOLF, J. T.; MAZUREK, D. F. Mecânica dos Materiais. 8. ed. Porto Alegre: AMGH , 2021.",
            "GERE, J. M.; GOODNO, B. J. Mecânica dos materiais. São Paulo: Cengage Learning , 2017."
        ],
        "bibliografiaComplementar": [
            "NASH, W. A. Resistência dos materiais. 3. ed. São Paulo: McGraw-Hill, 1990.",
            "CRAIG JR., R. R. Mecânica dos materiais. 2. ed. Rio de Janeiro: LTC, 2003.",
            "BOTELHO, M. H. C. Resistência dos materiais: para entender e gostar. 3. ed. São Paulo: Blucher, 2015.",
            "TIMOSHENKO, S. P.. Resistência dos materiais. Rio de Janeiro: LTC, 1981. v.1.",
            "TIMOSHENKO, S. P.. Resistência dos materiais. Rio de Janeiro: LTC, 1979. v.2."
        ]
    },
    {
        "id": "G10TEST2.01",
        "nome": "Teoria das Estruturas II",
        "ch": "60h",
        "periodo": 6,
        "eixo": "Estruturas e geotecnia",
        "prerequisitos": ["G10TEST1.01"],
        "corequisitos": [],
        "ementa": "Princípio dos trabalhos virtuais: Método da carga unitária; Análise de estruturas estaticamente indeterminadas: método das forças; Análise de estruturas cinematicamente indeterminadas: método dos deslocamentos; Introdução ao método da rigidez direta; Métodos de energia.",
        "bibliografiaBasica": [
            "MARTHA, L. F. Análise de estruturas: conceito e métodos básicos. 3. ed. Rio de Janeiro: Elsevier, 2017.",
            "SORIANO, H. L; LIMA, S. S. Análise de estruturas: método das forças e método dos deslocamentos. 2. ed. atual. Rio de Janeiro: Ciência Moderna, 2006.",
            "HIBBELER, R. C. Análise das estruturas. 8. ed. São Paulo: Pearson, 2013."
        ],
        "bibliografiaComplementar": [
            "HIBBELER, R. C. Resistência dos materiais. 10. ed. São Paulo: Pearson Educação, 2018.",
            "MCCORMAC, J. C. Análise estrutural: usando métodos clássicos e métodos matriciais. 4. ed. Rio de Janeiro: LTC, 2014.",
            "SORIANO, H. L. Análise de estruturas: formulação matricial e implementação computacional; Rio de Janeiro: Ciência Moderna, 2005.",
            "PORTO, T. B.; Azevedo Júnior, A. P.; Parreiras, W. F.; Carmo, T. F. Mecânica dos sólidos: módulo 10: métodos de energia. Coleção Na Prática (10). Belo Horizonte: FUMARC, 2017.",
            "SORIANO, H. L. Estática das estruturas. 3. ed. rev. e ampl. Rio de Janeiro: Ciência Moderna, 2013."
        ]
    },
    {
        "id": "G10MSOL1.01",
        "nome": "Mecânica dos Solos I",
        "ch": "60h",
        "periodo": 6,
        "eixo": "Estruturas e geotecnia",
        "prerequisitos": ["G10GAEN0.01", "G10RMAT1.01"],
        "corequisitos": [],
        "ementa": "Histórico e evolução da engenharia geotécnica; solos sob o ponto de vista da engenharia; físicas dos solos; classificação dos solos; compactação; tensões e deformações nos solos; hidráulica dos solos; compressibilidade e adensamento dos solos; drenagem e filtros; amostragem de solos; ensaios de laboratório.",
        "bibliografiaBasica": [
            "CAPUTO, H. P. Mecânica dos solos e suas aplicações: exercícios e problemas resolvidos. 7. ed. Rio de Janeiro: LTC, 2015. v. 3.",
            "CAPUTO, H. P. Mecânica dos solos e suas aplicações: fundamentos: volume 1. 7. ed. Rio de Janeiro: LTC, 2015. v. 1.",
            "PINTO, C. S. Curso básico de mecânica dos solos: em 16 aulas. 3. ed. São Paulo: Oficina de Textos, 2006."
        ],
        "bibliografiaComplementar": [
            "DAS, B. M. Fundamentos de engenharia geotécnica. São Paulo: Cengage Learning, 2012. (Tradução da 7ª Edição Norte-Americana).",
            "HACHICHI, W. et al. Fundações: teoria e prática. 2. ed. São Paulo: PINI, 1998.",
            "FIORI, A. P.; CARMIGNANI, L. Fundamentos de mecânica dos solos e das rochas: aplicações na estabilidade de taludes. 2. ed. Curitiba: UFPR, 2009.",
            "FERNANDES, M. M. Mecânica dos solos: conceitos e princípios fundamentais: volume 1. São Paulo: Oficina de Textos, 2016. v. 1.",
            "MASSAD, F. Curso básico de geotecnia: obras de terra. 2. ed. São Paulo: Oficina de Textos, 2010."
        ]
    },
    {
        "id": "G10PARQ0.01",
        "nome": "Projeto Arquitetônico",
        "ch": "60h",
        "periodo": 6,
        "eixo": "Expressão Gráfica",
        "prerequisitos": ["G10DCOM0.01", "G10TOPO2.01"],
        "corequisitos": [],
        "ementa": "O projeto arquitetônico e o empreendimento. Parâmetros urbanísticos: interpretação e utilização. Fatores condicionantes ou determinantes no desenvolvimento do projeto arquitetônico. Elaboração e apresentação de um projeto arquitetônico. Estilos arquitetônicos.",
        "bibliografiaBasica": [
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 16636-1: Elaboração e desenvolvimento de serviços técnicos especializados de projetos arquitetônicos e urbanísticos Parte 1: Diretrizes e terminologia. Rio de Janeiro: ABNT, 2017.",
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 16636-2: Elaboração e desenvolvimento de serviços técnicos especializados de projetos arquitetônicos e urbanísticos Parte 2: Projeto arquitetônico. Rio de Janeiro: ABNT, 2017.",
            "CURVELO. Câmara Municipal. Lei complementar Nº 152, de 02 de fevereiro de 2021. institui o código de obras e edificações do município de Curvelo/MG e revoga a lei nº 778, de 13 de março de 1973. Curvelo: Câmara municipal, 2021."
        ],
        "bibliografiaComplementar": [
            "CURVELO. Câmara Municipal. Parcelamento, uso e ocupação do solo. Estabelece normas para o parcelamento, uso ocupação do solo urbano. Curvelo: Câmara municipal, 2021.",
            "KOWALTOWSKI, Doris C. C. K. (org.). O processo de projeto em arquitetura: da teoria à tecnologia. São Paulo: Oficina de Textos, 2011.",
            "SILVA, Elvan. Uma introdução ao projeto arquitetônico. 2. ed. rev. e ampl. [S.l.]: Editora da UFRGS, 1998.",
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 9050: Acessibilidade a edificações, mobiliário, espaços e equipamentos urbanos. Rio de Janeiro: ABNT, 2020.",
            "BRASIL. Congresso Nacional. Lei 10.257, de 10 de julho de 2001. Regulamenta os arts. 182 e 183 da Constituição Federal, estabelece diretrizes gerais da política urbana e dá outras providências. Brasília: Congresso Nacional, 2001."
        ]
    },
    // Período 7
    {
        "id": "G10GEMP0.01",
        "nome": "Gestão Empreendedora",
        "ch": "60h",
        "periodo": 7,
        "eixo": "Humanidades e ciências sociais",
        "prerequisitos": ["G10ADFI0.01"],
        "corequisitos": [],
        "ementa": "Noções de empreendedorismo. Perfil do empreendedor e características empreendedoras. Características e etapas de um projeto. Modelo de negócios. Estrutura de um plano de negócios. Estudo dos métodos de gestão, incluindo as ferramentas da qualidade e sua implementação.",
        "bibliografiaBasica": [
            "BERNARDI, L. A. Manual de empreendedorismo e gestão: fundamentos, estratégias e dinâmicas. 2. ed. São Paulo: Atlas, 2012.",
            "SOUZA, Stefano Nunes Portuguez de (Coord.). Como elaborar um plano de negócios. Brasília: Sebrae, 2013.",
            "SEBRAE. Gestão de pessoas e equipe: guia do educador. Brasília, DF: Sebrae, 2013. (Na medida)."
        ],
        "bibliografiaComplementar": [
            "MARSHALL JUNIOR, Isnard. Gestão da qualidade. 10. ed. Rio de Janeiro: FGV, 2010.",
            "PEREIRA, Nixon Diniz. Boas ideias: as chaves para a inovação em negócios e startups. Erechim: Deviant, 2017.",
            "CERTO, S. C; PETER, J. P.; MARCONDES, R. C.; CESAR, A. M. R. Administração Estratégica: planejamento e Implantação de Estratégias. 3. ed. São Paulo: Pearson, 2010.",
            "ESCARLATE, Luiz Felipe (consult. técn.). Aprender a empreender. Rio de Janeiro: Fundação Roberto Marinho: Sebrae, 2010.",
            "MAXIMIANO, Antonio Cesar Amaru. Administração para empreendedores: fundamentos da criação e da gestão de novos negócios. São Paulo: Pearson Prentice Hall, 2006."
        ]
    },
    {
        "id": "G10EPTR0.01",
        "nome": "Elementos de Planejamento de Transportes",
        "ch": "60h",
        "periodo": 7,
        "eixo": "Construção Civil e materiais",
        "prerequisitos": ["G10TOPO2.01"],
        "corequisitos": [],
        "ementa": "Os modos de transporte, características institucionais e econômicas dos serviços de transporte público e acessibilidade; critérios de Conforto, segurança, problemas ambientais; o uso do espaço de circulação, análise das condições atuais; desenvolvimento urbano e as políticas de transporte; pesquisa sobre a demanda de viagens (O/D) pesquisa sobre o sistema viário e a oferta de transporte coletivo; modelo de geração de viagens; modelo de alocação de rotas; crítica ao uso das técnicas tradicionais de planejamento; crítica ao planejamento de transporte em países em desenvolvimento.",
        "bibliografiaBasica": [
            "LESTER, A. Hoel. Engenharia de Infraestrutura de Transportes: uma integração multimodal. São Paulo: Cengage Learning, 2011.",
            "FERRAZ, A C. P. ; TORRES, I. G. E. Transporte Público Urbano. 2. ed. São Carlos: Rima, 2004.",
            "ALBANO, J. F. Vias de transporte. Porto Alegre: Bookman, 2016."
        ],
        "bibliografiaComplementar": [
            "KAWAMOTO, E. Análise de sistemas de transporte. São Carlos: EESC-USP, 2002.",
            "BRUTON, M. J. Introdução ao planejamento dos transportes. São Paulo: EDUSD, 1979.",
            "VASCONCELLOS, E. A. Transporte urbano nos países em desenvolvimento. São Paulo: Unidas, 2000.",
            "FOGLIATTI, M. C.; FILIPPO, S.; GOUDARD, B. Avaliação de impactos ambientais: aplicação aos sistemas de transporte. São Paulo: Interciência, 2004.",
            "PLANKA.nu. A estrutura de poder do trânsito. 1. ed. São Paulo: Fundação Rosa de Luxemburgo, 2020."
        ]
    },
    {
        "id": "G10TCON1.01",
        "nome": "Tecnologia das Construções I",
        "ch": "60h",
        "periodo": 7,
        "eixo": "Construção Civil e materiais",
        "prerequisitos": ["G10MSOL1.01", "G10MCON2.01"],
        "corequisitos": [],
        "ementa": "Legislação e implantação de obra; canteiro de Obra; locação de obras; execução de Fundações (obras de pequeno e grande porte); execução de estruturas (sistemas estruturais, sistemas de formas e dimensionamento e detalhamento de formas, produção de armaduras, sequência de produção e etapas de controle, incluindo a produção, lançamento, adensamento, cura e durabilidade dos concretos).",
        "bibliografiaBasica": [
            "AZEREDO, H. A. O edifício até a sua cobertura. 2. ed. São Paulo: Edgar Blucher, 1997.",
            "BORGES, A.C. Prática das pequenas construções. 9. ed. São Paulo: Blucher, 2009.",
            "PEURIFOY, R. L. Planejamento, equipamentos e métodos para a construção civil. 8. ed. Porto Alegre: AMGH, 2015."
        ],
        "bibliografiaComplementar": [
            "CHING, F. D. K. Técnicas de construção ilustradas. 4. ed. Porto Alegre: Bookman, 2010.",
            "NAZAR, N. Fôrmas e escoramentos para edifícios: critérios para dimensionamento e escolha do sistema. São Paulo: Editora PINI, 2007.",
            "METHA, P. K.; MONTEIRO, J. P. Concreto: microestrutura, propriedades e materiais. 3. ed. São Paulo: IBRACON, 2008.",
            "SOUZA, U. E. L. Projeto e implantação do canteiro. 3. ed. São Paulo: Editora PINI, 2008.",
            "YAZIGI, W. A técnica de edificar. 10. ed. São Paulo: Editora PINI, 2009."
        ]
    },
    {
        "id": "G10CARM1.01",
        "nome": "Concreto Armado I",
        "ch": "60h",
        "periodo": 7,
        "eixo": "Estruturas e geotecnia",
        "prerequisitos": ["G10RMAT2.01", "G10TEST2.01"],
        "corequisitos": [],
        "ementa": "Propriedades físicas e reológicas do concreto; propriedades do aço destinado às estruturas de concreto armado; solicitações normais domínios da NBR-6118, vigas a flexão simples seções retangulares e T; cisalhamento em vigas retangulares; verificação e controle da fissuração; lajes retangulares armadas nas duas e em uma só direção; lajes em balanço; aderência e ancoragem detalhamento de vigas.",
        "bibliografiaBasica": [
            "PORTO, T. B, FERNANDES, D. S. G. Curso básico de concreto armado. Ed. Oficina de Textos. 1ª Edição. São Paulo. 2015.",
            "PORTO, T. B, FERNANDES, D. S. G. Projeto estrutural de um edifício em concreto armado. Ed. FUMARC. 2. ed. Belo Horizonte. 2016.",
            "CARVALHO, R. C.; PINHEIRO, L. M. Cálculo e detalhamento de estruturas usuais de concreto armado: segundo a NBR 6118:2014. 4. ed. São Carlos: EdUFSCar, 2014."
        ],
        "bibliografiaComplementar": [
            "LEONHARDT, F. Construções de concreto: princípios básicos do dimensionamento de estruturas de concreto armado. Rio de Janeiro: Interciência: 1978. v.1",
            "LEONHARDT, F. Construções de concreto: casos especiais de dimensionamento de estruturas de concreto armado. Rio de Janeiro: Interciência: 1978. v.2",
            "LEONHARDT, F. Construções de concreto: princípios básicos sobre a armação de estruturas de concreto armado. Rio de Janeiro: Interciência: 1978. v.3",
            "ROLIM, A. C. R. Estruturas de concreto armado para edificações. Ed. Leud. São Paulo. 2022.",
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR-6118: projeto de estruturas de concreto armado – procedimentos. Rio de Janeiro: ABNT, 2014."
        ]
    },
    {
        "id": "G10EACO1.01",
        "nome": "Estruturas de Aço I",
        "ch": "60h",
        "periodo": 7,
        "eixo": "Estruturas e geotecnia",
        "prerequisitos": ["G10RMAT2.01", "G10TEST2.01"],
        "corequisitos": [],
        "ementa": "Considerações gerais sobre a construção metálica, propriedades físicas e geométricas dos perfis metálicos; Ações e segurança, métodos de cálculo; Dimensionamento de elementos submetidos à tração, à compressão e à flexão; elementos submetidos aos esforços cortantes; Barras submetidas às solicitações combinadas de flexão, tração ou compressão; Noções gerais sobre ligações parafusadas e soldadas em estruturas metálicas, vigas mistas de aço e concreto; Limpeza e proteção das estruturas; Noções de fabricação; Transporte e Montagem das estruturas; Introdução ao projeto de galpões e coberturas metálicas.",
        "bibliografiaBasica": [
            "FAKURY, R. H.; CASTRO E SILVA, A. L. R.; CALDAS, R. B. Dimensionamento básico de elementos de aço e mistos de aço e concreto. São Paulo: Pearson Education do Brasil, 2018.",
            "DE SOUZA, A. S. C. Dimensionamento de elementos e ligações em estruturas de aço. EdUFSCar, 2018.",
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 8800: Projeto de estruturas de aço e de estruturas mistas de aço e concreto de edifícios. Rio de Janeiro: ABNT, 2008."
        ],
        "bibliografiaComplementar": [
            "PFEIL, W.; PFEIL, M. Estruturas de aço: dimensionamento prático. 9a ed. Rio de Janeiro: LTC, 2022.",
            "DA SILVA, L. S.; SIMÕES, R.; GERVÁSIO, H.; VELLASCO, P.; LIMA, L. Dimensionamento de estruturas de aço: comparação entre o Eurocódigo 3 e a Norma Brasileira NBR 8800. Tradução: Pedro C. G. da Silva Vellasco. Rio de Janeiro: EdUERJ, 2016.",
            "RODRIGUES, I. L. Especificação para estruturas de aço de edifícios. São Paulo: Pini, 2013.",
            "INSTITUTO AÇO BRASIL; VASCONCELLOS, A. L. Ligações em estruturas metálicas. 2. ed. Rio de Janeiro: Instituto Aço Brasil/CBCA, 2017.",
            "CHAMBERLAIN PRAVIA, Z. M.; FICANHA, R.; FABEANE, R. Projeto e cálculo de estruturas de aço. Rio de Janeiro: Elsevier, 2013."
        ]
    },
    {
        "id": "G10MSOL2.01",
        "nome": "Mecânica dos Solos II",
        "ch": "60h",
        "periodo": 7,
        "eixo": "Estruturas e geotecnia",
        "prerequisitos": ["G10MSOL1.01"],
        "corequisitos": [],
        "ementa": "Resistência ao cisalhamento dos solos; ensaios de campo e de laboratório para estudo de comportamento tensão-deformação-resistência dos solos; métodos de equilíbrio limite; estabilidade de taludes e encostas; empuxos de terra; uso de geossintéticos em geotecnia; rebaixamento do lençol freático.",
        "bibliografiaBasica": [
            "CAPUTO, H. P. Mecânica dos solos e suas aplicações: mecânica das rochas, fundações e obras de terra. 8. ed. Rio de Janeiro: LTC, 2022. v. 2.",
            "MARCHETTI, O. Muros de arrimo. São Paulo: Edgard Blücher, 2008.",
            "MASSAD, F. Curso básico de geotecnia: obras de terra. 2. ed. São Paulo: Oficina de Textos, 2010."
        ],
        "bibliografiaComplementar": [
            "CAPUTO, H. P. Mecânica dos solos e suas aplicações: exercícios e problemas resolvidos. 7. ed. Rio de Janeiro: LTC, 2015. v. 3.",
            "HACHICHI, W. et al. Fundações: teoria e prática. 2. ed. São Paulo: PINI, 1998.",
            "FERNANDES, M. M. Mecânica dos solos: introdução à engenharia geotécnica: volume 2. São Paulo: Oficina de Textos, 2014.",
            "SCHNAID, F.; ODEBRECHT, E. Ensaios de campo e suas aplicações à engenharia de fundações. 2. ed. São Paulo: Oficina de Texto, 2012.",
            "VERTEMATTI, J. C. Manual brasileiro de geossintéticos. São Paulo: Edgard Blücher, 2004."
        ]
    },
    {
        "id": "G10HIDR0.01",
        "nome": "Hidráulica",
        "ch": "60h",
        "periodo": 7,
        "eixo": "Hidrotecnia e Recursos Ambientais",
        "prerequisitos": ["G10FTRA0.01"],
        "corequisitos": [],
        "ementa": "Introdução e aplicações da hidráulica; fundamentos de canais livres, canais, tipos e propriedades, tipos de escoamento no tempo e espaço, distribuição de escoamento e pressão, estados de escoamento; escoamento uniforme em canais: cálculo de canais em regime uniforme, seções econômicas, aspectos de projeto de canais; regime crítico de escoamento, energia específica; seções de controle e medição de vazão, transições; calhas medidoras de vazão; ressalto hidráulico e fenômenos localizados; escoamento sob pressão; escoamento sob pressão: conceitos básicos, tipos de perda de carga, escoamento uniforme em tubulações, experiência de Nikuradse; problemas práticos em encanamentos, fórmulas práticas; sistemas hidráulicos de tubulações: tipos de traçados; distribuição de vazão em marcha; condutos equivalentes: sistemas em série e paralelo; sistemas elevatórios: definições, potência; bombas - tipos e características, curvas características de bombas e sistemas; dimensionamento econômico de recalque, fórmula de breese; associação de bombas em série e paralelo, associação de tubulações; NPSH e cavitação.",
        "bibliografiaBasica": [
            "AZEVEDO NETTO, J. M., ALVAREZ, G. A. Manual de hidráulica. 9. ed. São Paulo: Edgard Blucher, 2015.",
            "BAPTISTA, M.; LARA, M. Fundamentos de engenharia hidráulica. 3. ed. Belo Horizonte: Ed. UFMG, 2002.",
            "BASTOS, F. A. A. Problemas de mecânica dos fluidos. Rio de Janeiro: Editora Guanabara S.A., 1987."
        ],
        "bibliografiaComplementar": [
            "CHADWICK, A. J.; MORFETT, J. Hydraulics in civil engineering. 3. ed. London: Harper Collins Academic, 1991.",
            "FEATHERSTONE, R. E.; NALLURI, C. Civil engineering hydraulics. 3. ed. Oxford: Blackwell Science, 1995.",
            "PORTO, R. M. Hidráulica básica. 3. ed. São Carlos: EESC/USP, 2004.",
            "QUINTELA, A .C. Hidráulica. 3. ed. Lisboa: Fundação Calouste Gulbenkian, 1981.",
            "SILVESTRE, P. Hidráulica geral. Rio de Janeiro: LTC, 1979."
        ]
    },
    // Período 8
    {
        "id": "G10TCON2.01",
        "nome": "Tecnologia das Construções II",
        "ch": "60h",
        "periodo": 8,
        "eixo": "Construção Civil e materiais",
        "prerequisitos": ["G10TCON1.01"],
        "corequisitos": [],
        "ementa": "Vedações verticais: execução de alvenaria de vedação, alvenarias racionalizadas, paredes de gesso acartonado; sistemas prediais: instalações hidráulicas, sanitárias e elétricas; esquadrias: conceito, tipos, desempenho, tecnologia de execução e interferência com outros projetos; revestimentos de paredes e tetos: conceitos e classificação: cerâmico, pétreos e gesso, argamassas e suas propriedades, escolha do revestimento; pintura: conceituação, desempenho e sistemas de pintura, contratação e controle; vedações horizontais: contrapisos, tipos de piso: cerâmico, pétreos, madeira, projetos de pisos, forros; impermeabilização: principais sistemas, características de execução, projeto.",
        "bibliografiaBasica": [
            "THOMAZ, Érico. Tecnologia, gerenciamento e qualidade na construção. São Paulo: PINI, 2001.",
            "SALGADO, J. C. P. Técnicas e práticas construtivas para edificação. 2. ed. São Paulo: Érica, 2014.",
            "YAZIGI, W. A técnica de edificar. 15. ed. São Paulo: PINI, 2016."
        ],
        "bibliografiaComplementar": [
            "AZEREDO, H. A. O edifício até a sua cobertura. 2. ed. São Paulo: Edgar Blucher, 1997.",
            "AZEREDO, H. A. O edifício e seu acabamento. São Paulo: Edgard Blucher, c1987.",
            "PINI (Ed.). Construção passo-a-passo. São Paulo: PINI, 2011. v.2.",
            "SOUZA, J. (Coord.). Construção passo-a-passo. São Paulo: PINI, 2009.",
            "MOLITERNO, A. Cadernos de projetos de telhados em estruturas de madeira. 4. ed. São Paulo: Edgard Blucher, 2010."
        ]
    },
    {
        "id": "G10ESTR1.01",
        "nome": "Estradas I",
        "ch": "60h",
        "periodo": 8,
        "eixo": "Construção Civil e materiais",
        "prerequisitos": ["G10TOPO2.01", "G10EPTR0.01", "G10DCOM0.01"],
        "corequisitos": [],
        "ementa": "Escolha do traçado de rodovias e ferrovias. Representação gráfica do projeto. Curvas horizontais. Superlargura. Curvas circulares com transição. Perfil longitudinal: rampas e curvas. Seções transversais: elementos, dimensões, distribuição de superelevação. Interseções. Terraplenagem: movimentos de terra e equipamentos. Noções de sinalização e drenagem de rodovias.",
        "bibliografiaBasica": [
            "ANTAS, P. M.; VIEIRA, A.; GONÇALO, E. A.; LOPES, L. A. S. Estradas: projeto geométrico e de terraplenagem. Rio de Janeiro: Interciência. 2010.",
            "CARVALHO, C. A. B. Projeto geométrico de estradas: concordâncias horizontal e vertical. Viçosa: Ed. UFV, 2005.",
            "PIMENTA, C.R.T.; SILVA, I. de; OLIVEIRA, M.P., SEGANTINE, P.C.L. Projeto Geométrico de Rodovias, São Paulo: LTC, 2017."
        ],
        "bibliografiaComplementar": [
            "COSTA, A. U. L. Desenho técnico de estradas - Volume 1. 1. ed. Rio de Janeiro: Ciência Moderna, 2018.",
            "LEE, Shu Han. Introdução ao projeto geométrico de rodovias. 3. ed. Florianópoles: Ed. da UFSC, 2008.",
            "DNER. Manual de Projeto Geométrico de Rodovias Rurais. Departamento Nacional de Estradas de Rodagem, Diretoria de Desenvolvimento Tecnológico, Divisão de Capacitação Tecnológica. Rio de Janeiro, 1999.",
            "DNIT. Manual de projeto de interseções. IPR - Publicação 718. 2. ed. Rio de Janeiro, 2005. (IPR 718)",
            "DNIT. Manual de drenagem de rodovias. IPR - Publicação 724. Rio de Janeiro: DNIT, 2006."
        ]
    },
    {
        "id": "G10CARM2.01",
        "nome": "Concreto Armado II",
        "ch": "60h",
        "periodo": 8,
        "eixo": "Estruturas e geotecnia",
        "prerequisitos": ["G10CARM1.01"],
        "corequisitos": [],
        "ementa": "Vigas submetidas às esforços de torção; deformação de lajes e de vigas considerando a perda de rigidez devido à fissuração; lajes nervuradas; peças comprimidas; análise da flexão normal composta; análise da flexão oblíqua composta.",
        "bibliografiaBasica": [
            "ARAUJO, J. M. Curso de concreto armado. 4. ed. Rio Grande: Dunas, 2014, v. 3 e v. 4",
            "CLÍMACO, João Carlos Teatini de Souza. Estruturas de concreto armado: fundamentos de projeto, dimensionamento e verificação. 3 ed. Rio de Janeiro: Ed. UNB, 2016.",
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 6118: Projeto de estruturas de concreto — procedimento. Rio de Janeiro: ABNT, 2014."
        ],
        "bibliografiaComplementar": [
            "GRABASCK, J. R. et al. Concreto armado aplicado em pilares, vigas-parede e reservatórios. Porto Alegre: SAGAH, 2021.",
            "ARAUJO, J. M. Projeto estrutural de edifícios de concreto armado. 4. ed. Rio Grande: Dunas, 2014.",
            "PILOTTO NETO, E. Caderno de receitas de concreto armado: volume 2: pilares. Rio de Janeiro: GEN/LTC, 2018.",
            "FUSCO, P. B. Técnica de armar as estruturas de concreto. 2. ed. São Paulo: Pini, 2013.",
            "LEONHARDT, F. Construções de concreto – volumes 1 a 6. Rio de Janeiro: Interciência: 1978."
        ]
    },
    {
        "id": "G10EMAD0.01",
        "nome": "Estruturas de Madeira",
        "ch": "45h",
        "periodo": 8,
        "eixo": "Estruturas e geotecnia",
        "prerequisitos": ["G10RMAT2.01", "G10TEST2.01"],
        "corequisitos": [],
        "ementa": "Introdução sobre as estruturas de madeiras e suas aplicações; durabilidade da madeira e sua resistência ao fogo; produtos comerciais de madeira; classificação botânica e química da madeira; anatomia da madeira; propriedades físicas da madeira; propriedades mecânicas da madeira; considerações sobre ações e segurança; tração paralela às fibras e compressão normal às fibras; compressão paralela às fibras; cisalhamento e flexão simples; flexão composta; flexão oblíqua; ligações entre peças de madeira; projeto de estrutura de madeira para telhado.",
        "bibliografiaBasica": [
            "CALIL JR, C.; LAHR, F. A. R.; DIAS, A. A; MARTINS, G. C. A. Estruturas de madeira: projetos, dimensionamento e exemplos de cálculo. 1a ed. Rio de Janeiro: Elsevier, 2019.",
            "PFEIL, W.; PFEIL, M. Estruturas de madeira. 6. ed. Rio de Janeiro: LTC, 2003.",
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 7190: projeto de estruturas de madeira – Partes 1 a 7. Rio de Janeiro: ABNT, 2022."
        ],
        "bibliografiaComplementar": [
            "CALIL JR, C.; MOLINA J. C. Coberturas em estruturas de madeira: exemplos de cálculo. São Paulo: PINI, 2010.",
            "CALIL JR, C.; MOLINA, J. C.; SEGUNDINHO, P. G. A; KIMURA, E. F. A. Manual de projeto e construção de passarelas com estruturas de madeira. São Paulo: Pini, 2012.",
            "MOLITERNO, A. Caderno de projetos de telhados em estruturas de madeira. 4. ed. São Paulo: Edgard Blucher, 2010.",
            "CALIL JR, C.; LAHR, F. R.; DIAS, A. A. Dimensionamento de elementos estruturais de madeira. São Paulo: Manole, 2003.",
            "NENNEWITZ, I.; NUTSCH, W.; PESCHEL, P.; SEIFERT, G. Manual de tecnologia da madeira. 2. ed. São Paulo: Blucher, 2011."
        ]
    },
    {
        "id": "G10OTEN0.01",
        "nome": "Obras de Terra e Enrocamento",
        "ch": "60h",
        "periodo": 8,
        "eixo": "Estruturas e geotecnia",
        "prerequisitos": ["G10MSOL2.01"],
        "corequisitos": [],
        "ementa": "Estudos preliminares; fatores técnico-econômicos, geológicos e geotécnicos relevantes; investigações geológico-geotécnicas; áreas de empréstimo e materiais; tipos de seção; ensaios de laboratório e de campo; solos e enrocamentos compactados; barragens; fundações em solos e rochas; tratamento, estabilização e impermeabilização de fundações; percolação, drenagem interna e externa; mecanismos de ruptura e estabilidade de taludes; análise de tensão e deformação; cálculo de deslocamentos; instrumentação; estudos de casos históricos.",
        "bibliografiaBasica": [
            "COMITÊ BRASILEIRO DE BARRAGENS. Main brazilian dams: design, construction and performance. Rio de Janeiro: CBDB, 1998.",
            "CRUZ, P.T. 100 barragens brasileiras: casos históricos, materiais de construção e projeto. São Paulo: Oficina de Textos, 1996.",
            "SANDRONI, S. S.; GUIDICINI, G. Barragens de terra e enrocamento. São Paulo: Oficina de Textos, 2022."
        ],
        "bibliografiaComplementar": [
            "MASSAD, F. Obras de terra: curso básico de geotecnia. São Paulo: Oficina de Textos, 2003.",
            "MATOS, A.T. et al. Barragens de terra de pequeno porte. Viçosa: Ed. UFV, 2012. (Série Didática).",
            "MINISTÉRIO DA INTEGRAÇÃO NACIONAL. Manual de segurança e inspeção de barragens. Brasília, DF: MIN, 2002.",
            "SILVEIRA, J. F. A. Instrumentação e comportamento de fundações de barragens de concreto. São Paulo: Oficina de Textos, 2003.",
            "SILVEIRA, J. F. A. Instrumentação e segurança de barragens de terra e enrocamento. São Paulo: Oficina de Textos, 2006."
        ]
    },
    {
        "id": "G10HAPL0.01",
        "nome": "Hidrologia Aplicada",
        "ch": "60h",
        "periodo": 8,
        "eixo": "Hidrotecnia e Recursos Ambientais",
        "prerequisitos": ["G10EAEN0.01"],
        "corequisitos": [],
        "ementa": "Ciclo hidrológico; balanço hídrico e equação hidrológica; determinação de bacias hidrográficas, características físicas das bacias e elementos fisiográficos; características climáticas; instrumentos de medição; precipitação; evapotranspiração; infiltração; curva chave; elementos de estatística e probabilidades aplicados à hidrologia: modelos empíricos, teóricos e populacionais; estimação de parâmetros; escoamento superficial: vazões máximas e mínimas, método racional, hidrograma unitário, hidrograma unitário sintético e modelos chuva-vazão; reservatórios: elementos, amortecimento de cheias, dimensionamento e operação; água subterrânea: conceitos básicos sobre dinâmica, ocorrência, exploração e principais variáveis: tipos de aquíferos, lei de Darcy, condutividade hidráulica e permeabilidade, aquíferos confinados e não-confinados, transmissividade e armazenamento específico.",
        "bibliografiaBasica": [
            "GARCEZ, L. N., ALVAREZ G. A. Hidrologia. 2. ed. São Paulo: Edgard Blucher, 1988.",
            "GRIBBIN, J. E. Introdução à hidráulica, hidrologia e gestão de águas pluviais. São Paulo: Cencage Learning, c2009.",
            "TUCCI, Carlos E. M. (org.). Hidrologia: ciência e aplicação. 4. ed. Porto Alegre: UFRGS Ed., 2012."
        ],
        "bibliografiaComplementar": [
            "MOTA S. Preservação de recursos hídricos. Rio de Janeiro: ABES, 1988.",
            "PINTO N. L. S. [et. al]. Hidrologia básica. São Paulo: Blucher, c1976.",
            "REBOUÇAS A.C., BRAGA B., TUNDISI J.G. Águas doces no Brasil : capital ecológico, uso e conservação. 3. ed. , rev. e ampl. São Paulo: Escrituras, 2006.",
            "RIGHETTO, A. M. Hidrologia e recursos hídricos. São Paulo: EESC-USP, 1998.",
            "BARBOSA JUNIOR, A. R. Elementos de Hidrologia Aplicada. 1. ed. Editora Blucher. 2022."
        ]
    },
    {
        "id": "G10MPECC.01",
        "nome": "Metodologia da Pesquisa",
        "ch": "30h",
        "periodo": 8,
        "eixo": "Prática profissional e formação diversificada",
        "prerequisitos": ["G10MCIE0.01"],
        "corequisitos": [],
        "ementa": "Produção do trabalho técnico-científico, versando sobre tema da área da Engenharia Civil; aplicação dos conhecimentos sobre a produção da pesquisa científica: a questão, o problema, a escolha do método.",
        "bibliografiaBasica": [
            "GIL, A. C. Como elaborar projetos de pesquisa. 5. ed. São Paulo: Atlas, 2010.",
            "LAKATOS, E. M.; MARCONI, M. A. Fundamentos de metodologia científica. 7. ed. São Paulo: Atlas, 2010.",
            "LAKATOS, E. M.; MARCONI, M. A. Técnicas de pesquisa: planejamento e execução de pesquisas, amostragens e técnicas de pesquisas, elaboração, análise e interpretação de dados. 7. ed. São Paulo: Atlas, 2011."
        ],
        "bibliografiaComplementar": [
            "DEMO, P. Metodologia do conhecimento científico. São Paulo: Atlas, 2000.",
            "FRANÇA, J. L. Manual para normalização de publicações técnico- científicas. 8. ed. Belo Horizonte: Ed. UFMG, 2007.",
            "OLIVEIRA, S. L. Tratado de metodologia científica: projetos de pesquisas, TGI, PFC, monografias, dissertações e teses. 2. ed. São Paulo: Pioneira, c1999.",
            "SEVERINO, Antônio Joaquim. Metodologia do trabalho científico. 23. ed. rev. e atual. São Paulo: Cortez, 2007.",
            "TAKAHASHI, Ricardo H. C. A estrutura do conhecimento tecnológico do tipo científico. Belo Horizonte: Editora UFMG, 2009."
        ]
    },
    // Período 9
    {
        "id": "G10ISOC0.01",
        "nome": "Introdução a Sociologia",
        "ch": "30h",
        "periodo": 9,
        "eixo": "Humanidades e ciências sociais",
        "prerequisitos": [],
        "corequisitos": [],
        "ementa": "Estudo dos fundamentos da teoria social sobre o mundo do trabalho necessários à compreensão dos fenômenos concernentes às relações de trabalho no capitalismo do século XXI, sob a égide do neoliberalismo, abordando: as metamorfoses do mundo do trabalho e do processo de produção envolvendo a Ciência, a Técnica e a Tecnologia; as novas formas de acumulação do capital nas sociedades contemporâneas; as mutações sociotécnicas e os impactos da globalização nas relações de trabalho; a reestruturação produtiva; a flexibilização e precarização das relações de trabalho e o desemprego; a ideologia do empreendedorismo; a nova sociabilidade do trabalhador e as trajetórias laborais; a divisão do trabalho impactada pelas relações de classe, de gênero, étnico-raciais e geracionais.",
        "bibliografiaBasica": [
            "DAL-ROSSO, Sadi. Mais trabalho!: a intensificação do labor na sociedade contemporânea. São Paulo: Boitempo, 2008.",
            "HARVEY, David. O neoliberalismo: história e implicações. 5. ed. São Paulo: Loyola, 2014.",
            "SOUZA, Marina de Mello e. África e Brasil africano. São Paulo: Ática, 2015."
        ],
        "bibliografiaComplementar": [
            "ANTUNES, Ricardo L. C. Os sentidos do trabalho: ensaio sobre a afirmação e a negação do trabalho. 2. ed. rev. e amp. São Paulo: Boitempo editorial, 2009.",
            "ESCARLATE, Luiz Felipe (consult. técn.). Aprender a empreender. Rio de Janeiro: Fundação Roberto Marinho: Sebrae, 2010.",
            "SANTOS, Sales Augusto dos (org.). Ações afirmativas e combate ao racismo nas Américas. Brasília: SECAD, 2005.",
            "ROCHA, Claudio Jannotti da; Meireles, Edilton. A uberização e a jurisprudência trabalhista estrangeira. Belo Horizonte: Conhecimento Livraria e Distribuidora, 2021.",
            "BARROS, José d'Assunção. Igualdade e diferença: construções históricas e imaginárias em torno da desigualdade humana. Petrópolis: Editora Vozes, 2016."
        ]
    },
    {
        "id": "G10IDIR0.01",
        "nome": "Introdução ao Direito",
        "ch": "30h",
        "periodo": 9,
        "eixo": "Humanidades e ciências sociais",
        "prerequisitos": [],
        "corequisitos": [],
        "ementa": "Sistema constitucional brasileiro; Noções básicas de direito civil, empresarial, administrativo, trabalho e tributário; Regulamentação profissional.",
        "bibliografiaBasica": [
            "FERRAZ JUNIOR, T. S. Introdução ao estudo do direito: técnica, decisão, dominação. 9. ed. São Paulo: Atlas, 2018.",
            "FUHRER, M. C. A.; MILAIRE, E. Manual de direito público e privado. 21. ed. São Paulo: Revista dos Tribunais, 2015.",
            "MARTINS, Sérgio Pinto. Instituições de direito público e privado. 15. ed. São Paulo: Atlas, 2015."
        ],
        "bibliografiaComplementar": [
            "MACHADO, Hugo de Brito. Introdução ao estudo do direito. 3. ed. São Paulo: Atlas, 2012.",
            "MONTORO, Andre Franco. Introdução à ciência do direito. 33. ed. São Paulo: Revista dos Tribunais, 2016.",
            "NASCIMENTO, A. M.; PINHO, R. R. Instituições de direito público e privado. 24. ed. São Paulo: Atlas, 2004.",
            "REALE, Miguel. Lições preliminares de direito. 27. ed. São Paulo: Saraiva, 2002.",
            "VENOSA, S. S. Introdução ao estudo do direito. 7. ed. São Paulo: Atlas, 2022."
        ]
    },
    {
        "id": "G10PCOB0.01",
        "nome": "Planejamento e Controle de Obras",
        "ch": "60h",
        "periodo": 9,
        "eixo": "Construção Civil e materiais",
        "prerequisitos": ["G10MCON2.01", "G10TCON2.01", "G10EAEN0.01"],
        "corequisitos": [],
        "ementa": "Planejamento Físico-financeiro de obras; controle de execução e retroalimentação; curva de agregação de recursos; programação de obras repetitivas.",
        "bibliografiaBasica": [
            "MATTOS, Aldo Dórea. Planejamento e controle de obras. 2. ed. São Paulo: Oficina de Textos, 2019.",
            "MATTOS, Aldo Dórea. Como preparar orçamentos de obras. 3. ed. São Paulo: oficina de Textos, 2019.",
            "CAIXA (Caixa Econômica Federal). SINAPI: Sistema Nacional de Pesquisa de Custos e Índices da Construção Civil."
        ],
        "bibliografiaComplementar": [
            "CARVALHO, Michele Tereza; MARCHIORI, Fernanda. Conhecendo o orçamento de obras: como tornar seu orçamento mais real. 1. ed. São Paulo: GEN LTC, 2019.",
            "CARDOSO, Roberto Sales. Orçamento de obras em foco. 4. Ed. São Paulo: Editora Oficina de Textos, 2020.",
            "DIAS, Marco Aurélio P. Administração de materiais: uma abordagem logística. 5. ed. São Paulo: Atlas, 2010.",
            "JUNGLES, Antônio Edésio; SANTOS, Adriana de Paula Lacerda. Como gerenciar as compras de materiais na construção civil: diretrizes para implantação da compra pró- ativa. São Paulo: Pini, 2008.",
            "PEURIFOY, Robert L. Planejamento, equipamentos e métodos para a construção civil. 8. ed. Porto Alegre: AMGH, 2015."
        ]
    },
    {
        "id": "G10ESTR2.01",
        "nome": "Estradas II",
        "ch": "60h",
        "periodo": 9,
        "eixo": "Construção Civil e materiais",
        "prerequisitos": ["G10ESTR1.01"],
        "corequisitos": [],
        "ementa": "Introdução e conceituação de pavimentos flexíveis e rígidos; conceitos básicos de mecânica dos solos aplicados à geotecnia de estradas; construção de aterros rodoviários e controle de compactação; ruína estrutural: deformações permanentes e fadiga; ruína funcional: conforto e segurança de rolamento, e conceitos de serventia e irregularidade; ensaios para a determinação do comportamento dos materiais; ensaios de compressão simples e diametral, índice de suporte Califórnia (CBR), triaxial convencional e triaxial cíclico e compressão diametral cíclica; módulo de resiliência; classificações de solos; revestimentos asfálticos; materiais pétreos e ligantes, tratamentos superficiais e concretos asfálticos; método de dosagem de Marshall; estudo do carregamento veicular; tipos de veículos, tráfego, equivalência de cargas e definição do número de solicitações equivalentes; concepção e dimensionamento de pavimentos; método do DNER e Método da AASHTO; análise mecanística de pavimentos; avaliação funcional e estrutural de pavimentos em uso; principais defeitos nos pavimentos flexíveis; medidas de deflexões, Viga Benkelman, cálculo de reforço.",
        "bibliografiaBasica": [
            "BERNUCCI, L. B. et al. Pavimentação asfáltica: formação básica para engenheiros. Rio de Janeiro: PETROBRAS: ABEDA, 2006.",
            "SENÇO, W. Manual de técnicas de pavimentação. São Paulo: PINI, 2001, 2 v.",
            "BALBO, J. T. Pavimentação asfáltica: materiais, projeto e restauração. São Paulo: Oficina de Textos, 2007."
        ],
        "bibliografiaComplementar": [
            "DNER. Diretrizes básicas para a elaboração de estudos e projetos rodoviários. Brasilia: Ministério dos Transportes, 2006.",
            "MEDINA, J.; MOTTA, L. M. G. Mecânica dos pavimentos. Rio de Janeiro: COPPE: UFRJ, 2006.",
            "DNER. Avaliação estrutural de pavimentos flexíveis. PRO 011/79. Rio de Janeiro, RJ.",
            "DNER. Manual de pavimentação. IPR - Publicação 719. Rio de Janeiro, RJ. 2006.",
            "PIMENTA, Carlos R. T.; OLIVEIRA, Márcio P. Projeto geométrico de rodovias. 2. ed. São Carlos: Rima, 2004."
        ]
    },
    {
        "id": "G10IEPR0.01",
        "nome": "Instalações Elétricas Prediais",
        "ch": "60h",
        "periodo": 9,
        "eixo": "Construção Civil e materiais",
        "prerequisitos": ["G10FELE0.01", "G10FEEL0.01", "G10PARQ0.01"],
        "corequisitos": [],
        "ementa": "Conceitos básicos de eletricidade: tensão, corrente, resistência e impedância. Conceitos básicos de Energia, Potência e fator de potência; Noções sobre o sistema brasileiro de geração, transmissão e distribuição de energia elétrica. Noções de Redes elétricas monofásicas, bifásicas e trifásicas. Projeto de instalações elétricas prediais e suas etapas; Normas brasileiras; Diagramas, símbolos e convenções empregadas em projetos elétricos; Previsão de cargas; Luminotécnica, equipamentos e instalações para iluminação; Potência instalada, potência demandada e a entrada de serviço; fornecimento de energia elétrica a edificações residenciais e comerciais; Dimensionamento de condutores; Dimensionamento das proteções; Tubulações e seu dimensionamento; Sistemas de aterramento; Sinalização; Comando e controle da instalação (interruptores e seus tipos); Proteção termomagnética e diferencial-residual de circuitos; Tubulações para Dados, telefonia e sistemas de segurança.",
        "bibliografiaBasica": [
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 5410: Instalações elétricas de baixa tensão. Rio de Janeiro: ABNT, 2008.",
            "LIMA FILHO, Domingos Leite. Projetos de instalações elétricas prediais. 12. ed. São Paulo: Editora Érica, 2011.",
            "CAVALIN, Geraldo; CERVELIN, Severino. Instalações elétricas prediais. 23. ed. São Paulo: Érica, 2017."
        ],
        "bibliografiaComplementar": [
            "COTRIM, Ademaro A. M. B. Instalações elétricas. 5 ed. São Paulo: Editora Pearson, c2009.",
            "CREDER, Hélio. Instalações Elétricas. 17 ed. Rio de Janeiro: LTC, 2022.",
            "CRUZ, Eduardo Cesar Alves; ANICETO, Larry Aparecido. Instalações elétricas: fundamentos, práticas e projetos em instalações residenciais e comerciais. 3. ed. São Paulo: Érica, 2019.",
            "NISKIER, Julio. Manual de Instalações Elétricas. 2. ed. Rio de Janeiro: LTC, 2015.",
            "NERY, Norberto. Instalações elétricas: princípios e aplicações. 3. ed. São Paulo: Érica, 2018."
        ]
    },
    {
        "id": "G10FUND0.01",
        "nome": "Fundações",
        "ch": "60h",
        "periodo": 9,
        "eixo": "Estruturas e geotecnia",
        "prerequisitos": ["G10CARM1.01", "G10MSOL2.01"],
        "corequisitos": ["G10CARM2.01"],
        "ementa": "Sondagens; interpretação de investigações geotécnicas para projetos de fundações; tipos de fundações e normas técnicas aplicáveis; escolha do tipo de fundação: critérios técnicos e critérios econômicos; fundações superficiais e profundas: capacidade de suporte e previsão de recalques; Projeto Geotécnico, Geométrico e Estrutural de Fundações; Dimensionamento e Detalhamento de Fundações; provas de carga em fundações; estudo de casos.",
        "bibliografiaBasica": [
            "ALONSO, U. R. Exercícios de fundações. 2. ed. São Paulo: Edgard Blucher, 2010.",
            "ALONSO, U. R. Dimensionamento de fundações profundas. 2. ed. São Paulo: Edgard Blucher, 2012.",
            "VELLOSO, D. A.; LOPES, F. R. Fundações: volume completo. Rio de Janeiro: Oficina de Textos, 2011."
        ],
        "bibliografiaComplementar": [
            "BUDHU, M. Fundações e estruturas de contenção. Rio de Janeiro: LTC, 2013.",
            "CINTRA, J. C. A.; AOKI, N.; TSUHA, C. H.C.; GIACHETI, H. L. Ensaios estáticos e dinâmicos. São Paulo: Oficina de Textos, 2013.",
            "CINTRA, J. C. A.; AOKI, N. Fundações diretas: projeto geotécnico. São Paulo: Oficina de Textos, 2011.",
            "CINTRA, J. C. A.; AOKI, N. Fundações por estacas. São Paulo: Oficina de Textos, 2010.",
            "HACHICHI, W. et al. Fundações: teoria e prática. 2. ed. São Paulo: PINI, 1998."
        ]
    },
    {
        "id": "G10IHSA0.01",
        "nome": "Instalações Hidráulicas e Sanitárias",
        "ch": "60h",
        "periodo": 9,
        "eixo": "Hidrotecnia e Recursos Ambientais",
        "prerequisitos": ["G10HIDR0.01"],
        "corequisitos": [],
        "ementa": "Instalações prediais: água fria, água quente, combate a incêndio; esgoto sanitário; água pluvial; técnicas executivas; testes em manutenção preventiva e corretiva das instalações.",
        "bibliografiaBasica": [
            "BLUCHER, E.; BOTELHO, M. H. C.; RIBEIRO JÚNIOR, G. A. Instalações Hidráulicas Prediais. São Paulo: Edgard Blucher, 2007.",
            "CREDER, H. Instalações Hidráulicas e Sanitárias. 6. ed. Rio de Janeiro: LTC, 2006.",
            "MACINTYRE, J. A.; Manual de Instalações Hidráulicas e Sanitárias. Rio de Janeiro: LTC, 1990."
        ],
        "bibliografiaComplementar": [
            "AZEVEDO NETTO, J. M., ALVAREZ, G. A. Manual de hidráulica. 9. ed. São Paulo: Edgard Blucher, 2015.",
            "MACINTYRE, J.A.; Instalações Hidráulicas: prediais e Industriais. Rio de Janeiro: LTC, 2010.",
            "VIANNA, M. R. Instalações hidráulicas prediais. Belo Horizonte: Imprimatur, 2004.",
            "CARVALHO JUNIOR, R. Instalações hidráulicas e o projeto de Arquitetura. 2. ed. São Paulo. Editora BLucher, 2009.",
            "SILVESTRE, P. Hidráulica geral. Rio de Janeiro: LTC, 1979."
        ]
    },
    {
        "id": "G10PFCEC1.01",
        "nome": "Projeto Final de Curso I - Engenharia Civil",
        "ch": "15h",
        "periodo": 9,
        "eixo": "Prática profissional e formação diversificada",
        "prerequisitos": [],
        "corequisitos": [],
        "ementa": "Produção do trabalho técnico-científico, versando sobre tema da área da Engenharia Civil; aplicação dos conhecimentos sobre a produção da pesquisa científica: a questão, o problema, a escolha do método.",
        "bibliografiaBasica": [],
        "bibliografiaComplementar": []
    },
    // Período 10
    {
        "id": "G10PAOR0.01",
        "nome": "Psicologia Aplicada às Organizações",
        "ch": "30h",
        "periodo": 10,
        "eixo": "Humanidades e ciências sociais",
        "prerequisitos": [],
        "corequisitos": [],
        "ementa": "O trabalho, sua história, seus significados e função psicológica. O trabalho no contexto neoliberal e a precarização. Comportamento x subjetividade. Saúde mental e trabalho, adoecimento e assédio. Direitos humanos e trabalho. Diversidades, inclusão e equidade: relações étnico-raciais e cultura, sexualidade, relações de gênero, pessoas com deficiências. Discussões contemporâneas sobre o trabalho.",
        "bibliografiaBasica": [
            "ROBBINS, Stephen Paul. Comportamento organizacional. 11. ed. São Paulo: Pearson Prentice Hall, 2005.",
            "CARRARA, Sérgio (org.) et al. Gênero e diversidade na escola: formação de professoras/es em gênero, sexualidade, orientação sexual e relações éticno-raciais; caderno de atividades. Rio de Janeiro: CEPESC, 2009.",
            "MILKOVICH, George T.; BOUDREAU, John W. Administração de recursos humanos. São Paulo: Atlas, 2000."
        ],
        "bibliografiaComplementar": [
            "REIS, Evelyse Iwai dos. Corpo consciente e saúde do trabalhador. Curitiba: Contentus, 2020.",
            "ZANELLI, José Carlos; BORGES-ANDRADE, Jairo Eduardo; BASTOS, Antonio Virgílio Bittencourt (org.). Psicologia, organizações e trabalho no Brasil. 2. ed. Porto Alegre: Artmed, 2014.",
            "CARVALHO, Nordson Gonçalves de. Assédio Moral na Relação de Trabalho. São Paulo: Editora Rideel, 2009.",
            "AREOSA, Silvia Virginia Coutinho; MARCON, Silvana Regina Ampessan. Riscos e proteção psicossocial: trabalho, saúde mental e práticas sociais. Porto Alegre: Editora EdiPUC-RS, 2021.",
            "MUNANGA, Kabengele. Negritude: usos e sentidos. 4. ed. Belo Horizonte: Autêntica, 2019."
        ]
    },
    {
        "id": "G10FERR0.01",
        "nome": "Ferrovias",
        "ch": "30h",
        "periodo": 10,
        "eixo": "Construção Civil e materiais",
        "prerequisitos": ["G10MSOL2.01", "G10ESTR2.01"],
        "corequisitos": [],
        "ementa": "Generalidades; transporte ferroviário; infraestrutura ferroviária e superestrutura ferroviária; material rodante; material de tração; movimento e resistência dos trens; operação ferroviária; segurança ferroviária e tráfego ferroviário; conservação ferroviária.",
        "bibliografiaBasica": [
            "NABAIS, Rui José da Silva (org.). Manual básico de engenharia ferroviária. São Paulo, SP: Oficina de Textos, c2014.",
            "STEFFLER, F. Via permanente aplicada: guia teórico e prático. Rio de Janeiro: LTC, 2013.",
            "SETTI, J. B. Ferrovias no Brasil - um século e meio de evolução. Rio de Janeiro: Memória do Trem, 2008."
        ],
        "bibliografiaComplementar": [
            "SETTI, J. R. A.; Widmer, J. A. Tecnologia dos Transportes, EESC-USP, São Carlos, 2013.",
            "BRINA, H. L. Estradas de ferro. Rio de Janeiro: LTC, 1982. v. 1.",
            "BRINA, H. L. Estradas de ferro. Rio de Janeiro: LTC, 1983. v. 2.",
            "PINHEIRO, A. C.; RIBEIRO, L. C. Regulamentação das ferrovias. Rio de Janeiro: FGV, 2017.",
            "SANTOS. S. Transporte ferroviário: história e técnicas. São Paulo: Cengage Learning, 2012."
        ]
    },
    {
        "id": "G10PVIA0.01",
        "nome": "Pontes e Viadutos",
        "ch": "60h",
        "periodo": 10,
        "eixo": "Estruturas e geotecnia",
        "prerequisitos": ["G10CARM2.01", "G10EACO1.01", "G10FUND0.01"],
        "corequisitos": [],
        "ementa": "Introdução e apresentação de modelos estruturais de pontes e viadutos; Ações e segurança; Definição dos carregamentos atuantes; Critérios de cálculo; Carregamento das superfícies e linhas de influência; Análise e dimensionamento de lajes; Análise e dimensionamento de longarinas; Distribuição das cargas horizontais; Aparelhos de apoio; Considerações especiais sobre encontros, pilares e fundações.",
        "bibliografiaBasica": [
            "CAVALCANTE, G. H. F. Pontes em concreto armado: análise e dimensionamento. São Paulo: Blucher, 2019.",
            "MENDES, L. C. Pontes. 2. ed. Niterói: Eduff, 2017.",
            "EL DEBS, M. K. Pontes de concreto: com ênfase na aplicação de elementos pré-moldados. São Paulo: Oficina de Textos, 2021."
        ],
        "bibliografiaComplementar": [
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 7187: Projeto de pontes, viadutos e passarelas de concreto. Rio de Janeiro: ABNT, 2021.",
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 16694: projeto de pontes rodoviárias de aço e mistas de aço e concreto. Rio de Janeiro: ABNT, 2020.",
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 7188: Carga móvel rodoviária e de pedestres em pontes, viadutos, passarelas e outras estruturas. Rio de Janeiro: ABNT, 2013.",
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 8800: Projeto de estruturas de aço e de estruturas mistas de aço e concreto de edifícios. Rio de Janeiro: ABNT, 2008.",
            "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. NBR 6118: Projeto de estruturas de concreto — procedimento. Rio de Janeiro: ABNT, 2014."
        ]
    },
    {
        "id": "G10SANE0.01",
        "nome": "Saneamento",
        "ch": "90h",
        "periodo": 10,
        "eixo": "Hidrotecnia e Recursos Ambientais",
        "prerequisitos": ["G10TOPO2.01", "G10HIDR0.01", "G10HAPL0.01"],
        "corequisitos": [],
        "ementa": "Elementos de um sistema de abastecimento: concepção; parâmetros básicos de projeto: qualidade da água, estimativas de consumo e métodos de projeção populacional; captação de águas superficiais: medidas de controle de mananciais, qualidade da água, seleção do manancial e estudos hidrológicos; instalações de captação em represas, rios e lagos; captação de água subterrânea: parâmetros de avaliação de produtividade de poços e instalações de captação; adutoras: dimensionamento hidráulico, traçado, materiais, acessórios, dispositivos de proteção, limpeza e reabilitação; obras especiais: travessias em córregos, rios, estradas e ferrovias; estações elevatórias: tipos de instalações, tubulações e acessórios, dimensionamento, projeto e operação, seleção de conjuntos motor-bomba; sistemas de controle de operação de bombas e estações elevatórias; redução do custo de energia em estações elevatórias; reservatórios de distribuição de água: localização dimensionamento e volume útil; redes de distribuição de água: tipos, dimensionamento e projeto; Os elementos de um sistema tratamento de efluentes: ligações domiciliares; os tipos de sistemas de esgotamento sanitário; caracterização quantitativa e qualitativa dos esgotos e concepção de sistemas de esgotamento; hidráulica aplicada a sistemas de esgotamento sanitário; projeto de redes coletoras, interceptores, emissários, sifões invertidos, elevatórias de esgoto sanitário, travessias e dissipadores de energia; corrosão e odor em sistemas de coleta e transporte de esgoto; sistemas clássicos e soluções de drenagem com foco ambiental; planejamento, concepção e projeto de sistemas de drenagem; hidrologia aplicada a sistemas de drenagem pluvial: análise das precipitações: curvas intensidade-duração-frequência e chuvas de projeto; metodologias para cálculo do escoamento superficial e propagação de cheias; hidráulica aplicada a sistemas de drenagem: dimensionamento de obras de microdrenagem, macrodrenagem e estruturas especiais.",
        "bibliografiaBasica": [
            "TSUTIYA M.T.; ALEM SOBRINHO P. Coleta e transporte de esgotos sanitário. São Paulo: Escola Politécnica da USP, 3. ed. 2011.",
            "HELLER, L.; PÁDUA, V. L. (Orgs.). Abastecimento de água para consumo humano. Belo Horizonte: UFMG, 2016. Vol: 1 e 2.",
            "TUCCI, C. E. M.; PORTO, R. L.; Barros, M. T. (org.). Drenagem urbana. Porto Alegre: Associação Brasileira de Recursos Hídricos, 1995."
        ],
        "bibliografiaComplementar": [
            "VIANNA, M. R. Projeto de redes coletoras de esgoto sanitário. 1. ed. Belo Horizonte: Bloom Consultoria, 2021.",
            "NUVOLARE, A. (Org). Esgoto Sanitário: coleta, transporte, tratamento e reuso agrícola. 2. ed., São Paulo: Editora Blucher, 2011.",
            "VON SPERLING, M. Introdução à qualidade das águas e ao tratamento de esgotos – 3. ed. Belo Horizonte: DESA/UFMG, 2005.",
            "TSUTIYA, M. T. Abastecimento de água. 3. ed. ABES: São Paulo, 2006.",
            "BRASIL. Fundação Nacional de Saúde. Manual de Saneamento. 4. ed. Brasília: Funasa, 2015."
        ]
    },
    {
        "id": "G10PFCEC2.01",
        "nome": "Projeto Final de Curso II - Engenharia Civil",
        "ch": "15h",
        "periodo": 10,
        "eixo": "Prática profissional e formação diversificada",
        "prerequisitos": ["G10PFCEC1.01"],
        "corequisitos": [],
        "ementa": "Continuação e conclusão do trabalho de conclusão de curso, incluindo desenvolvimento metodológico, análise de resultados, redação final do documento e apresentação/defesa para banca examinadora.",
        "bibliografiaBasica": [],
        "bibliografiaComplementar": []
    },
    {
        "id": "G10ECOEC0.01",
        "nome": "Estágio Curricular Obrigatório - Engenharia Civil",
        "ch": "207h",
        "periodo": 10,
        "eixo": "Prática profissional e formação diversificada",
        "prerequisitos": [],
        "corequisitos": [],
        "ementa": "Realização de atividades práticas supervisionadas em ambiente profissional (empresas, órgãos públicos, laboratórios, etc.) relacionadas à Engenharia Civil, visando à aplicação dos conhecimentos adquiridos e ao desenvolvimento de competências profissionais. Elaboração de relatórios e documentação comprobatória.",
        "bibliografiaBasica": [],
        "bibliografiaComplementar": []
    },
    {
        "id": "G10AESEC0.01",
        "nome": "Atividade de Estágio Supervisionado - Engenharia Civil",
        "ch": "15h",
        "periodo": 10,
        "eixo": "Prática profissional e formação diversificada",
        "prerequisitos": [],
        "corequisitos": [],
        "ementa": "Orientação e acompanhamento das atividades de estágio curricular obrigatório, incluindo a elaboração e avaliação dos relatórios de estágio, bem como a formalização e documentação do processo junto à instituição de ensino.",
        "bibliografiaBasica": [],
        "bibliografiaComplementar": []
    }
];
// ADICIONE ESTA LINHA ABAIXO
startApp(coursesData);