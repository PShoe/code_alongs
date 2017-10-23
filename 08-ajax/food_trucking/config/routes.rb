Rails.application.routes.draw do
  resources :comments
  resources :likes
  resources :dishes
  resources :users

  get '/api/dishes', to: 'api/dishes#index'
  post '/api/likes', to: 'api/likes#create'
  post '/api/comments', to: 'api/comments#create'

  # namespace :api do
  #   resources :comments
  # end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
