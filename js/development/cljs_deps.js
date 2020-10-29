goog.addDependency("base.js", ['goog'], []);
goog.addDependency("debug/error.js", ['goog.debug.Error'], []);
goog.addDependency("dom/nodetype.js", ['goog.dom.NodeType'], []);
goog.addDependency("asserts/asserts.js", ['goog.asserts', 'goog.asserts.AssertionError'], ['goog.debug.Error', 'goog.dom.NodeType']);
goog.addDependency("dom/asserts.js", ['goog.dom.asserts'], ['goog.asserts']);
goog.addDependency("functions/functions.js", ['goog.functions'], []);
goog.addDependency("array/array.js", ['goog.array'], ['goog.asserts']);
goog.addDependency("dom/htmlelement.js", ['goog.dom.HtmlElement'], []);
goog.addDependency("dom/tagname.js", ['goog.dom.TagName'], ['goog.dom.HtmlElement']);
goog.addDependency("object/object.js", ['goog.object'], []);
goog.addDependency("dom/tags.js", ['goog.dom.tags'], ['goog.object']);
goog.addDependency("html/trustedtypes.js", ['goog.html.trustedtypes'], []);
goog.addDependency("string/typedstring.js", ['goog.string.TypedString'], []);
goog.addDependency("string/const.js", ['goog.string.Const'], ['goog.asserts', 'goog.string.TypedString']);
goog.addDependency("html/safescript.js", ['goog.html.SafeScript'], ['goog.asserts', 'goog.html.trustedtypes', 'goog.string.Const', 'goog.string.TypedString']);
goog.addDependency("fs/url.js", ['goog.fs.url'], []);
goog.addDependency("i18n/bidi.js", ['goog.i18n.bidi', 'goog.i18n.bidi.Dir', 'goog.i18n.bidi.DirectionalString', 'goog.i18n.bidi.Format'], []);
goog.addDependency("html/trustedresourceurl.js", ['goog.html.TrustedResourceUrl'], ['goog.asserts', 'goog.html.trustedtypes', 'goog.i18n.bidi.Dir', 'goog.i18n.bidi.DirectionalString', 'goog.string.Const', 'goog.string.TypedString']);
goog.addDependency("string/internal.js", ['goog.string.internal'], []);
goog.addDependency("html/safeurl.js", ['goog.html.SafeUrl'], ['goog.asserts', 'goog.fs.url', 'goog.html.TrustedResourceUrl', 'goog.i18n.bidi.Dir', 'goog.i18n.bidi.DirectionalString', 'goog.string.Const', 'goog.string.TypedString', 'goog.string.internal']);
goog.addDependency("html/safestyle.js", ['goog.html.SafeStyle'], ['goog.array', 'goog.asserts', 'goog.html.SafeUrl', 'goog.string.Const', 'goog.string.TypedString', 'goog.string.internal']);
goog.addDependency("html/safestylesheet.js", ['goog.html.SafeStyleSheet'], ['goog.array', 'goog.asserts', 'goog.html.SafeStyle', 'goog.object', 'goog.string.Const', 'goog.string.TypedString', 'goog.string.internal']);
goog.addDependency("labs/useragent/util.js", ['goog.labs.userAgent.util'], ['goog.string.internal']);
goog.addDependency("labs/useragent/browser.js", ['goog.labs.userAgent.browser'], ['goog.array', 'goog.labs.userAgent.util', 'goog.object', 'goog.string.internal']);
goog.addDependency("html/safehtml.js", ['goog.html.SafeHtml'], ['goog.array', 'goog.asserts', 'goog.dom.TagName', 'goog.dom.tags', 'goog.html.SafeScript', 'goog.html.SafeStyle', 'goog.html.SafeStyleSheet', 'goog.html.SafeUrl', 'goog.html.TrustedResourceUrl', 'goog.html.trustedtypes', 'goog.i18n.bidi.Dir', 'goog.i18n.bidi.DirectionalString', 'goog.labs.userAgent.browser', 'goog.object', 'goog.string.Const', 'goog.string.TypedString', 'goog.string.internal']);
goog.addDependency("html/uncheckedconversions.js", ['goog.html.uncheckedconversions'], ['goog.asserts', 'goog.html.SafeHtml', 'goog.html.SafeScript', 'goog.html.SafeStyle', 'goog.html.SafeStyleSheet', 'goog.html.SafeUrl', 'goog.html.TrustedResourceUrl', 'goog.string.Const', 'goog.string.internal']);
goog.addDependency("dom/safe.js", ['goog.dom.safe', 'goog.dom.safe.InsertAdjacentHtmlPosition'], ['goog.asserts', 'goog.dom.asserts', 'goog.functions', 'goog.html.SafeHtml', 'goog.html.SafeScript', 'goog.html.SafeStyle', 'goog.html.SafeUrl', 'goog.html.TrustedResourceUrl', 'goog.html.uncheckedconversions', 'goog.string.Const', 'goog.string.internal']);
goog.addDependency("string/string.js", ['goog.string', 'goog.string.Unicode'], ['goog.dom.safe', 'goog.html.uncheckedconversions', 'goog.string.Const', 'goog.string.internal']);
goog.addDependency("structs/structs.js", ['goog.structs'], ['goog.array', 'goog.object']);
goog.addDependency("math/math.js", ['goog.math'], ['goog.array', 'goog.asserts']);
goog.addDependency("iter/iter.js", ['goog.iter', 'goog.iter.Iterable', 'goog.iter.Iterator', 'goog.iter.StopIteration'], ['goog.array', 'goog.asserts', 'goog.functions', 'goog.math']);
goog.addDependency("structs/map.js", ['goog.structs.Map'], ['goog.iter.Iterator', 'goog.iter.StopIteration']);
goog.addDependency("uri/utils.js", ['goog.uri.utils', 'goog.uri.utils.ComponentIndex', 'goog.uri.utils.QueryArray', 'goog.uri.utils.QueryValue', 'goog.uri.utils.StandardQueryParam'], ['goog.array', 'goog.asserts', 'goog.string']);
goog.addDependency("uri/uri.js", ['goog.Uri', 'goog.Uri.QueryData'], ['goog.array', 'goog.asserts', 'goog.string', 'goog.structs', 'goog.structs.Map', 'goog.uri.utils', 'goog.uri.utils.ComponentIndex', 'goog.uri.utils.StandardQueryParam']);
goog.addDependency("reflect/reflect.js", ['goog.reflect'], []);
goog.addDependency("math/integer.js", ['goog.math.Integer'], ['goog.reflect']);
goog.addDependency("string/stringbuffer.js", ['goog.string.StringBuffer'], []);
goog.addDependency("math/long.js", ['goog.math.Long'], ['goog.asserts', 'goog.reflect']);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.Uri', 'goog.object', 'goog.math.Integer', 'goog.string.StringBuffer', 'goog.array', 'goog.math.Long']);
goog.addDependency("../process/env.js", ['process.env'], ['cljs.core']);
goog.addDependency("../cljsjs/p5/development/p5.inc.js", ['cljsjs.p5'], [], {'foreign-lib': true});
goog.addDependency("labs/useragent/engine.js", ['goog.labs.userAgent.engine'], ['goog.array', 'goog.labs.userAgent.util', 'goog.string']);
goog.addDependency("labs/useragent/platform.js", ['goog.labs.userAgent.platform'], ['goog.labs.userAgent.util', 'goog.string']);
goog.addDependency("useragent/useragent.js", ['goog.userAgent'], ['goog.labs.userAgent.browser', 'goog.labs.userAgent.engine', 'goog.labs.userAgent.platform', 'goog.labs.userAgent.util', 'goog.reflect', 'goog.string']);
goog.addDependency("dom/browserfeature.js", ['goog.dom.BrowserFeature'], ['goog.userAgent']);
goog.addDependency("math/coordinate.js", ['goog.math.Coordinate'], ['goog.math']);
goog.addDependency("math/size.js", ['goog.math.Size'], []);
goog.addDependency("dom/dom.js", ['goog.dom', 'goog.dom.Appendable', 'goog.dom.DomHelper'], ['goog.array', 'goog.asserts', 'goog.dom.BrowserFeature', 'goog.dom.NodeType', 'goog.dom.TagName', 'goog.dom.safe', 'goog.html.SafeHtml', 'goog.html.uncheckedconversions', 'goog.math.Coordinate', 'goog.math.Size', 'goog.object', 'goog.string', 'goog.string.Unicode', 'goog.userAgent']);
goog.addDependency("../quil/middlewares/deprecated_options.js", ['quil.middlewares.deprecated_options'], ['cljs.core']);
goog.addDependency("events/browserfeature.js", ['goog.events.BrowserFeature'], ['goog.userAgent']);
goog.addDependency("events/eventtype.js", ['goog.events.EventType', 'goog.events.MouseAsMouseEventType', 'goog.events.MouseEvents', 'goog.events.PointerAsMouseEventType', 'goog.events.PointerAsTouchEventType', 'goog.events.PointerFallbackEventType', 'goog.events.PointerTouchFallbackEventType'], ['goog.events.BrowserFeature', 'goog.userAgent']);
goog.addDependency("dom/vendor.js", ['goog.dom.vendor'], ['goog.string', 'goog.userAgent']);
goog.addDependency("math/box.js", ['goog.math.Box'], ['goog.asserts', 'goog.math.Coordinate']);
goog.addDependency("math/irect.js", ['goog.math.IRect'], []);
goog.addDependency("math/rect.js", ['goog.math.Rect'], ['goog.asserts', 'goog.math.Box', 'goog.math.Coordinate', 'goog.math.IRect', 'goog.math.Size']);
goog.addDependency("style/style.js", ['goog.style'], ['goog.array', 'goog.asserts', 'goog.dom', 'goog.dom.NodeType', 'goog.dom.TagName', 'goog.dom.vendor', 'goog.html.SafeStyleSheet', 'goog.math.Box', 'goog.math.Coordinate', 'goog.math.Rect', 'goog.math.Size', 'goog.object', 'goog.reflect', 'goog.string', 'goog.userAgent']);
goog.addDependency("debug/entrypointregistry.js", ['goog.debug.EntryPointMonitor', 'goog.debug.entryPointRegistry'], ['goog.asserts']);
goog.addDependency("debug/errorcontext.js", ['goog.debug.errorcontext'], []);
goog.addDependency("debug/debug.js", ['goog.debug'], ['goog.array', 'goog.debug.errorcontext', 'goog.userAgent']);
goog.addDependency("disposable/idisposable.js", ['goog.disposable.IDisposable'], []);
goog.addDependency("disposable/disposable.js", ['goog.Disposable', 'goog.dispose', 'goog.disposeAll'], ['goog.disposable.IDisposable']);
goog.addDependency("events/eventid.js", ['goog.events.EventId'], []);
goog.addDependency("events/event.js", ['goog.events.Event', 'goog.events.EventLike'], ['goog.Disposable', 'goog.events.EventId']);
goog.addDependency("events/browserevent.js", ['goog.events.BrowserEvent', 'goog.events.BrowserEvent.MouseButton', 'goog.events.BrowserEvent.PointerType'], ['goog.debug', 'goog.events.BrowserFeature', 'goog.events.Event', 'goog.events.EventType', 'goog.reflect', 'goog.userAgent']);
goog.addDependency("events/listenable.js", ['goog.events.Listenable', 'goog.events.ListenableKey'], ['goog.events.EventId']);
goog.addDependency("events/listener.js", ['goog.events.Listener'], ['goog.events.ListenableKey']);
goog.addDependency("events/listenermap.js", ['goog.events.ListenerMap'], ['goog.array', 'goog.events.Listener', 'goog.object']);
goog.addDependency("events/events.js", ['goog.events', 'goog.events.CaptureSimulationMode', 'goog.events.Key', 'goog.events.ListenableType'], ['goog.asserts', 'goog.debug.entryPointRegistry', 'goog.events.BrowserEvent', 'goog.events.BrowserFeature', 'goog.events.Listenable', 'goog.events.ListenerMap']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../quil/util.js", ['quil.util'], ['cljs.core', 'clojure.string']);
goog.addDependency("../quil/sketch.js", ['quil.sketch'], ['goog.dom', 'cljs.core', 'quil.middlewares.deprecated_options', 'goog.object', 'goog.events.EventType', 'goog.style', 'goog.events', 'quil.util']);
goog.addDependency("../quil/core.js", ['quil.core'], ['cljsjs.p5', 'quil.sketch', 'cljs.core', 'clojure.string', 'quil.util']);
goog.addDependency("../quil/middlewares/navigation_3d.js", ['quil.middlewares.navigation_3d'], ['cljs.core', 'quil.core']);
goog.addDependency("../quil/middlewares/navigation_2d.js", ['quil.middlewares.navigation_2d'], ['cljs.core', 'quil.core']);
goog.addDependency("../quil/middlewares/fun_mode.js", ['quil.middlewares.fun_mode'], ['cljs.core', 'quil.core']);
goog.addDependency("../quil/middleware.js", ['quil.middleware'], ['cljs.core', 'quil.middlewares.navigation_3d', 'quil.middlewares.navigation_2d', 'quil.middlewares.fun_mode']);
goog.addDependency("../existcafe/core.js", ['existcafe.core'], ['cljs.core', 'quil.core', 'quil.middleware']);
