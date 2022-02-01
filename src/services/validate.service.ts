import jobPreferenceViewModel from "@/data/jobPreferenceViewModel";

export class ValidateService {
    public SkillsLanguuagesValidate(languagesData: any, skillsData: any) {
        let valid = true;
        skillsData.forEach((el: any) => {
            valid = valid && el.skillId !== 0 && el.yearsOfExperience !== 0;
        })
        languagesData.forEach((el: any) => {
            valid = valid && el.languageId !== 0 && el.languageLevel !== 0;
        })
        return valid;
    }

    public LanguagesValidate(languagesData: any){
        let validLang = true;
        languagesData.forEach((el: any) => {
            validLang = validLang && el.languageId !== 0 && el.languageLevel !== 0;
        })
        return validLang;
    }

    public SkillsValidate(skillsData: any){
        let validSkill = true;
        skillsData.forEach((el: any) => {
            validSkill = validSkill && el.skillId !== 0 && el.yearsOfExperience !== 0;
        })
        return validSkill;
    }

    public JobpreferenceValidate() {
        let valid = true;
        valid = jobPreferenceViewModel.city.country.id !== 0
            && jobPreferenceViewModel.city.id !== 0
            && jobPreferenceViewModel.minimumSalary !== "";
        return valid;
    }
}