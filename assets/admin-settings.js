/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(","))
    t[n] = 1;
  return (n) => n in t;
}
const B = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Pt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], X = () => {
}, ws = () => !1, Ut = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ln = (e) => e.startsWith("onUpdate:"), q = Object.assign, co = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Mr = Object.prototype.hasOwnProperty, j = (e, t) => Mr.call(e, t), C = Array.isArray, gt = (e) => En(e) === "[object Map]", Fr = (e) => En(e) === "[object Set]", P = (e) => typeof e == "function", J = (e) => typeof e == "string", Et = (e) => typeof e == "symbol", k = (e) => e !== null && typeof e == "object", fo = (e) => (k(e) || P(e)) && P(e.then) && P(e.catch), Rr = Object.prototype.toString, En = (e) => Rr.call(e), uo = (e) => En(e).slice(8, -1), jr = (e) => En(e) === "[object Object]", ao = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, $t = /* @__PURE__ */ Ke(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Lr = /* @__PURE__ */ Ke(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Nn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Hr = /-\w/g, be = Nn(
  (e) => e.replace(Hr, (t) => t.slice(1).toUpperCase())
), Ur = /\B([A-Z])/g, et = Nn(
  (e) => e.replace(Ur, "-$1").toLowerCase()
), bn = Nn((e) => e.charAt(0).toUpperCase() + e.slice(1)), st = Nn(
  (e) => e ? `on${bn(e)}` : ""
), Qe = (e, t) => !Object.is(e, t), Dt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, cn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Wr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ho;
const Wt = () => Ho || (Ho = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
function po(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = J(o) ? Gr(o) : po(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (J(e) || k(e))
    return e;
}
const Br = /;(?![^(]*\))/g, Kr = /:([^]+)/, kr = /\/\*[^]*?\*\//g;
function Gr(e) {
  const t = {};
  return e.replace(kr, "").split(Br).forEach((n) => {
    if (n) {
      const o = n.split(Kr);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function ho(e) {
  let t = "";
  if (J(e))
    t = e;
  else if (C(e))
    for (let n = 0; n < e.length; n++) {
      const o = ho(e[n]);
      o && (t += o + " ");
    }
  else if (k(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const qr = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Jr = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Yr = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", zr = /* @__PURE__ */ Ke(qr), Xr = /* @__PURE__ */ Ke(Jr), Zr = /* @__PURE__ */ Ke(Yr), Qr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ei = /* @__PURE__ */ Ke(Qr);
function xs(e) {
  return !!e || e === "";
}
/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function De(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ue;
class ti {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ue, !t && ue && (this.index = (ue.scopes || (ue.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ue;
      try {
        return ue = this, t();
      } finally {
        ue = n;
      }
    } else
      process.env.NODE_ENV !== "production" && De("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ue, ue = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ue = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ni() {
  return ue;
}
let U;
const In = /* @__PURE__ */ new WeakSet();
class Vs {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ue && ue.active && ue.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, In.has(this) && (In.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ss(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Uo(this), Cs(this);
    const t = U, n = ye;
    U = this, ye = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && U !== this && De(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Ps(this), U = t, ye = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        _o(t);
      this.deps = this.depsTail = void 0, Uo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? In.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    kn(this) && this.run();
  }
  get dirty() {
    return kn(this);
  }
}
let Ts = 0, At, It;
function Ss(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = It, It = e;
    return;
  }
  e.next = At, At = e;
}
function go() {
  Ts++;
}
function mo() {
  if (--Ts > 0)
    return;
  if (It) {
    let t = It;
    for (It = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; At; ) {
    let t = At;
    for (At = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e)
    throw e;
}
function Cs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ps(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === n && (n = s), _o(o), oi(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = t, e.depsTail = n;
}
function kn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && ($s(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function $s(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Rt) || (e.globalVersion = Rt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !kn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = U, o = ye;
  U = e, ye = !0;
  try {
    Cs(e);
    const s = e.fn(e._value);
    (t.version === 0 || Qe(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    U = n, ye = o, Ps(e), e.flags &= -3;
  }
}
function _o(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = s), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      _o(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function oi(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ye = !0;
const As = [];
function we() {
  As.push(ye), ye = !1;
}
function xe() {
  const e = As.pop();
  ye = e === void 0 ? !0 : e;
}
function Uo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = U;
    U = void 0;
    try {
      t();
    } finally {
      U = n;
    }
  }
}
let Rt = 0;
class si {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class vo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!U || !ye || U === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== U)
      n = this.activeLink = new si(U, this), U.deps ? (n.prevDep = U.depsTail, U.depsTail.nextDep = n, U.depsTail = n) : U.deps = U.depsTail = n, Is(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = U.depsTail, n.nextDep = void 0, U.depsTail.nextDep = n, U.depsTail = n, U.deps === n && (U.deps = o);
    }
    return process.env.NODE_ENV !== "production" && U.onTrack && U.onTrack(
      q(
        {
          effect: U
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Rt++, this.notify(t);
  }
  notify(t) {
    go();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            q(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      mo();
    }
  }
}
function Is(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Is(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Gn = /* @__PURE__ */ new WeakMap(), it = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), qn = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), jt = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function z(e, t, n) {
  if (ye && U) {
    let o = Gn.get(e);
    o || Gn.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || (o.set(n, s = new vo()), s.map = o, s.key = n), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t,
      key: n
    }) : s.track();
  }
}
function $e(e, t, n, o, s, r) {
  const i = Gn.get(e);
  if (!i) {
    Rt++;
    return;
  }
  const c = (f) => {
    f && (process.env.NODE_ENV !== "production" ? f.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: s,
      oldTarget: r
    }) : f.trigger());
  };
  if (go(), t === "clear")
    i.forEach(c);
  else {
    const f = C(e), d = f && ao(n);
    if (f && n === "length") {
      const p = Number(o);
      i.forEach((a, g) => {
        (g === "length" || g === jt || !Et(g) && g >= p) && c(a);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && c(i.get(n)), d && c(i.get(jt)), t) {
        case "add":
          f ? d && c(i.get("length")) : (c(i.get(it)), gt(e) && c(i.get(qn)));
          break;
        case "delete":
          f || (c(i.get(it)), gt(e) && c(i.get(qn)));
          break;
        case "set":
          gt(e) && c(i.get(it));
          break;
      }
  }
  mo();
}
function dt(e) {
  const t = I(e);
  return t === e ? t : (z(t, "iterate", jt), ae(e) ? t : t.map(re));
}
function Eo(e) {
  return z(e = I(e), "iterate", jt), e;
}
const ri = {
  __proto__: null,
  [Symbol.iterator]() {
    return Mn(this, Symbol.iterator, re);
  },
  concat(...e) {
    return dt(this).concat(
      ...e.map((t) => C(t) ? dt(t) : t)
    );
  },
  entries() {
    return Mn(this, "entries", (e) => (e[1] = re(e[1]), e));
  },
  every(e, t) {
    return Re(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Re(this, "filter", e, t, (n) => n.map(re), arguments);
  },
  find(e, t) {
    return Re(this, "find", e, t, re, arguments);
  },
  findIndex(e, t) {
    return Re(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Re(this, "findLast", e, t, re, arguments);
  },
  findLastIndex(e, t) {
    return Re(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Re(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Fn(this, "includes", e);
  },
  indexOf(...e) {
    return Fn(this, "indexOf", e);
  },
  join(e) {
    return dt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Fn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Re(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return wt(this, "pop");
  },
  push(...e) {
    return wt(this, "push", e);
  },
  reduce(e, ...t) {
    return Wo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Wo(this, "reduceRight", e, t);
  },
  shift() {
    return wt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Re(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return wt(this, "splice", e);
  },
  toReversed() {
    return dt(this).toReversed();
  },
  toSorted(e) {
    return dt(this).toSorted(e);
  },
  toSpliced(...e) {
    return dt(this).toSpliced(...e);
  },
  unshift(...e) {
    return wt(this, "unshift", e);
  },
  values() {
    return Mn(this, "values", re);
  }
};
function Mn(e, t, n) {
  const o = Eo(e), s = o[t]();
  return o !== e && !ae(e) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.done || (r.value = n(r.value)), r;
  }), s;
}
const ii = Array.prototype;
function Re(e, t, n, o, s, r) {
  const i = Eo(e), c = i !== e && !ae(e), f = i[t];
  if (f !== ii[t]) {
    const a = f.apply(e, r);
    return c ? re(a) : a;
  }
  let d = n;
  i !== e && (c ? d = function(a, g) {
    return n.call(this, re(a), g, e);
  } : n.length > 2 && (d = function(a, g) {
    return n.call(this, a, g, e);
  }));
  const p = f.call(i, d, o);
  return c && s ? s(p) : p;
}
function Wo(e, t, n, o) {
  const s = Eo(e);
  let r = n;
  return s !== e && (ae(e) ? n.length > 3 && (r = function(i, c, f) {
    return n.call(this, i, c, f, e);
  }) : r = function(i, c, f) {
    return n.call(this, i, re(c), f, e);
  }), s[t](r, ...o);
}
function Fn(e, t, n) {
  const o = I(e);
  z(o, "iterate", jt);
  const s = o[t](...n);
  return (s === -1 || s === !1) && fn(n[0]) ? (n[0] = I(n[0]), o[t](...n)) : s;
}
function wt(e, t, n = []) {
  we(), go();
  const o = I(e)[t].apply(e, n);
  return mo(), xe(), o;
}
const li = /* @__PURE__ */ Ke("__proto__,__v_isRef,__isVue"), Ms = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Et)
);
function ci(e) {
  Et(e) || (e = String(e));
  const t = I(this);
  return z(t, "has", e), t.hasOwnProperty(e);
}
class Fs {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip")
      return t.__v_skip;
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (s ? r ? Ws : Us : r ? Hs : Ls).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = C(t);
    if (!s) {
      let f;
      if (i && (f = ri[n]))
        return f;
      if (n === "hasOwnProperty")
        return ci;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Y(t) ? t : o
    );
    if ((Et(n) ? Ms.has(n) : li(n)) || (s || z(t, "get", n), r))
      return c;
    if (Y(c)) {
      const f = i && ao(n) ? c : c.value;
      return s && k(f) ? Yn(f) : f;
    }
    return k(c) ? s ? Yn(c) : No(c) : c;
  }
}
class Rs extends Fs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const f = Be(r);
      if (!ae(o) && !Be(o) && (r = I(r), o = I(o)), !C(t) && Y(r) && !Y(o))
        return f ? (process.env.NODE_ENV !== "production" && De(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (r.value = o, !0);
    }
    const i = C(t) && ao(n) ? Number(n) < t.length : j(t, n), c = Reflect.set(
      t,
      n,
      o,
      Y(t) ? t : s
    );
    return t === I(s) && (i ? Qe(o, r) && $e(t, "set", n, o, r) : $e(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = j(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && $e(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Et(n) || !Ms.has(n)) && z(t, "has", n), o;
  }
  ownKeys(t) {
    return z(
      t,
      "iterate",
      C(t) ? "length" : it
    ), Reflect.ownKeys(t);
  }
}
class js extends Fs {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && De(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && De(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const fi = /* @__PURE__ */ new Rs(), ui = /* @__PURE__ */ new js(), ai = /* @__PURE__ */ new Rs(!0), pi = /* @__PURE__ */ new js(!0), Jn = (e) => e, Yt = (e) => Reflect.getPrototypeOf(e);
function di(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = I(s), i = gt(r), c = e === "entries" || e === Symbol.iterator && i, f = e === "keys" && i, d = s[e](...o), p = n ? Jn : t ? zn : re;
    return !t && z(
      r,
      "iterate",
      f ? qn : it
    ), {
      // iterator protocol
      next() {
        const { value: a, done: g } = d.next();
        return g ? { value: a, done: g } : {
          value: c ? [p(a[0]), p(a[1])] : p(a),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function zt(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      De(
        `${bn(e)} operation ${n}failed: target is readonly.`,
        I(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function hi(e, t) {
  const n = {
    get(s) {
      const r = this.__v_raw, i = I(r), c = I(s);
      e || (Qe(s, c) && z(i, "get", s), z(i, "get", c));
      const { has: f } = Yt(i), d = t ? Jn : e ? zn : re;
      if (f.call(i, s))
        return d(r.get(s));
      if (f.call(i, c))
        return d(r.get(c));
      r !== i && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && z(I(s), "iterate", it), s.size;
    },
    has(s) {
      const r = this.__v_raw, i = I(r), c = I(s);
      return e || (Qe(s, c) && z(i, "has", s), z(i, "has", c)), s === c ? r.has(s) : r.has(s) || r.has(c);
    },
    forEach(s, r) {
      const i = this, c = i.__v_raw, f = I(c), d = t ? Jn : e ? zn : re;
      return !e && z(f, "iterate", it), c.forEach((p, a) => s.call(r, d(p), d(a), i));
    }
  };
  return q(
    n,
    e ? {
      add: zt("add"),
      set: zt("set"),
      delete: zt("delete"),
      clear: zt("clear")
    } : {
      add(s) {
        !t && !ae(s) && !Be(s) && (s = I(s));
        const r = I(this);
        return Yt(r).has.call(r, s) || (r.add(s), $e(r, "add", s, s)), this;
      },
      set(s, r) {
        !t && !ae(r) && !Be(r) && (r = I(r));
        const i = I(this), { has: c, get: f } = Yt(i);
        let d = c.call(i, s);
        d ? process.env.NODE_ENV !== "production" && Bo(i, c, s) : (s = I(s), d = c.call(i, s));
        const p = f.call(i, s);
        return i.set(s, r), d ? Qe(r, p) && $e(i, "set", s, r, p) : $e(i, "add", s, r), this;
      },
      delete(s) {
        const r = I(this), { has: i, get: c } = Yt(r);
        let f = i.call(r, s);
        f ? process.env.NODE_ENV !== "production" && Bo(r, i, s) : (s = I(s), f = i.call(r, s));
        const d = c ? c.call(r, s) : void 0, p = r.delete(s);
        return f && $e(r, "delete", s, void 0, d), p;
      },
      clear() {
        const s = I(this), r = s.size !== 0, i = process.env.NODE_ENV !== "production" ? gt(s) ? new Map(s) : new Set(s) : void 0, c = s.clear();
        return r && $e(
          s,
          "clear",
          void 0,
          void 0,
          i
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = di(s, e, t);
  }), n;
}
function yn(e, t) {
  const n = hi(e, t);
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    j(n, s) && s in o ? n : o,
    s,
    r
  );
}
const gi = {
  get: /* @__PURE__ */ yn(!1, !1)
}, mi = {
  get: /* @__PURE__ */ yn(!1, !0)
}, _i = {
  get: /* @__PURE__ */ yn(!0, !1)
}, vi = {
  get: /* @__PURE__ */ yn(!0, !0)
};
function Bo(e, t, n) {
  const o = I(n);
  if (o !== n && t.call(e, o)) {
    const s = uo(e);
    De(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ls = /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ new WeakMap(), Us = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap();
function Ei(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ni(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ei(uo(e));
}
function No(e) {
  return Be(e) ? e : On(
    e,
    !1,
    fi,
    gi,
    Ls
  );
}
function bi(e) {
  return On(
    e,
    !1,
    ai,
    mi,
    Hs
  );
}
function Yn(e) {
  return On(
    e,
    !0,
    ui,
    _i,
    Us
  );
}
function Ae(e) {
  return On(
    e,
    !0,
    pi,
    vi,
    Ws
  );
}
function On(e, t, n, o, s) {
  if (!k(e))
    return process.env.NODE_ENV !== "production" && De(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Ni(e);
  if (r === 0)
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const c = new Proxy(
    e,
    r === 2 ? o : n
  );
  return s.set(e, c), c;
}
function mt(e) {
  return Be(e) ? mt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Be(e) {
  return !!(e && e.__v_isReadonly);
}
function ae(e) {
  return !!(e && e.__v_isShallow);
}
function fn(e) {
  return e ? !!e.__v_raw : !1;
}
function I(e) {
  const t = e && e.__v_raw;
  return t ? I(t) : e;
}
function yi(e) {
  return !j(e, "__v_skip") && Object.isExtensible(e) && cn(e, "__v_skip", !0), e;
}
const re = (e) => k(e) ? No(e) : e, zn = (e) => k(e) ? Yn(e) : e;
function Y(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function xt(e) {
  return Oi(e, !1);
}
function Oi(e, t) {
  return Y(e) ? e : new Di(e, t);
}
class Di {
  constructor(t, n) {
    this.dep = new vo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : I(t), this._value = n ? t : re(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || ae(t) || Be(t);
    t = o ? t : I(t), Qe(t, n) && (this._rawValue = t, this._value = o ? t : re(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function wi(e) {
  return Y(e) ? e.value : e;
}
const xi = {
  get: (e, t, n) => t === "__v_raw" ? e : wi(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return Y(s) && !Y(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Bs(e) {
  return mt(e) ? e : new Proxy(e, xi);
}
class Vi {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new vo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Rt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    U !== this)
      return Ss(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return $s(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && De("Write operation failed: computed value is readonly");
  }
}
function Ti(e, t, n = !1) {
  let o, s;
  P(e) ? o = e : (o = e.get, s = e.set);
  const r = new Vi(o, s, n);
  return process.env.NODE_ENV !== "production" && t && !n && (r.onTrack = t.onTrack, r.onTrigger = t.onTrigger), r;
}
const Xt = {}, un = /* @__PURE__ */ new WeakMap();
let rt;
function Si(e, t = !1, n = rt) {
  if (n) {
    let o = un.get(n);
    o || un.set(n, o = []), o.push(e);
  } else
    process.env.NODE_ENV !== "production" && !t && De(
      "onWatcherCleanup() was called when there was no active watcher to associate with."
    );
}
function Ci(e, t, n = B) {
  const { immediate: o, deep: s, once: r, scheduler: i, augmentJob: c, call: f } = n, d = (T) => {
    (n.onWarn || De)(
      "Invalid watch source: ",
      T,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (T) => s ? T : ae(T) || s === !1 || s === 0 ? Xe(T, 1) : Xe(T);
  let a, g, D, $, V = !1, Z = !1;
  if (Y(e) ? (g = () => e.value, V = ae(e)) : mt(e) ? (g = () => p(e), V = !0) : C(e) ? (Z = !0, V = e.some((T) => mt(T) || ae(T)), g = () => e.map((T) => {
    if (Y(T))
      return T.value;
    if (mt(T))
      return p(T);
    if (P(T))
      return f ? f(T, 2) : T();
    process.env.NODE_ENV !== "production" && d(T);
  })) : P(e) ? t ? g = f ? () => f(e, 2) : e : g = () => {
    if (D) {
      we();
      try {
        D();
      } finally {
        xe();
      }
    }
    const T = rt;
    rt = a;
    try {
      return f ? f(e, 3, [$]) : e($);
    } finally {
      rt = T;
    }
  } : (g = X, process.env.NODE_ENV !== "production" && d(e)), t && s) {
    const T = g, Q = s === !0 ? 1 / 0 : s;
    g = () => Xe(T(), Q);
  }
  const G = ni(), H = () => {
    a.stop(), G && G.active && co(G.effects, a);
  };
  if (r && t) {
    const T = t;
    t = (...Q) => {
      T(...Q), H();
    };
  }
  let L = Z ? new Array(e.length).fill(Xt) : Xt;
  const pe = (T) => {
    if (!(!(a.flags & 1) || !a.dirty && !T))
      if (t) {
        const Q = a.run();
        if (s || V || (Z ? Q.some((me, te) => Qe(me, L[te])) : Qe(Q, L))) {
          D && D();
          const me = rt;
          rt = a;
          try {
            const te = [
              Q,
              // pass undefined as the old value when it's changed for the first time
              L === Xt ? void 0 : Z && L[0] === Xt ? [] : L,
              $
            ];
            L = Q, f ? f(t, 3, te) : (
              // @ts-expect-error
              t(...te)
            );
          } finally {
            rt = me;
          }
        }
      } else
        a.run();
  };
  return c && c(pe), a = new Vs(g), a.scheduler = i ? () => i(pe, !1) : pe, $ = (T) => Si(T, !1, a), D = a.onStop = () => {
    const T = un.get(a);
    if (T) {
      if (f)
        f(T, 4);
      else
        for (const Q of T)
          Q();
      un.delete(a);
    }
  }, process.env.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? o ? pe(!0) : L = a.run() : i ? i(pe.bind(null, !0), !0) : a.run(), H.pause = a.pause.bind(a), H.resume = a.resume.bind(a), H.stop = H, H;
}
function Xe(e, t = 1 / 0, n) {
  if (t <= 0 || !k(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, Y(e))
    Xe(e.value, t, n);
  else if (C(e))
    for (let o = 0; o < e.length; o++)
      Xe(e[o], t, n);
  else if (Fr(e) || gt(e))
    e.forEach((o) => {
      Xe(o, t, n);
    });
  else if (jr(e)) {
    for (const o in e)
      Xe(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && Xe(e[o], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const lt = [];
function Zt(e) {
  lt.push(e);
}
function Qt() {
  lt.pop();
}
let Rn = !1;
function y(e, ...t) {
  if (Rn)
    return;
  Rn = !0, we();
  const n = lt.length ? lt[lt.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Pi();
  if (o)
    Nt(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var i, c;
          return (c = (i = r.toString) == null ? void 0 : i.call(r)) != null ? c : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${Tn(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...$i(s)), console.warn(...r);
  }
  xe(), Rn = !1;
}
function Pi() {
  let e = lt[lt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function $i(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Ai(n));
  }), t;
}
function Ai({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Tn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Ii(e.props), r] : [s + r];
}
function Ii(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Ks(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ks(e, t, n) {
  return J(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Y(t) ? (t = Ks(e, I(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : P(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = I(t), n ? t : [`${e}=`, t]);
}
const bo = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Nt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    Bt(s, t, n);
  }
}
function Me(e, t, n, o) {
  if (P(e)) {
    const s = Nt(e, t, n, o);
    return s && fo(s) && s.catch((r) => {
      Bt(r, t, n);
    }), s;
  }
  if (C(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(Me(e[r], t, n, o));
    return s;
  } else
    process.env.NODE_ENV !== "production" && y(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function Bt(e, t, n, o = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || B;
  if (t) {
    let c = t.parent;
    const f = t.proxy, d = process.env.NODE_ENV !== "production" ? bo[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const p = c.ec;
      if (p) {
        for (let a = 0; a < p.length; a++)
          if (p[a](e, f, d) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      we(), Nt(r, null, 10, [
        e,
        f,
        d
      ]), xe();
      return;
    }
  }
  Mi(e, n, s, o, i);
}
function Mi(e, t, n, o = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = bo[t];
    if (n && Zt(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Qt(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const ie = [];
let Ce = -1;
const _t = [];
let Ye = null, ht = 0;
const ks = /* @__PURE__ */ Promise.resolve();
let an = null;
const Fi = 100;
function Ri(e) {
  const t = an || ks;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ji(e) {
  let t = Ce + 1, n = ie.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = ie[o], r = Lt(s);
    r < e || r === e && s.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Dn(e) {
  if (!(e.flags & 1)) {
    const t = Lt(e), n = ie[ie.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Lt(n) ? ie.push(e) : ie.splice(ji(t), 0, e), e.flags |= 1, Gs();
  }
}
function Gs() {
  an || (an = ks.then(Ys));
}
function qs(e) {
  C(e) ? _t.push(...e) : Ye && e.id === -1 ? Ye.splice(ht + 1, 0, e) : e.flags & 1 || (_t.push(e), e.flags |= 1), Gs();
}
function Ko(e, t, n = Ce + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ie.length; n++) {
    const o = ie[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && yo(t, o))
        continue;
      ie.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Js(e) {
  if (_t.length) {
    const t = [...new Set(_t)].sort(
      (n, o) => Lt(n) - Lt(o)
    );
    if (_t.length = 0, Ye) {
      Ye.push(...t);
      return;
    }
    for (Ye = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ht = 0; ht < Ye.length; ht++) {
      const n = Ye[ht];
      process.env.NODE_ENV !== "production" && yo(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Ye = null, ht = 0;
  }
}
const Lt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ys(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => yo(e, n) : X;
  try {
    for (Ce = 0; Ce < ie.length; Ce++) {
      const n = ie[Ce];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Nt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Ce < ie.length; Ce++) {
      const n = ie[Ce];
      n && (n.flags &= -2);
    }
    Ce = -1, ie.length = 0, Js(e), an = null, (ie.length || _t.length) && Ys(e);
  }
}
function yo(e, t) {
  const n = e.get(t) || 0;
  if (n > Fi) {
    const o = t.i, s = o && Sr(o.type);
    return Bt(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Ie = !1;
const en = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Wt().__VUE_HMR_RUNTIME__ = {
  createRecord: jn(zs),
  rerender: jn(Ui),
  reload: jn(Wi)
});
const ut = /* @__PURE__ */ new Map();
function Li(e) {
  const t = e.type.__hmrId;
  let n = ut.get(t);
  n || (zs(t, e.type), n = ut.get(t)), n.instances.add(e);
}
function Hi(e) {
  ut.get(e.type.__hmrId).instances.delete(e);
}
function zs(e, t) {
  return ut.has(e) ? !1 : (ut.set(e, {
    initialDef: pn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function pn(e) {
  return Cr(e) ? e.__vccOpts : e;
}
function Ui(e, t) {
  const n = ut.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, pn(o.type).render = t), o.renderCache = [], Ie = !0, o.job.flags & 8 || o.update(), Ie = !1;
  }));
}
function Wi(e, t) {
  const n = ut.get(e);
  if (!n)
    return;
  t = pn(t), ko(n.initialDef, t);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const r = o[s], i = pn(r.type);
    let c = en.get(i);
    c || (i !== n.initialDef && ko(i, t), en.set(i, c = /* @__PURE__ */ new Set())), c.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (c.add(r), r.ceReload(t.styles), c.delete(r)) : r.parent ? Dn(() => {
      r.job.flags & 8 || (Ie = !0, r.parent.update(), Ie = !1, c.delete(r));
    }) : r.appContext.reload ? r.appContext.reload() : typeof window != "undefined" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  qs(() => {
    en.clear();
  });
}
function ko(e, t) {
  q(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function jn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ne, St = [], Xn = !1;
function Kt(e, ...t) {
  Ne ? Ne.emit(e, ...t) : Xn || St.push({ event: e, args: t });
}
function Oo(e, t) {
  var n, o;
  Ne = e, Ne ? (Ne.enabled = !0, St.forEach(({ event: s, args: r }) => Ne.emit(s, ...r)), St = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window != "undefined" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Oo(r, t);
  }), setTimeout(() => {
    Ne || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Xn = !0, St = []);
  }, 3e3)) : (Xn = !0, St = []);
}
function Bi(e, t) {
  Kt("app:init", e, t, {
    Fragment: Pe,
    Text: kt,
    Comment: Oe,
    Static: on
  });
}
function Ki(e) {
  Kt("app:unmount", e);
}
const ki = /* @__PURE__ */ Do(
  "component:added"
  /* COMPONENT_ADDED */
), Xs = /* @__PURE__ */ Do(
  "component:updated"
  /* COMPONENT_UPDATED */
), Gi = /* @__PURE__ */ Do(
  "component:removed"
  /* COMPONENT_REMOVED */
), qi = (e) => {
  Ne && typeof Ne.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ne.cleanupBuffer(e) && Gi(e);
};
// @__NO_SIDE_EFFECTS__
function Do(e) {
  return (t) => {
    Kt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Ji = /* @__PURE__ */ Zs(
  "perf:start"
  /* PERFORMANCE_START */
), Yi = /* @__PURE__ */ Zs(
  "perf:end"
  /* PERFORMANCE_END */
);
function Zs(e) {
  return (t, n, o) => {
    Kt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function zi(e, t, n) {
  Kt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let ge = null, Qs = null;
function dn(e) {
  const t = ge;
  return ge = e, Qs = e && e.type.__scopeId || null, t;
}
function Xi(e, t = ge, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && ss(-1);
    const r = dn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      dn(r), o._d && ss(1);
    }
    return process.env.NODE_ENV !== "production" && Xs(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function er(e) {
  Lr(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function nt(e, t, n, o) {
  const s = e.dirs, r = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    r && (c.oldValue = r[i].value);
    let f = c.dir[o];
    f && (we(), Me(f, n, 8, [
      e.el,
      c,
      e,
      t
    ]), xe());
  }
}
const Zi = Symbol("_vte"), Qi = (e) => e.__isTeleport, el = Symbol("_leaveCb");
function wo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, wo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function tr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Go = /* @__PURE__ */ new WeakSet(), hn = /* @__PURE__ */ new WeakMap();
function Mt(e, t, n, o, s = !1) {
  if (C(e)) {
    e.forEach(
      (V, Z) => Mt(
        V,
        t && (C(t) ? t[Z] : t),
        n,
        o,
        s
      )
    );
    return;
  }
  if (Ft(o) && !s) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Mt(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? Io(o.component) : o.el, i = s ? null : r, { i: c, r: f } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, p = c.refs === B ? c.refs = {} : c.refs, a = c.setupState, g = I(a), D = a === B ? ws : (V) => process.env.NODE_ENV !== "production" && (j(g, V) && !Y(g[V]) && y(
    `Template ref "${V}" used on a non-ref value. It will not work in the production build.`
  ), Go.has(g[V])) ? !1 : j(g, V), $ = (V) => process.env.NODE_ENV === "production" || !Go.has(V);
  if (d != null && d !== f) {
    if (qo(t), J(d))
      p[d] = null, D(d) && (a[d] = null);
    else if (Y(d)) {
      $(d) && (d.value = null);
      const V = t;
      V.k && (p[V.k] = null);
    }
  }
  if (P(f))
    Nt(f, c, 12, [i, p]);
  else {
    const V = J(f), Z = Y(f);
    if (V || Z) {
      const G = () => {
        if (e.f) {
          const H = V ? D(f) ? a[f] : p[f] : $(f) || !e.k ? f.value : p[e.k];
          if (s)
            C(H) && co(H, r);
          else if (C(H))
            H.includes(r) || H.push(r);
          else if (V)
            p[f] = [r], D(f) && (a[f] = p[f]);
          else {
            const L = [r];
            $(f) && (f.value = L), e.k && (p[e.k] = L);
          }
        } else
          V ? (p[f] = i, D(f) && (a[f] = i)) : Z ? ($(f) && (f.value = i), e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
      };
      if (i) {
        const H = () => {
          G(), hn.delete(e);
        };
        H.id = -1, hn.set(e, H), he(H, n);
      } else
        qo(e), G();
    } else
      process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
  }
}
function qo(e) {
  const t = hn.get(e);
  t && (t.flags |= 8, hn.delete(e));
}
Wt().requestIdleCallback;
Wt().cancelIdleCallback;
const Ft = (e) => !!e.type.__asyncLoader, xo = (e) => e.type.__isKeepAlive;
function tl(e, t) {
  nr(e, "a", t);
}
function nl(e, t) {
  nr(e, "da", t);
}
function nr(e, t, n = ee) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (wn(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      xo(s.parent.vnode) && ol(o, t, n, s), s = s.parent;
  }
}
function ol(e, t, n, o) {
  const s = wn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  sr(() => {
    co(o[t], s);
  }, n);
}
function wn(e, t, n = ee, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      we();
      const c = Gt(n), f = Me(t, n, e, i);
      return c(), xe(), f;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = st(bo[e].replace(/ hook$/, ""));
    y(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ke = (e) => (t, n = ee) => {
  (!Ht || e === "sp") && wn(e, (...o) => t(...o), n);
}, sl = ke("bm"), or = ke("m"), rl = ke(
  "bu"
), il = ke("u"), ll = ke(
  "bum"
), sr = ke("um"), cl = ke(
  "sp"
), fl = ke("rtg"), ul = ke("rtc");
function al(e, t = ee) {
  wn("ec", e, t);
}
const pl = Symbol.for("v-ndc"), Zn = (e) => e ? xr(e) ? Io(e) : Zn(e.parent) : null, ct = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ q(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Ae(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Ae(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Ae(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Ae(e.refs) : e.refs,
    $parent: (e) => Zn(e.parent),
    $root: (e) => Zn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => To(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Dn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ri.bind(e.proxy)),
    $watch: (e) => kl.bind(e)
  })
), Vo = (e) => e === "_" || e === "$", Ln = (e, t) => e !== B && !e.__isScriptSetup && j(e, t), rr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: c, appContext: f } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const D = i[t];
      if (D !== void 0)
        switch (D) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Ln(o, t))
          return i[t] = 1, o[t];
        if (s !== B && j(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && j(d, t)
        )
          return i[t] = 3, r[t];
        if (n !== B && j(n, t))
          return i[t] = 4, n[t];
        Qn && (i[t] = 0);
      }
    }
    const p = ct[t];
    let a, g;
    if (p)
      return t === "$attrs" ? (z(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && _n()) : process.env.NODE_ENV !== "production" && t === "$slots" && z(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (a = c.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== B && j(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = f.config.globalProperties, j(g, t)
    )
      return g[t];
    process.env.NODE_ENV !== "production" && ge && (!J(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== B && Vo(t[0]) && j(s, t) ? y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ge && y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return Ln(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && j(s, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== B && j(o, t) ? (o[t] = n, !0) : j(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: r, type: i }
  }, c) {
    let f, d;
    return !!(n[c] || e !== B && c[0] !== "$" && j(e, c) || Ln(t, c) || (f = r[0]) && j(f, c) || j(o, c) || j(ct, c) || j(s.config.globalProperties, c) || (d = i.__cssModules) && d[c]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : j(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (rr.ownKeys = (e) => (y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function dl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ct).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ct[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: X
    });
  }), t;
}
function hl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: X
    });
  });
}
function gl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(I(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Vo(o[0])) {
        y(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: X
      });
    }
  });
}
function Jo(e) {
  return C(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ml() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Qn = !0;
function _l(e) {
  const t = To(e), n = e.proxy, o = e.ctx;
  Qn = !1, t.beforeCreate && Yo(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: i,
    watch: c,
    provide: f,
    inject: d,
    // lifecycle
    created: p,
    beforeMount: a,
    mounted: g,
    beforeUpdate: D,
    updated: $,
    activated: V,
    deactivated: Z,
    beforeDestroy: G,
    beforeUnmount: H,
    destroyed: L,
    unmounted: pe,
    render: T,
    renderTracked: Q,
    renderTriggered: me,
    errorCaptured: te,
    serverPrefetch: le,
    // public API
    expose: Fe,
    inheritAttrs: Ge,
    // assets
    components: _e,
    directives: qt,
    filters: Mo
  } = t, qe = process.env.NODE_ENV !== "production" ? ml() : null;
  if (process.env.NODE_ENV !== "production") {
    const [F] = e.propsOptions;
    if (F)
      for (const M in F)
        qe("Props", M);
  }
  if (d && vl(d, o, qe), i)
    for (const F in i) {
      const M = i[F];
      P(M) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, F, {
        value: M.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[F] = M.bind(n), process.env.NODE_ENV !== "production" && qe("Methods", F)) : process.env.NODE_ENV !== "production" && y(
        `Method "${F}" has type "${typeof M}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !P(s) && y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const F = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && fo(F) && y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !k(F))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = No(F), process.env.NODE_ENV !== "production")
      for (const M in F)
        qe("Data", M), Vo(M[0]) || Object.defineProperty(o, M, {
          configurable: !0,
          enumerable: !0,
          get: () => F[M],
          set: X
        });
  }
  if (Qn = !0, r)
    for (const F in r) {
      const M = r[F], Ve = P(M) ? M.bind(n, n) : P(M.get) ? M.get.bind(n, n) : X;
      process.env.NODE_ENV !== "production" && Ve === X && y(`Computed property "${F}" has no getter.`);
      const Sn = !P(M) && P(M.set) ? M.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(
          `Write operation failed: computed property "${F}" is readonly.`
        );
      } : X, bt = Pr({
        get: Ve,
        set: Sn
      });
      Object.defineProperty(o, F, {
        enumerable: !0,
        configurable: !0,
        get: () => bt.value,
        set: (at) => bt.value = at
      }), process.env.NODE_ENV !== "production" && qe("Computed", F);
    }
  if (c)
    for (const F in c)
      ir(c[F], o, n, F);
  if (f) {
    const F = P(f) ? f.call(n) : f;
    Reflect.ownKeys(F).forEach((M) => {
      Dl(M, F[M]);
    });
  }
  p && Yo(p, e, "c");
  function ce(F, M) {
    C(M) ? M.forEach((Ve) => F(Ve.bind(n))) : M && F(M.bind(n));
  }
  if (ce(sl, a), ce(or, g), ce(rl, D), ce(il, $), ce(tl, V), ce(nl, Z), ce(al, te), ce(ul, Q), ce(fl, me), ce(ll, H), ce(sr, pe), ce(cl, le), C(Fe))
    if (Fe.length) {
      const F = e.exposed || (e.exposed = {});
      Fe.forEach((M) => {
        Object.defineProperty(F, M, {
          get: () => n[M],
          set: (Ve) => n[M] = Ve,
          enumerable: !0
        });
      });
    } else
      e.exposed || (e.exposed = {});
  T && e.render === X && (e.render = T), Ge != null && (e.inheritAttrs = Ge), _e && (e.components = _e), qt && (e.directives = qt), le && tr(e);
}
function vl(e, t, n = X) {
  C(e) && (e = eo(e));
  for (const o in e) {
    const s = e[o];
    let r;
    k(s) ? "default" in s ? r = tn(
      s.from || o,
      s.default,
      !0
    ) : r = tn(s.from || o) : r = tn(s), Y(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[o] = r, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Yo(e, t, n) {
  Me(
    C(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ir(e, t, n, o) {
  let s = o.includes(".") ? vr(n, o) : () => n[o];
  if (J(e)) {
    const r = t[e];
    P(r) ? Un(s, r) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, r);
  } else if (P(e))
    Un(s, e.bind(n));
  else if (k(e))
    if (C(e))
      e.forEach((r) => ir(r, t, n, o));
    else {
      const r = P(e.handler) ? e.handler.bind(n) : t[e.handler];
      P(r) ? Un(s, r, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function To(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = r.get(t);
  let f;
  return c ? f = c : !s.length && !n && !o ? f = t : (f = {}, s.length && s.forEach(
    (d) => gn(f, d, i, !0)
  ), gn(f, t, i)), k(t) && r.set(t, f), f;
}
function gn(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && gn(e, r, n, !0), s && s.forEach(
    (i) => gn(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && y(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = El[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const El = {
  data: zo,
  props: Xo,
  emits: Xo,
  // objects
  methods: Ct,
  computed: Ct,
  // lifecycle
  beforeCreate: se,
  created: se,
  beforeMount: se,
  mounted: se,
  beforeUpdate: se,
  updated: se,
  beforeDestroy: se,
  beforeUnmount: se,
  destroyed: se,
  unmounted: se,
  activated: se,
  deactivated: se,
  errorCaptured: se,
  serverPrefetch: se,
  // assets
  components: Ct,
  directives: Ct,
  // watch
  watch: bl,
  // provide / inject
  provide: zo,
  inject: Nl
};
function zo(e, t) {
  return t ? e ? function() {
    return q(
      P(e) ? e.call(this, this) : e,
      P(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Nl(e, t) {
  return Ct(eo(e), eo(t));
}
function eo(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ct(e, t) {
  return e ? q(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Xo(e, t) {
  return e ? C(e) && C(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : q(
    /* @__PURE__ */ Object.create(null),
    Jo(e),
    Jo(t != null ? t : {})
  ) : t;
}
function bl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = q(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = se(e[o], t[o]);
  return n;
}
function lr() {
  return {
    app: null,
    config: {
      isNativeTag: ws,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let yl = 0;
function Ol(e, t) {
  return function(o, s = null) {
    P(o) || (o = q({}, o)), s != null && !k(s) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), s = null);
    const r = lr(), i = /* @__PURE__ */ new WeakSet(), c = [];
    let f = !1;
    const d = r.app = {
      _uid: yl++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: cs,
      get config() {
        return r.config;
      },
      set config(p) {
        process.env.NODE_ENV !== "production" && y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...a) {
        return i.has(p) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : p && P(p.install) ? (i.add(p), p.install(d, ...a)) : P(p) ? (i.add(p), p(d, ...a)) : process.env.NODE_ENV !== "production" && y(
          'A plugin must either be a function or an object with an "install" function.'
        ), d;
      },
      mixin(p) {
        return r.mixins.includes(p) ? process.env.NODE_ENV !== "production" && y(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : r.mixins.push(p), d;
      },
      component(p, a) {
        return process.env.NODE_ENV !== "production" && ro(p, r.config), a ? (process.env.NODE_ENV !== "production" && r.components[p] && y(`Component "${p}" has already been registered in target app.`), r.components[p] = a, d) : r.components[p];
      },
      directive(p, a) {
        return process.env.NODE_ENV !== "production" && er(p), a ? (process.env.NODE_ENV !== "production" && r.directives[p] && y(`Directive "${p}" has already been registered in target app.`), r.directives[p] = a, d) : r.directives[p];
      },
      mount(p, a, g) {
        if (f)
          process.env.NODE_ENV !== "production" && y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && p.__vue_app__ && y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const D = d._ceVNode || ft(o, s);
          return D.appContext = r, g === !0 ? g = "svg" : g === !1 && (g = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            const $ = tt(D);
            $.el = null, e($, p, g);
          }), a && t ? t(D, p) : e(D, p, g), f = !0, d._container = p, p.__vue_app__ = d, process.env.NODE_ENV !== "production" && (d._instance = D.component, Bi(d, cs)), Io(D.component);
        }
      },
      onUnmount(p) {
        process.env.NODE_ENV !== "production" && typeof p != "function" && y(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), c.push(p);
      },
      unmount() {
        f ? (Me(
          c,
          d._instance,
          16
        ), e(null, d._container), process.env.NODE_ENV !== "production" && (d._instance = null, Ki(d)), delete d._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(p, a) {
        return process.env.NODE_ENV !== "production" && p in r.provides && (j(r.provides, p) ? y(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ) : y(
          `App already provides property with key "${String(p)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[p] = a, d;
      },
      runWithContext(p) {
        const a = vt;
        vt = d;
        try {
          return p();
        } finally {
          vt = a;
        }
      }
    };
    return d;
  };
}
let vt = null;
function Dl(e, t) {
  if (!ee)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = ee.provides;
    const o = ee.parent && ee.parent.provides;
    o === n && (n = ee.provides = Object.create(o)), n[e] = t;
  }
}
function tn(e, t, n = !1) {
  const o = wr();
  if (o || vt) {
    let s = vt ? vt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && P(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const cr = {}, fr = () => Object.create(cr), ur = (e) => Object.getPrototypeOf(e) === cr;
function wl(e, t, n, o = !1) {
  const s = {}, r = fr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ar(e, t, s, r);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  process.env.NODE_ENV !== "production" && dr(t || {}, s, e), n ? e.props = o ? s : bi(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function xl(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Vl(e, t, n, o) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, c = I(s), [f] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && xl(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        let g = p[a];
        if (xn(e.emitsOptions, g))
          continue;
        const D = t[g];
        if (f)
          if (j(r, g))
            D !== r[g] && (r[g] = D, d = !0);
          else {
            const $ = be(g);
            s[$] = to(
              f,
              c,
              $,
              D,
              e,
              !1
            );
          }
        else
          D !== r[g] && (r[g] = D, d = !0);
      }
    }
  } else {
    ar(e, t, s, r) && (d = !0);
    let p;
    for (const a in c)
      (!t || // for camelCase
      !j(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = et(a)) === a || !j(t, p))) && (f ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[p] !== void 0) && (s[a] = to(
        f,
        c,
        a,
        void 0,
        e,
        !0
      )) : delete s[a]);
    if (r !== c)
      for (const a in r)
        (!t || !j(t, a)) && (delete r[a], d = !0);
  }
  d && $e(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && dr(t || {}, s, e);
}
function ar(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let f in t) {
      if ($t(f))
        continue;
      const d = t[f];
      let p;
      s && j(s, p = be(f)) ? !r || !r.includes(p) ? n[p] = d : (c || (c = {}))[p] = d : xn(e.emitsOptions, f) || (!(f in o) || d !== o[f]) && (o[f] = d, i = !0);
    }
  if (r) {
    const f = I(n), d = c || B;
    for (let p = 0; p < r.length; p++) {
      const a = r[p];
      n[a] = to(
        s,
        f,
        a,
        d[a],
        e,
        !j(d, a)
      );
    }
  }
  return i;
}
function to(e, t, n, o, s, r) {
  const i = e[n];
  if (i != null) {
    const c = j(i, "default");
    if (c && o === void 0) {
      const f = i.default;
      if (i.type !== Function && !i.skipFactory && P(f)) {
        const { propsDefaults: d } = s;
        if (n in d)
          o = d[n];
        else {
          const p = Gt(s);
          o = d[n] = f.call(
            null,
            t
          ), p();
        }
      } else
        o = f;
      s.ce && s.ce._setProp(n, o);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !c ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === et(n)) && (o = !0));
  }
  return o;
}
const Tl = /* @__PURE__ */ new WeakMap();
function pr(e, t, n = !1) {
  const o = n ? Tl : t.propsCache, s = o.get(e);
  if (s)
    return s;
  const r = e.props, i = {}, c = [];
  let f = !1;
  if (!P(e)) {
    const p = (a) => {
      f = !0;
      const [g, D] = pr(a, t, !0);
      q(i, g), D && c.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !f)
    return k(e) && o.set(e, Pt), Pt;
  if (C(r))
    for (let p = 0; p < r.length; p++) {
      process.env.NODE_ENV !== "production" && !J(r[p]) && y("props must be strings when using array syntax.", r[p]);
      const a = be(r[p]);
      Zo(a) && (i[a] = B);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !k(r) && y("invalid props options", r);
    for (const p in r) {
      const a = be(p);
      if (Zo(a)) {
        const g = r[p], D = i[a] = C(g) || P(g) ? { type: g } : q({}, g), $ = D.type;
        let V = !1, Z = !0;
        if (C($))
          for (let G = 0; G < $.length; ++G) {
            const H = $[G], L = P(H) && H.name;
            if (L === "Boolean") {
              V = !0;
              break;
            } else
              L === "String" && (Z = !1);
          }
        else
          V = P($) && $.name === "Boolean";
        D[
          0
          /* shouldCast */
        ] = V, D[
          1
          /* shouldCastTrue */
        ] = Z, (V || j(D, "default")) && c.push(a);
      }
    }
  }
  const d = [i, c];
  return k(e) && o.set(e, d), d;
}
function Zo(e) {
  return e[0] !== "$" && !$t(e) ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Sl(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function dr(e, t, n) {
  const o = I(t), s = n.propsOptions[0], r = Object.keys(e).map((i) => be(i));
  for (const i in s) {
    let c = s[i];
    c != null && Cl(
      i,
      o[i],
      c,
      process.env.NODE_ENV !== "production" ? Ae(o) : o,
      !r.includes(i)
    );
  }
}
function Cl(e, t, n, o, s) {
  const { type: r, required: i, validator: c, skipCheck: f } = n;
  if (i && s) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !f) {
      let d = !1;
      const p = C(r) ? r : [r], a = [];
      for (let g = 0; g < p.length && !d; g++) {
        const { valid: D, expectedType: $ } = $l(t, p[g]);
        a.push($ || ""), d = D;
      }
      if (!d) {
        y(Al(e, t, a));
        return;
      }
    }
    c && !c(t, o) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Pl = /* @__PURE__ */ Ke(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function $l(e, t) {
  let n;
  const o = Sl(t);
  if (o === "null")
    n = e === null;
  else if (Pl(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = k(e) : o === "Array" ? n = C(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Al(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(bn).join(" | ")}`;
  const s = n[0], r = uo(t), i = Qo(t, s), c = Qo(t, r);
  return n.length === 1 && es(s) && !Il(s, r) && (o += ` with value ${i}`), o += `, got ${r} `, es(r) && (o += `with value ${c}.`), o;
}
function Qo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function es(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Il(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const So = (e) => e === "_" || e === "_ctx" || e === "$stable", Co = (e) => C(e) ? e.map(Ee) : [Ee(e)], Ml = (e, t, n) => {
  if (t._n)
    return t;
  const o = Xi((...s) => (process.env.NODE_ENV !== "production" && ee && !(n === null && ge) && !(n && n.root !== ee.root) && y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Co(t(...s))), n);
  return o._c = !1, o;
}, hr = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (So(s))
      continue;
    const r = e[s];
    if (P(r))
      t[s] = Ml(s, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && y(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const i = Co(r);
      t[s] = () => i;
    }
  }
}, gr = (e, t) => {
  process.env.NODE_ENV !== "production" && !xo(e.vnode) && y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Co(t);
  e.slots.default = () => n;
}, no = (e, t, n) => {
  for (const o in t)
    (n || !So(o)) && (e[o] = t[o]);
}, Fl = (e, t, n) => {
  const o = e.slots = fr();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (no(o, t, n), n && cn(o, "_", s, !0)) : hr(t, o);
  } else
    t && gr(e, t);
}, Rl = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let r = !0, i = B;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && Ie ? (no(s, t, n), $e(e, "set", "$slots")) : n && c === 1 ? r = !1 : no(s, t, n) : (r = !t.$stable, hr(t, s)), i = t;
  } else
    t && (gr(e, t), i = { default: 1 });
  if (r)
    for (const c in s)
      !So(c) && i[c] == null && delete s[c];
};
let Vt, Ue;
function je(e, t) {
  e.appContext.config.performance && mn() && Ue.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Ji(e, t, mn() ? Ue.now() : Date.now());
}
function Le(e, t) {
  if (e.appContext.config.performance && mn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end", s = `<${Tn(e, e.type)}> ${t}`;
    Ue.mark(o), Ue.measure(s, n, o), Ue.clearMeasures(s), Ue.clearMarks(n), Ue.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Yi(e, t, mn() ? Ue.now() : Date.now());
}
function mn() {
  return Vt !== void 0 || (typeof window != "undefined" && window.performance ? (Vt = !0, Ue = window.performance) : Vt = !1), Vt;
}
function jl() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const he = Ql;
function Ll(e) {
  return Hl(e);
}
function Hl(e, t) {
  jl();
  const n = Wt();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Oo(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: s,
    patchProp: r,
    createElement: i,
    createText: c,
    createComment: f,
    setText: d,
    setElementText: p,
    parentNode: a,
    nextSibling: g,
    setScopeId: D = X,
    insertStaticContent: $
  } = e, V = (l, u, h, E = null, m = null, _ = null, O = void 0, b = null, N = process.env.NODE_ENV !== "production" && Ie ? !1 : !!u.dynamicChildren) => {
    if (l === u)
      return;
    l && !Tt(l, u) && (E = Jt(l), Je(l, m, _, !0), l = null), u.patchFlag === -2 && (N = !1, u.dynamicChildren = null);
    const { type: v, ref: S, shapeFlag: w } = u;
    switch (v) {
      case kt:
        Z(l, u, h, E);
        break;
      case Oe:
        G(l, u, h, E);
        break;
      case on:
        l == null ? H(u, h, E, O) : process.env.NODE_ENV !== "production" && L(l, u, h, O);
        break;
      case Pe:
        qt(
          l,
          u,
          h,
          E,
          m,
          _,
          O,
          b,
          N
        );
        break;
      default:
        w & 1 ? Q(
          l,
          u,
          h,
          E,
          m,
          _,
          O,
          b,
          N
        ) : w & 6 ? Mo(
          l,
          u,
          h,
          E,
          m,
          _,
          O,
          b,
          N
        ) : w & 64 || w & 128 ? v.process(
          l,
          u,
          h,
          E,
          m,
          _,
          O,
          b,
          N,
          pt
        ) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", v, `(${typeof v})`);
    }
    S != null && m ? Mt(S, l && l.ref, _, u || l, !u) : S == null && l && l.ref != null && Mt(l.ref, null, _, l, !0);
  }, Z = (l, u, h, E) => {
    if (l == null)
      o(
        u.el = c(u.children),
        h,
        E
      );
    else {
      const m = u.el = l.el;
      u.children !== l.children && d(m, u.children);
    }
  }, G = (l, u, h, E) => {
    l == null ? o(
      u.el = f(u.children || ""),
      h,
      E
    ) : u.el = l.el;
  }, H = (l, u, h, E) => {
    [l.el, l.anchor] = $(
      l.children,
      u,
      h,
      E,
      l.el,
      l.anchor
    );
  }, L = (l, u, h, E) => {
    if (u.children !== l.children) {
      const m = g(l.anchor);
      T(l), [u.el, u.anchor] = $(
        u.children,
        h,
        m,
        E
      );
    } else
      u.el = l.el, u.anchor = l.anchor;
  }, pe = ({ el: l, anchor: u }, h, E) => {
    let m;
    for (; l && l !== u; )
      m = g(l), o(l, h, E), l = m;
    o(u, h, E);
  }, T = ({ el: l, anchor: u }) => {
    let h;
    for (; l && l !== u; )
      h = g(l), s(l), l = h;
    s(u);
  }, Q = (l, u, h, E, m, _, O, b, N) => {
    if (u.type === "svg" ? O = "svg" : u.type === "math" && (O = "mathml"), l == null)
      me(
        u,
        h,
        E,
        m,
        _,
        O,
        b,
        N
      );
    else {
      const v = l.el && l.el._isVueCE ? l.el : null;
      try {
        v && v._beginPatch(), Fe(
          l,
          u,
          m,
          _,
          O,
          b,
          N
        );
      } finally {
        v && v._endPatch();
      }
    }
  }, me = (l, u, h, E, m, _, O, b) => {
    let N, v;
    const { props: S, shapeFlag: w, transition: x, dirs: A } = l;
    if (N = l.el = i(
      l.type,
      _,
      S && S.is,
      S
    ), w & 8 ? p(N, l.children) : w & 16 && le(
      l.children,
      N,
      null,
      E,
      m,
      Hn(l, _),
      O,
      b
    ), A && nt(l, null, E, "created"), te(N, l, l.scopeId, O, E), S) {
      for (const K in S)
        K !== "value" && !$t(K) && r(N, K, null, S[K], _, E);
      "value" in S && r(N, "value", null, S.value, _), (v = S.onVnodeBeforeMount) && Se(v, E, l);
    }
    process.env.NODE_ENV !== "production" && (cn(N, "__vnode", l, !0), cn(N, "__vueParentComponent", E, !0)), A && nt(l, null, E, "beforeMount");
    const R = Ul(m, x);
    R && x.beforeEnter(N), o(N, u, h), ((v = S && S.onVnodeMounted) || R || A) && he(() => {
      v && Se(v, E, l), R && x.enter(N), A && nt(l, null, E, "mounted");
    }, m);
  }, te = (l, u, h, E, m) => {
    if (h && D(l, h), E)
      for (let _ = 0; _ < E.length; _++)
        D(l, E[_]);
    if (m) {
      let _ = m.subTree;
      if (process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && (_ = Po(_.children) || _), u === _ || br(_.type) && (_.ssContent === u || _.ssFallback === u)) {
        const O = m.vnode;
        te(
          l,
          O,
          O.scopeId,
          O.slotScopeIds,
          m.parent
        );
      }
    }
  }, le = (l, u, h, E, m, _, O, b, N = 0) => {
    for (let v = N; v < l.length; v++) {
      const S = l[v] = b ? ze(l[v]) : Ee(l[v]);
      V(
        null,
        S,
        u,
        h,
        E,
        m,
        _,
        O,
        b
      );
    }
  }, Fe = (l, u, h, E, m, _, O) => {
    const b = u.el = l.el;
    process.env.NODE_ENV !== "production" && (b.__vnode = u);
    let { patchFlag: N, dynamicChildren: v, dirs: S } = u;
    N |= l.patchFlag & 16;
    const w = l.props || B, x = u.props || B;
    let A;
    if (h && ot(h, !1), (A = x.onVnodeBeforeUpdate) && Se(A, h, u, l), S && nt(u, l, h, "beforeUpdate"), h && ot(h, !0), process.env.NODE_ENV !== "production" && Ie && (N = 0, O = !1, v = null), (w.innerHTML && x.innerHTML == null || w.textContent && x.textContent == null) && p(b, ""), v ? (Ge(
      l.dynamicChildren,
      v,
      b,
      h,
      E,
      Hn(u, m),
      _
    ), process.env.NODE_ENV !== "production" && nn(l, u)) : O || Ve(
      l,
      u,
      b,
      null,
      h,
      E,
      Hn(u, m),
      _,
      !1
    ), N > 0) {
      if (N & 16)
        _e(b, w, x, h, m);
      else if (N & 2 && w.class !== x.class && r(b, "class", null, x.class, m), N & 4 && r(b, "style", w.style, x.style, m), N & 8) {
        const R = u.dynamicProps;
        for (let K = 0; K < R.length; K++) {
          const W = R[K], fe = w[W], ne = x[W];
          (ne !== fe || W === "value") && r(b, W, fe, ne, m, h);
        }
      }
      N & 1 && l.children !== u.children && p(b, u.children);
    } else
      !O && v == null && _e(b, w, x, h, m);
    ((A = x.onVnodeUpdated) || S) && he(() => {
      A && Se(A, h, u, l), S && nt(u, l, h, "updated");
    }, E);
  }, Ge = (l, u, h, E, m, _, O) => {
    for (let b = 0; b < u.length; b++) {
      const N = l[b], v = u[b], S = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === Pe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Tt(N, v) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 198) ? a(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      V(
        N,
        v,
        S,
        null,
        E,
        m,
        _,
        O,
        !0
      );
    }
  }, _e = (l, u, h, E, m) => {
    if (u !== h) {
      if (u !== B)
        for (const _ in u)
          !$t(_) && !(_ in h) && r(
            l,
            _,
            u[_],
            null,
            m,
            E
          );
      for (const _ in h) {
        if ($t(_))
          continue;
        const O = h[_], b = u[_];
        O !== b && _ !== "value" && r(l, _, b, O, m, E);
      }
      "value" in h && r(l, "value", u.value, h.value, m);
    }
  }, qt = (l, u, h, E, m, _, O, b, N) => {
    const v = u.el = l ? l.el : c(""), S = u.anchor = l ? l.anchor : c("");
    let { patchFlag: w, dynamicChildren: x, slotScopeIds: A } = u;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ie || w & 2048) && (w = 0, N = !1, x = null), A && (b = b ? b.concat(A) : A), l == null ? (o(v, h, E), o(S, h, E), le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      S,
      m,
      _,
      O,
      b,
      N
    )) : w > 0 && w & 64 && x && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Ge(
      l.dynamicChildren,
      x,
      h,
      m,
      _,
      O,
      b
    ), process.env.NODE_ENV !== "production" ? nn(l, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || m && u === m.subTree) && nn(
        l,
        u,
        !0
        /* shallow */
      )
    )) : Ve(
      l,
      u,
      h,
      S,
      m,
      _,
      O,
      b,
      N
    );
  }, Mo = (l, u, h, E, m, _, O, b, N) => {
    u.slotScopeIds = b, l == null ? u.shapeFlag & 512 ? m.ctx.activate(
      u,
      h,
      E,
      O,
      N
    ) : qe(
      u,
      h,
      E,
      m,
      _,
      O,
      N
    ) : ce(l, u, N);
  }, qe = (l, u, h, E, m, _, O) => {
    const b = l.component = lc(
      l,
      E,
      m
    );
    if (process.env.NODE_ENV !== "production" && b.type.__hmrId && Li(b), process.env.NODE_ENV !== "production" && (Zt(l), je(b, "mount")), xo(l) && (b.ctx.renderer = pt), process.env.NODE_ENV !== "production" && je(b, "init"), fc(b, !1, O), process.env.NODE_ENV !== "production" && Le(b, "init"), process.env.NODE_ENV !== "production" && Ie && (l.el = null), b.asyncDep) {
      if (m && m.registerDep(b, F, O), !l.el) {
        const N = b.subTree = ft(Oe);
        G(null, N, u, h), l.placeholder = N.el;
      }
    } else
      F(
        b,
        l,
        u,
        h,
        m,
        _,
        O
      );
    process.env.NODE_ENV !== "production" && (Qt(), Le(b, "mount"));
  }, ce = (l, u, h) => {
    const E = u.component = l.component;
    if (Xl(l, u, h))
      if (E.asyncDep && !E.asyncResolved) {
        process.env.NODE_ENV !== "production" && Zt(u), M(E, u, h), process.env.NODE_ENV !== "production" && Qt();
        return;
      } else
        E.next = u, E.update();
    else
      u.el = l.el, E.vnode = u;
  }, F = (l, u, h, E, m, _, O) => {
    const b = () => {
      if (l.isMounted) {
        let { next: w, bu: x, u: A, parent: R, vnode: K } = l;
        {
          const de = mr(l);
          if (de) {
            w && (w.el = K.el, M(l, w, O)), de.asyncDep.then(() => {
              l.isUnmounted || b();
            });
            return;
          }
        }
        let W = w, fe;
        process.env.NODE_ENV !== "production" && Zt(w || l.vnode), ot(l, !1), w ? (w.el = K.el, M(l, w, O)) : w = K, x && Dt(x), (fe = w.props && w.props.onVnodeBeforeUpdate) && Se(fe, R, w, K), ot(l, !0), process.env.NODE_ENV !== "production" && je(l, "render");
        const ne = Wn(l);
        process.env.NODE_ENV !== "production" && Le(l, "render");
        const ve = l.subTree;
        l.subTree = ne, process.env.NODE_ENV !== "production" && je(l, "patch"), V(
          ve,
          ne,
          // parent may have changed if it's in a teleport
          a(ve.el),
          // anchor may have changed if it's in a fragment
          Jt(ve),
          l,
          m,
          _
        ), process.env.NODE_ENV !== "production" && Le(l, "patch"), w.el = ne.el, W === null && Zl(l, ne.el), A && he(A, m), (fe = w.props && w.props.onVnodeUpdated) && he(
          () => Se(fe, R, w, K),
          m
        ), process.env.NODE_ENV !== "production" && Xs(l), process.env.NODE_ENV !== "production" && Qt();
      } else {
        let w;
        const { el: x, props: A } = u, { bm: R, m: K, parent: W, root: fe, type: ne } = l, ve = Ft(u);
        if (ot(l, !1), R && Dt(R), !ve && (w = A && A.onVnodeBeforeMount) && Se(w, W, u), ot(l, !0), x && An) {
          const de = () => {
            process.env.NODE_ENV !== "production" && je(l, "render"), l.subTree = Wn(l), process.env.NODE_ENV !== "production" && Le(l, "render"), process.env.NODE_ENV !== "production" && je(l, "hydrate"), An(
              x,
              l.subTree,
              l,
              m,
              null
            ), process.env.NODE_ENV !== "production" && Le(l, "hydrate");
          };
          ve && ne.__asyncHydrate ? ne.__asyncHydrate(
            x,
            l,
            de
          ) : de();
        } else {
          fe.ce && // @ts-expect-error _def is private
          fe.ce._def.shadowRoot !== !1 && fe.ce._injectChildStyle(ne), process.env.NODE_ENV !== "production" && je(l, "render");
          const de = l.subTree = Wn(l);
          process.env.NODE_ENV !== "production" && Le(l, "render"), process.env.NODE_ENV !== "production" && je(l, "patch"), V(
            null,
            de,
            h,
            E,
            l,
            m,
            _
          ), process.env.NODE_ENV !== "production" && Le(l, "patch"), u.el = de.el;
        }
        if (K && he(K, m), !ve && (w = A && A.onVnodeMounted)) {
          const de = u;
          he(
            () => Se(w, W, de),
            m
          );
        }
        (u.shapeFlag & 256 || W && Ft(W.vnode) && W.vnode.shapeFlag & 256) && l.a && he(l.a, m), l.isMounted = !0, process.env.NODE_ENV !== "production" && ki(l), u = h = E = null;
      }
    };
    l.scope.on();
    const N = l.effect = new Vs(b);
    l.scope.off();
    const v = l.update = N.run.bind(N), S = l.job = N.runIfDirty.bind(N);
    S.i = l, S.id = l.uid, N.scheduler = () => Dn(S), ot(l, !0), process.env.NODE_ENV !== "production" && (N.onTrack = l.rtc ? (w) => Dt(l.rtc, w) : void 0, N.onTrigger = l.rtg ? (w) => Dt(l.rtg, w) : void 0), v();
  }, M = (l, u, h) => {
    u.component = l;
    const E = l.vnode.props;
    l.vnode = u, l.next = null, Vl(l, u.props, E, h), Rl(l, u.children, h), we(), Ko(l), xe();
  }, Ve = (l, u, h, E, m, _, O, b, N = !1) => {
    const v = l && l.children, S = l ? l.shapeFlag : 0, w = u.children, { patchFlag: x, shapeFlag: A } = u;
    if (x > 0) {
      if (x & 128) {
        bt(
          v,
          w,
          h,
          E,
          m,
          _,
          O,
          b,
          N
        );
        return;
      } else if (x & 256) {
        Sn(
          v,
          w,
          h,
          E,
          m,
          _,
          O,
          b,
          N
        );
        return;
      }
    }
    A & 8 ? (S & 16 && yt(v, m, _), w !== v && p(h, w)) : S & 16 ? A & 16 ? bt(
      v,
      w,
      h,
      E,
      m,
      _,
      O,
      b,
      N
    ) : yt(v, m, _, !0) : (S & 8 && p(h, ""), A & 16 && le(
      w,
      h,
      E,
      m,
      _,
      O,
      b,
      N
    ));
  }, Sn = (l, u, h, E, m, _, O, b, N) => {
    l = l || Pt, u = u || Pt;
    const v = l.length, S = u.length, w = Math.min(v, S);
    let x;
    for (x = 0; x < w; x++) {
      const A = u[x] = N ? ze(u[x]) : Ee(u[x]);
      V(
        l[x],
        A,
        h,
        null,
        m,
        _,
        O,
        b,
        N
      );
    }
    v > S ? yt(
      l,
      m,
      _,
      !0,
      !1,
      w
    ) : le(
      u,
      h,
      E,
      m,
      _,
      O,
      b,
      N,
      w
    );
  }, bt = (l, u, h, E, m, _, O, b, N) => {
    let v = 0;
    const S = u.length;
    let w = l.length - 1, x = S - 1;
    for (; v <= w && v <= x; ) {
      const A = l[v], R = u[v] = N ? ze(u[v]) : Ee(u[v]);
      if (Tt(A, R))
        V(
          A,
          R,
          h,
          null,
          m,
          _,
          O,
          b,
          N
        );
      else
        break;
      v++;
    }
    for (; v <= w && v <= x; ) {
      const A = l[w], R = u[x] = N ? ze(u[x]) : Ee(u[x]);
      if (Tt(A, R))
        V(
          A,
          R,
          h,
          null,
          m,
          _,
          O,
          b,
          N
        );
      else
        break;
      w--, x--;
    }
    if (v > w) {
      if (v <= x) {
        const A = x + 1, R = A < S ? u[A].el : E;
        for (; v <= x; )
          V(
            null,
            u[v] = N ? ze(u[v]) : Ee(u[v]),
            h,
            R,
            m,
            _,
            O,
            b,
            N
          ), v++;
      }
    } else if (v > x)
      for (; v <= w; )
        Je(l[v], m, _, !0), v++;
    else {
      const A = v, R = v, K = /* @__PURE__ */ new Map();
      for (v = R; v <= x; v++) {
        const oe = u[v] = N ? ze(u[v]) : Ee(u[v]);
        oe.key != null && (process.env.NODE_ENV !== "production" && K.has(oe.key) && y(
          "Duplicate keys found during update:",
          JSON.stringify(oe.key),
          "Make sure keys are unique."
        ), K.set(oe.key, v));
      }
      let W, fe = 0;
      const ne = x - R + 1;
      let ve = !1, de = 0;
      const Ot = new Array(ne);
      for (v = 0; v < ne; v++)
        Ot[v] = 0;
      for (v = A; v <= w; v++) {
        const oe = l[v];
        if (fe >= ne) {
          Je(oe, m, _, !0);
          continue;
        }
        let Te;
        if (oe.key != null)
          Te = K.get(oe.key);
        else
          for (W = R; W <= x; W++)
            if (Ot[W - R] === 0 && Tt(oe, u[W])) {
              Te = W;
              break;
            }
        Te === void 0 ? Je(oe, m, _, !0) : (Ot[Te - R] = v + 1, Te >= de ? de = Te : ve = !0, V(
          oe,
          u[Te],
          h,
          null,
          m,
          _,
          O,
          b,
          N
        ), fe++);
      }
      const Ro = ve ? Wl(Ot) : Pt;
      for (W = Ro.length - 1, v = ne - 1; v >= 0; v--) {
        const oe = R + v, Te = u[oe], jo = u[oe + 1], Lo = oe + 1 < S ? (
          // #13559, fallback to el placeholder for unresolved async component
          jo.el || jo.placeholder
        ) : E;
        Ot[v] === 0 ? V(
          null,
          Te,
          h,
          Lo,
          m,
          _,
          O,
          b,
          N
        ) : ve && (W < 0 || v !== Ro[W] ? at(Te, h, Lo, 2) : W--);
      }
    }
  }, at = (l, u, h, E, m = null) => {
    const { el: _, type: O, transition: b, children: N, shapeFlag: v } = l;
    if (v & 6) {
      at(l.component.subTree, u, h, E);
      return;
    }
    if (v & 128) {
      l.suspense.move(u, h, E);
      return;
    }
    if (v & 64) {
      O.move(l, u, h, pt);
      return;
    }
    if (O === Pe) {
      o(_, u, h);
      for (let w = 0; w < N.length; w++)
        at(N[w], u, h, E);
      o(l.anchor, u, h);
      return;
    }
    if (O === on) {
      pe(l, u, h);
      return;
    }
    if (E !== 2 && v & 1 && b)
      if (E === 0)
        b.beforeEnter(_), o(_, u, h), he(() => b.enter(_), m);
      else {
        const { leave: w, delayLeave: x, afterLeave: A } = b, R = () => {
          l.ctx.isUnmounted ? s(_) : o(_, u, h);
        }, K = () => {
          _._isLeaving && _[el](
            !0
            /* cancelled */
          ), w(_, () => {
            R(), A && A();
          });
        };
        x ? x(_, R, K) : K();
      }
    else
      o(_, u, h);
  }, Je = (l, u, h, E = !1, m = !1) => {
    const {
      type: _,
      props: O,
      ref: b,
      children: N,
      dynamicChildren: v,
      shapeFlag: S,
      patchFlag: w,
      dirs: x,
      cacheIndex: A
    } = l;
    if (w === -2 && (m = !1), b != null && (we(), Mt(b, null, h, l, !0), xe()), A != null && (u.renderCache[A] = void 0), S & 256) {
      u.ctx.deactivate(l);
      return;
    }
    const R = S & 1 && x, K = !Ft(l);
    let W;
    if (K && (W = O && O.onVnodeBeforeUnmount) && Se(W, u, l), S & 6)
      Ir(l.component, h, E);
    else {
      if (S & 128) {
        l.suspense.unmount(h, E);
        return;
      }
      R && nt(l, null, u, "beforeUnmount"), S & 64 ? l.type.remove(
        l,
        u,
        h,
        pt,
        E
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Pe || w > 0 && w & 64) ? yt(
        v,
        u,
        h,
        !1,
        !0
      ) : (_ === Pe && w & 384 || !m && S & 16) && yt(N, u, h), E && Cn(l);
    }
    (K && (W = O && O.onVnodeUnmounted) || R) && he(() => {
      W && Se(W, u, l), R && nt(l, null, u, "unmounted");
    }, h);
  }, Cn = (l) => {
    const { type: u, el: h, anchor: E, transition: m } = l;
    if (u === Pe) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && m && !m.persisted ? l.children.forEach((O) => {
        O.type === Oe ? s(O.el) : Cn(O);
      }) : Ar(h, E);
      return;
    }
    if (u === on) {
      T(l);
      return;
    }
    const _ = () => {
      s(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (l.shapeFlag & 1 && m && !m.persisted) {
      const { leave: O, delayLeave: b } = m, N = () => O(h, _);
      b ? b(l.el, _, N) : N();
    } else
      _();
  }, Ar = (l, u) => {
    let h;
    for (; l !== u; )
      h = g(l), s(l), l = h;
    s(u);
  }, Ir = (l, u, h) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && Hi(l);
    const { bum: E, scope: m, job: _, subTree: O, um: b, m: N, a: v } = l;
    ts(N), ts(v), E && Dt(E), m.stop(), _ && (_.flags |= 8, Je(O, l, u, h)), b && he(b, u), he(() => {
      l.isUnmounted = !0;
    }, u), process.env.NODE_ENV !== "production" && qi(l);
  }, yt = (l, u, h, E = !1, m = !1, _ = 0) => {
    for (let O = _; O < l.length; O++)
      Je(l[O], u, h, E, m);
  }, Jt = (l) => {
    if (l.shapeFlag & 6)
      return Jt(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const u = g(l.anchor || l.el), h = u && u[Zi];
    return h ? g(h) : u;
  };
  let Pn = !1;
  const Fo = (l, u, h) => {
    l == null ? u._vnode && Je(u._vnode, null, null, !0) : V(
      u._vnode || null,
      l,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = l, Pn || (Pn = !0, Ko(), Js(), Pn = !1);
  }, pt = {
    p: V,
    um: Je,
    m: at,
    r: Cn,
    mt: qe,
    mc: le,
    pc: Ve,
    pbc: Ge,
    n: Jt,
    o: e
  };
  let $n, An;
  return t && ([$n, An] = t(
    pt
  )), {
    render: Fo,
    hydrate: $n,
    createApp: Ol(Fo, $n)
  };
}
function Hn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ot({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ul(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function nn(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (C(o) && C(s))
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      let c = s[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = s[r] = ze(s[r]), c.el = i.el), !n && c.patchFlag !== -2 && nn(i, c)), c.type === kt && // avoid cached text nodes retaining detached dom nodes
      c.patchFlag !== -1 && (c.el = i.el), c.type === Oe && !c.el && (c.el = i.el), process.env.NODE_ENV !== "production" && c.el && (c.el.__vnode = c);
    }
}
function Wl(e) {
  const t = e.slice(), n = [0];
  let o, s, r, i, c;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const d = e[o];
    if (d !== 0) {
      if (s = n[n.length - 1], e[s] < d) {
        t[o] = s, n.push(o);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        c = r + i >> 1, e[n[c]] < d ? r = c + 1 : i = c;
      d < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function mr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : mr(t);
}
function ts(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Bl = Symbol.for("v-scx"), Kl = () => {
  {
    const e = tn(Bl);
    return e || process.env.NODE_ENV !== "production" && y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Un(e, t, n) {
  return process.env.NODE_ENV !== "production" && !P(t) && y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), _r(e, t, n);
}
function _r(e, t, n = B) {
  const { immediate: o, deep: s, flush: r, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (o !== void 0 && y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && y(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = q({}, n);
  process.env.NODE_ENV !== "production" && (c.onWarn = y);
  const f = t && o || !t && r !== "post";
  let d;
  if (Ht) {
    if (r === "sync") {
      const D = Kl();
      d = D.__watcherHandles || (D.__watcherHandles = []);
    } else if (!f) {
      const D = () => {
      };
      return D.stop = X, D.resume = X, D.pause = X, D;
    }
  }
  const p = ee;
  c.call = (D, $, V) => Me(D, p, $, V);
  let a = !1;
  r === "post" ? c.scheduler = (D) => {
    he(D, p && p.suspense);
  } : r !== "sync" && (a = !0, c.scheduler = (D, $) => {
    $ ? D() : Dn(D);
  }), c.augmentJob = (D) => {
    t && (D.flags |= 4), a && (D.flags |= 2, p && (D.id = p.uid, D.i = p));
  };
  const g = Ci(e, t, c);
  return Ht && (d ? d.push(g) : f && g()), g;
}
function kl(e, t, n) {
  const o = this.proxy, s = J(e) ? e.includes(".") ? vr(o, e) : () => o[e] : e.bind(o, o);
  let r;
  P(t) ? r = t : (r = t.handler, n = t);
  const i = Gt(this), c = _r(s, r.bind(o), n);
  return i(), c;
}
function vr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
const Gl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${be(t)}Modifiers`] || e[`${et(t)}Modifiers`];
function ql(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || B;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [a]
    } = e;
    if (p)
      if (!(t in p))
        (!a || !(st(be(t)) in a)) && y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${st(be(t))}" prop.`
        );
      else {
        const g = p[t];
        P(g) && (g(...n) || y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), i = r && Gl(o, t.slice(7));
  if (i && (i.trim && (s = n.map((p) => J(p) ? p.trim() : p)), i.number && (s = n.map(Wr))), process.env.NODE_ENV !== "production" && zi(e, t, s), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[st(p)] && y(
      `Event "${p}" is emitted in component ${Tn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${et(
        t
      )}" instead of "${t}".`
    );
  }
  let c, f = o[c = st(t)] || // also try camelCase event handler (#2249)
  o[c = st(be(t))];
  !f && r && (f = o[c = st(et(t))]), f && Me(
    f,
    e,
    6,
    s
  );
  const d = o[c + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Me(
      d,
      e,
      6,
      s
    );
  }
}
const Jl = /* @__PURE__ */ new WeakMap();
function Er(e, t, n = !1) {
  const o = n ? Jl : t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let i = {}, c = !1;
  if (!P(e)) {
    const f = (d) => {
      const p = Er(d, t, !0);
      p && (c = !0, q(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !r && !c ? (k(e) && o.set(e, null), null) : (C(r) ? r.forEach((f) => i[f] = null) : q(i, r), k(e) && o.set(e, i), i);
}
function xn(e, t) {
  return !e || !Ut(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), j(e, t[0].toLowerCase() + t.slice(1)) || j(e, et(t)) || j(e, t));
}
let oo = !1;
function _n() {
  oo = !0;
}
function Wn(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: s,
    propsOptions: [r],
    slots: i,
    attrs: c,
    emit: f,
    render: d,
    renderCache: p,
    props: a,
    data: g,
    setupState: D,
    ctx: $,
    inheritAttrs: V
  } = e, Z = dn(e);
  let G, H;
  process.env.NODE_ENV !== "production" && (oo = !1);
  try {
    if (n.shapeFlag & 4) {
      const T = s || o, Q = process.env.NODE_ENV !== "production" && D.__isScriptSetup ? new Proxy(T, {
        get(me, te, le) {
          return y(
            `Property '${String(
              te
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(me, te, le);
        }
      }) : T;
      G = Ee(
        d.call(
          Q,
          T,
          p,
          process.env.NODE_ENV !== "production" ? Ae(a) : a,
          D,
          g,
          $
        )
      ), H = c;
    } else {
      const T = t;
      process.env.NODE_ENV !== "production" && c === a && _n(), G = Ee(
        T.length > 1 ? T(
          process.env.NODE_ENV !== "production" ? Ae(a) : a,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return _n(), Ae(c);
            },
            slots: i,
            emit: f
          } : { attrs: c, slots: i, emit: f }
        ) : T(
          process.env.NODE_ENV !== "production" ? Ae(a) : a,
          null
        )
      ), H = t.props ? c : Yl(c);
    }
  } catch (T) {
    Bt(T, e, 1), G = ft(Oe);
  }
  let L = G, pe;
  if (process.env.NODE_ENV !== "production" && G.patchFlag > 0 && G.patchFlag & 2048 && ([L, pe] = Nr(G)), H && V !== !1) {
    const T = Object.keys(H), { shapeFlag: Q } = L;
    if (T.length) {
      if (Q & 7)
        r && T.some(ln) && (H = zl(
          H,
          r
        )), L = tt(L, H, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !oo && L.type !== Oe) {
        const me = Object.keys(c), te = [], le = [];
        for (let Fe = 0, Ge = me.length; Fe < Ge; Fe++) {
          const _e = me[Fe];
          Ut(_e) ? ln(_e) || te.push(_e[2].toLowerCase() + _e.slice(3)) : le.push(_e);
        }
        le.length && y(
          `Extraneous non-props attributes (${le.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), te.length && y(
          `Extraneous non-emits event listeners (${te.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !ns(L) && y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), L = tt(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !ns(L) && y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), wo(L, n.transition)), process.env.NODE_ENV !== "production" && pe ? pe(L) : G = L, dn(Z), G;
}
const Nr = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Po(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Nr(o);
  } else
    return [e, void 0];
  const s = t.indexOf(o), r = n ? n.indexOf(o) : -1, i = (c) => {
    t[s] = c, n && (r > -1 ? n[r] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [Ee(o), i];
};
function Po(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (Vn(s)) {
      if (s.type !== Oe || s.children === "v-if") {
        if (n)
          return;
        if (n = s, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Po(n.children);
      }
    } else
      return;
  }
  return n;
}
const Yl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ut(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, zl = (e, t) => {
  const n = {};
  for (const o in e)
    (!ln(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, ns = (e) => e.shapeFlag & 7 || e.type === Oe;
function Xl(e, t, n) {
  const { props: o, children: s, component: r } = e, { props: i, children: c, patchFlag: f } = t, d = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || c) && Ie || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? os(o, i, d) : !!i;
    if (f & 8) {
      const p = t.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        const g = p[a];
        if (i[g] !== o[g] && !xn(d, g))
          return !0;
      }
    }
  } else
    return (s || c) && (!c || !c.$stable) ? !0 : o === i ? !1 : o ? i ? os(o, i, d) : !0 : !!i;
  return !1;
}
function os(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (t[r] !== e[r] && !xn(n, r))
      return !0;
  }
  return !1;
}
function Zl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const br = (e) => e.__isSuspense;
function Ql(e, t) {
  t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : qs(e);
}
const Pe = Symbol.for("v-fgt"), kt = Symbol.for("v-txt"), Oe = Symbol.for("v-cmt"), on = Symbol.for("v-stc");
let Ze = null, $o = 1;
function ss(e, t = !1) {
  $o += e, e < 0 && Ze && t && (Ze.hasOnce = !0);
}
function Vn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Tt(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = en.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const ec = (...e) => Or(
  ...e
), yr = ({ key: e }) => e != null ? e : null, sn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? J(e) || Y(e) || P(e) ? { i: ge, r: e, k: t, f: !!n } : e : null);
function tc(e, t = null, n = null, o = 0, s = null, r = e === Pe ? 0 : 1, i = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yr(t),
    ref: t && sn(t),
    scopeId: Qs,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: ge
  };
  return c ? (Ao(f, n), r & 128 && e.normalize(f)) : n && (f.shapeFlag |= J(n) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && y("VNode created with invalid key (NaN). VNode type:", f.type), $o > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ze && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Ze.push(f), f;
}
const ft = process.env.NODE_ENV !== "production" ? ec : Or;
function Or(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === pl) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = Oe), Vn(e)) {
    const c = tt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ao(c, n), $o > 0 && !r && Ze && (c.shapeFlag & 6 ? Ze[Ze.indexOf(e)] = c : Ze.push(c)), c.patchFlag = -2, c;
  }
  if (Cr(e) && (e = e.__vccOpts), t) {
    t = nc(t);
    let { class: c, style: f } = t;
    c && !J(c) && (t.class = ho(c)), k(f) && (fn(f) && !C(f) && (f = q({}, f)), t.style = po(f));
  }
  const i = J(e) ? 1 : br(e) ? 128 : Qi(e) ? 64 : k(e) ? 4 : P(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && fn(e) && (e = I(e), y(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), tc(
    e,
    t,
    n,
    o,
    s,
    i,
    r,
    !0
  );
}
function nc(e) {
  return e ? fn(e) || ur(e) ? q({}, e) : e : null;
}
function tt(e, t, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: i, children: c, transition: f } = e, d = t ? sc(s || {}, t) : s, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && yr(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? C(r) ? r.concat(sn(t)) : [r, sn(t)] : sn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && C(c) ? c.map(Dr) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Pe ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && tt(e.ssContent),
    ssFallback: e.ssFallback && tt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && o && wo(
    p,
    f.clone(p)
  ), p;
}
function Dr(e) {
  const t = tt(e);
  return C(e.children) && (t.children = e.children.map(Dr)), t;
}
function oc(e = " ", t = 0) {
  return ft(kt, null, e, t);
}
function Ee(e) {
  return e == null || typeof e == "boolean" ? ft(Oe) : C(e) ? ft(
    Pe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Vn(e) ? ze(e) : ft(kt, null, String(e));
}
function ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : tt(e);
}
function Ao(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (C(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Ao(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !ur(t) ? t._ctx = ge : s === 3 && ge && (ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    P(t) ? (t = { default: t, _ctx: ge }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [oc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function sc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = ho([t.class, o.class]));
      else if (s === "style")
        t.style = po([t.style, o.style]);
      else if (Ut(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(C(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
function Se(e, t, n, o = null) {
  Me(e, t, 7, [
    n,
    o
  ]);
}
const rc = lr();
let ic = 0;
function lc(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || rc, r = {
    uid: ic++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new ti(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: pr(o, s),
    emitsOptions: Er(o, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: B,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: B,
    data: B,
    props: B,
    attrs: B,
    slots: B,
    refs: B,
    setupState: B,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? r.ctx = dl(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = ql.bind(null, r), e.ce && e.ce(r), r;
}
let ee = null;
const wr = () => ee || ge;
let vn, so;
{
  const e = Wt(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((i) => i(r)) : s[0](r);
    };
  };
  vn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ee = n
  ), so = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ht = n
  );
}
const Gt = (e) => {
  const t = ee;
  return vn(e), e.scope.on(), () => {
    e.scope.off(), vn(t);
  };
}, rs = () => {
  ee && ee.scope.off(), vn(null);
}, cc = /* @__PURE__ */ Ke("slot,component");
function ro(e, { isNativeTag: t }) {
  (cc(e) || t(e)) && y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function xr(e) {
  return e.vnode.shapeFlag & 4;
}
let Ht = !1;
function fc(e, t = !1, n = !1) {
  t && so(t);
  const { props: o, children: s } = e.vnode, r = xr(e);
  wl(e, o, r, t), Fl(e, s, n || t);
  const i = r ? uc(e, t) : void 0;
  return t && so(!1), i;
}
function uc(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && ro(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let i = 0; i < r.length; i++)
        ro(r[i], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let i = 0; i < r.length; i++)
        er(r[i]);
    }
    o.compilerOptions && Vr() && y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, rr), process.env.NODE_ENV !== "production" && hl(e);
  const { setup: s } = o;
  if (s) {
    we();
    const r = e.setupContext = s.length > 1 ? pc(e) : null, i = Gt(e), c = Nt(
      s,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? Ae(e.props) : e.props,
        r
      ]
    ), f = fo(c);
    if (xe(), i(), (f || e.sp) && !Ft(e) && tr(e), f) {
      if (c.then(rs, rs), t)
        return c.then((d) => {
          is(e, d, t);
        }).catch((d) => {
          Bt(d, e, 0);
        });
      if (e.asyncDep = c, process.env.NODE_ENV !== "production" && !e.suspense) {
        const d = (n = o.name) != null ? n : "Anonymous";
        y(
          `Component <${d}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      is(e, c, t);
  } else
    Tr(e, t);
}
function is(e, t, n) {
  P(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : k(t) ? (process.env.NODE_ENV !== "production" && Vn(t) && y(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Bs(t), process.env.NODE_ENV !== "production" && gl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Tr(e, n);
}
let io;
const Vr = () => !io;
function Tr(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && io && !o.render) {
      const s = o.template || To(e).template;
      if (s) {
        process.env.NODE_ENV !== "production" && je(e, "compile");
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: f } = o, d = q(
          q(
            {
              isCustomElement: r,
              delimiters: c
            },
            i
          ),
          f
        );
        o.render = io(s, d), process.env.NODE_ENV !== "production" && Le(e, "compile");
      }
    }
    e.render = o.render || X;
  }
  {
    const s = Gt(e);
    we();
    try {
      _l(e);
    } finally {
      xe(), s();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === X && !t && (o.template ? y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : y("Component is missing template or render function: ", o));
}
const ls = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return _n(), z(e, "get", ""), e[t];
  },
  set() {
    return y("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return y("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return z(e, "get", ""), e[t];
  }
};
function ac(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return z(e, "get", "$slots"), t[n];
    }
  });
}
function pc(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && y("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (C(n) ? o = "array" : Y(n) && (o = "ref")), o !== "object" && y(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, ls));
      },
      get slots() {
        return o || (o = ac(e));
      },
      get emit() {
        return (s, ...r) => e.emit(s, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, ls),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Io(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Bs(yi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ct)
        return ct[n](e);
    },
    has(t, n) {
      return n in t || n in ct;
    }
  })) : e.proxy;
}
const dc = /(?:^|[-_])\w/g, hc = (e) => e.replace(dc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Sr(e, t = !0) {
  return P(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Tn(e, t, n = !1) {
  let o = Sr(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? hc(o) : n ? "App" : "Anonymous";
}
function Cr(e) {
  return P(e) && "__vccOpts" in e;
}
const Pr = (e, t) => {
  const n = Ti(e, t, Ht);
  if (process.env.NODE_ENV !== "production") {
    const o = wr();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function gc() {
  if (process.env.NODE_ENV === "production" || typeof window == "undefined")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(a) {
      if (!k(a))
        return null;
      if (a.__isVue)
        return ["div", e, "VueInstance"];
      if (Y(a)) {
        we();
        const g = a.value;
        return xe(), [
          "div",
          {},
          ["span", e, p(a)],
          "<",
          c(g),
          ">"
        ];
      } else {
        if (mt(a))
          return [
            "div",
            {},
            ["span", e, ae(a) ? "ShallowReactive" : "Reactive"],
            "<",
            c(a),
            `>${Be(a) ? " (readonly)" : ""}`
          ];
        if (Be(a))
          return [
            "div",
            {},
            ["span", e, ae(a) ? "ShallowReadonly" : "Readonly"],
            "<",
            c(a),
            ">"
          ];
      }
      return null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...r(a.$)
        ];
    }
  };
  function r(a) {
    const g = [];
    a.type.props && a.props && g.push(i("props", I(a.props))), a.setupState !== B && g.push(i("setup", a.setupState)), a.data !== B && g.push(i("data", I(a.data)));
    const D = f(a, "computed");
    D && g.push(i("computed", D));
    const $ = f(a, "inject");
    return $ && g.push(i("injected", $)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), g;
  }
  function i(a, g) {
    return g = q({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((D) => [
          "div",
          {},
          ["span", o, D + ": "],
          c(g[D], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(a, g = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : k(a) ? ["object", { object: g ? I(a) : a }] : ["span", n, String(a)];
  }
  function f(a, g) {
    const D = a.type;
    if (P(D))
      return;
    const $ = {};
    for (const V in a.ctx)
      d(D, V, g) && ($[V] = a.ctx[V]);
    return $;
  }
  function d(a, g, D) {
    const $ = a[D];
    if (C($) && $.includes(g) || k($) && g in $ || a.extends && d(a.extends, g, D) || a.mixins && a.mixins.some((V) => d(V, g, D)))
      return !0;
  }
  function p(a) {
    return ae(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const cs = "3.5.24", We = process.env.NODE_ENV !== "production" ? y : X;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let lo;
const fs = typeof window != "undefined" && window.trustedTypes;
if (fs)
  try {
    lo = /* @__PURE__ */ fs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && We(`Error creating trusted types policy: ${e}`);
  }
const $r = lo ? (e) => lo.createHTML(e) : (e) => e, mc = "http://www.w3.org/2000/svg", _c = "http://www.w3.org/1998/Math/MathML", He = typeof document != "undefined" ? document : null, us = He && /* @__PURE__ */ He.createElement("template"), vc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t === "svg" ? He.createElementNS(mc, e) : t === "mathml" ? He.createElementNS(_c, e) : n ? He.createElement(e, { is: n }) : He.createElement(e);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => He.createTextNode(e),
  createComment: (e) => He.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => He.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, s, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      us.innerHTML = $r(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const c = us.content;
      if (o === "svg" || o === "mathml") {
        const f = c.firstChild;
        for (; f.firstChild; )
          c.appendChild(f.firstChild);
        c.removeChild(f);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Ec = Symbol("_vtc");
function Nc(e, t, n) {
  const o = e[Ec];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const as = Symbol("_vod"), bc = Symbol("_vsh"), yc = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Oc = /(?:^|;)\s*display\s*:/;
function Dc(e, t, n) {
  const o = e.style, s = J(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (J(t))
        for (const i of t.split(";")) {
          const c = i.slice(0, i.indexOf(":")).trim();
          n[c] == null && rn(o, c, "");
        }
      else
        for (const i in t)
          n[i] == null && rn(o, i, "");
    for (const i in n)
      i === "display" && (r = !0), rn(o, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = o[yc];
      i && (n += ";" + i), o.cssText = n, r = Oc.test(n);
    }
  } else
    t && e.removeAttribute("style");
  as in e && (e[as] = r ? o.display : "", e[bc] && (o.display = "none"));
}
const wc = /[^\\];\s*$/, ps = /\s*!important$/;
function rn(e, t, n) {
  if (C(n))
    n.forEach((o) => rn(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && wc.test(n) && We(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = xc(e, t);
    ps.test(n) ? e.setProperty(
      et(o),
      n.replace(ps, ""),
      "important"
    ) : e[o] = n;
  }
}
const ds = ["Webkit", "Moz", "ms"], Bn = {};
function xc(e, t) {
  const n = Bn[t];
  if (n)
    return n;
  let o = be(t);
  if (o !== "filter" && o in e)
    return Bn[t] = o;
  o = bn(o);
  for (let s = 0; s < ds.length; s++) {
    const r = ds[s] + o;
    if (r in e)
      return Bn[t] = r;
  }
  return t;
}
const hs = "http://www.w3.org/1999/xlink";
function gs(e, t, n, o, s, r = ei(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(hs, t.slice(6, t.length)) : e.setAttributeNS(hs, t, n) : n == null || r && !xs(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Et(n) ? String(n) : n
  );
}
function ms(e, t, n, o, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? $r(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (c !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = xs(n) : n == null && c === "string" ? (n = "", i = !0) : c === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (c) {
    process.env.NODE_ENV !== "production" && !i && We(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      c
    );
  }
  i && e.removeAttribute(s || t);
}
function Vc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Tc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const _s = Symbol("_vei");
function Sc(e, t, n, o, s = null) {
  const r = e[_s] || (e[_s] = {}), i = r[t];
  if (o && i)
    i.value = process.env.NODE_ENV !== "production" ? Es(o, t) : o;
  else {
    const [c, f] = Cc(t);
    if (o) {
      const d = r[t] = Ac(
        process.env.NODE_ENV !== "production" ? Es(o, t) : o,
        s
      );
      Vc(e, c, d, f);
    } else
      i && (Tc(e, c, i, f), r[t] = void 0);
  }
}
const vs = /(?:Once|Passive|Capture)$/;
function Cc(e) {
  let t;
  if (vs.test(e)) {
    t = {};
    let o;
    for (; o = e.match(vs); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : et(e.slice(2)), t];
}
let Kn = 0;
const Pc = /* @__PURE__ */ Promise.resolve(), $c = () => Kn || (Pc.then(() => Kn = 0), Kn = Date.now());
function Ac(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Me(
      Ic(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = $c(), n;
}
function Es(e, t) {
  return P(e) || C(e) ? e : (We(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), X);
}
function Ic(e, t) {
  if (C(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (s) => !s._stopped && o && o(s)
    );
  } else
    return t;
}
const Ns = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Mc = (e, t, n, o, s, r) => {
  const i = s === "svg";
  t === "class" ? Nc(e, o, i) : t === "style" ? Dc(e, n, o) : Ut(t) ? ln(t) || Sc(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Fc(e, t, o, i)) ? (ms(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && gs(e, t, o, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !J(o)) ? ms(e, be(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), gs(e, t, o, i));
};
function Fc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ns(t) && P(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Ns(t) && J(n) ? !1 : t in e;
}
const Rc = /* @__PURE__ */ q({ patchProp: Mc }, vc);
let bs;
function jc() {
  return bs || (bs = Ll(Rc));
}
const Lc = (...e) => {
  const t = jc().createApp(...e);
  process.env.NODE_ENV !== "production" && (Uc(t), Wc(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = Bc(o);
    if (!s)
      return;
    const r = t._component;
    !P(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, Hc(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function Hc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Uc(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => zr(t) || Xr(t) || Zr(t),
    writable: !1
  });
}
function Wc(e) {
  if (Vr()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        We(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return We(o), n;
      },
      set() {
        We(o);
      }
    });
  }
}
function Bc(e) {
  if (J(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && We(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && We(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Kc() {
  gc();
}
process.env.NODE_ENV !== "production" && Kc();
var Os, Ds;
(Ds = (Os = window.wp) == null ? void 0 : Os.apiFetch) == null || Ds.use((e, t) => (console.log("[apiFetch] →", e), t(e).then((n) => (console.log("[apiFetch] ←", n), n))));
function ys(e, t = {}) {
  const { restUrl: n, nonce: o } = window.PLOTTOS_SETTINGS_BOOT;
  return window.wp.apiFetch({
    path: e.startsWith("/") ? e : `/${e}`,
    method: t.method || "GET",
    data: t.data,
    headers: { "X-WP-Nonce": o }
  });
}
const kc = {
  setup() {
    const e = xt(!0), t = xt(!1), n = xt([]), o = xt({ apply_on_archives: !0, apply_on_search: !1, enabled_types: [] }), s = xt(""), r = Pr(
      () => n.value.filter(
        (f) => (f.label + f.slug).toLowerCase().includes(s.value.toLowerCase())
      )
    );
    or(async () => {
      var f, d;
      console.log("[PLOTTOS] onMounted fired");
      try {
        const p = await ys("plottos/v1/settings");
        console.log("[PLOTTOS] GET result:", p), n.value = (f = p == null ? void 0 : p.postTypes) != null ? f : [], o.value = (d = p == null ? void 0 : p.settings) != null ? d : o.value;
      } catch (p) {
        console.error("[PLOTTOS] GET failed:", p);
      } finally {
        e.value = !1;
      }
    });
    async function i() {
      var f, d, p, a;
      t.value = !0;
      try {
        const g = await ys("plottos/v1/settings", {
          method: "PUT",
          data: o.value
        });
        o.value = g.settings, (d = (f = wp == null ? void 0 : wp.toast) == null ? void 0 : f.success) == null || d.call(f, window.PLOTTOS_SETTINGS_BOOT.i18n.saved);
      } catch {
        (a = (p = wp == null ? void 0 : wp.toast) == null ? void 0 : p.error) == null || a.call(p, window.PLOTTOS_SETTINGS_BOOT.i18n.error);
      } finally {
        t.value = !1;
      }
    }
    function c(f) {
      const d = new Set(o.value.enabled_types);
      d.has(f) ? d.delete(f) : d.add(f), o.value.enabled_types = Array.from(d);
    }
    return { loading: e, saving: t, form: o, postTypes: n, filteredTypes: r, filter: s, save: i, toggleType: c };
  },
  template: `
    <div v-if="loading">Loading…</div>
    <div v-else class="plottos-settings">
      <div class="plottos-card">
        <h2>Apply Ordering</h2>
        <label><input type="checkbox" v-model="form.apply_on_archives"> Apply on archives</label>
        <label class="ml-4" :class="{disabled: !form.apply_on_archives}">
          <input type="checkbox" v-model="form.apply_on_search" :disabled="!form.apply_on_archives">
          Include search results
        </label>
      </div>

      <div class="plottos-card">
        <h2>Enabled Post Types</h2>
        <input type="search" v-model="filter" placeholder="Filter post types…" />
        <div class="pt-grid">
          <label v-for="pt in filteredTypes" :key="pt.slug" class="pt-item">
            <input type="checkbox"
                   :checked="form.enabled_types.includes(pt.slug)"
                   @change="toggleType(pt.slug)">
            <span>{{ pt.label }} <small>({{ pt.slug }})</small></span>
          </label>
        </div>
      </div>

      <button class="button button-primary" :disabled="saving" @click="save">
        {{ saving ? 'Saving…' : 'Save settings' }}
      </button>
    </div>
  `
};
(function() {
  const t = document.getElementById("plottos-cpt-ordering-settings-root");
  console.log("[PLOTTOS] mount el found?", !!t), t && (console.log("[PLOTTOS] creating app…"), Lc(kc).mount(t));
})();
//# sourceMappingURL=admin-settings.js.map
