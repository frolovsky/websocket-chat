<template>
  <svg xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox" :aria-labelledby="iconName" role="presentation">
    <title :id="iconName" lang="en">{{ iconName }}</title>
    <slot />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconName: {
      type: String,
      required: true,
    },
    viewBox: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
}
</style>
