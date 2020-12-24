import { Api } from '../axiosApi';
import AsyncStorage from '../../utils/storage//asyncStorage';

const SearchRepo = {
  searchCourse: async function (body) {
    try {
      const token = await AsyncStorage.getAccessToken();
      const {keyword, limit, offset} = body;
      const { payload: { courses, instructors } = {} } = await Api({
        method: 'post',
        url: '/course/searchV2',
        body: {
          token,
          keyword,
          limit,
          offset,
        },
      });

      return { courses, instructors };
    } catch (e) {
      console.log('Error when search', e);
      throw e;
    }
  }
}

export default SearchRepo;
