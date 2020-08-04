Rails.application.routes.draw do

    resources :sessions do
    resources :beaches
    end
    
    resources :beaches

end
