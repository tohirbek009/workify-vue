const JobpostViewModel = {
    id: 0,
    occupation: "",
    speciality: "",
    employmentType: 1,
    workplaceType: 1,
    minimumSalary: 0,
    maximumSalary: 0,
    jobPostStatus: 1,
    city: {
        id: 0,
        name: "",
        country: {
            id: 0,
            name: ""
        }
    },
    description: "",
    companyId: 0
}

export default JobpostViewModel;