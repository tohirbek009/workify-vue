let getEmploymentType = (n) =>{
    switch (n) {
        case 1: return "Full time";
        case 2: return "Part time";
        case 3: return "Contract";
        case 4: return "Freelancer";
        default: return "";
    }
}

export default getEmploymentType;