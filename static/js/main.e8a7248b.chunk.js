(this.webpackJsonptrailertribulation = this.webpackJsonptrailertribulation || []).push([
    [0], {
        1025: function(e, t) {},
        1027: function(e, t) {},
        1067: function(e, t) {},
        1069: function(e, t) {},
        107: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return W
            }));
            var n = a(136),
                r = a(186),
                c = a(210),
                o = a(208),
                s = a(0),
                i = a.n(s),
                l = a(1382),
                u = a(540),
                d = (a(1149), a(1150), a(1151), a(1152), a(387), a(1153), a(46)),
                m = a(59),
                p = a(1371),
                f = a(68),
                b = a(1381),
                h = (a(1154), a(537)),
                g = a(560),
                v = ["input", "meta"],
                E = ["showtooltipreminderprompt", "hidetooltipreminderprompt"],
                O = "17",
                y = "18",
                w = function(e) {
                    var t = Object.assign({}, e),
                        a = m.a,
                        n = Object(s.useState)(a),
                        r = Object(d.a)(n, 2),
                        c = r[0],
                        o = r[1],
                        l = Object(s.useState)(!1),
                        u = Object(d.a)(l, 2),
                        p = u[0],
                        f = u[1],
                        v = {},
                        E = i.a.createElement("div", {
                            className: "phi-pii-tooltip-prompt"
                        }, "Please refrain from entering any ", i.a.createElement("strong", null, "PHI"), " or ", i.a.createElement("strong", null, "PII"), " related to the patient, ", i.a.createElement("strong", null, "especially dates"), ".");
                    Object(s.useEffect)((function() {
                        var e = document.getElementById(t.id);
                        o(a - e.innerHTML.length)
                    }), [t.id, a]);
                    var w = function(e) {
                        return v[O] && v[y] ? (v = {}, !0) : (v = {}, e.preventDefault(), !1)
                    };
                    return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
                        className: "input-items-wrap"
                    }, i.a.createElement(b.a, Object.assign({}, t, {
                        maxLength: a,
                        onKeyDown: function(e) {
                            v[e.keyCode] = "keydown" === e.type
                        },
                        onDrop: w,
                        onPaste: w,
                        onChange: function(e, t) {
                            o(a - t.length)
                        },
                        showtooltipreminderprompt: function() {
                            f(!0)
                        },
                        hidetooltipreminderprompt: function() {
                            f(!1)
                        },
                        component: x
                    })), i.a.createElement("div", {
                        className: "char-count"
                    }, i.a.createElement("div", {
                        onClick: function() {
                            return f(!0)
                        },
                        className: "other-input-privacy-tooltip"
                    }, i.a.createElement(h.Tooltip, {
                        className: "form-description-input-tooltip",
                        html: E,
                        open: p,
                        onRequestClose: function() {
                            return f(!1)
                        },
                        animation: "scale",
                        position: "left-end"
                    }, i.a.createElement(g.b, {
                        className: "date-options-info-icon-wrap description-field"
                    }))), i.a.createElement("span", {
                        className: c / a <= .1 ? "char-count-warn" : "char-count-norm"
                    }, "Remaining Characters: ", c, " / ", a))))
                },
                x = function(e) {
                    var t = e.input,
                        a = e.meta,
                        n = Object(f.a)(e, v),
                        r = n.showtooltipreminderprompt,
                        c = n.hidetooltipreminderprompt,
                        o = Object(f.a)(n, E),
                        s = a.dirty,
                        l = a.touched;
                    return i.a.createElement("textarea", Object.assign({}, t, o, {
                        onClick: function() {
                            t.value.length < 1 && !s && !l && r()
                        },
                        onInput: function() {
                            c()
                        }
                    }))
                },
                _ = a(20),
                N = a(1384),
                j = a(1390),
                S = a(1370),
                C = a(1393),
                k = ["como", "input"],
                T = Object(_.a)({
                    root: {
                        color: "#346cb0",
                        "&$checked": {
                            color: "#346cb0"
                        }
                    },
                    checked: {}
                })((function(e) {
                    return i.a.createElement(N.a, Object.assign({
                        color: "default"
                    }, e))
                })),
                A = function(e) {
                    var t = e.como,
                        a = e.input,
                        n = Object(f.a)(e, k);
                    return i.a.createElement(C.a, {
                        className: "form-control-inline-custom",
                        key: "".concat(t, "-button-form-control")
                    }, i.a.createElement(j.a, Object.assign({}, a, n), i.a.createElement(S.a, {
                        value: "yes",
                        control: i.a.createElement(T, null),
                        label: "",
                        id: "comorbidity-".concat("yes", "-").concat(t)
                    }), i.a.createElement(S.a, {
                        value: "no",
                        control: i.a.createElement(T, null),
                        label: "",
                        id: "comorbidity-".concat("no", "-").concat(t)
                    }), i.a.createElement(S.a, {
                        value: "unknown",
                        control: i.a.createElement(T, null),
                        label: "",
                        id: "comorbidity-".concat("unknown", "-").concat(t)
                    })))
                },
                I = function(e) {
                    var t = e.onChange,
                        a = e.como;
                    return i.a.createElement(b.a, {
                        onChange: function(e, n) {
                            t(a, n)
                        },
                        name: "".concat(a, ".answer"),
                        como: a,
                        component: A
                    })
                },
                L = a(29),
                P = a(556),
                D = a(71),
                R = a(1376),
                F = ["input", "meta", "diagnosisDate", "dateConfig"],
                U = function(e) {
                    e.input, e.meta;
                    var t = e.diagnosisDate;
                    e.dateConfig, Object(f.a)(e, F);
                    return i.a.createElement(D.a, {
                        utils: P.a
                    }, i.a.createElement(R.a, {
                        onChange: function() {},
                        value: t,
                        variant: "inline",
                        inputVariant: "outlined",
                        label: "Diagnosis Date",
                        disabled: !0,
                        disableFuture: !0,
                        keyboardIcon: null,
                        format: "MMM d, yyyy"
                    }))
                },
                M = function(e) {
                    var t = e.name,
                        a = e.placeholder,
                        n = e.className,
                        r = e.como,
                        c = L.u[r].split("-"),
                        o = Object(d.a)(c, 3),
                        s = o[0],
                        l = o[1],
                        u = o[2],
                        m = new Date(parseInt(s), parseInt(l) - 1, parseInt(u));
                    return i.a.createElement(b.a, {
                        diagnosisDate: m,
                        className: "redux-form-date-picker ".concat(n),
                        placeholder: a,
                        name: t,
                        component: U
                    })
                },
                H = function(e) {
                    var t = e.como,
                        a = e.checked,
                        n = e.onChangeAreYouSure;
                    return i.a.createElement(p.a, {
                        className: "comorb-sub-item-col",
                        key: "".concat(t, "-are-you-sure")
                    }, i.a.createElement("div", {
                        className: "are-you-sure-wrap"
                    }, i.a.createElement(b.a, {
                        name: "".concat(t, ".are-you-sure"),
                        component: "input",
                        id: "".concat(t, ".are-you-sure"),
                        type: "checkbox",
                        label: "Are you sure?",
                        onChange: function(e, a) {
                            var r = document.getElementById("".concat(t, "-are-you-sure-label"));
                            a ? (r.classList.remove("unchecked"), r.classList.add("checked")) : (r.classList.remove("checked"), r.classList.add("unchecked")), n(t, a)
                        }
                    }), i.a.createElement("label", {
                        className: "are-you-sure ".concat(a ? "checked" : "unchecked"),
                        id: "".concat(t, "-are-you-sure-label"),
                        htmlFor: "".concat(t, ".are-you-sure")
                    }, "Are you sure?")))
                },
                B = function(e) {
                    var t = e.como;
                    return Object.keys(L.u).includes(t) ? i.a.createElement(p.a, {
                        className: "diagnosis-date-wrap",
                        key: "".concat(t, "-diagnosis-date")
                    }, i.a.createElement("div", {
                        className: "comorb-date-picker-wrapper"
                    }, i.a.createElement(M, {
                        como: t,
                        className: "".concat(t, " comorb-date-picker"),
                        placeholder: "Select Prior Date",
                        name: "".concat(t, ".diagnosis-date")
                    }))) : null
                },
                z = function(e) {
                    var t = e.comoName,
                        a = e.comoValues,
                        n = e.onChangeAreYouSure,
                        r = e.onComorbOptionClick,
                        c = Object(s.useState)(),
                        o = Object(d.a)(c, 2),
                        l = o[0],
                        p = o[1],
                        f = Object(s.useState)(),
                        b = Object(d.a)(f, 2)[1];
                    return Object(s.useEffect)((function() {
                        var e = Object(L.R)(a.answers),
                            t = Object(L.Q)(a.answers);
                        p(e), b(t)
                    }), [a.answers]), i.a.createElement("div", {
                        className: "comorb-row-wrapper",
                        key: "comorb-".concat(t, "-wrap-key")
                    }, i.a.createElement("div", {
                        className: "comorb-each-row-selector-wrap",
                        id: t
                    }, t.includes("_LABEL") ? i.a.createElement("div", {
                        className: "comorb-header-item-col-wrap"
                    }, i.a.createElement(u.a, {
                        className: "comorb-header-item-col"
                    }, a.formLabel)) : i.a.createElement("div", {
                        className: "comorb-checkbox-wrap"
                    }, i.a.createElement(u.a, {
                        sm: 4,
                        className: "comorb-sub-item-col comorb-pad-left"
                    }, a.formLabel), i.a.createElement(u.a, {
                        sm: 4,
                        className: "comorb-sub-item-col",
                        key: "".concat(t, "-button-fields")
                    }, i.a.createElement(I, {
                        como: t,
                        onChange: function(e, a) {
                            var n = document.getElementById("".concat(t, "-extra-fields"));
                            [L.s, L.L].includes(a) && Object.keys(L.u).includes(t) && (n.classList.remove("hide"), n.classList.add("show")), b(a), r(e, a)
                        }
                    })), i.a.createElement(u.a, {
                        sm: 4,
                        key: "".concat(t, "-extra-fields"),
                        id: "".concat(t, "-extra-fields"),
                        className: Object(L.U)(t, a.answers) ? "show" : "hide"
                    }, i.a.createElement(B, {
                        como: t
                    }), i.a.createElement(H, {
                        como: t,
                        checked: l,
                        onChangeAreYouSure: n
                    })))), t.includes("other") ? i.a.createElement(w, {
                        maxcharacters: m.b,
                        className: "text-other-input answer-other-yes no-paste-input",
                        placeholder: "other description",
                        name: "other-".concat(t, ".input-field"),
                        id: "other-".concat(t, "-input-field")
                    }) : t.includes("unclear") ? i.a.createElement(w, {
                        maxcharacters: m.a,
                        className: "text-other-input no-paste-input",
                        placeholder: "unclear diagnosis",
                        name: "unclear-diagnosis-".concat(t, ".input-field"),
                        id: "unclear-diagnosis-".concat(t, "-input-field")
                    }) : null)
                },
                V = a(19),
                q = a(1380),
                G = a(37),
                W = {
                    "peripheral-arterial-disease_LABEL": {
                        formLabel: "Peripheral Arterial Disease",
                        answers: []
                    },
                    "lower-extremity-pad": {
                        formLabel: "Lower Extremity PAD",
                        answers: []
                    },
                    "prior-peripheral-revascularization": {
                        formLabel: "Prior Peripheral Revascularization",
                        answers: []
                    },
                    "prior-amputation": {
                        formLabel: "Prior Amputation",
                        answers: []
                    },
                    "carotid-stenosis": {
                        formLabel: "Carotid Stenosis",
                        answers: []
                    },
                    "prior-carotid-revascularization": {
                        formLabel: "Prior Carotid Revascularization",
                        answers: []
                    },
                    "abdominal-aortic-aneurysm": {
                        formLabel: "Abdominal Aortic Aneurysm",
                        answers: []
                    },
                    "other-atherosclerotic-vascular-disease": {
                        formLabel: "Other Atherosclerotic Vascular Disease",
                        answers: []
                    },
                    "coronary-artery-disease_LABEL": {
                        formLabel: "Coronary Artery Disease",
                        answers: []
                    },
                    "coronary-artery-disease": {
                        formLabel: "Coronary Artery Disease",
                        answers: []
                    },
                    "prior-cabg": {
                        formLabel: "Prior CABG",
                        answers: []
                    },
                    "prior-pci": {
                        formLabel: "Prior PCI",
                        answers: []
                    },
                    "prior-myocardial-infarction": {
                        formLabel: "Prior Myocardial Infarction",
                        answers: []
                    },
                    "cerebrovascular-disease_LABEL": {
                        formLabel: "Cerebrovascular Disease",
                        answers: []
                    },
                    "prior-stroke": {
                        formLabel: "Prior Stroke",
                        answers: []
                    },
                    "prior-tia": {
                        formLabel: "Prior TIA",
                        answers: []
                    },
                    "unclear-diagnosis": {
                        formLabel: "Unclear Diagnosis",
                        answers: []
                    }
                },
                Y = function(e) {
                    Object(c.a)(a, e);
                    var t = Object(o.a)(a);

                    function a(e, r) {
                        var c;
                        return Object(n.a)(this, a), (c = t.call(this, e, r)).componentDidUpdate = function() {
                            var e = new Set;
                            if (document.getElementById("comorbidities-form").classList.contains("was-validated")) {
                                var t = document.querySelectorAll(":invalid");
                                Object.keys(t).map((function(a) {
                                    var n = t[a].id;
                                    n.startsWith("comorbidity") && e.add(n.split("-").pop())
                                })), e.forEach((function(e) {
                                    document.getElementById(e).classList.add("comorb-form-error")
                                }))
                            }
                        }, c.checkValidityOnSubmit = function() {
                            return document.querySelectorAll(".comorb-form-error").length < 1
                        }, c.handleSubmit = function(e) {
                            e && (!1 === e.currentTarget.checkValidity() || !1 === c.checkValidityOnSubmit() ? (e.preventDefault(), e.stopPropagation()) : e.preventDefault(), c.setState({
                                validated: !0
                            }))
                        }, c.updateComorbHistory = function(e, t) {
                            W[e].answers.push(t), c.props.dispatch({
                                type: V.F,
                                payload: {
                                    comorb: e,
                                    answer: t
                                }
                            })
                        }, c.clearField = function(e) {
                            c.props.dispatch({
                                type: L.x,
                                payload: e
                            })
                        }, c.onComorbOptionClick = function(e, t) {
                            c.updateComorbHistory(e, t), t === L.P && c.clearField(e)
                        }, c.onChangeAreYouSureComorbs = function(e, t) {
                            c.updateComorbHistory(e, t.toString())
                        }, c.state = {
                            validated: !1
                        }, c
                    }
                    return Object(r.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state.validated;
                            return i.a.createElement(l.a, {
                                id: "comorbidities-form",
                                className: "comorbidities-form",
                                noValidate: !0,
                                validated: t,
                                onSubmit: function(t) {
                                    return e.handleSubmit(t)
                                }
                            }, i.a.createElement(l.a.Row, {
                                className: "comorb-main-row"
                            }, i.a.createElement("div", {
                                className: "comorb-header-wrap"
                            }, i.a.createElement("div", {
                                className: "comorb-header-inner-wrap-with-border"
                            }, i.a.createElement(u.a, {
                                sm: 4,
                                xs: 4,
                                className: "name-header"
                            }, i.a.createElement("div", null, "Name")), i.a.createElement(u.a, {
                                sm: 4,
                                xs: 4,
                                className: "checkbox-options-header-wrap"
                            }, i.a.createElement("div", null, "Yes"), i.a.createElement("div", null, "No"), i.a.createElement("div", null, "Unknown")))), i.a.createElement("div", {
                                className: "comorb-scroll-wrap",
                                id: "comorb-scroll-wrap"
                            }, Object.keys(W).map((function(t) {
                                return i.a.createElement(z, {
                                    onComorbOptionClick: e.onComorbOptionClick,
                                    onChangeAreYouSure: e.onChangeAreYouSureComorbs,
                                    key: "".concat(t, "-comorbidity-row"),
                                    comoName: t,
                                    comoValues: W[t]
                                })
                            })))))
                        }
                    }]), a
                }(s.Component);
            Y = Object(q.a)({
                form: "comorbidities"
            })(Y);
            t.b = Object(G.b)((function(e) {
                return {
                    initialValues: e.savedData.comorbidities
                }
            }), (function(e) {
                return {
                    dispatch: e
                }
            }))(Y)
        },
        1097: function(e, t) {},
        1098: function(e, t) {},
        1103: function(e, t) {},
        1105: function(e, t) {},
        1112: function(e, t) {},
        1131: function(e, t) {},
        1149: function(e, t, a) {},
        1150: function(e, t, a) {},
        1151: function(e, t, a) {},
        1152: function(e, t, a) {},
        1154: function(e, t, a) {},
        1257: function(e, t, a) {},
        1258: function(e, t, a) {},
        1259: function(e, t, a) {},
        126: function(e, t, a) {
            "use strict";
            t.a = {
                aws_project_region: "us-east-2",
                aws_cognito_identity_pool_id: "us-east-2:bbafdb2a-4383-4c55-9c51-dfb34f7785e0",
                aws_cognito_region: "us-east-2",
                aws_user_pools_id: "us-east-2_UE0FCoXIv",
                aws_user_pools_web_client_id: "6468t71ruh3m30dpo16vhamh94",
                oauth: {}
            }
        },
        1260: function(e, t, a) {},
        1263: function(e, t, a) {},
        1264: function(e, t, a) {},
        1265: function(e, t, a) {},
        1266: function(e, t, a) {},
        1267: function(e, t, a) {},
        1268: function(e, t, a) {},
        1280: function(e, t, a) {},
        1281: function(e, t, a) {},
        1305: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(23),
                r = a.n(n),
                c = a(0),
                o = a.n(c),
                s = a(34);
            a(387), Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            var i = a(52),
                l = a(111),
                u = a(68),
                d = a(28),
                m = a(1388),
                p = a(19),
                f = a(107),
                b = ["key"],
                h = Object(i.c)({
                    data: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case p.c:
                            case p.h:
                                return t.payload;
                            case p.b:
                            case p.f:
                            default:
                                return e
                        }
                    },
                    savedData: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case p.e:
                            case p.j:
                                return t.payload;
                            case p.d:
                            case p.i:
                            default:
                                return e
                        }
                    },
                    onHoldPatients: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case p.H:
                                return t.payload;
                            case p.G:
                            default:
                                return e
                        }
                    },
                    comorbHistory: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case p.F:
                                var a = t.payload,
                                    n = a.comorb,
                                    r = a.answer;
                                return n in e || (e[n] = []), e[n].push(r), Object(d.a)({}, e);
                            case p.e:
                            case p.j:
                                var c = t.payload.comorbidities_history,
                                    o = Object.keys(f.a).map((function(e) {
                                        return e in c ? Object(d.a)(Object(d.a)({}, f.a[e]), {}, {
                                            answers: c[e],
                                            key: e
                                        }) : Object(d.a)(Object(d.a)({}, f.a[e]), {}, {
                                            key: e
                                        })
                                    }));
                                return o.map((function(e) {
                                    var t = e.key,
                                        a = Object(u.a)(e, b);
                                    f.a[t] = Object.assign({}, JSON.parse(JSON.stringify(a)))
                                })), Object(d.a)({}, c);
                            case p.r:
                                return {};
                            default:
                                return e
                        }
                    },
                    loading: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                loadingState: !1,
                                loadingMessage: "Loading your content..."
                            },
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case p.w:
                                return t.action === p.v ? {
                                    loadingState: !1
                                } : {
                                    loadingState: !0,
                                    loadingMessage: "Saving patient data..."
                                };
                            case p.D:
                                return {
                                    loadingState: !0, loadingMessage: "Submitting completed patient data..."
                                };
                            case p.g:
                                return {
                                    loadingState: !0, loadingMessage: "Retrieving patient data..."
                                };
                            case p.a:
                                return {
                                    loadingState: !1, loadingMessage: "No more new patient records..."
                                };
                            case p.n:
                                return {
                                    loadingState: !0, loadingMessage: "Saving to patient on hold status..."
                                };
                            case p.p:
                                return {
                                    loadingState: !0, loadingMessage: "Loading incomplete patient..."
                                };
                            case p.k:
                            case p.x:
                            case p.o:
                            case p.E:
                            case p.f:
                            case p.i:
                            case p.C:
                            case p.u:
                            case p.q:
                                return {
                                    loadingState: !1
                                };
                            default:
                                return e
                        }
                    },
                    showModal: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        return t.type === p.y ? t.payload : e
                    },
                    showErrorFlag: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                component: null,
                                show: !1
                            },
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case p.z:
                            case p.l:
                                return t.payload;
                            default:
                                return e
                        }
                    },
                    recordStats: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        return t.type === p.I ? t.payload : e
                    },
                    showDetailedFooter: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                target: "init",
                                show: !1
                            },
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case p.a:
                                return {
                                    target: "fi", show: !1
                                };
                            case p.A:
                                return t.payload;
                            default:
                                return e
                        }
                    },
                    form: m.a.plugin({
                        comorbidities: function(e, t) {
                            switch (t.type) {
                                case p.r:
                                    return Object.keys(f.a).map((function(e) {
                                        f.a[e].answers = []
                                    })), {};
                                case p.s:
                                    var a = Object(d.a)(Object(d.a)({}, e), t),
                                        n = a.values,
                                        r = a.payload;
                                    return n ? Object(d.a)(Object(d.a)({}, e), {}, {
                                        values: Object(d.a)(Object(d.a)({}, n), {}, Object(l.a)({}, r, Object(d.a)(Object(d.a)({}, n[r]), {}, {
                                            "diagnosis-date": void 0
                                        })))
                                    }) : Object(d.a)({}, e);
                                default:
                                    return e
                            }
                        }
                    })
                }),
                g = a(561),
                v = a(17),
                E = a(29),
                O = a(98),
                y = a(37),
                w = a(62),
                x = a(46),
                _ = a(49),
                N = a(557),
                j = (a(1257), a(1379)),
                S = a(544),
                C = (a(1258), a(26)),
                k = Object(y.b)((function(e) {
                    return {
                        show: e.showModal
                    }
                }), (function(e) {
                    return {
                        saveOrSubmitPatient: function(t) {
                            t === p.B ? e({
                                type: p.D,
                                action: t
                            }) : t === p.t ? e({
                                type: p.w,
                                action: t
                            }) : t === p.m ? e({
                                type: p.n,
                                action: t
                            }) : C.a.warn("Action: ".concat(t, " doesn't exist."))
                        },
                        hideConfirmationModal: function() {
                            e({
                                type: p.y,
                                payload: !1
                            })
                        }
                    }
                }))((function(e) {
                    var t = e.show,
                        a = (t = void 0 === t ? {} : t).show,
                        n = t.action,
                        r = e.hideConfirmationModal,
                        c = e.saveOrSubmitPatient,
                        s = o.a.createElement(o.a.Fragment, null, "Continuing will submit all data and you will be directed to the next available record.", o.a.createElement("br", null), o.a.createElement("br", null), "You will not be able to access this patient or data again."),
                        i = o.a.createElement(o.a.Fragment, null, o.a.createElement("div", null, "To save the data you have entered and continue your progress on this record click ", o.a.createElement("b", null, "Save Changes"), ".", o.a.createElement("br", null), o.a.createElement("br", null), "To save the data you have entered and move onto the next patient click ", o.a.createElement("b", null, "Save For Later"), ". You will be able to return to this record later.", o.a.createElement("br", null), o.a.createElement("br", null)));
                    return o.a.createElement(j.a, {
                        size: "lg",
                        dialogClassName: n === p.t ? "modal-save" : n === p.B ? "modal-submit" : null,
                        show: a,
                        onHide: r
                    }, o.a.createElement(j.a.Header, {
                        closeButton: !0
                    }, o.a.createElement(j.a.Title, null, n === p.B ? "Confirm Submit Patient" : n === p.t ? "Confirm Save Changes" : null)), o.a.createElement(j.a.Body, null, n === p.B ? s : n === p.t ? i : null), o.a.createElement(j.a.Footer, null, o.a.createElement(S.a, {
                        variant: "secondary",
                        onClick: r
                    }, "Cancel"), o.a.createElement(S.a, {
                        variant: "primary",
                        onClick: function() {
                            c(n), r()
                        }
                    }, n === p.B ? "Submit Patient" : n === p.t ? "Save Changes" : null), n === p.t ? o.a.createElement(S.a, {
                        variant: "primary",
                        onClick: function() {
                            c(p.m), r()
                        }
                    }, "Save For Later") : null))
                })),
                T = a(1372),
                A = a(559),
                I = a(1385),
                L = a(1383),
                P = (a(1259), a(59)),
                D = {
                    muhealth: "MU Health"
                },
                R = Object(y.b)((function(e) {
                    return {
                        data: e.data,
                        onHoldPatients: e.onHoldPatients
                    }
                }), (function(e) {
                    return {
                        showConfirmationModal: function(t) {
                            e({
                                type: p.y,
                                payload: {
                                    show: !0,
                                    action: t
                                }
                            })
                        },
                        saveCurrentAndLoadPatient: function(t) {
                            e({
                                type: p.p,
                                patient: t,
                                action: p.p
                            })
                        }
                    }
                }))((function(e) {
                    var t = e.showConfirmationModal,
                        a = e.data,
                        n = e.saveCurrentAndLoadPatient,
                        r = e.onHoldPatients,
                        s = void 0 === r ? {
                            _source: {
                                demographics: {
                                    first_name: "",
                                    last_name: ""
                                }
                            }
                        } : r,
                        i = Object(c.useState)(!1),
                        l = Object(x.a)(i, 2),
                        u = l[0],
                        d = l[1],
                        m = a.demographics,
                        f = a.client,
                        b = m || {},
                        h = b.first_name,
                        g = b.last_name,
                        v = b.gender,
                        E = void 0 === v ? "?" : v,
                        O = b.birth_date;
                    h && (h = h.toLowerCase()), g && (g = g.toLowerCase()), f && (f = D[f.toLowerCase()]), console.log("BD before calculateAge func ==> ".concat(O));
                    var y = Object(P.d)(new Date(O)),
                        w = o.a.createElement("div", {
                            className: "patient-action-items"
                        }, o.a.createElement(T.a, {
                            disabled: 0 === s.length,
                            className: "incomplete-patients-dropdown-button",
                            size: "lg",
                            title: ""
                        }, s.map((function(e, t) {
                            return o.a.createElement(A.a.Item, {
                                className: "on-hold-patient-item",
                                onClick: function() {
                                    return n(e)
                                },
                                key: t
                            }, o.a.createElement("div", null, "".concat(e._source.demographics.last_name, ", ").concat(e._source.demographics.first_name)), o.a.createElement("div", null, "Patient Id: ".concat(e._source.patient_id)))
                        }))), o.a.createElement("div", {
                            className: "patient-action-items save-and-submit"
                        }, o.a.createElement(S.a, {
                            onClick: function() {
                                return t(p.t)
                            },
                            variant: "primary",
                            size: "lg",
                            className: "patient-action-buttons save-patient"
                        }), o.a.createElement(S.a, {
                            onClick: function() {
                                return t(p.B)
                            },
                            variant: "primary",
                            size: "lg",
                            className: "patient-action-buttons submit-patient"
                        })));
                    return o.a.createElement("div", {
                        className: "patient-info-bar container header",
                        id: "patient-info-action-bar"
                    }, o.a.createElement(I.a, {
                        collapseOnSelect: !0,
                        expand: "md",
                        expanded: u,
                        onToggle: function(e) {
                            d(e)
                        },
                        bg: "light",
                        variant: "light",
                        className: "patient-info-nav"
                    }, o.a.createElement(I.a.Brand, {
                        bsPrefix: "navbar"
                    }, o.a.createElement("div", {
                        className: "patient-info-nav-inner-wrap"
                    }, o.a.createElement("div", {
                        className: "patient-demographics"
                    }, o.a.createElement("div", {
                        className: "name-dob-col demographics-col"
                    }, o.a.createElement("div", {
                        className: "last-name patient-name"
                    }, "Last Name: ", g), o.a.createElement("div", null, o.a.createElement("span", null, "Sex: ", E.charAt(0), ", "), o.a.createElement("span", null, "Age: ", y))), o.a.createElement("div", {
                        className: "age-mrn-sex-col demographics-col"
                    }, o.a.createElement("div", {
                        className: "first-name patient-name"
                    }, "First Name: ", h), o.a.createElement("div", null, "DOB: ", Object(P.f)(O))), o.a.createElement("div", {
                        className: "client-name-wrap"
                    }, o.a.createElement("div", {
                        className: "client-name"
                    }, f))))), o.a.createElement(I.a.Toggle, {
                        id: "responsive-navbar-nav-aria-toggle",
                        "aria-controls": "responsive-navbar-nav"
                    }), o.a.createElement(I.a.Collapse, {
                        id: "responsive-navbar-nav",
                        className: "header-navbar-collapse"
                    }, o.a.createElement(L.a, {
                        className: "mr-auto"
                    }), w)))
                })),
                F = a(1386),
                U = Object(y.b)()((function(e) {
                    var t = e.dispatch;
                    Object(c.useEffect)((function() {
                        a()
                    }));
                    var a = function() {
                        var e = Object(w.a)(r.a.mark((function e() {
                            var a, n, c;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, N.a.currentAuthenticatedUser();
                                    case 3:
                                        a = e.sent, n = a.attributes, c = n.email, localStorage.setItem("email", c), localStorage.setItem("keyPrefix", a.keyPrefix), t({
                                            type: E.F,
                                            cognitoUser: a
                                        }), t({
                                            type: E.E
                                        }), e.next = 15;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(0), C.a.warn(e.t0);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 12]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement(R, null), o.a.createElement("div", {
                        className: "Home container content",
                        id: "home-container-content"
                    }, o.a.createElement("div", {
                        className: "card"
                    }, o.a.createElement("div", {
                        className: "side-tab-main-content-col-wrap col-sm",
                        id: "side-tab-main-content-col-wrap"
                    }, o.a.createElement(F.a.Content, {
                        className: "side-tab-main-content",
                        id: "side-tab-main-content"
                    }, o.a.createElement("div", {
                        className: "side-tab-main-panel fade tab-pane active show"
                    }, o.a.createElement(f.b, null))))), o.a.createElement(k, null)))
                })),
                M = (a(1260), function() {
                    return o.a.createElement("div", {
                        className: "NotFound"
                    }, o.a.createElement("h3", null, "Sorry, page not found!"))
                }),
                H = a(136),
                B = a(186),
                z = a(210),
                V = a(208),
                q = a(545),
                G = a(1373),
                W = (a(1263), ["isLoading", "text", "loadingText", "className", "disabled"]),
                Y = function(e) {
                    var t = e.isLoading,
                        a = e.text,
                        n = e.loadingText,
                        r = e.className,
                        c = void 0 === r ? "" : r,
                        s = e.disabled,
                        i = void 0 !== s && s,
                        l = Object(u.a)(e, W);
                    return o.a.createElement(S.a, Object.assign({
                        className: "LoaderButton ".concat(c),
                        disabled: i || t
                    }, l), t && o.a.createElement(G.a, {
                        size: "lg",
                        animation: "border",
                        className: "spinning"
                    }), t ? o.a.createElement("div", null, n) : o.a.createElement("div", null, a))
                },
                J = a(1374),
                Q = a(1371),
                K = a(1387),
                X = a(1375),
                $ = a(542),
                Z = (a(1264), a(27)),
                ee = a(30),
                te = function(e) {
                    Object(z.a)(a, e);
                    var t = Object(V.a)(a);

                    function a(e) {
                        var n;
                        return Object(H.a)(this, a), (n = t.call(this, e)).onIntervalInput = function(e) {
                            n.setState({
                                intervalInputString: e.target.value
                            })
                        }, n.setAutoSaveInterval = function() {
                            var e = document.getElementById("delay-time").value;
                            parseFloat(e) > 59 || parseFloat(e) < 1 ? (Z.e.error("Please enter a number between 1 and 60.", Object(d.a)(Object(d.a)({}, ee.b), {}, {
                                autoClose: 5e3,
                                transition: Z.b
                            })), "jsheebs@gmail.com" === localStorage.getItem("currentUser") && (n.setState({
                                interval: e
                            }), localStorage.setItem(E.b.name, Object(E.S)(e)), n.props.dispatch({
                                type: E.E
                            }))) : (n.setState({
                                interval: e
                            }), localStorage.setItem(E.b.name, Object(E.S)(e)), Z.e.success("Your data will be saved every ".concat(e, " minutes."), Object(d.a)(Object(d.a)({}, ee.e), {}, {
                                autoClose: 3e3,
                                transition: Z.b
                            })), n.props.dispatch({
                                type: E.E
                            }))
                        }, n.state = {
                            show: !0,
                            gettingFile: !1,
                            intervalInputString: "",
                            interval: Object(E.T)(localStorage.getItem(E.b.name)) || Object(E.T)(E.b.interval)
                        }, n
                    }
                    return Object(B.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.show,
                                a = e.interval,
                                n = e.intervalInputString,
                                r = o.a.createElement("div", null),
                                c = o.a.createElement(J.a, {
                                    id: "autosave-description-tooltip",
                                    className: "autosave-description-overlay"
                                }, o.a.createElement("div", null, "This must be set between a minimum of 1 minute", o.a.createElement("br", null), "and a maximum of 60 minutes. (Default is 5 min)"));
                            return o.a.createElement("div", {
                                className: "settings-component-wrap"
                            }, o.a.createElement("div", {
                                className: "auth-form"
                            }, o.a.createElement(Q.a, {
                                className: "change-password-row"
                            }, t && r, o.a.createElement(q.LinkContainer, {
                                to: "/settings/password"
                            }, o.a.createElement(Y, {
                                block: !0,
                                size: "md",
                                text: "Change Password"
                            }))), o.a.createElement(Q.a, {
                                className: "change-autosave-row"
                            }, o.a.createElement("label", {
                                htmlFor: "delay-time"
                            }, "Auto Save Delay, (currently ", a || Object(E.T)(localStorage.getItem(E.b.name)) || Object(E.T)(E.b.interval), " minutes)"), o.a.createElement(K.a, {
                                className: "autosave-description-overlay",
                                trigger: ["hover", "focus"],
                                placement: "bottom",
                                delay: {
                                    show: 250,
                                    hide: 400
                                },
                                overlay: c
                            }, o.a.createElement(X.a, null, o.a.createElement(X.a.Prepend, null, o.a.createElement(X.a.Text, null, "Minutes:")), o.a.createElement($.a, {
                                onChange: this.onIntervalInput,
                                className: "delay-time",
                                id: "delay-time",
                                type: "number"
                            }), o.a.createElement(X.a.Append, null, o.a.createElement(S.a, {
                                disabled: n.length < 1,
                                variant: "primary",
                                onClick: this.setAutoSaveInterval
                            }, "Save")))))))
                        }
                    }]), a
                }(c.Component),
                ae = te = Object(y.b)((function(e, t) {
                    return {}
                }))(te),
                ne = a(1382),
                re = (a(512), a(94)),
                ce = a(77),
                oe = ce.a({
                    mfaCode: ce.c().min(4, "This code should have at least 4 characters.").required()
                }),
                se = function() {
                    var e = Object(w.a)(r.a.mark((function e(t) {
                        var a, n, c, o, s;
                        return r.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t.user, a = t.cognitoUser, n = t.mfaCode, c = t.history, o = t.userHasAuthenticated, s = t.setLoadingState, e.prev = 1, e.next = 4, N.a.confirmSignIn(a, n);
                                case 4:
                                    o(!0), c.push("/"), e.next = 12;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(1), alert(e.t0.message), s(!1);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 8]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                ie = {
                    mfaCode: ""
                },
                le = function(e) {
                    var t = e.user,
                        a = e.cognitoUser,
                        n = e.history,
                        r = e.userHasAuthenticated,
                        c = e.setLoadingState;
                    return o.a.createElement("div", {
                        className: "MFA"
                    }, o.a.createElement(re.b, {
                        validationSchema: oe,
                        initialValues: ie,
                        onSubmit: function(e) {
                            se(Object(d.a)(Object(d.a)({}, e), {}, {
                                user: t,
                                cognitoUser: a,
                                history: n,
                                userHasAuthenticated: r,
                                setLoadingState: c
                            }))
                        }
                    }, (function(e) {
                        var t = e.values,
                            a = e.errors,
                            n = (e.status, e.touched),
                            r = (e.handleBlur, e.handleChange);
                        e.handleSubmit;
                        return o.a.createElement(ne.a, {
                            className: "auth-form"
                        }, o.a.createElement(ne.a.Group, {
                            size: "lg",
                            controlId: "formikMFAAuth"
                        }, o.a.createElement(ne.a.Label, null, "Confirmation Code"), o.a.createElement(ne.a.Control, {
                            autoFocus: !0,
                            type: "tel",
                            name: "mfaCode",
                            value: t.mfaCode,
                            onChange: r
                        }), a.mfaCode && n.mfaCode ? o.a.createElement("div", {
                            className: "input-errors"
                        }, a.mfaCode) : null, o.a.createElement(ne.a.Label, null, "Please check your email for the code.")), o.a.createElement(Y, {
                            block: !0,
                            type: "submit",
                            size: "lg",
                            loadingText: "Authenticating...",
                            text: "Login"
                        }))
                    })))
                },
                ue = le = Object(y.b)((function() {
                    return {}
                }), (function(e) {
                    return {
                        setLoadingState: function(t) {
                            e(Object(p.J)(t))
                        }
                    }
                }))(le),
                de = (a(1265), a(549)),
                me = a.n(de),
                pe = function() {
                    return o.a.createElement("div", {
                        className: "NotFound"
                    }, o.a.createElement("h3", {
                        className: "finished-header"
                    }, "Congratulations, there are no more new records! You're all done!"), o.a.createElement("video", {
                        loop: !0,
                        autoPlay: !0,
                        onClick: function() {}
                    }, o.a.createElement("source", {
                        id: "finished-video-source",
                        src: me.a
                    })))
                },
                fe = Object(c.createContext)(null);
            Object(c.createContext)(null);

            function be() {
                return Object(c.useContext)(fe)
            }
            var he = ["children"];
            var ge = function(e) {
                    var t = e.children,
                        a = Object(u.a)(e, he),
                        n = be().isAuthenticated,
                        r = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href;
                            e = e.replace(/[[]]/g, "\\$&");
                            var a = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)", "i"),
                                n = a.exec(t);
                            return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
                        }("redirect");
                    return o.a.createElement(_.d, a, n ? o.a.createElement(_.c, {
                        to: "" === r || null === r ? "/" : r
                    }) : t)
                },
                ve = ["children"],
                Ee = function(e) {
                    var t = e.children,
                        a = Object(u.a)(e, ve),
                        n = be().isAuthenticated;
                    return o.a.createElement(_.d, Object.assign({}, a, {
                        render: function(e) {
                            return n ? t : o.a.createElement(_.c, {
                                to: {
                                    pathname: "/login"
                                }
                            })
                        }
                    }))
                },
                Oe = (a(513), a(1266), a(541)),
                ye = a(543),
                we = function(e) {
                    var t = Object.assign({}, e),
                        a = Object(re.c)(t),
                        n = Object(x.a)(a, 2),
                        r = n[0],
                        c = n[1];
                    return o.a.createElement(Oe.a, null, o.a.createElement("div", {
                        className: "form-label-group"
                    }, o.a.createElement($.a, Object.assign({
                        className: "form-control"
                    }, r, t, {
                        placeholder: t.label
                    })), o.a.createElement(ye.a, {
                        htmlFor: t.name
                    }, Object(P.h)(t.label) || Object(P.h)(t.name)), c.error && c.touched && o.a.createElement("div", {
                        className: "input-errors"
                    }, c.error)))
                },
                xe = a(560),
                _e = (a(1267), function(e) {
                    Object(z.a)(a, e);
                    var t = Object(V.a)(a);

                    function a(e) {
                        var n;
                        return Object(H.a)(this, a), (n = t.call(this, e)).handleChange = function(e) {
                            n.setState(Object(l.a)({}, e.target.id, e.target.value))
                        }, n.handleSendCodeClick = function() {
                            var e = Object(w.a)(r.a.mark((function e(t) {
                                var a, c;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.preventDefault(), n.setState({
                                                isSendingCode: !0
                                            }), e.prev = 2, e.next = 5, N.a.forgotPassword(n.state.email);
                                        case 5:
                                            a = e.sent, c = a.CodeDeliveryDetails, n.setState({
                                                codeSent: !0,
                                                CodeDeliveryDetails: c
                                            }), e.next = 14;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(2), alert(e.t0.message), n.setState({
                                                isSendingCode: !1
                                            });
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 10]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), n.handleConfirmClick = function() {
                            var e = Object(w.a)(r.a.mark((function e(t) {
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.preventDefault(), n.setState({
                                                isConfirming: !0
                                            }), e.prev = 2, e.next = 5, N.a.forgotPasswordSubmit(n.state.email, n.state.code, n.state.password);
                                        case 5:
                                            n.setState({
                                                confirmed: !0
                                            }), e.next = 12;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(2), alert(e.t0.message), n.setState({
                                                isConfirming: !1
                                            });
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 8]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), n.state = {
                            cancel: !1,
                            code: "",
                            email: "",
                            phone: "",
                            password: "",
                            codeSent: !1,
                            confirmed: !1,
                            confirmPassword: "",
                            isConfirming: !1,
                            isSendingCode: !1,
                            CodeDeliveryDetails: {}
                        }, n
                    }
                    return Object(B.a)(a, [{
                        key: "validateCodeForm",
                        value: function() {
                            return this.state.email.length > 0
                        }
                    }, {
                        key: "validateResetForm",
                        value: function() {
                            return this.state.code.length > 0 && this.state.password.length > 0 && this.state.password === this.state.confirmPassword
                        }
                    }, {
                        key: "returnToLogin",
                        value: function() {
                            this.setState({
                                cancel: !0
                            })
                        }
                    }, {
                        key: "renderRequestCodeForm",
                        value: function() {
                            var e = this,
                                t = this.state.email;
                            return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                                className: "link-back-to-login"
                            }, o.a.createElement("div", {
                                onClick: function() {
                                    e.returnToLogin()
                                }
                            }, "Cancel")), o.a.createElement(ne.a, {
                                className: "auth-form",
                                onSubmit: this.handleSendCodeClick
                            }, o.a.createElement(Oe.a, {
                                size: "lg",
                                controlId: "email"
                            }, o.a.createElement(ye.a, null, "Enter your email"), o.a.createElement($.a, {
                                autoFocus: !0,
                                type: "email",
                                value: t,
                                onChange: this.handleChange
                            })), o.a.createElement(Oe.a, null, o.a.createElement(Y, {
                                className: "send-confirmation-button",
                                block: !0,
                                type: "submit",
                                size: "lg",
                                loadingText: "Sending\u2026",
                                text: "Send Confirmation",
                                isLoading: this.state.isSendingCode,
                                disabled: !this.validateCodeForm()
                            }))))
                        }
                    }, {
                        key: "renderConfirmationForm",
                        value: function() {
                            var e = this.state.CodeDeliveryDetails,
                                t = e.AttributeName,
                                a = e.Destination;
                            return o.a.createElement(ne.a, {
                                className: "auth-form",
                                onSubmit: this.handleConfirmClick
                            }, o.a.createElement(Oe.a, {
                                size: "lg",
                                controlId: "code"
                            }, o.a.createElement(ye.a, null, "Confirmation Code"), o.a.createElement($.a, {
                                autoFocus: !0,
                                type: "tel",
                                value: this.state.code,
                                onChange: this.handleChange
                            }), o.a.createElement(ye.a, {
                                className: "auth-label enter-code"
                            }, "phone_number" === t ? "We just sent you a text message at xxx-xxx-".concat(a.slice(-4)) : "We just sent you an email at ".concat(a), o.a.createElement("br", null), "When you receive it please enter the code above")), o.a.createElement("hr", null), o.a.createElement(Oe.a, {
                                size: "lg",
                                controlId: "password"
                            }, o.a.createElement(ye.a, null, "New Password"), o.a.createElement($.a, {
                                type: "password",
                                value: this.state.password,
                                onChange: this.handleChange
                            })), o.a.createElement(Oe.a, {
                                size: "lg",
                                controlId: "confirmPassword"
                            }, o.a.createElement(ye.a, null, "Confirm Password"), o.a.createElement($.a, {
                                type: "password",
                                onChange: this.handleChange,
                                value: this.state.confirmPassword
                            })), o.a.createElement(Y, {
                                block: !0,
                                type: "submit",
                                size: "lg",
                                text: "Confirm",
                                loadingText: "Confirm\u2026",
                                isLoading: this.state.isConfirming,
                                disabled: !this.validateResetForm()
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.setLoginState,
                                t = this.state,
                                n = t.codeSent,
                                r = t.confirmed;
                            return t.cancel ? o.a.createElement(Pe, null) : o.a.createElement("div", {
                                className: "ResetPassword"
                            }, n ? r ? a.renderSuccessMessage(e) : this.renderConfirmationForm() : this.renderRequestCodeForm())
                        }
                    }], [{
                        key: "renderSuccessMessage",
                        value: function(e) {
                            return o.a.createElement("div", {
                                className: "change-password-success auth-form"
                            }, o.a.createElement(xe.a, null), o.a.createElement("p", null, "Your password has been reset"), o.a.createElement("div", {
                                className: "text-center pt-3"
                            }, o.a.createElement("div", {
                                className: "nav-link-custom",
                                onClick: function() {
                                    C.a.info("User click on forgot password"), e({
                                        component: "DEFAULT",
                                        props: {}
                                    })
                                }
                            }, "Click here to login with your new credentials")))
                        }
                    }]), a
                }(c.Component)),
                Ne = ce.a({
                    code: ce.c().matches(/^\d*$/, "Only digits are used").min(6, "Must be a minimum of 6 digits").required("Please enter the confirmation code")
                }),
                je = {
                    code: ""
                },
                Se = Object(y.b)((function() {
                    return {}
                }), (function(e) {
                    return {
                        setLoadingState: function(t) {
                            e(Object(p.J)(t))
                        }
                    }
                }))((function(e) {
                    var t = e.setLoadingState,
                        a = e.userHasAuthenticated,
                        n = e.userProps,
                        c = n.username,
                        s = n.password;
                    return o.a.createElement("div", {
                        className: "Signin"
                    }, o.a.createElement(re.b, {
                        validationSchema: Ne,
                        initialValues: je,
                        onSubmit: function() {
                            var e = Object(w.a)(r.a.mark((function e(n) {
                                var o, i;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return o = n.code, C.a.info("Code: ".concat(o, ", attempting reconfirmation with values: ").concat(btoa(JSON.stringify(n)))), e.prev = 2, e.next = 5, N.a.confirmSignUp(c, o);
                                        case 5:
                                            if ("SUCCESS" !== e.sent) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.next = 9, N.a.signIn(c, s);
                                        case 9:
                                            i = e.sent, localStorage.setItem("keyPrefix", i.keyPrefix), a(!0);
                                        case 12:
                                            e.next = 18;
                                            break;
                                        case 14:
                                            e.prev = 14, e.t0 = e.catch(2), alert(e.t0.message), t(!1);
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 14]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, o.a.createElement(re.a, {
                        className: "auth-form"
                    }, o.a.createElement(we, {
                        autoFocus: !0,
                        type: "tel",
                        name: "code",
                        label: "Confirmation Code"
                    }), o.a.createElement(Y, {
                        block: !0,
                        type: "submit",
                        size: "lg",
                        loadingText: "Authenticating...",
                        text: "Login"
                    }))))
                })),
                Ce = ce.a({
                    password: ce.c().matches(/^(?=.*[a-z])/, "A lower case letter is required").matches(/^(?=.*[A-Z])/, "An upper case letter is required").matches(/^(?=.*\d)/, "A number is required").min(8, "Must be a minimum of 8 characters").required("This is a required field"),
                    confirmPassword: ce.c().oneOf([ce.b("password"), null], "Your passwords must match").required("Please confirm your password")
                }),
                ke = {
                    password: "",
                    confirmPassword: ""
                },
                Te = Object(y.b)((function(e, t) {
                    return {}
                }), (function(e) {
                    return {
                        setLoadingState: function(t) {
                            e(Object(p.J)(t))
                        }
                    }
                }))((function(e) {
                    var t = e.userProps,
                        a = e.setLoadingState,
                        n = Object(c.useState)(!1),
                        s = Object(x.a)(n, 2),
                        i = s[0],
                        l = s[1],
                        u = Object(_.k)(),
                        m = be().userHasAuthenticated,
                        p = function() {
                            var e = Object(w.a)(r.a.mark((function e(t) {
                                var a, n, c;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = t.cognitoUserObject, n = t.password, c = t.setLoadingState, e.prev = 1, e.next = 4, N.a.completeNewPassword(a, n);
                                        case 4:
                                            C.a.info("Successful password ".concat(n.slice(0, 4), " input"));
                                            try {
                                                l(!1), m(!0)
                                            } catch (r) {
                                                C.a.error(r.message), Z.e.error(r.message, ee.c), c(!1), l(!1)
                                            }
                                            e.next = 12;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(1), l(!1), e.t0.message.includes("completeNewPasswordChallenge") ? (Z.e.error("There seems to be an issue with your session, please try logging in again", ee.c), u.push("/")) : (Z.e.error("Error, ".concat(e.t0.message, ", please try logging in again"), ee.c), u.push("/"));
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 8]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: "Signin"
                    }, o.a.createElement(re.b, {
                        initialValues: ke,
                        validationSchema: Ce,
                        onSubmit: function() {
                            var e = Object(w.a)(r.a.mark((function e(n) {
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return l(!0), e.next = 3, p(Object(d.a)(Object(d.a)({}, n), {}, {
                                                cognitoUserObject: t,
                                                setLoadingState: a
                                            }));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, (function(e) {
                        var t = e.handleSubmit;
                        return o.a.createElement(ne.a, {
                            className: "auth-form",
                            noValidate: !0,
                            onSubmit: function(e) {
                                t(e)
                            }
                        }, o.a.createElement(we, {
                            label: "Password",
                            name: "password",
                            type: "password",
                            placeholder: "Password"
                        }), o.a.createElement(we, {
                            label: "Confirm Password",
                            name: "confirmPassword",
                            type: "password",
                            placeholder: "Confirm Password"
                        }), o.a.createElement(Y, {
                            block: !0,
                            type: "submit",
                            size: "lg",
                            isLoading: i,
                            loadingText: "Submitting...",
                            text: "Submit Password Change"
                        }))
                    }))))
                })),
                Ae = ce.a({
                    username: ce.c().required("Please enter your username"),
                    password: ce.c().min(8, "Your password must be at least 8 characters").required("Please enter your password")
                }),
                Ie = {
                    username: "",
                    password: ""
                },
                Le = function(e) {
                    var t = Object(c.useState)(!1),
                        a = Object(x.a)(t, 2),
                        n = a[0],
                        s = a[1],
                        i = e.userHasAuthenticated,
                        l = e.history,
                        u = e.setLoginState;
                    return o.a.createElement("div", {
                        className: "Signin"
                    }, o.a.createElement(re.b, {
                        validationSchema: Ae,
                        initialValues: Ie,
                        onSubmit: function() {
                            var e = Object(w.a)(r.a.mark((function e(t) {
                                var a, n, c, m, p, f, b;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return s(!0), a = {
                                                username: (r = t).username,
                                                password: r.password
                                            }, C.a.info("Username: ".concat(a.username, ", attempting login with values: ").concat(btoa(JSON.stringify(t)))), e.prev = 3, e.next = 6, N.a.signIn(a);
                                        case 6:
                                            n = e.sent, c = n.keyPrefix, m = n.challengeName, p = n.preferredMFA, localStorage.setItem("keyPrefix", c), "SMS_MFA" === m || "SOFTWARE_TOKEN_MFA" === m ? (C.a.info("MFA required, redirecting to /mfa"), l.push("/mfa")) : "NEW_PASSWORD_REQUIRED" === m ? (C.a.info("NEW_PASSWORD_REQUIRED"), u({
                                                component: "NEW_PASSWORD_REQUIRED",
                                                props: n
                                            })) : "MFA_SETUP" === m ? (C.a.info("MFA_SETUP, not supported"), alert("This option is not supported at this time")) : ("NOMFA" === p && Z.e.info("MFA not required.", ee.d), s(!1), C.a.info("Normal authentication, no challenges required"), i(!0)), e.next = 39;
                                            break;
                                        case 12:
                                            if (e.prev = 12, e.t0 = e.catch(3), s(!1), "PasswordResetRequiredException" !== e.t0.code) {
                                                e.next = 21;
                                                break
                                            }
                                            Z.e.warn("You must reset your password.", ee.g), C.a.info("Password reset required", a.username), u({
                                                component: "PasswordResetRequiredException",
                                                props: Object(d.a)({}, a)
                                            }), e.next = 39;
                                            break;
                                        case 21:
                                            if ("UserNotConfirmedException" !== e.t0.code) {
                                                e.next = 37;
                                                break
                                            }
                                            return e.prev = 22, e.next = 25, N.a.resendSignUp(a.username);
                                        case 25:
                                            f = e.sent, b = f.CodeDeliveryDetails.Destination, Z.e.info(o.a.createElement("div", null, "You still need to confirm your account.", o.a.createElement("br", null), "An email has been sent to ".concat(b, " containing your code.")), Object(d.a)(Object(d.a)({}, ee.c), {}, {
                                                className: "class-name-danger"
                                            })), u({
                                                component: "UserNotConfirmedException",
                                                props: Object(d.a)({}, a)
                                            }), e.next = 35;
                                            break;
                                        case 31:
                                            e.prev = 31, e.t1 = e.catch(22), "LimitExceededException" === e.t1.code && Z.e.error("Attempt limit exceeded, please try later.", ee.c), C.a.warn("Error resending code for ".concat(a.username, ", e: ").concat(e.t1.message));
                                        case 35:
                                            e.next = 39;
                                            break;
                                        case 37:
                                            "NotAuthorizedException" === e.t0.code && "User is disabled." === e.t0.message ? Z.e.error(o.a.createElement("div", null, "Your account has been disabled.", o.a.createElement("br", null), "Contact an administrator."), ee.c) : Z.e.error(e.t0.message, ee.c), C.a.warn(e.t0);
                                        case 39:
                                        case "end":
                                            return e.stop()
                                    }
                                    var r
                                }), e, null, [
                                    [3, 12],
                                    [22, 31]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, o.a.createElement(re.a, {
                        className: "auth-form"
                    }, o.a.createElement(we, {
                        label: "username",
                        name: "username",
                        type: "text",
                        placeholder: "username"
                    }), o.a.createElement(we, {
                        label: "password",
                        name: "password",
                        type: "password",
                        placeholder: "password"
                    }), o.a.createElement(Y, {
                        block: !0,
                        type: "submit",
                        size: "lg",
                        text: "Sign In",
                        loadingText: "Authenticating...",
                        isLoading: n
                    }), o.a.createElement("div", {
                        className: "text-center pt-3"
                    }, o.a.createElement("div", {
                        className: "nav-link-custom",
                        onClick: function() {
                            C.a.info("User click on forgot password"), u({
                                component: "USER_FORGOT_PASSWORD_MANUAL",
                                props: {}
                            })
                        }
                    }, "Forgot password?")))))
                },
                Pe = Object(y.b)((function() {
                    return {}
                }), (function() {
                    return {}
                }))((function() {
                    var e = be().userHasAuthenticated,
                        t = Object(c.useState)({
                            component: "DEFAULT",
                            props: {}
                        }),
                        a = Object(x.a)(t, 2),
                        n = a[0],
                        r = a[1],
                        s = {
                            userHasAuthenticated: e,
                            history: Object(_.k)(),
                            userProps: n.props,
                            setLoginState: r
                        };
                    switch (n.component) {
                        case "DEFAULT":
                            return o.a.createElement(Le, s);
                        case "UserNotConfirmedException":
                            return o.a.createElement(Se, s);
                        case "USER_FORGOT_PASSWORD_MANUAL":
                        case "PasswordResetRequiredException":
                            return o.a.createElement(_e, s);
                        case "NEW_PASSWORD_REQUIRED":
                            return o.a.createElement(Te, s);
                        default:
                            return o.a.createElement(Le, {
                                props: s
                            })
                    }
                })),
                De = function() {
                    return o.a.createElement(_.g, null, o.a.createElement(Ee, {
                        path: "/",
                        exact: !0
                    }, o.a.createElement(U, null)), o.a.createElement(Ee, {
                        path: "/mfa",
                        exact: !0
                    }, o.a.createElement(ue, null)), o.a.createElement(ge, {
                        path: "/login",
                        exact: !0
                    }, o.a.createElement(Pe, null)), o.a.createElement(Ee, {
                        path: "/settings",
                        exact: !0
                    }, o.a.createElement(ae, null)), o.a.createElement(Ee, {
                        path: "/fi",
                        exact: !0
                    }, o.a.createElement(pe, null)), o.a.createElement(_.d, {
                        component: M
                    }))
                },
                Re = a(1389),
                Fe = a(540),
                Ue = a(1392),
                Me = (a(514), a(376)),
                He = a.n(Me),
                Be = function(e) {
                    var t = e.stats,
                        a = Object(_.l)(),
                        n = t.total,
                        r = void 0 === n ? 0 : n,
                        c = t.completedByMe,
                        s = void 0 === c ? 0 : c,
                        i = t.in_progress,
                        l = void 0 === i ? 0 : i,
                        u = t.complete,
                        d = void 0 === u ? 0 : u,
                        m = t.untouched,
                        p = void 0 === m ? 0 : m,
                        f = t.missing,
                        b = void 0 === f ? 0 : f,
                        h = t.patientId,
                        g = void 0 === h ? 0 : h,
                        v = t.docId,
                        O = void 0 === v ? 0 : v,
                        y = t.on_hold,
                        w = void 0 === y ? 0 : y,
                        x = (.5 * l + d) / r * 100,
                        N = o.a.createElement(J.a, {
                            id: "record-ids-tooltip",
                            style: {
                                fontSize: "10px"
                            }
                        }, "Patient: ", g, " ", o.a.createElement("br", null), " Id: ", O),
                        j = o.a.createElement(J.a, {
                            id: "record-ids-tooltip",
                            style: {
                                fontSize: "10px"
                            }
                        }, "Comorbs: ", E.c),
                        S = o.a.createElement(Re.a, {
                            id: "record-stats-popover",
                            className: "record-stats-popover",
                            title: "Progress Info"
                        }, o.a.createElement(Q.a, {
                            className: "record-stats-row"
                        }, o.a.createElement("div", {
                            className: "stat-label-left"
                        }, "Record ID"), o.a.createElement("div", {
                            className: "separator-dots"
                        }), o.a.createElement("div", {
                            className: "stat-number-right"
                        }, g)), o.a.createElement(Q.a, {
                            className: "record-stats-row"
                        }, o.a.createElement("div", {
                            className: "stat-label-left"
                        }, "Records completed by me"), o.a.createElement("div", {
                            className: "separator-dots"
                        }), o.a.createElement("div", {
                            className: "stat-number-right"
                        }, s)), o.a.createElement(Q.a, {
                            className: "record-stats-row"
                        }, o.a.createElement("div", {
                            className: "stat-label-left"
                        }, "Total records completed"), o.a.createElement("div", {
                            className: "separator-dots"
                        }), o.a.createElement("div", {
                            className: "stat-number-right"
                        }, d)), o.a.createElement(Q.a, {
                            className: "record-stats-row"
                        }, o.a.createElement("div", {
                            className: "stat-label-left"
                        }, "Total records in progress"), o.a.createElement("div", {
                            className: "separator-dots"
                        }), o.a.createElement("div", {
                            className: "stat-number-right"
                        }, l)), o.a.createElement(Q.a, {
                            className: "record-stats-row"
                        }, o.a.createElement("div", {
                            className: "stat-label-left"
                        }, "Total records on hold"), o.a.createElement("div", {
                            className: "separator-dots"
                        }), o.a.createElement("div", {
                            className: "stat-number-right"
                        }, w)), o.a.createElement(Q.a, {
                            className: "record-stats-row"
                        }, o.a.createElement("div", {
                            className: "stat-label-left"
                        }, "Total new records"), o.a.createElement("div", {
                            className: "separator-dots"
                        }), o.a.createElement("div", {
                            className: "stat-number-right"
                        }, p + b)), o.a.createElement(Q.a, {
                            className: "record-stats-row"
                        }, o.a.createElement("div", {
                            className: "stat-label-left"
                        }, "Total existing records"), o.a.createElement("div", {
                            className: "separator-dots"
                        }), o.a.createElement("div", {
                            className: "stat-number-right"
                        }, r))),
                        k = o.a.createElement("div", {
                            className: "App container footer",
                            id: "app-container-footer"
                        }, o.a.createElement(I.a, {
                            className: "footer-inside",
                            expand: "lg",
                            bg: "light",
                            variant: "light",
                            collapseOnSelect: !0
                        }, o.a.createElement(Fe.a, {
                            className: "col-md-3 progress-bar-wrap"
                        }, 0 !== t ? o.a.createElement(K.a, {
                            onEnter: function() {
                                return C.a.info("Entering hover state for progress info")
                            },
                            trigger: ["hover", "focus"],
                            placement: "top",
                            overlay: S
                        }, o.a.createElement(Ue.a, {
                            animated: !0,
                            now: x
                        })) : null), o.a.createElement(Fe.a, {
                            className: "col-md-1"
                        }, 0 !== t ? o.a.createElement(K.a, {
                            trigger: ["hover", "focus"],
                            placement: "top",
                            overlay: N
                        }, o.a.createElement("div", {
                            style: {
                                width: "100%",
                                height: "10px"
                            }
                        })) : null), o.a.createElement(Fe.a, {
                            className: "col-md-1"
                        }, 0 !== t ? o.a.createElement(K.a, {
                            trigger: ["hover", "focus"],
                            placement: "top",
                            overlay: j
                        }, o.a.createElement("div", {
                            style: {
                                width: "100%",
                                height: "10px"
                            }
                        })) : null), o.a.createElement(Fe.a, null, o.a.createElement("img", {
                            className: "logo-authenticated-footer",
                            src: He.a,
                            alt: "Logo"
                        })))),
                        T = o.a.createElement("div", {
                            className: "App container footer",
                            id: "app-container-footer"
                        }, o.a.createElement(I.a, {
                            className: "footer-inside",
                            expand: "lg",
                            bg: "light",
                            variant: "light",
                            collapseOnSelect: !0
                        }, o.a.createElement(Fe.a, {
                            className: "col-md-3 progress-bar-wrap"
                        }), o.a.createElement(Fe.a, {
                            className: "col-md-1"
                        }), o.a.createElement(Fe.a, null, o.a.createElement("img", {
                            className: "logo-authenticated-footer",
                            src: He.a,
                            alt: "Logo"
                        }))));
                    return "/" === a.pathname ? k : T
                },
                ze = Be = Object(y.b)((function(e) {
                    return {
                        stats: e.recordStats,
                        showDetailedFooter: e.showDetailedFooter
                    }
                }), (function(e) {
                    return {
                        dispatch: e
                    }
                }))(Be),
                Ve = (a(515), a(1268), function(e) {
                    var t = Object(_.k)(),
                        a = Object(c.useState)(!1),
                        n = Object(x.a)(a, 2),
                        r = n[0],
                        s = n[1],
                        i = e.isAuthenticated,
                        l = e.handleLogout,
                        u = e.dispatch,
                        d = o.a.createElement(L.a, {
                            className: "justify-content-end"
                        }, o.a.createElement(L.a.Item, null, o.a.createElement(L.a.Link, {
                            disabled: !0,
                            className: "active-user"
                        }, Object(P.g)())), o.a.createElement(L.a.Item, null, o.a.createElement(L.a.Link, {
                            onClick: function() {
                                u({
                                    type: E.z,
                                    action: E.v
                                }), t.push("/settings"), s(!1)
                            }
                        }, "Settings")), o.a.createElement(L.a.Item, null, o.a.createElement(L.a.Link, {
                            onClick: function() {
                                l(), s(!1)
                            }
                        }, "Logout"))),
                        m = o.a.createElement(o.a.Fragment, null, o.a.createElement(L.a, null, o.a.createElement(L.a.Link, {
                            href: "/signup"
                        }, "Signup")), o.a.createElement(L.a, null, o.a.createElement(L.a.Link, {
                            href: "/login"
                        }, "Login")));
                    return o.a.createElement("div", {
                        className: "App container header",
                        id: "app-container-header"
                    }, o.a.createElement(I.a, {
                        collapseOnSelect: !0,
                        expand: "md",
                        expanded: r,
                        onToggle: function(e) {
                            s(e)
                        },
                        bg: "light",
                        variant: "light",
                        className: "user-options-nav"
                    }, o.a.createElement(I.a.Brand, {
                        className: "the-learning-registry-title",
                        onClick: function() {
                            t.push("/"), s(!1)
                        }
                    }, "Adjudication Tool"), o.a.createElement(I.a.Toggle, {
                        id: "responsive-navbar-nav-aria-toggle",
                        "aria-controls": "responsive-navbar-nav"
                    }), o.a.createElement(I.a.Collapse, {
                        id: "responsive-navbar-nav",
                        className: "header-navbar-collapse"
                    }, o.a.createElement(L.a, {
                        className: "mr-auto"
                    }), i ? d : m)))
                }),
                qe = Ve = Object(y.b)()(Ve),
                Ge = a(550),
                We = a.n(Ge),
                Ye = (a(1279), a(1280), function() {
                    return o.a.createElement("div", null, o.a.createElement(Z.c, {
                        style: {
                            textAlign: "center"
                        },
                        position: "bottom-center",
                        autoClose: 2e3,
                        hideProgressBar: !1,
                        newestOnTop: !1,
                        closeOnClick: !0,
                        rtl: !1,
                        pauseOnVisibilityChange: !0,
                        draggable: !0,
                        pauseOnHover: !0,
                        transition: Z.a
                    }))
                }),
                Je = a(551),
                Qe = a.n(Je),
                Ke = a(552),
                Xe = a.n(Ke),
                $e = (a(1281), Object(y.b)((function(e) {
                    return {}
                }), (function(e) {
                    return {}
                }))((function() {
                    return o.a.createElement("header", {
                        id: "auth-header",
                        className: "auth-header",
                        style: {
                            backgroundImage: "url(".concat(Qe.a, ")")
                        }
                    }, o.a.createElement("h1", null, o.a.createElement("img", {
                        className: "logo-unauthenticated",
                        src: Xe.a,
                        alt: "The Learning Registry -- Adjudication Tool"
                    })))
                }))),
                Ze = a(97),
                et = a(126);
            Ze.default.configure(et.a);
            var tt = Object(y.b)((function(e) {
                    return Object(d.a)({}, e.loading)
                }))((function(e) {
                    var t = Object(_.k)(),
                        a = Object(c.useState)(!0),
                        n = Object(x.a)(a, 2),
                        s = n[0],
                        i = n[1],
                        l = Object(c.useState)(!1),
                        u = Object(x.a)(l, 2),
                        d = u[0],
                        m = u[1];
                    Object(c.useEffect)((function() {
                        p()
                    }), []);
                    var p = function() {
                            var e = Object(w.a)(r.a.mark((function e() {
                                var t, a;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, N.a.currentSession();
                                        case 3:
                                            return e.next = 5, N.a.currentAuthenticatedUser();
                                        case 5:
                                            t = e.sent, a = t.attributes.email, localStorage.setItem("email", a), m(!0), e.next = 14;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e.catch(0), Object(P.e)(e.t0);
                                        case 14:
                                            i(!1);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 11]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        f = function() {
                            var e = Object(w.a)(r.a.mark((function e() {
                                var t;
                                return r.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return C.a.info("User logging out ==>"), e.next = 3, N.a.signOut();
                                        case 3:
                                            localStorage.clear(), m(!1), t = new Event("UserLogout"), document.dispatchEvent(t);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        b = e.loadingState,
                        h = e.loadingMessage;
                    return o.a.createElement(We.a, {
                        className: "loading-overlay",
                        active: b,
                        text: h,
                        spinner: !0
                    }, !s && o.a.createElement(o.a.Fragment, null, d ? o.a.createElement(qe, {
                        handleLogout: f,
                        isAuthenticated: d
                    }) : o.a.createElement($e, null), o.a.createElement(fe.Provider, {
                        value: {
                            isAuthenticated: d,
                            userHasAuthenticated: m
                        }
                    }, o.a.createElement(De, null)), d && o.a.createElement(ze, {
                        history: t
                    }), o.a.createElement(Ye, null)))
                })),
                at = r.a.mark(ct),
                nt = Object(g.a)(),
                rt = Object(i.e)(h, Object(i.a)(nt));

            function ct() {
                return r.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(v.d)(E.V);
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), at)
            }
            nt.run(ct);
            Object(s.render)(o.a.createElement(O.BrowserRouter, null, o.a.createElement(y.a, {
                store: rt
            }, o.a.createElement(tt, null))), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            }))
        },
        19: function(e, t, a) {
            "use strict";
            a.d(t, "F", (function() {
                return r
            })), a.d(t, "y", (function() {
                return c
            })), a.d(t, "J", (function() {
                return o
            })), a.d(t, "z", (function() {
                return s
            })), a.d(t, "l", (function() {
                return i
            }));
            var n = a(29);
            a.d(t, "a", (function() {
                return n.a
            })), a.d(t, "b", (function() {
                return n.e
            })), a.d(t, "c", (function() {
                return n.f
            })), a.d(t, "d", (function() {
                return n.g
            })), a.d(t, "e", (function() {
                return n.h
            })), a.d(t, "f", (function() {
                return n.i
            })), a.d(t, "g", (function() {
                return n.j
            })), a.d(t, "h", (function() {
                return n.k
            })), a.d(t, "i", (function() {
                return n.l
            })), a.d(t, "j", (function() {
                return n.m
            })), a.d(t, "k", (function() {
                return n.n
            })), a.d(t, "m", (function() {
                return n.o
            })), a.d(t, "n", (function() {
                return n.p
            })), a.d(t, "o", (function() {
                return n.q
            })), a.d(t, "p", (function() {
                return n.r
            })), a.d(t, "q", (function() {
                return n.t
            })), a.d(t, "r", (function() {
                return n.w
            })), a.d(t, "s", (function() {
                return n.x
            })), a.d(t, "t", (function() {
                return n.y
            })), a.d(t, "u", (function() {
                return n.A
            })), a.d(t, "v", (function() {
                return n.B
            })), a.d(t, "w", (function() {
                return n.C
            })), a.d(t, "x", (function() {
                return n.D
            })), a.d(t, "A", (function() {
                return n.G
            })), a.d(t, "B", (function() {
                return n.H
            })), a.d(t, "C", (function() {
                return n.I
            })), a.d(t, "D", (function() {
                return n.J
            })), a.d(t, "E", (function() {
                return n.K
            })), a.d(t, "G", (function() {
                return n.M
            })), a.d(t, "H", (function() {
                return n.N
            })), a.d(t, "I", (function() {
                return n.O
            }));
            var r = "UPDATE_COMORB_HISTORY",
                c = "SHOW_CONFIRMATION_MODAL",
                o = function(e) {
                    return e ? {
                        type: "LOADING_TRUE"
                    } : {
                        type: "LOADING_FALSE"
                    }
                },
                s = "SHOW_ERROR_FLAG",
                i = "HIDE_ERROR_FLAG"
        },
        26: function(e, t, a) {
            "use strict";
            var n = a(558),
                r = a(30),
                c = a(59),
                o = {
                    DEBUG: 0,
                    INFO: 1,
                    WARN: 2,
                    ERROR: 3
                },
                s = o.DEBUG,
                i = function(e, t, a, c) {
                    if (!(s > o[c])) {
                        a && console.log("[".concat(c, "] ==> ").concat(e)), "object" === typeof e && (e = JSON.stringify(e)), t || (t = "other");
                        var i = localStorage.getItem("CognitoIdentityId-".concat(r.a.cognito.IDENTITY_POOL_ID));
                        o[c] !== o.DEBUG && n.a.record({
                            data: {
                                level: c,
                                message: e,
                                identity_id: i,
                                action_timestamp: new Date
                            },
                            partitionKey: t,
                            streamName: "chart-review-user-stream"
                        }, "AWSKinesis")
                    }
                },
                l = function() {
                    return Object(c.g)() || "other"
                },
                u = {
                    debug: console.log.bind(window.console),
                    info: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l(),
                            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return i(e, t, a, "INFO")
                    },
                    warn: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l(),
                            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return i(e, t, a, "WARN")
                    },
                    error: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l(),
                            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return i(e, t, a, "ERROR")
                    }
                };
            t.a = u
        },
        29: function(e, t, a) {
            "use strict";
            a.d(t, "n", (function() {
                return F
            })), a.d(t, "z", (function() {
                return U
            })), a.d(t, "F", (function() {
                return M
            })), a.d(t, "E", (function() {
                return H
            })), a.d(t, "G", (function() {
                return B
            })), a.d(t, "a", (function() {
                return z
            })), a.d(t, "O", (function() {
                return V
            })), a.d(t, "j", (function() {
                return q
            })), a.d(t, "k", (function() {
                return G
            })), a.d(t, "i", (function() {
                return W
            })), a.d(t, "h", (function() {
                return Y
            })), a.d(t, "g", (function() {
                return J
            })), a.d(t, "f", (function() {
                return Q
            })), a.d(t, "e", (function() {
                return K
            })), a.d(t, "v", (function() {
                return X
            })), a.d(t, "y", (function() {
                return $
            })), a.d(t, "H", (function() {
                return Z
            })), a.d(t, "o", (function() {
                return ee
            })), a.d(t, "B", (function() {
                return te
            })), a.d(t, "C", (function() {
                return ae
            })), a.d(t, "D", (function() {
                return ne
            })), a.d(t, "A", (function() {
                return re
            })), a.d(t, "p", (function() {
                return ce
            })), a.d(t, "q", (function() {
                return oe
            })), a.d(t, "N", (function() {
                return se
            })), a.d(t, "M", (function() {
                return ie
            })), a.d(t, "r", (function() {
                return le
            })), a.d(t, "J", (function() {
                return ue
            })), a.d(t, "K", (function() {
                return de
            })), a.d(t, "I", (function() {
                return me
            })), a.d(t, "m", (function() {
                return pe
            })), a.d(t, "l", (function() {
                return fe
            })), a.d(t, "w", (function() {
                return be
            })), a.d(t, "t", (function() {
                return he
            })), a.d(t, "x", (function() {
                return ge
            })), a.d(t, "P", (function() {
                return Ee
            })), a.d(t, "s", (function() {
                return Oe
            })), a.d(t, "L", (function() {
                return ye
            })), a.d(t, "d", (function() {
                return je
            })), a.d(t, "u", (function() {
                return Se
            })), a.d(t, "c", (function() {
                return Ce
            })), a.d(t, "b", (function() {
                return Te
            })), a.d(t, "Q", (function() {
                return De
            })), a.d(t, "R", (function() {
                return Re
            })), a.d(t, "U", (function() {
                return Fe
            })), a.d(t, "T", (function() {
                return ze
            })), a.d(t, "S", (function() {
                return Ve
            })), a.d(t, "V", (function() {
                return gt
            }));
            var n = a(46),
                r = a(68),
                c = a(562),
                o = a(28),
                s = a(23),
                i = a.n(s),
                l = a(111),
                u = a(378),
                d = a(17),
                m = a(27),
                p = a(30),
                f = a(529),
                b = Object(f.a)(),
                h = a(26),
                g = a(62),
                v = a(136),
                E = a(535),
                O = a(536),
                y = a(117),
                w = a(557),
                x = function e() {
                    Object(v.a)(this, e)
                };
            x.region = p.a.cognito.REGION, x.options = {
                host: "https://search-adjudication-o5fdwdzdhxbb5psfsvivlcngyq.us-east-2.es.amazonaws.com",
                connectionClass: E,
                requestTimeout: 6e4,
                keepAlive: !0
            }, x.priorTokenExpireTimes = [], x.expired = null !== (x.expireTime = null), x.client = new O.Client(x.options), x.refreshCredentials = Object(g.a)(i.a.mark((function e() {
                var t, a, n, r, c, o, s, u;
                return i.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, w.a.currentSession();
                        case 2:
                            return t = e.sent, y.config.region = x.region, y.config.credentials = new y.CognitoIdentityCredentials({
                                IdentityPoolId: p.a.cognito.IDENTITY_POOL_ID,
                                Logins: Object(l.a)({}, p.a.cognito.LOGIN, t.getIdToken().getJwtToken())
                            }), e.prev = 5, e.next = 8, y.config.credentials.getPromise();
                        case 8:
                            a = y.config.credentials, n = a.accessKeyId, r = a.secretAccessKey, c = a.sessionToken, o = a.expired, s = a.expireTime, x.expired = (u = [o, s])[0], x.expireTime = u[1], y.config.update({
                                credentials: new y.Credentials(n, r, c),
                                region: x.region
                            }), e.next = 18;
                            break;
                        case 15:
                            e.prev = 15, e.t0 = e.catch(5), h.a.error(e.t0);
                        case 18:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [5, 15]
                ])
            })));
            var _ = a(59),
                N = a(107),
                cIndex = "clinicalevents", //RSS
                j = i.a.mark(Ge),
                S = i.a.mark(Xe),
                C = i.a.mark($e),
                k = i.a.mark(ut),
                T = i.a.mark(dt),
                A = i.a.mark(mt),
                I = i.a.mark(pt),
                L = i.a.mark(ft),
                P = i.a.mark(bt),
                D = i.a.mark(ht),
                R = i.a.mark(gt),
                F = "FETCH_SUCCESS",
                U = "SAVE_PATIENT_BEFORE_SETTINGS_PAGE",
                M = "SET_REFRESH_SESSION_INTERVAL",
                H = "SET_AUTO_SAVE_INTERVAL",
                B = "SHOW_EXTENDED_FOOTER",
                z = "ALL_AVAILABLE_RECORDS_RESOLVED",
                V = "UPDATE_TOTAL_RECORDS_LEFT",
                q = "FETCH_ORIGINAL_PATIENT_REQUESTED",
                G = "FETCH_ORIGINAL_PATIENT_SUCCESS",
                W = "FETCH_ORIGINAL_PATIENT_FAILURE",
                Y = "FETCH_ON_HOLD_SAVED_PATIENT_SUCCESS",
                J = "FETCH_ON_HOLD_SAVED_PATIENT_FAILURE",
                Q = "FETCH_ON_HOLD_ORIGINAL_PATIENT_SUCCESS",
                K = "FETCH_ON_HOLD_ORIGINAL_PATIENT_FAILURE",
                X = "in_progress",
                $ = X,
                Z = "complete",
                ee = "on_hold",
                te = "SAVE_PATIENT_ON_INTERVAL",
                ae = "SAVE_PATIENT_REQUESTED",
                ne = "SAVE_PATIENT_SUCCESS",
                re = "SAVE_PATIENT_FAILURE",
                ce = "HOLD_PATIENT_REQUESTED",
                oe = "HOLD_PATIENT_SUCCESS",
                se = "UPDATE_PATIENT_DROPDOWN_SUCCESS",
                ie = "UPDATE_PATIENT_DROPDOWN_FAILURE",
                le = "LOAD_ON_HOLD_PATIENT",
                ue = "SUBMIT_PATIENT_REQUESTED",
                de = "SUBMIT_PATIENT_SUCCESS",
                me = "SUBMIT_PATIENT_FAILURE",
                pe = "FETCH_SAVED_PATIENT_SUCCESS",
                fe = "FETCH_SAVED_PATIENT_FAILURE",
                be = "RESET_FORMS_ON_SUBMIT",
                he = "OTHER_SAVE_OR_SUBMIT_ERROR",
                ge = "RESET_FORM_DATE_FIELD",
                ve = "checkbox_init",
                Ee = "yes",
                Oe = "no",
                ye = "unknown",
                we = !0,
                xe = !1,
                _e = "true",
                Ne = "false",
                je = "email",
                Se = [],
                Ce = "",
                ke = ["is_eu", "continent_name", "continent_code", "asn", "calling_code", "flag", "emoji_flag", "emoji_unicode", "languages", "currency"],
                Te = {
                    name: "AUTO_SAVE_INTERVAL",
                    interval: 3e5
                },
                Ae = function() {
                    return Object(_.g)()
                },
                Ie = function() {
                    //return Ae().split(/[.@]/).slice(-2, -1)[0]
                    return cIndex //RSS
                },
                Le = function() {
                    return "".concat(Ie(), "-saved")
                },
                Pe = function(e, t) {
                    return Array.isArray(t) ? t.indexOf(e) > -1 : t instanceof Object ? Object.keys(t).indexOf(e) > -1 : void 0
                },
                De = function(e) {
                    for (var t = 1, a = e[e.length - t];
                        [we, xe, _e, Ne, ve].includes(a);) a = e[e.length - t++];
                    return a
                },
                Re = function(e) {
                    return Math.max(e.lastIndexOf(_e), e.lastIndexOf(we)) > Math.max(e.lastIndexOf(Ne), e.lastIndexOf(xe))
                },
                Fe = function(e, t) {
                    return Pe(e, Se) && function(e) {
                        var t = [Oe, ye, Ne, _e, xe, we];
                        return e.some((function(e) {
                            return t.includes(e)
                        }))
                    }(t)
                },
                Ue = function(e) {
                    var t = (new Date).toJSON().split("T")[0],
                        a = e._source,
                        n = e.docId;
                    return a.doc_id = n, t = a.comorbidities, Se = He(t), Ce = Me(t), a
                },
                Me = function(e) {
                    var t = Object.keys(N.a).filter((function(e) {
                            return !e.includes("LABEL")
                        })),
                        a = Object.keys(e);
                    return t.reduce((function(t, n) {
                        return t = a.includes(n) && e[n].hasOwnProperty("ind") ? "".concat(t).concat(e[n].ind) : a.includes(n) ? "".concat(t, "1") : "".concat(t, "0")
                    }), "")
                },
                He = function(e) {
                    return Object.keys(e).reduce((function(t, a) {
                        return e[a].hasOwnProperty("ind") && !e[a].ind || (t[a] = e[a].date || e[a]), t
                    }), {})
                },
                Be = function(e) {
                    h.a.info("Number of records in progress: ".concat(e)), m.e.info("You have ".concat(e, " current records in progress!"), p.f)
                },
                ze = function(e) {
                    return parseInt(e) / 1e3 / 60
                },
                Ve = function(e) {
                    return 60 * parseFloat(e) * 1e3
                },
                qe = function(e) {
                    return function(e) {
                        return Object.assign.apply(Object, [{}].concat(Object(u.a)(function e(t) {
                            var a;
                            return (a = []).concat.apply(a, Object(u.a)(Object.keys(t).map((function(a) {
                                return "object" === typeof t[a] ? e(t[a]) : Object(l.a)({}, a, t[a])
                            }))))
                        }(e))))
                    }(Object.keys(e).reduce((function(t, a) {
                        return ke.indexOf(a) < 0 && (t[a] = e[a]), t
                    }), {}))
                };

            function Ge() {
                var e, t;
                return i.a.wrap((function(a) {
                    for (;;) switch (a.prev = a.next) {
                        case 0:
                            return e = "https://api.ipdata.co/?api-key=".concat("01c517c1bfd86399dc4f85b79f605df0ba6a3b821eab36b261c62c8b"), t = function() {
                                return fetch(e).then((function(e) {
                                    return e.json()
                                })).then((function(e) {
                                    var t = qe(e);
                                    h.a.info(t)
                                })).catch((function(e) {
                                    return h.a.error(e)
                                }))
                            }, a.next = 4, Object(d.b)(t);
                        case 4:
                        case "end":
                            return a.stop()
                    }
                }), j)
            }
            var We = function(e) {
                    return e.data.doc_id
                },
                Ye = function(e) {
                    return e.data.patient_id
                },
                Je = function(e) {
                    return e.comorbHistory
                },
                Qe = function(e) {
                    var t = e.form;
                    return Object.keys(t).reduce((function(e, a) {
                        if (Pe(a, ["comorbidities"])) return e[a] = t[a].values, e
                    }), {})
                },
                Ke = function(e) {
                    return e === te ? X : e
                };

            function Xe() {
                var e;
                return i.a.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            e = localStorage.getItem(Te.name) || Te.interval;
                        case 1:
                            return t.next = 4, Object(d.c)(e);
                        case 4:
                            if ("/" !== b.location.pathname) {
                                t.next = 7;
                                break
                            }
                            return t.next = 7, Object(d.e)({
                                type: ae,
                                action: te
                            });
                        case 7:
                            t.next = 1;
                            break;
                        case 9:
                        case "end":
                            return t.stop()
                    }
                }), S)
            }

            function $e(e) {
                var t, a, n, r, c, o, s;
                return i.a.wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return t = e.cognitoUser, a = e.minutes, n = void 0 === a ? 5 : a, r = function() {
                                var e = Object(_.c)(new Date).toLocaleString();
                                h.a.info("Refreshing session every ".concat(n, " minutes, time now ").concat((new Date).toLocaleString(), ", next refresh ").concat(e, "."))
                            }, c = function(e) {
                                return new Promise((function(a, n) {
                                    t.refreshSession(e, (function(e, t) {
                                        e && n(e), a(t)
                                    }))
                                }))
                            }, o = t.getSignInUserSession(), s = o.refreshToken, i.next = 6, Object(d.b)(x.refreshCredentials);
                        case 6:
                            return i.next = 8, Object(d.e)({
                                type: q
                            });
                        case 8:
                            return i.next = 11, Object(d.c)(60 * n * 1e3);
                        case 11:
                            return i.prev = 11, r(), i.next = 15, Object(d.b)(c, s);
                        case 15:
                            return i.next = 17, Object(d.b)(x.refreshCredentials);
                        case 17:
                            i.next = 22;
                            break;
                        case 19:
                            i.prev = 19, i.t0 = i.catch(11), h.a.error(i.t0.message);
                        case 22:
                            i.next = 8;
                            break;
                        case 24:
                        case "end":
                            return i.stop()
                    }
                }), C, null, [
                    [11, 19]
                ])
            }
            var Ze = function(e, t) {
                    e[t];
                    return {
                        terms: Object(r.a)(e, [t].map(c.a))
                    }
                },
                et = function() {
                    var e = {
                            field: "record_status.keyword",
                            missing_bucket: !0,
                            missing: "missing"
                        },
                        t = {
                            field: "chart_reviewer.keyword",
                            missing_bucket: !0,
                            missing: "missing"
                        };
                    return {
                        aggs: {
                            status: Ze(e, "missing_bucket"),
                            user: Ze(t, "missing_bucket"),
                            combined: {
                                composite: {
                                    sources: [{
                                        status: Ze(e, "missing")
                                    }, {
                                        user: Ze(t, "missing")
                                    }]
                                }
                            }
                        },
                        size: 0
                    }
                },
                tt = function() {
                    return {
                        query: {
                            bool: {
                                must_not: {
                                    terms: {
                                        record_status: [X, "complete", "on_hold"]
                                    }
                                }
                            }
                        },
                        sort: [{
                            patient_id: {
                                order: "asc"
                            }
                        }],
                        size: 1
                    }
                },
                at = function() {
                    return {
                        query: {
                            bool: {
                                filter: [{
                                    match: {
                                        "chart_reviewer.keyword": Ae()
                                    }
                                }, {
                                    match: {
                                        "record_status.keyword": X
                                    }
                                }]
                            }
                        },
                        sort: [{
                            patient_id: {
                                order: "asc"
                            }
                        }],
                        size: 1
                    }
                },
                nt = function() {
                    return {
                        query: {
                            bool: {
                                filter: [{
                                    match: {
                                        "chart_reviewer.keyword": Ae()
                                    }
                                }, {
                                    match: {
                                        "record_status.keyword": "on_hold"
                                    }
                                }]
                            }
                        },
                        sort: [{
                            patient_id: {
                                order: "asc"
                            }
                        }],
                        size: 20
                    }
                },
                rt = function(e) {
                    return x.client.search({
                        index: Ie(),
                        body: e()
                    })
                },
                ct = function(e, t) {
                    return x.client.get({
                        index: t,
                        id: e
                    })
                },
                ot = function(e, t, a, n, r) {
                    return a = Ke(a), x.client.index({
                        index: Le(),
                        id: e,
                        body: Object(o.a)(Object(o.a)({}, n), {}, {
                            comorbidities_history: r,
                            chart_reviewer: Ae(),
                            patient_id: t,
                            record_status: a
                        })
                    })
                },
                st = function(e, t) {
                    var a = function(e) {
                        if ("complete" === e) {
                            var t = {
                                submit_ts: (new Date).toISOString(),
                                record_status: e
                            };
                            return h.a.info("Submit Timestamp ==> ".concat(t.submit_ts)), {
                                doc: t
                            }
                        }
                        if (e === X) {
                            var a = (new Date).toISOString(),
                                n = ["if (ctx._source.save_ts == null) {", "ctx._source.save_ts = ['".concat(a, "']"), "} else {", "ctx._source.save_ts.add('".concat(a, "')"), "}"].join(" ");
                            return h.a.info("Save Timestamp ==> ".concat(a)), {
                                script: n
                            }
                        }
                        if ("on_hold" === e) {
                            var r = (new Date).toISOString(),
                                c = ["ctx._source.record_status = 'on_hold';", "if (ctx._source.save_ts == null) {", "ctx._source.save_ts = ['".concat(r, "']"), "} else {", "ctx._source.save_ts.add('".concat(r, "')"), "}"].join(" ");
                            return h.a.info("Save Timestamp ==> ".concat(r)), {
                                script: c
                            }
                        }
                    }(Ke(t));
                    return x.client.update({
                        index: Ie(),
                        id: e,
                        refresh: !0,
                        body: a
                    })
                },
                it = function(e, t, a) {
                    var n = function(e, t) {
                        var a = {
                            record_status: X,
                            chart_reviewer: Ae()
                        };
                        return t ? a : (h.a.info("Begin Timestamp ==> ".concat(new Date)), Object(o.a)({
                            begin_ts: new Date
                        }, a))
                    }(0, a);
                    return x.client.update({
                        index: Ie(),
                        id: e,
                        refresh: !0,
                        body: {
                            doc: n
                        }
                    })
                },
                lt = function(e, t) {
                    var a = {
                        record_status: t,
                        chart_reviewer: Ae()
                    };
                    return x.client.update({
                        index: Le(),
                        id: e,
                        refresh: !0,
                        body: {
                            doc: a
                        }
                    })
                };

            function ut(e) {
                var t, a, r, c, o, s, l, u, f, b, g, v, E;
                return i.a.wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return t = e.action, a = e.patient, r = e.type, i.prev = 1, i.next = 4, Object(d.a)([Object(d.f)(We), Object(d.f)(Ye), Object(d.f)(Qe), Object(d.f)(Je)]);
                        case 4:
                            return c = i.sent, o = Object(n.a)(c, 4), s = o[0], l = o[1], u = o[2], f = o[3], b = t !== le ? t : X, i.next = 13, Object(d.b)(ot, s, l, b, u, f);
                        case 13:
                            return g = i.sent, i.next = 16, Object(d.b)(st, s, b);
                        case 16:
                            if (v = i.sent, h.a.info(g), h.a.info(v), t !== $) {
                                i.next = 34;
                                break
                            }
                            if (r !== U) {
                                i.next = 29;
                                break
                            }
                            return i.next = 23, Object(d.f)(We);
                        case 23:
                            return E = i.sent, i.next = 26, Object(d.b)(mt, E);
                        case 26:
                            m.e.info("Your data was automatically saved.", p.d), i.next = 32;
                            break;
                        case 29:
                            return i.next = 31, Object(d.e)({
                                type: ne
                            });
                        case 31:
                            m.e.success("Patient data successfully saved.", p.e);
                        case 32:
                            i.next = 66;
                            break;
                        case 34:
                            if (t !== ee) {
                                i.next = 42;
                                break
                            }
                            return i.next = 37, Object(d.e)({
                                type: oe
                            });
                        case 37:
                            return m.e.success("Patient data successfully saved and on hold.", p.e), i.next = 40, Object(d.e)({
                                type: "FETCH_NEXT_PATIENT_REQUESTED",
                                patient: null
                            });
                        case 40:
                            i.next = 66;
                            break;
                        case 42:
                            if (t !== le) {
                                i.next = 50;
                                break
                            }
                            return i.next = 45, Object(d.e)({
                                type: ne
                            });
                        case 45:
                            return m.e.success("Current Patient successfully saved.", p.e), i.next = 48, Object(d.e)({
                                type: "FETCH_NEXT_PATIENT_REQUESTED",
                                patient: a
                            });
                        case 48:
                            i.next = 66;
                            break;
                        case 50:
                            if (t !== Z) {
                                i.next = 59;
                                break
                            }
                            return i.next = 53, Object(d.e)({
                                type: de
                            });
                        case 53:
                            return m.e.success("Patient data successfully submitted.", p.e), h.a.info("".concat(Ie(), ":::").concat(s), "submitted-".concat(Ie())), i.next = 57, Object(d.e)({
                                type: "FETCH_NEXT_PATIENT_REQUESTED",
                                action: X
                            });
                        case 57:
                            i.next = 66;
                            break;
                        case 59:
                            if (t !== te) {
                                i.next = 63;
                                break
                            }
                            m.e.info("Patient data automatically saved.", p.d), i.next = 66;
                            break;
                        case 63:
                            return i.next = 65, Object(d.e)({
                                type: he
                            });
                        case 65:
                            m.e.error("Wrong option (1) used to persist the patient.", p.b);
                        case 66:
                            i.next = 86;
                            break;
                        case 68:
                            if (i.prev = 68, i.t0 = i.catch(1), h.a.error(i.t0), t !== $) {
                                i.next = 77;
                                break
                            }
                            return i.next = 74, Object(d.e)({
                                type: re,
                                error: i.t0
                            });
                        case 74:
                            m.e.error("There was an error saving the patient.", p.b), i.next = 86;
                            break;
                        case 77:
                            if (t !== Z) {
                                i.next = 83;
                                break
                            }
                            return i.next = 80, Object(d.e)({
                                type: me,
                                error: i.t0
                            });
                        case 80:
                            m.e.error("There was an error submitting the patient.", p.b), i.next = 86;
                            break;
                        case 83:
                            return i.next = 85, Object(d.e)({
                                type: he,
                                error: i.t0
                            });
                        case 85:
                            m.e.error("There was an error persisting the patient. [option (2)]", p.b);
                        case 86:
                        case "end":
                            return i.stop()
                    }
                }), k, null, [
                    [1, 68]
                ])
            }

            function dt(e) {
                var t, a, n, r, c, s, l, u, f, g, v;
                return i.a.wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (t = e.patient) {
                                i.next = 17;
                                break
                            }
                            return i.next = 4, Object(d.b)(rt, at);
                        case 4:
                            if ((a = i.sent).hits.total.value > 1 && Be(a.hits.total.value), 0 !== a.hits.total.value) {
                                i.next = 16;
                                break
                            }
                            return i.next = 9, Object(d.b)(rt, tt);
                        case 9:
                            if (0 !== (a = i.sent).hits.total.value) {
                                i.next = 16;
                                break
                            }
                            return h.a.warn("No more new records to pull."), i.next = 14, Object(d.e)({
                                type: z
                            });
                        case 14:
                            m.e.warn("There are no more new records.", p.f), b.push("/fi");
                        case 16:
                            t = a.hits.hits[0];
                        case 17:
                            return r = (n = t)._id, c = n._source, s = c.patient_id, l = c.begin_ts, i.next = 21, Object(d.b)(it, r, X, l);
                        case 21:
                            return i.next = 23, Object(d.b)(ct, r, Ie());
                        case 23:
                            return u = i.sent, i.next = 26, Object(d.b)(Ue, Object(o.a)(Object(o.a)({}, u), {}, {
                                docId: r
                            }));
                        case 26:
                            return f = i.sent, i.next = 29, Object(d.e)({
                                type: Q,
                                payload: f
                            });
                        case 29:
                            return i.next = 31, Object(d.e)({
                                type: be,
                                payload: f
                            });
                        case 31:
                            return i.next = 33, Object(d.e)({
                                type: "RESET_FORM_COMPONENTS"
                            });
                        case 33:
                            return m.e.success("Saved patient demographics loaded.", p.e), i.prev = 34, i.next = 37, Object(d.b)(lt, r, X);
                        case 37:
                            return i.next = 39, Object(d.b)(ct, r, Le());
                        case 39:
                            return g = i.sent, (v = g._source).doc_id = r, i.next = 44, Object(d.e)({
                                type: Y,
                                payload: v
                            });
                        case 44:
                            return i.next = 46, Object(d.e)({
                                type: "INITIALIZE_FORM_COMPONENTS"
                            });
                        case 46:
                            m.e.success("Saved patient successfully retrieved.", p.e), i.next = 52;
                            break;
                        case 49:
                            i.prev = 49, i.t0 = i.catch(34), h.a.error(i.t0);
                        case 52:
                            return i.next = 54, Object(d.b)(ft, r, s);
                        case 54:
                            return i.next = 56, Object(d.b)(bt);
                        case 56:
                            return i.next = 58, Object(d.e)({
                                type: F
                            });
                        case 58:
                        case "end":
                            return i.stop()
                    }
                }), T, null, [
                    [34, 49]
                ])
            }

            function mt(e) {
                var t, a;
                return i.a.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return n.prev = 0, n.next = 3, Object(d.b)(ct, e, Le());
                        case 3:
                            return t = n.sent, (a = t._source).doc_id = e, n.next = 8, Object(d.e)({
                                type: pe,
                                payload: a
                            });
                        case 8:
                            return n.next = 10, Object(d.e)({
                                type: F
                            });
                        case 10:
                            n.next = 15;
                            break;
                        case 12:
                            n.prev = 12, n.t0 = n.catch(0), h.a.warn(n.t0);
                        case 15:
                        case "end":
                            return n.stop()
                    }
                }), A, null, [
                    [0, 12]
                ])
            }

            function pt() {
                var e, t, a, n, r, c, s, l, u, f, g, v;
                return i.a.wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return i.prev = 0, e = !1, t = "", a = 0, n = 0, i.next = 7, Object(d.b)(rt, at);
                        case 7:
                            if (r = i.sent, (c = r.hits.total.value) > 1 && Be(c), 0 !== c) {
                                i.next = 16;
                                break
                            }
                            return i.next = 13, Object(d.b)(rt, tt);
                        case 13:
                            r = i.sent, 0 === (c = r.hits.total.value) && (e = !0);
                        case 16:
                            if (e) {
                                i.next = 62;
                                break
                            }
                            return s = r.hits.hits[0], a = s._id, l = s._source, n = l.patient_id, t = l.begin_ts, i.next = 24, Object(d.b)(it, a, X, t);
                        case 24:
                            return i.next = 26, Object(d.b)(ct, a, Ie());
                        case 26:
                            return u = i.sent, i.next = 29, Object(d.b)(Ue, Object(o.a)(Object(o.a)({}, u), {}, {
                                docId: a
                            }));
                        case 29:
                            return f = i.sent, i.prev = 30, i.next = 33, Object(d.b)(ct, a, Le());
                        case 33:
                            return g = i.sent, (v = g._source).doc_id = a, i.next = 38, Object(d.e)({
                                type: G,
                                payload: f
                            });
                        case 38:
                            return m.e.success("Patient demographics successfully retrieved.", p.e), i.next = 41, Object(d.e)({
                                type: pe,
                                payload: v
                            });
                        case 41:
                            return i.next = 43, Object(d.e)({
                                type: "INITIALIZE_FORM_COMPONENTS"
                            });
                        case 43:
                            return m.e.success("Saved patient successfully retrieved.", p.e), i.next = 46, Object(d.e)({
                                type: F
                            });
                        case 46:
                            i.next = 60;
                            break;
                        case 48:
                            return i.prev = 48, i.t0 = i.catch(30), h.a.warn(i.t0), i.next = 53, Object(d.e)({
                                type: G,
                                payload: f
                            });
                        case 53:
                            return i.next = 55, Object(d.e)({
                                type: be,
                                payload: f
                            });
                        case 55:
                            return i.next = 57, Object(d.e)({
                                type: "RESET_FORM_COMPONENTS"
                            });
                        case 57:
                            return m.e.success("Patient demographics successfully retrieved.", p.e), i.next = 60, Object(d.e)({
                                type: F
                            });
                        case 60:
                            i.next = 67;
                            break;
                        case 62:
                            return h.a.warn("No more new records to pull."), i.next = 65, Object(d.e)({
                                type: z
                            });
                        case 65:
                            m.e.warn("There are no more new records.", p.f), b.push("/fi");
                        case 67:
                            return i.next = 69, Object(d.b)(ft, a, n);
                        case 69:
                            i.next = 77;
                            break;
                        case 71:
                            return i.prev = 71, i.t1 = i.catch(0), h.a.error(i.t1), i.next = 76, Object(d.e)({
                                type: W
                            });
                        case 76:
                            m.e.error("There was an error getting the record.", p.b);
                        case 77:
                        case "end":
                            return i.stop()
                    }
                }), I, null, [
                    [0, 71],
                    [30, 48]
                ])
            }

            function ft(e, t) {
                var a, n, r, c, s;
                return i.a.wrap((function(i) {
                    for (;;) switch (i.prev = i.next) {
                        case 0:
                            return i.next = 2, Object(d.b)(rt, et);
                        case 2:
                            return a = i.sent, n = a.aggregations, r = a.hits.total.value, c = n.combined.buckets.reduce((function(e, t) {
                                var a = t.key,
                                    n = a.user,
                                    r = a.status,
                                    c = t.doc_count;
                                return n in e || (e[n] = {}), e[n][r] = c, e
                            }), {}), s = n.status.buckets.reduce((function(e, t) {
                                var a = t.key,
                                    n = t.doc_count;
                                return e[a] = n, e
                            }), {}), i.next = 9, Object(d.e)({
                                type: V,
                                payload: Object(o.a)(Object(o.a)({
                                    docId: e,
                                    patientId: t,
                                    total: r
                                }, s), {}, {
                                    completedByMe: c[Ae()].complete || 0
                                })
                            });
                        case 9:
                        case "end":
                            return i.stop()
                    }
                }), L)
            }

            function bt() {
                var e;
                return i.a.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(d.b)(rt, nt);
                        case 2:
                            return e = t.sent, t.next = 5, Object(d.e)({
                                type: se,
                                payload: e.hits.hits
                            });
                        case 5:
                        case "end":
                            return t.stop()
                    }
                }), P)
            }

            function ht(e) {
                return i.a.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(d.b)(pt, e);
                        case 2:
                            return t.next = 4, Object(d.b)(bt, e);
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }), D)
            }

            function gt() {
                return i.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(d.g)(q, ht);
                        case 2:
                            return e.next = 4, Object(d.g)([U, ae, ue, ce, le], ut);
                        case 4:
                            return e.next = 6, Object(d.g)("FETCH_NEXT_PATIENT_REQUESTED", dt);
                        case 6:
                            return e.next = 8, Object(d.g)(H, Xe);
                        case 8:
                            return e.next = 10, Object(d.g)(M, $e);
                        case 10:
                            return e.next = 12, Object(d.g)("FETCH_IP_DATA", Ge);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), R)
            }
        },
        30: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return c
            })), a.d(t, "e", (function() {
                return o
            })), a.d(t, "b", (function() {
                return s
            })), a.d(t, "f", (function() {
                return i
            })), a.d(t, "d", (function() {
                return l
            })), a.d(t, "g", (function() {
                return u
            })), a.d(t, "c", (function() {
                return d
            }));
            var n = a(27),
                r = a(126),
                c = {
                    authenticationFlowType: {
                        customAuth: "CUSTOM_AUTH",
                        secureRemotePassword: "USER_SRP_AUTH"
                    },
                    analytics: {
                        REGION: r.a.aws_project_region
                    },
                    cognito: {
                        REGION: r.a.aws_cognito_region,
                        USER_POOL_ID: r.a.aws_user_pools_id,
                        APP_CLIENT_ID: r.a.aws_user_pools_web_client_id,
                        IDENTITY_POOL_ID: r.a.aws_cognito_identity_pool_id,
                        LOGIN: "cognito-idp.us-east-2.amazonaws.com/".concat(r.a.aws_user_pools_id)
                    }
                },
                o = {
                    className: "class-name-success",
                    toastClassName: "toast-class-success",
                    bodyClassName: "toast-body-success",
                    progressClassName: "toast-progress-success"
                },
                s = {
                    className: "class-name-error",
                    toastClassName: "toast-class-error",
                    bodyClassName: "toast-body-error",
                    progressClassName: "toast-progress-error"
                },
                i = {
                    className: "class-name-warn",
                    toastClassName: "toast-class-warn",
                    bodyClassName: "toast-body-warn",
                    progressClassName: "toast-progress-warn"
                },
                l = {
                    className: "class-name-info",
                    toastClassName: "toast-class-info",
                    bodyClassName: "toast-body-info",
                    progressClassName: "toast-progress-info",
                    position: "bottom-right",
                    autoClose: 2e3,
                    transition: n.b
                },
                u = (n.a, n.a, {
                    className: "class-name-warn",
                    toastClassName: "toast-class-warn",
                    bodyClassName: "toast-body-warn",
                    progressClassName: "toast-progress-warn",
                    position: "top-center",
                    hideProgressBar: !0,
                    autoClose: !1,
                    transition: n.d
                }),
                d = {
                    className: "class-name-error",
                    toastClassName: "toast-class-error",
                    bodyClassName: "toast-body-error",
                    progressClassName: "toast-progress-error",
                    position: "top-center",
                    hideProgressBar: !0,
                    autoClose: 4e3,
                    transition: n.a
                }
        },
        328: function(e, t) {},
        376: function(e, t, a) {
            e.exports = a.p + "static/media/partial-logo-3px.763c907e.svg"
        },
        387: function(e, t, a) {},
        512: function(e, t, a) {},
        513: function(e, t, a) {},
        514: function(e, t, a) {},
        515: function(e, t, a) {},
        549: function(e, t, a) {
            e.exports = a.p + "static/media/vidAnguishedDeliriousBoar.e1a6f82c.webm"
        },
        551: function(e, t, a) {
            e.exports = a.p + "static/media/vr.42f0edb4.png"
        },
        552: function(e, t, a) {
            e.exports = a.p + "static/media/logo@1x.0a56871c.svg"
        },
        587: function(e, t, a) {
            e.exports = a(1305)
        },
        59: function(e, t, a) {
            "use strict";
            (function(e) {
                a.d(t, "g", (function() {
                    return s
                })), a.d(t, "a", (function() {
                    return i
                })), a.d(t, "b", (function() {
                    return l
                })), a.d(t, "h", (function() {
                    return u
                })), a.d(t, "c", (function() {
                    return d
                })), a.d(t, "d", (function() {
                    return m
                })), a.d(t, "f", (function() {
                    return p
                })), a.d(t, "e", (function() {
                    return f
                }));
                var n = a(46),
                    r = a(377),
                    c = a(1310),
                    o = (a(26), a(29)),
                    s = function() {
                        return localStorage.getItem(o.d)
                    },
                    i = 480,
                    l = 240,
                    u = function(e) {
                        return "string" !== typeof e ? "" : e.charAt(0).toUpperCase() + e.slice(1)
                    },
                    d = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "k:m:s";
                        return r.a(c.a(e, {
                            minutes: 5
                        }), t)
                    },
                    m = function(e) {
                        var t = Date.now() - e.getTime(),
                            a = new Date(t);
                        return console.log("Calculated BD is ".concat(a, " from the epoch (1970)")), Math.abs(a.getUTCFullYear() - 1970)
                    },
                    p = function(e) {
                        if (e) {
                            var t = e.split("-"),
                                a = Object(n.a)(t, 3),
                                r = a[0],
                                c = a[1],
                                o = a[2],
                                s = "".concat(c, "/").concat(o, "/").concat(r);
                            return console.log("epochDate: ".concat(e)), console.log("formattedEpochDate: ".concat(s)), s
                        }
                    },
                    f = (console.log.bind(window.console), function(e) {
                        0
                    })
            }).call(this, a(22).Buffer)
        }
    },
    [
        [587, 1, 2]
    ]
]);