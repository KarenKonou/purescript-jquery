/* global exports */
"use strict";

export function ready(func) {
    return function() {
        jQuery(document).ready(func);
    };
}

export function select(selector) {
    return function() {
        return jQuery(selector);
    };
}

export function find(selector) {
    return function(ob) {
        return function() {
            return ob.find(selector);
        };
    };
}

export function parent(ob) {
    return function() {
        return ob.parent();
    };
}

export function closest(selector) {
    return function(ob) {
        return function() {
            return ob.closest(selector);
        };
    };
}

export function create(html) {
    return function() {
        return jQuery(html);
    };
}

export function setAttr(attr) {
    return function(val) {
        return function(ob) {
            return function() {
                ob.attr(attr, val);
            };
        };
    };
}

export function getAttrImpl(attr) {
    return function(ob) {
        return function() {
            return ob.attr(attr);
        };
    };
}

export function attr(attrs) {
    return function(ob) {
        return function() {
            ob.attr(attrs);
        };
    };
}

export function css(props) {
    return function(ob) {
        return function() {
            ob.css(props);
        };
    };
}

export function hasClass(cls) {
    return function(ob) {
        return function() {
            return ob.hasClass(cls);
        };
    };
}

export function toggleClass(cls) {
    return function(ob) {
        return function() {
            ob.toggleClass(cls);
        };
    };
}

export function setClass(cls) {
    return function(flag) {
        return function(ob) {
            return function() {
                ob.toggleClass(cls, flag);
            };
        };
    };
}

export function setProp(p) {
    return function(val) {
        return function(ob) {
            return function() {
                ob.prop(p, val);
            };
        };
    };
}

export function getProp(p) {
    return function(ob) {
        return function() {
            return ob.prop(p);
        };
    };
}

export function append(ob1) {
    return function(ob) {
        return function() {
            ob.append(ob1);
        };
    };
}

export function unsafeAppendHtml(s) {
    return function(ob) {
        return function() {
            ob.append(s);
        };
    };
}

export function appendText(s) {
    return function(ob) {
        return function() {
            ob.append(document.createTextNode(s));
        };
    };
}

export function body() {
    return jQuery(document.body);
}

export function remove(ob) {
    return function() {
        ob.remove();
    };
}

export function clear(ob) {
    return function() {
        ob.empty();
    };
}

export function before(ob) {
    return function(ob1) {
        return function() {
            ob1.before(ob);
        };
    };
}

export function getText(ob) {
    return function() {
        return ob.text();
    };
}

export function setText(text) {
    return function(ob) {
        return function() {
            ob.text(text);
        };
    };
}

export function getHtml(ob) {
    return function() {
        return ob.html();
    };
}

export function setHtml(html) {
    return function(ob) {
        return function() {
            ob.html(html);
        };
    };
}

export function getValue(ob) {
    return function() {
        return ob.val();
    };
}

export function setValue(val) {
    return function(ob) {
        return function() {
            ob.val(val);
        };
    };
}

export function toggle(ob) {
    return function() {
        ob.toggle();
    };
}

export function setVisible(flag) {
    return function(ob) {
        return function() {
            ob.toggle(flag);
        };
    };
}

export function toArray(ob) {
    return function() {
        var els = ob.toArray();
        var copy = [];
        for (var i = 0; i < els.length; i++) {
            copy.push(jQuery(els[i]));
        }
        return copy;
    };
}

export function on(evt) {
    return function(act) {
        return function(ob) {
            return function() {
                ob.on(evt, function(e) {
                    act(e)(jQuery(this))();
                });
            };
        };
    };
}

export function delegate(evt) {
    return function(sel) {
        return function(act) {
            return function(ob) {
                return function() {
                    ob.on(evt, sel, function(e) {
                        act(e)(jQuery(this))();
                    });
                };
            };
        };
    };
}

export function off(evt) {
    return function(ob) {
        return function() {
            return ob.off(evt);
        };
    };
}

export function deafen(ob) {
    return function() {
        return ob.off();
    };
}

export function preventDefault(e) {
    return function() {
        e.preventDefault();
    };
}

export function stopPropagation(e) {
    return function() {
        e.stopPropagation();
    };
}

export function stopImmediatePropagation(e) {
    return function() {
        e.stopImmediatePropagation();
    };
}

export function getTarget(e) {
    return function() {
        return jQuery(e.target);
    };
}

export function getCurrentTarget(e) {
    return function() {
        return jQuery(e.currentTarget);
    };
}

export function getPageX(e) {
    return function() {
        return e.pageX;
    };
}

export function getPageY(e) {
    return function() {
        return e.pageY;
    };
}

export function getWhich(e) {
    return function() {
        return e.which;
    };
}

export function getMetaKey(e) {
    return function() {
        return e.metaKey;
    };
}

export function clone(ob) {
    return function() {
        return ob.clone();
    };
}

export function cloneWithDataAndEvents(ob) {
    return function() {
        return ob.clone(true);
    };
}
