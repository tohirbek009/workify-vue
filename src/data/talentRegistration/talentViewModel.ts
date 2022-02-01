import { ITalentModel } from "@/services/moduls/talent.model";

const TalentViewModel = <ITalentModel> {
    id: 0,
    firstName: "",
    lastName: "",
    gender: true,
    dateOfBirth: "2022-01-22T11:30:09.569Z",
    user: {
        id: 0,
        email: "",
        emailConfirmed: false,
        password: "",
        phoneNumber: "",
        registeredDate: "2022-01-22T11:30:09.569Z",
        role: 1,
        userType: 1,
        profileImage: null,
        aboutMe: "",
        city: {
            id: 0,
            name: "",
            country: {
                id: 0,
                name: ""
            }
        },
        lastLogin: "2022-01-22T11:30:09.569Z"
    }
}

export default TalentViewModel