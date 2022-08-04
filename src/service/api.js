import axios from 'axios';

export const getUsers=async()=>{
    const URL=''
    try {
      return await axios.get(`${URL}/news`);
    } catch (error) {
       console.log(error.message);
    }
}
