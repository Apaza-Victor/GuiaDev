(function () {
  if (typeof hljs === 'undefined') return;

  try {
    hljs.registerAliases(['jsx'], { languageName: 'javascript' });
    hljs.registerAliases(['vue', 'astro', 'svelte'], { languageName: 'xml' });
    hljs.registerAliases(['properties', 'env', 'toml'], { languageName: 'ini' });
    hljs.registerAliases(['mdx'], { languageName: 'markdown' });
    hljs.registerAliases(['mermaid', 'txt', 'text'], { languageName: 'plaintext' });
    hljs.registerAliases(['blade'], { languageName: 'php' });
  } catch (e) { /* noop */ }

  if (!hljs.getLanguage('plantuml')) {
    hljs.registerLanguage('plantuml', function (hljs) {
      var KEYWORDS =
        'actor participant boundary control entity database collections queue ' +
        'rectangle circle storage folder frame card cloud usecase component ' +
        'interface class abstract enum object state package namespace node ' +
        'artifact deployment rect note legend title skinparam autonumber ' +
        'activate deactivate destroy create alt else elseif end loop repeat ' +
        'while par break critical group opt ref box hide show left right center ' +
        'top bottom direction footer header caption scale split again start stop ' +
        'if then return fork join floating note over';
      return {
        name: 'PlantUML',
        case_insensitive: true,
        keywords: { keyword: KEYWORDS },
        contains: [
          hljs.COMMENT("'", '$', { relevance: 0 }),
          hljs.COMMENT("/'", "'/", { relevance: 10 }),
          { className: 'string', begin: '"', end: '"', relevance: 0 },
          {
            className: 'symbol',
            begin: /(-{1,2}>|<-{1,2}|\.\.>|<\.\.|--\|>|\|>|-\*|\*\)|-\[hidden\]-|==+|__+)/,
            relevance: 0
          },
          { className: 'number', begin: /\b\d+(\.\d+)?\b/, relevance: 0 }
        ]
      };
    });
  }
})();
