const state = {
    items: [],

    languages: [
        {
            id: 2,
            languageLevel: 0,
            languageName: '',
            languageId: 0,
            talentId: 0
        }
    ],

    skills: [
        {
            id: 1,
            talentId: 0,
            yearsOfExperience: 0,
            skillId: 0,
            skillName: '',
        }
    ],

    skillsID: [],

    languagesID: []
}

const getters = {
    languagesData: (state:any) => state.languages,
    languagesIdData: (state:any) => state.languagesID,
    skillsData: (state:any) => state.skills,
    skillsIdData: (state:any) => state.skillsID,
    itemsData: (state:any) => state.items
}

const mutations = {
    addItem(state:any, element:any){
      state.items.push({
          value: element.id,
          text: element.name
      })
    },

    deleteAllItems(state:any){
        state.items = [];
    },

    addLanguage(state:any){
        const localStore:any = localStorage.getItem('user');
        state.languages.push({
            id: (new Date()).getTime(),
            languageLevel: 0,
            languageName: '',
            languageId: 0,
            talentId: JSON.parse(localStore)?.talentId
        })
    },
    addSkill(state:any){
        const localStore:any = localStorage.getItem('user');
        state.skills.push({
            id: (new Date()).getTime(),
            yearsOfExperience: 0,
            skillId: 0,
            skillName: '',
            talentId: JSON.parse(localStore)?.talentId
        })
    },
    removeLanguage(state:any, id:number) {
        state.languages = state.languages.filter((element:any) => element.id !== id)
    },
    removeSkill(state:any, id:number){
        state.skills = state.skills.filter((element:any) => element.id !== id)
    },

    addLanguagesID(state:any, data:any){
        state.languagesID[data[0]] = data[1];
    },
    addSkillID(state:any, data:any){
        state.skillsID[data[0]] = data[1];
    }
}


export default {
    state,
    getters,
    mutations
}