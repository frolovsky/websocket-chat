<template>
  <div class="home">
    <ui-modal @closeModal="closeModal" v-if="isOpenNickForm || !user.nickname">
      <div class="nick-form">
        <div class="nick-form__row">
          <label class="nick-form__label" for="nick-input">Type your nickname for other users:</label>
          <input type="text" placeholder="Nickname" class="nick-form__input" id="nick-input" v-model="nickname" @change="setNickname">
        </div>
        <div class="nick-form__controls">
          <button class="nick-form__button" @click.prevent="loginAsGuest">Login as guest</button>
          <button class="nick-form__button nick-form__button--green" @click.prevent="closeModal" :disabled="!(nickname.length > 0)">Submit</button>
        </div>
      </div>
    </ui-modal>
    <chat :nickname="user.nickname" @open-modal="openModal" />
  </div>
</template>

<script>
import Chat from '@/components/chat/chat.vue'
import UiModal from '@/components/common/ui-modal/ui-modal.vue'
import { mapMutations, mapState, mapActions } from 'vuex'
import { SET_NICKNAME } from '@/store/user/mutations'
import { GEN_ID } from '@/store/user/actions'

export default {
  name: 'Home',
  components: {
    Chat,
    UiModal,
  },
  data: () => ({
    nickname: '',
    isOpenNickForm: false,
  }),
  methods: {
    closeModal() {
      this.isOpenNickForm = false;
      if (!this.nickname) {
        this.nickname = 'Guest'
      }
      this.setNick(this.nickname)
    },
    openModal() {
      this.isOpenNickForm = true;
    },
    loginAsGuest() {
      this.nickname = 'Guest'
      this.setNick(this.nickname)
      this.isOpenNickForm = false;
    },
    setNickname() {
      this.setNick(this.nickname)
    },
    ...mapMutations('user',{
      setNick: SET_NICKNAME
    }),
    ...mapActions('user', {
      genId: GEN_ID
    })
  },
  mounted() {
    this.genId()
  },
  computed: {
    ...mapState('user', {
      user: state => state.user
    }),
  }
}
</script>

<style lang="scss" scoped>
.nick-form {
  padding: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  background: #fff;
  border-radius: 20px;
  min-width: 500px;
}
.nick-form__row {
  margin-bottom: 30px;
}
.nick-form__label {
  display: inline-block;
  margin-bottom: 20px;
}
.nick-form__input {
  display: block;
  padding: 6px 24px;
  width: 100%;
  border: none;
  border-bottom:1px solid #ccc;
  outline: none;
  &:focus {
    outline: none;
  }
}
.nick-form__controls {
  display: flex;
  justify-content: flex-end;
}
.nick-form__button {
	box-shadow:inset 0px 1px 0px 0px #97c4fe;
	background:linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%);
	background-color:#3d94f6;
	border-radius:20px;
	border:1px solid #337fed;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #1570cd;
  margin: 0 10px;
  &:hover {
    background:linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
	  background-color:#1e62d0;
  }
  &:last-child {
    margin-right: 0;
  }
  &:disabled {
    opacity: .7;
    cursor: default;
  }
}
.nick-form__button--green {
  box-shadow:inset 0px 1px 0px 0px #caefab;
	background:linear-gradient(to bottom, #77d42a 5%, #5cb811 100%);
	background-color:#77d42a;
	border:1px solid #268a16;
  &:hover {
    background:linear-gradient(to bottom, #5cb811 5%, #77d42a 100%);
	  background-color:#5cb811;
  }
  
}
.nick-form__button:active {
	position:relative;
	top:1px;
}

</style>
