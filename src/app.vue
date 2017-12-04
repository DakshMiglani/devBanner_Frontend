<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import './assets/stylesheets/palette.scss';

body {
  margin: 0 3px 0 0;
  @media (max-width:480px)  {
    margin: 0;
  }
  padding: 0;
  background-color: $color4;
  .app {
    height: 100vh;
  }
}
</style>