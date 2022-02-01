const jobPostLanguagesData = (n) => {
    switch (n){
        case 1: return "Beginner";
        case 3: return "Elementary";
        case 4: return "Pre-Intermediate";
        case 5: return "Intermediate";
        case 6: return "Upper-Intermediate";
        case 7: return "Advanced";
        default: return  "";
    }
}

export default jobPostLanguagesData;