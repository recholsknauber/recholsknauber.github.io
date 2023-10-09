goog.provide('quil.middlewares.navigation_3d');
quil.middlewares.navigation_3d.missing_navigation_key_error = ["state map is missing :navigation-3d key. ","Did you accidentally removed it from the state in ",":update or any other handler?"].join('');
/**
 * Asserts that `state` map contains `:navigation-2d` object.
 */
quil.middlewares.navigation_3d.assert_state_has_navigation = (function quil$middlewares$navigation_3d$assert_state_has_navigation(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"navigation-3d","navigation-3d",682305301).cljs$core$IFn$_invoke$arity$1(state))){
return null;
} else {
throw (new Error(quil.middlewares.navigation_3d.missing_navigation_key_error));
}
});
/**
 * Default position configuration. Check default configuration in
 *   'camera' function.
 */
quil.middlewares.navigation_3d.default_position = (function quil$middlewares$navigation_3d$default_position(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / 2.0),(quil.core.height() / 2.0),((quil.core.height() / 2.0) / quil.core.tan(((quil.core.PI * 60.0) / 360.0)))], null),new cljs.core.Keyword(null,"straight","straight",-1252567854),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null)], null);
});
/**
 * Rotates vector `v` by `angle` with `axis`.
 *   Formula is taken from wiki:
 *   http://en.wikipedia.org/wiki/Rotation_matrix#Rotation_matrix_from_axis_and_angle
 */
quil.middlewares.navigation_3d.rotate_by_axis_and_angle = (function quil$middlewares$navigation_3d$rotate_by_axis_and_angle(v,axis,angle){
var vec__17329 = axis;
var a_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17329,(0),null);
var a_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17329,(1),null);
var a_z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17329,(2),null);
var vec__17332 = v;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17332,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17332,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17332,(2),null);
var cs = quil.core.cos(angle);
var _cs = ((1) - cs);
var sn = quil.core.sin(angle);
var a = (cs + ((a_x * a_x) * _cs));
var b = (((a_x * a_y) * _cs) - (a_z * sn));
var c = (((a_x * a_z) * _cs) + (a_y * sn));
var d = (((a_x * a_y) * _cs) + (a_z * sn));
var e = (cs + ((a_y * a_y) * _cs));
var f = (((a_y * a_z) * _cs) - (a_x * sn));
var g = (((a_x * a_z) * _cs) - (a_y * sn));
var h = (((a_y * a_z) * _cs) + (a_x * sn));
var i = (cs + ((a_z * a_z) * _cs));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((a * x) + (b * y)) + (c * z)),(((d * x) + (e * y)) + (f * z)),(((g * x) + (h * y)) + (i * z))], null);
});
/**
 * Rotates `nav-3d` configuration left-right. `angle` positive - rotate right,
 *   negative - left.
 */
quil.middlewares.navigation_3d.rotate_lr = (function quil$middlewares$navigation_3d$rotate_lr(nav_3d,angle){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(nav_3d,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"straight","straight",-1252567854)], null),quil.middlewares.navigation_3d.rotate_by_axis_and_angle,new cljs.core.Keyword(null,"up","up",-269712113).cljs$core$IFn$_invoke$arity$1(nav_3d),angle);
});
/**
 * Vector cross-product: http://en.wikipedia.org/wiki/Cross_product
 */
quil.middlewares.navigation_3d.cross_product = (function quil$middlewares$navigation_3d$cross_product(p__17335,p__17336){
var vec__17337 = p__17335;
var u1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17337,(0),null);
var u2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17337,(1),null);
var u3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17337,(2),null);
var vec__17340 = p__17336;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17340,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17340,(1),null);
var v3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17340,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((u2 * v3) - (u3 * v2)),((u3 * v1) - (u1 * v3)),((u1 * v2) - (u2 * v1))], null);
});
/**
 * Multiply vector `v` by scalar `mult`.
 */
quil.middlewares.navigation_3d.v_mult = (function quil$middlewares$navigation_3d$v_mult(v,mult){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__17343_SHARP_){
return (p1__17343_SHARP_ * mult);
}),v);
});
/**
 * Sum of 2 vectors.
 */
quil.middlewares.navigation_3d.v_plus = (function quil$middlewares$navigation_3d$v_plus(v1,v2){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,v1,v2);
});
/**
 * Returns vector opposite to vector `v`.
 */
quil.middlewares.navigation_3d.v_opposite = (function quil$middlewares$navigation_3d$v_opposite(v){
return quil.middlewares.navigation_3d.v_mult(v,(-1));
});
/**
 * Normalize vector, returning vector
 *   which has same direction but with norm equals to 1.
 */
quil.middlewares.navigation_3d.v_normalize = (function quil$middlewares$navigation_3d$v_normalize(v){
var norm = quil.core.sqrt(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(quil.core.sq,v)));
return quil.middlewares.navigation_3d.v_mult(v,((1) / norm));
});
/**
 * Rotates `nav-3d` configuration up-down.
 */
