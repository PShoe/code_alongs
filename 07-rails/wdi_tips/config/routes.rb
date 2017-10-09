Rails.application.routes.draw do
  resources :tips
  # resources takes care of the below:
  # get '/tips/:id', to: 'tips#show'
  # get '/tips', to: 'tips#index', etc

  get '/about', to: 'pages#about'
  # part before hash- controller
  # part after hash - method
  # go to pages controller, then inside the controller do the about method
  # pages_controller.rb # def about inside the controller
  get '/contact_us', to: 'pages#contact'
  # pages_controller.rb #def contact
  get '/', to: 'pages#index'
end
