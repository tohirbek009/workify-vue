// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import axios from "axios";

const state = {
    user: {},
    talentSkills: [],
    talentLanguages: [],
    talentJobpreferences: {},
}

const getters = {
    userData: (state:any) => state.user,
    talentSkillsData: (state:any) => state.talentSkills,
    talentLanguagesData: (state:any) => state.talentLanguages,
    talentJobpreferencesData: (state:any) => state.talentJobpreferences
}

const actions = {
    async getUserData({ commit }:{commit: any}) {
        const user:any = localStorage.getItem("user");
        if(JSON.parse(user).userType === 2){
            const response = await axios.get(`https://localhost:7285/api/talent/${JSON.parse(user).talentId}`, {
                headers: {
                    "Authorization": `Bearer ${JSON.parse(user).token}`
                }
            })
            commit("setUser", response.data.data)
        }if(JSON.parse(user).userType === 1){
            const response = await axios.get(`https://localhost:7285/api/company/${JSON.parse(user).companyId}`, {
                headers: {
                    "Authorization": `Bearer ${JSON.parse(user).token}`
                }
            })
            commit("setUser", response.data.data)
        }

    },

    async getTalentLanguages ({commit}: {commit:any}){
        const talentUser:any = localStorage.getItem("user");
        const responseLang = await axios.get(`https://localhost:7285/api/talentlanguage?talentId=${JSON.parse(talentUser).talentId}`, {
            headers:{
                "Authorization": `Bearer ${JSON.parse(talentUser).token}`
            }
        })

        commit("setTalentLanguages", responseLang.data.data)
    },

    async getTalentSkills ({commit}:{commit:any}){
        const talentUser:any = localStorage.getItem("user");
        const responseSkill = await axios.get(`https://localhost:7285/api/talentskill?talentId=${JSON.parse(talentUser).talentId}`, {
            headers:{
                "Authorization": `Bearer ${talentUser.token}`
            }
        })

        commit("setTalentSkills", responseSkill.data.data)
    },

    async getTalentJobpreferences ({commit}: {commit:any}){
        const talentUser:any = localStorage.getItem("user");
        const responseJobPreference = await axios.get(`https://localhost:7285/api/jobpreference?TalentId=${JSON.parse(talentUser).talentId}`, {
            headers:{
                "Authorization": `Bearer ${JSON.parse(talentUser).token}`
            }
        })

        const getEmploymentType = (n:number) => {
            switch (n){
                case 1: return 'Full time';
                case 2: return 'Part time';
                case 3: return 'Contract';
                case 4: return 'Freelance';
                default: return "";
            }
        }

        const getWorkplaceType = (n:number) => {
            switch (n){
                case 1: return 'Onsite';
                case 2: return 'Remote';
                case 3: return 'Hybrid';
                default: return "";
            }
        }
        responseJobPreference.data.data[0].employmentType = getEmploymentType(responseJobPreference.data.data.employmentType)
        responseJobPreference.data.data[0].workplaceType = getWorkplaceType(responseJobPreference.data.data.workplaceType)
        responseJobPreference.data.data[0].minimumSalary = (responseJobPreference.data.data.minimumSalary).toFixed(2);

        commit("setTalentJobpreferences", responseJobPreference.data.data[0])
    }

}

const mutations = {
    setUser: (state:any, data:any) => (state.user = data),
    setTalentSkills:  (state:any, data:any) => (state.talentSkills = data),
    setTalentLanguages:(state:any, data:any) => (state.talentLanguages = data),
    setTalentJobpreferences: (state:any, data:any) => (state.talentJobpreferences = data)
}

export default {
    state,
    actions,
    getters,
    mutations
}
