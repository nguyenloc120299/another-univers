webpackJsonp([3], {
    494: function(a, n, r) {
        r(48),
        a.exports = r(495)
    },
    495: function(a, n, r) {
        "use strict";
        function i(a, n) {
            var r = !0;
            Object.keys(n).forEach(function(a) {
                !0 === n[a] && (r = !1)
            })
            r && a && a.classList.add("summary-small")
        }
        function t(a, n) {
            if (a) {
                var r = [];
                for (var i in n)
                    n.hasOwnProperty(i) && !0 === n[i] && r.push(i);
                r.length > 0 && (a.classList.add("active"),
                1 === r.length && a.classList.add(r[0]))
            }
        }
        function e(a, n) {
            var r = {
                all: window.i18n.for_training,
                samara: window.i18n.in_samara,
                saratov: window.i18n.in_saratov,
                tolyatti: window.i18n.in_tolyatti,
                kazan: window.i18n.in_kazan,
                petersburg: window.i18n.in_petersburg,
                online: window.i18n.in_online
            };
            if (a) {
                var i = [];
                for (var t in n)
                    n.hasOwnProperty(t) && !0 === n[t] && i.push(t);
                if (i.length > 0) {
                    a.classList.add("active");
                    var e = r.all;
                    1 === i.length && (e = r[i[0]]),
                    a.querySelector("mark").innerHTML = e
                }
            }
        }
        var o = {
            web: {
                online: !1,
                samara: !1,
                saratov: !1
            },
            mobile: {
                samara: !1,
                saratov: !1
            },
            business: {
                online: !1,
                samara: !1,
                saratov: !1
            },
            qa: {
                saratov: !1,
                kazan: !1,
                petersburg: !1
            },
            net: {
                samara: !1,
                saratov: !1
            }
        };
        !function(a) {
            for (var n in a)
                if (a.hasOwnProperty(n)) {
                    var r = a[n]
                      , o = document.querySelector(".container-" + n + " .recruiting-ad-desktop")
                      , s = document.querySelector("a[href='#" + n + "'] .recruiting-ad-mobile")
                      , c = document.querySelector("#" + n + " .recruiting-ad-popup")
                      , u = document.querySelector("#" + n + " .summary");
                    t(o, r),
                    t(s, r),
                    e(c, r),
                    i(u, r)
                }
        }(o)
    }
}, [494]);

