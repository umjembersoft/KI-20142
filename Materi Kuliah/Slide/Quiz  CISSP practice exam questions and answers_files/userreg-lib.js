
/*
 * Dependency-free Javascript library used for both full and
 * inline registration use cases.  Do not add any external or
 * third party script dependencies to this file.
 */

function isNewUser () {

  var crs = getCookieValue("crs");
  return (crs == "");
}

function isTechtargetUser () {

  var crs = getCookieValue("crs");
  return (crs != "");
}

function isUidLoggedIn () {

  var uuid = getCookieValue("uidLoggedIn");
  return (uuid != "");
}

function loadCookies (clientCallback) {
    var tc = "TTGTCHECKDONE";
    
    if(!getCookieValue(tc)) {
                
        if (isNewUser()) {
        
            logMessage("Unrecognized user; checking master domain for cookies");
            var src = ["http://users.techtarget.com/registration/json/common/GetCookiesWithCallback.page?callback=loadCookiesCallback"];
            var root = document.getElementsByTagName("head")[0];
            var callback = function() {};
            loadJs(root, src, clientCallback);

            createCookieDT(tc, "y", 5, "m", getTopLevelDomain());

        } else {

            deleteCookie(tc);
            
            logMessage("Recognized user; no need for master domain cookie check");
            clientCallback();
        
        }
        
    } else {
        logMessage("loadCookies called within the last 5 minutes. Do not call again.");
        clientCallback();
        
    }
}

var cookieNames = new Array();
cookieNames["tt_ut"] = true;
cookieNames["crs"] = true;

function loadCookiesCallback (cookies) {

  var length = cookies.results.length;

  logMessage(length + " cookies returned in callback");

  for (var x = 0; x < length; x++) {

    if (cookies.results[x].name in cookieNames) {

      createCookieDT (cookies.results[x].name, cookies.results[x].value, 5, "y", getTopLevelDomain());

    } else {

      logMessage("Cookie " + cookies.results[x].name + " not a userreg cookie; skipping");
    }
  }
}

function isCrossDomain() {

    var topLevel = getTopLevelDomain();
    var authDomain = "techtarget.com";
    
    return (topLevel != authDomain)

}

// {"crs":"@@crs_value","tt_ut":"tt_ut_value"}
function setOrRedirectCookies (cookies) {

    if(isCrossDomain()) {
        setLoginCookies(cookies, getTopLevelDomain())
        // TODO:  redirect to set on topLevel
        logMessage("Cross domain cookie setting not implemented");
    } else {
        setLoginCookies(cookies,".techtarget.com");
    }    
  
}

function setLoginCookies(cookies, domain) {

    if (domain && domain.substr(0,1) != ".") { domain = "."+domain; }
    for (var key in cookies) {
        createCookieDT(key, cookies[key], 5, "y", domain);
    }

}

function getPromoCode () {

  var promo = getQueryStrings()["Offer"];
  if (! promo) {
    promo = getCookieValue("Offer");
  }
  return promo;
}

function getQueryStrings () { 

  var assoc  = {};
  var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
  var queryString = location.search.substring(1); 
  var keyValues = queryString.split('&'); 

  for (var i in keyValues) { 
    var key = keyValues[i].split('=');
    if (key.length > 1) {
      assoc[decode(key[0])] = decode(key[1]);
    }
  } 
  return assoc; 
} 

function createCookie (name, value, days) {
    createCookieDT(name, value, days, "d", getTopLevelDomain());
    // .replace(/(dev\.eng|eng|qa)\./i,"")
}

function createCookieD (name, value, days, domain) {
    createCookieDT(name, value, days, "d", domain);
}

function createCookieDT (name, value, expLength, expType, domain) {
    var date = new Date();

    switch(expType) {
    case "y": // ~365 days / year
        expType = "years";
        date.setTime(date.getTime()+(expLength*365*24*60*60*1000)); 
        break;
    case "mo": // ~30 days / month
        expType = "months"; 
        date.setTime(date.getTime()+(expLength*30*24*60*60*1000)); 
        break;        
    case "d":
        expType = "days";
        date.setTime(date.getTime()+(expLength*24*60*60*1000)); 
        break;
    case "h":
        expType = "hours";
        date.setTime(date.getTime()+(expLength*60*60*1000));
        break;
    case "m":
        expType = "minutes";
        date.setTime(date.getTime()+(expLength*60*1000));
        break;
    case "s":
        expType = "seconds";
        date.setTime(date.getTime()+(expLength*1000));
        break;
    case "ms":
        expType = "milliseconds";
        date.setTime(date.getTime()+(expLength));
    }
    
    logMessage("Creating cookie " + name + " for " + expLength + " " + expType + " on domain " + domain + " with value: " + value);

    var expires = "";
    if (expLength) {
        expires = "; expires="+date.toGMTString();
    }
    document.cookie = name+"="+value+expires+"; path=/; domain="+domain;
}

