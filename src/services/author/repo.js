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

  getAuthorDetail: async function(authorId) {
    try {
      const {payload: author} = await Api({
        url: `/instructor/detail/${authorId}`,
      });
      return author;
    } catch (e) {
      console.log('Error when get author detail ' + e?.response.data.message);
      return null;
    }
  }
}

export default AuthorRepo;
