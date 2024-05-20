"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[7868],{7868:function(n,e,t){t.r(e),t.d(e,{default:function(){return a}});var a=[Object.freeze({displayName:"Dart",name:"dart",patterns:[{match:"^(#!.*)$",name:"meta.preprocessor.script.dart"},{begin:"^\\w*\\b(library|import|part of|part|export)\\b",beginCaptures:{0:{name:"keyword.other.import.dart"}},end:";",endCaptures:{0:{name:"punctuation.terminator.dart"}},name:"meta.declaration.dart",patterns:[{include:"#strings"},{include:"#comments"},{match:"\\b(as|show|hide)\\b",name:"keyword.other.import.dart"},{match:"\\b(if)\\b",name:"keyword.control.dart"}]},{include:"#comments"},{include:"#punctuation"},{include:"#annotations"},{include:"#keywords"},{include:"#constants-and-special-vars"},{include:"#operators"},{include:"#strings"}],repository:{annotations:{patterns:[{match:"@[a-zA-Z]+",name:"storage.type.annotation.dart"}]},"class-identifier":{patterns:[{match:"(?<!\\$)\\b(bool|num|int|double|dynamic)\\b(?!\\$)",name:"support.class.dart"},{match:"(?<!\\$)\\bvoid\\b(?!\\$)",name:"storage.type.primitive.dart"},{begin:"(?<![a-zA-Z0-9_$])([_$]*[A-Z][a-zA-Z0-9_$]*)\\b",beginCaptures:{1:{name:"support.class.dart"}},end:"(?!<)",patterns:[{include:"#type-args"}]}]},comments:{patterns:[{captures:{0:{name:"punctuation.definition.comment.dart"}},match:"/\\*\\*/",name:"comment.block.empty.dart"},{include:"#comments-doc-oldschool"},{include:"#comments-doc"},{include:"#comments-inline"}]},"comments-block":{patterns:[{begin:"/\\*",end:"\\*/",name:"comment.block.dart",patterns:[{include:"#comments-block"}]}]},"comments-doc":{patterns:[{begin:"///",name:"comment.block.documentation.dart",patterns:[{include:"#dartdoc"}],while:"^\\s*///"}]},"comments-doc-oldschool":{patterns:[{begin:"/\\*\\*",end:"\\*/",name:"comment.block.documentation.dart",patterns:[{include:"#comments-doc-oldschool"},{include:"#comments-block"},{include:"#dartdoc"}]}]},"comments-inline":{patterns:[{include:"#comments-block"},{captures:{1:{name:"comment.line.double-slash.dart"}},match:"((//).*)$"}]},"constants-and-special-vars":{patterns:[{match:"(?<!\\$)\\b(true|false|null)\\b(?!\\$)",name:"constant.language.dart"},{match:"(?<!\\$)\\b(this|super)\\b(?!\\$)",name:"variable.language.dart"},{match:"(?<!\\$)\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)\\b(?!\\$)",name:"constant.numeric.dart"},{include:"#class-identifier"},{include:"#function-identifier"}]},dartdoc:{patterns:[{captures:{0:{name:"variable.name.source.dart"}},match:"(\\[.*?\\])"},{captures:{0:{name:"variable.name.source.dart"}},match:"^ {4,}(?![ \\*]).*"},{begin:"```.*?$",contentName:"variable.other.source.dart",end:"```"},{captures:{0:{name:"variable.other.source.dart"}},match:"(`[^`]+?`)"},{captures:{2:{name:"variable.other.source.dart"}},match:"(\\* ((    ).*))$"}]},"function-identifier":{patterns:[{captures:{1:{name:"entity.name.function.dart"},2:{patterns:[{include:"#type-args"}]}},match:"([_$]*[a-z][a-zA-Z0-9_$]*)(<(?:[a-zA-Z0-9_$<>?]|,\\s*|\\s+extends\\s+)+>)?[!?]?\\("}]},keywords:{patterns:[{match:"(?<!\\$)\\bas\\b(?!\\$)",name:"keyword.cast.dart"},{match:"(?<!\\$)\\b(try|on|catch|finally|throw|rethrow)\\b(?!\\$)",name:"keyword.control.catch-exception.dart"},{match:"(?<!\\$)\\b(break|case|continue|default|do|else|for|if|in|return|switch|while|when)\\b(?!\\$)",name:"keyword.control.dart"},{match:"(?<!\\$)\\b(sync(\\*)?|async(\\*)?|await|yield(\\*)?)\\b(?!\\$)",name:"keyword.control.dart"},{match:"(?<!\\$)\\bassert\\b(?!\\$)",name:"keyword.control.dart"},{match:"(?<!\\$)\\b(new)\\b(?!\\$)",name:"keyword.control.new.dart"},{match:"(?<!\\$)\\b(abstract|sealed|base|interface|class|enum|extends|extension type|extension|external|factory|implements|get(?!\\()|mixin|native|operator|set(?!\\()|typedef|with|covariant)\\b(?!\\$)",name:"keyword.declaration.dart"},{match:"(?<!\\$)\\b(static|final|const|required|late)\\b(?!\\$)",name:"storage.modifier.dart"},{match:"(?<!\\$)\\b(?:void|var)\\b(?!\\$)",name:"storage.type.primitive.dart"}]},operators:{patterns:[{match:"(?<!\\$)\\b(is\\!?)\\b(?!\\$)",name:"keyword.operator.dart"},{match:"\\?|:",name:"keyword.operator.ternary.dart"},{match:"(<<|>>>?|~|\\^|\\||&)",name:"keyword.operator.bitwise.dart"},{match:"((&|\\^|\\||<<|>>>?)=)",name:"keyword.operator.assignment.bitwise.dart"},{match:"(=>)",name:"keyword.operator.closure.dart"},{match:"(==|!=|<=?|>=?)",name:"keyword.operator.comparison.dart"},{match:"(([+*/%-]|\\~)=)",name:"keyword.operator.assignment.arithmetic.dart"},{match:"(=)",name:"keyword.operator.assignment.dart"},{match:"(\\-\\-|\\+\\+)",name:"keyword.operator.increment-decrement.dart"},{match:"(\\-|\\+|\\*|\\/|\\~\\/|%)",name:"keyword.operator.arithmetic.dart"},{match:"(!|&&|\\|\\|)",name:"keyword.operator.logical.dart"}]},punctuation:{patterns:[{match:",",name:"punctuation.comma.dart"},{match:";",name:"punctuation.terminator.dart"},{match:"\\.",name:"punctuation.dot.dart"}]},"string-interp":{patterns:[{captures:{1:{name:"variable.parameter.dart"}},match:"\\$([a-zA-Z0-9_]+)",name:"string.interpolated.expression.dart"},{begin:"\\$\\{",end:"\\}",name:"string.interpolated.expression.dart",patterns:[{include:"#constants-and-special-vars"},{include:"#strings"},{match:"[a-zA-Z0-9_]+",name:"variable.parameter.dart"}]},{match:"\\\\.",name:"constant.character.escape.dart"}]},strings:{patterns:[{begin:'(?<!r)"""',end:'"""(?!")',name:"string.interpolated.triple.double.dart",patterns:[{include:"#string-interp"}]},{begin:"(?<!r)'''",end:"'''(?!')",name:"string.interpolated.triple.single.dart",patterns:[{include:"#string-interp"}]},{begin:'r"""',end:'"""(?!")',name:"string.quoted.triple.double.dart"},{begin:"r'''",end:"'''(?!')",name:"string.quoted.triple.single.dart"},{begin:'(?<!\\|r)"',end:'"',name:"string.interpolated.double.dart",patterns:[{match:"\\n",name:"invalid.string.newline"},{include:"#string-interp"}]},{begin:'r"',end:'"',name:"string.quoted.double.dart",patterns:[{match:"\\n",name:"invalid.string.newline"}]},{begin:"(?<!\\|r)'",end:"'",name:"string.interpolated.single.dart",patterns:[{match:"\\n",name:"invalid.string.newline"},{include:"#string-interp"}]},{begin:"r'",end:"'",name:"string.quoted.single.dart",patterns:[{match:"\\n",name:"invalid.string.newline"}]}]},"type-args":{begin:"(<)",beginCaptures:{1:{name:"other.source.dart"}},end:"(>)",endCaptures:{1:{name:"other.source.dart"}},patterns:[{include:"#class-identifier"},{match:","},{match:"extends",name:"keyword.declaration.dart"},{include:"#comments"}]}},scopeName:"source.dart"})]}}]);
