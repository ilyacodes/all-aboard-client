(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{166:function(e,t,a){e.exports=a.p+"static/media/camel_card.a1e5c2c9.png"},167:function(e,t,a){e.exports=a.p+"static/media/cloth_card.0d2307d0.png"},168:function(e,t,a){e.exports=a.p+"static/media/cover_card.3f00f8c9.png"},169:function(e,t,a){e.exports=a.p+"static/media/diamond_card.04b067c8.png"},170:function(e,t,a){e.exports=a.p+"static/media/gold_card.f45f8f0b.png"},171:function(e,t,a){e.exports=a.p+"static/media/leather_card.a9ca0b3b.png"},172:function(e,t,a){e.exports=a.p+"static/media/silver_card.d1251adf.png"},173:function(e,t,a){e.exports=a.p+"static/media/spice_card.5d184b27.png"},174:function(e,t,a){e.exports=a.p+"static/media/coin.f17a00ff.png"},214:function(e,t,a){"use strict";var n=a(7),o=a.n(n),r=a(9),l=a.n(r),i=a(11),s=a.n(i),c=a(3),u=a.n(c),d=a(10),p=a.n(d),f=a(41),m=a(0),h=a.n(m),g=a(187),y=a(345),b=a(35),w=a(66),v=a(2),k=a(131),E=a(23),x=a(215),C=a(4),S=C.a.create({container:{margin:10},input:{marginTop:5,marginBottom:8,height:40,borderColor:"#7a42f4",borderWidth:1,backgroundColor:"white"},separator:{marginVertical:8,borderBottomColor:"#737373",borderBottomWidth:C.a.hairlineWidth}}),_="http://all-aboard-server.herokuapp.com",R=a(57),T=function(e){return h.a.createElement((function(t){return e.disabled?h.a.createElement(v.a,{style:t.style},t.children):h.a.createElement(R.a,{style:t.style,onPress:e.onPress},t.children)}),{style:[{backgroundColor:e.disabled?"grey":"#7a42f4",flex:1,display:"flex",flexDirection:"row",alignItems:"center",margin:5,borderRadius:5,borderWidth:3},e.style]},h.a.createElement(E.a,{style:{flex:1,color:"white",fontWeight:"500",fontSize:19,textAlign:"center",padding:4}},e.title))};function A(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var O=function(e){p()(n,e);var t,a=(t=n,function(){var e,a=u()(t);if(A()){var n=u()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return s()(this,e)});function n(e){var t;return o()(this,n),(t=a.call(this,e)).state={playerName:"",gameCode:"",selectedGame:"jaipur",password:""},t}return l()(n,[{key:"render",value:function(){var e=this;return h.a.createElement(w.a,{style:S.container},h.a.createElement(x.a,null,h.a.createElement(v.a,null,h.a.createElement(E.a,null,"Server Address"),h.a.createElement(b.a,{value:_,style:S.input,editable:!1})),h.a.createElement(v.a,null,h.a.createElement(E.a,null,"Server Password"),h.a.createElement(b.a,{onChangeText:function(t){return e.setState({password:t})},value:this.state.password,style:S.input})),h.a.createElement(v.a,{style:S.separator}),h.a.createElement(v.a,null,h.a.createElement(E.a,null,"Game"),h.a.createElement(k.a,{selectedValue:this.state.selectedGame,onValueChange:function(t,a){return e.setState({selectedGame:t})},style:{marginTop:5,marginBottom:8}},h.a.createElement(k.a.Item,{label:"Jaipur",value:"jaipur"}),h.a.createElement(k.a.Item,{label:"Codenames",value:"codenames"}))),h.a.createElement(v.a,null,h.a.createElement(E.a,null,"Game Code"),h.a.createElement(b.a,{onChangeText:function(t){return e.setState({gameCode:t})},value:this.state.gameCode,style:S.input})),h.a.createElement(v.a,{style:S.separator}),h.a.createElement(v.a,null,h.a.createElement(T,{title:"Board View",disabled:""===this.state.gameCode,onPress:function(){return e.props.navigation.navigate("GameScreen",{playerName:"board",gameName:e.state.selectedGame,gameCode:e.state.gameCode,password:e.state.password})}})),h.a.createElement(v.a,{style:S.separator}),h.a.createElement(v.a,null,h.a.createElement(E.a,null,"Player Name"),h.a.createElement(b.a,{onChangeText:function(t){return e.setState({playerName:t})},value:this.state.playerName,style:S.input}),h.a.createElement(T,{title:"Player View",disabled:""===this.state.playerName||"board"===this.state.playerName||""===this.state.gameCode,onPress:function(){return e.props.navigation.navigate("GameScreen",{playerName:e.state.playerName,gameName:e.state.selectedGame,gameCode:e.state.gameCode,password:e.state.password})}}))))}}]),n}(h.a.Component),P=a(15),W=a.n(P),D=a(209),B=a.n(D),j=a(47),N=a(16),z=a(71),I=a(49),V=a(61);function H(e){if(null!==e&&void 0!==e)return e+"%"}function M(e){if(null!==e&&void 0!==e)return e+"%"}function L(e){return Math.min(N.a.get("window").width,N.a.get("window").height)*e/100}function G(e,t,a){return new Array(a).fill(null).map((function(n,o){return e+o*(t-e)/(a-1)}))}var Y=C.a.create({mat:{flex:1,backgroundColor:"#5aa57c"},mat_strips:{backgroundColor:"#458779",height:"4%",position:"absolute"},mat_strip_circle:{backgroundColor:"#458779",borderRadius:Math.round(N.a.get("window").width+N.a.get("window").height)/2,width:.07*N.a.get("window").width,height:.07*N.a.get("window").width,position:"absolute"},mat_card:{position:"absolute",backgroundColor:"#4ca68a",borderColor:"#448c72",borderWidth:3,borderRadius:15,width:"10%",height:"20%",paddingHorizontal:"5%",paddingTop:"5%",paddingBottom:"2%"},mat_discard_pile:{position:"relative",backgroundColor:"rgba(89,90,79,0.5)",flex:1,borderRadius:15,textAlign:"center",textAlignVertical:"center"},mat_card_glow:{shadowColor:"gold",shadowRadius:15,shadowOpacity:.6},mat_grey_cover:{backgroundColor:"#595a4f",right:"2%",width:"11%",height:"65%",top:"20%",position:"absolute"},mat_goods_token_track:{position:"absolute",backgroundColor:"#5aa57c",borderColor:"#448c72",borderWidth:5,right:"10%",height:.06*N.a.get("window").width,width:"17%",borderRadius:.1*Math.round(N.a.get("window").height)/2},mat_bonus_token_track:{position:"absolute",backgroundColor:"black",borderColor:"gold",borderWidth:3,right:"3%",width:.06*N.a.get("window").width,height:.06*N.a.get("window").width,borderRadius:Math.round(N.a.get("window").width+N.a.get("window").height)/2},card:{position:"absolute",width:"10%",height:"20%",borderWidth:1,borderRadius:15,shadowColor:"black",shadowRadius:3,shadowOffset:{width:0,height:0},shadowOpacity:.6,backgroundColor:"white",padding:"6%",paddingTop:"7%",paddingBottom:"3%"},token:{borderWidth:1,borderColor:"black",shadowColor:"black",shadowRadius:3,shadowOffset:{width:0,height:0},shadowOpacity:1,overflow:"hidden",borderRadius:Math.round(N.a.get("window").width+N.a.get("window").height)/2,width:.06*N.a.get("window").width,height:.06*N.a.get("window").width,position:"absolute"},buttonPanel:{position:"absolute",left:"17%",height:"4.5%",width:"54%",justifyContent:"center",display:"flex",flexDirection:"row",alignItems:"center",alignContent:"center"},goodsTokenTrack:{top:20,bottom:76.7},bonusTokenTrack:{top:30,bottom:67}}),Z=function(e){var t={camel:a(166),cloth:a(167),cover:a(168),diamond:a(169),gold:a(170),leather:a(171),silver:a(172),spice:a(173)};return h.a.createElement((function(t){return e.isSelectable?h.a.createElement(R.a,{style:t.style,onPress:e.onPress},t.children):h.a.createElement(v.a,{style:t.style},t.children)}),{style:[Y.card,{top:M(e.top),bottom:M(e.bottom),left:H(e.left),right:H(e.right)},e.flip&&{transform:[{rotateX:"180deg"},{rotateY:"180deg"}]}]},h.a.createElement(V.a,{source:t[e.type],style:{width:"100%",height:"100%"}},e.count&&h.a.createElement(E.a,{style:{fontSize:70,textAlign:"center",height:"100%",color:"white",fontWeight:"800",textShadowRadius:10,textShadowColor:"black",top:"26%"}},e.count),h.a.createElement(v.a,null),e.selected&&h.a.createElement(E.a,{style:[{textAlign:"center",textAlignVertical:"center"},{fontSize:L(2),color:"green",left:"4%",backgroundColor:"white",width:"25%",top:"4%",height:"16%",lineHeight:23.5,borderRadius:L(1.5),overflow:"hidden",fontWeight:"800",borderWidth:3,borderColor:"green",position:"absolute"}]},"\u2713")))},X=function(e){return h.a.createElement(v.a,{style:[Y.token,{top:M(e.top),bottom:M(e.bottom),left:H(e.left),right:H(e.right),width:.08*N.a.get("window").width,height:.08*N.a.get("window").width},e.flip&&{transform:[{rotateX:"180deg"},{rotateY:"180deg"}]}]},h.a.createElement(V.a,{source:a(174),style:{width:"100%",height:"100%"}},h.a.createElement(E.a,{style:{color:"white",position:"relative",fontSize:60,top:"17%",left:"0%",fontWeight:"800",textAlign:"center",textShadowRadius:10,textShadowColor:"black"}},e.value)))},J=function(e){var t={bonus_3:a(294),bonus_4:a(295),bonus_5:a(296),camel:a(297),cloth:a(298),diamond:a(299),gold:a(300),leather:a(301),seal_of_excellence:a(302),silver:a(303),spice:a(304),coin:a(174)};return h.a.createElement(v.a,{style:[Y.token,{top:M(e.top),bottom:M(e.bottom),left:H(e.left),right:H(e.right)},e.flip&&{transform:[{rotateX:"180deg"},{rotateY:"180deg"}]}]},h.a.createElement(V.a,{source:t[e.type],style:{width:"100%",height:"100%"}},"coin"!==e.type&&void 0!==e.value&&null!==e.value&&e.value>=0&&[h.a.createElement(E.a,{style:{color:"white",position:"relative",top:"3%",left:"44%",fontWeight:"800"}},e.value),h.a.createElement(E.a,{style:{color:"white",position:"relative",top:"-27%",left:"-36.5%",fontWeight:"800",transform:[{rotateZ:"-90deg"}]}},e.value),h.a.createElement(E.a,{style:{color:"white",position:"relative",top:"33%",left:"-44%",fontWeight:"800",transform:[{rotateZ:"-180deg"}]}},e.value),h.a.createElement(E.a,{style:{color:"white",position:"relative",top:"19%",left:"36.4%",fontWeight:"800",transform:[{rotateZ:"-270deg"}]}},e.value)],"coin"===e.type&&e.value>=0&&h.a.createElement(E.a,{style:{color:"white",position:"absolute",fontSize:40,top:"19%",left:"35%",fontWeight:"800",textAlign:"center",textShadowRadius:10,textShadowColor:"black"}},e.value)))},U=function(e){return h.a.createElement((function(t){return e.disabled?h.a.createElement(v.a,{style:t.style},t.children):h.a.createElement(R.a,{style:t.style,onPress:e.onPress},t.children)}),{style:{backgroundColor:e.disabled?"grey":"red",flex:1,display:"flex",borderRadius:30,margin:5}},h.a.createElement(E.a,{style:{flex:1,color:"white",fontWeight:"800",fontSize:20,textAlign:"center",textAlignVertical:"center",borderWidth:3,borderRadius:12,padding:2,borderColor:"black"}},e.title))};function q(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var F=function(e){p()(r,e);var t,n=(t=r,function(){var e,a=u()(t);if(q()){var n=u()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return s()(this,e)});function r(e){var t;return o()(this,r),(t=n.call(this,e)).state={hand:[],handIsSelected:[],displayText:"Waiting for a new game"},t}return l()(r,[{key:"componentDidMount",value:function(){return W.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.awrap(z.a.lockAsync(z.a.OrientationLock.LANDSCAPE));case 2:case"end":return e.stop()}}),null,null,null,Promise)}},{key:"componentWillUnmount",value:function(){return W.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.awrap(z.a.unlockAsync());case 2:case"end":return e.stop()}}),null,null,null,Promise)}},{key:"updateHand",value:function(e){this.setState(e)}},{key:"renderHand",value:function(){var e=this;return this.state.hand.map((function(t,n){return h.a.createElement(R.a,{onPress:function(){return e.props.onAction({type:"select-hand-card",index:n})}},function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o={camel:a(166),cloth:a(167),cover:a(168),diamond:a(169),gold:a(170),leather:a(171),silver:a(172),spice:a(173)};return h.a.createElement(v.a,{style:[Y.card,n]},h.a.createElement(I.a,{source:o[e],style:{resizeMode:"stretch",width:"100%",height:"100%"}}),t&&h.a.createElement(E.a,{style:[{textAlign:"center",textAlignVertical:"center"},{fontSize:L(5),color:"green",left:"4%",backgroundColor:"white",width:"25%",top:"4%",height:"16%",lineHeight:23.5,borderRadius:L(4),overflow:"hidden",fontWeight:"800",borderWidth:3,borderColor:"green",position:"absolute"}]},"\u2713"))}(t,e.state.handIsSelected[n],{position:void 0,flex:1,height:.2*N.a.get("window").height,width:.4*N.a.get("window").height,borderWidth:1,borderRadius:15,shadowColor:"black",shadowRadius:3,shadowOffset:{width:0,height:0},shadowOpacity:.6,backgroundColor:"white",padding:10,paddingTop:10,paddingBottom:10,marginHorizontal:5}))}))}},{key:"render",value:function(){return h.a.createElement(w.a,{style:{flex:1,display:"flex",flexDirection:"column",backgroundColor:"#5aa57c"}},h.a.createElement(v.a,{style:{flex:3}},h.a.createElement(j.a,{style:{flex:1,display:"flex",flexDirection:"row",marginVertical:20},horizontal:!0},this.renderHand())),h.a.createElement(v.a,{style:{flex:1,display:"flex"}},h.a.createElement(E.a,{style:{flex:1,textAlign:"center",lineHeight:80,fontSize:35,color:"white",textShadowColor:"black",textShadowRadius:10}},this.state.displayText)))}}]),r}(h.a.Component),K=a(22),Q=a.n(K),$=a(24),ee=a.n($),te=function(e){return h.a.createElement(v.a,{style:[Y.mat_strips,{width:H(e.width),top:M(e.top),bottom:M(e.bottom)}]},e.children)},ae=function(e){return h.a.createElement(v.a,{style:[Y.mat_strip_circle,{top:M(e.top),bottom:M(e.bottom),left:H(e.left)}]},e.children)},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{glow:!1};return h.a.createElement(v.a,{style:[Y.mat_card,{top:M(e.top),bottom:M(e.bottom),left:H(e.left)},e.glow&&Y.mat_card_glow]},e.children)},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{flip:!1};return h.a.createElement(I.a,{source:a(305),style:[{position:"absolute",height:"5%",width:"5%",opacity:.2,resizeMode:"stretch",top:M(e.top),bottom:M(e.bottom),left:H(e.left)},e.flip&&{transform:[{rotateX:"180deg"},{rotateY:"180deg"}]}]})},re=function(e){return h.a.createElement(v.a,{style:[Y.mat_goods_token_track,{top:M(e.top)}]})},le=function(e){return h.a.createElement(v.a,{style:[Y.mat_bonus_token_track,{top:M(e.top)}]})};function ie(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var se=function(e){p()(n,e);var t,a=(t=n,function(){var e,a=u()(t);if(ie()){var n=u()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return s()(this,e)});function n(e){var t;return o()(this,n),(t=a.call(this,e)).goodsTokenTrackTop=20,t.goodsTokenTrackBottom=76.7,t.bonusTokenTrackTop=30,t.bonusTokenTrackBottom=67,t.state={playerStates:[{sealsOfExcellence:0,camels:0,hasCamelToken:!1,rupees:0,goodsTokens:{diamond:[],gold:[],silver:[],cloth:[],spice:[],leather:[]},bonusTokens:{bonus_3:[],bonus_4:[],bonus_5:[]}},{sealsOfExcellence:0,camels:0,hasCamelToken:!1,rupees:0,goodsTokens:{diamond:[],gold:[],silver:[],cloth:[],spice:[],leather:[]},bonusTokens:{bonus_3:[],bonus_4:[],bonus_5:[]}}],market:[null,null,null,null,null],marketIsSelected:[!1,!1,!1,!1,!1],marketIsSelectable:[!1,!1,!1,!1,!1],topDiscard:null,drawPileHasCards:!1,goodsTokens:{diamond:[],gold:[],silver:[],cloth:[],spice:[],leather:[]},bonusTokens:{bonus_3:0,bonus_4:0,bonus_5:0},camelToken:!1,currentPlayerIndex:-1,buttons:[["start","Start Game",!1]],players:[]},t}return l()(n,[{key:"updateBoard",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=this,t=this.goodsTokenTrackTop,a=this.goodsTokenTrackBottom,n=this.bonusTokenTrackTop,o=this.bonusTokenTrackBottom;return h.a.createElement(w.a,{style:Y.mat},function(){var e=Y.goodsTokenTrack.top,t=Y.goodsTokenTrack.bottom,a=Y.bonusTokenTrack.top,n=Y.bonusTokenTrack.bottom;return[[h.a.createElement(te,{width:100,top:7}),h.a.createElement(te,{width:100,bottom:7}),h.a.createElement(te,{width:65,top:20}),h.a.createElement(te,{width:65,bottom:20}),G(39,55,3).map((function(e){return[h.a.createElement(ae,{top:4,left:e}),h.a.createElement(ae,{bottom:4,left:e})]}))],h.a.createElement(oe,{left:40,top:6.5,flip:!0}),G(1,11.5,3).map((function(e){return h.a.createElement(oe,{left:e,top:13,flip:!0})})),G(27.5,32.75,2).map((function(e){return h.a.createElement(oe,{left:e,top:13,flip:!0})})),h.a.createElement(oe,{left:40,bottom:6.5}),G(1,11.5,3).map((function(e){return h.a.createElement(oe,{left:e,bottom:13})})),G(27.5,32.75,2).map((function(e){return h.a.createElement(oe,{left:e,bottom:13})})),h.a.createElement(ne,{left:5,top:30},h.a.createElement(v.a,{style:[Y.mat_discard_pile]},h.a.createElement(E.a,{style:{transform:[{rotateZ:"-90deg"}],top:"38%",fontSize:35,color:"rgba(255, 215, 0, 0.2)",shadowOpacity:1,shadowColor:"white",shadowOffset:{width:0,height:0}}},"Discard"))),h.a.createElement(ne,{left:5,bottom:30}),h.a.createElement(ne,{left:17,top:5}),h.a.createElement(ne,{left:17,bottom:5}),G(17,61,5).map((function(e){return h.a.createElement(ne,{left:e,top:42,glow:!0})})),h.a.createElement(v.a,{style:Y.mat_grey_cover}),G(e,t,6).map((function(e){return h.a.createElement(re,{top:e})})),G(a,n,4).map((function(e){return h.a.createElement(le,{top:e})}))]}(),h.a.createElement(v.a,{style:{position:"absolute",top:"50%",transform:[{rotateZ:"-90deg"}],left:"-7.5%",flexDirection:"row",width:"20%"}},h.a.createElement(U,{title:"Back",onPress:function(){e.props.onBack()}}),h.a.createElement(U,{title:"Reset",onPress:function(){e.props.onAction({type:"reset"})}})),this.state.playerStates[0].sealsOfExcellence>=1&&h.a.createElement(J,{type:"seal_of_excellence",top:4.7,left:47.5,flip:!0}),this.state.playerStates[0].sealsOfExcellence>=2&&h.a.createElement(J,{type:"seal_of_excellence",top:4.7,left:55.5,flip:!0}),this.state.playerStates[1].sealsOfExcellence>=1&&h.a.createElement(J,{type:"seal_of_excellence",bottom:4.7,left:47.5}),this.state.playerStates[1].sealsOfExcellence>=2&&h.a.createElement(J,{type:"seal_of_excellence",bottom:4.7,left:55.5}),this.state.playerStates[0].hasCamelToken&&h.a.createElement(J,{type:"camel",top:4.7,left:39.5,flip:!0}),this.state.playerStates[1].hasCamelToken&&h.a.createElement(J,{type:"camel",bottom:4.7,left:39.5}),[["diamond",this.state.goodsTokens.diamond],["gold",this.state.goodsTokens.gold],["silver",this.state.goodsTokens.silver],["cloth",this.state.goodsTokens.cloth],["spice",this.state.goodsTokens.spice],["leather",this.state.goodsTokens.leather]].map((function(e,n){var o=ee()(e,2),r=o[0];return o[1].map((function(e,o){return h.a.createElement(J,{type:r,value:e,top:t+n*(a-t)/5,left:84-1.38*o})}))})),this.state.drawPileHasCards&&h.a.createElement(Z,{type:"cover",bottom:30,left:5}),null!==this.state.topDiscard&&h.a.createElement(Z,{type:this.state.topDiscard,top:30,left:5}),this.state.playerStates[0].camels>0&&h.a.createElement(Z,{type:"camel",count:this.state.playerStates[0].camels,left:17,top:5,flip:!0}),this.state.playerStates[1].camels>0&&h.a.createElement(Z,{type:"camel",count:this.state.playerStates[1].camels,left:17,bottom:5}),this.state.market.map((function(t,a){return t&&h.a.createElement(Z,{left:17+11*a,top:42,type:t,selected:e.state.marketIsSelected[a],isSelectable:e.state.marketIsSelectable[a],onPress:function(){return e.props.onAction({type:"select-card",index:a})}})})),new Array(this.state.bonusTokens.bonus_3).fill(null).map((function(e,t){return h.a.createElement(J,{type:"bonus_3",top:n+.6*t,right:3})})),new Array(this.state.bonusTokens.bonus_4).fill(null).map((function(e,t){return h.a.createElement(J,{type:"bonus_4",top:n+(o-n)/3+.6*t,right:3})})),new Array(this.state.bonusTokens.bonus_5).fill(null).map((function(e,t){return h.a.createElement(J,{type:"bonus_5",top:n+2*(o-n)/3+.6*t,right:3})})),this.state.camelToken&&h.a.createElement(J,{type:"camel",top:n+3*(o-n)/3,right:3}),h.a.createElement(X,{top:3.5,right:2,value:this.state.playerStates[0].rupees,flip:!0}),h.a.createElement(X,{bottom:3.5,right:2,value:this.state.playerStates[1].rupees}),[0,1].map((function(t){return[].concat(Q()(e.state.playerStates[t].goodsTokens.diamond.map((function(e){return{type:"diamond",value:e}}))),Q()(e.state.playerStates[t].goodsTokens.gold.map((function(e){return{type:"gold",value:e}}))),Q()(e.state.playerStates[t].goodsTokens.silver.map((function(e){return{type:"silver",value:e}}))),Q()(e.state.playerStates[t].goodsTokens.cloth.map((function(e){return{type:"cloth",value:e}}))),Q()(e.state.playerStates[t].goodsTokens.spice.map((function(e){return{type:"spice",value:e}}))),Q()(e.state.playerStates[t].goodsTokens.leather.map((function(e){return{type:"leather",value:e}}))),Q()(e.state.playerStates[t].bonusTokens.bonus_3.map((function(e){return{type:"coin",value:e}}))),Q()(e.state.playerStates[t].bonusTokens.bonus_4.map((function(e){return{type:"coin",value:e}}))),Q()(e.state.playerStates[t].bonusTokens.bonus_5.map((function(e){return{type:"coin",value:e}})))).map((function(e,a){var n=e.type,o=e.value;return 0===t?h.a.createElement(J,{type:n,value:o,top:4.7,left:83-.8*a,flip:!0}):h.a.createElement(J,{type:n,value:o,bottom:4.7,left:83-.8*a})}))})),[0,1].map((function(t){return h.a.createElement(v.a,{style:[Y.buttonPanel,0==t?{bottom:"68%",transform:[{rotateX:"180deg"},{rotateY:"180deg"}]}:{top:"68%"}]},function(){if(-1===e.state.currentPlayerIndex||e.state.currentPlayerIndex===t)return e.state.buttons.map((function(a){var n=ee()(a,3),o=n[0],r=n[1],l=n[2];return"start"===o&&2!==e.state.players.length&&(l=!0),"start"===o&&e.state.players.length>t&&(r=r+" ("+e.state.players[t]+")"),h.a.createElement(U,{title:r,disabled:l,onPress:function(){e.props.onAction({type:o})}})}))}())})))}}]),n}(h.a.Component);function ce(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var ue=function(e){p()(n,e);var t,a=(t=n,function(){var e,a=u()(t);if(ce()){var n=u()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return s()(this,e)});function n(e){var t;return o()(this,n),(t=a.call(this,e)).board=h.a.createRef(),t.hand=h.a.createRef(),t}return l()(n,[{key:"updateScreen",value:function(e){"board"===this.props.playerName?this.board.current.updateBoard(e):this.hand.current.updateHand(e)}},{key:"render",value:function(){return"board"===this.props.playerName?h.a.createElement(se,{ref:this.board,onAction:this.props.onAction,onBack:this.props.onBack}):h.a.createElement(F,{ref:this.hand,onAction:this.props.onAction,onBack:this.props.onBack})}}]),n}(h.a.Component),de=a(21),pe=a.n(de),fe=a(25),me=a.n(fe),he=a(30);function ge(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var ye=function(e){p()(r,e);var t,n=(t=r,function(){var e,a=u()(t);if(ge()){var n=u()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return s()(this,e)});function r(e){var t;return o()(this,r),(t=n.call(this,e)).state={players:{red:[],redCodemaster:void 0,blue:[],blueCodemaster:void 0},buttons:[],playerNameDisplay:null,displayText:"Connecting to server...",status:"none",board:[]},t}return l()(r,[{key:"componentDidMount",value:function(){return W.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.awrap(z.a.lockAsync(z.a.OrientationLock.LANDSCAPE));case 2:case"end":return e.stop()}}),null,null,null,Promise)}},{key:"componentWillUnmount",value:function(){return W.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.awrap(z.a.unlockAsync());case 2:case"end":return e.stop()}}),null,null,null,Promise)}},{key:"updateScreen",value:function(e){this.setState(e)}},{key:"renderPlayerSelection",value:function(){var e=this,t=function(t){var a=("red"==t?"Red":"Blue")+" Team",n="red"===t?e.state.players.red:e.state.players.blue,o="red"===t?e.state.players.redCodemaster:e.state.players.blueCodemaster;return h.a.createElement(v.a,{style:{flex:3,backgroundColor:"rgba(255, 255, 255, 0.3)",borderRadius:30,margin:"2%",padding:"2%"}},h.a.createElement(E.a,{style:{textAlign:"center",color:t,fontSize:30,textShadowColor:"white",textShadowRadius:3,paddingVertical:"2%"}},a),h.a.createElement(v.a,{style:{marginVertical:8,borderBottomColor:"#737373",borderBottomWidth:1}}),h.a.createElement(E.a,{style:{fontSize:20,color:"white"}},"Codemaster: ",o),h.a.createElement(v.a,{style:{marginVertical:8,borderBottomColor:"#737373",borderBottomWidth:1}}),n.map((function(e){return h.a.createElement(E.a,{style:{fontSize:20,color:"white"}},e)})))};return[t("red"),t("blue")]}},{key:"renderBoard",value:function(){var e=this,t=N.a.get("window"),n=t.width/375,o=t.height/667,r=Math.min(n,o),l=function(e){return Math.ceil(e*r)},i=function(e){var t=h.a.useState(null),a=ee()(t,2),n=a[0],o=a[1],r=C.a.flatten(e.style)||{},l=r.aspectRatio,i=void 0===l?1:l,s=[me()(r,["aspectRatio"]),{aspectRatio:i}];if(n){n.width;var c=n.height,u=void 0===c?0:c;s.push({width:u*i,height:u})}return h.a.createElement((function(t){return e.isSelectable?h.a.createElement(f.e,{style:t.style,onPress:e.onPress,onLayout:e.onLayout},t.children):h.a.createElement(v.a,{style:t.style,onLayout:e.onLayout},t.children)}),pe()({},e,{style:[{height:Object(he.a)(15),width:Object(he.a)(500/345*14)},s],onLayout:function(e){var t=e.nativeEvent.layout;o(t),console.log(t)}}),e.children)};return h.a.createElement(v.a,{style:{flex:1,display:"flex",flexDirection:"column",backgroundColor:"#817264",margin:20,marginVertical:5,padding:10}},this.state.board.map((function(t,n){return h.a.createElement(v.a,{style:{flex:1,display:"flex",flexDirection:"row"}},t.map((function(t,o){var r="word"===t.kind?"#cebc9c":"black";return h.a.createElement(v.a,{style:{flex:1,alignItems:"center",justifyContent:"center"}},h.a.createElement(v.a,{style:{flex:1,marginVertical:Object(he.a)(.4),marginHorizontal:Object(he.b)(.4)}},h.a.createElement(i,{style:{backgroundColor:r,borderColor:t.color,shadowColor:t.color,shadowOpacity:1,shadowOffset:{width:0,height:0},shadowRadius:10,borderWidth:Object(he.b)(.25),aspectRatio:500/345,flex:1,borderRadius:Object(he.b)(.5)},isSelectable:t.isSelectable,onPress:function(){e.props.onAction({type:"card",rowIndex:n,colIndex:o})}},function(){switch(t.kind){case"word":return h.a.createElement(v.a,{style:{flex:1,margin:Object(he.b)(.4),borderColor:"#b3956d",borderWidth:Object(he.b)(.15),backgroundColor:"#d0b694",borderRadius:Object(he.b)(.1),display:"flex",flexDirection:"column"}},h.a.createElement(v.a,{style:{flex:1}},h.a.createElement(v.a,{style:{flex:1,marginHorizontal:Object(he.b)(.2),borderBottomColor:"#b3956d",borderBottomWidth:Object(he.b)(.15)}},h.a.createElement(E.a,{style:{flex:1,color:"#746653",textAlign:"right",marginLeft:"15%",fontSize:l(11),fontStyle:"italic",fontWeight:"800",transform:[{rotateZ:"180deg"}]}},t.value))),h.a.createElement(v.a,{style:{flex:1}},h.a.createElement(v.a,{style:{flex:1,alignItems:"center",flexDirection:"row",margin:Object(he.b)(.4),borderBottomLeftRadius:Object(he.b)(.5),borderBottomRightRadius:Object(he.b)(.5),backgroundColor:"white"}},h.a.createElement(E.a,{style:{flex:1,textAlign:"center",fontSize:l(14),fontWeight:"800"}},t.value))));case"bystander":return h.a.createElement(v.a,{style:{flex:1,borderColor:"#b3956d",borderWidth:Object(he.b)(.15),borderRadius:Object(he.b)(.1)}},h.a.createElement(V.a,{source:a(306),style:{width:"100%",height:"100%"}}));case"agent-red":return h.a.createElement(v.a,{style:{flex:1,borderColor:"red",borderWidth:Object(he.b)(.15),borderRadius:Object(he.b)(.1)}},h.a.createElement(V.a,{source:a(307),style:{width:"100%",height:"100%"}}));case"agent-blue":return h.a.createElement(v.a,{style:{flex:1,borderColor:"blue",borderWidth:Object(he.b)(.15),borderRadius:Object(he.b)(.1)}},h.a.createElement(V.a,{source:a(308),style:{width:"100%",height:"100%"}}));case"assasin":return h.a.createElement(v.a,{style:{flex:1,borderColor:"black",borderWidth:Object(he.b)(.15),borderRadius:Object(he.b)(.1)}},h.a.createElement(V.a,{source:a(309),style:{width:"100%",height:"100%"}}))}}())))})))})))}},{key:"render",value:function(){var e=this;return h.a.createElement(w.a,{style:{flex:1,backgroundColor:"#446983"}},h.a.createElement(v.a,{style:{flex:1,flexDirection:"column",display:"flex"}},h.a.createElement(v.a,{style:{flex:2,display:"flex",flexDirection:"row",alignItems:"center"}},this.state.buttons.map((function(t){var a=ee()(t,3),n=a[0],o=a[1],r=a[2];return h.a.createElement(T,{title:n,disabled:!r,onPress:function(){"back"===o?e.props.onBack():e.props.onAction({type:o})}})}))),h.a.createElement(v.a,{style:{flex:1,display:"flex",flexDirection:"row",alignItems:"center"}},this.state.playerNameDisplay&&h.a.createElement(E.a,{style:{flex:1,textAlign:"center",color:"white",fontSize:.02*N.a.get("window").width}},this.state.playerNameDisplay),h.a.createElement(E.a,{style:{flex:1,textAlign:"center",color:"white",fontSize:.02*N.a.get("window").width}},this.state.displayText)),h.a.createElement(v.a,{style:{flex:14,flexDirection:"row",display:"flex"}},function(){switch(e.state.status){case"player-selection":return e.renderPlayerSelection();case"board":case"game-over":return e.renderBoard();case"none":return[]}}())))}}]),r}(h.a.Component);function be(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var we=function(e){p()(n,e);var t,a=(t=n,function(){var e,a=u()(t);if(be()){var n=u()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return s()(this,e)});function n(e){var t;return o()(this,n),(t=a.call(this,e)).onAction=function(e){return W.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:t.socket.emit("action",e);case 1:case"end":return a.stop()}}),null,null,null,Promise)},t.screen=h.a.createRef(),t}return l()(n,[{key:"componentDidMount",value:function(){var e=this;this.socket=B()(_,{query:{playerName:this.props.playerName,gameCode:this.props.gameCode,gameName:this.props.gameName,password:this.props.password}}),this.socket.on("content",(function(t){0!==Object.keys(t).length&&e.screen.current.updateScreen(t)}))}},{key:"componentWillUnmount",value:function(){this.socket.close()}},{key:"render",value:function(){var e=this,t=function(){switch(e.props.gameName){case"codenames":return ye;case"jaipur":return ue}}();return h.a.createElement(t,{ref:this.screen,playerName:this.props.playerName,onAction:this.onAction,onBack:this.props.onBack})}}]),n}(h.a.Component),ve=function(e){return h.a.createElement(we,{playerName:e.route.params.playerName,gameCode:e.route.params.gameCode,gameName:e.route.params.gameName,password:e.route.params.password,onBack:e.navigation.goBack})};function ke(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}a.d(t,"a",(function(){return xe})),console.disableYellowBox=!0;var Ee=Object(y.a)(),xe=function(e){p()(n,e);var t,a=(t=n,function(){var e,a=u()(t);if(ke()){var n=u()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return s()(this,e)});function n(){return o()(this,n),a.apply(this,arguments)}return l()(n,[{key:"render",value:function(){return h.a.createElement(g.a,null,h.a.createElement(Ee.Navigator,{headerMode:"screen"},h.a.createElement(Ee.Screen,{name:"Home",component:O,options:{headerTitle:"All A-Board"}}),h.a.createElement(Ee.Screen,{name:"GameScreen",component:ve,options:{headerShown:!1}})))}}]),n}(m.Component)},232:function(e,t,a){a(233),e.exports=a(234)},233:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},291:function(e,t){},294:function(e,t,a){e.exports=a.p+"static/media/bonus_3_token.b7d6048e.png"},295:function(e,t,a){e.exports=a.p+"static/media/bonus_4_token.9dbb865c.png"},296:function(e,t,a){e.exports=a.p+"static/media/bonus_5_token.0b15f02d.png"},297:function(e,t,a){e.exports=a.p+"static/media/camel_token.f1239e82.png"},298:function(e,t,a){e.exports=a.p+"static/media/cloth_token.b45112dd.png"},299:function(e,t,a){e.exports=a.p+"static/media/diamond_token.eb1081d0.png"},300:function(e,t,a){e.exports=a.p+"static/media/gold_token.31dad298.png"},301:function(e,t,a){e.exports=a.p+"static/media/leather_token.027cb7e8.png"},302:function(e,t,a){e.exports=a.p+"static/media/seal_of_excellence.c17ff76a.png"},303:function(e,t,a){e.exports=a.p+"static/media/silver_token.404ac8cc.png"},304:function(e,t,a){e.exports=a.p+"static/media/spice_token.9a70cbc9.png"},305:function(e,t,a){e.exports=a.p+"static/media/camel-char.87d3d7f8.png"},306:function(e,t,a){e.exports=a.p+"static/media/bystander.75a5f2bf.jpg"},307:function(e,t,a){e.exports=a.p+"static/media/agent-red.211f9441.jpg"},308:function(e,t,a){e.exports=a.p+"static/media/agent-blue.5e1826cf.jpg"},309:function(e,t,a){e.exports=a.p+"static/media/assasin.411b1958.jpg"}},[[232,1,2]]]);
//# sourceMappingURL=app.593bdc58.chunk.js.map