goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19141){
var map__19143 = p__19141;
var map__19143__$1 = cljs.core.__destructure_map(map__19143);
var m = map__19143__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19143__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19143__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__19153_19434 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19154_19435 = null;
var count__19155_19436 = (0);
var i__19156_19437 = (0);
while(true){
if((i__19156_19437 < count__19155_19436)){
var f_19438 = chunk__19154_19435.cljs$core$IIndexed$_nth$arity$2(null,i__19156_19437);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19438], 0));


var G__19439 = seq__19153_19434;
var G__19440 = chunk__19154_19435;
var G__19441 = count__19155_19436;
var G__19442 = (i__19156_19437 + (1));
seq__19153_19434 = G__19439;
chunk__19154_19435 = G__19440;
count__19155_19436 = G__19441;
i__19156_19437 = G__19442;
continue;
} else {
var temp__5804__auto___19443 = cljs.core.seq(seq__19153_19434);
if(temp__5804__auto___19443){
var seq__19153_19444__$1 = temp__5804__auto___19443;
if(cljs.core.chunked_seq_QMARK_(seq__19153_19444__$1)){
var c__5568__auto___19445 = cljs.core.chunk_first(seq__19153_19444__$1);
var G__19446 = cljs.core.chunk_rest(seq__19153_19444__$1);
var G__19447 = c__5568__auto___19445;
var G__19448 = cljs.core.count(c__5568__auto___19445);
var G__19449 = (0);
seq__19153_19434 = G__19446;
chunk__19154_19435 = G__19447;
count__19155_19436 = G__19448;
i__19156_19437 = G__19449;
continue;
} else {
var f_19450 = cljs.core.first(seq__19153_19444__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19450], 0));


var G__19451 = cljs.core.next(seq__19153_19444__$1);
var G__19452 = null;
var G__19453 = (0);
var G__19454 = (0);
seq__19153_19434 = G__19451;
chunk__19154_19435 = G__19452;
count__19155_19436 = G__19453;
i__19156_19437 = G__19454;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19455 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19455], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19455)))?cljs.core.second(arglists_19455):arglists_19455)], 0));
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
var seq__19172_19460 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19173_19461 = null;
var count__19174_19462 = (0);
var i__19175_19463 = (0);
while(true){
if((i__19175_19463 < count__19174_19462)){
var vec__19187_19464 = chunk__19173_19461.cljs$core$IIndexed$_nth$arity$2(null,i__19175_19463);
var name_19465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19187_19464,(0),null);
var map__19190_19466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19187_19464,(1),null);
var map__19190_19467__$1 = cljs.core.__destructure_map(map__19190_19466);
var doc_19468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19190_19467__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19190_19467__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19465], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19469], 0));

if(cljs.core.truth_(doc_19468)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19468], 0));
} else {
}


var G__19471 = seq__19172_19460;
var G__19472 = chunk__19173_19461;
var G__19473 = count__19174_19462;
var G__19474 = (i__19175_19463 + (1));
seq__19172_19460 = G__19471;
chunk__19173_19461 = G__19472;
count__19174_19462 = G__19473;
i__19175_19463 = G__19474;
continue;
} else {
var temp__5804__auto___19475 = cljs.core.seq(seq__19172_19460);
if(temp__5804__auto___19475){
var seq__19172_19476__$1 = temp__5804__auto___19475;
if(cljs.core.chunked_seq_QMARK_(seq__19172_19476__$1)){
var c__5568__auto___19477 = cljs.core.chunk_first(seq__19172_19476__$1);
var G__19478 = cljs.core.chunk_rest(seq__19172_19476__$1);
var G__19479 = c__5568__auto___19477;
var G__19480 = cljs.core.count(c__5568__auto___19477);
var G__19481 = (0);
seq__19172_19460 = G__19478;
chunk__19173_19461 = G__19479;
count__19174_19462 = G__19480;
i__19175_19463 = G__19481;
continue;
} else {
var vec__19197_19482 = cljs.core.first(seq__19172_19476__$1);
var name_19483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19197_19482,(0),null);
var map__19200_19484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19197_19482,(1),null);
var map__19200_19485__$1 = cljs.core.__destructure_map(map__19200_19484);
var doc_19486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19200_19485__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19200_19485__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19483], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19487], 0));

if(cljs.core.truth_(doc_19486)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19486], 0));
} else {
}


var G__19488 = cljs.core.next(seq__19172_19476__$1);
var G__19489 = null;
var G__19490 = (0);
var G__19491 = (0);
seq__19172_19460 = G__19488;
chunk__19173_19461 = G__19489;
count__19174_19462 = G__19490;
i__19175_19463 = G__19491;
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

var seq__19205 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19206 = null;
var count__19207 = (0);
var i__19208 = (0);
while(true){
if((i__19208 < count__19207)){
var role = chunk__19206.cljs$core$IIndexed$_nth$arity$2(null,i__19208);
var temp__5804__auto___19494__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19494__$1)){
var spec_19495 = temp__5804__auto___19494__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19495)], 0));
} else {
}


