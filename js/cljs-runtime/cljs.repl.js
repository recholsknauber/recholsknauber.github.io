goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26025){
var map__26026 = p__26025;
var map__26026__$1 = cljs.core.__destructure_map(map__26026);
var m = map__26026__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26026__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26026__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26031_26251 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26032_26252 = null;
var count__26033_26253 = (0);
var i__26034_26254 = (0);
while(true){
if((i__26034_26254 < count__26033_26253)){
var f_26255 = chunk__26032_26252.cljs$core$IIndexed$_nth$arity$2(null,i__26034_26254);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_26255], 0));


var G__26256 = seq__26031_26251;
var G__26257 = chunk__26032_26252;
var G__26258 = count__26033_26253;
var G__26259 = (i__26034_26254 + (1));
seq__26031_26251 = G__26256;
chunk__26032_26252 = G__26257;
count__26033_26253 = G__26258;
i__26034_26254 = G__26259;
continue;
} else {
var temp__5804__auto___26260 = cljs.core.seq(seq__26031_26251);
if(temp__5804__auto___26260){
var seq__26031_26261__$1 = temp__5804__auto___26260;
if(cljs.core.chunked_seq_QMARK_(seq__26031_26261__$1)){
var c__5568__auto___26262 = cljs.core.chunk_first(seq__26031_26261__$1);
var G__26263 = cljs.core.chunk_rest(seq__26031_26261__$1);
var G__26264 = c__5568__auto___26262;
var G__26265 = cljs.core.count(c__5568__auto___26262);
var G__26266 = (0);
seq__26031_26251 = G__26263;
chunk__26032_26252 = G__26264;
count__26033_26253 = G__26265;
i__26034_26254 = G__26266;
continue;
} else {
var f_26267 = cljs.core.first(seq__26031_26261__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_26267], 0));


var G__26268 = cljs.core.next(seq__26031_26261__$1);
var G__26269 = null;
var G__26270 = (0);
var G__26271 = (0);
seq__26031_26251 = G__26268;
chunk__26032_26252 = G__26269;
count__26033_26253 = G__26270;
i__26034_26254 = G__26271;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26272 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_26272], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_26272)))?cljs.core.second(arglists_26272):arglists_26272)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26050_26273 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26051_26274 = null;
var count__26052_26275 = (0);
var i__26053_26276 = (0);
while(true){
if((i__26053_26276 < count__26052_26275)){
var vec__26066_26277 = chunk__26051_26274.cljs$core$IIndexed$_nth$arity$2(null,i__26053_26276);
var name_26278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26066_26277,(0),null);
var map__26069_26279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26066_26277,(1),null);
var map__26069_26280__$1 = cljs.core.__destructure_map(map__26069_26279);
var doc_26281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26069_26280__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26069_26280__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_26278], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_26282], 0));

if(cljs.core.truth_(doc_26281)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_26281], 0));
} else {
}


var G__26284 = seq__26050_26273;
var G__26285 = chunk__26051_26274;
var G__26286 = count__26052_26275;
var G__26287 = (i__26053_26276 + (1));
seq__26050_26273 = G__26284;
chunk__26051_26274 = G__26285;
count__26052_26275 = G__26286;
i__26053_26276 = G__26287;
continue;
} else {
var temp__5804__auto___26288 = cljs.core.seq(seq__26050_26273);
if(temp__5804__auto___26288){
var seq__26050_26289__$1 = temp__5804__auto___26288;
if(cljs.core.chunked_seq_QMARK_(seq__26050_26289__$1)){
var c__5568__auto___26290 = cljs.core.chunk_first(seq__26050_26289__$1);
var G__26291 = cljs.core.chunk_rest(seq__26050_26289__$1);
var G__26292 = c__5568__auto___26290;
var G__26293 = cljs.core.count(c__5568__auto___26290);
var G__26294 = (0);
seq__26050_26273 = G__26291;
chunk__26051_26274 = G__26292;
count__26052_26275 = G__26293;
i__26053_26276 = G__26294;
continue;
} else {
var vec__26072_26295 = cljs.core.first(seq__26050_26289__$1);
var name_26296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26072_26295,(0),null);
var map__26075_26297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26072_26295,(1),null);
var map__26075_26298__$1 = cljs.core.__destructure_map(map__26075_26297);
var doc_26299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26075_26298__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26075_26298__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_26296], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_26300], 0));

if(cljs.core.truth_(doc_26299)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_26299], 0));
} else {
}


var G__26301 = cljs.core.next(seq__26050_26289__$1);
var G__26302 = null;
var G__26303 = (0);
var G__26304 = (0);
seq__26050_26273 = G__26301;
chunk__26051_26274 = G__26302;
count__26052_26275 = G__26303;
i__26053_26276 = G__26304;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__26076 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26077 = null;
var count__26078 = (0);
var i__26079 = (0);
while(true){
if((i__26079 < count__26078)){
var role = chunk__26077.cljs$core$IIndexed$_nth$arity$2(null,i__26079);
var temp__5804__auto___26305__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___26305__$1)){
var spec_26306 = temp__5804__auto___26305__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_26306)], 0));
} else {
}


var G__26307 = seq__26076;
var G__26308 = chunk__26077;
var G__26309 = count__26078;
var G__26310 = (i__26079 + (1));
seq__26076 = G__26307;
chunk__26077 = G__26308;
count__26078 = G__26309;
i__26079 = G__26310;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__26076);
if(temp__5804__auto____$1){
var seq__26076__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__26076__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26076__$1);
var G__26311 = cljs.core.chunk_rest(seq__26076__$1);
var G__26312 = c__5568__auto__;
var G__26313 = cljs.core.count(c__5568__auto__);
var G__26314 = (0);
seq__26076 = G__26311;
chunk__26077 = G__26312;
count__26078 = G__26313;
i__26079 = G__26314;
continue;
} else {
var role = cljs.core.first(seq__26076__$1);
var temp__5804__auto___26315__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___26315__$2)){
var spec_26316 = temp__5804__auto___26315__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_26316)], 0));
} else {
}


