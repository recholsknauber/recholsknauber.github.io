goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27002 = arguments.length;
var i__5770__auto___27003 = (0);
while(true){
if((i__5770__auto___27003 < len__5769__auto___27002)){
args__5775__auto__.push((arguments[i__5770__auto___27003]));

var G__27004 = (i__5770__auto___27003 + (1));
i__5770__auto___27003 = G__27004;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq26715){
var G__26716 = cljs.core.first(seq26715);
var seq26715__$1 = cljs.core.next(seq26715);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26716,seq26715__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__26720 = cljs.core.seq(sources);
var chunk__26721 = null;
var count__26722 = (0);
var i__26723 = (0);
while(true){
if((i__26723 < count__26722)){
var map__26730 = chunk__26721.cljs$core$IIndexed$_nth$arity$2(null,i__26723);
var map__26730__$1 = cljs.core.__destructure_map(map__26730);
var src = map__26730__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26730__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26730__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26730__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26730__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e26731){var e_27005 = e26731;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_27005);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_27005.message)].join('')));
}

var G__27006 = seq__26720;
var G__27007 = chunk__26721;
var G__27008 = count__26722;
var G__27009 = (i__26723 + (1));
seq__26720 = G__27006;
chunk__26721 = G__27007;
count__26722 = G__27008;
i__26723 = G__27009;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26720);
if(temp__5804__auto__){
var seq__26720__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26720__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26720__$1);
var G__27010 = cljs.core.chunk_rest(seq__26720__$1);
var G__27011 = c__5568__auto__;
var G__27012 = cljs.core.count(c__5568__auto__);
var G__27013 = (0);
seq__26720 = G__27010;
chunk__26721 = G__27011;
count__26722 = G__27012;
i__26723 = G__27013;
continue;
} else {
var map__26732 = cljs.core.first(seq__26720__$1);
var map__26732__$1 = cljs.core.__destructure_map(map__26732);
var src = map__26732__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26732__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26732__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26732__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26732__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e26733){var e_27014 = e26733;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_27014);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_27014.message)].join('')));
}

var G__27015 = cljs.core.next(seq__26720__$1);
var G__27016 = null;
var G__27017 = (0);
var G__27018 = (0);
seq__26720 = G__27015;
chunk__26721 = G__27016;
count__26722 = G__27017;
i__26723 = G__27018;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__26736 = cljs.core.seq(js_requires);
var chunk__26737 = null;
var count__26738 = (0);
var i__26739 = (0);
while(true){
if((i__26739 < count__26738)){
var js_ns = chunk__26737.cljs$core$IIndexed$_nth$arity$2(null,i__26739);
var require_str_27019 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_27019);


var G__27020 = seq__26736;
var G__27021 = chunk__26737;
var G__27022 = count__26738;
var G__27023 = (i__26739 + (1));
seq__26736 = G__27020;
chunk__26737 = G__27021;
count__26738 = G__27022;
i__26739 = G__27023;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26736);
if(temp__5804__auto__){
var seq__26736__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26736__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26736__$1);
var G__27024 = cljs.core.chunk_rest(seq__26736__$1);
var G__27025 = c__5568__auto__;
var G__27026 = cljs.core.count(c__5568__auto__);
var G__27027 = (0);
seq__26736 = G__27024;
chunk__26737 = G__27025;
count__26738 = G__27026;
i__26739 = G__27027;
continue;
} else {
var js_ns = cljs.core.first(seq__26736__$1);
var require_str_27028 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_27028);


