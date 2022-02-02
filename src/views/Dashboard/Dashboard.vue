<template>
  <v-app id="inspire">
    <talent-navigation-bar v-if="userType === 2" @takeItemName="takeItemName"/>
    <company-navigation-bar v-if="userType === 1" @takeItemName="takeItemName"/>
    <v-main class="main">
      <div class="header">
        <div class="item-name">
          {{ itemName }}
        </div>
        <div class="d-flex justify-end">
          <v-btn
              fab
              dark
              depressed
              small
              color="purple"
              @click="$router.push('/dashboard/my-profile/edit')"
          >
            <v-icon dark>
              mdi-pencil
            </v-icon>
          </v-btn>
          <v-btn
              large
              color="success"
              depressed
              width="160"
              class="ml-5 rounded-pill"
              @click="$router.push('/dashboard/post-job')"
              v-if="userType === 1"
          >
            Post a Job
          </v-btn>
        </div>
      </div>
      <div
          class="pa-6 main__container"
      >
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>

import TalentNavigationBar from "./NavigationBar/TalentNavigationBar";
import CompanyNavigationBar from "@/views/Dashboard/NavigationBar/CompanyNavigationBar";

export default {
  name: "Dashboard",
  components: {
    TalentNavigationBar,
    CompanyNavigationBar
  },
  data: () => ({
    itemName: '',
    userType: 0,
  }),

  methods: {
    takeItemName(val) {
      this.itemName = val
    }
  },

  mounted() {
    this.userType = JSON.parse(localStorage.getItem('user')).userType;
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/style";

.main {
  height: 100vh;
  margin-left: 35px;
  margin-right: 35px;
  box-sizing: border-box;
  .header {
    padding-top: 28px;
    padding-bottom: 18px;
    display: flex;
    justify-content: space-between;

    .item-name {
      font-family: $font-family;
      font-size: 25px;
      font-weight: 600;
    }
  }

  .main__container {
    background: $secondary-lighter;
    border-radius: 29px;
    height: calc(100% - 114px);
    overflow: auto;
  }
}

</style>