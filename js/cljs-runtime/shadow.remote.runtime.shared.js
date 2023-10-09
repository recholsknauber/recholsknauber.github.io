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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__22491,res){
var map__22492 = p__22491;
var map__22492__$1 = cljs.core.__destructure_map(map__22492);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22492__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22492__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__22493 = res;
var G__22493__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22493,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__22493);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22493__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__22493__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__22500 = arguments.length;
switch (G__22500) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__22501,msg,handlers,timeout_after_ms){
var map__22502 = p__22501;
var map__22502__$1 = cljs.core.__destructure_map(map__22502);
var runtime = map__22502__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22502__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22745 = arguments.length;
var i__5770__auto___22746 = (0);
while(true){
if((i__5770__auto___22746 < len__5769__auto___22745)){
args__5775__auto__.push((arguments[i__5770__auto___22746]));

var G__22747 = (i__5770__auto___22746 + (1));
i__5770__auto___22746 = G__22747;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22513,ev,args){
var map__22514 = p__22513;
var map__22514__$1 = cljs.core.__destructure_map(map__22514);
var runtime = map__22514__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22514__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__22516 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__22519 = null;
var count__22520 = (0);
var i__22521 = (0);
while(true){
if((i__22521 < count__22520)){
var ext = chunk__22519.cljs$core$IIndexed$_nth$arity$2(null,i__22521);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__22748 = seq__22516;
var G__22749 = chunk__22519;
var G__22750 = count__22520;
var G__22751 = (i__22521 + (1));
seq__22516 = G__22748;
chunk__22519 = G__22749;
count__22520 = G__22750;
i__22521 = G__22751;
continue;
} else {
var G__22753 = seq__22516;
var G__22754 = chunk__22519;
var G__22755 = count__22520;
var G__22756 = (i__22521 + (1));
seq__22516 = G__22753;
chunk__22519 = G__22754;
count__22520 = G__22755;
i__22521 = G__22756;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22516);
if(temp__5804__auto__){
var seq__22516__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22516__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22516__$1);
var G__22757 = cljs.core.chunk_rest(seq__22516__$1);
var G__22758 = c__5568__auto__;
var G__22759 = cljs.core.count(c__5568__auto__);
var G__22760 = (0);
seq__22516 = G__22757;
chunk__22519 = G__22758;
count__22520 = G__22759;
i__22521 = G__22760;
continue;
} else {
var ext = cljs.core.first(seq__22516__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__22762 = cljs.core.next(seq__22516__$1);
var G__22763 = null;
var G__22764 = (0);
var G__22765 = (0);
seq__22516 = G__22762;
chunk__22519 = G__22763;
count__22520 = G__22764;
i__22521 = G__22765;
continue;
} else {
var G__22766 = cljs.core.next(seq__22516__$1);
var G__22767 = null;
var G__22768 = (0);
var G__22769 = (0);
seq__22516 = G__22766;
chunk__22519 = G__22767;
count__22520 = G__22768;
i__22521 = G__22769;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq22505){
var G__22506 = cljs.core.first(seq22505);
var seq22505__$1 = cljs.core.next(seq22505);
var G__22507 = cljs.core.first(seq22505__$1);
var seq22505__$2 = cljs.core.next(seq22505__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22506,G__22507,seq22505__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__22534,p__22535){
var map__22536 = p__22534;
var map__22536__$1 = cljs.core.__destructure_map(map__22536);
var runtime = map__22536__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22536__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__22537 = p__22535;
var map__22537__$1 = cljs.core.__destructure_map(map__22537);
var msg = map__22537__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22537__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__22539 = cljs.core.deref(state_ref);
var map__22539__$1 = cljs.core.__destructure_map(map__22539);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22539__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22539__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__22554){
var map__22562 = p__22554;
var map__22562__$1 = cljs.core.__destructure_map(map__22562);
var runtime = map__22562__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22562__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__22574,msg){
var map__22575 = p__22574;
var map__22575__$1 = cljs.core.__destructure_map(map__22575);
var runtime = map__22575__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22575__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__22579,key,p__22580){
var map__22581 = p__22579;
var map__22581__$1 = cljs.core.__destructure_map(map__22581);
var state = map__22581__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22581__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__22582 = p__22580;
var map__22582__$1 = cljs.core.__destructure_map(map__22582);
var spec = map__22582__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22582__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__22596,key,spec){
var map__22598 = p__22596;
var map__22598__$1 = cljs.core.__destructure_map(map__22598);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22598__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__22606_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__22606_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__22607_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__22607_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__22608_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__22608_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__22609_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__22609_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__22610_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__22610_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__22616,key){
var map__22618 = p__22616;
var map__22618__$1 = cljs.core.__destructure_map(map__22618);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22618__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__22624,msg){
var map__22625 = p__22624;
var map__22625__$1 = cljs.core.__destructure_map(map__22625);
var runtime = map__22625__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22625__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__22634,p__22635){
var map__22636 = p__22634;
var map__22636__$1 = cljs.core.__destructure_map(map__22636);
var runtime = map__22636__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22636__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__22638 = p__22635;
var map__22638__$1 = cljs.core.__destructure_map(map__22638);
var msg = map__22638__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22638__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22638__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__22650 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__22652 = null;
var count__22653 = (0);
var i__22654 = (0);
while(true){
if((i__22654 < count__22653)){
var map__22682 = chunk__22652.cljs$core$IIndexed$_nth$arity$2(null,i__22654);
var map__22682__$1 = cljs.core.__destructure_map(map__22682);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22682__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__22876 = seq__22650;
var G__22877 = chunk__22652;
var G__22878 = count__22653;
var G__22879 = (i__22654 + (1));
seq__22650 = G__22876;
chunk__22652 = G__22877;
count__22653 = G__22878;
i__22654 = G__22879;
continue;
} else {
var G__22881 = seq__22650;
var G__22882 = chunk__22652;
var G__22883 = count__22653;
var G__22884 = (i__22654 + (1));
seq__22650 = G__22881;
chunk__22652 = G__22882;
count__22653 = G__22883;
i__22654 = G__22884;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22650);
if(temp__5804__auto__){
var seq__22650__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22650__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22650__$1);
var G__22890 = cljs.core.chunk_rest(seq__22650__$1);
var G__22891 = c__5568__auto__;
var G__22892 = cljs.core.count(c__5568__auto__);
var G__22893 = (0);
seq__22650 = G__22890;
chunk__22652 = G__22891;
count__22653 = G__22892;
i__22654 = G__22893;
continue;
} else {
var map__22689 = cljs.core.first(seq__22650__$1);
var map__22689__$1 = cljs.core.__destructure_map(map__22689);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22689__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__22897 = cljs.core.next(seq__22650__$1);
var G__22898 = null;
var G__22899 = (0);
var G__22900 = (0);
seq__22650 = G__22897;
chunk__22652 = G__22898;
count__22653 = G__22899;
i__22654 = G__22900;
continue;
} else {
var G__22902 = cljs.core.next(seq__22650__$1);
var G__22903 = null;
var G__22904 = (0);
var G__22905 = (0);
seq__22650 = G__22902;
chunk__22652 = G__22903;
count__22653 = G__22904;
i__22654 = G__22905;
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