var G__27029 = cljs.core.next(seq__26736__$1);
var G__27030 = null;
var G__27031 = (0);
var G__27032 = (0);
seq__26736 = G__27029;
chunk__26737 = G__27030;
count__26738 = G__27031;
i__26739 = G__27032;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__26741){
var map__26742 = p__26741;
var map__26742__$1 = cljs.core.__destructure_map(map__26742);
var msg = map__26742__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26742__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26742__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26743(s__26744){
return (new cljs.core.LazySeq(null,(function (){
var s__26744__$1 = s__26744;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__26744__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__26749 = cljs.core.first(xs__6360__auto__);
var map__26749__$1 = cljs.core.__destructure_map(map__26749);
var src = map__26749__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26749__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26749__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__26744__$1,map__26749,map__26749__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__26742,map__26742__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26743_$_iter__26745(s__26746){
return (new cljs.core.LazySeq(null,((function (s__26744__$1,map__26749,map__26749__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__26742,map__26742__$1,msg,info,reload_info){
return (function (){
var s__26746__$1 = s__26746;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__26746__$1);
if(temp__5804__auto____$1){
var s__26746__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__26746__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__26746__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__26748 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__26747 = (0);
while(true){
if((i__26747 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__26747);
cljs.core.chunk_append(b__26748,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__27033 = (i__26747 + (1));
i__26747 = G__27033;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26748),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26743_$_iter__26745(cljs.core.chunk_rest(s__26746__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26748),null);
}
} else {
var warning = cljs.core.first(s__26746__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26743_$_iter__26745(cljs.core.rest(s__26746__$2)));
}
} else {
return null;
}
break;
}
});})(s__26744__$1,map__26749,map__26749__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__26742,map__26742__$1,msg,info,reload_info))
,null,null));
});})(s__26744__$1,map__26749,map__26749__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__26742,map__26742__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__26743(cljs.core.rest(s__26744__$1)));
} else {
var G__27034 = cljs.core.rest(s__26744__$1);
s__26744__$1 = G__27034;
continue;
}
} else {
var G__27035 = cljs.core.rest(s__26744__$1);
s__26744__$1 = G__27035;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__26750_27036 = cljs.core.seq(warnings);
var chunk__26751_27037 = null;
var count__26752_27038 = (0);
var i__26753_27039 = (0);
while(true){
if((i__26753_27039 < count__26752_27038)){
var map__26756_27040 = chunk__26751_27037.cljs$core$IIndexed$_nth$arity$2(null,i__26753_27039);
var map__26756_27041__$1 = cljs.core.__destructure_map(map__26756_27040);
var w_27042 = map__26756_27041__$1;
var msg_27043__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26756_27041__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_27044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26756_27041__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_27045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26756_27041__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_27046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26756_27041__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_27046)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_27044),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_27045),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_27043__$1)].join(''));


var G__27047 = seq__26750_27036;
var G__27048 = chunk__26751_27037;
var G__27049 = count__26752_27038;
var G__27050 = (i__26753_27039 + (1));
seq__26750_27036 = G__27047;
chunk__26751_27037 = G__27048;
count__26752_27038 = G__27049;
i__26753_27039 = G__27050;
continue;
} else {
var temp__5804__auto___27051 = cljs.core.seq(seq__26750_27036);
if(temp__5804__auto___27051){
var seq__26750_27052__$1 = temp__5804__auto___27051;
if(cljs.core.chunked_seq_QMARK_(seq__26750_27052__$1)){
var c__5568__auto___27053 = cljs.core.chunk_first(seq__26750_27052__$1);
var G__27054 = cljs.core.chunk_rest(seq__26750_27052__$1);
var G__27055 = c__5568__auto___27053;
var G__27056 = cljs.core.count(c__5568__auto___27053);
var G__27057 = (0);
seq__26750_27036 = G__27054;
chunk__26751_27037 = G__27055;
count__26752_27038 = G__27056;
i__26753_27039 = G__27057;
continue;
} else {
var map__26757_27058 = cljs.core.first(seq__26750_27052__$1);
var map__26757_27059__$1 = cljs.core.__destructure_map(map__26757_27058);
var w_27060 = map__26757_27059__$1;
var msg_27061__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26757_27059__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_27062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26757_27059__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_27063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26757_27059__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_27064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26757_27059__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_27064)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_27062),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_27063),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_27061__$1)].join(''));


