goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__26485,p__26486){
var map__26489 = p__26485;
var map__26489__$1 = cljs.core.__destructure_map(map__26489);
var svc = map__26489__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26489__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26489__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26489__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__26490 = p__26486;
var map__26490__$1 = cljs.core.__destructure_map(map__26490);
var msg = map__26490__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26490__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26490__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26490__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26490__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__26498,p__26499){
var map__26500 = p__26498;
var map__26500__$1 = cljs.core.__destructure_map(map__26500);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26500__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__26501 = p__26499;
var map__26501__$1 = cljs.core.__destructure_map(map__26501);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26501__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__26504,p__26505){
var map__26506 = p__26504;
var map__26506__$1 = cljs.core.__destructure_map(map__26506);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26506__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26506__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__26507 = p__26505;
var map__26507__$1 = cljs.core.__destructure_map(map__26507);
var msg = map__26507__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26507__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__26509,tid){
var map__26510 = p__26509;
var map__26510__$1 = cljs.core.__destructure_map(map__26510);
var svc = map__26510__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26510__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__26520 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__26521 = null;
var count__26522 = (0);
var i__26523 = (0);
while(true){
if((i__26523 < count__26522)){
var vec__26535 = chunk__26521.cljs$core$IIndexed$_nth$arity$2(null,i__26523);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26535,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26535,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__26551 = seq__26520;
var G__26552 = chunk__26521;
var G__26553 = count__26522;
var G__26554 = (i__26523 + (1));
seq__26520 = G__26551;
chunk__26521 = G__26552;
count__26522 = G__26553;
i__26523 = G__26554;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26520);
if(temp__5804__auto__){
var seq__26520__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26520__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26520__$1);
var G__26555 = cljs.core.chunk_rest(seq__26520__$1);
var G__26556 = c__5568__auto__;
var G__26557 = cljs.core.count(c__5568__auto__);
var G__26558 = (0);
seq__26520 = G__26555;
chunk__26521 = G__26556;
count__26522 = G__26557;
i__26523 = G__26558;
continue;
} else {
var vec__26542 = cljs.core.first(seq__26520__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26542,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26542,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__26559 = cljs.core.next(seq__26520__$1);
var G__26560 = null;
var G__26561 = (0);
var G__26562 = (0);
seq__26520 = G__26559;
chunk__26521 = G__26560;
count__26522 = G__26561;
i__26523 = G__26562;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__26515_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__26515_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__26516_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__26516_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__26517_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__26517_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__26518_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__26518_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__26546){
var map__26547 = p__26546;
var map__26547__$1 = cljs.core.__destructure_map(map__26547);
var svc = map__26547__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26547__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26547__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
