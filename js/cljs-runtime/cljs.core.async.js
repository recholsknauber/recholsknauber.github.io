goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14575 = arguments.length;
switch (G__14575) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14577 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14577 = (function (f,blockable,meta14578){
this.f = f;
this.blockable = blockable;
this.meta14578 = meta14578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14579,meta14578__$1){
var self__ = this;
var _14579__$1 = this;
return (new cljs.core.async.t_cljs$core$async14577(self__.f,self__.blockable,meta14578__$1));
}));

(cljs.core.async.t_cljs$core$async14577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14579){
var self__ = this;
var _14579__$1 = this;
return self__.meta14578;
}));

(cljs.core.async.t_cljs$core$async14577.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14577.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14577.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14577.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14578","meta14578",254982617,null)], null);
}));

(cljs.core.async.t_cljs$core$async14577.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14577");

(cljs.core.async.t_cljs$core$async14577.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14577");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14577.
 */
cljs.core.async.__GT_t_cljs$core$async14577 = (function cljs$core$async$__GT_t_cljs$core$async14577(f__$1,blockable__$1,meta14578){
return (new cljs.core.async.t_cljs$core$async14577(f__$1,blockable__$1,meta14578));
});

}

return (new cljs.core.async.t_cljs$core$async14577(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14641 = arguments.length;
switch (G__14641) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14664 = arguments.length;
switch (G__14664) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14691 = arguments.length;
switch (G__14691) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18349 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18349) : fn1.call(null,val_18349));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18349) : fn1.call(null,val_18349));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14707 = arguments.length;
switch (G__14707) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___18364 = n;
var x_18365 = (0);
while(true){
if((x_18365 < n__5636__auto___18364)){
(a[x_18365] = x_18365);

var G__18366 = (x_18365 + (1));
x_18365 = G__18366;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14718 = (function (flag,meta14719){
this.flag = flag;
this.meta14719 = meta14719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14720,meta14719__$1){
var self__ = this;
var _14720__$1 = this;
return (new cljs.core.async.t_cljs$core$async14718(self__.flag,meta14719__$1));
}));

(cljs.core.async.t_cljs$core$async14718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14720){
var self__ = this;
var _14720__$1 = this;
return self__.meta14719;
}));

(cljs.core.async.t_cljs$core$async14718.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14718.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14719","meta14719",-1910337697,null)], null);
}));

(cljs.core.async.t_cljs$core$async14718.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14718");

(cljs.core.async.t_cljs$core$async14718.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14718");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14718.
 */
cljs.core.async.__GT_t_cljs$core$async14718 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14718(flag__$1,meta14719){
return (new cljs.core.async.t_cljs$core$async14718(flag__$1,meta14719));
});

}

return (new cljs.core.async.t_cljs$core$async14718(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14736 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14736 = (function (flag,cb,meta14737){
this.flag = flag;
this.cb = cb;
this.meta14737 = meta14737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14738,meta14737__$1){
var self__ = this;
var _14738__$1 = this;
return (new cljs.core.async.t_cljs$core$async14736(self__.flag,self__.cb,meta14737__$1));
}));

(cljs.core.async.t_cljs$core$async14736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14738){
var self__ = this;
var _14738__$1 = this;
return self__.meta14737;
}));

(cljs.core.async.t_cljs$core$async14736.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14736.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14736.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14736.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14737","meta14737",886708654,null)], null);
}));

(cljs.core.async.t_cljs$core$async14736.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14736");

(cljs.core.async.t_cljs$core$async14736.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14736");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14736.
 */
cljs.core.async.__GT_t_cljs$core$async14736 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14736(flag__$1,cb__$1,meta14737){
return (new cljs.core.async.t_cljs$core$async14736(flag__$1,cb__$1,meta14737));
});

}

