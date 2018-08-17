class Api::EventsController < ApplicationController
  def create
    @category = Category.new(category_params)
    if @category.save
      render: "/api/category/show"
    else
      render: json: @category.errors.full_messages, status: 422
    end
  end

  private

  def category_params
    params.require(:category).permit(:title, :description)
  end
end
