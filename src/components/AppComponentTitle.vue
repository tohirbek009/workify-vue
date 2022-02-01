<template>
  <div class='main-text'>{{title}}</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "AppComponentTitle",
  props:{
    title: String
  }
})
</script>

<style scoped lang="scss">
.main-text {
  font-family: 'Mulish', sans-serif;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: 45px;
  line-height: 69px;
  color: #343C44;
}
</style>