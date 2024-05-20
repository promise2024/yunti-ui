"use strict";(self.webpackChunk_yuntijs_ui=self.webpackChunk_yuntijs_ui||[]).push([[2223,9665,4025,3077,8647],{89665:function(i,n,e){e.r(n),e.d(n,{default:function(){return t}});var t=[Object.freeze({displayName:"Gnuplot",fileTypes:["gp","plt","plot","gnuplot"],name:"gnuplot",patterns:[{match:"(\\\\(?!\\n).*)",name:"invalid.illegal.backslash.gnuplot"},{match:"(;)",name:"punctuation.separator.statement.gnuplot"},{include:"#LineComment"},{include:"#DataBlock"},{include:"#MacroExpansion"},{include:"#VariableDecl"},{include:"#ArrayDecl"},{include:"#FunctionDecl"},{include:"#ShellCommand"},{include:"#Command"}],repository:{ArrayDecl:{begin:`\\b(?x:
(array)\\s+
([A-Za-z_]\\w*)?


)`,beginCaptures:{1:{name:"support.type.array.gnuplot"},2:{name:"entity.name.variable.gnuplot",patterns:[{include:"#InvalidVariableDecl"},{include:"#BuiltinVariable"}]}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",name:"meta.variable.gnuplot",patterns:[{include:"#Expression"}]},BuiltinFunction:{patterns:[{match:`\\b(?x:
defined
)\\b`,name:"invalid.deprecated.function.gnuplot"},{match:`\\b(?x:
abs            |
acos           |
acosh          |
airy           |
arg            |
asin           |
asinh          |
atan           |
atan2          |
atanh          |
EllipticK      |
EllipticE      |
EllipticPi     |
besj0          |
besj1          |
besy0          |
besy1          |
ceil           |
cos            |
cosh           |
erf            |
erfc           |
exp            |
expint         |
floor          |
gamma          |
ibeta          |
inverf         |
igamma         |
imag           |
invnorm        |
int            |
lambertw       |
lgamma         |
log            |
log10          |
norm           |
rand           |
real           |
sgn            |
sin            |
sinh           |
sqrt           |
tan            |
tanh           |
voigt          |
cerf           |
cdawson        |
faddeeva       |
erfi           |
VP
)\\b`,name:"support.function.math.gnuplot"},{match:`\\b(?x:
gprintf        |
sprintf        |
strlen         |
strstrt        |
substr         |
strftime       |
strptime       |
system         |
word           |
words
)\\b`,name:"support.function.string.gnuplot"},{match:`\\b(?x:
column         |
columnhead     |
exists         |
hsv2rgb        |
stringcolumn   |
timecolumn     |
tm_hour        |
tm_mday        |
tm_min         |
tm_mon         |
tm_sec         |
tm_wday        |
tm_yday        |
tm_year        |
time           |
valid          |
value
)\\b`,name:"support.function.other.gnuplot"}]},BuiltinOperator:{patterns:[{match:"(&&|\\|\\|)",name:"keyword.operator.logical.gnuplot"},{match:"(<<|>>|&|\\||\\^)",name:"keyword.operator.bitwise.gnuplot"},{match:"(==|!=|<=|<|>=|>)",name:"keyword.operator.comparison.gnuplot"},{match:"(=)",name:"keyword.operator.assignment.gnuplot"},{match:"(\\+|-|~|!)",name:"keyword.operator.arithmetic.gnuplot"},{match:"(\\*\\*|\\+|-|\\*|/|%)",name:"keyword.operator.arithmetic.gnuplot"},{captures:{2:{name:"keyword.operator.word.gnuplot"}},match:"(\\.|\\b(eq|ne)\\b)",name:"keyword.operator.strings.gnuplot"}]},BuiltinVariable:{patterns:[{match:`\\b(?x:
FIT_LIMIT           |
FIT_MAXITER         |
FIT_START_LAMBDA    |
FIT_LAMBDA_FACTOR   |
FIT_SKIP            |
FIT_INDEX
)\\b`,name:"invalid.deprecated.variable.gnuplot"},{match:"\\b(GPVAL_\\w*|MOUSE_\\w*)\\b",name:"support.constant.gnuplot"},{match:"\\b(ARG[0-9C]|GPFUN_\\w*|FIT_\\w*|STATS_\\w*|pi|NaN)\\b",name:"support.variable.gnuplot"}]},ColumnIndexLiteral:{match:"([$][0-9]+)\\b",name:"support.constant.columnindex.gnuplot"},Command:{patterns:[{begin:`\\b(?x:
update
)\\b`,end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",name:"invalid.deprecated.command.gnuplot"},{begin:`\\b(?x:
break        |
clear        |
continue     |
pwd          |
refresh      |
replot       |
reread       |
shell
)\\b`,beginCaptures:{0:{name:"keyword.other.command.gnuplot"}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#InvalidWord"}]},{begin:`\\b(?x:
cd           |
call         |
eval         |
exit         |
help         |
history      |
load         |
lower        |
pause        |
print        |
printerr     |
quit         |
raise        |
save         |
stats        |
system       |
test         |
toggle
)\\b`,beginCaptures:{0:{name:"keyword.other.command.gnuplot"}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#Expression"}]},{begin:"\\b(import)\\s(.+)\\s(from)",beginCaptures:{1:{name:"keyword.control.import.gnuplot"},2:{patterns:[{include:"#FunctionDecl"}]},3:{name:"keyword.control.import.gnuplot"}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#SingleQuotedStringLiteral"},{include:"#DoubleQuotedStringLiteral"},{include:"#InvalidWord"}]},{begin:"\\b(reset)\\b",beginCaptures:{1:{name:"keyword.other.command.gnuplot"}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{match:"\\b(bind|error(state)?|session)\\b",name:"support.class.reset.gnuplot"},{include:"#InvalidWord"}]},{begin:"\\b(undefine)\\b",beginCaptures:{1:{name:"keyword.other.command.gnuplot"}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#BuiltinVariable"},{include:"#BuiltinFunction"},{match:"(?<=\\s)([$]?[A-Za-z_]\\w*\\*?)(?=\\s)",name:"source.gnuplot"},{include:"#InvalidWord"}]},{begin:"\\b(if|while)\\b",beginCaptures:{1:{name:"keyword.control.conditional.gnuplot"}},end:"(?=(\\{|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#Expression"}]},{begin:"\\b(else)\\b",beginCaptures:{1:{name:"keyword.control.conditional.gnuplot"}},end:"(?=(\\{|#|\\\\(?!\\n)|(?<!\\\\)\\n$))"},{begin:"\\b(do)\\b",beginCaptures:{1:{name:"keyword.control.flow.gnuplot"}},end:"(?=(\\{|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#ForIterationExpr"}]},{begin:"\\b(set)(?=\\s+pm3d)\\b",beginCaptures:{1:{name:"keyword.other.command.gnuplot"}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{match:"\\b(hidden3d|map|transparent|solid)\\b",name:"invalid.deprecated.options.gnuplot"},{include:"#SetUnsetOptions"},{include:"#ForIterationExpr"},{include:"#Expression"}]},{begin:"\\b((un)?set)\\b",beginCaptures:{1:{name:"keyword.other.command.gnuplot"}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#SetUnsetOptions"},{include:"#ForIterationExpr"},{include:"#Expression"}]},{begin:"\\b(show)\\b",beginCaptures:{1:{name:"keyword.other.command.gnuplot"}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#ExtraShowOptions"},{include:"#SetUnsetOptions"},{include:"#Expression"}]},{begin:"\\b(fit|(s)?plot)\\b",beginCaptures:{1:{name:"keyword.other.command.gnuplot"}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#ColumnIndexLiteral"},{include:"#PlotModifiers"},{include:"#ForIterationExpr"},{include:"#Expression"}]}]},DataBlock:{begin:`(?x:
([$][A-Za-z_]\\w*)\\s*
(<<)\\s*
([A-Za-z_]\\w*)\\s*
(?=(\\#|$))
)`,beginCaptures:{1:{patterns:[{include:"#SpecialVariable"}]},3:{name:"constant.language.datablock.gnuplot"}},end:"^(\\3)\\b(.*)",endCaptures:{1:{name:"constant.language.datablock.gnuplot"},2:{name:"invalid.illegal.datablock.gnuplot"}},name:"meta.datablock.gnuplot",patterns:[{include:"#LineComment"},{include:"#NumberLiteral"},{include:"#DoubleQuotedStringLiteral"}]},DeprecatedScriptArgsLiteral:{match:"([$][0-9#])",name:"invalid.illegal.scriptargs.gnuplot"},DoubleQuotedStringLiteral:{begin:'(")',beginCaptures:{1:{name:"punctuation.definition.string.begin.gnuplot"}},end:'((")|(?=(?<!\\\\)\\n$))',endCaptures:{0:{name:"punctuation.definition.string.end.gnuplot"}},name:"string.quoted.double.gnuplot",patterns:[{include:"#EscapedChar"},{include:"#RGBColorSpec"},{include:"#DeprecatedScriptArgsLiteral"},{include:"#InterpolatedStringLiteral"}]},EscapedChar:{match:"(\\\\.)",name:"constant.character.escape.gnuplot"},Expression:{patterns:[{include:"#Literal"},{include:"#SpecialVariable"},{include:"#BuiltinVariable"},{include:"#BuiltinOperator"},{include:"#TernaryExpr"},{include:"#FunctionCallExpr"},{include:"#SummationExpr"}]},ExtraShowOptions:{match:`\\b(?x:
all                         |
bind                        |
colornames                  |
functions                   |
plot                        |
variables                   |
version
)\\b`,name:"support.class.options.gnuplot"},ForIterationExpr:{begin:`\\b(?x:
(for)\\s*
(\\[)\\s*
(?:
([A-Za-z_]\\w*)\\s+
(in)\\b
)?
)`,beginCaptures:{1:{name:"keyword.control.flow.gnuplot"},2:{patterns:[{include:"#RangeSeparators"}]},3:{name:"variable.other.iterator.gnuplot"},4:{name:"keyword.control.flow.gnuplot"}},end:"((\\])|(?=(#|\\\\(?!\\n)|(?<!\\\\)\\n$)))",endCaptures:{2:{patterns:[{include:"#RangeSeparators"}]}},patterns:[{include:"#Expression"},{include:"#RangeSeparators"}]},FunctionCallExpr:{begin:"\\b([A-Za-z_]\\w*)\\s*(\\()",beginCaptures:{1:{name:"variable.function.gnuplot",patterns:[{include:"#BuiltinFunction"}]},2:{name:"punctuation.definition.arguments.begin.gnuplot"}},end:"((\\))|(?=(#|\\\\(?!\\n)|(?<!\\\\)\\n$)))",endCaptures:{2:{name:"punctuation.definition.arguments.end.gnuplot"}},name:"meta.function-call.gnuplot",patterns:[{include:"#Expression"}]},FunctionDecl:{begin:`\\b(?x:
([A-Za-z_]\\w*)\\s*
(
(\\()\\s*
([A-Za-z_]\\w*)\\s*
(?:
(,)\\s*
([A-Za-z_]\\w*)\\s*
)*
(\\))
)
)`,beginCaptures:{1:{name:"entity.name.function.gnuplot",patterns:[{include:"#BuiltinFunction"}]},2:{name:"meta.function.parameters.gnuplot"},3:{name:"punctuation.definition.parameters.begin.gnuplot"},4:{name:"variable.parameter.function.language.gnuplot"},5:{name:"punctuation.separator.parameters.gnuplot"},6:{name:"variable.parameter.function.language.gnuplot"},7:{name:"punctuation.definition.parameters.end.gnuplot"}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",name:"meta.function.gnuplot",patterns:[{include:"#Expression"}]},InterpolatedStringLiteral:{begin:"(`)",beginCaptures:{1:{name:"punctuation.definition.string.begin.gnuplot"}},end:"((`)|(?=(?<!\\\\)\\n$))",endCaptures:{0:{name:"punctuation.definition.string.end.gnuplot"}},name:"string.interpolated.gnuplot",patterns:[{include:"#EscapedChar"}]},InvalidVariableDecl:{match:"\\b(GPVAL_\\w*|MOUSE_\\w*)\\b",name:"invalid.illegal.variable.gnuplot"},InvalidWord:{match:"([^;#\\\\[:space:]]+)",name:"invalid.illegal.gnuplot"},LineComment:{begin:"(#)",beginCaptures:{1:{name:"punctuation.definition.comment.begin.gnuplot"}},end:"(?=(?<!\\\\)\\n$)",endCaptures:{0:{name:"punctuation.definition.comment.end.gnuplot"}},name:"comment.line.number-sign.gnuplot"},Literal:{patterns:[{include:"#NumberLiteral"},{include:"#DeprecatedScriptArgsLiteral"},{include:"#SingleQuotedStringLiteral"},{include:"#DoubleQuotedStringLiteral"},{include:"#InterpolatedStringLiteral"}]},MacroExpansion:{begin:"([@][A-Za-z_]\\w*)",beginCaptures:{1:{patterns:[{include:"#SpecialVariable"}]}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{include:"#Expression"}]},NumberLiteral:{patterns:[{match:`(?x:

( ((\\b[0-9]+)|(?<!\\d)) )
( [.][0-9]+ )
( [Ee][+-]?[0-9]+ )?
)(cm|in)?\\b`,name:"constant.numeric.float.gnuplot"},{match:`(?x:

( \\b[0-9]+ )
(
(     ( [Ee][+-]?[0-9]+\\b )  ) |
( [.] ( [Ee][+-]?[0-9]+\\b )? )
)
)(cm\\b|in\\b)?`,name:"constant.numeric.float.gnuplot"},{match:"\\b(0[Xx][0-9a-fA-F]+)(cm|in)?\\b",name:"constant.numeric.hex.gnuplot"},{match:"\\b(0+)(cm|in)?\\b",name:"constant.numeric.dec.gnuplot"},{match:"\\b(0[0-7]+)(cm|in)?\\b",name:"constant.numeric.oct.gnuplot"},{match:"\\b(0[0-9]+)(cm|in)?\\b",name:"invalid.illegal.oct.gnuplot"},{match:"\\b([0-9]+)(cm|in)?\\b",name:"constant.numeric.dec.gnuplot"}]},PlotModifiers:{patterns:[{match:"\\b(thru)\\b",name:"invalid.deprecated.plot.gnuplot"},{match:`\\b(?x:
in(dex)?            |
every               |
us(ing)?            |
wi(th)?             |
via
)\\b`,name:"storage.type.plot.gnuplot"},{match:"\\b(newhist(ogram)?)\\b",name:"storage.type.plot.gnuplot"}]},RGBColorSpec:{match:"\\G(0x|#)(([0-9a-fA-F]{6})|([0-9a-fA-F]{8}))\\b",name:"constant.other.placeholder.gnuplot"},RangeSeparators:{patterns:[{match:"(\\[)",name:"punctuation.section.brackets.begin.gnuplot"},{match:"(:)",name:"punctuation.separator.range.gnuplot"},{match:"(\\])",name:"punctuation.section.brackets.end.gnuplot"}]},SetUnsetOptions:{patterns:[{match:`\\G\\s*\\b(?x:
clabel              |
data                |
function            |
historysize         |
macros              |
ticslevel           |
ticscale            |
(style\\s+increment\\s+\\w+)
)\\b`,name:"invalid.deprecated.options.gnuplot"},{match:`\\G\\s*\\b(?x:
angles              |
arrow               |
autoscale           |
border              |
boxwidth            |
clip                |
cntr(label|param)   |
color(box|sequence)?|
contour             |
(dash|line)type     |
datafile            |
decimal(sign)?      |
dgrid3d             |
dummy               |
encoding            |
(error)?bars        |
fit                 |
fontpath            |
format              |
grid                |
hidden3d            |
history             |
(iso)?samples       |
jitter              |
key                 |
label               |
link                |
loadpath            |
locale              |
logscale            |
mapping             |
[lrtb]margin        |
margins             |
micro               |
minus(sign)?        |
mono(chrome)?       |
mouse               |
multiplot           |
nonlinear           |
object              |
offsets             |
origin              |
output              |
parametric          |
(p|r)axis           |
pm3d                |
palette             |
pointintervalbox    |
pointsize           |
polar               |
print               |
psdir               |
size                |
style               |
surface             |
table               |
terminal            |
termoption          |
theta               |
tics                |
timestamp           |
timefmt             |
title               |
view                |
xyplane             |
zero                |
(no)?(m)?(x|x2|y|y2|z|cb|r|t)tics  |
(x|x2|y|y2|z|cb)data               |
(x|x2|y|y2|z|cb|r)label            |
(x|x2|y|y2|z|cb)dtics              |
(x|x2|y|y2|z|cb)mtics              |
(x|x2|y|y2|z|cb|[rtuv])range       |
(x|x2|y|y2|z)?zeroaxis
)\\b`,name:"support.class.options.gnuplot"}]},ShellCommand:{begin:"(!)",beginCaptures:{1:{name:"keyword.other.shell.gnuplot"}},end:"(?=(#|\\\\(?!\\n)|(?<!\\\\)\\n$))",patterns:[{match:"([^#]|\\\\(?=\\n))",name:"string.unquoted"}]},SingleQuotedStringLiteral:{begin:"(')",beginCaptures:{1:{name:"punctuation.definition.string.begin.gnuplot"}},end:"((')(?!')|(?=(?<!\\\\)\\n$))",endCaptures:{0:{name:"punctuation.definition.string.end.gnuplot"}},name:"string.quoted.single.gnuplot",patterns:[{include:"#RGBColorSpec"},{match:"('')",name:"constant.character.escape.gnuplot"}]},SpecialVariable:{patterns:[{captures:{1:{name:"constant.language.wildcard.gnuplot"}},match:"(?<=[\\[:=])\\s*(\\*)\\s*(?=[:\\]])"},{captures:{2:{name:"punctuation.definition.variable.gnuplot"}},match:"(([@$])[A-Za-z_]\\w*)\\b",name:"constant.language.special.gnuplot"}]},SummationExpr:{begin:"\\b(sum)\\s*(\\[)",beginCaptures:{1:{name:"keyword.other.sum.gnuplot"},2:{patterns:[{include:"#RangeSeparators"}]}},end:"((\\])|(?=(#|\\\\(?!\\n)|(?<!\\\\)\\n$)))",endCaptures:{2:{patterns:[{include:"#RangeSeparators"}]}},patterns:[{include:"#Expression"},{include:"#RangeSeparators"}]},TernaryExpr:{begin:"(?<!\\?)(\\?)(?!\\?)",beginCaptures:{1:{name:"keyword.operator.ternary.gnuplot"}},end:"((?<!:)(:)(?!:)|(?=(#|\\\\(?!\\n)|(?<!\\\\)\\n$)))",endCaptures:{2:{name:"keyword.operator.ternary.gnuplot"}},patterns:[{include:"#Expression"}]},VariableDecl:{begin:`\\b(?x:
([A-Za-z_]\\w*)\\s*
(?:
(\\[)\\s*
(.*)\\s*
(\\])\\s*
)?
(?=(=)(?!\\s*=))
)`,beginCaptures:{1:{name:"entity.name.variable.gnuplot",patterns:[{include:"#InvalidVariableDecl"},{include:"#BuiltinVariable"}]},3:{patterns:[{include:"#Expression"}]}},end:"(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",name:"meta.variable.gnuplot",patterns:[{include:"#Expression"}]}},scopeName:"source.gnuplot"})]},72223:function(i,n,e){e.r(n),e.d(n,{default:function(){return w}});var a=e(13077),t=e(42798),o=e(77046),r=e(90643),u=e(48567),s=e(86223),l=e(24973),c=e(8433),m=e(88792),p=e(44233),d=e(70992),g=e(73441),b=e(28647),f=e(14025),x=e(91459),h=e(89665);const y=Object.freeze({displayName:"LaTeX",name:"latex",patterns:[{comment:"This scope identifies partially typed commands such as `\\tab`. We use this to trigger \u201CCommand Completion\u201D only when it makes sense.",match:"(?<=\\\\[\\w@]|\\\\[\\w@]{2}|\\\\[\\w@]{3}|\\\\[\\w@]{4}|\\\\[\\w@]{5}|\\\\[\\w@]{6})\\s",name:"meta.space-after-command.latex"},{begin:"((\\\\)(?:usepackage|documentclass))\\b(?=\\[|\\{)",beginCaptures:{1:{name:"keyword.control.preamble.latex"},2:{name:"punctuation.definition.function.latex"}},end:"(?<=\\})",endCaptures:{0:{name:"punctuation.definition.arguments.end.latex"}},name:"meta.preamble.latex",patterns:[{include:"#multiline-optional-arg"},{begin:"((?:\\G|(?<=\\]))\\{)",beginCaptures:{0:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"support.class.latex",end:"(\\})",endCaptures:{0:{name:"punctuation.definition.arguments.end.latex"}},patterns:[{include:"$self"}]}]},{begin:"((\\\\)(?:include|input))(\\{)",beginCaptures:{1:{name:"keyword.control.include.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"punctuation.definition.arguments.begin.latex"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.arguments.end.latex"}},name:"meta.include.latex",patterns:[{include:"$self"}]},{begin:"((\\\\)((?:sub){0,2}section|(?:sub)?paragraph|chapter|part|addpart|addchap|addsec|minisec|frametitle)(?:\\*)?)((?:\\[[^\\[]*?\\]){0,2})(\\{)",beginCaptures:{1:{name:"support.function.section.latex"},2:{name:"punctuation.definition.function.latex"},4:{patterns:[{include:"#optional-arg"}]},5:{name:"punctuation.definition.arguments.begin.latex"}},comment:"this works OK with all kinds of crazy stuff as long as section is one line",contentName:"entity.name.section.latex",end:"\\}",endCaptures:{0:{name:"punctuation.definition.arguments.end.latex"}},name:"meta.function.section.$3.latex",patterns:[{include:"text.tex#braces"},{include:"$base"}]},{begin:"((?:\\s*)\\\\begin\\{songs\\}\\{.*\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},contentName:"meta.data.environment.songs.latex",end:"(\\\\end\\{songs\\}(?:\\s*\\n)?)",name:"meta.function.environment.songs.latex",patterns:[{begin:"\\\\\\[",end:"\\]",name:"meta.chord.block.latex support.class.chord.block.environment.latex",patterns:[{include:"$base"}]},{match:"\\^",name:"meta.chord.block.latex support.class.chord.block.environment.latex"},{include:"$self"}]},{begin:"(?:^\\s*)?\\\\begin\\{(lstlisting|minted|pyglist)\\}(?=\\[|\\{)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\\\end\\{\\1\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)((?:c|cpp))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.cpp.embedded.latex",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.cpp.embedded.latex"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:asy|asymptote))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.asy",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.asy"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:css))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.css",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.css"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:hs|haskell))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.haskell",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.haskell"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:html))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"text.html",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"text.html.basic"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:xml))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"text.xml",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"text.xml"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:java))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.java",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.java"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:lua))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.lua",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.lua"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:jl|julia))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.julia",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.julia"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:rb|ruby))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.ruby",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.ruby"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:js|javascript))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.js",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.js"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:ts|typescript))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.ts",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.ts"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:py|python))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.python",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.python"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:yaml))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.yaml",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.yaml"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:rust))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.rust",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.rust"}]},{begin:"(?:\\G|(?<=\\]))(\\{)([a-zA-Z]*)(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"meta.function.embedded.latex",end:"^\\s*(?=\\\\end\\{(?:lstlisting|minted|pyglist)\\})",name:"meta.embedded.block.generic.latex"}]},{begin:"\\s*\\\\begin\\{(?:cppcode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:cppcode)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.cpp.embedded.latex",end:"^\\s*(?=\\\\end\\{(?:cppcode)\\*?\\})",patterns:[{include:"source.cpp.embedded.latex"}]}]},{begin:"\\s*\\\\begin\\{(?:hscode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:hscode)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.haskell",end:"^\\s*(?=\\\\end\\{(?:hscode)\\*?\\})",patterns:[{include:"source.haskell"}]}]},{begin:"\\s*\\\\begin\\{(?:luacode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:luacode)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.lua",end:"^\\s*(?=\\\\end\\{(?:luacode)\\*?\\})",patterns:[{include:"source.lua"}]}]},{begin:"\\s*\\\\begin\\{(?:jlcode|jlverbatim|jlblock|jlconcode|jlconsole|jlconverbatim)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:jlcode|jlverbatim|jlblock|jlconcode|jlconsole|jlconverbatim)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.julia",end:"^\\s*(?=\\\\end\\{(?:jlcode|jlverbatim|jlblock|jlconcode|jlconsole|jlconverbatim)\\*?\\})",patterns:[{include:"source.julia"}]}]},{begin:"\\s*\\\\begin\\{(?:juliacode|juliaverbatim|juliablock|juliaconcode|juliaconsole|juliaconverbatim)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:juliacode|juliaverbatim|juliablock|juliaconcode|juliaconsole|juliaconverbatim)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.julia",end:"^\\s*(?=\\\\end\\{(?:juliacode|juliaverbatim|juliablock|juliaconcode|juliaconsole|juliaconverbatim)\\*?\\})",patterns:[{include:"source.julia"}]}]},{begin:"\\s*\\\\begin\\{(?:sageblock|sagesilent|sageverbatim|sageexample|sagecommandline|python|pythonq|pythonrepl)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:sageblock|sagesilent|sageverbatim|sageexample|sagecommandline|python|pythonq|pythonrepl)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.python",end:"^\\s*(?=\\\\end\\{(?:sageblock|sagesilent|sageverbatim|sageexample|sagecommandline|python|pythonq|pythonrepl)\\*?\\})",patterns:[{include:"source.python"}]}]},{begin:"\\s*\\\\begin\\{(?:pycode|pyverbatim|pyblock|pyconcode|pyconsole|pyconverbatim)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:pycode|pyverbatim|pyblock|pyconcode|pyconsole|pyconverbatim)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.python",end:"^\\s*(?=\\\\end\\{(?:pycode|pyverbatim|pyblock|pyconcode|pyconsole|pyconverbatim)\\*?\\})",patterns:[{include:"source.python"}]}]},{begin:"\\s*\\\\begin\\{(?:pylabcode|pylabverbatim|pylabblock|pylabconcode|pylabconsole|pylabconverbatim)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:pylabcode|pylabverbatim|pylabblock|pylabconcode|pylabconsole|pylabconverbatim)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.python",end:"^\\s*(?=\\\\end\\{(?:pylabcode|pylabverbatim|pylabblock|pylabconcode|pylabconsole|pylabconverbatim)\\*?\\})",patterns:[{include:"source.python"}]}]},{begin:"\\s*\\\\begin\\{(?:sympycode|sympyverbatim|sympyblock|sympyconcode|sympyconsole|sympyconverbatim)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:sympycode|sympyverbatim|sympyblock|sympyconcode|sympyconsole|sympyconverbatim)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.python",end:"^\\s*(?=\\\\end\\{(?:sympycode|sympyverbatim|sympyblock|sympyconcode|sympyconsole|sympyconverbatim)\\*?\\})",patterns:[{include:"source.python"}]}]},{begin:"\\s*\\\\begin\\{(?:scalacode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:scalacode)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.scala",end:"^\\s*(?=\\\\end\\{(?:scalacode)\\*?\\})",patterns:[{include:"source.scala"}]}]},{begin:"\\s*\\\\begin\\{(?:asy|asycode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:asy|asycode)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.asymptote",end:"^\\s*(?=\\\\end\\{(?:asy|asycode)\\*?\\})",patterns:[{include:"source.asymptote"}]}]},{begin:"\\s*\\\\begin\\{(?:dot2tex|dotcode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:dot2tex|dotcode)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.dot",end:"^\\s*(?=\\\\end\\{(?:dot2tex|dotcode)\\*?\\})",patterns:[{include:"source.dot"}]}]},{begin:"\\s*\\\\begin\\{(?:gnuplot)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:gnuplot)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.gnuplot",end:"^\\s*(?=\\\\end\\{(?:gnuplot)\\*?\\})",patterns:[{include:"source.gnuplot"}]}]},{begin:"\\s*\\\\begin\\{([a-zA-Z]*code|lstlisting|minted|pyglist)\\*?\\}(?:\\[.*\\])?(?:\\{.*\\})?",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},contentName:"meta.function.embedded.latex",end:"\\\\end\\{\\1\\}(?:\\s*\\n)?",name:"meta.embedded.block.generic.latex"},{begin:"(?:^\\s*)?\\\\begin\\{(terminal\\*?)\\}(?=\\[|\\{)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\\\end\\{\\1\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)([a-zA-Z]*)(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"meta.function.embedded.latex",end:"^\\s*(?=\\\\end\\{terminal\\*?\\})",name:"meta.embedded.block.generic.latex"}]},{begin:"((\\\\)addplot)(?:\\+?)((?:\\[[^\\[]*\\]))*\\s*(gnuplot)\\s*((?:\\[[^\\[]*\\]))*\\s*(\\{)",captures:{1:{name:"support.function.be.latex"},2:{name:"punctuation.definition.function.latex"},3:{patterns:[{include:"#optional-arg"}]},4:{name:"variable.parameter.function.latex"},5:{patterns:[{include:"#optional-arg"}]},6:{name:"punctuation.definition.arguments.begin.latex"}},end:"\\s*(\\};)",patterns:[{begin:"%",beginCaptures:{0:{name:"punctuation.definition.comment.latex"}},end:"$\\n?",name:"comment.line.percentage.latex"},{include:"source.gnuplot"}]},{begin:"(\\s*\\\\begin\\{((?:fboxv|boxedv|V|v|spv)erbatim\\*?)\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},contentName:"markup.raw.verbatim.latex",end:"(\\\\end\\{\\2\\})",name:"meta.function.verbatim.latex"},{begin:"(\\s*\\\\begin\\{VerbatimOut\\}\\{[^\\}]*\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},contentName:"markup.raw.verbatim.latex",end:"(\\\\end\\{\\VerbatimOut\\})",name:"meta.function.verbatim.latex"},{begin:"(\\s*\\\\begin\\{alltt\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},contentName:"markup.raw.verbatim.latex",end:"(\\\\end\\{alltt\\})",name:"meta.function.alltt.latex",patterns:[{captures:{1:{name:"punctuation.definition.function.latex"}},match:"(\\\\)[A-Za-z]+",name:"support.function.general.latex"}]},{begin:"(\\s*\\\\begin\\{([Cc]omment)\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},contentName:"punctuation.definition.comment.latex",end:"(\\\\end\\{\\2\\})",name:"meta.function.verbatim.latex"},{begin:"(?:\\s*)((\\\\)(?:href|hyperref|hyperimage))(?=\\[|\\{)",beginCaptures:{1:{name:"support.function.url.latex"}},comment:"Captures \\command[option]{url}{optional category}{optional name}{text}",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}},name:"meta.function.hyperlink.latex",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)([^}]*)(\\})(?:\\{[^}]*\\}){2}?(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"markup.underline.link.latex"},3:{name:"punctuation.definition.arguments.end.latex"},4:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"meta.variable.parameter.function.latex",end:"(?=\\})",patterns:[{include:"$base"}]},{begin:"(?:\\G|(?<=\\]))(?:(\\{)[^}]*(\\}))?(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"punctuation.definition.arguments.end.latex"},3:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"meta.variable.parameter.function.latex",end:"(?=\\})",patterns:[{include:"$base"}]}]},{captures:{1:{name:"support.function.url.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"punctuation.definition.arguments.begin.latex"},5:{name:"punctuation.definition.arguments.end.latex"},"'":{name:"markup.underline.link.latex"}},match:"(?:\\s*)((\\\\)url)(\\{)([^}]*)(\\})",name:"meta.function.link.url.latex"},{captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},comment:"These two patterns match the \\begin{document} and \\end{document} commands, so that the environment matching pattern following them will ignore those commands.",match:"(\\s*\\\\begin\\{document\\})",name:"meta.function.begin-document.latex"},{captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},match:"(\\s*\\\\end\\{document\\})",name:"meta.function.end-document.latex"},{begin:"(?:\\s*)((\\\\)begin)(\\{)((?:\\+?array|equation|(?:IEEE)?eqnarray|multline|align|aligned|alignat|alignedat|flalign|flaligned|flalignat|split|gather|gathered|\\+?cases|(?:display)?math|\\+?[a-zA-Z]*matrix|[pbBvV]?NiceMatrix|[pbBvV]?NiceArray|(?:(?:arg)?(?:mini|maxi)))(?:\\*|!)?)(\\})(\\s*\\n)?",captures:{1:{name:"support.function.be.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"punctuation.definition.arguments.begin.latex"},4:{name:"variable.parameter.function.latex"},5:{name:"punctuation.definition.arguments.end.latex"}},contentName:"meta.math.block.latex support.class.math.block.environment.latex",end:"(?:\\s*)((\\\\)end)(\\{)(\\4)(\\})(?:\\s*\\n)?",name:"meta.function.environment.math.latex",patterns:[{match:"(?<!\\\\)&",name:"keyword.control.equation.align.latex"},{match:"\\\\\\\\",name:"keyword.control.equation.newline.latex"},{include:"#definition-label"},{include:"text.tex#math"},{include:"$base"}]},{begin:"(?:\\s*)(\\\\begin\\{empheq\\}(?:\\[.*\\])?)",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},contentName:"meta.math.block.latex support.class.math.block.environment.latex",end:"(?:\\s*)(\\\\end\\{empheq\\})",name:"meta.function.environment.math.latex",patterns:[{match:"(?<!\\\\)&",name:"keyword.control.equation.align.latex"},{match:"\\\\\\\\",name:"keyword.control.equation.newline.latex"},{include:"#definition-label"},{include:"text.tex#math"},{include:"$base"}]},{begin:"(\\s*\\\\begin\\{(tabular[xy*]?|xltabular|longtable|(?:long)?tabu|(?:long|tall)?tblr|NiceTabular[X*]?|booktabs)\\}(\\s*\\n)?)",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},contentName:"meta.data.environment.tabular.latex",end:"(\\s*\\\\end\\{(\\2)\\}(?:\\s*\\n)?)",name:"meta.function.environment.tabular.latex",patterns:[{match:"(?<!\\\\)&",name:"keyword.control.table.cell.latex"},{match:"\\\\\\\\",name:"keyword.control.table.newline.latex"},{include:"$base"}]},{begin:"(\\s*\\\\begin\\{(itemize|enumerate|description|list)\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"(\\\\end\\{\\2\\}(?:\\s*\\n)?)",name:"meta.function.environment.list.latex",patterns:[{include:"$base"}]},{begin:"(\\s*\\\\begin\\{tikzpicture\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"(\\\\end\\{tikzpicture\\}(?:\\s*\\n)?)",name:"meta.function.environment.latex.tikz",patterns:[{include:"$base"}]},{begin:"(\\s*\\\\begin\\{frame\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"(\\\\end\\{frame\\})",name:"meta.function.environment.frame.latex",patterns:[{include:"$base"}]},{begin:"(\\s*\\\\begin\\{(mpost\\*?)\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"(\\\\end\\{\\2\\}(?:\\s*\\n)?)",name:"meta.function.environment.latex.mpost"},{begin:"(\\s*\\\\begin\\{markdown\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},contentName:"meta.embedded.markdown_latex_combined",end:"(\\\\end\\{markdown\\})",patterns:[{include:"text.tex.markdown_latex_combined"}]},{begin:"(\\s*\\\\begin\\{(\\w+\\*?)\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"(\\\\end\\{\\2\\}(?:\\s*\\n)?)",name:"meta.function.environment.general.latex",patterns:[{include:"$base"}]},{captures:{1:{name:"storage.type.function.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"punctuation.definition.begin.latex"},4:{name:"support.function.general.latex"},5:{name:"punctuation.definition.function.latex"},6:{name:"punctuation.definition.end.latex"}},match:"((\\\\)(?:newcommand|renewcommand|(?:re)?newrobustcmd|DeclareRobustCommand))\\*?({)((\\\\)[^}]*)(})"},{begin:"((\\\\)marginpar)((?:\\[[^\\[]*?\\])*)(\\{)",beginCaptures:{1:{name:"support.function.marginpar.latex"},2:{name:"punctuation.definition.function.latex"},3:{patterns:[{include:"#optional-arg"}]},4:{name:"punctuation.definition.marginpar.begin.latex"}},contentName:"meta.paragraph.margin.latex",end:"\\}",endCaptures:{0:{name:"punctuation.definition.marginpar.end.latex"}},patterns:[{include:"text.tex#braces"},{include:"$base"}]},{begin:"((\\\\)footnote)((?:\\[[^\\[]*?\\])*)(\\{)",beginCaptures:{1:{name:"support.function.footnote.latex"},2:{name:"punctuation.definition.function.latex"},3:{patterns:[{include:"#optional-arg"}]},4:{name:"punctuation.definition.footnote.begin.latex"}},contentName:"entity.name.footnote.latex",end:"\\}",endCaptures:{0:{name:"punctuation.definition.footnote.end.latex"}},patterns:[{include:"text.tex#braces"},{include:"$base"}]},{begin:"((\\\\)emph)(\\{)",beginCaptures:{1:{name:"support.function.emph.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"punctuation.definition.emph.begin.latex"}},contentName:"markup.italic.emph.latex",end:"\\}",endCaptures:{0:{name:"punctuation.definition.emph.end.latex"}},name:"meta.function.emph.latex",patterns:[{include:"text.tex#braces"},{include:"$base"}]},{begin:"((\\\\)textit)(\\{)",captures:{1:{name:"support.function.textit.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"punctuation.definition.textit.begin.latex"}},comment:`We put the keyword in a capture and name this capture, so that disabling spell checking for \u201Ckeyword\u201D won't be inherited by the argument to \\textit{...}.

Put specific matches for particular LaTeX keyword.functions before the last two more general functions`,contentName:"markup.italic.textit.latex",end:"\\}",endCaptures:{0:{name:"punctuation.definition.textit.end.latex"}},name:"meta.function.textit.latex",patterns:[{include:"text.tex#braces"},{include:"$base"}]},{begin:"((\\\\)textbf)(\\{)",captures:{1:{name:"support.function.textbf.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"punctuation.definition.textbf.begin.latex"}},contentName:"markup.bold.textbf.latex",end:"\\}",endCaptures:{0:{name:"punctuation.definition.textbf.end.latex"}},name:"meta.function.textbf.latex",patterns:[{include:"text.tex#braces"},{include:"$base"}]},{begin:"((\\\\)texttt)(\\{)",captures:{1:{name:"support.function.texttt.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"punctuation.definition.texttt.begin.latex"}},contentName:"markup.raw.texttt.latex",end:"\\}",endCaptures:{0:{name:"punctuation.definition.texttt.end.latex"}},name:"meta.function.texttt.latex",patterns:[{include:"text.tex#braces"},{include:"$base"}]},{captures:{0:{name:"keyword.other.item.latex"},1:{name:"punctuation.definition.keyword.latex"}},match:"(\\\\)item\\b",name:"meta.scope.item.latex"},{begin:"((\\\\)(?:[aA]uto|foot|full|no|ref|short|[tT]ext|[pP]aren|[sS]mart)?[cC]ite(?:al)?(?:p|s|t|author|year(?:par)?|title)?[ANP]*\\*?)((?:(?:\\([^\\)]*\\)){0,2}(?:\\[[^\\]]*\\]){0,2}\\{[\\p{Alphabetic}:.]*\\})*)(?:([<\\[])[^\\]<>]*([>\\]]))?(?:(\\[)[^\\]]*(\\]))?(\\{)",captures:{1:{name:"keyword.control.cite.latex"},2:{name:"punctuation.definition.keyword.latex"},3:{patterns:[{include:"#autocites-arg"}]},4:{name:"punctuation.definition.arguments.optional.begin.latex"},5:{name:"punctuation.definition.arguments.optional.end.latex"},6:{name:"punctuation.definition.arguments.optional.begin.latex"},7:{name:"punctuation.definition.arguments.optional.end.latex"},8:{name:"punctuation.definition.arguments.begin.latex"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.arguments.end.latex"}},name:"meta.citation.latex",patterns:[{captures:{1:{name:"comment.line.percentage.tex"},2:{name:"punctuation.definition.comment.tex"}},match:"((%).*)$"},{match:"[\\p{Alphabetic}\\p{Number}:.-]+",name:"constant.other.reference.citation.latex"}]},{begin:"((\\\\)bibentry)(\\{)",captures:{1:{name:"keyword.control.cite.latex"},2:{name:"punctuation.definition.keyword.latex"},3:{name:"punctuation.definition.arguments.begin.latex"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.arguments.end.latex"}},name:"meta.citation.latex",patterns:[{match:"[\\p{Alphabetic}\\p{Number}:.]+",name:"constant.other.reference.citation.latex"}]},{begin:"((\\\\)(?:\\w*[rR]ef\\*?))(\\{)",beginCaptures:{1:{name:"keyword.control.ref.latex"},2:{name:"punctuation.definition.keyword.latex"},3:{name:"punctuation.definition.arguments.begin.latex"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.arguments.end.latex"}},name:"meta.reference.label.latex",patterns:[{match:"[\\p{Alphabetic}\\p{Number}\\.,:/*!^_-]",name:"constant.other.reference.label.latex"}]},{include:"#definition-label"},{begin:"((\\\\)(?:verb|Verb|spverb)\\*?)\\s*((\\\\)scantokens)(\\{)",beginCaptures:{1:{name:"support.function.verb.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"support.function.verb.latex"},4:{name:"punctuation.definition.verb.latex"},5:{name:"punctuation.definition.begin.latex"}},contentName:"markup.raw.verb.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.end.latex"}},name:"meta.function.verb.latex",patterns:[{include:"$self"}]},{captures:{1:{name:"support.function.verb.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"punctuation.definition.verb.latex"},4:{name:"markup.raw.verb.latex"},5:{name:"punctuation.definition.verb.latex"}},match:"((\\\\)(?:verb|Verb|spverb)\\*?)\\s*((?<=\\s)\\S|[^a-zA-Z])(.*?)(\\3|$)",name:"meta.function.verb.latex"},{captures:{1:{name:"support.function.verb.latex"},2:{name:"punctuation.definition.function.latex"},3:{patterns:[{include:"#optional-arg"}]},4:{name:"punctuation.definition.arguments.begin.latex"},5:{name:"punctuation.definition.arguments.end.latex"},6:{name:"punctuation.definition.verb.latex"},7:{name:"markup.raw.verb.latex"},8:{name:"punctuation.definition.verb.latex"},9:{name:"punctuation.definition.verb.latex"},10:{name:"markup.raw.verb.latex"},11:{name:"punctuation.definition.verb.latex"}},match:"((\\\\)(?:mint|mintinline))((?:\\[[^\\[]*?\\])?)(\\{)[a-zA-Z]*(\\})(?:(?:([^a-zA-Z\\{])(.*?)(\\6))|(?:(\\{)(.*?)(\\})))",name:"meta.function.verb.latex"},{captures:{1:{name:"support.function.verb.latex"},2:{name:"punctuation.definition.function.latex"},3:{patterns:[{include:"#optional-arg"}]},4:{name:"punctuation.definition.verb.latex"},5:{name:"markup.raw.verb.latex"},6:{name:"punctuation.definition.verb.latex"},7:{name:"punctuation.definition.verb.latex"},8:{name:"markup.raw.verb.latex"},9:{name:"punctuation.definition.verb.latex"}},match:"((\\\\)[a-z]+inline)((?:\\[[^\\[]*?\\])?)(?:(?:([^a-zA-Z\\{])(.*?)(\\4))|(?:(\\{)(.*?)(\\})))",name:"meta.function.verb.latex"},{captures:{1:{name:"support.function.verb.latex"},2:{name:"punctuation.definition.function.latex"},3:{patterns:[{include:"#optional-arg"}]},4:{name:"punctuation.definition.verb.latex"},5:{name:"source.python",patterns:[{include:"source.python"}]},6:{name:"punctuation.definition.verb.latex"},7:{name:"punctuation.definition.verb.latex"},8:{name:"source.python",patterns:[{include:"source.python"}]},9:{name:"punctuation.definition.verb.latex"}},match:"((\\\\)(?:(?:py|pycon|pylab|pylabcon|sympy|sympycon)[cv]?|pyq|pycq|pyif))((?:\\[[^\\[]*?\\])?)(?:(?:([^a-zA-Z\\{])(.*?)(\\4))|(?:(\\{)(.*?)(\\})))",name:"meta.function.verb.latex"},{captures:{1:{name:"support.function.verb.latex"},2:{name:"punctuation.definition.function.latex"},3:{patterns:[{include:"#optional-arg"}]},4:{name:"punctuation.definition.verb.latex"},5:{name:"source.julia",patterns:[{include:"source.julia"}]},6:{name:"punctuation.definition.verb.latex"},7:{name:"punctuation.definition.verb.latex"},8:{name:"source.julia",patterns:[{include:"source.julia"}]},9:{name:"punctuation.definition.verb.latex"}},match:"((\\\\)(?:jl|julia)[cv]?)((?:\\[[^\\[]*?\\])?)(?:(?:([^a-zA-Z\\{])(.*?)(\\4))|(?:(\\{)(.*?)(\\})))",name:"meta.function.verb.latex"},{match:"\\\\(?:newline|pagebreak|clearpage|linebreak|pause)(?:\\b)",name:"keyword.control.layout.latex"},{begin:"\\\\\\(",beginCaptures:{0:{name:"punctuation.definition.string.begin.latex"}},end:"\\\\\\)",endCaptures:{0:{name:"punctuation.definition.string.end.latex"}},name:"meta.math.block.latex support.class.math.block.environment.latex",patterns:[{include:"text.tex#math"},{include:"$base"}]},{begin:"\\$\\$",beginCaptures:{0:{name:"punctuation.definition.string.begin.latex"}},end:"\\$\\$",endCaptures:{0:{name:"punctuation.definition.string.end.latex"}},name:"meta.math.block.latex support.class.math.block.environment.latex",patterns:[{match:"\\\\\\$",name:"constant.character.escape.latex"},{include:"text.tex#math"},{include:"$base"}]},{begin:"\\$",beginCaptures:{0:{name:"punctuation.definition.string.begin.tex"}},end:"\\$",endCaptures:{0:{name:"punctuation.definition.string.end.tex"}},name:"meta.math.block.tex support.class.math.block.tex",patterns:[{match:"\\\\\\$",name:"constant.character.escape.latex"},{include:"text.tex#math"},{include:"$base"}]},{begin:"\\\\\\[",beginCaptures:{0:{name:"punctuation.definition.string.begin.latex"}},end:"\\\\\\]",endCaptures:{0:{name:"punctuation.definition.string.end.latex"}},name:"meta.math.block.latex support.class.math.block.environment.latex",patterns:[{include:"text.tex#math"},{include:"$base"}]},{captures:{1:{name:"punctuation.definition.constant.latex"}},match:"(\\\\)(text(s(terling|ixoldstyle|urd|e(ction|venoldstyle|rvicemark))|yen|n(ineoldstyle|umero|aira)|c(ircledP|o(py(left|right)|lonmonetary)|urrency|e(nt(oldstyle)?|lsius))|t(hree(superior|oldstyle|quarters(emdash)?)|i(ldelow|mes)|w(o(superior|oldstyle)|elveudash)|rademark)|interrobang(down)?|zerooldstyle|o(hm|ne(superior|half|oldstyle|quarter)|penbullet|rd(feminine|masculine))|d(i(scount|ed|v(orced)?)|o(ng|wnarrow|llar(oldstyle)?)|egree|agger(dbl)?|blhyphen(char)?)|uparrow|p(ilcrow|e(so|r(t(housand|enthousand)|iodcentered))|aragraph|m)|e(stimated|ightoldstyle|uro)|quotes(traight(dblbase|base)|ingle)|f(iveoldstyle|ouroldstyle|lorin|ractionsolidus)|won|l(not|ira|e(ftarrow|af)|quill|angle|brackdbl)|a(s(cii(caron|dieresis|acute|grave|macron|breve)|teriskcentered)|cutedbl)|r(ightarrow|e(cipe|ferencemark|gistered)|quill|angle|brackdbl)|g(uarani|ravedbl)|m(ho|inus|u(sicalnote)?|arried)|b(igcircle|orn|ullet|lank|a(ht|rdbl)|rokenbar)))\\b",name:"constant.character.latex"},{captures:{1:{name:"punctuation.definition.column-specials.begin.latex"},2:{name:"punctuation.definition.column-specials.end.latex"}},match:"(?:<|>)(\\{)\\$(\\})",name:"meta.column-specials.latex"},{include:"text.tex"}],repository:{"autocites-arg":{patterns:[{captures:{1:{name:"punctuation.definition.arguments.optional.begin.latex"},2:{name:"punctuation.definition.arguments.optional.end.latex"},3:{name:"punctuation.definition.arguments.optional.begin.latex"},4:{name:"punctuation.definition.arguments.optional.end.latex"},5:{name:"punctuation.definition.arguments.begin.latex"},6:{name:"constant.other.reference.citation.latex"},7:{name:"punctuation.definition.arguments.end.latex"},8:{patterns:[{include:"#autocites-arg"}]}},match:"(?:(\\()[^\\)]*(\\))){0,2}(?:(\\[)[^\\]]*(\\])){0,2}(\\{)([\\p{Alphabetic}\\p{Number}:.]+)(\\})(.*)"}]},"begin-env-tokenizer":{captures:{1:{name:"support.function.be.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"punctuation.definition.arguments.begin.latex"},4:{name:"variable.parameter.function.latex"},5:{name:"punctuation.definition.arguments.end.latex"},6:{name:"punctuation.definition.arguments.optional.begin.latex"},7:{patterns:[{include:"$base"}]},8:{name:"punctuation.definition.arguments.optional.end.latex"},9:{name:"punctuation.definition.arguments.begin.latex"},10:{name:"variable.parameter.function.latex"},11:{name:"punctuation.definition.arguments.end.latex"}},match:"\\s*((\\\\)(?:begin|end))(\\{)([a-zA-Z]*\\*?)(\\})(?:(\\[)(.*)(\\]))?(?:(\\{)([^{}]*)(\\}))?"},"definition-label":{begin:"((\\\\)label)((?:\\[[^\\[]*?\\])*)(\\{)",beginCaptures:{1:{name:"keyword.control.label.latex"},2:{name:"punctuation.definition.keyword.latex"},3:{patterns:[{include:"#optional-arg"}]},4:{name:"punctuation.definition.arguments.begin.latex"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.arguments.end.latex"}},name:"meta.definition.label.latex",patterns:[{match:"[\\p{Alphabetic}\\p{Number}\\.,:/*!^_-]",name:"variable.parameter.definition.label.latex"}]},"multiline-optional-arg":{begin:"\\G\\[",beginCaptures:{0:{name:"punctuation.definition.arguments.optional.begin.latex"}},contentName:"variable.parameter.function.latex",end:"\\]",endCaptures:{0:{name:"punctuation.definition.arguments.optional.end.latex"}},name:"meta.parameter.optional.latex",patterns:[{include:"$self"}]},"multiline-optional-arg-no-highlight":{begin:"\\G\\[",beginCaptures:{0:{name:"punctuation.definition.arguments.optional.begin.latex"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.arguments.optional.end.latex"}},name:"meta.parameter.optional.latex",patterns:[{include:"$self"}]},"optional-arg":{patterns:[{captures:{1:{name:"punctuation.definition.arguments.optional.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.optional.end.latex"}},match:"(\\[)([^\\[]*?)(\\])",name:"meta.parameter.optional.latex"}]}},scopeName:"text.tex.latex",embeddedLangs:["tex","css","haskell","html","xml","java","lua","julia","ruby","javascript","typescript","python","yaml","rust","scala","gnuplot"]});var w=[...a.default,...t.default,...o.default,...r.default,...u.default,...s.default,...l.default,...c.default,...m.default,...p.default,...d.default,...g.default,...b.default,...f.default,...x.default,...h.default,y]},14025:function(i,n,e){e.r(n),e.d(n,{default:function(){return t}});var t=[Object.freeze({displayName:"Rust",name:"rust",patterns:[{begin:"(<)(\\[)",beginCaptures:{1:{name:"punctuation.brackets.angle.rust"},2:{name:"punctuation.brackets.square.rust"}},comment:"boxed slice literal",end:">",endCaptures:{0:{name:"punctuation.brackets.angle.rust"}},patterns:[{include:"#block-comments"},{include:"#comments"},{include:"#gtypes"},{include:"#lvariables"},{include:"#lifetimes"},{include:"#punctuation"},{include:"#types"}]},{captures:{1:{name:"keyword.operator.macro.dollar.rust"},3:{name:"keyword.other.crate.rust"},4:{name:"entity.name.type.metavariable.rust"},6:{name:"keyword.operator.key-value.rust"},7:{name:"variable.other.metavariable.specifier.rust"}},comment:"macro type metavariables",match:"(\\$)((crate)|([A-Z][A-Za-z0-9_]*))((:)(block|expr|ident|item|lifetime|literal|meta|path?|stmt|tt|ty|vis))?",name:"meta.macro.metavariable.type.rust",patterns:[{include:"#keywords"}]},{captures:{1:{name:"keyword.operator.macro.dollar.rust"},2:{name:"variable.other.metavariable.name.rust"},4:{name:"keyword.operator.key-value.rust"},5:{name:"variable.other.metavariable.specifier.rust"}},comment:"macro metavariables",match:"(\\$)([a-z][A-Za-z0-9_]*)((:)(block|expr|ident|item|lifetime|literal|meta|path?|stmt|tt|ty|vis))?",name:"meta.macro.metavariable.rust",patterns:[{include:"#keywords"}]},{captures:{1:{name:"entity.name.function.macro.rules.rust"},3:{name:"entity.name.function.macro.rust"},4:{name:"entity.name.type.macro.rust"},5:{name:"punctuation.brackets.curly.rust"}},comment:"macro rules",match:"\\b(macro_rules!)\\s+(([a-z0-9_]+)|([A-Z][a-z0-9_]*))\\s+(\\{)",name:"meta.macro.rules.rust"},{captures:{1:{name:"storage.type.rust"},2:{name:"entity.name.module.rust"}},comment:"modules",match:"(mod)\\s+((?:r#(?!crate|[Ss]elf|super))?[a-z][A-Za-z0-9_]*)"},{begin:"\\b(extern)\\s+(crate)",beginCaptures:{1:{name:"storage.type.rust"},2:{name:"keyword.other.crate.rust"}},comment:"external crate imports",end:";",endCaptures:{0:{name:"punctuation.semi.rust"}},name:"meta.import.rust",patterns:[{include:"#block-comments"},{include:"#comments"},{include:"#keywords"},{include:"#punctuation"}]},{begin:"\\b(use)\\s",beginCaptures:{1:{name:"keyword.other.rust"}},comment:"use statements",end:";",endCaptures:{0:{name:"punctuation.semi.rust"}},name:"meta.use.rust",patterns:[{include:"#block-comments"},{include:"#comments"},{include:"#keywords"},{include:"#namespaces"},{include:"#punctuation"},{include:"#types"},{include:"#lvariables"}]},{include:"#block-comments"},{include:"#comments"},{include:"#attributes"},{include:"#lvariables"},{include:"#constants"},{include:"#gtypes"},{include:"#functions"},{include:"#types"},{include:"#keywords"},{include:"#lifetimes"},{include:"#macros"},{include:"#namespaces"},{include:"#punctuation"},{include:"#strings"},{include:"#variables"}],repository:{attributes:{begin:"(#)(\\!?)(\\[)",beginCaptures:{1:{name:"punctuation.definition.attribute.rust"},3:{name:"punctuation.brackets.attribute.rust"}},comment:"attributes",end:"\\]",endCaptures:{0:{name:"punctuation.brackets.attribute.rust"}},name:"meta.attribute.rust",patterns:[{include:"#block-comments"},{include:"#comments"},{include:"#keywords"},{include:"#lifetimes"},{include:"#punctuation"},{include:"#strings"},{include:"#gtypes"},{include:"#types"}]},"block-comments":{patterns:[{comment:"empty block comments",match:"/\\*\\*/",name:"comment.block.rust"},{begin:"/\\*\\*",comment:"block documentation comments",end:"\\*/",name:"comment.block.documentation.rust",patterns:[{include:"#block-comments"}]},{begin:"/\\*(?!\\*)",comment:"block comments",end:"\\*/",name:"comment.block.rust",patterns:[{include:"#block-comments"}]}]},comments:{patterns:[{captures:{1:{name:"punctuation.definition.comment.rust"}},comment:"documentation comments",match:"(///).*$",name:"comment.line.documentation.rust"},{captures:{1:{name:"punctuation.definition.comment.rust"}},comment:"line comments",match:"(//).*$",name:"comment.line.double-slash.rust"}]},constants:{patterns:[{comment:"ALL CAPS constants",match:"\\b[A-Z]{2}[A-Z0-9_]*\\b",name:"constant.other.caps.rust"},{captures:{1:{name:"storage.type.rust"},2:{name:"constant.other.caps.rust"}},comment:"constant declarations",match:"\\b(const)\\s+([A-Z][A-Za-z0-9_]*)\\b"},{captures:{1:{name:"punctuation.separator.dot.decimal.rust"},2:{name:"keyword.operator.exponent.rust"},3:{name:"keyword.operator.exponent.sign.rust"},4:{name:"constant.numeric.decimal.exponent.mantissa.rust"},5:{name:"entity.name.type.numeric.rust"}},comment:"decimal integers and floats",match:"\\b\\d[\\d_]*(\\.?)[\\d_]*(?:(E|e)([+-]?)([\\d_]+))?(f32|f64|i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b",name:"constant.numeric.decimal.rust"},{captures:{1:{name:"entity.name.type.numeric.rust"}},comment:"hexadecimal integers",match:"\\b0x[\\da-fA-F_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b",name:"constant.numeric.hex.rust"},{captures:{1:{name:"entity.name.type.numeric.rust"}},comment:"octal integers",match:"\\b0o[0-7_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b",name:"constant.numeric.oct.rust"},{captures:{1:{name:"entity.name.type.numeric.rust"}},comment:"binary integers",match:"\\b0b[01_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b",name:"constant.numeric.bin.rust"},{comment:"booleans",match:"\\b(true|false)\\b",name:"constant.language.bool.rust"}]},escapes:{captures:{1:{name:"constant.character.escape.backslash.rust"},2:{name:"constant.character.escape.bit.rust"},3:{name:"constant.character.escape.unicode.rust"},4:{name:"constant.character.escape.unicode.punctuation.rust"},5:{name:"constant.character.escape.unicode.punctuation.rust"}},comment:"escapes: ASCII, byte, Unicode, quote, regex",match:"(\\\\)(?:(?:(x[0-7][\\da-fA-F])|(u(\\{)[\\da-fA-F]{4,6}(\\}))|.))",name:"constant.character.escape.rust"},functions:{patterns:[{captures:{1:{name:"keyword.other.rust"},2:{name:"punctuation.brackets.round.rust"}},comment:"pub as a function",match:"\\b(pub)(\\()"},{begin:"\\b(fn)\\s+((?:r#(?!crate|[Ss]elf|super))?[A-Za-z0-9_]+)((\\()|(<))",beginCaptures:{1:{name:"keyword.other.fn.rust"},2:{name:"entity.name.function.rust"},4:{name:"punctuation.brackets.round.rust"},5:{name:"punctuation.brackets.angle.rust"}},comment:"function definition",end:"\\{|;",endCaptures:{0:{name:"punctuation.brackets.curly.rust"}},name:"meta.function.definition.rust",patterns:[{include:"#block-comments"},{include:"#comments"},{include:"#keywords"},{include:"#lvariables"},{include:"#constants"},{include:"#gtypes"},{include:"#functions"},{include:"#lifetimes"},{include:"#macros"},{include:"#namespaces"},{include:"#punctuation"},{include:"#strings"},{include:"#types"},{include:"#variables"}]},{begin:"((?:r#(?!crate|[Ss]elf|super))?[A-Za-z0-9_]+)(\\()",beginCaptures:{1:{name:"entity.name.function.rust"},2:{name:"punctuation.brackets.round.rust"}},comment:"function/method calls, chaining",end:"\\)",endCaptures:{0:{name:"punctuation.brackets.round.rust"}},name:"meta.function.call.rust",patterns:[{include:"#block-comments"},{include:"#comments"},{include:"#attributes"},{include:"#keywords"},{include:"#lvariables"},{include:"#constants"},{include:"#gtypes"},{include:"#functions"},{include:"#lifetimes"},{include:"#macros"},{include:"#namespaces"},{include:"#punctuation"},{include:"#strings"},{include:"#types"},{include:"#variables"}]},{begin:"((?:r#(?!crate|[Ss]elf|super))?[A-Za-z0-9_]+)(?=::<.*>\\()",beginCaptures:{1:{name:"entity.name.function.rust"}},comment:"function/method calls with turbofish",end:"\\)",endCaptures:{0:{name:"punctuation.brackets.round.rust"}},name:"meta.function.call.rust",patterns:[{include:"#block-comments"},{include:"#comments"},{include:"#attributes"},{include:"#keywords"},{include:"#lvariables"},{include:"#constants"},{include:"#gtypes"},{include:"#functions"},{include:"#lifetimes"},{include:"#macros"},{include:"#namespaces"},{include:"#punctuation"},{include:"#strings"},{include:"#types"},{include:"#variables"}]}]},gtypes:{patterns:[{comment:"option types",match:"\\b(Some|None)\\b",name:"entity.name.type.option.rust"},{comment:"result types",match:"\\b(Ok|Err)\\b",name:"entity.name.type.result.rust"}]},interpolations:{captures:{1:{name:"punctuation.definition.interpolation.rust"},2:{name:"punctuation.definition.interpolation.rust"}},comment:"curly brace interpolations",match:'({)[^"{}]*(})',name:"meta.interpolation.rust"},keywords:{patterns:[{comment:"control flow keywords",match:"\\b(await|break|continue|do|else|for|if|loop|match|return|try|while|yield)\\b",name:"keyword.control.rust"},{comment:"storage keywords",match:"\\b(extern|let|macro|mod)\\b",name:"keyword.other.rust storage.type.rust"},{comment:"const keyword",match:"\\b(const)\\b",name:"storage.modifier.rust"},{comment:"type keyword",match:"\\b(type)\\b",name:"keyword.declaration.type.rust storage.type.rust"},{comment:"enum keyword",match:"\\b(enum)\\b",name:"keyword.declaration.enum.rust storage.type.rust"},{comment:"trait keyword",match:"\\b(trait)\\b",name:"keyword.declaration.trait.rust storage.type.rust"},{comment:"struct keyword",match:"\\b(struct)\\b",name:"keyword.declaration.struct.rust storage.type.rust"},{comment:"storage modifiers",match:"\\b(abstract|static)\\b",name:"storage.modifier.rust"},{comment:"other keywords",match:"\\b(as|async|become|box|dyn|move|final|impl|in|override|priv|pub|ref|typeof|union|unsafe|unsized|use|virtual|where)\\b",name:"keyword.other.rust"},{comment:"fn",match:"\\bfn\\b",name:"keyword.other.fn.rust"},{comment:"crate",match:"\\bcrate\\b",name:"keyword.other.crate.rust"},{comment:"mut",match:"\\bmut\\b",name:"storage.modifier.mut.rust"},{comment:"logical operators",match:"(\\^|\\||\\|\\||&&|<<|>>|!)(?!=)",name:"keyword.operator.logical.rust"},{comment:"logical AND, borrow references",match:"&(?![&=])",name:"keyword.operator.borrow.and.rust"},{comment:"assignment operators",match:"(\\+=|-=|\\*=|/=|%=|\\^=|&=|\\|=|<<=|>>=)",name:"keyword.operator.assignment.rust"},{comment:"single equal",match:"(?<![<>])=(?!=|>)",name:"keyword.operator.assignment.equal.rust"},{comment:"comparison operators",match:"(=(=)?(?!>)|!=|<=|(?<!=)>=)",name:"keyword.operator.comparison.rust"},{comment:"math operators",match:"(([+%]|(\\*(?!\\w)))(?!=))|(-(?!>))|(/(?!/))",name:"keyword.operator.math.rust"},{captures:{1:{name:"punctuation.brackets.round.rust"},2:{name:"punctuation.brackets.square.rust"},3:{name:"punctuation.brackets.curly.rust"},4:{name:"keyword.operator.comparison.rust"},5:{name:"punctuation.brackets.round.rust"},6:{name:"punctuation.brackets.square.rust"},7:{name:"punctuation.brackets.curly.rust"}},comment:"less than, greater than (special case)",match:"(?:\\b|(?:(\\))|(\\])|(\\})))[ \\t]+([<>])[ \\t]+(?:\\b|(?:(\\()|(\\[)|(\\{)))"},{comment:"namespace operator",match:"::",name:"keyword.operator.namespace.rust"},{captures:{1:{name:"keyword.operator.dereference.rust"}},comment:"dereference asterisk",match:"(\\*)(?=\\w+)"},{comment:"subpattern binding",match:"@",name:"keyword.operator.subpattern.rust"},{comment:"dot access",match:"\\.(?!\\.)",name:"keyword.operator.access.dot.rust"},{comment:"ranges, range patterns",match:"\\.{2}(=|\\.)?",name:"keyword.operator.range.rust"},{comment:"colon",match:":(?!:)",name:"keyword.operator.key-value.rust"},{comment:"dashrocket, skinny arrow",match:"->",name:"keyword.operator.arrow.skinny.rust"},{comment:"hashrocket, fat arrow",match:"=>",name:"keyword.operator.arrow.fat.rust"},{comment:"dollar macros",match:"\\$",name:"keyword.operator.macro.dollar.rust"},{comment:"question mark operator, questionably sized, macro kleene matcher",match:"\\?",name:"keyword.operator.question.rust"}]},lifetimes:{patterns:[{captures:{1:{name:"punctuation.definition.lifetime.rust"},2:{name:"entity.name.type.lifetime.rust"}},comment:"named lifetime parameters",match:"(['])([a-zA-Z_][0-9a-zA-Z_]*)(?!['])\\b"},{captures:{1:{name:"keyword.operator.borrow.rust"},2:{name:"punctuation.definition.lifetime.rust"},3:{name:"entity.name.type.lifetime.rust"}},comment:"borrowing references to named lifetimes",match:"(\\&)(['])([a-zA-Z_][0-9a-zA-Z_]*)(?!['])\\b"}]},lvariables:{patterns:[{comment:"self",match:"\\b[Ss]elf\\b",name:"variable.language.self.rust"},{comment:"super",match:"\\bsuper\\b",name:"variable.language.super.rust"}]},macros:{patterns:[{captures:{2:{name:"entity.name.function.macro.rust"},3:{name:"entity.name.type.macro.rust"}},comment:"macros",match:"(([a-z_][A-Za-z0-9_]*!)|([A-Z_][A-Za-z0-9_]*!))",name:"meta.macro.rust"}]},namespaces:{patterns:[{captures:{1:{name:"entity.name.namespace.rust"},2:{name:"keyword.operator.namespace.rust"}},comment:"namespace (non-type, non-function path segment)",match:"(?<![A-Za-z0-9_])([A-Za-z0-9_]+)((?<!super|self)::)"}]},punctuation:{patterns:[{comment:"comma",match:",",name:"punctuation.comma.rust"},{comment:"curly braces",match:"[{}]",name:"punctuation.brackets.curly.rust"},{comment:"parentheses, round brackets",match:"[()]",name:"punctuation.brackets.round.rust"},{comment:"semicolon",match:";",name:"punctuation.semi.rust"},{comment:"square brackets",match:"[\\[\\]]",name:"punctuation.brackets.square.rust"},{comment:"angle brackets",match:"(?<!=)[<>]",name:"punctuation.brackets.angle.rust"}]},strings:{patterns:[{begin:'(b?)(")',beginCaptures:{1:{name:"string.quoted.byte.raw.rust"},2:{name:"punctuation.definition.string.rust"}},comment:"double-quoted strings and byte strings",end:'"',endCaptures:{0:{name:"punctuation.definition.string.rust"}},name:"string.quoted.double.rust",patterns:[{include:"#escapes"},{include:"#interpolations"}]},{begin:'(b?r)(#*)(")',beginCaptures:{1:{name:"string.quoted.byte.raw.rust"},2:{name:"punctuation.definition.string.raw.rust"},3:{name:"punctuation.definition.string.rust"}},comment:"double-quoted raw strings and raw byte strings",end:'(")(\\2)',endCaptures:{1:{name:"punctuation.definition.string.rust"},2:{name:"punctuation.definition.string.raw.rust"}},name:"string.quoted.double.rust"},{begin:"(b)?(')",beginCaptures:{1:{name:"string.quoted.byte.raw.rust"},2:{name:"punctuation.definition.char.rust"}},comment:"characters and bytes",end:"'",endCaptures:{0:{name:"punctuation.definition.char.rust"}},name:"string.quoted.single.char.rust",patterns:[{include:"#escapes"}]}]},types:{patterns:[{captures:{1:{name:"entity.name.type.numeric.rust"}},comment:"numeric types",match:"(?<![A-Za-z])(f32|f64|i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)\\b"},{begin:"\\b(_?[A-Z][A-Za-z0-9_]*)(<)",beginCaptures:{1:{name:"entity.name.type.rust"},2:{name:"punctuation.brackets.angle.rust"}},comment:"parameterized types",end:">",endCaptures:{0:{name:"punctuation.brackets.angle.rust"}},patterns:[{include:"#block-comments"},{include:"#comments"},{include:"#keywords"},{include:"#lvariables"},{include:"#lifetimes"},{include:"#punctuation"},{include:"#types"},{include:"#variables"}]},{comment:"primitive types",match:"\\b(bool|char|str)\\b",name:"entity.name.type.primitive.rust"},{captures:{1:{name:"keyword.declaration.trait.rust storage.type.rust"},2:{name:"entity.name.type.trait.rust"}},comment:"trait declarations",match:"\\b(trait)\\s+(_?[A-Z][A-Za-z0-9_]*)\\b"},{captures:{1:{name:"keyword.declaration.struct.rust storage.type.rust"},2:{name:"entity.name.type.struct.rust"}},comment:"struct declarations",match:"\\b(struct)\\s+(_?[A-Z][A-Za-z0-9_]*)\\b"},{captures:{1:{name:"keyword.declaration.enum.rust storage.type.rust"},2:{name:"entity.name.type.enum.rust"}},comment:"enum declarations",match:"\\b(enum)\\s+(_?[A-Z][A-Za-z0-9_]*)\\b"},{captures:{1:{name:"keyword.declaration.type.rust storage.type.rust"},2:{name:"entity.name.type.declaration.rust"}},comment:"type declarations",match:"\\b(type)\\s+(_?[A-Z][A-Za-z0-9_]*)\\b"},{comment:"types",match:"\\b_?[A-Z][A-Za-z0-9_]*\\b(?!!)",name:"entity.name.type.rust"}]},variables:{patterns:[{comment:"variables",match:"\\b(?<!(?<!\\.)\\.)(?:r#(?!(crate|[Ss]elf|super)))?[a-z0-9_]+\\b",name:"variable.other.rust"}]}},scopeName:"source.rust",aliases:["rs"]})]},13077:function(i,n,e){e.r(n),e.d(n,{default:function(){return o}});var a=e(25425);const t=Object.freeze({displayName:"TeX",name:"tex",patterns:[{captures:{1:{name:"punctuation.definition.keyword.tex"}},match:"(\\\\)(backmatter|csname|else|endcsname|fi|frontmatter|mainmatter|unless|if(case|cat|csname|defined|dim|eof|false|fontchar|hbox|hmode|inner|mmode|num|odd|true|vbox|vmode|void|x)?)(?![a-zA-Z@])",name:"keyword.control.tex"},{captures:{1:{name:"keyword.control.catcode.tex"},2:{name:"punctuation.definition.keyword.tex"},3:{name:"punctuation.separator.key-value.tex"},4:{name:"constant.numeric.category.tex"}},match:"((\\\\)catcode)`(?:\\\\)?.(=)(\\d+)",name:"meta.catcode.tex"},{begin:"(^[ \\t]+)?(?=%)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.tex"}},end:"(?!\\G)",patterns:[{begin:"%:?",beginCaptures:{0:{name:"punctuation.definition.comment.tex"}},end:"$\\n?",name:"comment.line.percentage.tex"},{begin:"^(%!TEX) (\\S*) =",beginCaptures:{1:{name:"punctuation.definition.comment.tex"}},end:"$\\n?",name:"comment.line.percentage.directive.tex"}]},{match:"[\\[\\]]",name:"punctuation.definition.brackets.tex"},{begin:"(\\$\\$|\\$)",beginCaptures:{1:{name:"punctuation.definition.string.begin.tex"}},end:"(\\1)",endCaptures:{1:{name:"punctuation.definition.string.end.tex"}},name:"meta.math.block.tex support.class.math.block.tex",patterns:[{match:"\\\\\\$",name:"constant.character.escape.tex"},{include:"#math"},{include:"$self"}]},{match:"\\\\\\\\",name:"keyword.control.newline.tex"},{captures:{1:{name:"punctuation.definition.function.tex"}},match:"(\\\\)(?:[\\p{Alphabetic}@]+|[,;])",name:"support.function.general.tex"},{captures:{1:{name:"punctuation.definition.keyword.tex"}},match:"(\\\\)[^a-zA-Z@]",name:"constant.character.escape.tex"}],repository:{braces:{begin:"(?<!\\\\)\\{",beginCaptures:{0:{name:"punctuation.group.begin.tex"}},end:"(?<!\\\\)\\}",endCaptures:{0:{name:"punctuation.group.end.tex"}},name:"meta.group.braces.tex",patterns:[{include:"#braces"}]},math:{patterns:[{begin:"((\\\\)(?:text|mbox))(\\{)",beginCaptures:{1:{name:"constant.other.math.tex"},2:{name:"punctuation.definition.function.tex"},3:{name:"punctuation.definition.arguments.begin.tex meta.text.normal.tex"}},contentName:"meta.text.normal.tex",end:"\\}",endCaptures:{0:{name:"punctuation.definition.arguments.end.tex meta.text.normal.tex"}},patterns:[{include:"#math"},{include:"$base"}]},{match:"\\\\{|\\\\}",name:"punctuation.math.bracket.pair.tex"},{match:"\\\\(left|right|((big|bigg|Big|Bigg)[lr]?))([\\(\\[\\<\\>\\]\\)\\.\\|]|\\\\[{}|]|\\\\[lr]?[Vv]ert|\\\\[lr]angle)",name:"punctuation.math.bracket.pair.big.tex"},{captures:{1:{name:"punctuation.definition.constant.math.tex"}},match:"(\\\\)(s(s(earrow|warrow|lash)|h(ort(downarrow|uparrow|parallel|leftarrow|rightarrow|mid)|arp)|tar|i(gma|m(eq)?)|u(cc(sim|n(sim|approx)|curlyeq|eq|approx)?|pset(neq(q)?|plus(eq)?|eq(q)?)?|rd|m|bset(neq(q)?|plus(eq)?|eq(q)?)?)|p(hericalangle|adesuit)|e(tminus|arrow)|q(su(pset(eq)?|bset(eq)?)|c(up|ap)|uare)|warrow|m(ile|all(s(etminus|mile)|frown)))|h(slash|ook(leftarrow|rightarrow)|eartsuit|bar)|R(sh|ightarrow|e|bag)|Gam(e|ma)|n(s(hort(parallel|mid)|im|u(cc(eq)?|pseteq(q)?|bseteq))|Rightarrow|n(earrow|warrow)|cong|triangle(left(eq(slant)?)?|right(eq(slant)?)?)|i(plus)?|u|p(lus|arallel|rec(eq)?)|e(q|arrow|g|xists)|v(dash|Dash)|warrow|le(ss|q(slant|q)?|ft(arrow|rightarrow))|a(tural|bla)|VDash|rightarrow|g(tr|eq(slant|q)?)|mid|Left(arrow|rightarrow))|c(hi|irc(eq|le(d(circ|S|dash|ast)|arrow(left|right)))?|o(ng|prod|lon|mplement)|dot(s|p)?|u(p|r(vearrow(left|right)|ly(eq(succ|prec)|vee(downarrow|uparrow)?|wedge(downarrow|uparrow)?)))|enterdot|lubsuit|ap)|Xi|Maps(to(char)?|from(char)?)|B(ox|umpeq|bbk)|t(h(ick(sim|approx)|e(ta|refore))|imes|op|wohead(leftarrow|rightarrow)|a(u|lloblong)|riangle(down|q|left(eq(slant)?)?|right(eq(slant)?)?)?)|i(n(t(er(cal|leave))?|plus|fty)?|ota|math)|S(igma|u(pset|bset))|zeta|o(slash|times|int|dot|plus|vee|wedge|lessthan|greaterthan|m(inus|ega)|b(slash|long|ar))|d(i(v(ideontimes)?|a(g(down|up)|mond(suit)?)|gamma)|o(t(plus|eq(dot)?)|ublebarwedge|wn(harpoon(left|right)|downarrows|arrow))|d(ots|agger)|elta|a(sh(v|leftarrow|rightarrow)|leth|gger))|Y(down|up|left|right)|C(up|ap)|u(n(lhd|rhd)|p(silon|harpoon(left|right)|downarrow|uparrows|lus|arrow)|lcorner|rcorner)|jmath|Theta|Im|p(si|hi|i(tchfork)?|erp|ar(tial|allel)|r(ime|o(d|pto)|ec(sim|n(sim|approx)|curlyeq|eq|approx)?)|m)|e(t(h|a)|psilon|q(slant(less|gtr)|circ|uiv)|ll|xists|mptyset)|Omega|D(iamond|ownarrow|elta)|v(d(ots|ash)|ee(bar)?|Dash|ar(s(igma|u(psetneq(q)?|bsetneq(q)?))|nothing|curly(vee|wedge)|t(heta|imes|riangle(left|right)?)|o(slash|circle|times|dot|plus|vee|wedge|lessthan|ast|greaterthan|minus|b(slash|ar))|p(hi|i|ropto)|epsilon|kappa|rho|bigcirc))|kappa|Up(silon|downarrow|arrow)|Join|f(orall|lat|a(t(s(emi|lash)|bslash)|llingdotseq)|rown)|P(si|hi|i)|w(p|edge|r)|l(hd|n(sim|eq(q)?|approx)|ceil|times|ightning|o(ng(left(arrow|rightarrow)|rightarrow|maps(to|from))|zenge|oparrow(left|right))|dot(s|p)|e(ss(sim|dot|eq(qgtr|gtr)|approx|gtr)|q(slant|q)?|ft(slice|harpoon(down|up)|threetimes|leftarrows|arrow(t(ail|riangle))?|right(squigarrow|harpoons|arrow(s|triangle|eq)?))|adsto)|vertneqq|floor|l(c(orner|eil)|floor|l|bracket)?|a(ngle|mbda)|rcorner|bag)|a(s(ymp|t)|ngle|pprox(eq)?|l(pha|eph)|rrownot|malg)|V(dash|vdash)|r(h(o|d)|ceil|times|i(singdotseq|ght(s(quigarrow|lice)|harpoon(down|up)|threetimes|left(harpoons|arrows)|arrow(t(ail|riangle))?|rightarrows))|floor|angle|r(ceil|parenthesis|floor|bracket)|bag)|g(n(sim|eq(q)?|approx)|tr(sim|dot|eq(qless|less)|less|approx)|imel|eq(slant|q)?|vertneqq|amma|g(g)?)|Finv|xi|m(ho|i(nuso|d)|o(o|dels)|u(ltimap)?|p|e(asuredangle|rge)|aps(to|from(char)?))|b(i(n(dnasrepma|ampersand)|g(s(tar|qc(up|ap))|nplus|c(irc|u(p|rly(vee|wedge))|ap)|triangle(down|up)|interleave|o(times|dot|plus)|uplus|parallel|vee|wedge|box))|o(t|wtie|x(slash|circle|times|dot|plus|empty|ast|minus|b(slash|ox|ar)))|u(llet|mpeq)|e(cause|t(h|ween|a))|lack(square|triangle(down|left|right)?|lozenge)|a(ck(s(im(eq)?|lash)|prime|epsilon)|r(o|wedge))|bslash)|L(sh|ong(left(arrow|rightarrow)|rightarrow|maps(to|from))|eft(arrow|rightarrow)|leftarrow|ambda|bag)|Arrownot)(?![a-zA-Z@])",name:"constant.character.math.tex"},{captures:{1:{name:"punctuation.definition.constant.math.tex"}},match:"(\\\\)(sum|prod|coprod|int|oint|bigcap|bigcup|bigsqcup|bigvee|bigwedge|bigodot|bigotimes|bogoplus|biguplus)\\b",name:"constant.character.math.tex"},{captures:{1:{name:"punctuation.definition.constant.math.tex"}},match:"(\\\\)(arccos|arcsin|arctan|arg|cos|cosh|cot|coth|csc|deg|det|dim|exp|gcd|hom|inf|ker|lg|lim|liminf|limsup|ln|log|max|min|pr|sec|sin|sinh|sup|tan|tanh)\\b",name:"constant.other.math.tex"},{begin:"((\\\\)Sexpr(\\{))",beginCaptures:{1:{name:"support.function.sexpr.math.tex"},2:{name:"punctuation.definition.function.math.tex"},3:{name:"punctuation.section.embedded.begin.math.tex"}},contentName:"support.function.sexpr.math.tex",end:"(((\\})))",endCaptures:{1:{name:"support.function.sexpr.math.tex"},2:{name:"punctuation.section.embedded.end.math.tex"},3:{name:"source.r"}},name:"meta.embedded.line.r",patterns:[{begin:"\\G(?!\\})",end:"(?=\\})",name:"source.r",patterns:[{include:"source.r"}]}]},{captures:{1:{name:"punctuation.definition.constant.math.tex"}},match:"(\\\\)(?!begin\\{|verb)([A-Za-z]+)",name:"constant.other.general.math.tex"},{match:"(?<!\\\\)\\{",name:"punctuation.math.begin.bracket.curly.tex"},{match:"(?<!\\\\)\\}",name:"punctuation.math.end.bracket.curly.tex"},{match:"(?<!\\\\)\\(",name:"punctuation.math.begin.bracket.round.tex"},{match:"(?<!\\\\)\\)",name:"punctuation.math.end.bracket.round.tex"},{match:"(([0-9]*[\\.][0-9]+)|[0-9]+)",name:"constant.numeric.math.tex"},{match:"[\\+\\*/_\\^-]",name:"punctuation.math.operator.tex"}]}},scopeName:"text.tex",embeddedLangs:["r"]});var o=[...a.default,t]},28647:function(i,n,e){e.r(n),e.d(n,{default:function(){return t}});var t=[Object.freeze({displayName:"YAML",name:"yaml",patterns:[{include:"#comment"},{include:"#property"},{include:"#directive"},{match:"^---",name:"entity.other.document.begin.yaml"},{match:"^\\.{3}",name:"entity.other.document.end.yaml"},{include:"#node"}],repository:{"block-collection":{patterns:[{include:"#block-sequence"},{include:"#block-mapping"}]},"block-mapping":{patterns:[{include:"#block-pair"}]},"block-node":{patterns:[{include:"#prototype"},{include:"#block-scalar"},{include:"#block-collection"},{include:"#flow-scalar-plain-out"},{include:"#flow-node"}]},"block-pair":{patterns:[{begin:"\\?",beginCaptures:{1:{name:"punctuation.definition.key-value.begin.yaml"}},end:"(?=\\?)|^ *(:)|(:)",endCaptures:{1:{name:"punctuation.separator.key-value.mapping.yaml"},2:{name:"invalid.illegal.expected-newline.yaml"}},name:"meta.block-mapping.yaml",patterns:[{include:"#block-node"}]},{begin:`(?x)
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
[-+]? 0b [0-1_]+
| [-+]? 0  [0-7_]+
| [-+]? (?: 0|[1-9][0-9_]*)
| [-+]? 0x [0-9a-fA-F_]+
| [-+]? [1-9] [0-9_]* (?: :[0-5]?[0-9])+
)
)
| (
(?x:
[-+]? (?: [0-9] [0-9_]*)? \\. [0-9.]* (?: [eE] [-+] [0-9]+)?
| [-+]? [0-9] [0-9_]* (?: :[0-5]?[0-9])+ \\. [0-9_]*
| [-+]? \\. (?: inf|Inf|INF)
|       \\. (?: nan|NaN|NAN)
)
)
| (
(?x:
\\d{4} - \\d{2} - \\d{2}
| \\d{4}
- \\d{1,2}
- \\d{1,2}
(?: [Tt] | [ \\t]+) \\d{1,2}
: \\d{2}
: \\d{2}
(?: \\.\\d*)?
(?:
(?:[ \\t]*) Z
| [-+] \\d{1,2} (?: :\\d{1,2})?
)?
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
[-+]? 0b [0-1_]+
| [-+]? 0  [0-7_]+
| [-+]? (?: 0|[1-9][0-9_]*)
| [-+]? 0x [0-9a-fA-F_]+
| [-+]? [1-9] [0-9_]* (?: :[0-5]?[0-9])+
)
)
| (
(?x:
[-+]? (?: [0-9] [0-9_]*)? \\. [0-9.]* (?: [eE] [-+] [0-9]+)?
| [-+]? [0-9] [0-9_]* (?: :[0-5]?[0-9])+ \\. [0-9_]*
| [-+]? \\. (?: inf|Inf|INF)
|       \\. (?: nan|NaN|NAN)
)
)
| (
(?x:
\\d{4} - \\d{2} - \\d{2}
| \\d{4}
- \\d{1,2}
- \\d{1,2}
(?: [Tt] | [ \\t]+) \\d{1,2}
: \\d{2}
: \\d{2}
(?: \\.\\d*)?
(?:
(?:[ \\t]*) Z
| [-+] \\d{1,2} (?: :\\d{1,2})?
)?
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
