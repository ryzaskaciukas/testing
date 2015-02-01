(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  var App;

  App = (function() {
    var attachBuy, debounce, init, startTracking;
    init = function() {
      alert('yo')
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
      smoothScroll.init();
      startTracking();
      return attachBuy();
    };
    attachBuy = function() {
      return $("a[href='#buy']").fancybox({
        helpers: {
          overlay: {
            locked: false
          }
        }
      });
    };
    debounce = function(func, wait, immediate) {
      var timeout;
      timeout = void 0;
      return function() {
        var args, callNow, context, later;
        context = this;
        args = arguments;
        later = function() {
          timeout = null;
          if (!immediate) {
            return func.apply(context, args);
          }
        };
        callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
          return func.apply(context, args);
        }
      };
    };
    startTracking = function() {
      return $(document).on('click', 'a', function(link) {
        return analytics.track('Clicked link', {
          text: $(link.target).text(),
          href: $(link.target).prop('href')
        });
      });
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