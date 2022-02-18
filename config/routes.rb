Rails.application.routes.draw do
  root 'chatroom#index'
  get 'messages', to:'chatroom#messages'
  get 'signup', to: 'users#new'
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
end
