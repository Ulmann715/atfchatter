import{g as l}from"./index-BIvQ7OHL.js";function c(n,a){for(var e=0;e<a.length;e++){const t=a[e];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in n)){const i=Object.getOwnPropertyDescriptor(t,r);i&&Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var o,s;function f(){if(s)return o;s=1,o=n,n.displayName="v",n.aliases=[];function n(a){(function(e){var t={pattern:/[\s\S]+/,inside:null};e.languages.v=e.languages.extend("clike",{string:{pattern:/r?(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,alias:"quoted-string",greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:\{[^{}]*\}|\w+(?:\.\w+(?:\([^\(\)]*\))?|\[[^\[\]]+\])*)/,lookbehind:!0,inside:{"interpolation-variable":{pattern:/^\$\w[\s\S]*$/,alias:"variable"},"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},"interpolation-expression":t}}}},"class-name":{pattern:/(\b(?:enum|interface|struct|type)\s+)(?:C\.)?\w+/,lookbehind:!0},keyword:/(?:\b(?:__global|as|asm|assert|atomic|break|chan|const|continue|defer|else|embed|enum|fn|for|go(?:to)?|if|import|in|interface|is|lock|match|module|mut|none|or|pub|return|rlock|select|shared|sizeof|static|struct|type(?:of)?|union|unsafe)|\$(?:else|for|if)|#(?:flag|include))\b/,number:/\b(?:0x[a-f\d]+(?:_[a-f\d]+)*|0b[01]+(?:_[01]+)*|0o[0-7]+(?:_[0-7]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?)\b/i,operator:/~|\?|[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\.?/,builtin:/\b(?:any(?:_float|_int)?|bool|byte(?:ptr)?|charptr|f(?:32|64)|i(?:8|16|64|128|nt)|rune|size_t|string|u(?:16|32|64|128)|voidptr)\b/}),t.inside=e.languages.v,e.languages.insertBefore("v","string",{char:{pattern:/`(?:\\`|\\?[^`]{1,2})`/,alias:"rune"}}),e.languages.insertBefore("v","operator",{attribute:{pattern:/(^[\t ]*)\[(?:deprecated|direct_array_access|flag|inline|live|ref_only|typedef|unsafe_fn|windows_stdcall)\]/m,lookbehind:!0,alias:"annotation",inside:{punctuation:/[\[\]]/,keyword:/\w+/}},generic:{pattern:/<\w+>(?=\s*[\)\{])/,inside:{punctuation:/[<>]/,"class-name":/\w+/}}}),e.languages.insertBefore("v","function",{"generic-function":{pattern:/\b\w+\s*<\w+>(?=\()/,inside:{function:/^\w+/,generic:{pattern:/<\w+>/,inside:e.languages.v.generic.inside}}}})})(a)}return o}var u=f();const p=l(u),g=c({__proto__:null,default:p},[u]);export{g as v};
//# sourceMappingURL=v-DSHPwA2T.js.map
