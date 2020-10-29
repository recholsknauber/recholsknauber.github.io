// Compiled by ClojureScript 1.10.773 {}
goog.provide('existcafe.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
existcafe.core.setup = (function existcafe$core$setup(){
quil.core.frame_rate.call(null,((10) + cljs.core.rand_int.call(null,(100))));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
existcafe.core.update_state = (function existcafe$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + cljs.core.rand.call(null,(2))),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + cljs.core.rand.call(null,0.5))], null);
});
existcafe.core.draw_state = (function existcafe$core$draw_state(state){
quil.core.background.call(null,(240));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((50) * quil.core.cos.call(null,angle));
var y = ((50) * quil.core.sin.call(null,angle));
var tr__10285__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__10285__auto__);

return quil.core.ellipse.call(null,x,y,((25) + cljs.core.rand_int.call(null,(100))),((25) + cljs.core.rand_int.call(null,(100))));
}finally {quil.core.pop_matrix.call(null);
}});
existcafe.core.run_sketch = (function existcafe$core$run_sketch(host){
return quil.core.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),existcafe.core.setup,new cljs.core.Keyword(null,"update","update",1045576396),existcafe.core.update_state,new cljs.core.Keyword(null,"draw","draw",1358331674),existcafe.core.draw_state,new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null));
});
goog.exportSymbol('existcafe.core.run_sketch', existcafe.core.run_sketch);

//# sourceMappingURL=core.js.map
