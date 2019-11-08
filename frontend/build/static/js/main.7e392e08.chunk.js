(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{32:function(t,e,o){t.exports=o(74)},37:function(t,e,o){},73:function(t,e,o){},74:function(t,e,o){"use strict";o.r(e);var r=o(0),n=o.n(r),a=o(10),i=o.n(a),s=(o(37),o(13)),u=o(1),c=o(2),p=o(5),l=o(3),h=o(4),d=o(6),g=o(11),m=function(t){function e(t){var o;return Object(u.a)(this,e),(o=Object(p.a)(this,Object(l.a)(e).call(this,t))).state={mapStyle:{width:"100%",height:"100%"}},o.adjustMap=o.adjustMap.bind(Object(d.a)(o)),o}return Object(h.a)(e,t),Object(c.a)(e,[{key:"adjustMap",value:function(t,e){if(this.props.route.legth>0){var o=t.google,r=(t.markers,new o.maps.LatLngBounds),n=this.props.route.bounds.northeast.lat,a=this.props.route.bounds.northeast.lng,i=this.props.route.bounds.southwest.lat,s=this.props.route.bounds.southwest.lng;r.extend(new o.maps.LatLng(n,a)),r.extend(new o.maps.LatLng(i,s)),e.fitBounds(r)}}},{key:"render",value:function(){var t=this;if(this.props.showRoute)var e=this.props.route.overview_polyline.complete_overview.map((function(t){return{lat:t[0],lng:t[1]}}));if(this.props.showDetourPoint&&this.props.showRoute){var o={},r=e.length;o=e[Math.floor(this.props.detourLocation/100*r)-1]}var a=!1;if(this.props.detourOptions.length>0){a=!0;var i=this.props.detourOptions.map((function(e){var o=!1;if(t.props.detourHighlight.forEach((function(t){t.id===e.id&&(o=t.highlight)})),o)var r={url:"http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|FF0000|40|_|%E2%80%A2",scaledSize:new t.props.google.maps.Size(20,30)};else r={url:"http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|0091ff|40|_|%E2%80%A2",scaledSize:new t.props.google.maps.Size(20,30)};return n.a.createElement(g.Marker,{position:{lat:e.geometry.location.lat,lng:e.geometry.location.lng},icon:r})}))}return n.a.createElement(g.Map,{google:this.props.google,zoom:9,style:this.state.mapStyle,initialCenter:{lat:33.749,lng:-84.388},onReady:this.adjustMap},this.props.showRoute?n.a.createElement(g.Polyline,{defaultPosition:this.props.center,path:e,geodesic:!0,strokeColor:"#007bff",strokeOpacity:1,strokeWeight:5}):n.a.createElement("div",null),this.props.showDetourPoint?n.a.createElement(g.Marker,{position:o,color:"#3349FF"}):n.a.createElement("div",null),this.props.showDetourPoint?n.a.createElement(g.Circle,{radius:parseFloat(this.props.detourRadius),center:o,strokeColor:"transparent",strokeOpacity:0,strokeWeight:5,fillColor:"#FF0000",fillOpacity:.2}):n.a.createElement("div",null),a?i:n.a.createElement("div",null))}}]),e}(n.a.Component),O=Object(g.GoogleApiWrapper)({apiKey:"AIzaSyArWVAF5NWcXq8RenpdK2vtTZNSX3zaKG4"})(m),f=o(14),b=o.n(f),D=function(){function t(){Object(u.a)(this,t)}return Object(c.a)(t,[{key:"getRoute",value:function(t,e,o,r){var n={};switch(o){case"Address":n={type:"Address",origin:t,destination:e},r.waypoint&&(n.waypoint=r.waypoint.placeId)}return new Promise((function(t,e){b.a.get("http://www.jauntdetour.com/backend/route",{headers:{"Content-Type":"application/json"},params:n}).then((function(e){t(e.data)})).catch((function(t){console.log("ERROR: Unable to get response from the server\n User input may be formatted incorrectly"+t.response),e(t)}))}))}}]),t}(),E=function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(p.a)(this,Object(l.a)(e).call(this))).requestRoute=t.requestRoute.bind(Object(d.a)(t)),t}return Object(h.a)(e,t),Object(c.a)(e,[{key:"requestRoute",value:function(t){var e=this;t.preventDefault();var o=t.target[0].value,r=t.target[1].value;this.props.setOrigin(o),this.props.setDestination(r),(new D).getRoute(o,r,"Address",{}).then((function(t){t.routes.length>0&&e.props.setRoute(t.routes[0])})).catch((function(t){console.log("Error: "+t)}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"user-input container"},n.a.createElement("form",{onSubmit:this.requestRoute},n.a.createElement("div",{className:"form-group "},n.a.createElement("input",{className:"form-control-lg route-input",type:"text",placeholder:"Origin"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{className:"form-control-lg route-input",type:"text",placeholder:"Destination"})),n.a.createElement("div",{className:"form-group "},n.a.createElement("input",{className:"btn-default form-control-lg route-submit",type:"submit",value:"Get Route"}))))}}]),e}(n.a.Component),v=function(t){return n.a.createElement("div",{className:"Button"},n.a.createElement("button",{disabled:t.disabledCriteria,onClick:t.onClick,className:t.className,id:t.id},t.text))},y=function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(p.a)(this,Object(l.a)(e).call(this))).updateDetourLocation=t.updateDetourLocation.bind(Object(d.a)(t)),t}return Object(h.a)(e,t),Object(c.a)(e,[{key:"updateDetourLocation",value:function(t){this.props.setDetourLocation(t)}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"slide-container"},n.a.createElement("h6",null,"Location"),n.a.createElement("input",{type:"range",min:"1",max:"100",defaultValue:"50",onChange:function(e){return t.updateDetourLocation(e.target.value)},className:"slider slider-location",id:"myRange"}))}}]),e}(n.a.Component),j=function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(p.a)(this,Object(l.a)(e).call(this))).updateDetourRadius=t.updateDetourRadius.bind(Object(d.a)(t)),t}return Object(h.a)(e,t),Object(c.a)(e,[{key:"updateDetourRadius",value:function(t){this.props.setDetourRadius(t)}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"slidecontainer"},n.a.createElement("h6",null,"Radius"),n.a.createElement("input",{type:"range",min:"1",max:"100000",defaultValue:"20000",onChange:function(e){return t.updateDetourRadius(e.target.value)},className:"slider",id:"detourRadius"}))}}]),e}(n.a.Component),R=function(){function t(){Object(u.a)(this,t)}return Object(c.a)(t,[{key:"getDetours",value:function(t,e,o,r){var n={searchText:r,lat:t,lng:e,radius:o};return new Promise((function(t,e){b.a.get("http://www.jauntdetour.com/backend/places",{headers:{"Content-Type":"application/json"},params:n}).then((function(e){t(e.data)})).catch((function(t){console.log("ERROR: Unable to get response from the server\n User input may be formatted incorrectly"+t.response),e(t)}))}))}}]),t}(),w=function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(p.a)(this,Object(l.a)(e).call(this))).getDetours=t.getDetours.bind(Object(d.a)(t)),t}return Object(h.a)(e,t),Object(c.a)(e,[{key:"getDetours",value:function(){var t=this,e=new R,o=this.props.route.overview_polyline.decodedPoints.map((function(t){return{lat:t[0],lng:t[1]}})),r=o.length,n=o[Math.floor(this.props.detourLocation/100*r)];e.getDetours(n.lat,n.lng,this.props.detourRadius,"Hike").then((function(e){t.props.setDetourOptions(e.results);var o=[];e.results.forEach((function(t){o.push({id:t.id,highlight:!1})})),t.props.setDetourHighlight(o)})).catch((function(t){console.log("Error: "+t)}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"detour-form container"},n.a.createElement("h4",null,"Detour Settings"),n.a.createElement(y,{setDetourLocation:this.props.setDetourLocation}),n.a.createElement(j,{setDetourRadius:this.props.setDetourRadius}),n.a.createElement(v,{onClick:this.getDetours,className:"btn btn-primary main-button",id:"get-detours-button",text:"Get detours"}))}}]),e}(n.a.Component),T=function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(p.a)(this,Object(l.a)(e).call(this))).addDetour=t.addDetour.bind(Object(d.a)(t)),t.highlight=t.highlight.bind(Object(d.a)(t)),t}return Object(h.a)(e,t),Object(c.a)(e,[{key:"highlight",value:function(){var t=this,e=[];this.props.detourHighlight.forEach((function(o){var r=!1;o.id===t.props.id&&(r=!0),e.push({id:o.id,highlight:r})})),this.props.setDetourHighlight(e)}},{key:"addDetour",value:function(){var t=this;(new D).getRoute(this.props.origin,this.props.destination,"Address",{waypoint:{placeId:this.props.placeId}}).then((function(e){e.routes.length>0&&(t.props.setRoute(e.routes[0]),t.props.clearDetourOptions())})).catch((function(t){console.log("Error: "+t)}))}},{key:"render",value:function(){return n.a.createElement("li",{onMouseEnter:this.highlight,className:"list-group-item list-group-hover",key:this.props.id.toString()},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("h5",null,this.props.name),n.a.createElement("p",null,"Rating: ",this.props.rating)),n.a.createElement("div",{className:"col-3"},n.a.createElement(v,{onClick:this.addDetour,className:"btn detour-option-btn",id:"${option.name}-detour-button",text:"+"}))))}}]),e}(n.a.Component),N=function(t){function e(){return Object(u.a)(this,e),Object(p.a)(this,Object(l.a)(e).call(this))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this,e=this.props.detourOptions.map((function(e){var o=e.geometry.location.lat,r=e.geometry.location.lng,a=e.id,i=e.place_id;return n.a.createElement(T,{detourOptions:t.props.detourOptions,detourHighlight:t.props.detourHighlight,origin:t.props.origin,destination:t.props.destination,name:e.name,lat:o,lng:r,id:a,rating:e.rating,placeId:i,setRoute:t.props.setRoute,setDetourOptions:t.props.setDetourOptions,setDetourHighlight:t.props.setDetourHighlight,clearDetourOptions:t.props.clearDetourOptions})}));return n.a.createElement("div",{className:"detour-options"},n.a.createElement("div",{className:"container"},n.a.createElement("h4",null,"Detour Options")),n.a.createElement("ul",{className:"detour-options-list list-group"},e))}}]),e}(n.a.Component),k=function(t){function e(){return Object(u.a)(this,e),Object(p.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"app-container row"},n.a.createElement("div",{className:"side-bar"},n.a.createElement(E,{origin:this.props.origin,destination:this.props.destination,setOrigin:this.props.setOrigin,setDestination:this.props.setDestination,setRoute:this.props.setRoute}),this.props.showDetourForm?n.a.createElement(w,{setDetourLocation:this.props.setDetourLocation,setDetourRadius:this.props.setDetourRadius,setDetourOptions:this.props.setDetourOptions,setDetourHighlight:this.props.setDetourHighlight,detourLocation:this.props.detourLocation,detourRadius:this.props.detourRadius,route:this.props.route}):n.a.createElement("div",{className:"container add-detour-container"},n.a.createElement(v,{disabledCriteria:!this.props.showDetourButton,onClick:this.props.getDetourForm,className:"btn btn-primary add-detour-btn",id:"add-detour-button",text:"+ Add Detour"})),this.props.showDetourOptions?n.a.createElement(N,{origin:this.props.origin,destination:this.props.destination,detourOptions:this.props.detourOptions,detourHighlight:this.props.detourHighlight,setRoute:this.props.setRoute,setDetourOptions:this.props.setDetourOptions,setDetourHighlight:this.props.setDetourHighlight,clearDetourOptions:this.props.clearDetourOptions}):n.a.createElement("div",null)),n.a.createElement("div",{className:"map-container"},n.a.createElement(O,{showRoute:this.props.showRoute,showDetourPoint:this.props.showDetourPoint,detourLocation:this.props.detourLocation,detourRadius:this.props.detourRadius,detourOptions:this.props.detourOptions,detourHighlight:this.props.detourHighlight,route:this.props.route})))}}]),e}(n.a.Component),_=o(16);function S(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}var L=Object(_.b)((function(t){return function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?S(o,!0).forEach((function(e){Object(s.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):S(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},t)}),(function(t){return{setOrigin:function(e){return t({type:"SET_ORIGIN",data:{origin:e}})},setDestination:function(e){return t({type:"SET_DESTINATION",data:{destination:e}})},setRoute:function(e){return t({type:"SET_ROUTE",data:{route:e}})},getDetourForm:function(){return t({type:"GET_DETOUR_FORM"})},setDetourLocation:function(e){return t({type:"SET_DETOUR_LOCATION",data:{detourLocation:e}})},setDetourRadius:function(e){return t({type:"SET_DETOUR_RADIUS",data:{detourRadius:e}})},setDetourOptions:function(e){return t({type:"SET_DETOUR_OPTIONS",data:{detourOptions:e}})},setDetourHighlight:function(e){return t({type:"SET_DETOUR_HIGHLIGHT",data:{detourHighlight:e}})},clearDetourOptions:function(){return t({type:"CLEAR_DETOUR_OPTIONS"})}}}))(k);o(73);var P=function(){return n.a.createElement("div",null,n.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=o(15);function H(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function I(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?H(o,!0).forEach((function(e){Object(s.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):H(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var U={origin:"",destination:"",route:[],routeOptions:[],detourOptions:[],detourHighlight:[],detourLocation:50,detourRadius:2e4,showRoute:!1,showDetourButton:!1,showDetourForm:!1,showDetourOptions:!1,showDetourPoint:!1},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_ORIGIN":return I({},t,{origin:e.data.origin});case"SET_DESTINATION":return I({},t,{destination:e.data.destination});case"SET_ROUTE":return I({},t,{showRoute:!0,showDetourButton:!0,route:e.data.route});case"GET_DETOUR_FORM":return I({},t,{showDetourForm:!0,showDetourPoint:!0});case"SET_DETOUR_LOCATION":return I({},t,{detourLocation:e.data.detourLocation});case"SET_DETOUR_RADIUS":return I({},t,{detourRadius:e.data.detourRadius});case"SET_DETOUR_OPTIONS":return I({},t,{detourOptions:e.data.detourOptions,showDetourOptions:!0});case"SET_DETOUR_HIGHLIGHT":return I({},t,{detourHighlight:e.data.detourHighlight});case"CLEAR_DETOUR_OPTIONS":return I({},t,Object(s.a)({detourOptions:[],detourRadius:0,showDetourOptions:!1,showDetourForm:!1},"showDetourOptions",!1));default:return t}},F=Object(C.b)(A);i.a.render(n.a.createElement(_.a,{store:F},n.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.7e392e08.chunk.js.map