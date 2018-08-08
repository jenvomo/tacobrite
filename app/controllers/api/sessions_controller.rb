class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by(email: params[:user][:email])
    if @user
      @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
      if @user
        login(@user)
        render "api/users/show"
      else
        render json: @user.errors.full_messages, status: 422
      end
    else
      render json: @user.errors.full_messages, status: 422
      # render "api/users/new"
      # redirect the user to sign up page if no user exists with given email
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ['Not found'], status: 404
    end
  end

  private
  def session_params
    params.require(:user).permit(:email, :password)
  end
end
