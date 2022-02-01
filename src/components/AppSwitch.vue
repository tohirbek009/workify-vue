<template>
  <div class="switch">
    <div class="label">{{ label }}</div>
    <div class="switch-container">
      <div
          v-for='item in itemData'
          :key='item.id'
          :class="`switch__item ${item.id===selectedItemId?'selected':''}`"
          @click='switchItem(item.id)'
      >
        <img :src='item.icon' alt='not found'/>
        <div class="item__text">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";

export default Vue.extend({
  name: 'Switch',
  props: {
    value: Number,
    label: String,
    itemData: {
      type: Array,
      default: () => []
    },
    switchType: String
  },
  data() {
    return {
      selectedItemId: this.value
    }
  },
  methods: {
    switchItem(id: number) {
      this.selectedItemId = id;
    }
  },
  watch: {
    selectedItemId(newValue){
      this.$emit("input", newValue)
    }
  }
})
</script>

<style lang="scss" scoped>
@import "src/styles/style";
.switch {
  flex: 1;
  .label {
    font-family: $font-family;
    font-weight: 600;
    font-size: 20px;
    color: $black;
    margin-bottom: 9px;
  }

  .switch-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 51px;
    background-color: $gray-lightest;
    padding: 3px;
    box-sizing: border-box;
    border-radius: 15px;

    .switch__item {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      border-radius: 15px;
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
        font-family: $font-family;
        color: $black;
      }
    }
  }

  &:nth-child(1) {
    //margin-right: 30px;
  }
}

</style>