Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :events, only: [:create, :destroy, :update, :index, :show]
    get 'myevents', :to => 'users#my_events'
  end

  root "static_pages#root"
end