return (new cljs.core.async.t_cljs$core$async14736(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14751_SHARP_){
var G__14758 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14751_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14758) : fret.call(null,G__14758));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14752_SHARP_){
var G__14759 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14752_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14759) : fret.call(null,G__14759));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18369 = (i + (1));
i = G__18369;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18371 = arguments.length;
var i__5770__auto___18372 = (0);
while(true){
if((i__5770__auto___18372 < len__5769__auto___18371)){
args__5775__auto__.push((arguments[i__5770__auto___18372]));

var G__18373 = (i__5770__auto___18372 + (1));
i__5770__auto___18372 = G__18373;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14790){
var map__14795 = p__14790;
var map__14795__$1 = cljs.core.__destructure_map(map__14795);
var opts = map__14795__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14763){
var G__14764 = cljs.core.first(seq14763);
var seq14763__$1 = cljs.core.next(seq14763);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14764,seq14763__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14815 = arguments.length;
switch (G__14815) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14457__auto___18377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = (function (state_14944){
var state_val_14945 = (state_14944[(1)]);
if((state_val_14945 === (7))){
var inst_14927 = (state_14944[(2)]);
var state_14944__$1 = state_14944;
var statearr_14959_18379 = state_14944__$1;
(statearr_14959_18379[(2)] = inst_14927);

(statearr_14959_18379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14945 === (1))){
var state_14944__$1 = state_14944;
var statearr_14960_18383 = state_14944__$1;
(statearr_14960_18383[(2)] = null);

(statearr_14960_18383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14945 === (4))){
var inst_14903 = (state_14944[(7)]);
var inst_14903__$1 = (state_14944[(2)]);
var inst_14905 = (inst_14903__$1 == null);
var state_14944__$1 = (function (){var statearr_14971 = state_14944;
(statearr_14971[(7)] = inst_14903__$1);

return statearr_14971;
})();
if(cljs.core.truth_(inst_14905)){
var statearr_14972_18384 = state_14944__$1;
(statearr_14972_18384[(1)] = (5));

} else {
var statearr_14973_18385 = state_14944__$1;
(statearr_14973_18385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14945 === (13))){
var state_14944__$1 = state_14944;
var statearr_14981_18386 = state_14944__$1;
(statearr_14981_18386[(2)] = null);

(statearr_14981_18386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14945 === (6))){
var inst_14903 = (state_14944[(7)]);
var state_14944__$1 = state_14944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14944__$1,(11),to,inst_14903);
} else {
if((state_val_14945 === (3))){
var inst_14929 = (state_14944[(2)]);
var state_14944__$1 = state_14944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14944__$1,inst_14929);
} else {
if((state_val_14945 === (12))){
var state_14944__$1 = state_14944;
var statearr_14987_18387 = state_14944__$1;
(statearr_14987_18387[(2)] = null);

(statearr_14987_18387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14945 === (2))){
var state_14944__$1 = state_14944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14944__$1,(4),from);
} else {
if((state_val_14945 === (11))){
var inst_14920 = (state_14944[(2)]);
var state_14944__$1 = state_14944;
if(cljs.core.truth_(inst_14920)){
var statearr_14988_18389 = state_14944__$1;
(statearr_14988_18389[(1)] = (12));

} else {
var statearr_14992_18390 = state_14944__$1;
(statearr_14992_18390[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14945 === (9))){
var state_14944__$1 = state_14944;
var statearr_15002_18391 = state_14944__$1;
(statearr_15002_18391[(2)] = null);

(statearr_15002_18391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14945 === (5))){
var state_14944__$1 = state_14944;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15003_18393 = state_14944__$1;
(statearr_15003_18393[(1)] = (8));

} else {
var statearr_15004_18394 = state_14944__$1;
(statearr_15004_18394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14945 === (14))){
var inst_14925 = (state_14944[(2)]);
var state_14944__$1 = state_14944;
var statearr_15006_18396 = state_14944__$1;
(statearr_15006_18396[(2)] = inst_14925);

(statearr_15006_18396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14945 === (10))){
var inst_14916 = (state_14944[(2)]);
var state_14944__$1 = state_14944;
var statearr_15009_18397 = state_14944__$1;
(statearr_15009_18397[(2)] = inst_14916);

(statearr_15009_18397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14945 === (8))){
var inst_14913 = cljs.core.async.close_BANG_(to);
var state_14944__$1 = state_14944;
var statearr_15010_18398 = state_14944__$1;
(statearr_15010_18398[(2)] = inst_14913);

(statearr_15010_18398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13775__auto__ = null;
var cljs$core$async$state_machine__13775__auto____0 = (function (){
var statearr_15013 = [null,null,null,null,null,null,null,null];
(statearr_15013[(0)] = cljs$core$async$state_machine__13775__auto__);

(statearr_15013[(1)] = (1));

return statearr_15013;
});
var cljs$core$async$state_machine__13775__auto____1 = (function (state_14944){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_14944);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e15015){var ex__13778__auto__ = e15015;
var statearr_15016_18408 = state_14944;
(statearr_15016_18408[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_14944[(4)]))){
var statearr_15017_18409 = state_14944;
(statearr_15017_18409[(1)] = cljs.core.first((state_14944[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18410 = state_14944;
state_14944 = G__18410;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$state_machine__13775__auto__ = function(state_14944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13775__auto____1.call(this,state_14944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13775__auto____0;
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13775__auto____1;
return cljs$core$async$state_machine__13775__auto__;
})()
})();
var state__14459__auto__ = (function (){var statearr_15018 = f__14458__auto__();
(statearr_15018[(6)] = c__14457__auto___18377);

return statearr_15018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15028){
var vec__15029 = p__15028;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15029,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15029,(1),null);
var job = vec__15029;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14457__auto___18412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = (function (state_15038){
var state_val_15039 = (state_15038[(1)]);
if((state_val_15039 === (1))){
var state_15038__$1 = state_15038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15038__$1,(2),res,v);
} else {
if((state_val_15039 === (2))){
var inst_15034 = (state_15038[(2)]);
var inst_15036 = cljs.core.async.close_BANG_(res);
var state_15038__$1 = (function (){var statearr_15041 = state_15038;
(statearr_15041[(7)] = inst_15034);

return statearr_15041;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15038__$1,inst_15036);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____0 = (function (){
var statearr_15042 = [null,null,null,null,null,null,null,null];
(statearr_15042[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__);

(statearr_15042[(1)] = (1));

return statearr_15042;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____1 = (function (state_15038){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_15038);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e15043){var ex__13778__auto__ = e15043;
var statearr_15044_18415 = state_15038;
(statearr_15044_18415[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_15038[(4)]))){
var statearr_15045_18416 = state_15038;
(statearr_15045_18416[(1)] = cljs.core.first((state_15038[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18417 = state_15038;
state_15038 = G__18417;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__ = function(state_15038){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____1.call(this,state_15038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__;
})()
})();
var state__14459__auto__ = (function (){var statearr_15051 = f__14458__auto__();
(statearr_15051[(6)] = c__14457__auto___18412);

return statearr_15051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15058){
var vec__15059 = p__15058;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15059,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15059,(1),null);
var job = vec__15059;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___18418 = n;
var __18419 = (0);
while(true){
if((__18419 < n__5636__auto___18418)){
var G__15064_18420 = type;
var G__15064_18421__$1 = (((G__15064_18420 instanceof cljs.core.Keyword))?G__15064_18420.fqn:null);
switch (G__15064_18421__$1) {
case "compute":
var c__14457__auto___18423 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18419,c__14457__auto___18423,G__15064_18420,G__15064_18421__$1,n__5636__auto___18418,jobs,results,process__$1,async){
return (function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = ((function (__18419,c__14457__auto___18423,G__15064_18420,G__15064_18421__$1,n__5636__auto___18418,jobs,results,process__$1,async){
return (function (state_15083){
var state_val_15085 = (state_15083[(1)]);
if((state_val_15085 === (1))){
var state_15083__$1 = state_15083;
var statearr_15087_18424 = state_15083__$1;
(statearr_15087_18424[(2)] = null);

(statearr_15087_18424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15085 === (2))){
var state_15083__$1 = state_15083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15083__$1,(4),jobs);
} else {
if((state_val_15085 === (3))){
var inst_15080 = (state_15083[(2)]);
var state_15083__$1 = state_15083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15083__$1,inst_15080);
} else {
if((state_val_15085 === (4))){
var inst_15071 = (state_15083[(2)]);
var inst_15072 = process__$1(inst_15071);
var state_15083__$1 = state_15083;
if(cljs.core.truth_(inst_15072)){
var statearr_15093_18427 = state_15083__$1;
(statearr_15093_18427[(1)] = (5));

} else {
var statearr_15095_18428 = state_15083__$1;
(statearr_15095_18428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15085 === (5))){
var state_15083__$1 = state_15083;
var statearr_15099_18429 = state_15083__$1;
(statearr_15099_18429[(2)] = null);

(statearr_15099_18429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15085 === (6))){
var state_15083__$1 = state_15083;
var statearr_15100_18430 = state_15083__$1;
(statearr_15100_18430[(2)] = null);

(statearr_15100_18430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15085 === (7))){
var inst_15078 = (state_15083[(2)]);
var state_15083__$1 = state_15083;
var statearr_15102_18431 = state_15083__$1;
(statearr_15102_18431[(2)] = inst_15078);

(statearr_15102_18431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18419,c__14457__auto___18423,G__15064_18420,G__15064_18421__$1,n__5636__auto___18418,jobs,results,process__$1,async))
;
return ((function (__18419,switch__13774__auto__,c__14457__auto___18423,G__15064_18420,G__15064_18421__$1,n__5636__auto___18418,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____0 = (function (){
var statearr_15104 = [null,null,null,null,null,null,null];
(statearr_15104[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__);

(statearr_15104[(1)] = (1));

return statearr_15104;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____1 = (function (state_15083){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_15083);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e15105){var ex__13778__auto__ = e15105;
var statearr_15106_18432 = state_15083;
(statearr_15106_18432[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_15083[(4)]))){
var statearr_15108_18433 = state_15083;
(statearr_15108_18433[(1)] = cljs.core.first((state_15083[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18434 = state_15083;
state_15083 = G__18434;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__ = function(state_15083){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____1.call(this,state_15083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__;
})()
;})(__18419,switch__13774__auto__,c__14457__auto___18423,G__15064_18420,G__15064_18421__$1,n__5636__auto___18418,jobs,results,process__$1,async))
})();
var state__14459__auto__ = (function (){var statearr_15112 = f__14458__auto__();
(statearr_15112[(6)] = c__14457__auto___18423);

return statearr_15112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
});})(__18419,c__14457__auto___18423,G__15064_18420,G__15064_18421__$1,n__5636__auto___18418,jobs,results,process__$1,async))
);


break;
case "async":
var c__14457__auto___18435 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18419,c__14457__auto___18435,G__15064_18420,G__15064_18421__$1,n__5636__auto___18418,jobs,results,process__$1,async){
return (function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = ((function (__18419,c__14457__auto___18435,G__15064_18420,G__15064_18421__$1,n__5636__auto___18418,jobs,results,process__$1,async){
return (function (state_15128){
var state_val_15129 = (state_15128[(1)]);
if((state_val_15129 === (1))){
var state_15128__$1 = state_15128;
var statearr_15132_18436 = state_15128__$1;
(statearr_15132_18436[(2)] = null);

(statearr_15132_18436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (2))){
var state_15128__$1 = state_15128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15128__$1,(4),jobs);
} else {
if((state_val_15129 === (3))){
var inst_15124 = (state_15128[(2)]);
var state_15128__$1 = state_15128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15128__$1,inst_15124);
} else {
if((state_val_15129 === (4))){
var inst_15115 = (state_15128[(2)]);
var inst_15117 = async(inst_15115);
var state_15128__$1 = state_15128;
if(cljs.core.truth_(inst_15117)){
var statearr_15138_18439 = state_15128__$1;
(statearr_15138_18439[(1)] = (5));

} else {
var statearr_15140_18440 = state_15128__$1;
(statearr_15140_18440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (5))){
var state_15128__$1 = state_15128;
var statearr_15143_18441 = state_15128__$1;
(statearr_15143_18441[(2)] = null);

(statearr_15143_18441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (6))){
var state_15128__$1 = state_15128;
var statearr_15144_18443 = state_15128__$1;
(statearr_15144_18443[(2)] = null);

(statearr_15144_18443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (7))){
var inst_15122 = (state_15128[(2)]);
var state_15128__$1 = state_15128;
var statearr_15146_18444 = state_15128__$1;
(statearr_15146_18444[(2)] = inst_15122);

(statearr_15146_18444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18419,c__14457__auto___18435,G__15064_18420,G__15064_18421__$1,n__5636__auto___18418,jobs,results,process__$1,async))
;
return ((function (__18419,switch__13774__auto__,c__14457__auto___18435,G__15064_18420,G__15064_18421__$1,n__5636__auto___18418,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____0 = (function (){
var statearr_15154 = [null,null,null,null,null,null,null];
(statearr_15154[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__);

(statearr_15154[(1)] = (1));

return statearr_15154;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____1 = (function (state_15128){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_15128);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e15155){var ex__13778__auto__ = e15155;
var statearr_15157_18446 = state_15128;
(statearr_15157_18446[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_15128[(4)]))){
var statearr_15159_18447 = state_15128;
(statearr_15159_18447[(1)] = cljs.core.first((state_15128[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18449 = state_15128;
state_15128 = G__18449;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__ = function(state_15128){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____1.call(this,state_15128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__;
})()
;})(__18419,switch__13774__auto__,c__14457__auto___18435,G__15064_18420,G__15064_18421__$1,n__5636__auto___18418,jobs,results,process__$1,async))
})();
var state__14459__auto__ = (function (){var statearr_15161 = f__14458__auto__();
(statearr_15161[(6)] = c__14457__auto___18435);

return statearr_15161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
});})(__18419,c__14457__auto___18435,G__15064_18420,G__15064_18421__$1,n__5636__auto___18418,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15064_18421__$1)].join('')));

}

var G__18451 = (__18419 + (1));
__18419 = G__18451;
continue;
} else {
}
break;
}

var c__14457__auto___18452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = (function (state_15187){
var state_val_15188 = (state_15187[(1)]);
if((state_val_15188 === (7))){
var inst_15183 = (state_15187[(2)]);
var state_15187__$1 = state_15187;
var statearr_15194_18453 = state_15187__$1;
(statearr_15194_18453[(2)] = inst_15183);

(statearr_15194_18453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (1))){
var state_15187__$1 = state_15187;
var statearr_15195_18454 = state_15187__$1;
(statearr_15195_18454[(2)] = null);

(statearr_15195_18454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (4))){
var inst_15166 = (state_15187[(7)]);
var inst_15166__$1 = (state_15187[(2)]);
var inst_15168 = (inst_15166__$1 == null);
var state_15187__$1 = (function (){var statearr_15197 = state_15187;
(statearr_15197[(7)] = inst_15166__$1);

return statearr_15197;
})();
if(cljs.core.truth_(inst_15168)){
var statearr_15198_18455 = state_15187__$1;
(statearr_15198_18455[(1)] = (5));

} else {
var statearr_15200_18456 = state_15187__$1;
(statearr_15200_18456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (6))){
var inst_15166 = (state_15187[(7)]);
var inst_15172 = (state_15187[(8)]);
var inst_15172__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15173 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15175 = [inst_15166,inst_15172__$1];
var inst_15176 = (new cljs.core.PersistentVector(null,2,(5),inst_15173,inst_15175,null));
var state_15187__$1 = (function (){var statearr_15202 = state_15187;
(statearr_15202[(8)] = inst_15172__$1);

return statearr_15202;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15187__$1,(8),jobs,inst_15176);
} else {
if((state_val_15188 === (3))){
var inst_15185 = (state_15187[(2)]);
var state_15187__$1 = state_15187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15187__$1,inst_15185);
} else {
if((state_val_15188 === (2))){
var state_15187__$1 = state_15187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15187__$1,(4),from);
} else {
if((state_val_15188 === (9))){
var inst_15180 = (state_15187[(2)]);
var state_15187__$1 = (function (){var statearr_15206 = state_15187;
(statearr_15206[(9)] = inst_15180);

return statearr_15206;
})();
var statearr_15207_18458 = state_15187__$1;
(statearr_15207_18458[(2)] = null);

(statearr_15207_18458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (5))){
var inst_15170 = cljs.core.async.close_BANG_(jobs);
var state_15187__$1 = state_15187;
var statearr_15209_18459 = state_15187__$1;
(statearr_15209_18459[(2)] = inst_15170);

(statearr_15209_18459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15188 === (8))){
var inst_15172 = (state_15187[(8)]);
var inst_15178 = (state_15187[(2)]);
var state_15187__$1 = (function (){var statearr_15212 = state_15187;
(statearr_15212[(10)] = inst_15178);

return statearr_15212;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15187__$1,(9),results,inst_15172);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____0 = (function (){
var statearr_15218 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15218[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__);

(statearr_15218[(1)] = (1));

return statearr_15218;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____1 = (function (state_15187){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_15187);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e15220){var ex__13778__auto__ = e15220;
var statearr_15223_18468 = state_15187;
(statearr_15223_18468[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_15187[(4)]))){
var statearr_15224_18469 = state_15187;
(statearr_15224_18469[(1)] = cljs.core.first((state_15187[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18470 = state_15187;
state_15187 = G__18470;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__ = function(state_15187){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____1.call(this,state_15187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__;
})()
})();
var state__14459__auto__ = (function (){var statearr_15228 = f__14458__auto__();
(statearr_15228[(6)] = c__14457__auto___18452);

return statearr_15228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
}));


var c__14457__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = (function (state_15269){
var state_val_15270 = (state_15269[(1)]);
if((state_val_15270 === (7))){
var inst_15262 = (state_15269[(2)]);
var state_15269__$1 = state_15269;
var statearr_15272_18480 = state_15269__$1;
(statearr_15272_18480[(2)] = inst_15262);

(statearr_15272_18480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15270 === (20))){
var state_15269__$1 = state_15269;
var statearr_15274_18481 = state_15269__$1;
(statearr_15274_18481[(2)] = null);

(statearr_15274_18481[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15270 === (1))){
var state_15269__$1 = state_15269;
var statearr_15279_18482 = state_15269__$1;
(statearr_15279_18482[(2)] = null);

(statearr_15279_18482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15270 === (4))){
var inst_15231 = (state_15269[(7)]);
var inst_15231__$1 = (state_15269[(2)]);
var inst_15232 = (inst_15231__$1 == null);
var state_15269__$1 = (function (){var statearr_15289 = state_15269;
(statearr_15289[(7)] = inst_15231__$1);

return statearr_15289;
})();
if(cljs.core.truth_(inst_15232)){
var statearr_15290_18487 = state_15269__$1;
(statearr_15290_18487[(1)] = (5));

} else {
var statearr_15291_18488 = state_15269__$1;
(statearr_15291_18488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15270 === (15))){
var inst_15244 = (state_15269[(8)]);
var state_15269__$1 = state_15269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15269__$1,(18),to,inst_15244);
} else {
if((state_val_15270 === (21))){
var inst_15257 = (state_15269[(2)]);
var state_15269__$1 = state_15269;
var statearr_15298_18493 = state_15269__$1;
(statearr_15298_18493[(2)] = inst_15257);

(statearr_15298_18493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15270 === (13))){
var inst_15259 = (state_15269[(2)]);
var state_15269__$1 = (function (){var statearr_15300 = state_15269;
(statearr_15300[(9)] = inst_15259);

return statearr_15300;
})();
var statearr_15302_18494 = state_15269__$1;
(statearr_15302_18494[(2)] = null);

(statearr_15302_18494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15270 === (6))){
var inst_15231 = (state_15269[(7)]);
var state_15269__$1 = state_15269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15269__$1,(11),inst_15231);
} else {
if((state_val_15270 === (17))){
var inst_15252 = (state_15269[(2)]);
var state_15269__$1 = state_15269;
if(cljs.core.truth_(inst_15252)){
var statearr_15303_18495 = state_15269__$1;
(statearr_15303_18495[(1)] = (19));

} else {
var statearr_15304_18496 = state_15269__$1;
(statearr_15304_18496[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15270 === (3))){
var inst_15264 = (state_15269[(2)]);
var state_15269__$1 = state_15269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15269__$1,inst_15264);
} else {
if((state_val_15270 === (12))){
var inst_15241 = (state_15269[(10)]);
var state_15269__$1 = state_15269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15269__$1,(14),inst_15241);
} else {
if((state_val_15270 === (2))){
var state_15269__$1 = state_15269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15269__$1,(4),results);
} else {
if((state_val_15270 === (19))){
var state_15269__$1 = state_15269;
var statearr_15310_18504 = state_15269__$1;
(statearr_15310_18504[(2)] = null);

(statearr_15310_18504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15270 === (11))){
var inst_15241 = (state_15269[(2)]);
var state_15269__$1 = (function (){var statearr_15313 = state_15269;
(statearr_15313[(10)] = inst_15241);

return statearr_15313;
})();
var statearr_15316_18505 = state_15269__$1;
(statearr_15316_18505[(2)] = null);

(statearr_15316_18505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15270 === (9))){
var state_15269__$1 = state_15269;
var statearr_15321_18506 = state_15269__$1;
(statearr_15321_18506[(2)] = null);

(statearr_15321_18506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15270 === (5))){
var state_15269__$1 = state_15269;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15322_18508 = state_15269__$1;
(statearr_15322_18508[(1)] = (8));

} else {
var statearr_15323_18509 = state_15269__$1;
(statearr_15323_18509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15270 === (14))){
var inst_15244 = (state_15269[(8)]);
var inst_15246 = (state_15269[(11)]);
var inst_15244__$1 = (state_15269[(2)]);
var inst_15245 = (inst_15244__$1 == null);
var inst_15246__$1 = cljs.core.not(inst_15245);
var state_15269__$1 = (function (){var statearr_15329 = state_15269;
(statearr_15329[(8)] = inst_15244__$1);

(statearr_15329[(11)] = inst_15246__$1);

return statearr_15329;
})();
if(inst_15246__$1){
var statearr_15330_18510 = state_15269__$1;
(statearr_15330_18510[(1)] = (15));

} else {
var statearr_15331_18511 = state_15269__$1;
(statearr_15331_18511[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15270 === (16))){
var inst_15246 = (state_15269[(11)]);
var state_15269__$1 = state_15269;
var statearr_15334_18512 = state_15269__$1;
(statearr_15334_18512[(2)] = inst_15246);

(statearr_15334_18512[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15270 === (10))){
var inst_15238 = (state_15269[(2)]);
var state_15269__$1 = state_15269;
var statearr_15336_18513 = state_15269__$1;
(statearr_15336_18513[(2)] = inst_15238);

(statearr_15336_18513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15270 === (18))){
var inst_15249 = (state_15269[(2)]);
var state_15269__$1 = state_15269;
var statearr_15339_18514 = state_15269__$1;
(statearr_15339_18514[(2)] = inst_15249);

(statearr_15339_18514[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15270 === (8))){
var inst_15235 = cljs.core.async.close_BANG_(to);
var state_15269__$1 = state_15269;
var statearr_15340_18515 = state_15269__$1;
(statearr_15340_18515[(2)] = inst_15235);

(statearr_15340_18515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____0 = (function (){
var statearr_15345 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15345[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__);

(statearr_15345[(1)] = (1));

return statearr_15345;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____1 = (function (state_15269){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_15269);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e15347){var ex__13778__auto__ = e15347;
var statearr_15349_18518 = state_15269;
(statearr_15349_18518[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_15269[(4)]))){
var statearr_15357_18519 = state_15269;
(statearr_15357_18519[(1)] = cljs.core.first((state_15269[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18520 = state_15269;
state_15269 = G__18520;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__ = function(state_15269){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____1.call(this,state_15269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13775__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13775__auto__;
})()
})();
var state__14459__auto__ = (function (){var statearr_15360 = f__14458__auto__();
(statearr_15360[(6)] = c__14457__auto__);

return statearr_15360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
}));

return c__14457__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15369 = arguments.length;
switch (G__15369) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15385 = arguments.length;
switch (G__15385) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15391 = arguments.length;
switch (G__15391) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14457__auto___18535 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = (function (state_15436){
var state_val_15437 = (state_15436[(1)]);
if((state_val_15437 === (7))){
var inst_15432 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15439_18536 = state_15436__$1;
(statearr_15439_18536[(2)] = inst_15432);

(statearr_15439_18536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (1))){
var state_15436__$1 = state_15436;
var statearr_15440_18538 = state_15436__$1;
(statearr_15440_18538[(2)] = null);

(statearr_15440_18538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (4))){
var inst_15407 = (state_15436[(7)]);
var inst_15407__$1 = (state_15436[(2)]);
var inst_15410 = (inst_15407__$1 == null);
var state_15436__$1 = (function (){var statearr_15441 = state_15436;
(statearr_15441[(7)] = inst_15407__$1);

return statearr_15441;
})();
if(cljs.core.truth_(inst_15410)){
var statearr_15445_18539 = state_15436__$1;
(statearr_15445_18539[(1)] = (5));

} else {
var statearr_15446_18540 = state_15436__$1;
(statearr_15446_18540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (13))){
var state_15436__$1 = state_15436;
var statearr_15453_18541 = state_15436__$1;
(statearr_15453_18541[(2)] = null);

(statearr_15453_18541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (6))){
var inst_15407 = (state_15436[(7)]);
var inst_15415 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15407) : p.call(null,inst_15407));
var state_15436__$1 = state_15436;
if(cljs.core.truth_(inst_15415)){
var statearr_15456_18542 = state_15436__$1;
(statearr_15456_18542[(1)] = (9));

} else {
var statearr_15457_18543 = state_15436__$1;
(statearr_15457_18543[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (3))){
var inst_15434 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15436__$1,inst_15434);
} else {
if((state_val_15437 === (12))){
var state_15436__$1 = state_15436;
var statearr_15461_18548 = state_15436__$1;
(statearr_15461_18548[(2)] = null);

(statearr_15461_18548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (2))){
var state_15436__$1 = state_15436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15436__$1,(4),ch);
} else {
if((state_val_15437 === (11))){
var inst_15407 = (state_15436[(7)]);
var inst_15419 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15436__$1,(8),inst_15419,inst_15407);
} else {
if((state_val_15437 === (9))){
var state_15436__$1 = state_15436;
var statearr_15464_18552 = state_15436__$1;
(statearr_15464_18552[(2)] = tc);

(statearr_15464_18552[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (5))){
var inst_15412 = cljs.core.async.close_BANG_(tc);
var inst_15413 = cljs.core.async.close_BANG_(fc);
var state_15436__$1 = (function (){var statearr_15465 = state_15436;
(statearr_15465[(8)] = inst_15412);

return statearr_15465;
})();
var statearr_15466_18553 = state_15436__$1;
(statearr_15466_18553[(2)] = inst_15413);

(statearr_15466_18553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (14))){
var inst_15430 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15468_18554 = state_15436__$1;
(statearr_15468_18554[(2)] = inst_15430);

(statearr_15468_18554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (10))){
var state_15436__$1 = state_15436;
var statearr_15471_18556 = state_15436__$1;
(statearr_15471_18556[(2)] = fc);

(statearr_15471_18556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (8))){
var inst_15422 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
if(cljs.core.truth_(inst_15422)){
var statearr_15474_18557 = state_15436__$1;
(statearr_15474_18557[(1)] = (12));

} else {
var statearr_15475_18558 = state_15436__$1;
(statearr_15475_18558[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13775__auto__ = null;
var cljs$core$async$state_machine__13775__auto____0 = (function (){
var statearr_15476 = [null,null,null,null,null,null,null,null,null];
(statearr_15476[(0)] = cljs$core$async$state_machine__13775__auto__);

(statearr_15476[(1)] = (1));

return statearr_15476;
});
var cljs$core$async$state_machine__13775__auto____1 = (function (state_15436){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_15436);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e15477){var ex__13778__auto__ = e15477;
var statearr_15478_18564 = state_15436;
(statearr_15478_18564[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_15436[(4)]))){
var statearr_15479_18570 = state_15436;
(statearr_15479_18570[(1)] = cljs.core.first((state_15436[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18574 = state_15436;
state_15436 = G__18574;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$state_machine__13775__auto__ = function(state_15436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13775__auto____1.call(this,state_15436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13775__auto____0;
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13775__auto____1;
return cljs$core$async$state_machine__13775__auto__;
})()
})();
var state__14459__auto__ = (function (){var statearr_15480 = f__14458__auto__();
(statearr_15480[(6)] = c__14457__auto___18535);

return statearr_15480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14457__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = (function (state_15522){
var state_val_15523 = (state_15522[(1)]);
if((state_val_15523 === (7))){
var inst_15518 = (state_15522[(2)]);
var state_15522__$1 = state_15522;
var statearr_15525_18575 = state_15522__$1;
(statearr_15525_18575[(2)] = inst_15518);

(statearr_15525_18575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15523 === (1))){
var inst_15495 = init;
var inst_15496 = inst_15495;
var state_15522__$1 = (function (){var statearr_15526 = state_15522;
(statearr_15526[(7)] = inst_15496);

return statearr_15526;
})();
var statearr_15529_18577 = state_15522__$1;
(statearr_15529_18577[(2)] = null);

(statearr_15529_18577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15523 === (4))){
var inst_15501 = (state_15522[(8)]);
var inst_15501__$1 = (state_15522[(2)]);
var inst_15504 = (inst_15501__$1 == null);
var state_15522__$1 = (function (){var statearr_15534 = state_15522;
(statearr_15534[(8)] = inst_15501__$1);

return statearr_15534;
})();
if(cljs.core.truth_(inst_15504)){
var statearr_15535_18581 = state_15522__$1;
(statearr_15535_18581[(1)] = (5));

} else {
var statearr_15536_18582 = state_15522__$1;
(statearr_15536_18582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15523 === (6))){
var inst_15496 = (state_15522[(7)]);
var inst_15501 = (state_15522[(8)]);
var inst_15507 = (state_15522[(9)]);
var inst_15507__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15496,inst_15501) : f.call(null,inst_15496,inst_15501));
var inst_15508 = cljs.core.reduced_QMARK_(inst_15507__$1);
var state_15522__$1 = (function (){var statearr_15539 = state_15522;
(statearr_15539[(9)] = inst_15507__$1);

return statearr_15539;
})();
if(inst_15508){
var statearr_15540_18583 = state_15522__$1;
(statearr_15540_18583[(1)] = (8));

} else {
var statearr_15542_18584 = state_15522__$1;
(statearr_15542_18584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15523 === (3))){
var inst_15520 = (state_15522[(2)]);
var state_15522__$1 = state_15522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15522__$1,inst_15520);
} else {
if((state_val_15523 === (2))){
var state_15522__$1 = state_15522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15522__$1,(4),ch);
} else {
if((state_val_15523 === (9))){
var inst_15507 = (state_15522[(9)]);
var inst_15496 = inst_15507;
var state_15522__$1 = (function (){var statearr_15543 = state_15522;
(statearr_15543[(7)] = inst_15496);

return statearr_15543;
})();
var statearr_15544_18589 = state_15522__$1;
(statearr_15544_18589[(2)] = null);

(statearr_15544_18589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15523 === (5))){
var inst_15496 = (state_15522[(7)]);
var state_15522__$1 = state_15522;
var statearr_15545_18590 = state_15522__$1;
(statearr_15545_18590[(2)] = inst_15496);

(statearr_15545_18590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15523 === (10))){
var inst_15516 = (state_15522[(2)]);
var state_15522__$1 = state_15522;
var statearr_15553_18596 = state_15522__$1;
(statearr_15553_18596[(2)] = inst_15516);

(statearr_15553_18596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15523 === (8))){
var inst_15507 = (state_15522[(9)]);
var inst_15512 = cljs.core.deref(inst_15507);
var state_15522__$1 = state_15522;
var statearr_15554_18597 = state_15522__$1;
(statearr_15554_18597[(2)] = inst_15512);

(statearr_15554_18597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13775__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13775__auto____0 = (function (){
var statearr_15555 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15555[(0)] = cljs$core$async$reduce_$_state_machine__13775__auto__);

(statearr_15555[(1)] = (1));

return statearr_15555;
});
var cljs$core$async$reduce_$_state_machine__13775__auto____1 = (function (state_15522){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_15522);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e15556){var ex__13778__auto__ = e15556;
var statearr_15557_18600 = state_15522;
(statearr_15557_18600[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_15522[(4)]))){
var statearr_15560_18601 = state_15522;
(statearr_15560_18601[(1)] = cljs.core.first((state_15522[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18605 = state_15522;
state_15522 = G__18605;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13775__auto__ = function(state_15522){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13775__auto____1.call(this,state_15522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13775__auto____0;
cljs$core$async$reduce_$_state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13775__auto____1;
return cljs$core$async$reduce_$_state_machine__13775__auto__;
})()
})();
var state__14459__auto__ = (function (){var statearr_15564 = f__14458__auto__();
(statearr_15564[(6)] = c__14457__auto__);

return statearr_15564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
}));

return c__14457__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14457__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = (function (state_15580){
var state_val_15581 = (state_15580[(1)]);
if((state_val_15581 === (1))){
var inst_15575 = cljs.core.async.reduce(f__$1,init,ch);
var state_15580__$1 = state_15580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15580__$1,(2),inst_15575);
} else {
if((state_val_15581 === (2))){
var inst_15577 = (state_15580[(2)]);
var inst_15578 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15577) : f__$1.call(null,inst_15577));
var state_15580__$1 = state_15580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15580__$1,inst_15578);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13775__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13775__auto____0 = (function (){
var statearr_15588 = [null,null,null,null,null,null,null];
(statearr_15588[(0)] = cljs$core$async$transduce_$_state_machine__13775__auto__);

(statearr_15588[(1)] = (1));

return statearr_15588;
});
var cljs$core$async$transduce_$_state_machine__13775__auto____1 = (function (state_15580){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_15580);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e15589){var ex__13778__auto__ = e15589;
var statearr_15590_18609 = state_15580;
(statearr_15590_18609[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_15580[(4)]))){
var statearr_15592_18610 = state_15580;
(statearr_15592_18610[(1)] = cljs.core.first((state_15580[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18611 = state_15580;
state_15580 = G__18611;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13775__auto__ = function(state_15580){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13775__auto____1.call(this,state_15580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13775__auto____0;
cljs$core$async$transduce_$_state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13775__auto____1;
return cljs$core$async$transduce_$_state_machine__13775__auto__;
})()
})();
var state__14459__auto__ = (function (){var statearr_15595 = f__14458__auto__();
(statearr_15595[(6)] = c__14457__auto__);

return statearr_15595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
}));

return c__14457__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15597 = arguments.length;
switch (G__15597) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14457__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = (function (state_15632){
var state_val_15633 = (state_15632[(1)]);
if((state_val_15633 === (7))){
var inst_15609 = (state_15632[(2)]);
var state_15632__$1 = state_15632;
var statearr_15635_18618 = state_15632__$1;
(statearr_15635_18618[(2)] = inst_15609);

(statearr_15635_18618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15633 === (1))){
var inst_15602 = cljs.core.seq(coll);
var inst_15603 = inst_15602;
var state_15632__$1 = (function (){var statearr_15636 = state_15632;
(statearr_15636[(7)] = inst_15603);

return statearr_15636;
})();
var statearr_15637_18619 = state_15632__$1;
(statearr_15637_18619[(2)] = null);

(statearr_15637_18619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15633 === (4))){
var inst_15603 = (state_15632[(7)]);
var inst_15607 = cljs.core.first(inst_15603);
var state_15632__$1 = state_15632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15632__$1,(7),ch,inst_15607);
} else {
if((state_val_15633 === (13))){
var inst_15626 = (state_15632[(2)]);
var state_15632__$1 = state_15632;
var statearr_15641_18620 = state_15632__$1;
(statearr_15641_18620[(2)] = inst_15626);

(statearr_15641_18620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15633 === (6))){
var inst_15613 = (state_15632[(2)]);
var state_15632__$1 = state_15632;
if(cljs.core.truth_(inst_15613)){
var statearr_15642_18621 = state_15632__$1;
(statearr_15642_18621[(1)] = (8));

} else {
var statearr_15647_18622 = state_15632__$1;
(statearr_15647_18622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15633 === (3))){
var inst_15630 = (state_15632[(2)]);
var state_15632__$1 = state_15632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15632__$1,inst_15630);
} else {
if((state_val_15633 === (12))){
var state_15632__$1 = state_15632;
var statearr_15648_18624 = state_15632__$1;
(statearr_15648_18624[(2)] = null);

(statearr_15648_18624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15633 === (2))){
var inst_15603 = (state_15632[(7)]);
var state_15632__$1 = state_15632;
if(cljs.core.truth_(inst_15603)){
var statearr_15649_18625 = state_15632__$1;
(statearr_15649_18625[(1)] = (4));

} else {
var statearr_15650_18626 = state_15632__$1;
(statearr_15650_18626[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15633 === (11))){
var inst_15623 = cljs.core.async.close_BANG_(ch);
var state_15632__$1 = state_15632;
var statearr_15651_18627 = state_15632__$1;
(statearr_15651_18627[(2)] = inst_15623);

(statearr_15651_18627[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15633 === (9))){
var state_15632__$1 = state_15632;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15653_18628 = state_15632__$1;
(statearr_15653_18628[(1)] = (11));

} else {
var statearr_15654_18629 = state_15632__$1;
(statearr_15654_18629[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15633 === (5))){
var inst_15603 = (state_15632[(7)]);
var state_15632__$1 = state_15632;
var statearr_15657_18630 = state_15632__$1;
(statearr_15657_18630[(2)] = inst_15603);

(statearr_15657_18630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15633 === (10))){
var inst_15628 = (state_15632[(2)]);
var state_15632__$1 = state_15632;
var statearr_15659_18631 = state_15632__$1;
(statearr_15659_18631[(2)] = inst_15628);

(statearr_15659_18631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15633 === (8))){
var inst_15603 = (state_15632[(7)]);
var inst_15615 = cljs.core.next(inst_15603);
var inst_15603__$1 = inst_15615;
var state_15632__$1 = (function (){var statearr_15662 = state_15632;
(statearr_15662[(7)] = inst_15603__$1);

return statearr_15662;
})();
var statearr_15663_18632 = state_15632__$1;
(statearr_15663_18632[(2)] = null);

(statearr_15663_18632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13775__auto__ = null;
var cljs$core$async$state_machine__13775__auto____0 = (function (){
var statearr_15664 = [null,null,null,null,null,null,null,null];
(statearr_15664[(0)] = cljs$core$async$state_machine__13775__auto__);

(statearr_15664[(1)] = (1));

return statearr_15664;
});
var cljs$core$async$state_machine__13775__auto____1 = (function (state_15632){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_15632);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e15665){var ex__13778__auto__ = e15665;
var statearr_15670_18633 = state_15632;
(statearr_15670_18633[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_15632[(4)]))){
var statearr_15671_18634 = state_15632;
(statearr_15671_18634[(1)] = cljs.core.first((state_15632[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18635 = state_15632;
state_15632 = G__18635;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$state_machine__13775__auto__ = function(state_15632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13775__auto____1.call(this,state_15632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13775__auto____0;
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13775__auto____1;
return cljs$core$async$state_machine__13775__auto__;
})()
})();
var state__14459__auto__ = (function (){var statearr_15677 = f__14458__auto__();
(statearr_15677[(6)] = c__14457__auto__);

return statearr_15677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
}));

return c__14457__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15683 = arguments.length;
switch (G__15683) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18641 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18641(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18643 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18643(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18644 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18644(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18651 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18651(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15721 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15721 = (function (ch,cs,meta15722){
this.ch = ch;
this.cs = cs;
this.meta15722 = meta15722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15723,meta15722__$1){
var self__ = this;
var _15723__$1 = this;
return (new cljs.core.async.t_cljs$core$async15721(self__.ch,self__.cs,meta15722__$1));
}));

(cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15723){
var self__ = this;
var _15723__$1 = this;
return self__.meta15722;
}));

(cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15721.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15722","meta15722",1002176132,null)], null);
}));

(cljs.core.async.t_cljs$core$async15721.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15721");

(cljs.core.async.t_cljs$core$async15721.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15721");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15721.
 */
cljs.core.async.__GT_t_cljs$core$async15721 = (function cljs$core$async$mult_$___GT_t_cljs$core$async15721(ch__$1,cs__$1,meta15722){
return (new cljs.core.async.t_cljs$core$async15721(ch__$1,cs__$1,meta15722));
});

}

return (new cljs.core.async.t_cljs$core$async15721(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14457__auto___18659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = (function (state_15882){
var state_val_15883 = (state_15882[(1)]);
if((state_val_15883 === (7))){
var inst_15878 = (state_15882[(2)]);
var state_15882__$1 = state_15882;
var statearr_15890_18660 = state_15882__$1;
(statearr_15890_18660[(2)] = inst_15878);

(statearr_15890_18660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (20))){
var inst_15776 = (state_15882[(7)]);
var inst_15789 = cljs.core.first(inst_15776);
var inst_15792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15789,(0),null);
var inst_15793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15789,(1),null);
var state_15882__$1 = (function (){var statearr_15891 = state_15882;
(statearr_15891[(8)] = inst_15792);

return statearr_15891;
})();
if(cljs.core.truth_(inst_15793)){
var statearr_15892_18661 = state_15882__$1;
(statearr_15892_18661[(1)] = (22));

} else {
var statearr_15893_18662 = state_15882__$1;
(statearr_15893_18662[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (27))){
var inst_15830 = (state_15882[(9)]);
var inst_15825 = (state_15882[(10)]);
var inst_15823 = (state_15882[(11)]);
var inst_15744 = (state_15882[(12)]);
var inst_15830__$1 = cljs.core._nth(inst_15823,inst_15825);
var inst_15831 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15830__$1,inst_15744,done);
var state_15882__$1 = (function (){var statearr_15898 = state_15882;
(statearr_15898[(9)] = inst_15830__$1);

return statearr_15898;
})();
if(cljs.core.truth_(inst_15831)){
var statearr_15899_18669 = state_15882__$1;
(statearr_15899_18669[(1)] = (30));

} else {
var statearr_15900_18670 = state_15882__$1;
(statearr_15900_18670[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (1))){
var state_15882__$1 = state_15882;
var statearr_15905_18671 = state_15882__$1;
(statearr_15905_18671[(2)] = null);

(statearr_15905_18671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (24))){
var inst_15776 = (state_15882[(7)]);
var inst_15798 = (state_15882[(2)]);
var inst_15799 = cljs.core.next(inst_15776);
var inst_15753 = inst_15799;
var inst_15754 = null;
var inst_15755 = (0);
var inst_15756 = (0);
var state_15882__$1 = (function (){var statearr_15906 = state_15882;
(statearr_15906[(13)] = inst_15756);

(statearr_15906[(14)] = inst_15753);

(statearr_15906[(15)] = inst_15754);

(statearr_15906[(16)] = inst_15798);

(statearr_15906[(17)] = inst_15755);

return statearr_15906;
})();
var statearr_15907_18672 = state_15882__$1;
(statearr_15907_18672[(2)] = null);

(statearr_15907_18672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (39))){
var state_15882__$1 = state_15882;
var statearr_15914_18674 = state_15882__$1;
(statearr_15914_18674[(2)] = null);

(statearr_15914_18674[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (4))){
var inst_15744 = (state_15882[(12)]);
var inst_15744__$1 = (state_15882[(2)]);
var inst_15745 = (inst_15744__$1 == null);
var state_15882__$1 = (function (){var statearr_15920 = state_15882;
(statearr_15920[(12)] = inst_15744__$1);

return statearr_15920;
})();
if(cljs.core.truth_(inst_15745)){
var statearr_15922_18682 = state_15882__$1;
(statearr_15922_18682[(1)] = (5));

} else {
var statearr_15923_18683 = state_15882__$1;
(statearr_15923_18683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (15))){
var inst_15756 = (state_15882[(13)]);
var inst_15753 = (state_15882[(14)]);
var inst_15754 = (state_15882[(15)]);
var inst_15755 = (state_15882[(17)]);
var inst_15772 = (state_15882[(2)]);
var inst_15773 = (inst_15756 + (1));
var tmp15911 = inst_15753;
var tmp15912 = inst_15754;
var tmp15913 = inst_15755;
var inst_15753__$1 = tmp15911;
var inst_15754__$1 = tmp15912;
var inst_15755__$1 = tmp15913;
var inst_15756__$1 = inst_15773;
var state_15882__$1 = (function (){var statearr_15929 = state_15882;
(statearr_15929[(18)] = inst_15772);

(statearr_15929[(13)] = inst_15756__$1);

(statearr_15929[(14)] = inst_15753__$1);

(statearr_15929[(15)] = inst_15754__$1);

(statearr_15929[(17)] = inst_15755__$1);

return statearr_15929;
})();
var statearr_15930_18687 = state_15882__$1;
(statearr_15930_18687[(2)] = null);

(statearr_15930_18687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (21))){
var inst_15802 = (state_15882[(2)]);
var state_15882__$1 = state_15882;
var statearr_15937_18688 = state_15882__$1;
(statearr_15937_18688[(2)] = inst_15802);

(statearr_15937_18688[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (31))){
var inst_15830 = (state_15882[(9)]);
var inst_15834 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15830);
var state_15882__$1 = state_15882;
var statearr_15942_18689 = state_15882__$1;
(statearr_15942_18689[(2)] = inst_15834);

(statearr_15942_18689[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (32))){
var inst_15825 = (state_15882[(10)]);
var inst_15823 = (state_15882[(11)]);
var inst_15822 = (state_15882[(19)]);
var inst_15824 = (state_15882[(20)]);
var inst_15836 = (state_15882[(2)]);
var inst_15838 = (inst_15825 + (1));
var tmp15934 = inst_15823;
var tmp15935 = inst_15822;
var tmp15936 = inst_15824;
var inst_15822__$1 = tmp15935;
var inst_15823__$1 = tmp15934;
var inst_15824__$1 = tmp15936;
var inst_15825__$1 = inst_15838;
var state_15882__$1 = (function (){var statearr_15945 = state_15882;
(statearr_15945[(10)] = inst_15825__$1);

(statearr_15945[(11)] = inst_15823__$1);

(statearr_15945[(21)] = inst_15836);

(statearr_15945[(19)] = inst_15822__$1);

(statearr_15945[(20)] = inst_15824__$1);

return statearr_15945;
})();
var statearr_15946_18692 = state_15882__$1;
(statearr_15946_18692[(2)] = null);

(statearr_15946_18692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (40))){
var inst_15850 = (state_15882[(22)]);
var inst_15854 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15850);
var state_15882__$1 = state_15882;
var statearr_15947_18693 = state_15882__$1;
(statearr_15947_18693[(2)] = inst_15854);

(statearr_15947_18693[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (33))){
var inst_15841 = (state_15882[(23)]);
var inst_15843 = cljs.core.chunked_seq_QMARK_(inst_15841);
var state_15882__$1 = state_15882;
if(inst_15843){
var statearr_15948_18694 = state_15882__$1;
(statearr_15948_18694[(1)] = (36));

} else {
var statearr_15949_18695 = state_15882__$1;
(statearr_15949_18695[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (13))){
var inst_15766 = (state_15882[(24)]);
var inst_15769 = cljs.core.async.close_BANG_(inst_15766);
var state_15882__$1 = state_15882;
var statearr_15950_18698 = state_15882__$1;
(statearr_15950_18698[(2)] = inst_15769);

(statearr_15950_18698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (22))){
var inst_15792 = (state_15882[(8)]);
var inst_15795 = cljs.core.async.close_BANG_(inst_15792);
var state_15882__$1 = state_15882;
var statearr_15951_18700 = state_15882__$1;
(statearr_15951_18700[(2)] = inst_15795);

(statearr_15951_18700[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (36))){
var inst_15841 = (state_15882[(23)]);
var inst_15845 = cljs.core.chunk_first(inst_15841);
var inst_15846 = cljs.core.chunk_rest(inst_15841);
var inst_15847 = cljs.core.count(inst_15845);
var inst_15822 = inst_15846;
var inst_15823 = inst_15845;
var inst_15824 = inst_15847;
var inst_15825 = (0);
var state_15882__$1 = (function (){var statearr_15952 = state_15882;
(statearr_15952[(10)] = inst_15825);

(statearr_15952[(11)] = inst_15823);

(statearr_15952[(19)] = inst_15822);

(statearr_15952[(20)] = inst_15824);

return statearr_15952;
})();
var statearr_15956_18701 = state_15882__$1;
(statearr_15956_18701[(2)] = null);

(statearr_15956_18701[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (41))){
var inst_15841 = (state_15882[(23)]);
var inst_15856 = (state_15882[(2)]);
var inst_15858 = cljs.core.next(inst_15841);
var inst_15822 = inst_15858;
var inst_15823 = null;
var inst_15824 = (0);
var inst_15825 = (0);
var state_15882__$1 = (function (){var statearr_15957 = state_15882;
(statearr_15957[(10)] = inst_15825);

(statearr_15957[(11)] = inst_15823);

(statearr_15957[(19)] = inst_15822);

(statearr_15957[(20)] = inst_15824);

(statearr_15957[(25)] = inst_15856);

return statearr_15957;
})();
var statearr_15958_18702 = state_15882__$1;
(statearr_15958_18702[(2)] = null);

(statearr_15958_18702[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (43))){
var state_15882__$1 = state_15882;
var statearr_15959_18703 = state_15882__$1;
(statearr_15959_18703[(2)] = null);

(statearr_15959_18703[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (29))){
var inst_15866 = (state_15882[(2)]);
var state_15882__$1 = state_15882;
var statearr_15960_18704 = state_15882__$1;
(statearr_15960_18704[(2)] = inst_15866);

(statearr_15960_18704[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (44))){
var inst_15875 = (state_15882[(2)]);
var state_15882__$1 = (function (){var statearr_15962 = state_15882;
(statearr_15962[(26)] = inst_15875);

return statearr_15962;
})();
var statearr_15964_18705 = state_15882__$1;
(statearr_15964_18705[(2)] = null);

(statearr_15964_18705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (6))){
var inst_15813 = (state_15882[(27)]);
var inst_15812 = cljs.core.deref(cs);
var inst_15813__$1 = cljs.core.keys(inst_15812);
var inst_15814 = cljs.core.count(inst_15813__$1);
var inst_15815 = cljs.core.reset_BANG_(dctr,inst_15814);
var inst_15820 = cljs.core.seq(inst_15813__$1);
var inst_15822 = inst_15820;
var inst_15823 = null;
var inst_15824 = (0);
var inst_15825 = (0);
var state_15882__$1 = (function (){var statearr_15966 = state_15882;
(statearr_15966[(27)] = inst_15813__$1);

(statearr_15966[(10)] = inst_15825);

(statearr_15966[(11)] = inst_15823);

(statearr_15966[(19)] = inst_15822);

(statearr_15966[(28)] = inst_15815);

(statearr_15966[(20)] = inst_15824);

return statearr_15966;
})();
var statearr_15967_18712 = state_15882__$1;
(statearr_15967_18712[(2)] = null);

(statearr_15967_18712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (28))){
var inst_15841 = (state_15882[(23)]);
var inst_15822 = (state_15882[(19)]);
var inst_15841__$1 = cljs.core.seq(inst_15822);
var state_15882__$1 = (function (){var statearr_15968 = state_15882;
(statearr_15968[(23)] = inst_15841__$1);

return statearr_15968;
})();
if(inst_15841__$1){
var statearr_15969_18721 = state_15882__$1;
(statearr_15969_18721[(1)] = (33));

} else {
var statearr_15970_18722 = state_15882__$1;
(statearr_15970_18722[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (25))){
var inst_15825 = (state_15882[(10)]);
var inst_15824 = (state_15882[(20)]);
var inst_15827 = (inst_15825 < inst_15824);
var inst_15828 = inst_15827;
var state_15882__$1 = state_15882;
if(cljs.core.truth_(inst_15828)){
var statearr_15971_18725 = state_15882__$1;
(statearr_15971_18725[(1)] = (27));

} else {
var statearr_15972_18726 = state_15882__$1;
(statearr_15972_18726[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (34))){
var state_15882__$1 = state_15882;
var statearr_15973_18729 = state_15882__$1;
(statearr_15973_18729[(2)] = null);

(statearr_15973_18729[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (17))){
var state_15882__$1 = state_15882;
var statearr_15975_18730 = state_15882__$1;
(statearr_15975_18730[(2)] = null);

(statearr_15975_18730[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (3))){
var inst_15880 = (state_15882[(2)]);
var state_15882__$1 = state_15882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15882__$1,inst_15880);
} else {
if((state_val_15883 === (12))){
var inst_15808 = (state_15882[(2)]);
var state_15882__$1 = state_15882;
var statearr_15977_18731 = state_15882__$1;
(statearr_15977_18731[(2)] = inst_15808);

(statearr_15977_18731[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (2))){
var state_15882__$1 = state_15882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15882__$1,(4),ch);
} else {
if((state_val_15883 === (23))){
var state_15882__$1 = state_15882;
var statearr_15978_18735 = state_15882__$1;
(statearr_15978_18735[(2)] = null);

(statearr_15978_18735[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (35))){
var inst_15864 = (state_15882[(2)]);
var state_15882__$1 = state_15882;
var statearr_15981_18740 = state_15882__$1;
(statearr_15981_18740[(2)] = inst_15864);

(statearr_15981_18740[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (19))){
var inst_15776 = (state_15882[(7)]);
var inst_15780 = cljs.core.chunk_first(inst_15776);
var inst_15781 = cljs.core.chunk_rest(inst_15776);
var inst_15782 = cljs.core.count(inst_15780);
var inst_15753 = inst_15781;
var inst_15754 = inst_15780;
var inst_15755 = inst_15782;
var inst_15756 = (0);
var state_15882__$1 = (function (){var statearr_15983 = state_15882;
(statearr_15983[(13)] = inst_15756);

(statearr_15983[(14)] = inst_15753);

(statearr_15983[(15)] = inst_15754);

(statearr_15983[(17)] = inst_15755);

return statearr_15983;
})();
var statearr_15984_18748 = state_15882__$1;
(statearr_15984_18748[(2)] = null);

(statearr_15984_18748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (11))){
var inst_15753 = (state_15882[(14)]);
var inst_15776 = (state_15882[(7)]);
var inst_15776__$1 = cljs.core.seq(inst_15753);
var state_15882__$1 = (function (){var statearr_15986 = state_15882;
(statearr_15986[(7)] = inst_15776__$1);

return statearr_15986;
})();
if(inst_15776__$1){
var statearr_15988_18749 = state_15882__$1;
(statearr_15988_18749[(1)] = (16));

} else {
var statearr_15989_18750 = state_15882__$1;
(statearr_15989_18750[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (9))){
var inst_15810 = (state_15882[(2)]);
var state_15882__$1 = state_15882;
var statearr_15991_18751 = state_15882__$1;
(statearr_15991_18751[(2)] = inst_15810);

(statearr_15991_18751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (5))){
var inst_15751 = cljs.core.deref(cs);
var inst_15752 = cljs.core.seq(inst_15751);
var inst_15753 = inst_15752;
var inst_15754 = null;
var inst_15755 = (0);
var inst_15756 = (0);
var state_15882__$1 = (function (){var statearr_15992 = state_15882;
(statearr_15992[(13)] = inst_15756);

(statearr_15992[(14)] = inst_15753);

(statearr_15992[(15)] = inst_15754);

(statearr_15992[(17)] = inst_15755);

return statearr_15992;
})();
var statearr_15993_18753 = state_15882__$1;
(statearr_15993_18753[(2)] = null);

(statearr_15993_18753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (14))){
var state_15882__$1 = state_15882;
var statearr_15994_18754 = state_15882__$1;
(statearr_15994_18754[(2)] = null);

(statearr_15994_18754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (45))){
var inst_15872 = (state_15882[(2)]);
var state_15882__$1 = state_15882;
var statearr_15999_18755 = state_15882__$1;
(statearr_15999_18755[(2)] = inst_15872);

(statearr_15999_18755[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (26))){
var inst_15813 = (state_15882[(27)]);
var inst_15868 = (state_15882[(2)]);
var inst_15869 = cljs.core.seq(inst_15813);
var state_15882__$1 = (function (){var statearr_16001 = state_15882;
(statearr_16001[(29)] = inst_15868);

return statearr_16001;
})();
if(inst_15869){
var statearr_16002_18761 = state_15882__$1;
(statearr_16002_18761[(1)] = (42));

} else {
var statearr_16003_18762 = state_15882__$1;
(statearr_16003_18762[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (16))){
var inst_15776 = (state_15882[(7)]);
var inst_15778 = cljs.core.chunked_seq_QMARK_(inst_15776);
var state_15882__$1 = state_15882;
if(inst_15778){
var statearr_16006_18763 = state_15882__$1;
(statearr_16006_18763[(1)] = (19));

} else {
var statearr_16008_18764 = state_15882__$1;
(statearr_16008_18764[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (38))){
var inst_15861 = (state_15882[(2)]);
var state_15882__$1 = state_15882;
var statearr_16009_18765 = state_15882__$1;
(statearr_16009_18765[(2)] = inst_15861);

(statearr_16009_18765[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (30))){
var state_15882__$1 = state_15882;
var statearr_16016_18766 = state_15882__$1;
(statearr_16016_18766[(2)] = null);

(statearr_16016_18766[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (10))){
var inst_15756 = (state_15882[(13)]);
var inst_15754 = (state_15882[(15)]);
var inst_15765 = cljs.core._nth(inst_15754,inst_15756);
var inst_15766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15765,(0),null);
var inst_15767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15765,(1),null);
var state_15882__$1 = (function (){var statearr_16017 = state_15882;
(statearr_16017[(24)] = inst_15766);

return statearr_16017;
})();
if(cljs.core.truth_(inst_15767)){
var statearr_16018_18767 = state_15882__$1;
(statearr_16018_18767[(1)] = (13));

} else {
var statearr_16019_18768 = state_15882__$1;
(statearr_16019_18768[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (18))){
var inst_15805 = (state_15882[(2)]);
var state_15882__$1 = state_15882;
var statearr_16020_18769 = state_15882__$1;
(statearr_16020_18769[(2)] = inst_15805);

(statearr_16020_18769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (42))){
var state_15882__$1 = state_15882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15882__$1,(45),dchan);
} else {
if((state_val_15883 === (37))){
var inst_15841 = (state_15882[(23)]);
var inst_15850 = (state_15882[(22)]);
var inst_15744 = (state_15882[(12)]);
var inst_15850__$1 = cljs.core.first(inst_15841);
var inst_15851 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15850__$1,inst_15744,done);
var state_15882__$1 = (function (){var statearr_16036 = state_15882;
(statearr_16036[(22)] = inst_15850__$1);

return statearr_16036;
})();
if(cljs.core.truth_(inst_15851)){
var statearr_16039_18770 = state_15882__$1;
(statearr_16039_18770[(1)] = (39));

} else {
var statearr_16041_18771 = state_15882__$1;
(statearr_16041_18771[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (8))){
var inst_15756 = (state_15882[(13)]);
var inst_15755 = (state_15882[(17)]);
var inst_15758 = (inst_15756 < inst_15755);
var inst_15759 = inst_15758;
var state_15882__$1 = state_15882;
if(cljs.core.truth_(inst_15759)){
var statearr_16044_18772 = state_15882__$1;
(statearr_16044_18772[(1)] = (10));

} else {
var statearr_16045_18773 = state_15882__$1;
(statearr_16045_18773[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13775__auto__ = null;
var cljs$core$async$mult_$_state_machine__13775__auto____0 = (function (){
var statearr_16056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16056[(0)] = cljs$core$async$mult_$_state_machine__13775__auto__);

(statearr_16056[(1)] = (1));

return statearr_16056;
});
var cljs$core$async$mult_$_state_machine__13775__auto____1 = (function (state_15882){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_15882);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e16063){var ex__13778__auto__ = e16063;
var statearr_16068_18780 = state_15882;
(statearr_16068_18780[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_15882[(4)]))){
var statearr_16072_18781 = state_15882;
(statearr_16072_18781[(1)] = cljs.core.first((state_15882[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18782 = state_15882;
state_15882 = G__18782;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13775__auto__ = function(state_15882){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13775__auto____1.call(this,state_15882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13775__auto____0;
cljs$core$async$mult_$_state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13775__auto____1;
return cljs$core$async$mult_$_state_machine__13775__auto__;
})()
})();
var state__14459__auto__ = (function (){var statearr_16076 = f__14458__auto__();
(statearr_16076[(6)] = c__14457__auto___18659);

return statearr_16076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16089 = arguments.length;
switch (G__16089) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18788 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18788(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18789 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18789(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18790 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18790(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18791 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18791(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18799 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18799(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18803 = arguments.length;
var i__5770__auto___18804 = (0);
while(true){
if((i__5770__auto___18804 < len__5769__auto___18803)){
args__5775__auto__.push((arguments[i__5770__auto___18804]));

var G__18805 = (i__5770__auto___18804 + (1));
i__5770__auto___18804 = G__18805;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16237){
var map__16239 = p__16237;
var map__16239__$1 = cljs.core.__destructure_map(map__16239);
var opts = map__16239__$1;
var statearr_16240_18806 = state;
(statearr_16240_18806[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16242_18807 = state;
(statearr_16242_18807[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16248_18808 = state;
(statearr_16248_18808[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16220){
var G__16221 = cljs.core.first(seq16220);
var seq16220__$1 = cljs.core.next(seq16220);
var G__16222 = cljs.core.first(seq16220__$1);
var seq16220__$2 = cljs.core.next(seq16220__$1);
var G__16223 = cljs.core.first(seq16220__$2);
var seq16220__$3 = cljs.core.next(seq16220__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16221,G__16222,G__16223,seq16220__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16293 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16293 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16294){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16294 = meta16294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16295,meta16294__$1){
var self__ = this;
var _16295__$1 = this;
return (new cljs.core.async.t_cljs$core$async16293(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16294__$1));
}));

(cljs.core.async.t_cljs$core$async16293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16295){
var self__ = this;
var _16295__$1 = this;
return self__.meta16294;
}));

(cljs.core.async.t_cljs$core$async16293.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16293.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16293.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16293.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16293.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16293.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16293.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16293.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16294","meta16294",-494284767,null)], null);
}));

(cljs.core.async.t_cljs$core$async16293.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16293");

(cljs.core.async.t_cljs$core$async16293.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16293");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16293.
 */
cljs.core.async.__GT_t_cljs$core$async16293 = (function cljs$core$async$mix_$___GT_t_cljs$core$async16293(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16294){
return (new cljs.core.async.t_cljs$core$async16293(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16294));
});

}

return (new cljs.core.async.t_cljs$core$async16293(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14457__auto___18818 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = (function (state_16475){
var state_val_16476 = (state_16475[(1)]);
if((state_val_16476 === (7))){
var inst_16416 = (state_16475[(2)]);
var state_16475__$1 = state_16475;
if(cljs.core.truth_(inst_16416)){
var statearr_16483_18825 = state_16475__$1;
(statearr_16483_18825[(1)] = (8));

} else {
var statearr_16488_18826 = state_16475__$1;
(statearr_16488_18826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (20))){
var inst_16405 = (state_16475[(7)]);
var state_16475__$1 = state_16475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16475__$1,(23),out,inst_16405);
} else {
if((state_val_16476 === (1))){
var inst_16364 = calc_state();
var inst_16366 = cljs.core.__destructure_map(inst_16364);
var inst_16372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16366,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16366,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16366,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16380 = inst_16364;
var state_16475__$1 = (function (){var statearr_16501 = state_16475;
(statearr_16501[(8)] = inst_16372);

(statearr_16501[(9)] = inst_16380);

(statearr_16501[(10)] = inst_16373);

(statearr_16501[(11)] = inst_16379);

return statearr_16501;
})();
var statearr_16507_18827 = state_16475__$1;
(statearr_16507_18827[(2)] = null);

(statearr_16507_18827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (24))){
var inst_16387 = (state_16475[(12)]);
var inst_16380 = inst_16387;
var state_16475__$1 = (function (){var statearr_16509 = state_16475;
(statearr_16509[(9)] = inst_16380);

return statearr_16509;
})();
var statearr_16510_18828 = state_16475__$1;
(statearr_16510_18828[(2)] = null);

(statearr_16510_18828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (4))){
var inst_16408 = (state_16475[(13)]);
var inst_16405 = (state_16475[(7)]);
var inst_16404 = (state_16475[(2)]);
var inst_16405__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16404,(0),null);
var inst_16407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16404,(1),null);
var inst_16408__$1 = (inst_16405__$1 == null);
var state_16475__$1 = (function (){var statearr_16514 = state_16475;
(statearr_16514[(13)] = inst_16408__$1);

(statearr_16514[(14)] = inst_16407);

(statearr_16514[(7)] = inst_16405__$1);

return statearr_16514;
})();
if(cljs.core.truth_(inst_16408__$1)){
var statearr_16517_18829 = state_16475__$1;
(statearr_16517_18829[(1)] = (5));

} else {
var statearr_16518_18830 = state_16475__$1;
(statearr_16518_18830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (15))){
var inst_16434 = (state_16475[(15)]);
var inst_16388 = (state_16475[(16)]);
var inst_16434__$1 = cljs.core.empty_QMARK_(inst_16388);
var state_16475__$1 = (function (){var statearr_16523 = state_16475;
(statearr_16523[(15)] = inst_16434__$1);

return statearr_16523;
})();
if(inst_16434__$1){
var statearr_16525_18831 = state_16475__$1;
(statearr_16525_18831[(1)] = (17));

} else {
var statearr_16526_18832 = state_16475__$1;
(statearr_16526_18832[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (21))){
var inst_16387 = (state_16475[(12)]);
var inst_16380 = inst_16387;
var state_16475__$1 = (function (){var statearr_16530 = state_16475;
(statearr_16530[(9)] = inst_16380);

return statearr_16530;
})();
var statearr_16531_18833 = state_16475__$1;
(statearr_16531_18833[(2)] = null);

(statearr_16531_18833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (13))){
var inst_16424 = (state_16475[(2)]);
var inst_16425 = calc_state();
var inst_16380 = inst_16425;
var state_16475__$1 = (function (){var statearr_16533 = state_16475;
(statearr_16533[(17)] = inst_16424);

(statearr_16533[(9)] = inst_16380);

return statearr_16533;
})();
var statearr_16535_18834 = state_16475__$1;
(statearr_16535_18834[(2)] = null);

(statearr_16535_18834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (22))){
var inst_16464 = (state_16475[(2)]);
var state_16475__$1 = state_16475;
var statearr_16550_18835 = state_16475__$1;
(statearr_16550_18835[(2)] = inst_16464);

(statearr_16550_18835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (6))){
var inst_16407 = (state_16475[(14)]);
var inst_16414 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16407,change);
var state_16475__$1 = state_16475;
var statearr_16572_18836 = state_16475__$1;
(statearr_16572_18836[(2)] = inst_16414);

(statearr_16572_18836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (25))){
var state_16475__$1 = state_16475;
var statearr_16576_18837 = state_16475__$1;
(statearr_16576_18837[(2)] = null);

(statearr_16576_18837[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (17))){
var inst_16389 = (state_16475[(18)]);
var inst_16407 = (state_16475[(14)]);
var inst_16436 = (inst_16389.cljs$core$IFn$_invoke$arity$1 ? inst_16389.cljs$core$IFn$_invoke$arity$1(inst_16407) : inst_16389.call(null,inst_16407));
var inst_16437 = cljs.core.not(inst_16436);
var state_16475__$1 = state_16475;
var statearr_16578_18838 = state_16475__$1;
(statearr_16578_18838[(2)] = inst_16437);

(statearr_16578_18838[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (3))){
var inst_16468 = (state_16475[(2)]);
var state_16475__$1 = state_16475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16475__$1,inst_16468);
} else {
if((state_val_16476 === (12))){
var state_16475__$1 = state_16475;
var statearr_16584_18839 = state_16475__$1;
(statearr_16584_18839[(2)] = null);

(statearr_16584_18839[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (2))){
var inst_16387 = (state_16475[(12)]);
var inst_16380 = (state_16475[(9)]);
var inst_16387__$1 = cljs.core.__destructure_map(inst_16380);
var inst_16388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16387__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16387__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16387__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16475__$1 = (function (){var statearr_16590 = state_16475;
(statearr_16590[(18)] = inst_16389);

(statearr_16590[(12)] = inst_16387__$1);

(statearr_16590[(16)] = inst_16388);

return statearr_16590;
})();
return cljs.core.async.ioc_alts_BANG_(state_16475__$1,(4),inst_16392);
} else {
if((state_val_16476 === (23))){
var inst_16452 = (state_16475[(2)]);
var state_16475__$1 = state_16475;
if(cljs.core.truth_(inst_16452)){
var statearr_16593_18840 = state_16475__$1;
(statearr_16593_18840[(1)] = (24));

} else {
var statearr_16596_18841 = state_16475__$1;
(statearr_16596_18841[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (19))){
var inst_16441 = (state_16475[(2)]);
var state_16475__$1 = state_16475;
var statearr_16602_18842 = state_16475__$1;
(statearr_16602_18842[(2)] = inst_16441);

(statearr_16602_18842[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (11))){
var inst_16407 = (state_16475[(14)]);
var inst_16421 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16407);
var state_16475__$1 = state_16475;
var statearr_16610_18843 = state_16475__$1;
(statearr_16610_18843[(2)] = inst_16421);

(statearr_16610_18843[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (9))){
var inst_16407 = (state_16475[(14)]);
var inst_16429 = (state_16475[(19)]);
var inst_16388 = (state_16475[(16)]);
var inst_16429__$1 = (inst_16388.cljs$core$IFn$_invoke$arity$1 ? inst_16388.cljs$core$IFn$_invoke$arity$1(inst_16407) : inst_16388.call(null,inst_16407));
var state_16475__$1 = (function (){var statearr_16614 = state_16475;
(statearr_16614[(19)] = inst_16429__$1);

return statearr_16614;
})();
if(cljs.core.truth_(inst_16429__$1)){
var statearr_16615_18844 = state_16475__$1;
(statearr_16615_18844[(1)] = (14));

} else {
var statearr_16619_18845 = state_16475__$1;
(statearr_16619_18845[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (5))){
var inst_16408 = (state_16475[(13)]);
var state_16475__$1 = state_16475;
var statearr_16624_18846 = state_16475__$1;
(statearr_16624_18846[(2)] = inst_16408);

(statearr_16624_18846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (14))){
var inst_16429 = (state_16475[(19)]);
var state_16475__$1 = state_16475;
var statearr_16627_18847 = state_16475__$1;
(statearr_16627_18847[(2)] = inst_16429);

(statearr_16627_18847[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (26))){
var inst_16457 = (state_16475[(2)]);
var state_16475__$1 = state_16475;
var statearr_16637_18848 = state_16475__$1;
(statearr_16637_18848[(2)] = inst_16457);

(statearr_16637_18848[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (16))){
var inst_16444 = (state_16475[(2)]);
var state_16475__$1 = state_16475;
if(cljs.core.truth_(inst_16444)){
var statearr_16643_18849 = state_16475__$1;
(statearr_16643_18849[(1)] = (20));

} else {
var statearr_16645_18850 = state_16475__$1;
(statearr_16645_18850[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (10))){
var inst_16466 = (state_16475[(2)]);
var state_16475__$1 = state_16475;
var statearr_16646_18851 = state_16475__$1;
(statearr_16646_18851[(2)] = inst_16466);

(statearr_16646_18851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (18))){
var inst_16434 = (state_16475[(15)]);
var state_16475__$1 = state_16475;
var statearr_16647_18852 = state_16475__$1;
(statearr_16647_18852[(2)] = inst_16434);

(statearr_16647_18852[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16476 === (8))){
var inst_16405 = (state_16475[(7)]);
var inst_16419 = (inst_16405 == null);
var state_16475__$1 = state_16475;
if(cljs.core.truth_(inst_16419)){
var statearr_16649_18853 = state_16475__$1;
(statearr_16649_18853[(1)] = (11));

} else {
var statearr_16650_18854 = state_16475__$1;
(statearr_16650_18854[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13775__auto__ = null;
var cljs$core$async$mix_$_state_machine__13775__auto____0 = (function (){
var statearr_16656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16656[(0)] = cljs$core$async$mix_$_state_machine__13775__auto__);

(statearr_16656[(1)] = (1));

return statearr_16656;
});
var cljs$core$async$mix_$_state_machine__13775__auto____1 = (function (state_16475){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_16475);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e16658){var ex__13778__auto__ = e16658;
var statearr_16659_18856 = state_16475;
(statearr_16659_18856[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_16475[(4)]))){
var statearr_16661_18861 = state_16475;
(statearr_16661_18861[(1)] = cljs.core.first((state_16475[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18862 = state_16475;
state_16475 = G__18862;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13775__auto__ = function(state_16475){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13775__auto____1.call(this,state_16475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13775__auto____0;
cljs$core$async$mix_$_state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13775__auto____1;
return cljs$core$async$mix_$_state_machine__13775__auto__;
})()
})();
var state__14459__auto__ = (function (){var statearr_16667 = f__14458__auto__();
(statearr_16667[(6)] = c__14457__auto___18818);

return statearr_16667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18863 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18863(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18865 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18865(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18866 = (function() {
var G__18867 = null;
var G__18867__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18867__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18867 = function(p,v){
switch(arguments.length){
case 1:
return G__18867__1.call(this,p);
case 2:
return G__18867__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18867.cljs$core$IFn$_invoke$arity$1 = G__18867__1;
G__18867.cljs$core$IFn$_invoke$arity$2 = G__18867__2;
return G__18867;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16736 = arguments.length;
switch (G__16736) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18866(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18866(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16753 = arguments.length;
switch (G__16753) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16746_SHARP_){
if(cljs.core.truth_((p1__16746_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16746_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16746_SHARP_.call(null,topic)))){
return p1__16746_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16746_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16769 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16769 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16770){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16770 = meta16770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16771,meta16770__$1){
var self__ = this;
var _16771__$1 = this;
return (new cljs.core.async.t_cljs$core$async16769(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16770__$1));
}));

(cljs.core.async.t_cljs$core$async16769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16771){
var self__ = this;
var _16771__$1 = this;
return self__.meta16770;
}));

(cljs.core.async.t_cljs$core$async16769.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16769.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16769.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16769.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16769.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16769.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16769.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16769.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16770","meta16770",-1445877735,null)], null);
}));

(cljs.core.async.t_cljs$core$async16769.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16769.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16769");

(cljs.core.async.t_cljs$core$async16769.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16769");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16769.
 */
cljs.core.async.__GT_t_cljs$core$async16769 = (function cljs$core$async$__GT_t_cljs$core$async16769(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16770){
return (new cljs.core.async.t_cljs$core$async16769(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16770));
});

}

return (new cljs.core.async.t_cljs$core$async16769(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14457__auto___18880 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = (function (state_16890){
var state_val_16893 = (state_16890[(1)]);
if((state_val_16893 === (7))){
var inst_16886 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
var statearr_16895_18881 = state_16890__$1;
(statearr_16895_18881[(2)] = inst_16886);

(statearr_16895_18881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (20))){
var state_16890__$1 = state_16890;
var statearr_16896_18882 = state_16890__$1;
(statearr_16896_18882[(2)] = null);

(statearr_16896_18882[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (1))){
var state_16890__$1 = state_16890;
var statearr_16897_18883 = state_16890__$1;
(statearr_16897_18883[(2)] = null);

(statearr_16897_18883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (24))){
var inst_16868 = (state_16890[(7)]);
var inst_16878 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16868);
var state_16890__$1 = state_16890;
var statearr_16900_18884 = state_16890__$1;
(statearr_16900_18884[(2)] = inst_16878);

(statearr_16900_18884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (4))){
var inst_16809 = (state_16890[(8)]);
var inst_16809__$1 = (state_16890[(2)]);
var inst_16810 = (inst_16809__$1 == null);
var state_16890__$1 = (function (){var statearr_16905 = state_16890;
(statearr_16905[(8)] = inst_16809__$1);

return statearr_16905;
})();
if(cljs.core.truth_(inst_16810)){
var statearr_16913_18886 = state_16890__$1;
(statearr_16913_18886[(1)] = (5));

} else {
var statearr_16918_18888 = state_16890__$1;
(statearr_16918_18888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (15))){
var inst_16862 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
var statearr_16927_18889 = state_16890__$1;
(statearr_16927_18889[(2)] = inst_16862);

(statearr_16927_18889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (21))){
var inst_16883 = (state_16890[(2)]);
var state_16890__$1 = (function (){var statearr_16932 = state_16890;
(statearr_16932[(9)] = inst_16883);

return statearr_16932;
})();
var statearr_16933_18890 = state_16890__$1;
(statearr_16933_18890[(2)] = null);

(statearr_16933_18890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (13))){
var inst_16837 = (state_16890[(10)]);
var inst_16839 = cljs.core.chunked_seq_QMARK_(inst_16837);
var state_16890__$1 = state_16890;
if(inst_16839){
var statearr_16935_18891 = state_16890__$1;
(statearr_16935_18891[(1)] = (16));

} else {
var statearr_16936_18892 = state_16890__$1;
(statearr_16936_18892[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (22))){
var inst_16875 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
if(cljs.core.truth_(inst_16875)){
var statearr_16937_18893 = state_16890__$1;
(statearr_16937_18893[(1)] = (23));

} else {
var statearr_16938_18894 = state_16890__$1;
(statearr_16938_18894[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (6))){
var inst_16809 = (state_16890[(8)]);
var inst_16871 = (state_16890[(11)]);
var inst_16868 = (state_16890[(7)]);
var inst_16868__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16809) : topic_fn.call(null,inst_16809));
var inst_16869 = cljs.core.deref(mults);
var inst_16871__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16869,inst_16868__$1);
var state_16890__$1 = (function (){var statearr_16940 = state_16890;
(statearr_16940[(11)] = inst_16871__$1);

(statearr_16940[(7)] = inst_16868__$1);

return statearr_16940;
})();
if(cljs.core.truth_(inst_16871__$1)){
var statearr_16941_18895 = state_16890__$1;
(statearr_16941_18895[(1)] = (19));

} else {
var statearr_16942_18896 = state_16890__$1;
(statearr_16942_18896[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (25))){
var inst_16880 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
var statearr_16943_18897 = state_16890__$1;
(statearr_16943_18897[(2)] = inst_16880);

(statearr_16943_18897[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (17))){
var inst_16837 = (state_16890[(10)]);
var inst_16848 = cljs.core.first(inst_16837);
var inst_16850 = cljs.core.async.muxch_STAR_(inst_16848);
var inst_16851 = cljs.core.async.close_BANG_(inst_16850);
var inst_16855 = cljs.core.next(inst_16837);
var inst_16819 = inst_16855;
var inst_16823 = null;
var inst_16824 = (0);
var inst_16825 = (0);
var state_16890__$1 = (function (){var statearr_16945 = state_16890;
(statearr_16945[(12)] = inst_16851);

(statearr_16945[(13)] = inst_16823);

(statearr_16945[(14)] = inst_16825);

(statearr_16945[(15)] = inst_16819);

(statearr_16945[(16)] = inst_16824);

return statearr_16945;
})();
var statearr_16948_18898 = state_16890__$1;
(statearr_16948_18898[(2)] = null);

(statearr_16948_18898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (3))){
var inst_16888 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16890__$1,inst_16888);
} else {
if((state_val_16893 === (12))){
var inst_16864 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
var statearr_16950_18899 = state_16890__$1;
(statearr_16950_18899[(2)] = inst_16864);

(statearr_16950_18899[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (2))){
var state_16890__$1 = state_16890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16890__$1,(4),ch);
} else {
if((state_val_16893 === (23))){
var state_16890__$1 = state_16890;
var statearr_16953_18900 = state_16890__$1;
(statearr_16953_18900[(2)] = null);

(statearr_16953_18900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (19))){
var inst_16809 = (state_16890[(8)]);
var inst_16871 = (state_16890[(11)]);
var inst_16873 = cljs.core.async.muxch_STAR_(inst_16871);
var state_16890__$1 = state_16890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16890__$1,(22),inst_16873,inst_16809);
} else {
if((state_val_16893 === (11))){
var inst_16819 = (state_16890[(15)]);
var inst_16837 = (state_16890[(10)]);
var inst_16837__$1 = cljs.core.seq(inst_16819);
var state_16890__$1 = (function (){var statearr_16960 = state_16890;
(statearr_16960[(10)] = inst_16837__$1);

return statearr_16960;
})();
if(inst_16837__$1){
var statearr_16961_18901 = state_16890__$1;
(statearr_16961_18901[(1)] = (13));

} else {
var statearr_16962_18903 = state_16890__$1;
(statearr_16962_18903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (9))){
var inst_16866 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
var statearr_16963_18904 = state_16890__$1;
(statearr_16963_18904[(2)] = inst_16866);

(statearr_16963_18904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (5))){
var inst_16816 = cljs.core.deref(mults);
var inst_16817 = cljs.core.vals(inst_16816);
var inst_16818 = cljs.core.seq(inst_16817);
var inst_16819 = inst_16818;
var inst_16823 = null;
var inst_16824 = (0);
var inst_16825 = (0);
var state_16890__$1 = (function (){var statearr_16964 = state_16890;
(statearr_16964[(13)] = inst_16823);

(statearr_16964[(14)] = inst_16825);

(statearr_16964[(15)] = inst_16819);

(statearr_16964[(16)] = inst_16824);

return statearr_16964;
})();
var statearr_16965_18905 = state_16890__$1;
(statearr_16965_18905[(2)] = null);

(statearr_16965_18905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (14))){
var state_16890__$1 = state_16890;
var statearr_16970_18906 = state_16890__$1;
(statearr_16970_18906[(2)] = null);

(statearr_16970_18906[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (16))){
var inst_16837 = (state_16890[(10)]);
var inst_16842 = cljs.core.chunk_first(inst_16837);
var inst_16844 = cljs.core.chunk_rest(inst_16837);
var inst_16845 = cljs.core.count(inst_16842);
var inst_16819 = inst_16844;
var inst_16823 = inst_16842;
var inst_16824 = inst_16845;
var inst_16825 = (0);
var state_16890__$1 = (function (){var statearr_16971 = state_16890;
(statearr_16971[(13)] = inst_16823);

(statearr_16971[(14)] = inst_16825);

(statearr_16971[(15)] = inst_16819);

(statearr_16971[(16)] = inst_16824);

return statearr_16971;
})();
var statearr_16972_18907 = state_16890__$1;
(statearr_16972_18907[(2)] = null);

(statearr_16972_18907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (10))){
var inst_16823 = (state_16890[(13)]);
var inst_16825 = (state_16890[(14)]);
var inst_16819 = (state_16890[(15)]);
var inst_16824 = (state_16890[(16)]);
var inst_16831 = cljs.core._nth(inst_16823,inst_16825);
var inst_16832 = cljs.core.async.muxch_STAR_(inst_16831);
var inst_16833 = cljs.core.async.close_BANG_(inst_16832);
var inst_16834 = (inst_16825 + (1));
var tmp16967 = inst_16823;
var tmp16968 = inst_16819;
var tmp16969 = inst_16824;
var inst_16819__$1 = tmp16968;
var inst_16823__$1 = tmp16967;
var inst_16824__$1 = tmp16969;
var inst_16825__$1 = inst_16834;
var state_16890__$1 = (function (){var statearr_16981 = state_16890;
(statearr_16981[(17)] = inst_16833);

(statearr_16981[(13)] = inst_16823__$1);

(statearr_16981[(14)] = inst_16825__$1);

(statearr_16981[(15)] = inst_16819__$1);

(statearr_16981[(16)] = inst_16824__$1);

return statearr_16981;
})();
var statearr_16982_18909 = state_16890__$1;
(statearr_16982_18909[(2)] = null);

(statearr_16982_18909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (18))){
var inst_16858 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
var statearr_16984_18910 = state_16890__$1;
(statearr_16984_18910[(2)] = inst_16858);

(statearr_16984_18910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (8))){
var inst_16825 = (state_16890[(14)]);
var inst_16824 = (state_16890[(16)]);
var inst_16827 = (inst_16825 < inst_16824);
var inst_16828 = inst_16827;
var state_16890__$1 = state_16890;
if(cljs.core.truth_(inst_16828)){
var statearr_16989_18911 = state_16890__$1;
(statearr_16989_18911[(1)] = (10));

} else {
var statearr_16991_18912 = state_16890__$1;
(statearr_16991_18912[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13775__auto__ = null;
var cljs$core$async$state_machine__13775__auto____0 = (function (){
var statearr_17003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17003[(0)] = cljs$core$async$state_machine__13775__auto__);

(statearr_17003[(1)] = (1));

return statearr_17003;
});
var cljs$core$async$state_machine__13775__auto____1 = (function (state_16890){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_16890);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e17005){var ex__13778__auto__ = e17005;
var statearr_17006_18913 = state_16890;
(statearr_17006_18913[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_16890[(4)]))){
var statearr_17008_18914 = state_16890;
(statearr_17008_18914[(1)] = cljs.core.first((state_16890[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18916 = state_16890;
state_16890 = G__18916;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$state_machine__13775__auto__ = function(state_16890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13775__auto____1.call(this,state_16890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13775__auto____0;
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13775__auto____1;
return cljs$core$async$state_machine__13775__auto__;
})()
})();
var state__14459__auto__ = (function (){var statearr_17014 = f__14458__auto__();
(statearr_17014[(6)] = c__14457__auto___18880);

return statearr_17014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17022 = arguments.length;
switch (G__17022) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17037 = arguments.length;
switch (G__17037) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17056 = arguments.length;
switch (G__17056) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14457__auto___18931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = (function (state_17117){
var state_val_17118 = (state_17117[(1)]);
if((state_val_17118 === (7))){
var state_17117__$1 = state_17117;
var statearr_17121_18932 = state_17117__$1;
(statearr_17121_18932[(2)] = null);

(statearr_17121_18932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (1))){
var state_17117__$1 = state_17117;
var statearr_17126_18933 = state_17117__$1;
(statearr_17126_18933[(2)] = null);

(statearr_17126_18933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (4))){
var inst_17075 = (state_17117[(7)]);
var inst_17076 = (state_17117[(8)]);
var inst_17078 = (inst_17076 < inst_17075);
var state_17117__$1 = state_17117;
if(cljs.core.truth_(inst_17078)){
var statearr_17136_18934 = state_17117__$1;
(statearr_17136_18934[(1)] = (6));

} else {
var statearr_17137_18935 = state_17117__$1;
(statearr_17137_18935[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (15))){
var inst_17103 = (state_17117[(9)]);
var inst_17108 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17103);
var state_17117__$1 = state_17117;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17117__$1,(17),out,inst_17108);
} else {
if((state_val_17118 === (13))){
var inst_17103 = (state_17117[(9)]);
var inst_17103__$1 = (state_17117[(2)]);
var inst_17104 = cljs.core.some(cljs.core.nil_QMARK_,inst_17103__$1);
var state_17117__$1 = (function (){var statearr_17143 = state_17117;
(statearr_17143[(9)] = inst_17103__$1);

return statearr_17143;
})();
if(cljs.core.truth_(inst_17104)){
var statearr_17144_18936 = state_17117__$1;
(statearr_17144_18936[(1)] = (14));

} else {
var statearr_17145_18937 = state_17117__$1;
(statearr_17145_18937[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (6))){
var state_17117__$1 = state_17117;
var statearr_17148_18938 = state_17117__$1;
(statearr_17148_18938[(2)] = null);

(statearr_17148_18938[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (17))){
var inst_17110 = (state_17117[(2)]);
var state_17117__$1 = (function (){var statearr_17160 = state_17117;
(statearr_17160[(10)] = inst_17110);

return statearr_17160;
})();
var statearr_17161_18939 = state_17117__$1;
(statearr_17161_18939[(2)] = null);

(statearr_17161_18939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (3))){
var inst_17115 = (state_17117[(2)]);
var state_17117__$1 = state_17117;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17117__$1,inst_17115);
} else {
if((state_val_17118 === (12))){
var _ = (function (){var statearr_17168 = state_17117;
(statearr_17168[(4)] = cljs.core.rest((state_17117[(4)])));

return statearr_17168;
})();
var state_17117__$1 = state_17117;
var ex17157 = (state_17117__$1[(2)]);
var statearr_17170_18944 = state_17117__$1;
(statearr_17170_18944[(5)] = ex17157);


if((ex17157 instanceof Object)){
var statearr_17171_18948 = state_17117__$1;
(statearr_17171_18948[(1)] = (11));

(statearr_17171_18948[(5)] = null);

} else {
throw ex17157;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (2))){
var inst_17074 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17075 = cnt;
var inst_17076 = (0);
var state_17117__$1 = (function (){var statearr_17187 = state_17117;
(statearr_17187[(11)] = inst_17074);

(statearr_17187[(7)] = inst_17075);

(statearr_17187[(8)] = inst_17076);

return statearr_17187;
})();
var statearr_17188_18949 = state_17117__$1;
(statearr_17188_18949[(2)] = null);

(statearr_17188_18949[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (11))){
var inst_17081 = (state_17117[(2)]);
var inst_17082 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17117__$1 = (function (){var statearr_17191 = state_17117;
(statearr_17191[(12)] = inst_17081);

return statearr_17191;
})();
var statearr_17193_18950 = state_17117__$1;
(statearr_17193_18950[(2)] = inst_17082);

(statearr_17193_18950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (9))){
var inst_17076 = (state_17117[(8)]);
var _ = (function (){var statearr_17194 = state_17117;
(statearr_17194[(4)] = cljs.core.cons((12),(state_17117[(4)])));

return statearr_17194;
})();
var inst_17088 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17076) : chs__$1.call(null,inst_17076));
var inst_17089 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17076) : done.call(null,inst_17076));
var inst_17090 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17088,inst_17089);
var ___$1 = (function (){var statearr_17199 = state_17117;
(statearr_17199[(4)] = cljs.core.rest((state_17117[(4)])));

return statearr_17199;
})();
var state_17117__$1 = state_17117;
var statearr_17202_18951 = state_17117__$1;
(statearr_17202_18951[(2)] = inst_17090);

(statearr_17202_18951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (5))){
var inst_17100 = (state_17117[(2)]);
var state_17117__$1 = (function (){var statearr_17205 = state_17117;
(statearr_17205[(13)] = inst_17100);

return statearr_17205;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17117__$1,(13),dchan);
} else {
if((state_val_17118 === (14))){
var inst_17106 = cljs.core.async.close_BANG_(out);
var state_17117__$1 = state_17117;
var statearr_17216_18957 = state_17117__$1;
(statearr_17216_18957[(2)] = inst_17106);

(statearr_17216_18957[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (16))){
var inst_17113 = (state_17117[(2)]);
var state_17117__$1 = state_17117;
var statearr_17226_18958 = state_17117__$1;
(statearr_17226_18958[(2)] = inst_17113);

(statearr_17226_18958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (10))){
var inst_17076 = (state_17117[(8)]);
var inst_17093 = (state_17117[(2)]);
var inst_17094 = (inst_17076 + (1));
var inst_17076__$1 = inst_17094;
var state_17117__$1 = (function (){var statearr_17241 = state_17117;
(statearr_17241[(14)] = inst_17093);

(statearr_17241[(8)] = inst_17076__$1);

return statearr_17241;
})();
var statearr_17242_18959 = state_17117__$1;
(statearr_17242_18959[(2)] = null);

(statearr_17242_18959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (8))){
var inst_17098 = (state_17117[(2)]);
var state_17117__$1 = state_17117;
var statearr_17243_18960 = state_17117__$1;
(statearr_17243_18960[(2)] = inst_17098);

(statearr_17243_18960[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13775__auto__ = null;
var cljs$core$async$state_machine__13775__auto____0 = (function (){
var statearr_17247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17247[(0)] = cljs$core$async$state_machine__13775__auto__);

(statearr_17247[(1)] = (1));

return statearr_17247;
});
var cljs$core$async$state_machine__13775__auto____1 = (function (state_17117){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_17117);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e17248){var ex__13778__auto__ = e17248;
var statearr_17249_18964 = state_17117;
(statearr_17249_18964[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_17117[(4)]))){
var statearr_17254_18965 = state_17117;
(statearr_17254_18965[(1)] = cljs.core.first((state_17117[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18966 = state_17117;
state_17117 = G__18966;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$state_machine__13775__auto__ = function(state_17117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13775__auto____1.call(this,state_17117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13775__auto____0;
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13775__auto____1;
return cljs$core$async$state_machine__13775__auto__;
})()
})();
var state__14459__auto__ = (function (){var statearr_17269 = f__14458__auto__();
(statearr_17269[(6)] = c__14457__auto___18931);

return statearr_17269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17275 = arguments.length;
switch (G__17275) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14457__auto___18971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = (function (state_17309){
var state_val_17310 = (state_17309[(1)]);
if((state_val_17310 === (7))){
var inst_17289 = (state_17309[(7)]);
var inst_17288 = (state_17309[(8)]);
var inst_17288__$1 = (state_17309[(2)]);
var inst_17289__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17288__$1,(0),null);
var inst_17290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17288__$1,(1),null);
var inst_17291 = (inst_17289__$1 == null);
var state_17309__$1 = (function (){var statearr_17315 = state_17309;
(statearr_17315[(7)] = inst_17289__$1);

(statearr_17315[(9)] = inst_17290);

(statearr_17315[(8)] = inst_17288__$1);

return statearr_17315;
})();
if(cljs.core.truth_(inst_17291)){
var statearr_17316_18976 = state_17309__$1;
(statearr_17316_18976[(1)] = (8));

} else {
var statearr_17317_18977 = state_17309__$1;
(statearr_17317_18977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (1))){
var inst_17276 = cljs.core.vec(chs);
var inst_17277 = inst_17276;
var state_17309__$1 = (function (){var statearr_17318 = state_17309;
(statearr_17318[(10)] = inst_17277);

return statearr_17318;
})();
var statearr_17319_18978 = state_17309__$1;
(statearr_17319_18978[(2)] = null);

(statearr_17319_18978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (4))){
var inst_17277 = (state_17309[(10)]);
var state_17309__$1 = state_17309;
return cljs.core.async.ioc_alts_BANG_(state_17309__$1,(7),inst_17277);
} else {
if((state_val_17310 === (6))){
var inst_17305 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
var statearr_17320_18979 = state_17309__$1;
(statearr_17320_18979[(2)] = inst_17305);

(statearr_17320_18979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (3))){
var inst_17307 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17309__$1,inst_17307);
} else {
if((state_val_17310 === (2))){
var inst_17277 = (state_17309[(10)]);
var inst_17281 = cljs.core.count(inst_17277);
var inst_17282 = (inst_17281 > (0));
var state_17309__$1 = state_17309;
if(cljs.core.truth_(inst_17282)){
var statearr_17323_18980 = state_17309__$1;
(statearr_17323_18980[(1)] = (4));

} else {
var statearr_17324_18981 = state_17309__$1;
(statearr_17324_18981[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (11))){
var inst_17277 = (state_17309[(10)]);
var inst_17298 = (state_17309[(2)]);
var tmp17321 = inst_17277;
var inst_17277__$1 = tmp17321;
var state_17309__$1 = (function (){var statearr_17325 = state_17309;
(statearr_17325[(10)] = inst_17277__$1);

(statearr_17325[(11)] = inst_17298);

return statearr_17325;
})();
var statearr_17326_18982 = state_17309__$1;
(statearr_17326_18982[(2)] = null);

(statearr_17326_18982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (9))){
var inst_17289 = (state_17309[(7)]);
var state_17309__$1 = state_17309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17309__$1,(11),out,inst_17289);
} else {
if((state_val_17310 === (5))){
var inst_17303 = cljs.core.async.close_BANG_(out);
var state_17309__$1 = state_17309;
var statearr_17327_18983 = state_17309__$1;
(statearr_17327_18983[(2)] = inst_17303);

(statearr_17327_18983[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (10))){
var inst_17301 = (state_17309[(2)]);
var state_17309__$1 = state_17309;
var statearr_17328_18984 = state_17309__$1;
(statearr_17328_18984[(2)] = inst_17301);

(statearr_17328_18984[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17310 === (8))){
var inst_17277 = (state_17309[(10)]);
var inst_17289 = (state_17309[(7)]);
var inst_17290 = (state_17309[(9)]);
var inst_17288 = (state_17309[(8)]);
var inst_17293 = (function (){var cs = inst_17277;
var vec__17284 = inst_17288;
var v = inst_17289;
var c = inst_17290;
return (function (p1__17270_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17270_SHARP_);
});
})();
var inst_17294 = cljs.core.filterv(inst_17293,inst_17277);
var inst_17277__$1 = inst_17294;
var state_17309__$1 = (function (){var statearr_17333 = state_17309;
(statearr_17333[(10)] = inst_17277__$1);

return statearr_17333;
})();
var statearr_17334_18985 = state_17309__$1;
(statearr_17334_18985[(2)] = null);

(statearr_17334_18985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13775__auto__ = null;
var cljs$core$async$state_machine__13775__auto____0 = (function (){
var statearr_17335 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17335[(0)] = cljs$core$async$state_machine__13775__auto__);

(statearr_17335[(1)] = (1));

return statearr_17335;
});
var cljs$core$async$state_machine__13775__auto____1 = (function (state_17309){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_17309);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e17338){var ex__13778__auto__ = e17338;
var statearr_17339_18986 = state_17309;
(statearr_17339_18986[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_17309[(4)]))){
var statearr_17340_18987 = state_17309;
(statearr_17340_18987[(1)] = cljs.core.first((state_17309[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18989 = state_17309;
state_17309 = G__18989;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$state_machine__13775__auto__ = function(state_17309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13775__auto____1.call(this,state_17309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13775__auto____0;
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13775__auto____1;
return cljs$core$async$state_machine__13775__auto__;
})()
})();
var state__14459__auto__ = (function (){var statearr_17343 = f__14458__auto__();
(statearr_17343[(6)] = c__14457__auto___18971);

return statearr_17343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17354 = arguments.length;
switch (G__17354) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14457__auto___18992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = (function (state_17412){
var state_val_17413 = (state_17412[(1)]);
if((state_val_17413 === (7))){
var inst_17388 = (state_17412[(7)]);
var inst_17388__$1 = (state_17412[(2)]);
var inst_17389 = (inst_17388__$1 == null);
var inst_17390 = cljs.core.not(inst_17389);
var state_17412__$1 = (function (){var statearr_17417 = state_17412;
(statearr_17417[(7)] = inst_17388__$1);

return statearr_17417;
})();
if(inst_17390){
var statearr_17419_18993 = state_17412__$1;
(statearr_17419_18993[(1)] = (8));

} else {
var statearr_17420_18994 = state_17412__$1;
(statearr_17420_18994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (1))){
var inst_17383 = (0);
var state_17412__$1 = (function (){var statearr_17422 = state_17412;
(statearr_17422[(8)] = inst_17383);

return statearr_17422;
})();
var statearr_17424_18995 = state_17412__$1;
(statearr_17424_18995[(2)] = null);

(statearr_17424_18995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (4))){
var state_17412__$1 = state_17412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17412__$1,(7),ch);
} else {
if((state_val_17413 === (6))){
var inst_17401 = (state_17412[(2)]);
var state_17412__$1 = state_17412;
var statearr_17429_18996 = state_17412__$1;
(statearr_17429_18996[(2)] = inst_17401);

(statearr_17429_18996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (3))){
var inst_17403 = (state_17412[(2)]);
var inst_17405 = cljs.core.async.close_BANG_(out);
var state_17412__$1 = (function (){var statearr_17431 = state_17412;
(statearr_17431[(9)] = inst_17403);

return statearr_17431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17412__$1,inst_17405);
} else {
if((state_val_17413 === (2))){
var inst_17383 = (state_17412[(8)]);
var inst_17385 = (inst_17383 < n);
var state_17412__$1 = state_17412;
if(cljs.core.truth_(inst_17385)){
var statearr_17433_18997 = state_17412__$1;
(statearr_17433_18997[(1)] = (4));

} else {
var statearr_17434_18998 = state_17412__$1;
(statearr_17434_18998[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (11))){
var inst_17383 = (state_17412[(8)]);
var inst_17393 = (state_17412[(2)]);
var inst_17394 = (inst_17383 + (1));
var inst_17383__$1 = inst_17394;
var state_17412__$1 = (function (){var statearr_17436 = state_17412;
(statearr_17436[(8)] = inst_17383__$1);

(statearr_17436[(10)] = inst_17393);

return statearr_17436;
})();
var statearr_17437_18999 = state_17412__$1;
(statearr_17437_18999[(2)] = null);

(statearr_17437_18999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (9))){
var state_17412__$1 = state_17412;
var statearr_17438_19000 = state_17412__$1;
(statearr_17438_19000[(2)] = null);

(statearr_17438_19000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (5))){
var state_17412__$1 = state_17412;
var statearr_17440_19002 = state_17412__$1;
(statearr_17440_19002[(2)] = null);

(statearr_17440_19002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (10))){
var inst_17398 = (state_17412[(2)]);
var state_17412__$1 = state_17412;
var statearr_17442_19006 = state_17412__$1;
(statearr_17442_19006[(2)] = inst_17398);

(statearr_17442_19006[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17413 === (8))){
var inst_17388 = (state_17412[(7)]);
var state_17412__$1 = state_17412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17412__$1,(11),out,inst_17388);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13775__auto__ = null;
var cljs$core$async$state_machine__13775__auto____0 = (function (){
var statearr_17443 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17443[(0)] = cljs$core$async$state_machine__13775__auto__);

(statearr_17443[(1)] = (1));

return statearr_17443;
});
var cljs$core$async$state_machine__13775__auto____1 = (function (state_17412){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_17412);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e17444){var ex__13778__auto__ = e17444;
var statearr_17445_19010 = state_17412;
(statearr_17445_19010[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_17412[(4)]))){
var statearr_17446_19011 = state_17412;
(statearr_17446_19011[(1)] = cljs.core.first((state_17412[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19012 = state_17412;
state_17412 = G__19012;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$state_machine__13775__auto__ = function(state_17412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13775__auto____1.call(this,state_17412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13775__auto____0;
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13775__auto____1;
return cljs$core$async$state_machine__13775__auto__;
})()
})();
var state__14459__auto__ = (function (){var statearr_17450 = f__14458__auto__();
(statearr_17450[(6)] = c__14457__auto___18992);

return statearr_17450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17458 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17458 = (function (f,ch,meta17459){
this.f = f;
this.ch = ch;
this.meta17459 = meta17459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17460,meta17459__$1){
var self__ = this;
var _17460__$1 = this;
return (new cljs.core.async.t_cljs$core$async17458(self__.f,self__.ch,meta17459__$1));
}));

(cljs.core.async.t_cljs$core$async17458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17460){
var self__ = this;
var _17460__$1 = this;
return self__.meta17459;
}));

(cljs.core.async.t_cljs$core$async17458.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17458.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17458.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17458.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17458.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17476 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17476 = (function (f,ch,meta17459,_,fn1,meta17477){
this.f = f;
this.ch = ch;
this.meta17459 = meta17459;
this._ = _;
this.fn1 = fn1;
this.meta17477 = meta17477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17478,meta17477__$1){
var self__ = this;
var _17478__$1 = this;
return (new cljs.core.async.t_cljs$core$async17476(self__.f,self__.ch,self__.meta17459,self__._,self__.fn1,meta17477__$1));
}));

(cljs.core.async.t_cljs$core$async17476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17478){
var self__ = this;
var _17478__$1 = this;
return self__.meta17477;
}));

(cljs.core.async.t_cljs$core$async17476.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17476.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17476.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17476.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17456_SHARP_){
var G__17496 = (((p1__17456_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17456_SHARP_) : self__.f.call(null,p1__17456_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17496) : f1.call(null,G__17496));
});
}));

(cljs.core.async.t_cljs$core$async17476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17459","meta17459",-398999907,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17458","cljs.core.async/t_cljs$core$async17458",-1283392629,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17477","meta17477",-964376053,null)], null);
}));

(cljs.core.async.t_cljs$core$async17476.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17476");

(cljs.core.async.t_cljs$core$async17476.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17476");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17476.
 */
cljs.core.async.__GT_t_cljs$core$async17476 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17476(f__$1,ch__$1,meta17459__$1,___$2,fn1__$1,meta17477){
return (new cljs.core.async.t_cljs$core$async17476(f__$1,ch__$1,meta17459__$1,___$2,fn1__$1,meta17477));
});

}

return (new cljs.core.async.t_cljs$core$async17476(self__.f,self__.ch,self__.meta17459,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17550 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17550) : self__.f.call(null,G__17550));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17458.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17458.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17458.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17459","meta17459",-398999907,null)], null);
}));

(cljs.core.async.t_cljs$core$async17458.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17458.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17458");

(cljs.core.async.t_cljs$core$async17458.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17458");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17458.
 */
cljs.core.async.__GT_t_cljs$core$async17458 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17458(f__$1,ch__$1,meta17459){
return (new cljs.core.async.t_cljs$core$async17458(f__$1,ch__$1,meta17459));
});

}

return (new cljs.core.async.t_cljs$core$async17458(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17556 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17556 = (function (f,ch,meta17557){
this.f = f;
this.ch = ch;
this.meta17557 = meta17557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17558,meta17557__$1){
var self__ = this;
var _17558__$1 = this;
return (new cljs.core.async.t_cljs$core$async17556(self__.f,self__.ch,meta17557__$1));
}));

(cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17558){
var self__ = this;
var _17558__$1 = this;
return self__.meta17557;
}));

(cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17556.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17557","meta17557",417112085,null)], null);
}));

(cljs.core.async.t_cljs$core$async17556.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17556");

(cljs.core.async.t_cljs$core$async17556.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17556");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17556.
 */
cljs.core.async.__GT_t_cljs$core$async17556 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17556(f__$1,ch__$1,meta17557){
return (new cljs.core.async.t_cljs$core$async17556(f__$1,ch__$1,meta17557));
});

}

return (new cljs.core.async.t_cljs$core$async17556(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17577 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17577 = (function (p,ch,meta17578){
this.p = p;
this.ch = ch;
this.meta17578 = meta17578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17579,meta17578__$1){
var self__ = this;
var _17579__$1 = this;
return (new cljs.core.async.t_cljs$core$async17577(self__.p,self__.ch,meta17578__$1));
}));

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17579){
var self__ = this;
var _17579__$1 = this;
return self__.meta17578;
}));

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17577.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17578","meta17578",1979425593,null)], null);
}));

(cljs.core.async.t_cljs$core$async17577.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17577");

(cljs.core.async.t_cljs$core$async17577.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17577");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17577.
 */
cljs.core.async.__GT_t_cljs$core$async17577 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17577(p__$1,ch__$1,meta17578){
return (new cljs.core.async.t_cljs$core$async17577(p__$1,ch__$1,meta17578));
});

}

return (new cljs.core.async.t_cljs$core$async17577(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17607 = arguments.length;
switch (G__17607) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14457__auto___19032 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = (function (state_17629){
var state_val_17630 = (state_17629[(1)]);
if((state_val_17630 === (7))){
var inst_17625 = (state_17629[(2)]);
var state_17629__$1 = state_17629;
var statearr_17631_19033 = state_17629__$1;
(statearr_17631_19033[(2)] = inst_17625);

(statearr_17631_19033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (1))){
var state_17629__$1 = state_17629;
var statearr_17632_19034 = state_17629__$1;
(statearr_17632_19034[(2)] = null);

(statearr_17632_19034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (4))){
var inst_17610 = (state_17629[(7)]);
var inst_17610__$1 = (state_17629[(2)]);
var inst_17611 = (inst_17610__$1 == null);
var state_17629__$1 = (function (){var statearr_17634 = state_17629;
(statearr_17634[(7)] = inst_17610__$1);

return statearr_17634;
})();
if(cljs.core.truth_(inst_17611)){
var statearr_17635_19035 = state_17629__$1;
(statearr_17635_19035[(1)] = (5));

} else {
var statearr_17637_19036 = state_17629__$1;
(statearr_17637_19036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (6))){
var inst_17610 = (state_17629[(7)]);
var inst_17615 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17610) : p.call(null,inst_17610));
var state_17629__$1 = state_17629;
if(cljs.core.truth_(inst_17615)){
var statearr_17638_19037 = state_17629__$1;
(statearr_17638_19037[(1)] = (8));

} else {
var statearr_17639_19038 = state_17629__$1;
(statearr_17639_19038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (3))){
var inst_17627 = (state_17629[(2)]);
var state_17629__$1 = state_17629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17629__$1,inst_17627);
} else {
if((state_val_17630 === (2))){
var state_17629__$1 = state_17629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17629__$1,(4),ch);
} else {
if((state_val_17630 === (11))){
var inst_17619 = (state_17629[(2)]);
var state_17629__$1 = state_17629;
var statearr_17640_19039 = state_17629__$1;
(statearr_17640_19039[(2)] = inst_17619);

(statearr_17640_19039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (9))){
var state_17629__$1 = state_17629;
var statearr_17642_19040 = state_17629__$1;
(statearr_17642_19040[(2)] = null);

(statearr_17642_19040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (5))){
var inst_17613 = cljs.core.async.close_BANG_(out);
var state_17629__$1 = state_17629;
var statearr_17646_19041 = state_17629__$1;
(statearr_17646_19041[(2)] = inst_17613);

(statearr_17646_19041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (10))){
var inst_17622 = (state_17629[(2)]);
var state_17629__$1 = (function (){var statearr_17648 = state_17629;
(statearr_17648[(8)] = inst_17622);

return statearr_17648;
})();
var statearr_17650_19042 = state_17629__$1;
(statearr_17650_19042[(2)] = null);

(statearr_17650_19042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17630 === (8))){
var inst_17610 = (state_17629[(7)]);
var state_17629__$1 = state_17629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17629__$1,(11),out,inst_17610);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13775__auto__ = null;
var cljs$core$async$state_machine__13775__auto____0 = (function (){
var statearr_17658 = [null,null,null,null,null,null,null,null,null];
(statearr_17658[(0)] = cljs$core$async$state_machine__13775__auto__);

(statearr_17658[(1)] = (1));

return statearr_17658;
});
var cljs$core$async$state_machine__13775__auto____1 = (function (state_17629){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_17629);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e17659){var ex__13778__auto__ = e17659;
var statearr_17661_19043 = state_17629;
(statearr_17661_19043[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_17629[(4)]))){
var statearr_17662_19044 = state_17629;
(statearr_17662_19044[(1)] = cljs.core.first((state_17629[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19045 = state_17629;
state_17629 = G__19045;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$state_machine__13775__auto__ = function(state_17629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13775__auto____1.call(this,state_17629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13775__auto____0;
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13775__auto____1;
return cljs$core$async$state_machine__13775__auto__;
})()
})();
var state__14459__auto__ = (function (){var statearr_17664 = f__14458__auto__();
(statearr_17664[(6)] = c__14457__auto___19032);

return statearr_17664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17667 = arguments.length;
switch (G__17667) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14457__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = (function (state_17733){
var state_val_17734 = (state_17733[(1)]);
if((state_val_17734 === (7))){
var inst_17729 = (state_17733[(2)]);
var state_17733__$1 = state_17733;
var statearr_17735_19047 = state_17733__$1;
(statearr_17735_19047[(2)] = inst_17729);

(statearr_17735_19047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (20))){
var inst_17699 = (state_17733[(7)]);
var inst_17710 = (state_17733[(2)]);
var inst_17711 = cljs.core.next(inst_17699);
var inst_17684 = inst_17711;
var inst_17685 = null;
var inst_17686 = (0);
var inst_17687 = (0);
var state_17733__$1 = (function (){var statearr_17737 = state_17733;
(statearr_17737[(8)] = inst_17685);

(statearr_17737[(9)] = inst_17687);

(statearr_17737[(10)] = inst_17710);

(statearr_17737[(11)] = inst_17686);

(statearr_17737[(12)] = inst_17684);

return statearr_17737;
})();
var statearr_17738_19048 = state_17733__$1;
(statearr_17738_19048[(2)] = null);

(statearr_17738_19048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (1))){
var state_17733__$1 = state_17733;
var statearr_17739_19049 = state_17733__$1;
(statearr_17739_19049[(2)] = null);

(statearr_17739_19049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (4))){
var inst_17673 = (state_17733[(13)]);
var inst_17673__$1 = (state_17733[(2)]);
var inst_17674 = (inst_17673__$1 == null);
var state_17733__$1 = (function (){var statearr_17740 = state_17733;
(statearr_17740[(13)] = inst_17673__$1);

return statearr_17740;
})();
if(cljs.core.truth_(inst_17674)){
var statearr_17741_19050 = state_17733__$1;
(statearr_17741_19050[(1)] = (5));

} else {
var statearr_17742_19051 = state_17733__$1;
(statearr_17742_19051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (15))){
var state_17733__$1 = state_17733;
var statearr_17746_19052 = state_17733__$1;
(statearr_17746_19052[(2)] = null);

(statearr_17746_19052[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (21))){
var state_17733__$1 = state_17733;
var statearr_17747_19053 = state_17733__$1;
(statearr_17747_19053[(2)] = null);

(statearr_17747_19053[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (13))){
var inst_17685 = (state_17733[(8)]);
var inst_17687 = (state_17733[(9)]);
var inst_17686 = (state_17733[(11)]);
var inst_17684 = (state_17733[(12)]);
var inst_17694 = (state_17733[(2)]);
var inst_17696 = (inst_17687 + (1));
var tmp17743 = inst_17685;
var tmp17744 = inst_17686;
var tmp17745 = inst_17684;
var inst_17684__$1 = tmp17745;
var inst_17685__$1 = tmp17743;
var inst_17686__$1 = tmp17744;
var inst_17687__$1 = inst_17696;
var state_17733__$1 = (function (){var statearr_17748 = state_17733;
(statearr_17748[(8)] = inst_17685__$1);

(statearr_17748[(9)] = inst_17687__$1);

(statearr_17748[(11)] = inst_17686__$1);

(statearr_17748[(12)] = inst_17684__$1);

(statearr_17748[(14)] = inst_17694);

return statearr_17748;
})();
var statearr_17749_19054 = state_17733__$1;
(statearr_17749_19054[(2)] = null);

(statearr_17749_19054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (22))){
var state_17733__$1 = state_17733;
var statearr_17750_19055 = state_17733__$1;
(statearr_17750_19055[(2)] = null);

(statearr_17750_19055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (6))){
var inst_17673 = (state_17733[(13)]);
var inst_17682 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17673) : f.call(null,inst_17673));
var inst_17683 = cljs.core.seq(inst_17682);
var inst_17684 = inst_17683;
var inst_17685 = null;
var inst_17686 = (0);
var inst_17687 = (0);
var state_17733__$1 = (function (){var statearr_17754 = state_17733;
(statearr_17754[(8)] = inst_17685);

(statearr_17754[(9)] = inst_17687);

(statearr_17754[(11)] = inst_17686);

(statearr_17754[(12)] = inst_17684);

return statearr_17754;
})();
var statearr_17755_19056 = state_17733__$1;
(statearr_17755_19056[(2)] = null);

(statearr_17755_19056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (17))){
var inst_17699 = (state_17733[(7)]);
var inst_17703 = cljs.core.chunk_first(inst_17699);
var inst_17704 = cljs.core.chunk_rest(inst_17699);
var inst_17705 = cljs.core.count(inst_17703);
var inst_17684 = inst_17704;
var inst_17685 = inst_17703;
var inst_17686 = inst_17705;
var inst_17687 = (0);
var state_17733__$1 = (function (){var statearr_17756 = state_17733;
(statearr_17756[(8)] = inst_17685);

(statearr_17756[(9)] = inst_17687);

(statearr_17756[(11)] = inst_17686);

(statearr_17756[(12)] = inst_17684);

return statearr_17756;
})();
var statearr_17757_19058 = state_17733__$1;
(statearr_17757_19058[(2)] = null);

(statearr_17757_19058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (3))){
var inst_17731 = (state_17733[(2)]);
var state_17733__$1 = state_17733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17733__$1,inst_17731);
} else {
if((state_val_17734 === (12))){
var inst_17719 = (state_17733[(2)]);
var state_17733__$1 = state_17733;
var statearr_17758_19059 = state_17733__$1;
(statearr_17758_19059[(2)] = inst_17719);

(statearr_17758_19059[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (2))){
var state_17733__$1 = state_17733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17733__$1,(4),in$);
} else {
if((state_val_17734 === (23))){
var inst_17727 = (state_17733[(2)]);
var state_17733__$1 = state_17733;
var statearr_17759_19060 = state_17733__$1;
(statearr_17759_19060[(2)] = inst_17727);

(statearr_17759_19060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (19))){
var inst_17714 = (state_17733[(2)]);
var state_17733__$1 = state_17733;
var statearr_17764_19064 = state_17733__$1;
(statearr_17764_19064[(2)] = inst_17714);

(statearr_17764_19064[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (11))){
var inst_17699 = (state_17733[(7)]);
var inst_17684 = (state_17733[(12)]);
var inst_17699__$1 = cljs.core.seq(inst_17684);
var state_17733__$1 = (function (){var statearr_17765 = state_17733;
(statearr_17765[(7)] = inst_17699__$1);

return statearr_17765;
})();
if(inst_17699__$1){
var statearr_17766_19065 = state_17733__$1;
(statearr_17766_19065[(1)] = (14));

} else {
var statearr_17767_19066 = state_17733__$1;
(statearr_17767_19066[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (9))){
var inst_17721 = (state_17733[(2)]);
var inst_17722 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17733__$1 = (function (){var statearr_17768 = state_17733;
(statearr_17768[(15)] = inst_17721);

return statearr_17768;
})();
if(cljs.core.truth_(inst_17722)){
var statearr_17769_19068 = state_17733__$1;
(statearr_17769_19068[(1)] = (21));

} else {
var statearr_17770_19069 = state_17733__$1;
(statearr_17770_19069[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (5))){
var inst_17676 = cljs.core.async.close_BANG_(out);
var state_17733__$1 = state_17733;
var statearr_17771_19070 = state_17733__$1;
(statearr_17771_19070[(2)] = inst_17676);

(statearr_17771_19070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (14))){
var inst_17699 = (state_17733[(7)]);
var inst_17701 = cljs.core.chunked_seq_QMARK_(inst_17699);
var state_17733__$1 = state_17733;
if(inst_17701){
var statearr_17772_19071 = state_17733__$1;
(statearr_17772_19071[(1)] = (17));

} else {
var statearr_17773_19073 = state_17733__$1;
(statearr_17773_19073[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (16))){
var inst_17717 = (state_17733[(2)]);
var state_17733__$1 = state_17733;
var statearr_17774_19074 = state_17733__$1;
(statearr_17774_19074[(2)] = inst_17717);

(statearr_17774_19074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17734 === (10))){
var inst_17685 = (state_17733[(8)]);
var inst_17687 = (state_17733[(9)]);
var inst_17692 = cljs.core._nth(inst_17685,inst_17687);
var state_17733__$1 = state_17733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17733__$1,(13),out,inst_17692);
} else {
if((state_val_17734 === (18))){
var inst_17699 = (state_17733[(7)]);
var inst_17708 = cljs.core.first(inst_17699);
var state_17733__$1 = state_17733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17733__$1,(20),out,inst_17708);
} else {
if((state_val_17734 === (8))){
var inst_17687 = (state_17733[(9)]);
var inst_17686 = (state_17733[(11)]);
var inst_17689 = (inst_17687 < inst_17686);
var inst_17690 = inst_17689;
var state_17733__$1 = state_17733;
if(cljs.core.truth_(inst_17690)){
var statearr_17776_19076 = state_17733__$1;
(statearr_17776_19076[(1)] = (10));

} else {
var statearr_17777_19077 = state_17733__$1;
(statearr_17777_19077[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13775__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13775__auto____0 = (function (){
var statearr_17778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17778[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13775__auto__);

(statearr_17778[(1)] = (1));

return statearr_17778;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13775__auto____1 = (function (state_17733){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_17733);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e17779){var ex__13778__auto__ = e17779;
var statearr_17780_19078 = state_17733;
(statearr_17780_19078[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_17733[(4)]))){
var statearr_17781_19079 = state_17733;
(statearr_17781_19079[(1)] = cljs.core.first((state_17733[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19081 = state_17733;
state_17733 = G__19081;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13775__auto__ = function(state_17733){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13775__auto____1.call(this,state_17733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13775__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13775__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13775__auto__;
})()
})();
var state__14459__auto__ = (function (){var statearr_17790 = f__14458__auto__();
(statearr_17790[(6)] = c__14457__auto__);

return statearr_17790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
}));

return c__14457__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17804 = arguments.length;
switch (G__17804) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17817 = arguments.length;
switch (G__17817) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17828 = arguments.length;
switch (G__17828) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14457__auto___19085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = (function (state_17856){
var state_val_17857 = (state_17856[(1)]);
if((state_val_17857 === (7))){
var inst_17851 = (state_17856[(2)]);
var state_17856__$1 = state_17856;
var statearr_17859_19086 = state_17856__$1;
(statearr_17859_19086[(2)] = inst_17851);

(statearr_17859_19086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17857 === (1))){
var inst_17831 = null;
var state_17856__$1 = (function (){var statearr_17860 = state_17856;
(statearr_17860[(7)] = inst_17831);

return statearr_17860;
})();
var statearr_17861_19087 = state_17856__$1;
(statearr_17861_19087[(2)] = null);

(statearr_17861_19087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17857 === (4))){
var inst_17836 = (state_17856[(8)]);
var inst_17836__$1 = (state_17856[(2)]);
var inst_17837 = (inst_17836__$1 == null);
var inst_17838 = cljs.core.not(inst_17837);
var state_17856__$1 = (function (){var statearr_17862 = state_17856;
(statearr_17862[(8)] = inst_17836__$1);

return statearr_17862;
})();
if(inst_17838){
var statearr_17863_19088 = state_17856__$1;
(statearr_17863_19088[(1)] = (5));

} else {
var statearr_17864_19089 = state_17856__$1;
(statearr_17864_19089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17857 === (6))){
var state_17856__$1 = state_17856;
var statearr_17865_19094 = state_17856__$1;
(statearr_17865_19094[(2)] = null);

(statearr_17865_19094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17857 === (3))){
var inst_17853 = (state_17856[(2)]);
var inst_17854 = cljs.core.async.close_BANG_(out);
var state_17856__$1 = (function (){var statearr_17872 = state_17856;
(statearr_17872[(9)] = inst_17853);

return statearr_17872;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17856__$1,inst_17854);
} else {
if((state_val_17857 === (2))){
var state_17856__$1 = state_17856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17856__$1,(4),ch);
} else {
if((state_val_17857 === (11))){
var inst_17836 = (state_17856[(8)]);
var inst_17845 = (state_17856[(2)]);
var inst_17831 = inst_17836;
var state_17856__$1 = (function (){var statearr_17884 = state_17856;
(statearr_17884[(10)] = inst_17845);

(statearr_17884[(7)] = inst_17831);

return statearr_17884;
})();
var statearr_17887_19095 = state_17856__$1;
(statearr_17887_19095[(2)] = null);

(statearr_17887_19095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17857 === (9))){
var inst_17836 = (state_17856[(8)]);
var state_17856__$1 = state_17856;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17856__$1,(11),out,inst_17836);
} else {
if((state_val_17857 === (5))){
var inst_17836 = (state_17856[(8)]);
var inst_17831 = (state_17856[(7)]);
var inst_17840 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17836,inst_17831);
var state_17856__$1 = state_17856;
if(inst_17840){
var statearr_17892_19097 = state_17856__$1;
(statearr_17892_19097[(1)] = (8));

} else {
var statearr_17893_19098 = state_17856__$1;
(statearr_17893_19098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17857 === (10))){
var inst_17848 = (state_17856[(2)]);
var state_17856__$1 = state_17856;
var statearr_17894_19099 = state_17856__$1;
(statearr_17894_19099[(2)] = inst_17848);

(statearr_17894_19099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17857 === (8))){
var inst_17831 = (state_17856[(7)]);
var tmp17890 = inst_17831;
var inst_17831__$1 = tmp17890;
var state_17856__$1 = (function (){var statearr_17895 = state_17856;
(statearr_17895[(7)] = inst_17831__$1);

return statearr_17895;
})();
var statearr_17900_19100 = state_17856__$1;
(statearr_17900_19100[(2)] = null);

(statearr_17900_19100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13775__auto__ = null;
var cljs$core$async$state_machine__13775__auto____0 = (function (){
var statearr_17903 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17903[(0)] = cljs$core$async$state_machine__13775__auto__);

(statearr_17903[(1)] = (1));

return statearr_17903;
});
var cljs$core$async$state_machine__13775__auto____1 = (function (state_17856){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_17856);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e17908){var ex__13778__auto__ = e17908;
var statearr_17909_19101 = state_17856;
(statearr_17909_19101[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_17856[(4)]))){
var statearr_17910_19102 = state_17856;
(statearr_17910_19102[(1)] = cljs.core.first((state_17856[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19104 = state_17856;
state_17856 = G__19104;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$state_machine__13775__auto__ = function(state_17856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13775__auto____1.call(this,state_17856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13775__auto____0;
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13775__auto____1;
return cljs$core$async$state_machine__13775__auto__;
})()
})();
var state__14459__auto__ = (function (){var statearr_17911 = f__14458__auto__();
(statearr_17911[(6)] = c__14457__auto___19085);

return statearr_17911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17919 = arguments.length;
switch (G__17919) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14457__auto___19110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = (function (state_17965){
var state_val_17966 = (state_17965[(1)]);
if((state_val_17966 === (7))){
var inst_17961 = (state_17965[(2)]);
var state_17965__$1 = state_17965;
var statearr_17974_19111 = state_17965__$1;
(statearr_17974_19111[(2)] = inst_17961);

(statearr_17974_19111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17966 === (1))){
var inst_17924 = (new Array(n));
var inst_17925 = inst_17924;
var inst_17926 = (0);
var state_17965__$1 = (function (){var statearr_17982 = state_17965;
(statearr_17982[(7)] = inst_17925);

(statearr_17982[(8)] = inst_17926);

return statearr_17982;
})();
var statearr_17983_19116 = state_17965__$1;
(statearr_17983_19116[(2)] = null);

(statearr_17983_19116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17966 === (4))){
var inst_17930 = (state_17965[(9)]);
var inst_17930__$1 = (state_17965[(2)]);
var inst_17933 = (inst_17930__$1 == null);
var inst_17934 = cljs.core.not(inst_17933);
var state_17965__$1 = (function (){var statearr_17991 = state_17965;
(statearr_17991[(9)] = inst_17930__$1);

return statearr_17991;
})();
if(inst_17934){
var statearr_17998_19121 = state_17965__$1;
(statearr_17998_19121[(1)] = (5));

} else {
var statearr_17999_19122 = state_17965__$1;
(statearr_17999_19122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17966 === (15))){
var inst_17955 = (state_17965[(2)]);
var state_17965__$1 = state_17965;
var statearr_18004_19123 = state_17965__$1;
(statearr_18004_19123[(2)] = inst_17955);

(statearr_18004_19123[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17966 === (13))){
var state_17965__$1 = state_17965;
var statearr_18008_19124 = state_17965__$1;
(statearr_18008_19124[(2)] = null);

(statearr_18008_19124[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17966 === (6))){
var inst_17926 = (state_17965[(8)]);
var inst_17951 = (inst_17926 > (0));
var state_17965__$1 = state_17965;
if(cljs.core.truth_(inst_17951)){
var statearr_18026_19125 = state_17965__$1;
(statearr_18026_19125[(1)] = (12));

} else {
var statearr_18027_19126 = state_17965__$1;
(statearr_18027_19126[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17966 === (3))){
var inst_17963 = (state_17965[(2)]);
var state_17965__$1 = state_17965;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17965__$1,inst_17963);
} else {
if((state_val_17966 === (12))){
var inst_17925 = (state_17965[(7)]);
var inst_17953 = cljs.core.vec(inst_17925);
var state_17965__$1 = state_17965;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17965__$1,(15),out,inst_17953);
} else {
if((state_val_17966 === (2))){
var state_17965__$1 = state_17965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17965__$1,(4),ch);
} else {
if((state_val_17966 === (11))){
var inst_17945 = (state_17965[(2)]);
var inst_17946 = (new Array(n));
var inst_17925 = inst_17946;
var inst_17926 = (0);
var state_17965__$1 = (function (){var statearr_18038 = state_17965;
(statearr_18038[(7)] = inst_17925);

(statearr_18038[(10)] = inst_17945);

(statearr_18038[(8)] = inst_17926);

return statearr_18038;
})();
var statearr_18039_19127 = state_17965__$1;
(statearr_18039_19127[(2)] = null);

(statearr_18039_19127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17966 === (9))){
var inst_17925 = (state_17965[(7)]);
var inst_17943 = cljs.core.vec(inst_17925);
var state_17965__$1 = state_17965;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17965__$1,(11),out,inst_17943);
} else {
if((state_val_17966 === (5))){
var inst_17925 = (state_17965[(7)]);
var inst_17938 = (state_17965[(11)]);
var inst_17930 = (state_17965[(9)]);
var inst_17926 = (state_17965[(8)]);
var inst_17936 = (inst_17925[inst_17926] = inst_17930);
var inst_17938__$1 = (inst_17926 + (1));
var inst_17939 = (inst_17938__$1 < n);
var state_17965__$1 = (function (){var statearr_18057 = state_17965;
(statearr_18057[(12)] = inst_17936);

(statearr_18057[(11)] = inst_17938__$1);

return statearr_18057;
})();
if(cljs.core.truth_(inst_17939)){
var statearr_18063_19128 = state_17965__$1;
(statearr_18063_19128[(1)] = (8));

} else {
var statearr_18065_19129 = state_17965__$1;
(statearr_18065_19129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17966 === (14))){
var inst_17958 = (state_17965[(2)]);
var inst_17959 = cljs.core.async.close_BANG_(out);
var state_17965__$1 = (function (){var statearr_18071 = state_17965;
(statearr_18071[(13)] = inst_17958);

return statearr_18071;
})();
var statearr_18075_19130 = state_17965__$1;
(statearr_18075_19130[(2)] = inst_17959);

(statearr_18075_19130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17966 === (10))){
var inst_17949 = (state_17965[(2)]);
var state_17965__$1 = state_17965;
var statearr_18078_19131 = state_17965__$1;
(statearr_18078_19131[(2)] = inst_17949);

(statearr_18078_19131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17966 === (8))){
var inst_17925 = (state_17965[(7)]);
var inst_17938 = (state_17965[(11)]);
var tmp18067 = inst_17925;
var inst_17925__$1 = tmp18067;
var inst_17926 = inst_17938;
var state_17965__$1 = (function (){var statearr_18084 = state_17965;
(statearr_18084[(7)] = inst_17925__$1);

(statearr_18084[(8)] = inst_17926);

return statearr_18084;
})();
var statearr_18089_19132 = state_17965__$1;
(statearr_18089_19132[(2)] = null);

(statearr_18089_19132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13775__auto__ = null;
var cljs$core$async$state_machine__13775__auto____0 = (function (){
var statearr_18096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18096[(0)] = cljs$core$async$state_machine__13775__auto__);

(statearr_18096[(1)] = (1));

return statearr_18096;
});
var cljs$core$async$state_machine__13775__auto____1 = (function (state_17965){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_17965);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e18097){var ex__13778__auto__ = e18097;
var statearr_18098_19133 = state_17965;
(statearr_18098_19133[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_17965[(4)]))){
var statearr_18103_19134 = state_17965;
(statearr_18103_19134[(1)] = cljs.core.first((state_17965[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19135 = state_17965;
state_17965 = G__19135;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$state_machine__13775__auto__ = function(state_17965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13775__auto____1.call(this,state_17965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13775__auto____0;
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13775__auto____1;
return cljs$core$async$state_machine__13775__auto__;
})()
})();
var state__14459__auto__ = (function (){var statearr_18109 = f__14458__auto__();
(statearr_18109[(6)] = c__14457__auto___19110);

return statearr_18109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18126 = arguments.length;
switch (G__18126) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14457__auto___19137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14458__auto__ = (function (){var switch__13774__auto__ = (function (state_18202){
var state_val_18203 = (state_18202[(1)]);
if((state_val_18203 === (7))){
var inst_18196 = (state_18202[(2)]);
var state_18202__$1 = state_18202;
var statearr_18211_19138 = state_18202__$1;
(statearr_18211_19138[(2)] = inst_18196);

(statearr_18211_19138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (1))){
var inst_18142 = [];
var inst_18143 = inst_18142;
var inst_18144 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18202__$1 = (function (){var statearr_18216 = state_18202;
(statearr_18216[(7)] = inst_18144);

(statearr_18216[(8)] = inst_18143);

return statearr_18216;
})();
var statearr_18217_19140 = state_18202__$1;
(statearr_18217_19140[(2)] = null);

(statearr_18217_19140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (4))){
var inst_18151 = (state_18202[(9)]);
var inst_18151__$1 = (state_18202[(2)]);
var inst_18153 = (inst_18151__$1 == null);
var inst_18154 = cljs.core.not(inst_18153);
var state_18202__$1 = (function (){var statearr_18224 = state_18202;
(statearr_18224[(9)] = inst_18151__$1);

return statearr_18224;
})();
if(inst_18154){
var statearr_18225_19142 = state_18202__$1;
(statearr_18225_19142[(1)] = (5));

} else {
var statearr_18226_19144 = state_18202__$1;
(statearr_18226_19144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (15))){
var inst_18143 = (state_18202[(8)]);
var inst_18187 = cljs.core.vec(inst_18143);
var state_18202__$1 = state_18202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18202__$1,(18),out,inst_18187);
} else {
if((state_val_18203 === (13))){
var inst_18181 = (state_18202[(2)]);
var state_18202__$1 = state_18202;
var statearr_18229_19145 = state_18202__$1;
(statearr_18229_19145[(2)] = inst_18181);

(statearr_18229_19145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (6))){
var inst_18143 = (state_18202[(8)]);
var inst_18183 = inst_18143.length;
var inst_18184 = (inst_18183 > (0));
var state_18202__$1 = state_18202;
if(cljs.core.truth_(inst_18184)){
var statearr_18230_19149 = state_18202__$1;
(statearr_18230_19149[(1)] = (15));

} else {
var statearr_18231_19150 = state_18202__$1;
(statearr_18231_19150[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (17))){
var inst_18192 = (state_18202[(2)]);
var inst_18194 = cljs.core.async.close_BANG_(out);
var state_18202__$1 = (function (){var statearr_18234 = state_18202;
(statearr_18234[(10)] = inst_18192);

return statearr_18234;
})();
var statearr_18236_19151 = state_18202__$1;
(statearr_18236_19151[(2)] = inst_18194);

(statearr_18236_19151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (3))){
var inst_18198 = (state_18202[(2)]);
var state_18202__$1 = state_18202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18202__$1,inst_18198);
} else {
if((state_val_18203 === (12))){
var inst_18143 = (state_18202[(8)]);
var inst_18174 = cljs.core.vec(inst_18143);
var state_18202__$1 = state_18202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18202__$1,(14),out,inst_18174);
} else {
if((state_val_18203 === (2))){
var state_18202__$1 = state_18202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18202__$1,(4),ch);
} else {
if((state_val_18203 === (11))){
var inst_18156 = (state_18202[(11)]);
var inst_18151 = (state_18202[(9)]);
var inst_18143 = (state_18202[(8)]);
var inst_18171 = inst_18143.push(inst_18151);
var tmp18243 = inst_18143;
var inst_18143__$1 = tmp18243;
var inst_18144 = inst_18156;
var state_18202__$1 = (function (){var statearr_18246 = state_18202;
(statearr_18246[(12)] = inst_18171);

(statearr_18246[(7)] = inst_18144);

(statearr_18246[(8)] = inst_18143__$1);

return statearr_18246;
})();
var statearr_18247_19152 = state_18202__$1;
(statearr_18247_19152[(2)] = null);

(statearr_18247_19152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (9))){
var inst_18144 = (state_18202[(7)]);
var inst_18163 = cljs.core.keyword_identical_QMARK_(inst_18144,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18202__$1 = state_18202;
var statearr_18249_19157 = state_18202__$1;
(statearr_18249_19157[(2)] = inst_18163);

(statearr_18249_19157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (5))){
var inst_18156 = (state_18202[(11)]);
var inst_18151 = (state_18202[(9)]);
var inst_18144 = (state_18202[(7)]);
var inst_18160 = (state_18202[(13)]);
var inst_18156__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18151) : f.call(null,inst_18151));
var inst_18160__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18156__$1,inst_18144);
var state_18202__$1 = (function (){var statearr_18250 = state_18202;
(statearr_18250[(11)] = inst_18156__$1);

(statearr_18250[(13)] = inst_18160__$1);

return statearr_18250;
})();
if(inst_18160__$1){
var statearr_18254_19158 = state_18202__$1;
(statearr_18254_19158[(1)] = (8));

} else {
var statearr_18255_19159 = state_18202__$1;
(statearr_18255_19159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (14))){
var inst_18156 = (state_18202[(11)]);
var inst_18151 = (state_18202[(9)]);
var inst_18176 = (state_18202[(2)]);
var inst_18177 = [];
var inst_18178 = inst_18177.push(inst_18151);
var inst_18143 = inst_18177;
var inst_18144 = inst_18156;
var state_18202__$1 = (function (){var statearr_18256 = state_18202;
(statearr_18256[(7)] = inst_18144);

(statearr_18256[(14)] = inst_18178);

(statearr_18256[(15)] = inst_18176);

(statearr_18256[(8)] = inst_18143);

return statearr_18256;
})();
var statearr_18257_19160 = state_18202__$1;
(statearr_18257_19160[(2)] = null);

(statearr_18257_19160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (16))){
var state_18202__$1 = state_18202;
var statearr_18258_19161 = state_18202__$1;
(statearr_18258_19161[(2)] = null);

(statearr_18258_19161[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (10))){
var inst_18165 = (state_18202[(2)]);
var state_18202__$1 = state_18202;
if(cljs.core.truth_(inst_18165)){
var statearr_18259_19162 = state_18202__$1;
(statearr_18259_19162[(1)] = (11));

} else {
var statearr_18260_19163 = state_18202__$1;
(statearr_18260_19163[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (18))){
var inst_18189 = (state_18202[(2)]);
var state_18202__$1 = state_18202;
var statearr_18261_19164 = state_18202__$1;
(statearr_18261_19164[(2)] = inst_18189);

(statearr_18261_19164[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18203 === (8))){
var inst_18160 = (state_18202[(13)]);
var state_18202__$1 = state_18202;
var statearr_18262_19165 = state_18202__$1;
(statearr_18262_19165[(2)] = inst_18160);

(statearr_18262_19165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13775__auto__ = null;
var cljs$core$async$state_machine__13775__auto____0 = (function (){
var statearr_18263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18263[(0)] = cljs$core$async$state_machine__13775__auto__);

(statearr_18263[(1)] = (1));

return statearr_18263;
});
var cljs$core$async$state_machine__13775__auto____1 = (function (state_18202){
while(true){
var ret_value__13776__auto__ = (function (){try{while(true){
var result__13777__auto__ = switch__13774__auto__(state_18202);
if(cljs.core.keyword_identical_QMARK_(result__13777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13777__auto__;
}
break;
}
}catch (e18268){var ex__13778__auto__ = e18268;
var statearr_18269_19166 = state_18202;
(statearr_18269_19166[(2)] = ex__13778__auto__);


if(cljs.core.seq((state_18202[(4)]))){
var statearr_18274_19168 = state_18202;
(statearr_18274_19168[(1)] = cljs.core.first((state_18202[(4)])));

} else {
throw ex__13778__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13776__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19169 = state_18202;
state_18202 = G__19169;
continue;
} else {
return ret_value__13776__auto__;
}
break;
}
});
cljs$core$async$state_machine__13775__auto__ = function(state_18202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13775__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13775__auto____1.call(this,state_18202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13775__auto____0;
cljs$core$async$state_machine__13775__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13775__auto____1;
return cljs$core$async$state_machine__13775__auto__;
})()
})();
var state__14459__auto__ = (function (){var statearr_18278 = f__14458__auto__();
(statearr_18278[(6)] = c__14457__auto___19137);

return statearr_18278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14459__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
