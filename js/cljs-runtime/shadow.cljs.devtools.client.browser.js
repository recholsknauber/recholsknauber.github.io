goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21122 = arguments.length;
var i__5770__auto___21123 = (0);
while(true){
if((i__5770__auto___21123 < len__5769__auto___21122)){
args__5775__auto__.push((arguments[i__5770__auto___21123]));

var G__21124 = (i__5770__auto___21123 + (1));
i__5770__auto___21123 = G__21124;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20835){
var G__20836 = cljs.core.first(seq20835);
var seq20835__$1 = cljs.core.next(seq20835);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20836,seq20835__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20840 = cljs.core.seq(sources);
var chunk__20841 = null;
var count__20842 = (0);
var i__20843 = (0);
while(true){
if((i__20843 < count__20842)){
var map__20850 = chunk__20841.cljs$core$IIndexed$_nth$arity$2(null,i__20843);
var map__20850__$1 = cljs.core.__destructure_map(map__20850);
var src = map__20850__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20850__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20850__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20850__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20850__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20851){var e_21125 = e20851;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21125);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21125.message)].join('')));
}

var G__21126 = seq__20840;
var G__21127 = chunk__20841;
var G__21128 = count__20842;
var G__21129 = (i__20843 + (1));
seq__20840 = G__21126;
chunk__20841 = G__21127;
count__20842 = G__21128;
i__20843 = G__21129;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20840);
if(temp__5804__auto__){
var seq__20840__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20840__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20840__$1);
var G__21130 = cljs.core.chunk_rest(seq__20840__$1);
var G__21131 = c__5568__auto__;
var G__21132 = cljs.core.count(c__5568__auto__);
var G__21133 = (0);
seq__20840 = G__21130;
chunk__20841 = G__21131;
count__20842 = G__21132;
i__20843 = G__21133;
continue;
} else {
var map__20852 = cljs.core.first(seq__20840__$1);
var map__20852__$1 = cljs.core.__destructure_map(map__20852);
var src = map__20852__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20852__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20852__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20852__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20852__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20853){var e_21134 = e20853;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21134);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21134.message)].join('')));
}

var G__21135 = cljs.core.next(seq__20840__$1);
var G__21136 = null;
var G__21137 = (0);
var G__21138 = (0);
seq__20840 = G__21135;
chunk__20841 = G__21136;
count__20842 = G__21137;
i__20843 = G__21138;
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
var seq__20856 = cljs.core.seq(js_requires);
var chunk__20857 = null;
var count__20858 = (0);
var i__20859 = (0);
while(true){
if((i__20859 < count__20858)){
var js_ns = chunk__20857.cljs$core$IIndexed$_nth$arity$2(null,i__20859);
var require_str_21139 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21139);


var G__21140 = seq__20856;
var G__21141 = chunk__20857;
var G__21142 = count__20858;
var G__21143 = (i__20859 + (1));
seq__20856 = G__21140;
chunk__20857 = G__21141;
count__20858 = G__21142;
i__20859 = G__21143;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20856);
if(temp__5804__auto__){
var seq__20856__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20856__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20856__$1);
var G__21144 = cljs.core.chunk_rest(seq__20856__$1);
var G__21145 = c__5568__auto__;
var G__21146 = cljs.core.count(c__5568__auto__);
var G__21147 = (0);
seq__20856 = G__21144;
chunk__20857 = G__21145;
count__20858 = G__21146;
i__20859 = G__21147;
continue;
} else {
var js_ns = cljs.core.first(seq__20856__$1);
var require_str_21148 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21148);


