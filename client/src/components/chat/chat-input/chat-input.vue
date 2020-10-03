<template>
  <div class="input">
    <textarea 
      name="message" 
      id="input-msg" 
      rows="3" 
      class="input__textarea" 
      placeholder="Write your message here..."
      v-model="message">
    </textarea>
    <button class="input__button" @click="sendMessage">
      <send-icon class="send-icon" />
    </button>
  </div>
</template>

<script>
import SendIcon from '@/components/chat/chat-input/icons/send-icon.vue'
import { mapState } from 'vuex'
const ws = new WebSocket('ws://localhost:3000');

export default {
  name: 'ChatInput',
  components: {
    SendIcon
  },
  data: () => ({
    message: ''
  }),
  methods: {
    async sendMessage() {
      if (this.message) {
        let data = JSON.stringify({
          text: this.message,
          author: this.user.nickname,
          authorId: this.user.id,
          time: this.getCurrentTime()
        })
        await ws.send(data)
        this.message = ''
        
      }
    },
    getCurrentTime() {
      let hours = new Date().getHours().toString().length === 1 ? `0${new Date().getHours().toString()}` : new Date().getHours().toString()
      let minutes = new Date().getMinutes().toString().length === 1 ? `0${new Date().getMinutes().toString()}` : new Date().getMinutes().toString()
      return `${hours}:${minutes}`
    }
  },
  computed: {
    ...mapState('user', {
      user: state => state.user
    })
  },
}
</script>

<style lang="scss" scoped>
.input {
  position: absolute;
  left: 20px;
  bottom: 60px;
  border-radius: 20px;
  width: calc(100% - 40px);
  overflow: hidden;
  background-color: #222222;
}
.input__textarea {
  resize: none;
  padding: 10px 110px 10px 10px;
  width: 100%;
  display: block;
  border: none;
  outline: none;
}
.input__button {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100px;
  cursor: pointer;
  border: none;
  outline: none;
  background: #67CDFE;
  &:hover {
    background: #5BB7E1;
  }
}
.send-icon {
  width: 24px; height: 24px;
  fill: #062D2F;
}
</style>