var G__27065 = cljs.core.next(seq__26750_27052__$1);
var G__27066 = null;
var G__27067 = (0);
var G__27068 = (0);
seq__26750_27036 = G__27065;
chunk__26751_27037 = G__27066;
count__26752_27038 = G__27067;
i__26753_27039 = G__27068;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__26740_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__26740_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__26758){
var map__26759 = p__26758;
var map__26759__$1 = cljs.core.__destructure_map(map__26759);
var msg = map__26759__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26759__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26759__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__26760 = cljs.core.seq(updates);
var chunk__26762 = null;
var count__26763 = (0);
var i__26764 = (0);
while(true){
if((i__26764 < count__26763)){
var path = chunk__26762.cljs$core$IIndexed$_nth$arity$2(null,i__26764);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__26874_27069 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__26878_27070 = null;
var count__26879_27071 = (0);
var i__26880_27072 = (0);
while(true){
if((i__26880_27072 < count__26879_27071)){
var node_27073 = chunk__26878_27070.cljs$core$IIndexed$_nth$arity$2(null,i__26880_27072);
if(cljs.core.not(node_27073.shadow$old)){
var path_match_27074 = shadow.cljs.devtools.client.browser.match_paths(node_27073.getAttribute("href"),path);
if(cljs.core.truth_(path_match_27074)){
var new_link_27075 = (function (){var G__26906 = node_27073.cloneNode(true);
G__26906.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_27074),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26906;
})();
(node_27073.shadow$old = true);

(new_link_27075.onload = ((function (seq__26874_27069,chunk__26878_27070,count__26879_27071,i__26880_27072,seq__26760,chunk__26762,count__26763,i__26764,new_link_27075,path_match_27074,node_27073,path,map__26759,map__26759__$1,msg,updates,reload_info){
return (function (e){
var seq__26907_27076 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26909_27077 = null;
var count__26910_27078 = (0);
var i__26911_27079 = (0);
while(true){
if((i__26911_27079 < count__26910_27078)){
var map__26915_27080 = chunk__26909_27077.cljs$core$IIndexed$_nth$arity$2(null,i__26911_27079);
var map__26915_27081__$1 = cljs.core.__destructure_map(map__26915_27080);
var task_27082 = map__26915_27081__$1;
var fn_str_27083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26915_27081__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26915_27081__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27085 = goog.getObjectByName(fn_str_27083,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27084)].join(''));

(fn_obj_27085.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27085.cljs$core$IFn$_invoke$arity$2(path,new_link_27075) : fn_obj_27085.call(null,path,new_link_27075));


var G__27086 = seq__26907_27076;
var G__27087 = chunk__26909_27077;
var G__27088 = count__26910_27078;
var G__27089 = (i__26911_27079 + (1));
seq__26907_27076 = G__27086;
chunk__26909_27077 = G__27087;
count__26910_27078 = G__27088;
i__26911_27079 = G__27089;
continue;
} else {
var temp__5804__auto___27090 = cljs.core.seq(seq__26907_27076);
if(temp__5804__auto___27090){
var seq__26907_27091__$1 = temp__5804__auto___27090;
if(cljs.core.chunked_seq_QMARK_(seq__26907_27091__$1)){
var c__5568__auto___27092 = cljs.core.chunk_first(seq__26907_27091__$1);
var G__27093 = cljs.core.chunk_rest(seq__26907_27091__$1);
var G__27094 = c__5568__auto___27092;
var G__27095 = cljs.core.count(c__5568__auto___27092);
var G__27096 = (0);
seq__26907_27076 = G__27093;
chunk__26909_27077 = G__27094;
count__26910_27078 = G__27095;
i__26911_27079 = G__27096;
continue;
} else {
var map__26916_27097 = cljs.core.first(seq__26907_27091__$1);
var map__26916_27098__$1 = cljs.core.__destructure_map(map__26916_27097);
var task_27099 = map__26916_27098__$1;
var fn_str_27100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26916_27098__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26916_27098__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27102 = goog.getObjectByName(fn_str_27100,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27101)].join(''));

(fn_obj_27102.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27102.cljs$core$IFn$_invoke$arity$2(path,new_link_27075) : fn_obj_27102.call(null,path,new_link_27075));


var G__27103 = cljs.core.next(seq__26907_27091__$1);
var G__27104 = null;
var G__27105 = (0);
var G__27106 = (0);
seq__26907_27076 = G__27103;
chunk__26909_27077 = G__27104;
count__26910_27078 = G__27105;
i__26911_27079 = G__27106;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_27073);
});})(seq__26874_27069,chunk__26878_27070,count__26879_27071,i__26880_27072,seq__26760,chunk__26762,count__26763,i__26764,new_link_27075,path_match_27074,node_27073,path,map__26759,map__26759__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_27074], 0));

goog.dom.insertSiblingAfter(new_link_27075,node_27073);


var G__27107 = seq__26874_27069;
var G__27108 = chunk__26878_27070;
var G__27109 = count__26879_27071;
var G__27110 = (i__26880_27072 + (1));
seq__26874_27069 = G__27107;
chunk__26878_27070 = G__27108;
count__26879_27071 = G__27109;
i__26880_27072 = G__27110;
continue;
} else {
var G__27111 = seq__26874_27069;
var G__27112 = chunk__26878_27070;
var G__27113 = count__26879_27071;
var G__27114 = (i__26880_27072 + (1));
seq__26874_27069 = G__27111;
chunk__26878_27070 = G__27112;
count__26879_27071 = G__27113;
i__26880_27072 = G__27114;
continue;
}
} else {
var G__27115 = seq__26874_27069;
var G__27116 = chunk__26878_27070;
var G__27117 = count__26879_27071;
var G__27118 = (i__26880_27072 + (1));
seq__26874_27069 = G__27115;
chunk__26878_27070 = G__27116;
count__26879_27071 = G__27117;
i__26880_27072 = G__27118;
continue;
}
} else {
var temp__5804__auto___27119 = cljs.core.seq(seq__26874_27069);
if(temp__5804__auto___27119){
var seq__26874_27120__$1 = temp__5804__auto___27119;
if(cljs.core.chunked_seq_QMARK_(seq__26874_27120__$1)){
var c__5568__auto___27121 = cljs.core.chunk_first(seq__26874_27120__$1);
var G__27122 = cljs.core.chunk_rest(seq__26874_27120__$1);
var G__27123 = c__5568__auto___27121;
var G__27124 = cljs.core.count(c__5568__auto___27121);
var G__27125 = (0);
seq__26874_27069 = G__27122;
chunk__26878_27070 = G__27123;
count__26879_27071 = G__27124;
i__26880_27072 = G__27125;
continue;
} else {
var node_27126 = cljs.core.first(seq__26874_27120__$1);
if(cljs.core.not(node_27126.shadow$old)){
var path_match_27127 = shadow.cljs.devtools.client.browser.match_paths(node_27126.getAttribute("href"),path);
if(cljs.core.truth_(path_match_27127)){
var new_link_27128 = (function (){var G__26917 = node_27126.cloneNode(true);
G__26917.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_27127),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26917;
})();
(node_27126.shadow$old = true);

(new_link_27128.onload = ((function (seq__26874_27069,chunk__26878_27070,count__26879_27071,i__26880_27072,seq__26760,chunk__26762,count__26763,i__26764,new_link_27128,path_match_27127,node_27126,seq__26874_27120__$1,temp__5804__auto___27119,path,map__26759,map__26759__$1,msg,updates,reload_info){
return (function (e){
var seq__26918_27129 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26920_27130 = null;
var count__26921_27131 = (0);
var i__26922_27132 = (0);
while(true){
if((i__26922_27132 < count__26921_27131)){
var map__26926_27133 = chunk__26920_27130.cljs$core$IIndexed$_nth$arity$2(null,i__26922_27132);
var map__26926_27134__$1 = cljs.core.__destructure_map(map__26926_27133);
var task_27135 = map__26926_27134__$1;
var fn_str_27136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26926_27134__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26926_27134__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27138 = goog.getObjectByName(fn_str_27136,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27137)].join(''));

(fn_obj_27138.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27138.cljs$core$IFn$_invoke$arity$2(path,new_link_27128) : fn_obj_27138.call(null,path,new_link_27128));


var G__27139 = seq__26918_27129;
var G__27140 = chunk__26920_27130;
var G__27141 = count__26921_27131;
var G__27142 = (i__26922_27132 + (1));
seq__26918_27129 = G__27139;
chunk__26920_27130 = G__27140;
count__26921_27131 = G__27141;
i__26922_27132 = G__27142;
continue;
} else {
var temp__5804__auto___27143__$1 = cljs.core.seq(seq__26918_27129);
if(temp__5804__auto___27143__$1){
var seq__26918_27144__$1 = temp__5804__auto___27143__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26918_27144__$1)){
var c__5568__auto___27145 = cljs.core.chunk_first(seq__26918_27144__$1);
var G__27146 = cljs.core.chunk_rest(seq__26918_27144__$1);
var G__27147 = c__5568__auto___27145;
var G__27148 = cljs.core.count(c__5568__auto___27145);
var G__27149 = (0);
seq__26918_27129 = G__27146;
chunk__26920_27130 = G__27147;
count__26921_27131 = G__27148;
i__26922_27132 = G__27149;
continue;
} else {
var map__26927_27150 = cljs.core.first(seq__26918_27144__$1);
var map__26927_27151__$1 = cljs.core.__destructure_map(map__26927_27150);
var task_27152 = map__26927_27151__$1;
var fn_str_27153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26927_27151__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26927_27151__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27155 = goog.getObjectByName(fn_str_27153,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27154)].join(''));

(fn_obj_27155.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27155.cljs$core$IFn$_invoke$arity$2(path,new_link_27128) : fn_obj_27155.call(null,path,new_link_27128));


var G__27156 = cljs.core.next(seq__26918_27144__$1);
var G__27157 = null;
var G__27158 = (0);
var G__27159 = (0);
seq__26918_27129 = G__27156;
chunk__26920_27130 = G__27157;
count__26921_27131 = G__27158;
i__26922_27132 = G__27159;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_27126);
});})(seq__26874_27069,chunk__26878_27070,count__26879_27071,i__26880_27072,seq__26760,chunk__26762,count__26763,i__26764,new_link_27128,path_match_27127,node_27126,seq__26874_27120__$1,temp__5804__auto___27119,path,map__26759,map__26759__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_27127], 0));

goog.dom.insertSiblingAfter(new_link_27128,node_27126);


var G__27160 = cljs.core.next(seq__26874_27120__$1);
var G__27161 = null;
var G__27162 = (0);
var G__27163 = (0);
seq__26874_27069 = G__27160;
chunk__26878_27070 = G__27161;
count__26879_27071 = G__27162;
i__26880_27072 = G__27163;
continue;
} else {
var G__27164 = cljs.core.next(seq__26874_27120__$1);
var G__27165 = null;
var G__27166 = (0);
var G__27167 = (0);
seq__26874_27069 = G__27164;
chunk__26878_27070 = G__27165;
count__26879_27071 = G__27166;
i__26880_27072 = G__27167;
continue;
}
} else {
var G__27168 = cljs.core.next(seq__26874_27120__$1);
var G__27169 = null;
var G__27170 = (0);
var G__27171 = (0);
seq__26874_27069 = G__27168;
chunk__26878_27070 = G__27169;
count__26879_27071 = G__27170;
i__26880_27072 = G__27171;
continue;
}
}
} else {
}
}
break;
}


