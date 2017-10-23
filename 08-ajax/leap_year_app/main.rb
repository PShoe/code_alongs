
require 'sinatra'

get '/' do
  @is_leap_year = false
  if Time.now.year % 4 == 0
    @is_leap_year = true
  end
  erb :index
end