var G__26317 = cljs.core.next(seq__26076__$1);
var G__26318 = null;
var G__26319 = (0);
var G__26320 = (0);
seq__26076 = G__26317;
chunk__26077 = G__26318;
count__26078 = G__26319;
i__26079 = G__26320;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__26321 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__26322 = cljs.core.ex_cause(t);
via = G__26321;
t = G__26322;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__26165 = datafied_throwable;
var map__26165__$1 = cljs.core.__destructure_map(map__26165);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26165__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26165__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26165__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__26166 = cljs.core.last(via);
var map__26166__$1 = cljs.core.__destructure_map(map__26166);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26166__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26166__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26166__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__26167 = data;
var map__26167__$1 = cljs.core.__destructure_map(map__26167);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26167__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26167__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26167__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__26168 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__26168__$1 = cljs.core.__destructure_map(map__26168);
var top_data = map__26168__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26168__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__26177 = phase;
var G__26177__$1 = (((G__26177 instanceof cljs.core.Keyword))?G__26177.fqn:null);
switch (G__26177__$1) {
case "read-source":
var map__26182 = data;
var map__26182__$1 = cljs.core.__destructure_map(map__26182);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26182__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26182__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__26183 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__26183__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26183,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26183);
var G__26183__$2 = (cljs.core.truth_((function (){var fexpr__26184 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26184.cljs$core$IFn$_invoke$arity$1 ? fexpr__26184.cljs$core$IFn$_invoke$arity$1(source) : fexpr__26184.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26183__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26183__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26183__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26183__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__26185 = top_data;
var G__26185__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26185,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26185);
var G__26185__$2 = (cljs.core.truth_((function (){var fexpr__26187 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26187.cljs$core$IFn$_invoke$arity$1 ? fexpr__26187.cljs$core$IFn$_invoke$arity$1(source) : fexpr__26187.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26185__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26185__$1);
var G__26185__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26185__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26185__$2);
var G__26185__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26185__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26185__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26185__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26185__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__26188 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26188,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26188,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26188,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26188,(3),null);
var G__26192 = top_data;
var G__26192__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26192,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__26192);
var G__26192__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26192__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__26192__$1);
var G__26192__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26192__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__26192__$2);
var G__26192__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26192__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26192__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26192__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26192__$4;
}

break;
case "execution":
var vec__26193 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26193,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26193,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26193,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26193,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__26150_SHARP_){
var or__5045__auto__ = (p1__26150_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__26196 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26196.cljs$core$IFn$_invoke$arity$1 ? fexpr__26196.cljs$core$IFn$_invoke$arity$1(p1__26150_SHARP_) : fexpr__26196.call(null,p1__26150_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__26198 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__26198__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26198,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__26198);
var G__26198__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26198__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26198__$1);
var G__26198__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26198__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__26198__$2);
var G__26198__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26198__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__26198__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26198__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26198__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26177__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__26203){
var map__26204 = p__26203;
var map__26204__$1 = cljs.core.__destructure_map(map__26204);
var triage_data = map__26204__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26204__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26204__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26204__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26204__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26204__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26204__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26204__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26204__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__26206 = phase;
var G__26206__$1 = (((G__26206 instanceof cljs.core.Keyword))?G__26206.fqn:null);
switch (G__26206__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__26207 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__26208 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26209 = loc;
var G__26210 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26211_26339 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26212_26340 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26213_26341 = true;
var _STAR_print_fn_STAR__temp_val__26214_26342 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26213_26341);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26214_26342);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26201_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26201_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26212_26340);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26211_26339);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__26207,G__26208,G__26209,G__26210) : format.call(null,G__26207,G__26208,G__26209,G__26210));

break;
case "macroexpansion":
var G__26215 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__26216 = cause_type;
var G__26217 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26218 = loc;
var G__26219 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26215,G__26216,G__26217,G__26218,G__26219) : format.call(null,G__26215,G__26216,G__26217,G__26218,G__26219));

break;
case "compile-syntax-check":
var G__26220 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__26221 = cause_type;
var G__26222 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26223 = loc;
var G__26224 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26220,G__26221,G__26222,G__26223,G__26224) : format.call(null,G__26220,G__26221,G__26222,G__26223,G__26224));

break;
case "compilation":
var G__26229 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__26230 = cause_type;
var G__26231 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26232 = loc;
var G__26233 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26229,G__26230,G__26231,G__26232,G__26233) : format.call(null,G__26229,G__26230,G__26231,G__26232,G__26233));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__26234 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__26235 = symbol;
var G__26236 = loc;
var G__26237 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26240_26345 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26241_26346 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26242_26347 = true;
var _STAR_print_fn_STAR__temp_val__26243_26348 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26242_26347);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26243_26348);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26202_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26202_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26241_26346);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26240_26345);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__26234,G__26235,G__26236,G__26237) : format.call(null,G__26234,G__26235,G__26236,G__26237));
} else {
var G__26246 = "Execution error%s at %s(%s).\n%s\n";
var G__26247 = cause_type;
var G__26248 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__26249 = loc;
var G__26250 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__26246,G__26247,G__26248,G__26249,G__26250) : format.call(null,G__26246,G__26247,G__26248,G__26249,G__26250));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26206__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
