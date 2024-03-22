var $t = Object.defineProperty;
var kt = (o, e, n) => (e in o ? $t(o, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (o[e] = n));
var U = (o, e, n) => (kt(o, typeof e != "symbol" ? e + "" : e, n), n);
(function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) t(i);
    new MutationObserver((i) => {
        for (const l of i) if (l.type === "childList") for (const s of l.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && t(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
        const l = {};
        return (
            i.integrity && (l.integrity = i.integrity),
            i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials" ? (l.credentials = "include") : i.crossOrigin === "anonymous" ? (l.credentials = "omit") : (l.credentials = "same-origin"),
            l
        );
    }
    function t(i) {
        if (i.ep) return;
        i.ep = !0;
        const l = n(i);
        fetch(i.href, l);
    }
})();
function O() {}
function bt(o, e) {
    for (const n in e) o[n] = e[n];
    return o;
}
function ot(o) {
    return o();
}
function ye() {
    return Object.create(null);
}
function fe(o) {
    o.forEach(ot);
}
function it(o) {
    return typeof o == "function";
}
function B(o, e) {
    return o != o ? e == e : o !== e || (o && typeof o == "object") || typeof o == "function";
}
function vt(o) {
    return Object.keys(o).length === 0;
}
function lt(o, e, n, t) {
    if (o) {
        const i = st(o, e, n, t);
        return o[0](i);
    }
}
function st(o, e, n, t) {
    return o[1] && t ? bt(n.ctx.slice(), o[1](t(e))) : n.ctx;
}
function rt(o, e, n, t) {
    if (o[2] && t) {
        const i = o[2](t(n));
        if (e.dirty === void 0) return i;
        if (typeof i == "object") {
            const l = [],
                s = Math.max(e.dirty.length, i.length);
            for (let p = 0; p < s; p += 1) l[p] = e.dirty[p] | i[p];
            return l;
        }
        return e.dirty | i;
    }
    return e.dirty;
}
function ct(o, e, n, t, i, l) {
    if (i) {
        const s = st(e, n, t, l);
        o.p(s, i);
    }
}
function ft(o) {
    if (o.ctx.length > 32) {
        const e = [],
            n = o.ctx.length / 32;
        for (let t = 0; t < n; t++) e[t] = -1;
        return e;
    }
    return -1;
}
function E(o, e) {
    o.appendChild(e);
}
function b(o, e, n) {
    o.insertBefore(e, n || null);
}
function k(o) {
    o.parentNode && o.parentNode.removeChild(o);
}
function K(o, e) {
    for (let n = 0; n < o.length; n += 1) o[n] && o[n].d(e);
}
function x(o) {
    return document.createElement(o);
}
function J(o) {
    return document.createElementNS("http://www.w3.org/2000/svg", o);
}
function re(o) {
    return document.createTextNode(o);
}
function W() {
    return re(" ");
}
function D() {
    return re("");
}
function ae(o, e, n, t) {
    return o.addEventListener(e, n, t), () => o.removeEventListener(e, n, t);
}
function $(o, e, n) {
    n == null ? o.removeAttribute(e) : o.getAttribute(e) !== n && o.setAttribute(e, n);
}
function yt(o) {
    return Array.from(o.childNodes);
}
function ge(o, e) {
    (e = "" + e), o.data !== e && (o.data = e);
}
function Z(o, e, n, t) {
    n == null ? o.style.removeProperty(e) : o.style.setProperty(e, n, t ? "important" : "");
}
function z(o, e, n) {
    o.classList.toggle(e, !!n);
}
function Ct(o, e, { bubbles: n = !1, cancelable: t = !1 } = {}) {
    return new CustomEvent(o, { detail: e, bubbles: n, cancelable: t });
}
class oe {
    constructor(e = !1) {
        U(this, "is_svg", !1);
        U(this, "e");
        U(this, "n");
        U(this, "t");
        U(this, "a");
        (this.is_svg = e), (this.e = this.n = null);
    }
    c(e) {
        this.h(e);
    }
    m(e, n, t = null) {
        this.e || (this.is_svg ? (this.e = J(n.nodeName)) : (this.e = x(n.nodeType === 11 ? "TEMPLATE" : n.nodeName)), (this.t = n.tagName !== "TEMPLATE" ? n : n.content), this.c(e)), this.i(t);
    }
    h(e) {
        (this.e.innerHTML = e), (this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes));
    }
    i(e) {
        for (let n = 0; n < this.n.length; n += 1) b(this.t, this.n[n], e);
    }
    p(e) {
        this.d(), this.h(e), this.i(this.a);
    }
    d() {
        this.n.forEach(k);
    }
}
function me(o, e) {
    return new o(e);
}
let ce;
function se(o) {
    ce = o;
}
function at() {
    if (!ce) throw new Error("Function called outside component initialization");
    return ce;
}
function de(o) {
    at().$$.on_destroy.push(o);
}
function Lt() {
    const o = at();
    return (e, n, { cancelable: t = !1 } = {}) => {
        const i = o.$$.callbacks[e];
        if (i) {
            const l = Ct(e, n, { cancelable: t });
            return (
                i.slice().forEach((s) => {
                    s.call(o, l);
                }),
                !l.defaultPrevented
            );
        }
        return !0;
    };
}
function pt(o, e) {
    const n = o.$$.callbacks[e.type];
    n && n.slice().forEach((t) => t.call(this, e));
}
const dirtyComponents = [],
    we = [];
let ne = [];
const Ce = [],
    xt = Promise.resolve();
let $e = !1;
function At() {
    $e || (($e = !0), xt.then(ut));
}
function callback(o) {
    ne.push(o);
}
const _e = new Set();
let Y = 0;
function ut() {
    if (Y !== 0) return;
    const o = ce;
    do {
        try {
            for (; Y < dirtyComponents.length; ) {
                const e = dirtyComponents[Y];
                Y++, se(e), Mt(e.$$);
            }
        } catch (e) {
            throw ((dirtyComponents.length = 0), (Y = 0), e);
        }
        for (se(null), dirtyComponents.length = 0, Y = 0; we.length; ) we.pop()();
        for (let e = 0; e < ne.length; e += 1) {
            const n = ne[e];
            _e.has(n) || (_e.add(n), n());
        }
        ne.length = 0;
    } while (dirtyComponents.length);
    for (; Ce.length; ) Ce.pop()();
    ($e = !1), _e.clear(), se(o);
}
function Mt(o) {
    if (o.fragment !== null) {
        o.update(), fe(o.before_update);
        const e = o.dirty;
        (o.dirty = [-1]), o.fragment && o.fragment.p(o.ctx, e), o.after_update.forEach(callback);
    }
}
function Tt(o) {
    const e = [],
        n = [];
    ne.forEach((t) => (o.indexOf(t) === -1 ? e.push(t) : n.push(t))), n.forEach((t) => t()), (ne = e);
}
const outroTransitionSet = new Set();
let X;
function H() {
    X = { r: 0, c: [], p: X };
}
function S() {
    X.r || fe(X.c), (X = X.p);
}
function h(o, e) {
    o && o.i && (outroTransitionSet.delete(o), o.i(e));
}
function handleOutroTransition(component, duration, shouldDestroy, onComplete) {
    if (component && component.o) {
        if (outroTransitionSet.has(component)) return;
        outroTransitionSet.add(component),
            X.c.push(() => {
                outroTransitionSet.delete(component), onComplete && (shouldDestroy && component.d(1), onComplete());
            }),
            component.o(duration);
    } else onComplete && onComplete();
}
function I(o) {
    return (o == null ? void 0 : o.length) !== void 0 ? o : Array.from(o);
}
function P(o) {
    o && o.c();
}
function M(component, target, anchor) {
    const { fragment: fragment, after_update: after_update } = component.$$;
    fragment && fragment.m(target, anchor),
        callback(() => {
            const l = component.$$.on_mount.map(ot).filter(it);
            component.$$.on_destroy ? component.$$.on_destroy.push(...l) : fe(l), (component.$$.on_mount = []);
        }),
        after_update.forEach(callback);
}
function cleanupComponents(o, detachNode) {
    const componentState = o.$$;
    componentState.fragment !== null && (Tt(componentState.after_update), fe(componentState.on_destroy), componentState.fragment && componentState.fragment.d(detachNode), (componentState.on_destroy = componentState.fragment = null), (componentState.ctx = []));
}
function markComponentAsDirty(component, dirtyIndex) {
    component.$$.dirty[0] === -1 && (dirtyComponents.push(component), At(), component.$$.dirty.fill(0)), (component.$$.dirty[(dirtyIndex / 31) | 0] |= 1 << dirtyIndex % 31);
}
function renderComponent(component, options, createFragment, updateFunction, i, l, s, p = [-1]) {
    const r = ce;
    se(component);
    const f = (component.$$ = {
        fragment: null,
        ctx: [],
        props: l,
        update: O,
        not_equal: i,
        bound: ye(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (r ? r.$$.context : [])),
        callbacks: ye(),
        dirty: p,
        skip_bound: !1,
        root: options.target || r.$$.root,
    });
    s && s(f.root);
    let a = !1;
    if (
        ((f.ctx = createFragment
            ? createFragment(component, options.props || {}, (c, u, ..._) => {
                  const g = _.length ? _[0] : u;
                  return f.ctx && i(f.ctx[c], (f.ctx[c] = g)) && (!f.skip_bound && f.bound[c] && f.bound[c](g), a && markComponentAsDirty(component, c)), u;
              })
            : []),
        f.update(),
        (a = !0),
        fe(f.before_update),
        (f.fragment = updateFunction ? updateFunction(f.ctx) : !1),
        options.target)
    ) {
        if (options.hydrate) {
            const c = yt(options.target);
            f.fragment && f.fragment.l(c), c.forEach(k);
        } else f.fragment && f.fragment.c();
        options.intro && h(component.$$.fragment), M(component, options.target, options.anchor), ut();
    }
    se(r);
}
class Component {
    constructor() {
        U(this, "$$");
        U(this, "$$set");
    }
    $destroy() {
        cleanupComponents(this, 1), (this.$destroy = O);
    }
    $on(e, n) {
        if (!it(n)) return O;
        const t = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return (
            t.push(n),
            () => {
                const i = t.indexOf(n);
                i !== -1 && t.splice(i, 1);
            }
        );
    }
    $set(e) {
        this.$$set && !vt(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
}
const Pt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: new Set() })).v.add(Pt);
const ee = [];
function Ot(o, e = O) {
    let n;
    const t = new Set();
    function i(p) {
        if (B(o, p) && ((o = p), n)) {
            const r = !ee.length;
            for (const f of t) f[1](), ee.push(f, o);
            if (r) {
                for (let f = 0; f < ee.length; f += 2) ee[f][0](ee[f + 1]);
                ee.length = 0;
            }
        }
    }
    function l(p) {
        i(p(o));
    }
    function s(p, r = O) {
        const f = [p, r];
        return (
            t.add(f),
            t.size === 1 && (n = e(i, l) || O),
            p(o),
            () => {
                t.delete(f), t.size === 0 && n && (n(), (n = null));
            }
        );
    }
    return { set: i, update: l, subscribe: s };
}
const be = Ot(0);
function Et(o) {
    let e,
        n,
        t = o[0] + 1 + "",
        i,
        l;
    const s = o[2].default,
        p = lt(s, o, o[1], null);
    return {
        c() {
            (e = x("div")), (n = x("span")), (i = re(t)), p && p.c(), $(n, "class", "line-number"), $(e, "class", "line");
        },
        m(r, f) {
            b(r, e, f), E(e, n), E(n, i), p && p.m(e, null), (l = !0);
        },
        p(r, [f]) {
            (!l || f & 1) && t !== (t = r[0] + 1 + "") && ge(i, t), p && p.p && (!l || f & 2) && ct(p, s, r, r[1], l ? rt(s, r[1], f, null) : ft(r[1]), null);
        },
        i(r) {
            l || (h(p, r), (l = !0));
        },
        o(r) {
            handleOutroTransition(p, r), (l = !1);
        },
        d(r) {
            r && k(e), p && p.d(r);
        },
    };
}
function It(o, e, n) {
    let { $$slots: t = {}, $$scope: i } = e,
        { index: l = 0 } = e;
    return (
        (o.$$set = (s) => {
            "index" in s && n(0, (l = s.index)), "$$scope" in s && n(1, (i = s.$$scope));
        }),
        [l, i, t]
    );
}
class ie extends Component {
    constructor(e) {
        super(), renderComponent(this, e, It, Et, B, { index: 0 });
    }
}
function Ht(o) {
    let e,
        n,
        t = `calc(${o[1]}em * 1.35 + 50px)`,
        i = `calc(${o[2] + 3}ch + 14px - ${o[4]}px)`,
        l,
        s,
        p;
    const r = o[6].default,
        f = lt(r, o, o[5], null);
    return {
        c() {
            (e = x("div")), (n = x("div")), f && f.c(), $(n, "class", "nv-snippet-window"), z(n, "is-pop", o[0]), $(e, "class", "nv-snippet-window-wrapper terminal-cqc4oo"), z(e, "is-noninteractable", o[3]), Z(e, "top", t), Z(e, "left", i);
        },
        m(a, c) {
            b(a, e, c), E(e, n), f && f.m(n, null), (l = !0), s || ((p = ae(e, "mousemove", o[7])), (s = !0));
        },
        p(a, [c]) {
            f && f.p && (!l || c & 32) && ct(f, r, a, a[5], l ? rt(r, a[5], c, null) : ft(a[5]), null),
                (!l || c & 1) && z(n, "is-pop", a[0]),
                (!l || c & 8) && z(e, "is-noninteractable", a[3]),
                c & 2 && t !== (t = `calc(${a[1]}em * 1.35 + 50px)`) && Z(e, "top", t),
                c & 20 && i !== (i = `calc(${a[2] + 3}ch + 14px - ${a[4]}px)`) && Z(e, "left", i);
        },
        i(a) {
            l || (h(f, a), (l = !0));
        },
        o(a) {
            handleOutroTransition(f, a), (l = !1);
        },
        d(a) {
            a && k(e), f && f.d(a), (s = !1), p();
        },
    };
}
function createComponentState(o, e, n) {
    let { $$slots: t = {}, $$scope: i } = e,
        { pop: l = !1 } = e,
        { line: s } = e,
        { pos: p } = e,
        { noninteractable: r = !1 } = e,
        f = 0;
    be.subscribe((c) => {
        n(4, (f = c));
    });
    function a(c) {
        pt.call(this, o, c);
    }
    return (
        (o.$$set = (c) => {
            "pop" in c && n(0, (l = c.pop)), "line" in c && n(1, (s = c.line)), "pos" in c && n(2, (p = c.pos)), "noninteractable" in c && n(3, (r = c.noninteractable)), "$$scope" in c && n(5, (i = c.$$scope));
        }),
        [l, s, p, r, f, i, t, a]
    );
}
class G extends Component {
    constructor(e) {
        super(), renderComponent(this, e, createComponentState, Ht, B, { pop: 0, line: 1, pos: 2, noninteractable: 3 });
    }
}
function removeHtmlTags(text) {
    return (text == null ? void 0 : text.replaceAll(/(<\/?[^>]+>)/g, "")) ?? "";
}
function addLine(line, spaces = 0, time = 100) {
    return { type: "add-line", line: line, spaces: spaces, time: time };
}
function addText(line, text, time = 65) {
    const t = [];
    let i = 0,
        l = "";
    for (const s of text.split(/(<\/?[^>]+>)/g)) {
        if (((l += s), s === "</kw>" || s === "</sp>")) {
            t.push({ type: "rewrite", line: line, time: 0, delete: i, text: l });
            continue;
        }
        if (s === "<kw>" || s === "<sp>") {
            (l = s), (i = 0);
            continue;
        }
        if (s[0] === "<") {
            t.push({ type: "write", line: line, time: time, text: s });
            continue;
        }
        for (const p of s.split("")) (i += 1), t.push({ type: "write", line: line, time: time, text: p });
    }
    return t;
}
function openCompletions(o, { completion: e, completions: n, time: t = 800, text: i = "", interval: l = 120, written: s = 0 }) {
    return [{ type: "start-completion", line: o, time: 0, completions: n, completion: e, index: 0, n: 0 }, ...addText(o, i.slice(s ?? 0), l), { type: "end-completion", line: o, time: t, text: e.slice((i == null ? void 0 : i.length) ?? 0) }];
}
function processAnimationStep(animationSteps, currentStepIndex, animation, textLines) {
    const currentStep = animationSteps[currentStepIndex];
    return currentStep
        ? (currentStep.type === "add-line" && (textLines.splice(currentStep.line, 0, ""), (textLines[currentStep.line] = " ".repeat(currentStep.spaces)), (animation.cursor = { line: currentStep.line, pos: removeHtmlTags(textLines[currentStep.line]).length })),
          currentStep.type === "write" && ((textLines[currentStep.line] += currentStep.text), (animation.cursor = { line: currentStep.line, pos: removeHtmlTags(textLines[currentStep.line]).length }), animation.completionWindow && ((animation.completionWindow.pos = removeHtmlTags(textLines[currentStep.line]).length), (animation.completionWindow.written += 1))),
          currentStep.type === "rewrite" && ((textLines[currentStep.line] = textLines[currentStep.line].slice(0, -currentStep.delete) + currentStep.text), (animation.cursor = { line: currentStep.line, pos: removeHtmlTags(textLines[currentStep.line]).length }), animation.completionWindow && (animation.completionWindow.pos = removeHtmlTags(textLines[currentStep.line]).length)),
          currentStep.type === "start-completion" && (animation.completionWindow = { completion: currentStep.completion, completions: currentStep.completions, line: currentStep.line, pos: removeHtmlTags(textLines[currentStep.line]).length - (currentStep.n ?? 0), written: currentStep.n ?? 0, index: 0 }),
          currentStep.type === "change-completion" && (animation.completionWindow.index = currentStep.index),
          currentStep.type === "end-completion" && ((animation.completionWindow = void 0), (textLines[currentStep.line] += currentStep.text), (animation.cursor = { line: currentStep.line, pos: removeHtmlTags(textLines[currentStep.line]).length })),
          currentStep.type === "callback" && currentStep.callback(),
          { animation: animation, lines: textLines })
        : { animation: animation, lines: textLines };
}
function Vt(o) {
    let e, n;
    return {
        c() {
            (e = J("svg")),
                (n = J("path")),
                $(
                    n,
                    "d",
                    "M14.45 4.5L9.44995 2H8.55005L1.55005 5.5L1 6.39001V10.89L1.55005 11.79L6.55005 14.29H7.44995L14.45 10.79L15 9.89001V5.39001L14.45 4.5ZM6.44995 13.14L1.94995 10.89V7.17004L6.44995 9.17004V13.14ZM6.94995 8.33997L2.29004 6.22998L8.94995 2.89001L13.62 5.22998L6.94995 8.33997ZM13.95 9.89001L7.44995 13.14V9.20996L13.95 6.20996V9.89001Z"
                ),
                $(n, "fill", "#75BEFF"),
                $(e, "width", "16"),
                $(e, "height", "16"),
                $(e, "viewBox", "0 0 16 16"),
                $(e, "fill", "none"),
                $(e, "xmlns", "http://www.w3.org/2000/svg");
        },
        m(t, i) {
            b(t, e, i), E(e, n);
        },
        p: O,
        i: O,
        o: O,
        d(t) {
            t && k(e);
        },
    };
}
class Le extends Component {
    constructor(e) {
        super(), renderComponent(this, e, null, Vt, B, {});
    }
}
function Bt(o) {
    let e, n;
    return {
        c() {
            (e = J("svg")),
                (n = J("path")),
                $(
                    n,
                    "d",
                    "M13.51 4L8.51001 1H7.51001L2.51001 4L2.02002 4.85999V10.86L2.51001 11.71L7.51001 14.71H8.51001L13.51 11.71L14 10.86V4.85999L13.51 4ZM7.51001 13.5601L3.01001 10.86V5.69995L7.51001 8.15002V13.5601ZM3.27002 4.69995L8.01001 1.85999L12.75 4.69995L8.01001 7.29004L3.27002 4.69995ZM13.01 10.86L8.51001 13.5601V8.15002L13.01 5.69995V10.86Z"
                ),
                $(n, "fill", "#B180D7"),
                $(e, "width", "16"),
                $(e, "height", "16"),
                $(e, "viewBox", "0 0 16 16"),
                $(e, "fill", "none"),
                $(e, "xmlns", "http://www.w3.org/2000/svg");
        },
        m(t, i) {
            b(t, e, i), E(e, n);
        },
        p: O,
        i: O,
        o: O,
        d(t) {
            t && k(e);
        },
    };
}
class xe extends Component {
    constructor(e) {
        super(), renderComponent(this, e, null, Bt, B, {});
    }
}
function Rt(o) {
    let e, n, t;
    return {
        c() {
            (e = J("svg")),
                (n = J("path")),
                (t = J("path")),
                $(n, "fill-rule", "evenodd"),
                $(n, "clip-rule", "evenodd"),
                $(n, "d", "M4 6H12V7H4V6ZM12 9H4V10H12V9Z"),
                $(n, "fill", "#C5C5C5"),
                $(t, "fill-rule", "evenodd"),
                $(t, "clip-rule", "evenodd"),
                $(t, "d", "M1 4L2 3H14L15 4V12L14 13H2L1 12V4ZM2 4V12H14V4H2Z"),
                $(t, "fill", "#C5C5C5"),
                $(e, "width", "16"),
                $(e, "height", "16"),
                $(e, "viewBox", "0 0 16 16"),
                $(e, "fill", "none"),
                $(e, "xmlns", "http://www.w3.org/2000/svg");
        },
        m(i, l) {
            b(i, e, l), E(e, n), E(e, t);
        },
        p: O,
        i: O,
        o: O,
        d(i) {
            i && k(e);
        },
    };
}
class Ae extends Component {
    constructor(e) {
        super(), renderComponent(this, e, null, Rt, B, {});
    }
}
function Me(o, e, n) {
    const t = o.slice();
    return (t[8] = e[n]), (t[10] = n), t;
}
function Te(o) {
    let e,
        n,
        t,
        i,
        l,
        s = o[8].text.slice(0, o[0].written) + "",
        p,
        r = o[8].text.slice(o[0].written) + "",
        f,
        a,
        c,
        u,
        _;
    var g = o[8].type === "constant" ? Ae : o[8].type === "method" ? xe : Le;
    function m(y, d) {
        return {};
    }
    g && (t = me(g, m()));
    function L(...y) {
        return o[6](o[8], o[10], ...y);
    }
    return {
        c() {
            (e = x("div")),
                (n = x("div")),
                t && P(t.$$.fragment),
                (i = W()),
                (l = x("sp")),
                (p = re(s)),
                (f = re(r)),
                (a = W()),
                $(n, "class", "nv-completion-icon"),
                $(e, "class", "nv-completion-item terminal-10kv6jm"),
                z(e, "is-active", o[10] === o[0].index);
        },
        m(y, d) {
            b(y, e, d), E(e, n), t && M(t, n, null), E(e, i), E(e, l), E(l, p), E(e, f), E(e, a), (c = !0), u || ((_ = ae(e, "click", L)), (u = !0));
        },
        p(y, d) {
            if (((o = y), d & 16 && g !== (g = o[8].type === "constant" ? Ae : o[8].type === "method" ? xe : Le))) {
                if (t) {
                    H();
                    const v = t;
                    handleOutroTransition(v.$$.fragment, 1, 0, () => {
                        cleanupComponents(v, 1);
                    }),
                        S();
                }
                g ? ((t = me(g, m())), P(t.$$.fragment), h(t.$$.fragment, 1), M(t, n, null)) : (t = null);
            }
            (!c || d & 17) && s !== (s = o[8].text.slice(0, o[0].written) + "") && ge(p, s), (!c || d & 17) && r !== (r = o[8].text.slice(o[0].written) + "") && ge(f, r), (!c || d & 1) && z(e, "is-active", o[10] === o[0].index);
        },
        i(y) {
            c || (t && h(t.$$.fragment, y), (c = !0));
        },
        o(y) {
            t && handleOutroTransition(t.$$.fragment, y), (c = !1);
        },
        d(y) {
            y && k(e), t && cleanupComponents(t), (u = !1), _();
        },
    };
}
function Ne(o) {
    let e,
        n = o[4].at(o[0].index).description + "";
    return {
        c() {
            (e = x("div")), $(e, "class", "nv-completion-description");
        },
        m(t, i) {
            b(t, e, i), (e.innerHTML = n);
        },
        p(t, i) {
            i & 17 && n !== (n = t[4].at(t[0].index).description + "") && (e.innerHTML = n);
        },
        d(t) {
            t && k(e);
        },
    };
}
function qt(o) {
    var a;
    let e,
        n,
        t = (a = o[4].at(o[0].index)) == null ? void 0 : a.description,
        i,
        l,
        s = I(o[4]),
        p = [];
    for (let c = 0; c < s.length; c += 1) p[c] = Te(Me(o, s, c));
    const r = (c) =>
        handleOutroTransition(p[c], 1, 1, () => {
            p[c] = null;
        });
    let f = t && Ne(o);
    return {
        c() {
            e = x("div");
            for (let c = 0; c < p.length; c += 1) p[c].c();
            (n = W()), f && f.c(), (i = D()), $(e, "class", "nv-completion-items terminal-10kv6jm"), z(e, "is-selectable", o[1]);
        },
        m(c, u) {
            b(c, e, u);
            for (let _ = 0; _ < p.length; _ += 1) p[_] && p[_].m(e, null);
            b(c, n, u), f && f.m(c, u), b(c, i, u), (l = !0);
        },
        p(c, u) {
            var _;
            if (u & 51) {
                s = I(c[4]);
                let g;
                for (g = 0; g < s.length; g += 1) {
                    const m = Me(c, s, g);
                    p[g] ? (p[g].p(m, u), h(p[g], 1)) : ((p[g] = Te(m)), p[g].c(), h(p[g], 1), p[g].m(e, null));
                }
                for (H(), g = s.length; g < p.length; g += 1) r(g);
                S();
            }
            (!l || u & 2) && z(e, "is-selectable", c[1]), u & 17 && (t = (_ = c[4].at(c[0].index)) == null ? void 0 : _.description), t ? (f ? f.p(c, u) : ((f = Ne(c)), f.c(), f.m(i.parentNode, i))) : f && (f.d(1), (f = null));
        },
        i(c) {
            if (!l) {
                for (let u = 0; u < s.length; u += 1) h(p[u]);
                l = !0;
            }
        },
        o(c) {
            p = p.filter(Boolean);
            for (let u = 0; u < p.length; u += 1) handleOutroTransition(p[u]);
            l = !1;
        },
        d(c) {
            c && (k(e), k(n), k(i)), K(p, c), f && f.d(c);
        },
    };
}
function jt(o) {
    let e, n;
    return (
        (e = new G({ props: { line: o[0].line + 1, pos: o[0].pos, noninteractable: o[2], pop: o[3], $$slots: { default: [qt] }, $$scope: { ctx: o } } })),
        e.$on("mousemove", o[7]),
        {
            c() {
                P(e.$$.fragment);
            },
            m(t, i) {
                M(e, t, i), (n = !0);
            },
            p(t, [i]) {
                const l = {};
                i & 1 && (l.line = t[0].line + 1), i & 1 && (l.pos = t[0].pos), i & 4 && (l.noninteractable = t[2]), i & 8 && (l.pop = t[3]), i & 2067 && (l.$$scope = { dirty: i, ctx: t }), e.$set(l);
            },
            i(t) {
                n || (h(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                handleOutroTransition(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                cleanupComponents(e, t);
            },
        }
    );
}
function Zt(o, e, n) {
    const t = Lt();
    let { selectable: i = !1 } = e,
        { noninteractable: l = !1 } = e,
        { pop: s = !1 } = e,
        { completions: p } = e,
        { completionWindow: r } = e;
    const f = (c, u, _) => {
        i && (n(0, (r.completion = c.text), r), t("echo-trigger", c.text), n(0, (r.index = u), r));
    };
    function a(c) {
        pt.call(this, o, c);
    }
    return (
        (o.$$set = (c) => {
            "selectable" in c && n(1, (i = c.selectable)),
                "noninteractable" in c && n(2, (l = c.noninteractable)),
                "pop" in c && n(3, (s = c.pop)),
                "completions" in c && n(4, (p = c.completions)),
                "completionWindow" in c && n(0, (r = c.completionWindow));
        }),
        [r, i, l, s, p, t, f, a]
    );
}
class mt extends Component {
    constructor(e) {
        super(), renderComponent(this, e, Zt, jt, B, { selectable: 1, noninteractable: 2, pop: 3, completions: 4, completionWindow: 0 });
    }
}
function Pe(o, e, n) {
    const t = o.slice();
    return (t[25] = e[n]), (t[27] = n), t;
}
function Oe(o, e, n) {
    const t = o.slice();
    return (t[25] = e[n]), (t[27] = n), t;
}
function CompletionPopover(o) {
    let e,
        n,
        t,
        i,
        l,
        s,
        p,
        r,
        f = I(o[4]),
        a = [];
    for (let d = 0; d < f.length; d += 1) a[d] = Ee(Pe(o, f, d));
    const c = (d) =>
        handleOutroTransition(a[d], 1, 1, () => {
            a[d] = null;
        });
    let u = o[2] === "echo-trigger" && PayloadCompletionPopover(o),
        _ = o[2] === "echo-seen" && SeenCompletionPopover(o),
        g = o[2] === "echo-event" && EventCompletionPopover(o),
        m = o[2] === "echo-client" && EchoCompletionPopover(o),
        L = o[2] === "echo-step" && StepCompletionPopover(o),
        y = o[2] === "echo-trigger" && TriggerCompletionPopover(o);
    return {
        c() {
            for (let d = 0; d < a.length; d += 1) a[d].c();
            (e = W()), u && u.c(), (n = W()), _ && _.c(), (t = W()), g && g.c(), (i = W()), m && m.c(), (l = W()), L && L.c(), (s = W()), y && y.c(), (p = D());
        },
        m(d, v) {
            for (let C = 0; C < a.length; C += 1) a[C] && a[C].m(d, v);
            b(d, e, v), u && u.m(d, v), b(d, n, v), _ && _.m(d, v), b(d, t, v), g && g.m(d, v), b(d, i, v), m && m.m(d, v), b(d, l, v), L && L.m(d, v), b(d, s, v), y && y.m(d, v), b(d, p, v), (r = !0);
        },
        p(d, v) {
            if (v & 16) {
                f = I(d[4]);
                let C;
                for (C = 0; C < f.length; C += 1) {
                    const le = Pe(d, f, C);
                    a[C] ? (a[C].p(le, v), h(a[C], 1)) : ((a[C] = Ee(le)), a[C].c(), h(a[C], 1), a[C].m(e.parentNode, e));
                }
                for (H(), C = f.length; C < a.length; C += 1) c(C);
                S();
            }
            d[2] === "echo-trigger"
                ? u
                    ? (u.p(d, v), v & 4 && h(u, 1))
                    : ((u = PayloadCompletionPopover(d)), u.c(), h(u, 1), u.m(n.parentNode, n))
                : u &&
                  (H(),
                  handleOutroTransition(u, 1, 1, () => {
                      u = null;
                  }),
                  S()),
                d[2] === "echo-seen"
                    ? _
                        ? v & 4 && h(_, 1)
                        : ((_ = SeenCompletionPopover(d)), _.c(), h(_, 1), _.m(t.parentNode, t))
                    : _ &&
                      (H(),
                      handleOutroTransition(_, 1, 1, () => {
                          _ = null;
                      }),
                      S()),
                d[2] === "echo-event"
                    ? g
                        ? (g.p(d, v), v & 4 && h(g, 1))
                        : ((g = EventCompletionPopover(d)), g.c(), h(g, 1), g.m(i.parentNode, i))
                    : g &&
                      (H(),
                      handleOutroTransition(g, 1, 1, () => {
                          g = null;
                      }),
                      S()),
                d[2] === "echo-client"
                    ? m
                        ? (m.p(d, v), v & 4 && h(m, 1))
                        : ((m = EchoCompletionPopover(d)), m.c(), h(m, 1), m.m(l.parentNode, l))
                    : m &&
                      (H(),
                      handleOutroTransition(m, 1, 1, () => {
                          m = null;
                      }),
                      S()),
                d[2] === "echo-step"
                    ? L
                        ? (L.p(d, v), v & 4 && h(L, 1))
                        : ((L = StepCompletionPopover(d)), L.c(), h(L, 1), L.m(s.parentNode, s))
                    : L &&
                      (H(),
                      handleOutroTransition(L, 1, 1, () => {
                          L = null;
                      }),
                      S()),
                d[2] === "echo-trigger"
                    ? y
                        ? (y.p(d, v), v & 4 && h(y, 1))
                        : ((y = TriggerCompletionPopover(d)), y.c(), h(y, 1), y.m(p.parentNode, p))
                    : y &&
                      (H(),
                      handleOutroTransition(y, 1, 1, () => {
                          y = null;
                      }),
                      S());
        },
        i(d) {
            if (!r) {
                for (let v = 0; v < f.length; v += 1) h(a[v]);
                h(u), h(_), h(g), h(m), h(L), h(y), (r = !0);
            }
        },
        o(d) {
            a = a.filter(Boolean);
            for (let v = 0; v < a.length; v += 1) handleOutroTransition(a[v]);
            handleOutroTransition(u), handleOutroTransition(_), handleOutroTransition(g), handleOutroTransition(m), handleOutroTransition(L), handleOutroTransition(y), (r = !1);
        },
        d(d) {
            d && (k(e), k(n), k(t), k(i), k(l), k(s), k(p)), K(a, d), u && u.d(d), _ && _.d(d), g && g.d(d), m && m.d(d), L && L.d(d), y && y.d(d);
        },
    };
}
function Dt(o) {
    let e,
        n,
        t,
        i,
        l = I(o[5]),
        s = [];
    for (let a = 0; a < l.length; a += 1) s[a] = Re(Oe(o, l, a));
    const p = (a) =>
        handleOutroTransition(s[a], 1, 1, () => {
            s[a] = null;
        });
    let r = o[3].completionWindow && qe(o),
        f = o[3].cursor && TerminalCursor(o);
    return {
        c() {
            for (let a = 0; a < s.length; a += 1) s[a].c();
            (e = W()), r && r.c(), (n = W()), f && f.c(), (t = D());
        },
        m(a, c) {
            for (let u = 0; u < s.length; u += 1) s[u] && s[u].m(a, c);
            b(a, e, c), r && r.m(a, c), b(a, n, c), f && f.m(a, c), b(a, t, c), (i = !0);
        },
        p(a, c) {
            if (c & 32) {
                l = I(a[5]);
                let u;
                for (u = 0; u < l.length; u += 1) {
                    const _ = Oe(a, l, u);
                    s[u] ? (s[u].p(_, c), h(s[u], 1)) : ((s[u] = Re(_)), s[u].c(), h(s[u], 1), s[u].m(e.parentNode, e));
                }
                for (H(), u = l.length; u < s.length; u += 1) p(u);
                S();
            }
            a[3].completionWindow
                ? r
                    ? (r.p(a, c), c & 8 && h(r, 1))
                    : ((r = qe(a)), r.c(), h(r, 1), r.m(n.parentNode, n))
                : r &&
                  (H(),
                  handleOutroTransition(r, 1, 1, () => {
                      r = null;
                  }),
                  S()),
                a[3].cursor ? (f ? f.p(a, c) : ((f = TerminalCursor(a)), f.c(), f.m(t.parentNode, t))) : f && (f.d(1), (f = null));
        },
        i(a) {
            if (!i) {
                for (let c = 0; c < l.length; c += 1) h(s[c]);
                h(r), (i = !0);
            }
        },
        o(a) {
            s = s.filter(Boolean);
            for (let c = 0; c < s.length; c += 1) handleOutroTransition(s[c]);
            handleOutroTransition(r), (i = !1);
        },
        d(a) {
            a && (k(e), k(n), k(t)), K(s, a), r && r.d(a), f && f.d(a);
        },
    };
}
function Ft(o) {
    let e,
        n = o[25] + "",
        t;
    return {
        c() {
            (e = new oe(!1)), (t = D()), (e.a = t);
        },
        m(i, l) {
            e.m(n, i, l), b(i, t, l);
        },
        p(i, l) {
            l & 16 && n !== (n = i[25] + "") && e.p(n);
        },
        d(i) {
            i && (k(t), e.d());
        },
    };
}
function Ee(o) {
    let e, n;
    return (
        (e = new ie({ props: { index: o[27], $$slots: { default: [Ft] }, $$scope: { ctx: o } } })),
        {
            c() {
                P(e.$$.fragment);
            },
            m(t, i) {
                M(e, t, i), (n = !0);
            },
            p(t, i) {
                const l = {};
                i & 536870928 && (l.$$scope = { dirty: i, ctx: t }), e.$set(l);
            },
            i(t) {
                n || (h(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                handleOutroTransition(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                cleanupComponents(e, t);
            },
        }
    );
}
function PayloadCompletionPopover(o) {
    let e, n;
    return (
        (e = new mt({ props: { completions: o[13], completionWindow: o[7], selectable: !0, pop: !0 } })),
        e.$on("mousemove", o[16]),
        // Commented out to disable the completion popover from modifying the terminal.
        // e.$on("echo-trigger", o[17]),
        {
            c() {
                P(e.$$.fragment);
            },
            m(t, i) {
                M(e, t, i), (n = !0);
            },
            p(t, i) {
                const l = {};
                i & 128 && (l.completionWindow = t[7]), e.$set(l);
            },
            i(t) {
                n || (h(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                handleOutroTransition(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                cleanupComponents(e, t);
            },
        }
    );
}
function SeenCompletionPopover(o) {
    let e, n;
    return (
        (e = new G({ props: { line: 17, pos: 35, pop: !0, noninteractable: !0, $$slots: { default: [MessageCompletionPopover] }, $$scope: { ctx: o } } })),
        {
            c() {
                P(e.$$.fragment);
            },
            m(t, i) {
                M(e, t, i), (n = !0);
            },
            i(t) {
                n || (h(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                handleOutroTransition(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                cleanupComponents(e, t);
            },
        }
    );
}
function MessageCompletionPopover(o) {
    let e,
        seenCompletionPopoverContent = "<comment>(property) seen: boolean</comment><hr/>Flag indicating if the notification has been seen.";
    return {
        c() {
            (e = x("div")), $(e, "class", "nv-completion-item");
        },
        m(t, i) {
            b(t, e, i), (e.innerHTML = seenCompletionPopoverContent);
        },
        p: O,
        d(t) {
            t && k(e);
        },
    };
}
function EventCompletionPopover(o) {
    let e, n;
    return (
        (e = new G({ props: { line: 5, pos: 60, pop: !0, noninteractable: !0, $$slots: { default: [Ut] }, $$scope: { ctx: o } } })),
        {
            c() {
                P(e.$$.fragment);
            },
            m(t, i) {
                M(e, t, i), (n = !0);
            },
            p(t, i) {
                const l = {};
                i & 536870912 && (l.$$scope = { dirty: i, ctx: t }), e.$set(l);
            },
            i(t) {
                n || (h(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                handleOutroTransition(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                cleanupComponents(e, t);
            },
        }
    );
}
function Ut(o) {
    let e;
    return {
        c() {
            (e = x("div")), $(e, "class", "nv-completion-item");
        },
        m(n, t) {
            b(n, e, t), (e.innerHTML = o[11]);
        },
        p: O,
        d(n) {
            n && k(e);
        },
    };
}
function EchoCompletionPopover(o) {
    let e, n;
    return (
        (e = new G({ props: { line: 3, pos: 17, pop: !0, noninteractable: !0, $$slots: { default: [Jt] }, $$scope: { ctx: o } } })),
        {
            c() {
                P(e.$$.fragment);
            },
            m(t, i) {
                M(e, t, i), (n = !0);
            },
            p(t, i) {
                const l = {};
                i & 536870912 && (l.$$scope = { dirty: i, ctx: t }), e.$set(l);
            },
            i(t) {
                n || (h(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                handleOutroTransition(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                cleanupComponents(e, t);
            },
        }
    );
}
function Jt(o) {
    let e;
    return {
        c() {
            (e = x("div")), $(e, "class", "nv-completion-item");
        },
        m(n, t) {
            b(n, e, t), (e.innerHTML = o[9]);
        },
        p: O,
        d(n) {
            n && k(e);
        },
    };
}
function StepCompletionPopover(o) {
    let e, n;
    return (
        (e = new G({ props: { line: 12, pos: 16, pop: !0, noninteractable: !0, $$slots: { default: [Gt] }, $$scope: { ctx: o } } })),
        {
            c() {
                P(e.$$.fragment);
            },
            m(t, i) {
                M(e, t, i), (n = !0);
            },
            p(t, i) {
                const l = {};
                i & 536870912 && (l.$$scope = { dirty: i, ctx: t }), e.$set(l);
            },
            i(t) {
                n || (h(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                handleOutroTransition(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                cleanupComponents(e, t);
            },
        }
    );
}
function Gt(o) {
    let e;
    return {
        c() {
            (e = x("div")), $(e, "class", "nv-completion-item");
        },
        m(n, t) {
            b(n, e, t), (e.innerHTML = o[10]);
        },
        p: O,
        d(n) {
            n && k(e);
        },
    };
}
function TriggerCompletionPopover(o) {
    let e, n;
    return (
        (e = new G({ props: { line: 22, pos: 16, pop: !0, noninteractable: !0, $$slots: { default: [Qt] }, $$scope: { ctx: o } } })),
        {
            c() {
                P(e.$$.fragment);
            },
            m(t, i) {
                M(e, t, i), (n = !0);
            },
            p(t, i) {
                const l = {};
                i & 536871040 && (l.$$scope = { dirty: i, ctx: t }), e.$set(l);
            },
            i(t) {
                n || (h(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                handleOutroTransition(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                cleanupComponents(e, t);
            },
        }
    );
}
function Qt(o) {
    let e,
        n = o[12](o[7].completion) + "";
    return {
        c() {
            (e = x("div")), $(e, "class", "nv-completion-item");
        },
        m(t, i) {
            b(t, e, i), (e.innerHTML = n);
        },
        p(t, i) {
            i & 128 && n !== (n = t[12](t[7].completion) + "") && (e.innerHTML = n);
        },
        d(t) {
            t && k(e);
        },
    };
}
function Xt(o) {
    let e,
        n = o[25] + "",
        t;
    return {
        c() {
            (e = new oe(!1)), (t = D()), (e.a = t);
        },
        m(i, l) {
            e.m(n, i, l), b(i, t, l);
        },
        p(i, l) {
            l & 32 && n !== (n = i[25] + "") && e.p(n);
        },
        d(i) {
            i && (k(t), e.d());
        },
    };
}
function Re(o) {
    let e, n;
    return (
        (e = new ie({ props: { index: o[27], $$slots: { default: [Xt] }, $$scope: { ctx: o } } })),
        {
            c() {
                P(e.$$.fragment);
            },
            m(t, i) {
                M(e, t, i), (n = !0);
            },
            p(t, i) {
                const l = {};
                i & 536870944 && (l.$$scope = { dirty: i, ctx: t }), e.$set(l);
            },
            i(t) {
                n || (h(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                handleOutroTransition(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                cleanupComponents(e, t);
            },
        }
    );
}
function qe(o) {
    let e, n;
    return (
        (e = new mt({ props: { completions: o[8], completionWindow: o[3].completionWindow } })),
        {
            c() {
                P(e.$$.fragment);
            },
            m(t, i) {
                M(e, t, i), (n = !0);
            },
            p(t, i) {
                const l = {};
                i & 256 && (l.completions = t[8]), i & 8 && (l.completionWindow = t[3].completionWindow), e.$set(l);
            },
            i(t) {
                n || (h(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                handleOutroTransition(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                cleanupComponents(e, t);
            },
        }
    );
}
function TerminalCursor(o) {
    let e,
        n = `calc(${o[3].cursor.line}em * 1.35 + 52px)`,
        t = `calc(${o[3].cursor.pos + 3}ch + 14px - ${o[6]}px)`;
    return {
        c() {
            (e = x("span")), $(e, "class", "nv-cursor"), Z(e, "top", n), Z(e, "left", t);
        },
        m(i, l) {
            b(i, e, l);
        },
        p(i, l) {
            l & 8 && n !== (n = `calc(${i[3].cursor.line}em * 1.35 + 52px)`) && Z(e, "top", n), l & 72 && t !== (t = `calc(${i[3].cursor.pos + 3}ch + 14px - ${i[6]}px)`) && Z(e, "left", t);
        },
        d(i) {
            i && k(e);
        },
    };
}
function Yt(o) {
    let e, n, t, i, l, s;
    const p = [Dt, CompletionPopover],
        r = [];
    function f(a, c) {
        return a[0] ? 0 : 1;
    }
    return (
        (n = f(o)),
        (t = r[n] = p[n](o)),
        {
            c() {
                (e = x("div")), t.c();
            },
            m(a, c) {
                b(a, e, c), r[n].m(e, null), o[18](e), (i = !0), l || ((s = ae(e, "mousemove", o[15])), (l = !0));
            },
            p(a, [c]) {
                let u = n;
                (n = f(a)),
                    n === u
                        ? r[n].p(a, c)
                        : (H(),
                          handleOutroTransition(r[u], 1, 1, () => {
                              r[u] = null;
                          }),
                          S(),
                          (t = r[n]),
                          t ? t.p(a, c) : ((t = r[n] = p[n](a)), t.c()),
                          h(t, 1),
                          t.m(e, null));
            },
            i(a) {
                i || (h(t), (i = !0));
            },
            o(a) {
                handleOutroTransition(t), (i = !1);
            },
            d(a) {
                a && k(e), r[n].d(), o[18](null), (l = !1), s();
            },
        }
    );
}
function initializeEcho(o, options, transitionToState) {
    let t,
        { animated: i = !0 } = options;
    const echoCompletionPopoverContent = `(alias) <kw>new</kw> <id>Echo</id>({ apiKey, ...opts }?: ClientOptions): Echo
import Echo`,
        stepCompletionPopoverContent = `<comment>(property) CreateChatCompletionRequestMessage.role: "function" | "system" | "user" | "assistant"</comment>
<hr/>The role of the messages author. One of <code>system</code>, <code>user</code>, <code>assistant</code>, or <code>function</code>.`,
        eventCompletionPopoverContent =
            "<comment>(method) Completions.create(body: OpenAI.Chat.Completions.CompletionCreateParamsNonStreaming, options?: RequestOptions<Record<string, unknown> | internal.Readable> | undefined): APIPromise<...> (+1 overload)</comment><hr/>Creates a model response for the given chat conversation.",
        triggerCompletionPopoverContent = (chosenModel) => `<comment>(property) trigger: Trigger</comment>
<hr/>Trigger a notification workflow.`,
        payloadCompletionPopoverContent = [
            { type: "constant", text: "(property) postId: string" },
        ];

    const actionWaitTime = `\`\${number} minute\` | \`\${number} hour\` | \`\${number} day\` | \`\${number} week\``;
    const stepCompletionDescription = (stepId, stepType, textDescription = '') => {
        if (stepType === "channel") {
            return `<comment>(property) Echo.${stepId}: ChannelStep<{ body: string }, { seen: boolean; ... }></comment>
<hr/>${textDescription}`;
        } else if (stepType === "action") {
            if (stepId === "digest") {
                return `<comment>(property) digest: ActionStep<${actionWaitTime}, { events: { id: string; timestamp: string; payload: { ... } }[]; }></comment>
<hr/>${textDescription}`;
            } else if (stepId === 'delay') {
              return `<comment>(property) delay: ActionStep<${actionWaitTime}, { duration: number } }[]; }></comment>
<hr/>${textDescription}`;
            }
        }
    }
    let finalStateSnippet = `<kw>import</kw> { Echo } <kw>from</kw> <str>'@novu/echo'</str>;

<kw>const</kw> echo = <kw>new</kw> <span class="hover" id="nv-node-echo-client"><id>Echo</id></span>();

<kw>const</kw> commentWorkflow = echo.<fn>workflow</fn>(<str>'comment-on-post'</str>, <kw>async</kw> (<span class="hover" id="nv-node-create">event</span>) => {
    <kw>const</kw> inAppResponse = <kw>await</kw> event.<fn>step</fn>.<fn>inApp</fn>(<str>'notify-user'</str>, <kw>async</kw> () => ({
        <fn>body</fn>: <fn>renderReactComponent</fn>(event.<span class="hover" id="nv-node-echo-payload"><fn>payload</fn></span>.<fn>postId</fn>)
    }));

    <kw>const</kw> { events } = <kw>await</kw> event.<fn>step</fn>.<fn>digest</fn>(<str>'1 week'</str>);

    <kw>await</kw> event.<span class="hover" id="nv-node-echo-step"><fn>step</fn></span>.<fn>email</fn>(<str>'weekly-comments'</str>, <kw>async</kw> (inputs) => {
        <kw>return</kw> {
            <fn>subject</fn>: <str>\`Weekly post comments (</str><kw>$\{</kw>events.<fn>length</fn> + 1<kw>}</kw><str>)\`</str>,
            <fn>body</fn>: <fn>renderReactEmail</fn>(inputs, events)
        };
    }, { <fn>skip</fn>: () => inAppResponse.<span class="hover" id="nv-node-echo-seen"><fn>seen</fn></span> });

}, { payloadSchema: z.<fn>object</fn>({ postId: z.<fn>string</fn>() }) });

<comment>// Use the same familiar syntax to send a notification</comment>
commentWorkflow.<span class="hover" id="nv-node-echo-trigger"><fn>trigger</fn></span>({
    <fn>to</fn>: { <fn>subscriberId</fn>: <str>'12345'</str> },
    <fn>payload</fn>: { <fn>postId</fn>: <str>'67890'</str> }
});`.trim().split(`
`);
    const eventCompletions = [
        { text: "environment", description: `<comment>(property) environment: { id: 'development' | 'production', ... }</comment>
<hr/>The environment the workflow is running in.` },
        { text: "inputs" },
        { text: "payload", description: `<comment>(property) payload: { postId: string }</comment>
<hr/>The payload for the event, provided during trigger.` },
        { text: "step", description: `<comment>(property) step: { chat: ChannelStep<Echo.Chat>, delay: ActionStep<Echo.Digest>, ... }</comment>
<hr/>Define a step in your workflow.` },
        { text: "subscriber", description: `<comment>(property) subscriber: { firstName: string, lastName: string, subscriberId: string }</comment>
<hr/>The subscriber receiving the notification.` },
    ];

    const stepCompletions = [
        { text: "chat", description: stepCompletionDescription("chat", "channel", "Send a chat message.") },
        { text: "delay", description: stepCompletionDescription("delay", "action", "Delay the workflow for a period of time.") },
        { text: "digest", description: stepCompletionDescription("digest", "action", "Aggregate events for a period of time.") },
        { text: "email", description: stepCompletionDescription("email", "channel", "Send an email.") },
        { text: "inApp", description: stepCompletionDescription("inApp", "channel", "Send an in-app notification.") },
        { text: "push", description: stepCompletionDescription("push", "channel", "Send a push notification.") },
        { text: "sms", description: stepCompletionDescription("sms", "channel", "Send an SMS.") },
    ];

    const payloadCompletions = [
        { text: "postId", description: `(property) postId: string`  },
    ];

    const inAppInputCompletions = [
        { text: "body", description: `(property) body: string
<hr/>The body of the in-app notification.`  },
    ];

    const emailInputCompletions = [
        { text: "body", description: `(property) body: string
<hr/>The body of the email.`},
        { text: "subject", description: `(property) subject: string
<hr/>The subject of the email.`  },
    ];

    const triggerCompletions = [
        { text: "payload", description: `<comment>(property) payload: { postId: string }</comment>
<hr/>The event payload for the workflow.`  },
        { text: "to", description: `<comment>(property) to: { subscriberId: string, firstName: string, lastName: string }</comment>
<hr/>The subscriber to notify.`  },
    ];

    const channelResultCompletions = [
        { text: "seen", description: `(property) seen: boolean
<hr/>Flag indicating if the notification has been seen.` },
        { text: "read", description: `(property) read: boolean
<hr/>Flag indicating if the notification has been read.` },
    ];

    const subscriberCompletions = [
        { text: "firstName", description: `<comment>(property) firstName: string</comment>
<hr/>The subscriber's first name.`  },
{ text: "lastName", description: `<comment>(property) lastName: string</comment>
<hr/>The subscriber's last name.`  },
{ text: "subscriberId", description: `<comment>(property) subscriberId: string</comment>
<hr/>The subscriber's unique identifier.`  },
    ];

    const stepOptionsCompletions = [
        { text: 'skip', description: `(property) skip: () => boolean
<hr/>Skip the step if the condition is met.` },
    ];

    const transitions = [
        addLine(5, 2, 100),
        addText(5, "<kw>const</kw> inAppResponse = <kw>await</kw> event."),
        openCompletions(5, {
            interval: 1500,
            completion: "step",
            completions: eventCompletions,
            text: "st",
        }),
        addText(5, ".<fn>"),
        openCompletions(5, {
            interval: 1000,
            completion: "inApp",
            completions: stepCompletions,
            text: "in",
        }),
        // TODO: Automatic completion of the function signature, including brackets and parameters
        addText(5, `</fn>(<str>'notify-user'</str>, <kw>async</kw> () => ({`),
        addText(6, ""),
        addLine(6, 4, 500),
        addText(6, 'b', 200),
        openCompletions(6, {
            interval: 500,
            completion: "body",
            completions: inAppInputCompletions,
            text: "bo",
            written: 1,
        }),
        addText(6, ": <fn>renderReactComponent</fn>(event."),
        openCompletions(6, {
          interval: 1000,
          completion: "payload",
          completions: eventCompletions,
          text: "pay",
        }),
        addText(6, "."),
        openCompletions(6, {
          interval: 1500,
          completion: "postId",
          completions: payloadCompletions,
        }),
        addText(6, ")"),
        addLine(7, 2, 500),
        addText(7, "}));"),
        addLine(8, 0),
        addLine(9, 2, 500),
        addText(9, "<kw>const</kw> { events } = <kw>await</kw> event."),
        openCompletions(9, {
          interval: 1500,
          completion: "step",
          completions: eventCompletions,
          text: "st",
        }),
        addText(9, ".<fn>"),
        openCompletions(9, {
            interval: 1500,
            completion: "digest",
            completions: stepCompletions,
            text: "di",
        }),
        addText(9, "</fn>(<str>'1 week'</str>);"),
        { type: "wait", time: 2000 },
        addLine(10, 0),
        addLine(11, 2, 500),
        addText(11, `<kw>await</kw> event.`),
        openCompletions(11, {
          interval: 1500,
          completion: "step",
          completions: eventCompletions,
          text: "st",
        }),
        addText(11, ".<fn>"),
        openCompletions(11, {
            interval: 50,
            completion: "email",
            completions: stepCompletions,
            text: "email",
        }),
        addText(11, `</fn>(<str>'weekly-comments'</str>, <kw>async</kw> (inputs) => {`),
        addLine(12, 4),
        addText(12, "<kw>return</kw> {"),
        addLine(13, 6),
        addText(13, "s", 200),
        openCompletions(13, {
            interval: 1000,
            completion: "subject",
            completions: emailInputCompletions,
            text: "sub",
            written: 1,
        }),
        addText(13, ": <str>`Weekly post comments (</str><kw>${</kw>events."),
        openCompletions(13, {
            interval: 500,
            completion: "length",
            completions: [
              { text: "length", description: `(property) Array<T>.length: number
<hr/>Gets or sets the length of the array. This is a number one higher than the highest index in the array.` },
            ],
            text: "le",
        }),
        addText(13, " + 1<kw>}</kw><str>)`</str>,"),
        addLine(14, 6),
        addText(14, "b", 150),
        openCompletions(14, {
            interval: 500,
            completion: "body",
            completions: emailInputCompletions,
            text: "bo",
            written: 1,
        }),
        addText(14, ": <fn>renderReactEmail</fn>(inputs, events)"),
        addLine(15, 4),
        addText(15, "};"),
        addLine(16, 2, 500),
        addText(16, "}, { <fn>s", 150),
        openCompletions(16, {
            interval: 500,
            completion: "skip",
            completions: stepOptionsCompletions,
            text: "s",
            written: 1,
        }),
        addText(16, `</fn>: () => inAppResponse.`),
        openCompletions(16, {
            interval: 1000,
            completion: "seen",
            completions: channelResultCompletions,
            text: "se",
        }),
        addText(16, " });"),
        addLine(20, 0),
        addText(20, `<comment>// Use the same familiar syntax to send a notification</comment>`, 20),
        addLine(21, 0),
        addText(21, `commentWorkflow.<fn>trigger</fn>({`),
        addLine(22, 2),
        openCompletions(22, {
          interval: 500,
          completion: "to",
          completions: triggerCompletions,
          text: "to",
        }),
        addText(22, ": { "),
        openCompletions(22, {
            interval: 200,
            completion: "subscriberId",
            completions: subscriberCompletions,
            text: "subs",
        }),
        addText(22, ": <str>'12345'</str> },"),
        addLine(23, 2),
        openCompletions(23, {
          interval: 100,
          completion: "payload",
          completions: triggerCompletions,
          text: "payload",
        }),
        addText(23, ": { "),
        openCompletions(23, {
          interval: 500,
          completion: "postId",
          completions: payloadCompletions,
        }),
        addText(23, ": <str>'67890'</str> }"),
        addLine(24, 0),
        addText(24, `});`),
    ].flat();
    let initialText = `<kw>import</kw> { Echo } <kw>from</kw> <str>'@novu/echo'</str>;

<kw>const</kw> echo = <kw>new</kw> <id>Echo</id>();

<kw>const</kw> commentWorkflow = echo.<fn>workflow</fn>(<str>'comment-on-post'</str>, <kw>async</kw> (event) => {
}, { payloadSchema: z.<fn>object</fn>({ postId: z.<fn>string</fn>() }) },
);
`.split(`
`),
        g,
        currentState = i ? void 0 : "echo-client",
        taskTimeout;
    function setTimer(taskDelay = 3e3) {
        clearTimeout(taskTimeout), (taskTimeout = setTimeout(executeStateTransition, taskDelay));
    }
    function executeStateTransition() {
        currentState === "echo-client"
            ? transitionToState(2, (currentState = "echo-event"))
            : currentState === "echo-event"
            ? transitionToState(2, (currentState = "echo-trigger"))
            : currentState === "echo-trigger"
            ? transitionToState(2, (currentState = "echo-step"))
            : currentState === "echo-step"
            ? transitionToState(2, (currentState = "echo-trigger"))
            : currentState === "echo-trigger"
            ? transitionToState(2, (currentState = "echo-seen"))
            : currentState === "echo-seen" && transitionToState(2, (currentState = "echo-client")),
            setTimer();
    }
    function handleStateTransition(event) {
        const targetElement = event.target.parentElement.tagName === "SPAN" ? event.target.parentElement : event.target;
        if (targetElement.id === "nv-node-echo-client") transitionToState(2, (currentState = "echo-client"));
        else if (targetElement.id === "nv-node-create") transitionToState(2, (currentState = "echo-event"));
        else if (targetElement.id === "nv-node-echo-payload") transitionToState(2, (currentState = "echo-trigger"));
        else if (targetElement.id === "nv-node-echo-step") transitionToState(2, (currentState = "echo-step"));
        else if (targetElement.id === "nv-node-echo-trigger") transitionToState(2, (currentState = "echo-trigger"));
        else if (targetElement.id === "nv-node-echo-seen") transitionToState(2, (currentState = "echo-seen"));
        else {
            taskTimeout || setTimer(1e3);
            return;
        }
        clearTimeout(taskTimeout), (taskTimeout = void 0);
    }
    setTimer(), de(() => clearTimeout(taskTimeout));
    let animation = { timeout: void 0 };
    function executeStateTransitionWithAnimation(A) {
        transitionToState(3, ({ animation: animation, lines: initialText } = processAnimationStep(transitions, A, animation, initialText)), animation, transitionToState(5, initialText));
        const nextTransition = transitions[A + 1];
        nextTransition && transitionToState(3, (animation.timeout = setTimeout(() => executeStateTransitionWithAnimation(A + 1), nextTransition.time)), animation);
    }
    function ht() {
        transitionToState(3, (animation = { timeout: void 0 })), executeStateTransitionWithAnimation(0);
    }
    i && ht(), de(() => clearTimeout(animation.timeout));
    let ve = 0;
    be.subscribe((A) => {
        transitionToState(6, (ve = A));
    });
    let ModelCompletions = { line: 6, pos: 41, completion: "gpt-4", completions: payloadCompletionPopoverContent, written: 0, index: 0 };
    const _t = () => setTimer(1500),
        gt = (A) => {
            transitionToState(7, (ModelCompletions.completion = A.detail), ModelCompletions), transitionToState(4, (finalStateSnippet[6] = `    model: <span class="hover" id="nv-node-echo-payload"><str>'${A.detail}'</str></span>,`), finalStateSnippet);
        };
    function wt(A) {
        we[A ? "unshift" : "push"](() => {
            (g = A), transitionToState(1, g);
        });
    }
    return (
        (o.$$set = (A) => {
            "animated" in A && transitionToState(0, (i = A.animated));
        }),
        (o.$$.update = () => {
            var A;
            if (o.$$.dirty & 6 && g) {
                const V = g.getElementsByClassName("hover");
                for (const pe of V) pe.classList.remove("is-active");
                if (currentState) {
                    const pe = document.getElementById("nv-node-" + currentState);
                    pe && pe.classList.add("is-active");
                }
            }
            o.$$.dirty & 8 && transitionToState(8, (t = (A = animation.completionWindow) == null ? void 0 : A.completions.filter(({ text: V }) => V.startsWith(animation.completionWindow.completion.slice(0, animation.completionWindow.written)))));
        }),
        [i, g, currentState, animation, finalStateSnippet, initialText, ve, ModelCompletions, t, echoCompletionPopoverContent, stepCompletionPopoverContent, eventCompletionPopoverContent, triggerCompletionPopoverContent, payloadCompletionPopoverContent, setTimer, handleStateTransition, _t, gt, wt]
    );
}
class NodeSnippet extends Component {
    constructor(e) {
        super(), renderComponent(this, e, initializeEcho, Yt, B, { animated: 0 });
    }
}
function Ze(o, e, n) {
    const t = o.slice();
    return (t[6] = e[n]), (t[8] = n), t;
}
function nn(o) {
    let e,
        n = o[6] + "",
        t;
    return {
        c() {
            (e = new oe(!1)), (t = D()), (e.a = t);
        },
        m(i, l) {
            e.m(n, i, l), b(i, t, l);
        },
        p(i, l) {
            l & 2 && n !== (n = i[6] + "") && e.p(n);
        },
        d(i) {
            i && (k(t), e.d());
        },
    };
}
function ze(o) {
    let e, n;
    return (
        (e = new ie({ props: { index: o[8], $$slots: { default: [nn] }, $$scope: { ctx: o } } })),
        {
            c() {
                P(e.$$.fragment);
            },
            m(t, i) {
                M(e, t, i), (n = !0);
            },
            p(t, i) {
                const l = {};
                i & 514 && (l.$$scope = { dirty: i, ctx: t }), e.$set(l);
            },
            i(t) {
                n || (h(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                handleOutroTransition(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                cleanupComponents(e, t);
            },
        }
    );
}
function on(o) {
    let e, n, t;
    return {
        c() {
            (e = x("div")), (e.textContent = ""), (n = W()), (t = x("div")), $(e, "class", "nv-completion-heading"), $(t, "class", "nv-completion-item");
            // Remove the following timeout to render the Python popover
            setTimeout(() => {
                e.parentNode.style.display = "none";
            }, 1);
        },
        m(i, l) {
            b(i, e, l), b(i, n, l), b(i, t, l), (t.innerHTML = o[0]);
        },
        p(i, l) {
            l & 1 && (t.innerHTML = i[0]);
        },
        d(i) {
            i && (k(e), k(n), k(t));
        },
    };
}
function ln(o) {
    let e,
        n,
        t,
        i,
        l = I(o[1]),
        s = [];
    for (let r = 0; r < l.length; r += 1) s[r] = ze(Ze(o, l, r));
    const p = (r) =>
        handleOutroTransition(s[r], 1, 1, () => {
            s[r] = null;
        });
    return (
        (t = new G({ props: { line: 17, pos: 30, $$slots: { default: [on] }, $$scope: { ctx: o } } })),
        {
            c() {
                e = x("div");
                for (let r = 0; r < s.length; r += 1) s[r].c();
                (n = W()), P(t.$$.fragment);
            },
            m(r, f) {
                b(r, e, f);
                for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(e, null);
                E(e, n), M(t, e, null), (i = !0);
            },
            p(r, [f]) {
                if (f & 2) {
                    l = I(r[1]);
                    let c;
                    for (c = 0; c < l.length; c += 1) {
                        const u = Ze(r, l, c);
                        s[c] ? (s[c].p(u, f), h(s[c], 1)) : ((s[c] = ze(u)), s[c].c(), h(s[c], 1), s[c].m(e, n));
                    }
                    for (H(), c = l.length; c < s.length; c += 1) p(c);
                    S();
                }
                const a = {};
                f & 513 && (a.$$scope = { dirty: f, ctx: r }), t.$set(a);
            },
            i(r) {
                if (!i) {
                    for (let f = 0; f < l.length; f += 1) h(s[f]);
                    h(t.$$.fragment, r), (i = !0);
                }
            },
            o(r) {
                s = s.filter(Boolean);
                for (let f = 0; f < s.length; f += 1) handleOutroTransition(s[f]);
                handleOutroTransition(t.$$.fragment, r), (i = !1);
            },
            d(r) {
                r && k(e), K(s, r), cleanupComponents(t);
            },
        }
    );
}
const De = `<kw>Coming soon...</kw>`;
function renderPythonSnippet(o, e, n) {
    let t;
    const i = `<kw>Coming soon...</kw>`,
        l = [];
    for (let f = 0; f < De.length; f += 3) l.push(De.slice(f, f + 3));
    let s = "",
        p;
    function r() {
        n(0, (s = ""));
        let f = 0;
        function a() {
            if (f < l.length) {
                n(0, (s += l[f]));
                const c = Math.random() * 200;
                p = setTimeout(a, c);
            }
            f === l.length && (p = setTimeout(r, 5e3)), f++;
        }
        a();
    }
    return (
        de(() => clearTimeout(p)),
        r(),
        n(
            1,
            (t = i.split(`
`))
        ),
        [s, t]
    );
}
class PythonSnippet extends Component {
    constructor(e) {
        super();
        renderComponent(this, e, renderPythonSnippet, ln, B, {});
    }
}
function Fe(o, e, n) {
    const t = o.slice();
    return (t[6] = e[n]), t;
}
function Ke(o, e, n) {
    const t = o.slice();
    return (t[9] = e[n]), (t[11] = n), t;
}
function cn(o) {
    let e,
        n = o[9] + "",
        t;
    return {
        c() {
            (e = new oe(!1)), (t = D()), (e.a = t);
        },
        m(i, l) {
            e.m(n, i, l), b(i, t, l);
        },
        p(i, l) {
            l & 2 && n !== (n = i[9] + "") && e.p(n);
        },
        d(i) {
            i && (k(t), e.d());
        },
    };
}
function Ue(o) {
    let e, n;
    return (
        (e = new ie({ props: { index: o[11], $$slots: { default: [cn] }, $$scope: { ctx: o } } })),
        {
            c() {
                P(e.$$.fragment);
            },
            m(t, i) {
                M(e, t, i), (n = !0);
            },
            p(t, i) {
                const l = {};
                i & 4098 && (l.$$scope = { dirty: i, ctx: t }), e.$set(l);
            },
            i(t) {
                n || (h(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                handleOutroTransition(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                cleanupComponents(e, t);
            },
        }
    );
}
function Je(o) {
    let e,
        n = o[6].text + "";
    return {
        c() {
            (e = x("div")), $(e, "class", "nv-completion-item");
        },
        m(t, i) {
            b(t, e, i), (e.innerHTML = n);
        },
        p(t, i) {
            i & 1 && n !== (n = t[6].text + "") && (e.innerHTML = n);
        },
        d(t) {
            t && k(e);
        },
    };
}
function fn(o) {
    let e,
        n,
        t,
        i = I(o[0]),
        l = [];
    for (let s = 0; s < i.length; s += 1) l[s] = Je(Fe(o, i, s));
    return {
        c() {
            (e = x("div")), (e.textContent = "Auto-Pagination"), (n = W());
            for (let s = 0; s < l.length; s += 1) l[s].c();
            (t = D()), $(e, "class", "nv-completion-heading");
            // Remove the following timeout to render the Go popover
            setTimeout(() => {
                e.parentNode.style.display = "none";
            }, 1);
        },
        m(s, p) {
            b(s, e, p), b(s, n, p);
            for (let r = 0; r < l.length; r += 1) l[r] && l[r].m(s, p);
            b(s, t, p);
        },
        p(s, p) {
            if (p & 1) {
                i = I(s[0]);
                let r;
                for (r = 0; r < i.length; r += 1) {
                    const f = Fe(s, i, r);
                    l[r] ? l[r].p(f, p) : ((l[r] = Je(f)), l[r].c(), l[r].m(t.parentNode, t));
                }
                for (; r < l.length; r += 1) l[r].d(1);
                l.length = i.length;
            }
        },
        d(s) {
            s && (k(e), k(n), k(t)), K(l, s);
        },
    };
}
function an(o) {
    let e,
        n,
        t,
        i,
        l = I(o[1]),
        s = [];
    for (let r = 0; r < l.length; r += 1) s[r] = Ue(Ke(o, l, r));
    const p = (r) =>
        handleOutroTransition(s[r], 1, 1, () => {
            s[r] = null;
        });
    return (
        (t = new G({ props: { line: 13, pos: 40, $$slots: { default: [fn] }, $$scope: { ctx: o } } })),
        {
            c() {
                e = x("div");
                for (let r = 0; r < s.length; r += 1) s[r].c();
                (n = W()), P(t.$$.fragment);
            },
            m(r, f) {
                b(r, e, f);
                for (let a = 0; a < s.length; a += 1) s[a] && s[a].m(e, null);
                E(e, n), M(t, e, null), (i = !0);
            },
            p(r, [f]) {
                if (f & 2) {
                    l = I(r[1]);
                    let c;
                    for (c = 0; c < l.length; c += 1) {
                        const u = Ke(r, l, c);
                        s[c] ? (s[c].p(u, f), h(s[c], 1)) : ((s[c] = Ue(u)), s[c].c(), h(s[c], 1), s[c].m(e, n));
                    }
                    for (H(), c = l.length; c < s.length; c += 1) p(c);
                    S();
                }
                const a = {};
                f & 4097 && (a.$$scope = { dirty: f, ctx: r }), t.$set(a);
            },
            i(r) {
                if (!i) {
                    for (let f = 0; f < l.length; f += 1) h(s[f]);
                    h(t.$$.fragment, r), (i = !0);
                }
            },
            o(r) {
                s = s.filter(Boolean);
                for (let f = 0; f < s.length; f += 1) handleOutroTransition(s[f]);
                handleOutroTransition(t.$$.fragment, r), (i = !1);
            },
            d(r) {
                r && k(e), K(s, r), cleanupComponents(t);
            },
        }
    );
}
function pn(o, e, n) {
    let t;
    const i = `<kw>Coming soon...</kw>`,
        l = [];
    let s = [],
        p;
    function r() {
        n(0, (s = []));
        let f = 0;
        function a() {
            s.pop();
            let c = 0;
            function u() {
                f === l.length ? (p = setTimeout(r, 5e3)) : c === 3 ? (s.push({ text: "<comment>Loading next page</comment>" }), n(0, s), (p = setTimeout(a, 1e3)), f--) : f < l.length && (s.push(l[f]), n(0, s), (p = setTimeout(u, 250))),
                    c++,
                    f++;
            }
            u();
        }
        a();
    }
    return (
        de(() => clearTimeout(p)),
        r(),
        n(
            1,
            (t = i.split(`
`))
        ),
        [s, t]
    );
}
class GoSnippet extends Component {
    constructor(e) {
        super(), renderComponent(this, e, pn, an, B, {});
    }
}
function Ge(o, e, n) {
    const t = o.slice();
    return (t[2] = e[n]), (t[4] = n), t;
}
function mn(o) {
    let e,
        n = o[2] + "",
        t;
    return {
        c() {
            (e = new oe(!1)), (t = D()), (e.a = t);
        },
        m(i, l) {
            e.m(n, i, l), b(i, t, l);
        },
        p(i, l) {
            l & 1 && n !== (n = i[2] + "") && e.p(n);
        },
        d(i) {
            i && (k(t), e.d());
        },
    };
}
function Qe(o) {
    let e, n;
    return (
        (e = new ie({ props: { index: o[4], $$slots: { default: [mn] }, $$scope: { ctx: o } } })),
        {
            c() {
                P(e.$$.fragment);
            },
            m(t, i) {
                M(e, t, i), (n = !0);
            },
            p(t, i) {
                const l = {};
                i & 33 && (l.$$scope = { dirty: i, ctx: t }), e.$set(l);
            },
            i(t) {
                n || (h(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                handleOutroTransition(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                cleanupComponents(e, t);
            },
        }
    );
}
function dn(o) {
    let e,
        n,
        t = I(o[0]),
        i = [];
    for (let s = 0; s < t.length; s += 1) i[s] = Qe(Ge(o, t, s));
    const l = (s) =>
        handleOutroTransition(i[s], 1, 1, () => {
            i[s] = null;
        });
    return {
        c() {
            e = x("div");
            for (let s = 0; s < i.length; s += 1) i[s].c();
            Z(e, "position", "relative");
        },
        m(s, p) {
            b(s, e, p);
            for (let r = 0; r < i.length; r += 1) i[r] && i[r].m(e, null);
            n = !0;
        },
        p(s, [p]) {
            if (p & 1) {
                t = I(s[0]);
                let r;
                for (r = 0; r < t.length; r += 1) {
                    const f = Ge(s, t, r);
                    i[r] ? (i[r].p(f, p), h(i[r], 1)) : ((i[r] = Qe(f)), i[r].c(), h(i[r], 1), i[r].m(e, null));
                }
                for (H(), r = t.length; r < i.length; r += 1) l(r);
                S();
            }
        },
        i(s) {
            if (!n) {
                for (let p = 0; p < t.length; p += 1) h(i[p]);
                n = !0;
            }
        },
        o(s) {
            i = i.filter(Boolean);
            for (let p = 0; p < i.length; p += 1) handleOutroTransition(i[p]);
            n = !1;
        },
        d(s) {
            s && k(e), K(i, s);
        },
    };
}
function hn(o, e, n) {
    let t;
    return (
        n(
            0,
            (t = `<kw>Coming soon...</kw>`.split(`
`))
        ),
        [t]
    );
}
class JavaSnippet extends Component {
    constructor(e) {
        super(), renderComponent(this, e, hn, dn, B, {});
    }
}
function Xe(o, e, n) {
    const t = o.slice();
    return (t[2] = e[n]), (t[4] = n), t;
}
function gn(o) {
    let e,
        n = o[2] + "",
        t;
    return {
        c() {
            (e = new oe(!1)), (t = D()), (e.a = t);
        },
        m(i, l) {
            e.m(n, i, l), b(i, t, l);
        },
        p(i, l) {
            l & 1 && n !== (n = i[2] + "") && e.p(n);
        },
        d(i) {
            i && (k(t), e.d());
        },
    };
}
function Ye(o) {
    let e, n;
    return (
        (e = new ie({ props: { index: o[4], $$slots: { default: [gn] }, $$scope: { ctx: o } } })),
        {
            c() {
                P(e.$$.fragment);
            },
            m(t, i) {
                M(e, t, i), (n = !0);
            },
            p(t, i) {
                const l = {};
                i & 33 && (l.$$scope = { dirty: i, ctx: t }), e.$set(l);
            },
            i(t) {
                n || (h(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                handleOutroTransition(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                cleanupComponents(e, t);
            },
        }
    );
}
function wn(o) {
    let e,
        n,
        t = I(o[0]),
        i = [];
    for (let s = 0; s < t.length; s += 1) i[s] = Ye(Xe(o, t, s));
    const l = (s) =>
        handleOutroTransition(i[s], 1, 1, () => {
            i[s] = null;
        });
    return {
        c() {
            e = x("div");
            for (let s = 0; s < i.length; s += 1) i[s].c();
            Z(e, "position", "relative");
        },
        m(s, p) {
            b(s, e, p);
            for (let r = 0; r < i.length; r += 1) i[r] && i[r].m(e, null);
            n = !0;
        },
        p(s, [p]) {
            if (p & 1) {
                t = I(s[0]);
                let r;
                for (r = 0; r < t.length; r += 1) {
                    const f = Xe(s, t, r);
                    i[r] ? (i[r].p(f, p), h(i[r], 1)) : ((i[r] = Ye(f)), i[r].c(), h(i[r], 1), i[r].m(e, null));
                }
                for (H(), r = t.length; r < i.length; r += 1) l(r);
                S();
            }
        },
        i(s) {
            if (!n) {
                for (let p = 0; p < t.length; p += 1) h(i[p]);
                n = !0;
            }
        },
        o(s) {
            i = i.filter(Boolean);
            for (let p = 0; p < i.length; p += 1) handleOutroTransition(i[p]);
            n = !1;
        },
        d(s) {
            s && k(e), K(i, s);
        },
    };
}
function $n(o, e, n) {
    let t;
    return (
        n(
            0,
            (t = `<kw>Coming soon...</kw>`.split(`
            `))
        ),
        [t]
    );
}
class KotlinSnippet extends Component {
    constructor(e) {
        super(), renderComponent(this, e, $n, wn, B, {});
    }
}
function et(o, e, n) {
    const t = o.slice();
    return (t[5] = e[n][0]), (t[6] = e[n][1]), t;
}
function tt(o) {
    let e, n, t;
    function i() {
        return o[3](o[6]);
    }
    return {
        c() {
            (e = x("button")), (e.textContent = `${o[6].name}`), $(e, "class", "nv-terminal-tab terminal-1dfudv"), z(e, "is-active", o[6].name === o[0].name);
        },
        m(l, s) {
            b(l, e, s), n || ((t = ae(e, "click", i)), (n = !0));
        },
        p(l, s) {
            (o = l), s & 5 && z(e, "is-active", o[6].name === o[0].name);
        },
        d(l) {
            l && k(e), (n = !1), t();
        },
    };
}
function bn(o) {
    let e,
        n,
        t,
        i,
        l,
        s,
        p,
        r,
        f = I(Object.entries(o[2])),
        a = [];
    for (let _ = 0; _ < f.length; _ += 1) a[_] = tt(et(o, f, _));
    var c = o[0].component;
    function u(_, g) {
        return { props: { animated: _[1] } };
    }
    return (
        c && (l = me(c, u(o))),
        {
            c() {
                (e = x("div")), (n = x("div"));
                for (let _ = 0; _ < a.length; _ += 1) a[_].c();
                (t = W()), (i = x("div")), l && P(l.$$.fragment), $(n, "class", "nv-terminal-tabs terminal-1dfudv"), $(i, "class", "nv-code-content terminal-1dfudv"), $(e, "id", "nv-terminal"), $(e, "class", "nv-code terminal-1dfudv");
            },
            m(_, g) {
                b(_, e, g), E(e, n);
                for (let m = 0; m < a.length; m += 1) a[m] && a[m].m(n, null);
                E(e, t), E(e, i), l && M(l, i, null), (s = !0), p || ((r = ae(i, "scroll", o[4])), (p = !0));
            },
            p(_, [g]) {
                if (g & 7) {
                    f = I(Object.entries(_[2]));
                    let m;
                    for (m = 0; m < f.length; m += 1) {
                        const L = et(_, f, m);
                        a[m] ? a[m].p(L, g) : ((a[m] = tt(L)), a[m].c(), a[m].m(n, null));
                    }
                    for (; m < a.length; m += 1) a[m].d(1);
                    a.length = f.length;
                }
                if (g & 1 && c !== (c = _[0].component)) {
                    if (l) {
                        H();
                        const m = l;
                        handleOutroTransition(m.$$.fragment, 1, 0, () => {
                            cleanupComponents(m, 1);
                        }),
                            S();
                    }
                    c ? ((l = me(c, u(_))), P(l.$$.fragment), h(l.$$.fragment, 1), M(l, i, null)) : (l = null);
                } else if (c) {
                    const m = {};
                    g & 2 && (m.animated = _[1]), l.$set(m);
                }
            },
            i(_) {
                s || (l && h(l.$$.fragment, _), (s = !0));
            },
            o(_) {
                l && handleOutroTransition(l.$$.fragment, _), (s = !1);
            },
            d(_) {
                _ && k(e), K(a, _), l && cleanupComponents(l), (p = !1), r();
            },
        }
    );
}
function vn(o, e, n) {
    const t = { node: { name: "Node", component: NodeSnippet }, python: { name: "Python", component: PythonSnippet }, go: { name: "Go", component: GoSnippet }, java: { name: "Java", component: JavaSnippet }, kotlin: { name: "Kotlin", component: KotlinSnippet } };
    let i = t.node,
        l = !0;
    return [
        i,
        l,
        t,
        (r) => {
            n(0, (i = r)), n(1, (l = !1));
        },
        (r) => be.set(r.target.scrollLeft),
    ];
}
class Terminal extends Component {
    constructor(e) {
        super(), renderComponent(this, e, vn, bn, B, {});
    }
}

const loadTerminal = () => {
    const nt = document.getElementById("nv-terminal"),
    dt = document.createDocumentFragment();
    new Terminal({ target: dt });
    nt.parentNode.replaceChild(dt, nt);
}
