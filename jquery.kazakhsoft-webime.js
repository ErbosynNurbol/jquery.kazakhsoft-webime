// This jQuery Plugin will help you to input Kazakh in web.
/*
* Author: Nurbol
* E-mail: mauleta@outlook.com 
* http://www.kazakhsoft.com
* Date:2017-01-27,BeiJing.
* Support input in  all kind of web browser:IE, Firefox, Safari, Opera, Chrome,Edge etc.
*/

(function ($) {
    "use strict";
    var lang = {
        cyrl: 'kk',
        kazak: 'kz',
        uyghur: 'ug',
        kyrgyz: 'kg'
    };
    var settings = {
        inputlanguage: lang.kyrgyz,
        inputdirection: 'auto',//'auto','rtl','ltr'
        fontfamily: ''//'KazNet'
    };
    var KzSoftWebIMe = function(enabled) {
        this.imeEnabled = enabled;
    }
    KzSoftWebIMe.prototype = {
        constructor: KzSoftWebIMe,
        version:'V1.2',
        kzMap: {
            "A": "0x2014", "a": "0x06BE", "B": "0x0628", "b": "0x0628", "C": "0x0639", "c": "0x0639", "D": "0x062F",
            "d": "0x062F", "E": "0x06D5", "e": "0x0621", "F": "0x0641", "f": "0x0627", "G": "0x06AF", "g": "0x06D5",
            "H": "0x062D", "h": "0x0649", "I": "0x06AD", "i": "0x06AD", "J": "0x062C", "j": "0x0642", "K": "0x06C6",
            "k": "0x0643", "L": "0x0644", "l": "0x0644", "M": "0x0645", "m": "0x0645", "N": "0x0646", "n": "0x0646",
            "O": "0x0648", "o": "0x0648", "P": "0x067E", "p": "0x067E", "Q": "0x0686", "q": "0x0686", "R": "0x0631",
            "r": "0x0631", "S": "0x0633", "s": "0x0633", "T": "0x062A", "t": "0x062A", "U": "0x06C7", "u": "0x06C7",
            "V": "0x06C6", "v": "0x06C6", "W": "0x06CB", "w": "0x06CB", "X": "0x0634", "x": "0x0634", "Y": "0x064A",
            "y": "0x064A", "Z": "0x0632", "z": "0x0632", ";": "0x061B", "?": "0x061F", ",": "0x060C", "<": "0x00BB",
            ">": "0x00AB", "{": "0x007D", "}": "0x007B", "[": "0x005D", "]": "0x005B", "(": "0x0029", ")": "0x0028"
        },
        kkMap: {
            "A": "0x0424", "a": "0x0444", "B": "0x0418", "b": "0x0438", "C": "0x0421", "c": "0x0441", "D": "0x0412",
            "d": "0x0432", "E": "0x0423", "e": "0x0443", "F": "0x0410", "f": "0x0430", "G": "0x041F", "g": "0x043F",
            "H": "0x0420", "h": "0x0440", "I": "0x0428", "i": "0x0448", "J": "0x041E", "j": "0x043E", "K": "0x041B",
            "k": "0x043B", "L": "0x0414", "l": "0x0434", "M": "0x042C", "m": "0x044C", "N": "0x0422", "n": "0x0442",
            "O": "0x0429", "o": "0x0449", "P": "0x0417", "p": "0x0437", "Q": "0x0419", "q": "0x0439", "R": "0x041A",
            "r": "0x043A", "S": "0x042B", "s": "0x044B", "T": "0x0415", "t": "0x0435", "U": "0x0413", "u": "0x0433",
            "V": "0x041C", "v": "0x043C", "W": "0x0426", "w": "0x0446", "X": "0x0427", "x": "0x0447", "Y": "0x041D",
            "y": "0x043D", "Z": "0x042F", "z": "0x044F", ",": "0x0431", "<": "0x0411", ".": "0x044E", ">": "0x042E",
            "/": "0x0451", ";": "0x0436", ":": "0x0416", "\"": "0x042D", "[": "0x0445", "{": "0x0425", "]": "0x044A",
            "}": "0x042A", "`": "0x0028", "~": "0x0029", "1": "0x0022", "!": "0x0021", "2": "0x04D9", "@": "0x04D8",
            "3": "0x0456", "#": "0x0406", "4": "0x04A3", "$": "0x04A2", "5": "0x0493", "%": "0x0492", "6": "0x002C",
            "^": "0x003A", "7": "0x002E", "&": "0x003B", "8": "0x04AF", "*": "0x04AE", "9": "0x04B1", "(": "0x04B0",
            "0": "0x049B", ")": "0x049A", "-": "0x04E9", "_": "0x04E8", "=": "0x04BB", "+": "0x04BA"
        },
        ugMap: {
            "A": "0x06be", "a": "0x06be", "B": "0x0628", "b": "0x0628", "C": "0x063a", "c": "0x063a", "D": "0x0698",
            "d": "0x062f", "E": "0x06d0", "e": "0x06d0", "F": "0x0641", "f": "0x0627", "G": "0x06af", "g": "0x06d5",
            "H": "0x062e", "h": "0x0649", "I": "0x06ad", "i": "0x06ad", "J": "0x062c", "j": "0x0642", "K": "0x06c6",
            "k": "0x0643", "L": "0x0644", "l": "0x0644", "M": "0x0645", "m": "0x0645", "N": "0x0646", "n": "0x0646",
            "O": "0x0648", "o": "0x0648", "P": "0x067E", "p": "0x067E", "Q": "0x0686", "q": "0x0686", "R": "0x0631",
            "r": "0x0631", "S": "0x0633", "s": "0x0633", "T": "0x0640", "t": "0x062A", "U": "0x06C7", "u": "0x06C7",
            "V": "0x06c8", "v": "0x06c8", "W": "0x06CB", "w": "0x06CB", "X": "0x0634", "x": "0x0634", "Y": "0x064A",
            "y": "0x064A", "Z": "0x0632", "z": "0x0632", ";": "0x061B", "?": "0x061F", ",": "0x060C", "<": "0x00BB",
            ">": "0x00AB", "{": "0x007D", "}": "0x007B", "[": "0x005D", "]": "0x005B", "(": "0x0029", ")": "0x0028"
         },
        kgMap: {
             "A": "0x2014", "a": "0x06BE", "B": "0x0628", "b": "0x0628", "C": "0x0639", "c": "0x0639", "D": "0x062F",
             "d": "0x062F", "E": "0x06D5", "e": "0x0621", "F": "0x0641", "f": "0x0627", "G": "0x06AF", "g": "0x06D5",
             "H": "0x062D", "h": "0x0649", "I": "0x06AD", "i": "0x06AD", "J": "0x062C", "j": "0x0642", "K": "0x06C6",
             "k": "0x0643", "L": "0x0644", "l": "0x0644", "M": "0x0645", "m": "0x0645", "N": "0x0646", "n": "0x0646",
             "O": "0x0648", "o": "0x0648", "P": "0x067E", "p": "0x067E", "Q": "0x0686", "q": "0x0686", "R": "0x0631",
             "r": "0x0631", "S": "0x0633", "s": "0x0633", "T": "0x062A", "t": "0x062A", "U": "0x06C7", "u": "0x06C7",
             "V": "0x06C6", "v": "0x06C6", "W": "0x06CB", "w": "0x06CB", "X": "0x0634", "x": "0x0634", "Y": "0x064A",
             "y": "0x064A", "Z": "0x0632", "z": "0x0632", ";": "0x061B", "?": "0x061F", ",": "0x060C", "<": "0x00BB",
             ">": "0x00AB", "{": "0x007D", "}": "0x007B", "[": "0x005D", "]": "0x005B", "(": "0x0029", ")": "0x0028"
         },
        Insert: function (obj, str) {
            if (document.selection) {
                var oSel = document.selection.createRange();
                oSel.text = str;
                oSel.collapse(false);
                oSel.select();
            } else {
                var currPos = obj.selectionStart;
                var endPos = obj.selectionEnd;
                var objValue = obj.value;
                obj.value = objValue.substring(0, currPos) + str + objValue.substring(endPos);
                obj.selectionStart = obj.selectionEnd = currPos + 1;
            }
        },
        containsValue: function (inputlanguage) {
            for (var l in lang) {
                if (lang[l] == inputlanguage) return true;
            }
            return false;
        },
        en2Kz: function (inputlanguage, enChar) {
            if (this.containsValue(inputlanguage)) {
                return eval("this."+inputlanguage+"Map['"+enChar+"']")? String.fromCharCode(eval("this."+inputlanguage+"Map['"+enChar+"']")) : enChar;
            }
            return enChar; 
        },
        hasKey: function (inputlanguage, enChar) {
            if (this.containsValue(inputlanguage)) {
                return !!eval("this." + inputlanguage + "Map['" + enChar + "']");
            }
            return false;
        },
        inputKzChar: function (e) {
             var ev = e ? e : window.event,
                keyCode = ev.keyCode ? ev.keyCode : ev.which,
                srcElement = ev.srcElement ? ev.srcElement : ev.target,
                keyValue = String.fromCharCode(keyCode);
                if (this.imeEnabled && this.hasKey($(srcElement).attr("data-inputlanguage"), keyValue))
            {
                if (window.event) window.event.returnValue = false;
                if (window.event) window.event.cancelBubble = true;
                if (ev.preventDefault) ev.preventDefault();
                if (ev.stopPropagation) ev.stopPropagation();
                this.Insert(srcElement, this.en2Kz($(srcElement).attr("data-inputlanguage"), keyValue));
            }
        },
        hotKey : function(e){
            var ev = e ? e : window.event,
             src = ev.srcElement ? ev.srcElement : ev.target,
             keyCode = ev.keyCode ? ev.keyCode : ev.which;
            if (keyCode == 75 && ev.ctrlKey && ev.altKey) {
                this.imeEnabled = !this.imeEnabled;
                $(src).trigger("imeEnabled");
            }
        }
    };

    var webImeInstance;
    function createWebImeInstance() {
        var webime = new KzSoftWebIMe(true);
        return webime;
    }
    $.imeEnabled = function (enabled) {
        if (!webImeInstance) {
            webImeInstance = createWebImeInstance();
        }
        if (enabled != undefined)
        {
            webImeInstance.imeEnabled = enabled;
        }
        return webImeInstance.imeEnabled;
    };

    $.inputKzChar = function (e, options) {
        var ev= e ? e : window.event,
         src = ev.srcElement ? ev.srcElement : ev.target;
        $(src).inputKzChar(options);
        $(src).removeAttr("onkeypress");
        $(src).trigger("keypress");
    };
    $.fn.inputKzChar = function (options) {
        if (!webImeInstance) {
            webImeInstance = createWebImeInstance();
        }
        if (options) {
            $.extend(settings, options);
        } else {
            options = {};
        }
        this.each(function () {
            var elem = $(this);
            if (!elem.is('[readonly]') && ((elem.is("input") && elem.attr("type") == "text") || elem.is("textarea"))) {
                var inputlanguage = (options.hasOwnProperty('inputlanguage') || typeof (elem.attr("data-inputlanguage")) == "undefined") ? settings["inputlanguage"] : elem.attr("data-inputlanguage"),
                    inputdirection = (options.hasOwnProperty('inputdirection') || typeof (elem.attr("data-inputdirection")) == "undefined") ? settings["inputdirection"] : elem.attr("data-inputdirection"),
                    fontfamily = (options.hasOwnProperty('fontfamily') || typeof (elem.attr("data-fontfamily")) == "undefined") ? settings["fontfamily"] : elem.attr("data-fontfamily");
                elem.attr("data-inputlanguage", inputlanguage);
                console.log(inputlanguage);
                if (inputdirection == 'auto') {
                    elem.css("direction", inputlanguage != lang.cyrl ? 'rtl' : 'ltr');
                } else if (inputdirection == 'rtl' || inputdirection == 'ltr') {
                    elem.css("direction", inputdirection);
                }
                if (fontfamily) elem.css("font-family", fontfamily);
                elem.off("keydown.kazakhsoft");
                elem.on("keydown.kazakhsoft", $.proxy(webImeInstance.hotKey, webImeInstance));
                elem.off("keypress.kazakhsoft");
                elem.on("keypress.kazakhsoft",$.proxy(webImeInstance.inputKzChar,webImeInstance));
            }
        });
       return this;
    };
    $(function () {
        $('input[type="text"][data-webime="kazakhsoft"],textarea[data-webime="kazakhsoft"]').inputKzChar();
    })
})(jQuery);
