import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': '51d3cb8d09msh4144b0dfffa7ed9p18514cjsnaa0b73a8ef56'
//   }

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
      headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
      },
    });
      
    return data;
  }