function deleteCookie(name) {
    if(getCookieValue(name)) {
        createCookie(name, "", -1);
    }
}

function getTopLevelDomain () {

  var hostname = window.location.hostname;
  var regexp = /(?:(?:dev\.eng|eng|qa)\.)?[^\.]+(?:\.|\.co\.|\.com\.)[^\.]+$/;

  return regexp.exec(hostname);
}

function onScriptLoadCallback (script, callback) {

    var script_loaded = false;
    script.onreadystatechange = script.onload = function () {
        if((script.readyState && script.readyState != 'loaded' && script.readyState != 'complete' ) || script_loaded) return;
        script_loaded = true;
        callback();
    }
    
}

function loadJs (root, srcArray, callback) {

  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = srcArray.pop();
  if (srcArray.length > 0) {
    onScriptLoadCallback(script, function() { loadJs(root, srcArray, callback); });
  } else {
    onScriptLoadCallback(script, callback);
  }
  logMessage("Loading script " + script.src);
  root.appendChild(script);
}

function loadCss (root, href, callback) {

  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", href);
  onScriptLoadCallback(link, callback);
  root.appendChild(link);
}

function getCookieValue (name) {

  var cookie = document.cookie;
  var pos = cookie.indexOf(name + "=");
  if (pos != -1) {
    var start = pos + name.length + 1;
    var end = cookie.indexOf(";", start);
    if (end == -1) {
      end = cookie.length;
    }
    var value = cookie.substring(start, end);
    return value;
  } else {
    return "";
  }
}

function stringify (obj) {

  var objectType = typeof (obj);  

  if (objectType != "object" || obj === null) {  

    if (t == "string") {
      obj = '"'+obj+'"';
    }

    return String(obj);  

  } else {  

    var n, v, json = [], arr = (obj && obj.constructor == Array);  

    for (n in obj) {  

      v = obj[n]; t = typeof(v);  

      if (t == "string") {

        v = '"'+v+'"';

      } else if (t == "object" && v !== null) {

        v = JSON.stringify(v);
      }

      json.push((arr ? "" : '"' + n + '":') + String(v));  
    }
  }

  return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");  
}

function inlineCallback (id, content) {

  var js = "";
  var html = "";
  var root = document.getElementById(id);
  var size = content.length;

  for (var x = 0; x < size; x++) {
    var row = content[x];
    logMessage(row);
    if (row.contentType == "BLOCK") {
      if (row.CONTENT != undefined) {
        html += generateBlock(row);
      }
      if (row.SCRIPT != undefined) {
        js += generateJavascript(row);
      }
    } else if (row.contentType == "QUESTION") {
      html += generateQuestion(row, id);
    } else {
      logMessage("TODO:  implement process for " + row.contentType);
    }
  }

  root.innerHTML = html;

  eval(js);

  var params = getPageParams(id);
  for (var key in params) {
    var element = document.getElementById(id+"_"+key);
    if (element != undefined && element != null) {
      element.value = params[key];
    }
  }
}

function generateJavascript (row) {

  var result = "";
  if (row.SCRIPT != undefined) {
    result = row.SCRIPT;
  }
  return result;
}

function generateBlock (row) {

  var result = "";
  if (row.CONTENT != undefined) {
    result = row.CONTENT;
  }
  return result;
}

