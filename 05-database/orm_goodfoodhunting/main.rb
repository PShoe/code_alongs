
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'
require_relative 'db_config'
require_relative 'models/dish'
require_relative 'models/user'
require_relative 'models/comment'


enable :sessions #sinatra provides this feature



# def run_db(sql)
#   conn = PG.connect(dbname: "goodfoodhunting")
#   result = conn.exec(sql)
#   conn.close
#   result
# end
helpers do
  def current_user
    User.find_by(id: session[:user_id])
  end
  def logged_in?
    !!current_user
  end
end
get '/' do
  @dishes = Dish.order(:created_at).limit(3)
  erb :index
end

#SHOW ALL DISHES ON MAIN PAGE
get '/dishes' do
  # conn = PG.connect({ dbname: 'goodfoodhunting' })
  @dishes = Dish.all
  erb :dishes
end

# BRING UP HTML TO ADD NEW DISH
get '/dishes/new' do
  erb :new
end

# SHOW DETAILS ABOUT A DISH
get '/dishes/:id' do
  # conn = PG.connect({ dbname: 'goodfoodhunting' })
  # sql = "SELECT * FROM dishes WHERE id = #{ params[:id] };"
  @dish = Dish.find(params[:id])
  # @dish = run_db(sql).first
  @comments = Comment.where(dish_id: params[:id])
  erb :show
end

# FIND A DISH TO EDIT - bring up edit html
get '/dishes/:id/edit' do
  # sql = "SELECT * FROM dishes WHERE id = #{ params[:id] };"
  @dish = Dish.find(params[:id])
  # @dish = run_db(sql).first
  erb :edit
end

# UPDATE A DISH
put '/dishes/:id' do
  # sql = "UPDATE dishes SET name = '#{params[:name]}', image_url = '#{params[:image_url]}' WHERE id = #{params[:id]};"
  # run_db(sql)
  @dish = Dish.find(params[:id])
  @dish.name = params[:name]
  @dish.image_url = params[:image_url]
  @dish.save
  redirect "/dishes/#{params[:id]}"
end

# ADD A NEW DISH
post '/dishes' do
  # sql = "INSERT INTO dishes (name, image_url) VALUES('#{params[:name]}', '#{params[:image_url]}');"
  # run_db(sql)
  dish = Dish.new
  dish.name = params[:name]
  dish.image_url = params[:image_url]
  dish.save
  redirect '/dishes'
end

# DELETE A DISH
delete '/dishes/:id' do
  redirect '/login' unless logged_in?
  # sql = "DELETE FROM dishes WHERE id = #{params[:id]};"
  @dish = Dish.find(params[:id]).destroy
  # run_db(sql)
  redirect '/dishes'
end


post '/comments' do
  comment = Comment.new
  comment.body = params[:body]
  comment.dish_id = params[:dish_id]
  comment.user_id = current_user.id
  comment.save
  redirect "/dishes/#{params[:dish_id]}"
end
#=========================


get '/login' do
  erb :login
end

post '/session' do
  #find the user
  user = User.find_by(email: params[:email])
  # if found a user
  if user && user.authenticate(params[:password])
    #succesful redirect
    # session is a hash = {}
    session[:user_id] = user.id
    redirect '/dishes'
  else
    @message = "incorrect email or password"
    erb :login
  end
end

delete '/session' do
  session[:user_id] = nil
  redirect '/login'
end
