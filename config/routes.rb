Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :events, only: [:create, :destroy, :update, :index, :show]
  end

  root "static_pages#root"
end
