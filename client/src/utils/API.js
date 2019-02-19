require('dotenv').config();

const APIKEY = process.env.APIKEY;

const API = {
    async searchForBook(query){

        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${APIKEY}`
        try{
            const response = await fetch(url,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            });
            const {results} = await response.json();
            return results;
        }
        catch(error){
            console.log(error);
        }
    }
}

export default API;