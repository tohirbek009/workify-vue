<template>
  <v-navigation-drawer
      v-model="drawer"
      width = '300'
      app
      class="pa-4 pt-5 pl-8"
  >
    <v-sheet
        class="pa-4 d-flex"
    >
      <v-avatar
          class="mb-4"
          color="primary"
          size="47"
      >
        <img
            v-if="userData.profilePicture"
            alt="Avatar"
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
        >
        <v-icon v-else dark>
          mdi-account-circle
        </v-icon>
      </v-avatar>

      <div class="information">
        <div class="name">{{userData.name}}</div>
        <div class="location">{{userData.user.city.name}}</div>
      </div>
    </v-sheet>


    <v-list>
      <v-list-item-group
          v-model="group"
          active-class="active"
          mandatory
      >
        <v-list-item
            v-for="[icon, text, path] in links"
            :key="text"
            :link="true"
            color="blue"
            :to="path"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "SidebarNavigation",
  data: () => ({
    drawer: null,
    group: null,
    links: [
      ['mdi-inbox-arrow-down', 'My company','/dashboard/my-profile'],
      ['mdi-home', 'My jobs','/dashboard/my-jobs'],
      ['mdi-delete', 'Talents',"/dashboard/talents"],
      ['mdi-alert-octagon', 'Home', '/'],
      ['mdi-alert-octagon', 'Settings'],
      ['mdi-alert-octagon', 'FAQ'],
      ['mdi-alert-octagon', 'Contacts'],
    ],
  }),

  watch: {
    group (val) {
      this.$emit("takeItemName", this.links[val][1])
    },
  },

  methods:{
    ...mapActions(['getUserData'])
  },
  computed:{
    ...mapGetters(['userData'])
  },
  async created() {
    await this.getUserData();
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/style';

.v-list-item::v-deep{
  min-height: 32px;
  border-radius: 5px;
  margin-bottom: 12px;
  &:hover{
    border-radius: 5px;
  }
  .v-list-item__icon{
    margin: 8px 25px 8px 0 !important;
  }
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled){
  color: $gray-lighter;
}

.active{
  background: $primary;
  color: $white !important;
}

.information {
  margin-left: 10px;

  .name {
    color: $black;
    font-family: $font-family;
    font-weight: bold;
    font-size: 18px;
  }

  .location {
    color: $gray-lighter;
    font-family: $font-family;
    font-weight: 500;
    font-size: 16px;
  }
}
</style>