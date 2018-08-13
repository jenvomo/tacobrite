class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)
    @event.organizer_id = current_user.id

    if @event.save
      render json: "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])
  end

  def index
    @events = Event.all
  end

  def update
    @event = Event.find(params[:id])
    @event.update_attributes(event_params)

    if @event.save
      render json: "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def show
    @event = Event.find(params[:id])
  end

  private
  def event_params
    params.require(:event).permit(:title, :description, :date, :time, :organizer_description, :organizer_name)
  end
end
