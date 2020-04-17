(function(e){function t(t){for(var n,o,s=t[0],l=t[1],c=t[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"497b":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"appWrapper",attrs:{id:"app"}},[n("img",{attrs:{src:a("cf05"),width:"200px",alt:"My new company name!"}}),n("Filters",{attrs:{departments:e.departments},on:{"filter:person":function(t){return e.handleInput(t)},"filter:departments":function(t){return e.handleCheckboxes(t)},"filter:min-salary":function(t){return e.handleMinSalary(t)},"filter:max-salary":function(t){return e.handleMaxSalary(t)},"window:new-employee":function(t){return e.openNewEmployee(t)}}}),n("NewEmployeeForm",{attrs:{open:e.employeeStatus},on:{"add:employee":function(t){return e.handleNewEmployee(t)},"window:new-employee":function(t){return e.openNewEmployee(t)}}}),n("Table",{attrs:{person:e.searchValue,departments:e.filterDepartments,"min-salary":e.minSalary,"max-salary":e.maxSalary,"new-employee":e.employee},on:{"unique:departments":function(t){return e.updateDepartments(t)}}})],1)},i=[],o=(a("a630"),a("3ca3"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"filtersWrapper"},[a("div",{staticClass:"filters"},[a("div",{staticClass:"department__filters"},[a("p",[e._v("Filtruj wg. działu:")]),a("ul",e._l(e.departments,(function(t){return a("li",{key:t,staticClass:"departments__list"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkboxes,expression:"checkboxes"}],attrs:{id:t,type:"checkbox"},domProps:{value:t.toLowerCase(),checked:Array.isArray(e.checkboxes)?e._i(e.checkboxes,t.toLowerCase())>-1:e.checkboxes},on:{change:function(a){var n=e.checkboxes,r=a.target,i=!!r.checked;if(Array.isArray(n)){var o=t.toLowerCase(),s=e._i(n,o);r.checked?s<0&&(e.checkboxes=n.concat([o])):s>-1&&(e.checkboxes=n.slice(0,s).concat(n.slice(s+1)))}else e.checkboxes=i}}}),a("label",{attrs:{for:t}},[e._v(e._s(t))])])})),0)]),a("div",{staticClass:"salary__filters"},[a("div",{staticClass:"employee__filter"},[a("p",[e._v(" Szukaj pracownika:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.person,expression:"person"}],attrs:{type:"text",placeholder:"Imię lub nazwisko"},domProps:{value:e.person},on:{input:function(t){t.target.composing||(e.person=t.target.value)}}})]),a("div",[a("p",[e._v("Filtruj wg. wynagrodzenia:")]),a("div",{staticClass:"salary__inputs"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.minSalary,expression:"minSalary",modifiers:{number:!0}}],staticClass:"salary__input",attrs:{type:"number",placeholder:"min"},domProps:{value:e.minSalary},on:{input:function(t){t.target.composing||(e.minSalary=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.maxSalary,expression:"maxSalary",modifiers:{number:!0}}],staticClass:"salary__input",attrs:{type:"number",placeholder:"max"},domProps:{value:e.maxSalary},on:{input:function(t){t.target.composing||(e.maxSalary=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])])])]),a("div",{staticClass:"btn__functions"},[a("button",{staticClass:"btn",on:{click:e.clearFilters}},[e._v("Wyczyść filtry")]),a("button",{staticClass:"btn",on:{click:e.newEmployeeWindow}},[e._v("Dodaj pracownika")])])])}),s=[],l=a("f7fe"),c=a.n(l),u={props:{departments:{type:Array,required:!0}},methods:{searchPerson:function(e){this.person=e},newEmployeeWindow:function(){this.$emit("window:new-employee",!0)},clearFilters:function(){this.checkboxes=[],this.minSalary=null,this.maxSalary=null,this.person=""}},data:function(){return{checkboxes:[],minSalary:null,maxSalary:null,person:""}},watch:{checkboxes:function(){this.$emit("filter:departments",this.checkboxes)},minSalary:c()((function(){this.$emit("filter:min-salary",this.minSalary)}),500),maxSalary:c()((function(){this.$emit("filter:max-salary",this.maxSalary)}),500),person:c()((function(){this.$emit("filter:person",this.person)}),500)}},d=u,m=(a("58d9"),a("2877")),p=Object(m["a"])(d,o,s,!1,null,"4a0af11a",null),y=p.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tableWrapper"},[a("h2",{staticClass:"table__title"},[e._v("Pracownicy:")]),e.mobile?a("table",{staticClass:"table",attrs:{cellpading:"0",cellspacing:"0"}},[e._l(e.filterData,(function(t){return a("tbody",{key:t.id,staticClass:"table__body"},[a("tr",[a("td",{staticClass:"description"},[e._v(" Imię: ")]),a("td",{staticClass:"data"},[e._v(" "+e._s(t.imie))])]),a("tr",[a("td",{staticClass:"description"},[e._v("Nazwisko:")]),a("td",{staticClass:"data"},[e._v(" "+e._s(t.nazwisko))])]),a("tr",[a("td",{staticClass:"description"},[e._v("Dział:")]),a("td",{staticClass:"data"},[e._v(" "+e._s(t.dzial))])]),a("tr",[a("td",{staticClass:"description"},[e._v("Wynagrodzenie")]),a("td",{staticClass:"data"},[e._v(" "+e._s(e._f("money")(t.wynagrodzenieKwota,t.wynagrodzenieWaluta)))])]),e._m(0,!0)])})),a("tbody",{directives:[{name:"show",rawName:"v-show",value:e.nodata,expression:"nodata"}]},[e._m(1)])],2):a("table",{staticClass:"table table__desktop",attrs:{cellpading:"0",cellspacing:"0"}},[a("thead",{directives:[{name:"show",rawName:"v-show",value:!e.nodata,expression:"!nodata"}],staticClass:"table__head"},[e._m(2)]),a("tbody",e._l(e.filterData,(function(t,n){return a("tr",{key:t.id},[a("td",{staticClass:"index"},[e._v(" "+e._s(n+1))]),a("td",[e._v(" "+e._s(t.imie))]),a("td",[e._v(" "+e._s(t.nazwisko))]),a("td",[e._v(" "+e._s(t.dzial))]),a("td",[e._v(" "+e._s(e._f("money")(t.wynagrodzenieKwota,t.wynagrodzenieWaluta)))])])})),0),a("tbody",{directives:[{name:"show",rawName:"v-show",value:e.nodata,expression:"nodata"}]},[e._m(3)])]),a("p",{staticClass:"salary__all"},[e._v("Wynagrodzenie wszystkich pracowników wynosi: "),a("span",{staticClass:"nobr"},[e._v(e._s(e._f("money")(e.salaryOfAllEmployees,e.currenncyOfAllEmployees)))])]),e._l(e.departemntsSalary,(function(t){return a("ul",{key:t.department,staticClass:"salary__departments"},[a("li",[e._v("Całkowite wynagrodzenie dla działu "+e._s(t.department)+": "),e.mobile?a("br"):e._e(),a("span",{staticClass:"nobr"},[e._v(e._s(e._f("money")(t.sum,t.currency)))])])])}))],2)},w=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("td",{staticClass:"separator",attrs:{colspan:"2"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("td",{staticClass:"nodata"},[e._v(" Brak rekordów spełniających podane kryteria. ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",{staticClass:"id"},[e._v("ID")]),a("th",{staticClass:"name"},[e._v("Imię")]),a("th",{staticClass:"lastname"},[e._v("Nazwisko")]),a("th",{staticClass:"department"},[e._v("Dział")]),a("th",{staticClass:"salary"},[e._v("Wynagrodzenie")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("td",{staticClass:"nodata",attrs:{colspan:"5"}},[e._v(" Brak rekordów spełniających podane kryteria. ")])])}],h=(a("99af"),a("4de4"),a("4160"),a("caad"),a("d81d"),a("13d5"),a("45fc"),a("a9e3"),a("d3b7"),a("ac1f"),a("6062"),a("2532"),a("466d"),a("159b"),a("ddb0"),a("a3e8")),v=a.n(h),_={name:"Table",filters:{money:function(e,t){if(v()(t.toUpperCase())){var a=new Intl.NumberFormat("pl-PL",{style:"currency",currency:t});return a.format(Number(e))}return"".concat(Number(e).toLocaleString(void 0,{minimumFractionDigits:2})," ").concat(t)}},props:{person:{type:String,required:!0},departments:{type:Array,required:!0},minSalary:{type:Number,required:!0},maxSalary:{type:Number,required:!0},newEmployee:{type:Object,required:!0}},data:function(){return{pracownicy:[{id:1245,imie:"Jan",nazwisko:"Kowalski",dzial:"IT",wynagrodzenieKwota:"3000",wynagrodzenieWaluta:"PLN"},{id:5264,imie:"Jan",nazwisko:"Kowalski",dzial:"Administracja",wynagrodzenieKwota:"8000",wynagrodzenieWaluta:"PLN"},{id:3435,imie:"Anna",nazwisko:"Bąk",dzial:"Administracja",wynagrodzenieKwota:"2400.500",wynagrodzenieWaluta:"PLN"},{id:3674,imie:"Paweł",nazwisko:"Zabłocki",dzial:"IT",wynagrodzenieKwota:"3300",wynagrodzenieWaluta:"PLN"},{id:5789,imie:"Tomasz",nazwisko:"Osiecki",dzial:"Administracja",wynagrodzenieKwota:"2100",wynagrodzenieWaluta:"PLN"},{id:6678,imie:"Iwona",nazwisko:"Leihs-Gutowska",dzial:"Handlowiec",wynagrodzenieKwota:"3100",wynagrodzenieWaluta:"PLN"}],filtered:[],uniqueDepartments:[],mobile:!1,departemntsSalary:{},nodata:!1}},mounted:function(){this.filtered=this.pracownicy;var e=this.pracownicy.map((function(e){return e.dzial}));this.uniqueDepartments=new Set(e),this.$nextTick((function(){this.depsSalary(),window.addEventListener("DOMContentLoaded",this.getWindowWidth),window.addEventListener("resize",this.getWindowWidth)}))},computed:{filterData:function(){var e=this,t=this.filtered.filter((function(t){return t.imie.toLowerCase().match(e.person.toLowerCase())||t.nazwisko.toLowerCase().match(e.person.toLowerCase())})).filter((function(t){return Number(e.minSalary)<=Number(t.wynagrodzenieKwota)&&Number(t.wynagrodzenieKwota)<=Number(e.maxSalary)}));return this.departments.length&&(t=t.filter((function(t){return e.departments.includes(t.dzial.toLowerCase())}))),t},salaryOfAllEmployees:function(){return this.filterData.reduce((function(e,t){var a=t.wynagrodzenieKwota;return Number(e)+Number(a)}),0)},currenncyOfAllEmployees:function(){return this.pracownicy.some((function(e){var t=e.wynagrodzenieWaluta;return"PLN"!==t}))?"mixed":"pln"}},methods:{getWindowWidth:function(){this.mobile=document.documentElement.clientWidth<500},depsSalary:function(){var e=this,t=[];this.uniqueDepartments.forEach((function(a){var n={department:a,sum:0,currency:void 0};e.pracownicy.forEach((function(e){e.dzial===a&&(n.sum+=Number(e.wynagrodzenieKwota),n.currency=n.currency&&n.currency!==e.wynagrodzenieWaluta?"mixed":e.wynagrodzenieWaluta)})),t.push(n)})),this.departemntsSalary=t}},watch:{newEmployee:function(){return this.pracownicy.push(this.newEmployee)},pracownicy:function(){var e=this.pracownicy.map((function(e){return e.dzial}));this.uniqueDepartments=new Set(e),this.depsSalary()},uniqueDepartments:function(){this.$emit("unique:departments",new Set(this.uniqueDepartments))},filterData:function(){this.nodata=!this.filterData.length}}},b=_,g=(a("f533"),Object(m["a"])(b,f,w,!1,null,"3c696c5e",null)),z=g.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[e.open?a("div",{staticClass:"newEmployeeWrapper"},[a("button",{staticClass:"btn-close",on:{click:e.close}},[a("span",{staticClass:"cross"})]),a("h3",{staticClass:"form__title"},[e._v("Dodaj nowego pracownika:")]),a("form",{staticClass:"employee__form",attrs:{id:"addNewEmployeeForm"},on:{submit:function(t){return t.preventDefault(),e.addNewEmployee(t)}}},[a("label",{attrs:{for:"imie"}},[e._v(" Imię ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.imie,expression:"employee.imie"}],attrs:{type:"text",name:"imie",id:"imie",required:""},domProps:{value:e.employee.imie},on:{input:function(t){t.target.composing||e.$set(e.employee,"imie",t.target.value)}}}),a("label",{attrs:{for:"nazwisko"}},[e._v(" Nazwisko ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.nazwisko,expression:"employee.nazwisko"}],attrs:{type:"text",name:"nazwisko",id:"nazwisko",required:""},domProps:{value:e.employee.nazwisko},on:{input:function(t){t.target.composing||e.$set(e.employee,"nazwisko",t.target.value)}}}),a("label",{attrs:{for:"dzial"}},[e._v(" Dział ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.dzial,expression:"employee.dzial"}],attrs:{type:"text",name:"dzial",id:"dzial",required:""},domProps:{value:e.employee.dzial},on:{input:function(t){t.target.composing||e.$set(e.employee,"dzial",t.target.value)}}}),a("label",{attrs:{for:"wynagrodzenieKwota"}},[e._v(" Wynagrodzenie Kwota ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.wynagrodzenieKwota,expression:"employee.wynagrodzenieKwota"}],attrs:{type:"number",name:"wynagrodzenieKwota",id:"wynagrodzenieKwota",min:"0",required:""},domProps:{value:e.employee.wynagrodzenieKwota},on:{input:function(t){t.target.composing||e.$set(e.employee,"wynagrodzenieKwota",t.target.value)}}}),a("label",{attrs:{for:"wynagrodzenieWaluta"}},[e._v(" Wynagrodzenie Waluta ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.wynagrodzenieWaluta,expression:"employee.wynagrodzenieWaluta"}],attrs:{type:"text",name:"wynagrodzenieWaluta",id:"wynagrodzenieWaluta",min:"0",required:""},domProps:{value:e.employee.wynagrodzenieWaluta},on:{input:function(t){t.target.composing||e.$set(e.employee,"wynagrodzenieWaluta",t.target.value)}}}),a("button",{staticClass:"add__empolyee btn",attrs:{type:"submit"}},[e._v("Dodaj")])])]):e._e()])},x=[],C={props:{open:{type:Boolean,required:!0}},data:function(){return{employee:{id:Math.floor(1e4*Math.random()),imie:null,nazwisko:null,dzial:null,wynagrodzenieKwota:null,wynagrodzenieWaluta:null}}},methods:{addNewEmployee:function(){this.$emit("add:employee",this.employee),this.employee={id:Math.floor(1e3*Math.random()),imie:null,nazwisko:null,dzial:null,wynagrodzenieKwota:null,wynagrodzenieWaluta:null}},close:function(){this.$emit("window:new-employee",!1)}}},S=C,N=(a("b5ec"),Object(m["a"])(S,k,x,!1,null,"3393c4d4",null)),W=N.exports,E={name:"App",data:function(){return{searchValue:"",filterDepartments:[],minSalary:0,maxSalary:999999999,employee:{},departments:[],employeeStatus:!1}},components:{Filters:y,Table:z,NewEmployeeForm:W},methods:{openNewEmployee:function(e){this.employeeStatus=e},handleInput:function(e){this.searchValue=e},handleCheckboxes:function(e){this.filterDepartments=e},handleMinSalary:function(e){this.minSalary=e||0},handleMaxSalary:function(e){this.maxSalary=e||999999999},handleNewEmployee:function(e){this.employee=e},updateDepartments:function(e){this.departments=Array.from(e)}}},D=E,P=(a("cf25"),Object(m["a"])(D,r,i,!1,null,null,null)),j=P.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(j)}}).$mount("#app")},"58d9":function(e,t,a){"use strict";var n=a("497b"),r=a.n(n);r.a},"73a8":function(e,t,a){},b5ec:function(e,t,a){"use strict";var n=a("73a8"),r=a.n(n);r.a},cf05:function(e,t,a){e.exports=a.p+"img/logo.a44f1855.png"},cf25:function(e,t,a){"use strict";var n=a("fea6"),r=a.n(n);r.a},ee59:function(e,t,a){},f533:function(e,t,a){"use strict";var n=a("ee59"),r=a.n(n);r.a},fea6:function(e,t,a){}});
//# sourceMappingURL=app.3611e963.js.map