function generateQuestion (row, id) {

  var inputId = id + "_" + row.id;
    
  if (row.type == "hidden") {

    var result = "<input type=\"hidden\" name=\"" + row.code + "\" id=\"" + inputId + "\" ";

    if (row.value != undefined) {
      result += "value=\"" + row.value + "\"";
    }

    result += "/>";

    return result

  } else if (row.type == "text") {

    var result = "";
    if (row.BEFORE_HTML != undefined) {
      result += row.BEFORE_HTML;
    }

    /*
    result += "<li ";
    if (row.LIST_CLASS != undefined) {
      result += "class=\"" + row.LIST_CLASS + "\"";
    }
    result += ">";
    */

    if (row.DISPLAY_VALUE != undefined && row.DISPLAY_VALUE != "") {
      result += "<label for=\"" + inputId + "\">" + row.DISPLAY_VALUE + "&nbsp;</label>";
    }

    if (row.DESCRIPTION != undefined && row.DESCRIPTION != "") {
      result += "<small>" + row.DESCRIPTION + "</small>";
    }

    result += "<input type=\"text\" maxlength=\"" + row.MAX_LENGTH + "\" size=\"25\" ";
    if (row.value != undefined) {
      result += "value=\"" + row.value + "\" ";
    }
    if (row.STYLES != undefined) {
      result += row.STYLES + " ";
    }
    if (row.EVENTS != undefined) {
      result += row.EVENTS + " ";
    }
    result += "id=\"" + inputId + "\" ";
    result += "name=\"" + row.code + "\"/>";

    if (row.AFTER_HTML != undefined) {
      result += row.AFTER_HTML;
    }
    return result;

  } else if (row.type == "submit") {

    var result = "<input type=\"submit\" value=\"" + row.DISPLAY_VALUE + "\" ";
    if (row.STYLES != undefined) {
      result += row.STYLES + " ";
    }
    if (row.EVENTS != undefined) {
      result += row.EVENTS;
    }
    result += "/>";
    return result;
  } else if (row.type == "consent"){
	  var result = row.DISPLAY_VALUE;
	  result += "<input type=\"hidden\" name=\"" + row.code + "\" value=\"" + row.answers[0].value + "\" id=\"" + row.id +"\"/>";
	  return result;
		  
  } else if (row.type == "select") {

    /*
    var result = "<li ";
    if (row.LIST_CLASS != undefined) {
      result += "class=\"" + row.LIST_CLASS + "\"";
    }
    result += ">";
    */

    if (row.DISPLAY_VALUE != undefined && row.DISPLAY_VALUE != "") {
      result += "<label for=\"" + row.code + "\">" + row.DISPLAY_VALUE + "&nbsp;</label>";
    }

    if (row.DESCRIPTION != undefined && row.DESCRIPTION != "") {
      result += "<small>" + row.DESCRIPTION + "</small>";
    }
    result += "<select ";
    result += "id=\"" + inputId + "\" ";
    result += "name=\"" + row.code + "\" ";

    if (row.STYLES != undefined) {
      result += row.STYLES + " ";
    }
    if (row.EVENTS != undefined) {
      result += row.EVENTS + " ";
    }
    result += ">";

    var size = row.answers.length;
    for (var x = 0; x < size; x++) {
      var answer = row.answers[x];
      result += "<option ";
      result += "value=\"" + answer.value + "\">";
      result += answer.DISPLAY_VALUE;
      result += "</option>";
    }
    result += "</select>";
    return result;

  } else if (row.type == "script") {

    eval(row.DISPLAY_VALUE);
    return "";

  } else {

    logMessage("TODO:  implement question for " + row.type);

  }
}

function executeInline (site, div, action) {
  executeInlineByPage(site, div, action, "1");
}

function executeInlineByPage (site, div, action, pageNumber) {
  var src = "";
  if (site == "theserversidecom") {
    src = ["http://users.theserverside.com/registration/" + site + "/InlineRegister.page?type=" + action + "&callback=inlineCallback&div=" + div + "&pageNumber=" + pageNumber];
  } else {
    src = ["http://users.techtarget.com/registration/" + site + "/InlineRegister.page?type=" + action + "&callback=inlineCallback&div=" + div + "&pageNumber=" + pageNumber];
  }
  var root = document.getElementsByTagName("head")[0];
  var callback = function() {};
  loadJs(root, src, callback);
}

function getQueryStringValue (key) {

  var qs = window.location.search.substring(1);
  var tokens = qs.split("&");

  for (var x = 0; x < tokens.length; x++) {

    var pair = tokens[x].split("=");
    if (pair[0] == key) {
      return pair[1];
    }
  }
  return null;
}

function getPageParams (div) {

  return window[div + "_variables"];
}

function getTimezoneCode () {

  var timezone = getTimezone();
  return Math.floor(timezone + 436);
}

