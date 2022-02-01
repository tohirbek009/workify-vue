<template>

  <div class="registration">
    <div class="registration-tab">
      <AppTab
          v-model="selectedComponentId"
          :tabItemData='tabItemData'
          size='lg'
      />
    </div>

    <div v-if='selectedComponentId === 1'>
      <CompanyRegistration/>
    </div>
    <div v-if='selectedComponentId === 2'>
      <TalentRegistrationA/>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'

import AppTab from '@/components/AppTab.vue'
import CompanyRegistration from './CompanyRegistration.vue'
import TalentRegistrationA from './TalentRegistrationA.vue'

export default Vue.extend({
  name: 'Registration',
  components: {
    AppTab,
    CompanyRegistration,
    TalentRegistrationA
  },
  data: () => ({
    selectedComponentId: 1,

    tabItemData: [
      {
        id: 1,
        icon: '/assets/icons/talent-selected.svg',
        name: 'Company',
        path: '/registration/company'
      },
      {
        id: 2,
        icon: '/assets/icons/talent-selected.svg',
        name: 'Talent',
        path: '/registration/talent/part/1'
      }
    ]
  }),
})
</script>

<style lang="scss" scoped>
@import 'src/styles/style';
.registration {
  padding-top: 130px;
  .registration-tab{
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>