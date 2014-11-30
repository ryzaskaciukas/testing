(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  var App;

  App = (function() {
    var init, updateHeaderOpacity;
    init = function() {
      var $header;
      $header = $('header');
      $header.scrollupbar({
        enterViewport: function() {
          return $header.addClass('scrolled');
        },
        exitViewport: function() {
          return $header.removeClass('scrolled');
        }
      });
      return $(document).scroll(function() {
        return _.debounce(updateHeaderOpacity, 0.5)();
      });
    };
    updateHeaderOpacity = function() {
      var opacity;
      opacity = ($(window).scrollTop() * 0.7) / $(window).height();
      if (opacity > 0.7) {
        opacity = 0.7;
      }
      return $('header').css('background-color', "hsla(213, 14%, 15%, " + opacity + ")");
    };
    return {
      init: init
    };
  })();

  $(function() {
    return App.init();
  });

}).call(this);

},{}]},{},[1])