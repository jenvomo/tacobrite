class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)
    @event.organizer_id = current_user.id
    if @event.date.class == Date && @event.time.class == Time
      @event.date = Date.parse(@event.date.to_s)
      @event.time = Time.parse(@event.time.to_s)
    end

    if @event.save
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy

  end

  def index
    @events = Event.all
    render :index
  end

  def update
    @event = Event.find(params[:event][:id])
    @event.update_attributes(event_params)

    if @event.save
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def show
    @event = Event.find(params[:id])
  end

  private

  def event_params
    params.require(:event).permit(:title, :description, :date, :time, :organizer_description, :organizer_name, :photo)
  end
end
