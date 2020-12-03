(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{115:function(e,t,n){"use strict";var r=n(4);t.a=function(e,t){t("database",r.a),t("services",r.c),t("models",r.b),window.database=r.a,window.services=r.c,window.models=r.b}},116:function(e,t,n){"use strict";n(45),n(42);n(2).a.filter("truncate",(function(text,e,t){return text.slice(0,e)+(e<text.length?t||"...":"")}))},117:function(e,t,n){"use strict";var r={mounted:function(){this.$el.addEventListener("keyup",this.listenForEnter)},destroyed:function(){this.$el.removeEventListener("keyup",this.listenForEnter)},methods:{listenForEnter:function(e){"TEXTAREA"!==e.target.tagName&&"Enter"===e.key&&this.enterPressedCallback()}}},c=n(14),component=Object(c.a)(r,void 0,void 0,!1,null,null,null);t.a=component.exports},158:function(e,t,n){},160:function(e,t,n){"use strict";var r={mixins:[n(117).a],data:function(){return{contact:{}}},methods:{saveContact:function(){this.$store.dispatch("contacts/save",this.contact),this.$emit("close")},enterPressedCallback:function(){this.saveContact()}}},c=n(14),o=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container has-background-white p-4"},[n("h3",{staticClass:"is-size-3"},[e._v("New Contact")]),e._v(" "),n("p",[e._v("Add the details for a new contact below")]),e._v(" "),n("div",{staticClass:"mt-4"},[n("b-field",{attrs:{label:"First Name"}},[n("b-input",{attrs:{required:""},model:{value:e.contact.firstName,callback:function(t){e.$set(e.contact,"firstName",t)},expression:"contact.firstName"}})],1),e._v(" "),n("b-field",{attrs:{label:"last Name"}},[n("b-input",{model:{value:e.contact.lastName,callback:function(t){e.$set(e.contact,"lastName",t)},expression:"contact.lastName"}})],1),e._v(" "),n("b-field",{attrs:{label:"Email Address"}},[n("b-input",{attrs:{type:"email"},model:{value:e.contact.email,callback:function(t){e.$set(e.contact,"email",t)},expression:"contact.email"}})],1),e._v(" "),n("b-field",{attrs:{label:"Telephone Number"}},[n("b-input",{attrs:{type:"tel"},model:{value:e.contact.telephone,callback:function(t){e.$set(e.contact,"telephone",t)},expression:"contact.telephone"}})],1),e._v(" "),n("b-field",{attrs:{label:"Birthday"}},[n("b-datepicker",{attrs:{inline:""},model:{value:e.contact.birthday,callback:function(t){e.$set(e.contact,"birthday",t)},expression:"contact.birthday"}})],1),e._v(" "),n("b-button",{staticClass:"has-background-success-light",attrs:{expanded:"",outlined:""},on:{click:e.saveContact}},[e._v("\n            Save\n        ")])],1)])}),[],!1,null,null,null).exports,l={methods:{openContactFormModal:function(){this.$buefy.modal.open({parent:this,component:o,fullScreen:!0,customClass:"custom-class custom-class-2",trapFocus:!0})}}},d=Object(c.a)(l,void 0,void 0,!1,null,null,null);t.a=d.exports},167:function(e,t,n){"use strict";n(202);var r=n(14),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("Navbar"),this._v(" "),t("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{Navbar:n(214).default})},170:function(e,t,n){n(171),e.exports=n(172)},202:function(e,t,n){"use strict";n(158)},203:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return o})),n.d(t,"mutations",(function(){return l})),n.d(t,"actions",(function(){return d}));n(15);var r=n(0),c=n(4),o=function(){return{all:[]}},l={update:function(e,t){e.all=t}},d={save:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,l,d,f,m,v;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.dispatch,o=t.firstName,l=t.lastName,d=t.email,f=t.telephone,m=t.birthday,v=new c.b.Contact(o,l,d,f,m),n.next=5,c.c.contactService.addOne(v);case 5:r("plans/initialPlan",{contact:v},{root:!0}),r("load");case 7:case"end":return n.stop()}}),n)})))()},edit:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.dispatch,n.next=3,c.c.contactService.updateOne(t);case 3:r("load");case 4:case"end":return n.stop()}}),n)})))()},delete:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.dispatch,n.next=3,c.c.contactService.deleteOne(t.id);case 3:r("load");case 4:case"end":return n.stop()}}),n)})))()},load:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,c.c.contactService.fetchAll().toArray();case 3:r=t.sent,n("update",r);case 5:case"end":return t.stop()}}),t)})))()}}},209:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return o})),n.d(t,"mutations",(function(){return l})),n.d(t,"actions",(function(){return d}));n(15);var r=n(0),c=n(4),o=function(){return{all:[]}},l={update:function(e,t){e.all=t}},d={save:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,details,l,d,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.dispatch,o=t.contactId,details=t.details,l=t.how,d=t.when,f=new c.b.Encounter(o,details,l,d),n.next=5,c.c.encounterService.addOne(f);case 5:r("load");case 6:case"end":return n.stop()}}),n)})))()},edit:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.dispatch,n.next=3,c.c.encounterService.updateOne(t);case 3:r("load");case 4:case"end":return n.stop()}}),n)})))()},delete:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.dispatch,n.next=3,c.c.encounterService.deleteOne(t.id);case 3:r("load");case 4:case"end":return n.stop()}}),n)})))()},load:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,c.c.encounterService.fetchAll().toArray();case 3:r=t.sent,n("update",r);case 5:case"end":return t.stop()}}),t)})))()}}},210:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return o})),n.d(t,"mutations",(function(){return l})),n.d(t,"actions",(function(){return d}));n(15);var r=n(0),c=n(4),o=function(){return{all:[]}},l={update:function(e,t){e.all=t}},d={save:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,l,d,f,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.dispatch,o=t.contactId,l=t.when,d=t.sooner,f=t.later,n.next=4,R(l);case 4:return l=n.sent,m=new c.b.Plan(o,l,d,f),n.next=8,c.c.planService.addOne(m);case 8:r("load");case 9:case"end":return n.stop()}}),n)})))()},edit:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.dispatch,n.next=3,R(t.when);case 3:return t.when=n.sent,n.next=6,c.c.planService.updateOne(t);case 6:r("load");case 7:case"end":return n.stop()}}),n)})))()},delete:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.dispatch,n.next=3,c.c.planService.deleteOne(t.id);case 3:r("load");case 4:case"end":return n.stop()}}),n)})))()},load:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,c.c.planService.fetchAll().toArray();case 3:r=t.sent,n("update",r);case 5:case"end":return t.stop()}}),t)})))()},initialPlan:function(e,t){var n,r;return(0,e.dispatch)("save",{contactId:t.contact.id,when:(r=n||new Date,new Date(r.setDate(r.getDate()+7))),sooner:!1,later:!1})},addSoonerFor:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.dispatch,c=t.contact,n.next=4,x(c,4,m);case 4:if(!(o=n.sent)){n.next=9;break}return n.next=8,r("save",{contactId:c.id,when:new Date(o),sooner:!0,later:!1});case 8:r("load");case 9:case"end":return n.stop()}}),n)})))()},addLaterFor:function(e,t){return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.dispatch,c=t.contact,n.next=4,x(c,14,v);case 4:if(!(o=n.sent)){n.next=9;break}return n.next=8,r("save",{contactId:c.id,when:new Date(o),sooner:!1,later:!0});case 8:r("load");case 9:case"end":return n.stop()}}),n)})))()}};function f(e,t){return new Date(e.setDate(e.getDate()+t))}var m=function(e){return Math.round(e/2)},v=function(e){return Math.round(2*e)},h=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.c.settingService.table.where("name").equals("minDaysBetweenPlans").first();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.c.settingService.table.where("name").equals("maxPlansPerDay").first();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function x(e,t,n){return k.apply(this,arguments)}function k(){return(k=Object(r.a)(regeneratorRuntime.mark((function e(t,n,r){var o,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return o=e.sent,e.next=5,c.c.planService.fetchFutureFor(t).count();case 5:if(!(e.sent>0)){e.next=8;break}return e.abrupt("return",!1);case 8:return l=new Date,e.next=11,c.c.planService.daysBetweenLastPlans(t);case 11:return d=e.sent,l=d>o.value?f(l,r(d)):f(l,n),e.abrupt("return",l);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return O.apply(this,arguments)}function O(){return(O=Object(r.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return n=e.sent,e.next=5,c.c.planService.fetchAllForDate(t).count();case 5:if(!(e.sent>=n.value)){e.next=10;break}return e.abrupt("return",R(f(t,1)));case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},214:function(e,t,n){"use strict";n.r(t);var r={mixins:[n(160).a]},c=n(14),component=Object(c.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("b-navbar",{staticClass:"has-background-light",attrs:{shadow:""}},[t("template",{slot:"brand"},[t("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[t("span",{staticClass:"icon is-size-3 has-text-weight-bold"},[this._v("R")])])],1),this._v(" "),t("template",{slot:"start"},[t("b-navbar-item",[t("b-button",{staticClass:"is-success",attrs:{"icon-left":"account-plus"},on:{click:this.openContactFormModal}},[this._v("\n                  Add Contact\n              ")])],1)],1),this._v(" "),t("template",{slot:"end"},[t("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/settings"}}},[this._v("\n              Settings\n          ")])],1)],2)}),[],!1,null,null,null);t.default=component.exports}},[[170,6,2,7]]]);