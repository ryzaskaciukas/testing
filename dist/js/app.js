(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  var App;

  App = (function() {
    var init, initTypeform, updateHeaderOpacity;
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
      initTypeform();
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
    initTypeform = function() {
      var b, ce, d, gi, gt, id, js, q, qs, s;
      qs = void 0;
      js = void 0;
      q = void 0;
      s = void 0;
      d = document;
      gi = d.getElementById;
      ce = d.createElement;
      gt = d.getElementsByTagName;
      id = "typef_orm";
      b = "https://s3-eu-west-1.amazonaws.com/share.typeform.com/";
      if (!gi.call(d, id)) {
        js = ce.call(d, "script");
        js.id = id;
        js.src = b + "share.js";
        q = gt.call(d, "script")[0];
        return q.parentNode.insertBefore(js, q);
      }
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