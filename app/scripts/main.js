$(function() {
  // 走马灯
  $('.str_wrap').liMarquee();

  // 长文本自动截断
  /*$(".list-unstyled li a").TruncText({ "singleHeight": "20", "fontSize": "14" });
  $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    var tabId = $(this).attr("aria-controls");
    $('#' + tabId).find(".list-unstyled li a").TruncText(20, 14);
  });
  $(window).resize(function() {
    $(".list-unstyled li a").TruncText({ "singleHeight": "20", "fontSize": "14" });
  });*/

  

  $(window).resize(function() {
    $("#test").TruncText({ "singleHeight": "20", "fontSize": "14" });
  });
});
