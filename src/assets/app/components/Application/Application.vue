<template lang="pug">
div
  example(:bold="true" :message="value") This is example component!
</template>

<style lang="stylus" src="./Application.styl"></style>

<script>
import Example from '../Example';

export default {
  components: {
    Example,
  },
  data() {
    return {
      value: 'This is example data',
    };
  },
};
</script>
