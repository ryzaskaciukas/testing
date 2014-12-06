App = (->
  init = ->
    $header = $('header')

    $header.scrollupbar
      enterViewport: ->
        $header.addClass('scrolled')
      exitViewport: ->
        $header.removeClass('scrolled')

    smoothScroll.init()
    initTypeform()

    $(document).scroll ->
      _.debounce(updateHeaderOpacity, 0.5)()

  updateHeaderOpacity = ->
    opacity = ($(window).scrollTop() * 0.7) / $(window).height()
    opacity = 0.7 if opacity > 0.7
    $('header').css('background-color', "hsla(213, 14%, 15%, #{opacity})")

  initTypeform = ->
    qs = undefined
    js = undefined
    q = undefined
    s = undefined
    d = document
    gi = d.getElementById
    ce = d.createElement
    gt = d.getElementsByTagName
    id = "typef_orm"
    b = "https://s3-eu-west-1.amazonaws.com/share.typeform.com/"

    unless gi.call(d, id)
      js = ce.call(d, "script")
      js.id = id
      js.src = b + "share.js"
      q = gt.call(d, "script")[0]
      q.parentNode.insertBefore js, q

  return {
    init: init
  }
)()

$ -> App.init()
