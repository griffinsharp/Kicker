class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            sign_in(@user)
            render "api/users/show"
        else 
            render json: @user.errors.full_messages, status: 422
        end
            
    end

    # always make your params private
    private
    def user_params
        params.require(:user).permit(:password, :email, :name)
    end

end
