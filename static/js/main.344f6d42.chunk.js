(window.webpackJsonpmovie_app=window.webpackJsonpmovie_app||[]).push([[0],{11:function(e,t,n){e.exports=n(22)},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),i=n.n(r),s=(n(16),n(1)),c=n.n(s),l=n(4),u=n(5),m=n(6),v=n(9),p=n(7),d=n(10),f=(n(18),n(19),n(8)),h=n.n(f);function _(e){var t=e.genre;return o.a.createElement("span",{className:"Movie__Genre"},t)}function g(e){var t=e.poster;return o.a.createElement("img",{src:t,alt:"Movie Poster",width:"300"})}var w=function(e){var t=e.title,n=e.poster,a=e.genres,r=e.synopsis;return o.a.createElement("div",{className:"Movie"},o.a.createElement("div",{className:"Movie__Column"},o.a.createElement(g,{poster:n})),o.a.createElement("div",{className:"Movie__Column"},o.a.createElement("h1",null,t),o.a.createElement("div",{className:"Movie__Genres"},a.map((function(e,t){return o.a.createElement(_,{genre:e,key:t})}))),o.a.createElement("div",null,o.a.createElement(h.a,{text:r,maxLine:"20",ellipsis:"...",trimRight:!0,basedOn:"letters"}),r)))},E=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},n._getMovies=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}}),e)}))),n._callApi=function(){return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating").then((function(e){return e.json()})).then((function(e){return e.data.movies})).catch((function(e){return console.log(e)}))},n._renderMovies=function(){return n.state.movies.map((function(e){return o.a.createElement(w,{title:e.title,poster:e.medium_cover_image,key:e.id,genres:e.genres,synopsis:e.synopsis})}))},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWilMount",value:function(){console.log("will mount")}},{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},this.state.movies?this._renderMovies():"Loading")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.344f6d42.chunk.js.map