var G__19496 = seq__19205;
var G__19497 = chunk__19206;
var G__19498 = count__19207;
var G__19499 = (i__19208 + (1));
seq__19205 = G__19496;
chunk__19206 = G__19497;
count__19207 = G__19498;
i__19208 = G__19499;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19205);
if(temp__5804__auto____$1){
var seq__19205__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19205__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19205__$1);
var G__19500 = cljs.core.chunk_rest(seq__19205__$1);
var G__19501 = c__5568__auto__;
var G__19502 = cljs.core.count(c__5568__auto__);
var G__19503 = (0);
seq__19205 = G__19500;
chunk__19206 = G__19501;
count__19207 = G__19502;
i__19208 = G__19503;
continue;
} else {
var role = cljs.core.first(seq__19205__$1);
var temp__5804__auto___19504__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19504__$2)){
var spec_19505 = temp__5804__auto___19504__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19505)], 0));
} else {
}


var G__19512 = cljs.core.next(seq__19205__$1);
var G__19513 = null;
var G__19514 = (0);
var G__19515 = (0);
seq__19205 = G__19512;
chunk__19206 = G__19513;
count__19207 = G__19514;
i__19208 = G__19515;
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
var G__19520 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__19521 = cljs.core.ex_cause(t);
via = G__19520;
t = G__19521;
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
var map__19235 = datafied_throwable;
var map__19235__$1 = cljs.core.__destructure_map(map__19235);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19235__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19235__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19235__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19236 = cljs.core.last(via);
var map__19236__$1 = cljs.core.__destructure_map(map__19236);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19236__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19236__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19236__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19237 = data;
var map__19237__$1 = cljs.core.__destructure_map(map__19237);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19237__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19237__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19237__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19238 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19238__$1 = cljs.core.__destructure_map(map__19238);
var top_data = map__19238__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19238__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19246 = phase;
var G__19246__$1 = (((G__19246 instanceof cljs.core.Keyword))?G__19246.fqn:null);
switch (G__19246__$1) {
case "read-source":
var map__19253 = data;
var map__19253__$1 = cljs.core.__destructure_map(map__19253);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19253__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19253__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19262 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19262__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19262,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19262);
var G__19262__$2 = (cljs.core.truth_((function (){var fexpr__19263 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19263.cljs$core$IFn$_invoke$arity$1 ? fexpr__19263.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19263.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19262__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19262__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19262__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19262__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19273 = top_data;
var G__19273__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19273,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19273);
var G__19273__$2 = (cljs.core.truth_((function (){var fexpr__19289 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19289.cljs$core$IFn$_invoke$arity$1 ? fexpr__19289.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19289.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19273__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19273__$1);
var G__19273__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19273__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19273__$2);
var G__19273__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19273__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19273__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19273__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19273__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19296 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19296,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19296,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19296,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19296,(3),null);
var G__19307 = top_data;
var G__19307__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19307,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19307);
var G__19307__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19307__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19307__$1);
var G__19307__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19307__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19307__$2);
var G__19307__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19307__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19307__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19307__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19307__$4;
}

break;
case "execution":
var vec__19328 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19328,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19328,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19328,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19328,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19225_SHARP_){
var or__5045__auto__ = (p1__19225_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__19343 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19343.cljs$core$IFn$_invoke$arity$1 ? fexpr__19343.cljs$core$IFn$_invoke$arity$1(p1__19225_SHARP_) : fexpr__19343.call(null,p1__19225_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__19348 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19348__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19348,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19348);
var G__19348__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19348__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19348__$1);
var G__19348__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19348__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19348__$2);
var G__19348__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19348__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19348__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19348__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19348__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19246__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19357){
var map__19358 = p__19357;
var map__19358__$1 = cljs.core.__destructure_map(map__19358);
var triage_data = map__19358__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19358__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19358__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19358__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19358__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19358__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19358__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19358__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19358__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__19376 = phase;
var G__19376__$1 = (((G__19376 instanceof cljs.core.Keyword))?G__19376.fqn:null);
switch (G__19376__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19377 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19378 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19379 = loc;
var G__19380 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19381_19532 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19382_19533 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19383_19534 = true;
var _STAR_print_fn_STAR__temp_val__19384_19535 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19383_19534);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19384_19535);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19354_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19354_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19382_19533);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19381_19532);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19377,G__19378,G__19379,G__19380) : format.call(null,G__19377,G__19378,G__19379,G__19380));

break;
case "macroexpansion":
var G__19386 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19387 = cause_type;
var G__19388 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19389 = loc;
var G__19390 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19386,G__19387,G__19388,G__19389,G__19390) : format.call(null,G__19386,G__19387,G__19388,G__19389,G__19390));

break;
case "compile-syntax-check":
var G__19391 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19392 = cause_type;
var G__19393 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19394 = loc;
var G__19395 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19391,G__19392,G__19393,G__19394,G__19395) : format.call(null,G__19391,G__19392,G__19393,G__19394,G__19395));

break;
case "compilation":
var G__19396 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19397 = cause_type;
var G__19398 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19399 = loc;
var G__19400 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19396,G__19397,G__19398,G__19399,G__19400) : format.call(null,G__19396,G__19397,G__19398,G__19399,G__19400));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19401 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19402 = symbol;
var G__19403 = loc;
var G__19404 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19405_19543 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19406_19544 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19407_19545 = true;
var _STAR_print_fn_STAR__temp_val__19408_19546 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19407_19545);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19408_19546);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19356_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19356_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19406_19544);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19405_19543);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19401,G__19402,G__19403,G__19404) : format.call(null,G__19401,G__19402,G__19403,G__19404));
} else {
var G__19417 = "Execution error%s at %s(%s).\n%s\n";
var G__19418 = cause_type;
var G__19419 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19420 = loc;
var G__19421 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19417,G__19418,G__19419,G__19420,G__19421) : format.call(null,G__19417,G__19418,G__19419,G__19420,G__19421));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19376__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
