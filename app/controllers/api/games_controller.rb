class Api::GamesController < ApplicationController
    
    def index
        redirect_to '/index.html'
    end 
    
    def create
        render json: {id: new_game.id}, status: 201
    end
    
    def show
        game_hash = {
          score: game.score,
          score_by_frame: game.score_by_frame,
          game_over: game.game_over?,
        }
        render json: game_hash, status: 200
    end
    
    def update
        if game
            if params[:knocked_pins].to_s.chars.any? {|c| c=~/[^\d]/}
                render json: {message: "Knocked pins data format is invalid, please input a valid number."}, status: 406
            else
                game.throw!(update_params[:knocked_pins].to_i)
                render json: {}, status: 204
            end
        else
            render json: {message: "Game not found. Please clicking on New Game before start."}, status: 404
        end

        rescue GameError, AvailablePinsError => e
            render json: {message: e.message}, status: 422
    end
    
    private
    def new_game
        @new_game =  @new_game || Game.create
    end
    
    def game
        @game = @game || Game.cached_find_by_id(params[:id])
    end
    
    def update_params
        params.require(:knocked_pins)
        params.permit(:knocked_pins, :id, :action, :format)
    end
end