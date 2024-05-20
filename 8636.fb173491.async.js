"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[8636,7232],{58636:function(i,e,n){n.r(e),n.d(e,{default:function(){return r}});var t=n(80378),a=n(83622),l=n(72430),m=n(97232);const s=Object.freeze({displayName:"Handlebars",name:"handlebars",patterns:[{include:"#yfm"},{include:"#extends"},{include:"#block_comments"},{include:"#comments"},{include:"#block_helper"},{include:"#end_block"},{include:"#else_token"},{include:"#partial_and_var"},{include:"#inline_script"},{include:"#html_tags"},{include:"text.html.basic"}],repository:{block_comments:{patterns:[{begin:"\\{\\{!--",end:"--\\}\\}",name:"comment.block.handlebars",patterns:[{match:"@\\w*",name:"keyword.annotation.handlebars"},{include:"#comments"}]},{begin:"<!--",captures:{0:{name:"punctuation.definition.comment.html"}},end:"-{2,3}\\s*>",name:"comment.block.html",patterns:[{match:"--",name:"invalid.illegal.bad-comments-or-CDATA.html"}]}]},block_helper:{begin:"(\\{\\{)(~?\\#)([-a-zA-Z0-9_\\./>]+)\\s?(@?[-a-zA-Z0-9_\\./]+)*\\s?(@?[-a-zA-Z0-9_\\./]+)*\\s?(@?[-a-zA-Z0-9_\\./]+)*",beginCaptures:{1:{name:"support.constant.handlebars"},2:{name:"support.constant.handlebars keyword.control"},3:{name:"support.constant.handlebars keyword.control"},4:{name:"variable.parameter.handlebars"},5:{name:"support.constant.handlebars"},6:{name:"variable.parameter.handlebars"},7:{name:"support.constant.handlebars"}},end:"(~?\\}\\})",endCaptures:{1:{name:"support.constant.handlebars"}},name:"meta.function.block.start.handlebars",patterns:[{include:"#string"},{include:"#handlebars_attribute"}]},comments:{patterns:[{begin:"\\{\\{!",end:"\\}\\}",name:"comment.block.handlebars",patterns:[{match:"@\\w*",name:"keyword.annotation.handlebars"},{include:"#comments"}]},{begin:"<!--",captures:{0:{name:"punctuation.definition.comment.html"}},end:"-{2,3}\\s*>",name:"comment.block.html",patterns:[{match:"--",name:"invalid.illegal.bad-comments-or-CDATA.html"}]}]},else_token:{begin:"(\\{\\{)(~?else)(@?\\s(if)\\s([-a-zA-Z0-9_\\.\\(\\s\\)/]+))?",beginCaptures:{1:{name:"support.constant.handlebars"},2:{name:"support.constant.handlebars keyword.control"},3:{name:"support.constant.handlebars"},4:{name:"variable.parameter.handlebars"}},end:"(~?\\}\\}\\}*)",endCaptures:{1:{name:"support.constant.handlebars"}},name:"meta.function.inline.else.handlebars"},end_block:{begin:"(\\{\\{)(~?/)([a-zA-Z0-9/_\\.-]+)\\s*",beginCaptures:{1:{name:"support.constant.handlebars"},2:{name:"support.constant.handlebars keyword.control"},3:{name:"support.constant.handlebars keyword.control"}},end:"(~?\\}\\})",endCaptures:{1:{name:"support.constant.handlebars"}},name:"meta.function.block.end.handlebars",patterns:[]},entities:{patterns:[{captures:{1:{name:"punctuation.definition.entity.html"},3:{name:"punctuation.definition.entity.html"}},match:"(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)",name:"constant.character.entity.html"},{match:"&",name:"invalid.illegal.bad-ampersand.html"}]},"escaped-double-quote":{match:'\\\\"',name:"constant.character.escape.js"},"escaped-single-quote":{match:"\\\\'",name:"constant.character.escape.js"},extends:{patterns:[{begin:"(\\{\\{!<)\\s([-a-zA-Z0-9_\\./]+)",beginCaptures:{1:{name:"support.function.handlebars"},2:{name:"support.class.handlebars"}},end:"(\\}\\})",endCaptures:{1:{name:"support.function.handlebars"}},name:"meta.preprocessor.handlebars"}]},handlebars_attribute:{patterns:[{include:"#handlebars_attribute_name"},{include:"#handlebars_attribute_value"}]},handlebars_attribute_name:{begin:"\\b([-a-zA-Z0-9_\\.]+)\\b=",captures:{1:{name:"variable.parameter.handlebars"}},end:`(?='|"|)`,name:"entity.other.attribute-name.handlebars"},handlebars_attribute_value:{begin:"([-a-zA-Z0-9_\\./]+)\\b",captures:{1:{name:"variable.parameter.handlebars"}},end:`('|"|)`,name:"entity.other.attribute-value.handlebars",patterns:[{include:"#string"}]},html_tags:{patterns:[{begin:"(<)([a-zA-Z0-9:-]+)(?=[^>]*></\\2>)",beginCaptures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.html"}},end:"(>(<)/)(\\2)(>)",endCaptures:{1:{name:"punctuation.definition.tag.html"},2:{name:"meta.scope.between-tag-pair.html"},3:{name:"entity.name.tag.html"},4:{name:"punctuation.definition.tag.html"}},name:"meta.tag.any.html",patterns:[{include:"#tag-stuff"}]},{begin:"(<\\?)(xml)",captures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.xml.html"}},end:"(\\?>)",name:"meta.tag.preprocessor.xml.html",patterns:[{include:"#tag_generic_attribute"},{include:"#string"}]},{begin:"<!--",captures:{0:{name:"punctuation.definition.comment.html"}},end:"--\\s*>",name:"comment.block.html",patterns:[{match:"--",name:"invalid.illegal.bad-comments-or-CDATA.html"}]},{begin:"<!",captures:{0:{name:"punctuation.definition.tag.html"}},end:">",name:"meta.tag.sgml.html",patterns:[{begin:"(DOCTYPE|doctype)",captures:{1:{name:"entity.name.tag.doctype.html"}},end:"(?=>)",name:"meta.tag.sgml.doctype.html",patterns:[{match:'"[^">]*"',name:"string.quoted.double.doctype.identifiers-and-DTDs.html"}]},{begin:"\\[CDATA\\[",end:"]](?=>)",name:"constant.other.inline-data.html"},{match:"(\\s*)(?!--|>)\\S(\\s*)",name:"invalid.illegal.bad-comments-or-CDATA.html"}]},{begin:"(?:^\\s+)?(<)((?i:style))\\b(?![^>]*/>)",captures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.style.html"},3:{name:"punctuation.definition.tag.html"}},end:"(</)((?i:style))(>)(?:\\s*\\n)?",name:"source.css.embedded.html",patterns:[{include:"#tag-stuff"},{begin:"(>)",beginCaptures:{1:{name:"punctuation.definition.tag.html"}},end:"(?=</(?i:style))",patterns:[{include:"source.css"}]}]},{begin:"(?:^\\s+)?(<)((?i:script))\\b(?![^>]*/>)",beginCaptures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.script.html"}},end:"(?<=</(script|SCRIPT))(>)(?:\\s*\\n)?",endCaptures:{2:{name:"punctuation.definition.tag.html"}},name:"source.js.embedded.html",patterns:[{include:"#tag-stuff"},{begin:"(?<!</(?:script|SCRIPT))(>)",captures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.script.html"}},end:"(</)((?i:script))",patterns:[{captures:{1:{name:"punctuation.definition.comment.js"}},match:"(//).*?((?=<\/script)|$\\n?)",name:"comment.line.double-slash.js"},{begin:"/\\*",captures:{0:{name:"punctuation.definition.comment.js"}},end:"\\*/|(?=<\/script)",name:"comment.block.js"},{include:"source.js"}]}]},{begin:"(</?)((?i:body|head|html)\\b)",captures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.structure.any.html"}},end:"(>)",name:"meta.tag.structure.any.html",patterns:[{include:"#tag-stuff"}]},{begin:"(</?)((?i:address|blockquote|dd|div|header|section|footer|aside|nav|dl|dt|fieldset|form|frame|frameset|h1|h2|h3|h4|h5|h6|iframe|noframes|object|ol|p|ul|applet|center|dir|hr|menu|pre)\\b)",captures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.block.any.html"}},end:"(>)",name:"meta.tag.block.any.html",patterns:[{include:"#tag-stuff"}]},{begin:"(</?)((?i:a|abbr|acronym|area|b|base|basefont|bdo|big|br|button|caption|cite|code|col|colgroup|del|dfn|em|font|head|html|i|img|input|ins|isindex|kbd|label|legend|li|link|map|meta|noscript|optgroup|option|param|q|s|samp|script|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|title|tr|tt|u|var)\\b)",captures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.inline.any.html"}},end:"((?: ?/)?>)",name:"meta.tag.inline.any.html",patterns:[{include:"#tag-stuff"}]},{begin:"(</?)([a-zA-Z0-9:-]+)",captures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.other.html"}},end:"(>)",name:"meta.tag.other.html",patterns:[{include:"#tag-stuff"}]},{begin:"(</?)([a-zA-Z0-9{}:-]+)",captures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.tokenised.html"}},end:"(>)",name:"meta.tag.tokenised.html",patterns:[{include:"#tag-stuff"}]},{include:"#entities"},{match:"<>",name:"invalid.illegal.incomplete.html"},{match:"<",name:"invalid.illegal.bad-angle-bracket.html"}]},inline_script:{begin:`(?:^\\s+)?(<)((?i:script))\\b(?:.*(type)=(["'](?:text/x-handlebars-template|text/x-handlebars|text/template|x-tmpl-handlebars)["']))(?![^>]*/>)`,beginCaptures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.script.html"},3:{name:"entity.other.attribute-name.html"},4:{name:"string.quoted.double.html"}},end:"(?<=</(script|SCRIPT))(>)(?:\\s*\\n)?",endCaptures:{2:{name:"punctuation.definition.tag.html"}},name:"source.handlebars.embedded.html",patterns:[{include:"#tag-stuff"},{begin:"(?<!</(?:script|SCRIPT))(>)",captures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.script.html"}},end:"(</)((?i:script))",patterns:[{include:"#block_comments"},{include:"#comments"},{include:"#block_helper"},{include:"#end_block"},{include:"#else_token"},{include:"#partial_and_var"},{include:"#html_tags"},{include:"text.html.basic"}]}]},partial_and_var:{begin:"(\\{\\{~?\\{*(>|!<)*)\\s*(@?[-a-zA-Z0-9$_\\./]+)*",beginCaptures:{1:{name:"support.constant.handlebars"},3:{name:"variable.parameter.handlebars"}},end:"(~?\\}\\}\\}*)",endCaptures:{1:{name:"support.constant.handlebars"}},name:"meta.function.inline.other.handlebars",patterns:[{include:"#string"},{include:"#handlebars_attribute"}]},string:{patterns:[{include:"#string-single-quoted"},{include:"#string-double-quoted"}]},"string-double-quoted":{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.html"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.html"}},name:"string.quoted.double.handlebars",patterns:[{include:"#escaped-double-quote"},{include:"#block_comments"},{include:"#comments"},{include:"#block_helper"},{include:"#else_token"},{include:"#end_block"},{include:"#partial_and_var"}]},"string-single-quoted":{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.html"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.html"}},name:"string.quoted.single.handlebars",patterns:[{include:"#escaped-single-quote"},{include:"#block_comments"},{include:"#comments"},{include:"#block_helper"},{include:"#else_token"},{include:"#end_block"},{include:"#partial_and_var"}]},"tag-stuff":{patterns:[{include:"#tag_id_attribute"},{include:"#tag_generic_attribute"},{include:"#string"},{include:"#block_comments"},{include:"#comments"},{include:"#block_helper"},{include:"#end_block"},{include:"#else_token"},{include:"#partial_and_var"}]},tag_generic_attribute:{begin:"\\b([a-zA-Z0-9_-]+)\\b\\s*(=)",captures:{1:{name:"entity.other.attribute-name.generic.html"},2:{name:"punctuation.separator.key-value.html"}},end:`(?<='|"|)`,name:"entity.other.attribute-name.html",patterns:[{include:"#string"}]},tag_id_attribute:{begin:"\\b(id)\\b\\s*(=)",captures:{1:{name:"entity.other.attribute-name.id.html"},2:{name:"punctuation.separator.key-value.html"}},end:`(?<='|"|)`,name:"meta.attribute-with-value.id.html",patterns:[{include:"#string"}]},yfm:{patterns:[{begin:"(?<!\\s)---\\n$",end:"^---\\s",name:"markup.raw.yaml.front-matter",patterns:[{include:"source.yaml"}]}]}},scopeName:"text.html.handlebars",embeddedLangs:["html","css","javascript","yaml"],aliases:["hbs"]});var r=[...t.default,...a.default,...l.default,...m.default,s]},97232:function(i,e,n){n.r(e),n.d(e,{default:function(){return a}});var a=[Object.freeze({displayName:"YAML",name:"yaml",patterns:[{include:"#comment"},{include:"#property"},{include:"#directive"},{match:"^---",name:"entity.other.document.begin.yaml"},{match:"^\\.{3}",name:"entity.other.document.end.yaml"},{include:"#node"}],repository:{"block-collection":{patterns:[{include:"#block-sequence"},{include:"#block-mapping"}]},"block-mapping":{patterns:[{include:"#block-pair"}]},"block-node":{patterns:[{include:"#prototype"},{include:"#block-scalar"},{include:"#block-collection"},{include:"#flow-scalar-plain-out"},{include:"#flow-node"}]},"block-pair":{patterns:[{begin:"\\?",beginCaptures:{1:{name:"punctuation.definition.key-value.begin.yaml"}},end:"(?=\\?)|^ *(:)|(:)",endCaptures:{1:{name:"punctuation.separator.key-value.mapping.yaml"},2:{name:"invalid.illegal.expected-newline.yaml"}},name:"meta.block-mapping.yaml",patterns:[{include:"#block-node"}]},{begin:`(?x)
                        (?=
                            (?x:
                                  [^\\s[-?:,\\[\\]{}#&*!|>'"%@\`]]
                                | [?:-] \\S
                            )
                            (
                                  [^\\s:]
                                | : \\S
                                | \\s+ (?![#\\s])
                            )*
                            \\s*
                            :
							(\\s|$)
                        )
                    `,end:`(?x)
                        (?=
                              \\s* $
                            | \\s+ \\#
                            | \\s* : (\\s|$)
                        )
                    `,patterns:[{include:"#flow-scalar-plain-out-implicit-type"},{begin:`(?x)
                                  [^\\s[-?:,\\[\\]{}#&*!|>'"%@\`]]
                                | [?:-] \\S
                            `,beginCaptures:{0:{name:"entity.name.tag.yaml"}},contentName:"entity.name.tag.yaml",end:`(?x)
                                (?=
                                      \\s* $
                                    | \\s+ \\#
                                    | \\s* : (\\s|$)
                                )
                            `,name:"string.unquoted.plain.out.yaml"}]},{match:":(?=\\s|$)",name:"punctuation.separator.key-value.mapping.yaml"}]},"block-scalar":{begin:"(?:(\\|)|(>))([1-9])?([-+])?(.*\\n?)",beginCaptures:{1:{name:"keyword.control.flow.block-scalar.literal.yaml"},2:{name:"keyword.control.flow.block-scalar.folded.yaml"},3:{name:"constant.numeric.indentation-indicator.yaml"},4:{name:"storage.modifier.chomping-indicator.yaml"},5:{patterns:[{include:"#comment"},{match:".+",name:"invalid.illegal.expected-comment-or-newline.yaml"}]}},end:"^(?=\\S)|(?!\\G)",patterns:[{begin:"^([ ]+)(?! )",end:"^(?!\\1|\\s*$)",name:"string.unquoted.block.yaml"}]},"block-sequence":{match:"(-)(?!\\S)",name:"punctuation.definition.block.sequence.item.yaml"},comment:{begin:"(?:(^[ \\t]*)|[ \\t]+)(?=#\\p{Print}*$)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.yaml"}},end:"(?!\\G)",patterns:[{begin:"#",beginCaptures:{0:{name:"punctuation.definition.comment.yaml"}},end:"\\n",name:"comment.line.number-sign.yaml"}]},directive:{begin:"^%",beginCaptures:{0:{name:"punctuation.definition.directive.begin.yaml"}},end:"(?=$|[ \\t]+($|#))",name:"meta.directive.yaml",patterns:[{captures:{1:{name:"keyword.other.directive.yaml.yaml"},2:{name:"constant.numeric.yaml-version.yaml"}},match:"\\G(YAML)[ \\t]+(\\d+\\.\\d+)"},{captures:{1:{name:"keyword.other.directive.tag.yaml"},2:{name:"storage.type.tag-handle.yaml"},3:{name:"support.type.tag-prefix.yaml"}},match:`(?x)
                        \\G
                        (TAG)
                        (?:[ \\t]+
                            ((?:!(?:[0-9A-Za-z\\-]*!)?))
                            (?:[ \\t]+ (
                                  !              (?x: %[0-9A-Fa-f]{2} | [0-9A-Za-z\\-#;/?:@&=+$,_.!~*'()\\[\\]] )*
                                | (?![,!\\[\\]{}]) (?x: %[0-9A-Fa-f]{2} | [0-9A-Za-z\\-#;/?:@&=+$,_.!~*'()\\[\\]] )+
                                )
                            )?
                        )?
                    `},{captures:{1:{name:"support.other.directive.reserved.yaml"},2:{name:"string.unquoted.directive-name.yaml"},3:{name:"string.unquoted.directive-parameter.yaml"}},match:"(?x) \\G (\\w+) (?:[ \\t]+ (\\w+) (?:[ \\t]+ (\\w+))? )?"},{match:"\\S+",name:"invalid.illegal.unrecognized.yaml"}]},"flow-alias":{captures:{1:{name:"keyword.control.flow.alias.yaml"},2:{name:"punctuation.definition.alias.yaml"},3:{name:"variable.other.alias.yaml"},4:{name:"invalid.illegal.character.anchor.yaml"}},match:"((\\*))([^\\s\\[\\]/{/},]+)([^\\s\\]},]\\S*)?"},"flow-collection":{patterns:[{include:"#flow-sequence"},{include:"#flow-mapping"}]},"flow-mapping":{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.mapping.begin.yaml"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.mapping.end.yaml"}},name:"meta.flow-mapping.yaml",patterns:[{include:"#prototype"},{match:",",name:"punctuation.separator.mapping.yaml"},{include:"#flow-pair"}]},"flow-node":{patterns:[{include:"#prototype"},{include:"#flow-alias"},{include:"#flow-collection"},{include:"#flow-scalar"}]},"flow-pair":{patterns:[{begin:"\\?",beginCaptures:{0:{name:"punctuation.definition.key-value.begin.yaml"}},end:"(?=[},\\]])",name:"meta.flow-pair.explicit.yaml",patterns:[{include:"#prototype"},{include:"#flow-pair"},{include:"#flow-node"},{begin:":(?=\\s|$|[\\[\\]{},])",beginCaptures:{0:{name:"punctuation.separator.key-value.mapping.yaml"}},end:"(?=[},\\]])",patterns:[{include:"#flow-value"}]}]},{begin:`(?x)
                        (?=
                            (?:
                                [^\\s[-?:,\\[\\]{}#&*!|>'"%@\`]]
                              | [?:-] [^\\s[\\[\\]{},]]
                            )
                            (
                                  [^\\s:[\\[\\]{},]]
                                | : [^\\s[\\[\\]{},]]
                                | \\s+ (?![#\\s])
                            )*
                            \\s*
                            :
							(\\s|$)
                        )
                    `,end:`(?x)
                        (?=
                              \\s* $
                            | \\s+ \\#
                            | \\s* : (\\s|$)
                            | \\s* : [\\[\\]{},]
                            | \\s* [\\[\\]{},]
                        )
                    `,name:"meta.flow-pair.key.yaml",patterns:[{include:"#flow-scalar-plain-in-implicit-type"},{begin:`(?x)
                                  [^\\s[-?:,\\[\\]{}#&*!|>'"%@\`]]
                                | [?:-] [^\\s[\\[\\]{},]]
                            `,beginCaptures:{0:{name:"entity.name.tag.yaml"}},contentName:"entity.name.tag.yaml",end:`(?x)
                                (?=
                                      \\s* $
                                    | \\s+ \\#
                                    | \\s* : (\\s|$)
                                    | \\s* : [\\[\\]{},]
                                    | \\s* [\\[\\]{},]
                                )
                            `,name:"string.unquoted.plain.in.yaml"}]},{include:"#flow-node"},{begin:":(?=\\s|$|[\\[\\]{},])",captures:{0:{name:"punctuation.separator.key-value.mapping.yaml"}},end:"(?=[},\\]])",name:"meta.flow-pair.yaml",patterns:[{include:"#flow-value"}]}]},"flow-scalar":{patterns:[{include:"#flow-scalar-double-quoted"},{include:"#flow-scalar-single-quoted"},{include:"#flow-scalar-plain-in"}]},"flow-scalar-double-quoted":{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.yaml"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.yaml"}},name:"string.quoted.double.yaml",patterns:[{match:'\\\\([0abtnvfre "/\\\\N_Lp]|x\\d\\d|u\\d{4}|U\\d{8})',name:"constant.character.escape.yaml"},{match:"\\\\\\n",name:"constant.character.escape.double-quoted.newline.yaml"}]},"flow-scalar-plain-in":{patterns:[{include:"#flow-scalar-plain-in-implicit-type"},{begin:`(?x)
                          [^\\s[-?:,\\[\\]{}#&*!|>'"%@\`]]
                        | [?:-] [^\\s[\\[\\]{},]]
                    `,end:`(?x)
                        (?=
                              \\s* $
                            | \\s+ \\#
                            | \\s* : (\\s|$)
                            | \\s* : [\\[\\]{},]
                            | \\s* [\\[\\]{},]
                        )
                    `,name:"string.unquoted.plain.in.yaml"}]},"flow-scalar-plain-in-implicit-type":{patterns:[{captures:{1:{name:"constant.language.null.yaml"},2:{name:"constant.language.boolean.yaml"},3:{name:"constant.numeric.integer.yaml"},4:{name:"constant.numeric.float.yaml"},5:{name:"constant.other.timestamp.yaml"},6:{name:"constant.language.value.yaml"},7:{name:"constant.language.merge.yaml"}},match:`(?x)
                        (?x:
                              (null|Null|NULL|~)
                            | (y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)
                            | (
                                (?:
                                      [-+]? 0b [0-1_]+ # (base 2)
                                    | [-+]? 0  [0-7_]+ # (base 8)
                                    | [-+]? (?: 0|[1-9][0-9_]*) # (base 10)
                                    | [-+]? 0x [0-9a-fA-F_]+ # (base 16)
                                    | [-+]? [1-9] [0-9_]* (?: :[0-5]?[0-9])+ # (base 60)
                                )
                              )
                            | (
                                (?x:
                                      [-+]? (?: [0-9] [0-9_]*)? \\. [0-9.]* (?: [eE] [-+] [0-9]+)? # (base 10)
                                    | [-+]? [0-9] [0-9_]* (?: :[0-5]?[0-9])+ \\. [0-9_]* # (base 60)
                                    | [-+]? \\. (?: inf|Inf|INF) # (infinity)
                                    |       \\. (?: nan|NaN|NAN) # (not a number)
                                )
                              )
                            | (
                                (?x:
                                    \\d{4} - \\d{2} - \\d{2}           # (y-m-d)
                                  | \\d{4}                           # (year)
                                    - \\d{1,2}                       # (month)
                                    - \\d{1,2}                       # (day)
                                    (?: [Tt] | [ \\t]+) \\d{1,2}      # (hour)
                                    : \\d{2}                         # (minute)
                                    : \\d{2}                         # (second)
                                    (?: \\.\\d*)?                     # (fraction)
                                    (?:
                                          (?:[ \\t]*) Z
                                        | [-+] \\d{1,2} (?: :\\d{1,2})?
                                    )?                              # (time zone)
                                )
                              )
                            | (=)
                            | (<<)
                        )
                        (?:
                            (?=
                                  \\s* $
                                | \\s+ \\#
                                | \\s* : (\\s|$)
                                | \\s* : [\\[\\]{},]
                                | \\s* [\\[\\]{},]
                            )
                        )
                    `}]},"flow-scalar-plain-out":{patterns:[{include:"#flow-scalar-plain-out-implicit-type"},{begin:`(?x)
                          [^\\s[-?:,\\[\\]{}#&*!|>'"%@\`]]
                        | [?:-] \\S
                    `,end:`(?x)
                        (?=
                              \\s* $
                            | \\s+ \\#
                            | \\s* : (\\s|$)
                        )
                    `,name:"string.unquoted.plain.out.yaml"}]},"flow-scalar-plain-out-implicit-type":{patterns:[{captures:{1:{name:"constant.language.null.yaml"},2:{name:"constant.language.boolean.yaml"},3:{name:"constant.numeric.integer.yaml"},4:{name:"constant.numeric.float.yaml"},5:{name:"constant.other.timestamp.yaml"},6:{name:"constant.language.value.yaml"},7:{name:"constant.language.merge.yaml"}},match:`(?x)
                        (?x:
                              (null|Null|NULL|~)
                            | (y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF)
                            | (
                                (?:
                                      [-+]? 0b [0-1_]+ # (base 2)
                                    | [-+]? 0  [0-7_]+ # (base 8)
                                    | [-+]? (?: 0|[1-9][0-9_]*) # (base 10)
                                    | [-+]? 0x [0-9a-fA-F_]+ # (base 16)
                                    | [-+]? [1-9] [0-9_]* (?: :[0-5]?[0-9])+ # (base 60)
                                )
                              )
                            | (
                                (?x:
                                      [-+]? (?: [0-9] [0-9_]*)? \\. [0-9.]* (?: [eE] [-+] [0-9]+)? # (base 10)
                                    | [-+]? [0-9] [0-9_]* (?: :[0-5]?[0-9])+ \\. [0-9_]* # (base 60)
                                    | [-+]? \\. (?: inf|Inf|INF) # (infinity)
                                    |       \\. (?: nan|NaN|NAN) # (not a number)
                                )
                              )
                            | (
                                (?x:
                                    \\d{4} - \\d{2} - \\d{2}           # (y-m-d)
                                  | \\d{4}                           # (year)
                                    - \\d{1,2}                       # (month)
                                    - \\d{1,2}                       # (day)
                                    (?: [Tt] | [ \\t]+) \\d{1,2}      # (hour)
                                    : \\d{2}                         # (minute)
                                    : \\d{2}                         # (second)
                                    (?: \\.\\d*)?                     # (fraction)
                                    (?:
                                          (?:[ \\t]*) Z
                                        | [-+] \\d{1,2} (?: :\\d{1,2})?
                                    )?                              # (time zone)
                                )
                              )
                            | (=)
                            | (<<)
                        )
                        (?x:
                            (?=
                                  \\s* $
                                | \\s+ \\#
                                | \\s* : (\\s|$)
                            )
                        )
                    `}]},"flow-scalar-single-quoted":{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.yaml"}},end:"'(?!')",endCaptures:{0:{name:"punctuation.definition.string.end.yaml"}},name:"string.quoted.single.yaml",patterns:[{match:"''",name:"constant.character.escape.single-quoted.yaml"}]},"flow-sequence":{begin:"\\[",beginCaptures:{0:{name:"punctuation.definition.sequence.begin.yaml"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.sequence.end.yaml"}},name:"meta.flow-sequence.yaml",patterns:[{include:"#prototype"},{match:",",name:"punctuation.separator.sequence.yaml"},{include:"#flow-pair"},{include:"#flow-node"}]},"flow-value":{patterns:[{begin:"\\G(?![},\\]])",end:"(?=[},\\]])",name:"meta.flow-pair.value.yaml",patterns:[{include:"#flow-node"}]}]},node:{patterns:[{include:"#block-node"}]},property:{begin:"(?=!|&)",end:"(?!\\G)",name:"meta.property.yaml",patterns:[{captures:{1:{name:"keyword.control.property.anchor.yaml"},2:{name:"punctuation.definition.anchor.yaml"},3:{name:"entity.name.type.anchor.yaml"},4:{name:"invalid.illegal.character.anchor.yaml"}},match:"\\G((&))([^\\s\\[\\]/{/},]+)(\\S+)?"},{match:`(?x)
                        \\G
                        (?:
                            ! < (?: %[0-9A-Fa-f]{2} | [0-9A-Za-z\\-#;/?:@&=+$,_.!~*'()\\[\\]] )+ >
                          | (?:!(?:[0-9A-Za-z\\-]*!)?) (?: %[0-9A-Fa-f]{2} | [0-9A-Za-z\\-#;/?:@&=+$_.~*'()] )+
                          | !
                        )
                        (?=\\ |\\t|$)
                    `,name:"storage.type.tag-handle.yaml"},{match:"\\S+",name:"invalid.illegal.tag-handle.yaml"}]},prototype:{patterns:[{include:"#comment"},{include:"#property"}]}},scopeName:"source.yaml",aliases:["yml"]})]}}]);
