(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{216:function(t,e,n){"use strict";n.r(e);n(15);var c=n(0),o=n(117),main=n(4),r={mixins:[o.a],props:{contact:{type:Object,validator:function(t){return t instanceof main.b.Contact}}},methods:{updateContact:function(){this.$store.dispatch("contacts/edit",this.contact),this.$emit("close")},enterPressedCallback:function(){this.updateContact()},deleteContact:function(){var t=this;this.$buefy.dialog.confirm({title:"Are you sure?",message:"This contact will be deleted permenantly.",type:"is-danger",hasIcon:!0,onConfirm:function(){t.$store.dispatch("contacts/delete",t.contact),t.$emit("close")}})}}},l=n(14),d=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container has-background-white p-4"},[n("h3",{staticClass:"is-size-3"},[t._v("Update Contact")]),t._v(" "),n("p",[t._v("Update the details for a new contact below")]),t._v(" "),n("div",{staticClass:"mt-4"},[n("b-field",{attrs:{label:"First Name"}},[n("b-input",{attrs:{required:""},model:{value:t.contact.firstName,callback:function(e){t.$set(t.contact,"firstName",e)},expression:"contact.firstName"}})],1),t._v(" "),n("b-field",{attrs:{label:"last Name"}},[n("b-input",{model:{value:t.contact.lastName,callback:function(e){t.$set(t.contact,"lastName",e)},expression:"contact.lastName"}})],1),t._v(" "),n("b-field",{attrs:{label:"Email Address"}},[n("b-input",{attrs:{type:"email"},model:{value:t.contact.email,callback:function(e){t.$set(t.contact,"email",e)},expression:"contact.email"}})],1),t._v(" "),n("b-field",{attrs:{label:"Telephone Number"}},[n("b-input",{attrs:{type:"tel"},model:{value:t.contact.telephone,callback:function(e){t.$set(t.contact,"telephone",e)},expression:"contact.telephone"}})],1),t._v(" "),n("b-field",{attrs:{label:"Birthday"}},[n("b-datepicker",{attrs:{inline:""},model:{value:t.contact.birthday,callback:function(e){t.$set(t.contact,"birthday",e)},expression:"contact.birthday"}})],1),t._v(" "),n("div",{staticClass:"is-flex is-full"},[n("b-button",{staticClass:"has-background-success-light",attrs:{expanded:"",outlined:""},on:{click:t.updateContact}},[t._v("\n        Update\n      ")]),t._v(" "),n("b-button",{staticClass:"has-background-danger-light",attrs:{"icon-left":"trash-can-outline",outlined:""},on:{click:t.deleteContact}})],1)],1)])}),[],!1,null,null,null).exports,h=(n(39),n(45),n(55),n(118),n(119),n(84),n(56),n(80));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={mixins:[o.a],props:{contact:{type:Object,validator:function(t){return t instanceof main.b.Contact}}},data:function(){return{encounter:{when:new Date}}},computed:{newEncounterDetails:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({contactId:this.contact.id},this.encounter)}},methods:{saveEncounter:function(){this.$store.dispatch("encounters/save",this.newEncounterDetails),this.nextPlanPrompt(),this.$emit("close")},enterPressedCallback:function(){this.saveEncounter()},nextPlanPrompt:function(){var t=this;this.$buefy.dialog.confirm({title:"Schedule next encounter?",message:"Book another encounter with your contact.",confirmText:"Add Plan",type:"is-success",hasIcon:!0,onConfirm:function(){t.addPlanPrompt()}})},addPlanPrompt:function(){var t=this;this.$buefy.dialog.confirm({title:"Would you like the next meeting sooner or later?",message:"For your convenience, we'll either double the time between meetings (later) or half the time (sooner).",confirmText:"Sooner",cancelText:"Later",type:"is-info",hasIcon:!0,onConfirm:function(){t.scheduleNextPlanSooner()},onCancel:function(){t.scheduleNextPlanLater()}})},scheduleNextPlanSooner:function(){this.$store.dispatch("plans/addSoonerFor",{contact:this.contact})},scheduleNextPlanLater:function(){this.$store.dispatch("plans/addLaterFor",{contact:this.contact})}}},v=Object(l.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container has-background-white p-4"},[n("h3",{staticClass:"is-size-3"},[t._v("New Encounter")]),t._v(" "),n("p",[t._v("Add the details for a new encounter below")]),t._v(" "),n("div",{staticClass:"mt-4"},[n("b-field",{attrs:{label:"Details"}},[n("b-input",{attrs:{type:"textarea",required:""},model:{value:t.encounter.details,callback:function(e){t.$set(t.encounter,"details",e)},expression:"encounter.details"}})],1),t._v(" "),n("b-field",{attrs:{label:"When"}},[n("b-datepicker",{attrs:{inline:""},model:{value:t.encounter.when,callback:function(e){t.$set(t.encounter,"when",e)},expression:"encounter.when"}})],1),t._v(" "),n("b-field",{attrs:{label:"How"}},[n("b-input",{model:{value:t.encounter.how,callback:function(e){t.$set(t.encounter,"how",e)},expression:"encounter.how"}})],1),t._v(" "),n("b-button",{staticClass:"has-background-success-light",attrs:{expanded:"",outlined:""},on:{click:t.saveEncounter}},[t._v("\n            Save\n        ")])],1)])}),[],!1,null,null,null).exports,_={mixins:[o.a],props:{contact:{type:Object,validator:function(t){return t instanceof main.b.Contact}}},data:function(){return{plan:{}}},methods:{addPlan:function(){this.plan.contactId=this.contact.id,this.$store.dispatch("plans/save",this.plan),this.$emit("close")},enterPressedCallback:function(){this.addPlan()}}},C=Object(l.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container has-background-white p-4"},[n("h3",{staticClass:"is-size-3"},[t._v("Add Plan")]),t._v(" "),n("p",[t._v("Enter the date for your next meeting")]),t._v(" "),n("div",{staticClass:"mt-4"},[n("b-field",{attrs:{label:"When"}},[n("b-datepicker",{attrs:{inline:""},model:{value:t.plan.when,callback:function(e){t.$set(t.plan,"when",e)},expression:"plan.when"}})],1),t._v(" "),n("b-button",{staticClass:"has-background-success-light",attrs:{expanded:"",outlined:""},on:{click:t.addPlan}},[t._v("\n      Save\n    ")])],1)])}),[],!1,null,null,null).exports,w={props:{contact:{type:Object,validator:function(t){return t instanceof main.b.Contact}}},data:function(){return{futurePlans:null}},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.contactHasFuturePlans();case 2:t.futurePlans=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{editContact:function(t){this.$buefy.modal.open({parent:this,component:d,customClass:"custom-class custom-class-2",trapFocus:!0,scroll:"keep",fullScreen:!0,props:{contact:t}})},addEncounter:function(t){this.$buefy.modal.open({parent:this,component:v,customClass:"custom-class custom-class-2",trapFocus:!0,scroll:"keep",fullScreen:!0,props:{contact:t}})},addPlan:function(t){var e,n=this;this.$buefy.modal.open({parent:this,component:C,customClass:"custom-class custom-class-2",trapFocus:!0,scroll:"keep",fullScreen:!0,props:{contact:t},events:{close:(e=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.contactHasFuturePlans();case 2:n.futurePlans=t.sent;case 3:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})}})},contactHasFuturePlans:function(){return main.c.planService.fetchFutureFor(this.contact).first()}}},k=Object(l.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card"},[n("NuxtLink",{attrs:{to:{name:"contact-id",params:{id:t.contact.id}}}},[n("header",{staticClass:"card-header"},[n("div",{staticClass:"card-header-title is-capitalized"},[t._v("\n          "+t._s(t.contact.firstName)+" "+t._s(t.contact.lastName)+"\n        ")])]),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"columns is-mobile is-gapless mb-1"},[n("div",{staticClass:"column is-capitalized has-text-weight-bold is-hidden-mobile"},[t._v("\n            Email\n          ")]),t._v(" "),n("div",{staticClass:"column"},[t._v(t._s(t.contact.email))])]),t._v(" "),n("div",{staticClass:"columns is-mobile is-gapless mb-1"},[n("div",{staticClass:"column is-capitalized has-text-weight-bold is-hidden-mobile"},[t._v("\n            Phone\n          ")]),t._v(" "),n("div",{staticClass:"column"},[t._v(t._s(t.contact.telephone))])]),t._v(" "),n("div",{staticClass:"columns is-mobile is-gapless mb-1"},[n("div",{staticClass:"column is-capitalized has-text-weight-bold is-hidden-mobile"},[t._v("\n            Birthday\n          ")]),t._v(" "),n("div",{staticClass:"column"},[t._v("\n            "+t._s(t.contact.birthday?new Date(t.contact.birthday).toLocaleDateString():"")+"\n          ")])])])]),t._v(" "),n("footer",{staticClass:"card-footer"},[n("b-button",{staticClass:"card-footer-item is-primary is-light",on:{click:function(e){return t.editContact(t.contact)}}},[t._v("\n        Edit\n      ")]),t._v(" "),n("b-button",{staticClass:"card-footer-item is-info is-light",on:{click:function(e){return t.addEncounter(t.contact)}}},[t._v("\n        Add Encounter\n      ")]),t._v(" "),t.futurePlans?t._e():n("b-button",{staticClass:"card-footer-item is-text",on:{click:function(e){return t.addPlan(t.contact)}}},[t._v("\n        Add Plan\n      ")])],1)],1)])}),[],!1,null,null,null);e.default=k.exports},217:function(t,e,n){"use strict";n.r(e);var c=n(117),main=n(4),o={mixins:[c.a],props:{encounter:{type:Object,validator:function(t){return t instanceof main.b.Encounter}}},methods:{editEncounter:function(){this.$store.dispatch("encounters/edit",this.encounter),this.$emit("close")},enterPressedCallback:function(){this.editEncounter()},deleteEncounter:function(){var t=this;this.$buefy.dialog.confirm({title:"Are you sure?",message:"This encounter will be deleted permenantly.",type:"is-danger",hasIcon:!0,onConfirm:function(){t.$store.dispatch("encounters/delete",t.encounter),t.$emit("close")}})}}},r=n(14),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container has-background-white p-4"},[n("h3",{staticClass:"is-size-3"},[t._v("Edit Encounter")]),t._v(" "),n("p",[t._v("Edit the details for an encounter")]),t._v(" "),n("div",{staticClass:"mt-4"},[n("b-field",{attrs:{label:"Details"}},[n("b-input",{attrs:{type:"textarea",required:""},model:{value:t.encounter.details,callback:function(e){t.$set(t.encounter,"details",e)},expression:"encounter.details"}})],1),t._v(" "),n("b-field",{attrs:{label:"When"}},[n("b-datepicker",{attrs:{inline:""},model:{value:t.encounter.when,callback:function(e){t.$set(t.encounter,"when",e)},expression:"encounter.when"}})],1),t._v(" "),n("b-field",{attrs:{label:"How"}},[n("b-input",{model:{value:t.encounter.how,callback:function(e){t.$set(t.encounter,"how",e)},expression:"encounter.how"}})],1),t._v(" "),n("div",{staticClass:"is-flex is-full"},[n("b-button",{staticClass:"has-background-success-light",attrs:{expanded:"",outlined:""},on:{click:t.editEncounter}},[t._v("\n        Save\n      ")]),t._v(" "),n("b-button",{staticClass:"has-background-danger-light",attrs:{"icon-left":"trash-can-outline",outlined:""},on:{click:t.deleteEncounter}})],1)],1)])}),[],!1,null,null,null).exports,d={props:{encounter:{type:Object,validator:function(t){return t instanceof main.b.Encounter}}},methods:{editEncounter:function(t){this.$buefy.modal.open({parent:this,component:l,customClass:"custom-class custom-class-2",trapFocus:!0,scroll:"keep",fullScreen:!0,props:{encounter:t}})}}},h=Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"content is-medium"},[n("p",{staticClass:"is-clipped"},[t._v("\n          "+t._s(t._f("truncate")(t.encounter.details,200))+"\n        ")])]),t._v(" "),n("div",[n("p",[t._v("How: "+t._s(t.encounter.how))]),t._v(" "),n("p",[t._v("When: "+t._s(new Date(t.encounter.when).toLocaleDateString()))])])]),t._v(" "),n("footer",{staticClass:"card-footer"},[n("b-button",{staticClass:"card-footer-item is-primary is-light",on:{click:function(e){return t.editEncounter(t.encounter)}}},[t._v("\n        Edit\n      ")])],1)])])}),[],!1,null,null,null);e.default=h.exports},218:function(t,e,n){"use strict";n.r(e);n(15);var c=n(0),o=n(117),main=n(4),r={mixins:[o.a],props:{plan:{type:Object,validator:function(t){return t instanceof main.b.Plan}}},methods:{editPlan:function(){this.$store.dispatch("plans/edit",this.plan),this.$emit("close")},enterPressedCallback:function(){this.editPlan()},deletePlan:function(){var t=this;this.$buefy.dialog.confirm({title:"Are you sure?",message:"This plan will be deleted permenantly.",type:"is-danger",hasIcon:!0,onConfirm:function(){t.$store.dispatch("plans/delete",t.plan),t.$emit("close")}})}}},l=n(14),d=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container has-background-white p-4"},[n("h3",{staticClass:"is-size-3"},[t._v("Edit Plan")]),t._v(" "),n("p",[t._v("Edit the details for a plan")]),t._v(" "),n("div",{staticClass:"mt-4"},[n("b-field",{attrs:{label:"When"}},[n("b-datepicker",{attrs:{inline:""},model:{value:t.plan.when,callback:function(e){t.$set(t.plan,"when",e)},expression:"plan.when"}})],1),t._v(" "),n("div",{staticClass:"is-flex is-full"},[n("b-button",{staticClass:"has-background-success-light",attrs:{expanded:"",outlined:""},on:{click:t.editPlan}},[t._v("\n                Save\n            ")]),t._v(" "),n("b-button",{staticClass:"has-background-danger-light",attrs:{"icon-left":"trash-can-outline",outlined:""},on:{click:t.deletePlan}})],1)],1)])}),[],!1,null,null,null).exports,h={props:{plan:{type:Object,validator:function(t){return t instanceof main.b.Plan}}},data:function(){return{contact:{}}},created:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$services.contactService.fetchOne(t.plan.contactId);case 2:t.contact=e.sent;case 3:case"end":return e.stop()}}),e)})))()},computed:{humanReadableWhen:function(){return new Date(this.plan.when).toLocaleDateString()}},methods:{editPlan:function(t){this.$buefy.modal.open({parent:this,component:d,customClass:"custom-class custom-class-2",trapFocus:!0,scroll:"keep",fullScreen:!0,props:{plan:t}})}}},f=Object(l.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card"},[n("header",{staticClass:"card-header"},[n("div",{staticClass:"card-header-title is-capitalized"},[t._v("\n        "+t._s(t.humanReadableWhen)+" \n        "),t.contact?n("span",{staticClass:"ml-2"},[t._v(" \n          With: "+t._s(t.contact.firstName)+"\n        ")]):t._e()])]),t._v(" "),n("footer",{staticClass:"card-footer"},[n("b-button",{staticClass:"card-footer-item is-primary is-light",on:{click:function(e){return t.editPlan(t.plan)}}},[t._v("\n        Edit\n      ")])],1)])])}),[],!1,null,null,null);e.default=f.exports}}]);