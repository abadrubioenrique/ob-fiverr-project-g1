import axios from '../utils/config/axios.config';

// Obtain All Cards
export const getAllCards = () => {
    return axios.get('https://ob-fiverr-backend.herokuapp.com/api/cards');
} 


// Obtain Card by ID
export const getCardByID = (id) => {
    return axios.get(`https://ob-fiverr-backend.herokuapp.com/api/cards/${id}`);
} 


// Delete Card
export const deleteCardByID = (id) => {
    return axios.delete(`https://ob-fiverr-backend.herokuapp.com/api/cards/${id}`);
} 

// Delete Card
export const postCard = (title, username, category, description, price, rating) => {
    let body = {
        title: title,
        username:username,
        category:category,
        description:description,
        price:price,
        rating: rating,
    }
     // Returns the response with a Promise
    return axios.post('https://ob-fiverr-backend.herokuapp.com/api/cards',body);
} 