var G__27172 = seq__26760;
var G__27173 = chunk__26762;
var G__27174 = count__26763;
var G__27175 = (i__26764 + (1));
seq__26760 = G__27172;
chunk__26762 = G__27173;
count__26763 = G__27174;
i__26764 = G__27175;
continue;
} else {
var G__27176 = seq__26760;
var G__27177 = chunk__26762;
var G__27178 = count__26763;
var G__27179 = (i__26764 + (1));
seq__26760 = G__27176;
chunk__26762 = G__27177;
count__26763 = G__27178;
i__26764 = G__27179;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26760);
if(temp__5804__auto__){
var seq__26760__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26760__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26760__$1);
var G__27180 = cljs.core.chunk_rest(seq__26760__$1);
var G__27181 = c__5568__auto__;
var G__27182 = cljs.core.count(c__5568__auto__);
var G__27183 = (0);
seq__26760 = G__27180;
chunk__26762 = G__27181;
count__26763 = G__27182;
i__26764 = G__27183;
continue;
} else {
var path = cljs.core.first(seq__26760__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__26928_27184 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__26932_27185 = null;
var count__26933_27186 = (0);
var i__26934_27187 = (0);
while(true){
if((i__26934_27187 < count__26933_27186)){
var node_27188 = chunk__26932_27185.cljs$core$IIndexed$_nth$arity$2(null,i__26934_27187);
if(cljs.core.not(node_27188.shadow$old)){
var path_match_27189 = shadow.cljs.devtools.client.browser.match_paths(node_27188.getAttribute("href"),path);
if(cljs.core.truth_(path_match_27189)){
var new_link_27190 = (function (){var G__26960 = node_27188.cloneNode(true);
G__26960.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_27189),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26960;
})();
(node_27188.shadow$old = true);

(new_link_27190.onload = ((function (seq__26928_27184,chunk__26932_27185,count__26933_27186,i__26934_27187,seq__26760,chunk__26762,count__26763,i__26764,new_link_27190,path_match_27189,node_27188,path,seq__26760__$1,temp__5804__auto__,map__26759,map__26759__$1,msg,updates,reload_info){
return (function (e){
var seq__26961_27191 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26963_27192 = null;
var count__26964_27193 = (0);
var i__26965_27194 = (0);
while(true){
if((i__26965_27194 < count__26964_27193)){
var map__26969_27195 = chunk__26963_27192.cljs$core$IIndexed$_nth$arity$2(null,i__26965_27194);
var map__26969_27196__$1 = cljs.core.__destructure_map(map__26969_27195);
var task_27197 = map__26969_27196__$1;
var fn_str_27198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26969_27196__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26969_27196__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27200 = goog.getObjectByName(fn_str_27198,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27199)].join(''));

(fn_obj_27200.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27200.cljs$core$IFn$_invoke$arity$2(path,new_link_27190) : fn_obj_27200.call(null,path,new_link_27190));


var G__27201 = seq__26961_27191;
var G__27202 = chunk__26963_27192;
var G__27203 = count__26964_27193;
var G__27204 = (i__26965_27194 + (1));
seq__26961_27191 = G__27201;
chunk__26963_27192 = G__27202;
count__26964_27193 = G__27203;
i__26965_27194 = G__27204;
continue;
} else {
var temp__5804__auto___27205__$1 = cljs.core.seq(seq__26961_27191);
if(temp__5804__auto___27205__$1){
var seq__26961_27206__$1 = temp__5804__auto___27205__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26961_27206__$1)){
var c__5568__auto___27207 = cljs.core.chunk_first(seq__26961_27206__$1);
var G__27208 = cljs.core.chunk_rest(seq__26961_27206__$1);
var G__27209 = c__5568__auto___27207;
var G__27210 = cljs.core.count(c__5568__auto___27207);
var G__27211 = (0);
seq__26961_27191 = G__27208;
chunk__26963_27192 = G__27209;
count__26964_27193 = G__27210;
i__26965_27194 = G__27211;
continue;
} else {
var map__26970_27212 = cljs.core.first(seq__26961_27206__$1);
var map__26970_27213__$1 = cljs.core.__destructure_map(map__26970_27212);
var task_27214 = map__26970_27213__$1;
var fn_str_27215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26970_27213__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26970_27213__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27217 = goog.getObjectByName(fn_str_27215,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27216)].join(''));

(fn_obj_27217.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27217.cljs$core$IFn$_invoke$arity$2(path,new_link_27190) : fn_obj_27217.call(null,path,new_link_27190));


var G__27218 = cljs.core.next(seq__26961_27206__$1);
var G__27219 = null;
var G__27220 = (0);
var G__27221 = (0);
seq__26961_27191 = G__27218;
chunk__26963_27192 = G__27219;
count__26964_27193 = G__27220;
i__26965_27194 = G__27221;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_27188);
});})(seq__26928_27184,chunk__26932_27185,count__26933_27186,i__26934_27187,seq__26760,chunk__26762,count__26763,i__26764,new_link_27190,path_match_27189,node_27188,path,seq__26760__$1,temp__5804__auto__,map__26759,map__26759__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_27189], 0));

goog.dom.insertSiblingAfter(new_link_27190,node_27188);


var G__27222 = seq__26928_27184;
var G__27223 = chunk__26932_27185;
var G__27224 = count__26933_27186;
var G__27225 = (i__26934_27187 + (1));
seq__26928_27184 = G__27222;
chunk__26932_27185 = G__27223;
count__26933_27186 = G__27224;
i__26934_27187 = G__27225;
continue;
} else {
var G__27226 = seq__26928_27184;
var G__27227 = chunk__26932_27185;
var G__27228 = count__26933_27186;
var G__27229 = (i__26934_27187 + (1));
seq__26928_27184 = G__27226;
chunk__26932_27185 = G__27227;
count__26933_27186 = G__27228;
i__26934_27187 = G__27229;
continue;
}
} else {
var G__27230 = seq__26928_27184;
var G__27231 = chunk__26932_27185;
var G__27232 = count__26933_27186;
var G__27233 = (i__26934_27187 + (1));
seq__26928_27184 = G__27230;
chunk__26932_27185 = G__27231;
count__26933_27186 = G__27232;
i__26934_27187 = G__27233;
continue;
}
} else {
var temp__5804__auto___27234__$1 = cljs.core.seq(seq__26928_27184);
if(temp__5804__auto___27234__$1){
var seq__26928_27235__$1 = temp__5804__auto___27234__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26928_27235__$1)){
var c__5568__auto___27236 = cljs.core.chunk_first(seq__26928_27235__$1);
var G__27237 = cljs.core.chunk_rest(seq__26928_27235__$1);
var G__27238 = c__5568__auto___27236;
var G__27239 = cljs.core.count(c__5568__auto___27236);
var G__27240 = (0);
seq__26928_27184 = G__27237;
chunk__26932_27185 = G__27238;
count__26933_27186 = G__27239;
i__26934_27187 = G__27240;
continue;
} else {
var node_27241 = cljs.core.first(seq__26928_27235__$1);
if(cljs.core.not(node_27241.shadow$old)){
var path_match_27242 = shadow.cljs.devtools.client.browser.match_paths(node_27241.getAttribute("href"),path);
if(cljs.core.truth_(path_match_27242)){
var new_link_27243 = (function (){var G__26971 = node_27241.cloneNode(true);
G__26971.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_27242),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__26971;
})();
(node_27241.shadow$old = true);

(new_link_27243.onload = ((function (seq__26928_27184,chunk__26932_27185,count__26933_27186,i__26934_27187,seq__26760,chunk__26762,count__26763,i__26764,new_link_27243,path_match_27242,node_27241,seq__26928_27235__$1,temp__5804__auto___27234__$1,path,seq__26760__$1,temp__5804__auto__,map__26759,map__26759__$1,msg,updates,reload_info){
return (function (e){
var seq__26972_27244 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__26974_27245 = null;
var count__26975_27246 = (0);
var i__26976_27247 = (0);
while(true){
if((i__26976_27247 < count__26975_27246)){
var map__26980_27248 = chunk__26974_27245.cljs$core$IIndexed$_nth$arity$2(null,i__26976_27247);
var map__26980_27249__$1 = cljs.core.__destructure_map(map__26980_27248);
var task_27250 = map__26980_27249__$1;
var fn_str_27251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26980_27249__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26980_27249__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27253 = goog.getObjectByName(fn_str_27251,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27252)].join(''));

(fn_obj_27253.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27253.cljs$core$IFn$_invoke$arity$2(path,new_link_27243) : fn_obj_27253.call(null,path,new_link_27243));


var G__27254 = seq__26972_27244;
var G__27255 = chunk__26974_27245;
var G__27256 = count__26975_27246;
var G__27257 = (i__26976_27247 + (1));
seq__26972_27244 = G__27254;
chunk__26974_27245 = G__27255;
count__26975_27246 = G__27256;
i__26976_27247 = G__27257;
continue;
} else {
var temp__5804__auto___27258__$2 = cljs.core.seq(seq__26972_27244);
if(temp__5804__auto___27258__$2){
var seq__26972_27259__$1 = temp__5804__auto___27258__$2;
if(cljs.core.chunked_seq_QMARK_(seq__26972_27259__$1)){
var c__5568__auto___27260 = cljs.core.chunk_first(seq__26972_27259__$1);
var G__27261 = cljs.core.chunk_rest(seq__26972_27259__$1);
var G__27262 = c__5568__auto___27260;
var G__27263 = cljs.core.count(c__5568__auto___27260);
var G__27264 = (0);
seq__26972_27244 = G__27261;
chunk__26974_27245 = G__27262;
count__26975_27246 = G__27263;
i__26976_27247 = G__27264;
continue;
} else {
var map__26981_27265 = cljs.core.first(seq__26972_27259__$1);
var map__26981_27266__$1 = cljs.core.__destructure_map(map__26981_27265);
var task_27267 = map__26981_27266__$1;
var fn_str_27268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26981_27266__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_27269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26981_27266__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_27270 = goog.getObjectByName(fn_str_27268,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_27269)].join(''));

(fn_obj_27270.cljs$core$IFn$_invoke$arity$2 ? fn_obj_27270.cljs$core$IFn$_invoke$arity$2(path,new_link_27243) : fn_obj_27270.call(null,path,new_link_27243));


var G__27271 = cljs.core.next(seq__26972_27259__$1);
var G__27272 = null;
var G__27273 = (0);
var G__27274 = (0);
seq__26972_27244 = G__27271;
chunk__26974_27245 = G__27272;
count__26975_27246 = G__27273;
i__26976_27247 = G__27274;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_27241);
});})(seq__26928_27184,chunk__26932_27185,count__26933_27186,i__26934_27187,seq__26760,chunk__26762,count__26763,i__26764,new_link_27243,path_match_27242,node_27241,seq__26928_27235__$1,temp__5804__auto___27234__$1,path,seq__26760__$1,temp__5804__auto__,map__26759,map__26759__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_27242], 0));

goog.dom.insertSiblingAfter(new_link_27243,node_27241);


var G__27275 = cljs.core.next(seq__26928_27235__$1);
var G__27276 = null;
var G__27277 = (0);
var G__27278 = (0);
seq__26928_27184 = G__27275;
chunk__26932_27185 = G__27276;
count__26933_27186 = G__27277;
i__26934_27187 = G__27278;
continue;
} else {
var G__27279 = cljs.core.next(seq__26928_27235__$1);
var G__27280 = null;
var G__27281 = (0);
var G__27282 = (0);
seq__26928_27184 = G__27279;
chunk__26932_27185 = G__27280;
count__26933_27186 = G__27281;
i__26934_27187 = G__27282;
continue;
}
} else {
var G__27283 = cljs.core.next(seq__26928_27235__$1);
var G__27284 = null;
var G__27285 = (0);
var G__27286 = (0);
seq__26928_27184 = G__27283;
chunk__26932_27185 = G__27284;
count__26933_27186 = G__27285;
i__26934_27187 = G__27286;
continue;
}
}
} else {
}
}
break;
}


