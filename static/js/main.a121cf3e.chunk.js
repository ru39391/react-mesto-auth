(window["webpackJsonpreact-mesto-auth"]=window["webpackJsonpreact-mesto-auth"]||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/profile__edit-button.befe4749.svg"},23:function(e,a,t){e.exports=t.p+"static/media/header__logo.feb2a04d.svg"},24:function(e,a,t){e.exports=t.p+"static/media/photo-wrap__remove-button.efa6fb04.svg"},25:function(e,a,t){e.exports=t.p+"static/media/profile__add-button.6e6e10a0.svg"},28:function(e,a,t){e.exports=t.p+"static/media/icon-error.65a7d959.svg"},29:function(e,a,t){e.exports=t.p+"static/media/icon-success.7fc4c149.svg"},30:function(e,a,t){e.exports=t.p+"static/media/profile__avatar.819cf6eb.png"},31:function(e,a,t){e.exports=t.p+"static/media/icon-show.659a8189.svg"},33:function(e,a,t){e.exports=t(47)},42:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(22),c=t.n(o),l=(t(42),t(8)),i=t(32),s=t(3),m=t(1),u=t(23),d=t.n(u);var _=function(e){var a=e.children;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__wrapper"},r.a.createElement("img",{className:"header__logo",src:d.a,alt:"\u041c\u0435\u0441\u0442\u043e"}),a))},f=t(24),h=t.n(f);var p=function(e){var a=e.card,t=e.onCardDelete;return r.a.createElement("button",{className:"photo-wrap__remove-button",type:"button",onClick:function(){t(a)}},r.a.createElement("img",{className:"photo-wrap__remove-icon",src:h.a,alt:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}))},v=r.a.createContext();var E=function(e){var a=e.card,t=e.link,n=e.name,o=e.likesCounter,c=e.onCardClick,l=e.onCardLike,i=e.onCardDelete,s=r.a.useContext(v),m=a.owner._id===s.id,u=a.likes.some((function(e){return e._id===s.id}));return r.a.createElement("article",{className:"photo-wrap"},r.a.createElement("div",{className:"photo-wrap__photo-holder",onClick:function(){c(a)}},r.a.createElement("img",{className:"photo-wrap__picture",src:t,alt:n})),r.a.createElement("div",{className:"photo-wrap__info"},r.a.createElement("h2",{className:"photo-wrap__title"},n),r.a.createElement("div",{className:"photo-wrap__likes"},r.a.createElement("button",{className:"photo-wrap__like-button ".concat(u?"photo-wrap__like-button_active":""),type:"button",onClick:function(){l(a)}}),r.a.createElement("div",{className:"photo-wrap__likes-counter"},o))),m&&r.a.createElement(p,{card:a,onCardDelete:i}))},b=t(19),g=t.n(b),N=t(25),k=t.n(N);var C=function(e){var a=e.cards,t=e.onEditAvatar,n=e.onEditProfile,o=e.onAddPlace,c=e.onCardClick,l=e.onCardLike,i=e.onCardDelete,s=r.a.useContext(v);return r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__aside"},r.a.createElement("div",{className:"profile__avatar-holder"},r.a.createElement("img",{className:"profile__avatar",src:s.avatar,alt:s.name}),r.a.createElement("button",{className:"profile__avatar-button",type:"button",onClick:t},r.a.createElement("img",{className:"profile__edit-icon",src:g.a,alt:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440"}))),r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__info-heading"},r.a.createElement("h1",{className:"profile__title"},s.name),r.a.createElement("button",{className:"profile__edit-button",type:"button",onClick:n},r.a.createElement("img",{src:g.a,alt:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"}))),r.a.createElement("p",{className:"profile__subtitle"},s.about))),r.a.createElement("button",{className:"profile__add-button",type:"button",onClick:o},r.a.createElement("img",{src:k.a,alt:"\u0414\u043e\u0431\u0430\u0432\u0442\u044c \u0444\u043e\u0442\u043e"}))),r.a.createElement("section",{className:"elements"},a.map((function(e){return r.a.createElement(E,{card:e,key:e._id,link:e.link,name:e.name,likesCounter:e.likes.length,onCardClick:c,onCardLike:l,onCardDelete:i})}))))};var y=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 ",(new Date).getFullYear()," Mesto Russia"))},O=t(7),w=t.n(O);var U=function(e){var a=e.card,t=e.onClose;return r.a.createElement("div",{className:"modal modal_target_reveal-photo modal_bg_dark ".concat(a&&"modal_visible")},r.a.createElement("div",{className:"modal__content modal__content_type_photo-holder"},r.a.createElement("button",{className:"modal__close",type:"button",onClick:t},r.a.createElement("img",{className:"modal__close-icon",src:w.a,alt:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0432\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u043e\u043a\u043d\u043e"})),r.a.createElement("img",{className:"modal__photo",src:a&&a.link,alt:a&&a.name}),r.a.createElement("p",{className:"modal__photo-caption"},a&&a.name)))};var j=function(e){var a=e.className,t=e.formName,n=e.title,o=e.btnCaption,c=e.children,l=e.isOpen,i=e.onClose,s=e.onSubmit;return r.a.createElement("div",{className:"modal modal_target_".concat(a," ").concat(l&&"modal_visible")},r.a.createElement("div",{className:"modal__content"},r.a.createElement("button",{className:"modal__close",type:"button",onClick:i},r.a.createElement("img",{className:"modal__close-icon",src:w.a,alt:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0432\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u043e\u043a\u043d\u043e"})),r.a.createElement("h2",{className:"modal__title"},n),r.a.createElement("form",{className:"form",name:t,onSubmit:s,action:"#"},c,r.a.createElement("button",{className:"form__button",type:"submit"},r.a.createElement("span",{className:"form__button-caption"},o),r.a.createElement("span",{className:"form__button-loading"})))))};var S=function(e){var a=e.isOpen,t=e.onClose,n=e.onUpdateUser,o=r.a.useContext(v),c=r.a.useState(""),l=Object(s.a)(c,2),i=l[0],m=l[1],u=r.a.useState(""),d=Object(s.a)(u,2),_=d[0],f=d[1];return r.a.useEffect((function(){m(o.name),f(o.about)}),[o,a]),r.a.createElement(j,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",className:"edit-profile",formName:"editProfile",btnCaption:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:a,onClose:t,onSubmit:function(e){e.preventDefault(),n({name:i,about:_})}},r.a.createElement("fieldset",{className:"form__body"},r.a.createElement("div",{className:"form__field-holder"},r.a.createElement("input",{className:"form__field",name:"name",minLength:"2",maxLength:"40",type:"text",placeholder:"\u0418\u043c\u044f",value:i||"",onChange:function(e){m(e.target.value)},required:!0}),r.a.createElement("div",{className:"form__error name-error"})),r.a.createElement("div",{className:"form__field-holder"},r.a.createElement("input",{className:"form__field",name:"about",minLength:"2",maxLength:"200",type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",value:_||"",onChange:function(e){f(e.target.value)},required:!0}),r.a.createElement("div",{className:"form__error about-error"}))))};var x=function(e){var a=e.isOpen,t=e.onClose,n=e.onUpdateAvatar,o=r.a.useRef();return r.a.useEffect((function(){o.current.value=""}),[a]),r.a.createElement(j,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",className:"update-userpic",formName:"updateUserpic",btnCaption:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:a,onClose:t,onSubmit:function(e){e.preventDefault(),n({avatar:o.value})}},r.a.createElement("fieldset",{className:"form__body"},r.a.createElement("div",{className:"form__field-holder"},r.a.createElement("input",{className:"form__field",name:"avatar",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:o,onChange:function(e){o.value=e.target.value},required:!0}),r.a.createElement("div",{className:"form__error avatar-error"}))))};var P=function(e){var a=e.isOpen,t=e.onClose,n=e.onAddPlace,o={name:r.a.useRef(""),link:r.a.useRef("")};function c(e){o[e.target.name]=e.target.value}return r.a.useEffect((function(){Object.keys(o).forEach((function(e){o[e].current.value=""}))}),[o,a]),r.a.createElement(j,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",className:"add-card",formName:"addCard",btnCaption:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:a,onClose:t,onSubmit:function(e){e.preventDefault(),n({name:o.name,link:o.link})}},r.a.createElement("fieldset",{className:"form__body"},r.a.createElement("div",{className:"form__field-holder"},r.a.createElement("input",{className:"form__field",name:"name",minLength:"2",maxLength:"30",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",ref:o.name,onChange:c,required:!0}),r.a.createElement("div",{className:"form__error name-error"})),r.a.createElement("div",{className:"form__field-holder"},r.a.createElement("input",{className:"form__field",name:"link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:o.link,onChange:c,required:!0}),r.a.createElement("div",{className:"form__error link-error"}))))};var L=function(e){var a=e.tooltip,t=e.isOpen,n=e.onHandleVisibility;return r.a.createElement("div",{className:"modal modal_target_".concat(a.className," ").concat(t&&"modal_visible")},r.a.createElement("div",{className:"modal__content modal__content_display_flex"},r.a.createElement("button",{className:"modal__close",type:"button",onClick:n},r.a.createElement("img",{className:"modal__close-icon",src:w.a,alt:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0432\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u043e\u043a\u043d\u043e"})),r.a.createElement("div",{className:"modal__response"},r.a.createElement("img",{className:"modal__response-icon",src:a.icon,alt:a.title})),r.a.createElement("h2",{className:"modal__title modal__title_align_center modal__title_mb_none"},a.title)))};var R=function(){return r.a.createElement("p",{className:"form__footer-text"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",r.a.createElement(l.b,{to:"/sign-in",className:"form__footer-link"},"\u0412\u043e\u0439\u0442\u0438"))},D=r.a.createContext();var T=function(e){var a=e.classMod,t=e.formName,n=e.title,o=e.btnCaption,c=e.isOpen,l=e.onHandleVisibility,i=e.onUpdateTooltip,s=r.a.useContext(D),m={password:r.a.useRef(""),email:r.a.useRef("")};function u(e){var a=e.target,t=a.name,n=a.value;m[t]=n}return r.a.useEffect((function(){Object.keys(m).forEach((function(e){m[e].current.value=""}))}),[m]),r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form form_container ".concat(a),name:t,onSubmit:function(e){e.preventDefault();var a=m.password,t=m.email;i({password:a,email:t})},action:"#"},r.a.createElement("div",{className:"form__wrapper"},r.a.createElement("div",{className:"form__title form__title_color_white"},n),r.a.createElement("fieldset",{className:"form__body form__body_height_max"},r.a.createElement("div",{className:"form__field-holder"},r.a.createElement("input",{className:"form__field form__field_color_white",name:"email",minLength:"2",type:"email",placeholder:"Email",ref:m.email,onChange:u,required:!0}),r.a.createElement("div",{className:"form__error email-error"})),r.a.createElement("div",{className:"form__field-holder"},r.a.createElement("input",{className:"form__field form__field_color_white",name:"password",minLength:"9",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",ref:m.password,onChange:u,required:!0}),r.a.createElement("div",{className:"form__error password-error"}))),r.a.createElement("div",{className:"form__footer"},r.a.createElement("button",{className:"form__button form__button_bg_white",type:"submit"},r.a.createElement("span",{className:"form__button-caption"},o),r.a.createElement("span",{className:"form__button-loading"})),"signup"===t&&r.a.createElement(R,null)))),r.a.createElement(L,{tooltip:s,isOpen:c,onHandleVisibility:l}))},A=function(e){var a=Object.assign({},e);return r.a.createElement(m.b,null,(function(){return a.isLoggedIn?a.children:r.a.createElement(m.a,{to:"./sign-in"})}))},q=t(13),H=t(14),I=t(16),J=t(15),M=t(28),V=t.n(M),W=t(29),z="https://auth.nomoreparties.co",B="https://mesto.nomoreparties.co/v1/cohort-43",F="bee12215-09da-441f-9f38-f7f695bca43f",G={endPoint:"signup",errorAlert:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"},Y={endPoint:"signin",errorAlert:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"},$={success:{className:"success",title:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",icon:t.n(W).a},error:{className:"error",title:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",icon:V.a}},K=new(function(e){Object(I.a)(t,e);var a=Object(J.a)(t);function t(e){var n,r=e.baseUrl,o=e.headers;return Object(q.a)(this,t),(n=a.call(this))._baseUrl=r,n._headers=o,n}return Object(H.a)(t,[{key:"_checkResponse",value:function(e,a){return e.ok?e.json():Promise.reject("".concat(a,": ").concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(a){return e._checkResponse(a,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a")}))}},{key:"addCard",value:function(e){var a=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return a._checkResponse(e,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438")}))}},{key:"removeCard",value:function(e){var a=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e.id),{method:"DELETE",headers:this._headers}).then((function(e){return a._checkResponse(e,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438")}))}},{key:"changeLikeCardStatus",value:function(e){var a=this,t={method:e.isLiked?"PUT":"DELETE",alert:e.isLiked?"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435":"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e"};return fetch("".concat(this._baseUrl,"/cards/").concat(e.id,"/likes"),{method:t.method,headers:this._headers}).then((function(e){return a._checkResponse(e,t.alert)}))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(a){return e._checkResponse(a,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")}))}},{key:"setUserData",value:function(e){var a=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return a._checkResponse(e,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")}))}},{key:"setUserPic",value:function(e){var a=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return a._checkResponse(e,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")}))}}]),t}(r.a.Component))({baseUrl:B,headers:{authorization:F,"Content-Type":"application/json"}}),Q=new(function(e){Object(I.a)(t,e);var a=Object(J.a)(t);function t(e){var n;return Object(q.a)(this,t),(n=a.call(this))._baseUrl=e,n}return Object(H.a)(t,[{key:"_checkResponse",value:function(e,a){return e.ok?e.json():Promise.reject("".concat(a,": ").concat(e.status))}},{key:"authUser",value:function(e,a){var t=this;return fetch("".concat(this._baseUrl,"/").concat(a.endPoint),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e.password,email:e.email})}).then((function(e){return t._checkResponse(e,a.errorAlert)}))}},{key:"getUserToken",value:function(e){var a=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return a._checkResponse(e,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 JSON Web Token")}))}}]),t}(r.a.Component))(z),X=t(30),Z=t.n(X),ee=t(31),ae=t.n(ee);var te=function(){var e=Object(m.g)(),a=r.a.useState({id:null,name:"\u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e",about:"\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u043a\u0435\u0430\u043d\u0430",avatar:Z.a}),t=Object(s.a)(a,2),n=t[0],o=t[1],c=r.a.useState([]),u=Object(s.a)(c,2),d=u[0],f=u[1];r.a.useEffect((function(){Promise.all([K.getUserData(),K.getInitialCards()]).then((function(e){var a=Object(s.a)(e,2),t=a[0],n=a[1];o({id:t._id,name:t.name,about:t.about,avatar:t.avatar}),f(n)})).catch((function(e){console.log(e)}))}),[]);var h=r.a.useState(!1),p=Object(s.a)(h,2),E=p[0],b=p[1],g=r.a.useState(!1),N=Object(s.a)(g,2),k=N[0],O=N[1],L=r.a.useState(!1),R=Object(s.a)(L,2),q=R[0],H=R[1],I=r.a.useState(null),J=Object(s.a)(I,2),M=J[0],V=J[1];function W(){b(!1),O(!1),H(!1),V(null)}var z=r.a.useState(!1),B=Object(s.a)(z,2),F=B[0],X=B[1],ee=r.a.useState({className:"",title:"",icon:""}),te=Object(s.a)(ee,2),ne=te[0],re=te[1],oe=r.a.useState(!1),ce=Object(s.a)(oe,2),le=ce[0],ie=ce[1];function se(e){re(e)}function me(){le?("success"===ne.className&&e.push("/sign-in"),ie(!1)):ie(!0)}var ue=r.a.useState(!1),de=Object(s.a)(ue,2),_e=de[0],fe=de[1];function he(){fe(!0)}var pe=r.a.useState({}),ve=Object(s.a)(pe,2),Ee=ve[0],be=ve[1];function ge(){var a=localStorage.getItem("token");a&&Q.getUserToken(a).then((function(a){var t=a.data,n=t._id,r=t.email;be({id:n,email:r}),he(),e.push("/")})).catch((function(e){console.log(e)}))}return r.a.useEffect((function(){ge()}),[_e]),r.a.createElement(v.Provider,{value:n},r.a.createElement(m.d,null,r.a.createElement(A,{exact:!0,path:"/",isLoggedIn:_e},r.a.createElement(_,null,r.a.createElement("div",{className:"header__meta ".concat(F&&"header__meta_visible")},r.a.createElement("a",{className:"header__link header__link_fs_default",href:"mailto:".concat(Ee.email)},Ee.email),r.a.createElement("button",{className:"header__link header__link_fs_default header__link_color_light",type:"button",onClick:function(){localStorage.removeItem("token"),e.push("/sign-in")}},"\u0412\u044b\u0439\u0442\u0438")),r.a.createElement("button",{className:"header__toggler",type:"button",onClick:function(){X(!F)}},r.a.createElement("img",{className:"header__toggler-icon",src:ae.a,alt:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043c\u0435\u043d\u044e"}),r.a.createElement("img",{className:"header__toggler-icon header__toggler-icon_invisible",src:w.a,alt:"\u0421\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e"}))),r.a.createElement(C,{cards:d,onEditProfile:function(){b(!0)},onEditAvatar:function(){O(!0)},onAddPlace:function(){H(!0)},onCardClick:function(e){V(e)},onCardLike:function(e){var a=e.likes.some((function(e){return e._id===n.id}));K.changeLikeCardStatus({id:e._id,isLiked:!a}).then((function(a){f((function(t){return t.map((function(t){return t._id===e._id?a:t}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){K.removeCard({id:e._id}).then((function(a){f((function(a){return a.filter((function(a){return a._id!==e._id}))}))})).catch((function(e){console.log(e)}))}}),r.a.createElement(y,null),r.a.createElement(U,{card:M,onClose:W}),r.a.createElement(S,{isOpen:E,onClose:W,onUpdateUser:function(e){K.setUserData(e).then((function(e){n.name=e.name,n.about=e.about,W()})).catch((function(e){console.log(e)}))}}),r.a.createElement(x,{isOpen:k,onClose:W,onUpdateAvatar:function(e){K.setUserPic(e).then((function(e){n.avatar=e.avatar,W()})).catch((function(e){console.log(e)}))}}),r.a.createElement(P,{isOpen:q,onClose:W,onAddPlace:function(e){K.addCard(e).then((function(e){f([e].concat(Object(i.a)(d))),W()})).catch((function(e){console.log(e)}))}}),r.a.createElement(j,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",className:"remove-card",formName:"removeCard",btnCaption:"\u0414\u0430"})),r.a.createElement(m.b,{exact:!0,path:"/sign-up"},r.a.createElement(_,null,r.a.createElement(l.b,{to:"/sign-in",className:"header__link"},"\u0412\u043e\u0439\u0442\u0438")),r.a.createElement(D.Provider,{value:ne},r.a.createElement(T,{classMod:"",formName:"signup",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",btnCaption:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",isOpen:le,onUpdateTooltip:function(e){Q.authUser(e,G).then((function(e){se($.success),me()})).catch((function(e){console.log(e),se($.error),me()}))},onHandleVisibility:me}))),r.a.createElement(m.b,{exact:!0,path:"/sign-in"},r.a.createElement(_,null,r.a.createElement(l.b,{to:"/sign-up",className:"header__link"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")),r.a.createElement(D.Provider,{value:ne},r.a.createElement(T,{classMod:"form_offset_bottom",formName:"signin",title:"\u0412\u0445\u043e\u0434",btnCaption:"\u0412\u043e\u0439\u0442\u0438",isOpen:le,onUpdateTooltip:function(a){Q.authUser(a,Y).then((function(a){if(a.token){var t=a.token;localStorage.setItem("token",t),he(),e.push("/")}})).catch((function(e){console.log(e),se($.error),me()}))},onHandleVisibility:me}))),r.a.createElement(m.b,null,_e?r.a.createElement(m.a,{to:"/"}):r.a.createElement(m.a,{to:"/sign-in"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.createRoot(document.querySelector(".page")).render(r.a.createElement(l.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)))),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,a,t){e.exports=t.p+"static/media/icon-close.9b0797fa.svg"}},[[33,1,2]]]);
//# sourceMappingURL=main.a121cf3e.chunk.js.map