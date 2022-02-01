<template>
  <v-form
      class="autocomplete-container"
      lazy-validation
  >
    <div class="autocomplete__icon-wrapper">
      <div class="autocomplete__icon">
        <img src="/assets/icons/city.svg" />
      </div>
    </div>
    <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        class="mx-4 vue-autocomplete"
        flat
        hide-no-data
        hide-details
        label="What state are you from?"
        solo
        required
    ></v-autocomplete>
  </v-form>

</template>

<script>
export default {
  name: "AppSearchableDropdown",
  data () {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District of Columbia',
        'Federated States of Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virgin Island',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
      ],
    }
  },
  watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    querySelections (v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 1500)
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'src/styles/style';
.autocomplete-container{
  display: flex;
  justify-content: center;
  flex: 1;
  .autocomplete__icon-wrapper{
    border: 1px solid $primary;
    border-right: none;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 10px !important;
    border-bottom-left-radius: 10px !important;
    margin-right: -16px;
    .autocomplete__icon{
      width: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $secondary-lightest;
      border-radius: 10px;
    }
  }
  .vue-autocomplete{
    border: 1px solid $primary;
    border-left: none;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 10px !important;
    border-bottom-right-radius: 10px !important;
  }
}

</style>