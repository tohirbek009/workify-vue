<template>
  <div :class="`btn btn__${size} btn__${type}`" @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    size:String, // sm, md, lg, xlg
    type:String  // primary, primary-light, success
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/style';
  .btn{
    width: 210px;
    height: 50px;
    display: flex;
    justify-content: center;
    font-family: $font-family;
    align-items: center;
    font-weight: bold;
    font-size: 19px;
    color: $white;
    cursor: pointer;
    border-radius: 100px;
  }
  .btn__sm{
    width: 150px;
  }
  .btn__lg{
    width: 200px;
    height: 50px;
  }
  .btn__xlg{
    width: 300px;
    height: 80px;
  }
  .btn__primary{
    background-color: $primary;
  }
  .btn__primary-light{
    background-color: $white;
    color: $primary;
    border: 1px solid $primary;
  }
  .btn__success{
    background-color: $success;
  }
</style>