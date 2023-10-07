goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20064,p__20065){
var map__20067 = p__20064;
var map__20067__$1 = cljs.core.__destructure_map(map__20067);
var svc = map__20067__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20067__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20067__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20067__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20068 = p__20065;
var map__20068__$1 = cljs.core.__destructure_map(map__20068);
var msg = map__20068__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20068__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20068__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20068__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20068__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20080,p__20081){
var map__20084 = p__20080;
var map__20084__$1 = cljs.core.__destructure_map(map__20084);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20084__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20085 = p__20081;
var map__20085__$1 = cljs.core.__destructure_map(map__20085);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20085__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20089,p__20090){
var map__20091 = p__20089;
var map__20091__$1 = cljs.core.__destructure_map(map__20091);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20091__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20091__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20092 = p__20090;
var map__20092__$1 = cljs.core.__destructure_map(map__20092);
var msg = map__20092__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20092__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20095,tid){
var map__20096 = p__20095;
var map__20096__$1 = cljs.core.__destructure_map(map__20096);
var svc = map__20096__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20096__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20109 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20110 = null;
var count__20111 = (0);
var i__20112 = (0);
while(true){
if((i__20112 < count__20111)){
var vec__20131 = chunk__20110.cljs$core$IIndexed$_nth$arity$2(null,i__20112);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20131,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20131,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20149 = seq__20109;
var G__20150 = chunk__20110;
var G__20151 = count__20111;
var G__20152 = (i__20112 + (1));
seq__20109 = G__20149;
chunk__20110 = G__20150;
count__20111 = G__20151;
i__20112 = G__20152;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20109);
if(temp__5804__auto__){
var seq__20109__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20109__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20109__$1);
var G__20153 = cljs.core.chunk_rest(seq__20109__$1);
var G__20154 = c__5568__auto__;
var G__20155 = cljs.core.count(c__5568__auto__);
var G__20156 = (0);
seq__20109 = G__20153;
chunk__20110 = G__20154;
count__20111 = G__20155;
i__20112 = G__20156;
continue;
} else {
var vec__20136 = cljs.core.first(seq__20109__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20136,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20136,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20157 = cljs.core.next(seq__20109__$1);
var G__20158 = null;
var G__20159 = (0);
var G__20160 = (0);
seq__20109 = G__20157;
chunk__20110 = G__20158;
count__20111 = G__20159;
i__20112 = G__20160;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20100_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20100_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20101_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20101_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20102_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20102_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20103_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20103_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20143){
var map__20144 = p__20143;
var map__20144__$1 = cljs.core.__destructure_map(map__20144);
var svc = map__20144__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20144__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20144__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
