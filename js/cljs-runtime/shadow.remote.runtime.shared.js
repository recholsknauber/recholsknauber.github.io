goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__15979,res){
var map__15980 = p__15979;
var map__15980__$1 = cljs.core.__destructure_map(map__15980);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15980__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15980__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__15982 = res;
var G__15982__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15982,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__15982);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15982__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__15982__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__15987 = arguments.length;
switch (G__15987) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__15995,msg,handlers,timeout_after_ms){
var map__15996 = p__15995;
var map__15996__$1 = cljs.core.__destructure_map(map__15996);
var runtime = map__15996__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15996__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16344 = arguments.length;
var i__5770__auto___16346 = (0);
while(true){
if((i__5770__auto___16346 < len__5769__auto___16344)){
args__5775__auto__.push((arguments[i__5770__auto___16346]));

var G__16348 = (i__5770__auto___16346 + (1));
i__5770__auto___16346 = G__16348;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__16023,ev,args){
var map__16025 = p__16023;
var map__16025__$1 = cljs.core.__destructure_map(map__16025);
var runtime = map__16025__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16025__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__16026 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16029 = null;
var count__16030 = (0);
var i__16031 = (0);
while(true){
if((i__16031 < count__16030)){
var ext = chunk__16029.cljs$core$IIndexed$_nth$arity$2(null,i__16031);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16368 = seq__16026;
var G__16369 = chunk__16029;
var G__16370 = count__16030;
var G__16371 = (i__16031 + (1));
seq__16026 = G__16368;
chunk__16029 = G__16369;
count__16030 = G__16370;
i__16031 = G__16371;
continue;
} else {
var G__16374 = seq__16026;
var G__16375 = chunk__16029;
var G__16376 = count__16030;
var G__16377 = (i__16031 + (1));
seq__16026 = G__16374;
chunk__16029 = G__16375;
count__16030 = G__16376;
i__16031 = G__16377;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16026);
if(temp__5804__auto__){
var seq__16026__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16026__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16026__$1);
var G__16382 = cljs.core.chunk_rest(seq__16026__$1);
var G__16383 = c__5568__auto__;
var G__16384 = cljs.core.count(c__5568__auto__);
var G__16385 = (0);
seq__16026 = G__16382;
chunk__16029 = G__16383;
count__16030 = G__16384;
i__16031 = G__16385;
continue;
} else {
var ext = cljs.core.first(seq__16026__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16390 = cljs.core.next(seq__16026__$1);
var G__16391 = null;
var G__16393 = (0);
var G__16394 = (0);
seq__16026 = G__16390;
chunk__16029 = G__16391;
count__16030 = G__16393;
i__16031 = G__16394;
continue;
} else {
var G__16396 = cljs.core.next(seq__16026__$1);
var G__16397 = null;
var G__16398 = (0);
var G__16399 = (0);
seq__16026 = G__16396;
chunk__16029 = G__16397;
count__16030 = G__16398;
i__16031 = G__16399;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq16010){
var G__16011 = cljs.core.first(seq16010);
var seq16010__$1 = cljs.core.next(seq16010);
var G__16012 = cljs.core.first(seq16010__$1);
var seq16010__$2 = cljs.core.next(seq16010__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16011,G__16012,seq16010__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__16096,p__16097){
var map__16098 = p__16096;
var map__16098__$1 = cljs.core.__destructure_map(map__16098);
var runtime = map__16098__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16098__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16099 = p__16097;
var map__16099__$1 = cljs.core.__destructure_map(map__16099);
var msg = map__16099__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16099__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__16102 = cljs.core.deref(state_ref);
var map__16102__$1 = cljs.core.__destructure_map(map__16102);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16102__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16102__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__16121){
var map__16123 = p__16121;
var map__16123__$1 = cljs.core.__destructure_map(map__16123);
var runtime = map__16123__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16123__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__16131,msg){
var map__16133 = p__16131;
var map__16133__$1 = cljs.core.__destructure_map(map__16133);
var runtime = map__16133__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16133__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__16158,key,p__16159){
var map__16161 = p__16158;
var map__16161__$1 = cljs.core.__destructure_map(map__16161);
var state = map__16161__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16161__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__16163 = p__16159;
var map__16163__$1 = cljs.core.__destructure_map(map__16163);
var spec = map__16163__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16163__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__16182,key,spec){
var map__16183 = p__16182;
var map__16183__$1 = cljs.core.__destructure_map(map__16183);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16183__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__16189_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__16189_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__16190_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__16190_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__16191_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__16191_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__16192_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__16192_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__16195_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__16195_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__16230,key){
var map__16232 = p__16230;
var map__16232__$1 = cljs.core.__destructure_map(map__16232);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16232__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__16243,msg){
var map__16244 = p__16243;
var map__16244__$1 = cljs.core.__destructure_map(map__16244);
var runtime = map__16244__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16244__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__16257,p__16258){
var map__16261 = p__16257;
var map__16261__$1 = cljs.core.__destructure_map(map__16261);
var runtime = map__16261__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16261__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16265 = p__16258;
var map__16265__$1 = cljs.core.__destructure_map(map__16265);
var msg = map__16265__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16265__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16265__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__16280 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16282 = null;
var count__16283 = (0);
var i__16284 = (0);
while(true){
if((i__16284 < count__16283)){
var map__16304 = chunk__16282.cljs$core$IIndexed$_nth$arity$2(null,i__16284);
var map__16304__$1 = cljs.core.__destructure_map(map__16304);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16304__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16537 = seq__16280;
var G__16538 = chunk__16282;
var G__16539 = count__16283;
var G__16540 = (i__16284 + (1));
seq__16280 = G__16537;
chunk__16282 = G__16538;
count__16283 = G__16539;
i__16284 = G__16540;
continue;
} else {
var G__16542 = seq__16280;
var G__16543 = chunk__16282;
var G__16544 = count__16283;
var G__16545 = (i__16284 + (1));
seq__16280 = G__16542;
chunk__16282 = G__16543;
count__16283 = G__16544;
i__16284 = G__16545;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16280);
if(temp__5804__auto__){
var seq__16280__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16280__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16280__$1);
var G__16551 = cljs.core.chunk_rest(seq__16280__$1);
var G__16552 = c__5568__auto__;
var G__16553 = cljs.core.count(c__5568__auto__);
var G__16554 = (0);
seq__16280 = G__16551;
chunk__16282 = G__16552;
count__16283 = G__16553;
i__16284 = G__16554;
continue;
} else {
var map__16313 = cljs.core.first(seq__16280__$1);
var map__16313__$1 = cljs.core.__destructure_map(map__16313);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16313__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16560 = cljs.core.next(seq__16280__$1);
var G__16561 = null;
var G__16562 = (0);
var G__16563 = (0);
seq__16280 = G__16560;
chunk__16282 = G__16561;
count__16283 = G__16562;
i__16284 = G__16563;
continue;
} else {
var G__16568 = cljs.core.next(seq__16280__$1);
var G__16569 = null;
var G__16570 = (0);
var G__16571 = (0);
seq__16280 = G__16568;
chunk__16282 = G__16569;
count__16283 = G__16570;
i__16284 = G__16571;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
