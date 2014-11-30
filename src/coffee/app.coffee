App = (->
  init = ->
    $header = $('header')

    $header.scrollupbar
      enterViewport: ->
        $header.addClass('scrolled')
      exitViewport: ->
        $header.removeClass('scrolled')

    $(document).scroll ->
      _.debounce(updateHeaderOpacity, 0.5)()

  updateHeaderOpacity = ->
    opacity = ($(window).scrollTop() * 0.7) / $(window).height()
    opacity = 0.7 if opacity > 0.7
    $('header').css('background-color', "hsla(213, 14%, 15%, #{opacity})")

  return {
    init: init
  }
)()

$ -> App.init()
