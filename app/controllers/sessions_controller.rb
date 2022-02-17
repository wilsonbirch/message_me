class SessionsController < ApplicationController

  def new
  end

  def create 
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      flash[:notice] = "Log in was successful"
      redirect_to user
    else
      # flash[:notice] persists for 1 full http request, render does not call a request it simply displays the new page, must use flash.now
      flash.now[:alert] = "Email or password was incorrect"
      render 'new'
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:notice] = "Logged out"
    redirect_to root_path, status: :see_other
  end

end
