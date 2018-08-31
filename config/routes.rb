Rails.application.routes.draw do
#   namespace :api, defaults: {format: :json} do
#     resources :games, only: [:create, :show, :update]
#   end
   namespace :api, defaults: {format: :json} do
    resources :games, only: [:create, :show, :update]
  end
 
end
