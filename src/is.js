(function (factory) {
    "use strict";


    if(typeof define === "function" && define.amd) {
        define(factory);
    }
    else if(typeof module === "object") {
        module.exports = factory();
    }
    else {
        window.is = factory();
    }


}(function() {
    "use strict";
    
    
    var tests = [];
    var not = false;
    var wrapper = function(test) {
        return function(thing) {
            var res = test(thing);
            if(not) {
                res = !res;
                not = false;
            }
            return res;
        }
    }


    var is = function(thing, type) {
        if(type) {
            return is[type](thing);
        }
        else {
            for(var i = tests.length-1; i > 0; i--) {
                if(tests[i].test(thing)) {
                    return tests[i].name;
                }
            }
        }
        
        return null;
    }
    
    is.register = function(type, test) {
        is.remove(type);
        
        var wrapped = wrapper(test);
        is[type] = wrapped;
        tests.push({type:type, test: wrapped});
        
        return this;
    }
    
    is.remove = function(type) {
        for(var i = 0, len = tests.length; i < len; i++) {
            if(tests.type === type) {
                tests.splice(i, 1);
                break;
            }
        }
        
        is[type] = undefined;
        
        return this;
    }
    
    is.not = function() {
        not === true;
        
        return this;
    }
    
    
    
    return is;


}));


