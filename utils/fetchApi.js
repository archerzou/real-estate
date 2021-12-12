import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
   const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '3252ed3f23msh2d7f5d025074d62p1ddc0bjsn7caa42c052a3'
        }
   });

   return data;
}