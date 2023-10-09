goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__20231 = arguments.length;
switch (G__20231) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20240 = (function (f,blockable,meta20241){
this.f = f;
this.blockable = blockable;
this.meta20241 = meta20241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20242,meta20241__$1){
var self__ = this;
var _20242__$1 = this;
return (new cljs.core.async.t_cljs$core$async20240(self__.f,self__.blockable,meta20241__$1));
}));

(cljs.core.async.t_cljs$core$async20240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20242){
var self__ = this;
var _20242__$1 = this;
return self__.meta20241;
}));

(cljs.core.async.t_cljs$core$async20240.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20240.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20240.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async20240.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async20240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20241","meta20241",1062222931,null)], null);
}));

(cljs.core.async.t_cljs$core$async20240.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20240");

(cljs.core.async.t_cljs$core$async20240.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20240");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20240.
 */
cljs.core.async.__GT_t_cljs$core$async20240 = (function cljs$core$async$__GT_t_cljs$core$async20240(f__$1,blockable__$1,meta20241){
return (new cljs.core.async.t_cljs$core$async20240(f__$1,blockable__$1,meta20241));
});

}

return (new cljs.core.async.t_cljs$core$async20240(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20302 = arguments.length;
switch (G__20302) {
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
var G__20317 = arguments.length;
switch (G__20317) {
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
var G__20342 = arguments.length;
switch (G__20342) {
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
var val_23432 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23432) : fn1.call(null,val_23432));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23432) : fn1.call(null,val_23432));
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
var G__20354 = arguments.length;
switch (G__20354) {
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
var n__5636__auto___23435 = n;
var x_23436 = (0);
while(true){
if((x_23436 < n__5636__auto___23435)){
(a[x_23436] = x_23436);

var G__23437 = (x_23436 + (1));
x_23436 = G__23437;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20381 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20381 = (function (flag,meta20382){
this.flag = flag;
this.meta20382 = meta20382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20383,meta20382__$1){
var self__ = this;
var _20383__$1 = this;
return (new cljs.core.async.t_cljs$core$async20381(self__.flag,meta20382__$1));
}));

(cljs.core.async.t_cljs$core$async20381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20383){
var self__ = this;
var _20383__$1 = this;
return self__.meta20382;
}));

(cljs.core.async.t_cljs$core$async20381.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20381.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async20381.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20381.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async20381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20382","meta20382",-117174901,null)], null);
}));

(cljs.core.async.t_cljs$core$async20381.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20381");

(cljs.core.async.t_cljs$core$async20381.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20381");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20381.
 */
cljs.core.async.__GT_t_cljs$core$async20381 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20381(flag__$1,meta20382){
return (new cljs.core.async.t_cljs$core$async20381(flag__$1,meta20382));
});

}

return (new cljs.core.async.t_cljs$core$async20381(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20402 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20402 = (function (flag,cb,meta20403){
this.flag = flag;
this.cb = cb;
this.meta20403 = meta20403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20404,meta20403__$1){
var self__ = this;
var _20404__$1 = this;
return (new cljs.core.async.t_cljs$core$async20402(self__.flag,self__.cb,meta20403__$1));
}));

(cljs.core.async.t_cljs$core$async20402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20404){
var self__ = this;
var _20404__$1 = this;
return self__.meta20403;
}));

(cljs.core.async.t_cljs$core$async20402.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20402.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async20402.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20402.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async20402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20403","meta20403",83590656,null)], null);
}));

(cljs.core.async.t_cljs$core$async20402.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20402");

(cljs.core.async.t_cljs$core$async20402.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20402");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20402.
 */
cljs.core.async.__GT_t_cljs$core$async20402 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20402(flag__$1,cb__$1,meta20403){
return (new cljs.core.async.t_cljs$core$async20402(flag__$1,cb__$1,meta20403));
});

}

