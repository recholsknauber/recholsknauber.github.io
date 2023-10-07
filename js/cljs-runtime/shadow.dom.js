goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19580 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_19580(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19581 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_19581(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__18352 = coll;
var G__18353 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__18352,G__18353) : shadow.dom.lazy_native_coll_seq.call(null,G__18352,G__18353));
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
var G__18375 = arguments.length;
switch (G__18375) {
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
var G__18382 = arguments.length;
switch (G__18382) {
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
var G__18395 = arguments.length;
switch (G__18395) {
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
var G__18414 = arguments.length;
switch (G__18414) {
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
var G__18426 = arguments.length;
switch (G__18426) {
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
var G__18445 = arguments.length;
switch (G__18445) {
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
}catch (e18457){if((e18457 instanceof Object)){
var e = e18457;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18457;

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
var seq__18483 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18484 = null;
var count__18485 = (0);
var i__18486 = (0);
while(true){
if((i__18486 < count__18485)){
var el = chunk__18484.cljs$core$IIndexed$_nth$arity$2(null,i__18486);
var handler_19601__$1 = ((function (seq__18483,chunk__18484,count__18485,i__18486,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18483,chunk__18484,count__18485,i__18486,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19601__$1);


var G__19603 = seq__18483;
var G__19604 = chunk__18484;
var G__19605 = count__18485;
var G__19606 = (i__18486 + (1));
seq__18483 = G__19603;
chunk__18484 = G__19604;
count__18485 = G__19605;
i__18486 = G__19606;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18483);
if(temp__5804__auto__){
var seq__18483__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18483__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18483__$1);
var G__19609 = cljs.core.chunk_rest(seq__18483__$1);
var G__19610 = c__5568__auto__;
var G__19611 = cljs.core.count(c__5568__auto__);
var G__19612 = (0);
seq__18483 = G__19609;
chunk__18484 = G__19610;
count__18485 = G__19611;
i__18486 = G__19612;
continue;
} else {
var el = cljs.core.first(seq__18483__$1);
var handler_19613__$1 = ((function (seq__18483,chunk__18484,count__18485,i__18486,el,seq__18483__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18483,chunk__18484,count__18485,i__18486,el,seq__18483__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19613__$1);


var G__19614 = cljs.core.next(seq__18483__$1);
var G__19615 = null;
var G__19616 = (0);
var G__19617 = (0);
seq__18483 = G__19614;
chunk__18484 = G__19615;
count__18485 = G__19616;
i__18486 = G__19617;
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
var G__18528 = arguments.length;
switch (G__18528) {
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
var seq__18544 = cljs.core.seq(events);
var chunk__18545 = null;
var count__18546 = (0);
var i__18547 = (0);
while(true){
if((i__18547 < count__18546)){
var vec__18571 = chunk__18545.cljs$core$IIndexed$_nth$arity$2(null,i__18547);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18571,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18571,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19619 = seq__18544;
var G__19620 = chunk__18545;
var G__19621 = count__18546;
var G__19622 = (i__18547 + (1));
seq__18544 = G__19619;
chunk__18545 = G__19620;
count__18546 = G__19621;
i__18547 = G__19622;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18544);
if(temp__5804__auto__){
var seq__18544__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18544__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18544__$1);
var G__19623 = cljs.core.chunk_rest(seq__18544__$1);
var G__19624 = c__5568__auto__;
var G__19625 = cljs.core.count(c__5568__auto__);
var G__19626 = (0);
seq__18544 = G__19623;
chunk__18545 = G__19624;
count__18546 = G__19625;
i__18547 = G__19626;
continue;
} else {
var vec__18578 = cljs.core.first(seq__18544__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18578,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18578,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19628 = cljs.core.next(seq__18544__$1);
var G__19629 = null;
var G__19630 = (0);
var G__19631 = (0);
seq__18544 = G__19628;
chunk__18545 = G__19629;
count__18546 = G__19630;
i__18547 = G__19631;
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
var seq__18585 = cljs.core.seq(styles);
var chunk__18586 = null;
var count__18587 = (0);
var i__18588 = (0);
while(true){
if((i__18588 < count__18587)){
var vec__18606 = chunk__18586.cljs$core$IIndexed$_nth$arity$2(null,i__18588);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18606,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18606,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19635 = seq__18585;
var G__19636 = chunk__18586;
var G__19637 = count__18587;
var G__19638 = (i__18588 + (1));
seq__18585 = G__19635;
chunk__18586 = G__19636;
count__18587 = G__19637;
i__18588 = G__19638;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18585);
if(temp__5804__auto__){
var seq__18585__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18585__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18585__$1);
var G__19639 = cljs.core.chunk_rest(seq__18585__$1);
var G__19640 = c__5568__auto__;
var G__19641 = cljs.core.count(c__5568__auto__);
var G__19642 = (0);
seq__18585 = G__19639;
chunk__18586 = G__19640;
count__18587 = G__19641;
i__18588 = G__19642;
continue;
} else {
var vec__18614 = cljs.core.first(seq__18585__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18614,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18614,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19644 = cljs.core.next(seq__18585__$1);
var G__19645 = null;
var G__19646 = (0);
var G__19647 = (0);
seq__18585 = G__19644;
chunk__18586 = G__19645;
count__18587 = G__19646;
i__18588 = G__19647;
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
var G__18623_19649 = key;
var G__18623_19650__$1 = (((G__18623_19649 instanceof cljs.core.Keyword))?G__18623_19649.fqn:null);
switch (G__18623_19650__$1) {
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
var ks_19655 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_19655,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_19655,"aria-");
}
})())){
el.setAttribute(ks_19655,value);
} else {
(el[ks_19655] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18673){
var map__18675 = p__18673;
var map__18675__$1 = cljs.core.__destructure_map(map__18675);
var props = map__18675__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18675__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18684 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18684,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18684,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18684,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18690 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18690,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18690;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18699 = arguments.length;
switch (G__18699) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18711){
var vec__18713 = p__18711;
var seq__18714 = cljs.core.seq(vec__18713);
var first__18715 = cljs.core.first(seq__18714);
var seq__18714__$1 = cljs.core.next(seq__18714);
var nn = first__18715;
var first__18715__$1 = cljs.core.first(seq__18714__$1);
var seq__18714__$2 = cljs.core.next(seq__18714__$1);
var np = first__18715__$1;
var nc = seq__18714__$2;
var node = vec__18713;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18723 = nn;
var G__18724 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18723,G__18724) : create_fn.call(null,G__18723,G__18724));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18727 = nn;
var G__18728 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18727,G__18728) : create_fn.call(null,G__18727,G__18728));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18732 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18732,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18732,(1),null);
var seq__18736_19676 = cljs.core.seq(node_children);
var chunk__18737_19677 = null;
var count__18738_19678 = (0);
var i__18739_19679 = (0);
while(true){
if((i__18739_19679 < count__18738_19678)){
var child_struct_19680 = chunk__18737_19677.cljs$core$IIndexed$_nth$arity$2(null,i__18739_19679);
var children_19681 = shadow.dom.dom_node(child_struct_19680);
if(cljs.core.seq_QMARK_(children_19681)){
var seq__18809_19682 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19681));
var chunk__18811_19683 = null;
var count__18812_19684 = (0);
var i__18813_19685 = (0);
while(true){
if((i__18813_19685 < count__18812_19684)){
var child_19686 = chunk__18811_19683.cljs$core$IIndexed$_nth$arity$2(null,i__18813_19685);
if(cljs.core.truth_(child_19686)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19686);


var G__19687 = seq__18809_19682;
var G__19688 = chunk__18811_19683;
var G__19689 = count__18812_19684;
var G__19690 = (i__18813_19685 + (1));
seq__18809_19682 = G__19687;
chunk__18811_19683 = G__19688;
count__18812_19684 = G__19689;
i__18813_19685 = G__19690;
continue;
} else {
var G__19691 = seq__18809_19682;
var G__19692 = chunk__18811_19683;
var G__19693 = count__18812_19684;
var G__19694 = (i__18813_19685 + (1));
seq__18809_19682 = G__19691;
chunk__18811_19683 = G__19692;
count__18812_19684 = G__19693;
i__18813_19685 = G__19694;
continue;
}
} else {
var temp__5804__auto___19695 = cljs.core.seq(seq__18809_19682);
if(temp__5804__auto___19695){
var seq__18809_19696__$1 = temp__5804__auto___19695;
if(cljs.core.chunked_seq_QMARK_(seq__18809_19696__$1)){
var c__5568__auto___19697 = cljs.core.chunk_first(seq__18809_19696__$1);
var G__19698 = cljs.core.chunk_rest(seq__18809_19696__$1);
var G__19699 = c__5568__auto___19697;
var G__19700 = cljs.core.count(c__5568__auto___19697);
var G__19701 = (0);
seq__18809_19682 = G__19698;
chunk__18811_19683 = G__19699;
count__18812_19684 = G__19700;
i__18813_19685 = G__19701;
continue;
} else {
var child_19702 = cljs.core.first(seq__18809_19696__$1);
if(cljs.core.truth_(child_19702)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19702);


var G__19704 = cljs.core.next(seq__18809_19696__$1);
var G__19705 = null;
var G__19706 = (0);
var G__19707 = (0);
seq__18809_19682 = G__19704;
chunk__18811_19683 = G__19705;
count__18812_19684 = G__19706;
i__18813_19685 = G__19707;
continue;
} else {
var G__19708 = cljs.core.next(seq__18809_19696__$1);
var G__19709 = null;
var G__19710 = (0);
var G__19711 = (0);
seq__18809_19682 = G__19708;
chunk__18811_19683 = G__19709;
count__18812_19684 = G__19710;
i__18813_19685 = G__19711;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19681);
}


var G__19712 = seq__18736_19676;
var G__19713 = chunk__18737_19677;
var G__19714 = count__18738_19678;
var G__19715 = (i__18739_19679 + (1));
seq__18736_19676 = G__19712;
chunk__18737_19677 = G__19713;
count__18738_19678 = G__19714;
i__18739_19679 = G__19715;
continue;
} else {
var temp__5804__auto___19716 = cljs.core.seq(seq__18736_19676);
if(temp__5804__auto___19716){
var seq__18736_19717__$1 = temp__5804__auto___19716;
if(cljs.core.chunked_seq_QMARK_(seq__18736_19717__$1)){
var c__5568__auto___19719 = cljs.core.chunk_first(seq__18736_19717__$1);
var G__19720 = cljs.core.chunk_rest(seq__18736_19717__$1);
var G__19721 = c__5568__auto___19719;
var G__19722 = cljs.core.count(c__5568__auto___19719);
var G__19723 = (0);
seq__18736_19676 = G__19720;
chunk__18737_19677 = G__19721;
count__18738_19678 = G__19722;
i__18739_19679 = G__19723;
continue;
} else {
var child_struct_19724 = cljs.core.first(seq__18736_19717__$1);
var children_19725 = shadow.dom.dom_node(child_struct_19724);
if(cljs.core.seq_QMARK_(children_19725)){
var seq__18819_19726 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19725));
var chunk__18821_19727 = null;
var count__18822_19728 = (0);
var i__18823_19729 = (0);
while(true){
if((i__18823_19729 < count__18822_19728)){
var child_19730 = chunk__18821_19727.cljs$core$IIndexed$_nth$arity$2(null,i__18823_19729);
if(cljs.core.truth_(child_19730)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19730);


var G__19731 = seq__18819_19726;
var G__19732 = chunk__18821_19727;
var G__19733 = count__18822_19728;
var G__19734 = (i__18823_19729 + (1));
seq__18819_19726 = G__19731;
chunk__18821_19727 = G__19732;
count__18822_19728 = G__19733;
i__18823_19729 = G__19734;
continue;
} else {
var G__19735 = seq__18819_19726;
var G__19736 = chunk__18821_19727;
var G__19737 = count__18822_19728;
var G__19738 = (i__18823_19729 + (1));
seq__18819_19726 = G__19735;
chunk__18821_19727 = G__19736;
count__18822_19728 = G__19737;
i__18823_19729 = G__19738;
continue;
}
} else {
var temp__5804__auto___19739__$1 = cljs.core.seq(seq__18819_19726);
if(temp__5804__auto___19739__$1){
var seq__18819_19740__$1 = temp__5804__auto___19739__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18819_19740__$1)){
var c__5568__auto___19741 = cljs.core.chunk_first(seq__18819_19740__$1);
var G__19742 = cljs.core.chunk_rest(seq__18819_19740__$1);
var G__19743 = c__5568__auto___19741;
var G__19744 = cljs.core.count(c__5568__auto___19741);
var G__19745 = (0);
seq__18819_19726 = G__19742;
chunk__18821_19727 = G__19743;
count__18822_19728 = G__19744;
i__18823_19729 = G__19745;
continue;
} else {
var child_19746 = cljs.core.first(seq__18819_19740__$1);
if(cljs.core.truth_(child_19746)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19746);


var G__19747 = cljs.core.next(seq__18819_19740__$1);
var G__19748 = null;
var G__19749 = (0);
var G__19750 = (0);
seq__18819_19726 = G__19747;
chunk__18821_19727 = G__19748;
count__18822_19728 = G__19749;
i__18823_19729 = G__19750;
continue;
} else {
var G__19751 = cljs.core.next(seq__18819_19740__$1);
var G__19752 = null;
var G__19753 = (0);
var G__19754 = (0);
seq__18819_19726 = G__19751;
chunk__18821_19727 = G__19752;
count__18822_19728 = G__19753;
i__18823_19729 = G__19754;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19725);
}


var G__19755 = cljs.core.next(seq__18736_19717__$1);
var G__19756 = null;
var G__19757 = (0);
var G__19758 = (0);
seq__18736_19676 = G__19755;
chunk__18737_19677 = G__19756;
count__18738_19678 = G__19757;
i__18739_19679 = G__19758;
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
var seq__18857 = cljs.core.seq(node);
var chunk__18858 = null;
var count__18859 = (0);
var i__18860 = (0);
while(true){
if((i__18860 < count__18859)){
var n = chunk__18858.cljs$core$IIndexed$_nth$arity$2(null,i__18860);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19763 = seq__18857;
var G__19764 = chunk__18858;
var G__19765 = count__18859;
var G__19766 = (i__18860 + (1));
seq__18857 = G__19763;
chunk__18858 = G__19764;
count__18859 = G__19765;
i__18860 = G__19766;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18857);
if(temp__5804__auto__){
var seq__18857__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18857__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18857__$1);
var G__19767 = cljs.core.chunk_rest(seq__18857__$1);
var G__19768 = c__5568__auto__;
var G__19769 = cljs.core.count(c__5568__auto__);
var G__19770 = (0);
seq__18857 = G__19767;
chunk__18858 = G__19768;
count__18859 = G__19769;
i__18860 = G__19770;
continue;
} else {
var n = cljs.core.first(seq__18857__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19771 = cljs.core.next(seq__18857__$1);
var G__19772 = null;
var G__19773 = (0);
var G__19774 = (0);
seq__18857 = G__19771;
chunk__18858 = G__19772;
count__18859 = G__19773;
i__18860 = G__19774;
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
var G__18873 = arguments.length;
switch (G__18873) {
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
var G__18879 = arguments.length;
switch (G__18879) {
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
var G__18887 = arguments.length;
switch (G__18887) {
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
var len__5769__auto___19784 = arguments.length;
var i__5770__auto___19785 = (0);
while(true){
if((i__5770__auto___19785 < len__5769__auto___19784)){
args__5775__auto__.push((arguments[i__5770__auto___19785]));

var G__19786 = (i__5770__auto___19785 + (1));
i__5770__auto___19785 = G__19786;
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
var seq__18920_19787 = cljs.core.seq(nodes);
var chunk__18921_19788 = null;
var count__18922_19789 = (0);
var i__18923_19790 = (0);
while(true){
if((i__18923_19790 < count__18922_19789)){
var node_19791 = chunk__18921_19788.cljs$core$IIndexed$_nth$arity$2(null,i__18923_19790);
fragment.appendChild(shadow.dom._to_dom(node_19791));


var G__19792 = seq__18920_19787;
var G__19793 = chunk__18921_19788;
var G__19794 = count__18922_19789;
var G__19795 = (i__18923_19790 + (1));
seq__18920_19787 = G__19792;
chunk__18921_19788 = G__19793;
count__18922_19789 = G__19794;
i__18923_19790 = G__19795;
continue;
} else {
var temp__5804__auto___19796 = cljs.core.seq(seq__18920_19787);
if(temp__5804__auto___19796){
var seq__18920_19797__$1 = temp__5804__auto___19796;
if(cljs.core.chunked_seq_QMARK_(seq__18920_19797__$1)){
var c__5568__auto___19798 = cljs.core.chunk_first(seq__18920_19797__$1);
var G__19799 = cljs.core.chunk_rest(seq__18920_19797__$1);
var G__19800 = c__5568__auto___19798;
var G__19801 = cljs.core.count(c__5568__auto___19798);
var G__19802 = (0);
seq__18920_19787 = G__19799;
chunk__18921_19788 = G__19800;
count__18922_19789 = G__19801;
i__18923_19790 = G__19802;
continue;
} else {
var node_19804 = cljs.core.first(seq__18920_19797__$1);
fragment.appendChild(shadow.dom._to_dom(node_19804));


var G__19806 = cljs.core.next(seq__18920_19797__$1);
var G__19807 = null;
var G__19808 = (0);
var G__19809 = (0);
seq__18920_19787 = G__19806;
chunk__18921_19788 = G__19807;
count__18922_19789 = G__19808;
i__18923_19790 = G__19809;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18908){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18908));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18940_19810 = cljs.core.seq(scripts);
var chunk__18941_19811 = null;
var count__18942_19812 = (0);
var i__18943_19813 = (0);
while(true){
if((i__18943_19813 < count__18942_19812)){
var vec__18961_19816 = chunk__18941_19811.cljs$core$IIndexed$_nth$arity$2(null,i__18943_19813);
var script_tag_19817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18961_19816,(0),null);
var script_body_19818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18961_19816,(1),null);
eval(script_body_19818);


var G__19820 = seq__18940_19810;
var G__19821 = chunk__18941_19811;
var G__19822 = count__18942_19812;
var G__19823 = (i__18943_19813 + (1));
seq__18940_19810 = G__19820;
chunk__18941_19811 = G__19821;
count__18942_19812 = G__19822;
i__18943_19813 = G__19823;
continue;
} else {
var temp__5804__auto___19825 = cljs.core.seq(seq__18940_19810);
if(temp__5804__auto___19825){
var seq__18940_19826__$1 = temp__5804__auto___19825;
if(cljs.core.chunked_seq_QMARK_(seq__18940_19826__$1)){
var c__5568__auto___19827 = cljs.core.chunk_first(seq__18940_19826__$1);
var G__19828 = cljs.core.chunk_rest(seq__18940_19826__$1);
var G__19829 = c__5568__auto___19827;
var G__19830 = cljs.core.count(c__5568__auto___19827);
var G__19831 = (0);
seq__18940_19810 = G__19828;
chunk__18941_19811 = G__19829;
count__18942_19812 = G__19830;
i__18943_19813 = G__19831;
continue;
} else {
var vec__18967_19835 = cljs.core.first(seq__18940_19826__$1);
var script_tag_19836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18967_19835,(0),null);
var script_body_19837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18967_19835,(1),null);
eval(script_body_19837);


var G__19841 = cljs.core.next(seq__18940_19826__$1);
var G__19842 = null;
var G__19843 = (0);
var G__19844 = (0);
seq__18940_19810 = G__19841;
chunk__18941_19811 = G__19842;
count__18942_19812 = G__19843;
i__18943_19813 = G__19844;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18972){
var vec__18973 = p__18972;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18973,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18973,(1),null);
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
var G__18990 = arguments.length;
switch (G__18990) {
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
var seq__19013 = cljs.core.seq(style_keys);
var chunk__19014 = null;
var count__19015 = (0);
var i__19016 = (0);
while(true){
if((i__19016 < count__19015)){
var it = chunk__19014.cljs$core$IIndexed$_nth$arity$2(null,i__19016);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19850 = seq__19013;
var G__19851 = chunk__19014;
var G__19852 = count__19015;
var G__19853 = (i__19016 + (1));
seq__19013 = G__19850;
chunk__19014 = G__19851;
count__19015 = G__19852;
i__19016 = G__19853;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19013);
if(temp__5804__auto__){
var seq__19013__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19013__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19013__$1);
var G__19854 = cljs.core.chunk_rest(seq__19013__$1);
var G__19855 = c__5568__auto__;
var G__19856 = cljs.core.count(c__5568__auto__);
var G__19857 = (0);
seq__19013 = G__19854;
chunk__19014 = G__19855;
count__19015 = G__19856;
i__19016 = G__19857;
continue;
} else {
var it = cljs.core.first(seq__19013__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19858 = cljs.core.next(seq__19013__$1);
var G__19859 = null;
var G__19860 = (0);
var G__19861 = (0);
seq__19013 = G__19858;
chunk__19014 = G__19859;
count__19015 = G__19860;
i__19016 = G__19861;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k19019,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__19026 = k19019;
var G__19026__$1 = (((G__19026 instanceof cljs.core.Keyword))?G__19026.fqn:null);
switch (G__19026__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19019,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19027){
var vec__19028 = p__19027;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19028,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19028,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19018){
var self__ = this;
var G__19018__$1 = this;
return (new cljs.core.RecordIter((0),G__19018__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19020,other19021){
var self__ = this;
var this19020__$1 = this;
return (((!((other19021 == null)))) && ((((this19020__$1.constructor === other19021.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19020__$1.x,other19021.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19020__$1.y,other19021.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19020__$1.__extmap,other19021.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k19019){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19057 = k19019;
var G__19057__$1 = (((G__19057 instanceof cljs.core.Keyword))?G__19057.fqn:null);
switch (G__19057__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19019);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__19018){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19061 = cljs.core.keyword_identical_QMARK_;
var expr__19062 = k__5352__auto__;
if(cljs.core.truth_((pred__19061.cljs$core$IFn$_invoke$arity$2 ? pred__19061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__19062) : pred__19061.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__19062)))){
return (new shadow.dom.Coordinate(G__19018,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19061.cljs$core$IFn$_invoke$arity$2 ? pred__19061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__19062) : pred__19061.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__19062)))){
return (new shadow.dom.Coordinate(self__.x,G__19018,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__19018),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__19018){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__19018,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__19022){
var extmap__5385__auto__ = (function (){var G__19080 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19022,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__19022)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19080);
} else {
return G__19080;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__19022),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__19022),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k19091,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__19103 = k19091;
var G__19103__$1 = (((G__19103 instanceof cljs.core.Keyword))?G__19103.fqn:null);
switch (G__19103__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19091,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19112){
var vec__19113 = p__19112;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19113,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19113,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19090){
var self__ = this;
var G__19090__$1 = this;
return (new cljs.core.RecordIter((0),G__19090__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19092,other19093){
var self__ = this;
var this19092__$1 = this;
return (((!((other19093 == null)))) && ((((this19092__$1.constructor === other19093.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19092__$1.w,other19093.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19092__$1.h,other19093.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19092__$1.__extmap,other19093.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k19091){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19139 = k19091;
var G__19139__$1 = (((G__19139 instanceof cljs.core.Keyword))?G__19139.fqn:null);
switch (G__19139__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19091);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__19090){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19146 = cljs.core.keyword_identical_QMARK_;
var expr__19147 = k__5352__auto__;
if(cljs.core.truth_((pred__19146.cljs$core$IFn$_invoke$arity$2 ? pred__19146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__19147) : pred__19146.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__19147)))){
return (new shadow.dom.Size(G__19090,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19146.cljs$core$IFn$_invoke$arity$2 ? pred__19146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__19147) : pred__19146.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__19147)))){
return (new shadow.dom.Size(self__.w,G__19090,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__19090),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__19090){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__19090,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__19096){
var extmap__5385__auto__ = (function (){var G__19167 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19096,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__19096)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19167);
} else {
return G__19167;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__19096),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__19096),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__19907 = (i + (1));
var G__19908 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19907;
ret = G__19908;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19201){
var vec__19202 = p__19201;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19202,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19202,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19210 = arguments.length;
switch (G__19210) {
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
var G__19915 = ps;
var G__19916 = (i + (1));
el__$1 = G__19915;
i = G__19916;
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
var vec__19290 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19290,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19290,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19290,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19303_19921 = cljs.core.seq(props);
var chunk__19304_19922 = null;
var count__19305_19923 = (0);
var i__19306_19924 = (0);
while(true){
if((i__19306_19924 < count__19305_19923)){
var vec__19344_19925 = chunk__19304_19922.cljs$core$IIndexed$_nth$arity$2(null,i__19306_19924);
var k_19926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19344_19925,(0),null);
var v_19927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19344_19925,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19926);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19926),v_19927);


var G__19928 = seq__19303_19921;
var G__19929 = chunk__19304_19922;
var G__19930 = count__19305_19923;
var G__19931 = (i__19306_19924 + (1));
seq__19303_19921 = G__19928;
chunk__19304_19922 = G__19929;
count__19305_19923 = G__19930;
i__19306_19924 = G__19931;
continue;
} else {
var temp__5804__auto___19932 = cljs.core.seq(seq__19303_19921);
if(temp__5804__auto___19932){
var seq__19303_19933__$1 = temp__5804__auto___19932;
if(cljs.core.chunked_seq_QMARK_(seq__19303_19933__$1)){
var c__5568__auto___19934 = cljs.core.chunk_first(seq__19303_19933__$1);
var G__19935 = cljs.core.chunk_rest(seq__19303_19933__$1);
var G__19936 = c__5568__auto___19934;
var G__19937 = cljs.core.count(c__5568__auto___19934);
var G__19938 = (0);
seq__19303_19921 = G__19935;
chunk__19304_19922 = G__19936;
count__19305_19923 = G__19937;
i__19306_19924 = G__19938;
continue;
} else {
var vec__19349_19939 = cljs.core.first(seq__19303_19933__$1);
var k_19940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19349_19939,(0),null);
var v_19941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19349_19939,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19940);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19940),v_19941);


var G__19945 = cljs.core.next(seq__19303_19933__$1);
var G__19946 = null;
var G__19947 = (0);
var G__19948 = (0);
seq__19303_19921 = G__19945;
chunk__19304_19922 = G__19946;
count__19305_19923 = G__19947;
i__19306_19924 = G__19948;
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
var vec__19360 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19360,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19360,(1),null);
var seq__19363_19949 = cljs.core.seq(node_children);
var chunk__19365_19950 = null;
var count__19366_19951 = (0);
var i__19367_19952 = (0);
while(true){
if((i__19367_19952 < count__19366_19951)){
var child_struct_19954 = chunk__19365_19950.cljs$core$IIndexed$_nth$arity$2(null,i__19367_19952);
if((!((child_struct_19954 == null)))){
if(typeof child_struct_19954 === 'string'){
var text_19956 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19956),child_struct_19954].join(''));
} else {
var children_19957 = shadow.dom.svg_node(child_struct_19954);
if(cljs.core.seq_QMARK_(children_19957)){
var seq__19428_19958 = cljs.core.seq(children_19957);
var chunk__19430_19959 = null;
var count__19431_19960 = (0);
var i__19432_19961 = (0);
while(true){
if((i__19432_19961 < count__19431_19960)){
var child_19962 = chunk__19430_19959.cljs$core$IIndexed$_nth$arity$2(null,i__19432_19961);
if(cljs.core.truth_(child_19962)){
node.appendChild(child_19962);


var G__19963 = seq__19428_19958;
var G__19964 = chunk__19430_19959;
var G__19965 = count__19431_19960;
var G__19966 = (i__19432_19961 + (1));
seq__19428_19958 = G__19963;
chunk__19430_19959 = G__19964;
count__19431_19960 = G__19965;
i__19432_19961 = G__19966;
continue;
} else {
var G__19967 = seq__19428_19958;
var G__19968 = chunk__19430_19959;
var G__19969 = count__19431_19960;
var G__19970 = (i__19432_19961 + (1));
seq__19428_19958 = G__19967;
chunk__19430_19959 = G__19968;
count__19431_19960 = G__19969;
i__19432_19961 = G__19970;
continue;
}
} else {
var temp__5804__auto___19971 = cljs.core.seq(seq__19428_19958);
if(temp__5804__auto___19971){
var seq__19428_19972__$1 = temp__5804__auto___19971;
if(cljs.core.chunked_seq_QMARK_(seq__19428_19972__$1)){
var c__5568__auto___19973 = cljs.core.chunk_first(seq__19428_19972__$1);
var G__19974 = cljs.core.chunk_rest(seq__19428_19972__$1);
var G__19975 = c__5568__auto___19973;
var G__19976 = cljs.core.count(c__5568__auto___19973);
var G__19977 = (0);
seq__19428_19958 = G__19974;
chunk__19430_19959 = G__19975;
count__19431_19960 = G__19976;
i__19432_19961 = G__19977;
continue;
} else {
var child_19978 = cljs.core.first(seq__19428_19972__$1);
if(cljs.core.truth_(child_19978)){
node.appendChild(child_19978);


var G__19979 = cljs.core.next(seq__19428_19972__$1);
var G__19980 = null;
var G__19981 = (0);
var G__19982 = (0);
seq__19428_19958 = G__19979;
chunk__19430_19959 = G__19980;
count__19431_19960 = G__19981;
i__19432_19961 = G__19982;
continue;
} else {
var G__19983 = cljs.core.next(seq__19428_19972__$1);
var G__19984 = null;
var G__19985 = (0);
var G__19986 = (0);
seq__19428_19958 = G__19983;
chunk__19430_19959 = G__19984;
count__19431_19960 = G__19985;
i__19432_19961 = G__19986;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19957);
}
}


var G__19987 = seq__19363_19949;
var G__19988 = chunk__19365_19950;
var G__19989 = count__19366_19951;
var G__19990 = (i__19367_19952 + (1));
seq__19363_19949 = G__19987;
chunk__19365_19950 = G__19988;
count__19366_19951 = G__19989;
i__19367_19952 = G__19990;
continue;
} else {
var G__19991 = seq__19363_19949;
var G__19992 = chunk__19365_19950;
var G__19993 = count__19366_19951;
var G__19994 = (i__19367_19952 + (1));
seq__19363_19949 = G__19991;
chunk__19365_19950 = G__19992;
count__19366_19951 = G__19993;
i__19367_19952 = G__19994;
continue;
}
} else {
var temp__5804__auto___19995 = cljs.core.seq(seq__19363_19949);
if(temp__5804__auto___19995){
var seq__19363_19996__$1 = temp__5804__auto___19995;
if(cljs.core.chunked_seq_QMARK_(seq__19363_19996__$1)){
var c__5568__auto___19997 = cljs.core.chunk_first(seq__19363_19996__$1);
var G__19998 = cljs.core.chunk_rest(seq__19363_19996__$1);
var G__19999 = c__5568__auto___19997;
var G__20000 = cljs.core.count(c__5568__auto___19997);
var G__20001 = (0);
seq__19363_19949 = G__19998;
chunk__19365_19950 = G__19999;
count__19366_19951 = G__20000;
i__19367_19952 = G__20001;
continue;
} else {
var child_struct_20002 = cljs.core.first(seq__19363_19996__$1);
if((!((child_struct_20002 == null)))){
if(typeof child_struct_20002 === 'string'){
var text_20003 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20003),child_struct_20002].join(''));
} else {
var children_20004 = shadow.dom.svg_node(child_struct_20002);
if(cljs.core.seq_QMARK_(children_20004)){
var seq__19506_20005 = cljs.core.seq(children_20004);
var chunk__19508_20006 = null;
var count__19509_20007 = (0);
var i__19510_20008 = (0);
while(true){
if((i__19510_20008 < count__19509_20007)){
var child_20009 = chunk__19508_20006.cljs$core$IIndexed$_nth$arity$2(null,i__19510_20008);
if(cljs.core.truth_(child_20009)){
node.appendChild(child_20009);


var G__20010 = seq__19506_20005;
var G__20011 = chunk__19508_20006;
var G__20012 = count__19509_20007;
var G__20013 = (i__19510_20008 + (1));
seq__19506_20005 = G__20010;
chunk__19508_20006 = G__20011;
count__19509_20007 = G__20012;
i__19510_20008 = G__20013;
continue;
} else {
var G__20014 = seq__19506_20005;
var G__20015 = chunk__19508_20006;
var G__20016 = count__19509_20007;
var G__20017 = (i__19510_20008 + (1));
seq__19506_20005 = G__20014;
chunk__19508_20006 = G__20015;
count__19509_20007 = G__20016;
i__19510_20008 = G__20017;
continue;
}
} else {
var temp__5804__auto___20018__$1 = cljs.core.seq(seq__19506_20005);
if(temp__5804__auto___20018__$1){
var seq__19506_20019__$1 = temp__5804__auto___20018__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19506_20019__$1)){
var c__5568__auto___20021 = cljs.core.chunk_first(seq__19506_20019__$1);
var G__20022 = cljs.core.chunk_rest(seq__19506_20019__$1);
var G__20023 = c__5568__auto___20021;
var G__20024 = cljs.core.count(c__5568__auto___20021);
var G__20025 = (0);
seq__19506_20005 = G__20022;
chunk__19508_20006 = G__20023;
count__19509_20007 = G__20024;
i__19510_20008 = G__20025;
continue;
} else {
var child_20027 = cljs.core.first(seq__19506_20019__$1);
if(cljs.core.truth_(child_20027)){
node.appendChild(child_20027);


var G__20028 = cljs.core.next(seq__19506_20019__$1);
var G__20029 = null;
var G__20030 = (0);
var G__20031 = (0);
seq__19506_20005 = G__20028;
chunk__19508_20006 = G__20029;
count__19509_20007 = G__20030;
i__19510_20008 = G__20031;
continue;
} else {
var G__20032 = cljs.core.next(seq__19506_20019__$1);
var G__20033 = null;
var G__20034 = (0);
var G__20035 = (0);
seq__19506_20005 = G__20032;
chunk__19508_20006 = G__20033;
count__19509_20007 = G__20034;
i__19510_20008 = G__20035;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20004);
}
}


var G__20036 = cljs.core.next(seq__19363_19996__$1);
var G__20037 = null;
var G__20038 = (0);
var G__20039 = (0);
seq__19363_19949 = G__20036;
chunk__19365_19950 = G__20037;
count__19366_19951 = G__20038;
i__19367_19952 = G__20039;
continue;
} else {
var G__20040 = cljs.core.next(seq__19363_19996__$1);
var G__20041 = null;
var G__20042 = (0);
var G__20043 = (0);
seq__19363_19949 = G__20040;
chunk__19365_19950 = G__20041;
count__19366_19951 = G__20042;
i__19367_19952 = G__20043;
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
var len__5769__auto___20048 = arguments.length;
var i__5770__auto___20049 = (0);
while(true){
if((i__5770__auto___20049 < len__5769__auto___20048)){
args__5775__auto__.push((arguments[i__5770__auto___20049]));

var G__20050 = (i__5770__auto___20049 + (1));
i__5770__auto___20049 = G__20050;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19528){
var G__19529 = cljs.core.first(seq19528);
var seq19528__$1 = cljs.core.next(seq19528);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19529,seq19528__$1);
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
var G__19542 = arguments.length;
switch (G__19542) {
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
var c__14457__auto___20055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = (function (state_19552){
var state_val_19553 = (state_19552[(1)]);
if((state_val_19553 === (1))){
var state_19552__$1 = state_19552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19552__$1,(2),once_or_cleanup);
} else {
if((state_val_19553 === (2))){
var inst_19548 = (state_19552[(2)]);
var inst_19549 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19552__$1 = (function (){var statearr_19554 = state_19552;
(statearr_19554[(7)] = inst_19548);

return statearr_19554;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19552__$1,inst_19549);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13775__auto__ = null;
var shadow$dom$state_machine__13775__auto____0 = (function (){
var statearr_19558 = [null,null,null,null,null,null,null,null];
(statearr_19558[(0)] = shadow$dom$state_machine__13775__auto__);

(statearr_19558[(1)] = (1));

return statearr_19558;
});
var shadow$dom$state_machine__13775__auto____1 = (function (state_19552){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_19552);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e19560){var ex__13778__auto__ = e19560;
var statearr_19561_20056 = state_19552;
(statearr_19561_20056[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_19552[(4)]))){
var statearr_19562_20057 = state_19552;
(statearr_19562_20057[(1)] = cljs.core.first((state_19552[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20058 = state_19552;
state_19552 = G__20058;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
shadow$dom$state_machine__13775__auto__ = function(state_19552){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13775__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13775__auto____1.call(this,state_19552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13775__auto____0;
shadow$dom$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13775__auto____1;
return shadow$dom$state_machine__13775__auto__;
})()
})();
var state__14459__auto__ = (function (){var statearr_19564 = f__14458__auto__();
(statearr_19564[(6)] = c__14457__auto___20055);

return statearr_19564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
