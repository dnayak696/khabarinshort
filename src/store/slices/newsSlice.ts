import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchLatestNews } from '../../services/newsApi';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  description: string;
  group: string;
  postImageUrl: string;
  postSourceLink: string;
  postSourceName: string;
  postedAt: string;
}

interface NewsState {
  articles: NewsItem[];
  loading: boolean;
  error: any;
}

const initialState: NewsState = {
    articles: [],
    loading: false,
    error: null
};


// Async thunk for fetching news
export const getLatestNews = createAsyncThunk(
  'news/getLatestNews',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchLatestNews();
      return data;
    } catch (error) {
      return rejectWithValue(error || 'Failed to fetch news');
    }
  }
);


const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNewsList(state, action: PayloadAction<NewsItem[]>) {
      state.articles = action.payload;
    },
    addNewsItem(state, action: PayloadAction<NewsItem>) {
      state.articles.push(action.payload);
    },
    clearNews(state) {
      state.articles = [];
    },
  },
   extraReducers: builder => {
    builder
      .addCase(getLatestNews.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLatestNews.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(getLatestNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setNewsList, addNewsItem, clearNews } = newsSlice.actions;
export default newsSlice.reducer;