return (new cljs.core.async.t_cljs$core$async20402(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__20415_SHARP_){
var G__20428 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20415_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20428) : fret.call(null,G__20428));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20417_SHARP_){
var G__20430 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20417_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20430) : fret.call(null,G__20430));
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
var G__23441 = (i + (1));
i = G__23441;
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
var len__5769__auto___23443 = arguments.length;
var i__5770__auto___23444 = (0);
while(true){
if((i__5770__auto___23444 < len__5769__auto___23443)){
args__5775__auto__.push((arguments[i__5770__auto___23444]));

var G__23445 = (i__5770__auto___23444 + (1));
i__5770__auto___23444 = G__23445;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20443){
var map__20444 = p__20443;
var map__20444__$1 = cljs.core.__destructure_map(map__20444);
var opts = map__20444__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20441){
var G__20442 = cljs.core.first(seq20441);
var seq20441__$1 = cljs.core.next(seq20441);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20442,seq20441__$1);
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
var G__20465 = arguments.length;
switch (G__20465) {
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
var c__20075__auto___23447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = (function (state_20513){
var state_val_20514 = (state_20513[(1)]);
if((state_val_20514 === (7))){
var inst_20509 = (state_20513[(2)]);
var state_20513__$1 = state_20513;
var statearr_20521_23452 = state_20513__$1;
(statearr_20521_23452[(2)] = inst_20509);

(statearr_20521_23452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (1))){
var state_20513__$1 = state_20513;
var statearr_20522_23454 = state_20513__$1;
(statearr_20522_23454[(2)] = null);

(statearr_20522_23454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (4))){
var inst_20490 = (state_20513[(7)]);
var inst_20490__$1 = (state_20513[(2)]);
var inst_20491 = (inst_20490__$1 == null);
var state_20513__$1 = (function (){var statearr_20524 = state_20513;
(statearr_20524[(7)] = inst_20490__$1);

return statearr_20524;
})();
if(cljs.core.truth_(inst_20491)){
var statearr_20528_23460 = state_20513__$1;
(statearr_20528_23460[(1)] = (5));

} else {
var statearr_20529_23461 = state_20513__$1;
(statearr_20529_23461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (13))){
var state_20513__$1 = state_20513;
var statearr_20531_23462 = state_20513__$1;
(statearr_20531_23462[(2)] = null);

(statearr_20531_23462[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (6))){
var inst_20490 = (state_20513[(7)]);
var state_20513__$1 = state_20513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20513__$1,(11),to,inst_20490);
} else {
if((state_val_20514 === (3))){
var inst_20511 = (state_20513[(2)]);
var state_20513__$1 = state_20513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20513__$1,inst_20511);
} else {
if((state_val_20514 === (12))){
var state_20513__$1 = state_20513;
var statearr_20537_23463 = state_20513__$1;
(statearr_20537_23463[(2)] = null);

(statearr_20537_23463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (2))){
var state_20513__$1 = state_20513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20513__$1,(4),from);
} else {
if((state_val_20514 === (11))){
var inst_20501 = (state_20513[(2)]);
var state_20513__$1 = state_20513;
if(cljs.core.truth_(inst_20501)){
var statearr_20540_23464 = state_20513__$1;
(statearr_20540_23464[(1)] = (12));

} else {
var statearr_20541_23465 = state_20513__$1;
(statearr_20541_23465[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (9))){
var state_20513__$1 = state_20513;
var statearr_20542_23466 = state_20513__$1;
(statearr_20542_23466[(2)] = null);

(statearr_20542_23466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (5))){
var state_20513__$1 = state_20513;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20543_23471 = state_20513__$1;
(statearr_20543_23471[(1)] = (8));

} else {
var statearr_20547_23472 = state_20513__$1;
(statearr_20547_23472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (14))){
var inst_20507 = (state_20513[(2)]);
var state_20513__$1 = state_20513;
var statearr_20548_23473 = state_20513__$1;
(statearr_20548_23473[(2)] = inst_20507);

(statearr_20548_23473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (10))){
var inst_20498 = (state_20513[(2)]);
var state_20513__$1 = state_20513;
var statearr_20552_23475 = state_20513__$1;
(statearr_20552_23475[(2)] = inst_20498);

(statearr_20552_23475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20514 === (8))){
var inst_20494 = cljs.core.async.close_BANG_(to);
var state_20513__$1 = state_20513;
var statearr_20554_23476 = state_20513__$1;
(statearr_20554_23476[(2)] = inst_20494);

(statearr_20554_23476[(1)] = (10));


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
var cljs$core$async$state_machine__19895__auto__ = null;
var cljs$core$async$state_machine__19895__auto____0 = (function (){
var statearr_20558 = [null,null,null,null,null,null,null,null];
(statearr_20558[(0)] = cljs$core$async$state_machine__19895__auto__);

(statearr_20558[(1)] = (1));

return statearr_20558;
});
var cljs$core$async$state_machine__19895__auto____1 = (function (state_20513){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_20513);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e20559){var ex__19898__auto__ = e20559;
var statearr_20560_23477 = state_20513;
(statearr_20560_23477[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_20513[(4)]))){
var statearr_20562_23479 = state_20513;
(statearr_20562_23479[(1)] = cljs.core.first((state_20513[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23480 = state_20513;
state_20513 = G__23480;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$state_machine__19895__auto__ = function(state_20513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19895__auto____1.call(this,state_20513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19895__auto____0;
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19895__auto____1;
return cljs$core$async$state_machine__19895__auto__;
})()
})();
var state__20077__auto__ = (function (){var statearr_20564 = f__20076__auto__();
(statearr_20564[(6)] = c__20075__auto___23447);

return statearr_20564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
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
var process__$1 = (function (p__20575){
var vec__20576 = p__20575;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20576,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20576,(1),null);
var job = vec__20576;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__20075__auto___23483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = (function (state_20586){
var state_val_20587 = (state_20586[(1)]);
if((state_val_20587 === (1))){
var state_20586__$1 = state_20586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20586__$1,(2),res,v);
} else {
if((state_val_20587 === (2))){
var inst_20583 = (state_20586[(2)]);
var inst_20584 = cljs.core.async.close_BANG_(res);
var state_20586__$1 = (function (){var statearr_20589 = state_20586;
(statearr_20589[(7)] = inst_20583);

return statearr_20589;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20586__$1,inst_20584);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____0 = (function (){
var statearr_20593 = [null,null,null,null,null,null,null,null];
(statearr_20593[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__);

(statearr_20593[(1)] = (1));

return statearr_20593;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____1 = (function (state_20586){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_20586);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e20594){var ex__19898__auto__ = e20594;
var statearr_20596_23484 = state_20586;
(statearr_20596_23484[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_20586[(4)]))){
var statearr_20597_23485 = state_20586;
(statearr_20597_23485[(1)] = cljs.core.first((state_20586[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23486 = state_20586;
state_20586 = G__23486;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__ = function(state_20586){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____1.call(this,state_20586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__;
})()
})();
var state__20077__auto__ = (function (){var statearr_20599 = f__20076__auto__();
(statearr_20599[(6)] = c__20075__auto___23483);

return statearr_20599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__20607){
var vec__20608 = p__20607;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20608,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20608,(1),null);
var job = vec__20608;
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
var n__5636__auto___23490 = n;
var __23491 = (0);
while(true){
if((__23491 < n__5636__auto___23490)){
var G__20611_23492 = type;
var G__20611_23493__$1 = (((G__20611_23492 instanceof cljs.core.Keyword))?G__20611_23492.fqn:null);
switch (G__20611_23493__$1) {
case "compute":
var c__20075__auto___23495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23491,c__20075__auto___23495,G__20611_23492,G__20611_23493__$1,n__5636__auto___23490,jobs,results,process__$1,async){
return (function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = ((function (__23491,c__20075__auto___23495,G__20611_23492,G__20611_23493__$1,n__5636__auto___23490,jobs,results,process__$1,async){
return (function (state_20625){
var state_val_20626 = (state_20625[(1)]);
if((state_val_20626 === (1))){
var state_20625__$1 = state_20625;
var statearr_20627_23496 = state_20625__$1;
(statearr_20627_23496[(2)] = null);

(statearr_20627_23496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20626 === (2))){
var state_20625__$1 = state_20625;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20625__$1,(4),jobs);
} else {
if((state_val_20626 === (3))){
var inst_20623 = (state_20625[(2)]);
var state_20625__$1 = state_20625;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20625__$1,inst_20623);
} else {
if((state_val_20626 === (4))){
var inst_20614 = (state_20625[(2)]);
var inst_20616 = process__$1(inst_20614);
var state_20625__$1 = state_20625;
if(cljs.core.truth_(inst_20616)){
var statearr_20632_23497 = state_20625__$1;
(statearr_20632_23497[(1)] = (5));

} else {
var statearr_20633_23498 = state_20625__$1;
(statearr_20633_23498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20626 === (5))){
var state_20625__$1 = state_20625;
var statearr_20634_23500 = state_20625__$1;
(statearr_20634_23500[(2)] = null);

(statearr_20634_23500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20626 === (6))){
var state_20625__$1 = state_20625;
var statearr_20639_23502 = state_20625__$1;
(statearr_20639_23502[(2)] = null);

(statearr_20639_23502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20626 === (7))){
var inst_20621 = (state_20625[(2)]);
var state_20625__$1 = state_20625;
var statearr_20640_23503 = state_20625__$1;
(statearr_20640_23503[(2)] = inst_20621);

(statearr_20640_23503[(1)] = (3));


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
});})(__23491,c__20075__auto___23495,G__20611_23492,G__20611_23493__$1,n__5636__auto___23490,jobs,results,process__$1,async))
;
return ((function (__23491,switch__19894__auto__,c__20075__auto___23495,G__20611_23492,G__20611_23493__$1,n__5636__auto___23490,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____0 = (function (){
var statearr_20642 = [null,null,null,null,null,null,null];
(statearr_20642[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__);

(statearr_20642[(1)] = (1));

return statearr_20642;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____1 = (function (state_20625){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_20625);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e20647){var ex__19898__auto__ = e20647;
var statearr_20648_23505 = state_20625;
(statearr_20648_23505[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_20625[(4)]))){
var statearr_20649_23506 = state_20625;
(statearr_20649_23506[(1)] = cljs.core.first((state_20625[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23507 = state_20625;
state_20625 = G__23507;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__ = function(state_20625){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____1.call(this,state_20625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__;
})()
;})(__23491,switch__19894__auto__,c__20075__auto___23495,G__20611_23492,G__20611_23493__$1,n__5636__auto___23490,jobs,results,process__$1,async))
})();
var state__20077__auto__ = (function (){var statearr_20653 = f__20076__auto__();
(statearr_20653[(6)] = c__20075__auto___23495);

return statearr_20653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
});})(__23491,c__20075__auto___23495,G__20611_23492,G__20611_23493__$1,n__5636__auto___23490,jobs,results,process__$1,async))
);


break;
case "async":
var c__20075__auto___23508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__23491,c__20075__auto___23508,G__20611_23492,G__20611_23493__$1,n__5636__auto___23490,jobs,results,process__$1,async){
return (function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = ((function (__23491,c__20075__auto___23508,G__20611_23492,G__20611_23493__$1,n__5636__auto___23490,jobs,results,process__$1,async){
return (function (state_20666){
var state_val_20667 = (state_20666[(1)]);
if((state_val_20667 === (1))){
var state_20666__$1 = state_20666;
var statearr_20668_23509 = state_20666__$1;
(statearr_20668_23509[(2)] = null);

(statearr_20668_23509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (2))){
var state_20666__$1 = state_20666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20666__$1,(4),jobs);
} else {
if((state_val_20667 === (3))){
var inst_20664 = (state_20666[(2)]);
var state_20666__$1 = state_20666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20666__$1,inst_20664);
} else {
if((state_val_20667 === (4))){
var inst_20656 = (state_20666[(2)]);
var inst_20657 = async(inst_20656);
var state_20666__$1 = state_20666;
if(cljs.core.truth_(inst_20657)){
var statearr_20669_23512 = state_20666__$1;
(statearr_20669_23512[(1)] = (5));

} else {
var statearr_20670_23513 = state_20666__$1;
(statearr_20670_23513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (5))){
var state_20666__$1 = state_20666;
var statearr_20671_23514 = state_20666__$1;
(statearr_20671_23514[(2)] = null);

(statearr_20671_23514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (6))){
var state_20666__$1 = state_20666;
var statearr_20672_23515 = state_20666__$1;
(statearr_20672_23515[(2)] = null);

(statearr_20672_23515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (7))){
var inst_20662 = (state_20666[(2)]);
var state_20666__$1 = state_20666;
var statearr_20674_23516 = state_20666__$1;
(statearr_20674_23516[(2)] = inst_20662);

(statearr_20674_23516[(1)] = (3));


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
});})(__23491,c__20075__auto___23508,G__20611_23492,G__20611_23493__$1,n__5636__auto___23490,jobs,results,process__$1,async))
;
return ((function (__23491,switch__19894__auto__,c__20075__auto___23508,G__20611_23492,G__20611_23493__$1,n__5636__auto___23490,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____0 = (function (){
var statearr_20679 = [null,null,null,null,null,null,null];
(statearr_20679[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__);

(statearr_20679[(1)] = (1));

return statearr_20679;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____1 = (function (state_20666){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_20666);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e20681){var ex__19898__auto__ = e20681;
var statearr_20682_23517 = state_20666;
(statearr_20682_23517[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_20666[(4)]))){
var statearr_20683_23519 = state_20666;
(statearr_20683_23519[(1)] = cljs.core.first((state_20666[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23520 = state_20666;
state_20666 = G__23520;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__ = function(state_20666){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____1.call(this,state_20666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__;
})()
;})(__23491,switch__19894__auto__,c__20075__auto___23508,G__20611_23492,G__20611_23493__$1,n__5636__auto___23490,jobs,results,process__$1,async))
})();
var state__20077__auto__ = (function (){var statearr_20684 = f__20076__auto__();
(statearr_20684[(6)] = c__20075__auto___23508);

return statearr_20684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
});})(__23491,c__20075__auto___23508,G__20611_23492,G__20611_23493__$1,n__5636__auto___23490,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20611_23493__$1)].join('')));

}

var G__23521 = (__23491 + (1));
__23491 = G__23521;
continue;
} else {
}
break;
}

var c__20075__auto___23522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = (function (state_20707){
var state_val_20708 = (state_20707[(1)]);
if((state_val_20708 === (7))){
var inst_20703 = (state_20707[(2)]);
var state_20707__$1 = state_20707;
var statearr_20715_23525 = state_20707__$1;
(statearr_20715_23525[(2)] = inst_20703);

(statearr_20715_23525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20708 === (1))){
var state_20707__$1 = state_20707;
var statearr_20716_23527 = state_20707__$1;
(statearr_20716_23527[(2)] = null);

(statearr_20716_23527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20708 === (4))){
var inst_20688 = (state_20707[(7)]);
var inst_20688__$1 = (state_20707[(2)]);
var inst_20689 = (inst_20688__$1 == null);
var state_20707__$1 = (function (){var statearr_20719 = state_20707;
(statearr_20719[(7)] = inst_20688__$1);

return statearr_20719;
})();
if(cljs.core.truth_(inst_20689)){
var statearr_20720_23529 = state_20707__$1;
(statearr_20720_23529[(1)] = (5));

} else {
var statearr_20723_23532 = state_20707__$1;
(statearr_20723_23532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20708 === (6))){
var inst_20693 = (state_20707[(8)]);
var inst_20688 = (state_20707[(7)]);
var inst_20693__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_20694 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20695 = [inst_20688,inst_20693__$1];
var inst_20696 = (new cljs.core.PersistentVector(null,2,(5),inst_20694,inst_20695,null));
var state_20707__$1 = (function (){var statearr_20724 = state_20707;
(statearr_20724[(8)] = inst_20693__$1);

return statearr_20724;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20707__$1,(8),jobs,inst_20696);
} else {
if((state_val_20708 === (3))){
var inst_20705 = (state_20707[(2)]);
var state_20707__$1 = state_20707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20707__$1,inst_20705);
} else {
if((state_val_20708 === (2))){
var state_20707__$1 = state_20707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20707__$1,(4),from);
} else {
if((state_val_20708 === (9))){
var inst_20700 = (state_20707[(2)]);
var state_20707__$1 = (function (){var statearr_20728 = state_20707;
(statearr_20728[(9)] = inst_20700);

return statearr_20728;
})();
var statearr_20729_23539 = state_20707__$1;
(statearr_20729_23539[(2)] = null);

(statearr_20729_23539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20708 === (5))){
var inst_20691 = cljs.core.async.close_BANG_(jobs);
var state_20707__$1 = state_20707;
var statearr_20730_23540 = state_20707__$1;
(statearr_20730_23540[(2)] = inst_20691);

(statearr_20730_23540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20708 === (8))){
var inst_20693 = (state_20707[(8)]);
var inst_20698 = (state_20707[(2)]);
var state_20707__$1 = (function (){var statearr_20731 = state_20707;
(statearr_20731[(10)] = inst_20698);

return statearr_20731;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20707__$1,(9),results,inst_20693);
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
var cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____0 = (function (){
var statearr_20737 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20737[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__);

(statearr_20737[(1)] = (1));

return statearr_20737;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____1 = (function (state_20707){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_20707);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e20738){var ex__19898__auto__ = e20738;
var statearr_20739_23542 = state_20707;
(statearr_20739_23542[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_20707[(4)]))){
var statearr_20743_23543 = state_20707;
(statearr_20743_23543[(1)] = cljs.core.first((state_20707[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23544 = state_20707;
state_20707 = G__23544;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__ = function(state_20707){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____1.call(this,state_20707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__;
})()
})();
var state__20077__auto__ = (function (){var statearr_20745 = f__20076__auto__();
(statearr_20745[(6)] = c__20075__auto___23522);

return statearr_20745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
}));


var c__20075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = (function (state_20807){
var state_val_20811 = (state_20807[(1)]);
if((state_val_20811 === (7))){
var inst_20800 = (state_20807[(2)]);
var state_20807__$1 = state_20807;
var statearr_20827_23545 = state_20807__$1;
(statearr_20827_23545[(2)] = inst_20800);

(statearr_20827_23545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20811 === (20))){
var state_20807__$1 = state_20807;
var statearr_20828_23546 = state_20807__$1;
(statearr_20828_23546[(2)] = null);

(statearr_20828_23546[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20811 === (1))){
var state_20807__$1 = state_20807;
var statearr_20835_23547 = state_20807__$1;
(statearr_20835_23547[(2)] = null);

(statearr_20835_23547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20811 === (4))){
var inst_20749 = (state_20807[(7)]);
var inst_20749__$1 = (state_20807[(2)]);
var inst_20750 = (inst_20749__$1 == null);
var state_20807__$1 = (function (){var statearr_20836 = state_20807;
(statearr_20836[(7)] = inst_20749__$1);

return statearr_20836;
})();
if(cljs.core.truth_(inst_20750)){
var statearr_20840_23549 = state_20807__$1;
(statearr_20840_23549[(1)] = (5));

} else {
var statearr_20841_23550 = state_20807__$1;
(statearr_20841_23550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20811 === (15))){
var inst_20762 = (state_20807[(8)]);
var state_20807__$1 = state_20807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20807__$1,(18),to,inst_20762);
} else {
if((state_val_20811 === (21))){
var inst_20792 = (state_20807[(2)]);
var state_20807__$1 = state_20807;
var statearr_20842_23552 = state_20807__$1;
(statearr_20842_23552[(2)] = inst_20792);

(statearr_20842_23552[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20811 === (13))){
var inst_20795 = (state_20807[(2)]);
var state_20807__$1 = (function (){var statearr_20843 = state_20807;
(statearr_20843[(9)] = inst_20795);

return statearr_20843;
})();
var statearr_20844_23553 = state_20807__$1;
(statearr_20844_23553[(2)] = null);

(statearr_20844_23553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20811 === (6))){
var inst_20749 = (state_20807[(7)]);
var state_20807__$1 = state_20807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20807__$1,(11),inst_20749);
} else {
if((state_val_20811 === (17))){
var inst_20784 = (state_20807[(2)]);
var state_20807__$1 = state_20807;
if(cljs.core.truth_(inst_20784)){
var statearr_20851_23555 = state_20807__$1;
(statearr_20851_23555[(1)] = (19));

} else {
var statearr_20854_23556 = state_20807__$1;
(statearr_20854_23556[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20811 === (3))){
var inst_20802 = (state_20807[(2)]);
var state_20807__$1 = state_20807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20807__$1,inst_20802);
} else {
if((state_val_20811 === (12))){
var inst_20759 = (state_20807[(10)]);
var state_20807__$1 = state_20807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20807__$1,(14),inst_20759);
} else {
if((state_val_20811 === (2))){
var state_20807__$1 = state_20807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20807__$1,(4),results);
} else {
if((state_val_20811 === (19))){
var state_20807__$1 = state_20807;
var statearr_20855_23558 = state_20807__$1;
(statearr_20855_23558[(2)] = null);

(statearr_20855_23558[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20811 === (11))){
var inst_20759 = (state_20807[(2)]);
var state_20807__$1 = (function (){var statearr_20856 = state_20807;
(statearr_20856[(10)] = inst_20759);

return statearr_20856;
})();
var statearr_20859_23559 = state_20807__$1;
(statearr_20859_23559[(2)] = null);

(statearr_20859_23559[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20811 === (9))){
var state_20807__$1 = state_20807;
var statearr_20861_23561 = state_20807__$1;
(statearr_20861_23561[(2)] = null);

(statearr_20861_23561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20811 === (5))){
var state_20807__$1 = state_20807;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20862_23562 = state_20807__$1;
(statearr_20862_23562[(1)] = (8));

} else {
var statearr_20863_23563 = state_20807__$1;
(statearr_20863_23563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20811 === (14))){
var inst_20772 = (state_20807[(11)]);
var inst_20762 = (state_20807[(8)]);
var inst_20762__$1 = (state_20807[(2)]);
var inst_20768 = (inst_20762__$1 == null);
var inst_20772__$1 = cljs.core.not(inst_20768);
var state_20807__$1 = (function (){var statearr_20865 = state_20807;
(statearr_20865[(11)] = inst_20772__$1);

(statearr_20865[(8)] = inst_20762__$1);

return statearr_20865;
})();
if(inst_20772__$1){
var statearr_20866_23564 = state_20807__$1;
(statearr_20866_23564[(1)] = (15));

} else {
var statearr_20867_23565 = state_20807__$1;
(statearr_20867_23565[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20811 === (16))){
var inst_20772 = (state_20807[(11)]);
var state_20807__$1 = state_20807;
var statearr_20868_23566 = state_20807__$1;
(statearr_20868_23566[(2)] = inst_20772);

(statearr_20868_23566[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20811 === (10))){
var inst_20756 = (state_20807[(2)]);
var state_20807__$1 = state_20807;
var statearr_20869_23568 = state_20807__$1;
(statearr_20869_23568[(2)] = inst_20756);

(statearr_20869_23568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20811 === (18))){
var inst_20781 = (state_20807[(2)]);
var state_20807__$1 = state_20807;
var statearr_20870_23569 = state_20807__$1;
(statearr_20870_23569[(2)] = inst_20781);

(statearr_20870_23569[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20811 === (8))){
var inst_20753 = cljs.core.async.close_BANG_(to);
var state_20807__$1 = state_20807;
var statearr_20873_23570 = state_20807__$1;
(statearr_20873_23570[(2)] = inst_20753);

(statearr_20873_23570[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____0 = (function (){
var statearr_20878 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20878[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__);

(statearr_20878[(1)] = (1));

return statearr_20878;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____1 = (function (state_20807){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_20807);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e20881){var ex__19898__auto__ = e20881;
var statearr_20882_23575 = state_20807;
(statearr_20882_23575[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_20807[(4)]))){
var statearr_20883_23576 = state_20807;
(statearr_20883_23576[(1)] = cljs.core.first((state_20807[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23577 = state_20807;
state_20807 = G__23577;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__ = function(state_20807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____1.call(this,state_20807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19895__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19895__auto__;
})()
})();
var state__20077__auto__ = (function (){var statearr_20884 = f__20076__auto__();
(statearr_20884[(6)] = c__20075__auto__);

return statearr_20884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
}));

return c__20075__auto__;
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
var G__20888 = arguments.length;
switch (G__20888) {
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
var G__20890 = arguments.length;
switch (G__20890) {
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
var G__20895 = arguments.length;
switch (G__20895) {
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
var c__20075__auto___23583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = (function (state_20932){
var state_val_20933 = (state_20932[(1)]);
if((state_val_20933 === (7))){
var inst_20928 = (state_20932[(2)]);
var state_20932__$1 = state_20932;
var statearr_20940_23585 = state_20932__$1;
(statearr_20940_23585[(2)] = inst_20928);

(statearr_20940_23585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20933 === (1))){
var state_20932__$1 = state_20932;
var statearr_20941_23586 = state_20932__$1;
(statearr_20941_23586[(2)] = null);

(statearr_20941_23586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20933 === (4))){
var inst_20905 = (state_20932[(7)]);
var inst_20905__$1 = (state_20932[(2)]);
var inst_20906 = (inst_20905__$1 == null);
var state_20932__$1 = (function (){var statearr_20948 = state_20932;
(statearr_20948[(7)] = inst_20905__$1);

return statearr_20948;
})();
if(cljs.core.truth_(inst_20906)){
var statearr_20952_23589 = state_20932__$1;
(statearr_20952_23589[(1)] = (5));

} else {
var statearr_20953_23591 = state_20932__$1;
(statearr_20953_23591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20933 === (13))){
var state_20932__$1 = state_20932;
var statearr_20954_23594 = state_20932__$1;
(statearr_20954_23594[(2)] = null);

(statearr_20954_23594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20933 === (6))){
var inst_20905 = (state_20932[(7)]);
var inst_20911 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20905) : p.call(null,inst_20905));
var state_20932__$1 = state_20932;
if(cljs.core.truth_(inst_20911)){
var statearr_20955_23596 = state_20932__$1;
(statearr_20955_23596[(1)] = (9));

} else {
var statearr_20959_23597 = state_20932__$1;
(statearr_20959_23597[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20933 === (3))){
var inst_20930 = (state_20932[(2)]);
var state_20932__$1 = state_20932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20932__$1,inst_20930);
} else {
if((state_val_20933 === (12))){
var state_20932__$1 = state_20932;
var statearr_20960_23598 = state_20932__$1;
(statearr_20960_23598[(2)] = null);

(statearr_20960_23598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20933 === (2))){
var state_20932__$1 = state_20932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20932__$1,(4),ch);
} else {
if((state_val_20933 === (11))){
var inst_20905 = (state_20932[(7)]);
var inst_20915 = (state_20932[(2)]);
var state_20932__$1 = state_20932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20932__$1,(8),inst_20915,inst_20905);
} else {
if((state_val_20933 === (9))){
var state_20932__$1 = state_20932;
var statearr_20961_23601 = state_20932__$1;
(statearr_20961_23601[(2)] = tc);

(statearr_20961_23601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20933 === (5))){
var inst_20908 = cljs.core.async.close_BANG_(tc);
var inst_20909 = cljs.core.async.close_BANG_(fc);
var state_20932__$1 = (function (){var statearr_20965 = state_20932;
(statearr_20965[(8)] = inst_20908);

return statearr_20965;
})();
var statearr_20966_23604 = state_20932__$1;
(statearr_20966_23604[(2)] = inst_20909);

(statearr_20966_23604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20933 === (14))){
var inst_20926 = (state_20932[(2)]);
var state_20932__$1 = state_20932;
var statearr_20967_23605 = state_20932__$1;
(statearr_20967_23605[(2)] = inst_20926);

(statearr_20967_23605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20933 === (10))){
var state_20932__$1 = state_20932;
var statearr_20968_23606 = state_20932__$1;
(statearr_20968_23606[(2)] = fc);

(statearr_20968_23606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20933 === (8))){
var inst_20917 = (state_20932[(2)]);
var state_20932__$1 = state_20932;
if(cljs.core.truth_(inst_20917)){
var statearr_20970_23607 = state_20932__$1;
(statearr_20970_23607[(1)] = (12));

} else {
var statearr_20971_23608 = state_20932__$1;
(statearr_20971_23608[(1)] = (13));

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
var cljs$core$async$state_machine__19895__auto__ = null;
var cljs$core$async$state_machine__19895__auto____0 = (function (){
var statearr_20972 = [null,null,null,null,null,null,null,null,null];
(statearr_20972[(0)] = cljs$core$async$state_machine__19895__auto__);

(statearr_20972[(1)] = (1));

return statearr_20972;
});
var cljs$core$async$state_machine__19895__auto____1 = (function (state_20932){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_20932);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e20973){var ex__19898__auto__ = e20973;
var statearr_20979_23610 = state_20932;
(statearr_20979_23610[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_20932[(4)]))){
var statearr_20980_23611 = state_20932;
(statearr_20980_23611[(1)] = cljs.core.first((state_20932[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23612 = state_20932;
state_20932 = G__23612;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$state_machine__19895__auto__ = function(state_20932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19895__auto____1.call(this,state_20932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19895__auto____0;
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19895__auto____1;
return cljs$core$async$state_machine__19895__auto__;
})()
})();
var state__20077__auto__ = (function (){var statearr_20982 = f__20076__auto__();
(statearr_20982[(6)] = c__20075__auto___23583);

return statearr_20982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
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
var c__20075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = (function (state_21006){
var state_val_21007 = (state_21006[(1)]);
if((state_val_21007 === (7))){
var inst_21002 = (state_21006[(2)]);
var state_21006__$1 = state_21006;
var statearr_21016_23623 = state_21006__$1;
(statearr_21016_23623[(2)] = inst_21002);

(statearr_21016_23623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (1))){
var inst_20985 = init;
var inst_20986 = inst_20985;
var state_21006__$1 = (function (){var statearr_21017 = state_21006;
(statearr_21017[(7)] = inst_20986);

return statearr_21017;
})();
var statearr_21021_23629 = state_21006__$1;
(statearr_21021_23629[(2)] = null);

(statearr_21021_23629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (4))){
var inst_20989 = (state_21006[(8)]);
var inst_20989__$1 = (state_21006[(2)]);
var inst_20990 = (inst_20989__$1 == null);
var state_21006__$1 = (function (){var statearr_21022 = state_21006;
(statearr_21022[(8)] = inst_20989__$1);

return statearr_21022;
})();
if(cljs.core.truth_(inst_20990)){
var statearr_21023_23630 = state_21006__$1;
(statearr_21023_23630[(1)] = (5));

} else {
var statearr_21024_23631 = state_21006__$1;
(statearr_21024_23631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (6))){
var inst_20989 = (state_21006[(8)]);
var inst_20986 = (state_21006[(7)]);
var inst_20993 = (state_21006[(9)]);
var inst_20993__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_20986,inst_20989) : f.call(null,inst_20986,inst_20989));
var inst_20994 = cljs.core.reduced_QMARK_(inst_20993__$1);
var state_21006__$1 = (function (){var statearr_21025 = state_21006;
(statearr_21025[(9)] = inst_20993__$1);

return statearr_21025;
})();
if(inst_20994){
var statearr_21026_23632 = state_21006__$1;
(statearr_21026_23632[(1)] = (8));

} else {
var statearr_21027_23633 = state_21006__$1;
(statearr_21027_23633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (3))){
var inst_21004 = (state_21006[(2)]);
var state_21006__$1 = state_21006;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21006__$1,inst_21004);
} else {
if((state_val_21007 === (2))){
var state_21006__$1 = state_21006;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21006__$1,(4),ch);
} else {
if((state_val_21007 === (9))){
var inst_20993 = (state_21006[(9)]);
var inst_20986 = inst_20993;
var state_21006__$1 = (function (){var statearr_21028 = state_21006;
(statearr_21028[(7)] = inst_20986);

return statearr_21028;
})();
var statearr_21030_23642 = state_21006__$1;
(statearr_21030_23642[(2)] = null);

(statearr_21030_23642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (5))){
var inst_20986 = (state_21006[(7)]);
var state_21006__$1 = state_21006;
var statearr_21034_23643 = state_21006__$1;
(statearr_21034_23643[(2)] = inst_20986);

(statearr_21034_23643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (10))){
var inst_21000 = (state_21006[(2)]);
var state_21006__$1 = state_21006;
var statearr_21035_23644 = state_21006__$1;
(statearr_21035_23644[(2)] = inst_21000);

(statearr_21035_23644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (8))){
var inst_20993 = (state_21006[(9)]);
var inst_20996 = cljs.core.deref(inst_20993);
var state_21006__$1 = state_21006;
var statearr_21036_23648 = state_21006__$1;
(statearr_21036_23648[(2)] = inst_20996);

(statearr_21036_23648[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__19895__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19895__auto____0 = (function (){
var statearr_21038 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21038[(0)] = cljs$core$async$reduce_$_state_machine__19895__auto__);

(statearr_21038[(1)] = (1));

return statearr_21038;
});
var cljs$core$async$reduce_$_state_machine__19895__auto____1 = (function (state_21006){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_21006);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e21039){var ex__19898__auto__ = e21039;
var statearr_21040_23651 = state_21006;
(statearr_21040_23651[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_21006[(4)]))){
var statearr_21041_23652 = state_21006;
(statearr_21041_23652[(1)] = cljs.core.first((state_21006[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23654 = state_21006;
state_21006 = G__23654;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19895__auto__ = function(state_21006){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19895__auto____1.call(this,state_21006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19895__auto____0;
cljs$core$async$reduce_$_state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19895__auto____1;
return cljs$core$async$reduce_$_state_machine__19895__auto__;
})()
})();
var state__20077__auto__ = (function (){var statearr_21046 = f__20076__auto__();
(statearr_21046[(6)] = c__20075__auto__);

return statearr_21046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
}));

return c__20075__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__20075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = (function (state_21053){
var state_val_21054 = (state_21053[(1)]);
if((state_val_21054 === (1))){
var inst_21047 = cljs.core.async.reduce(f__$1,init,ch);
var state_21053__$1 = state_21053;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21053__$1,(2),inst_21047);
} else {
if((state_val_21054 === (2))){
var inst_21049 = (state_21053[(2)]);
var inst_21051 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_21049) : f__$1.call(null,inst_21049));
var state_21053__$1 = state_21053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21053__$1,inst_21051);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__19895__auto__ = null;
var cljs$core$async$transduce_$_state_machine__19895__auto____0 = (function (){
var statearr_21056 = [null,null,null,null,null,null,null];
(statearr_21056[(0)] = cljs$core$async$transduce_$_state_machine__19895__auto__);

(statearr_21056[(1)] = (1));

return statearr_21056;
});
var cljs$core$async$transduce_$_state_machine__19895__auto____1 = (function (state_21053){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_21053);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e21057){var ex__19898__auto__ = e21057;
var statearr_21058_23659 = state_21053;
(statearr_21058_23659[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_21053[(4)]))){
var statearr_21059_23660 = state_21053;
(statearr_21059_23660[(1)] = cljs.core.first((state_21053[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23661 = state_21053;
state_21053 = G__23661;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__19895__auto__ = function(state_21053){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__19895__auto____1.call(this,state_21053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__19895__auto____0;
cljs$core$async$transduce_$_state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__19895__auto____1;
return cljs$core$async$transduce_$_state_machine__19895__auto__;
})()
})();
var state__20077__auto__ = (function (){var statearr_21060 = f__20076__auto__();
(statearr_21060[(6)] = c__20075__auto__);

return statearr_21060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
}));

return c__20075__auto__;
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
var G__21063 = arguments.length;
switch (G__21063) {
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
var c__20075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = (function (state_21093){
var state_val_21094 = (state_21093[(1)]);
if((state_val_21094 === (7))){
var inst_21075 = (state_21093[(2)]);
var state_21093__$1 = state_21093;
var statearr_21096_23667 = state_21093__$1;
(statearr_21096_23667[(2)] = inst_21075);

(statearr_21096_23667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21094 === (1))){
var inst_21066 = cljs.core.seq(coll);
var inst_21070 = inst_21066;
var state_21093__$1 = (function (){var statearr_21097 = state_21093;
(statearr_21097[(7)] = inst_21070);

return statearr_21097;
})();
var statearr_21098_23676 = state_21093__$1;
(statearr_21098_23676[(2)] = null);

(statearr_21098_23676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21094 === (4))){
var inst_21070 = (state_21093[(7)]);
var inst_21073 = cljs.core.first(inst_21070);
var state_21093__$1 = state_21093;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21093__$1,(7),ch,inst_21073);
} else {
if((state_val_21094 === (13))){
var inst_21087 = (state_21093[(2)]);
var state_21093__$1 = state_21093;
var statearr_21099_23680 = state_21093__$1;
(statearr_21099_23680[(2)] = inst_21087);

(statearr_21099_23680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21094 === (6))){
var inst_21078 = (state_21093[(2)]);
var state_21093__$1 = state_21093;
if(cljs.core.truth_(inst_21078)){
var statearr_21100_23681 = state_21093__$1;
(statearr_21100_23681[(1)] = (8));

} else {
var statearr_21101_23682 = state_21093__$1;
(statearr_21101_23682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21094 === (3))){
var inst_21091 = (state_21093[(2)]);
var state_21093__$1 = state_21093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21093__$1,inst_21091);
} else {
if((state_val_21094 === (12))){
var state_21093__$1 = state_21093;
var statearr_21108_23683 = state_21093__$1;
(statearr_21108_23683[(2)] = null);

(statearr_21108_23683[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21094 === (2))){
var inst_21070 = (state_21093[(7)]);
var state_21093__$1 = state_21093;
if(cljs.core.truth_(inst_21070)){
var statearr_21112_23688 = state_21093__$1;
(statearr_21112_23688[(1)] = (4));

} else {
var statearr_21115_23689 = state_21093__$1;
(statearr_21115_23689[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21094 === (11))){
var inst_21084 = cljs.core.async.close_BANG_(ch);
var state_21093__$1 = state_21093;
var statearr_21116_23690 = state_21093__$1;
(statearr_21116_23690[(2)] = inst_21084);

(statearr_21116_23690[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21094 === (9))){
var state_21093__$1 = state_21093;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21117_23691 = state_21093__$1;
(statearr_21117_23691[(1)] = (11));

} else {
var statearr_21122_23692 = state_21093__$1;
(statearr_21122_23692[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21094 === (5))){
var inst_21070 = (state_21093[(7)]);
var state_21093__$1 = state_21093;
var statearr_21130_23693 = state_21093__$1;
(statearr_21130_23693[(2)] = inst_21070);

(statearr_21130_23693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21094 === (10))){
var inst_21089 = (state_21093[(2)]);
var state_21093__$1 = state_21093;
var statearr_21141_23694 = state_21093__$1;
(statearr_21141_23694[(2)] = inst_21089);

(statearr_21141_23694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21094 === (8))){
var inst_21070 = (state_21093[(7)]);
var inst_21080 = cljs.core.next(inst_21070);
var inst_21070__$1 = inst_21080;
var state_21093__$1 = (function (){var statearr_21150 = state_21093;
(statearr_21150[(7)] = inst_21070__$1);

return statearr_21150;
})();
var statearr_21151_23695 = state_21093__$1;
(statearr_21151_23695[(2)] = null);

(statearr_21151_23695[(1)] = (2));


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
var cljs$core$async$state_machine__19895__auto__ = null;
var cljs$core$async$state_machine__19895__auto____0 = (function (){
var statearr_21152 = [null,null,null,null,null,null,null,null];
(statearr_21152[(0)] = cljs$core$async$state_machine__19895__auto__);

(statearr_21152[(1)] = (1));

return statearr_21152;
});
var cljs$core$async$state_machine__19895__auto____1 = (function (state_21093){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_21093);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e21159){var ex__19898__auto__ = e21159;
var statearr_21160_23697 = state_21093;
(statearr_21160_23697[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_21093[(4)]))){
var statearr_21162_23698 = state_21093;
(statearr_21162_23698[(1)] = cljs.core.first((state_21093[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23699 = state_21093;
state_21093 = G__23699;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$state_machine__19895__auto__ = function(state_21093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19895__auto____1.call(this,state_21093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19895__auto____0;
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19895__auto____1;
return cljs$core$async$state_machine__19895__auto__;
})()
})();
var state__20077__auto__ = (function (){var statearr_21169 = f__20076__auto__();
(statearr_21169[(6)] = c__20075__auto__);

return statearr_21169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
}));

return c__20075__auto__;
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
var G__21174 = arguments.length;
switch (G__21174) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_23704 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_23704(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_23706 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_23706(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_23708 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_23708(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_23711 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_23711(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21290 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21290 = (function (ch,cs,meta21291){
this.ch = ch;
this.cs = cs;
this.meta21291 = meta21291;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21292,meta21291__$1){
var self__ = this;
var _21292__$1 = this;
return (new cljs.core.async.t_cljs$core$async21290(self__.ch,self__.cs,meta21291__$1));
}));

(cljs.core.async.t_cljs$core$async21290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21292){
var self__ = this;
var _21292__$1 = this;
return self__.meta21291;
}));

(cljs.core.async.t_cljs$core$async21290.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21290.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async21290.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21290.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async21290.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async21290.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async21290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21291","meta21291",1747529615,null)], null);
}));

(cljs.core.async.t_cljs$core$async21290.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21290.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21290");

(cljs.core.async.t_cljs$core$async21290.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21290");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21290.
 */
cljs.core.async.__GT_t_cljs$core$async21290 = (function cljs$core$async$mult_$___GT_t_cljs$core$async21290(ch__$1,cs__$1,meta21291){
return (new cljs.core.async.t_cljs$core$async21290(ch__$1,cs__$1,meta21291));
});

}

return (new cljs.core.async.t_cljs$core$async21290(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20075__auto___23717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = (function (state_21453){
var state_val_21454 = (state_21453[(1)]);
if((state_val_21454 === (7))){
var inst_21449 = (state_21453[(2)]);
var state_21453__$1 = state_21453;
var statearr_21457_23720 = state_21453__$1;
(statearr_21457_23720[(2)] = inst_21449);

(statearr_21457_23720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (20))){
var inst_21345 = (state_21453[(7)]);
var inst_21357 = cljs.core.first(inst_21345);
var inst_21358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21357,(0),null);
var inst_21359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21357,(1),null);
var state_21453__$1 = (function (){var statearr_21461 = state_21453;
(statearr_21461[(8)] = inst_21358);

return statearr_21461;
})();
if(cljs.core.truth_(inst_21359)){
var statearr_21462_23723 = state_21453__$1;
(statearr_21462_23723[(1)] = (22));

} else {
var statearr_21463_23724 = state_21453__$1;
(statearr_21463_23724[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (27))){
var inst_21302 = (state_21453[(9)]);
var inst_21389 = (state_21453[(10)]);
var inst_21391 = (state_21453[(11)]);
var inst_21396 = (state_21453[(12)]);
var inst_21396__$1 = cljs.core._nth(inst_21389,inst_21391);
var inst_21397 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21396__$1,inst_21302,done);
var state_21453__$1 = (function (){var statearr_21470 = state_21453;
(statearr_21470[(12)] = inst_21396__$1);

return statearr_21470;
})();
if(cljs.core.truth_(inst_21397)){
var statearr_21471_23731 = state_21453__$1;
(statearr_21471_23731[(1)] = (30));

} else {
var statearr_21472_23732 = state_21453__$1;
(statearr_21472_23732[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (1))){
var state_21453__$1 = state_21453;
var statearr_21473_23735 = state_21453__$1;
(statearr_21473_23735[(2)] = null);

(statearr_21473_23735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (24))){
var inst_21345 = (state_21453[(7)]);
var inst_21366 = (state_21453[(2)]);
var inst_21367 = cljs.core.next(inst_21345);
var inst_21311 = inst_21367;
var inst_21312 = null;
var inst_21313 = (0);
var inst_21314 = (0);
var state_21453__$1 = (function (){var statearr_21479 = state_21453;
(statearr_21479[(13)] = inst_21366);

(statearr_21479[(14)] = inst_21313);

(statearr_21479[(15)] = inst_21314);

(statearr_21479[(16)] = inst_21312);

(statearr_21479[(17)] = inst_21311);

return statearr_21479;
})();
var statearr_21484_23740 = state_21453__$1;
(statearr_21484_23740[(2)] = null);

(statearr_21484_23740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (39))){
var state_21453__$1 = state_21453;
var statearr_21490_23741 = state_21453__$1;
(statearr_21490_23741[(2)] = null);

(statearr_21490_23741[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (4))){
var inst_21302 = (state_21453[(9)]);
var inst_21302__$1 = (state_21453[(2)]);
var inst_21303 = (inst_21302__$1 == null);
var state_21453__$1 = (function (){var statearr_21494 = state_21453;
(statearr_21494[(9)] = inst_21302__$1);

return statearr_21494;
})();
if(cljs.core.truth_(inst_21303)){
var statearr_21496_23747 = state_21453__$1;
(statearr_21496_23747[(1)] = (5));

} else {
var statearr_21499_23748 = state_21453__$1;
(statearr_21499_23748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (15))){
var inst_21313 = (state_21453[(14)]);
var inst_21314 = (state_21453[(15)]);
var inst_21312 = (state_21453[(16)]);
var inst_21311 = (state_21453[(17)]);
var inst_21337 = (state_21453[(2)]);
var inst_21338 = (inst_21314 + (1));
var tmp21487 = inst_21313;
var tmp21488 = inst_21312;
var tmp21489 = inst_21311;
var inst_21311__$1 = tmp21489;
var inst_21312__$1 = tmp21488;
var inst_21313__$1 = tmp21487;
var inst_21314__$1 = inst_21338;
var state_21453__$1 = (function (){var statearr_21502 = state_21453;
(statearr_21502[(14)] = inst_21313__$1);

(statearr_21502[(15)] = inst_21314__$1);

(statearr_21502[(18)] = inst_21337);

(statearr_21502[(16)] = inst_21312__$1);

(statearr_21502[(17)] = inst_21311__$1);

return statearr_21502;
})();
var statearr_21507_23759 = state_21453__$1;
(statearr_21507_23759[(2)] = null);

(statearr_21507_23759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (21))){
var inst_21370 = (state_21453[(2)]);
var state_21453__$1 = state_21453;
var statearr_21517_23760 = state_21453__$1;
(statearr_21517_23760[(2)] = inst_21370);

(statearr_21517_23760[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (31))){
var inst_21396 = (state_21453[(12)]);
var inst_21400 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21396);
var state_21453__$1 = state_21453;
var statearr_21523_23764 = state_21453__$1;
(statearr_21523_23764[(2)] = inst_21400);

(statearr_21523_23764[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (32))){
var inst_21390 = (state_21453[(19)]);
var inst_21389 = (state_21453[(10)]);
var inst_21388 = (state_21453[(20)]);
var inst_21391 = (state_21453[(11)]);
var inst_21402 = (state_21453[(2)]);
var inst_21404 = (inst_21391 + (1));
var tmp21511 = inst_21390;
var tmp21512 = inst_21389;
var tmp21513 = inst_21388;
var inst_21388__$1 = tmp21513;
var inst_21389__$1 = tmp21512;
var inst_21390__$1 = tmp21511;
var inst_21391__$1 = inst_21404;
var state_21453__$1 = (function (){var statearr_21524 = state_21453;
(statearr_21524[(19)] = inst_21390__$1);

(statearr_21524[(21)] = inst_21402);

(statearr_21524[(10)] = inst_21389__$1);

(statearr_21524[(20)] = inst_21388__$1);

(statearr_21524[(11)] = inst_21391__$1);

return statearr_21524;
})();
var statearr_21525_23767 = state_21453__$1;
(statearr_21525_23767[(2)] = null);

(statearr_21525_23767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (40))){
var inst_21418 = (state_21453[(22)]);
var inst_21422 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21418);
var state_21453__$1 = state_21453;
var statearr_21528_23770 = state_21453__$1;
(statearr_21528_23770[(2)] = inst_21422);

(statearr_21528_23770[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (33))){
var inst_21408 = (state_21453[(23)]);
var inst_21410 = cljs.core.chunked_seq_QMARK_(inst_21408);
var state_21453__$1 = state_21453;
if(inst_21410){
var statearr_21533_23772 = state_21453__$1;
(statearr_21533_23772[(1)] = (36));

} else {
var statearr_21534_23773 = state_21453__$1;
(statearr_21534_23773[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (13))){
var inst_21327 = (state_21453[(24)]);
var inst_21330 = cljs.core.async.close_BANG_(inst_21327);
var state_21453__$1 = state_21453;
var statearr_21536_23774 = state_21453__$1;
(statearr_21536_23774[(2)] = inst_21330);

(statearr_21536_23774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (22))){
var inst_21358 = (state_21453[(8)]);
var inst_21363 = cljs.core.async.close_BANG_(inst_21358);
var state_21453__$1 = state_21453;
var statearr_21538_23779 = state_21453__$1;
(statearr_21538_23779[(2)] = inst_21363);

(statearr_21538_23779[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (36))){
var inst_21408 = (state_21453[(23)]);
var inst_21413 = cljs.core.chunk_first(inst_21408);
var inst_21414 = cljs.core.chunk_rest(inst_21408);
var inst_21415 = cljs.core.count(inst_21413);
var inst_21388 = inst_21414;
var inst_21389 = inst_21413;
var inst_21390 = inst_21415;
var inst_21391 = (0);
var state_21453__$1 = (function (){var statearr_21540 = state_21453;
(statearr_21540[(19)] = inst_21390);

(statearr_21540[(10)] = inst_21389);

(statearr_21540[(20)] = inst_21388);

(statearr_21540[(11)] = inst_21391);

return statearr_21540;
})();
var statearr_21541_23781 = state_21453__$1;
(statearr_21541_23781[(2)] = null);

(statearr_21541_23781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (41))){
var inst_21408 = (state_21453[(23)]);
var inst_21424 = (state_21453[(2)]);
var inst_21425 = cljs.core.next(inst_21408);
var inst_21388 = inst_21425;
var inst_21389 = null;
var inst_21390 = (0);
var inst_21391 = (0);
var state_21453__$1 = (function (){var statearr_21544 = state_21453;
(statearr_21544[(19)] = inst_21390);

(statearr_21544[(10)] = inst_21389);

(statearr_21544[(20)] = inst_21388);

(statearr_21544[(25)] = inst_21424);

(statearr_21544[(11)] = inst_21391);

return statearr_21544;
})();
var statearr_21545_23785 = state_21453__$1;
(statearr_21545_23785[(2)] = null);

(statearr_21545_23785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (43))){
var state_21453__$1 = state_21453;
var statearr_21546_23786 = state_21453__$1;
(statearr_21546_23786[(2)] = null);

(statearr_21546_23786[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (29))){
var inst_21433 = (state_21453[(2)]);
var state_21453__$1 = state_21453;
var statearr_21551_23787 = state_21453__$1;
(statearr_21551_23787[(2)] = inst_21433);

(statearr_21551_23787[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (44))){
var inst_21444 = (state_21453[(2)]);
var state_21453__$1 = (function (){var statearr_21552 = state_21453;
(statearr_21552[(26)] = inst_21444);

return statearr_21552;
})();
var statearr_21554_23788 = state_21453__$1;
(statearr_21554_23788[(2)] = null);

(statearr_21554_23788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (6))){
var inst_21380 = (state_21453[(27)]);
var inst_21379 = cljs.core.deref(cs);
var inst_21380__$1 = cljs.core.keys(inst_21379);
var inst_21381 = cljs.core.count(inst_21380__$1);
var inst_21382 = cljs.core.reset_BANG_(dctr,inst_21381);
var inst_21387 = cljs.core.seq(inst_21380__$1);
var inst_21388 = inst_21387;
var inst_21389 = null;
var inst_21390 = (0);
var inst_21391 = (0);
var state_21453__$1 = (function (){var statearr_21556 = state_21453;
(statearr_21556[(19)] = inst_21390);

(statearr_21556[(28)] = inst_21382);

(statearr_21556[(27)] = inst_21380__$1);

(statearr_21556[(10)] = inst_21389);

(statearr_21556[(20)] = inst_21388);

(statearr_21556[(11)] = inst_21391);

return statearr_21556;
})();
var statearr_21557_23790 = state_21453__$1;
(statearr_21557_23790[(2)] = null);

(statearr_21557_23790[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (28))){
var inst_21388 = (state_21453[(20)]);
var inst_21408 = (state_21453[(23)]);
var inst_21408__$1 = cljs.core.seq(inst_21388);
var state_21453__$1 = (function (){var statearr_21564 = state_21453;
(statearr_21564[(23)] = inst_21408__$1);

return statearr_21564;
})();
if(inst_21408__$1){
var statearr_21566_23794 = state_21453__$1;
(statearr_21566_23794[(1)] = (33));

} else {
var statearr_21567_23796 = state_21453__$1;
(statearr_21567_23796[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (25))){
var inst_21390 = (state_21453[(19)]);
var inst_21391 = (state_21453[(11)]);
var inst_21393 = (inst_21391 < inst_21390);
var inst_21394 = inst_21393;
var state_21453__$1 = state_21453;
if(cljs.core.truth_(inst_21394)){
var statearr_21568_23797 = state_21453__$1;
(statearr_21568_23797[(1)] = (27));

} else {
var statearr_21569_23798 = state_21453__$1;
(statearr_21569_23798[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (34))){
var state_21453__$1 = state_21453;
var statearr_21570_23801 = state_21453__$1;
(statearr_21570_23801[(2)] = null);

(statearr_21570_23801[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (17))){
var state_21453__$1 = state_21453;
var statearr_21575_23806 = state_21453__$1;
(statearr_21575_23806[(2)] = null);

(statearr_21575_23806[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (3))){
var inst_21451 = (state_21453[(2)]);
var state_21453__$1 = state_21453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21453__$1,inst_21451);
} else {
if((state_val_21454 === (12))){
var inst_21375 = (state_21453[(2)]);
var state_21453__$1 = state_21453;
var statearr_21576_23811 = state_21453__$1;
(statearr_21576_23811[(2)] = inst_21375);

(statearr_21576_23811[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (2))){
var state_21453__$1 = state_21453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21453__$1,(4),ch);
} else {
if((state_val_21454 === (23))){
var state_21453__$1 = state_21453;
var statearr_21577_23814 = state_21453__$1;
(statearr_21577_23814[(2)] = null);

(statearr_21577_23814[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (35))){
var inst_21431 = (state_21453[(2)]);
var state_21453__$1 = state_21453;
var statearr_21578_23816 = state_21453__$1;
(statearr_21578_23816[(2)] = inst_21431);

(statearr_21578_23816[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (19))){
var inst_21345 = (state_21453[(7)]);
var inst_21349 = cljs.core.chunk_first(inst_21345);
var inst_21350 = cljs.core.chunk_rest(inst_21345);
var inst_21351 = cljs.core.count(inst_21349);
var inst_21311 = inst_21350;
var inst_21312 = inst_21349;
var inst_21313 = inst_21351;
var inst_21314 = (0);
var state_21453__$1 = (function (){var statearr_21579 = state_21453;
(statearr_21579[(14)] = inst_21313);

(statearr_21579[(15)] = inst_21314);

(statearr_21579[(16)] = inst_21312);

(statearr_21579[(17)] = inst_21311);

return statearr_21579;
})();
var statearr_21580_23834 = state_21453__$1;
(statearr_21580_23834[(2)] = null);

(statearr_21580_23834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (11))){
var inst_21345 = (state_21453[(7)]);
var inst_21311 = (state_21453[(17)]);
var inst_21345__$1 = cljs.core.seq(inst_21311);
var state_21453__$1 = (function (){var statearr_21581 = state_21453;
(statearr_21581[(7)] = inst_21345__$1);

return statearr_21581;
})();
if(inst_21345__$1){
var statearr_21582_23839 = state_21453__$1;
(statearr_21582_23839[(1)] = (16));

} else {
var statearr_21583_23840 = state_21453__$1;
(statearr_21583_23840[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (9))){
var inst_21377 = (state_21453[(2)]);
var state_21453__$1 = state_21453;
var statearr_21588_23848 = state_21453__$1;
(statearr_21588_23848[(2)] = inst_21377);

(statearr_21588_23848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (5))){
var inst_21309 = cljs.core.deref(cs);
var inst_21310 = cljs.core.seq(inst_21309);
var inst_21311 = inst_21310;
var inst_21312 = null;
var inst_21313 = (0);
var inst_21314 = (0);
var state_21453__$1 = (function (){var statearr_21591 = state_21453;
(statearr_21591[(14)] = inst_21313);

(statearr_21591[(15)] = inst_21314);

(statearr_21591[(16)] = inst_21312);

(statearr_21591[(17)] = inst_21311);

return statearr_21591;
})();
var statearr_21592_23851 = state_21453__$1;
(statearr_21592_23851[(2)] = null);

(statearr_21592_23851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (14))){
var state_21453__$1 = state_21453;
var statearr_21597_23853 = state_21453__$1;
(statearr_21597_23853[(2)] = null);

(statearr_21597_23853[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (45))){
var inst_21441 = (state_21453[(2)]);
var state_21453__$1 = state_21453;
var statearr_21599_23854 = state_21453__$1;
(statearr_21599_23854[(2)] = inst_21441);

(statearr_21599_23854[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (26))){
var inst_21380 = (state_21453[(27)]);
var inst_21437 = (state_21453[(2)]);
var inst_21438 = cljs.core.seq(inst_21380);
var state_21453__$1 = (function (){var statearr_21600 = state_21453;
(statearr_21600[(29)] = inst_21437);

return statearr_21600;
})();
if(inst_21438){
var statearr_21601_23855 = state_21453__$1;
(statearr_21601_23855[(1)] = (42));

} else {
var statearr_21602_23856 = state_21453__$1;
(statearr_21602_23856[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (16))){
var inst_21345 = (state_21453[(7)]);
var inst_21347 = cljs.core.chunked_seq_QMARK_(inst_21345);
var state_21453__$1 = state_21453;
if(inst_21347){
var statearr_21605_23857 = state_21453__$1;
(statearr_21605_23857[(1)] = (19));

} else {
var statearr_21608_23858 = state_21453__$1;
(statearr_21608_23858[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (38))){
var inst_21428 = (state_21453[(2)]);
var state_21453__$1 = state_21453;
var statearr_21611_23859 = state_21453__$1;
(statearr_21611_23859[(2)] = inst_21428);

(statearr_21611_23859[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (30))){
var state_21453__$1 = state_21453;
var statearr_21612_23860 = state_21453__$1;
(statearr_21612_23860[(2)] = null);

(statearr_21612_23860[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (10))){
var inst_21314 = (state_21453[(15)]);
var inst_21312 = (state_21453[(16)]);
var inst_21322 = cljs.core._nth(inst_21312,inst_21314);
var inst_21327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21322,(0),null);
var inst_21328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21322,(1),null);
var state_21453__$1 = (function (){var statearr_21614 = state_21453;
(statearr_21614[(24)] = inst_21327);

return statearr_21614;
})();
if(cljs.core.truth_(inst_21328)){
var statearr_21615_23861 = state_21453__$1;
(statearr_21615_23861[(1)] = (13));

} else {
var statearr_21616_23862 = state_21453__$1;
(statearr_21616_23862[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (18))){
var inst_21373 = (state_21453[(2)]);
var state_21453__$1 = state_21453;
var statearr_21617_23863 = state_21453__$1;
(statearr_21617_23863[(2)] = inst_21373);

(statearr_21617_23863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (42))){
var state_21453__$1 = state_21453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21453__$1,(45),dchan);
} else {
if((state_val_21454 === (37))){
var inst_21418 = (state_21453[(22)]);
var inst_21302 = (state_21453[(9)]);
var inst_21408 = (state_21453[(23)]);
var inst_21418__$1 = cljs.core.first(inst_21408);
var inst_21419 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21418__$1,inst_21302,done);
var state_21453__$1 = (function (){var statearr_21618 = state_21453;
(statearr_21618[(22)] = inst_21418__$1);

return statearr_21618;
})();
if(cljs.core.truth_(inst_21419)){
var statearr_21619_23868 = state_21453__$1;
(statearr_21619_23868[(1)] = (39));

} else {
var statearr_21620_23869 = state_21453__$1;
(statearr_21620_23869[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (8))){
var inst_21313 = (state_21453[(14)]);
var inst_21314 = (state_21453[(15)]);
var inst_21316 = (inst_21314 < inst_21313);
var inst_21317 = inst_21316;
var state_21453__$1 = state_21453;
if(cljs.core.truth_(inst_21317)){
var statearr_21622_23872 = state_21453__$1;
(statearr_21622_23872[(1)] = (10));

} else {
var statearr_21623_23874 = state_21453__$1;
(statearr_21623_23874[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__19895__auto__ = null;
var cljs$core$async$mult_$_state_machine__19895__auto____0 = (function (){
var statearr_21624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21624[(0)] = cljs$core$async$mult_$_state_machine__19895__auto__);

(statearr_21624[(1)] = (1));

return statearr_21624;
});
var cljs$core$async$mult_$_state_machine__19895__auto____1 = (function (state_21453){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_21453);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e21625){var ex__19898__auto__ = e21625;
var statearr_21626_23878 = state_21453;
(statearr_21626_23878[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_21453[(4)]))){
var statearr_21627_23879 = state_21453;
(statearr_21627_23879[(1)] = cljs.core.first((state_21453[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23880 = state_21453;
state_21453 = G__23880;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19895__auto__ = function(state_21453){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19895__auto____1.call(this,state_21453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19895__auto____0;
cljs$core$async$mult_$_state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19895__auto____1;
return cljs$core$async$mult_$_state_machine__19895__auto__;
})()
})();
var state__20077__auto__ = (function (){var statearr_21628 = f__20076__auto__();
(statearr_21628[(6)] = c__20075__auto___23717);

return statearr_21628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
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
var G__21642 = arguments.length;
switch (G__21642) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_23893 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_23893(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_23898 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_23898(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_23902 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_23902(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_23906 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_23906(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_23915 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_23915(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23919 = arguments.length;
var i__5770__auto___23921 = (0);
while(true){
if((i__5770__auto___23921 < len__5769__auto___23919)){
args__5775__auto__.push((arguments[i__5770__auto___23921]));

var G__23922 = (i__5770__auto___23921 + (1));
i__5770__auto___23921 = G__23922;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21682){
var map__21683 = p__21682;
var map__21683__$1 = cljs.core.__destructure_map(map__21683);
var opts = map__21683__$1;
var statearr_21684_23933 = state;
(statearr_21684_23933[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_21685_23935 = state;
(statearr_21685_23935[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_21686_23937 = state;
(statearr_21686_23937[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21676){
var G__21677 = cljs.core.first(seq21676);
var seq21676__$1 = cljs.core.next(seq21676);
var G__21678 = cljs.core.first(seq21676__$1);
var seq21676__$2 = cljs.core.next(seq21676__$1);
var G__21679 = cljs.core.first(seq21676__$2);
var seq21676__$3 = cljs.core.next(seq21676__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21677,G__21678,G__21679,seq21676__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21694 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21694 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21695){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21695 = meta21695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21696,meta21695__$1){
var self__ = this;
var _21696__$1 = this;
return (new cljs.core.async.t_cljs$core$async21694(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21695__$1));
}));

(cljs.core.async.t_cljs$core$async21694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21696){
var self__ = this;
var _21696__$1 = this;
return self__.meta21695;
}));

(cljs.core.async.t_cljs$core$async21694.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21694.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async21694.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21694.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21694.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21694.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21694.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21694.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21695","meta21695",804762948,null)], null);
}));

(cljs.core.async.t_cljs$core$async21694.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21694");

(cljs.core.async.t_cljs$core$async21694.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21694");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21694.
 */
cljs.core.async.__GT_t_cljs$core$async21694 = (function cljs$core$async$mix_$___GT_t_cljs$core$async21694(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21695){
return (new cljs.core.async.t_cljs$core$async21694(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21695));
});

}

return (new cljs.core.async.t_cljs$core$async21694(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20075__auto___23980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = (function (state_21811){
var state_val_21812 = (state_21811[(1)]);
if((state_val_21812 === (7))){
var inst_21767 = (state_21811[(2)]);
var state_21811__$1 = state_21811;
if(cljs.core.truth_(inst_21767)){
var statearr_21816_23982 = state_21811__$1;
(statearr_21816_23982[(1)] = (8));

} else {
var statearr_21817_23984 = state_21811__$1;
(statearr_21817_23984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (20))){
var inst_21760 = (state_21811[(7)]);
var state_21811__$1 = state_21811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21811__$1,(23),out,inst_21760);
} else {
if((state_val_21812 === (1))){
var inst_21743 = calc_state();
var inst_21744 = cljs.core.__destructure_map(inst_21743);
var inst_21745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21744,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21744,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21744,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21748 = inst_21743;
var state_21811__$1 = (function (){var statearr_21818 = state_21811;
(statearr_21818[(8)] = inst_21746);

(statearr_21818[(9)] = inst_21747);

(statearr_21818[(10)] = inst_21745);

(statearr_21818[(11)] = inst_21748);

return statearr_21818;
})();
var statearr_21821_23991 = state_21811__$1;
(statearr_21821_23991[(2)] = null);

(statearr_21821_23991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (24))){
var inst_21751 = (state_21811[(12)]);
var inst_21748 = inst_21751;
var state_21811__$1 = (function (){var statearr_21824 = state_21811;
(statearr_21824[(11)] = inst_21748);

return statearr_21824;
})();
var statearr_21826_23994 = state_21811__$1;
(statearr_21826_23994[(2)] = null);

(statearr_21826_23994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (4))){
var inst_21760 = (state_21811[(7)]);
var inst_21762 = (state_21811[(13)]);
var inst_21759 = (state_21811[(2)]);
var inst_21760__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21759,(0),null);
var inst_21761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21759,(1),null);
var inst_21762__$1 = (inst_21760__$1 == null);
var state_21811__$1 = (function (){var statearr_21828 = state_21811;
(statearr_21828[(7)] = inst_21760__$1);

(statearr_21828[(14)] = inst_21761);

(statearr_21828[(13)] = inst_21762__$1);

return statearr_21828;
})();
if(cljs.core.truth_(inst_21762__$1)){
var statearr_21833_24000 = state_21811__$1;
(statearr_21833_24000[(1)] = (5));

} else {
var statearr_21836_24001 = state_21811__$1;
(statearr_21836_24001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (15))){
var inst_21752 = (state_21811[(15)]);
var inst_21781 = (state_21811[(16)]);
var inst_21781__$1 = cljs.core.empty_QMARK_(inst_21752);
var state_21811__$1 = (function (){var statearr_21837 = state_21811;
(statearr_21837[(16)] = inst_21781__$1);

return statearr_21837;
})();
if(inst_21781__$1){
var statearr_21843_24004 = state_21811__$1;
(statearr_21843_24004[(1)] = (17));

} else {
var statearr_21844_24005 = state_21811__$1;
(statearr_21844_24005[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (21))){
var inst_21751 = (state_21811[(12)]);
var inst_21748 = inst_21751;
var state_21811__$1 = (function (){var statearr_21845 = state_21811;
(statearr_21845[(11)] = inst_21748);

return statearr_21845;
})();
var statearr_21846_24010 = state_21811__$1;
(statearr_21846_24010[(2)] = null);

(statearr_21846_24010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (13))){
var inst_21774 = (state_21811[(2)]);
var inst_21775 = calc_state();
var inst_21748 = inst_21775;
var state_21811__$1 = (function (){var statearr_21847 = state_21811;
(statearr_21847[(17)] = inst_21774);

(statearr_21847[(11)] = inst_21748);

return statearr_21847;
})();
var statearr_21848_24011 = state_21811__$1;
(statearr_21848_24011[(2)] = null);

(statearr_21848_24011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (22))){
var inst_21801 = (state_21811[(2)]);
var state_21811__$1 = state_21811;
var statearr_21849_24014 = state_21811__$1;
(statearr_21849_24014[(2)] = inst_21801);

(statearr_21849_24014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (6))){
var inst_21761 = (state_21811[(14)]);
var inst_21765 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21761,change);
var state_21811__$1 = state_21811;
var statearr_21851_24017 = state_21811__$1;
(statearr_21851_24017[(2)] = inst_21765);

(statearr_21851_24017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (25))){
var state_21811__$1 = state_21811;
var statearr_21852_24022 = state_21811__$1;
(statearr_21852_24022[(2)] = null);

(statearr_21852_24022[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (17))){
var inst_21753 = (state_21811[(18)]);
var inst_21761 = (state_21811[(14)]);
var inst_21783 = (inst_21753.cljs$core$IFn$_invoke$arity$1 ? inst_21753.cljs$core$IFn$_invoke$arity$1(inst_21761) : inst_21753.call(null,inst_21761));
var inst_21784 = cljs.core.not(inst_21783);
var state_21811__$1 = state_21811;
var statearr_21857_24024 = state_21811__$1;
(statearr_21857_24024[(2)] = inst_21784);

(statearr_21857_24024[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (3))){
var inst_21805 = (state_21811[(2)]);
var state_21811__$1 = state_21811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21811__$1,inst_21805);
} else {
if((state_val_21812 === (12))){
var state_21811__$1 = state_21811;
var statearr_21860_24029 = state_21811__$1;
(statearr_21860_24029[(2)] = null);

(statearr_21860_24029[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (2))){
var inst_21751 = (state_21811[(12)]);
var inst_21748 = (state_21811[(11)]);
var inst_21751__$1 = cljs.core.__destructure_map(inst_21748);
var inst_21752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21751__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21751__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21751__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21811__$1 = (function (){var statearr_21868 = state_21811;
(statearr_21868[(15)] = inst_21752);

(statearr_21868[(12)] = inst_21751__$1);

(statearr_21868[(18)] = inst_21753);

return statearr_21868;
})();
return cljs.core.async.ioc_alts_BANG_(state_21811__$1,(4),inst_21754);
} else {
if((state_val_21812 === (23))){
var inst_21792 = (state_21811[(2)]);
var state_21811__$1 = state_21811;
if(cljs.core.truth_(inst_21792)){
var statearr_21869_24034 = state_21811__$1;
(statearr_21869_24034[(1)] = (24));

} else {
var statearr_21870_24035 = state_21811__$1;
(statearr_21870_24035[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (19))){
var inst_21787 = (state_21811[(2)]);
var state_21811__$1 = state_21811;
var statearr_21871_24038 = state_21811__$1;
(statearr_21871_24038[(2)] = inst_21787);

(statearr_21871_24038[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (11))){
var inst_21761 = (state_21811[(14)]);
var inst_21771 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_21761);
var state_21811__$1 = state_21811;
var statearr_21872_24039 = state_21811__$1;
(statearr_21872_24039[(2)] = inst_21771);

(statearr_21872_24039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (9))){
var inst_21752 = (state_21811[(15)]);
var inst_21761 = (state_21811[(14)]);
var inst_21778 = (state_21811[(19)]);
var inst_21778__$1 = (inst_21752.cljs$core$IFn$_invoke$arity$1 ? inst_21752.cljs$core$IFn$_invoke$arity$1(inst_21761) : inst_21752.call(null,inst_21761));
var state_21811__$1 = (function (){var statearr_21873 = state_21811;
(statearr_21873[(19)] = inst_21778__$1);

return statearr_21873;
})();
if(cljs.core.truth_(inst_21778__$1)){
var statearr_21875_24040 = state_21811__$1;
(statearr_21875_24040[(1)] = (14));

} else {
var statearr_21877_24041 = state_21811__$1;
(statearr_21877_24041[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (5))){
var inst_21762 = (state_21811[(13)]);
var state_21811__$1 = state_21811;
var statearr_21878_24042 = state_21811__$1;
(statearr_21878_24042[(2)] = inst_21762);

(statearr_21878_24042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (14))){
var inst_21778 = (state_21811[(19)]);
var state_21811__$1 = state_21811;
var statearr_21881_24044 = state_21811__$1;
(statearr_21881_24044[(2)] = inst_21778);

(statearr_21881_24044[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (26))){
var inst_21797 = (state_21811[(2)]);
var state_21811__$1 = state_21811;
var statearr_21882_24047 = state_21811__$1;
(statearr_21882_24047[(2)] = inst_21797);

(statearr_21882_24047[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (16))){
var inst_21789 = (state_21811[(2)]);
var state_21811__$1 = state_21811;
if(cljs.core.truth_(inst_21789)){
var statearr_21883_24048 = state_21811__$1;
(statearr_21883_24048[(1)] = (20));

} else {
var statearr_21884_24053 = state_21811__$1;
(statearr_21884_24053[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (10))){
var inst_21803 = (state_21811[(2)]);
var state_21811__$1 = state_21811;
var statearr_21886_24055 = state_21811__$1;
(statearr_21886_24055[(2)] = inst_21803);

(statearr_21886_24055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (18))){
var inst_21781 = (state_21811[(16)]);
var state_21811__$1 = state_21811;
var statearr_21892_24058 = state_21811__$1;
(statearr_21892_24058[(2)] = inst_21781);

(statearr_21892_24058[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21812 === (8))){
var inst_21760 = (state_21811[(7)]);
var inst_21769 = (inst_21760 == null);
var state_21811__$1 = state_21811;
if(cljs.core.truth_(inst_21769)){
var statearr_21895_24061 = state_21811__$1;
(statearr_21895_24061[(1)] = (11));

} else {
var statearr_21896_24066 = state_21811__$1;
(statearr_21896_24066[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__19895__auto__ = null;
var cljs$core$async$mix_$_state_machine__19895__auto____0 = (function (){
var statearr_21897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21897[(0)] = cljs$core$async$mix_$_state_machine__19895__auto__);

(statearr_21897[(1)] = (1));

return statearr_21897;
});
var cljs$core$async$mix_$_state_machine__19895__auto____1 = (function (state_21811){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_21811);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e21902){var ex__19898__auto__ = e21902;
var statearr_21903_24067 = state_21811;
(statearr_21903_24067[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_21811[(4)]))){
var statearr_21904_24068 = state_21811;
(statearr_21904_24068[(1)] = cljs.core.first((state_21811[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24069 = state_21811;
state_21811 = G__24069;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19895__auto__ = function(state_21811){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19895__auto____1.call(this,state_21811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19895__auto____0;
cljs$core$async$mix_$_state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19895__auto____1;
return cljs$core$async$mix_$_state_machine__19895__auto__;
})()
})();
var state__20077__auto__ = (function (){var statearr_21905 = f__20076__auto__();
(statearr_21905[(6)] = c__20075__auto___23980);

return statearr_21905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_24072 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_24072(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_24074 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_24074(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_24075 = (function() {
var G__24076 = null;
var G__24076__1 = (function (p){
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
var G__24076__2 = (function (p,v){
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
G__24076 = function(p,v){
switch(arguments.length){
case 1:
return G__24076__1.call(this,p);
case 2:
return G__24076__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24076.cljs$core$IFn$_invoke$arity$1 = G__24076__1;
G__24076.cljs$core$IFn$_invoke$arity$2 = G__24076__2;
return G__24076;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__21922 = arguments.length;
switch (G__21922) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_24075(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_24075(p,v);
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
var G__21929 = arguments.length;
switch (G__21929) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__21927_SHARP_){
if(cljs.core.truth_((p1__21927_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21927_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__21927_SHARP_.call(null,topic)))){
return p1__21927_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21927_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21936 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21936 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21937){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21937 = meta21937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21938,meta21937__$1){
var self__ = this;
var _21938__$1 = this;
return (new cljs.core.async.t_cljs$core$async21936(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21937__$1));
}));

(cljs.core.async.t_cljs$core$async21936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21938){
var self__ = this;
var _21938__$1 = this;
return self__.meta21937;
}));

(cljs.core.async.t_cljs$core$async21936.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21936.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async21936.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21936.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async21936.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async21936.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async21936.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async21936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21937","meta21937",-1432541695,null)], null);
}));

(cljs.core.async.t_cljs$core$async21936.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21936.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21936");

(cljs.core.async.t_cljs$core$async21936.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21936");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21936.
 */
cljs.core.async.__GT_t_cljs$core$async21936 = (function cljs$core$async$__GT_t_cljs$core$async21936(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21937){
return (new cljs.core.async.t_cljs$core$async21936(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21937));
});

}

return (new cljs.core.async.t_cljs$core$async21936(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20075__auto___24092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = (function (state_22043){
var state_val_22044 = (state_22043[(1)]);
if((state_val_22044 === (7))){
var inst_22039 = (state_22043[(2)]);
var state_22043__$1 = state_22043;
var statearr_22053_24093 = state_22043__$1;
(statearr_22053_24093[(2)] = inst_22039);

(statearr_22053_24093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (20))){
var state_22043__$1 = state_22043;
var statearr_22054_24094 = state_22043__$1;
(statearr_22054_24094[(2)] = null);

(statearr_22054_24094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (1))){
var state_22043__$1 = state_22043;
var statearr_22056_24095 = state_22043__$1;
(statearr_22056_24095[(2)] = null);

(statearr_22056_24095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (24))){
var inst_22022 = (state_22043[(7)]);
var inst_22031 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_22022);
var state_22043__$1 = state_22043;
var statearr_22059_24096 = state_22043__$1;
(statearr_22059_24096[(2)] = inst_22031);

(statearr_22059_24096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (4))){
var inst_21970 = (state_22043[(8)]);
var inst_21970__$1 = (state_22043[(2)]);
var inst_21971 = (inst_21970__$1 == null);
var state_22043__$1 = (function (){var statearr_22062 = state_22043;
(statearr_22062[(8)] = inst_21970__$1);

return statearr_22062;
})();
if(cljs.core.truth_(inst_21971)){
var statearr_22064_24097 = state_22043__$1;
(statearr_22064_24097[(1)] = (5));

} else {
var statearr_22067_24099 = state_22043__$1;
(statearr_22067_24099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (15))){
var inst_22016 = (state_22043[(2)]);
var state_22043__$1 = state_22043;
var statearr_22068_24100 = state_22043__$1;
(statearr_22068_24100[(2)] = inst_22016);

(statearr_22068_24100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (21))){
var inst_22036 = (state_22043[(2)]);
var state_22043__$1 = (function (){var statearr_22069 = state_22043;
(statearr_22069[(9)] = inst_22036);

return statearr_22069;
})();
var statearr_22070_24103 = state_22043__$1;
(statearr_22070_24103[(2)] = null);

(statearr_22070_24103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (13))){
var inst_21995 = (state_22043[(10)]);
var inst_21997 = cljs.core.chunked_seq_QMARK_(inst_21995);
var state_22043__$1 = state_22043;
if(inst_21997){
var statearr_22074_24105 = state_22043__$1;
(statearr_22074_24105[(1)] = (16));

} else {
var statearr_22075_24106 = state_22043__$1;
(statearr_22075_24106[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (22))){
var inst_22028 = (state_22043[(2)]);
var state_22043__$1 = state_22043;
if(cljs.core.truth_(inst_22028)){
var statearr_22077_24108 = state_22043__$1;
(statearr_22077_24108[(1)] = (23));

} else {
var statearr_22078_24109 = state_22043__$1;
(statearr_22078_24109[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (6))){
var inst_22024 = (state_22043[(11)]);
var inst_21970 = (state_22043[(8)]);
var inst_22022 = (state_22043[(7)]);
var inst_22022__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_21970) : topic_fn.call(null,inst_21970));
var inst_22023 = cljs.core.deref(mults);
var inst_22024__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22023,inst_22022__$1);
var state_22043__$1 = (function (){var statearr_22084 = state_22043;
(statearr_22084[(11)] = inst_22024__$1);

(statearr_22084[(7)] = inst_22022__$1);

return statearr_22084;
})();
if(cljs.core.truth_(inst_22024__$1)){
var statearr_22085_24113 = state_22043__$1;
(statearr_22085_24113[(1)] = (19));

} else {
var statearr_22087_24114 = state_22043__$1;
(statearr_22087_24114[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (25))){
var inst_22033 = (state_22043[(2)]);
var state_22043__$1 = state_22043;
var statearr_22090_24116 = state_22043__$1;
(statearr_22090_24116[(2)] = inst_22033);

(statearr_22090_24116[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (17))){
var inst_21995 = (state_22043[(10)]);
var inst_22007 = cljs.core.first(inst_21995);
var inst_22008 = cljs.core.async.muxch_STAR_(inst_22007);
var inst_22009 = cljs.core.async.close_BANG_(inst_22008);
var inst_22010 = cljs.core.next(inst_21995);
var inst_21980 = inst_22010;
var inst_21981 = null;
var inst_21982 = (0);
var inst_21983 = (0);
var state_22043__$1 = (function (){var statearr_22093 = state_22043;
(statearr_22093[(12)] = inst_21983);

(statearr_22093[(13)] = inst_21981);

(statearr_22093[(14)] = inst_21982);

(statearr_22093[(15)] = inst_21980);

(statearr_22093[(16)] = inst_22009);

return statearr_22093;
})();
var statearr_22094_24150 = state_22043__$1;
(statearr_22094_24150[(2)] = null);

(statearr_22094_24150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (3))){
var inst_22041 = (state_22043[(2)]);
var state_22043__$1 = state_22043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22043__$1,inst_22041);
} else {
if((state_val_22044 === (12))){
var inst_22018 = (state_22043[(2)]);
var state_22043__$1 = state_22043;
var statearr_22097_24151 = state_22043__$1;
(statearr_22097_24151[(2)] = inst_22018);

(statearr_22097_24151[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (2))){
var state_22043__$1 = state_22043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22043__$1,(4),ch);
} else {
if((state_val_22044 === (23))){
var state_22043__$1 = state_22043;
var statearr_22098_24152 = state_22043__$1;
(statearr_22098_24152[(2)] = null);

(statearr_22098_24152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (19))){
var inst_22024 = (state_22043[(11)]);
var inst_21970 = (state_22043[(8)]);
var inst_22026 = cljs.core.async.muxch_STAR_(inst_22024);
var state_22043__$1 = state_22043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22043__$1,(22),inst_22026,inst_21970);
} else {
if((state_val_22044 === (11))){
var inst_21980 = (state_22043[(15)]);
var inst_21995 = (state_22043[(10)]);
var inst_21995__$1 = cljs.core.seq(inst_21980);
var state_22043__$1 = (function (){var statearr_22099 = state_22043;
(statearr_22099[(10)] = inst_21995__$1);

return statearr_22099;
})();
if(inst_21995__$1){
var statearr_22100_24153 = state_22043__$1;
(statearr_22100_24153[(1)] = (13));

} else {
var statearr_22101_24154 = state_22043__$1;
(statearr_22101_24154[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (9))){
var inst_22020 = (state_22043[(2)]);
var state_22043__$1 = state_22043;
var statearr_22102_24155 = state_22043__$1;
(statearr_22102_24155[(2)] = inst_22020);

(statearr_22102_24155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (5))){
var inst_21977 = cljs.core.deref(mults);
var inst_21978 = cljs.core.vals(inst_21977);
var inst_21979 = cljs.core.seq(inst_21978);
var inst_21980 = inst_21979;
var inst_21981 = null;
var inst_21982 = (0);
var inst_21983 = (0);
var state_22043__$1 = (function (){var statearr_22103 = state_22043;
(statearr_22103[(12)] = inst_21983);

(statearr_22103[(13)] = inst_21981);

(statearr_22103[(14)] = inst_21982);

(statearr_22103[(15)] = inst_21980);

return statearr_22103;
})();
var statearr_22104_24156 = state_22043__$1;
(statearr_22104_24156[(2)] = null);

(statearr_22104_24156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (14))){
var state_22043__$1 = state_22043;
var statearr_22108_24157 = state_22043__$1;
(statearr_22108_24157[(2)] = null);

(statearr_22108_24157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (16))){
var inst_21995 = (state_22043[(10)]);
var inst_22001 = cljs.core.chunk_first(inst_21995);
var inst_22002 = cljs.core.chunk_rest(inst_21995);
var inst_22003 = cljs.core.count(inst_22001);
var inst_21980 = inst_22002;
var inst_21981 = inst_22001;
var inst_21982 = inst_22003;
var inst_21983 = (0);
var state_22043__$1 = (function (){var statearr_22110 = state_22043;
(statearr_22110[(12)] = inst_21983);

(statearr_22110[(13)] = inst_21981);

(statearr_22110[(14)] = inst_21982);

(statearr_22110[(15)] = inst_21980);

return statearr_22110;
})();
var statearr_22111_24158 = state_22043__$1;
(statearr_22111_24158[(2)] = null);

(statearr_22111_24158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (10))){
var inst_21983 = (state_22043[(12)]);
var inst_21981 = (state_22043[(13)]);
var inst_21982 = (state_22043[(14)]);
var inst_21980 = (state_22043[(15)]);
var inst_21989 = cljs.core._nth(inst_21981,inst_21983);
var inst_21990 = cljs.core.async.muxch_STAR_(inst_21989);
var inst_21991 = cljs.core.async.close_BANG_(inst_21990);
var inst_21992 = (inst_21983 + (1));
var tmp22105 = inst_21981;
var tmp22106 = inst_21982;
var tmp22107 = inst_21980;
var inst_21980__$1 = tmp22107;
var inst_21981__$1 = tmp22105;
var inst_21982__$1 = tmp22106;
var inst_21983__$1 = inst_21992;
var state_22043__$1 = (function (){var statearr_22112 = state_22043;
(statearr_22112[(12)] = inst_21983__$1);

(statearr_22112[(17)] = inst_21991);

(statearr_22112[(13)] = inst_21981__$1);

(statearr_22112[(14)] = inst_21982__$1);

(statearr_22112[(15)] = inst_21980__$1);

return statearr_22112;
})();
var statearr_22113_24159 = state_22043__$1;
(statearr_22113_24159[(2)] = null);

(statearr_22113_24159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (18))){
var inst_22013 = (state_22043[(2)]);
var state_22043__$1 = state_22043;
var statearr_22114_24160 = state_22043__$1;
(statearr_22114_24160[(2)] = inst_22013);

(statearr_22114_24160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22044 === (8))){
var inst_21983 = (state_22043[(12)]);
var inst_21982 = (state_22043[(14)]);
var inst_21985 = (inst_21983 < inst_21982);
var inst_21986 = inst_21985;
var state_22043__$1 = state_22043;
if(cljs.core.truth_(inst_21986)){
var statearr_22115_24161 = state_22043__$1;
(statearr_22115_24161[(1)] = (10));

} else {
var statearr_22116_24162 = state_22043__$1;
(statearr_22116_24162[(1)] = (11));

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
var cljs$core$async$state_machine__19895__auto__ = null;
var cljs$core$async$state_machine__19895__auto____0 = (function (){
var statearr_22117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22117[(0)] = cljs$core$async$state_machine__19895__auto__);

(statearr_22117[(1)] = (1));

return statearr_22117;
});
var cljs$core$async$state_machine__19895__auto____1 = (function (state_22043){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_22043);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e22124){var ex__19898__auto__ = e22124;
var statearr_22125_24163 = state_22043;
(statearr_22125_24163[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_22043[(4)]))){
var statearr_22126_24164 = state_22043;
(statearr_22126_24164[(1)] = cljs.core.first((state_22043[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24165 = state_22043;
state_22043 = G__24165;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$state_machine__19895__auto__ = function(state_22043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19895__auto____1.call(this,state_22043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19895__auto____0;
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19895__auto____1;
return cljs$core$async$state_machine__19895__auto__;
})()
})();
var state__20077__auto__ = (function (){var statearr_22129 = f__20076__auto__();
(statearr_22129[(6)] = c__20075__auto___24092);

return statearr_22129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
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
var G__22134 = arguments.length;
switch (G__22134) {
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
var G__22157 = arguments.length;
switch (G__22157) {
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
var G__22165 = arguments.length;
switch (G__22165) {
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
var c__20075__auto___24174 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = (function (state_22234){
var state_val_22235 = (state_22234[(1)]);
if((state_val_22235 === (7))){
var state_22234__$1 = state_22234;
var statearr_22237_24175 = state_22234__$1;
(statearr_22237_24175[(2)] = null);

(statearr_22237_24175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (1))){
var state_22234__$1 = state_22234;
var statearr_22242_24176 = state_22234__$1;
(statearr_22242_24176[(2)] = null);

(statearr_22242_24176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (4))){
var inst_22180 = (state_22234[(7)]);
var inst_22181 = (state_22234[(8)]);
var inst_22187 = (inst_22181 < inst_22180);
var state_22234__$1 = state_22234;
if(cljs.core.truth_(inst_22187)){
var statearr_22253_24177 = state_22234__$1;
(statearr_22253_24177[(1)] = (6));

} else {
var statearr_22254_24178 = state_22234__$1;
(statearr_22254_24178[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (15))){
var inst_22220 = (state_22234[(9)]);
var inst_22225 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22220);
var state_22234__$1 = state_22234;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22234__$1,(17),out,inst_22225);
} else {
if((state_val_22235 === (13))){
var inst_22220 = (state_22234[(9)]);
var inst_22220__$1 = (state_22234[(2)]);
var inst_22221 = cljs.core.some(cljs.core.nil_QMARK_,inst_22220__$1);
var state_22234__$1 = (function (){var statearr_22260 = state_22234;
(statearr_22260[(9)] = inst_22220__$1);

return statearr_22260;
})();
if(cljs.core.truth_(inst_22221)){
var statearr_22261_24179 = state_22234__$1;
(statearr_22261_24179[(1)] = (14));

} else {
var statearr_22262_24180 = state_22234__$1;
(statearr_22262_24180[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (6))){
var state_22234__$1 = state_22234;
var statearr_22265_24181 = state_22234__$1;
(statearr_22265_24181[(2)] = null);

(statearr_22265_24181[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (17))){
var inst_22227 = (state_22234[(2)]);
var state_22234__$1 = (function (){var statearr_22279 = state_22234;
(statearr_22279[(10)] = inst_22227);

return statearr_22279;
})();
var statearr_22280_24182 = state_22234__$1;
(statearr_22280_24182[(2)] = null);

(statearr_22280_24182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (3))){
var inst_22232 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22234__$1,inst_22232);
} else {
if((state_val_22235 === (12))){
var _ = (function (){var statearr_22282 = state_22234;
(statearr_22282[(4)] = cljs.core.rest((state_22234[(4)])));

return statearr_22282;
})();
var state_22234__$1 = state_22234;
var ex22274 = (state_22234__$1[(2)]);
var statearr_22283_24183 = state_22234__$1;
(statearr_22283_24183[(5)] = ex22274);


if((ex22274 instanceof Object)){
var statearr_22284_24184 = state_22234__$1;
(statearr_22284_24184[(1)] = (11));

(statearr_22284_24184[(5)] = null);

} else {
throw ex22274;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (2))){
var inst_22179 = cljs.core.reset_BANG_(dctr,cnt);
var inst_22180 = cnt;
var inst_22181 = (0);
var state_22234__$1 = (function (){var statearr_22286 = state_22234;
(statearr_22286[(7)] = inst_22180);

(statearr_22286[(8)] = inst_22181);

(statearr_22286[(11)] = inst_22179);

return statearr_22286;
})();
var statearr_22287_24185 = state_22234__$1;
(statearr_22287_24185[(2)] = null);

(statearr_22287_24185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (11))){
var inst_22197 = (state_22234[(2)]);
var inst_22198 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_22234__$1 = (function (){var statearr_22288 = state_22234;
(statearr_22288[(12)] = inst_22197);

return statearr_22288;
})();
var statearr_22289_24186 = state_22234__$1;
(statearr_22289_24186[(2)] = inst_22198);

(statearr_22289_24186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (9))){
var inst_22181 = (state_22234[(8)]);
var _ = (function (){var statearr_22292 = state_22234;
(statearr_22292[(4)] = cljs.core.cons((12),(state_22234[(4)])));

return statearr_22292;
})();
var inst_22206 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_22181) : chs__$1.call(null,inst_22181));
var inst_22207 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_22181) : done.call(null,inst_22181));
var inst_22208 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22206,inst_22207);
var ___$1 = (function (){var statearr_22295 = state_22234;
(statearr_22295[(4)] = cljs.core.rest((state_22234[(4)])));

return statearr_22295;
})();
var state_22234__$1 = state_22234;
var statearr_22297_24187 = state_22234__$1;
(statearr_22297_24187[(2)] = inst_22208);

(statearr_22297_24187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (5))){
var inst_22218 = (state_22234[(2)]);
var state_22234__$1 = (function (){var statearr_22301 = state_22234;
(statearr_22301[(13)] = inst_22218);

return statearr_22301;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22234__$1,(13),dchan);
} else {
if((state_val_22235 === (14))){
var inst_22223 = cljs.core.async.close_BANG_(out);
var state_22234__$1 = state_22234;
var statearr_22304_24188 = state_22234__$1;
(statearr_22304_24188[(2)] = inst_22223);

(statearr_22304_24188[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (16))){
var inst_22230 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
var statearr_22308_24189 = state_22234__$1;
(statearr_22308_24189[(2)] = inst_22230);

(statearr_22308_24189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (10))){
var inst_22181 = (state_22234[(8)]);
var inst_22211 = (state_22234[(2)]);
var inst_22212 = (inst_22181 + (1));
var inst_22181__$1 = inst_22212;
var state_22234__$1 = (function (){var statearr_22311 = state_22234;
(statearr_22311[(8)] = inst_22181__$1);

(statearr_22311[(14)] = inst_22211);

return statearr_22311;
})();
var statearr_22313_24190 = state_22234__$1;
(statearr_22313_24190[(2)] = null);

(statearr_22313_24190[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22235 === (8))){
var inst_22216 = (state_22234[(2)]);
var state_22234__$1 = state_22234;
var statearr_22314_24191 = state_22234__$1;
(statearr_22314_24191[(2)] = inst_22216);

(statearr_22314_24191[(1)] = (5));


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
var cljs$core$async$state_machine__19895__auto__ = null;
var cljs$core$async$state_machine__19895__auto____0 = (function (){
var statearr_22316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22316[(0)] = cljs$core$async$state_machine__19895__auto__);

(statearr_22316[(1)] = (1));

return statearr_22316;
});
var cljs$core$async$state_machine__19895__auto____1 = (function (state_22234){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_22234);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e22317){var ex__19898__auto__ = e22317;
var statearr_22318_24192 = state_22234;
(statearr_22318_24192[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_22234[(4)]))){
var statearr_22319_24195 = state_22234;
(statearr_22319_24195[(1)] = cljs.core.first((state_22234[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24197 = state_22234;
state_22234 = G__24197;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$state_machine__19895__auto__ = function(state_22234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19895__auto____1.call(this,state_22234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19895__auto____0;
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19895__auto____1;
return cljs$core$async$state_machine__19895__auto__;
})()
})();
var state__20077__auto__ = (function (){var statearr_22320 = f__20076__auto__();
(statearr_22320[(6)] = c__20075__auto___24174);

return statearr_22320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
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
var G__22325 = arguments.length;
switch (G__22325) {
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
var c__20075__auto___24199 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = (function (state_22369){
var state_val_22370 = (state_22369[(1)]);
if((state_val_22370 === (7))){
var inst_22344 = (state_22369[(7)]);
var inst_22345 = (state_22369[(8)]);
var inst_22344__$1 = (state_22369[(2)]);
var inst_22345__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22344__$1,(0),null);
var inst_22346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22344__$1,(1),null);
var inst_22347 = (inst_22345__$1 == null);
var state_22369__$1 = (function (){var statearr_22374 = state_22369;
(statearr_22374[(7)] = inst_22344__$1);

(statearr_22374[(8)] = inst_22345__$1);

(statearr_22374[(9)] = inst_22346);

return statearr_22374;
})();
if(cljs.core.truth_(inst_22347)){
var statearr_22375_24200 = state_22369__$1;
(statearr_22375_24200[(1)] = (8));

} else {
var statearr_22376_24201 = state_22369__$1;
(statearr_22376_24201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (1))){
var inst_22334 = cljs.core.vec(chs);
var inst_22335 = inst_22334;
var state_22369__$1 = (function (){var statearr_22377 = state_22369;
(statearr_22377[(10)] = inst_22335);

return statearr_22377;
})();
var statearr_22379_24204 = state_22369__$1;
(statearr_22379_24204[(2)] = null);

(statearr_22379_24204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (4))){
var inst_22335 = (state_22369[(10)]);
var state_22369__$1 = state_22369;
return cljs.core.async.ioc_alts_BANG_(state_22369__$1,(7),inst_22335);
} else {
if((state_val_22370 === (6))){
var inst_22364 = (state_22369[(2)]);
var state_22369__$1 = state_22369;
var statearr_22383_24238 = state_22369__$1;
(statearr_22383_24238[(2)] = inst_22364);

(statearr_22383_24238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (3))){
var inst_22366 = (state_22369[(2)]);
var state_22369__$1 = state_22369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22369__$1,inst_22366);
} else {
if((state_val_22370 === (2))){
var inst_22335 = (state_22369[(10)]);
var inst_22337 = cljs.core.count(inst_22335);
var inst_22338 = (inst_22337 > (0));
var state_22369__$1 = state_22369;
if(cljs.core.truth_(inst_22338)){
var statearr_22391_24242 = state_22369__$1;
(statearr_22391_24242[(1)] = (4));

} else {
var statearr_22392_24243 = state_22369__$1;
(statearr_22392_24243[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (11))){
var inst_22335 = (state_22369[(10)]);
var inst_22357 = (state_22369[(2)]);
var tmp22385 = inst_22335;
var inst_22335__$1 = tmp22385;
var state_22369__$1 = (function (){var statearr_22394 = state_22369;
(statearr_22394[(10)] = inst_22335__$1);

(statearr_22394[(11)] = inst_22357);

return statearr_22394;
})();
var statearr_22395_24248 = state_22369__$1;
(statearr_22395_24248[(2)] = null);

(statearr_22395_24248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (9))){
var inst_22345 = (state_22369[(8)]);
var state_22369__$1 = state_22369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22369__$1,(11),out,inst_22345);
} else {
if((state_val_22370 === (5))){
var inst_22362 = cljs.core.async.close_BANG_(out);
var state_22369__$1 = state_22369;
var statearr_22398_24252 = state_22369__$1;
(statearr_22398_24252[(2)] = inst_22362);

(statearr_22398_24252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (10))){
var inst_22360 = (state_22369[(2)]);
var state_22369__$1 = state_22369;
var statearr_22399_24253 = state_22369__$1;
(statearr_22399_24253[(2)] = inst_22360);

(statearr_22399_24253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22370 === (8))){
var inst_22335 = (state_22369[(10)]);
var inst_22344 = (state_22369[(7)]);
var inst_22345 = (state_22369[(8)]);
var inst_22346 = (state_22369[(9)]);
var inst_22350 = (function (){var cs = inst_22335;
var vec__22340 = inst_22344;
var v = inst_22345;
var c = inst_22346;
return (function (p1__22322_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__22322_SHARP_);
});
})();
var inst_22351 = cljs.core.filterv(inst_22350,inst_22335);
var inst_22335__$1 = inst_22351;
var state_22369__$1 = (function (){var statearr_22402 = state_22369;
(statearr_22402[(10)] = inst_22335__$1);

return statearr_22402;
})();
var statearr_22403_24254 = state_22369__$1;
(statearr_22403_24254[(2)] = null);

(statearr_22403_24254[(1)] = (2));


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
var cljs$core$async$state_machine__19895__auto__ = null;
var cljs$core$async$state_machine__19895__auto____0 = (function (){
var statearr_22404 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22404[(0)] = cljs$core$async$state_machine__19895__auto__);

(statearr_22404[(1)] = (1));

return statearr_22404;
});
var cljs$core$async$state_machine__19895__auto____1 = (function (state_22369){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_22369);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e22406){var ex__19898__auto__ = e22406;
var statearr_22407_24258 = state_22369;
(statearr_22407_24258[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_22369[(4)]))){
var statearr_22410_24259 = state_22369;
(statearr_22410_24259[(1)] = cljs.core.first((state_22369[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24263 = state_22369;
state_22369 = G__24263;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$state_machine__19895__auto__ = function(state_22369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19895__auto____1.call(this,state_22369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19895__auto____0;
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19895__auto____1;
return cljs$core$async$state_machine__19895__auto__;
})()
})();
var state__20077__auto__ = (function (){var statearr_22413 = f__20076__auto__();
(statearr_22413[(6)] = c__20075__auto___24199);

return statearr_22413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
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
var G__22421 = arguments.length;
switch (G__22421) {
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
var c__20075__auto___24268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = (function (state_22458){
var state_val_22459 = (state_22458[(1)]);
if((state_val_22459 === (7))){
var inst_22437 = (state_22458[(7)]);
var inst_22437__$1 = (state_22458[(2)]);
var inst_22438 = (inst_22437__$1 == null);
var inst_22439 = cljs.core.not(inst_22438);
var state_22458__$1 = (function (){var statearr_22462 = state_22458;
(statearr_22462[(7)] = inst_22437__$1);

return statearr_22462;
})();
if(inst_22439){
var statearr_22463_24270 = state_22458__$1;
(statearr_22463_24270[(1)] = (8));

} else {
var statearr_22464_24274 = state_22458__$1;
(statearr_22464_24274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (1))){
var inst_22425 = (0);
var state_22458__$1 = (function (){var statearr_22465 = state_22458;
(statearr_22465[(8)] = inst_22425);

return statearr_22465;
})();
var statearr_22466_24275 = state_22458__$1;
(statearr_22466_24275[(2)] = null);

(statearr_22466_24275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (4))){
var state_22458__$1 = state_22458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22458__$1,(7),ch);
} else {
if((state_val_22459 === (6))){
var inst_22450 = (state_22458[(2)]);
var state_22458__$1 = state_22458;
var statearr_22471_24276 = state_22458__$1;
(statearr_22471_24276[(2)] = inst_22450);

(statearr_22471_24276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (3))){
var inst_22452 = (state_22458[(2)]);
var inst_22453 = cljs.core.async.close_BANG_(out);
var state_22458__$1 = (function (){var statearr_22472 = state_22458;
(statearr_22472[(9)] = inst_22452);

return statearr_22472;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22458__$1,inst_22453);
} else {
if((state_val_22459 === (2))){
var inst_22425 = (state_22458[(8)]);
var inst_22431 = (inst_22425 < n);
var state_22458__$1 = state_22458;
if(cljs.core.truth_(inst_22431)){
var statearr_22473_24277 = state_22458__$1;
(statearr_22473_24277[(1)] = (4));

} else {
var statearr_22474_24278 = state_22458__$1;
(statearr_22474_24278[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (11))){
var inst_22425 = (state_22458[(8)]);
var inst_22442 = (state_22458[(2)]);
var inst_22443 = (inst_22425 + (1));
var inst_22425__$1 = inst_22443;
var state_22458__$1 = (function (){var statearr_22475 = state_22458;
(statearr_22475[(8)] = inst_22425__$1);

(statearr_22475[(10)] = inst_22442);

return statearr_22475;
})();
var statearr_22476_24279 = state_22458__$1;
(statearr_22476_24279[(2)] = null);

(statearr_22476_24279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (9))){
var state_22458__$1 = state_22458;
var statearr_22478_24280 = state_22458__$1;
(statearr_22478_24280[(2)] = null);

(statearr_22478_24280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (5))){
var state_22458__$1 = state_22458;
var statearr_22479_24281 = state_22458__$1;
(statearr_22479_24281[(2)] = null);

(statearr_22479_24281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (10))){
var inst_22447 = (state_22458[(2)]);
var state_22458__$1 = state_22458;
var statearr_22480_24282 = state_22458__$1;
(statearr_22480_24282[(2)] = inst_22447);

(statearr_22480_24282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (8))){
var inst_22437 = (state_22458[(7)]);
var state_22458__$1 = state_22458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22458__$1,(11),out,inst_22437);
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
var cljs$core$async$state_machine__19895__auto__ = null;
var cljs$core$async$state_machine__19895__auto____0 = (function (){
var statearr_22484 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22484[(0)] = cljs$core$async$state_machine__19895__auto__);

(statearr_22484[(1)] = (1));

return statearr_22484;
});
var cljs$core$async$state_machine__19895__auto____1 = (function (state_22458){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_22458);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e22485){var ex__19898__auto__ = e22485;
var statearr_22486_24283 = state_22458;
(statearr_22486_24283[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_22458[(4)]))){
var statearr_22487_24285 = state_22458;
(statearr_22487_24285[(1)] = cljs.core.first((state_22458[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24286 = state_22458;
state_22458 = G__24286;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$state_machine__19895__auto__ = function(state_22458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19895__auto____1.call(this,state_22458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19895__auto____0;
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19895__auto____1;
return cljs$core$async$state_machine__19895__auto__;
})()
})();
var state__20077__auto__ = (function (){var statearr_22489 = f__20076__auto__();
(statearr_22489[(6)] = c__20075__auto___24268);

return statearr_22489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22496 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22496 = (function (f,ch,meta22497){
this.f = f;
this.ch = ch;
this.meta22497 = meta22497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22498,meta22497__$1){
var self__ = this;
var _22498__$1 = this;
return (new cljs.core.async.t_cljs$core$async22496(self__.f,self__.ch,meta22497__$1));
}));

(cljs.core.async.t_cljs$core$async22496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22498){
var self__ = this;
var _22498__$1 = this;
return self__.meta22497;
}));

(cljs.core.async.t_cljs$core$async22496.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22496.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22496.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22496.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22496.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22509 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22509 = (function (f,ch,meta22497,_,fn1,meta22510){
this.f = f;
this.ch = ch;
this.meta22497 = meta22497;
this._ = _;
this.fn1 = fn1;
this.meta22510 = meta22510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22511,meta22510__$1){
var self__ = this;
var _22511__$1 = this;
return (new cljs.core.async.t_cljs$core$async22509(self__.f,self__.ch,self__.meta22497,self__._,self__.fn1,meta22510__$1));
}));

(cljs.core.async.t_cljs$core$async22509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22511){
var self__ = this;
var _22511__$1 = this;
return self__.meta22510;
}));

(cljs.core.async.t_cljs$core$async22509.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22509.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async22509.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22509.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__22494_SHARP_){
var G__22529 = (((p1__22494_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22494_SHARP_) : self__.f.call(null,p1__22494_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__22529) : f1.call(null,G__22529));
});
}));

(cljs.core.async.t_cljs$core$async22509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22497","meta22497",438149341,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22496","cljs.core.async/t_cljs$core$async22496",-1871388573,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22510","meta22510",-1919985484,null)], null);
}));

(cljs.core.async.t_cljs$core$async22509.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22509");

(cljs.core.async.t_cljs$core$async22509.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22509");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22509.
 */
cljs.core.async.__GT_t_cljs$core$async22509 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22509(f__$1,ch__$1,meta22497__$1,___$2,fn1__$1,meta22510){
return (new cljs.core.async.t_cljs$core$async22509(f__$1,ch__$1,meta22497__$1,___$2,fn1__$1,meta22510));
});

}

return (new cljs.core.async.t_cljs$core$async22509(self__.f,self__.ch,self__.meta22497,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__22552 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__22552) : self__.f.call(null,G__22552));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async22496.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22496.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async22496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22497","meta22497",438149341,null)], null);
}));

(cljs.core.async.t_cljs$core$async22496.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22496");

(cljs.core.async.t_cljs$core$async22496.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22496");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22496.
 */
cljs.core.async.__GT_t_cljs$core$async22496 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22496(f__$1,ch__$1,meta22497){
return (new cljs.core.async.t_cljs$core$async22496(f__$1,ch__$1,meta22497));
});

}

return (new cljs.core.async.t_cljs$core$async22496(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22569 = (function (f,ch,meta22570){
this.f = f;
this.ch = ch;
this.meta22570 = meta22570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22571,meta22570__$1){
var self__ = this;
var _22571__$1 = this;
return (new cljs.core.async.t_cljs$core$async22569(self__.f,self__.ch,meta22570__$1));
}));

(cljs.core.async.t_cljs$core$async22569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22571){
var self__ = this;
var _22571__$1 = this;
return self__.meta22570;
}));

(cljs.core.async.t_cljs$core$async22569.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22569.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22569.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22569.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async22569.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22569.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async22569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22570","meta22570",-730501214,null)], null);
}));

(cljs.core.async.t_cljs$core$async22569.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22569");

(cljs.core.async.t_cljs$core$async22569.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22569");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22569.
 */
cljs.core.async.__GT_t_cljs$core$async22569 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22569(f__$1,ch__$1,meta22570){
return (new cljs.core.async.t_cljs$core$async22569(f__$1,ch__$1,meta22570));
});

}

return (new cljs.core.async.t_cljs$core$async22569(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22599 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22599 = (function (p,ch,meta22600){
this.p = p;
this.ch = ch;
this.meta22600 = meta22600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22601,meta22600__$1){
var self__ = this;
var _22601__$1 = this;
return (new cljs.core.async.t_cljs$core$async22599(self__.p,self__.ch,meta22600__$1));
}));

(cljs.core.async.t_cljs$core$async22599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22601){
var self__ = this;
var _22601__$1 = this;
return self__.meta22600;
}));

(cljs.core.async.t_cljs$core$async22599.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22599.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22599.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22599.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22599.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async22599.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22599.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async22599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22600","meta22600",1319026071,null)], null);
}));

(cljs.core.async.t_cljs$core$async22599.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22599");

(cljs.core.async.t_cljs$core$async22599.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22599");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22599.
 */
cljs.core.async.__GT_t_cljs$core$async22599 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22599(p__$1,ch__$1,meta22600){
return (new cljs.core.async.t_cljs$core$async22599(p__$1,ch__$1,meta22600));
});

}

return (new cljs.core.async.t_cljs$core$async22599(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22688 = arguments.length;
switch (G__22688) {
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
var c__20075__auto___24318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = (function (state_22713){
var state_val_22714 = (state_22713[(1)]);
if((state_val_22714 === (7))){
var inst_22706 = (state_22713[(2)]);
var state_22713__$1 = state_22713;
var statearr_22722_24319 = state_22713__$1;
(statearr_22722_24319[(2)] = inst_22706);

(statearr_22722_24319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22714 === (1))){
var state_22713__$1 = state_22713;
var statearr_22723_24320 = state_22713__$1;
(statearr_22723_24320[(2)] = null);

(statearr_22723_24320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22714 === (4))){
var inst_22692 = (state_22713[(7)]);
var inst_22692__$1 = (state_22713[(2)]);
var inst_22693 = (inst_22692__$1 == null);
var state_22713__$1 = (function (){var statearr_22728 = state_22713;
(statearr_22728[(7)] = inst_22692__$1);

return statearr_22728;
})();
if(cljs.core.truth_(inst_22693)){
var statearr_22729_24321 = state_22713__$1;
(statearr_22729_24321[(1)] = (5));

} else {
var statearr_22730_24322 = state_22713__$1;
(statearr_22730_24322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22714 === (6))){
var inst_22692 = (state_22713[(7)]);
var inst_22697 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22692) : p.call(null,inst_22692));
var state_22713__$1 = state_22713;
if(cljs.core.truth_(inst_22697)){
var statearr_22739_24323 = state_22713__$1;
(statearr_22739_24323[(1)] = (8));

} else {
var statearr_22744_24324 = state_22713__$1;
(statearr_22744_24324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22714 === (3))){
var inst_22708 = (state_22713[(2)]);
var state_22713__$1 = state_22713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22713__$1,inst_22708);
} else {
if((state_val_22714 === (2))){
var state_22713__$1 = state_22713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22713__$1,(4),ch);
} else {
if((state_val_22714 === (11))){
var inst_22700 = (state_22713[(2)]);
var state_22713__$1 = state_22713;
var statearr_22752_24325 = state_22713__$1;
(statearr_22752_24325[(2)] = inst_22700);

(statearr_22752_24325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22714 === (9))){
var state_22713__$1 = state_22713;
var statearr_22761_24326 = state_22713__$1;
(statearr_22761_24326[(2)] = null);

(statearr_22761_24326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22714 === (5))){
var inst_22695 = cljs.core.async.close_BANG_(out);
var state_22713__$1 = state_22713;
var statearr_22770_24327 = state_22713__$1;
(statearr_22770_24327[(2)] = inst_22695);

(statearr_22770_24327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22714 === (10))){
var inst_22703 = (state_22713[(2)]);
var state_22713__$1 = (function (){var statearr_22774 = state_22713;
(statearr_22774[(8)] = inst_22703);

return statearr_22774;
})();
var statearr_22775_24328 = state_22713__$1;
(statearr_22775_24328[(2)] = null);

(statearr_22775_24328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22714 === (8))){
var inst_22692 = (state_22713[(7)]);
var state_22713__$1 = state_22713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22713__$1,(11),out,inst_22692);
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
var cljs$core$async$state_machine__19895__auto__ = null;
var cljs$core$async$state_machine__19895__auto____0 = (function (){
var statearr_22776 = [null,null,null,null,null,null,null,null,null];
(statearr_22776[(0)] = cljs$core$async$state_machine__19895__auto__);

(statearr_22776[(1)] = (1));

return statearr_22776;
});
var cljs$core$async$state_machine__19895__auto____1 = (function (state_22713){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_22713);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e22777){var ex__19898__auto__ = e22777;
var statearr_22778_24330 = state_22713;
(statearr_22778_24330[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_22713[(4)]))){
var statearr_22779_24331 = state_22713;
(statearr_22779_24331[(1)] = cljs.core.first((state_22713[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24332 = state_22713;
state_22713 = G__24332;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$state_machine__19895__auto__ = function(state_22713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19895__auto____1.call(this,state_22713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19895__auto____0;
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19895__auto____1;
return cljs$core$async$state_machine__19895__auto__;
})()
})();
var state__20077__auto__ = (function (){var statearr_22781 = f__20076__auto__();
(statearr_22781[(6)] = c__20075__auto___24318);

return statearr_22781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__22795 = arguments.length;
switch (G__22795) {
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
var c__20075__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = (function (state_22866){
var state_val_22867 = (state_22866[(1)]);
if((state_val_22867 === (7))){
var inst_22862 = (state_22866[(2)]);
var state_22866__$1 = state_22866;
var statearr_22868_24343 = state_22866__$1;
(statearr_22868_24343[(2)] = inst_22862);

(statearr_22868_24343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22867 === (20))){
var inst_22832 = (state_22866[(7)]);
var inst_22843 = (state_22866[(2)]);
var inst_22844 = cljs.core.next(inst_22832);
var inst_22816 = inst_22844;
var inst_22817 = null;
var inst_22818 = (0);
var inst_22819 = (0);
var state_22866__$1 = (function (){var statearr_22870 = state_22866;
(statearr_22870[(8)] = inst_22843);

(statearr_22870[(9)] = inst_22816);

(statearr_22870[(10)] = inst_22819);

(statearr_22870[(11)] = inst_22818);

(statearr_22870[(12)] = inst_22817);

return statearr_22870;
})();
var statearr_22871_24345 = state_22866__$1;
(statearr_22871_24345[(2)] = null);

(statearr_22871_24345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22867 === (1))){
var state_22866__$1 = state_22866;
var statearr_22875_24346 = state_22866__$1;
(statearr_22875_24346[(2)] = null);

(statearr_22875_24346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22867 === (4))){
var inst_22803 = (state_22866[(13)]);
var inst_22803__$1 = (state_22866[(2)]);
var inst_22804 = (inst_22803__$1 == null);
var state_22866__$1 = (function (){var statearr_22880 = state_22866;
(statearr_22880[(13)] = inst_22803__$1);

return statearr_22880;
})();
if(cljs.core.truth_(inst_22804)){
var statearr_22887_24347 = state_22866__$1;
(statearr_22887_24347[(1)] = (5));

} else {
var statearr_22889_24348 = state_22866__$1;
(statearr_22889_24348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22867 === (15))){
var state_22866__$1 = state_22866;
var statearr_22901_24349 = state_22866__$1;
(statearr_22901_24349[(2)] = null);

(statearr_22901_24349[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22867 === (21))){
var state_22866__$1 = state_22866;
var statearr_22908_24350 = state_22866__$1;
(statearr_22908_24350[(2)] = null);

(statearr_22908_24350[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22867 === (13))){
var inst_22816 = (state_22866[(9)]);
var inst_22819 = (state_22866[(10)]);
var inst_22818 = (state_22866[(11)]);
var inst_22817 = (state_22866[(12)]);
var inst_22828 = (state_22866[(2)]);
var inst_22829 = (inst_22819 + (1));
var tmp22894 = inst_22816;
var tmp22895 = inst_22818;
var tmp22896 = inst_22817;
var inst_22816__$1 = tmp22894;
var inst_22817__$1 = tmp22896;
var inst_22818__$1 = tmp22895;
var inst_22819__$1 = inst_22829;
var state_22866__$1 = (function (){var statearr_22912 = state_22866;
(statearr_22912[(14)] = inst_22828);

(statearr_22912[(9)] = inst_22816__$1);

(statearr_22912[(10)] = inst_22819__$1);

(statearr_22912[(11)] = inst_22818__$1);

(statearr_22912[(12)] = inst_22817__$1);

return statearr_22912;
})();
var statearr_22915_24352 = state_22866__$1;
(statearr_22915_24352[(2)] = null);

(statearr_22915_24352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22867 === (22))){
var state_22866__$1 = state_22866;
var statearr_22917_24353 = state_22866__$1;
(statearr_22917_24353[(2)] = null);

(statearr_22917_24353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22867 === (6))){
var inst_22803 = (state_22866[(13)]);
var inst_22814 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22803) : f.call(null,inst_22803));
var inst_22815 = cljs.core.seq(inst_22814);
var inst_22816 = inst_22815;
var inst_22817 = null;
var inst_22818 = (0);
var inst_22819 = (0);
var state_22866__$1 = (function (){var statearr_22921 = state_22866;
(statearr_22921[(9)] = inst_22816);

(statearr_22921[(10)] = inst_22819);

(statearr_22921[(11)] = inst_22818);

(statearr_22921[(12)] = inst_22817);

return statearr_22921;
})();
var statearr_22922_24354 = state_22866__$1;
(statearr_22922_24354[(2)] = null);

(statearr_22922_24354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22867 === (17))){
var inst_22832 = (state_22866[(7)]);
var inst_22836 = cljs.core.chunk_first(inst_22832);
var inst_22837 = cljs.core.chunk_rest(inst_22832);
var inst_22838 = cljs.core.count(inst_22836);
var inst_22816 = inst_22837;
var inst_22817 = inst_22836;
var inst_22818 = inst_22838;
var inst_22819 = (0);
var state_22866__$1 = (function (){var statearr_22926 = state_22866;
(statearr_22926[(9)] = inst_22816);

(statearr_22926[(10)] = inst_22819);

(statearr_22926[(11)] = inst_22818);

(statearr_22926[(12)] = inst_22817);

return statearr_22926;
})();
var statearr_22927_24359 = state_22866__$1;
(statearr_22927_24359[(2)] = null);

(statearr_22927_24359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22867 === (3))){
var inst_22864 = (state_22866[(2)]);
var state_22866__$1 = state_22866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22866__$1,inst_22864);
} else {
if((state_val_22867 === (12))){
var inst_22852 = (state_22866[(2)]);
var state_22866__$1 = state_22866;
var statearr_22928_24360 = state_22866__$1;
(statearr_22928_24360[(2)] = inst_22852);

(statearr_22928_24360[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22867 === (2))){
var state_22866__$1 = state_22866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22866__$1,(4),in$);
} else {
if((state_val_22867 === (23))){
var inst_22860 = (state_22866[(2)]);
var state_22866__$1 = state_22866;
var statearr_22935_24361 = state_22866__$1;
(statearr_22935_24361[(2)] = inst_22860);

(statearr_22935_24361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22867 === (19))){
var inst_22847 = (state_22866[(2)]);
var state_22866__$1 = state_22866;
var statearr_22939_24362 = state_22866__$1;
(statearr_22939_24362[(2)] = inst_22847);

(statearr_22939_24362[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22867 === (11))){
var inst_22832 = (state_22866[(7)]);
var inst_22816 = (state_22866[(9)]);
var inst_22832__$1 = cljs.core.seq(inst_22816);
var state_22866__$1 = (function (){var statearr_22944 = state_22866;
(statearr_22944[(7)] = inst_22832__$1);

return statearr_22944;
})();
if(inst_22832__$1){
var statearr_22945_24363 = state_22866__$1;
(statearr_22945_24363[(1)] = (14));

} else {
var statearr_22946_24364 = state_22866__$1;
(statearr_22946_24364[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22867 === (9))){
var inst_22854 = (state_22866[(2)]);
var inst_22855 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_22866__$1 = (function (){var statearr_22951 = state_22866;
(statearr_22951[(15)] = inst_22854);

return statearr_22951;
})();
if(cljs.core.truth_(inst_22855)){
var statearr_22954_24365 = state_22866__$1;
(statearr_22954_24365[(1)] = (21));

} else {
var statearr_22955_24366 = state_22866__$1;
(statearr_22955_24366[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22867 === (5))){
var inst_22806 = cljs.core.async.close_BANG_(out);
var state_22866__$1 = state_22866;
var statearr_22956_24367 = state_22866__$1;
(statearr_22956_24367[(2)] = inst_22806);

(statearr_22956_24367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22867 === (14))){
var inst_22832 = (state_22866[(7)]);
var inst_22834 = cljs.core.chunked_seq_QMARK_(inst_22832);
var state_22866__$1 = state_22866;
if(inst_22834){
var statearr_22960_24368 = state_22866__$1;
(statearr_22960_24368[(1)] = (17));

} else {
var statearr_22961_24369 = state_22866__$1;
(statearr_22961_24369[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22867 === (16))){
var inst_22850 = (state_22866[(2)]);
var state_22866__$1 = state_22866;
var statearr_22962_24372 = state_22866__$1;
(statearr_22962_24372[(2)] = inst_22850);

(statearr_22962_24372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22867 === (10))){
var inst_22819 = (state_22866[(10)]);
var inst_22817 = (state_22866[(12)]);
var inst_22826 = cljs.core._nth(inst_22817,inst_22819);
var state_22866__$1 = state_22866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22866__$1,(13),out,inst_22826);
} else {
if((state_val_22867 === (18))){
var inst_22832 = (state_22866[(7)]);
var inst_22841 = cljs.core.first(inst_22832);
var state_22866__$1 = state_22866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22866__$1,(20),out,inst_22841);
} else {
if((state_val_22867 === (8))){
var inst_22819 = (state_22866[(10)]);
var inst_22818 = (state_22866[(11)]);
var inst_22823 = (inst_22819 < inst_22818);
var inst_22824 = inst_22823;
var state_22866__$1 = state_22866;
if(cljs.core.truth_(inst_22824)){
var statearr_22964_24375 = state_22866__$1;
(statearr_22964_24375[(1)] = (10));

} else {
var statearr_22966_24376 = state_22866__$1;
(statearr_22966_24376[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__19895__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19895__auto____0 = (function (){
var statearr_22968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22968[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19895__auto__);

(statearr_22968[(1)] = (1));

return statearr_22968;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19895__auto____1 = (function (state_22866){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_22866);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e22969){var ex__19898__auto__ = e22969;
var statearr_22970_24380 = state_22866;
(statearr_22970_24380[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_22866[(4)]))){
var statearr_22971_24382 = state_22866;
(statearr_22971_24382[(1)] = cljs.core.first((state_22866[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24407 = state_22866;
state_22866 = G__24407;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19895__auto__ = function(state_22866){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19895__auto____1.call(this,state_22866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19895__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19895__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19895__auto__;
})()
})();
var state__20077__auto__ = (function (){var statearr_22973 = f__20076__auto__();
(statearr_22973[(6)] = c__20075__auto__);

return statearr_22973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
}));

return c__20075__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__22975 = arguments.length;
switch (G__22975) {
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
var G__22978 = arguments.length;
switch (G__22978) {
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
var G__22980 = arguments.length;
switch (G__22980) {
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
var c__20075__auto___24421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = (function (state_23004){
var state_val_23006 = (state_23004[(1)]);
if((state_val_23006 === (7))){
var inst_22999 = (state_23004[(2)]);
var state_23004__$1 = state_23004;
var statearr_23012_24423 = state_23004__$1;
(statearr_23012_24423[(2)] = inst_22999);

(statearr_23012_24423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23006 === (1))){
var inst_22981 = null;
var state_23004__$1 = (function (){var statearr_23014 = state_23004;
(statearr_23014[(7)] = inst_22981);

return statearr_23014;
})();
var statearr_23015_24425 = state_23004__$1;
(statearr_23015_24425[(2)] = null);

(statearr_23015_24425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23006 === (4))){
var inst_22984 = (state_23004[(8)]);
var inst_22984__$1 = (state_23004[(2)]);
var inst_22985 = (inst_22984__$1 == null);
var inst_22986 = cljs.core.not(inst_22985);
var state_23004__$1 = (function (){var statearr_23017 = state_23004;
(statearr_23017[(8)] = inst_22984__$1);

return statearr_23017;
})();
if(inst_22986){
var statearr_23018_24429 = state_23004__$1;
(statearr_23018_24429[(1)] = (5));

} else {
var statearr_23019_24430 = state_23004__$1;
(statearr_23019_24430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23006 === (6))){
var state_23004__$1 = state_23004;
var statearr_23023_24431 = state_23004__$1;
(statearr_23023_24431[(2)] = null);

(statearr_23023_24431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23006 === (3))){
var inst_23001 = (state_23004[(2)]);
var inst_23002 = cljs.core.async.close_BANG_(out);
var state_23004__$1 = (function (){var statearr_23024 = state_23004;
(statearr_23024[(9)] = inst_23001);

return statearr_23024;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23004__$1,inst_23002);
} else {
if((state_val_23006 === (2))){
var state_23004__$1 = state_23004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23004__$1,(4),ch);
} else {
if((state_val_23006 === (11))){
var inst_22984 = (state_23004[(8)]);
var inst_22993 = (state_23004[(2)]);
var inst_22981 = inst_22984;
var state_23004__$1 = (function (){var statearr_23025 = state_23004;
(statearr_23025[(7)] = inst_22981);

(statearr_23025[(10)] = inst_22993);

return statearr_23025;
})();
var statearr_23027_24436 = state_23004__$1;
(statearr_23027_24436[(2)] = null);

(statearr_23027_24436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23006 === (9))){
var inst_22984 = (state_23004[(8)]);
var state_23004__$1 = state_23004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23004__$1,(11),out,inst_22984);
} else {
if((state_val_23006 === (5))){
var inst_22981 = (state_23004[(7)]);
var inst_22984 = (state_23004[(8)]);
var inst_22988 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22984,inst_22981);
var state_23004__$1 = state_23004;
if(inst_22988){
var statearr_23030_24438 = state_23004__$1;
(statearr_23030_24438[(1)] = (8));

} else {
var statearr_23031_24439 = state_23004__$1;
(statearr_23031_24439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23006 === (10))){
var inst_22996 = (state_23004[(2)]);
var state_23004__$1 = state_23004;
var statearr_23032_24442 = state_23004__$1;
(statearr_23032_24442[(2)] = inst_22996);

(statearr_23032_24442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23006 === (8))){
var inst_22981 = (state_23004[(7)]);
var tmp23029 = inst_22981;
var inst_22981__$1 = tmp23029;
var state_23004__$1 = (function (){var statearr_23033 = state_23004;
(statearr_23033[(7)] = inst_22981__$1);

return statearr_23033;
})();
var statearr_23034_24444 = state_23004__$1;
(statearr_23034_24444[(2)] = null);

(statearr_23034_24444[(1)] = (2));


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
var cljs$core$async$state_machine__19895__auto__ = null;
var cljs$core$async$state_machine__19895__auto____0 = (function (){
var statearr_23035 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23035[(0)] = cljs$core$async$state_machine__19895__auto__);

(statearr_23035[(1)] = (1));

return statearr_23035;
});
var cljs$core$async$state_machine__19895__auto____1 = (function (state_23004){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_23004);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e23036){var ex__19898__auto__ = e23036;
var statearr_23037_24448 = state_23004;
(statearr_23037_24448[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_23004[(4)]))){
var statearr_23039_24450 = state_23004;
(statearr_23039_24450[(1)] = cljs.core.first((state_23004[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24451 = state_23004;
state_23004 = G__24451;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$state_machine__19895__auto__ = function(state_23004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19895__auto____1.call(this,state_23004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19895__auto____0;
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19895__auto____1;
return cljs$core$async$state_machine__19895__auto__;
})()
})();
var state__20077__auto__ = (function (){var statearr_23041 = f__20076__auto__();
(statearr_23041[(6)] = c__20075__auto___24421);

return statearr_23041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23044 = arguments.length;
switch (G__23044) {
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
var c__20075__auto___24478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = (function (state_23102){
var state_val_23103 = (state_23102[(1)]);
if((state_val_23103 === (7))){
var inst_23098 = (state_23102[(2)]);
var state_23102__$1 = state_23102;
var statearr_23111_24479 = state_23102__$1;
(statearr_23111_24479[(2)] = inst_23098);

(statearr_23111_24479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23103 === (1))){
var inst_23049 = (new Array(n));
var inst_23050 = inst_23049;
var inst_23051 = (0);
var state_23102__$1 = (function (){var statearr_23119 = state_23102;
(statearr_23119[(7)] = inst_23050);

(statearr_23119[(8)] = inst_23051);

return statearr_23119;
})();
var statearr_23120_24480 = state_23102__$1;
(statearr_23120_24480[(2)] = null);

(statearr_23120_24480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23103 === (4))){
var inst_23054 = (state_23102[(9)]);
var inst_23054__$1 = (state_23102[(2)]);
var inst_23055 = (inst_23054__$1 == null);
var inst_23056 = cljs.core.not(inst_23055);
var state_23102__$1 = (function (){var statearr_23122 = state_23102;
(statearr_23122[(9)] = inst_23054__$1);

return statearr_23122;
})();
if(inst_23056){
var statearr_23123_24481 = state_23102__$1;
(statearr_23123_24481[(1)] = (5));

} else {
var statearr_23124_24482 = state_23102__$1;
(statearr_23124_24482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23103 === (15))){
var inst_23092 = (state_23102[(2)]);
var state_23102__$1 = state_23102;
var statearr_23125_24483 = state_23102__$1;
(statearr_23125_24483[(2)] = inst_23092);

(statearr_23125_24483[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23103 === (13))){
var state_23102__$1 = state_23102;
var statearr_23126_24484 = state_23102__$1;
(statearr_23126_24484[(2)] = null);

(statearr_23126_24484[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23103 === (6))){
var inst_23051 = (state_23102[(8)]);
var inst_23088 = (inst_23051 > (0));
var state_23102__$1 = state_23102;
if(cljs.core.truth_(inst_23088)){
var statearr_23129_24485 = state_23102__$1;
(statearr_23129_24485[(1)] = (12));

} else {
var statearr_23132_24486 = state_23102__$1;
(statearr_23132_24486[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23103 === (3))){
var inst_23100 = (state_23102[(2)]);
var state_23102__$1 = state_23102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23102__$1,inst_23100);
} else {
if((state_val_23103 === (12))){
var inst_23050 = (state_23102[(7)]);
var inst_23090 = cljs.core.vec(inst_23050);
var state_23102__$1 = state_23102;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23102__$1,(15),out,inst_23090);
} else {
if((state_val_23103 === (2))){
var state_23102__$1 = state_23102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23102__$1,(4),ch);
} else {
if((state_val_23103 === (11))){
var inst_23066 = (state_23102[(2)]);
var inst_23067 = (new Array(n));
var inst_23050 = inst_23067;
var inst_23051 = (0);
var state_23102__$1 = (function (){var statearr_23138 = state_23102;
(statearr_23138[(7)] = inst_23050);

(statearr_23138[(10)] = inst_23066);

(statearr_23138[(8)] = inst_23051);

return statearr_23138;
})();
var statearr_23139_24487 = state_23102__$1;
(statearr_23139_24487[(2)] = null);

(statearr_23139_24487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23103 === (9))){
var inst_23050 = (state_23102[(7)]);
var inst_23064 = cljs.core.vec(inst_23050);
var state_23102__$1 = state_23102;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23102__$1,(11),out,inst_23064);
} else {
if((state_val_23103 === (5))){
var inst_23050 = (state_23102[(7)]);
var inst_23054 = (state_23102[(9)]);
var inst_23051 = (state_23102[(8)]);
var inst_23059 = (state_23102[(11)]);
var inst_23058 = (inst_23050[inst_23051] = inst_23054);
var inst_23059__$1 = (inst_23051 + (1));
var inst_23060 = (inst_23059__$1 < n);
var state_23102__$1 = (function (){var statearr_23142 = state_23102;
(statearr_23142[(11)] = inst_23059__$1);

(statearr_23142[(12)] = inst_23058);

return statearr_23142;
})();
if(cljs.core.truth_(inst_23060)){
var statearr_23143_24488 = state_23102__$1;
(statearr_23143_24488[(1)] = (8));

} else {
var statearr_23144_24489 = state_23102__$1;
(statearr_23144_24489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23103 === (14))){
var inst_23095 = (state_23102[(2)]);
var inst_23096 = cljs.core.async.close_BANG_(out);
var state_23102__$1 = (function (){var statearr_23150 = state_23102;
(statearr_23150[(13)] = inst_23095);

return statearr_23150;
})();
var statearr_23151_24490 = state_23102__$1;
(statearr_23151_24490[(2)] = inst_23096);

(statearr_23151_24490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23103 === (10))){
var inst_23070 = (state_23102[(2)]);
var state_23102__$1 = state_23102;
var statearr_23156_24491 = state_23102__$1;
(statearr_23156_24491[(2)] = inst_23070);

(statearr_23156_24491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23103 === (8))){
var inst_23050 = (state_23102[(7)]);
var inst_23059 = (state_23102[(11)]);
var tmp23149 = inst_23050;
var inst_23050__$1 = tmp23149;
var inst_23051 = inst_23059;
var state_23102__$1 = (function (){var statearr_23164 = state_23102;
(statearr_23164[(7)] = inst_23050__$1);

(statearr_23164[(8)] = inst_23051);

return statearr_23164;
})();
var statearr_23169_24492 = state_23102__$1;
(statearr_23169_24492[(2)] = null);

(statearr_23169_24492[(1)] = (2));


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
var cljs$core$async$state_machine__19895__auto__ = null;
var cljs$core$async$state_machine__19895__auto____0 = (function (){
var statearr_23186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23186[(0)] = cljs$core$async$state_machine__19895__auto__);

(statearr_23186[(1)] = (1));

return statearr_23186;
});
var cljs$core$async$state_machine__19895__auto____1 = (function (state_23102){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_23102);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e23194){var ex__19898__auto__ = e23194;
var statearr_23200_24493 = state_23102;
(statearr_23200_24493[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_23102[(4)]))){
var statearr_23207_24494 = state_23102;
(statearr_23207_24494[(1)] = cljs.core.first((state_23102[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24495 = state_23102;
state_23102 = G__24495;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$state_machine__19895__auto__ = function(state_23102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19895__auto____1.call(this,state_23102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19895__auto____0;
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19895__auto____1;
return cljs$core$async$state_machine__19895__auto__;
})()
})();
var state__20077__auto__ = (function (){var statearr_23219 = f__20076__auto__();
(statearr_23219[(6)] = c__20075__auto___24478);

return statearr_23219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23224 = arguments.length;
switch (G__23224) {
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
var c__20075__auto___24497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20076__auto__ = (function (){var switch__19894__auto__ = (function (state_23274){
var state_val_23275 = (state_23274[(1)]);
if((state_val_23275 === (7))){
var inst_23267 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23278_24498 = state_23274__$1;
(statearr_23278_24498[(2)] = inst_23267);

(statearr_23278_24498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (1))){
var inst_23226 = [];
var inst_23227 = inst_23226;
var inst_23228 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23274__$1 = (function (){var statearr_23279 = state_23274;
(statearr_23279[(7)] = inst_23227);

(statearr_23279[(8)] = inst_23228);

return statearr_23279;
})();
var statearr_23280_24499 = state_23274__$1;
(statearr_23280_24499[(2)] = null);

(statearr_23280_24499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (4))){
var inst_23231 = (state_23274[(9)]);
var inst_23231__$1 = (state_23274[(2)]);
var inst_23232 = (inst_23231__$1 == null);
var inst_23233 = cljs.core.not(inst_23232);
var state_23274__$1 = (function (){var statearr_23281 = state_23274;
(statearr_23281[(9)] = inst_23231__$1);

return statearr_23281;
})();
if(inst_23233){
var statearr_23282_24501 = state_23274__$1;
(statearr_23282_24501[(1)] = (5));

} else {
var statearr_23284_24502 = state_23274__$1;
(statearr_23284_24502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (15))){
var inst_23227 = (state_23274[(7)]);
var inst_23259 = cljs.core.vec(inst_23227);
var state_23274__$1 = state_23274;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23274__$1,(18),out,inst_23259);
} else {
if((state_val_23275 === (13))){
var inst_23254 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23285_24506 = state_23274__$1;
(statearr_23285_24506[(2)] = inst_23254);

(statearr_23285_24506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (6))){
var inst_23227 = (state_23274[(7)]);
var inst_23256 = inst_23227.length;
var inst_23257 = (inst_23256 > (0));
var state_23274__$1 = state_23274;
if(cljs.core.truth_(inst_23257)){
var statearr_23287_24508 = state_23274__$1;
(statearr_23287_24508[(1)] = (15));

} else {
var statearr_23290_24509 = state_23274__$1;
(statearr_23290_24509[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (17))){
var inst_23264 = (state_23274[(2)]);
var inst_23265 = cljs.core.async.close_BANG_(out);
var state_23274__$1 = (function (){var statearr_23295 = state_23274;
(statearr_23295[(10)] = inst_23264);

return statearr_23295;
})();
var statearr_23296_24524 = state_23274__$1;
(statearr_23296_24524[(2)] = inst_23265);

(statearr_23296_24524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (3))){
var inst_23270 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23274__$1,inst_23270);
} else {
if((state_val_23275 === (12))){
var inst_23227 = (state_23274[(7)]);
var inst_23246 = cljs.core.vec(inst_23227);
var state_23274__$1 = state_23274;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23274__$1,(14),out,inst_23246);
} else {
if((state_val_23275 === (2))){
var state_23274__$1 = state_23274;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23274__$1,(4),ch);
} else {
if((state_val_23275 === (11))){
var inst_23231 = (state_23274[(9)]);
var inst_23227 = (state_23274[(7)]);
var inst_23235 = (state_23274[(11)]);
var inst_23243 = inst_23227.push(inst_23231);
var tmp23303 = inst_23227;
var inst_23227__$1 = tmp23303;
var inst_23228 = inst_23235;
var state_23274__$1 = (function (){var statearr_23306 = state_23274;
(statearr_23306[(7)] = inst_23227__$1);

(statearr_23306[(8)] = inst_23228);

(statearr_23306[(12)] = inst_23243);

return statearr_23306;
})();
var statearr_23311_24525 = state_23274__$1;
(statearr_23311_24525[(2)] = null);

(statearr_23311_24525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (9))){
var inst_23228 = (state_23274[(8)]);
var inst_23239 = cljs.core.keyword_identical_QMARK_(inst_23228,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_23274__$1 = state_23274;
var statearr_23346_24526 = state_23274__$1;
(statearr_23346_24526[(2)] = inst_23239);

(statearr_23346_24526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (5))){
var inst_23231 = (state_23274[(9)]);
var inst_23235 = (state_23274[(11)]);
var inst_23228 = (state_23274[(8)]);
var inst_23236 = (state_23274[(13)]);
var inst_23235__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23231) : f.call(null,inst_23231));
var inst_23236__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23235__$1,inst_23228);
var state_23274__$1 = (function (){var statearr_23350 = state_23274;
(statearr_23350[(11)] = inst_23235__$1);

(statearr_23350[(13)] = inst_23236__$1);

return statearr_23350;
})();
if(inst_23236__$1){
var statearr_23352_24527 = state_23274__$1;
(statearr_23352_24527[(1)] = (8));

} else {
var statearr_23353_24528 = state_23274__$1;
(statearr_23353_24528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (14))){
var inst_23231 = (state_23274[(9)]);
var inst_23235 = (state_23274[(11)]);
var inst_23248 = (state_23274[(2)]);
var inst_23250 = [];
var inst_23251 = inst_23250.push(inst_23231);
var inst_23227 = inst_23250;
var inst_23228 = inst_23235;
var state_23274__$1 = (function (){var statearr_23356 = state_23274;
(statearr_23356[(7)] = inst_23227);

(statearr_23356[(8)] = inst_23228);

(statearr_23356[(14)] = inst_23248);

(statearr_23356[(15)] = inst_23251);

return statearr_23356;
})();
var statearr_23358_24529 = state_23274__$1;
(statearr_23358_24529[(2)] = null);

(statearr_23358_24529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (16))){
var state_23274__$1 = state_23274;
var statearr_23359_24530 = state_23274__$1;
(statearr_23359_24530[(2)] = null);

(statearr_23359_24530[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (10))){
var inst_23241 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
if(cljs.core.truth_(inst_23241)){
var statearr_23361_24531 = state_23274__$1;
(statearr_23361_24531[(1)] = (11));

} else {
var statearr_23362_24532 = state_23274__$1;
(statearr_23362_24532[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (18))){
var inst_23261 = (state_23274[(2)]);
var state_23274__$1 = state_23274;
var statearr_23363_24533 = state_23274__$1;
(statearr_23363_24533[(2)] = inst_23261);

(statearr_23363_24533[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23275 === (8))){
var inst_23236 = (state_23274[(13)]);
var state_23274__$1 = state_23274;
var statearr_23364_24534 = state_23274__$1;
(statearr_23364_24534[(2)] = inst_23236);

(statearr_23364_24534[(1)] = (10));


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
var cljs$core$async$state_machine__19895__auto__ = null;
var cljs$core$async$state_machine__19895__auto____0 = (function (){
var statearr_23365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23365[(0)] = cljs$core$async$state_machine__19895__auto__);

(statearr_23365[(1)] = (1));

return statearr_23365;
});
var cljs$core$async$state_machine__19895__auto____1 = (function (state_23274){
while(true){
var ret_value__19896__auto__ = (function (){try{while(true){
var result__19897__auto__ = switch__19894__auto__(state_23274);
if(cljs.core.keyword_identical_QMARK_(result__19897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19897__auto__;
}
break;
}
}catch (e23366){var ex__19898__auto__ = e23366;
var statearr_23367_24535 = state_23274;
(statearr_23367_24535[(2)] = ex__19898__auto__);


if(cljs.core.seq((state_23274[(4)]))){
var statearr_23368_24536 = state_23274;
(statearr_23368_24536[(1)] = cljs.core.first((state_23274[(4)])));

} else {
throw ex__19898__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24537 = state_23274;
state_23274 = G__24537;
continue;
} else {
return ret_value__19896__auto__;
}
break;
}
});
cljs$core$async$state_machine__19895__auto__ = function(state_23274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19895__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19895__auto____1.call(this,state_23274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19895__auto____0;
cljs$core$async$state_machine__19895__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19895__auto____1;
return cljs$core$async$state_machine__19895__auto__;
})()
})();
var state__20077__auto__ = (function (){var statearr_23370 = f__20076__auto__();
(statearr_23370[(6)] = c__20075__auto___24497);

return statearr_23370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20077__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
