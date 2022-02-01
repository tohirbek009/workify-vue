<template>
  <v-form
      :class="`input-field ${isVisibleClearIcon?'form-select':''}`"
      :style="`margin-top:${!isVisibleClearIcon&&isPostjobComponent?'40px':'0'}`"
      ref="form" v-model="valid"
      lazy-validation
  >
    <label v-if="isVisibleLabel" :for="label">Years of experience</label>
    <div v-if="isVisibleIcon" class="autocomplete__icon">
      <img src="/assets/icons/city.svg" />
    </div>
    <v-select
        v-model="selected"
        :items="items"
        :item-text="items.text"
        :item-value="items.value"
        :placeholder="placeholder"
        outlined
        :rules="dropdownRule"
        :class="`${isVisibleIcon ? 'form-input': ''}`"
        :id="label"
        dense
        height="51"
    ></v-select>
    <img
        v-if="isVisibleClearIcon"
        src="/assets/icons/close.svg"
        class="cancel-icon"
        @click="deleteSkill(itemId)"
    >
  </v-form>
</template>

<script>
import skillsData from "../../data/skillsData/skillsData";
export default {
  name: "FormSelect",
  props: {
    label: String,
    icon: String,
    items: Array,
    placeholder: String,
    itemId: Number,
    isSubmitted: Boolean,
    isValid: Boolean,
    isPostjobComponent: Boolean,
    value: {
      type: Number
    },
    isVisibleClearIcon: {
      type: Boolean,
      default: false
    },
    isVisibleIcon: {
      type: Boolean,
      default: true
    },
    isVisibleLabel: {
      type: Boolean,
      default: true
    },
  },

  data(){
    return {
      valid: false,
      selected: this.value,
      skillsData,

      //Select form data items rules (validation):
      dropdownRule: [
        v => v !== 0 || "Select one option"
      ],
    }
  },

  watch:{
    selected(newValue){
      this.$emit("input", newValue)
      this.$emit('update:isValid', this.valid)
    },

    isSubmitted(){
      this.$refs.form.validate();
      this.$emit('update:isValid', this.valid)
    }
  },

  methods: {
    deleteSkill(id){
      this.$emit("deleteItem", id)
    }
  }

}
</script>

<style scoped>

</style>