(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{1037:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("result",{attrs:{isSuccess:!0,content:!1,title:e.email,description:e.description}},[a("template",{slot:"action"},[a("a-button",{attrs:{size:"large",type:"primary"}},[e._v("查看邮箱")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{size:"large"},on:{click:e.goHomeHandle}},[e._v("返回首页")])],1)],2)},s=[],i=a("2af9"),n={name:"RegisterResult",components:{Result:i["c"]},data:function(){return{description:"激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。",form:{}}},computed:{email:function(){var e=this.form&&this.form.email||"xxx",t="你的账户：".concat(e," 注册成功");return t}},created:function(){this.form=this.$route.params},methods:{goHomeHandle:function(){this.$router.push({name:"login"})}}},o=n,l=a("2877"),c=Object(l["a"])(o,r,s,!1,null,"6b5e9d5a",null);t["default"]=c.exports},1348:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main user-layout-register"},[e._m(0),a("a-form",{ref:"formRegister",attrs:{form:e.form,id:"formRegister"}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,type:"email",message:"请输入邮箱地址"}],validateTrigger:["change","blur"]}],expression:"['email', {rules: [{ required: true, type: 'email', message: '请输入邮箱地址' }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",type:"text",placeholder:"邮箱"}})],1),a("a-popover",{attrs:{placement:"rightTop",trigger:"click",visible:e.state.passwordLevelChecked}},[a("template",{slot:"content"},[a("div",{style:{width:"240px"}},[a("div",{class:["user-register",e.passwordLevelClass]},[e._v("强度："),a("span",[e._v(e._s(e.passwordLevelName))])]),a("a-progress",{attrs:{percent:e.state.percent,showInfo:!1,strokeColor:e.passwordLevelColor}}),a("div",{staticStyle:{"margin-top":"10px"}},[a("span",[e._v("请至少输入 6 个字符。请不要使用容易被猜到的密码。")])])],1)]),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"至少6位密码，区分大小写"},{validator:this.handlePasswordLevel}],validateTrigger:["change","blur"]}],expression:"['password', {rules: [{ required: true, message: '至少6位密码，区分大小写'}, { validator: this.handlePasswordLevel }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"至少6位密码，区分大小写"},on:{click:e.handlePasswordInputClick}})],1)],2),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password2",{rules:[{required:!0,message:"至少6位密码，区分大小写"},{validator:this.handlePasswordCheck}],validateTrigger:["change","blur"]}],expression:"['password2', {rules: [{ required: true, message: '至少6位密码，区分大小写' }, { validator: this.handlePasswordCheck }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"确认密码"}})],1),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{rules:[{required:!0,message:"请输入正确的手机号",pattern:/^1[3456789]\d{9}$/},{validator:this.handlePhoneCheck}],validateTrigger:["change","blur"]}],expression:"['mobile', {rules: [{ required: true, message: '请输入正确的手机号', pattern: /^1[3456789]\\d{9}$/ }, { validator: this.handlePhoneCheck } ], validateTrigger: ['change', 'blur'] }]"}],attrs:{size:"large",placeholder:"11 位手机号"}},[a("a-select",{attrs:{slot:"addonBefore",size:"large",defaultValue:"+86"},slot:"addonBefore"},[a("a-select-option",{attrs:{value:"+86"}},[e._v("+86")]),a("a-select-option",{attrs:{value:"+87"}},[e._v("+87")])],1)],1)],1),a("a-row",{attrs:{gutter:16}},[a("a-col",{staticClass:"gutter-row",attrs:{span:16}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["captcha",{rules:[{required:!0,message:"请输入验证码"}],validateTrigger:"blur"}],expression:"['captcha', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]"}],attrs:{size:"large",type:"text",placeholder:"验证码"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),a("a-col",{staticClass:"gutter-row",attrs:{span:8}},[a("a-button",{staticClass:"getCaptcha",attrs:{size:"large",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(e.state.smsSendBtn?e.state.time+" s":"获取验证码")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha(t)}}})],1)],1),a("a-form-item",[a("a-button",{staticClass:"register-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.registerBtn,disabled:e.registerBtn},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[e._v("注册\n      ")]),a("router-link",{staticClass:"login",attrs:{to:{name:"login"}}},[e._v("使用已有账户登录")])],1)],1)],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",[a("span",[e._v("注册")])])}],i=a("cebc"),n=a("ac0d"),o=a("7ded"),l=a("365c"),c=a("b775");function u(e){return Object(c["b"])({url:l["a"].UserRegister,method:"post",data:e})}var d={0:"低",1:"低",2:"中",3:"强"},p={0:"error",1:"error",2:"warning",3:"success"},m={0:"#ff0000",1:"#ff0000",2:"#ff7e05",3:"#52c41a"},h={name:"Register",components:{},mixins:[n["c"]],data:function(){return{form:this.$form.createForm(this),state:{time:60,smsSendBtn:!1,passwordLevel:0,passwordLevelChecked:!1,percent:10,progressColor:"#FF0000"},registerBtn:!1}},computed:{passwordLevelClass:function(){return p[this.state.passwordLevel]},passwordLevelName:function(){return d[this.state.passwordLevel]},passwordLevelColor:function(){return m[this.state.passwordLevel]}},methods:{handlePasswordLevel:function(e,t,a){var r=0;/[0-9]/.test(t)&&r++,/[a-zA-Z]/.test(t)&&r++,/[^0-9a-zA-Z_]/.test(t)&&r++,this.state.passwordLevel=r,this.state.percent=30*r,r>=2?(r>=3&&(this.state.percent=100),a()):(0===r&&(this.state.percent=10),a(new Error("密码强度不够")))},handlePasswordCheck:function(e,t,a){var r=this.form.getFieldValue("password");console.log("value",t),void 0===t&&a(new Error("请输入密码")),t&&r&&t.trim()!==r.trim()&&a(new Error("两次密码不一致")),a()},handlePhoneCheck:function(e,t,a){console.log("handlePhoneCheck, rule:",e),console.log("handlePhoneCheck, value",t),console.log("handlePhoneCheck, callback",a),a()},handlePasswordInputClick:function(){this.isMobile()?this.state.passwordLevelChecked=!1:this.state.passwordLevelChecked=!0},handleSubmit:function(){var e=this.form.validateFields,t=this.$router,a=this.$message;e({force:!0},function(e,r){e||u(r).then(function(e){console.log(e),t.push({name:"registerResult",params:Object(i["a"])({},r)})}).catch(function(e){a.error("load user err: ".concat(e.message))})})},getCaptcha:function(e){var t=this;e.preventDefault();var a=this.form.validateFields,r=this.state,s=this.$message,i=this.$notification;a(["mobile"],{force:!0},function(e,a){if(!e){r.smsSendBtn=!0;var n=window.setInterval(function(){r.time--<=0&&(r.time=60,r.smsSendBtn=!1,window.clearInterval(n))},1e3),l=s.loading("验证码发送中..",0);Object(o["c"])({mobile:a.mobile}).then(function(e){setTimeout(l,2500),i["success"]({message:"提示",description:"验证码获取成功，您的验证码为："+e.result.captcha,duration:8})}).catch(function(e){setTimeout(l,1),clearInterval(n),r.time=60,r.smsSendBtn=!1,t.requestFailed(e)})}})},requestFailed:function(e){this.$notification["error"]({message:"错误",description:((e.response||{}).data||{}).message||"请求出现错误，请稍后再试",duration:4}),this.registerBtn=!1}},watch:{"state.passwordLevel":function(e){console.log(e)}}},g=h,f=(a("5d18"),a("37dd"),a("2877")),v=Object(f["a"])(g,r,s,!1,null,"5938eb0b",null);t["default"]=v.exports},"37dd":function(e,t,a){"use strict";var r=a("507d"),s=a.n(r);s.a},"507d":function(e,t,a){},"5d18":function(e,t,a){"use strict";var r=a("e236"),s=a.n(r);s.a},"68cf":function(e,t,a){},ac2a:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("a-form",{ref:"formLogin",staticClass:"user-layout-login",attrs:{id:"formLogin",form:e.form},on:{submit:e.handleSubmit}},[a("a-tabs",{attrs:{activeKey:e.customActiveKey,tabBarStyle:{textAlign:"center",borderBottom:"unset"}},on:{change:e.handleTabClick}},[a("a-tab-pane",{key:"tab1",attrs:{tab:"在线考试系统登录"}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"请输入帐户名/邮箱/手机号"},{validator:e.handleUsernameOrEmail}],validateTrigger:"change"}],expression:"[\n              'username',\n              {rules: [{ required: true, message: '请输入帐户名/邮箱/手机号' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}\n            ]"}],attrs:{size:"large",type:"text",placeholder:"请输入帐户名/邮箱/手机号"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码"}],validateTrigger:"blur"}],expression:"[\n              'password',\n              {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}\n            ]"}],attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"请输入密码"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1)],1)],1),a("a-form-item",[a("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["rememberMe"],expression:"['rememberMe']"}]},[e._v("自动登录")]),a("router-link",{staticClass:"register",staticStyle:{float:"right"},attrs:{to:{name:"register"}}},[e._v("注册账户")])],1),a("a-form-item",{staticStyle:{"margin-top":"24px"}},[a("a-button",{staticClass:"login-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.state.loginBtn,disabled:e.state.loginBtn}},[e._v("确定\n      ")])],1)],1),e.requiredTwoStepCaptcha?a("two-step-captcha",{attrs:{visible:e.stepCaptchaVisible},on:{success:e.stepCaptchaSuccess,cancel:e.stepCaptchaCancel}}):e._e()],1)},s=[],i=a("cebc"),n=function(){var e=this,t=this,a=t.$createElement,r=t._self._c||a;return r("a-modal",{attrs:{centered:"",maskClosable:!1},on:{cancel:t.handleCancel},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[r("div",{style:{textAlign:"center"},attrs:{slot:"title"},slot:"title"},[t._v("两步验证")]),r("template",{slot:"footer"},[r("div",{style:{textAlign:"center"}},[r("a-button",{key:"back",on:{click:t.handleCancel}},[t._v("返回")]),r("a-button",{key:"submit",attrs:{type:"primary",loading:t.stepLoading},on:{click:t.handleStepOk}},[t._v("\n        继续\n      ")])],1)]),r("a-spin",{attrs:{spinning:t.stepLoading}},[r("a-form",{attrs:{layout:"vertical","auto-form-create":function(t){e.form=t}}},[r("div",{staticClass:"step-form-wrapper"},[t.stepLoading?r("p",{staticStyle:{"text-align":"center"}},[t._v("正在验证.."),r("br"),t._v("请稍后")]):r("p",{staticStyle:{"text-align":"center"}},[t._v("请在手机中打开 Google Authenticator 或两步验证 APP"),r("br"),t._v("输入 6 位动态码")]),r("a-form-item",{style:{textAlign:"center"},attrs:{hasFeedback:"",fieldDecoratorId:"stepCode",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入 6 位动态码!",pattern:/^\d{6}$/,len:6}]}}},[r("a-input",{style:{textAlign:"center"},attrs:{placeholder:"000000"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleStepOk(e)}}})],1),r("p",{staticStyle:{"text-align":"center"}},[r("a",{on:{click:t.onForgeStepCode}},[t._v("遗失手机?")])])],1)])],1)],2)},o=[],l={props:{visible:{type:Boolean,default:!1}},data:function(){return{stepLoading:!1,form:null}},methods:{handleStepOk:function(){var e=this,t=this;this.stepLoading=!0,this.form.validateFields(function(a,r){if(!a)return console.log("values",r),void setTimeout(function(){t.stepLoading=!1,t.$emit("success",{values:r})},2e3);e.stepLoading=!1,e.$emit("error",{err:a})})},handleCancel:function(){this.visible=!1,this.$emit("cancel")},onForgeStepCode:function(){}}},c=l,u=(a("edd4"),a("2877")),d=Object(u["a"])(c,n,o,!1,null,"4a462ef6",null),p=d.exports,m=a("2f62"),h=a("ca00"),g=a("7ded"),f={components:{TwoStepCaptcha:p},data:function(){return{customActiveKey:"tab1",loginBtn:!1,loginType:0,requiredTwoStepCaptcha:!1,stepCaptchaVisible:!1,form:this.$form.createForm(this),state:{time:60,loginBtn:!1,loginType:0,smsSendBtn:!1}}},created:function(){var e=this;Object(g["a"])({}).then(function(t){e.requiredTwoStepCaptcha=t.result.stepCode}).catch(function(){e.requiredTwoStepCaptcha=!1})},methods:Object(i["a"])({},Object(m["b"])(["Login","Logout"]),{handleUsernameOrEmail:function(e,t,a){var r=this.state,s=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;s.test(t)?r.loginType=0:r.loginType=1,a()},handleTabClick:function(e){this.customActiveKey=e},handleSubmit:function(e){var t=this;e.preventDefault();var a=this.form.validateFields,r=this.state,s=this.customActiveKey,i=this.Login;r.loginBtn=!0;var n="tab1"===s?["username","password"]:["mobile","captcha"];a(n,{force:!0},function(e,a){if(console.log(a),e)setTimeout(function(){r.loginBtn=!1},600);else{var s={};s.loginType=r.loginType,s.userInfo=a.username,s.password=a.password,console.log(s),i(s).then(function(e){return t.loginSuccess(e)}).catch(function(e){return t.requestFailed(e)}).finally(function(){r.loginBtn=!1})}})},getCaptcha:function(e){var t=this;e.preventDefault();var a=this.form.validateFields,r=this.state;a(["mobile"],{force:!0},function(e,a){if(!e){r.smsSendBtn=!0;var s=window.setInterval(function(){r.time--<=0&&(r.time=60,r.smsSendBtn=!1,window.clearInterval(s))},1e3),i=t.$message.loading("验证码发送中..",0);Object(g["c"])({mobile:a.mobile}).then(function(e){setTimeout(i,2500),t.$notification["success"]({message:"提示",description:"验证码获取成功，您的验证码为："+e.result.captcha,duration:8})}).catch(function(e){setTimeout(i,1),clearInterval(s),r.time=60,r.smsSendBtn=!1,t.requestFailed(e)})}})},stepCaptchaSuccess:function(){this.loginSuccess()},stepCaptchaCancel:function(){var e=this;this.Logout().then(function(){e.loginBtn=!1,e.stepCaptchaVisible=!1})},loginSuccess:function(e){var t=this;console.log(e),this.$router.push({name:"dashboard"}),setTimeout(function(){t.$notification.success({message:"欢迎",description:"".concat(Object(h["a"])(),"，欢迎回来")})},1e3)},requestFailed:function(e){this.$notification["error"]({message:"错误",description:((e.response||{}).data||{}).message||"用户名或密码错误",duration:4})}})},v=f,b=(a("ac79"),Object(u["a"])(v,r,s,!1,null,"c9766ca8",null));t["default"]=b.exports},ac79:function(e,t,a){"use strict";var r=a("68cf"),s=a.n(r);s.a},d4ee:function(e,t,a){},e236:function(e,t,a){},edd4:function(e,t,a){"use strict";var r=a("d4ee"),s=a.n(r);s.a}}]);