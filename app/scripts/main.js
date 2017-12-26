$(function() {
  // 走马灯
  $('.str_wrap').liMarquee()

  //长文本自动截断
  $('.panel-body li a').truncText()

  $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    var tabId = $(this).attr('aria-controls')
    $('#' + tabId).find('li a').truncText()
  })

  $(window).resize(function() {
    $('.panel-body li a').truncText()
  })

});
