require 'sinatra'
require 'sinatra/reloader'
# require 'pry'

get '/' do
  erb :index
end

get '/answer' do
  @num1 = params[:first].to_f
  @num2 = params[:second].to_f
  @operator = params[:operator]

  if @operator == 'divide'
    @operator = '/'
    @display = @num1 / @num2
  end
  if @operator == 'multiply'
    @operator = '*'
    @display = @num1 * @num2
  end
  if @operator == 'add'
    @operator = '+'
    @display = @num1 + @num2
  end
  if @operator == 'subtract'
    @operator = '-'
    @display = @num1 - @num2
  end

  erb :answer
end

# binding.pry