function getTimezone () {

  var now = new Date();

  var jan = new Date(now.getFullYear(), 0, 1);
  var jul = new Date(now.getFullYear(), 6, 1);
  var offset = Math.max(jan.getTimezoneOffset()/60, jul.getTimezoneOffset()/60);

  return (-offset);
}

function isUsEnglish () {

  var language = window.navigator.userLanguage || window.navigator.language;
  return language != null && language.match(/en-US/i) != null;
}

function isAssumedUs () {

  var timezone = getTimezoneCode();
  return isUsEnglish() && (timezone >= 426 && timezone <= 431);
}

function logMessage (message) {

  if (typeof console == 'undefined') {
    // do nothing
  } else {
    console.log(message);
  }
}

// validate required fields
function vRequired(oSubmit, fields, message) {
    var ret = true; // default return value is true to allow form submit

    message = (message=="") ? "Please complete all fields." : message;
    for(var i = 0; i < fields.length; i++) { 
        var ev = oSubmit.form.elements[fields[i]].value;
        ev = ev.replace(/^\s\s*/, '').replace(/\s\s*$/, '');  //trim
        if (ev=="") { 
            alert(message); 
            ret=false; 
            break; 
        }
    } 

    return ret;    
}

// validate email fields
function vEmail(oSubmit, field, message) {
    var ret = true;
    var emailRegEx = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

    message = (message=="") ? "Please enter a valid email address." : message;
   
    if (!emailRegEx.test(oSubmit.form.elements[field].value)) {
        alert(message);
        ret=false;
    }
    
    return ret;
}

