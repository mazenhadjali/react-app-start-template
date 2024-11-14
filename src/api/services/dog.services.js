import axiosInstance from '../axiosinstance';
import { RANDOM_DOG_IMAGE_API } from '../endpoints';


export const getDogImage = async () => {
    try {
        const response = await axiosInstance.get(RANDOM_DOG_IMAGE_API);
        return response.data.message;
    } catch (error) {
        console.error('Error fetching dog image:', error);
        throw error;
    }
};
