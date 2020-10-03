<template>
  <svg-icon icon-name="Close" view-box="0 0 20 20">
    <path
      d="M11.414 10l8.293-8.293A.999.999 0 1 0 18.293.293L10 8.586 1.707.293A.999.999 0 1 0 .293 1.707L8.586 10 .293 18.293a.999.999 0 1 0 1.414 1.414L10 11.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z"
    /><path fill="none" d="M0 20h20V0H0z" />
  </svg-icon>
</template>

<script>
import SvgIcon from '@/components/common/icons/svg-icon.vue';

export default {
  name: 'IconClose',
  components: {
    SvgIcon,
  },
};
</script>
