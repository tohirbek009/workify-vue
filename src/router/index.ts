import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

//Views imports:
import Home from '../views/Home/Home.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import Login from '../views/Login/Login.vue'
import Registration from '../views/Register/Registration.vue'
import TalentRegistration from "../views/Register/TalentRegistration.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue"

//Components imports:
import AppTelegramBot from '@/components/AppTelegramBot.vue'
import AppCongratulations from "@/components/AppCongratulations.vue";

//Dashboard pages imports:
import DashboardProfile from '@/components/dashboard/DashboardProfile.vue';
import DashboardEditProfile from '@/components/dashboard/DashboardEditProfile.vue';
import CompanyPostJobForm from '@/components/dashboard/company/CompanyPostJobForm.vue';
import CompanyPostJobView from '@/components/dashboard/company/CompanyPostJobView.vue';
import CompanyPostJobCandidates from '@/components/dashboard/company/CompanyPostJobCandidates.vue';
import CompanyMyJobs from '@/components/dashboard/company/CompanyMyJobs.vue';
import CompanyTalents from "@/components/dashboard/company/CompanyTalents.vue"
import TalentJobMatches from '@/components/dashboard/talent/TalentJobMatches.vue';


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration,
    meta: {
      mustBeAuthentication: false
    }
  },
  {
    path: '/registration/telegram-bot',
    name: 'TelegramBot',
    component: AppTelegramBot
  },
  {
    path: '/registration/telegram-bot/dashboard_congratulation',
    name: 'Congratulation',
    component: AppCongratulations,
    meta: {
      shouldBeAuthenticated: true
    }
  },
  {
    path: "/dashboard",
    name: 'Dashboard',
    component: Dashboard,
    children:[
      {
        path: 'my-profile',
        name: 'DashboardProfile',
        component: DashboardProfile,
      },
      {
        path: "my-profile/edit",
        name: "DashboardEditProfile",
        component: DashboardEditProfile
      },

        //Company dashboard pages:
      {
        path:'post-job',
        name:"PostJob",
        component: CompanyPostJobForm,
      },
      {
        path: 'my-jobs/:id',
        name: 'CompanyPostJobView',
        component: CompanyPostJobView
      },
      {
        path: 'my-jobs/:id/candidates',
        name: 'CompanyPostJobCandidates',
        component: CompanyPostJobCandidates
      },
      {
        path: 'my-jobs',
        name: 'CompanyMyJobs',
        component: CompanyMyJobs
      },
      {
        path: 'talents',
        name:'CompanyTalents',
        component: CompanyTalents
      },
      {
        path: 'job-matches',
        name: 'TalentJobMatches',
        component: TalentJobMatches
      }
    ]
  },
  {
    path: '/registration/talent',
    name:"TalentRegistration",
    component: TalentRegistration,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
