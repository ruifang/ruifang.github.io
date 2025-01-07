import{a as X,c as Fe,d as Ne,e as Ve}from"./chunk-S7ZBELIU.js";import{i as ae,j as De,k as ze,l as ke,o as Me,r as J}from"./chunk-KW42OSGD.js";import{$ as Re,F as ee,_ as Ae,aa as te}from"./chunk-4J7264TK.js";import{a as Oe,q as Pe}from"./chunk-DXKQPQSL.js";import{k as w,l as N,m as T,n as V,p as we,s as f}from"./chunk-7DT3MKEW.js";import{$b as be,Aa as he,B as oe,C as le,Cb as s,Cc as Ie,Db as p,Eb as u,Fb as k,Gb as M,Hb as F,Ia as P,Ib as S,J as pe,L as me,Nb as _,Pb as m,Qb as _e,Rb as Ce,S as ce,Tb as ye,Ub as xe,Vb as Q,Wb as Y,Xb as z,Yb as g,Zb as U,_b as j,ab as l,ac as Se,bb as E,ca as de,ea as ue,ec as Te,fc as v,ga as q,hc as I,ic as R,jc as Ee,na as h,nc as Z,oa as ge,rb as c,sb as K,tb as a,ub as ve,wa as fe,xa as C,ya as y,za as L}from"./chunk-BXRIWIV5.js";import"./chunk-EQDQRRRY.js";var Ke=(e,t)=>({"text-primary":e,"text-white":t}),Qe=(e,t)=>({"w-16 h-16":e,"w-5 h-5":t}),B=(()=>{let t=class t{constructor(){this.size="medium",this.type="default"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=h({type:t,selectors:[["mz-spinner"]],inputs:{size:"size",type:"type"},standalone:!0,features:[v],decls:4,vars:8,consts:[[1,"w-full",3,"ngClass"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24",1,"animate-spin","m-auto",3,"ngClass"],["cx","12","cy","12","r","10","stroke","currentColor","stroke-width","4",1,"opacity-25"],["fill","currentColor","d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",1,"opacity-75"]],template:function(i,r){i&1&&(s(0,"div",0),L(),s(1,"svg",1),u(2,"circle",2)(3,"path",3),p()()),i&2&&(a("ngClass",R(2,Ke,r.type=="default",r.type=="inverse")),l(),a("ngClass",R(5,Qe,r.size=="large",r.size=="medium")))},dependencies:[f,w]});let e=t;return e})();var $e=new q("MUZIEH_COMPONENT_CONFIG");var Ye=(e,t)=>({"icon-outline":e,"icon-solid":t}),O=(()=>{let t=class t{constructor(n){this.config=n,this.type="outline",this.url=n?.svgIconDefinitionUrl||"./assets/icondefinitions.svg"}ngOnInit(){}};t.\u0275fac=function(i){return new(i||t)(E($e,8))},t.\u0275cmp=h({type:t,selectors:[["mz-svg-icon"]],inputs:{key:"key",type:"type"},standalone:!0,features:[v],decls:2,vars:5,consts:[["xmlns","http://www.w3.org/2000/svg","aria-hidden","true",1,"icon",3,"ngClass"]],template:function(i,r){i&1&&(L(),s(0,"svg",0),u(1,"use"),p()),i&2&&(a("ngClass",R(2,Ye,r.type=="outline",r.type=="solid")),l(),K("href",r.url+"#"+r.key+"-"+r.type))},dependencies:[f,w]});let e=t;return e})();var He=new q("MUZIEH_PAGINATION_DEFAULT_CONFIG");var Le=e=>({disabled:e}),Ze=e=>({active:e});function Je(e,t){e&1&&(s(0,"span",13),g(1,"..."),p())}function Xe(e,t){if(e&1){let o=S();s(0,"button",3),_("click",function(){C(o);let i=m().$implicit,r=m();return y(r.changePageNumber(i))}),g(1),p()}if(e&2){let o=m().$implicit,n=m();a("ngClass",I(2,Ze,o==n.page)),l(),U(o)}}function et(e,t){if(e&1&&(k(0),c(1,Je,2,0,"span",11)(2,Xe,2,4,"button",12),M()),e&2){let o=t.$implicit,n=m();l(),a("ngIf",n.isEllipsis(o)),l(),a("ngIf",!n.isEllipsis(o))}}function tt(e,t){if(e&1&&(s(0,"option",14),g(1),p()),e&2){let o=t.$implicit,n=m();a("value",o),K("selected",n.pageSize==o?!0:null),l(),U(o)}}var ie=(()=>{let t=class t{constructor(n){this.length=0,this.page=1,this.changePage=new P,this.pages=[],this.pageCount=1,this.pageSize=n?.pageSize||20,this.pageSizeOptions=n?.pageSizeOptions||[20,50,100],this.updatePages(this.page,this.length,this.pageSize)}ngOnChanges(){this.updatePages(this.page,this.length,this.pageSize)}isEllipsis(n){return n===-1}changePageNumber(n){n==this.page||n<1||n>this.pageCount||this.changePage.emit({page:n,pageSize:this.pageSize})}changePageSize(n){Number(n)!=this.pageSize&&this.changePage.emit({page:1,pageSize:Number(n)})}updatePages(n,i,r){let d=Math.ceil(i/r);this.pageCount=d;let x=[],b=7;if(d<=b){this.pages=[...Array(d).keys()].map(G=>G+1);return}let $=Math.max(1,n-3),H=Math.min(d,n+3),W=H-$+1;W<b&&(H=Math.min(H+(b-W),d)),W=H-$+1,W<b&&($=Math.max(1,$-(b-W)));for(let G=$;G<=H;G++)x.push(G);$!=1&&(x.splice(0,2),x.unshift(1,-1)),H!=d&&(x.splice(x.length-2),x.push(-1,d)),this.pages=x}};t.\u0275fac=function(i){return new(i||t)(E(He,8))},t.\u0275cmp=h({type:t,selectors:[["mz-pagination"]],inputs:{length:"length",page:"page",pageSize:"pageSize",pageSizeOptions:"pageSizeOptions"},outputs:{changePage:"changePage"},standalone:!0,features:[fe,v],decls:17,vars:8,consts:[["c",""],[1,"pagination-wrapper"],["aria-label","pagination",1,"pagination-nav"],[1,"page-link",3,"click","ngClass"],[1,"sr-only"],["key","chevron-left"],[4,"ngFor","ngForOf"],["key","chevron-right"],[1,"pagination-size"],["name","pageSizeControl",1,"page-size-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],["class","page-ellipsis page-link disabled",4,"ngIf"],["class","page-link",3,"ngClass","click",4,"ngIf"],[1,"page-ellipsis","page-link","disabled"],[3,"value"]],template:function(i,r){if(i&1){let d=S();s(0,"div",1)(1,"nav",2)(2,"button",3),_("click",function(){return C(d),y(r.changePageNumber(r.page-1))}),s(3,"span",4),g(4,"Previous page"),p(),u(5,"mz-svg-icon",5),p(),c(6,et,3,2,"ng-container",6),s(7,"button",3),_("click",function(){return C(d),y(r.changePageNumber(r.page+1))}),s(8,"span",4),g(9,"Next page"),p(),u(10,"mz-svg-icon",7),p()(),s(11,"div",8),g(12," Show "),s(13,"select",9,0),_("change",function(){C(d);let b=z(14);return y(r.changePageSize(b.value))}),c(15,tt,2,3,"option",10),p(),g(16," per page "),p()()}i&2&&(l(2),a("ngClass",I(4,Le,r.page==1)),l(4),a("ngForOf",r.pages),l(),a("ngClass",I(6,Le,r.page==r.pageCount)),l(8),a("ngForOf",r.pageSizeOptions))},dependencies:[f,w,N,T,O]});let e=t;return e})();var it=(e,t)=>({loading:e,failed:t}),nt=e=>({"has-overlay":e}),rt=e=>({$implicit:e});function ot(e,t){e&1&&(s(0,"div",8),u(1,"mz-spinner",9),p())}function at(e,t){if(e&1&&(s(0,"caption"),g(1),p()),e&2){let o=m();l(),Se(" ",(o.model.page-1)*o.model.pageSize+1," - ",(o.model.page-1)*o.model.pageSize+o.model.results.length," of ",o.model.totalResults," results ")}}function st(e,t){e&1&&F(0)}function lt(e,t){e&1&&F(0)}function pt(e,t){if(e&1&&(k(0),c(1,lt,1,0,"ng-container",11),M()),e&2){let o=t.$implicit,n=m(2);l(),a("ngTemplateOutlet",n.body)("ngTemplateOutletContext",I(2,rt,o))}}function mt(e,t){if(e&1&&(k(0),c(1,pt,2,4,"ng-container",10),M()),e&2){let o=m();l(),a("ngForOf",o.model.results)}}function ct(e,t){if(e&1){let o=S();s(0,"div",12)(1,"mz-pagination",13),_("changePage",function(i){C(o);let r=m(),d=z(1);return y(r.changePage(i,d))}),p()()}if(e&2){let o=m();l(),a("length",o.model.totalResults)("page",o.model.page)("pageSize",o.model.pageSize)}}function dt(e,t){e&1&&(s(0,"div",14)(1,"div",15),g(2,"No results found"),p()())}function ut(e,t){if(e&1){let o=S();s(0,"div",14)(1,"div",15),u(2,"mz-svg-icon",16),g(3," Something went wrong "),p(),s(4,"div"),g(5,"Unexpected error, "),s(6,"a",17),_("click",function(){C(o);let i=m();return y(i.searchAgain())}),g(7,"try searching again"),p(),g(8,"."),p()()}}var se=(()=>{let t=class t{constructor(){this.loading=!1,this.options={hidePagination:!1},this.pageChange=new P}changePage(n,i){this.pageChange.emit(n),setTimeout(()=>{i.scrollIntoView({behavior:"smooth",block:"start"})})}searchAgain(){this.pageChange.emit({page:this.model?.page||1,pageSize:this.model?.pageSize||20})}get state(){return this.loading?"loading":this.error?"failed":"succeeded"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=h({type:t,selectors:[["mz-result-table"]],inputs:{loading:"loading",error:"error",model:"model",header:"header",body:"body",options:"options"},outputs:{pageChange:"pageChange"},standalone:!0,features:[v],decls:12,vars:14,consts:[["tableRef",""],[1,"result-table",3,"ngClass"],["class","loading-overlay-spinner",4,"ngIf"],[1,"table",3,"ngClass"],[4,"ngIf"],[4,"ngTemplateOutlet"],["class","table-pagination",4,"ngIf"],["class","state-message",4,"ngIf"],[1,"loading-overlay-spinner"],["size","large"],[4,"ngFor","ngForOf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"table-pagination"],[3,"changePage","length","page","pageSize"],[1,"state-message"],[1,"title"],["key","x-circle","type","solid",1,"text-danger"],[1,"link-action",3,"click"]],template:function(i,r){i&1&&(s(0,"div",1,0),c(2,ot,2,0,"div",2),s(3,"table",3),c(4,at,2,3,"caption",4),s(5,"thead"),c(6,st,1,0,"ng-container",5),p(),s(7,"tbody"),c(8,mt,2,1,"ng-container",4),p()(),c(9,ct,2,3,"div",6)(10,dt,3,0,"div",7)(11,ut,9,0,"div",7),p()),i&2&&(a("ngClass",R(9,it,r.state==="loading",r.state==="failed")),l(2),a("ngIf",r.state==="loading"),l(),a("ngClass",I(12,nt,r.state==="loading")),l(),a("ngIf",r.state==="succeeded"&&r.model&&r.model.results.length>0),l(2),a("ngTemplateOutlet",r.header),l(2),a("ngIf",r.state=="succeeded"&&r.model),l(),a("ngIf",r.state==="succeeded"&&r.model&&r.model.results.length>0&&!(r.options!=null&&r.options.hidePagination)),l(),a("ngIf",r.state=="succeeded"&&(r.model==null||r.model.results==null?null:r.model.results.length)===0),l(),a("ngIf",r.state=="failed"))},dependencies:[f,w,N,T,V,ie,B,O]});let e=t;return e})();function gt(e,t){e&1&&(s(0,"div",1)(1,"div",2),u(2,"div",3),p()())}var je=(()=>{let t=class t{constructor(n){this.router=n,this.isLoading=!1,this.expectedMilisecondsDelay=1e3,this.subs=new X}ngOnInit(){let n=this.router.events.pipe(oe(i=>i instanceof De||i instanceof ze||i instanceof ke));this.subs.add(le(this.router.events.pipe(oe(i=>i instanceof ae),me(this.expectedMilisecondsDelay)),n).pipe(pe(1),ce()).subscribe(i=>this.isLoading=i instanceof ae)),this.subs.add(n.subscribe(()=>this.isLoading=!1))}ngOnDestroy(){this.subs.unsubscribe()}};t.\u0275fac=function(i){return new(i||t)(E(Me))},t.\u0275cmp=h({type:t,selectors:[["mz-page-loading-indicator"]],inputs:{isLoading:"isLoading"},standalone:!0,features:[v],decls:1,vars:1,consts:[["class","progress-bar-container",4,"ngIf"],[1,"progress-bar-container"],[1,"progress-bar","progress-bar-indeterminate"],[1,"progress-bar-value"]],template:function(i,r){i&1&&c(0,gt,3,0,"div",0),i&2&&a("ngIf",r.isLoading)},dependencies:[f,T]});let e=t;return e})();function ft(e,t){e&1&&F(0)}function ht(e,t){if(e&1&&(s(0,"div",6),c(1,ft,1,0,"ng-container",7),p()),e&2){let o=m();l(),a("ngTemplateOutlet",o.body)}}function vt(e,t){e&1&&F(0)}function _t(e,t){if(e&1&&(s(0,"div",8),c(1,vt,1,0,"ng-container",7),p()),e&2){let o=m();l(),a("ngTemplateOutlet",o.footer)}}var Be=(()=>{let t=class t{constructor(){this.title="",this.type="info"}ngOnInit(){}getAlertClass(){return`alert-${this.type}`}getAlertIcon(){let n="";return this.type==="info"?n="information-circle":this.type==="success"?n="check-circle":this.type==="error"?n="x-circle":this.type==="warning"&&(n="exclamation"),n}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=h({type:t,selectors:[["mz-alert"]],inputs:{title:"title",type:"type",body:"body",footer:"footer"},standalone:!0,features:[v],decls:9,vars:5,consts:[[3,"className"],[1,"alert-icon"],["type","solid",3,"key"],[1,"alert-title"],["class","alert-body",4,"ngIf"],["class","alert-footer",4,"ngIf"],[1,"alert-body"],[4,"ngTemplateOutlet"],[1,"alert-footer"]],template:function(i,r){i&1&&(s(0,"div",0)(1,"div")(2,"div",1),u(3,"mz-svg-icon",2),p(),s(4,"div",3)(5,"strong"),g(6),p()()(),c(7,ht,2,1,"div",4)(8,_t,2,1,"div",5),p()),i&2&&(a("className","alert alert-"+r.type),l(3),a("key",r.getAlertIcon()),l(3),U(r.title),l(),a("ngIf",r.body),l(),a("ngIf",r.footer))},dependencies:[f,T,V,O]});let e=t;return e})();var yt=e=>({toggled:e}),xt=(e,t,o)=>({previous:e,current:t,unvisited:o});function bt(e,t){e&1&&u(0,"div",16)}function St(e,t){e&1&&(s(0,"div",17),u(1,"mz-svg-icon",18),p())}function Tt(e,t){e&1&&(s(0,"div",17),u(1,"div",19),p())}function Et(e,t){e&1&&u(0,"div",17)}function It(e,t){e&1&&u(0,"div",20)}function wt(e,t){if(e&1){let o=S();s(0,"a",21),_("click",function(){C(o);let i=m().$implicit,r=m();return y(r.goToStep(i))}),g(1),p()}if(e&2){let o=m().$implicit;l(),j(" ",o.name,"")}}function Dt(e,t){if(e&1&&(s(0,"div",22),g(1),p()),e&2){let o=m().$implicit;l(),j(" ",o.name," ")}}function zt(e,t){if(e&1&&(s(0,"div",22),g(1),p()),e&2){let o=m().$implicit;l(),j(" ",o.name," ")}}function kt(e,t){if(e&1){let o=S();s(0,"button",23),_("click",function(){C(o);let i=m(2);return y(i.toggle())}),u(1,"mz-svg-icon",24),p()}}function Mt(e,t){if(e&1){let o=S();s(0,"button",23),_("click",function(){C(o);let i=m(2);return y(i.toggle())}),u(1,"mz-svg-icon",25),p()}}function Ot(e,t){if(e&1&&(s(0,"div",5),k(1),s(2,"div",6),u(3,"div",7),c(4,bt,1,0,"div",8)(5,St,2,0,"div",9)(6,Tt,2,0,"div",9)(7,Et,1,0,"div",9)(8,It,1,0,"div",10),u(9,"div",11),p(),c(10,wt,2,1,"a",12)(11,Dt,2,1,"div",13)(12,zt,2,1,"div",13),s(13,"div",14),c(14,kt,2,0,"button",15)(15,Mt,2,0,"button",15),p(),M(),p()),e&2){let o=t.index,n=m();a("ngClass",Ee(11,xt,o<n.currentStep,o===n.currentStep,o>n.currentStep)),l(4),a("ngIf",o>0),l(),a("ngIf",o<n.currentStep),l(),a("ngIf",o===n.currentStep),l(),a("ngIf",o>n.currentStep),l(),a("ngIf",o<n.steps.length-1),l(2),a("ngIf",o<n.currentStep),l(),a("ngIf",o===n.currentStep),l(),a("ngIf",o>n.currentStep),l(2),a("ngIf",!n.toggled),l(),a("ngIf",n.toggled)}}var We=(()=>{let t=class t{constructor(){this.steps=[],this.currentStep=0,this.stepChange=new P,this.toggled=!0,this.subs=new X}goToStep(n){this.stepChange.emit(n)}toggle(){this.toggled=!this.toggled}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=h({type:t,selectors:[["mz-wizard-progress-tracker"]],inputs:{steps:"steps",currentStep:"currentStep"},outputs:{stepChange:"stepChange"},standalone:!0,features:[v],decls:6,vars:6,consts:[[1,"wizard-progress-tracker"],[1,"direction-container"],[1,"steps-count"],[1,"wizard-steps-container",3,"ngClass"],["class","wizard-step",3,"ngClass",4,"ngFor","ngForOf"],[1,"wizard-step",3,"ngClass"],[1,"wizard-step-icon-container"],[1,"spacer","left"],["class","step-line left",4,"ngIf"],["class","wizard-step-icon",4,"ngIf"],["class","step-line step-line-right",4,"ngIf"],[1,"spacer","right"],["class","step-desc",3,"click",4,"ngIf"],["class","step-desc",4,"ngIf"],[1,"toggable-icon"],[3,"click",4,"ngIf"],[1,"step-line","left"],[1,"wizard-step-icon"],["key","check-circle","type","solid"],[1,"step-inner-circle"],[1,"step-line","step-line-right"],[1,"step-desc",3,"click"],[1,"step-desc"],[3,"click"],["key","chevron-down"],["key","chevron-up"]],template:function(i,r){i&1&&(s(0,"div",0)(1,"div",1)(2,"span",2),g(3),p(),s(4,"div",3),c(5,Ot,16,15,"div",4),p()()()),i&2&&(l(3),be("Step ",r.currentStep+1," of ",r.steps.length,""),l(),a("ngClass",I(4,yt,r.toggled)),l(),a("ngForOf",r.steps))},dependencies:[f,w,N,T,O]});let e=t;return e})();var Pt=["datePicker"],Ge=(()=>{let t=class t{constructor(n){this._cd=n,this.lz=i=>("0"+i).slice(-2),this.formatDate=i=>`${i.getMonth()+1}/${i.getDate()}/${i.getFullYear()}`,this.formatTime=i=>`${this.lz(i.getHours())}:${this.lz(i.getMinutes())}`,this.formatDateTime=(i,r)=>`${this.formatDate(i)} ${r}`,this.limitDate=i=>(this.min&&(i=new Date(Math.max(i.getTime(),this.min.getTime()))),this.max&&(i=new Date(Math.min(i.getTime(),this.max.getTime()))),i),this.onTimeHourPending=!1,this.type="outline",this.disabled=!1,this.onChange=i=>{},this.onTouched=()=>{}}writeValue(n){if(n){let i=new Date(n);this.date=new Date(i.getFullYear(),i.getMonth(),i.getDate()),this.time=this.formatTime(n)}else this.date=void 0,this.time=void 0;this._cd.markForCheck()}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}updateDate(n){let i=n.target,r=new Date(i.value);isNaN(r.getTime())?(this.date=void 0,this.time=void 0):(r=this.limitDate(r),this.date=new Date(r.getFullYear(),r.getMonth(),r.getDate()),(this.time===void 0||this.time==="")&&(this.time=this.formatTime(new Date))),this.propagateModelChange(),this._cd.markForCheck()}updateTime(n){let i=n.target;if(!this.onTimeHourPending&&!i.value){this.onTimeHourPending=!0;return}if(this.onTimeHourPending=!1,!i.value)this.date=void 0;else if(!this.date||isNaN(this.date.getTime())){let r=this.limitDate(this.min??new Date);this.date=new Date(r.getFullYear(),r.getMonth(),r.getDate())}this.time=i.value,this.propagateModelChange()}updateDateEvent(n){if(n.value){let i=this.limitDate(new Date(n.value));this.date=new Date(i.getFullYear(),i.getMonth(),i.getDate()),(this.time===void 0||this.time==="")&&(this.time=this.formatTime(new Date))}else this.date=void 0,this.time=void 0;this.propagateModelChange(),this._cd.markForCheck()}focusOnDateInput(){this.datepicker.open()}propagateModelChange(){if(this.time&&this.date){let n=this.formatDateTime(this.date,this.time);this.onChange(new Date(n))}else this.onChange(void 0)}};t.\u0275fac=function(i){return new(i||t)(E(Ie))},t.\u0275cmp=h({type:t,selectors:[["mz-datetime"]],viewQuery:function(i,r){if(i&1&&xe(Pt,5),i&2){let d;Q(d=Y())&&(r.datepicker=d.first)}},inputs:{min:"min",max:"max",disabled:"disabled"},standalone:!0,features:[Te([{provide:Oe,useExisting:de(()=>t),multi:!0}]),v],decls:11,vars:8,consts:[["datePicker",""],[1,"flex"],[1,"field-control-combo"],["type","text","ngDefaultControl","",1,"field-control",3,"change","dateChange","value","min","max","matDatepicker","disabled"],[1,"field-control-addon"],["type","button",1,"button","button-secondary","button-icon",3,"click","disabled"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","2",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","d","M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"],[1,"field-control-group","mt-1","ml-6"],["type","time","ngDefaultControl","",1,"field-control",3,"change","value","disabled"]],template:function(i,r){if(i&1){let d=S();s(0,"div",1)(1,"div",2)(2,"input",3),_("change",function(b){return C(d),y(r.updateDate(b))})("dateChange",function(b){return C(d),y(r.updateDateEvent(b))}),p(),s(3,"div",4)(4,"button",5),_("click",function(){C(d);let b=z(8);return y(b.open())}),L(),s(5,"svg",6),u(6,"path",7),p()(),he(),u(7,"mat-datepicker",null,0),p()(),s(9,"div",8)(10,"input",9),_("change",function(b){return C(d),y(r.updateTime(b))}),p()()()}if(i&2){let d=z(8);l(2),a("value",r.date)("min",r.min)("max",r.max)("matDatepicker",d)("disabled",r.disabled),l(2),a("disabled",r.disabled),l(6),a("value",r.time)("disabled",r.disabled)}},dependencies:[f,Ve,Fe,Ne],styles:["input[_ngcontent-%COMP%]:disabled, button[_ngcontent-%COMP%]:disabled{opacity:.6}"]});let e=t;return e})();var Ft=["*"];function Nt(e,t){e&1&&Ce(0,0,["*ngTemplateOutlet","body"])}function Vt(e,t){if(e&1&&(s(0,"div",1),c(1,Nt,1,0,"ng-content",2),p()),e&2){let o=m();l(),a("ngTemplateOutlet",o.body)}}var ne=(()=>{let t=class t{constructor(n){this.data=n}ngOnInit(){this.body=this.data.body}};t.\u0275fac=function(i){return new(i||t)(E(Ae))},t.\u0275cmp=h({type:t,selectors:[["mz-inline-message-dialog"]],standalone:!0,features:[v],ngContentSelectors:Ft,decls:1,vars:1,consts:[["class","body",4,"ngIf"],[1,"body"],[4,"ngTemplateOutlet"]],template:function(i,r){i&1&&(_e(),c(0,Vt,2,1,"div",0)),i&2&&a("ngIf",r.body)},dependencies:[ee,f,T,V,J,te],styles:["[_nghost-%COMP%]{display:block;background:#fff;border-radius:8px;padding:8px 16px}"]});let e=t;return e})();var re=(()=>{let t=class t{constructor(n){this.dialog=n}ngOnInit(){}openDialog(){this.dialog.open(ne,{minWidth:"300px",data:{body:this.body}})}};t.\u0275fac=function(i){return new(i||t)(E(Re))},t.\u0275cmp=h({type:t,selectors:[["mz-inline-message"]],inputs:{body:"body"},standalone:!0,features:[v],decls:3,vars:0,consts:[[1,"wrapper"],["type","button",1,"inline-message-btn",3,"click"]],template:function(i,r){i&1&&(s(0,"div",0)(1,"button",1),_("click",function(){return r.openDialog()}),g(2,"i"),p()())},dependencies:[ee,f,J,te],styles:[".wrapper[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{display:inline}.inline-message-btn[_ngcontent-%COMP%]{cursor:pointer;border-radius:50%;color:#fff;background-color:#4b5563;width:20px;height:20px;text-align:center;margin:0 5px}"]});let e=t;return e})();var Rt=["itemTemplate"],$t=e=>({$implicit:e}),Ht=e=>({"scroll-item-selected":e});function Lt(e,t){e&1&&F(0)}function jt(e,t){if(e&1&&(k(0),c(1,Lt,1,0,"ng-container",5),M()),e&2){let o=t.$implicit,n=m(2);l(),a("ngTemplateOutlet",n.itemTemplate)("ngTemplateOutletContext",I(2,$t,o))}}function Bt(e,t){if(e&1&&(k(0),c(1,jt,2,4,"ng-container",4),M()),e&2){let o=m();l(),a("ngForOf",o.items)}}function Wt(e,t){if(e&1){let o=S();s(0,"div",7),_("click",function(){let i=C(o).$implicit,r=m(2);return y(r.onItemClick(i))}),g(1),p()}if(e&2){let o=t.$implicit,n=m(2);a("ngClass",I(2,Ht,n.selectedItem===o)),l(),j(" ",o.label," ")}}function Gt(e,t){if(e&1&&c(0,Wt,2,4,"div",6),e&2){let o=m();a("ngForOf",o.items)}}function Ut(e,t){e&1&&(s(0,"div",8),u(1,"mz-spinner",9),p())}var Ue=(()=>{let t=class t{constructor(){this.items=[],this.isLoading=!1,this.containerHeight="24rem",this.itemSelected=new P,this.loadMore=new P,this.selectedItem=null}onContainerScroll(n){let i=n.target;!this.isLoading&&i.offsetHeight+i.scrollTop>=i.scrollHeight&&this.loadMore.emit(!0)}onItemClick(n){this.selectedItem=n,this.itemSelected.emit(n)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=h({type:t,selectors:[["mz-infinite-scroll"]],contentQueries:function(i,r,d){if(i&1&&ye(d,Rt,5),i&2){let x;Q(x=Y())&&(r.itemTemplate=x.first)}},inputs:{items:"items",isLoading:"isLoading",containerHeight:"containerHeight"},outputs:{itemSelected:"itemSelected",loadMore:"loadMore"},standalone:!0,features:[v],decls:5,vars:5,consts:[["defaultItems",""],[1,"infinite-scroll-container","overflow-auto",3,"scroll"],[4,"ngIf","ngIfElse"],["class","scroll-spinner-container",4,"ngIf"],[4,"ngFor","ngForOf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","scroll-item",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"scroll-item",3,"click","ngClass"],[1,"scroll-spinner-container"],["size","medium"]],template:function(i,r){if(i&1){let d=S();s(0,"div",1),_("scroll",function(b){return C(d),y(r.onContainerScroll(b))}),c(1,Bt,2,1,"ng-container",2)(2,Gt,1,1,"ng-template",null,0,Z)(4,Ut,2,0,"div",3),p()}if(i&2){let d=z(3);ve("height",r.containerHeight),l(),a("ngIf",r.itemTemplate)("ngIfElse",d),l(3),a("ngIf",r.isLoading)}},dependencies:[f,w,N,T,V,B]});let e=t;return e})();var qe=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=ge({type:t}),t.\u0275inj=ue({providers:[we],imports:[f,Pe,O,B,We,Be,se,Ue,ie,je,Ge,re,ne]});let e=t;return e})();function qt(e,t){e&1&&(s(0,"p"),g(1,"A simple inline mesage with text."),p())}var Xr=(()=>{let t=class t{constructor(){}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=h({type:t,selectors:[["app-inline-message"]],standalone:!0,features:[v],decls:3,vars:1,consts:[["bodyTemplate",""],[3,"body"]],template:function(i,r){if(i&1&&(s(0,"mz-inline-message",1),c(1,qt,2,0,"ng-template",null,0,Z),p()),i&2){let d=z(2);a("body",d)}},dependencies:[f,qe,re]});let e=t;return e})();export{Xr as InlineMessageComponent};