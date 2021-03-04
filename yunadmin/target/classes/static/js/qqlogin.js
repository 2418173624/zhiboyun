$(function () {
  var qqLoginCode = $("#qqLoginCode").val();
  if (qqLoginCode == "A001") {
    appendQQLoginWelcome();
  }
  /* 绑定关闭按钮 */
  $(document).on("click", ".winclose", function () {
    removeQQLoginWelcome();
  });
  $(document).on("click", "#lg_close1", function () {
    removeLoginBox();
  });
  $(document).on("click", "#lg_close2", function () {
    removeLoginBox();
  });
  adaptive();
});

function appendQQLoginWelcome() {
  var html = "<div class=\"qwindow_mask\" style=\"width: 100%; height: 100%; display: block; background-color: rgb(84, 84, 84);\"></div>" +
    "<div class=\"qwindow\" style=\"top: 246px; left: 500px; z-index: 30000; opacity: 1; visibility: visible;\">" +
    "<div class=\"winbox\">" +
    "<div class=\"winhead\" style=\"width: 400px;\">" +
    "<div class=\"wintitle\"></div>" +
    "<div class=\"winclose\" style=\"display: block;\"></div>" +
    "</div>" +
    "<div class=\"winbody\" style=\"width: 400px; height: 260px; overflow: hidden;\">" +
    "<iframe frameborder=\"0\" scrolling=\"no\" src=\"" + ctx + "/qqLoginWelcome.do\"></iframe>" +
    "</div>" +
    "</div>" +
    "<div class=\"winbg\"></div>" +
    "</div>";
  $(html).appendTo("body");
}

function removeQQLoginWelcome() {
  $(".qwindow_mask").remove();
  $(".qwindow").remove();
  window.location.href = ctx + "/perfect_info_1.do";
}

function showquickBind() {
  $(".winhead").css("width", 600);
  $(".winbody").css("width", 600);
  $(".winbody").css("height", 360);
  adaptive();
}

function hidequickBind() {
  $(".winhead").css("width", 400);
  $(".winbody").css("width", 400);
  $(".winbody").css("height", 260);
  adaptive();
}

/* 浏览器窗口改变事件 */
window.onresize = function () {
  adaptive();
};

/* 首页弹出层QQ登录绑定账号窗口自适应  */
function adaptive() {
  var clientHeight = document.documentElement.clientHeight;
  var clientWidth = document.documentElement.clientWidth;
  var winbodyHeight = $(".winbody").height();
  var winbodyWidth = $(".winbody").width();
  $(".qwindow").css({"top": (clientHeight - winbodyHeight) / 2 + "px", "left": (clientWidth - winbodyWidth) / 2 + "px"});
}

/* 弹出登录框 */
function showLoginBox(registerURL) {
  appendLoginBox(registerURL);
  adaptive();
}

/* 移除登录框 */
function removeLoginBox() {
  $("#loginBox_mask").remove();
  $("#loginBox_window").remove();
}

/* 系统登录弹窗 */
function appendLoginBox(registerURL) {
  var params = "";
  if (registerURL) {
    params = "?registerURL=" + registerURL;
  }
  var html = "" +
    "<div id=\"loginBox_mask\" class=\"qwindow_mask\" style=\"width: 100%; height: 100%; display: block; background-color: rgb(84, 84, 84);\"></div>" +
    "<div id=\"loginBox_window\" class=\"qwindow\" style=\"top: 246px; left: 500px; z-index: 30000; opacity: 1; visibility: visible;\">" +
    "<input id=\"lg_close1\" class=\"lg_close_btn\" title=\"关闭\" type=\"button\">" +
    "<div class=\"winbox\">" +
    "<div class=\"winhead\" style=\"width: 320px;\">" +
    "<div class=\"wintitle\"></div>" +
    "</div>" +
    "<div id=\"loginBox_content\" class=\"winbody\" style=\"width: 320px; height: 374px; overflow: hidden;\">" +
    "<iframe frameborder=\"0\" scrolling=\"no\" src=\"" + ctx + "/account/loginBox.do" + params + "\"></iframe>" +
    "</div>" +
    "<div id=\"registerBox_content\" class=\"winbody\" style=\"width: 320px; height: 440px; overflow: hidden; display:none;\">" +
    "<iframe frameborder=\"0\" scrolling=\"no\" src=\"" + ctx + "/account/registerBox.do\"></iframe>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>";
  $(html).appendTo("body");
}

/* 切换弹窗 */
function rotate1(loginURL) {
  if (loginURL) {
    window.location.href = loginURL;
  } else {
    $("#loginBox_window").addClass("switching");
    setTimeout("$('#loginBox_content').hide();$('#registerBox_content').show();", 400);
    setTimeout("$('#loginBox_window').removeClass('switching')", 800);
  }
}

/* 切换弹窗 */
function rotate2() {
  $("#loginBox_window").addClass("switching");
  setTimeout("$('#loginBox_content').show();$('#registerBox_content').hide();", 400);
  setTimeout("$('#loginBox_window').removeClass('switching')", 800);
}