quil.middlewares.navigation_3d.rotate_ud = (function quil$middlewares$navigation_3d$rotate_ud(nav_3d,angle){
var axis = quil.middlewares.navigation_3d.cross_product(new cljs.core.Keyword(null,"straight","straight",-1252567854).cljs$core$IFn$_invoke$arity$1(nav_3d),new cljs.core.Keyword(null,"up","up",-269712113).cljs$core$IFn$_invoke$arity$1(nav_3d));
var rotate = (function (p1__17348_SHARP_){
return quil.middlewares.navigation_3d.rotate_by_axis_and_angle(p1__17348_SHARP_,axis,angle);
});
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(nav_3d,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"straight","straight",-1252567854)], null),rotate),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113)], null),rotate);
});
/**
 * Mouse handler function which rotates nav-3d configuration.
 *   It uses mouse from `event` object and `pixels-in-360` to calculate
 *   angles to rotate.
 */
quil.middlewares.navigation_3d.rotate = (function quil$middlewares$navigation_3d$rotate(state,event,pixels_in_360){
quil.middlewares.navigation_3d.assert_state_has_navigation(state);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((0),new cljs.core.Keyword(null,"p-x","p-x",-1721211211).cljs$core$IFn$_invoke$arity$1(event),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"p-y","p-y",-530704830).cljs$core$IFn$_invoke$arity$1(event)], 0))){
return state;
} else {
var dx = (new cljs.core.Keyword(null,"p-x","p-x",-1721211211).cljs$core$IFn$_invoke$arity$1(event) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(event));
var dy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(event) - new cljs.core.Keyword(null,"p-y","p-y",-530704830).cljs$core$IFn$_invoke$arity$1(event));
var angle_lr = quil.core.map_range(dx,(0),pixels_in_360,(0),quil.core.TWO_PI);
var angle_ud = quil.core.map_range(dy,(0),pixels_in_360,(0),quil.core.TWO_PI);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-3d","navigation-3d",682305301)], null),(function (p1__17353_SHARP_){
return quil.middlewares.navigation_3d.rotate_ud(quil.middlewares.navigation_3d.rotate_lr(p1__17353_SHARP_,angle_lr),angle_ud);
}));
}
});
quil.middlewares.navigation_3d.space = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(" ");
/**
 * Keyboard handler function which moves nav-3d configuration.
 *   It uses keyboard key from `event` object to determine in which
 *   direction to move.
 */
quil.middlewares.navigation_3d.move = (function quil$middlewares$navigation_3d$move(state,event,step_size){
quil.middlewares.navigation_3d.assert_state_has_navigation(state);

var map__17355 = new cljs.core.Keyword(null,"navigation-3d","navigation-3d",682305301).cljs$core$IFn$_invoke$arity$1(state);
var map__17355__$1 = cljs.core.__destructure_map(map__17355);
var up = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17355__$1,new cljs.core.Keyword(null,"up","up",-269712113));
var straight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17355__$1,new cljs.core.Keyword(null,"straight","straight",-1252567854));
var temp__5802__auto__ = (function (){var pred__17356 = cljs.core._EQ_;
var expr__17357 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event);
if(cljs.core.truth_((pred__17356.cljs$core$IFn$_invoke$arity$2 ? pred__17356.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__17357) : pred__17356.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__17357)))){
return straight;
} else {
if(cljs.core.truth_((pred__17356.cljs$core$IFn$_invoke$arity$2 ? pred__17356.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"s","s",1705939918),expr__17357) : pred__17356.call(null,new cljs.core.Keyword(null,"s","s",1705939918),expr__17357)))){
return quil.middlewares.navigation_3d.v_opposite(straight);
} else {
if(cljs.core.truth_((pred__17356.cljs$core$IFn$_invoke$arity$2 ? pred__17356.cljs$core$IFn$_invoke$arity$2(quil.middlewares.navigation_3d.space,expr__17357) : pred__17356.call(null,quil.middlewares.navigation_3d.space,expr__17357)))){
return quil.middlewares.navigation_3d.v_opposite(up);
} else {
if(cljs.core.truth_((pred__17356.cljs$core$IFn$_invoke$arity$2 ? pred__17356.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"z","z",-789527183),expr__17357) : pred__17356.call(null,new cljs.core.Keyword(null,"z","z",-789527183),expr__17357)))){
return up;
} else {
if(cljs.core.truth_((pred__17356.cljs$core$IFn$_invoke$arity$2 ? pred__17356.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"d","d",1972142424),expr__17357) : pred__17356.call(null,new cljs.core.Keyword(null,"d","d",1972142424),expr__17357)))){
return quil.middlewares.navigation_3d.cross_product(straight,up);
} else {
if(cljs.core.truth_((pred__17356.cljs$core$IFn$_invoke$arity$2 ? pred__17356.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"a","a",-2123407586),expr__17357) : pred__17356.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__17357)))){
return quil.middlewares.navigation_3d.cross_product(up,straight);
} else {
return null;
}
}
}
}
}
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var dir = temp__5802__auto__;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-3d","navigation-3d",682305301),new cljs.core.Keyword(null,"position","position",-2011731912)], null),(function (p1__17354_SHARP_){
return quil.middlewares.navigation_3d.v_plus(p1__17354_SHARP_,quil.middlewares.navigation_3d.v_mult(dir,step_size));
}));
} else {
return state;
}
});
/**
 * Custom 'setup' function which creates initial position
 *   configuration and puts it to the state map.
 */