var G__21149 = cljs.core.next(seq__20856__$1);
var G__21150 = null;
var G__21151 = (0);
var G__21152 = (0);
seq__20856 = G__21149;
chunk__20857 = G__21150;
count__20858 = G__21151;
i__20859 = G__21152;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20861){
var map__20862 = p__20861;
var map__20862__$1 = cljs.core.__destructure_map(map__20862);
var msg = map__20862__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20862__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20862__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20863(s__20864){
return (new cljs.core.LazySeq(null,(function (){
var s__20864__$1 = s__20864;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20864__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20869 = cljs.core.first(xs__6360__auto__);
var map__20869__$1 = cljs.core.__destructure_map(map__20869);
var src = map__20869__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20869__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20869__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20864__$1,map__20869,map__20869__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20862,map__20862__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20863_$_iter__20865(s__20866){
return (new cljs.core.LazySeq(null,((function (s__20864__$1,map__20869,map__20869__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20862,map__20862__$1,msg,info,reload_info){
return (function (){
var s__20866__$1 = s__20866;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20866__$1);
if(temp__5804__auto____$1){
var s__20866__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20866__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20866__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20868 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20867 = (0);
while(true){
if((i__20867 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20867);
cljs.core.chunk_append(b__20868,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21153 = (i__20867 + (1));
i__20867 = G__21153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20868),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20863_$_iter__20865(cljs.core.chunk_rest(s__20866__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20868),null);
}
} else {
var warning = cljs.core.first(s__20866__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20863_$_iter__20865(cljs.core.rest(s__20866__$2)));
}
} else {
return null;
}
break;
}
});})(s__20864__$1,map__20869,map__20869__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20862,map__20862__$1,msg,info,reload_info))
,null,null));
});})(s__20864__$1,map__20869,map__20869__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20862,map__20862__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20863(cljs.core.rest(s__20864__$1)));
} else {
var G__21154 = cljs.core.rest(s__20864__$1);
s__20864__$1 = G__21154;
continue;
}
} else {
var G__21155 = cljs.core.rest(s__20864__$1);
s__20864__$1 = G__21155;
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
var seq__20870_21156 = cljs.core.seq(warnings);
var chunk__20871_21157 = null;
var count__20872_21158 = (0);
var i__20873_21159 = (0);
while(true){
if((i__20873_21159 < count__20872_21158)){
var map__20876_21160 = chunk__20871_21157.cljs$core$IIndexed$_nth$arity$2(null,i__20873_21159);
var map__20876_21161__$1 = cljs.core.__destructure_map(map__20876_21160);
var w_21162 = map__20876_21161__$1;
var msg_21163__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20876_21161__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20876_21161__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20876_21161__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20876_21161__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21166)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21164),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21165),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21163__$1)].join(''));


var G__21167 = seq__20870_21156;
var G__21168 = chunk__20871_21157;
var G__21169 = count__20872_21158;
var G__21170 = (i__20873_21159 + (1));
seq__20870_21156 = G__21167;
chunk__20871_21157 = G__21168;
count__20872_21158 = G__21169;
i__20873_21159 = G__21170;
continue;
} else {
var temp__5804__auto___21171 = cljs.core.seq(seq__20870_21156);
if(temp__5804__auto___21171){
var seq__20870_21172__$1 = temp__5804__auto___21171;
if(cljs.core.chunked_seq_QMARK_(seq__20870_21172__$1)){
var c__5568__auto___21173 = cljs.core.chunk_first(seq__20870_21172__$1);
var G__21174 = cljs.core.chunk_rest(seq__20870_21172__$1);
var G__21175 = c__5568__auto___21173;
var G__21176 = cljs.core.count(c__5568__auto___21173);
var G__21177 = (0);
seq__20870_21156 = G__21174;
chunk__20871_21157 = G__21175;
count__20872_21158 = G__21176;
i__20873_21159 = G__21177;
continue;
} else {
var map__20877_21178 = cljs.core.first(seq__20870_21172__$1);
var map__20877_21179__$1 = cljs.core.__destructure_map(map__20877_21178);
var w_21180 = map__20877_21179__$1;
var msg_21181__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877_21179__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877_21179__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877_21179__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877_21179__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21184)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21182),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21183),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21181__$1)].join(''));


