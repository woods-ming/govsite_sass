/* ========================================================================
 * truncText.js v1.0.0
 * https://github.com/woods-ming/truncText.js
 * ========================================================================
 * Last Update 2017.12.26
 * Licensed under MIT
 * ======================================================================== */


+ function($) {
  'use strict';

  /* TruncText CLASS DEFINITION
   * ========================= */

  var TruncText = function(element, options) {
    this.options = $.extend({}, TruncText.DEFAULTS, options)

    this.$element = $(element)
    this.fontSize = parseInt(this.$element.css('font-size').replace('px', ''))
    this.singleHeight = 2 * this.fontSize
    this.title = this.$element.text()
    this.$element.attr('title', this.title)
  };

  TruncText.prototype.trunc = function() {
    var text = this.$element.text();

    if (this.$element.height() >= this.singleHeight) {
      var num = this.$element.width() / this.fontSize - 1
      this.$element.text(text.slice(0, num) + '...')
    } else {
      if (text.indexOf('...')) {
        var standardWidth = this.$element.parent().width() - this.$element.siblings().width();
        if (this.title.length * this.fontSize <= standardWidth) {
          this.$element.text(this.title)
        } else {
          var num = standardWidth / this.fontSize - 1
          this.$element.text(this.title.slice(0, num) + '...')
        }
      }
    }
  };

  /* TruncText PLUGIN DEFINITION
   * ============================= */
  function Plugin(option) {
    return this.each(function() {
      var $this = $(this)
      var data = $this.data('truncText')
      var options = typeof option == 'object' && option

      if (!data) $this.data('truncText', (data = new TruncText(this, options)))

      data.trunc()
    })
  }

  var old = $.fn.truncText

  $.fn.truncText = Plugin
  $.fn.truncText.Constructor = TruncText

  // TruncText NO CONFLICT
  // =================
  $.fn.truncText.noConflict = function() {
    $.fn.truncText = old
    return this
  }

}(jQuery)
