<template>
  <section id="home">
    <Intro />
    <!-- <HomePageBlock v-for="block in dataBlocks" :key="block.id" :dataBlock="block" /> -->
    <section
        v-for="block in dataBlocks"
        :key="block.id"
        :dataBlock="block"
        :class="[block.reversed ? 'reversed' : '', 'page-block']"
        :id="[block.id === '2' || block.id === '3' ? 'addBorderBottom':'']"
    >
      <div class="left-side">
        <img :src="block.img"/>
      </div>
      <div class="right-side">
        <div class="main-text">{{block.mainText}}</div>
        <div class="text">{{block.text}}</div>
        <div class="btn">{{block.btn}}</div>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Intro from "./Intro.vue";
export default Vue.extend({
  name: "Home",
  data: () => ({
    dataBlocks: [
      {
        id: "1",
        img: '/assets/icons/desktop.svg',
        mainText:
            "Like a professional recruiter, Workify does the legwork for you",
        text: "Finding the best candidate is always hard. Tell us what you are looking for and choose one from among the best.",
        btn: "Post a Vacancy",
        reversed: false
      },
      {
        id: "2",
        img: "/assets/icons/desktop.svg?data",
        mainText:
            "Like a professional recruiter, Workify does the legwork for you",
        text: "Finding the best candidate is always hard. Tell us what you are looking for and choose one from among the best.",
        btn: "Post a Vacancy",
        reversed: true
      },
      {
        id: "3",
        img: "/assets/icons/Helping.svg?data",
        mainText:
            "Like a professional recruiter, Workify does the legwork for you",
        text: "Finding the best candidate is always hard. Tell us what you are looking for and choose one from among the best.",
        btn: "Post a Vacancy",
        reversed: false
      },
      {
        id: "4",
        img: "/assets/icons/Frame.svg?data",
        mainText:
            "Like a professional recruiter, Workify does the legwork for you",
        text: "Finding the best candidate is always hard. Tell us what you are looking for and choose one from among the best.",
        btn: "Post a Vacancy",
        reversed: true
      },
    ]
  }),
  components:{
    Intro
  }
})
</script>

<style lang='scss' scoped>

$blockBtnBgColor:#8B39E5;
.page-block{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 100px 150px 0 150px;
  .left-side{
    width: 47%;
    // height: 410px;
    img{
      width:100% !important;
      // height: 100% !important;
    }
  }
  .right-side{
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    align-items: flex-start;

    .main-text{
      font-family: 'Mulish', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 45px;
      line-height: 124%;
      color: #343C44;
    }

    .text{
      font-family: 'Mulish', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0.3px;
      color: #808080;
      margin: 30px 0;
    }

    .btn{
      background: $blockBtnBgColor;
      border-radius: 45px;
      color: #ffffff;
      font-family: 'Mulish', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 18px;
      padding: 15px 30px;
      cursor: pointer;
    }
  }
}
.reversed{
  flex-direction: row-reverse !important;
}
#addBorderBottom{
  border: 1.5px solid #ECF0F8;
}
</style>