var G__21185 = cljs.core.next(seq__20870_21172__$1);
var G__21186 = null;
var G__21187 = (0);
var G__21188 = (0);
seq__20870_21156 = G__21185;
chunk__20871_21157 = G__21186;
count__20872_21158 = G__21187;
i__20873_21159 = G__21188;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20860_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20860_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20878){
var map__20879 = p__20878;
var map__20879__$1 = cljs.core.__destructure_map(map__20879);
var msg = map__20879__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20879__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20879__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20880 = cljs.core.seq(updates);
var chunk__20882 = null;
var count__20883 = (0);
var i__20884 = (0);
while(true){
if((i__20884 < count__20883)){
var path = chunk__20882.cljs$core$IIndexed$_nth$arity$2(null,i__20884);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20994_21189 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20998_21190 = null;
var count__20999_21191 = (0);
var i__21000_21192 = (0);
while(true){
if((i__21000_21192 < count__20999_21191)){
var node_21193 = chunk__20998_21190.cljs$core$IIndexed$_nth$arity$2(null,i__21000_21192);
if(cljs.core.not(node_21193.shadow$old)){
var path_match_21194 = shadow.cljs.devtools.client.browser.match_paths(node_21193.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21194)){
var new_link_21195 = (function (){var G__21026 = node_21193.cloneNode(true);
G__21026.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21194),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21026;
})();
(node_21193.shadow$old = true);

(new_link_21195.onload = ((function (seq__20994_21189,chunk__20998_21190,count__20999_21191,i__21000_21192,seq__20880,chunk__20882,count__20883,i__20884,new_link_21195,path_match_21194,node_21193,path,map__20879,map__20879__$1,msg,updates,reload_info){
return (function (e){
var seq__21027_21196 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21029_21197 = null;
var count__21030_21198 = (0);
var i__21031_21199 = (0);
while(true){
if((i__21031_21199 < count__21030_21198)){
var map__21035_21200 = chunk__21029_21197.cljs$core$IIndexed$_nth$arity$2(null,i__21031_21199);
var map__21035_21201__$1 = cljs.core.__destructure_map(map__21035_21200);
var task_21202 = map__21035_21201__$1;
var fn_str_21203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21035_21201__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21035_21201__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21205 = goog.getObjectByName(fn_str_21203,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21204)].join(''));

(fn_obj_21205.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21205.cljs$core$IFn$_invoke$arity$2(path,new_link_21195) : fn_obj_21205.call(null,path,new_link_21195));


var G__21206 = seq__21027_21196;
var G__21207 = chunk__21029_21197;
var G__21208 = count__21030_21198;
var G__21209 = (i__21031_21199 + (1));
seq__21027_21196 = G__21206;
chunk__21029_21197 = G__21207;
count__21030_21198 = G__21208;
i__21031_21199 = G__21209;
continue;
} else {
var temp__5804__auto___21210 = cljs.core.seq(seq__21027_21196);
if(temp__5804__auto___21210){
var seq__21027_21211__$1 = temp__5804__auto___21210;
if(cljs.core.chunked_seq_QMARK_(seq__21027_21211__$1)){
var c__5568__auto___21212 = cljs.core.chunk_first(seq__21027_21211__$1);
var G__21213 = cljs.core.chunk_rest(seq__21027_21211__$1);
var G__21214 = c__5568__auto___21212;
var G__21215 = cljs.core.count(c__5568__auto___21212);
var G__21216 = (0);
seq__21027_21196 = G__21213;
chunk__21029_21197 = G__21214;
count__21030_21198 = G__21215;
i__21031_21199 = G__21216;
continue;
} else {
var map__21036_21217 = cljs.core.first(seq__21027_21211__$1);
var map__21036_21218__$1 = cljs.core.__destructure_map(map__21036_21217);
var task_21219 = map__21036_21218__$1;
var fn_str_21220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21036_21218__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21036_21218__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21222 = goog.getObjectByName(fn_str_21220,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21221)].join(''));

(fn_obj_21222.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21222.cljs$core$IFn$_invoke$arity$2(path,new_link_21195) : fn_obj_21222.call(null,path,new_link_21195));


var G__21223 = cljs.core.next(seq__21027_21211__$1);
var G__21224 = null;
var G__21225 = (0);
var G__21226 = (0);
seq__21027_21196 = G__21223;
chunk__21029_21197 = G__21224;
count__21030_21198 = G__21225;
i__21031_21199 = G__21226;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21193);
});})(seq__20994_21189,chunk__20998_21190,count__20999_21191,i__21000_21192,seq__20880,chunk__20882,count__20883,i__20884,new_link_21195,path_match_21194,node_21193,path,map__20879,map__20879__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21194], 0));

goog.dom.insertSiblingAfter(new_link_21195,node_21193);


var G__21227 = seq__20994_21189;
var G__21228 = chunk__20998_21190;
var G__21229 = count__20999_21191;
var G__21230 = (i__21000_21192 + (1));
seq__20994_21189 = G__21227;
chunk__20998_21190 = G__21228;
count__20999_21191 = G__21229;
i__21000_21192 = G__21230;
continue;
} else {
var G__21231 = seq__20994_21189;
var G__21232 = chunk__20998_21190;
var G__21233 = count__20999_21191;
var G__21234 = (i__21000_21192 + (1));
seq__20994_21189 = G__21231;
chunk__20998_21190 = G__21232;
count__20999_21191 = G__21233;
i__21000_21192 = G__21234;
continue;
}
} else {
var G__21235 = seq__20994_21189;
var G__21236 = chunk__20998_21190;
var G__21237 = count__20999_21191;
var G__21238 = (i__21000_21192 + (1));
seq__20994_21189 = G__21235;
chunk__20998_21190 = G__21236;
count__20999_21191 = G__21237;
i__21000_21192 = G__21238;
continue;
}
} else {
var temp__5804__auto___21239 = cljs.core.seq(seq__20994_21189);
if(temp__5804__auto___21239){
var seq__20994_21240__$1 = temp__5804__auto___21239;
if(cljs.core.chunked_seq_QMARK_(seq__20994_21240__$1)){
var c__5568__auto___21241 = cljs.core.chunk_first(seq__20994_21240__$1);
var G__21242 = cljs.core.chunk_rest(seq__20994_21240__$1);
var G__21243 = c__5568__auto___21241;
var G__21244 = cljs.core.count(c__5568__auto___21241);
var G__21245 = (0);
seq__20994_21189 = G__21242;
chunk__20998_21190 = G__21243;
count__20999_21191 = G__21244;
i__21000_21192 = G__21245;
continue;
} else {
var node_21246 = cljs.core.first(seq__20994_21240__$1);
if(cljs.core.not(node_21246.shadow$old)){
var path_match_21247 = shadow.cljs.devtools.client.browser.match_paths(node_21246.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21247)){
var new_link_21248 = (function (){var G__21037 = node_21246.cloneNode(true);
G__21037.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21247),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21037;
})();
(node_21246.shadow$old = true);

(new_link_21248.onload = ((function (seq__20994_21189,chunk__20998_21190,count__20999_21191,i__21000_21192,seq__20880,chunk__20882,count__20883,i__20884,new_link_21248,path_match_21247,node_21246,seq__20994_21240__$1,temp__5804__auto___21239,path,map__20879,map__20879__$1,msg,updates,reload_info){
return (function (e){
var seq__21038_21249 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21040_21250 = null;
var count__21041_21251 = (0);
var i__21042_21252 = (0);
while(true){
if((i__21042_21252 < count__21041_21251)){
var map__21046_21253 = chunk__21040_21250.cljs$core$IIndexed$_nth$arity$2(null,i__21042_21252);
var map__21046_21254__$1 = cljs.core.__destructure_map(map__21046_21253);
var task_21255 = map__21046_21254__$1;
var fn_str_21256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21046_21254__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21046_21254__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21258 = goog.getObjectByName(fn_str_21256,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21257)].join(''));

(fn_obj_21258.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21258.cljs$core$IFn$_invoke$arity$2(path,new_link_21248) : fn_obj_21258.call(null,path,new_link_21248));


var G__21259 = seq__21038_21249;
var G__21260 = chunk__21040_21250;
var G__21261 = count__21041_21251;
var G__21262 = (i__21042_21252 + (1));
seq__21038_21249 = G__21259;
chunk__21040_21250 = G__21260;
count__21041_21251 = G__21261;
i__21042_21252 = G__21262;
continue;
} else {
var temp__5804__auto___21263__$1 = cljs.core.seq(seq__21038_21249);
if(temp__5804__auto___21263__$1){
var seq__21038_21264__$1 = temp__5804__auto___21263__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21038_21264__$1)){
var c__5568__auto___21265 = cljs.core.chunk_first(seq__21038_21264__$1);
var G__21266 = cljs.core.chunk_rest(seq__21038_21264__$1);
var G__21267 = c__5568__auto___21265;
var G__21268 = cljs.core.count(c__5568__auto___21265);
var G__21269 = (0);
seq__21038_21249 = G__21266;
chunk__21040_21250 = G__21267;
count__21041_21251 = G__21268;
i__21042_21252 = G__21269;
continue;
} else {
var map__21047_21270 = cljs.core.first(seq__21038_21264__$1);
var map__21047_21271__$1 = cljs.core.__destructure_map(map__21047_21270);
var task_21272 = map__21047_21271__$1;
var fn_str_21273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21047_21271__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21047_21271__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21275 = goog.getObjectByName(fn_str_21273,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21274)].join(''));

(fn_obj_21275.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21275.cljs$core$IFn$_invoke$arity$2(path,new_link_21248) : fn_obj_21275.call(null,path,new_link_21248));


var G__21276 = cljs.core.next(seq__21038_21264__$1);
var G__21277 = null;
var G__21278 = (0);
var G__21279 = (0);
seq__21038_21249 = G__21276;
chunk__21040_21250 = G__21277;
count__21041_21251 = G__21278;
i__21042_21252 = G__21279;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21246);
});})(seq__20994_21189,chunk__20998_21190,count__20999_21191,i__21000_21192,seq__20880,chunk__20882,count__20883,i__20884,new_link_21248,path_match_21247,node_21246,seq__20994_21240__$1,temp__5804__auto___21239,path,map__20879,map__20879__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21247], 0));

goog.dom.insertSiblingAfter(new_link_21248,node_21246);


var G__21280 = cljs.core.next(seq__20994_21240__$1);
var G__21281 = null;
var G__21282 = (0);
var G__21283 = (0);
seq__20994_21189 = G__21280;
chunk__20998_21190 = G__21281;
count__20999_21191 = G__21282;
i__21000_21192 = G__21283;
continue;
} else {
var G__21284 = cljs.core.next(seq__20994_21240__$1);
var G__21285 = null;
var G__21286 = (0);
var G__21287 = (0);
seq__20994_21189 = G__21284;
chunk__20998_21190 = G__21285;
count__20999_21191 = G__21286;
i__21000_21192 = G__21287;
continue;
}
} else {
var G__21288 = cljs.core.next(seq__20994_21240__$1);
var G__21289 = null;
var G__21290 = (0);
var G__21291 = (0);
seq__20994_21189 = G__21288;
chunk__20998_21190 = G__21289;
count__20999_21191 = G__21290;
i__21000_21192 = G__21291;
continue;
}
}
} else {
}
}
break;
}


