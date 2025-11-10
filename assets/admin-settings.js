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
const B = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, $t = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], X = () => {
}, Os = () => !1, Ut = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ln = (e) => e.startsWith("onUpdate:"), q = Object.assign, co = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Mr = Object.prototype.hasOwnProperty, j = (e, t) => Mr.call(e, t), C = Array.isArray, gt = (e) => En(e) === "[object Map]", Rr = (e) => En(e) === "[object Set]", $ = (e) => typeof e == "function", J = (e) => typeof e == "string", Et = (e) => typeof e == "symbol", k = (e) => e !== null && typeof e == "object", fo = (e) => (k(e) || $(e)) && $(e.then) && $(e.catch), Fr = Object.prototype.toString, En = (e) => Fr.call(e), uo = (e) => En(e).slice(8, -1), jr = (e) => En(e) === "[object Object]", ao = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Pt = /* @__PURE__ */ Ke(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Hr = /* @__PURE__ */ Ke(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Nn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Lr = /-\w/g, be = Nn(
  (e) => e.replace(Lr, (t) => t.slice(1).toUpperCase())
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
let Lo;
const Wt = () => Lo || (Lo = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof global != "undefined" ? global : {});
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
function Ds(e) {
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
const An = /* @__PURE__ */ new WeakSet();
class ws {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ue && ue.active && ue.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, An.has(this) && (An.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Vs(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Uo(this), Ss(this);
    const t = U, n = ye;
    U = this, ye = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && U !== this && De(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Ts(this), U = t, ye = n, this.flags &= -3;
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
    this.flags & 64 ? An.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let xs = 0, It, At;
function Vs(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = At, At = e;
    return;
  }
  e.next = It, It = e;
}
function go() {
  xs++;
}
function mo() {
  if (--xs > 0)
    return;
  if (At) {
    let t = At;
    for (At = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; It; ) {
    let t = It;
    for (It = void 0; t; ) {
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
function Ss(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ts(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === n && (n = s), _o(o), oi(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = t, e.depsTail = n;
}
function kn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Cs(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Cs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ft) || (e.globalVersion = Ft, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !kn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = U, o = ye;
  U = e, ye = !0;
  try {
    Ss(e);
    const s = e.fn(e._value);
    (t.version === 0 || Qe(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    U = n, ye = o, Ts(e), e.flags &= -3;
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
const $s = [];
function we() {
  $s.push(ye), ye = !1;
}
function xe() {
  const e = $s.pop();
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
let Ft = 0;
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
      n = this.activeLink = new si(U, this), U.deps ? (n.prevDep = U.depsTail, U.depsTail.nextDep = n, U.depsTail = n) : U.deps = U.depsTail = n, Ps(n);
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
    this.version++, Ft++, this.notify(t);
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
function Ps(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Ps(o);
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
function Pe(e, t, n, o, s, r) {
  const i = Gn.get(e);
  if (!i) {
    Ft++;
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
      i.forEach((u, g) => {
        (g === "length" || g === jt || !Et(g) && g >= p) && c(u);
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
  const t = A(e);
  return t === e ? t : (z(t, "iterate", jt), ae(e) ? t : t.map(re));
}
function Eo(e) {
  return z(e = A(e), "iterate", jt), e;
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
    return Fe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Fe(this, "filter", e, t, (n) => n.map(re), arguments);
  },
  find(e, t) {
    return Fe(this, "find", e, t, re, arguments);
  },
  findIndex(e, t) {
    return Fe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Fe(this, "findLast", e, t, re, arguments);
  },
  findLastIndex(e, t) {
    return Fe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Fe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Rn(this, "includes", e);
  },
  indexOf(...e) {
    return Rn(this, "indexOf", e);
  },
  join(e) {
    return dt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Rn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Fe(this, "map", e, t, void 0, arguments);
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
    return Fe(this, "some", e, t, void 0, arguments);
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
function Fe(e, t, n, o, s, r) {
  const i = Eo(e), c = i !== e && !ae(e), f = i[t];
  if (f !== ii[t]) {
    const u = f.apply(e, r);
    return c ? re(u) : u;
  }
  let d = n;
  i !== e && (c ? d = function(u, g) {
    return n.call(this, re(u), g, e);
  } : n.length > 2 && (d = function(u, g) {
    return n.call(this, u, g, e);
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
function Rn(e, t, n) {
  const o = A(e);
  z(o, "iterate", jt);
  const s = o[t](...n);
  return (s === -1 || s === !1) && fn(n[0]) ? (n[0] = A(n[0]), o[t](...n)) : s;
}
function wt(e, t, n = []) {
  we(), go();
  const o = A(e)[t].apply(e, n);
  return mo(), xe(), o;
}
const li = /* @__PURE__ */ Ke("__proto__,__v_isRef,__isVue"), Is = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Et)
);
function ci(e) {
  Et(e) || (e = String(e));
  const t = A(this);
  return z(t, "has", e), t.hasOwnProperty(e);
}
class As {
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
      return o === (s ? r ? Ls : Hs : r ? js : Fs).get(t) || // receiver is not the reactive proxy, but has the same prototype
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
    if ((Et(n) ? Is.has(n) : li(n)) || (s || z(t, "get", n), r))
      return c;
    if (Y(c)) {
      const f = i && ao(n) ? c : c.value;
      return s && k(f) ? Yn(f) : f;
    }
    return k(c) ? s ? Yn(c) : No(c) : c;
  }
}
class Ms extends As {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const f = Be(r);
      if (!ae(o) && !Be(o) && (r = A(r), o = A(o)), !C(t) && Y(r) && !Y(o))
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
    return t === A(s) && (i ? Qe(o, r) && Pe(t, "set", n, o, r) : Pe(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = j(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && Pe(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Et(n) || !Is.has(n)) && z(t, "has", n), o;
  }
  ownKeys(t) {
    return z(
      t,
      "iterate",
      C(t) ? "length" : it
    ), Reflect.ownKeys(t);
  }
}
class Rs extends As {
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
const fi = /* @__PURE__ */ new Ms(), ui = /* @__PURE__ */ new Rs(), ai = /* @__PURE__ */ new Ms(!0), pi = /* @__PURE__ */ new Rs(!0), Jn = (e) => e, Yt = (e) => Reflect.getPrototypeOf(e);
function di(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = A(s), i = gt(r), c = e === "entries" || e === Symbol.iterator && i, f = e === "keys" && i, d = s[e](...o), p = n ? Jn : t ? zn : re;
    return !t && z(
      r,
      "iterate",
      f ? qn : it
    ), {
      // iterator protocol
      next() {
        const { value: u, done: g } = d.next();
        return g ? { value: u, done: g } : {
          value: c ? [p(u[0]), p(u[1])] : p(u),
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
        A(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function hi(e, t) {
  const n = {
    get(s) {
      const r = this.__v_raw, i = A(r), c = A(s);
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
      return !e && z(A(s), "iterate", it), s.size;
    },
    has(s) {
      const r = this.__v_raw, i = A(r), c = A(s);
      return e || (Qe(s, c) && z(i, "has", s), z(i, "has", c)), s === c ? r.has(s) : r.has(s) || r.has(c);
    },
    forEach(s, r) {
      const i = this, c = i.__v_raw, f = A(c), d = t ? Jn : e ? zn : re;
      return !e && z(f, "iterate", it), c.forEach((p, u) => s.call(r, d(p), d(u), i));
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
        !t && !ae(s) && !Be(s) && (s = A(s));
        const r = A(this);
        return Yt(r).has.call(r, s) || (r.add(s), Pe(r, "add", s, s)), this;
      },
      set(s, r) {
        !t && !ae(r) && !Be(r) && (r = A(r));
        const i = A(this), { has: c, get: f } = Yt(i);
        let d = c.call(i, s);
        d ? process.env.NODE_ENV !== "production" && Bo(i, c, s) : (s = A(s), d = c.call(i, s));
        const p = f.call(i, s);
        return i.set(s, r), d ? Qe(r, p) && Pe(i, "set", s, r, p) : Pe(i, "add", s, r), this;
      },
      delete(s) {
        const r = A(this), { has: i, get: c } = Yt(r);
        let f = i.call(r, s);
        f ? process.env.NODE_ENV !== "production" && Bo(r, i, s) : (s = A(s), f = i.call(r, s));
        const d = c ? c.call(r, s) : void 0, p = r.delete(s);
        return f && Pe(r, "delete", s, void 0, d), p;
      },
      clear() {
        const s = A(this), r = s.size !== 0, i = process.env.NODE_ENV !== "production" ? gt(s) ? new Map(s) : new Set(s) : void 0, c = s.clear();
        return r && Pe(
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
  const o = A(n);
  if (o !== n && t.call(e, o)) {
    const s = uo(e);
    De(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Fs = /* @__PURE__ */ new WeakMap(), js = /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap();
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
    Fs
  );
}
function bi(e) {
  return On(
    e,
    !1,
    ai,
    mi,
    js
  );
}
function Yn(e) {
  return On(
    e,
    !0,
    ui,
    _i,
    Hs
  );
}
function Ie(e) {
  return On(
    e,
    !0,
    pi,
    vi,
    Ls
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
function A(e) {
  const t = e && e.__v_raw;
  return t ? A(t) : e;
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
    this.dep = new vo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : A(t), this._value = n ? t : re(t), this.__v_isShallow = n;
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
    t = o ? t : A(t), Qe(t, n) && (this._rawValue = t, this._value = o ? t : re(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
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
function Us(e) {
  return mt(e) ? e : new Proxy(e, xi);
}
class Vi {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new vo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ft - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    U !== this)
      return Vs(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Cs(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && De("Write operation failed: computed value is readonly");
  }
}
function Si(e, t, n = !1) {
  let o, s;
  $(e) ? o = e : (o = e.get, s = e.set);
  const r = new Vi(o, s, n);
  return process.env.NODE_ENV !== "production" && t && !n && (r.onTrack = t.onTrack, r.onTrigger = t.onTrigger), r;
}
const Xt = {}, un = /* @__PURE__ */ new WeakMap();
let rt;
function Ti(e, t = !1, n = rt) {
  if (n) {
    let o = un.get(n);
    o || un.set(n, o = []), o.push(e);
  } else
    process.env.NODE_ENV !== "production" && !t && De(
      "onWatcherCleanup() was called when there was no active watcher to associate with."
    );
}
function Ci(e, t, n = B) {
  const { immediate: o, deep: s, once: r, scheduler: i, augmentJob: c, call: f } = n, d = (S) => {
    (n.onWarn || De)(
      "Invalid watch source: ",
      S,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (S) => s ? S : ae(S) || s === !1 || s === 0 ? Xe(S, 1) : Xe(S);
  let u, g, O, P, V = !1, Z = !1;
  if (Y(e) ? (g = () => e.value, V = ae(e)) : mt(e) ? (g = () => p(e), V = !0) : C(e) ? (Z = !0, V = e.some((S) => mt(S) || ae(S)), g = () => e.map((S) => {
    if (Y(S))
      return S.value;
    if (mt(S))
      return p(S);
    if ($(S))
      return f ? f(S, 2) : S();
    process.env.NODE_ENV !== "production" && d(S);
  })) : $(e) ? t ? g = f ? () => f(e, 2) : e : g = () => {
    if (O) {
      we();
      try {
        O();
      } finally {
        xe();
      }
    }
    const S = rt;
    rt = u;
    try {
      return f ? f(e, 3, [P]) : e(P);
    } finally {
      rt = S;
    }
  } : (g = X, process.env.NODE_ENV !== "production" && d(e)), t && s) {
    const S = g, Q = s === !0 ? 1 / 0 : s;
    g = () => Xe(S(), Q);
  }
  const G = ni(), L = () => {
    u.stop(), G && G.active && co(G.effects, u);
  };
  if (r && t) {
    const S = t;
    t = (...Q) => {
      S(...Q), L();
    };
  }
  let H = Z ? new Array(e.length).fill(Xt) : Xt;
  const pe = (S) => {
    if (!(!(u.flags & 1) || !u.dirty && !S))
      if (t) {
        const Q = u.run();
        if (s || V || (Z ? Q.some((me, te) => Qe(me, H[te])) : Qe(Q, H))) {
          O && O();
          const me = rt;
          rt = u;
          try {
            const te = [
              Q,
              // pass undefined as the old value when it's changed for the first time
              H === Xt ? void 0 : Z && H[0] === Xt ? [] : H,
              P
            ];
            H = Q, f ? f(t, 3, te) : (
              // @ts-expect-error
              t(...te)
            );
          } finally {
            rt = me;
          }
        }
      } else
        u.run();
  };
  return c && c(pe), u = new ws(g), u.scheduler = i ? () => i(pe, !1) : pe, P = (S) => Ti(S, !1, u), O = u.onStop = () => {
    const S = un.get(u);
    if (S) {
      if (f)
        f(S, 4);
      else
        for (const Q of S)
          Q();
      un.delete(u);
    }
  }, process.env.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? o ? pe(!0) : H = u.run() : i ? i(pe.bind(null, !0), !0) : u.run(), L.pause = u.pause.bind(u), L.resume = u.resume.bind(u), L.stop = L, L;
}
function Xe(e, t = 1 / 0, n) {
  if (t <= 0 || !k(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, Y(e))
    Xe(e.value, t, n);
  else if (C(e))
    for (let o = 0; o < e.length; o++)
      Xe(e[o], t, n);
  else if (Rr(e) || gt(e))
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
let Fn = !1;
function y(e, ...t) {
  if (Fn)
    return;
  Fn = !0, we();
  const n = lt.length ? lt[lt.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = $i();
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
          ({ vnode: r }) => `at <${Sn(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...Pi(s)), console.warn(...r);
  }
  xe(), Fn = !1;
}
function $i() {
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
function Pi(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Ii(n));
  }), t;
}
function Ii({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Sn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Ai(e.props), r] : [s + r];
}
function Ai(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Ws(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ws(e, t, n) {
  return J(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Y(t) ? (t = Ws(e, A(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = A(t), n ? t : [`${e}=`, t]);
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
  if ($(e)) {
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
        for (let u = 0; u < p.length; u++)
          if (p[u](e, f, d) === !1)
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
const Bs = /* @__PURE__ */ Promise.resolve();
let an = null;
const Ri = 100;
function Fi(e) {
  const t = an || Bs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ji(e) {
  let t = Ce + 1, n = ie.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = ie[o], r = Ht(s);
    r < e || r === e && s.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Dn(e) {
  if (!(e.flags & 1)) {
    const t = Ht(e), n = ie[ie.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ht(n) ? ie.push(e) : ie.splice(ji(t), 0, e), e.flags |= 1, Ks();
  }
}
function Ks() {
  an || (an = Bs.then(qs));
}
function ks(e) {
  C(e) ? _t.push(...e) : Ye && e.id === -1 ? Ye.splice(ht + 1, 0, e) : e.flags & 1 || (_t.push(e), e.flags |= 1), Ks();
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
function Gs(e) {
  if (_t.length) {
    const t = [...new Set(_t)].sort(
      (n, o) => Ht(n) - Ht(o)
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
const Ht = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function qs(e) {
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
    Ce = -1, ie.length = 0, Gs(e), an = null, (ie.length || _t.length) && qs(e);
  }
}
function yo(e, t) {
  const n = e.get(t) || 0;
  if (n > Ri) {
    const o = t.i, s = o && Vr(o.type);
    return Bt(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Ae = !1;
const en = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Wt().__VUE_HMR_RUNTIME__ = {
  createRecord: jn(Js),
  rerender: jn(Ui),
  reload: jn(Wi)
});
const ut = /* @__PURE__ */ new Map();
function Hi(e) {
  const t = e.type.__hmrId;
  let n = ut.get(t);
  n || (Js(t, e.type), n = ut.get(t)), n.instances.add(e);
}
function Li(e) {
  ut.get(e.type.__hmrId).instances.delete(e);
}
function Js(e, t) {
  return ut.has(e) ? !1 : (ut.set(e, {
    initialDef: pn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function pn(e) {
  return Sr(e) ? e.__vccOpts : e;
}
function Ui(e, t) {
  const n = ut.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, pn(o.type).render = t), o.renderCache = [], Ae = !0, o.job.flags & 8 || o.update(), Ae = !1;
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
      r.job.flags & 8 || (Ae = !0, r.parent.update(), Ae = !1, c.delete(r));
    }) : r.appContext.reload ? r.appContext.reload() : typeof window != "undefined" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  ks(() => {
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
let Ne, Tt = [], Xn = !1;
function Kt(e, ...t) {
  Ne ? Ne.emit(e, ...t) : Xn || Tt.push({ event: e, args: t });
}
function Oo(e, t) {
  var n, o;
  Ne = e, Ne ? (Ne.enabled = !0, Tt.forEach(({ event: s, args: r }) => Ne.emit(s, ...r)), Tt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window != "undefined" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Oo(r, t);
  }), setTimeout(() => {
    Ne || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Xn = !0, Tt = []);
  }, 3e3)) : (Xn = !0, Tt = []);
}
function Bi(e, t) {
  Kt("app:init", e, t, {
    Fragment: $e,
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
), Ys = /* @__PURE__ */ Do(
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
const Ji = /* @__PURE__ */ zs(
  "perf:start"
  /* PERFORMANCE_START */
), Yi = /* @__PURE__ */ zs(
  "perf:end"
  /* PERFORMANCE_END */
);
function zs(e) {
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
let ge = null, Xs = null;
function dn(e) {
  const t = ge;
  return ge = e, Xs = e && e.type.__scopeId || null, t;
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
    return process.env.NODE_ENV !== "production" && Ys(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Zs(e) {
  Hr(e) && y("Do not use built-in directive ids as custom directive id: " + e);
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
function Qs(e) {
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
  if (Rt(o) && !s) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Mt(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? Ao(o.component) : o.el, i = s ? null : r, { i: c, r: f } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, p = c.refs === B ? c.refs = {} : c.refs, u = c.setupState, g = A(u), O = u === B ? Os : (V) => process.env.NODE_ENV !== "production" && (j(g, V) && !Y(g[V]) && y(
    `Template ref "${V}" used on a non-ref value. It will not work in the production build.`
  ), Go.has(g[V])) ? !1 : j(g, V), P = (V) => process.env.NODE_ENV === "production" || !Go.has(V);
  if (d != null && d !== f) {
    if (qo(t), J(d))
      p[d] = null, O(d) && (u[d] = null);
    else if (Y(d)) {
      P(d) && (d.value = null);
      const V = t;
      V.k && (p[V.k] = null);
    }
  }
  if ($(f))
    Nt(f, c, 12, [i, p]);
  else {
    const V = J(f), Z = Y(f);
    if (V || Z) {
      const G = () => {
        if (e.f) {
          const L = V ? O(f) ? u[f] : p[f] : P(f) || !e.k ? f.value : p[e.k];
          if (s)
            C(L) && co(L, r);
          else if (C(L))
            L.includes(r) || L.push(r);
          else if (V)
            p[f] = [r], O(f) && (u[f] = p[f]);
          else {
            const H = [r];
            P(f) && (f.value = H), e.k && (p[e.k] = H);
          }
        } else
          V ? (p[f] = i, O(f) && (u[f] = i)) : Z ? (P(f) && (f.value = i), e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
      };
      if (i) {
        const L = () => {
          G(), hn.delete(e);
        };
        L.id = -1, hn.set(e, L), he(L, n);
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
const Rt = (e) => !!e.type.__asyncLoader, xo = (e) => e.type.__isKeepAlive;
function tl(e, t) {
  er(e, "a", t);
}
function nl(e, t) {
  er(e, "da", t);
}
function er(e, t, n = ee) {
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
  nr(() => {
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
  (!Lt || e === "sp") && wn(e, (...o) => t(...o), n);
}, sl = ke("bm"), tr = ke("m"), rl = ke(
  "bu"
), il = ke("u"), ll = ke(
  "bum"
), nr = ke("um"), cl = ke(
  "sp"
), fl = ke("rtg"), ul = ke("rtc");
function al(e, t = ee) {
  wn("ec", e, t);
}
const pl = Symbol.for("v-ndc"), Zn = (e) => e ? Dr(e) ? Ao(e) : Zn(e.parent) : null, ct = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ q(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Ie(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Ie(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Ie(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Ie(e.refs) : e.refs,
    $parent: (e) => Zn(e.parent),
    $root: (e) => Zn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => So(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Dn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Fi.bind(e.proxy)),
    $watch: (e) => kl.bind(e)
  })
), Vo = (e) => e === "_" || e === "$", Hn = (e, t) => e !== B && !e.__isScriptSetup && j(e, t), or = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: c, appContext: f } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const O = i[t];
      if (O !== void 0)
        switch (O) {
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
        if (Hn(o, t))
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
    let u, g;
    if (p)
      return t === "$attrs" ? (z(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && _n()) : process.env.NODE_ENV !== "production" && t === "$slots" && z(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (u = c.__cssModules) && (u = u[t])
    )
      return u;
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
    return Hn(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && j(s, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== B && j(o, t) ? (o[t] = n, !0) : j(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(
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
    return !!(n[c] || e !== B && c[0] !== "$" && j(e, c) || Hn(t, c) || (f = r[0]) && j(f, c) || j(o, c) || j(ct, c) || j(s.config.globalProperties, c) || (d = i.__cssModules) && d[c]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : j(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (or.ownKeys = (e) => (y(
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
  Object.keys(A(n)).forEach((o) => {
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
  const t = So(e), n = e.proxy, o = e.ctx;
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
    beforeMount: u,
    mounted: g,
    beforeUpdate: O,
    updated: P,
    activated: V,
    deactivated: Z,
    beforeDestroy: G,
    beforeUnmount: L,
    destroyed: H,
    unmounted: pe,
    render: S,
    renderTracked: Q,
    renderTriggered: me,
    errorCaptured: te,
    serverPrefetch: le,
    // public API
    expose: Re,
    inheritAttrs: Ge,
    // assets
    components: _e,
    directives: qt,
    filters: Mo
  } = t, qe = process.env.NODE_ENV !== "production" ? ml() : null;
  if (process.env.NODE_ENV !== "production") {
    const [R] = e.propsOptions;
    if (R)
      for (const M in R)
        qe("Props", M);
  }
  if (d && vl(d, o, qe), i)
    for (const R in i) {
      const M = i[R];
      $(M) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, R, {
        value: M.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[R] = M.bind(n), process.env.NODE_ENV !== "production" && qe("Methods", R)) : process.env.NODE_ENV !== "production" && y(
        `Method "${R}" has type "${typeof M}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !$(s) && y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const R = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && fo(R) && y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !k(R))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = No(R), process.env.NODE_ENV !== "production")
      for (const M in R)
        qe("Data", M), Vo(M[0]) || Object.defineProperty(o, M, {
          configurable: !0,
          enumerable: !0,
          get: () => R[M],
          set: X
        });
  }
  if (Qn = !0, r)
    for (const R in r) {
      const M = r[R], Ve = $(M) ? M.bind(n, n) : $(M.get) ? M.get.bind(n, n) : X;
      process.env.NODE_ENV !== "production" && Ve === X && y(`Computed property "${R}" has no getter.`);
      const Tn = !$(M) && $(M.set) ? M.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(
          `Write operation failed: computed property "${R}" is readonly.`
        );
      } : X, bt = Tr({
        get: Ve,
        set: Tn
      });
      Object.defineProperty(o, R, {
        enumerable: !0,
        configurable: !0,
        get: () => bt.value,
        set: (at) => bt.value = at
      }), process.env.NODE_ENV !== "production" && qe("Computed", R);
    }
  if (c)
    for (const R in c)
      sr(c[R], o, n, R);
  if (f) {
    const R = $(f) ? f.call(n) : f;
    Reflect.ownKeys(R).forEach((M) => {
      Dl(M, R[M]);
    });
  }
  p && Yo(p, e, "c");
  function ce(R, M) {
    C(M) ? M.forEach((Ve) => R(Ve.bind(n))) : M && R(M.bind(n));
  }
  if (ce(sl, u), ce(tr, g), ce(rl, O), ce(il, P), ce(tl, V), ce(nl, Z), ce(al, te), ce(ul, Q), ce(fl, me), ce(ll, L), ce(nr, pe), ce(cl, le), C(Re))
    if (Re.length) {
      const R = e.exposed || (e.exposed = {});
      Re.forEach((M) => {
        Object.defineProperty(R, M, {
          get: () => n[M],
          set: (Ve) => n[M] = Ve,
          enumerable: !0
        });
      });
    } else
      e.exposed || (e.exposed = {});
  S && e.render === X && (e.render = S), Ge != null && (e.inheritAttrs = Ge), _e && (e.components = _e), qt && (e.directives = qt), le && Qs(e);
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
function sr(e, t, n, o) {
  let s = o.includes(".") ? mr(n, o) : () => n[o];
  if (J(e)) {
    const r = t[e];
    $(r) ? Un(s, r) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, r);
  } else if ($(e))
    Un(s, e.bind(n));
  else if (k(e))
    if (C(e))
      e.forEach((r) => sr(r, t, n, o));
    else {
      const r = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(r) ? Un(s, r, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function So(e) {
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
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
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
function rr() {
  return {
    app: null,
    config: {
      isNativeTag: Os,
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
    $(o) || (o = q({}, o)), s != null && !k(s) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), s = null);
    const r = rr(), i = /* @__PURE__ */ new WeakSet(), c = [];
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
      use(p, ...u) {
        return i.has(p) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : p && $(p.install) ? (i.add(p), p.install(d, ...u)) : $(p) ? (i.add(p), p(d, ...u)) : process.env.NODE_ENV !== "production" && y(
          'A plugin must either be a function or an object with an "install" function.'
        ), d;
      },
      mixin(p) {
        return r.mixins.includes(p) ? process.env.NODE_ENV !== "production" && y(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : r.mixins.push(p), d;
      },
      component(p, u) {
        return process.env.NODE_ENV !== "production" && ro(p, r.config), u ? (process.env.NODE_ENV !== "production" && r.components[p] && y(`Component "${p}" has already been registered in target app.`), r.components[p] = u, d) : r.components[p];
      },
      directive(p, u) {
        return process.env.NODE_ENV !== "production" && Zs(p), u ? (process.env.NODE_ENV !== "production" && r.directives[p] && y(`Directive "${p}" has already been registered in target app.`), r.directives[p] = u, d) : r.directives[p];
      },
      mount(p, u, g) {
        if (f)
          process.env.NODE_ENV !== "production" && y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && p.__vue_app__ && y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const O = d._ceVNode || ft(o, s);
          return O.appContext = r, g === !0 ? g = "svg" : g === !1 && (g = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            const P = tt(O);
            P.el = null, e(P, p, g);
          }), u && t ? t(O, p) : e(O, p, g), f = !0, d._container = p, p.__vue_app__ = d, process.env.NODE_ENV !== "production" && (d._instance = O.component, Bi(d, cs)), Ao(O.component);
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
      provide(p, u) {
        return process.env.NODE_ENV !== "production" && p in r.provides && (j(r.provides, p) ? y(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ) : y(
          `App already provides property with key "${String(p)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[p] = u, d;
      },
      runWithContext(p) {
        const u = vt;
        vt = d;
        try {
          return p();
        } finally {
          vt = u;
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
  const o = Or();
  if (o || vt) {
    let s = vt ? vt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const ir = {}, lr = () => Object.create(ir), cr = (e) => Object.getPrototypeOf(e) === ir;
function wl(e, t, n, o = !1) {
  const s = {}, r = lr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), fr(e, t, s, r);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  process.env.NODE_ENV !== "production" && ar(t || {}, s, e), n ? e.props = o ? s : bi(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
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
  } = e, c = A(s), [f] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && xl(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let u = 0; u < p.length; u++) {
        let g = p[u];
        if (xn(e.emitsOptions, g))
          continue;
        const O = t[g];
        if (f)
          if (j(r, g))
            O !== r[g] && (r[g] = O, d = !0);
          else {
            const P = be(g);
            s[P] = to(
              f,
              c,
              P,
              O,
              e,
              !1
            );
          }
        else
          O !== r[g] && (r[g] = O, d = !0);
      }
    }
  } else {
    fr(e, t, s, r) && (d = !0);
    let p;
    for (const u in c)
      (!t || // for camelCase
      !j(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = et(u)) === u || !j(t, p))) && (f ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[p] !== void 0) && (s[u] = to(
        f,
        c,
        u,
        void 0,
        e,
        !0
      )) : delete s[u]);
    if (r !== c)
      for (const u in r)
        (!t || !j(t, u)) && (delete r[u], d = !0);
  }
  d && Pe(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && ar(t || {}, s, e);
}
function fr(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let f in t) {
      if (Pt(f))
        continue;
      const d = t[f];
      let p;
      s && j(s, p = be(f)) ? !r || !r.includes(p) ? n[p] = d : (c || (c = {}))[p] = d : xn(e.emitsOptions, f) || (!(f in o) || d !== o[f]) && (o[f] = d, i = !0);
    }
  if (r) {
    const f = A(n), d = c || B;
    for (let p = 0; p < r.length; p++) {
      const u = r[p];
      n[u] = to(
        s,
        f,
        u,
        d[u],
        e,
        !j(d, u)
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
      if (i.type !== Function && !i.skipFactory && $(f)) {
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
const Sl = /* @__PURE__ */ new WeakMap();
function ur(e, t, n = !1) {
  const o = n ? Sl : t.propsCache, s = o.get(e);
  if (s)
    return s;
  const r = e.props, i = {}, c = [];
  let f = !1;
  if (!$(e)) {
    const p = (u) => {
      f = !0;
      const [g, O] = ur(u, t, !0);
      q(i, g), O && c.push(...O);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !f)
    return k(e) && o.set(e, $t), $t;
  if (C(r))
    for (let p = 0; p < r.length; p++) {
      process.env.NODE_ENV !== "production" && !J(r[p]) && y("props must be strings when using array syntax.", r[p]);
      const u = be(r[p]);
      Zo(u) && (i[u] = B);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !k(r) && y("invalid props options", r);
    for (const p in r) {
      const u = be(p);
      if (Zo(u)) {
        const g = r[p], O = i[u] = C(g) || $(g) ? { type: g } : q({}, g), P = O.type;
        let V = !1, Z = !0;
        if (C(P))
          for (let G = 0; G < P.length; ++G) {
            const L = P[G], H = $(L) && L.name;
            if (H === "Boolean") {
              V = !0;
              break;
            } else
              H === "String" && (Z = !1);
          }
        else
          V = $(P) && P.name === "Boolean";
        O[
          0
          /* shouldCast */
        ] = V, O[
          1
          /* shouldCastTrue */
        ] = Z, (V || j(O, "default")) && c.push(u);
      }
    }
  }
  const d = [i, c];
  return k(e) && o.set(e, d), d;
}
function Zo(e) {
  return e[0] !== "$" && !Pt(e) ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Tl(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function ar(e, t, n) {
  const o = A(t), s = n.propsOptions[0], r = Object.keys(e).map((i) => be(i));
  for (const i in s) {
    let c = s[i];
    c != null && Cl(
      i,
      o[i],
      c,
      process.env.NODE_ENV !== "production" ? Ie(o) : o,
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
      const p = C(r) ? r : [r], u = [];
      for (let g = 0; g < p.length && !d; g++) {
        const { valid: O, expectedType: P } = Pl(t, p[g]);
        u.push(P || ""), d = O;
      }
      if (!d) {
        y(Il(e, t, u));
        return;
      }
    }
    c && !c(t, o) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const $l = /* @__PURE__ */ Ke(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Pl(e, t) {
  let n;
  const o = Tl(t);
  if (o === "null")
    n = e === null;
  else if ($l(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = k(e) : o === "Array" ? n = C(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Il(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(bn).join(" | ")}`;
  const s = n[0], r = uo(t), i = Qo(t, s), c = Qo(t, r);
  return n.length === 1 && es(s) && !Al(s, r) && (o += ` with value ${i}`), o += `, got ${r} `, es(r) && (o += `with value ${c}.`), o;
}
function Qo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function es(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Al(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const To = (e) => e === "_" || e === "_ctx" || e === "$stable", Co = (e) => C(e) ? e.map(Ee) : [Ee(e)], Ml = (e, t, n) => {
  if (t._n)
    return t;
  const o = Xi((...s) => (process.env.NODE_ENV !== "production" && ee && !(n === null && ge) && !(n && n.root !== ee.root) && y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Co(t(...s))), n);
  return o._c = !1, o;
}, pr = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (To(s))
      continue;
    const r = e[s];
    if ($(r))
      t[s] = Ml(s, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && y(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const i = Co(r);
      t[s] = () => i;
    }
  }
}, dr = (e, t) => {
  process.env.NODE_ENV !== "production" && !xo(e.vnode) && y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Co(t);
  e.slots.default = () => n;
}, no = (e, t, n) => {
  for (const o in t)
    (n || !To(o)) && (e[o] = t[o]);
}, Rl = (e, t, n) => {
  const o = e.slots = lr();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (no(o, t, n), n && cn(o, "_", s, !0)) : pr(t, o);
  } else
    t && dr(e, t);
}, Fl = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let r = !0, i = B;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && Ae ? (no(s, t, n), Pe(e, "set", "$slots")) : n && c === 1 ? r = !1 : no(s, t, n) : (r = !t.$stable, pr(t, s)), i = t;
  } else
    t && (dr(e, t), i = { default: 1 });
  if (r)
    for (const c in s)
      !To(c) && i[c] == null && delete s[c];
};
let Vt, Ue;
function je(e, t) {
  e.appContext.config.performance && mn() && Ue.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Ji(e, t, mn() ? Ue.now() : Date.now());
}
function He(e, t) {
  if (e.appContext.config.performance && mn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end", s = `<${Sn(e, e.type)}> ${t}`;
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
function Hl(e) {
  return Ll(e);
}
function Ll(e, t) {
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
    parentNode: u,
    nextSibling: g,
    setScopeId: O = X,
    insertStaticContent: P
  } = e, V = (l, a, h, E = null, m = null, _ = null, D = void 0, b = null, N = process.env.NODE_ENV !== "production" && Ae ? !1 : !!a.dynamicChildren) => {
    if (l === a)
      return;
    l && !St(l, a) && (E = Jt(l), Je(l, m, _, !0), l = null), a.patchFlag === -2 && (N = !1, a.dynamicChildren = null);
    const { type: v, ref: T, shapeFlag: w } = a;
    switch (v) {
      case kt:
        Z(l, a, h, E);
        break;
      case Oe:
        G(l, a, h, E);
        break;
      case on:
        l == null ? L(a, h, E, D) : process.env.NODE_ENV !== "production" && H(l, a, h, D);
        break;
      case $e:
        qt(
          l,
          a,
          h,
          E,
          m,
          _,
          D,
          b,
          N
        );
        break;
      default:
        w & 1 ? Q(
          l,
          a,
          h,
          E,
          m,
          _,
          D,
          b,
          N
        ) : w & 6 ? Mo(
          l,
          a,
          h,
          E,
          m,
          _,
          D,
          b,
          N
        ) : w & 64 || w & 128 ? v.process(
          l,
          a,
          h,
          E,
          m,
          _,
          D,
          b,
          N,
          pt
        ) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", v, `(${typeof v})`);
    }
    T != null && m ? Mt(T, l && l.ref, _, a || l, !a) : T == null && l && l.ref != null && Mt(l.ref, null, _, l, !0);
  }, Z = (l, a, h, E) => {
    if (l == null)
      o(
        a.el = c(a.children),
        h,
        E
      );
    else {
      const m = a.el = l.el;
      a.children !== l.children && d(m, a.children);
    }
  }, G = (l, a, h, E) => {
    l == null ? o(
      a.el = f(a.children || ""),
      h,
      E
    ) : a.el = l.el;
  }, L = (l, a, h, E) => {
    [l.el, l.anchor] = P(
      l.children,
      a,
      h,
      E,
      l.el,
      l.anchor
    );
  }, H = (l, a, h, E) => {
    if (a.children !== l.children) {
      const m = g(l.anchor);
      S(l), [a.el, a.anchor] = P(
        a.children,
        h,
        m,
        E
      );
    } else
      a.el = l.el, a.anchor = l.anchor;
  }, pe = ({ el: l, anchor: a }, h, E) => {
    let m;
    for (; l && l !== a; )
      m = g(l), o(l, h, E), l = m;
    o(a, h, E);
  }, S = ({ el: l, anchor: a }) => {
    let h;
    for (; l && l !== a; )
      h = g(l), s(l), l = h;
    s(a);
  }, Q = (l, a, h, E, m, _, D, b, N) => {
    if (a.type === "svg" ? D = "svg" : a.type === "math" && (D = "mathml"), l == null)
      me(
        a,
        h,
        E,
        m,
        _,
        D,
        b,
        N
      );
    else {
      const v = l.el && l.el._isVueCE ? l.el : null;
      try {
        v && v._beginPatch(), Re(
          l,
          a,
          m,
          _,
          D,
          b,
          N
        );
      } finally {
        v && v._endPatch();
      }
    }
  }, me = (l, a, h, E, m, _, D, b) => {
    let N, v;
    const { props: T, shapeFlag: w, transition: x, dirs: I } = l;
    if (N = l.el = i(
      l.type,
      _,
      T && T.is,
      T
    ), w & 8 ? p(N, l.children) : w & 16 && le(
      l.children,
      N,
      null,
      E,
      m,
      Ln(l, _),
      D,
      b
    ), I && nt(l, null, E, "created"), te(N, l, l.scopeId, D, E), T) {
      for (const K in T)
        K !== "value" && !Pt(K) && r(N, K, null, T[K], _, E);
      "value" in T && r(N, "value", null, T.value, _), (v = T.onVnodeBeforeMount) && Te(v, E, l);
    }
    process.env.NODE_ENV !== "production" && (cn(N, "__vnode", l, !0), cn(N, "__vueParentComponent", E, !0)), I && nt(l, null, E, "beforeMount");
    const F = Ul(m, x);
    F && x.beforeEnter(N), o(N, a, h), ((v = T && T.onVnodeMounted) || F || I) && he(() => {
      v && Te(v, E, l), F && x.enter(N), I && nt(l, null, E, "mounted");
    }, m);
  }, te = (l, a, h, E, m) => {
    if (h && O(l, h), E)
      for (let _ = 0; _ < E.length; _++)
        O(l, E[_]);
    if (m) {
      let _ = m.subTree;
      if (process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && (_ = $o(_.children) || _), a === _ || Er(_.type) && (_.ssContent === a || _.ssFallback === a)) {
        const D = m.vnode;
        te(
          l,
          D,
          D.scopeId,
          D.slotScopeIds,
          m.parent
        );
      }
    }
  }, le = (l, a, h, E, m, _, D, b, N = 0) => {
    for (let v = N; v < l.length; v++) {
      const T = l[v] = b ? ze(l[v]) : Ee(l[v]);
      V(
        null,
        T,
        a,
        h,
        E,
        m,
        _,
        D,
        b
      );
    }
  }, Re = (l, a, h, E, m, _, D) => {
    const b = a.el = l.el;
    process.env.NODE_ENV !== "production" && (b.__vnode = a);
    let { patchFlag: N, dynamicChildren: v, dirs: T } = a;
    N |= l.patchFlag & 16;
    const w = l.props || B, x = a.props || B;
    let I;
    if (h && ot(h, !1), (I = x.onVnodeBeforeUpdate) && Te(I, h, a, l), T && nt(a, l, h, "beforeUpdate"), h && ot(h, !0), process.env.NODE_ENV !== "production" && Ae && (N = 0, D = !1, v = null), (w.innerHTML && x.innerHTML == null || w.textContent && x.textContent == null) && p(b, ""), v ? (Ge(
      l.dynamicChildren,
      v,
      b,
      h,
      E,
      Ln(a, m),
      _
    ), process.env.NODE_ENV !== "production" && nn(l, a)) : D || Ve(
      l,
      a,
      b,
      null,
      h,
      E,
      Ln(a, m),
      _,
      !1
    ), N > 0) {
      if (N & 16)
        _e(b, w, x, h, m);
      else if (N & 2 && w.class !== x.class && r(b, "class", null, x.class, m), N & 4 && r(b, "style", w.style, x.style, m), N & 8) {
        const F = a.dynamicProps;
        for (let K = 0; K < F.length; K++) {
          const W = F[K], fe = w[W], ne = x[W];
          (ne !== fe || W === "value") && r(b, W, fe, ne, m, h);
        }
      }
      N & 1 && l.children !== a.children && p(b, a.children);
    } else
      !D && v == null && _e(b, w, x, h, m);
    ((I = x.onVnodeUpdated) || T) && he(() => {
      I && Te(I, h, a, l), T && nt(a, l, h, "updated");
    }, E);
  }, Ge = (l, a, h, E, m, _, D) => {
    for (let b = 0; b < a.length; b++) {
      const N = l[b], v = a[b], T = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === $e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !St(N, v) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 198) ? u(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      V(
        N,
        v,
        T,
        null,
        E,
        m,
        _,
        D,
        !0
      );
    }
  }, _e = (l, a, h, E, m) => {
    if (a !== h) {
      if (a !== B)
        for (const _ in a)
          !Pt(_) && !(_ in h) && r(
            l,
            _,
            a[_],
            null,
            m,
            E
          );
      for (const _ in h) {
        if (Pt(_))
          continue;
        const D = h[_], b = a[_];
        D !== b && _ !== "value" && r(l, _, b, D, m, E);
      }
      "value" in h && r(l, "value", a.value, h.value, m);
    }
  }, qt = (l, a, h, E, m, _, D, b, N) => {
    const v = a.el = l ? l.el : c(""), T = a.anchor = l ? l.anchor : c("");
    let { patchFlag: w, dynamicChildren: x, slotScopeIds: I } = a;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ae || w & 2048) && (w = 0, N = !1, x = null), I && (b = b ? b.concat(I) : I), l == null ? (o(v, h, E), o(T, h, E), le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      a.children || [],
      h,
      T,
      m,
      _,
      D,
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
      D,
      b
    ), process.env.NODE_ENV !== "production" ? nn(l, a) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (a.key != null || m && a === m.subTree) && nn(
        l,
        a,
        !0
        /* shallow */
      )
    )) : Ve(
      l,
      a,
      h,
      T,
      m,
      _,
      D,
      b,
      N
    );
  }, Mo = (l, a, h, E, m, _, D, b, N) => {
    a.slotScopeIds = b, l == null ? a.shapeFlag & 512 ? m.ctx.activate(
      a,
      h,
      E,
      D,
      N
    ) : qe(
      a,
      h,
      E,
      m,
      _,
      D,
      N
    ) : ce(l, a, N);
  }, qe = (l, a, h, E, m, _, D) => {
    const b = l.component = lc(
      l,
      E,
      m
    );
    if (process.env.NODE_ENV !== "production" && b.type.__hmrId && Hi(b), process.env.NODE_ENV !== "production" && (Zt(l), je(b, "mount")), xo(l) && (b.ctx.renderer = pt), process.env.NODE_ENV !== "production" && je(b, "init"), fc(b, !1, D), process.env.NODE_ENV !== "production" && He(b, "init"), process.env.NODE_ENV !== "production" && Ae && (l.el = null), b.asyncDep) {
      if (m && m.registerDep(b, R, D), !l.el) {
        const N = b.subTree = ft(Oe);
        G(null, N, a, h), l.placeholder = N.el;
      }
    } else
      R(
        b,
        l,
        a,
        h,
        m,
        _,
        D
      );
    process.env.NODE_ENV !== "production" && (Qt(), He(b, "mount"));
  }, ce = (l, a, h) => {
    const E = a.component = l.component;
    if (Xl(l, a, h))
      if (E.asyncDep && !E.asyncResolved) {
        process.env.NODE_ENV !== "production" && Zt(a), M(E, a, h), process.env.NODE_ENV !== "production" && Qt();
        return;
      } else
        E.next = a, E.update();
    else
      a.el = l.el, E.vnode = a;
  }, R = (l, a, h, E, m, _, D) => {
    const b = () => {
      if (l.isMounted) {
        let { next: w, bu: x, u: I, parent: F, vnode: K } = l;
        {
          const de = hr(l);
          if (de) {
            w && (w.el = K.el, M(l, w, D)), de.asyncDep.then(() => {
              l.isUnmounted || b();
            });
            return;
          }
        }
        let W = w, fe;
        process.env.NODE_ENV !== "production" && Zt(w || l.vnode), ot(l, !1), w ? (w.el = K.el, M(l, w, D)) : w = K, x && Dt(x), (fe = w.props && w.props.onVnodeBeforeUpdate) && Te(fe, F, w, K), ot(l, !0), process.env.NODE_ENV !== "production" && je(l, "render");
        const ne = Wn(l);
        process.env.NODE_ENV !== "production" && He(l, "render");
        const ve = l.subTree;
        l.subTree = ne, process.env.NODE_ENV !== "production" && je(l, "patch"), V(
          ve,
          ne,
          // parent may have changed if it's in a teleport
          u(ve.el),
          // anchor may have changed if it's in a fragment
          Jt(ve),
          l,
          m,
          _
        ), process.env.NODE_ENV !== "production" && He(l, "patch"), w.el = ne.el, W === null && Zl(l, ne.el), I && he(I, m), (fe = w.props && w.props.onVnodeUpdated) && he(
          () => Te(fe, F, w, K),
          m
        ), process.env.NODE_ENV !== "production" && Ys(l), process.env.NODE_ENV !== "production" && Qt();
      } else {
        let w;
        const { el: x, props: I } = a, { bm: F, m: K, parent: W, root: fe, type: ne } = l, ve = Rt(a);
        if (ot(l, !1), F && Dt(F), !ve && (w = I && I.onVnodeBeforeMount) && Te(w, W, a), ot(l, !0), x && In) {
          const de = () => {
            process.env.NODE_ENV !== "production" && je(l, "render"), l.subTree = Wn(l), process.env.NODE_ENV !== "production" && He(l, "render"), process.env.NODE_ENV !== "production" && je(l, "hydrate"), In(
              x,
              l.subTree,
              l,
              m,
              null
            ), process.env.NODE_ENV !== "production" && He(l, "hydrate");
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
          process.env.NODE_ENV !== "production" && He(l, "render"), process.env.NODE_ENV !== "production" && je(l, "patch"), V(
            null,
            de,
            h,
            E,
            l,
            m,
            _
          ), process.env.NODE_ENV !== "production" && He(l, "patch"), a.el = de.el;
        }
        if (K && he(K, m), !ve && (w = I && I.onVnodeMounted)) {
          const de = a;
          he(
            () => Te(w, W, de),
            m
          );
        }
        (a.shapeFlag & 256 || W && Rt(W.vnode) && W.vnode.shapeFlag & 256) && l.a && he(l.a, m), l.isMounted = !0, process.env.NODE_ENV !== "production" && ki(l), a = h = E = null;
      }
    };
    l.scope.on();
    const N = l.effect = new ws(b);
    l.scope.off();
    const v = l.update = N.run.bind(N), T = l.job = N.runIfDirty.bind(N);
    T.i = l, T.id = l.uid, N.scheduler = () => Dn(T), ot(l, !0), process.env.NODE_ENV !== "production" && (N.onTrack = l.rtc ? (w) => Dt(l.rtc, w) : void 0, N.onTrigger = l.rtg ? (w) => Dt(l.rtg, w) : void 0), v();
  }, M = (l, a, h) => {
    a.component = l;
    const E = l.vnode.props;
    l.vnode = a, l.next = null, Vl(l, a.props, E, h), Fl(l, a.children, h), we(), Ko(l), xe();
  }, Ve = (l, a, h, E, m, _, D, b, N = !1) => {
    const v = l && l.children, T = l ? l.shapeFlag : 0, w = a.children, { patchFlag: x, shapeFlag: I } = a;
    if (x > 0) {
      if (x & 128) {
        bt(
          v,
          w,
          h,
          E,
          m,
          _,
          D,
          b,
          N
        );
        return;
      } else if (x & 256) {
        Tn(
          v,
          w,
          h,
          E,
          m,
          _,
          D,
          b,
          N
        );
        return;
      }
    }
    I & 8 ? (T & 16 && yt(v, m, _), w !== v && p(h, w)) : T & 16 ? I & 16 ? bt(
      v,
      w,
      h,
      E,
      m,
      _,
      D,
      b,
      N
    ) : yt(v, m, _, !0) : (T & 8 && p(h, ""), I & 16 && le(
      w,
      h,
      E,
      m,
      _,
      D,
      b,
      N
    ));
  }, Tn = (l, a, h, E, m, _, D, b, N) => {
    l = l || $t, a = a || $t;
    const v = l.length, T = a.length, w = Math.min(v, T);
    let x;
    for (x = 0; x < w; x++) {
      const I = a[x] = N ? ze(a[x]) : Ee(a[x]);
      V(
        l[x],
        I,
        h,
        null,
        m,
        _,
        D,
        b,
        N
      );
    }
    v > T ? yt(
      l,
      m,
      _,
      !0,
      !1,
      w
    ) : le(
      a,
      h,
      E,
      m,
      _,
      D,
      b,
      N,
      w
    );
  }, bt = (l, a, h, E, m, _, D, b, N) => {
    let v = 0;
    const T = a.length;
    let w = l.length - 1, x = T - 1;
    for (; v <= w && v <= x; ) {
      const I = l[v], F = a[v] = N ? ze(a[v]) : Ee(a[v]);
      if (St(I, F))
        V(
          I,
          F,
          h,
          null,
          m,
          _,
          D,
          b,
          N
        );
      else
        break;
      v++;
    }
    for (; v <= w && v <= x; ) {
      const I = l[w], F = a[x] = N ? ze(a[x]) : Ee(a[x]);
      if (St(I, F))
        V(
          I,
          F,
          h,
          null,
          m,
          _,
          D,
          b,
          N
        );
      else
        break;
      w--, x--;
    }
    if (v > w) {
      if (v <= x) {
        const I = x + 1, F = I < T ? a[I].el : E;
        for (; v <= x; )
          V(
            null,
            a[v] = N ? ze(a[v]) : Ee(a[v]),
            h,
            F,
            m,
            _,
            D,
            b,
            N
          ), v++;
      }
    } else if (v > x)
      for (; v <= w; )
        Je(l[v], m, _, !0), v++;
    else {
      const I = v, F = v, K = /* @__PURE__ */ new Map();
      for (v = F; v <= x; v++) {
        const oe = a[v] = N ? ze(a[v]) : Ee(a[v]);
        oe.key != null && (process.env.NODE_ENV !== "production" && K.has(oe.key) && y(
          "Duplicate keys found during update:",
          JSON.stringify(oe.key),
          "Make sure keys are unique."
        ), K.set(oe.key, v));
      }
      let W, fe = 0;
      const ne = x - F + 1;
      let ve = !1, de = 0;
      const Ot = new Array(ne);
      for (v = 0; v < ne; v++)
        Ot[v] = 0;
      for (v = I; v <= w; v++) {
        const oe = l[v];
        if (fe >= ne) {
          Je(oe, m, _, !0);
          continue;
        }
        let Se;
        if (oe.key != null)
          Se = K.get(oe.key);
        else
          for (W = F; W <= x; W++)
            if (Ot[W - F] === 0 && St(oe, a[W])) {
              Se = W;
              break;
            }
        Se === void 0 ? Je(oe, m, _, !0) : (Ot[Se - F] = v + 1, Se >= de ? de = Se : ve = !0, V(
          oe,
          a[Se],
          h,
          null,
          m,
          _,
          D,
          b,
          N
        ), fe++);
      }
      const Fo = ve ? Wl(Ot) : $t;
      for (W = Fo.length - 1, v = ne - 1; v >= 0; v--) {
        const oe = F + v, Se = a[oe], jo = a[oe + 1], Ho = oe + 1 < T ? (
          // #13559, fallback to el placeholder for unresolved async component
          jo.el || jo.placeholder
        ) : E;
        Ot[v] === 0 ? V(
          null,
          Se,
          h,
          Ho,
          m,
          _,
          D,
          b,
          N
        ) : ve && (W < 0 || v !== Fo[W] ? at(Se, h, Ho, 2) : W--);
      }
    }
  }, at = (l, a, h, E, m = null) => {
    const { el: _, type: D, transition: b, children: N, shapeFlag: v } = l;
    if (v & 6) {
      at(l.component.subTree, a, h, E);
      return;
    }
    if (v & 128) {
      l.suspense.move(a, h, E);
      return;
    }
    if (v & 64) {
      D.move(l, a, h, pt);
      return;
    }
    if (D === $e) {
      o(_, a, h);
      for (let w = 0; w < N.length; w++)
        at(N[w], a, h, E);
      o(l.anchor, a, h);
      return;
    }
    if (D === on) {
      pe(l, a, h);
      return;
    }
    if (E !== 2 && v & 1 && b)
      if (E === 0)
        b.beforeEnter(_), o(_, a, h), he(() => b.enter(_), m);
      else {
        const { leave: w, delayLeave: x, afterLeave: I } = b, F = () => {
          l.ctx.isUnmounted ? s(_) : o(_, a, h);
        }, K = () => {
          _._isLeaving && _[el](
            !0
            /* cancelled */
          ), w(_, () => {
            F(), I && I();
          });
        };
        x ? x(_, F, K) : K();
      }
    else
      o(_, a, h);
  }, Je = (l, a, h, E = !1, m = !1) => {
    const {
      type: _,
      props: D,
      ref: b,
      children: N,
      dynamicChildren: v,
      shapeFlag: T,
      patchFlag: w,
      dirs: x,
      cacheIndex: I
    } = l;
    if (w === -2 && (m = !1), b != null && (we(), Mt(b, null, h, l, !0), xe()), I != null && (a.renderCache[I] = void 0), T & 256) {
      a.ctx.deactivate(l);
      return;
    }
    const F = T & 1 && x, K = !Rt(l);
    let W;
    if (K && (W = D && D.onVnodeBeforeUnmount) && Te(W, a, l), T & 6)
      Ar(l.component, h, E);
    else {
      if (T & 128) {
        l.suspense.unmount(h, E);
        return;
      }
      F && nt(l, null, a, "beforeUnmount"), T & 64 ? l.type.remove(
        l,
        a,
        h,
        pt,
        E
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== $e || w > 0 && w & 64) ? yt(
        v,
        a,
        h,
        !1,
        !0
      ) : (_ === $e && w & 384 || !m && T & 16) && yt(N, a, h), E && Cn(l);
    }
    (K && (W = D && D.onVnodeUnmounted) || F) && he(() => {
      W && Te(W, a, l), F && nt(l, null, a, "unmounted");
    }, h);
  }, Cn = (l) => {
    const { type: a, el: h, anchor: E, transition: m } = l;
    if (a === $e) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && m && !m.persisted ? l.children.forEach((D) => {
        D.type === Oe ? s(D.el) : Cn(D);
      }) : Ir(h, E);
      return;
    }
    if (a === on) {
      S(l);
      return;
    }
    const _ = () => {
      s(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (l.shapeFlag & 1 && m && !m.persisted) {
      const { leave: D, delayLeave: b } = m, N = () => D(h, _);
      b ? b(l.el, _, N) : N();
    } else
      _();
  }, Ir = (l, a) => {
    let h;
    for (; l !== a; )
      h = g(l), s(l), l = h;
    s(a);
  }, Ar = (l, a, h) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && Li(l);
    const { bum: E, scope: m, job: _, subTree: D, um: b, m: N, a: v } = l;
    ts(N), ts(v), E && Dt(E), m.stop(), _ && (_.flags |= 8, Je(D, l, a, h)), b && he(b, a), he(() => {
      l.isUnmounted = !0;
    }, a), process.env.NODE_ENV !== "production" && qi(l);
  }, yt = (l, a, h, E = !1, m = !1, _ = 0) => {
    for (let D = _; D < l.length; D++)
      Je(l[D], a, h, E, m);
  }, Jt = (l) => {
    if (l.shapeFlag & 6)
      return Jt(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const a = g(l.anchor || l.el), h = a && a[Zi];
    return h ? g(h) : a;
  };
  let $n = !1;
  const Ro = (l, a, h) => {
    l == null ? a._vnode && Je(a._vnode, null, null, !0) : V(
      a._vnode || null,
      l,
      a,
      null,
      null,
      null,
      h
    ), a._vnode = l, $n || ($n = !0, Ko(), Gs(), $n = !1);
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
  let Pn, In;
  return t && ([Pn, In] = t(
    pt
  )), {
    render: Ro,
    hydrate: Pn,
    createApp: Ol(Ro, Pn)
  };
}
function Ln({ type: e, props: t }, n) {
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
function hr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : hr(t);
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
  return process.env.NODE_ENV !== "production" && !$(t) && y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), gr(e, t, n);
}
function gr(e, t, n = B) {
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
  if (Lt) {
    if (r === "sync") {
      const O = Kl();
      d = O.__watcherHandles || (O.__watcherHandles = []);
    } else if (!f) {
      const O = () => {
      };
      return O.stop = X, O.resume = X, O.pause = X, O;
    }
  }
  const p = ee;
  c.call = (O, P, V) => Me(O, p, P, V);
  let u = !1;
  r === "post" ? c.scheduler = (O) => {
    he(O, p && p.suspense);
  } : r !== "sync" && (u = !0, c.scheduler = (O, P) => {
    P ? O() : Dn(O);
  }), c.augmentJob = (O) => {
    t && (O.flags |= 4), u && (O.flags |= 2, p && (O.id = p.uid, O.i = p));
  };
  const g = Ci(e, t, c);
  return Lt && (d ? d.push(g) : f && g()), g;
}
function kl(e, t, n) {
  const o = this.proxy, s = J(e) ? e.includes(".") ? mr(o, e) : () => o[e] : e.bind(o, o);
  let r;
  $(t) ? r = t : (r = t.handler, n = t);
  const i = Gt(this), c = gr(s, r.bind(o), n);
  return i(), c;
}
function mr(e, t) {
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
      propsOptions: [u]
    } = e;
    if (p)
      if (!(t in p))
        (!u || !(st(be(t)) in u)) && y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${st(be(t))}" prop.`
        );
      else {
        const g = p[t];
        $(g) && (g(...n) || y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), i = r && Gl(o, t.slice(7));
  if (i && (i.trim && (s = n.map((p) => J(p) ? p.trim() : p)), i.number && (s = n.map(Wr))), process.env.NODE_ENV !== "production" && zi(e, t, s), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[st(p)] && y(
      `Event "${p}" is emitted in component ${Sn(
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
function _r(e, t, n = !1) {
  const o = n ? Jl : t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let i = {}, c = !1;
  if (!$(e)) {
    const f = (d) => {
      const p = _r(d, t, !0);
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
    props: u,
    data: g,
    setupState: O,
    ctx: P,
    inheritAttrs: V
  } = e, Z = dn(e);
  let G, L;
  process.env.NODE_ENV !== "production" && (oo = !1);
  try {
    if (n.shapeFlag & 4) {
      const S = s || o, Q = process.env.NODE_ENV !== "production" && O.__isScriptSetup ? new Proxy(S, {
        get(me, te, le) {
          return y(
            `Property '${String(
              te
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(me, te, le);
        }
      }) : S;
      G = Ee(
        d.call(
          Q,
          S,
          p,
          process.env.NODE_ENV !== "production" ? Ie(u) : u,
          O,
          g,
          P
        )
      ), L = c;
    } else {
      const S = t;
      process.env.NODE_ENV !== "production" && c === u && _n(), G = Ee(
        S.length > 1 ? S(
          process.env.NODE_ENV !== "production" ? Ie(u) : u,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return _n(), Ie(c);
            },
            slots: i,
            emit: f
          } : { attrs: c, slots: i, emit: f }
        ) : S(
          process.env.NODE_ENV !== "production" ? Ie(u) : u,
          null
        )
      ), L = t.props ? c : Yl(c);
    }
  } catch (S) {
    Bt(S, e, 1), G = ft(Oe);
  }
  let H = G, pe;
  if (process.env.NODE_ENV !== "production" && G.patchFlag > 0 && G.patchFlag & 2048 && ([H, pe] = vr(G)), L && V !== !1) {
    const S = Object.keys(L), { shapeFlag: Q } = H;
    if (S.length) {
      if (Q & 7)
        r && S.some(ln) && (L = zl(
          L,
          r
        )), H = tt(H, L, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !oo && H.type !== Oe) {
        const me = Object.keys(c), te = [], le = [];
        for (let Re = 0, Ge = me.length; Re < Ge; Re++) {
          const _e = me[Re];
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
  return n.dirs && (process.env.NODE_ENV !== "production" && !ns(H) && y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), H = tt(H, null, !1, !0), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !ns(H) && y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), wo(H, n.transition)), process.env.NODE_ENV !== "production" && pe ? pe(H) : G = H, dn(Z), G;
}
const vr = (e) => {
  const t = e.children, n = e.dynamicChildren, o = $o(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return vr(o);
  } else
    return [e, void 0];
  const s = t.indexOf(o), r = n ? n.indexOf(o) : -1, i = (c) => {
    t[s] = c, n && (r > -1 ? n[r] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [Ee(o), i];
};
function $o(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (Vn(s)) {
      if (s.type !== Oe || s.children === "v-if") {
        if (n)
          return;
        if (n = s, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return $o(n.children);
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
  if (process.env.NODE_ENV !== "production" && (s || c) && Ae || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? os(o, i, d) : !!i;
    if (f & 8) {
      const p = t.dynamicProps;
      for (let u = 0; u < p.length; u++) {
        const g = p[u];
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
const Er = (e) => e.__isSuspense;
function Ql(e, t) {
  t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : ks(e);
}
const $e = Symbol.for("v-fgt"), kt = Symbol.for("v-txt"), Oe = Symbol.for("v-cmt"), on = Symbol.for("v-stc");
let Ze = null, Po = 1;
function ss(e, t = !1) {
  Po += e, e < 0 && Ze && t && (Ze.hasOnce = !0);
}
function Vn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function St(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = en.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const ec = (...e) => br(
  ...e
), Nr = ({ key: e }) => e != null ? e : null, sn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? J(e) || Y(e) || $(e) ? { i: ge, r: e, k: t, f: !!n } : e : null);
function tc(e, t = null, n = null, o = 0, s = null, r = e === $e ? 0 : 1, i = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Nr(t),
    ref: t && sn(t),
    scopeId: Xs,
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
  return c ? (Io(f, n), r & 128 && e.normalize(f)) : n && (f.shapeFlag |= J(n) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && y("VNode created with invalid key (NaN). VNode type:", f.type), Po > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ze && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Ze.push(f), f;
}
const ft = process.env.NODE_ENV !== "production" ? ec : br;
function br(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === pl) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = Oe), Vn(e)) {
    const c = tt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Io(c, n), Po > 0 && !r && Ze && (c.shapeFlag & 6 ? Ze[Ze.indexOf(e)] = c : Ze.push(c)), c.patchFlag = -2, c;
  }
  if (Sr(e) && (e = e.__vccOpts), t) {
    t = nc(t);
    let { class: c, style: f } = t;
    c && !J(c) && (t.class = ho(c)), k(f) && (fn(f) && !C(f) && (f = q({}, f)), t.style = po(f));
  }
  const i = J(e) ? 1 : Er(e) ? 128 : Qi(e) ? 64 : k(e) ? 4 : $(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && fn(e) && (e = A(e), y(
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
  return e ? fn(e) || cr(e) ? q({}, e) : e : null;
}
function tt(e, t, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: i, children: c, transition: f } = e, d = t ? sc(s || {}, t) : s, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Nr(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? C(r) ? r.concat(sn(t)) : [r, sn(t)] : sn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && C(c) ? c.map(yr) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== $e ? i === -1 ? 16 : i | 16 : i,
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
function yr(e) {
  const t = tt(e);
  return C(e.children) && (t.children = e.children.map(yr)), t;
}
function oc(e = " ", t = 0) {
  return ft(kt, null, e, t);
}
function Ee(e) {
  return e == null || typeof e == "boolean" ? ft(Oe) : C(e) ? ft(
    $e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Vn(e) ? ze(e) : ft(kt, null, String(e));
}
function ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : tt(e);
}
function Io(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (C(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Io(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !cr(t) ? t._ctx = ge : s === 3 && ge && (ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    $(t) ? (t = { default: t, _ctx: ge }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [oc(t)]) : n = 8);
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
function Te(e, t, n, o = null) {
  Me(e, t, 7, [
    n,
    o
  ]);
}
const rc = rr();
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
    propsOptions: ur(o, s),
    emitsOptions: _r(o, s),
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
const Or = () => ee || ge;
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
    (n) => Lt = n
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
function Dr(e) {
  return e.vnode.shapeFlag & 4;
}
let Lt = !1;
function fc(e, t = !1, n = !1) {
  t && so(t);
  const { props: o, children: s } = e.vnode, r = Dr(e);
  wl(e, o, r, t), Rl(e, s, n || t);
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
        Zs(r[i]);
    }
    o.compilerOptions && wr() && y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, or), process.env.NODE_ENV !== "production" && hl(e);
  const { setup: s } = o;
  if (s) {
    we();
    const r = e.setupContext = s.length > 1 ? pc(e) : null, i = Gt(e), c = Nt(
      s,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? Ie(e.props) : e.props,
        r
      ]
    ), f = fo(c);
    if (xe(), i(), (f || e.sp) && !Rt(e) && Qs(e), f) {
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
    xr(e, t);
}
function is(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : k(t) ? (process.env.NODE_ENV !== "production" && Vn(t) && y(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Us(t), process.env.NODE_ENV !== "production" && gl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), xr(e, n);
}
let io;
const wr = () => !io;
function xr(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && io && !o.render) {
      const s = o.template || So(e).template;
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
        o.render = io(s, d), process.env.NODE_ENV !== "production" && He(e, "compile");
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
function Ao(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Us(yi(e.exposed)), {
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
function Vr(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Sn(e, t, n = !1) {
  let o = Vr(t);
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
function Sr(e) {
  return $(e) && "__vccOpts" in e;
}
const Tr = (e, t) => {
  const n = Si(e, t, Lt);
  if (process.env.NODE_ENV !== "production") {
    const o = Or();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function gc() {
  if (process.env.NODE_ENV === "production" || typeof window == "undefined")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!k(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (Y(u)) {
        we();
        const g = u.value;
        return xe(), [
          "div",
          {},
          ["span", e, p(u)],
          "<",
          c(g),
          ">"
        ];
      } else {
        if (mt(u))
          return [
            "div",
            {},
            ["span", e, ae(u) ? "ShallowReactive" : "Reactive"],
            "<",
            c(u),
            `>${Be(u) ? " (readonly)" : ""}`
          ];
        if (Be(u))
          return [
            "div",
            {},
            ["span", e, ae(u) ? "ShallowReadonly" : "Readonly"],
            "<",
            c(u),
            ">"
          ];
      }
      return null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...r(u.$)
        ];
    }
  };
  function r(u) {
    const g = [];
    u.type.props && u.props && g.push(i("props", A(u.props))), u.setupState !== B && g.push(i("setup", u.setupState)), u.data !== B && g.push(i("data", A(u.data)));
    const O = f(u, "computed");
    O && g.push(i("computed", O));
    const P = f(u, "inject");
    return P && g.push(i("injected", P)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), g;
  }
  function i(u, g) {
    return g = q({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((O) => [
          "div",
          {},
          ["span", o, O + ": "],
          c(g[O], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(u, g = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : k(u) ? ["object", { object: g ? A(u) : u }] : ["span", n, String(u)];
  }
  function f(u, g) {
    const O = u.type;
    if ($(O))
      return;
    const P = {};
    for (const V in u.ctx)
      d(O, V, g) && (P[V] = u.ctx[V]);
    return P;
  }
  function d(u, g, O) {
    const P = u[O];
    if (C(P) && P.includes(g) || k(P) && g in P || u.extends && d(u.extends, g, O) || u.mixins && u.mixins.some((V) => d(V, g, O)))
      return !0;
  }
  function p(u) {
    return ae(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
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
const Cr = lo ? (e) => lo.createHTML(e) : (e) => e, mc = "http://www.w3.org/2000/svg", _c = "http://www.w3.org/1998/Math/MathML", Le = typeof document != "undefined" ? document : null, us = Le && /* @__PURE__ */ Le.createElement("template"), vc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t === "svg" ? Le.createElementNS(mc, e) : t === "mathml" ? Le.createElementNS(_c, e) : n ? Le.createElement(e, { is: n }) : Le.createElement(e);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => Le.createTextNode(e),
  createComment: (e) => Le.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Le.querySelector(e),
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
      us.innerHTML = Cr(
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
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(hs, t.slice(6, t.length)) : e.setAttributeNS(hs, t, n) : n == null || r && !Ds(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Et(n) ? String(n) : n
  );
}
function ms(e, t, n, o, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Cr(n) : n);
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
    c === "boolean" ? n = Ds(n) : n == null && c === "string" ? (n = "", i = !0) : c === "number" && (n = 0, i = !0);
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
function Sc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const _s = Symbol("_vei");
function Tc(e, t, n, o, s = null) {
  const r = e[_s] || (e[_s] = {}), i = r[t];
  if (o && i)
    i.value = process.env.NODE_ENV !== "production" ? Es(o, t) : o;
  else {
    const [c, f] = Cc(t);
    if (o) {
      const d = r[t] = Ic(
        process.env.NODE_ENV !== "production" ? Es(o, t) : o,
        s
      );
      Vc(e, c, d, f);
    } else
      i && (Sc(e, c, i, f), r[t] = void 0);
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
const $c = /* @__PURE__ */ Promise.resolve(), Pc = () => Kn || ($c.then(() => Kn = 0), Kn = Date.now());
function Ic(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Me(
      Ac(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Pc(), n;
}
function Es(e, t) {
  return $(e) || C(e) ? e : (We(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), X);
}
function Ac(e, t) {
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
  t === "class" ? Nc(e, o, i) : t === "style" ? Dc(e, n, o) : Ut(t) ? ln(t) || Tc(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Rc(e, t, o, i)) ? (ms(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && gs(e, t, o, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !J(o)) ? ms(e, be(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), gs(e, t, o, i));
};
function Rc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ns(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Ns(t) && J(n) ? !1 : t in e;
}
const Fc = /* @__PURE__ */ q({ patchProp: Mc }, vc);
let bs;
function jc() {
  return bs || (bs = Hl(Fc));
}
const $r = (...e) => {
  const t = jc().createApp(...e);
  process.env.NODE_ENV !== "production" && (Lc(t), Uc(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = Wc(o);
    if (!s)
      return;
    const r = t._component;
    !$(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
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
function Lc(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => zr(t) || Xr(t) || Zr(t),
    writable: !1
  });
}
function Uc(e) {
  if (wr()) {
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
function Wc(e) {
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
function Bc() {
  gc();
}
process.env.NODE_ENV !== "production" && Bc();
function ys(e, t = {}) {
  const { restUrl: n, nonce: o } = window.PLOTTOS_SETTINGS_BOOT;
  return window.wp.apiFetch({
    path: e.startsWith("/") ? e : `/${e}`,
    method: t.method || "GET",
    data: t.data,
    headers: { "X-WP-Nonce": o }
  });
}
const Pr = {
  setup() {
    const e = xt(!0), t = xt(!1), n = xt([]), o = xt({ apply_on_archives: !0, apply_on_search: !1, enabled_types: [] }), s = xt(""), r = Tr(
      () => n.value.filter(
        (d) => (d.label + d.slug).toLowerCase().includes(s.value.toLowerCase())
      )
    ), i = document.getElementById("plottos-cpt-ordering-settings-root");
    i && (console.log("[PLOTTOS] Mounting Vue settings app"), $r(Pr).mount(i)), tr(async () => {
      var d, p;
      try {
        const u = await ys("plottos/v1/settings");
        n.value = (d = u == null ? void 0 : u.postTypes) != null ? d : [], o.value = (p = u == null ? void 0 : u.settings) != null ? p : o.value;
      } catch (u) {
        console.error("[PLOTTOS] Settings fetch failed:", u);
      } finally {
        e.value = !1;
      }
    });
    async function c() {
      var d, p, u, g;
      t.value = !0;
      try {
        const O = await ys("plottos/v1/settings", {
          method: "PUT",
          data: o.value
        });
        o.value = O.settings, (p = (d = wp == null ? void 0 : wp.toast) == null ? void 0 : d.success) == null || p.call(d, window.PLOTTOS_SETTINGS_BOOT.i18n.saved);
      } catch {
        (g = (u = wp == null ? void 0 : wp.toast) == null ? void 0 : u.error) == null || g.call(u, window.PLOTTOS_SETTINGS_BOOT.i18n.error);
      } finally {
        t.value = !1;
      }
    }
    function f(d) {
      const p = new Set(o.value.enabled_types);
      p.has(d) ? p.delete(d) : p.add(d), o.value.enabled_types = Array.from(p);
    }
    return { loading: e, saving: t, form: o, postTypes: n, filteredTypes: r, filter: s, save: c, toggleType: f };
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
  t && $r(Pr).mount(t);
})();
//# sourceMappingURL=admin-settings.js.map
