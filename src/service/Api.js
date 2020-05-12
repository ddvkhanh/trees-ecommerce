import axios from "axios";

const API_BASE_PATH = "https://firetree.azurewebsites.net/api";
const productResourcePath = `/products`;
const ApiService = {
    
    Products : {
        getAll : async () => {
            const url = API_BASE_PATH + productResourcePath;
            return  axios.get(
                url 
            );
        },
        getByProductId : async(id) => {
            const url = `${API_BASE_PATH + productResourcePath}/${id}`
            return axios.get(
                url 
            );
        },
        search :  async (query) => {
            // console.log(query);
            const defaultPageSize = 8;
            const defaultPage = 1
            const actionPath ='/search'
            const url = `${API_BASE_PATH+productResourcePath+actionPath}?page=${defaultPage}&size=${defaultPageSize}`
            return  axios.get(
              url + (query ? "&" + query : "")
            );
         
        },
    }


}

export default ApiService;
