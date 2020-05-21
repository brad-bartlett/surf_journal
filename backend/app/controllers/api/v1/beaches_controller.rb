class Api::v1:BeachesController < ApplicationController

    def index
        @beaches = Beach.all
        render json: @beaches, status: 200
    end
    
    def show
        @beach = Beach.find(params[:id])
        render json: @beach, status: 200
    end

end
