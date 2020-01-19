Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create] do
      resources :tickets, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :events, only: [:create, :destroy, :update, :index, :show]
    resources :tickets, only: [:create, :destroy]
    resources :categories, only: :index
  end

  root "static_pages#root"
end
