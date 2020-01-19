class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render :index
  end

  private

  def category_params
    params.require(:category).permit(:title, :description)
  end
end
