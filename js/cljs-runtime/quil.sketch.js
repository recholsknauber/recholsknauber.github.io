goog.provide('quil.sketch');
goog.scope(function(){
  quil.sketch.goog$module$goog$object = goog.module.get('goog.object');
});
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"java2d","java2d",166099237),(p5.prototype["JAVA2D"]),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),(p5.prototype["P2D"]),new cljs.core.Keyword(null,"p3d","p3d",-850380194),(p5.prototype["P3D"]),new cljs.core.Keyword(null,"opengl","opengl",-614998103),(p5.prototype["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p3d","p3d",-850380194),mode)){
return (p5.prototype["WEBGL"]);
} else {
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
}
});
quil.sketch.set_size = (function quil$sketch$set_size(applet,width,height){
var temp__5804__auto__ = applet.quil_canvas;
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
var inner_canvas = el.querySelector("canvas");
applet.resizeCanvas(width,height);

inner_canvas.setAttribute("width",width);

inner_canvas.setAttribute("height",height);

(inner_canvas.style["width"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join(''));

(inner_canvas.style["height"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join(''));

(applet.width = window.parseInt(goog.style.getComputedStyle(inner_canvas,"width")));

return (applet.height = window.parseInt(goog.style.getComputedStyle(inner_canvas,"height")));
} else {
return null;
}
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__16491 = arguments.length;
switch (G__16491) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().createCanvas((width | (0)),(height | (0)));
}));

(quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().createCanvas((width | (0)),(height | (0)),quil.sketch.resolve_renderer(mode));
}));

(quil.sketch.size.cljs$lang$maxFixedArity = 3);

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__16492 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"mouseWheel","mouseWheel",-1057803856),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__16493 = null;
var count__16494 = (0);
var i__16495 = (0);
while(true){
if((i__16495 < count__16494)){
var vec__16506 = chunk__16493.cljs$core$IIndexed$_nth$arity$2(null,i__16495);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16506,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16506,(1),null);
var temp__5804__auto___16531 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5804__auto___16531)){
var handler_16532 = temp__5804__auto___16531;
(prc[cljs.core.name(processing_name)] = ((function (seq__16492,chunk__16493,count__16494,i__16495,handler_16532,temp__5804__auto___16531,vec__16506,processing_name,quil_name){
return (function() { 
var G__16533__delegate = function (args){
var _STAR_applet_STAR__orig_val__16509 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__16510 = prc;
(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__16510);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_16532,args);
}finally {(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__16509);
}};
var G__16533 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16534__i = 0, G__16534__a = new Array(arguments.length -  0);
while (G__16534__i < G__16534__a.length) {G__16534__a[G__16534__i] = arguments[G__16534__i + 0]; ++G__16534__i;}
  args = new cljs.core.IndexedSeq(G__16534__a,0,null);
} 
return G__16533__delegate.call(this,args);};
G__16533.cljs$lang$maxFixedArity = 0;
G__16533.cljs$lang$applyTo = (function (arglist__16535){
var args = cljs.core.seq(arglist__16535);
return G__16533__delegate(args);
});
G__16533.cljs$core$IFn$_invoke$arity$variadic = G__16533__delegate;
return G__16533;
})()
;})(seq__16492,chunk__16493,count__16494,i__16495,handler_16532,temp__5804__auto___16531,vec__16506,processing_name,quil_name))
);
} else {
}