var G__27287 = cljs.core.next(seq__26760__$1);
var G__27288 = null;
var G__27289 = (0);
var G__27290 = (0);
seq__26760 = G__27287;
chunk__26762 = G__27288;
count__26763 = G__27289;
i__26764 = G__27290;
continue;
} else {
var G__27291 = cljs.core.next(seq__26760__$1);
var G__27292 = null;
var G__27293 = (0);
var G__27294 = (0);
seq__26760 = G__27291;
chunk__26762 = G__27292;
count__26763 = G__27293;
i__26764 = G__27294;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__26982){
var map__26983 = p__26982;
var map__26983__$1 = cljs.core.__destructure_map(map__26983);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26983__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__26984){
var map__26985 = p__26984;
var map__26985__$1 = cljs.core.__destructure_map(map__26985);
var _ = map__26985__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26985__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__26986,done,error){
var map__26987 = p__26986;
var map__26987__$1 = cljs.core.__destructure_map(map__26987);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26987__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__26988,done,error){
var map__26989 = p__26988;
var map__26989__$1 = cljs.core.__destructure_map(map__26989);
var msg = map__26989__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26989__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26989__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26989__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__26990){
var map__26991 = p__26990;
var map__26991__$1 = cljs.core.__destructure_map(map__26991);
var src = map__26991__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26991__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__26992 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26992) : done.call(null,G__26992));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__26993){
var map__26994 = p__26993;
var map__26994__$1 = cljs.core.__destructure_map(map__26994);
var msg__$1 = map__26994__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26994__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e26995){var ex = e26995;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__26996){
var map__26997 = p__26996;
var map__26997__$1 = cljs.core.__destructure_map(map__26997);
var env = map__26997__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26997__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__26998){
var map__26999 = p__26998;
var map__26999__$1 = cljs.core.__destructure_map(map__26999);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26999__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26999__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__27000){
var map__27001 = p__27000;
var map__27001__$1 = cljs.core.__destructure_map(map__27001);
var svc = map__27001__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27001__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
