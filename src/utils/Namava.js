import  Axios  from "axios";
import Config from "../Config";


export default Axios.create({
    baseURL : Config.baseURL,
})