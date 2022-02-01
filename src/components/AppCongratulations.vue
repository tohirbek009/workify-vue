<template>
  <div class="congratulation">
    <ComponentTitle title='Congratulations'/>
    <div class="text"> Congratulations, you have successfully registered</div>
    <img src='/assets/icons/congratulation-illustrate.svg' />
    <v-btn
        x-large
        width="230"
        color='success'
        class="rounded-pill custom--v-btn"
        @click="$router.push('/dashboard')"
    >
      Go to Dashboard
    </v-btn>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import ComponentTitle from './AppComponentTitle.vue'

export default Vue.extend({
  name: 'Congratulation',
  components:{
    ComponentTitle
  }
})
</script>

<style lang='scss' scoped>
.congratulation{
  padding-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .text{
    margin-top: 10px;
    margin-bottom: 20px;
  }
  img{
    margin-bottom: 20px;
    transform: scale(0.8);
  }
}

</style>