var urValidation = {
    validationCfg: {},
    currentForm: {},
    validateFields: [],
    skipEmailExists: false,
    validate: function(validation, oform) {
        var errs = false
        this.validationCfg = validation;
        this.currentForm = oform;

        var input,field,fields,isError;
        this.validateFields = fields = this.getValidationFields(validation);
        
        try {

            for(var i = 0; i < fields.length; i++) {
                field = fields[i];
                isError = false;
                input = oform.elements[field];
                value = this.trim(input.value);
                this.setError(input, false, "");
                
                if((required = validation.required) && this.arrayContains(required.fields, field) ) {
                    isError = (value == "");
                    if(isError) { this.setError(input, isError, "required"); } 
                }
                    
                if(!isError && (emailFormat = validation.emailFormat) && this.arrayContains(emailFormat.fields, field) ) {
                    isError = (!this.validateEmailFormat(input.value))
                    if(isError) { this.setError(input, isError, "emailFormat"); }
                }
                    
                if(isError) { errs = true; }
                
            }

            if(!errs && (emailExists = validation.emailExists) && !this.skipEmailExists) {
                input = oform.elements[emailExists.field];
                value = this.trim(input.value);
                var changed = input.getAttribute("data-changed") || "true";
                var lastValue = input.getAttribute("data-value") || "";
                if(value) {
                    if(changed=="true") {
                        this.setError(input, "false", "");
                        var src = "http://users.techtarget.com/registration/json/common/GetEmailExistsWithCallback.page?callback=urValidation.emailExistsCallback&email={email}&field={field}&formid={formid}";
                        var root = document.getElementsByTagName("head")[0];
                        src=[src.replace("{email}",encodeURIComponent(value))
                                .replace("{field}",encodeURIComponent(input.name))
                                .replace("{formid}",encodeURIComponent(oform.id))];
                        loadJs(root, src, function() {});
                        return false;
                    } else if(changed=="false" && input.getAttribute("data-emailExists-error") == "true" && lastValue && value == lastValue) {
                        this.setError(input, true, "emailExists");                        
                    }
                }
            }

                
        } catch(err) {
            logMessage("ERROR: " + err);
        }
        
        this.setErrorHighlight(fields, validation, oform);
        this.setErrorMessage(fields, validation, oform);

        logMessage("urValidation.validate - errs = " + errs + " - returns " + !errs)
        return false //!errs;
    },
    validateEmailFormat: function (email) {
        var emailRegEx = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
        return emailRegEx.test(email);
    },
    setError: function(input, isError, errorType) {
        input.setAttribute("data-error", isError);
        input.setAttribute("data-error-type", errorType);
    },
    setErrorHighlight: function(fields, validation, oform) {
        fields = fields || this.validateFields;
        validation = validation || this.validationCfg;
        oform = oform || this.currentForm;
        for(var i = 0; i < fields.length; i++) {
            var input = oform.elements[fields[i]];
            var isError = input.getAttribute("data-error") == "true";
            var errorType = input.getAttribute("data-error-type");

            var currentClass = input.getAttribute("class");
            if(currentClass) {
                currentClass =  currentClass.replace("error-NoStyle","")
                                            .replace(validation.highlightClass,"")
                                            .replace(validation.required.highlightClass || "","")
                                            .replace(validation.emailFormat.highlightClass || "","")
                                            .replace(validation.emailExists.highlightClass || "","");
            }

            if(isError) {
                var validator = validation[errorType];
                var hl = "error-NoStyle";        
                if(validator.highlightClass !== undefined) { 
                    hl = validator.highlightClass || hl;
                } else if (validation.highlightClass !== undefined) {
                    hl = validation.highlightClass;
                }            
                input.setAttribute("class", ((!currentClass) ? "" : " ") + hl);
            } else {
                input.setAttribute("class", this.trim(currentClass));
            }
        }

    },
    setErrorMessage: function(fields, validation, oform) {
        fields = fields || this.validationFields;
        oform = oform || this.currentForm;
        validation = validation || this.validationCfg;
        for(var i = 0; i < fields.length; i++) {
            var input = oform.elements[fields[i]];
            var value = input.value;
            var isError = input.getAttribute("data-error") == "true";
            var errorType = input.getAttribute("data-error-type");
            
            if(isError) {
                var validator = validation[errorType];
                var msgText = (validator && validator.msgText) ? validator.msgText : (validation.msgText) ? validation.msgText : "Please complete all required fields."

                if(validation.msgType == "block") {
                    var block = document.getElementById(validation.msgBlockId);
                    block.innerHTML = validation.msgBlockFormat.replace("{msgText}", msgText.replace("{fieldValue}",value));
                    block.setAttribute("class", (validator.msgBlockClass) ? validator.msgBlockClass : validation.msgBlockClass);
                    block.style.display = "block"; 
                }
                if(validation.msgType == "alert") {
                    if(error) {
                        alert(msgText.replace("{fieldValue}",value));
                    }
                }
                
                input.focus();
       
                break;
            } else {
                if(validation.msgType == "block") {
                    var block = document.getElementById(validation.msgBlockId);
                    block.innerHTML = "";
                    block.setAttribute("class","");
                    block.style.display = "none";                    
                }
            }

        }
    },
    emailExistsCallback: function(d) {
        if(d) {
            var isError=(d.exists == true || d.exists == "true");
            var oform = (d.formid) ? document.getElementById(d.formid) : this.currentForm;
            var input = oform.elements[d.field];
            this.skipEmailExists = (!isError);

            logMessage("validation script emailExistsCallback -- isError: " + isError);

            input.setAttribute("data-changed", false);
            input.setAttribute("data-value", input.value);
            input.setAttribute("data-emailExists-error", true);
            input.onchange=function() { 
                this.setAttribute("data-changed", (this.value != this.getAttribute("data-value")));
                this.setAttribute("data-value", this.value); 
                this.setAttribute("data-emailExists-error", !(this.value != this.getAttribute("data-value")))
            };
            
            this.setError(input, isError, "emailExists");
            this.setErrorHighlight(this.validateFields, this.validationCfg, oform);
            this.setErrorMessage(this.validateFields, this.validationCfg, oform);

            logMessage("validation script final callback -- formHasError: " + isError + " skipEmailExists && SUBMIT()");
            if(!isError) { this.currentForm.submit() };
        }
    },
    getValidationFields: function(v) {
        var f = [], r =[], s = {};
        if(v) {
            if((req=v.required) && req.fields) { f=f.concat(req.fields); }
            if((ef=v.emailFormat) && ef.fields) { f=f.concat(ef.fields); }
            if((ee=v.emailExists) && ee.field) { f=f.concat(ee.field); }
            if(f.length > 1) {
                for(var i = 0; i<f.length; i++) {
                    if(!s[f[i]]) {
                        s[f[i]] = true;
                        r.push(f[i]);
                    }
                }
            }
        }
        return r;
    },
    arrayContains: function(ary,value) {
        var r = false;
        if(ary && value) {
            var i = ary.length;
            while (i--) {
                if(ary[i] === value) {
                    r = true;
                    break;
                }
            }
        }
        return r;
    },
    trim: function(value) {
        if(!value) { return ""; }
        return value.replace(/^\s\s*/, '').replace(/\s\s*$/, '')
    }
        
}
