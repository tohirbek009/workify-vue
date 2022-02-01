import axios from "axios";

const state = {
    jobs: [],
    jobPostSkills: [],
    jobPostLanguages: [],
}

const getters = {
    jobsData: (state:any) => state.jobs,
    jobPostSkillsData: (state:any) => state.jobPostSkills,
    jobPostLanguagesData: (state:any) => state.jobPostLanguages
}

const actions = {
    async getJobs({commit}:{commit:any}){
        const companyUser:any = localStorage.getItem('user')
        const {data} =  await axios({
            method: 'get',
            url : `https://localhost:7285/api/jobpost?CompanyId=${JSON.parse(companyUser).companyId}`,
            headers : {
                "Authorization": `Bearer ${JSON.parse(companyUser).token}`
            }
        })
        commit('setJobs', data.data)
    },

    async getJobPostLanguages({commit}:{commit:any}, id:number){
        const companyUser:any = localStorage.getItem('user')
        const {data} = await axios({
            method: 'get',
            url:`https://localhost:7285/api/jobpostlanguage?JobPostId=${id}`,
            headers : {
                "Authorization": `Bearer ${JSON.parse(companyUser).token}`
            }
        })
        
        commit('setJobPostLanguages', data.data)
    }
}

const mutations = {
    setJobs: (state:any, data:any) => (state.jobs = data),
    setJobPostSkills: (state:any, data:any) => (state.jobPostSkills = data),
    setJobPostLanguages: (state:any, data:any) => (state.jobPostLanguages = data),
}

export default {
    state,
    getters,
    actions,
    mutations
}