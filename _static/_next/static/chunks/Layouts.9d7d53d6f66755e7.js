"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [489],
  {
    7377: function (n, r, e) {
      e.r(r),
        e.d(r, {
          customTheme: function () {
            return h;
          },
          default: function () {
            return k;
          },
        });
      var o = e(3312),
        i = e(2361),
        t = e(6746),
        a = e(9207),
        l = e(695),
        s = (e(5473), e(7404));
      function c() {
        var n,
          r,
          e =
            ((n = [
              "\n  // Headings\n  .article > h2,\n  .article > h3,\n  .article > h4 {\n    font-weight: ",
              ";\n  }\n\n  .article > h2 {\n    padding: ",
              " 0 ",
              ";\n    font-size: ",
              ";\n  }\n\n  .article > h3 {\n    padding: ",
              " 0 ",
              ";\n    font-size: ",
              ";\n  }\n\n  .article > h4 {\n    padding: ",
              " 0 ",
              ";\n    font-size: ",
              ";\n  }\n\n  // Paragraphs\n  .article p,\n  .article ul,\n  .article ol,\n  .article a:not(.chakra-link) {\n    margin: ",
              " 0 ",
              ";\n    line-height: ",
              ";\n    letter-spacing: ",
              ";\n    font-size: ",
              ";\n    font-weight: ",
              ';\n  }\n\n  // Links\n  .article a.chakra-link {\n    text-decoration: none;\n  }\n\n  .article a[aria-hidden="true"]:hover {\n    text-decoration: none;\n  }\n\n  // Lists\n  .article li {\n    padding-left: ',
              ";\n    list-style: none;\n    counter-increment: custom-reset;\n    position: relative;\n  }\n\n  .article ol > li,\n  .article ul > li {\n    margin-bottom: ",
              ";\n  }\n\n  .article ol > li > p,\n  .article ul > li > p {\n    display: inline;\n  }\n\n  .article ol > li::before,\n  .article ul > li::before {\n    color: ",
              ';\n    left: 0;\n    position: absolute;\n  }\n\n  .article ol > li::before {\n    content: counter(custom-reset) ". ";\n  }\n\n  .article ul > li::before {\n    content: "\\2022";\n  }\n\n  // Typography\n  .article > blockquote {\n    padding: ',
              ";\n    margin: 0;\n    border-radius: ",
              ";\n    background: ",
              ";\n    border-width: 1.25px;\n    border-color: ",
              ";\n  }\n\n  .article > blockquote > p,\n  .article > blockquote > p > a {\n    margin: 0;\n    font-size: ",
              " !important;\n    letter-spacing: ",
              " !important;\n  }\n\n  // Table\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    font-size: ",
              ";\n    border-width: 1.25px;\n    border-color: ",
              ";\n  }\n\n  .article table a:not(.chakra-link) {\n    font-size: ",
              ";\n  }\n\n  thead td,\n  thead th {\n    border-bottom-width: 2px;\n    font-size: ",
              ";\n  }\n\n  thead th {\n    vertical-align: bottom;\n  }\n\n  td,\n  th {\n    padding: 0.75rem;\n    vertical-align: top;\n  }\n\n  // Headings\n  .article > h2,\n  .article > h3,\n  .article > h4 {\n    color: ",
              ";\n  }\n\n  // Paragraphs\n  .article p,\n  .article ul,\n  .article ol {\n    color: ",
              ";\n  }\n\n  .article strong {\n    color: ",
              ";\n  }\n\n  // Links\n  .article a:not(.chakra-link) {\n    color: ",
              ';\n    position: relative;\n  }\n\n  .article a:not(.chakra-link)[aria-hidden="true"] {\n    top: -3px;\n  }\n\n  .article a:not(.chakra-link):hover {\n    color: ',
              ";\n  }\n\n  // Code\n  .article > h2 code {\n    font-size: ",
              ";\n  }\n\n  .article > h3 code {\n    font-size: ",
              ";\n  }\n  .article > h4 code {\n    font-size: ",
              ";\n  }\n\n  // Table\n  table {\n    border-radius: ",
              ";\n    color: ",
              ";\n    background-color: ",
              ";\n  }\n\n  thead th {\n    border-bottom: 1px solid ",
              ";\n  }\n\n  td,\n  th {\n    border: 1px solid ",
              ";\n  }\n",
            ]),
            (r = [
              "\r\n  // Headings\r\n  .article > h2,\r\n  .article > h3,\r\n  .article > h4 {\r\n    font-weight: ",
              ";\r\n  }\r\n\r\n  .article > h2 {\r\n    padding: ",
              " 0 ",
              ";\r\n    font-size: ",
              ";\r\n  }\r\n\r\n  .article > h3 {\r\n    padding: ",
              " 0 ",
              ";\r\n    font-size: ",
              ";\r\n  }\r\n\r\n  .article > h4 {\r\n    padding: ",
              " 0 ",
              ";\r\n    font-size: ",
              ";\r\n  }\r\n\r\n  // Paragraphs\r\n  .article p,\r\n  .article ul,\r\n  .article ol,\r\n  .article a:not(.chakra-link) {\r\n    margin: ",
              " 0 ",
              ";\r\n    line-height: ",
              ";\r\n    letter-spacing: ",
              ";\r\n    font-size: ",
              ";\r\n    font-weight: ",
              ';\r\n  }\r\n\r\n  // Links\r\n  .article a.chakra-link {\r\n    text-decoration: none;\r\n  }\r\n\r\n  .article a[aria-hidden="true"]:hover {\r\n    text-decoration: none;\r\n  }\r\n\r\n  // Lists\r\n  .article li {\r\n    padding-left: ',
              ";\r\n    list-style: none;\r\n    counter-increment: custom-reset;\r\n    position: relative;\r\n  }\r\n\r\n  .article ol > li,\r\n  .article ul > li {\r\n    margin-bottom: ",
              ";\r\n  }\r\n\r\n  .article ol > li > p,\r\n  .article ul > li > p {\r\n    display: inline;\r\n  }\r\n\r\n  .article ol > li::before,\r\n  .article ul > li::before {\r\n    color: ",
              ';\r\n    left: 0;\r\n    position: absolute;\r\n  }\r\n\r\n  .article ol > li::before {\r\n    content: counter(custom-reset) ". ";\r\n  }\r\n\r\n  .article ul > li::before {\r\n    content: "\\\\2022";\r\n  }\r\n\r\n  // Typography\r\n  .article > blockquote {\r\n    padding: ',
              ";\r\n    margin: 0;\r\n    border-radius: ",
              ";\r\n    background: ",
              ";\r\n    border-width: 1.25px;\r\n    border-color: ",
              ";\r\n  }\r\n\r\n  .article > blockquote > p,\r\n  .article > blockquote > p > a {\r\n    margin: 0;\r\n    font-size: ",
              " !important;\r\n    letter-spacing: ",
              " !important;\r\n  }\r\n\r\n  // Table\r\n  table {\r\n    width: 100%;\r\n    margin-bottom: 1rem;\r\n    font-size: ",
              ";\r\n    border-width: 1.25px;\r\n    border-color: ",
              ";\r\n  }\r\n\r\n  .article table a:not(.chakra-link) {\r\n    font-size: ",
              ";\r\n  }\r\n\r\n  thead td,\r\n  thead th {\r\n    border-bottom-width: 2px;\r\n    font-size: ",
              ";\r\n  }\r\n\r\n  thead th {\r\n    vertical-align: bottom;\r\n  }\r\n\r\n  td,\r\n  th {\r\n    padding: 0.75rem;\r\n    vertical-align: top;\r\n  }\r\n\r\n  // Headings\r\n  .article > h2,\r\n  .article > h3,\r\n  .article > h4 {\r\n    color: ",
              ";\r\n  }\r\n\r\n  // Paragraphs\r\n  .article p,\r\n  .article ul,\r\n  .article ol {\r\n    color: ",
              ";\r\n  }\r\n\r\n  .article strong {\r\n    color: ",
              ";\r\n  }\r\n\r\n  // Links\r\n  .article a:not(.chakra-link) {\r\n    color: ",
              ';\r\n    position: relative;\r\n  }\r\n\r\n  .article a:not(.chakra-link)[aria-hidden="true"] {\r\n    top: -3px;\r\n  }\r\n\r\n  .article a:not(.chakra-link):hover {\r\n    color: ',
              ";\r\n  }\r\n\r\n  // Code\r\n  .article > h2 code {\r\n    font-size: ",
              ";\r\n  }\r\n\r\n  .article > h3 code {\r\n    font-size: ",
              ";\r\n  }\r\n  .article > h4 code {\r\n    font-size: ",
              ";\r\n  }\r\n\r\n  // Table\r\n  table {\r\n    border-radius: ",
              ";\r\n    color: ",
              ";\r\n    background-color: ",
              ";\r\n  }\r\n\r\n  thead th {\r\n    border-bottom: 1px solid ",
              ";\r\n  }\r\n\r\n  td,\r\n  th {\r\n    border: 1px solid ",
              ";\r\n  }\r\n",
            ]) || (r = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(r) } })
            ));
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      var p = (0, l.iv)(
        c(),
        s.rS.fontWeights.bold,
        s.rS.space[8],
        s.rS.space[2],
        s.rS.fontSizes["3xl"],
        s.rS.space[6],
        s.rS.space[2],
        s.rS.fontSizes["2xl"],
        s.rS.space[4],
        s.rS.space[2],
        s.rS.fontSizes.xl,
        s.rS.space[4],
        s.rS.space[8],
        s.rS.lineHeights.taller,
        s.rS.letterSpacings.tight,
        s.rS.fontSizes.lg,
        s.rS.fontWeights.normal,
        s.rS.space[8],
        s.rS.space[2],
        s.rS.colors.purple[300],
        s.rS.space[4],
        s.rS.radii.sm,
        s.rS.colors.gray[800],
        s.rS.colors.gray[700],
        s.rS.fontSizes.md,
        s.rS.letterSpacings.wide,
        s.rS.fontSizes.md,
        s.rS.colors.gray[700],
        s.rS.fontSizes.md,
        s.rS.fontSizes.sm,
        s.rS.colors.gray[400],
        s.rS.colors.gray[300],
        s.rS.colors.gray[300],
        s.rS.colors.blue[300],
        s.rS.colors.blue[400],
        s.rS.fontSizes["2xl"],
        s.rS.fontSizes.xl,
        s.rS.fontSizes.lg,
        s.rS.radii.sm,
        s.rS.colors.gray[400],
        s.rS.colors.gray[800],
        s.rS.colors.gray[900],
        s.rS.colors.gray[900]
      );
      function m() {
        var n,
          r,
          e =
            ((n = [
              "\n  // Code\n  :root {\n    --prism-scheme: dark;\n\n    /* Colors */\n    --prism-foreground: #6e6e6e;\n    --prism-background: #f4f4f4;\n\n    /* Tokens */\n    --prism-comment: #a8a8a8;\n    --prism-string: #555555;\n    --prism-literal: #333333;\n    --prism-keyword: #000000;\n    --prism-function: #4f4f4f;\n    --prism-deleted: #333333;\n    --prism-class: #333333;\n    --prism-builtin: #757575;\n    --prism-property: #333333;\n    --prism-namespace: #4f4f4f;\n    --prism-punctuation: #ababab;\n    --prism-decorator: var(--prism-class);\n    --prism-operator: #79c0ff;\n    --prism-number: var(--prism-literal);\n    --prism-boolean: var(--prism-literal);\n    --prism-variable: var(--prism-literal);\n    --prism-constant: var(--prism-literal);\n    --prism-symbol: var(--prism-literal);\n    --prism-interpolation: var(--prism-literal);\n    --prism-selector: var(--prism-keyword);\n    --prism-keyword-control: var(--prism-keyword);\n    --prism-regex: var(--prism-string);\n    --prism-json-property: var(--prism-property);\n    --prism-inline-background: var(--prism-background);\n\n    /* Token Styles */\n    --prism-comment-style: italic;\n    --prism-url-decoration: underline;\n\n    /* Extension */\n    --prism-line-number: #a5a5a5;\n    --prism-line-number-gutter: #333333;\n    --prism-line-highlight-background: #eeeeee;\n    --prism-selection-background: #aaaaaa;\n    --prism-marker-color: var(--prism-foreground);\n    --prism-marker-opacity: 0.4;\n    --prism-marker-font-size: 0.8em;\n\n    /* Font */\n    --prism-font-size: ",
              ";\n    --prism-line-height: ",
              ";\n    --prism-font-family: ",
              ';\n    --prism-inline-font-size: var(--prism-font-size);\n    --prism-block-font-size: var(--prism-font-size);\n\n    /* Sizing */\n    --prism-tab-size: 2;\n\n    --prism-block-padding-x: 1em;\n    --prism-block-padding-y: 1em;\n    --prism-block-margin-x: 0;\n    --prism-block-margin-y: 0.5em;\n    --prism-block-radius: 0.3em;\n    --prism-inline-padding-x: 0.3em;\n    --prism-inline-padding-y: 0.1em;\n    --prism-inline-radius: 0.3em;\n\n    /* Overrides */\n    --prism-scheme: dark;\n    --prism-foreground: #ffa657;\n    --prism-background: #1a202c;\n    --prism-comment: #7285b7;\n    --prism-string: #a5d6ff;\n    --prism-literal: #429988;\n    --prism-keyword: #ff7b72;\n    --prism-function: #79c0ff;\n    --prism-function-variable: #d2a8ff;\n    --prism-deleted: #a14f55;\n    --prism-class: #7ee787;\n    --prism-builtin: #c9d1d9;\n    --prism-property: #79c0ff;\n    --prism-parameter: #c9d1d9;\n    --prism-namespace: #db889a;\n    --prism-punctuation: #c9d1d9;\n    --prism-decorator: #bd8f8f;\n    --prism-number: #6394bf;\n    --prism-boolean: #1c6b48;\n    --prism-variable: #c2b36e;\n    --prism-regex: #ab5e3f;\n    --prism-json-property: #6b8b9e;\n    --prism-line-number: #888888;\n    --prism-line-number-gutter: #eeeeee;\n    --prism-line-highlight-background: #444444;\n    --prism-selection-background: #444444;\n  }\n\n  div[class*="language-"],\n  pre[class*="language-"],\n  code[class*="language-"] {\n    font-size: var(--prism-font-size);\n    font-family: var(--prism-font-family);\n    direction: ltr;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    line-height: var(--prism-line-height);\n    -moz-tab-size: var(--prism-tab-size);\n    -o-tab-size: var(--prism-tab-size);\n    tab-size: var(--prism-tab-size);\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n    color: var(--prism-foreground) !important;\n  }\n\n  /* Code blocks */\n  div[class*="language-"],\n  pre[class*="language-"] {\n    font-size: var(--prism-block-font-size);\n    padding: var(--prism-block-padding-y) var(--prism-block-padding-x);\n    margin: var(--prism-block-margin-y) var(--prism-block-margin-x);\n    border-radius: var(--prism-block-radius);\n    overflow: auto;\n    background: var(--prism-background);\n  }\n\n  /* Inline code */\n  :not(pre) > code[class*="language-"] {\n    font-size: var(--prism-inline-font-size);\n    padding: var(--prism-inline-padding-y) var(--prism-inline-padding-x);\n    border-radius: var(--prism-inline-radius);\n    background: var(--prism-inline-background);\n  }\n\n  /* Selection */\n  pre[class*="language-"]::selection,\n  pre[class*="language-"] ::selection,\n  code[class*="language-"]::selection,\n  code[class*="language-"] ::selection,\n  pre[class*="language-"]::-moz-selection,\n  pre[class*="language-"] ::-moz-selection,\n  code[class*="language-"]::-moz-selection,\n  code[class*="language-"] ::-moz-selection {\n    background: var(--prism-selection-background);\n  }\n\n  /* Tokens */\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: var(--prism-comment);\n    font-style: var(--prism-comment-style);\n  }\n\n  .token.function.function-variable {\n    color: var(--prism-function-variable);\n  }\n\n  .token.function.function-variable > .token.maybe-class-name {\n    color: var(--prism-function);\n  }\n\n  .token.parameter {\n    color: var(--prism-parameter);\n  }\n\n  .token.namespace {\n    color: var(--prism-namespace);\n  }\n\n  .token.interpolation {\n    color: var(--prism-interpolation);\n  }\n\n  .token.string {\n    color: var(--prism-string);\n  }\n\n  .token.punctuation {\n    color: var(--prism-punctuation);\n  }\n\n  .token.operator {\n    color: var(--prism-operator);\n  }\n\n  .token.keyword.module,\n  .token.keyword.control-flow {\n    color: var(--prism-keyword-control);\n  }\n\n  .token.url,\n  .token.symbol,\n  .token.inserted {\n    color: var(--prism-symbol);\n  }\n\n  .token.constant {\n    color: var(--prism-constant);\n  }\n\n  .token.string.url {\n    text-decoration: var(--prism-url-decoration);\n  }\n\n  .token.boolean,\n  .language-json .token.boolean {\n    color: var(--prism-boolean);\n  }\n\n  .token.number,\n  .language-json .token.number {\n    color: var(--prism-number);\n  }\n\n  .token.variable {\n    color: var(--prism-variable);\n  }\n\n  .token.keyword {\n    color: var(--prism-keyword);\n  }\n\n  .token.atrule,\n  .token.attr-value,\n  .token.selector {\n    color: var(--prism-selector);\n  }\n\n  .token.function {\n    color: var(--prism-function);\n  }\n\n  .token.deleted {\n    color: var(--prism-deleted);\n  }\n\n  .token.important,\n  .token.bold {\n    font-weight: bold;\n  }\n\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.class-name {\n    color: var(--prism-class);\n  }\n\n  .token.tag,\n  .token.builtin {\n    color: var(--prism-builtin);\n  }\n\n  .token.attr-name,\n  .token.property,\n  .token.entity {\n    color: var(--prism-property);\n  }\n\n  .language-json .token.property {\n    color: var(--prism-json-property);\n  }\n\n  .token.regex {\n    color: var(--prism-regex);\n  }\n\n  .token.decorator,\n  .token.annotation {\n    color: var(--prism-decorator);\n  }\n\n  /* overrides color-values for the Line Numbers plugin\n   * http://prismjs.com/plugins/line-numbers/\n   */\n  .line-numbers .line-numbers-rows {\n    border-right-color: var(--prism-line-number);\n  }\n\n  .line-numbers-rows > span:before {\n    color: var(--prism-line-number-gutter);\n  }\n\n  /* overrides color-values for the Line Highlight plugin\n    * http://prismjs.com/plugins/line-highlight/\n    */\n  .line-highlight {\n    background: var(--prism-line-highlight-background);\n  }\n\n  pre {\n    overflow-x: auto;\n  }\n\n  /**\n   * Inspired by gatsby remark prism - https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/\n   * 1. Make the element just wide enough to fit its content.\n   * 2. Always fill the visible space in .code-highlight.\n   */\n  .code-highlight {\n    float: left; /* 1 */\n    min-width: 100%; /* 2 */\n  }\n\n  .code-line {\n    line-height: 2em;\n    display: block;\n    padding-left: 16px;\n    padding-right: 16px;\n    margin-left: -16px;\n    margin-right: -16px;\n    border-left-width: 4px;\n    border-left-color: rgba(31, 41, 55, 0); /* Set code block color */\n  }\n\n  .code-line.inserted {\n    background-color: rgba(16, 185, 129, 0.2); /* Set inserted line (+) color */\n  }\n\n  .code-line.deleted {\n    background-color: rgba(239, 68, 68, 0.2); /* Set deleted line (-) color */\n  }\n\n  .highlight-line {\n    margin-left: -16px;\n    margin-right: -16px;\n    background-color: rgba(55, 65, 81, 0.5); /* Set highlight bg color */\n    border-left-width: 4px;\n    border-left-color: rgb(155 163 175); /* Set highlight accent border color */\n  }\n\n  .line-number::before {\n    display: inline-block;\n    width: 1rem;\n    text-align: right;\n    margin-right: 16px;\n    margin-left: -8px;\n    color: rgb(156, 163, 175); /* Line number color */\n    content: attr(line);\n  }\n\n  pre[class*="language-"] {\n    font-size: ',
              ";\n    margin: ",
              " 0;\n    overflow: auto;\n    min-width: 100%;\n    border-radius: ",
              ";\n    border-width: 1px;\n    border-color: ",
              ";\n  }\n\n  :not(pre) > code {\n    border-radius: ",
              ";\n  }\n\n  :not(pre) > code {\n    padding: 0.1em;\n    border-radius: 0.3em;\n    white-space: normal;\n    font-size: ",
              ';\n  }\n\n  :not(pre) > code:before,\n  :not(pre) > code:after {\n    content: "`";\n  }\n\n  .rehype-code-title {\n    margin: ',
              " 0 0;\n    padding: ",
              " ",
              ";\n    font-family: ",
              ";\n    background: ",
              ";\n    color: ",
              ";\n    border-top-left-radius: ",
              ";\n    border-top-right-radius: ",
              ';\n    font-size: 0.8rem;\n    font-weight: 600;\n    width: 100%;\n\n    + pre[class*="language-"] {\n      border-top-left-radius: 0;\n      border-top-right-radius: 0;\n      margin-top: 0;\n    }\n  }\n\n  code,\n  pre[class*="language-"] {\n    color: ',
              ";\n  }\n\n  .rehype-code-title {\n    background: ",
              ";\n    color: ",
              ";\n  }\n\n  :not(pre) > code {\n    color: ",
              ";\n  }\n",
            ]),
            (r = [
              "\r\n  // Code\r\n  :root {\r\n    --prism-scheme: dark;\r\n\r\n    /* Colors */\r\n    --prism-foreground: #6e6e6e;\r\n    --prism-background: #f4f4f4;\r\n\r\n    /* Tokens */\r\n    --prism-comment: #a8a8a8;\r\n    --prism-string: #555555;\r\n    --prism-literal: #333333;\r\n    --prism-keyword: #000000;\r\n    --prism-function: #4f4f4f;\r\n    --prism-deleted: #333333;\r\n    --prism-class: #333333;\r\n    --prism-builtin: #757575;\r\n    --prism-property: #333333;\r\n    --prism-namespace: #4f4f4f;\r\n    --prism-punctuation: #ababab;\r\n    --prism-decorator: var(--prism-class);\r\n    --prism-operator: #79c0ff;\r\n    --prism-number: var(--prism-literal);\r\n    --prism-boolean: var(--prism-literal);\r\n    --prism-variable: var(--prism-literal);\r\n    --prism-constant: var(--prism-literal);\r\n    --prism-symbol: var(--prism-literal);\r\n    --prism-interpolation: var(--prism-literal);\r\n    --prism-selector: var(--prism-keyword);\r\n    --prism-keyword-control: var(--prism-keyword);\r\n    --prism-regex: var(--prism-string);\r\n    --prism-json-property: var(--prism-property);\r\n    --prism-inline-background: var(--prism-background);\r\n\r\n    /* Token Styles */\r\n    --prism-comment-style: italic;\r\n    --prism-url-decoration: underline;\r\n\r\n    /* Extension */\r\n    --prism-line-number: #a5a5a5;\r\n    --prism-line-number-gutter: #333333;\r\n    --prism-line-highlight-background: #eeeeee;\r\n    --prism-selection-background: #aaaaaa;\r\n    --prism-marker-color: var(--prism-foreground);\r\n    --prism-marker-opacity: 0.4;\r\n    --prism-marker-font-size: 0.8em;\r\n\r\n    /* Font */\r\n    --prism-font-size: ",
              ";\r\n    --prism-line-height: ",
              ";\r\n    --prism-font-family: ",
              ';\r\n    --prism-inline-font-size: var(--prism-font-size);\r\n    --prism-block-font-size: var(--prism-font-size);\r\n\r\n    /* Sizing */\r\n    --prism-tab-size: 2;\r\n\r\n    --prism-block-padding-x: 1em;\r\n    --prism-block-padding-y: 1em;\r\n    --prism-block-margin-x: 0;\r\n    --prism-block-margin-y: 0.5em;\r\n    --prism-block-radius: 0.3em;\r\n    --prism-inline-padding-x: 0.3em;\r\n    --prism-inline-padding-y: 0.1em;\r\n    --prism-inline-radius: 0.3em;\r\n\r\n    /* Overrides */\r\n    --prism-scheme: dark;\r\n    --prism-foreground: #ffa657;\r\n    --prism-background: #1a202c;\r\n    --prism-comment: #7285b7;\r\n    --prism-string: #a5d6ff;\r\n    --prism-literal: #429988;\r\n    --prism-keyword: #ff7b72;\r\n    --prism-function: #79c0ff;\r\n    --prism-function-variable: #d2a8ff;\r\n    --prism-deleted: #a14f55;\r\n    --prism-class: #7ee787;\r\n    --prism-builtin: #c9d1d9;\r\n    --prism-property: #79c0ff;\r\n    --prism-parameter: #c9d1d9;\r\n    --prism-namespace: #db889a;\r\n    --prism-punctuation: #c9d1d9;\r\n    --prism-decorator: #bd8f8f;\r\n    --prism-number: #6394bf;\r\n    --prism-boolean: #1c6b48;\r\n    --prism-variable: #c2b36e;\r\n    --prism-regex: #ab5e3f;\r\n    --prism-json-property: #6b8b9e;\r\n    --prism-line-number: #888888;\r\n    --prism-line-number-gutter: #eeeeee;\r\n    --prism-line-highlight-background: #444444;\r\n    --prism-selection-background: #444444;\r\n  }\r\n\r\n  div[class*="language-"],\r\n  pre[class*="language-"],\r\n  code[class*="language-"] {\r\n    font-size: var(--prism-font-size);\r\n    font-family: var(--prism-font-family);\r\n    direction: ltr;\r\n    text-align: left;\r\n    white-space: pre;\r\n    word-spacing: normal;\r\n    word-break: normal;\r\n    line-height: var(--prism-line-height);\r\n    -moz-tab-size: var(--prism-tab-size);\r\n    -o-tab-size: var(--prism-tab-size);\r\n    tab-size: var(--prism-tab-size);\r\n    -webkit-hyphens: none;\r\n    -moz-hyphens: none;\r\n    -ms-hyphens: none;\r\n    hyphens: none;\r\n    color: var(--prism-foreground) !important;\r\n  }\r\n\r\n  /* Code blocks */\r\n  div[class*="language-"],\r\n  pre[class*="language-"] {\r\n    font-size: var(--prism-block-font-size);\r\n    padding: var(--prism-block-padding-y) var(--prism-block-padding-x);\r\n    margin: var(--prism-block-margin-y) var(--prism-block-margin-x);\r\n    border-radius: var(--prism-block-radius);\r\n    overflow: auto;\r\n    background: var(--prism-background);\r\n  }\r\n\r\n  /* Inline code */\r\n  :not(pre) > code[class*="language-"] {\r\n    font-size: var(--prism-inline-font-size);\r\n    padding: var(--prism-inline-padding-y) var(--prism-inline-padding-x);\r\n    border-radius: var(--prism-inline-radius);\r\n    background: var(--prism-inline-background);\r\n  }\r\n\r\n  /* Selection */\r\n  pre[class*="language-"]::selection,\r\n  pre[class*="language-"] ::selection,\r\n  code[class*="language-"]::selection,\r\n  code[class*="language-"] ::selection,\r\n  pre[class*="language-"]::-moz-selection,\r\n  pre[class*="language-"] ::-moz-selection,\r\n  code[class*="language-"]::-moz-selection,\r\n  code[class*="language-"] ::-moz-selection {\r\n    background: var(--prism-selection-background);\r\n  }\r\n\r\n  /* Tokens */\r\n  .token.comment,\r\n  .token.prolog,\r\n  .token.doctype,\r\n  .token.cdata {\r\n    color: var(--prism-comment);\r\n    font-style: var(--prism-comment-style);\r\n  }\r\n\r\n  .token.function.function-variable {\r\n    color: var(--prism-function-variable);\r\n  }\r\n\r\n  .token.function.function-variable > .token.maybe-class-name {\r\n    color: var(--prism-function);\r\n  }\r\n\r\n  .token.parameter {\r\n    color: var(--prism-parameter);\r\n  }\r\n\r\n  .token.namespace {\r\n    color: var(--prism-namespace);\r\n  }\r\n\r\n  .token.interpolation {\r\n    color: var(--prism-interpolation);\r\n  }\r\n\r\n  .token.string {\r\n    color: var(--prism-string);\r\n  }\r\n\r\n  .token.punctuation {\r\n    color: var(--prism-punctuation);\r\n  }\r\n\r\n  .token.operator {\r\n    color: var(--prism-operator);\r\n  }\r\n\r\n  .token.keyword.module,\r\n  .token.keyword.control-flow {\r\n    color: var(--prism-keyword-control);\r\n  }\r\n\r\n  .token.url,\r\n  .token.symbol,\r\n  .token.inserted {\r\n    color: var(--prism-symbol);\r\n  }\r\n\r\n  .token.constant {\r\n    color: var(--prism-constant);\r\n  }\r\n\r\n  .token.string.url {\r\n    text-decoration: var(--prism-url-decoration);\r\n  }\r\n\r\n  .token.boolean,\r\n  .language-json .token.boolean {\r\n    color: var(--prism-boolean);\r\n  }\r\n\r\n  .token.number,\r\n  .language-json .token.number {\r\n    color: var(--prism-number);\r\n  }\r\n\r\n  .token.variable {\r\n    color: var(--prism-variable);\r\n  }\r\n\r\n  .token.keyword {\r\n    color: var(--prism-keyword);\r\n  }\r\n\r\n  .token.atrule,\r\n  .token.attr-value,\r\n  .token.selector {\r\n    color: var(--prism-selector);\r\n  }\r\n\r\n  .token.function {\r\n    color: var(--prism-function);\r\n  }\r\n\r\n  .token.deleted {\r\n    color: var(--prism-deleted);\r\n  }\r\n\r\n  .token.important,\r\n  .token.bold {\r\n    font-weight: bold;\r\n  }\r\n\r\n  .token.italic {\r\n    font-style: italic;\r\n  }\r\n\r\n  .token.class-name {\r\n    color: var(--prism-class);\r\n  }\r\n\r\n  .token.tag,\r\n  .token.builtin {\r\n    color: var(--prism-builtin);\r\n  }\r\n\r\n  .token.attr-name,\r\n  .token.property,\r\n  .token.entity {\r\n    color: var(--prism-property);\r\n  }\r\n\r\n  .language-json .token.property {\r\n    color: var(--prism-json-property);\r\n  }\r\n\r\n  .token.regex {\r\n    color: var(--prism-regex);\r\n  }\r\n\r\n  .token.decorator,\r\n  .token.annotation {\r\n    color: var(--prism-decorator);\r\n  }\r\n\r\n  /* overrides color-values for the Line Numbers plugin\r\n   * http://prismjs.com/plugins/line-numbers/\r\n   */\r\n  .line-numbers .line-numbers-rows {\r\n    border-right-color: var(--prism-line-number);\r\n  }\r\n\r\n  .line-numbers-rows > span:before {\r\n    color: var(--prism-line-number-gutter);\r\n  }\r\n\r\n  /* overrides color-values for the Line Highlight plugin\r\n    * http://prismjs.com/plugins/line-highlight/\r\n    */\r\n  .line-highlight {\r\n    background: var(--prism-line-highlight-background);\r\n  }\r\n\r\n  pre {\r\n    overflow-x: auto;\r\n  }\r\n\r\n  /**\r\n   * Inspired by gatsby remark prism - https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/\r\n   * 1. Make the element just wide enough to fit its content.\r\n   * 2. Always fill the visible space in .code-highlight.\r\n   */\r\n  .code-highlight {\r\n    float: left; /* 1 */\r\n    min-width: 100%; /* 2 */\r\n  }\r\n\r\n  .code-line {\r\n    line-height: 2em;\r\n    display: block;\r\n    padding-left: 16px;\r\n    padding-right: 16px;\r\n    margin-left: -16px;\r\n    margin-right: -16px;\r\n    border-left-width: 4px;\r\n    border-left-color: rgba(31, 41, 55, 0); /* Set code block color */\r\n  }\r\n\r\n  .code-line.inserted {\r\n    background-color: rgba(16, 185, 129, 0.2); /* Set inserted line (+) color */\r\n  }\r\n\r\n  .code-line.deleted {\r\n    background-color: rgba(239, 68, 68, 0.2); /* Set deleted line (-) color */\r\n  }\r\n\r\n  .highlight-line {\r\n    margin-left: -16px;\r\n    margin-right: -16px;\r\n    background-color: rgba(55, 65, 81, 0.5); /* Set highlight bg color */\r\n    border-left-width: 4px;\r\n    border-left-color: rgb(155 163 175); /* Set highlight accent border color */\r\n  }\r\n\r\n  .line-number::before {\r\n    display: inline-block;\r\n    width: 1rem;\r\n    text-align: right;\r\n    margin-right: 16px;\r\n    margin-left: -8px;\r\n    color: rgb(156, 163, 175); /* Line number color */\r\n    content: attr(line);\r\n  }\r\n\r\n  pre[class*="language-"] {\r\n    font-size: ',
              ";\r\n    margin: ",
              " 0;\r\n    overflow: auto;\r\n    min-width: 100%;\r\n    border-radius: ",
              ";\r\n    border-width: 1px;\r\n    border-color: ",
              ";\r\n  }\r\n\r\n  :not(pre) > code {\r\n    border-radius: ",
              ";\r\n  }\r\n\r\n  :not(pre) > code {\r\n    padding: 0.1em;\r\n    border-radius: 0.3em;\r\n    white-space: normal;\r\n    font-size: ",
              ';\r\n  }\r\n\r\n  :not(pre) > code:before,\r\n  :not(pre) > code:after {\r\n    content: "\\`";\r\n  }\r\n\r\n  .rehype-code-title {\r\n    margin: ',
              " 0 0;\r\n    padding: ",
              " ",
              ";\r\n    font-family: ",
              ";\r\n    background: ",
              ";\r\n    color: ",
              ";\r\n    border-top-left-radius: ",
              ";\r\n    border-top-right-radius: ",
              ';\r\n    font-size: 0.8rem;\r\n    font-weight: 600;\r\n    width: 100%;\r\n\r\n    + pre[class*="language-"] {\r\n      border-top-left-radius: 0;\r\n      border-top-right-radius: 0;\r\n      margin-top: 0;\r\n    }\r\n  }\r\n\r\n  code,\r\n  pre[class*="language-"] {\r\n    color: ',
              ";\r\n  }\r\n\r\n  .rehype-code-title {\r\n    background: ",
              ";\r\n    color: ",
              ";\r\n  }\r\n\r\n  :not(pre) > code {\r\n    color: ",
              ";\r\n  }\r\n",
            ]) || (r = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(r) } })
            ));
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      var d = (0, l.iv)(
        m(),
        s.rS.fontSizes.sm,
        s.rS.lineHeights.normal,
        s.rS.fonts.mono,
        s.rS.fontSizes.md,
        s.rS.space[6],
        s.rS.radii.sm,
        s.rS.colors.gray[700],
        s.rS.radii.sm,
        s.rS.fontSizes.sm,
        s.rS.space[6],
        s.rS.space[2],
        s.rS.space[4],
        s.rS.fonts.mono,
        s.rS.colors.gray[200],
        s.rS.colors.gray[800],
        s.rS.radii.sm,
        s.rS.radii.sm,
        s.rS.colors.gray[50],
        s.rS.colors.gray[700],
        s.rS.colors.gray[100],
        s.rS.colors.purple[300]
      );
      function g() {
        var n,
          r,
          e =
            ((n = [
              "\n  html {\n    scroll-behavior: smooth;\n  }\n\n  .jumbotron-name-heading {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -webkit-animation: shine 10s infinite linear;\n\n    @keyframes shine {\n      from {\n        -webkit-filter: hue-rotate(0deg);\n      }\n      to {\n        -webkit-filter: hue-rotate(-360deg);\n      }\n    }\n  }\n\n  .image {\n    .unblur {\n      animation: unblur 0.5s linear;\n    }\n\n    @keyframes unblur {\n      from {\n        filter: blur(20px);\n      }\n      to {\n        filter: blur(0);\n      }\n    }\n  }\n",
            ]),
            r || (r = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(r) } })
            ));
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      var b = (0, l.iv)(g()),
        u = function (n) {
          var r = n.children;
          return (0, o.BX)(a.xu, {
            bg: "black",
            color: "gray.200",
            minH: "100vh",
            children: [
              (0, o.tZ)(l.xB, { styles: p }),
              (0, o.tZ)(l.xB, { styles: b }),
              (0, o.tZ)(l.xB, { styles: d }),
              r,
            ],
          });
        },
        f = e(8700),
        h = (0, i.B1C)({
          config: { initialColorMode: "dark", useSystemColorMode: !1 },
          fonts: {
            heading: "'Source Sans Pro', sans-serif",
            body: "'Inter', sans-serif",
          },
        }),
        k = function (n) {
          var r = n.children,
            e = (0, f.useRouter)();
          return (0, o.tZ)(i.xjn, {
            theme: h,
            children: (0, o.tZ)(
              t.MT,
              {
                initialScale: 0.95,
                in: !0,
                children: (0, o.tZ)(u, { children: r }),
              },
              e.route
            ),
          });
        };
    },
  },
]);
