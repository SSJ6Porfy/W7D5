class Api::UsersController < ApplicationController


  def create
    @user = User.new(user_params)

    if @user.save
      signin(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 418
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :session_token)
  end
end
