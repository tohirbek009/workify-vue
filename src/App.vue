<template>
  <v-app>
    <Header v-if="!$route.path.toString().includes('/dashboard')" />
    <router-view />
    <Footer v-if="!$route.path.toString().includes('/dashboard')" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
  components:{
    Header,
    Footer
  }
});
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600&family=Roboto:wght@100;300;400&display=swap');
  @import "src/styles/style";

  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box !important;
    font-family: 'Mulish', sans-serif;
  }
</style>
