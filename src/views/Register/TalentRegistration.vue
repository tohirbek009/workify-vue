<template>
  <v-stepper v-model="e1" class="custom-stepper">
    <AppComponentTitle title="Show us what you got" />

    <v-stepper-header class="custom-stepper__header">
      <v-stepper-step :complete="e1 > 1" editable step="1" @click="$router.push('/registration')"></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" editable step="2"></v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3" editable></v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>

      <v-stepper-content step="2">
        <TalentRegistrationB @changeStep="changeStep" />
      </v-stepper-content>

      <v-stepper-content step="3">
        <TalentRegistrationC @changeStep="changeStep" />
      </v-stepper-content>

    </v-stepper-items>
  </v-stepper>
</template>

<script>
import TalentRegistrationB from "@/views/Register/TalentRegistrationB";
import TalentRegistrationC from "@/views/Register/TalentRegistrationC";
// import FormSkills from "../../components/form/FormSkills";
// import FormJobType from "../../components/form/FormJobType";
import AppComponentTitle from "../../components/AppComponentTitle";
export default {
  name: "TalentRegistration",
  components: {
    // FormSkills,
    TalentRegistrationB,
    TalentRegistrationC,
    AppComponentTitle
  },
  data(){
    return {
      e1: 2,
    }
  },
  methods:{
    changeStep(step){
      this.e1 = step
    }
  }
}
</script>

<style lang="scss" scoped>
  .custom-stepper::v-deep{
    padding-top: 130px;
    box-shadow: none !important;
    .custom-stepper__header{
      margin-left: auto;
      margin-right: auto;
      margin-top: 30px;
      max-width: 400px !important;
    }
    .v-stepper__header{
      box-shadow: none !important;
      margin-top: 10px !important;
    }
    .v-stepper__step{
      height: 32px !important;
      margin-top: 20px !important;
      padding: 0 !important;
      .v-ripple__container{
        display: none !important;
      }
    }
    .v-stepper__step--editable:hover{
      background: none !important;
    }
  }
</style>