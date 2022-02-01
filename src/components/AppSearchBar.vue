<template>
  <div class="search-bar rounded-pill pl-5">
    <input
        v-model="search"
        type="text"
        :placeholder="placeholder"
        class="px-5"
    >
    <v-btn
      color="primary"
      class="rounded-pill custom--v-btn"
      large
      depressed
      width="150"
    >
      Search
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "AppSearchBar",

  props:{
    value: {
      type: String
    },
    placeholder: String
  },

  data(){
    return{
      search: this.value,
    }
  },

  watch:{
    search(newVal){
      this.$emit('input', newVal)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "src/styles/style";
  .search-bar{
    width: 100%;
    height: 50px;
    background: $white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 4px;
    input{
      height: 100%;
      width: 100%;
      outline: none;
      border: none;
      font-family: $font-family;
      color: $black;
      &::placeholder{
        font-family: $font-family;
        color: $gray-lighter;
      }
    }
  }
</style>