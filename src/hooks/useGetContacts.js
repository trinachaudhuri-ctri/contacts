import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetContacts=()=>{
    const [contacts,setContacts]=useState([])
    const getContacts = async () => {
        try {
          const response = await axios.get('http://localhost:3000/getallcontacts');
          setContacts(response.data);
        } catch (error) {
          console.error('Error fetching contacts:', error);
        }
      };

    useEffect(()=>{
        getContacts()
    },[])

    return {
        contacts,
        getContacts
    }

}

export default useGetContacts