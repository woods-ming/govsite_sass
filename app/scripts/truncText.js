+ function($) {
  'use strict';

  /* TruncText CLASS DEFINITION
   * ========================= */
  var TruncText = function(element, options) {
    this.$element = $(element)
    this.options = $.extend({}, TruncText.DEFAULTS, options)
  };

  TruncText.DEFAULTS = {
    singleHeight: 20,
    fontSize: 14
  }

  TruncText.prototype.trunc = function() {
    if (this.$element.height() > this.options.singleHeight) {
      var num = this.$element.width() / parseInt(this.options.fontSize) - 2;

      var text = this.$element.text();
      var title = this.$element.attr('title');
      if (title) {
        text = title;
      } else {
        this.$element.attr('title', text);
      }

      this.$element.text(text.slice(0, num) + '...');
    }
  };

  /* TruncText PLUGIN DEFINITION
   * ============================= */
  function Plugin(option) {
    return this.each(function() {
      var $this = $(this)
      var data = $this.data('bs.TruncText')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.TruncText', (data = new TruncText(this, options)))

      data.trunc();
    });
  }

  var old = $.fn.TruncText;

  $.fn.TruncText = Plugin;
  $.fn.TruncText.Constructor = TruncText;

  // TruncText NO CONFLICT
  // =================
  $.fn.TruncText.noConflict = function() {
    $.fn.TruncText = old;
    return this;
  };

}(jQuery);
