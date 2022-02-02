<template>
  <div class="wrapper" v-if="isResponseReady">
    <div class="profile-info pa-6" >
      <v-row class="pt-6 pl-8">
        <v-col cols="12" sm="2" class="d-flex justify-center">
          <v-avatar
              class="mb-4"
              color="primary"
              size="188"
          >
            <img
                v-if="userData.profilePicture"
                alt="Avatar"
                :src="userData.profilePicture"
            >
            <v-icon v-else dark>
              mdi-account-circle
            </v-icon>
          </v-avatar>
        </v-col>
        <v-col cols="12" sm="10" class="pl-9">
          <v-row>
            <v-col v-if="userData.user.userType === 2" cols="12" sm="6" class="d-flex flex-column">
              <div class="name">{{userData.firstName}} {{userData.lastName}}</div>
              <div class="speciality">Speciality</div>
            </v-col>
            <v-col v-if="userData.user.userType === 1" cols="12" sm="6" class="d-flex flex-column">
              <div class="name">{{userData.name}}</div>
              <div class="speciality">{{userData.industry.name}}</div>
            </v-col>
            <v-col cols="12" sm="6" class="d-flex flex-column align-end">
              <div class="d-flex">
                <img src="/assets/icons/location.svg"/>
                <div class="location ml-3">{{userData.user.city.name}}, {{userData.user.city.country.name}}</div>
              </div>
              <div v-if="userData.user.userType === 2" class="salary">${{talentJobpreferencesData.minimumSalary}} USD</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div class="about-user">{{userData.user.aboutMe}}</div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-end">
          <div class="user-info">
            <div class="box">
              <div class="box-title">Email:</div>
              <div class="box-text">{{userData.user.email}}</div>
            </div>
            <div class="box">
              <div class="box-title">Phone:</div>
              <div class="box-text">{{userData.user.phoneNumber}}</div>
            </div>
            <div v-if="userData.user.userType === 2" class="box">
              <div class="box-title">Telegram:</div>
              <div class="box-text">@telegram_</div>
            </div>
            <div  v-if="userData.user.userType === 2" class="box">
              <div class="box-title">Workplace:</div>
              <div class="box-text">{{talentJobpreferencesData.workplaceType}}</div>
            </div>
            <div v-if="userData.user.userType === 2" class="box">
              <div class="box-title">Employment:</div>
              <div class="box-text">{{talentJobpreferencesData.employmentType}}</div>
            </div>
            <div v-if="userData.user.userType === 2" class="box">
              <div class="box-title">Gender:</div>
              <div class="box-text">{{userData.gender ? 'Male':'Female'}}</div>
            </div>
            <div v-if="userData.user.userType === 2" class="box">
              <div class="box-title">Date of birth:</div>
              <div class="box-text">{{userData.dateOfBirth}}</div>
            </div>
            <div v-if="userData.user.userType === 1" class="box">
              <div class="box-title">Website:</div>
              <div class="box-text">www.{{userData.website}}</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

    <!--  This talent-skills page will be seen only talent dashboard  -->
    <v-row v-if="userData.user.userType === 2" class="talent--skills-languages pa-4">
      <v-col cols="12" sm="6" class="pr-3 pl-0">
        <div class="block pa-5">
          <div class="block__title">Skills:</div>
          <div class="items d-flex flex-wrap">
            <div
                class="item"
                v-for="skill in talentSkillsData"
                :key="skill.id"
            >{{skill.skillName}}</div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="pl-3 pr-0">
        <div class="block pa-5">
          <div class="block__title">Languages:</div>
          <div class="items d-flex flex-wrap">
            <div
                class="item"
                v-for="language in talentLanguagesData"
                :key="language.id"
            >{{language.languageName}}</div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>

</template>

<script>

import {mapActions, mapGetters} from 'vuex';
export default {
  name: "ProfilePage",
  data: () => ({
    isResponseReady: false,
  }),
  methods:{
    ...mapActions(['getUserData', 'getTalentLanguages', 'getTalentSkills', 'getTalentJobpreferences']),
  },

  computed:{
    ...mapGetters(['userData', 'talentSkillsData', 'talentLanguagesData', 'talentJobpreferencesData']),
  },


  async created(){

    this.isResponseReady = false;

    await this.getUserData();
    if(this.userData.user.userType === 2){
      await this.getTalentSkills();
      await this.getTalentJobpreferences();
      await this.getTalentLanguages();
    }

    this.isResponseReady = true;
    console.log(this.userData)
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/styles/style';
  .wrapper{
    border-radius: 18px;
    .profile-info{
      background: $white;
      border-radius: 20px;
      .name{
        color: $secondary-darkest;
        font-size: 32px;
        font-weight: bold;
        font-family: $font-family;
      }
      .speciality{
        font-family: $font-family;
        font-weight: 500;
        font-size: 24px;
        color: $black;
        margin-top: 5px;
      }

      .location{
        font-family: $font-family;
        font-weight: 600;
        font-size: 18px;
        color: $black;
      }

      .salary{
        font-family: $font-family;
        font-weight: bold;
        font-size: 24px;
        color: $secondary-darkest;
        margin-top: 15px;
      }

      .about-user{
        font-size: 18px;
        color: $black;
        font-family: $font-family;
      }

      .user-info{
        display: flex;
        justify-content: flex-end;
        :first-child{
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        };
        :last-child{
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
        }
        .box{
          padding: 18px 10px;
          border: 1px solid rgba(199, 199, 199, 0.5);
          .box-title{
            color: $gray-lighter;
            font-size: 16px;
            font-weight: 600;
            font-family: $font-family;
          }
          .box-text{
            @extend .box-title;
            color: $black;
            margin-top: 5px;
          }
        }
      }
    }

    .talent--skills-languages{
      margin-top: 20px;
      .block{
        background: $white;
        border-radius: 20px;
        .block__title{
          font-weight: bold;
          font-size: 24px;
          font-family: $font-family;
          color: $black;
        }
        .items{
          margin-top: 15px;
          .item{
            padding: 10px;
            font-size: 16px;
            font-weight: 600;
            font-family: $font-family;
            color: $black;
            background: $gray-lightest;
            border-radius: 10px;
            width: fit-content;
            margin-right: 10px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
</style>