var G__21292 = seq__20880;
var G__21293 = chunk__20882;
var G__21294 = count__20883;
var G__21295 = (i__20884 + (1));
seq__20880 = G__21292;
chunk__20882 = G__21293;
count__20883 = G__21294;
i__20884 = G__21295;
continue;
} else {
var G__21296 = seq__20880;
var G__21297 = chunk__20882;
var G__21298 = count__20883;
var G__21299 = (i__20884 + (1));
seq__20880 = G__21296;
chunk__20882 = G__21297;
count__20883 = G__21298;
i__20884 = G__21299;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20880);
if(temp__5804__auto__){
var seq__20880__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20880__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20880__$1);
var G__21300 = cljs.core.chunk_rest(seq__20880__$1);
var G__21301 = c__5568__auto__;
var G__21302 = cljs.core.count(c__5568__auto__);
var G__21303 = (0);
seq__20880 = G__21300;
chunk__20882 = G__21301;
count__20883 = G__21302;
i__20884 = G__21303;
continue;
} else {
var path = cljs.core.first(seq__20880__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21048_21304 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21052_21305 = null;
var count__21053_21306 = (0);
var i__21054_21307 = (0);
while(true){
if((i__21054_21307 < count__21053_21306)){
var node_21308 = chunk__21052_21305.cljs$core$IIndexed$_nth$arity$2(null,i__21054_21307);
if(cljs.core.not(node_21308.shadow$old)){
var path_match_21309 = shadow.cljs.devtools.client.browser.match_paths(node_21308.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21309)){
var new_link_21310 = (function (){var G__21080 = node_21308.cloneNode(true);
G__21080.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21309),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21080;
})();
(node_21308.shadow$old = true);

(new_link_21310.onload = ((function (seq__21048_21304,chunk__21052_21305,count__21053_21306,i__21054_21307,seq__20880,chunk__20882,count__20883,i__20884,new_link_21310,path_match_21309,node_21308,path,seq__20880__$1,temp__5804__auto__,map__20879,map__20879__$1,msg,updates,reload_info){
return (function (e){
var seq__21081_21311 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21083_21312 = null;
var count__21084_21313 = (0);
var i__21085_21314 = (0);
while(true){
if((i__21085_21314 < count__21084_21313)){
var map__21089_21315 = chunk__21083_21312.cljs$core$IIndexed$_nth$arity$2(null,i__21085_21314);
var map__21089_21316__$1 = cljs.core.__destructure_map(map__21089_21315);
var task_21317 = map__21089_21316__$1;
var fn_str_21318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21089_21316__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21089_21316__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21320 = goog.getObjectByName(fn_str_21318,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21319)].join(''));

(fn_obj_21320.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21320.cljs$core$IFn$_invoke$arity$2(path,new_link_21310) : fn_obj_21320.call(null,path,new_link_21310));


var G__21321 = seq__21081_21311;
var G__21322 = chunk__21083_21312;
var G__21323 = count__21084_21313;
var G__21324 = (i__21085_21314 + (1));
seq__21081_21311 = G__21321;
chunk__21083_21312 = G__21322;
count__21084_21313 = G__21323;
i__21085_21314 = G__21324;
continue;
} else {
var temp__5804__auto___21325__$1 = cljs.core.seq(seq__21081_21311);
if(temp__5804__auto___21325__$1){
var seq__21081_21326__$1 = temp__5804__auto___21325__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21081_21326__$1)){
var c__5568__auto___21327 = cljs.core.chunk_first(seq__21081_21326__$1);
var G__21328 = cljs.core.chunk_rest(seq__21081_21326__$1);
var G__21329 = c__5568__auto___21327;
var G__21330 = cljs.core.count(c__5568__auto___21327);
var G__21331 = (0);
seq__21081_21311 = G__21328;
chunk__21083_21312 = G__21329;
count__21084_21313 = G__21330;
i__21085_21314 = G__21331;
continue;
} else {
var map__21090_21332 = cljs.core.first(seq__21081_21326__$1);
var map__21090_21333__$1 = cljs.core.__destructure_map(map__21090_21332);
var task_21334 = map__21090_21333__$1;
var fn_str_21335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21090_21333__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21090_21333__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21337 = goog.getObjectByName(fn_str_21335,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21336)].join(''));

(fn_obj_21337.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21337.cljs$core$IFn$_invoke$arity$2(path,new_link_21310) : fn_obj_21337.call(null,path,new_link_21310));


var G__21338 = cljs.core.next(seq__21081_21326__$1);
var G__21339 = null;
var G__21340 = (0);
var G__21341 = (0);
seq__21081_21311 = G__21338;
chunk__21083_21312 = G__21339;
count__21084_21313 = G__21340;
i__21085_21314 = G__21341;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21308);
});})(seq__21048_21304,chunk__21052_21305,count__21053_21306,i__21054_21307,seq__20880,chunk__20882,count__20883,i__20884,new_link_21310,path_match_21309,node_21308,path,seq__20880__$1,temp__5804__auto__,map__20879,map__20879__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21309], 0));

goog.dom.insertSiblingAfter(new_link_21310,node_21308);


var G__21342 = seq__21048_21304;
var G__21343 = chunk__21052_21305;
var G__21344 = count__21053_21306;
var G__21345 = (i__21054_21307 + (1));
seq__21048_21304 = G__21342;
chunk__21052_21305 = G__21343;
count__21053_21306 = G__21344;
i__21054_21307 = G__21345;
continue;
} else {
var G__21346 = seq__21048_21304;
var G__21347 = chunk__21052_21305;
var G__21348 = count__21053_21306;
var G__21349 = (i__21054_21307 + (1));
seq__21048_21304 = G__21346;
chunk__21052_21305 = G__21347;
count__21053_21306 = G__21348;
i__21054_21307 = G__21349;
continue;
}
} else {
var G__21350 = seq__21048_21304;
var G__21351 = chunk__21052_21305;
var G__21352 = count__21053_21306;
var G__21353 = (i__21054_21307 + (1));
seq__21048_21304 = G__21350;
chunk__21052_21305 = G__21351;
count__21053_21306 = G__21352;
i__21054_21307 = G__21353;
continue;
}
} else {
var temp__5804__auto___21354__$1 = cljs.core.seq(seq__21048_21304);
if(temp__5804__auto___21354__$1){
var seq__21048_21355__$1 = temp__5804__auto___21354__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21048_21355__$1)){
var c__5568__auto___21356 = cljs.core.chunk_first(seq__21048_21355__$1);
var G__21357 = cljs.core.chunk_rest(seq__21048_21355__$1);
var G__21358 = c__5568__auto___21356;
var G__21359 = cljs.core.count(c__5568__auto___21356);
var G__21360 = (0);
seq__21048_21304 = G__21357;
chunk__21052_21305 = G__21358;
count__21053_21306 = G__21359;
i__21054_21307 = G__21360;
continue;
} else {
var node_21361 = cljs.core.first(seq__21048_21355__$1);
if(cljs.core.not(node_21361.shadow$old)){
var path_match_21362 = shadow.cljs.devtools.client.browser.match_paths(node_21361.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21362)){
var new_link_21363 = (function (){var G__21091 = node_21361.cloneNode(true);
G__21091.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21362),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21091;
})();
(node_21361.shadow$old = true);

(new_link_21363.onload = ((function (seq__21048_21304,chunk__21052_21305,count__21053_21306,i__21054_21307,seq__20880,chunk__20882,count__20883,i__20884,new_link_21363,path_match_21362,node_21361,seq__21048_21355__$1,temp__5804__auto___21354__$1,path,seq__20880__$1,temp__5804__auto__,map__20879,map__20879__$1,msg,updates,reload_info){
return (function (e){
var seq__21092_21364 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21094_21365 = null;
var count__21095_21366 = (0);
var i__21096_21367 = (0);
while(true){
if((i__21096_21367 < count__21095_21366)){
var map__21100_21368 = chunk__21094_21365.cljs$core$IIndexed$_nth$arity$2(null,i__21096_21367);
var map__21100_21369__$1 = cljs.core.__destructure_map(map__21100_21368);
var task_21370 = map__21100_21369__$1;
var fn_str_21371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21100_21369__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21100_21369__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21373 = goog.getObjectByName(fn_str_21371,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21372)].join(''));

(fn_obj_21373.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21373.cljs$core$IFn$_invoke$arity$2(path,new_link_21363) : fn_obj_21373.call(null,path,new_link_21363));


var G__21374 = seq__21092_21364;
var G__21375 = chunk__21094_21365;
var G__21376 = count__21095_21366;
var G__21377 = (i__21096_21367 + (1));
seq__21092_21364 = G__21374;
chunk__21094_21365 = G__21375;
count__21095_21366 = G__21376;
i__21096_21367 = G__21377;
continue;
} else {
var temp__5804__auto___21378__$2 = cljs.core.seq(seq__21092_21364);
if(temp__5804__auto___21378__$2){
var seq__21092_21379__$1 = temp__5804__auto___21378__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21092_21379__$1)){
var c__5568__auto___21380 = cljs.core.chunk_first(seq__21092_21379__$1);
var G__21381 = cljs.core.chunk_rest(seq__21092_21379__$1);
var G__21382 = c__5568__auto___21380;
var G__21383 = cljs.core.count(c__5568__auto___21380);
var G__21384 = (0);
seq__21092_21364 = G__21381;
chunk__21094_21365 = G__21382;
count__21095_21366 = G__21383;
i__21096_21367 = G__21384;
continue;
} else {
var map__21101_21385 = cljs.core.first(seq__21092_21379__$1);
var map__21101_21386__$1 = cljs.core.__destructure_map(map__21101_21385);
var task_21387 = map__21101_21386__$1;
var fn_str_21388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21101_21386__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21101_21386__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21390 = goog.getObjectByName(fn_str_21388,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21389)].join(''));

(fn_obj_21390.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21390.cljs$core$IFn$_invoke$arity$2(path,new_link_21363) : fn_obj_21390.call(null,path,new_link_21363));


var G__21391 = cljs.core.next(seq__21092_21379__$1);
var G__21392 = null;
var G__21393 = (0);
var G__21394 = (0);
seq__21092_21364 = G__21391;
chunk__21094_21365 = G__21392;
count__21095_21366 = G__21393;
i__21096_21367 = G__21394;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21361);
});})(seq__21048_21304,chunk__21052_21305,count__21053_21306,i__21054_21307,seq__20880,chunk__20882,count__20883,i__20884,new_link_21363,path_match_21362,node_21361,seq__21048_21355__$1,temp__5804__auto___21354__$1,path,seq__20880__$1,temp__5804__auto__,map__20879,map__20879__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21362], 0));

