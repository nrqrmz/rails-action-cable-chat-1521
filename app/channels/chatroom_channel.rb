class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "my first channel"
    chatroom = Chatroom.find(params[:id])
    stream_for chatroom
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
