require 'rubygems'
require 'newrelic_rpm' if ENV['RACK_ENV'] == 'production'

use Rack::Static,
  urls: ['/img', '/js', '/css'],
  root: 'dist'

run lambda { |_env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400',
    },
    File.open('dist/html/index.html', File::RDONLY),
  ]
}