goog.dom.insertSiblingAfter(new_link_21363,node_21361);


var G__21395 = cljs.core.next(seq__21048_21355__$1);
var G__21396 = null;
var G__21397 = (0);
var G__21398 = (0);
seq__21048_21304 = G__21395;
chunk__21052_21305 = G__21396;
count__21053_21306 = G__21397;
i__21054_21307 = G__21398;
continue;
} else {
var G__21399 = cljs.core.next(seq__21048_21355__$1);
var G__21400 = null;
var G__21401 = (0);
var G__21402 = (0);
seq__21048_21304 = G__21399;
chunk__21052_21305 = G__21400;
count__21053_21306 = G__21401;
i__21054_21307 = G__21402;
continue;
}
} else {
var G__21403 = cljs.core.next(seq__21048_21355__$1);
var G__21404 = null;
var G__21405 = (0);
var G__21406 = (0);
seq__21048_21304 = G__21403;
chunk__21052_21305 = G__21404;
count__21053_21306 = G__21405;
i__21054_21307 = G__21406;
continue;
}
}
} else {
}
}
break;
}


var G__21407 = cljs.core.next(seq__20880__$1);
var G__21408 = null;
var G__21409 = (0);
var G__21410 = (0);
seq__20880 = G__21407;
chunk__20882 = G__21408;
count__20883 = G__21409;
i__20884 = G__21410;
continue;
} else {
var G__21411 = cljs.core.next(seq__20880__$1);
var G__21412 = null;
var G__21413 = (0);
var G__21414 = (0);
seq__20880 = G__21411;
chunk__20882 = G__21412;
count__20883 = G__21413;
i__20884 = G__21414;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21102){
var map__21103 = p__21102;
var map__21103__$1 = cljs.core.__destructure_map(map__21103);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21103__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21104){
var map__21105 = p__21104;
var map__21105__$1 = cljs.core.__destructure_map(map__21105);
var _ = map__21105__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21105__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21106,done,error){
var map__21107 = p__21106;
var map__21107__$1 = cljs.core.__destructure_map(map__21107);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21107__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21108,done,error){
var map__21109 = p__21108;
var map__21109__$1 = cljs.core.__destructure_map(map__21109);
var msg = map__21109__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21109__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21109__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21109__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21110){
var map__21111 = p__21110;
var map__21111__$1 = cljs.core.__destructure_map(map__21111);
var src = map__21111__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21111__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21112 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21112) : done.call(null,G__21112));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21113){
var map__21114 = p__21113;
var map__21114__$1 = cljs.core.__destructure_map(map__21114);
var msg__$1 = map__21114__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21114__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21115){var ex = e21115;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21116){
var map__21117 = p__21116;
var map__21117__$1 = cljs.core.__destructure_map(map__21117);
var env = map__21117__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21117__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21118){
var map__21119 = p__21118;
var map__21119__$1 = cljs.core.__destructure_map(map__21119);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21119__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21119__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__21120){
var map__21121 = p__21120;
var map__21121__$1 = cljs.core.__destructure_map(map__21121);
var svc = map__21121__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
