class Api::v1:SessionsController < ApplicationController

    def index
        @sessions = Session.all
        render json: @sessions, status: 200
    end

    def create
        @session = Session.new(session_params)
        if @session.save
        render json: @session, status: 200
        else
            render json: {error:"Error logging session"}
    end


    def show
        @session = Session.find(params[:id])
        render json: @session, status: 200
    end

    def destroy   
        @session = Session.find(params[:id])
        @session.destroy!
        render json: @sessions, status: 200
    end

    private

    def session_params
        params.require(:beach).permit(:date, :board, :description)
    end


    
end
