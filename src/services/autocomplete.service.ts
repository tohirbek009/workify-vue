import {IIndustryModel} from "@/services/moduls/industry.model";
import {ICityModel} from "@/services/moduls/city.model";
import dropdownData from "@/data/registrationDropdownData";
import axios from "axios";

export class AutocompleteService {
    public async querySelections(value:string, api: string, type: string){
        dropdownData[`loading${type}`] = true

        // Simulated ajax query
        const responseAxios = await axios.get(`https://localhost:7285/api/${api}Name=${value}`)

        const filteredData = responseAxios.data.data.filter((e:any) => {
            return (e.name || '').toLowerCase().indexOf((value || '').toLowerCase()) > -1
        })

        //Filtering data:
        if(type === 'Location'){
            filteredData.forEach((el:ICityModel)  => {
                dropdownData.itemsLocation.push({
                    value: el.id,
                    text: `${el.name}, ${el.country.name}`
                })
            })
        }else{
            filteredData.forEach((el:IIndustryModel) => {       //IIndustryModel can be general type for all here.
                dropdownData[`items${type}`].push({
                    value: el.id,
                    text: el.name
                })
            })
        }

        dropdownData[`loading${type}`] = false;
    }
}