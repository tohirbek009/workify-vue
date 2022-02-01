<template>
  <v-form class="input-field" ref="form" v-model="valid" lazy-validation>
    <label v-if="isVisibleLabel" :for="label">{{ label }}</label>
    <div v-if="isVisibleIcon" class="autocomplete__icon">
      <img :src="icon" alt="not found"/>
    </div>
    <v-autocomplete
        v-model="selected"
        :loading="loading"
        loader-height="2"
        :items="items"
        :item-disabled="items.disabled"
        :item-text="items.text"
        :item-value="items.value"
        :search-input.sync="search"
        cache-items
        flat
        :rules="dropdownRule"
        hide-no-data
        hide-detail
        hide-selected
        :placeholder="placeholder"
        solo
        outlined
        required
        color="#CCD2E3"
        :class="`${isVisibleIcon ? 'form-input': ''}`"
        :id="label"
        dense
        :disabled="parentId === 0"
        height="51"
    ></v-autocomplete>
  </v-form>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import dropdownData from "@/data/registrationDropdownData";
import axios from "axios";


export default {
  name: "FormAutocomplete",
  props: {
    value: {
      type: Number,
    },
    label: String,
    icon: String,
    placeholder: String,
    api: String,
    isSubmitted: Boolean,
    parentId: Number,
    editPage: Boolean,
    dataForEdit: Object,
    isVisibleLabel: {
      type: Boolean,
      default: true
    },
    isVisibleIcon: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      loading: false,
      search: '',
      items: [],
      selected: this.value,
      valid: false,
      isSubmittedFirstTime: false,

      //Autocomplete form data items rules (validation):
      dropdownRule: [
        v => v !== 0 || "Select one option"
      ],
    }
  },

  watch: {
    search(val) {
      val && val !== this.selected && this.querySelections(val);
    },
    selected(newVal) {
      this.$emit("input", newVal)
    },
    isSubmitted() {
      this.$refs.form.validate();
      this.isSubmittedFirstTime = true
    }
  },

  // mounted() {
  //   if(this.editPage){
  //     this.items = [this.dataForEdit]
  //     this.selected = this.items[0];
  //   }
  // },

  computed: {
    ...mapGetters(['skillsData', 'skillsIdData', 'languagesData', 'languagesIdData']),
  },

  methods: {
    ...mapMutations(['addLanguagesID', 'addSkillID']),

    async querySelections(val) {
      this.loading = true

      // Simulated ajax query
      this.languagesData.forEach((el, index) => {
        this.addLanguagesID([index, el.languageId]);
      })
      this.skillsData.forEach((el, index) => {
        this.addSkillID([index, el.skillId])
      })


      const responseAxios = await axios.get(`https://localhost:7285/api/${this.api}Name=${val}`)

      const filteredData = responseAxios.data.data.filter((e) => {
        return (e.name || '').toLowerCase().indexOf((val || '').toLowerCase()) > -1
            && !(this.languagesIdData.includes(e.id))
            && !(this.skillsIdData.includes(e.id))
      })

      //Filtering data:

      filteredData.forEach((el) => {       //IIndustryModel can be general type for all here.
        this.items.push({
          value: el.id,
          text: el.name,
          disabled: this.languagesIdData.includes(el.id),
        })
      })
     if(val === 'English'){
       this.items = this.items.filter((el) => el.text !== 'French')
     }

      this.loading = false;
    },
  }
}
</script>

<style scoped>

</style>