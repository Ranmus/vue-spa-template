<template lang="pug">
div(:class="{'bold': bold}")
  span
    slot(v-if="!hidden")
  br
  button(@click="toggle") Toggle text
</template>

<style scoped lang="stylus" src="./Example.styl"></style>

<script>
export default {
  props: {
    bold: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hidden: false,
    };
  },
  methods: {
    toggle() {
      this.hidden = !this.hidden;
    },
  },
};
</script>
