<template>
<div>

</div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank');
    }
  }
}
</script>

<style lang="scss">
@import '../assets/stylesheets/palette.scss';
@import '../assets/stylesheets/fonts.css';
</style>
