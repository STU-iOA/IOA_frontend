
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/index/login","pages/index/Cding","pages/OA/subscribe/subscribe","pages/OA/OADetail/OADetail","pages/Me/level1/myPages/myPages","pages/Me/level2/myPages/setting","pages/Me/level2/myPages/collect","pages/addSchedule/addSche","pages/schedule/schedule","pages/ManageSubscription/subscription","pages/ManageSubscription/compile"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app demo","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#7CCD7C","enablePullDownRefresh":true,"backgroundTextStyle":"light"},"tabBar":{"color":"#C0C0C0","selectedColor":"#007AFF","borderStyle":"white","position":"bottom","list":[{"text":"OA","pagePath":"pages/OA/subscribe/subscribe","iconPath":"static/tabs/OA.png","selectedIconPath":"static/tabs/active.png"},{"text":"要事","pagePath":"pages/schedule/schedule","iconPath":"static/tabs/Issues.png","selectedIconPath":"static/tabs/active.png"},{"text":"添加要事","pagePath":"pages/addSchedule/addSche","iconPath":"static/tabs/AddIssues.png","selectedIconPath":"static/tabs/active.png"},{"text":"订阅管理","pagePath":"pages/ManageSubscription/subscription","iconPath":"static/tabs/ManageSubscription.png","selectedIconPath":"static/tabs/active.png"},{"text":"我","pagePath":"pages/Me/level1/myPages/myPages","iconPath":"static/tabs/Me.png","selectedIconPath":"static/tabs/active.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"hello-uni","compilerVersion":"3.2.9","entryPagePath":"pages/OA/subscribe/subscribe","entryPageQuery":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{}},{"path":"/pages/index/login","meta":{},"window":{}},{"path":"/pages/index/Cding","meta":{},"window":{}},{"path":"/pages/OA/subscribe/subscribe","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","navigationStyle":"custom","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/OA/OADetail/OADetail","meta":{},"window":{"navigationBarTitleText":"OA详情","enablePullDownRefresh":false}},{"path":"/pages/Me/level1/myPages/myPages","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/Me/level2/myPages/setting","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF"}},{"path":"/pages/Me/level2/myPages/collect","meta":{},"window":{}},{"path":"/pages/addSchedule/addSche","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","navigationStyle":"custom","enablePullDownRefresh":true,"titleNView":false}},{"path":"/pages/schedule/schedule","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","navigationStyle":"custom","enablePullDownRefresh":true,"titleNView":false}},{"path":"/pages/ManageSubscription/subscription","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"订阅","navigationStyle":"custom"}},{"path":"/pages/ManageSubscription/compile","meta":{},"window":{"navigationBarTitleText":"编辑订阅","navigationStyle":"custom"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
