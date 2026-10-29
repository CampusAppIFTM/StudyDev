// StudyDevData - React Native (gerado automaticamente)
// Fonte: assets/data.js + aboutDetails gerados + 5 novos roadmaps
// NAO MODIFICAR LOGIN: este arquivo contem apenas dados.

export const languages = [
  {
    id: "c",
    name: "C",
    desc: "A base de sistemas operacionais e softwares que precisam de performance no limite.",
    docs: "https://en.cppreference.com/w/c",
    site: "https://www.iso.org/standard/74528.html",
    ecosystem: ["GCC","Clang","Make","CMake"],
    paradigms: ["Imperativa","Estruturada"],
    typing: "Estática",
    year: 1972,
    creators: ["Dennis Ritchie"],
    runtime: "Nativo",
    use_cases: ["Sistemas Operacionais","Sistemas Embarcados","Drivers"],
    hello_world: {
      language: "c",
      code: "#include <stdio.h>\nint main() {\n  printf(\"Hello, World!\n\");\n  return 0;\n}"
    }
  },
  {
    id: "cpp",
    name: "C++",
    desc: "Potência e organização pra quem quer performance sem bagunça.",
    docs: "https://en.cppreference.com/w/",
    site: "https://isocpp.org/",
    ecosystem: ["Qt","Boost","Unreal Engine"],
    paradigms: ["Multiparadigma","OO","Genérica"],
    typing: "Estática",
    year: 1985,
    creators: ["Bjarne Stroustrup"],
    runtime: "Nativo",
    use_cases: ["Sistemas","Jogos","Alta performance"],
    hello_world: {
      language: "cpp",
      code: "#include <iostream>\nint main(){ std::cout << \"Hello, World!\"; }"
    }
  },
  {
    id: "csharp",
    name: "C#",
    desc: "A linguagem do .NET. Vai de backend e desktop até jogos com Unity.",
    docs: "https://learn.microsoft.com/dotnet/csharp/",
    site: "https://dotnet.microsoft.com/",
    ecosystem: ["ASP.NET Core","Entity Framework","Unity"],
    paradigms: ["OO","Funcional (LINQ)"],
    typing: "Estática",
    year: 2000,
    creators: ["Microsoft"],
    runtime: ".NET CLR",
    use_cases: ["Backend","Desktop","Jogos"],
    hello_world: {
      language: "csharp",
      code: "using System;\nclass Program {\n  static void Main() {\n    Console.WriteLine(\"Hello, World!\");\n  }\n}"
    }
  },
  {
    id: "java",
    name: "Java",
    desc: "Clássica de backend e Android. Roda em todo lugar com a JVM.",
    docs: "https://docs.oracle.com/javase/specs/",
    site: "https://www.java.com/",
    ecosystem: ["Spring","Quarkus","Micronaut"],
    paradigms: ["OO","Imperativa"],
    typing: "Estática",
    year: 1995,
    creators: ["James Gosling"],
    runtime: "JVM",
    use_cases: ["Backend","Android","Sistemas corporativos"],
    hello_world: {
      language: "java",
      code: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, World!\");\n  }\n}"
    }
  },
  {
    id: "scala",
    name: "Scala",
    desc: "Funcional e orientada a objetos na JVM. Muito usada com Spark e dados em larga escala.",
    docs: "https://docs.scala-lang.org/",
    site: "https://www.scala-lang.org/",
    ecosystem: ["Akka","Play Framework","Apache Spark"],
    paradigms: ["Multiparadigma","OO","Funcional"],
    typing: "Estática",
    year: 2003,
    creators: ["Martin Odersky"],
    runtime: "JVM",
    use_cases: ["Processamento de Big Data","Sistemas Distribuídos","Backend"],
    hello_world: {
      language: "scala",
      code: "object Main extends App {\n  println(\"Hello, World!\")\n}"
    }
  },
  {
    id: "kotlin",
    name: "Kotlin",
    desc: "Moderna, segura e 100% com Java. A queridinha do Android.",
    docs: "https://kotlinlang.org/docs/reference/",
    site: "https://kotlinlang.org/",
    ecosystem: ["Spring Boot","Android SDK","Ktor"],
    paradigms: ["Multiparadigma","OO","Funcional"],
    typing: "Estática",
    year: 2011,
    creators: ["JetBrains"],
    runtime: "JVM",
    use_cases: ["Desenvolvimento Android","Backend","Microsserviços"],
    hello_world: {
      language: "kotlin",
      code: "fun main() {\n  println(\"Hello, World!\")\n}"
    }
  },
  {
    id: "php",
    name: "PHP",
    desc: "Feita pra web. Está por trás de WordPress, Laravel e boa parte da internet.",
    docs: "https://www.php.net/docs.php",
    site: "https://www.php.net/",
    ecosystem: ["Laravel","Symfony","WordPress"],
    paradigms: ["Imperativa","OO"],
    typing: "Dinâmica",
    year: 1994,
    creators: ["Rasmus Lerdorf"],
    runtime: "Zend Engine",
    use_cases: ["Desenvolvimento Web","Sistemas de Gerenciamento de Conteúdo"],
    hello_world: {
      language: "php",
      code: "<?php\n  echo \"Hello, World!\";\n?>"
    }
  },
  {
    id: "dart",
    name: "Dart",
    desc: "Criada pro Flutter. Ótima pra interfaces rápidas e bonitas.",
    docs: "https://dart.dev/guides",
    site: "https://dart.dev/",
    ecosystem: ["Flutter","Dart Frog"],
    paradigms: ["OO","Funcional"],
    typing: "Estática",
    year: 2011,
    creators: ["Google"],
    runtime: "Dart VM",
    use_cases: ["Desenvolvimento Mobile (Flutter)","Web","Backend"],
    hello_world: {
      language: "dart",
      code: "void main() {\n  print(\"Hello, World!\");\n}"
    }
  },
  {
    id: "python",
    name: "Python",
    desc: "Simples de ler e poderosa na prática. Vai de automação e web até ciência de dados.",
    docs: "https://docs.python.org/3/",
    site: "https://www.python.org/",
    ecosystem: ["Django","Flask","FastAPI","Pandas","NumPy"],
    paradigms: ["Multiparadigma","Imperativa","OO","Funcional"],
    typing: "Dinâmica",
    year: 1991,
    creators: ["Guido van Rossum"],
    runtime: "CPython",
    use_cases: ["Backend","Data Science","Automação","CLI","Scripting"],
    hello_world: {
      language: "python",
      code: "print(\"Hello, World!\")"
    }
  },
  {
    id: "ruby",
    name: "Ruby",
    desc: "Elegante e produtiva. Famosa pelo Rails pra tirar ideias do papel rápido.",
    docs: "https://www.ruby-lang.org/en/documentation/",
    site: "https://www.ruby-lang.org/pt/",
    ecosystem: ["Ruby on Rails","Sinatra","Jekyll"],
    paradigms: ["OO","Funcional","Imperativa"],
    typing: "Dinâmica",
    year: 1995,
    creators: ["Yukihiro Matsumoto"],
    runtime: "MRI (Matz's Ruby Interpreter)",
    use_cases: ["Desenvolvimento Web","Scripting","Automação"],
    hello_world: {
      language: "ruby",
      code: "puts \"Hello, World!\""
    }
  },
  {
    id: "perl",
    name: "Perl",
    desc: "Referência em processamento de texto. Muito usada em scripts e administração de sistemas.",
    docs: "https://perldoc.perl.org/",
    site: "https://www.perl.org/",
    ecosystem: ["CPAN","Mojolicious","Catalyst"],
    paradigms: ["Multiparadigma","Imperativa","Funcional"],
    typing: "Dinâmica",
    year: 1987,
    creators: ["Larry Wall"],
    runtime: "Perl interpreter",
    use_cases: ["Processamento de Texto","Administração de Sistemas","Desenvolvimento Web"],
    hello_world: {
      language: "perl",
      code: "print \"Hello, World!\n\";"
    }
  },
  {
    id: "javascript",
    name: "JavaScript",
    desc: "A linguagem da web. Está no frontend, no backend e até no mobile.",
    docs: "https://developer.mozilla.org/docs/Web/JavaScript",
    site: "https://www.javascript.com/",
    ecosystem: ["React","Vue","Angular","Node.js","Express"],
    paradigms: ["Multiparadigma","Imperativa","OO","Funcional"],
    typing: "Dinâmica",
    year: 1995,
    creators: ["Brendan Eich"],
    runtime: "V8/SpiderMonkey/JavaScriptCore",
    use_cases: ["Frontend","Backend","Mobile (RN)","Desktop (Electron)"],
    hello_world: {
      language: "javascript",
      code: "console.log(\"Hello, World!\");"
    }
  },
  {
    id: "html",
    name: "HTML",
    desc: "A estrutura de toda página web. Sem HTML, não tem site.",
    docs: "https://developer.mozilla.org/docs/Web/HTML",
    site: "https://html.spec.whatwg.org/",
    ecosystem: ["Semântica","Acessibilidade","SEO"],
    paradigms: ["Markup"],
    typing: "N/A",
    year: 1993,
    creators: ["WHATWG"],
    runtime: "Browser",
    use_cases: ["Estrutura de páginas","Conteúdo"],
    hello_world: {
      language: "html",
      code: "<!doctype html>\n<html>\n<head><meta charset=\"utf-8\"><title>Hello</title></head>\n<body>Hello, World!</body>\n</html>"
    }
  },
  {
    id: "css",
    name: "CSS",
    desc: "O estilo da web. Cores, layouts e animações que deixam a página com a sua cara.",
    docs: "https://developer.mozilla.org/docs/Web/CSS",
    site: "https://www.w3.org/Style/CSS/",
    ecosystem: ["Flexbox","Grid","Animations"],
    paradigms: ["Declarativa"],
    typing: "N/A",
    year: 1996,
    creators: ["W3C"],
    runtime: "Browser",
    use_cases: ["Estilização","Layout","Animações"],
    hello_world: {
      language: "css",
      code: "body { color: black; }"
    }
  },
  {
    id: "typescript",
    name: "TypeScript",
    desc: "JavaScript com tipos. Mais segurança pra projetos que crescem.",
    docs: "https://www.typescriptlang.org/docs/",
    site: "https://www.typescriptlang.org/",
    ecosystem: ["ts-node","NestJS","Vite","Next.js"],
    paradigms: ["Multiparadigma","Imperativa","OO","Funcional"],
    typing: "Estática (sobre JS)",
    year: 2012,
    creators: ["Microsoft"],
    runtime: "Transpila para JS (Node/Browser)",
    use_cases: ["Frontend","Backend"],
    hello_world: {
      language: "typescript",
      code: "const msg: string = \"Hello, World!\";\nconsole.log(msg);"
    }
  },
  {
    id: "go",
    name: "Go",
    desc: "Simples, rápida e feita pra concorrência. Ideal pra serviços e ferramentas.",
    docs: "https://go.dev/doc/",
    site: "https://go.dev/",
    ecosystem: ["Gin","Echo","Fiber"],
    paradigms: ["Imperativa","Concorrente"],
    typing: "Estática",
    year: 2009,
    creators: ["Robert Griesemer","Rob Pike","Ken Thompson"],
    runtime: "Go runtime",
    use_cases: ["Serviços","CLIs","DevOps"],
    hello_world: {
      language: "go",
      code: "package main\nimport \"fmt\"\nfunc main(){ fmt.Println(\"Hello, World!\") }"
    }
  },
  {
    id: "rust",
    name: "Rust",
    desc: "Performance de C com segurança de memória. Sem sustos com ponteiros.",
    docs: "https://doc.rust-lang.org/book/",
    site: "https://www.rust-lang.org/",
    ecosystem: ["Tokio","Axum","Rocket"],
    paradigms: ["Multiparadigma","Funcional","Sistemas"],
    typing: "Estática (com ownership)",
    year: 2010,
    creators: ["Graydon Hoare"],
    runtime: "Nativo (cargo toolchain)",
    use_cases: ["Sistemas","Serviços","CLI"],
    hello_world: {
      language: "rust",
      code: "fn main(){\n  println!(\"Hello, World!\");\n}"
    }
  },
  {
    id: "swift",
    name: "Swift",
    desc: "A linguagem da Apple pra apps de iPhone e Mac. Moderna e segura.",
    docs: "https://docs.swift.org/swift-book/",
    site: "https://swift.org/",
    paradigms: ["Multiparadigma","OO","Funcional"],
    typing: "Estática",
    year: 2014,
    creators: ["Apple"],
    runtime: "Swift runtime",
    use_cases: ["iOS","macOS","Server-side (Vapor)"],
    hello_world: {
      language: "swift",
      code: "print(\"Hello, World!\")"
    }
  },
  {
    id: "lua",
    name: "Lua",
    desc: "Leve e muito rápida. Muito usada embarcada em jogos e aplicações.",
    docs: "https://www.lua.org/docs.html",
    site: "https://www.lua.org/",
    ecosystem: ["LuaRocks","Love2D","OpenResty"],
    paradigms: ["Multiparadigma","Imperativa","Funcional"],
    typing: "Dinâmica",
    year: 1993,
    creators: ["Roberto Ierusalimschy","Luiz Henrique de Figueiredo","Waldemar Celes"],
    runtime: "Lua interpreter",
    use_cases: [
      "Desenvolvimento de Jogos",
      "Sistemas Embarcados",
      "Extensão de Aplicações",
      "Web Servers (OpenResty)"
    ],
    hello_world: {
      language: "lua",
      code: "print(\"Hello, World!\")"
    }
  },
  {
    id: "powershell",
    name: "PowerShell",
    desc: "O shell da Microsoft pra automatizar Windows e Azure.",
    docs: "https://docs.microsoft.com/powershell/",
    site: "https://docs.microsoft.com/powershell/",
    ecosystem: ["PowerShell Gallery","Azure CLI"],
    paradigms: ["Imperativa","Orientada a Objetos","Scripting"],
    typing: "Dinâmica",
    year: 2006,
    creators: ["Microsoft"],
    runtime: ".NET CLR",
    use_cases: [
      "Automação de Tarefas",
      "Administração de Sistemas Windows",
      "Gerenciamento de Nuvem (Azure)"
    ],
    hello_world: {
      language: "powershell",
      code: "Write-Host \"Hello, World!\""
    }
  },
  {
    id: "bash",
    name: "Bash",
    desc: "O shell clássico do Linux e macOS. Essencial pra automatizar tarefas do dia a dia.",
    docs: "https://www.gnu.org/software/bash/manual/",
    site: "https://www.gnu.org/software/bash/",
    ecosystem: ["GNU Core Utilities","AWK","sed"],
    paradigms: ["Imperativa","Scripting"],
    typing: "Dinâmica",
    year: 1989,
    creators: ["Brian Fox"],
    runtime: "Bash interpreter",
    use_cases: [
      "Automação de Tarefas",
      "Administração de Sistemas",
      "Scripting de Shell",
      "Ferramentas de Linha de Comando"
    ],
    hello_world: {
      language: "bash",
      code: "#!/bin/bash\necho \"Hello, World!\""
    }
  },
  {
    id: "cobol",
    name: "COBOL",
    desc: "Criada pra negócios, ainda roda sistemas de bancos e governo no mundo todo.",
    docs: "https://open-cobol.sourceforge.net/",
    site: "https://www.microfocus.com/en-us/solutions/mainframe-modernization/cobol",
    ecosystem: ["Micro Focus Visual COBOL","GnuCOBOL"],
    paradigms: ["Imperativa","Procedural","Orientada a Dados"],
    typing: "Estática",
    year: 1960,
    creators: ["Grace Hopper","CODASYL"],
    runtime: "Compilado",
    use_cases: [
      "Sistemas Financeiros",
      "Processamento de Dados Comerciais",
      "Sistemas Governamentais"
    ],
    hello_world: {
      language: "cobol",
      code: "IDENTIFICATION DIVISION.\nPROGRAM-ID. HELLO-WORLD.\nPROCEDURE DIVISION.\n    DISPLAY \"Hello, World!\".\n    STOP RUN."
    }
  },
  {
    id: "pascal",
    name: "Pascal",
    desc: "Estruturada e ótima pra aprender. Clássica no ensino de lógica de programação.",
    docs: "https://wiki.freepascal.org/Documentation",
    site: "https://www.pascal-lang.org/",
    ecosystem: ["Free Pascal","Delphi"],
    paradigms: ["Imperativa","Estruturada"],
    typing: "Estática",
    year: 1971,
    creators: ["Niklaus Wirth"],
    runtime: "Compilado",
    use_cases: [
      "Ensino de Programação",
      "Desenvolvimento de Aplicações Desktop",
      "Sistemas Embarcados"
    ],
    hello_world: {
      language: "pascal",
      code: "program HelloWorld;\nbegin\n  writeln('Hello, World!');\nend."
    }
  },
  {
    id: "sql",
    name: "SQL",
    desc: "A linguagem padrão pra consultar e organizar bancos de dados relacionais.",
    docs: "https://www.postgresql.org/docs/current/sql.html",
    site: "https://sql.org/",
    ecosystem: ["PostgreSQL","MySQL","SQL Server","SQLite","Oracle Database"],
    paradigms: ["Declarativa"],
    typing: "Forte",
    year: 1974,
    creators: ["Donald D. Chamberlin","Raymond F. Boyce"],
    runtime: "Motor de banco de dados",
    use_cases: [
      "Consultas e manipulação de dados em sistemas financeiros",
      "Gerenciamento de inventário e vendas em e-commerce",
      "Armazenamento de dados de usuários em aplicações web",
      "Análise de dados para business intelligence"
    ],
    hello_world: {
      language: "sql",
      code: "SELECT \"Hello, World!\" AS message;"
    }
  }
];

