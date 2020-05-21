class Api::v1:SessionsController < ApplicationController

    def index
        @sessions = Session.all
        render json: @sessions, status: 200
    end

    def create
        @session = Session.create(params[:session]]
        render json: @session, status: 200
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
end
