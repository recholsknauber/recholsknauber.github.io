goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_24715 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_24715(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_24716 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_24716(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__23439 = coll;
var G__23440 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__23439,G__23440) : shadow.dom.lazy_native_coll_seq.call(null,G__23439,G__23440));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__23482 = arguments.length;
switch (G__23482) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__23489 = arguments.length;
switch (G__23489) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__23501 = arguments.length;
switch (G__23501) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__23511 = arguments.length;
switch (G__23511) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__23537 = arguments.length;
switch (G__23537) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__23551 = arguments.length;
switch (G__23551) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e23557){if((e23557 instanceof Object)){
var e = e23557;
return console.log("didnt support attachEvent",el,e);
} else {
throw e23557;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__23571 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__23572 = null;
var count__23573 = (0);
var i__23574 = (0);
while(true){
if((i__23574 < count__23573)){
var el = chunk__23572.cljs$core$IIndexed$_nth$arity$2(null,i__23574);
var handler_24726__$1 = ((function (seq__23571,chunk__23572,count__23573,i__23574,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__23571,chunk__23572,count__23573,i__23574,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_24726__$1);


var G__24727 = seq__23571;
var G__24728 = chunk__23572;
var G__24729 = count__23573;
var G__24730 = (i__23574 + (1));
seq__23571 = G__24727;
chunk__23572 = G__24728;
count__23573 = G__24729;
i__23574 = G__24730;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23571);
if(temp__5804__auto__){
var seq__23571__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23571__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23571__$1);
var G__24731 = cljs.core.chunk_rest(seq__23571__$1);
var G__24732 = c__5568__auto__;
var G__24733 = cljs.core.count(c__5568__auto__);
var G__24734 = (0);
seq__23571 = G__24731;
chunk__23572 = G__24732;
count__23573 = G__24733;
i__23574 = G__24734;
continue;
} else {
var el = cljs.core.first(seq__23571__$1);
var handler_24735__$1 = ((function (seq__23571,chunk__23572,count__23573,i__23574,el,seq__23571__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__23571,chunk__23572,count__23573,i__23574,el,seq__23571__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_24735__$1);


var G__24737 = cljs.core.next(seq__23571__$1);
var G__24738 = null;
var G__24739 = (0);
var G__24740 = (0);
seq__23571 = G__24737;
chunk__23572 = G__24738;
count__23573 = G__24739;
i__23574 = G__24740;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__23600 = arguments.length;
switch (G__23600) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__23634 = cljs.core.seq(events);
var chunk__23635 = null;
var count__23636 = (0);
var i__23637 = (0);
while(true){
if((i__23637 < count__23636)){
var vec__23656 = chunk__23635.cljs$core$IIndexed$_nth$arity$2(null,i__23637);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23656,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23656,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__24743 = seq__23634;
var G__24744 = chunk__23635;
var G__24745 = count__23636;
var G__24746 = (i__23637 + (1));
seq__23634 = G__24743;
chunk__23635 = G__24744;
count__23636 = G__24745;
i__23637 = G__24746;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23634);
if(temp__5804__auto__){
var seq__23634__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23634__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23634__$1);
var G__24747 = cljs.core.chunk_rest(seq__23634__$1);
var G__24748 = c__5568__auto__;
var G__24749 = cljs.core.count(c__5568__auto__);
var G__24750 = (0);
seq__23634 = G__24747;
chunk__23635 = G__24748;
count__23636 = G__24749;
i__23637 = G__24750;
continue;
} else {
var vec__23662 = cljs.core.first(seq__23634__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23662,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23662,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__24751 = cljs.core.next(seq__23634__$1);
var G__24752 = null;
var G__24753 = (0);
var G__24754 = (0);
seq__23634 = G__24751;
chunk__23635 = G__24752;
count__23636 = G__24753;
i__23637 = G__24754;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__23669 = cljs.core.seq(styles);
var chunk__23670 = null;
var count__23671 = (0);
var i__23672 = (0);
while(true){
if((i__23672 < count__23671)){
var vec__23684 = chunk__23670.cljs$core$IIndexed$_nth$arity$2(null,i__23672);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23684,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23684,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__24755 = seq__23669;
var G__24756 = chunk__23670;
var G__24757 = count__23671;
var G__24758 = (i__23672 + (1));
seq__23669 = G__24755;
chunk__23670 = G__24756;
count__23671 = G__24757;
i__23672 = G__24758;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23669);
if(temp__5804__auto__){
var seq__23669__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23669__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23669__$1);
var G__24759 = cljs.core.chunk_rest(seq__23669__$1);
var G__24760 = c__5568__auto__;
var G__24761 = cljs.core.count(c__5568__auto__);
var G__24762 = (0);
seq__23669 = G__24759;
chunk__23670 = G__24760;
count__23671 = G__24761;
i__23672 = G__24762;
continue;
} else {
var vec__23700 = cljs.core.first(seq__23669__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23700,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23700,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__24763 = cljs.core.next(seq__23669__$1);
var G__24764 = null;
var G__24765 = (0);
var G__24766 = (0);
seq__23669 = G__24763;
chunk__23670 = G__24764;
count__23671 = G__24765;
i__23672 = G__24766;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__23707_24767 = key;
var G__23707_24768__$1 = (((G__23707_24767 instanceof cljs.core.Keyword))?G__23707_24767.fqn:null);
switch (G__23707_24768__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_24772 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_24772,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_24772,"aria-");
}
})())){
el.setAttribute(ks_24772,value);
} else {
(el[ks_24772] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__23746){
var map__23751 = p__23746;
var map__23751__$1 = cljs.core.__destructure_map(map__23751);
var props = map__23751__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23751__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__23756 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23756,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23756,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23756,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__23763 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__23763,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__23763;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__23771 = arguments.length;
switch (G__23771) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__23789){
var vec__23791 = p__23789;
var seq__23792 = cljs.core.seq(vec__23791);
var first__23793 = cljs.core.first(seq__23792);
var seq__23792__$1 = cljs.core.next(seq__23792);
var nn = first__23793;
var first__23793__$1 = cljs.core.first(seq__23792__$1);
var seq__23792__$2 = cljs.core.next(seq__23792__$1);
var np = first__23793__$1;
var nc = seq__23792__$2;
var node = vec__23791;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23799 = nn;
var G__23800 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__23799,G__23800) : create_fn.call(null,G__23799,G__23800));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__23807 = nn;
var G__23808 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__23807,G__23808) : create_fn.call(null,G__23807,G__23808));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__23823 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23823,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23823,(1),null);
var seq__23830_24776 = cljs.core.seq(node_children);
var chunk__23831_24777 = null;
var count__23832_24778 = (0);
var i__23833_24779 = (0);
while(true){
if((i__23833_24779 < count__23832_24778)){
var child_struct_24780 = chunk__23831_24777.cljs$core$IIndexed$_nth$arity$2(null,i__23833_24779);
var children_24782 = shadow.dom.dom_node(child_struct_24780);
if(cljs.core.seq_QMARK_(children_24782)){
var seq__23925_24784 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_24782));
var chunk__23927_24785 = null;
var count__23928_24786 = (0);
var i__23929_24787 = (0);
while(true){
if((i__23929_24787 < count__23928_24786)){
var child_24788 = chunk__23927_24785.cljs$core$IIndexed$_nth$arity$2(null,i__23929_24787);
if(cljs.core.truth_(child_24788)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24788);


var G__24789 = seq__23925_24784;
var G__24790 = chunk__23927_24785;
var G__24791 = count__23928_24786;
var G__24792 = (i__23929_24787 + (1));
seq__23925_24784 = G__24789;
chunk__23927_24785 = G__24790;
count__23928_24786 = G__24791;
i__23929_24787 = G__24792;
continue;
} else {
var G__24794 = seq__23925_24784;
var G__24795 = chunk__23927_24785;
var G__24796 = count__23928_24786;
var G__24797 = (i__23929_24787 + (1));
seq__23925_24784 = G__24794;
chunk__23927_24785 = G__24795;
count__23928_24786 = G__24796;
i__23929_24787 = G__24797;
continue;
}
} else {
var temp__5804__auto___24798 = cljs.core.seq(seq__23925_24784);
if(temp__5804__auto___24798){
var seq__23925_24799__$1 = temp__5804__auto___24798;
if(cljs.core.chunked_seq_QMARK_(seq__23925_24799__$1)){
var c__5568__auto___24800 = cljs.core.chunk_first(seq__23925_24799__$1);
var G__24801 = cljs.core.chunk_rest(seq__23925_24799__$1);
var G__24802 = c__5568__auto___24800;
var G__24803 = cljs.core.count(c__5568__auto___24800);
var G__24804 = (0);
seq__23925_24784 = G__24801;
chunk__23927_24785 = G__24802;
count__23928_24786 = G__24803;
i__23929_24787 = G__24804;
continue;
} else {
var child_24805 = cljs.core.first(seq__23925_24799__$1);
if(cljs.core.truth_(child_24805)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24805);


var G__24808 = cljs.core.next(seq__23925_24799__$1);
var G__24809 = null;
var G__24810 = (0);
var G__24811 = (0);
seq__23925_24784 = G__24808;
chunk__23927_24785 = G__24809;
count__23928_24786 = G__24810;
i__23929_24787 = G__24811;
continue;
} else {
var G__24812 = cljs.core.next(seq__23925_24799__$1);
var G__24813 = null;
var G__24814 = (0);
var G__24815 = (0);
seq__23925_24784 = G__24812;
chunk__23927_24785 = G__24813;
count__23928_24786 = G__24814;
i__23929_24787 = G__24815;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_24782);
}


var G__24816 = seq__23830_24776;
var G__24817 = chunk__23831_24777;
var G__24818 = count__23832_24778;
var G__24819 = (i__23833_24779 + (1));
seq__23830_24776 = G__24816;
chunk__23831_24777 = G__24817;
count__23832_24778 = G__24818;
i__23833_24779 = G__24819;
continue;
} else {
var temp__5804__auto___24820 = cljs.core.seq(seq__23830_24776);
if(temp__5804__auto___24820){
var seq__23830_24821__$1 = temp__5804__auto___24820;
if(cljs.core.chunked_seq_QMARK_(seq__23830_24821__$1)){
var c__5568__auto___24822 = cljs.core.chunk_first(seq__23830_24821__$1);
var G__24824 = cljs.core.chunk_rest(seq__23830_24821__$1);
var G__24825 = c__5568__auto___24822;
var G__24826 = cljs.core.count(c__5568__auto___24822);
var G__24827 = (0);
seq__23830_24776 = G__24824;
chunk__23831_24777 = G__24825;
count__23832_24778 = G__24826;
i__23833_24779 = G__24827;
continue;
} else {
var child_struct_24828 = cljs.core.first(seq__23830_24821__$1);
var children_24829 = shadow.dom.dom_node(child_struct_24828);
if(cljs.core.seq_QMARK_(children_24829)){
var seq__23968_24830 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_24829));
var chunk__23970_24831 = null;
var count__23971_24832 = (0);
var i__23972_24833 = (0);
while(true){
if((i__23972_24833 < count__23971_24832)){
var child_24834 = chunk__23970_24831.cljs$core$IIndexed$_nth$arity$2(null,i__23972_24833);
if(cljs.core.truth_(child_24834)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24834);


var G__24835 = seq__23968_24830;
var G__24836 = chunk__23970_24831;
var G__24837 = count__23971_24832;
var G__24838 = (i__23972_24833 + (1));
seq__23968_24830 = G__24835;
chunk__23970_24831 = G__24836;
count__23971_24832 = G__24837;
i__23972_24833 = G__24838;
continue;
} else {
var G__24839 = seq__23968_24830;
var G__24840 = chunk__23970_24831;
var G__24841 = count__23971_24832;
var G__24842 = (i__23972_24833 + (1));
seq__23968_24830 = G__24839;
chunk__23970_24831 = G__24840;
count__23971_24832 = G__24841;
i__23972_24833 = G__24842;
continue;
}
} else {
var temp__5804__auto___24843__$1 = cljs.core.seq(seq__23968_24830);
if(temp__5804__auto___24843__$1){
var seq__23968_24844__$1 = temp__5804__auto___24843__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23968_24844__$1)){
var c__5568__auto___24845 = cljs.core.chunk_first(seq__23968_24844__$1);
var G__24846 = cljs.core.chunk_rest(seq__23968_24844__$1);
var G__24847 = c__5568__auto___24845;
var G__24848 = cljs.core.count(c__5568__auto___24845);
var G__24849 = (0);
seq__23968_24830 = G__24846;
chunk__23970_24831 = G__24847;
count__23971_24832 = G__24848;
i__23972_24833 = G__24849;
continue;
} else {
var child_24850 = cljs.core.first(seq__23968_24844__$1);
if(cljs.core.truth_(child_24850)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_24850);


var G__24851 = cljs.core.next(seq__23968_24844__$1);
var G__24852 = null;
var G__24853 = (0);
var G__24854 = (0);
seq__23968_24830 = G__24851;
chunk__23970_24831 = G__24852;
count__23971_24832 = G__24853;
i__23972_24833 = G__24854;
continue;
} else {
var G__24855 = cljs.core.next(seq__23968_24844__$1);
var G__24856 = null;
var G__24857 = (0);
var G__24858 = (0);
seq__23968_24830 = G__24855;
chunk__23970_24831 = G__24856;
count__23971_24832 = G__24857;
i__23972_24833 = G__24858;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_24829);
}


var G__24859 = cljs.core.next(seq__23830_24821__$1);
var G__24860 = null;
var G__24861 = (0);
var G__24862 = (0);
seq__23830_24776 = G__24859;
chunk__23831_24777 = G__24860;
count__23832_24778 = G__24861;
i__23833_24779 = G__24862;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__24062 = cljs.core.seq(node);
var chunk__24063 = null;
var count__24064 = (0);
var i__24065 = (0);
while(true){
if((i__24065 < count__24064)){
var n = chunk__24063.cljs$core$IIndexed$_nth$arity$2(null,i__24065);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__24868 = seq__24062;
var G__24869 = chunk__24063;
var G__24870 = count__24064;
var G__24871 = (i__24065 + (1));
seq__24062 = G__24868;
chunk__24063 = G__24869;
count__24064 = G__24870;
i__24065 = G__24871;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24062);
if(temp__5804__auto__){
var seq__24062__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24062__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24062__$1);
var G__24872 = cljs.core.chunk_rest(seq__24062__$1);
var G__24873 = c__5568__auto__;
var G__24874 = cljs.core.count(c__5568__auto__);
var G__24875 = (0);
seq__24062 = G__24872;
chunk__24063 = G__24873;
count__24064 = G__24874;
i__24065 = G__24875;
continue;
} else {
var n = cljs.core.first(seq__24062__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__24876 = cljs.core.next(seq__24062__$1);
var G__24877 = null;
var G__24878 = (0);
var G__24879 = (0);
seq__24062 = G__24876;
chunk__24063 = G__24877;
count__24064 = G__24878;
i__24065 = G__24879;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__24080 = arguments.length;
switch (G__24080) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__24091 = arguments.length;
switch (G__24091) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__24123 = arguments.length;
switch (G__24123) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24943 = arguments.length;
var i__5770__auto___24944 = (0);
while(true){
if((i__5770__auto___24944 < len__5769__auto___24943)){
args__5775__auto__.push((arguments[i__5770__auto___24944]));

var G__24945 = (i__5770__auto___24944 + (1));
i__5770__auto___24944 = G__24945;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__24170_24946 = cljs.core.seq(nodes);
var chunk__24171_24947 = null;
var count__24172_24948 = (0);
var i__24173_24949 = (0);
while(true){
if((i__24173_24949 < count__24172_24948)){
var node_24950 = chunk__24171_24947.cljs$core$IIndexed$_nth$arity$2(null,i__24173_24949);
fragment.appendChild(shadow.dom._to_dom(node_24950));


var G__24951 = seq__24170_24946;
var G__24952 = chunk__24171_24947;
var G__24953 = count__24172_24948;
var G__24954 = (i__24173_24949 + (1));
seq__24170_24946 = G__24951;
chunk__24171_24947 = G__24952;
count__24172_24948 = G__24953;
i__24173_24949 = G__24954;
continue;
} else {
var temp__5804__auto___24955 = cljs.core.seq(seq__24170_24946);
if(temp__5804__auto___24955){
var seq__24170_24956__$1 = temp__5804__auto___24955;
if(cljs.core.chunked_seq_QMARK_(seq__24170_24956__$1)){
var c__5568__auto___24957 = cljs.core.chunk_first(seq__24170_24956__$1);
var G__24958 = cljs.core.chunk_rest(seq__24170_24956__$1);
var G__24959 = c__5568__auto___24957;
var G__24960 = cljs.core.count(c__5568__auto___24957);
var G__24961 = (0);
seq__24170_24946 = G__24958;
chunk__24171_24947 = G__24959;
count__24172_24948 = G__24960;
i__24173_24949 = G__24961;
continue;
} else {
var node_24962 = cljs.core.first(seq__24170_24956__$1);
fragment.appendChild(shadow.dom._to_dom(node_24962));


var G__24964 = cljs.core.next(seq__24170_24956__$1);
var G__24965 = null;
var G__24966 = (0);
var G__24967 = (0);
seq__24170_24946 = G__24964;
chunk__24171_24947 = G__24965;
count__24172_24948 = G__24966;
i__24173_24949 = G__24967;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq24166){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24166));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__24244_24971 = cljs.core.seq(scripts);
var chunk__24245_24972 = null;
var count__24246_24973 = (0);
var i__24247_24974 = (0);
while(true){
if((i__24247_24974 < count__24246_24973)){
var vec__24260_24975 = chunk__24245_24972.cljs$core$IIndexed$_nth$arity$2(null,i__24247_24974);
var script_tag_24976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24260_24975,(0),null);
var script_body_24977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24260_24975,(1),null);
eval(script_body_24977);


var G__24978 = seq__24244_24971;
var G__24979 = chunk__24245_24972;
var G__24980 = count__24246_24973;
var G__24981 = (i__24247_24974 + (1));
seq__24244_24971 = G__24978;
chunk__24245_24972 = G__24979;
count__24246_24973 = G__24980;
i__24247_24974 = G__24981;
continue;
} else {
var temp__5804__auto___24982 = cljs.core.seq(seq__24244_24971);
if(temp__5804__auto___24982){
var seq__24244_24983__$1 = temp__5804__auto___24982;
if(cljs.core.chunked_seq_QMARK_(seq__24244_24983__$1)){
var c__5568__auto___24984 = cljs.core.chunk_first(seq__24244_24983__$1);
var G__24985 = cljs.core.chunk_rest(seq__24244_24983__$1);
var G__24986 = c__5568__auto___24984;
var G__24987 = cljs.core.count(c__5568__auto___24984);
var G__24988 = (0);
seq__24244_24971 = G__24985;
chunk__24245_24972 = G__24986;
count__24246_24973 = G__24987;
i__24247_24974 = G__24988;
continue;
} else {
var vec__24265_24989 = cljs.core.first(seq__24244_24983__$1);
var script_tag_24990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24265_24989,(0),null);
var script_body_24991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24265_24989,(1),null);
eval(script_body_24991);


var G__24992 = cljs.core.next(seq__24244_24983__$1);
var G__24993 = null;
var G__24994 = (0);
var G__24995 = (0);
seq__24244_24971 = G__24992;
chunk__24245_24972 = G__24993;
count__24246_24973 = G__24994;
i__24247_24974 = G__24995;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__24269){
var vec__24271 = p__24269;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24271,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24271,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__24287 = arguments.length;
switch (G__24287) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__24293 = cljs.core.seq(style_keys);
var chunk__24294 = null;
var count__24295 = (0);
var i__24296 = (0);
while(true){
if((i__24296 < count__24295)){
var it = chunk__24294.cljs$core$IIndexed$_nth$arity$2(null,i__24296);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__25006 = seq__24293;
var G__25007 = chunk__24294;
var G__25008 = count__24295;
var G__25009 = (i__24296 + (1));
seq__24293 = G__25006;
chunk__24294 = G__25007;
count__24295 = G__25008;
i__24296 = G__25009;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24293);
if(temp__5804__auto__){
var seq__24293__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24293__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24293__$1);
var G__25010 = cljs.core.chunk_rest(seq__24293__$1);
var G__25011 = c__5568__auto__;
var G__25012 = cljs.core.count(c__5568__auto__);
var G__25013 = (0);
seq__24293 = G__25010;
chunk__24294 = G__25011;
count__24295 = G__25012;
i__24296 = G__25013;
continue;
} else {
var it = cljs.core.first(seq__24293__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__25014 = cljs.core.next(seq__24293__$1);
var G__25015 = null;
var G__25016 = (0);
var G__25017 = (0);
seq__24293 = G__25014;
chunk__24294 = G__25015;
count__24295 = G__25016;
i__24296 = G__25017;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k24338,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__24351 = k24338;
var G__24351__$1 = (((G__24351 instanceof cljs.core.Keyword))?G__24351.fqn:null);
switch (G__24351__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24338,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__24355){
var vec__24356 = p__24355;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24356,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24356,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24337){
var self__ = this;
var G__24337__$1 = this;
return (new cljs.core.RecordIter((0),G__24337__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24339,other24340){
var self__ = this;
var this24339__$1 = this;
return (((!((other24340 == null)))) && ((((this24339__$1.constructor === other24340.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24339__$1.x,other24340.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24339__$1.y,other24340.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24339__$1.__extmap,other24340.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k24338){
var self__ = this;
var this__5350__auto____$1 = this;
var G__24399 = k24338;
var G__24399__$1 = (((G__24399 instanceof cljs.core.Keyword))?G__24399.fqn:null);
switch (G__24399__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k24338);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__24337){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__24402 = cljs.core.keyword_identical_QMARK_;
var expr__24403 = k__5352__auto__;
if(cljs.core.truth_((pred__24402.cljs$core$IFn$_invoke$arity$2 ? pred__24402.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__24403) : pred__24402.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__24403)))){
return (new shadow.dom.Coordinate(G__24337,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24402.cljs$core$IFn$_invoke$arity$2 ? pred__24402.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__24403) : pred__24402.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__24403)))){
return (new shadow.dom.Coordinate(self__.x,G__24337,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__24337),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__24337){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__24337,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__24344){
var extmap__5385__auto__ = (function (){var G__24464 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24344,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__24344)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24464);
} else {
return G__24464;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__24344),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__24344),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k24468,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__24472 = k24468;
var G__24472__$1 = (((G__24472 instanceof cljs.core.Keyword))?G__24472.fqn:null);
switch (G__24472__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24468,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__24473){
var vec__24474 = p__24473;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24474,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24474,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24467){
var self__ = this;
var G__24467__$1 = this;
return (new cljs.core.RecordIter((0),G__24467__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24469,other24470){
var self__ = this;
var this24469__$1 = this;
return (((!((other24470 == null)))) && ((((this24469__$1.constructor === other24470.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24469__$1.w,other24470.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24469__$1.h,other24470.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24469__$1.__extmap,other24470.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k24468){
var self__ = this;
var this__5350__auto____$1 = this;
var G__24516 = k24468;
var G__24516__$1 = (((G__24516 instanceof cljs.core.Keyword))?G__24516.fqn:null);
switch (G__24516__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k24468);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__24467){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__24517 = cljs.core.keyword_identical_QMARK_;
var expr__24518 = k__5352__auto__;
if(cljs.core.truth_((pred__24517.cljs$core$IFn$_invoke$arity$2 ? pred__24517.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__24518) : pred__24517.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__24518)))){
return (new shadow.dom.Size(G__24467,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__24517.cljs$core$IFn$_invoke$arity$2 ? pred__24517.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__24518) : pred__24517.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__24518)))){
return (new shadow.dom.Size(self__.w,G__24467,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__24467),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__24467){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__24467,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__24471){
var extmap__5385__auto__ = (function (){var G__24520 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24471,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__24471)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24520);
} else {
return G__24520;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__24471),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__24471),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__25083 = (i + (1));
var G__25084 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__25083;
ret = G__25084;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24541){
var vec__24542 = p__24541;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24542,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24542,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__24546 = arguments.length;
switch (G__24546) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__25091 = ps;
var G__25092 = (i + (1));
el__$1 = G__25091;
i = G__25092;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__24585 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24585,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24585,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24585,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__24592_25094 = cljs.core.seq(props);
var chunk__24593_25095 = null;
var count__24594_25096 = (0);
var i__24595_25097 = (0);
while(true){
if((i__24595_25097 < count__24594_25096)){
var vec__24602_25098 = chunk__24593_25095.cljs$core$IIndexed$_nth$arity$2(null,i__24595_25097);
var k_25099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24602_25098,(0),null);
var v_25100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24602_25098,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_25099);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_25099),v_25100);


var G__25101 = seq__24592_25094;
var G__25102 = chunk__24593_25095;
var G__25103 = count__24594_25096;
var G__25104 = (i__24595_25097 + (1));
seq__24592_25094 = G__25101;
chunk__24593_25095 = G__25102;
count__24594_25096 = G__25103;
i__24595_25097 = G__25104;
continue;
} else {
var temp__5804__auto___25105 = cljs.core.seq(seq__24592_25094);
if(temp__5804__auto___25105){
var seq__24592_25106__$1 = temp__5804__auto___25105;
if(cljs.core.chunked_seq_QMARK_(seq__24592_25106__$1)){
var c__5568__auto___25107 = cljs.core.chunk_first(seq__24592_25106__$1);
var G__25108 = cljs.core.chunk_rest(seq__24592_25106__$1);
var G__25109 = c__5568__auto___25107;
var G__25110 = cljs.core.count(c__5568__auto___25107);
var G__25111 = (0);
seq__24592_25094 = G__25108;
chunk__24593_25095 = G__25109;
count__24594_25096 = G__25110;
i__24595_25097 = G__25111;
continue;
} else {
var vec__24605_25112 = cljs.core.first(seq__24592_25106__$1);
var k_25113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24605_25112,(0),null);
var v_25114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24605_25112,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_25113);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_25113),v_25114);


var G__25119 = cljs.core.next(seq__24592_25106__$1);
var G__25120 = null;
var G__25121 = (0);
var G__25122 = (0);
seq__24592_25094 = G__25119;
chunk__24593_25095 = G__25120;
count__24594_25096 = G__25121;
i__24595_25097 = G__25122;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__24609 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24609,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24609,(1),null);
var seq__24612_25124 = cljs.core.seq(node_children);
var chunk__24614_25125 = null;
var count__24615_25126 = (0);
var i__24616_25127 = (0);
while(true){
if((i__24616_25127 < count__24615_25126)){
var child_struct_25128 = chunk__24614_25125.cljs$core$IIndexed$_nth$arity$2(null,i__24616_25127);
if((!((child_struct_25128 == null)))){
if(typeof child_struct_25128 === 'string'){
var text_25129 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_25129),child_struct_25128].join(''));
} else {
var children_25130 = shadow.dom.svg_node(child_struct_25128);
if(cljs.core.seq_QMARK_(children_25130)){
var seq__24634_25131 = cljs.core.seq(children_25130);
var chunk__24636_25132 = null;
var count__24637_25133 = (0);
var i__24638_25134 = (0);
while(true){
if((i__24638_25134 < count__24637_25133)){
var child_25140 = chunk__24636_25132.cljs$core$IIndexed$_nth$arity$2(null,i__24638_25134);
if(cljs.core.truth_(child_25140)){
node.appendChild(child_25140);


var G__25141 = seq__24634_25131;
var G__25142 = chunk__24636_25132;
var G__25143 = count__24637_25133;
var G__25144 = (i__24638_25134 + (1));
seq__24634_25131 = G__25141;
chunk__24636_25132 = G__25142;
count__24637_25133 = G__25143;
i__24638_25134 = G__25144;
continue;
} else {
var G__25146 = seq__24634_25131;
var G__25147 = chunk__24636_25132;
var G__25148 = count__24637_25133;
var G__25149 = (i__24638_25134 + (1));
seq__24634_25131 = G__25146;
chunk__24636_25132 = G__25147;
count__24637_25133 = G__25148;
i__24638_25134 = G__25149;
continue;
}
} else {
var temp__5804__auto___25150 = cljs.core.seq(seq__24634_25131);
if(temp__5804__auto___25150){
var seq__24634_25151__$1 = temp__5804__auto___25150;
if(cljs.core.chunked_seq_QMARK_(seq__24634_25151__$1)){
var c__5568__auto___25152 = cljs.core.chunk_first(seq__24634_25151__$1);
var G__25153 = cljs.core.chunk_rest(seq__24634_25151__$1);
var G__25154 = c__5568__auto___25152;
var G__25155 = cljs.core.count(c__5568__auto___25152);
var G__25156 = (0);
seq__24634_25131 = G__25153;
chunk__24636_25132 = G__25154;
count__24637_25133 = G__25155;
i__24638_25134 = G__25156;
continue;
} else {
var child_25157 = cljs.core.first(seq__24634_25151__$1);
if(cljs.core.truth_(child_25157)){
node.appendChild(child_25157);


var G__25158 = cljs.core.next(seq__24634_25151__$1);
var G__25159 = null;
var G__25160 = (0);
var G__25161 = (0);
seq__24634_25131 = G__25158;
chunk__24636_25132 = G__25159;
count__24637_25133 = G__25160;
i__24638_25134 = G__25161;
continue;
} else {
var G__25162 = cljs.core.next(seq__24634_25151__$1);
var G__25163 = null;
var G__25164 = (0);
var G__25165 = (0);
seq__24634_25131 = G__25162;
chunk__24636_25132 = G__25163;
count__24637_25133 = G__25164;
i__24638_25134 = G__25165;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_25130);
}
}


var G__25166 = seq__24612_25124;
var G__25167 = chunk__24614_25125;
var G__25168 = count__24615_25126;
var G__25169 = (i__24616_25127 + (1));
seq__24612_25124 = G__25166;
chunk__24614_25125 = G__25167;
count__24615_25126 = G__25168;
i__24616_25127 = G__25169;
continue;
} else {
var G__25170 = seq__24612_25124;
var G__25171 = chunk__24614_25125;
var G__25172 = count__24615_25126;
var G__25173 = (i__24616_25127 + (1));
seq__24612_25124 = G__25170;
chunk__24614_25125 = G__25171;
count__24615_25126 = G__25172;
i__24616_25127 = G__25173;
continue;
}
} else {
var temp__5804__auto___25174 = cljs.core.seq(seq__24612_25124);
if(temp__5804__auto___25174){
var seq__24612_25175__$1 = temp__5804__auto___25174;
if(cljs.core.chunked_seq_QMARK_(seq__24612_25175__$1)){
var c__5568__auto___25176 = cljs.core.chunk_first(seq__24612_25175__$1);
var G__25177 = cljs.core.chunk_rest(seq__24612_25175__$1);
var G__25178 = c__5568__auto___25176;
var G__25179 = cljs.core.count(c__5568__auto___25176);
var G__25180 = (0);
seq__24612_25124 = G__25177;
chunk__24614_25125 = G__25178;
count__24615_25126 = G__25179;
i__24616_25127 = G__25180;
continue;
} else {
var child_struct_25181 = cljs.core.first(seq__24612_25175__$1);
if((!((child_struct_25181 == null)))){
if(typeof child_struct_25181 === 'string'){
var text_25182 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_25182),child_struct_25181].join(''));
} else {
var children_25183 = shadow.dom.svg_node(child_struct_25181);
if(cljs.core.seq_QMARK_(children_25183)){
var seq__24640_25184 = cljs.core.seq(children_25183);
var chunk__24642_25185 = null;
var count__24643_25186 = (0);
var i__24644_25187 = (0);
while(true){
if((i__24644_25187 < count__24643_25186)){
var child_25188 = chunk__24642_25185.cljs$core$IIndexed$_nth$arity$2(null,i__24644_25187);
if(cljs.core.truth_(child_25188)){
node.appendChild(child_25188);


var G__25189 = seq__24640_25184;
var G__25190 = chunk__24642_25185;
var G__25191 = count__24643_25186;
var G__25192 = (i__24644_25187 + (1));
seq__24640_25184 = G__25189;
chunk__24642_25185 = G__25190;
count__24643_25186 = G__25191;
i__24644_25187 = G__25192;
continue;
} else {
var G__25193 = seq__24640_25184;
var G__25194 = chunk__24642_25185;
var G__25195 = count__24643_25186;
var G__25196 = (i__24644_25187 + (1));
seq__24640_25184 = G__25193;
chunk__24642_25185 = G__25194;
count__24643_25186 = G__25195;
i__24644_25187 = G__25196;
continue;
}
} else {
var temp__5804__auto___25197__$1 = cljs.core.seq(seq__24640_25184);
if(temp__5804__auto___25197__$1){
var seq__24640_25198__$1 = temp__5804__auto___25197__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24640_25198__$1)){
var c__5568__auto___25199 = cljs.core.chunk_first(seq__24640_25198__$1);
var G__25200 = cljs.core.chunk_rest(seq__24640_25198__$1);
var G__25201 = c__5568__auto___25199;
var G__25202 = cljs.core.count(c__5568__auto___25199);
var G__25203 = (0);
seq__24640_25184 = G__25200;
chunk__24642_25185 = G__25201;
count__24643_25186 = G__25202;
i__24644_25187 = G__25203;
continue;
} else {
var child_25204 = cljs.core.first(seq__24640_25198__$1);
if(cljs.core.truth_(child_25204)){
node.appendChild(child_25204);


var G__25205 = cljs.core.next(seq__24640_25198__$1);
var G__25206 = null;
var G__25207 = (0);
var G__25208 = (0);
seq__24640_25184 = G__25205;
chunk__24642_25185 = G__25206;
count__24643_25186 = G__25207;
i__24644_25187 = G__25208;
continue;
} else {
var G__25209 = cljs.core.next(seq__24640_25198__$1);
var G__25210 = null;
var G__25211 = (0);
var G__25212 = (0);
seq__24640_25184 = G__25209;
chunk__24642_25185 = G__25210;
count__24643_25186 = G__25211;
i__24644_25187 = G__25212;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_25183);
}
}


var G__25214 = cljs.core.next(seq__24612_25175__$1);
var G__25215 = null;
var G__25216 = (0);
var G__25217 = (0);
seq__24612_25124 = G__25214;
chunk__24614_25125 = G__25215;
count__24615_25126 = G__25216;
i__24616_25127 = G__25217;
continue;
} else {
var G__25218 = cljs.core.next(seq__24612_25175__$1);
var G__25219 = null;
var G__25220 = (0);
var G__25221 = (0);
seq__24612_25124 = G__25218;
chunk__24614_25125 = G__25219;
count__24615_25126 = G__25220;
i__24616_25127 = G__25221;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25228 = arguments.length;
var i__5770__auto___25229 = (0);
while(true){
if((i__5770__auto___25229 < len__5769__auto___25228)){
args__5775__auto__.push((arguments[i__5770__auto___25229]));

var G__25230 = (i__5770__auto___25229 + (1));
i__5770__auto___25229 = G__25230;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq24672){
var G__24673 = cljs.core.first(seq24672);
var seq24672__$1 = cljs.core.next(seq24672);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24673,seq24672__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__24682 = arguments.length;
switch (G__24682) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__20075__auto___25232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = (function (state_24687){
var state_val_24688 = (state_24687[(1)]);
if((state_val_24688 === (1))){
var state_24687__$1 = state_24687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24687__$1,(2),once_or_cleanup);
} else {
if((state_val_24688 === (2))){
var inst_24684 = (state_24687[(2)]);
var inst_24685 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_24687__$1 = (function (){var statearr_24689 = state_24687;
(statearr_24689[(7)] = inst_24684);

return statearr_24689;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24687__$1,inst_24685);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__19895__auto__ = null;
var shadow$dom$state_machine__19895__auto____0 = (function (){
var statearr_24690 = [null,null,null,null,null,null,null,null];
(statearr_24690[(0)] = shadow$dom$state_machine__19895__auto__);

(statearr_24690[(1)] = (1));

return statearr_24690;
});
var shadow$dom$state_machine__19895__auto____1 = (function (state_24687){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_24687);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e24691){var ex__19898__auto__ = e24691;
var statearr_24692_25233 = state_24687;
(statearr_24692_25233[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_24687[(4)]))){
var statearr_24693_25234 = state_24687;
(statearr_24693_25234[(1)] = cljs.core.first((state_24687[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25235 = state_24687;
state_24687 = G__25235;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
shadow$dom$state_machine__19895__auto__ = function(state_24687){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__19895__auto____0.call(this);
case 1:
return shadow$dom$state_machine__19895__auto____1.call(this,state_24687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__19895__auto____0;
shadow$dom$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__19895__auto____1;
return shadow$dom$state_machine__19895__auto__;
})()
})();
var state__20077__auto__ = (function (){var statearr_24694 = f__20076__auto__();
(statearr_24694[(6)] = c__20075__auto___25232);

return statearr_24694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