export const aboutDetails = {
  javascript: {
    strengths: [
      "Disponível em todos os navegadores",
      "Ecossistema gigante de libs e ferramentas",
      "Modelo assíncrono poderoso (Promises/async)"
    ],
    weaknesses: [
      "Coerção e escopo podem gerar bugs",
      "Ferramental complexo em projetos grandes",
      "Sem tipos por padrão (usar TS ou JSDoc)"
    ],
    when_to_use: [
      "Frontend moderno",
      "Prototipagem rápida e apps fullstack com Node",
      "Apps desktop com Electron"
    ],
    best_practices: [
      "Usar === ao invés de ==",
      "Preferir const/let em vez de var",
      "Lint com ESLint e formatação com Prettier",
      "Documentar com JSDoc ou adotar TypeScript"
    ],
    pitfalls: [
      "Hoisting e escopo de var",
      "this confuso em funções não-arrow",
      "Callback hell (use async/await)",
      "Precisão de float (ex.: 1.1 + 0.2)"
    ],
    stack: ["Node.js","npm","Vite","React/Vue","ESLint","Prettier","Jest"]
  },
  sql: {
    strengths: [
      "Padrão universal para bancos de dados relacionais",
      "Alta capacidade de manipulação e consulta de dados",
      "Transações ACID para integridade dos dados",
      "Ampla adoção e maturidade no mercado"
    ],
    weaknesses: [
      "Não é ideal para dados não estruturados (NoSQL)",
      "Escalabilidade horizontal pode ser complexa",
      "Curva de aprendizado para otimização de queries complexas"
    ],
    when_to_use: [
      "Sistemas que exigem alta integridade e consistência de dados",
      "Aplicações com modelos de dados bem definidos",
      "Análise de dados estruturados e relatórios"
    ],
    best_practices: [
      "Normalização de dados para evitar redundância",
      "Uso de índices para otimizar consultas",
      "Transações explícitas para garantir atomicidade",
      "Evitar SELECT *; listar colunas específicas"
    ],
    pitfalls: [
      "Consultas mal otimizadas podem causar gargalos de performance",
      "Injeção de SQL (SQL Injection) sem validação adequada",
      "Bloqueios de tabela em transações longas",
      "Excesso de JOINs pode degradar performance"
    ],
    ecosystem: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "SQLite",
      "Oracle Database",
      "DBeaver",
      "SQL Developer"
    ],
    paradigms: ["Declarativa"],
    typing: "Forte",
    year: 1974,
    creators: ["Donald D. Chamberlin","Raymond F. Boyce"],
    runtime: "Motor de banco de dados",
    use_cases: [
      "Consultas e manipulação de dados em sistemas financeiros",
      "Gerenciamento de inventário e vendas em e-commerce",
      "Armazenamento de dados de usuários em aplicações web",
      "Análise de dados para business intelligence"
    ],
    hello_world: {
      language: "sql",
      code: "SELECT \"Hello, World!\" AS message;"
    }
  },
  typescript: {
    strengths: [
      "Segurança de tipos sobre JS",
      "Refatorações seguras e melhor DX",
      "Integra-se ao ecossistema JS sem esforço"
    ],
    weaknesses: [
      "Generics avançados podem complicar",
      "Tipos não cobrem runtime automaticamente",
      "Configurações de build podem ser extensas"
    ],
    when_to_use: [
      "Projetos médios/grandes em JS",
      "APIs robustas com NestJS",
      "Frontend com React/Next"
    ],
    best_practices: [
      "Ativar strict mode",
      "Tipos explícitos em APIs públicas",
      "Evitar any; usar unknown quando necessário"
    ],
    pitfalls: [
      "Tipos ampliados indevidamente",
      "Divergência entre tipos e runtime",
      "Abstrações excessivas de tipos"
    ],
    stack: ["tsc","Vite","Next.js","NestJS","ESLint","Prettier"]
  },
  python: {
    strengths: [
      "Sintaxe clara e produtividade alta",
      "Bibliotecas vastas para data science e web",
      "Comunidade enorme e material de aprendizado"
    ],
    weaknesses: [
      "Performance inferior ao nativo",
      "GIL limita paralelismo com threads",
      "Gestão de ambientes pode confundir iniciantes"
    ],
    when_to_use: [
      "Scripts e automação rápida",
      "Backends com FastAPI/Django",
      "Ciência de dados e notebooks (Jupyter)"
    ],
    best_practices: [
      "Usar venv e requirements/poetry",
      "Type hints + mypy em projetos médios/grandes",
      "Formatar com black e lint com flake9"
    ],
    pitfalls: [
      "Misturar pip/conda/poetry quebra ambientes",
      "Mutabilidade compartilhada de listas/dicts",
      "IO bloqueante sem asyncio quando apropriado"
    ],
    stack: ["venv","pip/poetry","FastAPI","Django","pytest","black","flake9"]
  },
  java: {
    strengths: [
      "Alta confiabilidade e ecosistema corporativo sólido",
      "JVM com excelente performance (JIT, GC)",
      "Frameworks maduros (Spring, Quarkus, Micronaut)"
    ],
    weaknesses: [
      "Verboso comparado a linguagens modernas",
      "Configuração enterprise pode ser complexa",
      "Consumo de memória em apps grandes"
    ],
    when_to_use: [
      "Sistemas corporativos de grande porte",
      "APIs backend escaláveis e resilientes",
      "Android (com Kotlin preferível)"
    ],
    best_practices: [
      "Imutabilidade quando possível",
      "Streams e APIs modernas (Java 9+)",
      "Testes com JUnit e integração com Testcontainers"
    ],
    pitfalls: [
      "NullPointer sem uso de Optional/validação",
      "Deadlocks com paralelismo mal gerenciado",
      "Configurações Spring sem profiles claros"
    ],
    stack: ["Maven","Gradle","Spring Boot","Hibernate","JUnit","Testcontainers"]
  },
  cpp: {
    strengths: [
      "Máxima performance e controle fino",
      "Biblioteca padrão rica (STL)",
      "Suporte amplo multi-plataforma"
    ],
    weaknesses: [
      "Complexidade alta e footguns",
      "Compilação/linkagem complexas",
      "Gerência manual de memória sem smart pointers"
    ],
    when_to_use: [
      "Engines de jogos e embarcados",
      "Aplicações de alta performance",
      "Interoperabilidade com legado C/C++"
    ],
    best_practices: [
      "RAII e smart pointers",
      "Evitar raw new/delete",
      "Preferir padrões modernos (C++18/20)"
    ],
    pitfalls: [
      "Undefined behavior por ponteiros inválidos",
      "Data races sem sincronização",
      "Headers mal organizados aumentam tempos de build"
    ],
    stack: ["CMake","Conan/vcpkg","GoogleTest/Catch3","Clang-Tidy","ASan/TSan"]
  },
  go: {
    strengths: [
      "Binários estáticos e deploy simples",
      "Concorrência com goroutines/channels",
      "Ferramentas padrão (fmt, vet, test)"
    ],
    weaknesses: [
      "Erros verbosos (if err != nil)",
      "Generics relativamente novos",
      "Bibliotecas menos variadas que JS/Python"
    ],
    when_to_use: [
      "Serviços de alto IO",
      "CLIs e ferramentas DevOps",
      "Infraestrutura e plataformas internas"
    ],
    best_practices: [
      "gofmt/goimports sempre",
      "Interfaces pequenas e claras",
      "Context para cancelamento/timeouts"
    ],
    pitfalls: [
      "Goroutine leaks sem cancelamento",
      "Shadowing com :=",
      "Deadlocks por uso incorreto de channels"
    ],
    stack: ["Go modules","Gin","Echo","Chi","Testes nativos","golangci-lint"]
  },
  rust: {
    strengths: [
      "Segurança de memória sem GC",
      "Performance próxima ao C/C++",
      "Ferramentas integradas (cargo, clippy, rustfmt)"
    ],
    weaknesses: [
      "Curva de aprendizado íngreme",
      "Tempo de compilação maior em projetos grandes",
      "Ecosistema amadurecendo em algumas áreas"
    ],
    when_to_use: [
      "Sistemas e baixa latência",
      "Ferramentas CLI robustas",
      "Substituir C/C++ com segurança extra"
    ],
    best_practices: [
      "Usar clippy e rustfmt",
      "Projetar pensando em ownership/borrowing",
      "Erros com Result e tipos somas claros"
    ],
    pitfalls: [
      "Lifetimes e empréstimos mal compreendidos",
      "Contenção com Arc/Mutex",
      "Uso desnecessário de unsafe"
    ],
    stack: ["cargo","tokio","axum","serde","clippy","rustfmt"]
  },
  csharp: {
    strengths: [
      "Ferramentas maduras (.NET SDK, Visual Studio, Rider)",
      "Boa performance e produtividade",
      "Ecossistema rico para web, desktop e jogos"
    ],
    weaknesses: [
      "Dependência da plataforma .NET",
      "Verbose em alguns cenários",
      "Menos comum em ambientes Linux puros"
    ],
    when_to_use: [
      "Backends com ASP.NET Core",
      "Apps desktop Windows com WPF/WinUI",
      "Jogos com Unity"
    ],
    best_practices: [
      "Async/await para IO",
      "Injeção de dependência em ASP.NET",
      "Análise estática e testes com xUnit/NUnit"
    ],
    pitfalls: [
      "Bloqueios de thread em async mal utilizado",
      "Configuração complexa de EF Core",
      "Leaks de IDisposable sem using/await using"
    ],
    stack: [".NET SDK","ASP.NET Core","Entity Framework","NuGet","xUnit","Serilog"]
  },
  c: {
    strengths: [
      "Máxima performance e controle direto do hardware",
      "Base para inúmeras linguagens modernas (C++, Java, Go)",
      "Extremamente portável entre plataformas"
    ],
    weaknesses: [
      "Gerência manual de memória (malloc/free)",
      "Ausência de orientação a objetos nativa",
      "Segurança de memória frágil (buffer overflow)"
    ],
    when_to_use: [
      "Sistemas operacionais e drivers",
      "Sistemas embarcados com restrição de recursos",
      "Bibliotecas de alto desempenho"
    ],
    best_practices: [
      "Sempre checar retorno de malloc",
      "Usar strncpy ao invés de strcpy",
      "Compilar com warnings habilitados (-Wall -Wextra)"
    ],
    pitfalls: [
      "Dangling pointers e memória vazada",
      "Buffer overflow por entrada não validada",
      "Undefined behavior com ponteiros inválidos"
    ],
    stack: ["GCC","Clang","GDB","Valgrind","Make","CMake"]
  },
  scala: {
    strengths: [
      "Combina OO e programação funcional na JVM",
      "Excelente para Big Data com Apache Spark",
      "Sistema de tipos avançado com inferência"
    ],
    weaknesses: [
      "Curva de aprendizado íngreme",
      "Sintaxe pode ser densa para iniciantes",
      "Tempo de compilação pode ser alto"
    ],
    when_to_use: [
      "Processamento de dados em larga escala",
      "Sistemas distribuídos e reativos",
      "Backends complexos na JVM"
    ],
    best_practices: [
      "Preferir imutabilidade e vals",
      "Usar case classes para dados",
      "Evitar mutabilidade com vars desnecessárias"
    ],
    pitfalls: [
      "Complexidade de tipos pode confundir",
      "Mistura de estilos funcional e OO sem critério",
      "Erros de compilação com mensagens longas"
    ],
    stack: ["SBT","Akka","Play Framework","Spark","IntelliJ IDEA","Ammonite"]
  },
  kotlin: {
    strengths: [
      "Sintaxe concisa e segura (null safety)",
      "100% interoperável com Java",
      "Linguagem oficial para Android"
    ],
    weaknesses: [
      "Compilação pode ser mais lenta que Java",
      "Ecossistema mobile dependente do Google",
      "Migração de projetos Java pode ser gradual"
    ],
    when_to_use: [
      "Desenvolvimento Android moderno",
      "Backend com Spring Boot ou Ktor",
      "Microsserviços e multiplatform"
    ],
    best_practices: [
      "Usar data classes para modelos",
      "Explorar coroutines para assíncrono",
      "Adotar sealed classes para estados"
    ],
    pitfalls: [
      "Uso excessivo de extensões sem clareza",
      "Confusão entre lateinit e lazy",
      "Interop com Java pode esconder nulls"
    ],
    stack: ["Gradle","Android SDK","Spring Boot","Ktor","Compose","Exposed"]
  },
  php: {
    strengths: [
      "Fácil de hospedar e escalar (WordPress, Laravel)",
      "Grande quantidade de hospedagens disponíveis",
      "Ecossistema maduro para web"
    ],
    weaknesses: [
      "Inconsistências históricas na API",
      "Performance inferior a linguagens compiladas",
      "Má fama por código legado mal escrito"
    ],
    when_to_use: [
      "Sites e CMS (WordPress, Drupal)",
      "APIs REST com Laravel ou Symfony",
      "Projetos que precisam de hospedagem barata"
    ],
    best_practices: [
      "Usar Composer para gerenciamento de dependências",
      "Adotar Laravel ou Symfony para estrutura",
      "Habilitar tipagem estrita (strict_types)"
    ],
    pitfalls: [
      "Comparação == vs === pode gerar bugs",
      "Injeção de SQL sem prepared statements",
      "Lidar com arrays pode ser confuso"
    ],
    stack: ["Composer","Laravel","Symfony","PHPUnit","PHPStan","Vite"]
  },
  dart: {
    strengths: [
      "Otimizado para UI com Hot Reload",
      "Tipagem estática com null safety",
      "Ecossistema Flutter para multiplataforma"
    ],
    weaknesses: [
      "Depende fortemente do Flutter para mobile",
      "Ecossistema fora do Flutter é menor",
      "Pacotes npm-like menos maduros"
    ],
    when_to_use: [
      "Apps mobile multiplataforma com Flutter",
      "Interfaces web com Dart ou Flutter Web",
      "Prototipagem rápida de UIs"
    ],
    best_practices: [
      "Usar null safety desde o início",
      "Seguir Effective Dart para convenções",
      "Separar widgets em arquivos pequenos"
    ],
    pitfalls: [
      "Widget tree pode ficar profunda demais",
      "Confusão entre StatelessWidget e StatefulWidget",
      "Build methods pesados causam jank"
    ],
    stack: ["Flutter","Dart SDK","Pub","Dart Frog","DevTools","very_good_cli"]
  },
  ruby: {
    strengths: [
      "Sintaxe elegante e produtividade alta",
      "Ruby on Rails para desenvolvimento web rápido",
      "Comunidade acolhedora e filosofia clara"
    ],
    weaknesses: [
      "Performance inferior a Go, Rust ou Java",
      "Consumo de memória maior que linguagens leves",
      "Dependência forte do Rails em muitos projetos"
    ],
    when_to_use: [
      "Startups e MVPs rápidos com Rails",
      "Scripts de automação e prototipagem",
      "APIs web com convenção sobre configuração"
    ],
    best_practices: [
      "Seguir o style guide da comunidade",
      "Usar Bundler para gem management",
      "Testar com RSpec ou Minitest"
    ],
    pitfalls: [
      "Monkey patching pode causar efeitos colaterais",
      "Rails magic pode esconder complexidade",
      "Gorilas de memória em processos longos"
    ],
    stack: ["Bundler","Rails","Sinatra","RSpec","RuboCop","Jekyll"]
  },
  perl: {
    strengths: [
      "Poderoso para processamento de texto e regex",
      "Grande acúmulo de código em produção (legado)",
      "Flexibilidade sintática extrema"
    ],
    weaknesses: [
      "Sintaxe difícil de ler (Write-only language)",
      "Comunidade encolhendo significativamente",
      "Alternativas modernas para a maioria dos casos"
    ],
    when_to_use: [
      "Manutenção de sistemas legados",
      "Scripts de processamento de logs e texto",
      "Automação de tarefas em servidores Unix"
    ],
    best_practices: [
      "Usar strict e warnings sempre",
      "Adotar Perl::Critic para linting",
      "Escrever testes com Test::More"
    ],
    pitfalls: [
      "Referências e contextos confundem iniciantes",
      "Código mínimo pode ser ilegível",
      "Vazamentos de memória em scripts longos"
    ],
    stack: ["CPAN","Mojolicious","Dancer2","Perlbrew","Carton","Perl::Critic"]
  },
  swift: {
    strengths: [
      "Segurança de tipos e memória",
      "Performance próxima ao C++",
      "Ecossistema Apple integrado (Xcode)"
    ],
    weaknesses: [
      "Curva de aprendizado íngreme para quem vem de linguagens dinâmicas",
      "Evolui rapidamente (breaking changes)",
      "Ecossistema server-side ainda amadurecendo"
    ],
    when_to_use: ["Apps iOS e macOS nativos","Server-side com Vapor","Apple Watch e tvOS"],
    best_practices: [
      "Usar optionals com cuidado (guard let)",
      "Preferir structs sobre classes",
      "Seguir Swift API Design Guidelines"
    ],
    pitfalls: [
      "Retain cycles com closures",
      "Force unwrap (!) pode causar crashes",
      "Migração entre versões do Swift pode ser dolorosa"
    ],
    stack: ["Xcode","SwiftUI","UIKit","Vapor","SPM","Combine"]
  },
  lua: {
    strengths: [
      "Extremamente leve e rápida",
      "Fácil de embutir em aplicações C/C++",
      "Metatables oferecem flexibilidade única"
    ],
    weaknesses: [
      "Ecosistema menor que linguagens mainstream",
      "Ausência de biblioteca padrão robusta",
      "1-based indexing pode confundir programadores"
    ],
    when_to_use: [
      "Scripts em jogos (Roblox, LÖVE, WoW)",
      "Extensão de aplicações e plugins",
      "Web servers com OpenResty"
    ],
    best_practices: [
      "Usar LuaRocks para gerenciar pacotes",
      "Evitar globals usando local",
      "Documentar APIs embutidas em C"
    ],
    pitfalls: [
      "Tabelas como arrays podem ter performance variável",
      "Garbage collector pode causar pausas",
      "Confusão entre métodos e funções"
    ],
    stack: ["LuaRocks","LÖVE2D","OpenResty","Corona SDK","Redis Lua","Nginx"]
  },
  powershell: {
    strengths: [
      "Automação poderosa para Windows e Azure",
      "Pipeline de objetos (não apenas texto)",
      "Integração profunda com .NET"
    ],
    weaknesses: [
      "Lentidão em scripts complexos",
      "Sintaxe verbosa comparada a Bash",
      "Desempenho inferior para tarefas de IO pesado"
    ],
    when_to_use: [
      "Administração de servidores Windows",
      "Automação de tarefas Azure",
      "Gerenciamento de infraestrutura Microsoft"
    ],
    best_practices: [
      "Usar módulos para organizar código",
      "Definir políticas de execução adequadas",
      "Escrever funções com parâmetros tipados"
    ],
    pitfalls: [
      "Cmdlets com nomes muito longos",
      "Erros de shell script tradicional (bash habits)",
      "Scripts sem tratamento de erros falham silenciosamente"
    ],
    stack: ["Azure CLI","DSC","PowerShell Gallery","Pester","VS Code","Windows Terminal"]
  },
  bash: {
    strengths: [
      "Disponível em praticamente todo sistema Unix/Linux",
      "Excelente para automação de tarefas rápidas",
      "Pipeline de texto poderoso com pipes"
    ],
    weaknesses: [
      "Sintaxe confusa para iniciantes",
      "Tratamento de erros limitado",
      "Scripts grandes ficam difíceis de manter"
    ],
    when_to_use: [
      "Scripts de automação e deploy",
      "Administração de servidores Linux",
      "CI/CD pipelines e Dockerfiles"
    ],
    best_practices: [
      "Usar shellcheck para análise estática",
      "Sempre citar variáveis com \"$VAR\"",
      "Usar set -euo pipefail no início"
    ],
    pitfalls: [
      "Espaços em variáveis causam bugs",
      "Glob expansion pode deletar arquivos",
      "Subshells podem perder variáveis"
    ],
    stack: ["GNU Core Utils","sed","awk","grep","jq","shellcheck"]
  },
  cobol: {
    strengths: [
      "Extremamente confiável para processamento financeiro",
      "Milhões de linhas em produção global",
      "Alta performance em mainframes"
    ],
    weaknesses: [
      "Sintaxe verbosa e datada",
      "Falta de profissionais qualificados",
      "Modernização é cara e arriscada"
    ],
    when_to_use: [
      "Sistemas bancários e financeiros legados",
      "Processamento de grandes volumes de transações",
      "Mainframes IBM Z"
    ],
    best_practices: [
      "Manter documentação detalhada",
      "Usar versionamento para alterações",
      "Planejar migração gradual para linguagens modernas"
    ],
    pitfalls: [
      "Código duplicado dificulta manutenção",
      "Dependência de ambientes mainframe",
      "Mudanças em um módulo podem afetar todo o sistema"
    ],
    stack: ["Micro Focus Visual COBOL","GnuCOBOL","IBM Z","CICS","JCL","DB2"]
  },
  pascal: {
    strengths: [
      "Sintaxe clara e estruturada",
      "Ideal para ensino de programação",
      "Compilador Free Pascal é robusto e gratuito"
    ],
    weaknesses: [
      "Ecossistema profissional reduzido",
      "Poucas vagas de mercado",
      "Lentamente sendo substituída em academias"
    ],
    when_to_use: [
      "Aprendizado de conceitos de programação",
      "Desenvolvimento de aplicativos desktop com Delphi",
      "Competições de programação (BPC)"
    ],
    best_practices: [
      "Usar Delphi para projetos profissionais",
      "Seguir boas práticas de programação estruturada",
      "Documentar com comentários descritivos"
    ],
    pitfalls: [
      "Ponteiro com nil pode causar acessos inválidos",
      "Arrays sem verificação de limites",
      "Delphi pode ter custos de licenciamento"
    ],
    stack: ["Free Pascal","Delphi","Lazarus","CodeTyphon","Turbo Pascal","PascalABC"]
  },
  html: {
    strengths: [
      "Base de toda a web, universal e padronizada",
      "Semântica rica para acessibilidade e SEO",
      "Integração nativa com CSS e JavaScript"
    ],
    weaknesses: [
      "Não é linguagem de programação (sem lógica)",
      "Inconsistências históricas entre navegadores",
      "Validação rigorosa raramente aplicada"
    ],
    when_to_use: [
      "Estruturação de páginas web",
      "E-mails HTML e templates",
      "Base para apps híbridos e PWAs"
    ],
    best_practices: [
      "Usar tags semânticas (header, nav, main, article)",
      "Validar com W3C Validator",
      "Manter hierarquia correta de headings"
    ],
    pitfalls: [
      "Div-ite excessiva sem semântica",
      "Esquecer alt em imagens (acessibilidade)",
      "Uso de tabelas para layout"
    ],
    stack: ["HTML5","ARIA","SEO","Emmet","Prettier","W3C Validator"]
  },
  css: {
    strengths: [
      "Controle total sobre apresentação visual",
      "Flexbox e Grid para layouts modernos",
      "Animações e transições nativas"
    ],
    weaknesses: [
      "Cascata e especificidade podem confundir",
      "Centralizar verticalmente foi historicamente difícil",
      "Manutenção em projetos grandes sem metodologia"
    ],
    when_to_use: [
      "Estilização de páginas web",
      "Layouts responsivos e animações",
      "Temas e design systems"
    ],
    best_practices: [
      "Usar metodologias como BEM",
      "Mobile-first com media queries",
      "Variáveis CSS para consistência"
    ],
    pitfalls: [
      "!important abusado quebra cascata",
      "Seletores muito específicos difíceis de sobrescrever",
      "Não resetar box-sizing"
    ],
    stack: ["Flexbox","Grid","SASS","Tailwind","PostCSS","Animations"]
  }
};

