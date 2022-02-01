<template>
  <div :class="`tab-container tab-container__${size}`">
    <div
        v-for='(tabItem, index) in tabItemData'
        :key='index'
        :class="`tab__item ${tabItem.id===selectedItemId?'selected':''}`"
        @click='switchTab(tabItem.id)'
    >
      <img v-if="tabItem.icon" :src='tabItem.icon'/>
      <div class='item__text'>{{ tabItem.name }}</div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'AppTab',

  props: {
    value: {
      type: Number,
    },

    size: String,

    tabItemData: {
      type: Array,
      default: () => []
    },
  },

  data() {
    return {
      selectedItemId: this.value
    }
  },

  methods: {
    switchTab(id: number) {
      this.selectedItemId = id;
    }
  },

  watch: {
    selectedItemId(newValue){
      this.$emit('input', newValue);
    }
  }
});
</script>

<style lang="scss" scoped>
@import 'src/styles/style';

.tab-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $gray-lightest;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 20px;

  .tab__item {
    //min-width: 160px;
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 20px;
    cursor: pointer;

    .item__text {
      font-family: $font-family;
      font-weight: 600;
      font-size: 18px;
      margin-left: 10px;
      color: $gray-lighter;
    }
  }

  .selected {
    background-color: $white;

    .item__text {
      color: $black;
    }
  }
}

.tab-container__sm{
  flex: 1;
  padding: 5px;
  border-radius: 12px;
  .tab__item{
    min-width: 160px;
    padding: 7px;
    border-radius: 14px;
    .item__text{
      font-size: 14px;
    }
  }
}
</style>