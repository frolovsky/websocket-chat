<template>
  <div class="header">
    <p class="header__info">
      You signed as: 
      <span class="header__nickname" title="Change nickname" @click="changeNick">{{ nickname }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ChatHeader',
  props: {
    nickname: {
      type: String,
      default: ''
    }
  },
  methods: {
    changeNick() {
      this.$emit('change-nick')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 20px;
  background: #222222;
}
.header__info {
  color: #fff;
}
.header__nickname {
  cursor: pointer;
  color: orange;
  &:hover {
    text-decoration: underline;
  }
}
</style>