(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){},107:function(e,t,a){},109:function(e,t,a){},111:function(e,t,a){},113:function(e,t,a){},115:function(e,t,a){},117:function(e,t,a){},168:function(e,t,a){},170:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),s=a(6),c=a(4),o=a(5),i=a(0),l=a.n(i),u=a(31),d=a.n(u),m=(a(87),a(89),a(78)),p=(a(105),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"loader"},l.a.createElement("h2",null,"Loading venues..."),l.a.createElement("h2",null,"Give us a sec while find you the best spots."),l.a.createElement("div",{className:"lds-circle"}))}}]),t}(i.Component)),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).loadMap=function(){if(a.props&&a.props.google){var e=a.props.google.maps,t=a.mapRef.current,n=a.props.zoom,r=a.props.getLocation,s=r.lat,c=r.lng,o=new e.LatLng(s,c),i=Object.assign({},{center:o,zoom:n});a.map=new e.Map(t,i),a.map.addListener("dragend",function(e){var t=a.map.getCenter().lat(),n=a.map.getCenter().lng();a.setLocation(t,n)})}},a.mapRef=l.a.createRef(),a.markersArray=[],a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.loadMap()}},{key:"componentDidUpdate",value:function(e){e.findMe!==this.props.findMe&&this.findMe(),e.findByAddress!==this.props.findByAddress&&this.geocodeAddress(this.props.findByAddress),this.loadMap(),this.props.venues!==[]&&this.markMap(this.props.venues)}},{key:"markMap",value:function(e){var t=this;this.clearOverlays(),e.forEach(function(e){var a=e.venue.location,n=a.lat,r=a.lng;t.drawMarker(n,r,e.venue.name)})}},{key:"findMe",value:function(){var e=this;navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){var a=t.coords,n=a.latitude,r=a.longitude;e.setLocation(n,r)})}},{key:"geocodeAddress",value:function(e){var t=this;(new this.props.google.maps.Geocoder).geocode({address:e},function(e,a){if("OK"===a){var n=(e[0].geometry.viewport.b.b+e[0].geometry.viewport.b.f)/2,r=(e[0].geometry.viewport.f.b+e[0].geometry.viewport.f.f)/2;t.setLocation(r,n)}else console.log(a)})}},{key:"setLocation",value:function(e,t){var a={lat:e,lng:t};this.props.setLocation(a)}},{key:"drawMarker",value:function(e,t,a){var n=this,r=this.props.google,s=new r.maps.LatLng(e,t),c=new r.maps.Marker({position:s,map:this.map,title:a}),o=new r.maps.InfoWindow({content:a});this.markersArray.push(c),c.addListener("mouseover",function(e){o.open(n.map,c)}),c.addListener("mouseout",function(e){o.close()})}},{key:"clearOverlays",value:function(){for(var e=0;e<this.markersArray.length;e++)this.markersArray[e].setMap(null);this.markersArray.length=0}},{key:"render",value:function(){return l.a.createElement("div",{className:"map",ref:this.mapRef},l.a.createElement("div",null,l.a.createElement(p,null)))}}]),t}(i.Component);h.defaultProps={zoom:16};var v="https://res.cloudinary.com/dhfpvsu5c/image/upload/v1540335592/NolteTechnical/foursquare.png",f="B4VB3FI4MYM4XOON5MGQ0QPAFPLGKITPJQG3OQ03KK0OGB2M",E="31H00P5SBRDADK5OYMN0LBCIELAPTOZHKHDWFFE5LVT0OZG5",g=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"setLocation",value:function(e){this.props.setLocation(e)}},{key:"render",value:function(){var e=this,t=this.props.findMe;return this.props.loaded?l.a.createElement("div",{className:"container"},l.a.createElement(h,{google:this.props.google,findMe:t,findByAddress:this.props.findByAddress,getLocation:this.props.getLocation,setLocation:function(t){return e.setLocation(t)},venues:this.props.venues})):l.a.createElement("div",null,"Loading...")}}]),t}(i.Component),b=Object(m.GoogleApiWrapper)({apiKey:"AIzaSyDK3PBdcwvXZtlj1qbaEYq422KbIApk3SY"})(g),O=a(79),y=a.n(O),j=(a(107),a(174)),k=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"header_titles"},l.a.createElement("div",null,l.a.createElement("h2",null,"OSU CS290 - Pablo Turati Project"))),l.a.createElement("img",{src:y.a,alt:"Foursquare"}),l.a.createElement(j.a,{to:"/"},l.a.createElement("h3",null,"Find venues!")))}}]),t}(i.Component),N=a(32),L=(a(109),a(80)),A=a.n(L),w=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).findMe=function(){a.props.findMe()},a.findAddress=function(e){if("Enter"===e.key){var t=e.target.value;a.props.setAddress(t)}},a.addressInpRef=l.a.createRef(),a.findAddress=a.findAddress.bind(Object(N.a)(Object(N.a)(a))),a.countRef=l.a.createRef(),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"control_panel"},l.a.createElement("section",null,l.a.createElement("div",{className:"byAddress"},l.a.createElement("h3",null,"Find venues by city or by Address"),l.a.createElement("input",{type:"text",ref:this.addressInpRef,placeholder:"Address Finder",onKeyPress:function(t){return e.findAddress(t)}})),l.a.createElement("span",null," - OR - "),l.a.createElement("div",{className:"byProximity"},l.a.createElement("h3",null,"Find venues close to you!"),l.a.createElement("button",{onClick:this.findMe,value:"Find venues around me"},"Find me!")),l.a.createElement("div",{className:"byProximity"},l.a.createElement("h3",null,"Download a FILE!"),l.a.createElement("a",{href:A.a,download:!0},l.a.createElement("button",{id:"downloadFile",value:"DOWNLOAD a file"},"CLICK ME!"))),l.a.createElement("div",null,l.a.createElement(j.a,{to:"/"},l.a.createElement("button",{id:"reset_btn"},"Search Reset")))))}}]),t}(i.Component),M=(a(111),a(113),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={loading:!0,linkArr:[]},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.venue.venue.id,t=this.createPhotoURLRequest(e);this.getImageArr(t)}},{key:"getImageArr",value:function(e){var t=this;fetch(e).then(function(e){return e.json()}).then(function(e){var a=[];e.response.photos&&(e.response.photos.items.forEach(function(e){var n=t.joinFixes(e.prefix,e.suffix,"600","600");a.push(n)}),t.setState({linkArr:a,loading:!1}))})}},{key:"joinFixes",value:function(e,t,a,n){return e+a+"x"+n+t}},{key:"createPhotoURLRequest",value:function(e){var t=f,a=E;return"https://api.foursquare.com/v2/venues/".concat(e,"/photos?client_id=").concat(t,"&client_secret=").concat(a,"&v=20180323")}},{key:"render",value:function(){var e=this.props.venue.venue,t=e.id,a=e.name,n=e.location.formattedAddress,r=this.state,s=r.linkArr,c=r.loading;return l.a.createElement(j.a,{to:{pathname:"/details/".concat(t),state:this.state.linkArr}},l.a.createElement("div",{key:t,className:"venue_item"},c&&!s&&l.a.createElement("img",{src:v,alt:a}),!c&&s.length>0&&l.a.createElement("img",{src:s[0],alt:a}),!c&&0===s.length&&l.a.createElement("img",{src:v,alt:a}),l.a.createElement("h3",null,a),l.a.createElement("div",{className:"card_address_box"},n.map(function(e,t){return l.a.createElement("span",{key:t},e,l.a.createElement("br",null))}))))}}]),t}(i.Component)),C=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.loading,a=e.venues;return l.a.createElement("div",{className:"venue_list"},t&&l.a.createElement("h1",null,"Loading"),!t&&a&&a.map(function(e){return l.a.createElement(M,{venue:e,key:e.venue.id})}))}}]),t}(i.Component),I=(a(115),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement("span",null,"This is project for Oregon State OSU CS290 class"))}}]),t}(i.Component)),S=a(190),P=a(189),x=(a(117),a(175)),R=a(178),_=a(180),F=a(182),D=a(185),U=a(177),B=a(184),K=a(187),T=a(176),W=a(179),G=a(181),V=a(183),q=a(186),H=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.shareURL,a=e.pinImage,n=e.venueName;return l.a.createElement("div",{className:"social_container"},l.a.createElement("div",null,l.a.createElement(x.a,{children:l.a.createElement(T.a,{size:50,round:!0}),url:t,quote:n,hashtag:"#".concat(n)}),l.a.createElement(U.a,{url:t},function(e){return l.a.createElement("span",{className:"myShareCountWrapper"},e)})),l.a.createElement("div",null,l.a.createElement(R.a,{children:l.a.createElement(W.a,{size:50,round:!0}),url:t})),l.a.createElement("div",null,l.a.createElement(_.a,{children:l.a.createElement(G.a,{size:50,round:!0}),url:t,via:n,hashtag:"#".concat(n)})),l.a.createElement("div",null,l.a.createElement(F.a,{children:l.a.createElement(V.a,{size:50,round:!0}),url:t,media:a}),l.a.createElement(B.a,{url:t},function(e){return l.a.createElement("span",{className:"myShareCountWrapper"},e)})),l.a.createElement("div",null,l.a.createElement(D.a,{children:l.a.createElement(q.a,{size:50,round:!0}),url:t,title:n,description:"#".concat(n)}),l.a.createElement(K.a,{url:t},function(e){return l.a.createElement("span",{className:"myShareCountWrapper"},e)})))}}]),t}(i.Component),z=(a(168),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={loading:!0,details:null,linkArr:[]},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.match.params.venueId,t=this.buildURL(e);this.fetchDetails(t)}},{key:"buildURL",value:function(e){var t=f,a=E;return"https://api.foursquare.com/v2/venues/".concat(e,"?client_id=").concat(t,"&client_secret=").concat(a,"&v=20180323")}},{key:"fetchDetails",value:function(e){var t=this;console.log("fetching data"),fetch(e).then(function(e){return e.json()}).then(function(e){var a=t.props.location.state,n=e.response;t.setState({details:n,linkArr:a,loading:!1})}).catch(function(e){return console.log(e)})}},{key:"setLocation",value:function(e){this.props.setLocation(e)}},{key:"render",value:function(){var e,t=this.state,a=t.loading,n=t.details;return e=0===this.state.linkArr.length?v:this.state.linkArr[0],l.a.createElement(l.a.Fragment,null,a&&l.a.createElement(p,null),!a&&null!==n&&l.a.createElement("section",{className:"venue_detail"},l.a.createElement("h1",null,n.venue.name),l.a.createElement("div",{className:"photo_section"},this.state.linkArr.length>0&&this.state.linkArr.map(function(e,t){return l.a.createElement("img",{className:"venue_photo",key:t,src:e,alt:n.venue.name})}),0===this.state.linkArr.length&&l.a.createElement("img",{className:"venue_photo",src:v,alt:n.venue.name})),l.a.createElement("div",{className:"generalInfo"},n.venue.description&&l.a.createElement("p",null,n.venue.description),l.a.createElement("div",{className:"detail_address_box"},l.a.createElement("span",{className:"bold"},"Address:"),n.venue.location.formattedAddress.map(function(e,t){return l.a.createElement("span",{key:t},e,l.a.createElement("br",null))})),l.a.createElement("div",{className:"externalLinks"},l.a.createElement("span",{className:"bold"},"External links"),l.a.createElement("a",{href:n.venue.canonicalUrl,target:"_blank",rel:"noopener noreferrer"},"Visit Foursquare Site"),n.venue.url&&l.a.createElement("a",{href:n.venue.url,target:"_blank",rel:"noopener noreferrer"},"Visit the venue's website"))," ",n.venue.price&&l.a.createElement("div",null,n.venue.price.currency," ",l.a.createElement("span",{className:"bold"},"Price Tier:")," ",n.venue.price.tier," - ",n.venue.price.message),l.a.createElement("div",{className:"popularDetails"},!n.venue.popular.isOpen&&null!==n.venue.popular.isOpen&&l.a.createElement("span",{className:"venueStatus isClosed"}," ","THIS VENUE IS CURRENTLY CLOSED"," "),n.venue.popular.isOpen&&null!==n.venue.popular.isOpen&&l.a.createElement("span",{className:"venueStatus isOpen"}," ","THIS VENUE IS CURRENTLY OPEN"," ")),n.venue.popular.timeframes.length>0&&l.a.createElement("div",{className:"dailyHours"},l.a.createElement("h3",null,"Venue Hours"),n.venue.popular.timeframes.length>0&&n.venue.popular.timeframes.map(function(e,t){return l.a.createElement("div",{key:t,className:"dayOpen"},e.days," ",e.open.map(function(e){return e.renderedTime+" "}))}))),l.a.createElement(H,{shareURL:n.venue.canonicalUrl,pinImage:e,venueName:n.venue.name,description:n.venue.description})))}}]),t}(i.Component)),Q=(a(170),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel"},l.a.createElement("ol",{className:"carousel-indicators"},l.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",className:"active"}),l.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),l.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})),l.a.createElement("div",{className:"carousel-inner"},l.a.createElement("div",{className:"carousel-item active"},l.a.createElement("img",{className:"d-block w-100",src:"http://blog.wowtables.com/wp-content/uploads/2013/10/Food-Shot1.jpg",alt:"First slide"})),l.a.createElement("div",{className:"carousel-item"},l.a.createElement("img",{className:"d-block w-100",src:"https://mosaicdistrict.com/wp-content/uploads/2014/08/dine7_2017.jpg",alt:"Second slide"})),l.a.createElement("div",{className:"carousel-item"},l.a.createElement("img",{className:"d-block w-100",src:"http://www.sandbanksvacations.com/wp-content/uploads/2018/02/Wine-Dine.jpg",alt:"Third slide"}))),l.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},l.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Previous")),l.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},l.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Next")))}}]),t}(i.Component)),Y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).findMe=function(){var e=!a.state.findMe;a.setState({findMe:e})},a.setAddress=function(e){a.setState({address:e})},a.toggle=!1,a.state={toDashboard:!1,resultsPerPage:20,address:"",findMe:!1,location:{lat:19.4265068,lng:-99.1768341},venues:[],loading:!0},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.buildURL();this.fetchVenues(e)}},{key:"componentDidUpdate",value:function(e,t){t.location!==this.state.location&&this.fetchVenues(this.buildURL())}},{key:"buildURL",value:function(){var e=this.state.location,t=e.lat,a=e.lng,n=this.state.resultsPerPage;return"https://api.foursquare.com/v2/venues/explore?client_id=\nB4VB3FI4MYM4XOON5MGQ0QPAFPLGKITPJQG3OQ03KK0OGB2M&client_secret=31H00P5SBRDADK5OYMN0LBCIELAPTOZHKHDWFFE5LVT0OZG5"+"&limit=".concat(n,"&v=20180323&ll=").concat(t,",").concat(a)}},{key:"setLocation",value:function(e){this.setState({location:e})}},{key:"setCount",value:function(e){this.setState({resultsPerPage:e})}},{key:"fetchVenues",value:function(e){var t=this;fetch(e).then(function(e){return e.json()}).then(function(e){var a=e.response.groups[0].items;t.setState({venues:a,loading:!1})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(k,null),l.a.createElement(Q,null),l.a.createElement("div",{className:"map_control"},l.a.createElement(w,{findMe:this.findMe,setAddress:function(t){return e.setAddress(t)},count:function(t){return e.setCount(t)}}),l.a.createElement(b,{findMe:this.state.findMe,findByAddress:this.state.address,getLocation:this.state.location,setLocation:function(t){return e.setLocation(t)},venues:this.state.venues})),l.a.createElement(S.a,null,l.a.createElement(P.a,{exact:!0,path:"/",component:function(t){return l.a.createElement(C,Object.assign({location:e.state.location,loading:e.state.loading,venues:e.state.venues},t))}}),l.a.createElement(P.a,{exact:!0,path:"/details/:venueId",component:function(e){return l.a.createElement(z,e)}})),l.a.createElement(I,null))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=a(188),J=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(Z.a,null,l.a.createElement(Y,null))}}]),t}(i.Component);d.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,t,a){e.exports=a.p+"static/media/logoWhite.ec3c5421.svg"},80:function(e,t,a){e.exports=a.p+"static/media/DineWithUs.5ec4795c.pdf"},82:function(e,t,a){e.exports=a(173)},87:function(e,t,a){},89:function(e,t,a){}},[[82,2,1]]]);
//# sourceMappingURL=main.428ae10d.chunk.js.map