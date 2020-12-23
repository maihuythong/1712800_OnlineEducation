import { Api } from '../axiosApi';

const AuthorRepo = {
  getAllAuthor: async function () {
    try {
      const { payload: authors } = await Api({
        method: 'get',
        url: '/instructor',
      });

      return authors;
    } catch (e) {
      console.log('Error when get list authors ' + e?.response.data.message);
      throw e;
    }
  },
}

export default AuthorRepo;
