(function ($) {
  if (typeof $.publicAlert === 'undefined') {
    $.extend({
      publicAlert: function (opts) {
        $('#publicAlert').remove();
        if (typeof opts !== 'object') {
          opts = {
            text: "" + opts,
            hasCancel: false
          };
        }

        var defaults = {
          title: "",
          icon: "",
          text: "",
          trueButtonTxt: "确定",
          callBack: function () {
            $('#publicAlert').hide();
          },
          onCancel: function () {
            $('#publicAlert').hide();
          },
          callBackHref: 'javascript:;',
          callBackTarget: '',
          cancel: "<a id='publicAlertBtnCancel' class='p_ibt P_Button7 Mrt10' href='javascript:;'>取消</a>",
          hasCancel: true,
        };

        var options = $.extend({}, defaults, opts);

        $('body').off('click', '#publicAlertBtnCancel,#publicAlertSwhCancel');
        $('body').on('click', '#publicAlertBtnCancel,#publicAlertSwhCancel', options.onCancel);

        $('body').off('click', '#publicAlertBtnTrue');
        $('body').on('click', '#publicAlertBtnTrue', options.callBack);

        var h = "<div id='publicAlert' class='P_Tbox' style='display:'>";
        h = h + "<div class='P_cell'>";
        h = h + "<div class='P_outer_box'>";
        h = h + "<div class='P_header'>";
        h = h + "<label id='publicAlertTitle'>" + options.title + "</label>";
        h = h + "<input id='publicAlertSwhCancel' class='Close_Switch' type='button' />";
        h = h + "</div>";
        h = h + "<div class='P_context2'>";
        h = h + "<div class='P_cell'>";
        h = h + "<div id='publicAlertIcon' class='p_ibm " + options.icon + " Mrt10'></div>";
        h = h + "<div id='publicAlertContent' class='p_ibm F16'>" + options.text + "</div>";
        h = h + "</div>";
        h = h + "</div>";
        h = h + "<div class='footer Tright'>";
        if (options.hasCancel) {
          h = h + options.cancel;
        }
        h = h + " <a id='publicAlertBtnTrue' class='p_ibt P_Button8' href='" + options.callBackHref + "' " + options.callBackTarget + " >" + options.trueButtonTxt + "</a>";
        h = h + "</div>";
        h = h + "</div>";
        h = h + "</div>";
        h = h + "</div>";
        $("body").append(h);
      }
    });

  }
})(jQuery);
