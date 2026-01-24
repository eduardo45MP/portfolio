# Language Strategy / Estratégia de idiomas

## Purpose / Propósito

This repository adopts a **bilingual-by-structure** approach. English (en-GB) and Portuguese (pt-BR) are presented together in the same pages so both audiences receive first-class content. / Este repositório adota uma abordagem **bilíngue por estrutura**. Inglês (en-GB) e Português (pt-BR) são apresentados juntos nas mesmas páginas para que ambos os públicos recebam conteúdo de primeira classe.

## Convention / Convenção

- **Inline bilingual blocks**: every text element includes two `span` nodes (one for each language), wrapped by the `bilingual-text` class. / **Blocos bilíngues inline**: todo elemento textual inclui dois `span` (um por idioma), envolvidos pela classe `bilingual-text`.
- **Language tags**: each `span` must set `lang="en-GB"` or `lang="pt-BR"` for accessibility and search engines. / **Tags de idioma**: cada `span` deve definir `lang="en-GB"` ou `lang="pt-BR"` para acessibilidade e mecanismos de busca.
- **Navigation and badges**: short labels use `bilingual-text--inline` to keep headers compact. / **Navegação e badges**: rótulos curtos usam `bilingual-text--inline` para manter o cabeçalho compacto.
- **Meta descriptions**: include both languages in `meta[name="description"]` for clarity. / **Descrições meta**: incluem ambos os idiomas em `meta[name="description"]` para clareza.

## Scope / Escopo

This convention applies to:

- `index.html`
- `projects/{project}/index.html`

## Future extensions / Extensões futuras

- When adding new pages, copy the same structure to keep language parity. / Ao adicionar novas páginas, copie a mesma estrutura para manter paridade de idiomas.
- If additional languages are introduced, expand the `bilingual-text` structure and update CSS to handle extra columns. / Se novos idiomas forem introduzidos, expanda a estrutura `bilingual-text` e atualize o CSS para lidar com colunas extras.

## Quality checks / Verificações de qualidade

- Ensure both languages have equivalent meaning (no partial coverage). / Garanta que ambos os idiomas tenham significado equivalente (sem cobertura parcial).
- Avoid untranslated placeholders. / Evite placeholders não traduzidos.
- Keep terminology consistent across sections and documents. / Mantenha terminologia consistente entre seções e documentos.
