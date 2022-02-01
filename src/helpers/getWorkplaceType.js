const getWorkplaceType = (n) => {
    switch (n){
        case 1: return "Onsite";
        case 2: return "Remote";
        case 3: return "Hybrid";
        default: return "";
    }
}
export default getWorkplaceType;