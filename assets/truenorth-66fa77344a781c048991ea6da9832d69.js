define("truenorth/app",["ember","ember/resolver","ember/load-initializers","truenorth/config/environment","exports"],function(e,t,r,n,o){"use strict";var u=e["default"],a=t["default"],i=r["default"],f=n["default"];u.MODEL_FACTORY_INJECTIONS=!0;var l=u.Application.extend({modulePrefix:f.modulePrefix,podModulePrefix:f.podModulePrefix,Resolver:a});i(l,f.modulePrefix),o["default"]=l}),define("truenorth/router",["ember","truenorth/config/environment","exports"],function(e,t,r){"use strict";var n=e["default"],o=t["default"],u=n.Router.extend({location:o.locationType});u.map(function(){}),r["default"]=u}),define("truenorth/templates/application",["ember","exports"],function(e,t){"use strict";var r=e["default"];t["default"]=r.Handlebars.template(function(e,t,n,o,u){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,r.Handlebars.helpers),u=u||{};var a,i="";return u.buffer.push("<h2 id='title'>Welcome to Ember.js</h2>\n\n"),a=n._triageMustache.call(t,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[t],types:["ID"],data:u}),(a||0===a)&&u.buffer.push(a),u.buffer.push("\n"),i})}),define("truenorth/config/environment",["ember"],function(e){var t="truenorth/config/environment",r=e["default"].$('meta[name="'+t+'"]').attr("content"),n=JSON.parse(unescape(r));return{"default":n}}),runningTests?require("truenorth/tests/test-helper"):require("truenorth/app")["default"].create({});