<template>
<div class="home_cont">
  <div class="create_banner">
    <div v-if="!showForm" class="logo">
      <img src="../assets/images/devrant.png" alt="">
    </div>
    <div class="title">devBanner</div>
    <div v-if="showForm" class="username">
      <span>Username</span>
      <input v-model="bannerDetails.username" />
    </div>
    <div v-if="showForm" class="text">
      <span>Text</span>
      <input v-model="bannerDetails.text" />
    </div>
    <div class="create_button">
      <button @click="createBanner">Create Your Banner</button>
    </div>
  </div>
</div>
</template>

<script>
import * as devBanner from '../api/devBanner'
export default {
  data() {
    return {
      showForm: false,
      bannerDetails: {
        username: '',
        text: '',
      }
    }
  },
  mounted() {
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank')
    },
    createBanner() {
      if (!this.showForm) {
        this.showForm = true
      } else {
        const username = this.bannerDetails.username
        const text = this.bannerDetails.text
        devBanner.getBanner(username, text)
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/stylesheets/palette.scss';
@import '../assets/stylesheets/fonts.css';
</style>
