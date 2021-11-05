(this.webpackJsonpweathertoolkitsaga=this.webpackJsonpweathertoolkitsaga||[]).push([[0],{118:function(n,e,t){"use strict";t.r(e);var c,a,i,r,o,s,d=t(0),l=t.n(d),u=t(28),j=t.n(u),x=(t(53),t(43)),p=t(9),b="search",h="".concat(b,"/REQUEST_LOCATIONS"),O=("".concat(b,"/LOCATIONS_RECEIVED"),t(15)),f=function(n){var e;return null===(e=n.search)||void 0===e?void 0:e.searchInput},v=function(n){var e,t=null===(e=n.search)||void 0===e?void 0:e.locations;return t?t.map((function(n){return{name:n.name,id:Object(O.b)()}})):[]},m=Object(O.a)({name:"search",initialState:{locations:null,searchInput:""},reducers:{handleLoading:function(n){n.isLoading=!0},handleError:function(n){n.isLoading=!1,n.isFailed=!0},handleLocationsReceived:function(n,e){n.locations=e.payload,n.isLoading=!1,n.isFailed=!1},handleSearch:function(n,e){n.searchInput=e.payload}}}),y=m.actions,g=y.handleLoading,w=y.handleError,k=y.handleLocationsReceived,E=y.handleSearch,L=m.reducer,S="forecast",C="".concat(S,"/REQUEST_FORECAST"),_=("".concat(S,"/FORECAST_RECEIVED"),t(12)),N=t(13),R=N.a.div(c||(c=Object(_.a)(["\n  max-width: 80%;\n  min-width: 500px;\n  padding: 10px;\n"]))),F=t(3),I=function(){var n=Object(p.c)(v),e=Object(p.b)();return Object(F.jsx)(R,{children:Object(F.jsx)(x.ReactSearchAutocomplete,{items:n,onSearch:function(n){n.trim()&&(e(E(n)),e({type:h}))},onSelect:function(){e({type:C})},autoFocus:!0,placeholder:"Enter your location.."})})},T=N.a.div(a||(a=Object(_.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: aliceblue;\n  border-radius: 5%;\n  min-width: 600px;\n  padding: 40px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n\n  .city {\n    text-align: center;\n    font-size: 50px;\n    margin: 10px;\n  }\n\n  .today-weather {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .temp {\n    font-size: 60px;\n    margin: 10px;\n  }\n\n  .today-cast {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    margin: 10px;\n  }\n\n  .condition-text {\n    margin: 0;\n  }\n\n  .cast-icon {\n    display: flex;\n    justify-content: center;\n  }\n\n  .today-details p {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    font-size: 20px;\n    margin: 0px 10px;\n  }\n"]))),z=function(n){return n.forecast.todayCast},A=function(n){var e;return null===(e=n.forecast.weekCast)||void 0===e?void 0:e.forecastday},D=function(n){return n.forecast.isLoading},U=function(n){return n.forecast.isFailed},q=function(n){var e;return null===(e=n.forecast.location)||void 0===e?void 0:e.name},V=function(){var n=Object(p.c)(z),e=Object(p.c)(q),t=null===n||void 0===n?void 0:n.temp_c,c=null===n||void 0===n?void 0:n.condition.text,a="https:"+(null===n||void 0===n?void 0:n.condition.icon),i=null===n||void 0===n?void 0:n.feelslike_c,r=null===n||void 0===n?void 0:n.wind_kph,o=null===n||void 0===n?void 0:n.humidity;return Object(F.jsxs)(T,{children:[Object(F.jsx)("h2",{className:"city",children:e}),Object(F.jsxs)("div",{className:"today-weather",children:[Object(F.jsx)("div",{className:"today-temp",children:Object(F.jsxs)("div",{className:"temp",children:[t,"\u2103"]})}),Object(F.jsxs)("div",{className:"today-cast",children:[Object(F.jsx)("p",{className:"condition-text",children:c}),Object(F.jsx)("div",{className:"cast-icon",children:Object(F.jsx)("img",{src:a,alt:"cast icon"})})]})]}),Object(F.jsxs)("div",{className:"today-details",children:[Object(F.jsx)("p",{children:"Real Feel: ".concat(i," \xb0C")}),Object(F.jsx)("p",{children:"Humidity: ".concat(o,"%")}),Object(F.jsx)("p",{children:"Wind: ".concat(r," m/s")})]})]})},J=N.a.div(i||(i=Object(_.a)(["\n  background-color: lightpink;\n  font-size: 50px;\n  border-radius: 5%;\n  padding: 50px;\n"]))),M=function(){return Object(F.jsx)(J,{children:"Error!"})},Q=N.a.div(r||(r=Object(_.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding: 50px 0;\n\n  .cast-week-item {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    font-size: 18px;\n    background-color: papayawhip;\n    margin: 0 10px;\n    padding: 10px;\n    min-width: 100px;\n    border-radius: 5%;\n    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n  }\n"]))),X=function(){var n,e=null===(n=Object(p.c)(A))||void 0===n?void 0:n.slice(1,5);return Object(F.jsx)(Q,{children:null===e||void 0===e?void 0:e.map((function(n){return Object(F.jsxs)("div",{className:"cast-week-item",children:[Object(F.jsx)("p",{children:(e=n.date,new Date(e).toLocaleString("en-US",{weekday:"long"}))}),Object(F.jsx)("div",{className:"cast-week-icon",children:Object(F.jsx)("img",{src:n.day.condition.icon,alt:"forecast item icon"})}),Object(F.jsxs)("div",{children:[Object(F.jsx)("span",{children:n.day.avgtemp_c}),Object(F.jsx)("span",{children:"\u2103"})]})]},Object(O.b)());var e}))})},B=N.a.div(o||(o=Object(_.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),H=t(47),P=N.a.div(s||(s=Object(_.a)(["\n  position: relative;\n"]))),W=function(){return Object(F.jsx)(P,{children:Object(F.jsx)(H.CircleLoading,{})})},G=function(){var n=Object(p.c)(U),e=Object(p.c)(D),t=Object(p.c)(q);return Object(F.jsxs)(B,{children:[Object(F.jsx)(I,{}),n?Object(F.jsx)(M,{}):e?Object(F.jsx)(W,{}):t?Object(F.jsxs)("div",{children:[Object(F.jsx)(V,{}),Object(F.jsx)(X,{})]}):Object(F.jsx)("div",{})]})};var K=function(){return Object(F.jsx)(G,{})},Y=t(48),Z=t(14),$=Object(O.a)({name:"forecast",initialState:{isLoading:!1,isFailed:!1,todayCast:null,weekCast:null,location:null},reducers:{handleLoading:function(n){n.isLoading=!0},handleError:function(n){n.isLoading=!1,n.isFailed=!0},handleForecastReceived:function(n,e){n.todayCast=e.payload.current,n.weekCast=e.payload.forecast,n.location=e.payload.location,n.isLoading=!1,n.isFailed=!1}}}),nn=$.actions,en=nn.handleLoading,tn=nn.handleError,cn=nn.handleForecastReceived,an=$.reducer,rn=Object(Z.b)({forecast:an,search:L}),on=t(11),sn=t.n(on),dn=t(7),ln=t(31),un=t.n(ln),jn=sn.a.mark(pn),xn=sn.a.mark(bn);function pn(){var n,e;return sn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(dn.d)(f);case 3:return n=t.sent,t.next=6,Object(dn.c)(en());case 6:return t.next=8,Object(dn.b)(un.a,"https://api.weatherapi.com/v1/forecast.json?key=34e791de0bd74b92b08143557210211&q=".concat(n,"&days=10&aqi=no&alerts=no"));case 8:return e=t.sent,t.next=11,Object(dn.c)(cn(e.data));case 11:t.next=18;break;case 13:return t.prev=13,t.t0=t.catch(0),console.log(t.t0),t.next=18,Object(dn.c)(tn());case 18:case"end":return t.stop()}}),jn,null,[[0,13]])}function bn(){return sn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(dn.e)(C,pn);case 2:case"end":return n.stop()}}),xn)}var hn=sn.a.mark(fn),On=sn.a.mark(vn);function fn(){var n,e;return sn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(dn.c)(g());case 3:return t.next=5,Object(dn.d)(f);case 5:return n=t.sent,t.next=8,Object(dn.b)(un.a,"https://api.weatherapi.com/v1/search.json?key=34e791de0bd74b92b08143557210211&q=".concat(n));case 8:return e=t.sent,t.next=11,Object(dn.c)(k(e.data));case 11:t.next=18;break;case 13:return t.prev=13,t.t0=t.catch(0),console.log(t.t0),t.next=18,Object(dn.c)(w());case 18:case"end":return t.stop()}}),hn,null,[[0,13]])}function vn(){return sn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(dn.e)(h,fn);case 2:case"end":return n.stop()}}),On)}var mn=sn.a.mark(yn);function yn(){return sn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(dn.a)([bn(),vn()]);case 2:case"end":return n.stop()}}),mn)}var gn=function(n){var e=Object(Y.a)(),t=Object(Z.a)(e),c=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.c,a=Object(Z.d)(rn,n,c(t));return e.run(yn),a}();j.a.render(Object(F.jsx)(l.a.StrictMode,{children:Object(F.jsx)(p.a,{store:gn,children:Object(F.jsx)(K,{})})}),document.getElementById("root"))},53:function(n,e,t){}},[[118,1,2]]]);
//# sourceMappingURL=main.988a1ea4.chunk.js.map