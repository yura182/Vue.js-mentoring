(function(t){function e(e){for(var a,o,s=e[0],c=e[1],_=e[2],u=0,O=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&O.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);E&&E(e);while(O.length)O.shift()();return i.push.apply(i,_||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-fa90520a":"18686490"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-fa90520a":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-fa90520a":"c565bb38"}[t]+".css",r=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var _=i[s],u=_.getAttribute("data-href")||_.getAttribute("href");if("stylesheet"===_.rel&&(u===a||u===r))return e()}var O=document.getElementsByTagName("style");for(s=0;s<O.length;s++){_=O[s],u=_.getAttribute("data-href");if(u===a||u===r)return e()}var E=document.createElement("link");E.rel="stylesheet",E.type="text/css",E.onload=e,E.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],E.parentNode.removeChild(E),n(i)},E.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(E)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var _,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var O=new Error;_=function(e){u.onerror=u.onload=null,clearTimeout(E);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;O.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",O.name="ChunkLoadError",O.type=a,O.request=o,n[1](O)}r[t]=void 0}};var E=setTimeout((function(){_({type:"timeout",target:u})}),12e4);u.onerror=u.onload=_,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/Vue.js-mentoring/",c.oe=function(t){throw console.error(t),t};var _=window["webpackJsonp"]=window["webpackJsonp"]||[],u=_.push.bind(_);_.push=e,_=_.slice();for(var O=0;O<_.length;O++)e(_[O]);var E=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0043":function(t,e,n){},"16f4":function(t,e,n){t.exports=n.p+"img/404.953dd785.png"},"1eee":function(t,e,n){"use strict";n.d(e,"g",(function(){return o})),n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return _})),n.d(e,"c",(function(){return u}));var a=n("54d7"),o={MOVIES:"movies",SEARCH_MOVIES:"searchMovies",SIMILAR_MOVIES:"similarMovies",SEARCH_QUERY:"searchQuery",SEARCH_OPTION:"searchOption",SORT_OPTION:"sortOption",SIMILAR_MOVIE_GENRE:"similarMovieGenre",MOVIE_SHOWN:"moviesShown",IS_MOVIE_BY_ID_LOADED:"isMovieByIdLoaded",IS_DATA_LOADING:"isDataLoading",IS_API_ERROR:"isApiError",CURRENT_MOVIE:"currentMovie",MOVIES_COUNT:"moviesCount"},r={GET_MOVIES_COUNT:"moviesCount",GET_MOVIE_BY_ID:"getMovieById",GET_SEARCH_OPTION:"searchOption",GET_SORT_OPTION:"sortOption",GET_SEARCH_MOVIES:"searchMovies",GET_SIMILAR_MOVIES:"similarMovies",GET_SEARCH_QUERY:"searchQuery",GET_SIMILAR_MOVIE_GENRE:"similarMovieGenre",IS_LOAD_MORE_BUTTON_SHOWN:"isLoadMoreButtonShown",MOVIE_SHOWN:"moviesShown",IS_MOVIE_BY_ID_LOADED:"isMovieByIdLoaded",IS_API_ERROR:"isApiError",CURRENT_MOVIE:"currentMovie",IS_DATA_LOADING:"isDataLoading"},i={UPDATE_SEARCH_QUERY:"UPDATE_SEARCH_QUERY",UPDATE_SEARCH_OPTION:"UPDATE_SEARCH_OPTION",UPDATE_SEARCH_MOVIE:"UPDATE_SEARCH_MOVIE",UPDATE_SORT_OPTION:"UPDATE_SORT_OPTION",UPDATE_SIMILAR_MOVIES_GENRE:"UPDATE_SIMILAR_MOVIES_GENRE",UPDATE_MOVIES_SHOWN:"UPDATE_MOVIES_SHOWN",UPDATE_CURRENT_MOVIE:"UPDATE_CURRENT_MOVIE",UPDATE_IS_MOVIE_BY_ID_LOADED:"UPDATE_IS_MOVIE_BY_ID_LOADED",UPDATE_SIMILAR_MOVIES:"UPDATE_SIMILAR_MOVIES",UPDATE_IS_DATA_LOADING:"UPDATE_IS_DATA_LOADING",UPDATE_IS_API_ERROR:"UPDATE_IS_API_ERROR",UPDATE_MOVIES_COUNT:"UPDATE_MOVIES_COUNT",ADD_MOVIES:"ADD_MOVIES",ROLL_BACK_MOVIES_SHOWN:"ROLL_BACK_MOVIES_SHOWN",RESET_MOVIES_SHOWN:"RESET_MOVIES_SHOWN"},s={UPDATE_SEARCH_QUERY:"updateSearchQuery",UPDATE_SEARCH_OPTION:"updateSearchOption",UPDATE_SORT_OPTION:"updateSortOption",UPDATE_SIMILAR_MOVIES_GENRE:"updateSimilarMoviesGenre",SEARCH_FILMS:"searchFilms",UPDATE_MOVIES_SHOWN:"updateMoviesShown",FIND_MOVIE_BY_ID:"findMovieById",SIMILAR_MOVIES:"similarMovies",LOAD_MORE_MOVIES:"loadMoreMovies",START_API_CALL:"startApiCall"},c="",_=a["n"],u=a["j"]},2241:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("span",[t._v(t._s(t.firstPart))]),t._v(t._s(t.secondPart)+" ")])},o=[],r={name:"Logo",props:{firstPart:{type:String,default:"First"},secondPart:{type:String,default:"Second"}}},i=r,s=(n("f5fe"),n("2877")),c=Object(s["a"])(i,a,o,!1,null,"b953f2fe",null);e["a"]=c.exports},"22f9":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"film-card"},[n("div",{staticClass:"film-image"},[n("img",{staticClass:"film-img",attrs:{src:t.movie.poster_path,alt:"film"},on:{error:t.handlePosterError}})]),n("div",{staticClass:"film-card-info"},[n("div",{staticClass:"film-card-tile"},[t._v(" "+t._s(t.movie.title)+" ")]),n("div",{staticClass:"film-card-year"},[n("span",{staticClass:"border"},[t._v(t._s(t._f("parseYear")(t.movie.release_date)))])])]),n("div",{staticClass:"film-card-genre"},[t._v(t._s(t._f("getOneGenre")(t.movie.genres)))])])},o=[],r=n("ea7d"),i={name:"FilmCard",props:{movie:Object},methods:{handlePosterError:r["a"]}},s=i,c=(n("2ccc"),n("2877")),_=Object(c["a"])(s,a,o,!1,null,"3a12dc73",null);e["a"]=_.exports},"25f1":function(t,e,n){t.exports=n.p+"img/defaultPoster.d1b4253f.png"},"2ccc":function(t,e,n){"use strict";n("6ccb")},"397d":function(t,e,n){"use strict";n("ca65")},"3a5e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vld-parent"},[n("loading",{attrs:{active:t.loading,"is-full-page":t.fullPage,loader:t.loader}})],1)},o=[],r=n("5530"),i=n("9062"),s=n.n(i),c=(n("e40d"),n("2f62")),_=n("1eee"),u=n("54d7"),O={data:function(){return{fullPage:!0,loader:u["d"]}},components:{Loading:s.a},computed:Object(r["a"])(Object(r["a"])({},Object(c["c"])([_["e"].IS_DATA_LOADING])),{},{loading:function(){return this[_["e"].IS_DATA_LOADING]}})},E=O,f=n("2877"),l=Object(f["a"])(E,a,o,!1,null,null,null);e["a"]=l.exports},"3f70":function(t,e,n){"use strict";n("f473")},"3fb9":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isError?n("div",{staticClass:"info-block"},[t._v(" "+t._s(t.message)+" ")]):t._e()},o=[],r=n("5530"),i=n("2f62"),s=n("54d7"),c=n("1eee"),_={name:"Error",data:function(){return{message:s["b"]}},computed:Object(r["a"])(Object(r["a"])({},Object(i["c"])([c["e"].IS_API_ERROR])),{},{isError:function(){return this[c["e"].IS_API_ERROR]}})},u=_,O=(n("7daf"),n("2877")),E=Object(O["a"])(u,a,o,!1,null,"6f29c35a",null);e["a"]=E.exports},4010:function(t,e,n){},"41d0":function(t,e,n){},"4be1":function(t,e,n){},"4e3a":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));var a={FILMS_BY:"Films by",SEARCH_HEADER:"Find your movie",SEARCH_BY:"Search by",TITLE:"Title",GENRE:"Genre",SORT_BY:"Sort by",RELEASE_DATE:"Release Date",RATING:"Rating",SEARCH:"Search",MOVIE_FOUND:"movie found",MOVIES_FOUND:"movies found",NO_MOVIES_FOUND:"No movies found"},o={FILMS_BY_DRAMA_GENRE:"Фільми драматичного жанру",SEARCH_HEADER:"Знайди свій фільм",SEARCH_BY:"Пошук за",TITLE:"Назва",GENRE:"Жанр",SORT_BY:"Сортувати за",RELEASE_DATE:"Дата виходу",RATING:"Рейтинг",SEARCH:"Пошук"},r="EN",i={EN:a,UA:o}},"54d7":function(t,e,n){"use strict";n.d(e,"n",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"k",(function(){return r})),n.d(e,"g",(function(){return _})),n.d(e,"h",(function(){return u})),n.d(e,"j",(function(){return i})),n.d(e,"i",(function(){return s})),n.d(e,"m",(function(){return c})),n.d(e,"e",(function(){return O})),n.d(e,"a",(function(){return E})),n.d(e,"f",(function(){return f})),n.d(e,"b",(function(){return d})),n.d(e,"l",(function(){return l})),n.d(e,"d",(function(){return I}));var a="title",o="genre",r="search-by",i="releaseDate",s="rating",c="sort-option",_="netflix",u="roulette",O="load more",E=6,f=3,l=12,I="dots",d="Something went wrong. Please try again"},5578:function(t,e,n){"use strict";n("a518")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,o,r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],c=(n("5c0b"),n("2877")),_={},u=Object(c["a"])(_,i,s,!1,null,null,null),O=u.exports,E=n("2f62"),f=n("2909"),l=n("ade3"),I=(n("7db0"),n("fb6a"),n("d3b7"),n("1eee")),d={releaseDate:function(t,e){return new Date(e.release_date)-new Date(t.release_date)},rating:function(t,e){return e.vote_average-t.vote_average}},S=n("54d7"),A=n("bc3a"),T=n.n(A),R="https://react-cdp-api.herokuapp.com/",p=3e3,b="movies",M="desc",m=6,g=(a={},Object(l["a"])(a,S["j"],"release_date"),Object(l["a"])(a,S["i"],"vote_average"),a),h=(o={},Object(l["a"])(o,S["n"],"title"),Object(l["a"])(o,S["c"],"genres"),o),v=(n("3ca3"),n("ddb0"),n("8c4f")),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-main"},[n("MainPage")],1)},D=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-block"},[n("Loading"),n("div",{staticClass:"firs-block"},[n("Header")],1),n("div",{staticClass:"second-block"},[n("MiddleBlock")],1),n("div",{staticClass:"third-block"},[n("ResultList")],1),n("div",{staticClass:"footer-block"},[n("div",{staticClass:"footer-logo"},[n("Logo",{attrs:{firstPart:t.logoFirstPart,secondPart:t.logoSecondPart}})],1)])],1)},N=[],U=n("3a5e"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"header-bg"}),n("div",{staticClass:"header-content"},[n("div",{staticClass:"header-logo"},[n("Logo",{attrs:{firstPart:t.logoFirstPart,secondPart:t.logoSecondPart}})],1),n("div",{staticClass:"search-header"},[t._v(t._s(t.searchHeaderMessage))]),n("div",{staticClass:"search-bar"},[n("SearchBar")],1),n("div",{staticClass:"search-by"},[n("FilterButtons",{attrs:{message:t.searchByMessage,firstButtonTitle:t.titleMessage,secondButtonTitle:t.genreMessage,firstOption:t.firstOption,secondOption:t.secondOption,options:t.options,checked:t.isChecked},on:t._d({},[t.ON_CHANGE_INPUT,t.changeSearchOption])})],1)])])},L=[],V=n("5530"),H=n("2241"),G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.searchText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitSearch(e)},input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),n("div",{staticClass:"films-button-group"},[n("button",{staticClass:"btn btn-primary films-button-search",attrs:{type:"button"},on:{click:t.submitSearch}},[t._v(" "+t._s(t.searchButtonMessage)+" ")])])])},y=[],B=n("4e3a"),k={name:"SearchBar",data:function(){return{searchText:"",searchButtonMessage:B["a"][B["b"]].SEARCH.toUpperCase()}},methods:Object(V["a"])(Object(V["a"])({},Object(E["b"])([I["a"].UPDATE_SEARCH_QUERY,I["a"].SEARCH_MOVIES,I["a"].SEARCH_FILMS])),{},{submitSearch:function(){$t.push({name:"Home",query:{query:this.searchText.toLowerCase(),searchBy:this[I["e"].GET_SEARCH_OPTION]}}),this[I["a"].UPDATE_SEARCH_QUERY](this.searchText.toLowerCase()),this[I["a"].SEARCH_FILMS](),this.searchText=""}}),computed:Object(V["a"])({},Object(E["c"])([I["e"].GET_SEARCH_OPTION]))},F=k,Y=(n("819e"),Object(c["a"])(F,G,y,!1,null,"03f2ac08",null)),x=Y.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group col"},[n("div",{staticClass:"films-switcher-text"},[t._v(t._s(t.message))]),n("input",{staticClass:"btn-check",attrs:{type:"radio",name:t.options,id:t.firstOption,autocomplete:"off"},domProps:{value:t.firstOption,checked:t.isChecked(t.firstOption)},on:{change:function(e){return t.changeRadioInput(t.firstOption)}}}),n("label",{staticClass:"btn btn-primary films-radio-left",attrs:{for:t.firstOption}},[t._v(t._s(t.firstButtonTitle))]),n("input",{staticClass:"btn-check",attrs:{type:"radio",name:t.options,id:t.secondOption,autocomplete:"off"},domProps:{value:t.secondOption,checked:t.isChecked(t.secondOption)},on:{change:function(e){return t.changeRadioInput(t.secondOption)}}}),n("label",{staticClass:"btn btn-primary films-radio-right",attrs:{for:t.secondOption}},[t._v(t._s(t.secondButtonTitle))])])},W=[],Q="onChangeInput",$={name:"FilterButtons",props:{message:String,firstButtonTitle:String,secondButtonTitle:String,firstOption:String,secondOption:String,options:String,checked:String},methods:{changeRadioInput:function(t){this.$emit(Q,t)},isChecked:function(t){return this.checked===t}}},q=$,K=(n("f8ba"),Object(c["a"])(q,w,W,!1,null,"73e78d4c",null)),J=K.exports,z={name:"Header",components:{Logo:H["a"],SearchBar:x,FilterButtons:J},data:function(){return{searchHeaderMessage:B["a"][B["b"]].SEARCH_HEADER.toUpperCase(),searchByMessage:B["a"][B["b"]].SEARCH_BY.toUpperCase(),titleMessage:B["a"][B["b"]].TITLE.toUpperCase(),genreMessage:B["a"][B["b"]].GENRE.toUpperCase(),firstOption:S["n"],secondOption:S["c"],options:S["k"],logoFirstPart:S["g"],logoSecondPart:S["h"],ON_CHANGE_INPUT:Q}},computed:Object(V["a"])(Object(V["a"])({},Object(E["c"])([I["e"].GET_SEARCH_OPTION])),{},{isChecked:function(){return this[I["e"].GET_SEARCH_OPTION]}}),methods:Object(V["a"])(Object(V["a"])({},Object(E["b"])([I["a"].UPDATE_SEARCH_OPTION])),{},{changeSearchOption:function(t){this[I["a"].UPDATE_SEARCH_OPTION](t)}})},X=z,Z=(n("b7b7"),Object(c["a"])(X,j,L,!1,null,"361b3928",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"middle-block"},[n("div",{staticClass:"info-block"},[n("Info",{attrs:{message:t.foundMoviesMessage}})],1),n("div",{staticClass:"buttons-block"},[n("FilterButtons",{attrs:{message:t.sortByMessage,firstButtonTitle:t.firstButtonMessage,secondButtonTitle:t.secondButtonMessage,firstOption:t.firstOption,secondOption:t.secondOption,options:t.options,checked:t.isChecked},on:t._d({},[t.ON_CHANGE_INPUT,t.changeSortOption])})],1)])},nt=[],at=(n("99af"),n("8f33")),ot={name:"MiddleBlock",components:{Info:at["a"],FilterButtons:J},data:function(){return{moviesFoundMessage:B["a"][B["b"]].MOVIES_FOUND,movieFoundMessage:B["a"][B["b"]].MOVIE_FOUND,noMovieFoundMessage:B["a"][B["b"]].NO_MOVIES_FOUND,sortByMessage:B["a"][B["b"]].SORT_BY.toUpperCase(),firstButtonMessage:B["a"][B["b"]].RELEASE_DATE.toUpperCase(),secondButtonMessage:B["a"][B["b"]].RATING.toUpperCase(),firstOption:S["j"],secondOption:S["i"],options:S["m"],ON_CHANGE_INPUT:Q}},computed:Object(V["a"])(Object(V["a"])({},Object(E["c"])([I["e"].GET_MOVIES_COUNT,I["e"].GET_SORT_OPTION])),{},{isChecked:function(){return this[I["e"].GET_SORT_OPTION]},foundMoviesMessage:function(){return this[I["e"].GET_MOVIES_COUNT]?(this[I["e"].GET_MOVIES_COUNT],"".concat(this[I["e"].GET_MOVIES_COUNT]," ").concat(this.movieFoundMessage)):this.noMovieFoundMessage}}),methods:Object(V["a"])(Object(V["a"])({},Object(E["b"])([I["a"].UPDATE_SORT_OPTION])),{},{changeSortOption:function(t){this[I["a"].UPDATE_SORT_OPTION](t)}})},rt=ot,it=(n("6ee4"),Object(c["a"])(rt,et,nt,!1,null,"175379cf",null)),st=it.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"films-list"},[t._l(t.movies,(function(e){return n("div",{key:e.id,staticClass:"film-card"},[n("router-link",{attrs:{to:t.filmRoute(e.id)}},[n("FilmCard",{attrs:{movie:e}})],1)],1)})),t.showButton?n("LoadMore"):t._e(),n("Error")],2)},_t=[],ut=n("22f9"),Ot=n("fa15"),Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"films-button-container"},[n("button",{staticClass:"btn btn-primary films-button-load-more",attrs:{type:"button"},on:{click:t.loadMore}},[t._v(" "+t._s(t.buttonTitle)+" ")])])},ft=[],lt={name:"LoadMore",data:function(){return{buttonTitle:S["e"].toUpperCase()}},methods:Object(V["a"])(Object(V["a"])({},Object(E["b"])([I["a"].UPDATE_MOVIES_SHOWN,I["a"].LOAD_MORE_MOVIES])),{},{loadMore:function(){this[I["a"].LOAD_MORE_MOVIES](),this[I["a"].UPDATE_MOVIES_SHOWN]()}})},It=lt,dt=(n("fd1c"),Object(c["a"])(It,Et,ft,!1,null,"6febe1ab",null)),St=dt.exports,At=n("3fb9"),Tt={name:"ResultList",components:{FilmCard:ut["a"],LoadMore:St,Error:At["a"]},computed:Object(V["a"])(Object(V["a"])({},Object(E["c"])([I["e"].GET_SEARCH_MOVIES,I["e"].IS_LOAD_MORE_BUTTON_SHOWN])),{},{showButton:function(){return this[I["e"].IS_LOAD_MORE_BUTTON_SHOWN]},movies:function(){return this[I["e"].GET_SEARCH_MOVIES]}}),methods:Object(V["a"])(Object(V["a"])({},Object(E["b"])([I["a"].SEARCH_FILMS])),{},{filmRoute:function(t){return Object(Ot["a"])(t)}}),mounted:function(){this[I["a"].SEARCH_FILMS]()}},Rt=Tt,pt=(n("b9b3"),Object(c["a"])(Rt,ct,_t,!1,null,"6761f5a1",null)),bt=pt.exports,Mt={name:"Page",components:{Header:tt,MiddleBlock:st,ResultList:bt,Logo:H["a"],Loading:U["a"]},data:function(){return{logoFirstPart:S["g"],logoSecondPart:S["h"]}}},mt=Mt,gt=(n("397d"),Object(c["a"])(mt,C,N,!1,null,"00c03c6f",null)),ht=gt.exports,vt={name:"Home",components:{MainPage:ht}},Pt=vt,Dt=(n("f665"),Object(c["a"])(Pt,P,D,!1,null,"b3f1f3e0",null)),Ct=Dt.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-main"},[a("div",{staticClass:"main-block"},[a("img",{staticClass:"not-found",attrs:{src:n("16f4"),alt:"404"}}),a("router-link",{attrs:{to:"/"}},[t._v("Home page")])],1)])},Ut=[],jt={name:"NotFound"},Lt=jt,Vt=(n("3f70"),Object(c["a"])(Lt,Nt,Ut,!1,null,"629d6b24",null)),Ht=Vt.exports;r["a"].use(v["a"]);var Gt,yt,Bt,kt,Ft,Yt,xt,wt,Wt=[{path:"/",name:"Home",component:Ct},{path:"/film-details/:id",name:"Film details",component:function(){return n.e("chunk-fa90520a").then(n.bind(null,"9f52"))}},{path:"*",name:"Not found",component:Ht}],Qt=new v["a"]({mode:"history",base:"/Vue.js-mentoring/",routes:Wt}),$t=Qt,qt={init:function(){T.a.defaults.baseURL=R,T.a.defaults.timeout=p},getMovies:function(){return T.a.get(b).then((function(t){return t.data}))},getInitialMovies:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.sortOption,n=t.limit,a=void 0===n?m:n,o=t.offset,r=$t.currentRoute.query.searchBy;return T.a.get(b,{params:{sortBy:g[e],searchBy:h[r],search:$t.currentRoute.query.query,sortOrder:M,limit:a,offset:o}}).then((function(t){return t.data}))},getMovieById:function(t){return T.a.get("movies/".concat(t)).then((function(t){return t.data}))},getSimilarMovies:function(t){return T.a.get(b,{params:{searchBy:h[S["c"]],search:t,limit:S["l"]}}).then((function(t){return t.data}))}},Kt=qt,Jt={state:(Gt={},Object(l["a"])(Gt,I["g"].MOVIES,[]),Object(l["a"])(Gt,I["g"].SEARCH_MOVIES,[]),Object(l["a"])(Gt,I["g"].SIMILAR_MOVIES,[]),Object(l["a"])(Gt,I["g"].IS_MOVIE_BY_ID_LOADED,!1),Object(l["a"])(Gt,I["g"].CURRENT_MOVIE,Object),Object(l["a"])(Gt,I["g"].MOVIES_COUNT,0),Gt),getters:(yt={},Object(l["a"])(yt,I["e"].GET_MOVIES_COUNT,(function(t){return t[I["g"].MOVIES_COUNT]})),Object(l["a"])(yt,I["e"].GET_MOVIE_BY_ID,(function(t){return function(e){return t[I["g"].MOVIES].find((function(t){return t.id===parseInt(e)}))}})),Object(l["a"])(yt,I["e"].GET_SEARCH_MOVIES,(function(t,e){return t[I["g"].SEARCH_MOVIES].sort(d[e[I["g"].SORT_OPTION]]).slice(0,e[I["g"].MOVIE_SHOWN])})),Object(l["a"])(yt,I["e"].GET_SIMILAR_MOVIES,(function(t){return t[I["g"].SIMILAR_MOVIES]})),Object(l["a"])(yt,I["e"].CURRENT_MOVIE,(function(t){return t[I["g"].CURRENT_MOVIE]})),Object(l["a"])(yt,I["e"].IS_MOVIE_BY_ID_LOADED,(function(t){return t[I["g"].IS_MOVIE_BY_ID_LOADED]})),yt),mutations:(Bt={},Object(l["a"])(Bt,I["f"].UPDATE_SEARCH_MOVIE,(function(t,e){t[I["g"].SEARCH_MOVIES]=e})),Object(l["a"])(Bt,I["f"].UPDATE_CURRENT_MOVIE,(function(t,e){t[I["g"].CURRENT_MOVIE]=e})),Object(l["a"])(Bt,I["f"].UPDATE_IS_MOVIE_BY_ID_LOADED,(function(t,e){t[I["g"].IS_MOVIE_BY_ID_LOADED]=e})),Object(l["a"])(Bt,I["f"].UPDATE_SIMILAR_MOVIES,(function(t,e){t[I["g"].SIMILAR_MOVIES]=e})),Object(l["a"])(Bt,I["f"].UPDATE_MOVIES_COUNT,(function(t,e){t[I["g"].MOVIES_COUNT]=e})),Object(l["a"])(Bt,I["f"].ADD_MOVIES,(function(t,e){var n;(n=t[I["g"].SEARCH_MOVIES]).push.apply(n,Object(f["a"])(e))})),Bt),actions:(kt={},Object(l["a"])(kt,I["a"].SEARCH_FILMS,(function(t){var e=t.dispatch,n=t.commit,a=t.rootGetters;n(I["f"].UPDATE_SEARCH_MOVIE,[]),e(I["a"].START_API_CALL),Kt.getInitialMovies({sortOption:a[I["e"].GET_SORT_OPTION]}).then((function(t){n(I["f"].UPDATE_SEARCH_MOVIE,t.data),n(I["f"].UPDATE_MOVIES_COUNT,t.total),n(I["f"].RESET_MOVIES_SHOWN)})).catch((function(t){n(I["f"].UPDATE_IS_API_ERROR,!0),console.log(t)})).finally((function(){return n(I["f"].UPDATE_IS_DATA_LOADING,!1)}))})),Object(l["a"])(kt,I["a"].FIND_MOVIE_BY_ID,(function(t,e){var n=t.dispatch,a=t.commit;a(I["f"].UPDATE_SIMILAR_MOVIES,[]),a(I["f"].UPDATE_IS_MOVIE_BY_ID_LOADED,!1),n(I["a"].START_API_CALL),Kt.getMovieById(e).then((function(t){return a(I["f"].UPDATE_CURRENT_MOVIE,t)})).catch((function(t){a(I["f"].UPDATE_IS_API_ERROR,!0),console.log(t)})).finally((function(){a(I["f"].UPDATE_IS_MOVIE_BY_ID_LOADED,!0),a(I["f"].UPDATE_IS_DATA_LOADING,!1)}))})),Object(l["a"])(kt,I["a"].SIMILAR_MOVIES,(function(t){var e=t.dispatch,n=t.commit,a=t.rootGetters;e(I["a"].START_API_CALL),Kt.getSimilarMovies(a[I["e"].GET_SIMILAR_MOVIE_GENRE]).then((function(t){return n(I["f"].UPDATE_SIMILAR_MOVIES,t.data)})).catch((function(t){n(I["f"].UPDATE_IS_API_ERROR,!0),console.log(t)})).finally((function(){return n(I["f"].UPDATE_IS_DATA_LOADING,!1)}))})),Object(l["a"])(kt,I["a"].LOAD_MORE_MOVIES,(function(t){var e=t.dispatch,n=t.commit,a=t.rootGetters;e(I["a"].START_API_CALL),Kt.getInitialMovies({sortOption:a[I["e"].GET_SORT_OPTION],limit:S["f"],offset:a[I["e"].MOVIE_SHOWN]}).then((function(t){n(I["f"].ADD_MOVIES,t.data)})).catch((function(t){n(I["f"].UPDATE_IS_API_ERROR,!0),n(I["f"].ROLL_BACK_MOVIES_SHOWN),console.log(t)})).finally((function(){return n(I["f"].UPDATE_IS_DATA_LOADING,!1)}))})),kt)},zt={state:(Ft={},Object(l["a"])(Ft,I["g"].SEARCH_QUERY,I["d"]),Object(l["a"])(Ft,I["g"].SEARCH_OPTION,I["b"]),Object(l["a"])(Ft,I["g"].SORT_OPTION,I["c"]),Object(l["a"])(Ft,I["g"].SIMILAR_MOVIE_GENRE,I["d"]),Object(l["a"])(Ft,I["g"].MOVIE_SHOWN,S["a"]),Object(l["a"])(Ft,I["g"].IS_DATA_LOADING,!0),Object(l["a"])(Ft,I["g"].IS_API_ERROR,!1),Ft),getters:(Yt={},Object(l["a"])(Yt,I["e"].GET_SEARCH_OPTION,(function(t){return t[I["g"].SEARCH_OPTION]})),Object(l["a"])(Yt,I["e"].GET_SORT_OPTION,(function(t){return t[I["g"].SORT_OPTION]})),Object(l["a"])(Yt,I["e"].GET_SEARCH_QUERY,(function(t){return t[I["g"].SEARCH_QUERY]})),Object(l["a"])(Yt,I["e"].GET_SIMILAR_MOVIE_GENRE,(function(t){return t[I["g"].SIMILAR_MOVIE_GENRE]})),Object(l["a"])(Yt,I["e"].MOVIE_SHOWN,(function(t){return t.moviesShown})),Object(l["a"])(Yt,I["e"].IS_LOAD_MORE_BUTTON_SHOWN,(function(t,e){return e[I["e"].GET_MOVIES_COUNT]>S["a"]&&t.moviesShown<e[I["e"].GET_MOVIES_COUNT]})),Object(l["a"])(Yt,I["e"].IS_DATA_LOADING,(function(t){return t[I["g"].IS_DATA_LOADING]})),Object(l["a"])(Yt,I["e"].IS_API_ERROR,(function(t){return t[I["g"].IS_API_ERROR]})),Yt),mutations:(xt={},Object(l["a"])(xt,I["f"].UPDATE_SEARCH_QUERY,(function(t,e){t[I["g"].SEARCH_QUERY]=e})),Object(l["a"])(xt,I["f"].UPDATE_SEARCH_OPTION,(function(t,e){t[I["g"].SEARCH_OPTION]=e})),Object(l["a"])(xt,I["f"].UPDATE_SORT_OPTION,(function(t,e){t[I["g"].SORT_OPTION]=e})),Object(l["a"])(xt,I["f"].UPDATE_SIMILAR_MOVIES_GENRE,(function(t,e){t[I["g"].SIMILAR_MOVIE_GENRE]=e})),Object(l["a"])(xt,I["f"].UPDATE_MOVIES_SHOWN,(function(t){t.moviesShown+=S["f"]})),Object(l["a"])(xt,I["f"].ROLL_BACK_MOVIES_SHOWN,(function(t){t[I["g"].MOVIE_SHOWN]-=S["f"]})),Object(l["a"])(xt,I["f"].RESET_MOVIES_SHOWN,(function(t){t[I["g"].MOVIE_SHOWN]=S["a"]})),Object(l["a"])(xt,I["f"].UPDATE_IS_DATA_LOADING,(function(t,e){t[I["g"].IS_DATA_LOADING]=e})),Object(l["a"])(xt,I["f"].UPDATE_IS_API_ERROR,(function(t,e){t[I["g"].IS_API_ERROR]=e})),xt),actions:(wt={},Object(l["a"])(wt,I["a"].UPDATE_SIMILAR_MOVIES_GENRE,(function(t,e){var n=t.dispatch,a=t.commit;a(I["f"].UPDATE_SIMILAR_MOVIES_GENRE,e),n(I["a"].SIMILAR_MOVIES)})),Object(l["a"])(wt,I["a"].UPDATE_SEARCH_QUERY,(function(t,e){var n=t.commit;n(I["f"].UPDATE_SEARCH_QUERY,e)})),Object(l["a"])(wt,I["a"].UPDATE_SEARCH_OPTION,(function(t,e){var n=t.commit;n(I["f"].UPDATE_SEARCH_OPTION,e)})),Object(l["a"])(wt,I["a"].UPDATE_SORT_OPTION,(function(t,e){var n=t.dispatch,a=t.commit;a(I["f"].UPDATE_SORT_OPTION,e),n(I["a"].SEARCH_FILMS)})),Object(l["a"])(wt,I["a"].UPDATE_MOVIES_SHOWN,(function(t){var e=t.commit;e(I["f"].UPDATE_MOVIES_SHOWN)})),Object(l["a"])(wt,I["a"].START_API_CALL,(function(t){var e=t.commit;e(I["f"].UPDATE_IS_DATA_LOADING,!0),e(I["f"].UPDATE_IS_API_ERROR,!1)})),wt)};r["a"].use(E["a"]);var Xt,Zt=new E["a"].Store({modules:{movies:Jt,controls:zt}}),te=(n("4de4"),{PARSE_YEAR:"parseYear",GET_ONE_GENRE:"getOneGenre",PARSE_GENRES:"parseGenres",PARSE_RATING:"parseRating"}),ee=(n("a15b"),n("b680"),function(t){return parseInt(t)}),ne=function(t){var e=Math.floor(Math.random()*t.length);return t[e]},ae=function(t){return t.join(", ")},oe=function(t){return parseFloat(t).toFixed(1)},re=(Xt={},Object(l["a"])(Xt,te.PARSE_YEAR,ee),Object(l["a"])(Xt,te.GET_ONE_GENRE,ne),Object(l["a"])(Xt,te.PARSE_GENRES,ae),Object(l["a"])(Xt,te.PARSE_RATING,oe),Xt),ie={install:function(t){t.filter(te.PARSE_YEAR,re[te.PARSE_YEAR]),t.filter(te.GET_ONE_GENRE,re[te.GET_ONE_GENRE]),t.filter(te.PARSE_GENRES,re[te.PARSE_GENRES]),t.filter(te.PARSE_RATING,re[te.PARSE_RATING])}};n("41d0");Kt.init(),r["a"].config.productionTip=!1,r["a"].use(ie),new r["a"]({store:Zt,router:$t,render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},6444:function(t,e,n){},"6ccb":function(t,e,n){},"6ee4":function(t,e,n){"use strict";n("7205")},7205:function(t,e,n){},"7daf":function(t,e,n){"use strict";n("6444")},"819e":function(t,e,n){"use strict";n("bc44")},"8b73":function(t,e,n){},"8f33":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-block"},[t._v(" "+t._s(t.message)+" ")])},o=[],r={name:"Info",props:{message:{type:String}}},i=r,s=(n("5578"),n("2877")),c=Object(s["a"])(i,a,o,!1,null,"141d8081",null);e["a"]=c.exports},"9c0c":function(t,e,n){},a518:function(t,e,n){},aaa0:function(t,e,n){},b7b7:function(t,e,n){"use strict";n("0043")},b9b3:function(t,e,n){"use strict";n("4010")},bc44:function(t,e,n){},ca65:function(t,e,n){},d2ef:function(t,e,n){},ea7d:function(t,e,n){"use strict";var a=function(t){t.target.src=n("25f1")};e["a"]=a},f473:function(t,e,n){},f5fe:function(t,e,n){"use strict";n("aaa0")},f665:function(t,e,n){"use strict";n("d2ef")},f8ba:function(t,e,n){"use strict";n("8b73")},fa15:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a={FILM_DETAILS:"Film details"},o=function(t){return{name:a.FILM_DETAILS,params:{id:t}}}},fd1c:function(t,e,n){"use strict";n("4be1")}});
//# sourceMappingURL=app.57e99051.js.map