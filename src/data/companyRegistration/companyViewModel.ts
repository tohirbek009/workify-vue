import {ICompanyModel} from "@/services/moduls/company.model";

const CompanyViewModel = <ICompanyModel>{
    id: 0,
    name: '',
    website: '',
    industry: {
        id: 0,
        name: ''
    },
    user: {
        id: 0,
        email: '',
        emailConfirmed: false,
        password: '',
        phoneNumber: '',
        registeredDate: '2022-01-21T11:59:32.777Z',
        role: 0,
        userType: 0,
        profileImage: null,
        aboutMe: "",
        city: {
            id: 0,
            name: "",
            country: {
                id: 0,
                name: ''
            }
        },
        lastLogin: '2022-01-21T11:59:32.777Z'
    }
}

export default CompanyViewModel