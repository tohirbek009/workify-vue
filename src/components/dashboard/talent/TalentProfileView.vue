<template>
  <div class="talent-profile-view mt-6">
    <v-row class="px-10 py-8">
      <v-col cols="12" sm="6" class="pa-0">
        <v-sheet
            class="d-flex align-center"
        >
          <v-avatar
              class="mr-5"
              color="primary"
              size="75"
          >
            <img
                v-if="null"
                alt="Avatar"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
            >
            <v-icon v-else dark>
              mdi-account-circle
            </v-icon>
          </v-avatar>

          <div class="information">
            <div class="main-text name">Odilkuziyev Tokhirbek</div>
            <div class="speciality">Frontend Developer</div>
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex flex-column align-end pa-0">
        <div class="d-flex">
          <img src="/assets/icons/location.svg"/>
          <div class="location ml-3">Toshkent, Uzbekistan</div>
        </div>
        <div class="salary">$1.250 USD</div>
      </v-col>

      <v-col cols="12">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
        opposed to using 'Content here, content here', making it look like
      </v-col>
      <v-col v-if="isOpenViewProfile" cols="12" class="d-flex justify-end">
        <div class="user-info">
          <div class="box">
            <div class="box-title">Email:</div>
            <div class="box-text"><img src="/assets/icons/lock.svg"/></div>
          </div>
          <div class="box">
            <div class="box-title">Phone:</div>
            <div class="box-text"><img src="/assets/icons/lock.svg"/></div>
          </div>
          <div class="box">
            <div class="box-title">Telegram:</div>
            <div class="box-text"><img src="/assets/icons/lock.svg"/></div>
          </div>
          <div class="box">
            <div class="box-title">Workplace:</div>
            <div class="box-text">WorkPlace</div>
          </div>
          <div class="box">
            <div class="box-title">Employment:</div>
            <div class="box-text">employment</div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-divider v-if="!isOpenViewProfile"/>
    <v-row class="px-10 py-7">
      <v-col cols="12" sm="6" class="pa-0">
        <div v-if="!isOpenViewProfile" class="main-text-2 mb-2">Required skills</div>
        <div v-if="isOpenViewProfile" class="main-text-2 mb-2">Skills</div>
        <v-chip
            label
            class="pa-3 mr-2 mb-2"
            color="vChipColor"
        >
          Figma (2 years)
        </v-chip>
        <v-chip
            label
            class="pa-3 mr-2 mb-2"
            color="vChipColor"
        >
          Figma (2 years)
        </v-chip>
      </v-col>
      <v-col v-if="isOpenViewProfile" cols="12" sm="6" class="pa-0">
        <div class="main-text-2 mb-2">Languages</div>
        <v-chip
            label
            class="pa-3 mr-2 mb-2"
            color="vChipColor"
        >
          English (Intermediate)
        </v-chip>
        <v-chip
            label
            class="pa-3 mr-2 mb-2"
            color="vChipColor"
        >
          French (Beginner)
        </v-chip>
      </v-col>
      <v-col v-if="!isOpenViewProfile" cols="12" sm="6" class="d-flex align-end justify-end pa-0">
        <v-btn
            color="primary"
            class="rounded-pill custom--v-btn"
            depressed
            width="150"
            @click="isOpenViewProfile = true"
        >
          View profile
        </v-btn>
        <v-btn
            color="primary"
            class="rounded-pill custom--v-btn ml-5"
            depressed
            outlined
            width="110"
        >
          Resume
        </v-btn>
      </v-col>
    </v-row>
    <v-divider v-if="isOpenViewProfile"/>

    <v-row v-if="isOpenViewProfile" class="px-10 py-7 application-info">
      <div class="main-text-2 mb-4">Application:</div>
      <div class="about-text mb-2">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
        opposed to using 'Content here, content here', making it look like readable English...
      </div>
      <div class="about-text">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
        opposed to using 'Content here, content here', making it look like readable English...
      </div>

      <ul class="my-5">
        <li>UX/UI</li>
        <li>UX/UI</li>
        <li>UX/UI</li>
      </ul>

      <div class="about-text mb-2">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
        opposed to using 'Content here, content here', making it look like readable English...
      </div>
      <div class="about-text mb-2">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
        opposed to using 'Content here, content here', making it look like readable English...
      </div>
    </v-row>
    <v-row v-if="isOpenViewProfile" class="px-10 pb-7 d-flex justify-end">
      <v-btn
          color="success"
          class="rounded-pill custom--v-btn"
          depressed
          width="150"
          @click="isOpenViewProfile = true"
      >
        Hire
      </v-btn>
      <v-btn
          color="primary"
          class="rounded-pill custom--v-btn ml-5"
          depressed
          outlined
          width="110"
      >
        Resume
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "TalentProfileView",

  data() {
    return {
      isOpenViewProfile: false,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/style";

.talent-profile-view {
  background: $white;
  border-radius: 14px;
  font-family: $font-family;

  .salary {
    font-weight: bold;
    font-size: 24px;
    color: $secondary-darkest;
    margin-top: 15px;
  }

  .required-skill-text {
    font-size: 20px;
    color: $black;
    font-weight: bold;
    margin-bottom: 7px;
  }

  ul {
    li {
      font-weight: bold;
      font-size: 16px;
      color: $black;
    }
  }

  .user-info {
    display: flex;
    width: 100%;

    :first-child {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }
  ;

    :last-child {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }

    .box {
      padding: 18px 10px;
      border: 1px solid rgba(199, 199, 199, 0.5);
      flex: 1;

      .box-title {
        color: $gray-lighter;
        font-size: 16px;
        font-weight: 600;
        font-family: $font-family;
      }

      .box-text {
        @extend .box-title;
        color: $black;
        margin-top: 5px;
      }
    }
  }
}

</style>