goog.provide('quickstart.balls');
quickstart.balls.setup = (function quickstart$balls$setup(){
quil.core.frame_rate(((10) + cljs.core.rand_int((100))));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
quickstart.balls.update_state = (function quickstart$balls$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod((new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((2))),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(0.5))], null);
});
quickstart.balls.draw_state = (function quickstart$balls$draw_state(state){
quil.core.background.cljs$core$IFn$_invoke$arity$1((240));

quil.core.fill.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((50) * quil.core.cos(angle));
var y = ((50) * quil.core.sin(angle));
var tr__17106__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__17106__auto__);

return quil.core.ellipse(x,y,((25) + cljs.core.rand_int((100))),((25) + cljs.core.rand_int((100))));
}finally {quil.core.pop_matrix();
}});
quickstart.balls.run_sketch = (function quickstart$balls$run_sketch(host){
return quil.core.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),quickstart.balls.setup,new cljs.core.Keyword(null,"update","update",1045576396),quickstart.balls.update_state,new cljs.core.Keyword(null,"draw","draw",1358331674),quickstart.balls.draw_state,new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null)], 0));
});
goog.exportSymbol('quickstart.balls.run_sketch', quickstart.balls.run_sketch);

//# sourceMappingURL=quickstart.balls.js.map
