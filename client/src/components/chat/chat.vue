<template>
  <div class="chat">
    <chat-header :nickname="nickname" @change-nick="changeNick" />
    <chat-messages />
    <chat-input />
    <chat-footer />
  </div>
</template>

<script>
import ChatHeader from '@/components/chat/chat-header/chat-header.vue';
import ChatMessages from '@/components/chat/chat-messages/chat-messages.vue'
import ChatInput from '@/components/chat/chat-input/chat-input.vue'
import ChatFooter from '@/components/chat/chat-footer/chat-footer.vue'
export default {
  name: 'Chat',
  components: {
    ChatHeader,
    ChatMessages,
    ChatInput,
    ChatFooter,
  },
  props: {
    nickname: {
      type: String,
      default: 'Guest'
    }
  },
  methods: {
    changeNick() {
      this.$emit('open-modal')
    }
  }
}
</script>

<style lang="scss" scoped>
.chat {
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  background: rgb(66,0,25);
  background: linear-gradient(90deg, rgba(66,0,25,1) 0%, rgba(51,1,1,1) 38%, rgba(2,49,52,1) 100%);
  height: 100vh;
  width:100%;
  max-width: 1300px;
  padding-bottom: 160px;
}
</style>