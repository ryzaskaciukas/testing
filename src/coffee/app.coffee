App = (->
  init = ->
    $header = $('header')

    $header.scrollupbar({
      enterViewport: ->
        $header.addClass('scrolled')
      exitViewport: ->
        $header.removeClass('scrolled')
    })

    smoothScroll.init()
    startTracking()
    attachBuy()

  attachBuy = ->
    $("a[href='#buy']").fancybox(
      helpers: {
        overlay: {
          locked: false
        }
      }
    )

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
    $(document).on 'click', 'a', (link) ->
      analytics.track 'Clicked link',
        text: $(link.target).text()
        href: $(link.target).prop('href')

  return {
    init: init
  }
)()

$ -> App.init()
