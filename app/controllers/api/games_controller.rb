class Api::GamesController < ApplicationController
    def show
         game_hash = {
          score: 150,
          score_by_frame: 7,
         
        }
        render json: game_hash, status: 200
    end
    
end