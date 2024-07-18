import axios from "axios";
import useGetContacts from "./useGetContacts";
const useCreateContact = () => {
    const {getContacts}=useGetContacts()
  const createContact = async ({name, number}) => {
    try {
      console.log(name,number);
      const response = await axios.post('http://localhost:3000/create', {
        name,
        number
      });
      console.log('Contact created:', response.data);
      getContacts()
      // Optionally return or handle any response data
    } catch (error) {
      console.error('Error creating contact:', error);
      // Handle errors as needed
    }
  };

  return { createContact }; 
};

export default useCreateContact;