export const roadmaps = [
  {
    id: "javascript-video-1",
    name: "Curso de Javascript",
    desc: "Aprenda JavaScript do zero e tire seus primeiros projetos do papel.",
    content: [
      {
        type: "video",
        name: "CURSO DE JAVASCRIPT DO ZERO | parte 1 - variáveis, onClick, funções e interação com HTML",
        url: "https://www.youtube.com/embed/Z7mnxUI4u00"
      },
      {
        type: "video",
        name: "CURSO DE JAVASCRIPT DO ZERO | parte 2 - pegando valores de entrada do usuário e escrevendo na tela",
        url: "https://www.youtube.com/embed/kwOPAQJDGyI?si=7Zr9C3xp33OYNPIU"
      },
      {
        type: "video",
        name: "Como usar o CONSOLE no navegador? | Conteúdo extra das aulas de Javascript!",
        url: "https://www.youtube.com/embed/rvBdC3Ziwg8?si=ps6MmlUPpPE02rOB"
      },
      {
        type: "video",
        name: "CURSO DE JAVASCRIPT DO ZERO | parte 3 - estruturas condicionais (if else) e operadores relacionais",
        url: "https://www.youtube.com/embed/c-D7uV2CiFQ?si=j5YvTAZQsjWiKRnt"
      },
      {
        type: "video",
        name: "CURSO DE JAVASCRIPT DO ZERO | parte 4 - arrays (listas), estruturas de repetição (for) e escopo",
        url: "https://www.youtube.com/embed/IuCZPOk5EXo?si=weVzP358K4ajgYl6"
      },
      {
        type: "video",
        name: "CURSO DE JAVASCRIPT DO ZERO | parte 5 - métodos de array (deletando e editando itens em lista)",
        url: "https://www.youtube.com/embed/RjfhRZXB_U8?si=UDlwr8OIQO1aJMKW"
      }
    ]
  },
  {
    id: "curso-de-java",
    name: "Curso de Java",
    desc: "Do básico ao avançado em Java: orientação a objetos, exceções e muitos exercícios práticos.",
    content: [
      {
        type: "video",
        name: "Curso de Java 01: Introdução e Dicas para quem está Começando",
        url: "https://www.youtube.com/embed/LnORjqZUMIQ"
      },
      {
        type: "video",
        name: "Java Course 02: Installing Java on Windows (Windows XP, Windows 7, Windows 8)",
        url: "https://www.youtube.com/embed/ddhH97IPrFY"
      },
      {
        type: "video",
        name: "Java Course 02: Installing Java on Windows 10",
        url: "https://www.youtube.com/embed/CMHU5buXvNw"
      },
      {
        type: "video",
        name: "Java Course 03: Installing Java on Ubuntu (Linux)",
        url: "https://www.youtube.com/embed/BTNp4P12DIs"
      },
      {
        type: "video",
        name: "Java Course 04: Installing Java on Mac OS",
        url: "https://www.youtube.com/embed/xQEauKE4NTw"
      },
      {
        type: "video",
        name: "Java Course 05: First Java Program",
        url: "https://www.youtube.com/embed/mu2ti43cgwc"
      },
      {
        type: "video",
        name: "Curso de Java - Correção Exercícios Aula 05",
        url: "https://www.youtube.com/embed/3rZNefsMmKs"
      },
      {
        type: "video",
        name: "Java Course 06: Passing arguments to the program",
        url: "https://www.youtube.com/embed/dhGPGv7XCM8"
      },
      {
        type: "video",
        name: "Java Course - Exercise Correction Class 06",
        url: "https://www.youtube.com/embed/Ebvl0BlnD-U"
      },
      {
        type: "video",
        name: "Java Course 07: Understanding Errors",
        url: "https://www.youtube.com/embed/NoEoOaTSFMo"
      },
      {
        type: "video",
        name: "Java Course 08: Installing an IDE (Eclipse and Netbeans) on Windows, Ubuntu and MacOS",
        url: "https://www.youtube.com/embed/74QEhBpzixs"
      },
      {
        type: "video",
        name: "Java Course 09: Introduction to Object-Oriented Programming",
        url: "https://www.youtube.com/embed/KUUrrIX6wGo"
      },
      {
        type: "video",
        name: "Curso de Java 10: Introdução a Variávels",
        url: "https://www.youtube.com/embed/ELBqT_rueAQ"
      },
      {
        type: "video",
        name: "Java 11 Course: Variables - Primitive Types",
        url: "https://www.youtube.com/embed/aqiB58NpKLw"
      },
      {
        type: "video",
        name: "Java 12 Course: Reading data from the keyboard using the Scanner class",
        url: "https://www.youtube.com/embed/Z6Y8zupCKfk"
      },
      {
        type: "video",
        name: "Curso de Java 13: Operadores (Aritiméticos, Lógicos e Relacionais)",
        url: "https://www.youtube.com/embed/199tKAE6sxo"
      },
      {
        type: "video",
        name: "Curso de Java - Correção Exercícios Aula 13",
        url: "https://www.youtube.com/embed/pfI20o_lyRA"
      },
      {
        type: "video",
        name: "Curso de Java 14: Condicionais If-Else",
        url: "https://www.youtube.com/embed/KJYSXTYgL_o"
      },
      {
        type: "video",
        name: "Curso de Java 15: Condicional Switch-Case",
        url: "https://www.youtube.com/embed/JTLgFZyBUN4"
      },
      {
        type: "video",
        name: "Curso de Java - Correção Exercícios Aula 15 (if-else e switch-case)",
        url: "https://www.youtube.com/embed/-BpAWP6T6a8"
      },
      {
        type: "video",
        name: "Curso de Java 16: Loops while e do-while",
        url: "https://www.youtube.com/embed/9_12LPVMJYc"
      },
      {
        type: "video",
        name: "Curso de Java 17:  Loop for",
        url: "https://www.youtube.com/embed/HrfWrbmFUKQ"
      },
      {
        type: "video",
        name: "Java Course - Exercise Correction Class 17 (while, do-while, for) Part 1",
        url: "https://www.youtube.com/embed/7ccdc5Vkf7Q"
      },
      {
        type: "video",
        name: "Curso de Java - Correção Exercícios Aula 17 (while, do-while, for) Parte 2",
        url: "https://www.youtube.com/embed/ATEpiDIqDx4"
      },
      {
        type: "video",
        name: "Curso de Java - Correção Exercícios Aula 17 (while, do-while, for) Parte 3",
        url: "https://www.youtube.com/embed/ltG7MEnTx8M"
      },
      {
        type: "video",
        name: "Curso de Java - Correção Exercícios Aula 17 (while, do-while, for) Parte 4",
        url: "https://www.youtube.com/embed/bfkocfgM7_U"
      },
      {
        type: "video",
        name: "Curso de Java - Correção Exercícios Aula 17 (while, do-while, for) Parte 5",
        url: "https://www.youtube.com/embed/coiYSnquB7g"
      },
      {
        type: "video",
        name: "Java 18 Course: Break and Continue Commands",
        url: "https://www.youtube.com/embed/rU-DCmwAtXE"
      },
      {
        type: "video",
        name: "Curso de Java 19: Vetores (Arrays)",
        url: "https://www.youtube.com/embed/HxRb5KLofcI"
      },
      {
        type: "video",
        name: "Java Course - Exercise Correction Class 19 Vectors (Arrays) - Part 1",
        url: "https://www.youtube.com/embed/UN6ZJBSTR0M"
      },
      {
        type: "video",
        name: "Curso de Java - Correção Exercícios Aula 19 Vetores (Arrays) - Parte 2",
        url: "https://www.youtube.com/embed/o4S35dlr4_E"
      },
      {
        type: "video",
        name: "Curso de Java - Correção Exercícios Aula 19 Vetores (Arrays) - Parte 3",
        url: "https://www.youtube.com/embed/eAuxsgm3pl4"
      },
      {
        type: "video",
        name: "Java Course - Exercise Correction Lesson 19 Arrays - Part 4",
        url: "https://www.youtube.com/embed/NZw0BbGxCmM"
      },
      {
        type: "video",
        name: "Curso de Java -  Correção Exercícios Aula 19 Vetores (Arrays) - Parte 5",
        url: "https://www.youtube.com/embed/64Bj0RMWkiU"
      },
      {
        type: "video",
        name: "Curso de Java 20 Matrizes (Arrays Multidimensionais) - Parte 1",
        url: "https://www.youtube.com/embed/P66G0rxdL-k"
      },
      {
        type: "video",
        name: "Curso de Java 20 Matrizes (Arrays Multidimensionais) - Parte 2",
        url: "https://www.youtube.com/embed/C6lhdwDo2Ng"
      },
      {
        type: "video",
        name: "Curso de Java 20 Matrizes (Arrays Multidimensionais) - Parte 3",
        url: "https://www.youtube.com/embed/99u1tAbYcww"
      },
      {
        type: "video",
        name: "Curso de Java 20 Matrizes (Arrays Multidimensionais) - Parte 4",
        url: "https://www.youtube.com/embed/QjSlHLMaTYY"
      },
      {
        type: "video",
        name: "Curso de Java - Correção Exercícios Aula 20 Matrizes (Arrays Multidimensionais) - Parte 1",
        url: "https://www.youtube.com/embed/Cf4sv_9vENs"
      },
      {
        type: "video",
        name: "Java Course - Exercise Correction Lesson 20 Matrices (Multidimensional Arrays) - Part 2",
        url: "https://www.youtube.com/embed/lHKmF-kOq90"
      },
      {
        type: "video",
        name: "Curso de Java -  Correção Exercícios Aula 20 Matrizes (Arrays Multidimensionais) - Parte 3",
        url: "https://www.youtube.com/embed/zaD6mQj11ew"
      },
      {
        type: "video",
        name: "Curso de Java - Correção Exercícios Aula 20 Matrizes (Arrays Multidimensionais) - Parte 4",
        url: "https://www.youtube.com/embed/9h9OfzW9u9M"
      },
      {
        type: "video",
        name: "Curso de Java 21:  Loop for each",
        url: "https://www.youtube.com/embed/2ndBbnsqBXQ"
      },
      {
        type: "video",
        name: "Curso de Java 22: Como debugar no Eclipse",
        url: "https://www.youtube.com/embed/kbzzlKfjR8k"
      },
      {
        type: "video",
        name: "Java Course 23: How to debug in Netbeans",
        url: "https://www.youtube.com/embed/qlMJytCpKJg"
      },
      {
        type: "video",
        name: "Curso de Java 24 - Orientação a Objetos: Classes e atributos",
        url: "https://www.youtube.com/embed/Gq1BS63pkRA"
      },
      {
        type: "video",
        name: "Curso de Java - Orientação a Objetos: Correção Exercícios Aula 24: Classes e atributos",
        url: "https://www.youtube.com/embed/0f5wWNU_nns"
      },
      {
        type: "video",
        name: "Java Course 25 - Object Orientation: Simple Classes and Methods",
        url: "https://www.youtube.com/embed/-t_c6F_Uoeg"
      },
      {
        type: "video",
        name: "Java Course 26 - Object-Oriented Programming: Classes and methods with return values",
        url: "https://www.youtube.com/embed/_3fal2H8Agw"
      },
      {
        type: "video",
        name: "Curso de Java 27 - Orientação a Objetos: Classes e métodos com parâmetros",
        url: "https://www.youtube.com/embed/ffvsI9dnDiY"
      },
      {
        type: "video",
        name: "Curso de Java - Orientação a Objetos: Correção Exercícios Aula 27: Classes e métodos - Parte 1",
        url: "https://www.youtube.com/embed/DTewirzLmb4"
      },
      {
        type: "video",
        name: "Curso de Java - Orientação a Objetos: Correção Exercícios Aula 27: Classes e métodos - Parte 2",
        url: "https://www.youtube.com/embed/SC7YLvc6Sto"
      },
      {
        type: "video",
        name: "Curso de Java - Orientação a Objetos: Correção Exercícios Aula 27: Classes e métodos - Parte 3",
        url: "https://www.youtube.com/embed/eYM24XWAxSs"
      },
      {
        type: "video",
        name: "Curso de Java - Orientação a Objetos: Correção Exercícios Aula 27: Classes e métodos - Parte 4",
        url: "https://www.youtube.com/embed/ZILUIBmGAmk"
      },
      {
        type: "video",
        name: "Curso de Java 28 - Orientação a Objetos: Pacotes e import",
        url: "https://www.youtube.com/embed/aRQHjfYBpM8"
      },
      {
        type: "video",
        name: "Curso de Java 29 - Orientação a Objetos: Construtores",
        url: "https://www.youtube.com/embed/uJKcKzro9pU"
      },
      {
        type: "video",
        name: "Curso de Java 30 - Orientação a Objetos: Palavra chave this",
        url: "https://www.youtube.com/embed/RLzR--Pwvcs"
      },
      {
        type: "video",
        name: "Curso de Java 31 - Orientação a Objetos: Modificadores private e public",
        url: "https://www.youtube.com/embed/6oD7TE90e-M"
      },
      {
        type: "video",
        name: "Curso de Java 32 - Orientação a Objetos: Encapsulamento: métodos getters e setters",
        url: "https://www.youtube.com/embed/vKif9IxYTLY"
      },
      {
        type: "video",
        name: "Curso de Java 33 - Orientação a Objetos: Sobrecarga de métodos e construtores (overload)",
        url: "https://www.youtube.com/embed/ZpssJov_5_A"
      },
      {
        type: "video",
        name: "Java Course - Object-Oriented Programming: Exercise Correction - Lesson 33 - Part 1",
        url: "https://www.youtube.com/embed/eFYqJHZw2G8"
      },
      {
        type: "video",
        name: "Curso de Java - Orientação a Objetos: Correção Exercícios Aula 33 - Parte 2",
        url: "https://www.youtube.com/embed/LNTGVzYVtMk"
      },
      {
        type: "video",
        name: "Curso de Java - Orientação a Objetos: Correção Exercícios Aula 33 - Parte 3",
        url: "https://www.youtube.com/embed/iGyM6wL_w50"
      },
      {
        type: "video",
        name: "Curso de Java - Orientação a Objetos: Correção Exercícios Aula 33 - Parte 4",
        url: "https://www.youtube.com/embed/cv8-GNYNOOo"
      },
      {
        type: "video",
        name: "Curso de Java 34 - Orientação a Objetos: Variáveis e metodos estáticos (modificador static)",
        url: "https://www.youtube.com/embed/Dz_w4YpFL80"
      },
      {
        type: "video",
        name: "Curso de Java - Orientação a Objetos: Correção Exercícios Aula 34 - Parte 1 (Contador)",
        url: "https://www.youtube.com/embed/oTy5jP7CK9c"
      },
      {
        type: "video",
        name: "Curso de Java - Orientação a Objetos: Correção Exercícios Aula 34 - Parte 2 (Calculadora)",
        url: "https://www.youtube.com/embed/8GGSXaUj2pk"
      },
      {
        type: "video",
        name: "Curso de Java - Orientação a Objetos: Correção Exercícios Aula 34 - Parte 3 (Fatorial)",
        url: "https://www.youtube.com/embed/A8caJRDWWVQ"
      },
      {
        type: "video",
        name: "Curso de Java 35 - Recursividade",
        url: "https://www.youtube.com/embed/X56_FjmbmE4"
      },
      {
        type: "video",
        name: "Curso de Java - Correção Exercícios Aula 35 - Parte 1 (Fibonacci Recursivo)",
        url: "https://www.youtube.com/embed/2YyJ3CZBlAI"
      },
      {
        type: "video",
        name: "Curso de Java - Correção Exercícios Aula 35 - Parte 2 (Somatório Recursivo)",
        url: "https://www.youtube.com/embed/wl1gIU5y-II"
      },
      {
        type: "video",
        name: "Curso de Java 36 - Orientação a Objetos: Relacionamento entre Classes (tem um e tem muitos)",
        url: "https://www.youtube.com/embed/edXQiFAdH2c"
      },
      {
        type: "video",
        name: "Curso de Java - Orientação a Objetos: Correção Exercícios Aula 36 - Parte 1 (Agenda)",
        url: "https://www.youtube.com/embed/5-dQS7QuwcY"
      },
      {
        type: "video",
        name: "Curso de Java - Orientação a Objetos: Correção Exercícios Aula 36 - Parte 2 (Curso + Alunos)",
        url: "https://www.youtube.com/embed/ML32UfX43Pw"
      },
      {
        type: "video",
        name: "Curso de Java 37 - Orientação a Objetos: Herança",
        url: "https://www.youtube.com/embed/MOXLCjL4Ik4"
      },
      {
        type: "video",
        name: "Curso de Java 38 - Orientação a Objetos: Herança: Palavra chave super",
        url: "https://www.youtube.com/embed/aRPal-8z4RQ"
      },
      {
        type: "video",
        name: "Curso de Java 39 - Orientação a Objetos: Herança: modificadores de acesso + protected",
        url: "https://www.youtube.com/embed/xjxDh9xbfLM"
      },
      {
        type: "video",
        name: "Curso de Java 40: Orientação a Objetos: Herança e Polimorfismo: sobrecarga de métodos",
        url: "https://www.youtube.com/embed/pMPlngyWHLM"
      },
      {
        type: "video",
        name: "Curso de Java 41: Orientação a Objetos: Herança: classes abstratas",
        url: "https://www.youtube.com/embed/Oibb-17nD14"
      },
      {
        type: "video",
        name: "Curso de Java 42: Orientação a Objetos: Palavra chave final",
        url: "https://www.youtube.com/embed/858FJ6DQRVg"
      },
      {
        type: "video",
        name: "Java Course 43: Object-Oriented Programming: The Object Class",
        url: "https://www.youtube.com/embed/dAGvL88bO9o"
      },
      {
        type: "video",
        name: "Curso de Java - Orientação a Objetos: Correção Exercícios Aula 43 - Parte 1 (Conta Bancária)",
        url: "https://www.youtube.com/embed/Ghp5pmbxDTU"
      },
      {
        type: "video",
        name: "Java Course - Object-Oriented Programming: Exercise Correction - Lesson 43 - Part 2 (Income Tax)",
        url: "https://www.youtube.com/embed/ZSyCf11JJOM"
      },
      {
        type: "video",
        name: "Curso de Java - Orientação a Objetos: Correção Exercícios Aula 43 - Parte 3 (Zoológico)",
        url: "https://www.youtube.com/embed/M631ZCkX-Dg"
      },
      {
        type: "video",
        name: "Curso de Java 44: Orientação a Objetos: Interfaces",
        url: "https://www.youtube.com/embed/6uLLfRNgRA4"
      },
      {
        type: "video",
        name: "Curso de Java 45: Orientação a Objetos: Casting e instaceof",
        url: "https://www.youtube.com/embed/POEf8DKZWds"
      },
      {
        type: "video",
        name: "Curso de Java 46: Orientação a Objetos: Interface e herança",
        url: "https://www.youtube.com/embed/h-R4mWzmRKc"
      },
      {
        type: "video",
        name: "Curso de Java - Orientação a Objetos: Correção Exercícios Aula 46 - Parte 1 (Figura Geométrica)",
        url: "https://www.youtube.com/embed/3hZCLp0g1TE"
      },
      {
        type: "video",
        name: "Curso de Java - Orientação a Objetos: Correção Exercícios Aula 46 - Parte 2 (Dimensão e Volume)",
        url: "https://www.youtube.com/embed/2M1qOF24HMA"
      },
      {
        type: "video",
        name: "Curso de Java - Orientação a Objetos: Correção Exercícios Aula 46 - Parte 3 (Polimorfismo)",
        url: "https://www.youtube.com/embed/mLHT8GxG0Sw"
      },
      {
        type: "video",
        name: "Curso de Java 47: Exceptions: try, catch",
        url: "https://www.youtube.com/embed/ld2C4GcAtsg"
      },
      {
        type: "video",
        name: "Curso de Java 48: Exceptions: multiplos catch",
        url: "https://www.youtube.com/embed/G8-fhwpHdFU"
      },
      {
        type: "video",
        name: "Curso de Java 49: Exceptions: finally",
        url: "https://www.youtube.com/embed/Xb9rK6L4GYA"
      },
      {
        type: "video",
        name: "Curso de Java 50: Exceptions: stacktrace e throws",
        url: "https://www.youtube.com/embed/CW7DER5TqLM"
      },
      {
        type: "video",
        name: "Curso de Java 51: Exceptions: tipos de erros no Java",
        url: "https://www.youtube.com/embed/5R8pw1V2H-g"
      },
      {
        type: "video",
        name: "Curso de Java 52: Exceptions: criando sua própria exceção",
        url: "https://www.youtube.com/embed/Xt0CpwJT5yY"
      },
      {
        type: "video",
        name: "Curso de Java: Correção Exercícios Aula 52: Exceptions",
        url: "https://www.youtube.com/embed/tc48uwR9Qto"
      },
      {
        type: "video",
        name: "Curso de Java: Como gerar o certificado",
        url: "https://www.youtube.com/embed/rTlaAFpbfMs"
      }
    ]
  },
  {
    id: "curso-de-nodejs",
    name: "Curso de Node.js",
    desc: "Fundamentos de Node.js na prática: Express, MySQL, MongoDB, autenticação e deploy.",
    content: [
      {
        type: "video",
        name: "Node.JS Course - What is Node.JS #01",
        url: "https://www.youtube.com/embed/LLqq6FemMNQ"
      },
      {
        type: "video",
        name: "Node.js Course - How to Install Node.js #02",
        url: "https://www.youtube.com/embed/522HiDiAf0w"
      },
      {
        type: "video",
        name: "Curso de Node.JS - Node na prática #03",
        url: "https://www.youtube.com/embed/5fuoA7pGH_Y"
      },
      {
        type: "video",
        name: "Node.js Course - Modules #04",
        url: "https://www.youtube.com/embed/bWSkUscBeZc"
      },
      {
        type: "video",
        name: "Node.js Course - HTTP Protocol #05",
        url: "https://www.youtube.com/embed/QnTCre0HHv8"
      },
      {
        type: "video",
        name: "Node.js Course - Introduction to Express #06",
        url: "https://www.youtube.com/embed/pohvlFd0byI"
      },
      {
        type: "video",
        name: "Curso de Node.js - Rotas #07",
        url: "https://www.youtube.com/embed/UMI7kFwmAHo"
      },
      {
        type: "video",
        name: "Curso de Node.js - Parâmetros #08",
        url: "https://www.youtube.com/embed/G9b-Zi0rg3o"
      },
      {
        type: "video",
        name: "Curso de Node.js - Nodemon #09",
        url: "https://www.youtube.com/embed/u3MrPxq_RyA"
      },
      {
        type: "video",
        name: "Curso de Node.js - Exibindo HTML #10",
        url: "https://www.youtube.com/embed/UkwLcuzJRDQ"
      },
      {
        type: "video",
        name: "Curso de Node.js - Instalando o Mysql #11",
        url: "https://www.youtube.com/embed/HmmYkLyVy-c"
      },
      {
        type: "video",
        name: "Node.js Course - How to Create Tables in MySQL #12",
        url: "https://www.youtube.com/embed/IPbLptXXXc0"
      },
      {
        type: "video",
        name: "Curso de Node.js - Manipulando o MySQL #13",
        url: "https://www.youtube.com/embed/MlhNP1UbCRA"
      },
      {
        type: "video",
        name: "Curso de Node.js - Deletando registros no MySQL #14",
        url: "https://www.youtube.com/embed/QA2pmm8FC60"
      },
      {
        type: "video",
        name: "Curso de Node.js - Atualizando registros no MySQL #15",
        url: "https://www.youtube.com/embed/YfG6MgedXTc"
      },
      {
        type: "video",
        name: "Curso de Node.js - Sequelize #16",
        url: "https://www.youtube.com/embed/0q0u8syrztg"
      },
      {
        type: "video",
        name: "Node.js Course - How to Connect to MySQL #17",
        url: "https://www.youtube.com/embed/jk9aFVXR9Cs"
      },
      {
        type: "video",
        name: "Node.js Course - Models in Sequelize #18",
        url: "https://www.youtube.com/embed/4ktEr1rbhx8"
      },
      {
        type: "video",
        name: "Curso de Node.js - Handlebars #19",
        url: "https://www.youtube.com/embed/U4OUBjnjBWU"
      },
      {
        type: "video",
        name: "Curso de Node.js - Como criar um formulário #20",
        url: "https://www.youtube.com/embed/p6oubMfuNto"
      },
      {
        type: "video",
        name: "Curso de Node.js - Como enviar dados do formulário #21",
        url: "https://www.youtube.com/embed/LwvZeRj7CdQ"
      },
      {
        type: "video",
        name: "Curso de Node.js - Body parser #22",
        url: "https://www.youtube.com/embed/P1OI_EKyl6U"
      },
      {
        type: "video",
        name: "Curso de Node.js - Estruturando banco de dados #23",
        url: "https://www.youtube.com/embed/Ql6F6wPphkA"
      },
      {
        type: "video",
        name: "Curso de Node.js - Pegando dados do formulário #24",
        url: "https://www.youtube.com/embed/OFrnB7Bvznk"
      },
      {
        type: "video",
        name: "Curso de Node.js - Listando dados do banco #25",
        url: "https://www.youtube.com/embed/Oo8oNXyrxB0"
      },
      {
        type: "video",
        name: "Curso de Node.js - Deletando posts #26",
        url: "https://www.youtube.com/embed/PiM-E4cDj0s"
      },
      {
        type: "video",
        name: "Curso de Node.js - Introdução ao MongoDB #27",
        url: "https://www.youtube.com/embed/wHvz6SMKZq4"
      },
      {
        type: "video",
        name: "Curso de Node.js - Como instalar o MongoDB #28",
        url: "https://www.youtube.com/embed/XlvR0_AECoI"
      },
      {
        type: "video",
        name: "Curso de Node.js - Iniciando com Mongoose #29",
        url: "https://www.youtube.com/embed/5_LRvbmlqeg"
      },
      {
        type: "video",
        name: "Curso de Node.js - Trabalhando com o Mongoose #30",
        url: "https://www.youtube.com/embed/h4lS9V3FCRQ"
      },
      {
        type: "video",
        name: "Curso de Node.js - Iniciando projeto Express.js #31",
        url: "https://www.youtube.com/embed/x2FZQsQiHl0"
      },
      {
        type: "video",
        name: "Curso de Node.js - Grupo de rotas no Express.js #32",
        url: "https://www.youtube.com/embed/ROL4ylHN47g"
      },
      {
        type: "video",
        name: "Curso de Node.js - Arquivos estáticos #33",
        url: "https://www.youtube.com/embed/dghtXs5j__Q"
      },
      {
        type: "video",
        name: "Curso de Node.js - Formulário de categorias #34",
        url: "https://www.youtube.com/embed/1AuXAlmhUV4"
      },
      {
        type: "video",
        name: "Node.js Course - Defining the category model #35",
        url: "https://www.youtube.com/embed/0llTpZe5GiE"
      },
      {
        type: "video",
        name: "Node.js Course - Registering categories in the database #36",
        url: "https://www.youtube.com/embed/9ELKCM4MU3c"
      },
      {
        type: "video",
        name: "Node.js Course - What are sessions and cookies #37",
        url: "https://www.youtube.com/embed/zw4duVA-ahY"
      },
      {
        type: "video",
        name: "Curso de Node.js - Middlewares #38",
        url: "https://www.youtube.com/embed/4rlKcxz09uE"
      },
      {
        type: "video",
        name: "Curso de Node.js - Como configurar sessões #39",
        url: "https://www.youtube.com/embed/BN5iQ4pkhTc"
      },
      {
        type: "video",
        name: "Curso de Node.js - Como validar formulários no Express.js #40",
        url: "https://www.youtube.com/embed/yNDCRAz7CM8"
      },
      {
        type: "video",
        name: "Curso de Node.js - Listando categorias #41",
        url: "https://www.youtube.com/embed/xFbptBF9Vag"
      },
      {
        type: "video",
        name: "Curso de Node.js - Editando categoria #42",
        url: "https://www.youtube.com/embed/yNasCYQ2AOE"
      },
      {
        type: "video",
        name: "Curso de Node.js - Deletando categorias #43",
        url: "https://www.youtube.com/embed/JMWeqWUKNv0"
      },
      {
        type: "video",
        name: "Curso de Node.js - definindo model de postagens #44",
        url: "https://www.youtube.com/embed/VFEE6_Ydf80"
      },
      {
        type: "video",
        name: "Curso de Node.js - Formulário de postagens #45",
        url: "https://www.youtube.com/embed/4jFC_EAbMyw"
      },
      {
        type: "video",
        name: "Curso de Node.js - Salvando postagens no banco de dados #46",
        url: "https://www.youtube.com/embed/EJvY2qFu7Mc"
      },
      {
        type: "video",
        name: "Node.js Course - Listing of posts #47",
        url: "https://www.youtube.com/embed/7nDmDOR3784"
      },
      {
        type: "video",
        name: "Curso de Node.js - Editando postagens #48",
        url: "https://www.youtube.com/embed/kZuQj24CZ3Y"
      },
      {
        type: "video",
        name: "Curso de Node.js - Deletando postagens #49",
        url: "https://www.youtube.com/embed/BtsIcD09vmQ"
      },
      {
        type: "video",
        name: "Curso de Node.js - Criando home page #50",
        url: "https://www.youtube.com/embed/X3IXjiq3DLA"
      },
      {
        type: "video",
        name: "Curso de Node.js - Página de postagem #51",
        url: "https://www.youtube.com/embed/tvqXaP802u0"
      },
      {
        type: "video",
        name: "Curso de Node.js - Listagem de categorias #52",
        url: "https://www.youtube.com/embed/FtEaHKrH9Kc"
      },
      {
        type: "video",
        name: "Curso de Node.js - Definindo model de usuario #53",
        url: "https://www.youtube.com/embed/JSUMbMhyADQ"
      },
      {
        type: "video",
        name: "Curso de Node.js - Registro de usuários #54",
        url: "https://www.youtube.com/embed/acCEOBM2eC0"
      },
      {
        type: "video",
        name: "Curso de Node.js - Fazendo correção #55",
        url: "https://www.youtube.com/embed/5j5RHllZoBU"
      },
      {
        type: "video",
        name: "Node.js Course - Registering users in the database #56",
        url: "https://www.youtube.com/embed/YPkv701xk78"
      },
      {
        type: "video",
        name: "Curso de Node.js - Formulário de login #57",
        url: "https://www.youtube.com/embed/s1AZiMwuECE"
      },
      {
        type: "video",
        name: "Curso de Node.js - Configurando o Passport #58",
        url: "https://www.youtube.com/embed/JwrIhK1OME0"
      },
      {
        type: "video",
        name: "Curso de Node.js - Finalizando autenticação #59",
        url: "https://www.youtube.com/embed/oVQ7enobouE"
      },
      {
        type: "video",
        name: "Curso de Node.js - Controlando acesso #60",
        url: "https://www.youtube.com/embed/DbKwNEBwZwI"
      },
      {
        type: "video",
        name: "Curso de Node.js - Logout #61",
        url: "https://www.youtube.com/embed/bfuhndq5-II"
      },
      {
        type: "video",
        name: "Curso de Node.js - Como fazer Deploy na Heroku - Parte 1 #62",
        url: "https://www.youtube.com/embed/4ssxoAltYmM"
      },
      {
        type: "video",
        name: "Curso de Node.js - Como fazer deploy na Heroku - Parte 2 #63",
        url: "https://www.youtube.com/embed/OVsvdeG_AZc"
      }
    ]
  },
  {
    id: "por-dentro-das-empresas-tech",
    name: "Por Dentro das Empresas Tech",
    desc: "Como é trabalhar nas big techs: seleção, cultura, benefícios e dicas pra conseguir seu estágio.",
    content: [
      {
        type: "video",
        name: "Estágio na Hotmart (Tour Completo)",
        url: "https://www.youtube.com/embed/qdsH88d4jII"
      },
      {
        type: "video",
        name: "Estágio no Bradesco paga mais que CLT!!!",
        url: "https://www.youtube.com/embed/oDOUbhxCax8"
      },
      {
        type: "video",
        name: "Estágio Google 2026: Guia Completo dos 4 Programas Disponíveis",
        url: "https://www.youtube.com/embed/H4NzD_sRL7U"
      },
      {
        type: "video",
        name: "como é ser ESTAGIÁRIO na Shopee | como entrar? salário, rotina, tour e +",
        url: "https://www.youtube.com/embed/XpfFyPJmKCg"
      },
      {
        type: "video",
        name: "Estágio aberto na Philips: como funciona? (Vagas Abertas)",
        url: "https://www.youtube.com/embed/AkD5iFFBYOs"
      }
    ]
  },
  {
    id: "typescript-completo-nodejs",
    name: "Curso completo de Typescript em NodeJs",
    desc: "TypeScript no Node.js na prática: tipos, interfaces, generics e um projeto com Fastify.",
    content: [
      {
        type: "video",
        name: "Curso completo de Typescript em NodeJs - por @rinckodev",
        url: "https://www.youtube.com/embed/4pIo-p6pX34"
      },
      {
        type: "video",
        name: "01 - Setup do projeto typescript - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/pFnxAakXUXI"
      },
      {
        type: "video",
        name: "01.2 - **UPDATED** TypeScript project setup (2026) - Complete TypeScript course in Node.js",
        url: "https://www.youtube.com/embed/nAva_j5wXVM"
      },
      {
        type: "video",
        name: "02 - O que é o typescript? - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/xHz3-mQMmUo"
      },
      {
        type: "video",
        name: "03 - Typescript is JavaScript! - Complete Typescript Course in NodeJS",
        url: "https://www.youtube.com/embed/9BBEv5ibNak"
      },
      {
        type: "video",
        name: "04 - Type anotations - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/fQxgKChQvt4"
      },
      {
        type: "video",
        name: "05 - Interface - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/YwtudT9ji0A"
      },
      {
        type: "video",
        name: "06 - Type alias - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/KVUo0ROPuBc"
      },
      {
        type: "video",
        name: "07 - Tuplas - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/tSskvyIYHIs"
      },
      {
        type: "video",
        name: "08 - Enum (Enumeration) - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/EfO9JwGA620"
      },
      {
        type: "video",
        name: "09 - Intersections (type intersection) - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/nSjDwCnmTMI"
      },
      {
        type: "video",
        name: "10 - Union types - Complete Typescript course in Node.js",
        url: "https://www.youtube.com/embed/PPK5wUVrKaU"
      },
      {
        type: "video",
        name: "11 - Function Typing - Complete TypeScript Course in Node.js",
        url: "https://www.youtube.com/embed/Xne-b7peCeo"
      },
      {
        type: "video",
        name: "12 - Classes com typescript - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/U_RNBSIit-w"
      },
      {
        type: "video",
        name: "13 - Overload - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/Th6XR3e6M1g"
      },
      {
        type: "video",
        name: "14 - Type guard - Complete Typescript course in Node.js",
        url: "https://www.youtube.com/embed/pC9tJOLSaGM"
      },
      {
        type: "video",
        name: "15 - Narrowing (Refinamento de tipos) - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/uFUuYmwwycE"
      },
      {
        type: "video",
        name: "16 - Tipos genéricos - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/XCDP-PvGFt8"
      },
      {
        type: "video",
        name: "17 - Records - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/jMLw_VIWzQA"
      },
      {
        type: "video",
        name: "18 - \"Anotation\", \"as\" e \"satisfies\" - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/OtukmmalKh4"
      },
      {
        type: "video",
        name: "19 - typeof - Complete Typescript course in Node.js",
        url: "https://www.youtube.com/embed/-148AKWEqdY"
      },
      {
        type: "video",
        name: "20 - keyof - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/sdB2VRWxgV4"
      },
      {
        type: "video",
        name: "21 - Tipagem condicional - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/kZyjVxL0nsY"
      },
      {
        type: "video",
        name: "22 - never - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/j2O7A4zkZAA"
      },
      {
        type: "video",
        name: "23 - readonly - Complete TypeScript course in Node.js",
        url: "https://www.youtube.com/embed/LN08k_IFgys"
      },
      {
        type: "video",
        name: "24 - as const - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/bKMav8BaAx0"
      },
      {
        type: "video",
        name: "25 - Pick - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/2UvBEd3Mztg"
      },
      {
        type: "video",
        name: "26 - Omit - Complete TypeScript course in Node.js",
        url: "https://www.youtube.com/embed/fyiI1uAlufg"
      },
      {
        type: "video",
        name: "27 - Partial - Complete TypeScript course in Node.js",
        url: "https://www.youtube.com/embed/t6NdS0Uk8RY"
      },
      {
        type: "video",
        name: "28 - Required - Complete TypeScript course in Node.js",
        url: "https://www.youtube.com/embed/Am6rTHg1FN0"
      },
      {
        type: "video",
        name: "29 - Exclude - Complete TypeScript course in Node.js",
        url: "https://www.youtube.com/embed/gPQWq9Iglr0"
      },
      {
        type: "video",
        name: "31 - NonNullable - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/em7Ir2bRwhA"
      },
      {
        type: "video",
        name: "30 - Extract - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/2Vb8C5-KnE0"
      },
      {
        type: "video",
        name: "32 - Mapped Types - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/kq-7J5w_LUA"
      },
      {
        type: "video",
        name: "33 - infer - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/IdW0Z9npMb8"
      },
      {
        type: "video",
        name: "34 - Tipagem recursiva - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/RYSgZjau1rw"
      },
      {
        type: "video",
        name: "35 - Modules in TypeScript - Complete TypeScript course in Node.js",
        url: "https://www.youtube.com/embed/bPTONsV6q0U"
      },
      {
        type: "video",
        name: "36 - declare e .d.ts - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/9CAcvhI5JV4"
      },
      {
        type: "video",
        name: "37 - Import aliases (import shortcuts/aliases) - Complete TypeScript course in Node.js",
        url: "https://www.youtube.com/embed/3txg1WdCp9w"
      },
      {
        type: "video",
        name: "38 - Criando um projeto de API com fastify - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/KGMcmEgTcpo"
      },
      {
        type: "video",
        name: "39 - Compilação typescript (build / transpilação) - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/5JDT_QrhB8c"
      },
      {
        type: "video",
        name: "40 - Concluindo (final) - Curso completo de Typescript em NodeJs",
        url: "https://www.youtube.com/embed/fVNYPH6PUwc"
      },
      {
        type: "video",
        name: "41 - Now Node.js runs TypeScript natively (.ts imports) - TypeScript course in Node.js",
        url: "https://www.youtube.com/embed/Hbxhl-Qm9-c"
      }
    ]
  },
  {
    id: "curso-de-lua",
    name: "Curso de Lua",
    desc: "De instalação a metatables: variáveis, funções e tables em Lua sem complicar.",
    content: [
      {
        type: "video",
        name: "Baixando Compilador LUA - Aprendendo a Programar com LUA - 00",
        url: "https://www.youtube.com/embed/xhH5-4S8uoU"
      },
      {
        type: "video",
        name: "Configurando Visual Studio Code Para LUA- Aprendendo a Programar com LUA - 01",
        url: "https://www.youtube.com/embed/83IwQ_Ya20M"
      },
      {
        type: "video",
        name: "Variáveis - Aprendendo a Programar com LUA - 02",
        url: "https://www.youtube.com/embed/zBq9TeLZSpQ"
      },
      {
        type: "video",
        name: "Expressões Relacionais e Logicas - Aprendendo a Programar com LUA - 03",
        url: "https://www.youtube.com/embed/RwuVtObTGuA"
      },
      {
        type: "video",
        name: "If & Else - Aprendendo a Programar com LUA - 04",
        url: "https://www.youtube.com/embed/huOWOPx9IGA"
      },
      {
        type: "video",
        name: "Funções - Aprendendo a Programar com LUA - 05",
        url: "https://www.youtube.com/embed/j8EgAh5DJO4"
      },
      {
        type: "video",
        name: "While - Aprendendo a Programar com LUA - 06",
        url: "https://www.youtube.com/embed/y0UJ14g_GsY"
      },
      {
        type: "video",
        name: "Tables - Array - Aprendendo a Programar com LUA - 07",
        url: "https://www.youtube.com/embed/ZpHGAeHtOZI"
      },
      {
        type: "video",
        name: "Tables - List - Aprendendo a Programar com LUA - 08#",
        url: "https://www.youtube.com/embed/yPTbivNzSaM"
      },
      {
        type: "video",
        name: "Require - Aprendendo a Programar com LUA",
        url: "https://www.youtube.com/embed/-OwrFqThfzE"
      },
      {
        type: "video",
        name: "Tables - Objetos - Aprendendo a Programar com LUA - 10#",
        url: "https://www.youtube.com/embed/gmoVDNeyQ2c"
      },
      {
        type: "video",
        name: "For - Aprendendo a Programar em LUA - 11",
        url: "https://www.youtube.com/embed/NtjI6qupD6M"
      },
      {
        type: "video",
        name: "Métodos - Aprendendo a Programar com Lua - 12",
        url: "https://www.youtube.com/embed/IleufoRX4WE"
      },
      {
        type: "video",
        name: "Eventos - Aprendendo a Programar com LUA - 13",
        url: "https://www.youtube.com/embed/AZTfGKn-EUI"
      },
      {
        type: "video",
        name: "Setmetatable - Aprendendo a Programar com LUA - 14",
        url: "https://www.youtube.com/embed/8EUw4piJdYE"
      },
      {
        type: "video",
        name: "Getmetatable - Aprendendo a Programar com Lua - 15",
        url: "https://www.youtube.com/embed/AJeY-AMk0KA"
      },
      {
        type: "video",
        name: "Lua __Index e Meta Métodos - Aprendendo a Programar com Lua",
        url: "https://www.youtube.com/embed/H5APATg-Vgw"
      }
    ]
  },
  {
    id: "curso-java-spring",
    name: "Curso Java e Spring",
    desc: "Spring Boot na prática: API REST, Spring Data JPA e segurança com Spring Security.",
    content: [
      {
        type: "video",
        name: "Curso Spring Boot: Criando sua primeira API REST do ZERO - Parte 1",
        url: "https://www.youtube.com/embed/YuzWGKSzEcE"
      },
      {
        type: "video",
        name: "Curso Spring Boot: Dominando o Spring Data JPA - Parte 2",
        url: "https://www.youtube.com/embed/XgfAabFGGj4"
      },
      {
        type: "video",
        name: "Spring Boot Course: Mastering Spring Security - Part 3",
        url: "https://www.youtube.com/embed/KYa4xQaQ7SU"
      }
    ]
  },
  {
    id: "curso-de-python",
    name: "Curso de Python",
    desc: "Python do básico ao avançado: tipos, módulos, loops, listas, tuplas e prática guiada.",
    content: [
      {
        type: "video",
        name: "Python Course #01 - Become a Programmer",
        url: "https://www.youtube.com/embed/S9uPNppGsGo"
      },
      {
        type: "video",
        name: "Python Course #02 - What is Python for?",
        url: "https://www.youtube.com/embed/Mp0vhMDI7fA"
      },
      {
        type: "video",
        name: "Curso Python #03 - Instalando o Python3 e o IDLE",
        url: "https://www.youtube.com/embed/VuKvR1J2LQE"
      },
      {
        type: "video",
        name: "Curso Python #04 - Primeiros comandos em Python3",
        url: "https://www.youtube.com/embed/31llNGKWDdo"
      },
      {
        type: "video",
        name: "Curso Python #05 - Instalando o PyCharm e o QPython3",
        url: "https://www.youtube.com/embed/ElRd0cbXIv4"
      },
      {
        type: "video",
        name: "Exercício Python #001 - Deixando tudo pronto",
        url: "https://www.youtube.com/embed/nIHq1MtJaKs"
      },
      {
        type: "video",
        name: "Exercício Python #002 - Respondendo ao Usuário",
        url: "https://www.youtube.com/embed/FNqdV5Zb_5Q"
      },
      {
        type: "video",
        name: "Python Course # 06 - Primitives Types and Data Output",
        url: "https://www.youtube.com/embed/hdDHg1p3YVc"
      },
      {
        type: "video",
        name: "Exercício Python #003 - Somando dois números",
        url: "https://www.youtube.com/embed/PB254Cfjlyk"
      },
      {
        type: "video",
        name: "Exercício Python #004 - Dissecando uma Variável",
        url: "https://www.youtube.com/embed/tHYxjJxtJko"
      },
      {
        type: "video",
        name: "Curso Python #07 - Operadores Aritméticos",
        url: "https://www.youtube.com/embed/Vw6gLypRKmY"
      },
      {
        type: "video",
        name: "Python Exercise # 005 - Predecessor and Successor",
        url: "https://www.youtube.com/embed/664e0G_S9nU"
      },
      {
        type: "video",
        name: "Exercício Python #006 - Dobro, Triplo, Raiz Quadrada",
        url: "https://www.youtube.com/embed/mqcNw_dhl8I"
      },
      {
        type: "video",
        name: "Exercício Python #007 - Média Aritmética",
        url: "https://www.youtube.com/embed/_QfISzy0IKs"
      },
      {
        type: "video",
        name: "Exercício Python #008 - Conversor de Medidas",
        url: "https://www.youtube.com/embed/KjcdG05EAZc"
      },
      {
        type: "video",
        name: "Exercício Python #009 - Tabuada",
        url: "https://www.youtube.com/embed/qajq3SI0QQs"
      },
      {
        type: "video",
        name: "Exercício Python #010 - Conversor de Moedas",
        url: "https://www.youtube.com/embed/xM4AX3Lp2mo"
      },
      {
        type: "video",
        name: "Exercício Python #011 - Pintando Parede",
        url: "https://www.youtube.com/embed/mzSJpn9ldt4"
      },
      {
        type: "video",
        name: "Exercício Python #012 - Calculando Descontos",
        url: "https://www.youtube.com/embed/4MAmKOT9FeU"
      },
      {
        type: "video",
        name: "Exercício Python #013 - Reajuste Salarial",
        url: "https://www.youtube.com/embed/cTkivN8XcJ0"
      },
      {
        type: "video",
        name: "Exercício Python #014 - Conversor de Temperaturas",
        url: "https://www.youtube.com/embed/9l_Gay8BuAw"
      },
      {
        type: "video",
        name: "Exercício Python #015 - Aluguel de Carros",
        url: "https://www.youtube.com/embed/I4NYUeetLAc"
      },
      {
        type: "video",
        name: "Curso Python #08 - Utilizando Módulos",
        url: "https://www.youtube.com/embed/oOUyhGNib2Q"
      },
      {
        type: "video",
        name: "Exercício Python #016 - Quebrando um número",
        url: "https://www.youtube.com/embed/-iSbDpl5Jhw"
      },
      {
        type: "video",
        name: "Exercício Python #017 - Catetos e Hipotenusa",
        url: "https://www.youtube.com/embed/vmPW9iWsYkY"
      },
      {
        type: "video",
        name: "Exercício Python #018 - Seno, Cosseno e Tangente",
        url: "https://www.youtube.com/embed/9GvsphwW26k"
      },
      {
        type: "video",
        name: "Exercício Python #019 - Sorteando um item na lista",
        url: "https://www.youtube.com/embed/_Nk02-mfB5I"
      },
      {
        type: "video",
        name: "Exercício Python #020 - Sorteando uma ordem na lista",
        url: "https://www.youtube.com/embed/OPh0nngbBSY"
      },
      {
        type: "video",
        name: "Exercício Python #021 - Tocando um MP3",
        url: "https://www.youtube.com/embed/9FiEji_fzvk"
      },
      {
        type: "video",
        name: "Curso Python #09 - Manipulating Text",
        url: "https://www.youtube.com/embed/a7DH88vk2Sk"
      },
      {
        type: "video",
        name: "Exercício Python #022 - Analisador de Textos",
        url: "https://www.youtube.com/embed/EQQt-6QqXOs"
      },
      {
        type: "video",
        name: "Exercício Python #023 - Separando dígitos de um número",
        url: "https://www.youtube.com/embed/wD2aerLMBWA"
      },
      {
        type: "video",
        name: "Exercício Python #024 - Verificando as primeiras letras de um texto",
        url: "https://www.youtube.com/embed/QroT8cZMRnc"
      },
      {
        type: "video",
        name: "Exercício Python #025 - Procurando uma string dentro de outra",
        url: "https://www.youtube.com/embed/WHWGz2Dy1ZU"
      },
      {
        type: "video",
        name: "Exercício Python #026 - Primeira e última ocorrência de uma string",
        url: "https://www.youtube.com/embed/23UOVEetNPY"
      },
      {
        type: "video",
        name: "Exercício Python #027 - Primeiro e último nome de uma pessoa",
        url: "https://www.youtube.com/embed/SifYYsXhLM8"
      },
      {
        type: "video",
        name: "Curso Python #10 - Condições (Parte 1)",
        url: "https://www.youtube.com/embed/K10u3XIf1-Q"
      },
      {
        type: "video",
        name: "Exercício Python #028 - Jogo da Adivinhação v.1.0",
        url: "https://www.youtube.com/embed/kchC5KLZSZ4"
      },
      {
        type: "video",
        name: "Exercício Python #029 - Radar eletrônico",
        url: "https://www.youtube.com/embed/hgJ_ETNGSj8"
      },
      {
        type: "video",
        name: "Exercício Python #030 - Par ou Ímpar?",
        url: "https://www.youtube.com/embed/4vFCzKuHOn4"
      },
      {
        type: "video",
        name: "Exercício Python #031 - Custo da Viagem",
        url: "https://www.youtube.com/embed/PGqHyzWoagc"
      },
      {
        type: "video",
        name: "Exercício Python #032 - Ano Bissexto",
        url: "https://www.youtube.com/embed/cyGY_83m4Xw"
      },
      {
        type: "video",
        name: "Exercício Python #033 - Maior e menor valores",
        url: "https://www.youtube.com/embed/a_8FbW5oH6I"
      },
      {
        type: "video",
        name: "Exercício Python #034 - Aumentos múltiplos",
        url: "https://www.youtube.com/embed/Sfadj_AzKHw"
      },
      {
        type: "video",
        name: "Exercício Python #035 - Analisando Triângulo v1.0",
        url: "https://www.youtube.com/embed/NZiNphKkxhg"
      },
      {
        type: "video",
        name: "Curso Python #11 - Cores no Terminal",
        url: "https://www.youtube.com/embed/0hBIhkcA8O8"
      },
      {
        type: "video",
        name: "Mundo 02 - Curso de Python - Dicas e Regras",
        url: "https://www.youtube.com/embed/nJkVHusJp6E"
      },
      {
        type: "video",
        name: "Curso Python #012 - Condições Aninhadas",
        url: "https://www.youtube.com/embed/j9bYDjaAYzw"
      },
      {
        type: "video",
        name: "Exercício Python #036 - Aprovando Empréstimo",
        url: "https://www.youtube.com/embed/IV13X0QOMU8"
      },
      {
        type: "video",
        name: "Exercício Python #037 - Conversor de Bases Numéricas",
        url: "https://www.youtube.com/embed/iuPbB9uHczM"
      },
      {
        type: "video",
        name: "Exercício Python #038 - Comparando números",
        url: "https://www.youtube.com/embed/ePwP4gU_waY"
      },
      {
        type: "video",
        name: "Exercício Python #039 - Alistamento Militar",
        url: "https://www.youtube.com/embed/QuWDyUeoaJs"
      },
      {
        type: "video",
        name: "Exercício Python #040 - Aquele clássico da Média",
        url: "https://www.youtube.com/embed/ZiC5NgSGJXU"
      },
      {
        type: "video",
        name: "Python Exercício #041 - Classificando Atletas",
        url: "https://www.youtube.com/embed/ZX7sCPjcHA0"
      },
      {
        type: "video",
        name: "Exercício Python #042 - Analisando Triângulos v2.0",
        url: "https://www.youtube.com/embed/b7r34za963I"
      },
      {
        type: "video",
        name: "Exercício Python #043 - Índice de Massa Corporal",
        url: "https://www.youtube.com/embed/I-SH3QchuZ4"
      },
      {
        type: "video",
        name: "Exercício Python #044 - Gerenciador de Pagamentos",
        url: "https://www.youtube.com/embed/tapTa6KVG-A"
      },
      {
        type: "video",
        name: "Exercício Python #045 - GAME: Pedra Papel e Tesoura",
        url: "https://www.youtube.com/embed/cL4YDtFnCt4"
      },
      {
        type: "video",
        name: "Curso Python #013 - Estrutura de repetição for",
        url: "https://www.youtube.com/embed/NR1RKt6NT8s"
      },
      {
        type: "video",
        name: "Exercício Python #046 - Contagem regressiva",
        url: "https://www.youtube.com/embed/Qws8-E-YrlY"
      },
      {
        type: "video",
        name: "Exercício Python #047 - Contagem de pares",
        url: "https://www.youtube.com/embed/iHjsUxNA-wo"
      },
      {
        type: "video",
        name: "Exercício Python #048 - Soma ímpares múltiplos de três",
        url: "https://www.youtube.com/embed/QtElJDa9ICM"
      },
      {
        type: "video",
        name: "Exercício Python #049 - Tabuada v.2.0",
        url: "https://www.youtube.com/embed/rJaBLOW57Jg"
      },
      {
        type: "video",
        name: "Exercício Python #050 - Soma dos pares",
        url: "https://www.youtube.com/embed/-OnqSGh0u4g"
      },
      {
        type: "video",
        name: "Exercício Python #051 - Progressão Aritmética",
        url: "https://www.youtube.com/embed/Er5Hyd4LyVw"
      },
      {
        type: "video",
        name: "Exercício Python #052 - Números primos",
        url: "https://www.youtube.com/embed/5VBWe6BXzRo"
      },
      {
        type: "video",
        name: "Exercício Python #053 - Detector de Palíndromo",
        url: "https://www.youtube.com/embed/IL5iBWoKRIs"
      },
      {
        type: "video",
        name: "Exercício Python #054 - Grupo da Maioridade",
        url: "https://www.youtube.com/embed/Kjpb_IAOKRQ"
      },
      {
        type: "video",
        name: "Exercício Python #055 - Maior e menor da sequência",
        url: "https://www.youtube.com/embed/fokDF4th0IY"
      },
      {
        type: "video",
        name: "Exercício Python #056 - Analisador completo",
        url: "https://www.youtube.com/embed/LH6OIn2lBaI"
      },
      {
        type: "video",
        name: "Curso Python #014 - Estrutura de repetição while",
        url: "https://www.youtube.com/embed/JGztEBLGj5E"
      },
      {
        type: "video",
        name: "Exercício Python #057 - Validação de Dados",
        url: "https://www.youtube.com/embed/-QkOIHJ1Chw"
      },
      {
        type: "video",
        name: "Exercício Python #058 - Jogo da Adivinhação v2.0",
        url: "https://www.youtube.com/embed/OBJL5vPj4-E"
      },
      {
        type: "video",
        name: "Exercício Python #059 - Criando um Menu de Opções",
        url: "https://www.youtube.com/embed/9dlBZlkvvxY"
      },
      {
        type: "video",
        name: "Exercício Python #060 - Cálculo do Fatorial",
        url: "https://www.youtube.com/embed/vu5ehetQGe8"
      },
      {
        type: "video",
        name: "Exercício Python #061 - Progressão Aritmética v2.0",
        url: "https://www.youtube.com/embed/BWAWq7n6PCk"
      },
      {
        type: "video",
        name: "Exercício Python #062 - Super Progressão Aritmética v3.0",
        url: "https://www.youtube.com/embed/w7yn1_Mfu0E"
      },
      {
        type: "video",
        name: "Exercício Python #063 - Sequência de Fibonacci v1.0",
        url: "https://www.youtube.com/embed/mYlbttiLHM0"
      },
      {
        type: "video",
        name: "Exercício Python #064 - Tratando vários valores v1.0",
        url: "https://www.youtube.com/embed/QNPuPlPM--0"
      },
      {
        type: "video",
        name: "Exercício Python #065 - Maior e Menor valores",
        url: "https://www.youtube.com/embed/1OFp_-R2B2A"
      },
      {
        type: "video",
        name: "Curso Python #15 - Interrompendo repetições while",
        url: "https://www.youtube.com/embed/d2ug6quC1bk"
      },
      {
        type: "video",
        name: "Exercício Python #066 - Vários números com flag",
        url: "https://www.youtube.com/embed/X0a5aZg93Uc"
      },
      {
        type: "video",
        name: "Exercício Python #067 - Tabuada v3.0",
        url: "https://www.youtube.com/embed/EIzgKCCDdc0"
      },
      {
        type: "video",
        name: "Exercício Python #068 - Jogo do Par ou Ímpar",
        url: "https://www.youtube.com/embed/4Ca6iRJo3M0"
      },
      {
        type: "video",
        name: "Exercício Python #069 - Análise de dados do grupo",
        url: "https://www.youtube.com/embed/hS8QdW-1HTo"
      },
      {
        type: "video",
        name: "Exercício Python #070 - Estatísticas em produtos",
        url: "https://www.youtube.com/embed/_XGgwltYpYk"
      },
      {
        type: "video",
        name: "Exercício Python #071 - Simulador de Caixa Eletrônico",
        url: "https://www.youtube.com/embed/0LB3FSfjvao"
      },
      {
        type: "video",
        name: "Curso Python #16 - Tuplas",
        url: "https://www.youtube.com/embed/ei2Kr3ccfO0"
      },
      {
        type: "video",
        name: "Exercício Python #072 - Número por Extenso",
        url: "https://www.youtube.com/embed/RexybLcGewA"
      },
      {
        type: "video",
        name: "Exercício Python #073 - Tuplas com Times de Futebol",
        url: "https://www.youtube.com/embed/mlwt2CRQkTQ"
      },
      {
        type: "video",
        name: "Exercício Python #074 - Maior e menor valores em Tupla",
        url: "https://www.youtube.com/embed/1u7oA8ckjAc"
      },
      {
        type: "video",
        name: "Exercício Python #075 - Análise de dados em uma Tupla",
        url: "https://www.youtube.com/embed/Qp2cXfCHk2I"
      },
      {
        type: "video",
        name: "Exercício Python #076 - Lista de Preços com Tupla",
        url: "https://www.youtube.com/embed/8BgSqrOpKvU"
      },
      {
        type: "video",
        name: "Curso Python #17 - Listas (Parte 1)",
        url: "https://www.youtube.com/embed/N1hTsbW50eM"
      },
      {
        type: "video",
        name: "Exercício Python #078 - Maior e Menor valores na Lista",
        url: "https://www.youtube.com/embed/q8Z1cRdJnfk"
      },
      {
        type: "video",
        name: "Exercício Python #079 - Valores únicos em uma Lista",
        url: "https://www.youtube.com/embed/LkAzRnc_GPk"
      },
      {
        type: "video",
        name: "Exercício Python #080 - Lista ordenada sem repetições",
        url: "https://www.youtube.com/embed/QDpwjBYRcVE"
      },
      {
        type: "video",
        name: "Exercício Python #081 - Extraindo dados de uma Lista",
        url: "https://www.youtube.com/embed/SXJKAVVlvGA"
      }
    ]
  },
  {
    id: "curso-algoritmos-logica",
    name: "Curso de Algoritmos e Lógica de Programação",
    desc: "Lógica de programação com Gustavo Guanabara: entrada e saída, condicionais, loops, funções, vetores e matrizes.",
    content: [
      {
        type: "video",
        name: "Introdução a Algoritmos - Curso de Algoritmos #01 - Gustavo Guanabara",
        url: "https://www.youtube.com/embed/8mei6uVttho"
      },
      {
        type: "video",
        name: "Primeiro Algoritmo - Curso de Algoritmos #02 - Gustavo Guanabara",
        url: "https://www.youtube.com/embed/M2Af7gkbbro"
      },
      {
        type: "video",
        name: "Comando de Entrada e Operadores - Curso de Algoritmos #03 - Gustavo Guanabara",
        url: "https://www.youtube.com/embed/RDrfZ-7WE8c"
      },
      {
        type: "video",
        name: "Operadores Lógicos e Relacionais - Curso de Algoritmos #04 - Gustavo Guanabara",
        url: "https://www.youtube.com/embed/Ig4QZNpVZYs"
      },
      {
        type: "video",
        name: "Introdução ao Scratch - Curso de Algoritmos #05 - Gustavo Guanabara",
        url: "https://www.youtube.com/embed/GrPkuk1ezyo"
      },
      {
        type: "video",
        name: "Exercícios de Algoritmo Resolvidos - Curso de Algoritmos #06 - Gustavo Guanabara",
        url: "https://www.youtube.com/embed/v2nCgGSVCeE"
      },
      {
        type: "video",
        name: "Estruturas Condicionais 1 - Curso de Algoritmos #07 - Gustavo Guanabara",
        url: "https://www.youtube.com/embed/_g05aHdBAEY"
      },
      {
        type: "video",
        name: "Estruturas Condicionais 2 - Curso de Algoritmos #08 - Gustavo Guanabara",
        url: "https://www.youtube.com/embed/7gGFHzqh4d8"
      },
      {
        type: "video",
        name: "Estruturas de Repetição 1 - Curso de Algoritmos #09 - Gustavo Guanabara",
        url: "https://www.youtube.com/embed/U5PnCt58Q68"
      },
      {
        type: "video",
        name: "Estruturas de Repetição 2 - Curso de Algoritmos #10 - Gustavo Guanabara",
        url: "https://www.youtube.com/embed/fP49L1i_-HU"
      },
      {
        type: "video",
        name: "Estruturas de Repetição 3 - Curso de Algoritmos #11 - Gustavo Guanabara",
        url: "https://www.youtube.com/embed/WJQz20i7CyI"
      },
      {
        type: "video",
        name: "Procedimentos - Curso de Algoritmos #12 - Gustavo Guanabara",
        url: "https://www.youtube.com/embed/KoNehy7rn8U"
      },
      {
        type: "video",
        name: "Funções - Curso de Algoritmos #13 - by Gustavo Guanabara",
        url: "https://www.youtube.com/embed/-nNx7e8GzHQ"
      },
      {
        type: "video",
        name: "Vetores - Curso de Algoritmos #14 - Gustavo Guanabara",
        url: "https://www.youtube.com/embed/j9473xQ39vY"
      },
      {
        type: "video",
        name: "Matrizes - Curso de Algoritmos #15 - Gustavo Guanabara",
        url: "https://www.youtube.com/embed/hkE9WrjpAAk"
      },
      {
        type: "video",
        name: "Dia do Programador: alguns GRANDES Programadores da História",
        url: "https://www.youtube.com/embed/uZImRLpJunA"
      }
    ]
  },
  {
    id: "Carreira-e-mercado-de-trabalho",
    name: "Carreira e mercado de trabalho",
    desc: "Entenda o mercado de tecnologia e planeje seus próximos passos na carreira.",
    content: [
      {
        type: "video",
        name: "3 Provas de que você está PRONTO(A) para ser FREELANCER (e 1 coisa que fiz errado!!!)",
        url: "https://www.youtube.com/embed/wxhW8ys0pB8?si=GgueSZ50tvUf50hP"
      },
      {
        type: "video",
        name: "COMO SE TORNAR UM FREELANCER (e ganhar dinheiro sem trabalho duro!!!)ACERTOS NA MINHA CARREIRA EM TI QUE ACONSELHO MUITO!!!",
        url: "https://www.youtube.com/embed/97yZhj1Qwoo?si=s7AYGB2LKgztXjKX"
      },
      {
        type: "video",
        name: "SAIU A LISTA: 40 profissões mais impactadas pela inteligência artificial!",
        url: "https://www.youtube.com/embed/OJVfJIA1V4o?si=sBrQ7snhcC-VOmvK"
      },
      {
        type: "video",
        name: "O que realmente faz um projeto pessoal se destacar no mercado de tech?",
        url: "https://www.youtube.com/embed/KoJrulmzJ98?si=75IBYJQQtyRG4w8N"
      },
      {
        type: "video",
        name: "O Método Japonês para Resolver Qualquer Problema na Sua Vida | Teoria + Prática",
        url: "https://www.youtube.com/embed/Gua9CFW_QyQ?si=pgy1jv1fvdl3mEAd"
      },
      {
        type: "video",
        name: "Você tem o perfil pra trabalhar com TI? Descubra agora",
        url: "https://www.youtube.com/embed/zO4TP_MzBeA?si=OnVIvPlqNux7hO34"
      },
      {
        type: "video",
        name: "tudo o que eu faria diferente na minha carreira hoje",
        url: "https://www.youtube.com/embed/bQXzClDuVDQ?si=p9LOn--T6YNmicWn"
      },
      {
        type: "video",
        name: "TUDO O QUE VOCÊ PRECISA SABER ANTES DE TRABALHAR COMO FREELANCER",
        url: "https://www.youtube.com/embed/hIUqKQ2j6bQ?si=7qdDTewzfLZ7X9UY"
      },
      {
        type: "video",
        name: "Como ganhar DINHEIRO com TI ALÉM do CLT | Crie uma RENDA EXTRA!",
        url: "https://www.youtube.com/embed/zXxbdBAqGGQ?si=FokgESHVGcvRQm_2"
      },
      {
        type: "video",
        name: "Como conseguir o primeiro emprego como dev",
        url: "https://www.youtube.com/embed/17P-YBJUK04"
      },
      {
        type: "video",
        name: "CIÊNCIA DA COMPUTAÇÃO: tudo que ninguém te conta sobre o curso (matérias, dificuldade, mercado, ead)",
        url: "https://www.youtube.com/embed/ynFUoy5XG0I"
      },
      {
        type: "video",
        name: "Vale a pena ser programador na era da IA em 2026 | Impactos da inteligência artificial para devs",
        url: "https://www.youtube.com/embed/O14AzplhCD0"
      }
    ]
  },
  {
    id: "dicas-de-estudo-e-motivacao",
    name: "dicas e motivação",
    desc: "Como manter foco, disciplina e motivação pra não parar no meio do caminho.",
    content: [
      {
        type: "video",
        name: "COMO ESTUDAR E TRABALHAR SEM PERDER O FOCO | MUZY CORTES",
        url: "https://www.youtube.com/embed/PWkNNqBF30w?si=36j_6UEFnlU_mvsm"
      },
      {
        type: "video",
        name: "3 PRINCIPAIS MÉTODOS que EU USO para ESTUDAR",
        url: "https://www.youtube.com/embed/DT0cBQAy_l8?si=ehq_O62RpbZ0RSou"
      },
      {
        type: "video",
        name: "ISSO VAI MUDAR SEU JEITO DE ESTUDAR (DICAS DE MESTRE COM TDAH)",
        url: "https://www.youtube.com/embed/OTzb2zFTBlk?si=qmlzEhPvM61cNKMA"
      },
      {
        type: "video",
        name: "VOLTEI A ESTUDAR!",
        url: "https://www.youtube.com/embed/1jYYhAK94MU?si=se439ManBvEjbob0"
      },
      {
        type: "video",
        name: "COMO SE MANTER HIPER FOCADO EM UM MUNDO REPLETO DE DISTRAÇÕES",
        url: "https://www.youtube.com/embed/2Fxo-79zlE4?si=3R94AM6vDypMdgXO"
      },
      {
        type: "video",
        name: "3 técnicas indicadas por cientistas para qualquer pessoa melhorar nos estudos",
        url: "https://www.youtube.com/embed/posTc56basM?si=MH-02z9gdJ5g2uy3"
      },
      {
        type: "video",
        name: "Como se lembrar DE TUDO igual os estudantes japoneses (estude menos de vdd)",
        url: "https://www.youtube.com/embed/PhdYyQrlVKc?si=NsS9179NzVmTwnX2"
      },
      {
        type: "video",
        name: "MOTIVAÇÃO PARA APROVAÇÃO EM CONCURSO",
        url: "https://www.youtube.com/embed/YCYOrvwuZDM?si=oQb6yiHnaEFwqzr7"
      },
      {
        type: "video",
        name: "COMO ESTUDAR MENOS E APRENDER MAIS 📈 | Matemática em Evidência",
        url: "https://www.youtube.com/embed/k9G0BskezvQ"
      },
      {
        type: "video",
        name: "COMO MONTAR UM ROTINA DE ESTUDOS FLEXÍVEL | Matemática em Evidência",
        url: "https://www.youtube.com/embed/Y5gCFOzV6so"
      },
      {
        type: "video",
        name: "EU SÓ COMECEI A TER BONS RESULTADOS NOS ESTUDOS QUANDO EU ENTENDI ISSO... | Matemática em Evidência",
        url: "https://www.youtube.com/embed/a3hpzETjAVE"
      },
      {
        type: "video",
        name: "UM DESABAFO SOBRE SOLIDÃO NOS ESTUDOS... | Matemática em Evidência",
        url: "https://www.youtube.com/embed/NC6CnA-6Ynk"
      },
      {
        type: "video",
        name: "COMO MONTAR UMA ROTINA FLEXÍVEL | CICLO DE ESTUDOS | Matemática em Evidência",
        url: "https://www.youtube.com/embed/AjU0UmGHm2Q"
      },
      {
        type: "video",
        name: "AS 8 DICAS ESSENCIAIS QUE TODO ESTUDANTE INICIANTE PRECISA OUVIR | Matemática em Evidência",
        url: "https://www.youtube.com/embed/p2dnSWx5000"
      },
      {
        type: "video",
        name: "15 CONSELHOS QUE EU QUERIA TER ESCUTADO AO INICIAR NOS ESTUDOS... | Matemática em Evidência",
        url: "https://www.youtube.com/embed/0w6X5IYXoME"
      },
      {
        type: "video",
        name: "COMO TER CONSTÂNCIA NOS ESTUDOS | AS 7 DICAS FUNDAMENTAIS | Matemática em Evidência",
        url: "https://www.youtube.com/embed/SvdvpiGzoW8"
      },
      {
        type: "video",
        name: "COMO ESTUDAR UM MATERIAL GIGANTESCO EM MENOS DE 24H | Matemática em Evidência",
        url: "https://www.youtube.com/embed/xvWD_dUJHtY"
      },
      {
        type: "video",
        name: "OS MELHORES MÉTODOS DE ESTUDO | RANKING 100% SINCERO | Matemática em Evidência",
        url: "https://www.youtube.com/embed/6Zb6UKdft6o"
      },
      {
        type: "video",
        name: "COMO ORGANIZAR OS ESTUDOS PARA 2022 EM 6 MINUTOS! (GUIA COMPLETO) | Matemática em Evidência",
        url: "https://www.youtube.com/embed/XL5_hRSp4es"
      },
      {
        type: "video",
        name: "NUNCA MAIS ESQUEÇA O QUE ESTUDOU! | O MÉTODO MAIS EFICAZ DE REVISÃO | Matemática em Evidência",
        url: "https://www.youtube.com/embed/XjuD9NHzKBs"
      },
      {
        type: "video",
        name: "10 CONSELHOS QUE EU DARIA PRA MIM MESMO QUANDO INICIEI NOS ESTUDOS | Matemática em Evidência",
        url: "https://www.youtube.com/embed/5X4guzGb634"
      },
      {
        type: "video",
        name: "SE TORNAR INTELIGENTE É RIDICULAMENTE FÁCIL (SEM MEME) | Matemática em Evidência",
        url: "https://www.youtube.com/embed/x2Cp7jcxrI8"
      },
      {
        type: "video",
        name: "COMO ESTUDAR OUVINDO MÚSICA | ESTUDE SEM FICAR ENTEDIADO! | Matemática em Evidência",
        url: "https://www.youtube.com/embed/QOFnEjzUzig"
      },
      {
        type: "video",
        name: "10 COISAS QUE TODO ESTUDANTE DEVERIA FAZER MAS NÃO FAZ | Matemática em Evidência",
        url: "https://www.youtube.com/embed/PPvU2n_1XDU"
      },
      {
        type: "video",
        name: "8 HÁBITOS QUE TE TORNARÃO UM ESTUDANTE ALTAMENTE EFICAZ | Matemática em Evidência",
        url: "https://www.youtube.com/embed/j7vfR2Pa1lw"
      },
      {
        type: "video",
        name: "5 CONSELHOS QUE EU GOSTARIA DE TER OUVIDO DURANTE AS FÉRIAS ESCOLARES | Matemática em Evidência",
        url: "https://www.youtube.com/embed/Qv4vfsMGQU4"
      },
      {
        type: "video",
        name: "um vídeo para diminuir o amargor da sua vida | Matemática em Evidência",
        url: "https://www.youtube.com/embed/YNoR0ImtheA"
      },
      {
        type: "video",
        name: "O PLANO PARA QUEM ATRASOU",
        url: "https://www.youtube.com/embed/aNlas1Imk7k"
      },
      {
        type: "video",
        name: "AS 3 BARREIRAS QUE MAIS TE ATRASAM",
        url: "https://www.youtube.com/embed/Ep9hMpGI4L0"
      },
      {
        type: "video",
        name: "O HACK DOS ALUNOS INTELIGENTES",
        url: "https://www.youtube.com/embed/DjErht-a1yo"
      },
      {
        type: "video",
        name: "PREGUIA DE ESTUDAR ? FACA ISSO E MELHORE AINDA HOJE",
        url: "https://www.youtube.com/embed/ynjRgP-jqlU"
      },
      {
        type: "video",
        name: "Como criar uma ROTINA DE ESTUDOS NA PROGRAMACAO para 2024 | Trello",
        url: "https://www.youtube.com/embed/AFV07J5XdI0"
      }
    ]
  },
  {
    id: "curso-completo-react",
    name: "Curso de React",
    desc: "React do zero: componentes, JSX, props, estado e interfaces modernas.",
    content: [
      {
        type: "video",
        name: "React Course - [Part 1]",
        url: "https://www.youtube.com/embed/DxfHxJ5m0N8"
      },
      {
        type: "video",
        name: "React Course - [Part 2]",
        url: "https://www.youtube.com/embed/m-2ACqXnZkI"
      },
      {
        type: "video",
        name: "React Course - [Part 3]",
        url: "https://www.youtube.com/embed/BzCOoBMAS0Q"
      },
      {
        type: "video",
        name: "React Course - [Part 4]",
        url: "https://www.youtube.com/embed/_CKvXAxDun4"
      },
      {
        type: "video",
        name: "React Course - [Part 5]",
        url: "https://www.youtube.com/embed/qH6oKSzG7gA"
      },
      {
        type: "video",
        name: "React Course - [Part 6]",
        url: "https://www.youtube.com/embed/cNhLPMXgKlQ"
      },
      {
        type: "video",
        name: "React Course - [Part 7]",
        url: "https://www.youtube.com/embed/uxPnoH9YwPw"
      },
      {
        type: "video",
        name: "React Course - [Part 8]",
        url: "https://www.youtube.com/embed/rDL4QOTYtMo"
      },
      {
        type: "video",
        name: "React Course - [Part 9]",
        url: "https://www.youtube.com/embed/tCaWpiu-75Q"
      },
      {
        type: "video",
        name: "React Course - [Part 10]",
        url: "https://www.youtube.com/embed/U8z_v3VXr4E"
      },
      {
        type: "video",
        name: "React Course - [Part 11]",
        url: "https://www.youtube.com/embed/cevgE1edWQI"
      },
      {
        type: "video",
        name: "React Course - [Part 12]",
        url: "https://www.youtube.com/embed/M_CjmG6qYCA"
      },
      {
        type: "video",
        name: "React Course - [Part 13]",
        url: "https://www.youtube.com/embed/Qn5hQhSCVLc"
      },
      {
        type: "video",
        name: "React Course - [Part 14]",
        url: "https://www.youtube.com/embed/a-2Oqd98H4g"
      },
      {
        type: "video",
        name: "React Course - [Part 15]",
        url: "https://www.youtube.com/embed/JsaqX_qFHFk"
      },
      {
        type: "video",
        name: "React Course - [Part 16]",
        url: "https://www.youtube.com/embed/Boql1Uh2WKs"
      },
      {
        type: "video",
        name: "React Course - [Part 17]",
        url: "https://www.youtube.com/embed/lm5LDsep4V4"
      },
      {
        type: "video",
        name: "React Course - [Part 18]",
        url: "https://www.youtube.com/embed/G249W26-z2Q"
      },
      {
        type: "video",
        name: "React Course - [Part 19]",
        url: "https://www.youtube.com/embed/dWDV2sv_-zk"
      },
      {
        type: "video",
        name: "React Course - [Part 20]",
        url: "https://www.youtube.com/embed/ce1ptCYZHD8"
      },
      {
        type: "video",
        name: "React Course - [Part 21]",
        url: "https://www.youtube.com/embed/WmzNEaoJRw8"
      },
      {
        type: "video",
        name: "React Course - [Part 22]",
        url: "https://www.youtube.com/embed/jAPvNaZBb1Q"
      },
      {
        type: "video",
        name: "React Course - [Part 23]",
        url: "https://www.youtube.com/embed/UHGyjZOQoqA"
      },
      {
        type: "video",
        name: "React Course - [Part 24]",
        url: "https://www.youtube.com/embed/g-XCMSW6Ww4"
      },
      {
        type: "video",
        name: "React Course - [Part 25]",
        url: "https://www.youtube.com/embed/tMv6POMgV2I"
      },
      {
        type: "video",
        name: "React Course - [Part 26]",
        url: "https://www.youtube.com/embed/GKyEqhiXOKk"
      },
      {
        type: "video",
        name: "React Course - [Part 27]",
        url: "https://www.youtube.com/embed/iASN2sO0JZI"
      },
      {
        type: "video",
        name: "React Course - [Part 28]",
        url: "https://www.youtube.com/embed/C2l-BSos4Vs"
      },
      {
        type: "video",
        name: "React Course - [Part 29]",
        url: "https://www.youtube.com/embed/ObMUWdqtiCc"
      },
      {
        type: "video",
        name: "React Course - [Part 30]",
        url: "https://www.youtube.com/embed/Wg31HcsaZNo"
      },
      {
        type: "video",
        name: "React Course - [Part 31]",
        url: "https://www.youtube.com/embed/yo28qr5v84k"
      },
      {
        type: "video",
        name: "React Course - [Part 32]",
        url: "https://www.youtube.com/embed/IGDYRwSHrqM"
      },
      {
        type: "video",
        name: "React Course - [Part 33]",
        url: "https://www.youtube.com/embed/ADcj12KVPoc"
      },
      {
        type: "video",
        name: "React Course - [Part 34]",
        url: "https://www.youtube.com/embed/wN7Bn8G6jNQ"
      },
      {
        type: "video",
        name: "React Course - [Part 35]",
        url: "https://www.youtube.com/embed/T7IL4o0OYqQ"
      },
      {
        type: "video",
        name: "React Course - [Part 36]",
        url: "https://www.youtube.com/embed/Xmauodz05f4"
      },
      {
        type: "video",
        name: "React Course - [Part 37]",
        url: "https://www.youtube.com/embed/QdyRCRlVCLA"
      }
    ]
  },
  {
    id: "pre-calculo-ime-usp",
    name: "Pré-Cálculo IME USP",
    desc: "Fundações de matemática pra programação: funções, polinômios, logaritmos e matrizes.",
    content: [
      {
        type: "video",
        name: "Curso de Pré-Cálculo 2026 - Aula 01 (14h) - Introdução ao Cálculo, Produtos Notáveis e Fatoração",
        url: "https://www.youtube.com/embed/5xUYAvOVUSE"
      },
      {
        type: "video",
        name: "Curso de Pré-Cálculo 2026 - Aula 03 (14h) - Funções (teoria e classificações)",
        url: "https://www.youtube.com/embed/beupyYbseZk"
      },
      {
        type: "video",
        name: "Curso de Pré-Cálculo 2026 - Aula 04 (14h) - Polinômios e Números Complexos",
        url: "https://www.youtube.com/embed/3jXZMnsDBfQ"
      },
      {
        type: "video",
        name: "Curso de Pré-Cálculo 2026 - Aula 05 (14h) - Inequações e Exercícios",
        url: "https://www.youtube.com/embed/NO1IfW1hph8"
      },
      {
        type: "video",
        name: "Curso de Pré-Cálculo 2026 - Aula 06 (17h) - Exponenciação e Logaritmos",
        url: "https://www.youtube.com/embed/iPBdoQ92dts"
      },
      {
        type: "video",
        name: "Curso de Pré-Cálculo 2026 - Aula 08 (14h)",
        url: "https://www.youtube.com/embed/CRLv6l2xaKQ"
      },
      {
        type: "video",
        name: "Curso de Pré-Cálculo 2026 - Aula 08 (17h) - Matrizes, Determinantes e Sistemas Lineares",
        url: "https://www.youtube.com/embed/O9ga2kGqgtI"
      },
      {
        type: "video",
        name: "Curso de Pré-Cálculo 2026 - Aula 09 (14h) - Geometria Analítica (Retas e Circunferência)",
        url: "https://www.youtube.com/embed/Asg_96z2Tv4"
      },
      {
        type: "video",
        name: "Curso de Pré-Cálculo 2026 - Aula 09 (17h) - Geometria Analítica (Retas e Circunferência)",
        url: "https://www.youtube.com/embed/BxCnEa0yyQw"
      }
    ]
  },
  {
    id: "crud-angular-spring",
    name: "CRUD Angular + Spring",
    desc: "Construa um CRUD completo com Angular e Spring: formulários, API REST, validação e paginação.",
    content: [
      {
        type: "video",
        name: "CRUD Angular + Spring | 01 - Introduction",
        url: "https://www.youtube.com/embed/qJnjz8FIs6Q"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 02 - Project Overview and Installing Angular Material",
        url: "https://www.youtube.com/embed/PqVuSKCk_OU"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 03 - Creating a Toolbar on the Main Page",
        url: "https://www.youtube.com/embed/N4uIR7jgFGA"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 04 - Criando o Módulo de Cursos e Usando Roteamento com Lazy Loading",
        url: "https://www.youtube.com/embed/5QHAtRyiPQ4"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 05 - Customizando o Tema do Angular Material",
        url: "https://www.youtube.com/embed/VnJdZ_od0wY"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 06 - Criando Material Table para Listar Cursos",
        url: "https://www.youtube.com/embed/LvYXiOh3vZ4"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 07 - Material Table CSS and Creating a Material App Module",
        url: "https://www.youtube.com/embed/jjv5YZhPjfc"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 08 - Criando um Service no Angular",
        url: "https://www.youtube.com/embed/76fUSr1nSDM"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 09 - HTTP GET Call in Angular and RXJS",
        url: "https://www.youtube.com/embed/LUUn1BWIUA8"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 10 - Lista de Cursos: Spinner (Carregando)",
        url: "https://www.youtube.com/embed/vOz_o7oYv9I"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 11 - Lista de Cursos: Tratamento de Erros e MatDialog",
        url: "https://www.youtube.com/embed/gi0ZJ8-r6IM"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 12 - Lista de Cursos: Pipe para mostrar ícone",
        url: "https://www.youtube.com/embed/uNFIh3jvp34"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 13: Ambiente Java + Maven para Spring",
        url: "https://www.youtube.com/embed/Ge7Em4byou8"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 14: Hello World com Spring",
        url: "https://www.youtube.com/embed/-UpIRFONkjs"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 15: Listar Cursos (API HTTP GET)",
        url: "https://www.youtube.com/embed/w2xOL_yW8Tc"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 16: Banco de Dados H2 e Conectando o Angular na API Spring",
        url: "https://www.youtube.com/embed/ATjHgBh8dWg"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 17: Update da Versão Angular (ng update) e Spring",
        url: "https://www.youtube.com/embed/OBU_K7jq0nM"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 18: Componente de Formulário e Roteamento para criar cursos",
        url: "https://www.youtube.com/embed/9_02JxDn_AM"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 19: Formulário para Criar Cursos",
        url: "https://www.youtube.com/embed/R3yy3RX4FyM"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 20: Formulário: Salvando os dados com HTTP POST + tratamento de erros",
        url: "https://www.youtube.com/embed/xLhNxqEQnLo"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 21: Form: Spring API: Create Course (HTTP POST)",
        url: "https://www.youtube.com/embed/R9thmwiG2ns"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 22: Update para o Angular v14",
        url: "https://www.youtube.com/embed/oEawp1Ey3TI"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 23: Angular Typed Forms",
        url: "https://www.youtube.com/embed/9q4tNVeUAao"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 24: Refatoração Angular Material Table",
        url: "https://www.youtube.com/embed/tOIp89BBHgw"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 25: Smart Components vs. Presentation Components",
        url: "https://www.youtube.com/embed/3rVmS6psL_U"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 26: API Spring: Buscar por ID",
        url: "https://www.youtube.com/embed/v4fZYldQeBo"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 27: Atualizar Curso - Angular Resolver: Buscar por ID",
        url: "https://www.youtube.com/embed/hx35MhRjrr4"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 28: Update Course: Populating the Form",
        url: "https://www.youtube.com/embed/uZwqA1DZXMU"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 29: Atualizar Curso: Salvando o Formulário",
        url: "https://www.youtube.com/embed/8q36rNS5yVo"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 30: Atualizar Curso: API Spring HTTP PUT",
        url: "https://www.youtube.com/embed/1OGfOwK8B7U"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 31: Remover Curso: API Spring HTTP DELETE",
        url: "https://www.youtube.com/embed/t_fBHydsEHw"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 32: Remover Curso",
        url: "https://www.youtube.com/embed/sTvmdIC__38"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 33: Dialog de Confirmação",
        url: "https://www.youtube.com/embed/jMuAviiUGPc"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 34: Validações de Formulário no Front-end",
        url: "https://www.youtube.com/embed/As70gDHoagE"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 35: Validações da API com Java Bean Validation",
        url: "https://www.youtube.com/embed/Tm6ycFeavGA"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 36: Remoção Lógica (Soft Delete)",
        url: "https://www.youtube.com/embed/-EYXYci9kVI"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 37: Spring Boot 3 (Spring 6)",
        url: "https://www.youtube.com/embed/j0UW1Pppfts"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 38: Upgrade Angular v15 com Angular Material",
        url: "https://www.youtube.com/embed/LDqfe2HK3kM"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 39: Adicionando Camada de Serviço na API",
        url: "https://www.youtube.com/embed/Vn2b2D-77bo"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 40: Tratando Exceções com Controller Advice",
        url: "https://www.youtube.com/embed/L6wR2DhORrg"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 41: Padrão DTO (Data Transfer Object)",
        url: "https://www.youtube.com/embed/xeOBISdqTQc"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 42: Padrão Mapper",
        url: "https://www.youtube.com/embed/2GTgDLkDWPQ"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 43: Persistência de Enums no JPA",
        url: "https://www.youtube.com/embed/1d1JbwJ_Py4"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 44: Persistência de Enums no JPA (parte 2)",
        url: "https://www.youtube.com/embed/GJ0krClAmPs"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 45: Curso-Aulas: OneToMany",
        url: "https://www.youtube.com/embed/Nb4uxLxdvxo"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 46: Curso-Aulas: Listando Aulas",
        url: "https://www.youtube.com/embed/ZLpyS4qqEZE"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 47: Curso-Aulas: Aula DTO",
        url: "https://www.youtube.com/embed/hRgEjn2TGCQ"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 48: Curso-Aulas: Interface Aulas",
        url: "https://www.youtube.com/embed/HKFrz5P8D0g"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 49: Course-Lessons: FormArray",
        url: "https://www.youtube.com/embed/q4P5UGisG2U"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 50: Curso-Aulas: FormArray HTML",
        url: "https://www.youtube.com/embed/OsIquz5_UNY"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 51: Course Lessons: Adding and Removing Lessons",
        url: "https://www.youtube.com/embed/Fj3Zvf-N4bk"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 52: Curso-Aulas: Validação do FormArray",
        url: "https://www.youtube.com/embed/7kVoTBZg4JM"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 53: Classe Utilitária para Validação de Formulários",
        url: "https://www.youtube.com/embed/cwbDuTxbxmA"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 54: Using Utility Class in FormArray",
        url: "https://www.youtube.com/embed/GK22hYKZ1kM"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 55: API para Criar e Editar Aulas",
        url: "https://www.youtube.com/embed/X4dvEdhHFXY"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 56: Erros de Validação da API",
        url: "https://www.youtube.com/embed/Lr3d6QhZGlU"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 57: Validando Enums com Java Bean Validations",
        url: "https://www.youtube.com/embed/_rLUoNwPaGc"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 58: Paginação no Spring",
        url: "https://www.youtube.com/embed/APKaYEKtJoQ"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 59: MySQL + Spring Docker Compose",
        url: "https://www.youtube.com/embed/UeIb1xTlYJM"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 60: Angular Material Paginator",
        url: "https://www.youtube.com/embed/KKdZSIIHTX4"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 61: Migração Angular v15 para v17",
        url: "https://www.youtube.com/embed/emRpYOvSY2M"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 62: Migration to Standalone Components",
        url: "https://www.youtube.com/embed/tE3uKdPd6tQ"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 63: Novo Control Flow do Angular",
        url: "https://www.youtube.com/embed/4onmPIRH1KM"
      },
      {
        type: "video",
        name: "CRUD Angular + Spring | 64: Study Tips and Conclusion",
        url: "https://www.youtube.com/embed/9MSa6KEEoN4"
      }
    ]
  },
  {
    id: "algebra-linear-1",
    name: "Álgebra Linear 1",
    desc: "Álgebra Linear 1 com o Prof. Claudio Possani (USP): vetores, matrizes e espaços vetoriais.",
    content: [
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 1",
        url: "https://www.youtube.com/embed/-JcQJFNVjaA"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 2",
        url: "https://www.youtube.com/embed/A7hwTnMmW_s"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 3",
        url: "https://www.youtube.com/embed/iaMTWxAS8FA"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 4",
        url: "https://www.youtube.com/embed/s2-JsZ9lqik"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 5",
        url: "https://www.youtube.com/embed/pCiXN-Tv4ws"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 6",
        url: "https://www.youtube.com/embed/YvbMICRHt7w"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 7",
        url: "https://www.youtube.com/embed/Hd--TEyYB5Y"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 8",
        url: "https://www.youtube.com/embed/SJluqRqHmss"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 9",
        url: "https://www.youtube.com/embed/6dSJViDpe8U"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear - Aula 10",
        url: "https://www.youtube.com/embed/jwnS3bPn0zg"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 11",
        url: "https://www.youtube.com/embed/1_pZ3C84JsU"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 12",
        url: "https://www.youtube.com/embed/iSzRjrEEWsI"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 13",
        url: "https://www.youtube.com/embed/RswSNr9jOLY"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 14",
        url: "https://www.youtube.com/embed/yX8LBubhTJE"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 15",
        url: "https://www.youtube.com/embed/v80av6PH6ls"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 16",
        url: "https://www.youtube.com/embed/W9v4ALFfgjc"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 18",
        url: "https://www.youtube.com/embed/lsrQcnmt7Pw"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 19",
        url: "https://www.youtube.com/embed/3suEs11W6a4"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 20",
        url: "https://www.youtube.com/embed/QCijNiH7ywQ"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 21",
        url: "https://www.youtube.com/embed/wR3-xbXzuvc"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 22",
        url: "https://www.youtube.com/embed/_XPIcck8-vI"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 23",
        url: "https://www.youtube.com/embed/RtM-iHgHplA"
      },
      {
        type: "video",
        name: "MAT3457 - Álgebra Linear 1 - Aula 24",
        url: "https://www.youtube.com/embed/GLGIUXii0zU"
      }
    ]
  },
  {
    id: "calculo-1",
    name: "Cálculo I",
    desc: "Cálculo I: limites, derivadas, integrais e aplicações, do zero.",
    content: [
      {
        type: "link",
        name: "📁 Material de Apoio - Listas de Exercícios e Anotações",
        url: "https://drive.google.com/drive/folders/1Q18jdLPZBcSrbTd-pSFSM3hxfEL0YxAZ"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 1 (1/3) - Panorama do Cálculo Diferencial e Integral",
        url: "https://www.youtube.com/embed/WgHUHPlJETs"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 1 (2/3) - Panorama do Cálculo Diferencial e Integral",
        url: "https://www.youtube.com/embed/nKua7iJK2WQ"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 1 (3/3) Panorama do Cálculo Diferencial e Integral",
        url: "https://www.youtube.com/embed/aQSoCjHVNKc"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 2 (1/3) Continuidade e Limites I: Mais intuição que formalismo",
        url: "https://www.youtube.com/embed/ilZC6iMNM-I"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 2 (2/3) Continuidade e Limites I: Mais intuição que formalismo",
        url: "https://www.youtube.com/embed/0QA1FPiN-XU"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 2 (3/3) Continuidade e Limites I: Mais intuição que formalismo",
        url: "https://www.youtube.com/embed/kCRJyiZoXSg"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 3 (1/3) - Continuidade e Limites II: Alguns resultados importantes",
        url: "https://www.youtube.com/embed/KrWmmvayDOY"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 3 (2/3) - Continuidade e Limites II: Alguns resultados importantes",
        url: "https://www.youtube.com/embed/fbrIsCCowUg"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 3 (3/3) Continuidade e Limites II: Alguns resultados importantes",
        url: "https://www.youtube.com/embed/kLj-u2xEDG0"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 4 (1/3) Cálculo de Limites e Propriedades",
        url: "https://www.youtube.com/embed/oxfFtzDsLy4"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 4 (2/3) : Limites  Laterais",
        url: "https://www.youtube.com/embed/jkIkvkmlJ54"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 4 (3/3)  Limites no Infinito",
        url: "https://www.youtube.com/embed/iE6zC3bT2vo"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 5 (1/3) Limites Infinitos, Propriedades e Exemplos",
        url: "https://www.youtube.com/embed/uRsEH6FEoqI"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 5 (2/3)  Limites: Teorema do Confronto e Consequências",
        url: "https://www.youtube.com/embed/gLdYM1mtdKU"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 5 (3/3) Limites - Teorema do Confronto e Consequências",
        url: "https://www.youtube.com/embed/dOMtlkKtCzQ"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 6 (1/3) Continuidade das funções trigonométricas",
        url: "https://www.youtube.com/embed/G6wCnibmY9M"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 6 (2/3)  Limite Trigonométrico Fundamental e Aplicações",
        url: "https://www.youtube.com/embed/XfzlgM845Qc"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 6 (3/3) Derivadas: definição, propriedades e alguns primeiros exemplos.",
        url: "https://www.youtube.com/embed/8t5IE7BGKUU"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 7 (1/3) Aproximação da função por sua reta tangente em um ponto",
        url: "https://www.youtube.com/embed/B2fJry2Ih2Y"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 7 (2/3) Regras de derivação e exemplos",
        url: "https://www.youtube.com/embed/hTQxTA7fqtw"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 7 (3/3) Regras de Derivação e Exemplos",
        url: "https://www.youtube.com/embed/k0eUDfTakIE"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 8 (1/3) Derivadas de funções inversas",
        url: "https://www.youtube.com/embed/XbUSK49mOEQ"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 8 (2/3) Derivadas de funções inversas e funções dadas implicitamente",
        url: "https://www.youtube.com/embed/8wItjvqynC4"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 8 (3/3) Notações e Derivadas de ordem superior",
        url: "https://www.youtube.com/embed/7PV_FLPYUeQ"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 9 (1/3) Funções inversas",
        url: "https://www.youtube.com/embed/Gop_dmZu7bo"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 9 (2/3) Taxas Relacionadas",
        url: "https://www.youtube.com/embed/eHs5EbGwShY"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 9 (3/3) Taxas Relacionadas: mais exemplos",
        url: "https://www.youtube.com/embed/Beqg0JLePew"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 10 (1/3) Limites e Derivadas: Exercícios",
        url: "https://www.youtube.com/embed/Xdat6VRMuIE"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 10 (2/3) Limites e Derivadas: Exercícios",
        url: "https://www.youtube.com/embed/KYuqbUPUB1A"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 10 (3/3) Limites e Derivadas: Exercícios",
        url: "https://www.youtube.com/embed/1KceV6dSy94"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 11 (1/3) Limites e Derivadas: Exercícios",
        url: "https://www.youtube.com/embed/rlyacFHR-PY"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 11 (2/3) Limites e Derivadas: Exercícios",
        url: "https://www.youtube.com/embed/YqzUrlRgKgM"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 11 (3/3) Limites e Derivadas: Exercícios",
        url: "https://www.youtube.com/embed/3-5BQSo3ZeI"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 12 (1/3) Limites e Derivadas: Exercícios",
        url: "https://www.youtube.com/embed/OWEiX0EFipI"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 12 (2/3) Limites e Derivadas: Exercícios",
        url: "https://www.youtube.com/embed/SJjbkHraC5w"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 12  (3/3) Limites e Derivadas: Exercícios",
        url: "https://www.youtube.com/embed/72doxLO8tf4"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 13 (1/3) Funções exponenciais e logarítmicas; o número e",
        url: "https://www.youtube.com/embed/52Wb_huJ0Pc"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 13 (2/3) Derivadas das funções exponenciais e logarítmicas; sequências.",
        url: "https://www.youtube.com/embed/Ax53USQv_cM"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 13 (3/3) Mais sequências e a existência de e",
        url: "https://www.youtube.com/embed/ls67oSbVqOA"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 14 (1/3) Existência de e; derivada de f(x)^g(x)",
        url: "https://www.youtube.com/embed/69kI4OJYbUk"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 14 (2/3) Teorema do Valor Intermediário",
        url: "https://www.youtube.com/embed/RLqMZPyeVZI"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 14 (3/3) \"Máximos e mínimos: teorema de Weierstrass\"",
        url: "https://www.youtube.com/embed/TrjbOGW76os"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 15 (1/3) Teoremas do Valor Intermediário, Weierstrass e Fermat: interações",
        url: "https://www.youtube.com/embed/yFP6ENUPi-s"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 15 (2/3) Teorema de Fermat e Exemplos",
        url: "https://www.youtube.com/embed/VE7gSDBzjGc"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 15 (3/3) Teoremas de Rolle e do Valor Médio: enunciados e interpretações",
        url: "https://www.youtube.com/embed/uJwwgyJZ4FM"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 16 (1/3) Teorema do Valor Médio: consequências e aplicações",
        url: "https://www.youtube.com/embed/2_Wac3faA7c"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 16 (2/3) Teorema do Valor Médio: crescimento de funções",
        url: "https://www.youtube.com/embed/auxoggKAk5Y"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 16 (3/3) Teorema do Valor Médio: crescimento de funções",
        url: "https://www.youtube.com/embed/R92lpPw28qw"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 17 (1/3) Concavidade e inflexão: segunda derivada",
        url: "https://www.youtube.com/embed/u_G7ZX3TSMo"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 17 (2/3) Concavidade e inflexão: exemplos",
        url: "https://www.youtube.com/embed/4IkP9t7erV0"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 17 (3/3) Regras de L'Hospital: conceito, cuidados e exemplos",
        url: "https://www.youtube.com/embed/6t77dhmaIBk"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 18 (1/3) Regras de L'Hospital: exemplos",
        url: "https://www.youtube.com/embed/bVLWSs5kq3o"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 18 (2/3) Esboço de gráficos",
        url: "https://www.youtube.com/embed/V-W392JPn9g"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 18 (3/3) Esboço de gráficos: exemplos e assíntotas",
        url: "https://www.youtube.com/embed/iIUj8AhG-UE"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 19 (1/3) Assíntotas: um exemplo",
        url: "https://www.youtube.com/embed/NSPWxvrpJL4"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 19 (2/3) Assíntotas: outro exemplo",
        url: "https://www.youtube.com/embed/qSfFJQVlYeE"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 19 (3/3) O retorno dos máximos e mínimos",
        url: "https://www.youtube.com/embed/Uy0vxqJ6SXs"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 20 (1/3) Problemas de otimização",
        url: "https://www.youtube.com/embed/2myFQaIiMac"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 20 (2/3) Polinômios de Taylor: Preliminares",
        url: "https://www.youtube.com/embed/kUcfj46eKfo"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 20 (3/3) Polinômios de Taylor de ordem 1",
        url: "https://www.youtube.com/embed/8eDuxoRJW9s"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 21 (1/3) Polinômios de Taylor de ordem 2",
        url: "https://www.youtube.com/embed/dnGnL87OtNI"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 21 (2/3) Polinômios de Taylor de ordem n",
        url: "https://www.youtube.com/embed/zRsmdkc2vXA"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 21 (3/3) Polinômios (quase séries) de Taylor",
        url: "https://www.youtube.com/embed/pn0NmHnSO0M"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 22 (1/3) Unicidade do polinômio de Taylor; Exercícios",
        url: "https://www.youtube.com/embed/eVgxj-ZMzdM"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 22 (2/3) Derivadas e aplicações: exercícios",
        url: "https://www.youtube.com/embed/3K30K2tMTW4"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 22 (3/3) Derivadas e aplicações: exercícios",
        url: "https://www.youtube.com/embed/ZV4ttYGVcL8"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 23 (1/3) Derivadas e aplicações: exercícios",
        url: "https://www.youtube.com/embed/fWn6BEYaS3k"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 23 (2/3) Derivadas e aplicações: exercícios",
        url: "https://www.youtube.com/embed/DJwhtCWQRpY"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 23 (3/3) Derivadas e aplicações: exercícios",
        url: "https://www.youtube.com/embed/_FQWywPdJvU"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 24 (1/3) Derivadas e aplicações: exercícios",
        url: "https://www.youtube.com/embed/KlH_drg-LNk"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 24 (2/3) Derivadas e aplicações: exercícios",
        url: "https://www.youtube.com/embed/dE6IZL_EaYY"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 24 (3/3) Derivadas e aplicações: exercícios",
        url: "https://www.youtube.com/embed/ZXhXQIbnrAo"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 25 (1/3) Integral de Riemann: construção do conceito",
        url: "https://www.youtube.com/embed/5T3XUtRtsX8"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 25 (2/3) Integral de Riemann: propriedades e áreas",
        url: "https://www.youtube.com/embed/9W49euBM0KE"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 25 (3/3) Integral de Riemann: o Teorema Fundamental do Cálculo",
        url: "https://www.youtube.com/embed/kbo0Co6oMVM"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 26 (1/3) Teorema Fundamental do Cálculo: exemplos; Existência de primitivas",
        url: "https://www.youtube.com/embed/045rSkkHGvU"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 26 (2/3) Método da substituição/mudança de variável",
        url: "https://www.youtube.com/embed/PA9Z9cWnZ_o"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 26 (3/3) Exemplos de substituição",
        url: "https://www.youtube.com/embed/R2FC55Gtu54"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 27 (1/3) Integração por partes",
        url: "https://www.youtube.com/embed/w47sIdDh6rk"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 27 (2/3) Exemplos de integração por partes",
        url: "https://www.youtube.com/embed/3iy_T8FDup4"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 27 (3/3) Mais exemplos e potências de senos com cossenos",
        url: "https://www.youtube.com/embed/m-4zC9ZbP-4"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 28 (1/3) Mais produtos trigonométricos e frações parciais",
        url: "https://www.youtube.com/embed/Aj4B8aslG2I"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 28 (2/3) Exemplos com frações parciais",
        url: "https://www.youtube.com/embed/hvjGb9vtc7Q"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 28 (3/3) Exemplo com frações parciais; Volumes",
        url: "https://www.youtube.com/embed/0da_2CNS3Hs"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 29 (1/3) Sólidos de Rotação: volumes e um pouco de áreas",
        url: "https://www.youtube.com/embed/JblKT8hmqdg"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 29 (2/3) Sólidos de Rotação: áreas",
        url: "https://www.youtube.com/embed/jeSF7BOL2tA"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 29 (3/3) Comentários gerais e comprimento de gráficos",
        url: "https://www.youtube.com/embed/Pa1JhQdDALc"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 30 (1/3) Cálculo de algumas primitivas",
        url: "https://www.youtube.com/embed/eDuc5JrLh5Q"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 30 (2/3) Mais primitivas (mudança u=tg(x/2)) e funções dadas por integrais",
        url: "https://www.youtube.com/embed/0hEhQoIWPiY"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 30 (3/3) Funções dadas por integrais",
        url: "https://www.youtube.com/embed/jGH6G9A7XbA"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 31 (1/3) Derivando funções dadas por integrais",
        url: "https://www.youtube.com/embed/XQkG62lHi4M"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 31 (2/3) Volumes por fatiamento",
        url: "https://www.youtube.com/embed/-CqvvjMIVTI"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 31 (3/3) Integrais impróprias: intervalos ilimitados",
        url: "https://www.youtube.com/embed/jbcbVCNsXyc"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 32 (1/3) Funções dadas por integrais impróprias",
        url: "https://www.youtube.com/embed/HcnTc_e1wXE"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 32 (2/3) Integrais impróprias: intervalos ilimitados; Convergência",
        url: "https://www.youtube.com/embed/zUgAQD2TCsI"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 32 (3/3) Convergência de integrais impróprias; aproximação de integrais",
        url: "https://www.youtube.com/embed/95_meqsk3vg"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 33 (1/3) Polinômios de Taylor através de progressões geométricas",
        url: "https://www.youtube.com/embed/Z8B4d_2qOSg"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 33 (2/3) Integração: Exercícios",
        url: "https://www.youtube.com/embed/ukprTbUITHo"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 33 (3/3) Integração: Exercícios",
        url: "https://www.youtube.com/embed/9ez3Q15_puE"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 34 (1/3) ) Integração - o volume do toro",
        url: "https://www.youtube.com/embed/Qa16IeGJZiQ"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 34 (2/3) Integração - mais exercícios",
        url: "https://www.youtube.com/embed/gs-0iLnO50s"
      },
      {
        type: "video",
        name: "Cálculo I - Aula 34 (3/3) Integração - mais exercícios",
        url: "https://www.youtube.com/embed/jbCa26K80iY"
      }
    ]
  },
  {
    id: "calculo-2",
    name: "Cálculo II",
    desc: "Cálculo II: funções de várias variáveis, derivadas parciais e otimização.",
    content: [
      {
        type: "video",
        name: "Polinômios de Taylor, funções de uma variável real (Tópico 1)",
        url: "https://www.youtube.com/embed/lQdzRBRL9Tw"
      },
      {
        type: "video",
        name: "Fórmula de Taylor com resto de Lagrange de Funções de uma variável (Tópico 2, parte 1)",
        url: "https://www.youtube.com/embed/rzuY_L8ag2M"
      },
      {
        type: "video",
        name: "Fórmula de Taylor com resto de Lagrange de Funções de uma variável (Tópico 2, parte 2)",
        url: "https://www.youtube.com/embed/nV0YeH4QaLo"
      },
      {
        type: "video",
        name: "Fórmula de Taylor com resto de Lagrange de Funções de uma variável (Tópico 2, parte 3)",
        url: "https://www.youtube.com/embed/vRLzlgt01sk"
      },
      {
        type: "video",
        name: "Curvas planas: equações paramétricas e vetor tangente (Tópico 3, parte 1)",
        url: "https://www.youtube.com/embed/A_PIIDItrBc"
      },
      {
        type: "video",
        name: "Curvas planas: equações paramétricas e vetor tangente (Tópico 3, parte 2)",
        url: "https://www.youtube.com/embed/BMfK3zze7fA"
      },
      {
        type: "video",
        name: "Curvas planas: equações paramétricas e vetor tangente (Tópico 3, parte 3)",
        url: "https://www.youtube.com/embed/ueNy2UgUX_o"
      },
      {
        type: "video",
        name: "Funções de duas variáveis reais a valores reais: gráfico e curvas de nível (Tópico 4, parte 1)",
        url: "https://www.youtube.com/embed/2ddgsYYPaeg"
      },
      {
        type: "video",
        name: "Funções de duas variáveis reais a valores reais: gráfico e curvas de nível (Tópico 4, parte 2)",
        url: "https://www.youtube.com/embed/OwQ2vSDCR6c"
      },
      {
        type: "video",
        name: "Funções de duas variáveis reais a valores reais: gráfico e curvas de nível (Tópico 4, parte 3)",
        url: "https://www.youtube.com/embed/5OZ-IbICMGc"
      },
      {
        type: "video",
        name: "Cálculo de limites de funções de duas variáveis (Tópico 5, parte 1)",
        url: "https://www.youtube.com/embed/nz-ssZWxz6w"
      },
      {
        type: "video",
        name: "Cálculo de limites de funções de duas variáveis (Tópico 5, parte 2)",
        url: "https://www.youtube.com/embed/DNjMLOs2UC4"
      },
      {
        type: "video",
        name: "Cálculo de limites de funções de duas variáveis (Tópico 5, parte 3)",
        url: "https://www.youtube.com/embed/nOPK6CubFtE"
      },
      {
        type: "video",
        name: "Cálculo de limites de funções de duas variáveis (Tópico 5, parte 4)",
        url: "https://www.youtube.com/embed/DQ11oOm_s3E"
      },
      {
        type: "video",
        name: "Cálculo de limites de funções de duas variáveis (Tópico 5, parte 5)",
        url: "https://www.youtube.com/embed/X_VfVMj9eik"
      },
      {
        type: "video",
        name: "Cálculo de limites de funções de duas variáveis (Tópico 5, parte 6)",
        url: "https://www.youtube.com/embed/TKSoYEC1ODo"
      },
      {
        type: "video",
        name: "Resolução de problemas e exercícios da lista 1 (Tópico 6, parte 1)",
        url: "https://www.youtube.com/embed/c8F8-iAsy84"
      },
      {
        type: "video",
        name: "Resolução de problemas e exercícios da lista 1 (Tópico 7, parte 2)",
        url: "https://www.youtube.com/embed/3lKDYhlABpc"
      },
      {
        type: "video",
        name: "Resolução de problemas e exercícios da lista 1 II (Tópico 8, parte 1)",
        url: "https://www.youtube.com/embed/dfBszI2BSBE"
      },
      {
        type: "video",
        name: "Resolução de problemas e exercícios da lista 1 II (Tópico 8, parte 2)",
        url: "https://www.youtube.com/embed/AwBt5LCOOTk"
      },
      {
        type: "video",
        name: "Resolução de problemas e exercícios da lista 1 II (Tópico 8, parte 3)",
        url: "https://www.youtube.com/embed/pqc5RI2gniE"
      },
      {
        type: "video",
        name: "Derivadas Parciais (Tópico 9, parte 1)",
        url: "https://www.youtube.com/embed/dPgt7dDoLhA"
      },
      {
        type: "video",
        name: "Derivadas Parciais (Tópico 9, parte 2)",
        url: "https://www.youtube.com/embed/lCrBaypZJHk"
      },
      {
        type: "video",
        name: "Derivadas Parciais (Tópico 9, parte 3)",
        url: "https://www.youtube.com/embed/kFQoEoUpyww"
      },
      {
        type: "video",
        name: "Diferenciabilidade de funções de duas variáveis (Tópico 10, parte 1)",
        url: "https://www.youtube.com/embed/Zqd4PhUVtio"
      },
      {
        type: "video",
        name: "Diferenciabilidade de funções de duas variáveis (Tópico 10, parte 2)",
        url: "https://www.youtube.com/embed/zMOfZLNyiT8"
      },
      {
        type: "video",
        name: "Diferenciabilidade de funções de duas variáveis (Tópico 10, parte 3)",
        url: "https://www.youtube.com/embed/Qb8qSZOMyFw"
      },
      {
        type: "video",
        name: "Condições suficientes para que uma função de duas variáveis seja diferenciável (Tópico 11, parte 1)",
        url: "https://www.youtube.com/embed/V3Abl3nTk4E"
      },
      {
        type: "video",
        name: "Condições suficientes para que uma função de duas variáveis seja diferenciável (Tópico 11, parte 2)",
        url: "https://www.youtube.com/embed/-aEgqHlGKb4"
      },
      {
        type: "video",
        name: "Regra da Cadeia Gradiente (Tópico 12, parte 1)",
        url: "https://www.youtube.com/embed/BWGvPBS2QOw"
      },
      {
        type: "video",
        name: "Regra da Cadeia Gradiente (Tópico 12, parte 2)",
        url: "https://www.youtube.com/embed/_gvxJAudsWo"
      },
      {
        type: "video",
        name: "Regra da Cadeia Gradiente (Tópico 12, parte 3)",
        url: "https://www.youtube.com/embed/4AddFcbXfqY"
      },
      {
        type: "video",
        name: "Regra da Cadeia. Derivadas parciais de ordem superior (Tópico 13, parte 1)",
        url: "https://www.youtube.com/embed/4eFFW-mZmTU"
      },
      {
        type: "video",
        name: "Regra da Cadeia Derivadas parciais de ordem superior (Tópico 13, parte 2)",
        url: "https://www.youtube.com/embed/hAGbHk8ucZo"
      },
      {
        type: "video",
        name: "Regra da Cadeia Derivadas parciais de ordem superior (Tópico 13, parte 3)",
        url: "https://www.youtube.com/embed/cX5mKe9s460"
      },
      {
        type: "video",
        name: "Vetor gradiente e derivada direcional de uma função de duas variáveis (Tópico 14, parte 1)",
        url: "https://www.youtube.com/embed/GOTY9Datrec"
      },
      {
        type: "video",
        name: "Vetor gradiente e derivada direcional de uma função de duas variáveis (Tópico 14, parte 2)",
        url: "https://www.youtube.com/embed/E4VfHZZuUM4"
      },
      {
        type: "video",
        name: "Vetor gradiente e derivada direcional de uma função de duas variáveis (Tópico 14, parte 3)",
        url: "https://www.youtube.com/embed/5A5grEuOaMM"
      },
      {
        type: "video",
        name: "Exercícios: propriedades do gradiente e regra da cadeia (Tópico 15, parte 1)",
        url: "https://www.youtube.com/embed/z-0khGRb_AE"
      },
      {
        type: "video",
        name: "Exercícios: propriedades do gradiente e regra da cadeia (Tópico 15, parte 2)",
        url: "https://www.youtube.com/embed/vDSg54obDGs"
      },
      {
        type: "video",
        name: "Exercícios: propriedades do gradiente e regra da cadeia (Tópico 15, parte 3)",
        url: "https://www.youtube.com/embed/o4y63UCfYm8"
      },
      {
        type: "video",
        name: "Exercícios (Tópico 16, parte 1)",
        url: "https://www.youtube.com/embed/1tDPIWG5qtc"
      },
      {
        type: "video",
        name: "Exercícios (Tópico 16, parte 2)",
        url: "https://www.youtube.com/embed/KPip6L81FQg"
      },
      {
        type: "video",
        name: "Funções de 3 variáveis e superfícies de nível (Tópico 17, parte 1)",
        url: "https://www.youtube.com/embed/Gksfr0uJzsA"
      },
      {
        type: "video",
        name: "Funções de 3 variáveis e superfícies de nível (Tópico 17, parte 2)",
        url: "https://www.youtube.com/embed/BdG7ky8ilss"
      },
      {
        type: "video",
        name: "Funções de 3 variáveis e superfícies de nível (Tópico 17, parte 3)",
        url: "https://www.youtube.com/embed/HnlPnqmNLD4"
      },
      {
        type: "video",
        name: "Funções de 3 variáveis: superfícies de nível e vetor gradiente (Tópico 18, parte 1)",
        url: "https://www.youtube.com/embed/CH_MQ7vxIkA"
      },
      {
        type: "video",
        name: "Funções de 3 variáveis: superfícies de nível e vetor gradiente (Tópico 18, parte 2)",
        url: "https://www.youtube.com/embed/xZEuC4vZOpo"
      },
      {
        type: "video",
        name: "Funções de 3 variáveis: superfícies de nível e vetor gradiente (Tópico 18, parte 3)",
        url: "https://www.youtube.com/embed/qPwk0Oy9BWA"
      },
      {
        type: "video",
        name: "Máximos e mínimos de funções de duas variáveis definidas em conjuntos (Tópico 19, parte 1)",
        url: "https://www.youtube.com/embed/J66K5FJBPOM"
      },
      {
        type: "video",
        name: "Máximos e mínimos de funções de duas variáveis definidas em conjuntos (Tópico 19, parte 2)",
        url: "https://www.youtube.com/embed/HHe4tz4XX4s"
      },
      {
        type: "video",
        name: "Máximos e mínimos de funções de duas variáveis definidas em conjuntos (Tópico 19, parte 3)",
        url: "https://www.youtube.com/embed/CoZcYDYW4E8"
      },
      {
        type: "video",
        name: "Máximos e mínimos. Multiplicadores de Lagrange (Tópico 20, parte 1)",
        url: "https://www.youtube.com/embed/RCYBZw_5eBQ"
      },
      {
        type: "video",
        name: "Máximos e mínimos. Multiplicadores de Lagrange (Tópico 20, parte 2)",
        url: "https://www.youtube.com/embed/Xl4Vgas5uJ4"
      },
      {
        type: "video",
        name: "Máximos e mínimos. Multiplicadores de Lagrange (Tópico 20, parte 3)",
        url: "https://www.youtube.com/embed/XGrgI02NbgI"
      },
      {
        type: "video",
        name: "Método dos Multiplicadores de Lagrange para 2 e 3 variáveis (Tópico 21, parte 1)",
        url: "https://www.youtube.com/embed/Py9PeEYvdn4"
      },
      {
        type: "video",
        name: "Método dos Multiplicadores de Lagrange para 2 e 3 variáveis (Tópico 21, parte 2)",
        url: "https://www.youtube.com/embed/RLdDPpDi7SY"
      },
      {
        type: "video",
        name: "Método dos Multiplicadores de Lagrange para 2 e 3 variáveis (Tópico 21, parte 3)",
        url: "https://www.youtube.com/embed/oC3jsXJKAIk"
      },
      {
        type: "video",
        name: "Método dos Multiplicadores de Lagrange com duas restrições (Tópico 22, parte 1)",
        url: "https://www.youtube.com/embed/90oRabEXfU8"
      },
      {
        type: "video",
        name: "Método dos Multiplicadores de Lagrange com duas restrições (Tópico 22, parte 2)",
        url: "https://www.youtube.com/embed/ukyPnwZIF-c"
      },
      {
        type: "video",
        name: "Método dos Multiplicadores de Lagrange com duas restrições (Tópico 22, parte 3)",
        url: "https://www.youtube.com/embed/0XcNYPZwUhE"
      },
      {
        type: "video",
        name: "Condições necessárias para um ponto ser de máximo ou de mínimo local (Tópico 23, parte 1)",
        url: "https://www.youtube.com/embed/e3InsGUTlEY"
      },
      {
        type: "video",
        name: "Condição suficiente para um ponto crítico ser de máximo ou de mínimo local (Tópico 23, parte 2)",
        url: "https://www.youtube.com/embed/LH8Q_gjbIGY"
      },
      {
        type: "video",
        name: "Condição suficiente para um ponto crítico ser de máximo ou de mínimo local (Tópico 23, parte 3)",
        url: "https://www.youtube.com/embed/GcMykB43_1M"
      },
      {
        type: "video",
        name: "Exercícios (Tópico 24, parte 1)",
        url: "https://www.youtube.com/embed/MphHeFq-rBw"
      },
      {
        type: "video",
        name: "Exercícios (Tópico 24, parte 2)",
        url: "https://www.youtube.com/embed/orhrMl55CsE"
      },
      {
        type: "video",
        name: "Resolução de exercícios da lista 3 (Tópico 25, parte 1)",
        url: "https://www.youtube.com/embed/jl0V_jFXuSE"
      },
      {
        type: "video",
        name: "Resolução de exercícios da lista 3 (Tópico 25, parte 2)",
        url: "https://www.youtube.com/embed/R2jjPMmOwzc"
      },
      {
        type: "video",
        name: "Resolução de exercícios da lista 3 (Tópico 25, parte 3)",
        url: "https://www.youtube.com/embed/pym3eQMm3n4"
      },
      {
        type: "video",
        name: "Revisão do Teorema de Weierstrass e exercícios (Tópico 26)",
        url: "https://www.youtube.com/embed/KI0t8BceVak"
      }
    ]
  },
  {
    id: "calculo-3",
    name: "Cálculo III",
    desc: "Cálculo III: integrais múltiplas, de linha e de superfície, com teoremas de Green e Gauss.",
    content: [
      {
        type: "video",
        name: "Integrais Duplas: Introdução (Tópico 1, parte 1)",
        url: "https://www.youtube.com/embed/8mBTfk7s63s"
      },
      {
        type: "video",
        name: "Integrais Duplas: Introdução (Tópico 1, parte 2)",
        url: "https://www.youtube.com/embed/wtE15tImppc"
      },
      {
        type: "video",
        name: "Integrais Duplas: Introdução (Tópico 1, parte 3)",
        url: "https://www.youtube.com/embed/_xRVPnLCics"
      },
      {
        type: "video",
        name: "Teorema de Fubini (Tópico 2, parte 1)",
        url: "https://www.youtube.com/embed/zojjmZhXtLk"
      },
      {
        type: "video",
        name: "Teorema de Fubini (Tópico 2, parte 2)",
        url: "https://www.youtube.com/embed/MLO3f22Z7sc"
      },
      {
        type: "video",
        name: "Teorema de Fubini (Tópico 2, parte 3)",
        url: "https://www.youtube.com/embed/Rv_xEzNTk2w"
      },
      {
        type: "video",
        name: "Integrais Iteradas. Teorema de Fubini (Tópico 3, parte 1)",
        url: "https://www.youtube.com/embed/DJuBwQ5GnVE"
      },
      {
        type: "video",
        name: "Integrais Iteradas. Teorema de Fubini (Tópico 3, parte 2)",
        url: "https://www.youtube.com/embed/bHFW8ocFI8o"
      },
      {
        type: "video",
        name: "Integrais Iteradas. Teorema de Fubini (Tópico 3, parte 3)",
        url: "https://www.youtube.com/embed/MK3GFJub5iQ"
      },
      {
        type: "video",
        name: "Integrais Iteradas. Teorema de Fubini (Tópico 3, parte 4)",
        url: "https://www.youtube.com/embed/_f0T4XVtvEo"
      },
      {
        type: "video",
        name: "Mudança de variáveis na integral dupla (Tópico 4, parte 1)",
        url: "https://www.youtube.com/embed/-rGfJCkSzlQ"
      },
      {
        type: "video",
        name: "Mudança de variáveis na integral dupla (Tópico 4, parte 2)",
        url: "https://www.youtube.com/embed/5oKzW1WaiAU"
      },
      {
        type: "video",
        name: "Mudança de variáveis na integral dupla (Tópico 4, parte 3)",
        url: "https://www.youtube.com/embed/buB9X9WfTPs"
      },
      {
        type: "video",
        name: "Mudança de variáveis na integral dupla (Tópico 4, parte 4)",
        url: "https://www.youtube.com/embed/ZSNgDr6duOU"
      },
      {
        type: "video",
        name: "Mudança de variáveis na integral dupla (Tópico 4, parte 5)",
        url: "https://www.youtube.com/embed/4zSwz6maKKM"
      },
      {
        type: "video",
        name: "Mudança de variáveis na integral dupla (Tópico 4, parte 6)",
        url: "https://www.youtube.com/embed/f0VRgp5n5RQ"
      },
      {
        type: "video",
        name: "Mudança de variáveis na integral dupla (Tópico 4, parte 7)",
        url: "https://www.youtube.com/embed/Gaj12X0E6dc"
      },
      {
        type: "video",
        name: "Integrais triplas (Tópico 5, parte 1)",
        url: "https://www.youtube.com/embed/kBN593NWzwg"
      },
      {
        type: "video",
        name: "Integrais triplas (Tópico 5, parte 2)",
        url: "https://www.youtube.com/embed/LNKNAjbxTSg"
      },
      {
        type: "video",
        name: "Integrais triplas (Tópico 5, parte 3)",
        url: "https://www.youtube.com/embed/Dz4pxX5Amjk"
      },
      {
        type: "video",
        name: "Mudança de variáveis na integral tripla (Tópico 6, parte 1)",
        url: "https://www.youtube.com/embed/zM5KbtkQCZQ"
      },
      {
        type: "video",
        name: "Mudança de variáveis na integral tripla (Tópico 6, parte 2)",
        url: "https://www.youtube.com/embed/rbTqQmJ5z6M"
      },
      {
        type: "video",
        name: "Mudança de variáveis na integral tripla (Tópico 6, parte 3)",
        url: "https://www.youtube.com/embed/G4FJh2bf3KM"
      },
      {
        type: "video",
        name: "Mudança de variáveis na integral tripla (Tópico 6, parte 4)",
        url: "https://www.youtube.com/embed/BqganOoOg04"
      },
      {
        type: "video",
        name: "Mudança de variáveis na integral tripla (Tópico 6, parte 5)",
        url: "https://www.youtube.com/embed/KSPj3hWzn8c"
      },
      {
        type: "video",
        name: "Integrais de linha (Tópico 7, parte 1)",
        url: "https://www.youtube.com/embed/E0WaAGGsk1g"
      },
      {
        type: "video",
        name: "Integrais de linha (Tópico 7, parte 2)",
        url: "https://www.youtube.com/embed/7CPHG5wOAS8"
      },
      {
        type: "video",
        name: "Integrais de linha (Tópico 7, parte 3)",
        url: "https://www.youtube.com/embed/e98sr5Y_aBU"
      },
      {
        type: "video",
        name: "Integrais de linha (Tópico 7, parte 4)",
        url: "https://www.youtube.com/embed/y0wrRXQYy6U"
      },
      {
        type: "video",
        name: "Revisão e complementação (Tópico 8, parte 1)",
        url: "https://www.youtube.com/embed/8NkOi9B8EV0"
      },
      {
        type: "video",
        name: "Revisão e complementação (Tópico 8, parte 2)",
        url: "https://www.youtube.com/embed/5o_JUDleFZg"
      },
      {
        type: "video",
        name: "Revisão e complementação (Tópico 8, parte 3)",
        url: "https://www.youtube.com/embed/gHFulhUfLIk"
      },
      {
        type: "video",
        name: "Revisão e complementação (Tópico 8, parte 4)",
        url: "https://www.youtube.com/embed/uoav0NrPjr4"
      },
      {
        type: "video",
        name: "Revisão e complementação (Tópico 8, parte 5)",
        url: "https://www.youtube.com/embed/frSl49vxy5g"
      },
      {
        type: "video",
        name: "Revisão e complementação (Tópico 8, parte 6)",
        url: "https://www.youtube.com/embed/_FCsVusohzE"
      },
      {
        type: "video",
        name: "Revisão e complementação (Tópico 8, parte 7)",
        url: "https://www.youtube.com/embed/Ing4Y51V24Q"
      },
      {
        type: "video",
        name: "Integral de linha de campos vetoriais (Tópico 9, parte 1)",
        url: "https://www.youtube.com/embed/f4r7bYjN_XY"
      },
      {
        type: "video",
        name: "Integral de linha de campos vetoriais (Tópico 9, parte 2)",
        url: "https://www.youtube.com/embed/ky5ES960LkQ"
      },
      {
        type: "video",
        name: "Integral de linha de campos vetoriais (Tópico 9, parte 3)",
        url: "https://www.youtube.com/embed/sGGJw4HS8i0"
      },
      {
        type: "video",
        name: "Integral de linha de campos vetoriais (Tópico 9, parte 4)",
        url: "https://www.youtube.com/embed/-Z9XGv6vqHw"
      },
      {
        type: "video",
        name: "Integral de linha de campos vetoriais (Tópico 9, parte 5)",
        url: "https://www.youtube.com/embed/nJ0-DyNIUM0"
      },
      {
        type: "video",
        name: "Integral de linha de campos vetoriais (Tópico 9, parte 6)",
        url: "https://www.youtube.com/embed/riEdjp94Tsk"
      },
      {
        type: "video",
        name: "Integral de linha de campos vetoriais (Tópico 9, parte 7)",
        url: "https://www.youtube.com/embed/uHuAW25rJCQ"
      },
      {
        type: "video",
        name: "Integral de linha de campos vetoriais (Tópico 9, parte 8)",
        url: "https://www.youtube.com/embed/BkTSwQ6Ihj4"
      },
      {
        type: "video",
        name: "Integral de linha de campos vetoriais (Tópico 9, parte 9)",
        url: "https://www.youtube.com/embed/tUKMhonYeHA"
      },
      {
        type: "video",
        name: "Teorema de Green (Tópico 10, parte 1)",
        url: "https://www.youtube.com/embed/lbOMX2oiTAU"
      },
      {
        type: "video",
        name: "Teorema de Green (Tópico 10, parte 2)",
        url: "https://www.youtube.com/embed/WL-JUc1PGmc"
      },
      {
        type: "video",
        name: "Teorema de Green (Tópico 10, parte 3)",
        url: "https://www.youtube.com/embed/N9bo0acKUfk"
      },
      {
        type: "video",
        name: "Teorema de Green (Tópico 10, parte 4)",
        url: "https://www.youtube.com/embed/Ug30U_awhww"
      },
      {
        type: "video",
        name: "Teorema de Green (Tópico 10, parte 5)",
        url: "https://www.youtube.com/embed/6BPC7m9cMfo"
      },
      {
        type: "video",
        name: "Teorema de Green (Tópico 10, parte 6)",
        url: "https://www.youtube.com/embed/KxvPCAsIleE"
      },
      {
        type: "video",
        name: "Teorema de Green (Tópico 10, parte 7)",
        url: "https://www.youtube.com/embed/QIkXtDVx9W4"
      },
      {
        type: "video",
        name: "Teorema de Green (Tópico 10, parte 8)",
        url: "https://www.youtube.com/embed/sV5yslaZ3ZQ"
      },
      {
        type: "video",
        name: "Teorema de Green (Tópico 10, parte 9)",
        url: "https://www.youtube.com/embed/k2e3j-P8l9Q"
      },
      {
        type: "video",
        name: "Superfícies parametrizadas (Tópico 11, parte 1)",
        url: "https://www.youtube.com/embed/kLoRRzYeKgY"
      },
      {
        type: "video",
        name: "Superfícies parametrizadas (Tópico 11, parte 2)",
        url: "https://www.youtube.com/embed/jMEKcEbCX_g"
      },
      {
        type: "video",
        name: "Superfícies parametrizadas (Tópico 11, parte 3)",
        url: "https://www.youtube.com/embed/xoEUoFEc57s"
      },
      {
        type: "video",
        name: "Superfícies parametrizadas (Tópico 11, parte 4)",
        url: "https://www.youtube.com/embed/W3HUB9yGiI0"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento (Tópico 12, parte 1)",
        url: "https://www.youtube.com/embed/Vnqkl_hS9I4"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento (Tópico 12, parte 2)",
        url: "https://www.youtube.com/embed/imxSrECsIMs"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento (Tópico 12, parte 3)",
        url: "https://www.youtube.com/embed/Mjad2ltyNC4"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento (Tópico 12, parte 4)",
        url: "https://www.youtube.com/embed/AwQDk7iTTLg"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento (Tópico 12, parte 5)",
        url: "https://www.youtube.com/embed/dY0p-6vIzQ4"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento (Tópico 12, parte 6)",
        url: "https://www.youtube.com/embed/jh4Wklud_-g"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento (Tópico 12, parte 7)",
        url: "https://www.youtube.com/embed/Evngdwnshp4"
      },
      {
        type: "video",
        name: "Integrais de superfícies de campos vetoriais - fluxos (Tópico 13, parte 1)",
        url: "https://www.youtube.com/embed/A6iZMmV3rg0"
      },
      {
        type: "video",
        name: "Integrais de superfícies de campos vetoriais - fluxos (Tópico 13, parte 2)",
        url: "https://www.youtube.com/embed/Wt-COQSCWRo"
      },
      {
        type: "video",
        name: "Integrais de superfícies de campos vetoriais - fluxos (Tópico 13, parte 3)",
        url: "https://www.youtube.com/embed/WcUcnqOzE1g"
      },
      {
        type: "video",
        name: "Integrais de superfícies de campos vetoriais - fluxos (Tópico 13, parte 4)",
        url: "https://www.youtube.com/embed/0NQyvmitUDQ"
      },
      {
        type: "video",
        name: "Integrais de superfícies de campos vetoriais - fluxos (Tópico 13, parte 5)",
        url: "https://www.youtube.com/embed/KBIelkVNYwM"
      },
      {
        type: "video",
        name: "Teorema de Gauss (Tópico 14, parte 1)",
        url: "https://www.youtube.com/embed/7CUN1LrzfYA"
      },
      {
        type: "video",
        name: "Teorema de Gauss (Tópico 14, parte 2)",
        url: "https://www.youtube.com/embed/InvICivtpo4"
      },
      {
        type: "video",
        name: "Teorema de Gauss (Tópico 14, parte 3)",
        url: "https://www.youtube.com/embed/1uIRGJsnzYc"
      },
      {
        type: "video",
        name: "Teorema de Gauss (Tópico 14, parte 4)",
        url: "https://www.youtube.com/embed/c0wz-T-GHTs"
      },
      {
        type: "video",
        name: "Teorema de Stokes (Tópico 15, parte 1)",
        url: "https://www.youtube.com/embed/d6v0nQbCHf8"
      },
      {
        type: "video",
        name: "Teorema de Stokes (Tópico 15, parte 2)",
        url: "https://www.youtube.com/embed/SRRl9Tq-HCA"
      },
      {
        type: "video",
        name: "Teorema de Stokes (Tópico 15, parte 3)",
        url: "https://www.youtube.com/embed/2F5mGBleSos"
      },
      {
        type: "video",
        name: "Teorema de Stokes (Tópico 15, parte 4)",
        url: "https://www.youtube.com/embed/KJ0BBEtco5U"
      },
      {
        type: "video",
        name: "Teorema de Stokes (Tópico 15, parte 5)",
        url: "https://www.youtube.com/embed/y1kZdti9xSo"
      },
      {
        type: "video",
        name: "Teorema de Stokes (Tópico 15, parte 6)",
        url: "https://www.youtube.com/embed/W5q-3Nn_15g"
      },
      {
        type: "video",
        name: "Teorema de Stokes (Tópico 15, parte 7)",
        url: "https://www.youtube.com/embed/i0RC_j_1azw"
      },
      {
        type: "video",
        name: "Teorema de Stokes (Tópico 15, parte 8)",
        url: "https://www.youtube.com/embed/QBemvrcd9YQ"
      },
      {
        type: "video",
        name: "Teorema de Stokes (Tópico 15, parte 9)",
        url: "https://www.youtube.com/embed/uBWNuY4vf54"
      },
      {
        type: "video",
        name: "Teorema de Stokes (Tópico 15, parte 10)",
        url: "https://www.youtube.com/embed/XsvhPXxBRHo"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento (Tópico 16, parte 1)",
        url: "https://www.youtube.com/embed/-ROtipq_iU8"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento (Tópico 16, parte 2)",
        url: "https://www.youtube.com/embed/rq--vb6qv_I"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento (Tópico 16, parte 3)",
        url: "https://www.youtube.com/embed/5xK6xIPCBzg"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento (Tópico 16, parte 4)",
        url: "https://www.youtube.com/embed/WX53avLeI18"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento (Aula 16, parte 5)",
        url: "https://www.youtube.com/embed/dx8TUSZiPvU"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento (Tópico 16, parte 6)",
        url: "https://www.youtube.com/embed/TJHgjLWwwSA"
      }
    ]
  },
  {
    id: "calculo-4",
    name: "Cálculo IV",
    desc: "Cálculo IV: sequências, séries, Taylor, Fourier e equações diferenciais.",
    content: [
      {
        type: "video",
        name: "Sequências Numéricas (Tópico 1, parte 1)",
        url: "https://www.youtube.com/embed/qSt79dDjOeU"
      },
      {
        type: "video",
        name: "Sequências Numéricas (Tópico 1, parte 2)",
        url: "https://www.youtube.com/embed/acH62XaF4fE"
      },
      {
        type: "video",
        name: "Sequências Numéricas (Tópico 1, parte 3)",
        url: "https://www.youtube.com/embed/sctG8ymvXko"
      },
      {
        type: "video",
        name: "Sequências Numéricas (Tópico 1, parte 4)",
        url: "https://www.youtube.com/embed/elS_BVfNrps"
      },
      {
        type: "video",
        name: "Sequências Numéricas II (Tópico 2, parte 1)",
        url: "https://www.youtube.com/embed/dmkNXtNGOGQ"
      },
      {
        type: "video",
        name: "Sequências Numéricas II (Tópico 2, parte 2)",
        url: "https://www.youtube.com/embed/TgQsMx5n8wI"
      },
      {
        type: "video",
        name: "Sequências Numéricas II (Tópico 2, parte 3)",
        url: "https://www.youtube.com/embed/im9KB-I62ps"
      },
      {
        type: "video",
        name: "Séries numéricas, conceitos básicos (Tópico 3)",
        url: "https://www.youtube.com/embed/Q3SeiYC6q3Q"
      },
      {
        type: "video",
        name: "Convergência absoluta e condicional (Tópico 4, parte 1)",
        url: "https://www.youtube.com/embed/UnHA02imzTU"
      },
      {
        type: "video",
        name: "Convergência absoluta e condicional (Tópico 4, parte 2)",
        url: "https://www.youtube.com/embed/hag4_JM4r_8"
      },
      {
        type: "video",
        name: "Convergência absoluta e condicional (Tópico 4, parte 3)",
        url: "https://www.youtube.com/embed/L2-Pv3OuWXI"
      },
      {
        type: "video",
        name: "Convergência absoluta e condicional (Tópico 4, parte 4)",
        url: "https://www.youtube.com/embed/LQ2iGhaUvGk"
      },
      {
        type: "video",
        name: "Séries de potências (Tópico 5, parte 1)",
        url: "https://www.youtube.com/embed/qBR-V1jM1Bg"
      },
      {
        type: "video",
        name: "Séries de potências (Tópico 5, parte 2)",
        url: "https://www.youtube.com/embed/kwMILrvq3hA"
      },
      {
        type: "video",
        name: "Séries de potências (Tópico 5, parte 3)",
        url: "https://www.youtube.com/embed/mQxI4Aa_g5U"
      },
      {
        type: "video",
        name: "Séries de potências (Tópico 5, parte 4)",
        url: "https://www.youtube.com/embed/lNwErRrVofk"
      },
      {
        type: "video",
        name: "Raio de convergência (Tópico 6)",
        url: "https://www.youtube.com/embed/nOZkm65BsNk"
      },
      {
        type: "video",
        name: "Convergência condicional ou absoluta II (Tópico 7)",
        url: "https://www.youtube.com/embed/n7qzU-FrKq0"
      },
      {
        type: "video",
        name: "Séries de potências - Introdução I (Tópico 8)",
        url: "https://www.youtube.com/embed/B0Xss202eSs"
      },
      {
        type: "video",
        name: "Derivação e integração termo-a-termo (Tópico 9, parte 1)",
        url: "https://www.youtube.com/embed/wxFPu8LU5hI"
      },
      {
        type: "video",
        name: "Derivação e integração termo-a-termo (Tópico 9, parte 2)",
        url: "https://www.youtube.com/embed/VRoitKTGM0M"
      },
      {
        type: "video",
        name: "Derivação e integração termo-a-termo (Tópico 9, parte 3)",
        url: "https://www.youtube.com/embed/OunD8j9hAVM"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento (Tópico 10, parte 1)",
        url: "https://www.youtube.com/embed/XCLDJgo1hj4"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento (Tópico 10, parte 2)",
        url: "https://www.youtube.com/embed/NbDVG28z6EM"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento - séries de potências (Tópico 10, parte 3)",
        url: "https://www.youtube.com/embed/-fNvtU-UjNQ"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento - séries de potências (Tópico 10, parte 4)",
        url: "https://www.youtube.com/embed/UCWIiMkDVO0"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento - séries de potências (Tópico 10, parte 5)",
        url: "https://www.youtube.com/embed/7ctJPVnkPYE"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento - séries de potências (Tópico 10, parte 6)",
        url: "https://www.youtube.com/embed/5LoO257VPC4"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento- séries de potências (Tópico 10, parte 7)",
        url: "https://www.youtube.com/embed/_x3Uyb6hn-k"
      },
      {
        type: "video",
        name: "Séries de potências (Tópico 11, parte 3)",
        url: "https://www.youtube.com/embed/gySzBBXn0iY"
      },
      {
        type: "video",
        name: "Séries de potências (Tópico 11, parte 4)",
        url: "https://www.youtube.com/embed/SEuqgg05mv0"
      },
      {
        type: "video",
        name: "Séries de potências (Tópico 11, parte 5)",
        url: "https://www.youtube.com/embed/bNh5iKiWLFo"
      },
      {
        type: "video",
        name: "Séries de Taylor (Tópico 12, parte 1)",
        url: "https://www.youtube.com/embed/7oE3ViM7s0s"
      },
      {
        type: "video",
        name: "Séries de Taylor (Tópico 12, parte 2)",
        url: "https://www.youtube.com/embed/ny2u7XHLRjw"
      },
      {
        type: "video",
        name: "Séries de Taylor (Tópico 12, parte 3)",
        url: "https://www.youtube.com/embed/Tgyr3cUbPY8"
      },
      {
        type: "video",
        name: "Séries de Taylor (Tópico 12, parte 4)",
        url: "https://www.youtube.com/embed/aFXtn-vkP5U"
      },
      {
        type: "video",
        name: "Séries de Taylor (Tópico 12, parte 5)",
        url: "https://www.youtube.com/embed/pbNVIS0HcOc"
      },
      {
        type: "video",
        name: "Séries de Taylor (Tópico 12, parte 6)",
        url: "https://www.youtube.com/embed/GNouR57reX8"
      },
      {
        type: "video",
        name: "Séries de Taylor (Tópico 12, parte 7)",
        url: "https://www.youtube.com/embed/1RorkLstg9M"
      },
      {
        type: "video",
        name: "Séries de Fourier (Tópico 13, parte 1)",
        url: "https://www.youtube.com/embed/zo-NVjfi4B8"
      },
      {
        type: "video",
        name: "Séries de Fourier (Tópico 13, parte 2)",
        url: "https://www.youtube.com/embed/v3f2qq9tYRE"
      },
      {
        type: "video",
        name: "Séries de Fourier (Tópico 13, parte 3)",
        url: "https://www.youtube.com/embed/Ep1Ix9QG3rw"
      },
      {
        type: "video",
        name: "Séries de Fourier (Tópico 13, parte 4)",
        url: "https://www.youtube.com/embed/PRqgYpeH1vQ"
      },
      {
        type: "video",
        name: "Séries de Fourier (Tópico 13, parte 5)",
        url: "https://www.youtube.com/embed/q4J0RShrnUM"
      },
      {
        type: "video",
        name: "Séries de Fourier (Tópico 13, parte 6)",
        url: "https://www.youtube.com/embed/yAow3OIxUPI"
      },
      {
        type: "video",
        name: "Séries de Fourier (Tópico 13, parte 7)",
        url: "https://www.youtube.com/embed/KSb13OLaCtU"
      },
      {
        type: "video",
        name: "Séries de Fourier (Tópico 13, parte 8)",
        url: "https://www.youtube.com/embed/MdYs-kT2hX4"
      },
      {
        type: "video",
        name: "Séries de Fourier (Tópico 13, parte 9)",
        url: "https://www.youtube.com/embed/_SFs8q9zx0Y"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento - Séries de Taylor (Tópico 14, parte 1)",
        url: "https://www.youtube.com/embed/dcDHHLs5KVI"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento - Séries de Taylor (Tópico 14, parte 2)",
        url: "https://www.youtube.com/embed/Cj_CexpmROY"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento - Séries de Taylor (Tópico 14, parte 3)",
        url: "https://www.youtube.com/embed/rnqvHDSWwqo"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento - Séries de Taylor (Tópico 14, parte 4)",
        url: "https://www.youtube.com/embed/_7v4WkqOUT4"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento - Séries de Fourier (Tópico 15, parte 1)",
        url: "https://www.youtube.com/embed/u0lQ-OatKlM"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento - Séries de Fourier (Tópico 15, parte 2)",
        url: "https://www.youtube.com/embed/LBw8OaWLPEc"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento - Séries de Fourier (Tópico 15, parte 3)",
        url: "https://www.youtube.com/embed/F7hlAT7uNHo"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento - Séries de Fourier (Tópico 15, parte 4)",
        url: "https://www.youtube.com/embed/9OShiyxeWdY"
      },
      {
        type: "video",
        name: "Equações diferenciais (Tópico 16, parte 1)",
        url: "https://www.youtube.com/embed/WKTrNFfcLfc"
      },
      {
        type: "video",
        name: "Equações diferenciais (Tópico 16, parte 2)",
        url: "https://www.youtube.com/embed/WDpEaqX5KLk"
      },
      {
        type: "video",
        name: "Equações diferenciais (Tópico 16, parte 3)",
        url: "https://www.youtube.com/embed/2vBZjhXp77s"
      },
      {
        type: "video",
        name: "Equações diferenciais ordinárias (Tópico 16, parte 4)",
        url: "https://www.youtube.com/embed/tJu_nNpXi6g"
      },
      {
        type: "video",
        name: "Equações diferenciais ordinárias (Tópico 16, parte 5)",
        url: "https://www.youtube.com/embed/r3aVrejoWUE"
      },
      {
        type: "video",
        name: "Equações diferenciais ordinárias (Tópico 16, parte 6)",
        url: "https://www.youtube.com/embed/_coTw4JwRJw"
      },
      {
        type: "video",
        name: "Equações diferenciais ordinárias (Tópico 16, parte 7)",
        url: "https://www.youtube.com/embed/iSKwEM8RQLY"
      },
      {
        type: "video",
        name: "Equações diferenciais ordinárias (Tópico 16, parte 8)",
        url: "https://www.youtube.com/embed/ldpIjTAhfcc"
      },
      {
        type: "video",
        name: "Equações diferenciais ordinárias (Tópico 16, parte 9)",
        url: "https://www.youtube.com/embed/EgRIFdXi2eg"
      },
      {
        type: "video",
        name: "Equações diferenciais ordinárias (Tópico 16, parte 10)",
        url: "https://www.youtube.com/embed/WXxJSHh47f8"
      },
      {
        type: "video",
        name: "Equações diferenciais ordinárias (Tópico 16, parte 11)",
        url: "https://www.youtube.com/embed/Wc7cbUJk8Pk"
      },
      {
        type: "video",
        name: "Equações diferenciais ordinárias (Tópico 16, parte 12)",
        url: "https://www.youtube.com/embed/AIK7E0-ab2M"
      },
      {
        type: "video",
        name: "Equações diferenciais ordinárias (Tópico 16, parte 13)",
        url: "https://www.youtube.com/embed/TxCoH6ma4yg"
      },
      {
        type: "video",
        name: "Equações diferenciais ordinárias (Tópico 16, parte 14)",
        url: "https://www.youtube.com/embed/KMXWOiu59kg"
      },
      {
        type: "video",
        name: "Equações diferenciais ordinárias (Tópico 16, parte 15)",
        url: "https://www.youtube.com/embed/KPbrSXS1pls"
      },
      {
        type: "video",
        name: "Equações diferenciais ordinárias (Tópico 16, parte 16)",
        url: "https://www.youtube.com/embed/rpHY3QBbAnI"
      },
      {
        type: "video",
        name: "Equações diferenciais ordinárias (Tópico 16, parte 17)",
        url: "https://www.youtube.com/embed/9XXPPCIAvfs"
      },
      {
        type: "video",
        name: "Equações diferenciais ordinárias (Tópico 16, parte 18)",
        url: "https://www.youtube.com/embed/9a1rsDScQdk"
      },
      {
        type: "video",
        name: "Equações diferenciais ordinárias (Tópico 16, parte 19)",
        url: "https://www.youtube.com/embed/nVjC4YMoJ-k"
      },
      {
        type: "video",
        name: "Equações diferenciais ordinárias (Tópico 16, parte 20)",
        url: "https://www.youtube.com/embed/P7J-CaGfk1M"
      },
      {
        type: "video",
        name: "Equações diferenciais ordinárias (Tópico 16, parte 21)",
        url: "https://www.youtube.com/embed/n1db4wQwBpk"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento - Equações diferenciais (Tópico 17, parte 1)",
        url: "https://www.youtube.com/embed/3GB6u2hyliI"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento - Equações diferenciais (Tópico 17, parte 2)",
        url: "https://www.youtube.com/embed/S-nW8xirRaA"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento - Equações diferenciais (Tópico 17, parte 3)",
        url: "https://www.youtube.com/embed/297gq1YK-Do"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento - Equações diferenciais (Tópico 17, parte 4)",
        url: "https://www.youtube.com/embed/L_aajTyfpNo"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento - Equações diferenciais (Tópico 17, parte 5)",
        url: "https://www.youtube.com/embed/1sB3OWP03j8"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento - Equações diferenciais (Tópico 17, parte 6)",
        url: "https://www.youtube.com/embed/D_rHYJ-ells"
      },
      {
        type: "video",
        name: "Revisão e aprofundamento - Equações diferenciais (Tópico 17, parte 7)",
        url: "https://www.youtube.com/embed/ce0zcBFH72E"
      }
    ]
  },
  {
    id: "redes-de-computadores",
    name: "Redes de Computadores",
    desc: "Redes do básico ao prático: roteadores, IP, sub-redes e configuração.",
    content: [
      {
        type: "video",
        name: "Como vai ser o Curso de Redes? - Curso Redes #01",
        url: "https://www.youtube.com/embed/QkMbqL8QD9w"
      },
      {
        type: "video",
        name: "Analisando seu ambiente Wi-Fi - Curso Redes #02",
        url: "https://www.youtube.com/embed/JAFhXan_Y9o"
      },
      {
        type: "video",
        name: "Fomos às compras - Curso Redes #03",
        url: "https://www.youtube.com/embed/tNxahMZsuyw"
      },
      {
        type: "video",
        name: "Curso de Redes: ERRAMOS 😥",
        url: "https://www.youtube.com/embed/GLw__0ulj-A"
      },
      {
        type: "video",
        name: "Evolução das Redes - Curso Redes #04",
        url: "https://www.youtube.com/embed/x3bxVOGsdL4"
      },
      {
        type: "video",
        name: "Classificação das Redes - Curso Redes #05",
        url: "https://www.youtube.com/embed/_826vVEokj8"
      },
      {
        type: "video",
        name: "Tipos de Redes - Curso Redes #06",
        url: "https://www.youtube.com/embed/pwZ7ex9m_e8"
      },
      {
        type: "video",
        name: "Endereçamento IP (parte 1) - Curso Redes #07",
        url: "https://www.youtube.com/embed/q65kHIvtWxg"
      },
      {
        type: "video",
        name: "Endereçamento IP (parte 2) - Curso Redes #08",
        url: "https://www.youtube.com/embed/ee5htpGdWHY"
      },
      {
        type: "video",
        name: "Primeiros passos com roteador Wi-Fi - Curso Redes #09",
        url: "https://www.youtube.com/embed/P7GNgBdx_GQ"
      },
      {
        type: "video",
        name: "Configurando roteador Wi-Fi - Curso Redes #10",
        url: "https://www.youtube.com/embed/rUl5G1IonuY"
      },
      {
        type: "video",
        name: "Configurações avançadas de Wi-Fi - Curso Redes #11",
        url: "https://www.youtube.com/embed/j99nrDXasMA"
      },
      {
        type: "video",
        name: "Cálculo de sub-redes - Curso Redes #12",
        url: "https://www.youtube.com/embed/wBUxveZAgco"
      },
      {
        type: "video",
        name: "Cabos de Rede e seus detalhes - Curso Redes #13",
        url: "https://www.youtube.com/embed/96XciwHI1UM"
      },
      {
        type: "video",
        name: "Montando cabo UTP - Curso Redes #14",
        url: "https://www.youtube.com/embed/UIZ-KBNfWNs"
      },
      {
        type: "video",
        name: "Tomadas de Superfície - Curso Redes #15",
        url: "https://www.youtube.com/embed/RtV8KuMkT6M"
      },
      {
        type: "video",
        name: "Como bloquear invasores no meu Wi-Fi?  - Curso Redes #16",
        url: "https://www.youtube.com/embed/8Kv-b7GoRTQ"
      },
      {
        type: "video",
        name: "Quais são os melhores livros de redes? - Dúvidas #01",
        url: "https://www.youtube.com/embed/3RqsGyt6wPI"
      },
      {
        type: "video",
        name: "Quanto ganha um profissional de redes? - Dúvidas #02",
        url: "https://www.youtube.com/embed/ys2pLoS5d2Q"
      },
      {
        type: "video",
        name: "Já viu um roteador profissional por dentro? - Dúvidas #03",
        url: "https://www.youtube.com/embed/kN4drKejVEw"
      },
      {
        type: "video",
        name: "Cisco Packet Tracer - Parte 1 - Curso Redes #17",
        url: "https://www.youtube.com/embed/AEvZ9A-dJP8"
      },
      {
        type: "video",
        name: "Estamos voltando...",
        url: "https://www.youtube.com/embed/SXWKEugTcao"
      },
      {
        type: "video",
        name: "Cisco Packet Tracer - Parte 2 - Curso Redes #18",
        url: "https://www.youtube.com/embed/rlmSGhU_wqM"
      },
      {
        type: "video",
        name: "Criando uma rede única usando WDS - Curso Redes #18",
        url: "https://www.youtube.com/embed/Sd61iFC37NE"
      },
      {
        type: "video",
        name: "Descobrimos o problema da nossa rede! - Curso Redes #20",
        url: "https://www.youtube.com/embed/EYIvcAtWYmY"
      },
      {
        type: "video",
        name: "Usando Repetidor Wi-Fi - Curso Redes #21",
        url: "https://www.youtube.com/embed/rPv4_v9B77M"
      }
    ]
  },
  {
    id: "linux-do-zero-para-devops",
    name: "Linux do Zero para DevOps",
    desc: "Linux pra DevOps na prática: comandos, logs, permissões e incidentes reais.",
    content: [
      {
        type: "video",
        name: "#1 Linux do Zero para DevOps - Resolvendo um Incidente Real em Produção (Hands-on Completo)",
        url: "https://www.youtube.com/embed/QDW_qYiYjv0"
      },
      {
        type: "video",
        name: "#2 Linux do Zero para DevOps - Preparando o Ambiente Docker para Investigação",
        url: "https://www.youtube.com/embed/VQsvBt2rECk"
      },
      {
        type: "video",
        name: "#3 Linux do Zero para DevOps - Comandos Iniciais - uname, ps aux e Análise de Processos",
        url: "https://www.youtube.com/embed/GYRY75-SEZQ"
      },
      {
        type: "video",
        name: "#4 Linux do Zero para DevOps - Dominando Logs - tail, cp, mv na prática",
        url: "https://www.youtube.com/embed/B2TlcPB3kA8"
      },
      {
        type: "video",
        name: "#5 Linux do Zero para DevOps: Investigação de Dados Corrompidos e Validação de Integridade",
        url: "https://www.youtube.com/embed/Ig4HamrcOPs"
      },
      {
        type: "video",
        name: "#6Linux do Zero para DevOps: Gerenciamento de Configurações - find, cat e diff Explicados",
        url: "https://www.youtube.com/embed/piGmzv4_PF8"
      },
      {
        type: "video",
        name: "#7 Linux do Zero para DevOps: Permissões Linux - chmod Explicado na Prática",
        url: "https://www.youtube.com/embed/GdZYI1VQRBo"
      },
      {
        type: "video",
        name: "#8 Linux do Zero para DevOps: Rollback, Restart e Validação + Próximos Passos",
        url: "https://www.youtube.com/embed/LbRBuiVywds"
      }
    ]
  },
  {
    id: "banco-de-dados",
    name: "Banco de Dados",
    desc: "MySQL do zero: modelagem, consultas e JOINs pra dominar bancos relacionais.",
    content: [
      {
        type: "video",
        name: "Curso MySQL #01 - O que é um Banco de Dados?",
        url: "https://www.youtube.com/embed/Ofktsne-utM"
      },
      {
        type: "video",
        name: "Curso MySQL #02a - Instalando o MySQL com WAMP",
        url: "https://www.youtube.com/embed/5JbAOWJbgIA"
      },
      {
        type: "video",
        name: "Curso MySQL #02b - Instalando o XAMPP",
        url: "https://www.youtube.com/embed/R2HrwSQ6EPM"
      },
      {
        type: "video",
        name: "Curso MySQL #03 - Criando o primeiro Banco de Dados",
        url: "https://www.youtube.com/embed/m9YPlX0fcJk"
      },
      {
        type: "video",
        name: "Curso MySQL #04 - Melhorando a Estrutura do Banco de Dados",
        url: "https://www.youtube.com/embed/cHLKtALWDos"
      },
      {
        type: "video",
        name: "Curso MySQL #05 - Inserindo Dados na Tabela (INSERT INTO)",
        url: "https://www.youtube.com/embed/NCG9niOlm40"
      },
      {
        type: "video",
        name: "Curso MySQL #06 - Alterando a Estrutura da Tabela (ALTER TABLE e DROP TABLE)",
        url: "https://www.youtube.com/embed/To9qUcEMuY0"
      },
      {
        type: "video",
        name: "Curso MySQL #07 - Manipulando Linhas (UPDATE, DELETE e TRUNCATE)",
        url: "https://www.youtube.com/embed/wXViczeTr6Q"
      },
      {
        type: "video",
        name: "Curso MySQL #08 - Gerenciando Cópias de Segurança MySQL",
        url: "https://www.youtube.com/embed/w6OYS_M7hTM"
      },
      {
        type: "video",
        name: "Curso MySQL #09 - PHPMyAdmin (Parte 1)",
        url: "https://www.youtube.com/embed/OaPMvrA0cA4"
      },
      {
        type: "video",
        name: "Curso MySQL #10 - PHPMyAdmin (Parte 2)",
        url: "https://www.youtube.com/embed/EC_1ZtXsUtA"
      },
      {
        type: "video",
        name: "Curso MySQL #11 - SELECT (Parte 1)",
        url: "https://www.youtube.com/embed/GaOlyL3Uv9M"
      },
      {
        type: "video",
        name: "Curso MySQL #12 - SELECT (Parte 2)",
        url: "https://www.youtube.com/embed/q4hPo83-Buo"
      },
      {
        type: "video",
        name: "Curso MySQL #13 - SELECT (Parte 3)",
        url: "https://www.youtube.com/embed/ocyVJ9gRUaE"
      },
      {
        type: "video",
        name: "Curso MySQL #14 - Modelo Relacional",
        url: "https://www.youtube.com/embed/8fxKJWJcRTw"
      },
      {
        type: "video",
        name: "Curso MySQL #15 - Chaves Estrangeiras e JOIN",
        url: "https://www.youtube.com/embed/paZNDJAPT4E"
      },
      {
        type: "video",
        name: "Curso MySQL #16 - INNER JOIN com várias tabelas",
        url: "https://www.youtube.com/embed/jx2ne8iZMOA"
      }
    ]
  },
  {
    id: "css",
    name: "CSS",
    desc: "CSS na prática: do básico a flexbox e sites responsivos.",
    content: [
      {
        type: "video",
        name: "Curso CSS Completo: Aula 01 - O que é CSS e CSS Inline",
        url: "https://www.youtube.com/embed/HtVRRHoASes"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 02 - CSS Interno (incorporado na página)",
        url: "https://www.youtube.com/embed/tspCQqKLTbY"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 03 - CSS Externo",
        url: "https://www.youtube.com/embed/U4LdM3aXxeU"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 04 - Seletores e Classes",
        url: "https://www.youtube.com/embed/ZMfNFAPlcpo"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 05 - Propriedade Color",
        url: "https://www.youtube.com/embed/0vjvtaVknRc"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 06 - Propriedade Background",
        url: "https://www.youtube.com/embed/aTcE4KGZsMM"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 07 - Propriedade Border",
        url: "https://www.youtube.com/embed/zfrIsnax1nA"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 08 - Propriedade Margin",
        url: "https://www.youtube.com/embed/X43kYX2vqaI"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 09 - Propriedade Padding e Criando Um Botão Simples",
        url: "https://www.youtube.com/embed/WmO5xce__ww"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 10 - Propriedade Width e Height",
        url: "https://www.youtube.com/embed/oSm3aOswjxs"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 11 - Propriedade Text",
        url: "https://www.youtube.com/embed/TrknyZa9-x4"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 12 - Propriedade Font",
        url: "https://www.youtube.com/embed/Ez40S3jaNSU"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 13 - Estilização de Links",
        url: "https://www.youtube.com/embed/eJuofyUS7Jw"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 14 - Propriedade Display",
        url: "https://www.youtube.com/embed/T6RPyXcuLj4"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 15 - Propriedade Max-Width",
        url: "https://www.youtube.com/embed/6mHbKDghkv8"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 16 - Propriedade Position",
        url: "https://www.youtube.com/embed/wQmqFdNKijc"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 17 - Propriedade Overflow",
        url: "https://www.youtube.com/embed/Wnz7zeIG3Qo"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 18 - Propriedade Float",
        url: "https://www.youtube.com/embed/gRh3K23aHv8"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 19 - Propriedade Opacity",
        url: "https://www.youtube.com/embed/-MxUg_gHhmA"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 20 - Efeito Dropdown",
        url: "https://www.youtube.com/embed/9Rrr2MwbOXc"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 21 - Especificidade CSS",
        url: "https://www.youtube.com/embed/AHsuA7OV_5U"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 22 - Regra Important",
        url: "https://www.youtube.com/embed/hJZx3JstBG4"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 23 - Efeito Gradiente",
        url: "https://www.youtube.com/embed/JFdIBcvju7U"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 24 - Propriedades Text Shadow e Box Shadow",
        url: "https://www.youtube.com/embed/J5vtATyHV2Y"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 25 - Efeitos de Texto",
        url: "https://www.youtube.com/embed/F-oBI66MgIk"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 26 - Media Queries",
        url: "https://www.youtube.com/embed/SnZzWV120X4"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 27 - Flexbox",
        url: "https://www.youtube.com/embed/NQTU9hEStD8"
      },
      {
        type: "video",
        name: "Curso CSS Completo: Aula 28 - Criando Site do Zero Com CSS e HTML",
        url: "https://www.youtube.com/embed/6gRtjwD2w88"
      }
    ]
  },
  {
    id: "html",
    name: "HTML",
    desc: "HTML na prática: estrutura, formulários, mídia e semântica.",
    content: [
      {
        type: "video",
        name: "Curso de HTML Completo: Aula 01 - Criando novo projeto",
        url: "https://www.youtube.com/embed/sj0p9O85AIg"
      },
      {
        type: "video",
        name: "Curso de HTML Completo: Aula 02 - Estrutura Básica",
        url: "https://www.youtube.com/embed/MOd8PCyEB88"
      },
      {
        type: "video",
        name: "Curso de HTML Completo: Aula 03 - Meta Tags, Cabeçalho e Parágrafo",
        url: "https://www.youtube.com/embed/1ntb19o-2MI"
      },
      {
        type: "video",
        name: "Curso de HTML Completo: Aula 04 - Formatação de Texto",
        url: "https://www.youtube.com/embed/RiGo7BN1Wps"
      },
      {
        type: "video",
        name: "Curso de HTML Completo: Aula 05 - Elementos de Citação",
        url: "https://www.youtube.com/embed/bzWtE7GFi0Y"
      },
      {
        type: "video",
        name: "Curso de HTML Completo: Aula 06 - Comentários",
        url: "https://www.youtube.com/embed/Sl0edqPVrGg"
      },
      {
        type: "video",
        name: "Curso de HTML Completo: Aula 07 - Links",
        url: "https://www.youtube.com/embed/eb5tPfOeexI"
      },
      {
        type: "video",
        name: "Curso de HTML Completo: Aula 08 - Tudo Sobre Imagens",
        url: "https://www.youtube.com/embed/2FvW812Up1U"
      },
      {
        type: "video",
        name: "Curso HTML Completo: Aula 09 - Tabelas",
        url: "https://www.youtube.com/embed/tTUdJlcjEo4"
      },
      {
        type: "video",
        name: "Curso HTML Completo: Aula 10 - Listas",
        url: "https://www.youtube.com/embed/0pShBr4Qmt0"
      },
      {
        type: "video",
        name: "Curso de HTML Completo: Aula 11 - iframes",
        url: "https://www.youtube.com/embed/448sdzWsnMs"
      },
      {
        type: "video",
        name: "Curso de HTML Completo: Aula 12 - Formulários",
        url: "https://www.youtube.com/embed/7eZJFftCbVQ"
      },
      {
        type: "video",
        name: "Curso de HTML Completo: Aula 13 - Áudio",
        url: "https://www.youtube.com/embed/ImZoGl-pjVw"
      },
      {
        type: "video",
        name: "Curso de HTML Completo: Aula 14 - Vídeos",
        url: "https://www.youtube.com/embed/BwDPP6mfdWU"
      },
      {
        type: "video",
        name: "Curso HTML Completo: Aula 15 - Div e HTML Semântico",
        url: "https://www.youtube.com/embed/B2ZiOfoQ4wI"
      }
    ]
  },
  {
    id: "spring-ai-angular",
    name: "Spring AI + Angular",
    desc: "Full-stack com Spring AI e Angular: chat, memória, RAG e um app de reservas com IA.",
    content: [
      {
        type: "video",
        name: "Spring AI + Angular: Introdução",
        url: "https://www.youtube.com/embed/10oDBG6V5Q8"
      },
      {
        type: "video",
        name: "Spring AI + Angular: Primeiro Projeto [Chat Client]",
        url: "https://www.youtube.com/embed/M7j84Y16bFk"
      },
      {
        type: "video",
        name: "Spring AI + Angular: Chat Client com Gemini",
        url: "https://www.youtube.com/embed/Kq37KNwt3bA"
      },
      {
        type: "video",
        name: "Spring AI + Angular: Chat Client com Azure OpenAI",
        url: "https://www.youtube.com/embed/fjkZjObT3ro"
      },
      {
        type: "video",
        name: "Spring AI + Angular: Chat Client com Oracle GenAI",
        url: "https://www.youtube.com/embed/fjkZjObT3ro?list=PLGxZ4Rq3BOBrv9_kAgnWdWgMCxpQsTk6h"
      },
      {
        type: "video",
        name: "Spring AI + Angular: Criando Projeto Angular",
        url: "https://www.youtube.com/embed/WUhUB0IChxE"
      },
      {
        type: "video",
        name: "Spring AI + Angular: Criando Cliente de Chat",
        url: "https://www.youtube.com/embed/fjkZjObT3ro?list=PLGxZ4Rq3BOBrv9_kAgnWdWgMCxpQsTk6h"
      },
      {
        type: "video",
        name: "Spring AI + Angular: Conectando Cliente de Chat com API",
        url: "https://www.youtube.com/embed/fjkZjObT3ro?list=PLGxZ4Rq3BOBrv9_kAgnWdWgMCxpQsTk6h"
      }
    ]
  },
  {
    id: "curso-de-csharp",
    name: "Curso de C#",
    desc: "C# na prática: fundamentos, LINQ, async/await e APIs com ASP.NET Core.",
    content: [
      {
        type: "video",
        name: "C# Course for Beginners - Full Tutorial",
        url: "https://www.youtube.com/embed/GhQdlMFylQ8"
      },
      {
        type: "video",
        name: "Curso de C# 01 - Introdução e Configuração do Ambiente",
        url: "https://www.youtube.com/embed/KhGzOIhdO5E"
      },
      {
        type: "video",
        name: "C# Tutorial for Beginners - Learn C# Basics in 1 Hour",
        url: "https://www.youtube.com/embed/yhVMOBfZDes"
      },
      {
        type: "video",
        name: "Curso de C# - Variáveis, Tipos e Operadores",
        url: "https://www.youtube.com/embed/B64rC6atV6c"
      },
      {
        type: "video",
        name: "C# OOP Tutorial - Classes, Objects, Inheritance",
        url: "https://www.youtube.com/embed/p9kwnMP1CMo"
      }
    ]
  },
  {
    id: "curso-de-go",
    name: "Curso de Go",
    desc: "Go do zero: concorrência com goroutines, HTTP e boas práticas pra APIs.",
    content: [
      {
        type: "video",
        name: "Go Course - Learn Go from Scratch",
        url: "https://www.youtube.com/embed/ys4gMlHpX8c"
      },
      {
        type: "video",
        name: "Golang Tutorial for Beginners - Full Course",
        url: "https://www.youtube.com/embed/un6ZyfrkycM"
      },
      {
        type: "video",
        name: "Curso de Go - Instalação e Hello World",
        url: "https://www.youtube.com/embed/KtSSp93tXJ4"
      },
      {
        type: "video",
        name: "Go Concurrency Tutorial - Goroutines and Channels",
        url: "https://www.youtube.com/embed/oV9rvDllKEg"
      },
      {
        type: "video",
        name: "Building REST APIs with Go and Gin",
        url: "https://www.youtube.com/embed/qJNdWqLiZy8"
      }
    ]
  },
  {
    id: "curso-de-rust",
    name: "Curso de Rust",
    desc: "Rust na prática: ownership, lifetimes, traits e construção de CLIs e APIs.",
    content: [
      {
        type: "video",
        name: "Rust Programming Course for Beginners - Full Tutorial",
        url: "https://www.youtube.com/embed/BpPEoZW5IiY"
      },
      {
        type: "video",
        name: "Rust Tutorial - Full Course for Beginners",
        url: "https://www.youtube.com/embed/FHmpY5VkEOE"
      },
      {
        type: "video",
        name: "Curso de Rust - Ownership e Borrowing",
        url: "https://www.youtube.com/embed/v5FjWWa9bB0"
      },
      {
        type: "video",
        name: "Rust Traits and Generics Explained",
        url: "https://www.youtube.com/embed/rAl-6YS4W14"
      },
      {
        type: "video",
        name: "Building a CLI Tool with Rust",
        url: "https://www.youtube.com/embed/mT-mwLwVeR8"
      }
    ]
  },
  {
    id: "curso-de-git-github",
    name: "Curso de Git e GitHub",
    desc: "Git e GitHub na prática: branches, merge, rebase e pull requests.",
    content: [
      {
        type: "video",
        name: "Curso de Git e GitHub - Guia Completo (2024)",
        url: "https://www.youtube.com/embed/eE4kaeSZ16o"
      },
      {
        type: "video",
        name: "Git and GitHub for Beginners - Full Course",
        url: "https://www.youtube.com/embed/RGOj5yH7evk"
      },
      {
        type: "video",
        name: "Git Tutorial for Beginners - Master Git & GitHub",
        url: "https://www.youtube.com/embed/8JJ10B4qz4E"
      },
      {
        type: "video",
        name: "Curso de Git - Branches, Merge e Rebase",
        url: "https://www.youtube.com/embed/WMyQ1KFzub0"
      },
      {
        type: "video",
        name: "GitHub Pull Requests - How to Create and Review",
        url: "https://www.youtube.com/embed/8lGpQkVnvJs"
      }
    ]
  },
  {
    id: "curso-de-docker",
    name: "Curso de Docker",
    desc: "Docker na prática: containers, imagens, volumes e deploy com Compose.",
    content: [
      {
        type: "video",
        name: "Docker Tutorial for Beginners - Full Course 2024",
        url: "https://www.youtube.com/embed/fqMOX6JJhGo"
      },
      {
        type: "video",
        name: "Curso de Docker - Introdução e Conceitos",
        url: "https://www.youtube.com/embed/Gz6WgK5tT_w"
      },
      {
        type: "video",
        name: "Docker Compose Tutorial - Multi-Container Apps",
        url: "https://www.youtube.com/embed/3c-iBn73dDE"
      },
      {
        type: "video",
        name: "Dockerfile Best Practices - Build Efficient Images",
        url: "https://www.youtube.com/embed/LKCVou58MhY"
      },
      {
        type: "video",
        name: "Deploy com Docker - Produção na Prática",
        url: "https://www.youtube.com/embed/GpgM5SjVuq4"
      }
    ]
  }
];

