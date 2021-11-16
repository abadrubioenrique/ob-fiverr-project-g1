import axios from '../utils/config/axios.config';

// Obtain All Cards
export const getAllCards = () => {
    return axios.get('http://ob-fiverr-backend.herokuapp.com/api/cards');
} 


// Obtain Card by ID
export const getCardByID = (id) => {
    return axios.get(`http://ob-fiverr-backend.herokuapp.com/api/cards/${id}`);
} 


// Delete Card
export const deleteCardByID = (id) => {
    return axios.delete(`http://ob-fiverr-backend.herokuapp.com/api/cards/${id}`);
} 


