class Api::TicketsController < ApplicationController
    def create
        @ticket = Ticket.new(ticket_params)
        @ticket.user_id = current_user.id
        if @ticket.save
            render 'api/tickets/show'
        else
            render json: @ticket.errors.full_messages, status: 422
        end
    end

    private

    def ticket_params
        params.require(:ticket).permit(:event_id, :qty)
    end
end