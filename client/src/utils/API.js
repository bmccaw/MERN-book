require('dotenv').config();

const APIKEY = process.env.APIKEY;

const API = {

    async getBestSellers () {
        console.log('retrieving bestsellers');
        const url = `https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=${NYTAPIKEY}`	
        try {
            const response = await fetch(url, {
                headers:{
                    "Content-Type":"application/json"
                }
            });
            const {results} = await response.json()
            console.log(results);
            return results;
        }
        catch(error){
            console.log(error);
        }
    },


    async searchForBook(query){
        const concatQuery = query.replace(' ', '+');
        const url = `https://www.googleapis.com/books/v1/volumes?q=${concatQuery}&key=${GOOGLEAPIKEY}`
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