quil.middlewares.navigation_3d.setup_3d_nav = (function quil$middlewares$navigation_3d$setup_3d_nav(user_setup,user_settings){
var initial_state = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quil.middlewares.navigation_3d.default_position(),cljs.core.select_keys(user_settings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"straight","straight",-1252567854),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"position","position",-2011731912)], null))], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"straight","straight",-1252567854)], null),quil.middlewares.navigation_3d.v_normalize),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113)], null),quil.middlewares.navigation_3d.v_normalize);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3((user_setup.cljs$core$IFn$_invoke$arity$0 ? user_setup.cljs$core$IFn$_invoke$arity$0() : user_setup.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-3d","navigation-3d",682305301)], null),(function (p1__17359_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_state,p1__17359_SHARP_], 0));
}));
});
/**
 * Enables navigation in 3D space. Similar to how it is done in
 *   shooters: WASD navigation, space is go up, z is go down,
 *   drag mouse to look around.
 */
quil.middlewares.navigation_3d.navigation_3d = (function quil$middlewares$navigation_3d$navigation_3d(options){
var user_settings = new cljs.core.Keyword(null,"navigation-3d","navigation-3d",682305301).cljs$core$IFn$_invoke$arity$1(options);
var pixels_in_360 = new cljs.core.Keyword(null,"pixels-in-360","pixels-in-360",1789567298).cljs$core$IFn$_invoke$arity$2(user_settings,(1000));
var step_size = new cljs.core.Keyword(null,"step-size","step-size",1545609922).cljs$core$IFn$_invoke$arity$2(user_settings,(20));
var rotate_on = new cljs.core.Keyword(null,"rotate-on","rotate-on",-1282225937).cljs$core$IFn$_invoke$arity$2(user_settings,new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441));
var draw = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$2(options,(function (state){
return null;
}));
var key_pressed = new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364).cljs$core$IFn$_invoke$arity$2(options,(function (state,_){
return state;
}));
var rotate_on_fn = (function (){var G__17360 = options;
var G__17361 = (function (state,_){
return state;
});
return (rotate_on.cljs$core$IFn$_invoke$arity$2 ? rotate_on.cljs$core$IFn$_invoke$arity$2(G__17360,G__17361) : rotate_on.call(null,G__17360,G__17361));
})();
var setup = new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$2(options,(function (){
return cljs.core.PersistentArrayMap.EMPTY;
}));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"setup","setup",1987730512),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(quil.middlewares.navigation_3d.setup_3d_nav,setup,user_settings),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"draw","draw",1358331674),(function (state){
quil.middlewares.navigation_3d.assert_state_has_navigation(state);

var map__17362_17376 = new cljs.core.Keyword(null,"navigation-3d","navigation-3d",682305301).cljs$core$IFn$_invoke$arity$1(state);
var map__17362_17377__$1 = cljs.core.__destructure_map(map__17362_17376);
var vec__17363_17378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17362_17377__$1,new cljs.core.Keyword(null,"straight","straight",-1252567854));
var c_x_17379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17363_17378,(0),null);
var c_y_17380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17363_17378,(1),null);
var c_z_17381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17363_17378,(2),null);
var vec__17366_17382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17362_17377__$1,new cljs.core.Keyword(null,"up","up",-269712113));
var u_x_17383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17366_17382,(0),null);
var u_y_17384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17366_17382,(1),null);
var u_z_17385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17366_17382,(2),null);
var vec__17369_17386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17362_17377__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var p_x_17387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17369_17386,(0),null);
var p_y_17388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17369_17386,(1),null);
var p_z_17389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17369_17386,(2),null);
quil.core.camera.cljs$core$IFn$_invoke$arity$9(p_x_17387,p_y_17388,p_z_17389,(p_x_17387 + c_x_17379),(p_y_17388 + c_y_17380),(p_z_17389 + c_z_17381),u_x_17383,u_y_17384,u_z_17385);

return (draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(state) : draw.call(null,state));
}),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),(function (state,event){
var G__17372 = quil.middlewares.navigation_3d.move(state,event,step_size);
var G__17373 = event;
return (key_pressed.cljs$core$IFn$_invoke$arity$2 ? key_pressed.cljs$core$IFn$_invoke$arity$2(G__17372,G__17373) : key_pressed.call(null,G__17372,G__17373));
}),rotate_on,(function (state,event){
var G__17374 = quil.middlewares.navigation_3d.rotate(state,event,pixels_in_360);
var G__17375 = event;
return (rotate_on_fn.cljs$core$IFn$_invoke$arity$2 ? rotate_on_fn.cljs$core$IFn$_invoke$arity$2(G__17374,G__17375) : rotate_on_fn.call(null,G__17374,G__17375));
})], 0));
});

//# sourceMappingURL=quil.middlewares.navigation_3d.js.map
