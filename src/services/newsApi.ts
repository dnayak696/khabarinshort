import axios from 'axios';

const API_URL = 'https://d2berfdio9bieg.cloudfront.net/latest.json';

export async function fetchLatestNews() {
  try {
    const response = await axios.get(API_URL);
     console.log('Fetched news:', response.data.articles);
    return response.data.articles; // assuming the API returns an array of news
  } catch (error) {
    console.error('Error fetching latest news:', error);
    throw error;
  }
}