<template>
  <footer class="chat-footer">
    <p class="chat-footer__text">WS + Node + Vue + MongoDB chat. <a href="https://github.com/frolovsky" target="_blank">Check source on Github</a></p>
  </footer>
</template>

<script>
export default {
  name: 'ChatFooter'
}
</script>

<style lang="scss" scoped>
.chat-footer {
  position: absolute;
  left: 0; bottom: 0;
  width: 100%;
  padding: 20px;
  text-align: center;
}
.chat-footer__text {
  font-size: 12px;
  font-weight: 700;
  color: #eee;
  a {
    color: #eee;
  }
}
</style>