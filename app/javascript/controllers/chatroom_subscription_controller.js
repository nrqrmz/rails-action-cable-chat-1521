import { Controller } from "@hotwired/stimulus"
import { createConsumer } from "@rails/actioncable";

// Connects to data-controller="chatroom-subscription"
export default class extends Controller {
  static values = { chatroomId: Number }
  static targets = [ "messages" ]

  connect() {
    this.channel = createConsumer().subscriptions.create(
      {
        channel: "ChatroomChannel",
        id: this.chatroomIdValue
      },
      {
        received: data => this.#insertMessageAndScrollDown(data)
      }
    )
  }

  resetForm(event) {
    event.target.reset()
  }

  disconnect() {
    this.channel.unsubscribe()
  }

    // private is defined with a #

  #insertMessageAndScrollDown(data) {
    this.messagesTarget.insertAdjacentHTML('beforeend', data)
    this.messagesTarget.scrollTo(0, this.messagesTarget.scrollHeight)
  }
}
