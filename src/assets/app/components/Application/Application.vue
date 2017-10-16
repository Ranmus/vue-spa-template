<template lang="pug">
div
  example(:bold="true") This is example component!
</template>

<style lang="stylus" src="./Application.styl"></style>

<script>
import Example from '../Example';

export default {
  components: {
    Example,
  },
};
</script>
