"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[9254],{39254:function(n,e,a){a.r(e),a.d(e,{default:function(){return t}});var t=[Object.freeze({displayName:"Desktop",name:"desktop",patterns:[{include:"#layout"},{include:"#keywords"},{include:"#values"},{include:"#inCommands"},{include:"#inCategories"}],repository:{inCategories:{patterns:[{match:"(?<=^Categories.*)AudioVideo|(?<=^Categories.*)Audio|(?<=^Categories.*)Video|(?<=^Categories.*)Development|(?<=^Categories.*)Education|(?<=^Categories.*)Game|(?<=^Categories.*)Graphics|(?<=^Categories.*)Network|(?<=^Categories.*)Office|(?<=^Categories.*)Science|(?<=^Categories.*)Settings|(?<=^Categories.*)System|(?<=^Categories.*)Utility",name:"markup.bold"}]},inCommands:{patterns:[{match:"(?<=^Exec.*\\s)-+\\S+",name:"variable.parameter"},{match:"(?<=^Exec.*)\\s\\%[fFuUick]\\s",name:"variable.language"},{match:'".*"',name:"string"}]},keywords:{patterns:[{match:"^Type\\b|^Version\\b|^Name\\b|^GenericName\\b|^NoDisplay\\b|^Comment\\b|^Icon\\b|^Hidden\\b|^OnlyShowIn\\b|^NotShowIn\\b|^DBusActivatable\\b|^TryExec\\b|^Exec\\b|^Path\\b|^Terminal\\b|^Actions\\b|^MimeType\\b|^Categories\\b|^Implements\\b|^Keywords\\b|^StartupNotify\\b|^StartupWMClass\\b|^URL\\b|^PrefersNonDefaultGPU\\b|^Encoding\\b",name:"keyword"},{match:"^X-[A-z 0-9 -]*",name:"keyword.other"},{match:"(?<!^)\\[.+\\]",name:"constant.language"},{match:"^GtkTheme\\b|^MetacityTheme\\b|^IconTheme\\b|^CursorTheme\\b|^ButtonLayout\\b|^ApplicationFont\\b",name:"keyword"}]},layout:{patterns:[{begin:"^\\[Desktop",end:"\\]",name:"markup.heading"},{begin:"^\\[X-\\w*",end:"\\]",name:"markup.heading"},{match:"^\\s*#.*",name:"comment"},{match:";",name:"strong"}]},values:{patterns:[{match:"(?<=^\\S+)=",name:"keyword.operator"},{match:"\\btrue\\b|\\bfalse\\b",name:"variable.other"},{match:"(?<=^Version.*)\\d+(\\.{0,1}\\d*)",name:"variable.other"}]}},scopeName:"source.desktop"})]}}]);
