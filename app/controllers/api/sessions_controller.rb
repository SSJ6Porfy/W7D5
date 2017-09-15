class Api::SessionsController < ApplicationController


  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      signin(@user)
    else
      render json: 'Invalid Credentials', status: 418
    end
  end

  def destroy
    if (current_user)
      signout
      render {}
    else
      render json: current_user.errors.full_messages, status: 418
    end
  end

end