export const partners = [
  {
    id: "devconnect",
    name: "DevConnect",
    logo: "DC",
    icon: "🛰️",
    tag: "Parceiro apoiador",
    highlight: "Networking • Comunidade • Evolução",
    desc: "Comunidade voltada para estudantes e profissionais de tecnologia, promovendo networking, compartilhamento de conhecimento e crescimento na área de desenvolvimento de software.",
    url: "https://www.linkedin.com/",
    cta: "➡️ Conhecer Comunidade",
    featured: true
  },
  {
    id: "rede-futura",
    name: "Rede de Apoio Estudantil",
    logo: "RA",
    icon: "💡",
    tag: "Em expansão",
    highlight: "Grupos de estudo • Ligas • Iniciativas",
    desc: "Espaço reservado para futuras comunidades, ligas acadêmicas e projetos educacionais que desejam apoiar estudantes em sua jornada na programação.",
    url: "#/about",
    cta: "🌐 Ver possibilidades",
    featured: false
  },
  {
    id: "seja-parceiro",
    name: "Sua comunidade aqui",
    logo: "SD",
    icon: "🚀",
    tag: "Colabore com o StudyDev",
    highlight: "Parcerias • Eventos • Oportunidades",
    desc: "O StudyDev segue construindo conexões com comunidades e iniciativas que ajudam novos talentos a aprender, praticar e conquistar espaço no mercado de tecnologia.",
    url: "#/about",
    cta: "🤝 Tornar-se parceiro",
    featured: false
  }
];

export const events = [];

export const jobs = [];

export const testimonials = [];

export const eventTips = [];

export const jobTips = [];

export const StudyDevData = {
  languages,
  aboutDetails,
  roadmaps,
  partners,
  events,
  jobs,
  testimonials,
  eventTips,
  jobTips,
};

export default StudyDevData;
