import axios from 'axios';

const apiKey = '39933687-b994f8a104bb2829fdb605324';
const baseUrl = `https://pixabay.com/api`;
const imgPerPage = 12;

export const getImages = async (query, page) => {
  let fetchLimit = page * imgPerPage;
  if (fetchLimit >= 500) {
    alert('no more Images');
    return;
  }
  const url = `${baseUrl}/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${imgPerPage}`;
  const response = await axios.get(url);
  return response.data.hits;
};
