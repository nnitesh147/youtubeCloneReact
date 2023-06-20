import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10'
  },
  headers: {
    'X-RapidAPI-Key': 'e714d27158msh0fcc3879018e74dp12649fjsn7143745607d9',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

 export const FetchFromAPI = async(url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}` , options);
  return data;
}