var G__16536 = seq__16492;
var G__16537 = chunk__16493;
var G__16538 = count__16494;
var G__16539 = (i__16495 + (1));
seq__16492 = G__16536;
chunk__16493 = G__16537;
count__16494 = G__16538;
i__16495 = G__16539;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16492);
if(temp__5804__auto__){
var seq__16492__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16492__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16492__$1);
var G__16540 = cljs.core.chunk_rest(seq__16492__$1);
var G__16541 = c__5568__auto__;
var G__16542 = cljs.core.count(c__5568__auto__);
var G__16543 = (0);
seq__16492 = G__16540;
chunk__16493 = G__16541;
count__16494 = G__16542;
i__16495 = G__16543;
continue;
} else {
var vec__16511 = cljs.core.first(seq__16492__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16511,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16511,(1),null);
var temp__5804__auto___16544__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5804__auto___16544__$1)){
var handler_16545 = temp__5804__auto___16544__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__16492,chunk__16493,count__16494,i__16495,handler_16545,temp__5804__auto___16544__$1,vec__16511,processing_name,quil_name,seq__16492__$1,temp__5804__auto__){
return (function() { 
var G__16546__delegate = function (args){
var _STAR_applet_STAR__orig_val__16514 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__16515 = prc;
(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__16515);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(handler_16545,args);
}finally {(quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__16514);
}};
var G__16546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16547__i = 0, G__16547__a = new Array(arguments.length -  0);
while (G__16547__i < G__16547__a.length) {G__16547__a[G__16547__i] = arguments[G__16547__i + 0]; ++G__16547__i;}
  args = new cljs.core.IndexedSeq(G__16547__a,0,null);
} 
return G__16546__delegate.call(this,args);};
G__16546.cljs$lang$maxFixedArity = 0;
G__16546.cljs$lang$applyTo = (function (arglist__16548){
var args = cljs.core.seq(arglist__16548);
return G__16546__delegate(args);
});
G__16546.cljs$core$IFn$_invoke$arity$variadic = G__16546__delegate;
return G__16546;
})()
;})(seq__16492,chunk__16493,count__16494,i__16495,handler_16545,temp__5804__auto___16544__$1,vec__16511,processing_name,quil_name,seq__16492__$1,temp__5804__auto__))
);
} else {
}


var G__16549 = cljs.core.next(seq__16492__$1);
var G__16550 = null;
var G__16551 = (0);
var G__16552 = (0);
seq__16492 = G__16549;
chunk__16493 = G__16550;
count__16494 = G__16551;
i__16495 = G__16552;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.in_fullscreen_QMARK_ = (function quil$sketch$in_fullscreen_QMARK_(){
var or__5045__auto__ = document.fullscreenElement;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return document.mozFullScreenElement;
}
});
/**
 * Adds fullscreen support for the provided `p5` object.
 *   Fullscreen is enabled when the user presses `F11`. We turn
 *   the sketch `<canvas>` element to fullscreen storing the old size
 *   in an `atom`. When the user cancels fullscreen (`F11` or `Esc`)
 *   we resize the sketch back to the old size.
 */
quil.sketch.add_fullscreen_support = (function quil$sketch$add_fullscreen_support(applet){
var old_size = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var adjust_canvas_size = (function (){
if(cljs.core.truth_(quil.sketch.in_fullscreen_QMARK_())){
cljs.core.reset_BANG_(old_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [applet.width,applet.height], null));

return quil.sketch.set_size(applet,window.screen.width,window.screen.height);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(quil.sketch.set_size,applet,cljs.core.deref(old_size));
}
});
goog.events.listen(window,goog.events.EventType.KEYDOWN,(function (event){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"F11")) && (cljs.core.not(quil.sketch.in_fullscreen_QMARK_())))){
event.preventDefault();

var canvas = applet.quil_canvas;
if(cljs.core.truth_(canvas.requestFullscreen)){
return canvas.requestFullscreen();
} else {
if(cljs.core.truth_(canvas.mozRequestFullScreen)){
return canvas.mozRequestFullScreen();
} else {
return console.warn("Fullscreen mode is not supported in current browser.");

}
}
} else {
return null;
}
}));

goog.events.listen(document,"fullscreenchange",adjust_canvas_size);

goog.events.listen(document,"mozfullscreenchange",adjust_canvas_size);

return goog.events.listen(document,"fullscreenerror",(function (p1__16516_SHARP_){
return console.error("Error while switching to/from fullscreen: ",p1__16516_SHARP_);
}));
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__16517_SHARP_){
return (p1__16517_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16517_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__16517_SHARP_.call(null,options));
})(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY))))], 0));
var sketch_size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);
var renderer = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(opts));
var setup = (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__16518_16553 = new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__16518_16553.cljs$core$IFn$_invoke$arity$0 ? fexpr__16518_16553.cljs$core$IFn$_invoke$arity$0() : fexpr__16518_16553.call(null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__16519 = new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__16519.cljs$core$IFn$_invoke$arity$0 ? fexpr__16519.cljs$core$IFn$_invoke$arity$0() : fexpr__16519.call(null));
} else {
return null;
}
});
var mouse_wheel = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5804__auto__)){
var wheel_handler = temp__5804__auto__;
return (function (evt){
var G__16520 = quil.sketch.goog$module$goog$object.get(evt,"delta");
return (wheel_handler.cljs$core$IFn$_invoke$arity$1 ? wheel_handler.cljs$core$IFn$_invoke$arity$1(G__16520) : wheel_handler.call(null,G__16520));
});
} else {
return null;
}
})();
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"setup","setup",1987730512),setup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),mouse_wheel], 0));
var sketch = (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

(prc.quil = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null));

