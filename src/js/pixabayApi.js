import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const KEY = '25196211-b80e38914b4905c09ace9b244';
let nameKey = '';

export async function fetchPictures(name, page, perPage) {
    try {
        if (nameKey !== name) {
            nameKey = name;
            page = 1;
        }
        const response = await axios.get(
            `?key=${KEY}&per_page=${perPage}&page=${page}&q=${nameKey}&image_type=photo&orientation=horizontal&safesearch=true`);
        return response.data;;
    } catch (error) {
        Notify.failure('Sorry, ERROR!!!');
    }
}