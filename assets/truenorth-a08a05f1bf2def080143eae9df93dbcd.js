define("truenorth/app",["exports","ember","ember/resolver","ember/load-initializers","truenorth/config/environment"],function(e,t,r,n,i){"use strict";var a;t["default"].MODEL_FACTORY_INJECTIONS=!0,a=t["default"].Application.extend({modulePrefix:i["default"].modulePrefix,Resolver:r["default"]}),n["default"](a,i["default"].modulePrefix),e["default"]=a}),define("truenorth/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("truenorth/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("truenorth/initializers/app-version",["exports","truenorth/config/environment","ember"],function(e,t,r){"use strict";var n=r["default"].String.classify,i=!1;e["default"]={name:"App Version",initialize:function(e,a){if(!i){var o=n(a.toString());r["default"].libraries.register(o,t["default"].APP.version),i=!0}}}}),define("truenorth/initializers/export-application-global",["exports","ember","truenorth/config/environment"],function(e,t,r){"use strict";function n(e,n){var i=t["default"].String.classify(r["default"].modulePrefix);r["default"].exportApplicationGlobal&&!window[i]&&(window[i]=n)}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("truenorth/router",["exports","ember","truenorth/config/environment"],function(e,t,r){"use strict";var n=t["default"].Router.extend({location:r["default"].locationType});n.map(function(){}),e["default"]=n}),define("truenorth/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),r=e.createElement("h2");e.setAttribute(r,"id","title");var n=e.createTextNode("Welcome to Ember.js");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},render:function(e,t,r){var n=t.dom,i=t.hooks,a=i.content;n.detectNamespace(r);var o;t.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(o=this.build(n),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=n.cloneNode(this.cachedFragment,!0))):o=this.build(n);var u=n.createMorphAt(o,2,2,r);return a(t,u,e,"outlet"),o}}}())}),define("truenorth/config/environment",["ember"],function(e){var t="truenorth";try{var r=t+"/config/environment",n=e["default"].$('meta[name="'+r+'"]').attr("content"),i=JSON.parse(unescape(n));return{"default":i}}catch(a){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests?require("truenorth/tests/test-helper"):require("truenorth/app")["default"].create({name:"truenorth",version:"0.0.0.6b63c57e"});