<template>
  <div class="messages">
    <div class="message__wrapper" v-for="(message, key) in messages" :key="key">
      <p class="message__author">{{ message.author }} <span class="message__sendtime">{{ message.time }}</span></p>
      <p class="message__text">{{ message.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatMessages',
  data: () => ({
    messages: [],
  }),
  mounted() {
    const ws = new WebSocket('ws://localhost:3000');
    ws.onmessage = event => {
      this.messages = JSON.parse(event.data)
    }
  }
}
</script>

<style lang="scss" scoped>
.messages {
  height: calc(100vh - 220px);
  overflow: auto;
}
.message__wrapper {
  margin: 20px 20px 25px 20px;
  max-width: 600px;
  width: 100%;
  border-radius: 20px;
  padding: 20px;
  background: #67CDFE;
  color: #222222;
}
.message__author {
  font-weight: 500;
}
</style>