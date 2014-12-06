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
    startTracking()

    $(document).scroll ->
      debounce(updateHeaderOpacity, 0.5)()


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

  debounce = (func, wait, immediate) ->
    timeout = undefined
    ->
      context = this
      args = arguments
      later = ->
        timeout = null
        func.apply context, args  unless immediate

      callNow = immediate and not timeout
      clearTimeout timeout
      timeout = setTimeout(later, wait)
      func.apply context, args  if callNow

  startTracking = ->
    $(document).click 'a', (link) ->
      analytics.track 'Clicked link',
        text: $(link.target).text()
        href: $(link.target).prop('href')

  return {
    init: init
  }
)()

$ -> App.init()