return (prc.quil_internal_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(quil.util.initial_internal_state));
});
return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5804__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5804__auto__)){
var proc_obj = temp__5804__auto__;
return proc_obj.remove();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16554 = arguments.length;
var i__5770__auto___16555 = (0);
while(true){
if((i__5770__auto___16555 < len__5769__auto___16554)){
args__5775__auto__.push((arguments[i__5770__auto___16555]));

var G__16556 = (i__5770__auto___16555 + (1));
i__5770__auto___16555 = G__16556;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map);
var renderer = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"p2d","p2d",-2106175755);
}
})();
var host_elem__$1 = ((typeof host_elem === 'string')?document.getElementById(host_elem):host_elem);
if(cljs.core.truth_(host_elem__$1)){
if(cljs.core.truth_(host_elem__$1.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem__$1.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
(host_elem__$1.processing_context = renderer);
}

quil.sketch.destroy_previous_sketch(host_elem__$1);

var proc_obj = (new p5(quil.sketch.make_sketch(opts_map),host_elem__$1));
(host_elem__$1.processing_obj = proc_obj);

(proc_obj.quil_canvas = host_elem__$1);

quil.sketch.add_fullscreen_support(proc_obj);

return proc_obj;
} else {
return console.error((cljs.core.truth_(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map))?["ERROR: Cannot find host element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map))].join(''):"ERROR: Cannot create sketch. :host is not specified or element not found."));
}
}));

(quil.sketch.sketch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(quil.sketch.sketch.cljs$lang$applyTo = (function (seq16521){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16521));
}));

quil.sketch.sketch_init_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__16557 = quil.sketch.empty_body_QMARK_();
var seq__16522_16558 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__16523_16559 = null;
var count__16524_16560 = (0);
var i__16525_16561 = (0);
while(true){
if((i__16525_16561 < count__16524_16560)){
var sk_16562 = chunk__16523_16559.cljs$core$IIndexed$_nth$arity$2(null,i__16525_16561);
if(add_elem_QMARK__16557){
quil.sketch.add_canvas(new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_16562));
} else {
}

var fexpr__16528_16563 = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_16562);
(fexpr__16528_16563.cljs$core$IFn$_invoke$arity$0 ? fexpr__16528_16563.cljs$core$IFn$_invoke$arity$0() : fexpr__16528_16563.call(null));


var G__16564 = seq__16522_16558;
var G__16565 = chunk__16523_16559;
var G__16566 = count__16524_16560;
var G__16567 = (i__16525_16561 + (1));
seq__16522_16558 = G__16564;
chunk__16523_16559 = G__16565;
count__16524_16560 = G__16566;
i__16525_16561 = G__16567;
continue;
} else {
var temp__5804__auto___16568 = cljs.core.seq(seq__16522_16558);
if(temp__5804__auto___16568){
var seq__16522_16569__$1 = temp__5804__auto___16568;
if(cljs.core.chunked_seq_QMARK_(seq__16522_16569__$1)){
var c__5568__auto___16570 = cljs.core.chunk_first(seq__16522_16569__$1);
var G__16571 = cljs.core.chunk_rest(seq__16522_16569__$1);
var G__16572 = c__5568__auto___16570;
var G__16573 = cljs.core.count(c__5568__auto___16570);
var G__16574 = (0);
seq__16522_16558 = G__16571;
chunk__16523_16559 = G__16572;
count__16524_16560 = G__16573;
i__16525_16561 = G__16574;
continue;
} else {
var sk_16575 = cljs.core.first(seq__16522_16569__$1);
if(add_elem_QMARK__16557){
quil.sketch.add_canvas(new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_16575));
} else {
}

var fexpr__16529_16576 = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_16575);
(fexpr__16529_16576.cljs$core$IFn$_invoke$arity$0 ? fexpr__16529_16576.cljs$core$IFn$_invoke$arity$0() : fexpr__16529_16576.call(null));


var G__16577 = cljs.core.next(seq__16522_16569__$1);
var G__16578 = null;
var G__16579 = (0);
var G__16580 = (0);
seq__16522_16558 = G__16577;
chunk__16523_16559 = G__16578;
count__16524_16560 = G__16579;
i__16525_16561 = G__16580;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);

//# sourceMappingURL=quil.sketch.js.map
