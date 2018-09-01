class Api::GamesController < ApplicationController
    
    def create
        render json: {id: new_game.id}, status: 201
    end
    
    def show
        game_hash = {
          score: 150,
          score_by_frame: 7,
         
        }
        render json: game_hash, status: 200
    end
    
    
    private

    def new_game
        @new_game =  @new_game || Game.create
    end
    
    def game
        @game = @game || Game.cached_find_by_id(params[:id])
    end
    
    def update_params
        raise(ActionController::ParameterMissing, "Wrong knocked pins data format. Please input a valid number.") if params[:knocked_pins].to_s.chars.any? {|c| c=~/[^\d]/}
        params.require(:knocked_pins).permit(:knocked_pins)
        # params.require(:person).permit(:name, :age)
    end
    
end