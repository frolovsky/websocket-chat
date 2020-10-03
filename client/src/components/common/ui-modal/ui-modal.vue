<template>
  <div class="ui-modal-wrapper">
    <slot></slot>
    <div class="ui-modal-shadow" @click="closeModal">
      <icon-close class="ui-modal-close-icon" />
    </div>
  </div>
</template>

<script>
import IconClose from '@/components/common/icons/icon-close.vue';
export default {
  name: 'UiModal',
  components: {
    IconClose,
  },
  props: {
    hideBodyOverflow: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    if (this.hideBodyOverflow) {
      document.body.classList.add('ui-modal-overflow-hidden');
    }
  },
  methods: {
    closeModal: function () {
      this.$emit('closeModal');
      if (this.hideBodyOverflow) {
        document.body.classList.remove('ui-modal-overflow-hidden');
      }
    },
  },
}
</script>

<style lang="scss" scoped>

.ui-modal-wrapper {
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 100;
}
.ui-modal-shadow {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
}
.ui-modal-wrapper .ui-modal-close-icon {
  position: absolute;
  right: 50px;
  top: 30px;
  width: 25px;
  height: 25px;
  fill: #fff;
  cursor: pointer;
  z-index: 102;
  transition: all 0.2s;
  &:hover {
    fill: #ccc;
    transform: scale(1.3);
  }
}

</style>

<style lang="scss">
.ui-modal-overflow-hidden {
  overflow: hidden;
}
</style>
