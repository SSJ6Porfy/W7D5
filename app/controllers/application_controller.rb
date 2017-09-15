class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user

  def signin(user)
    @current_user = user
    session[:session_token] = @current_user.reset_session_token!
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def signout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def signedin?
    !!current_user
  end

  # def require_signed_in
  #   redirect_to unless
  # end
end
