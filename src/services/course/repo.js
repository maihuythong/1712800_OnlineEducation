import { Api } from '../axiosApi';
import AsyncStorage from '../../utils/storage/asyncStorage';

const CourseRepo = {
  getTopSell: async function ({ limit = 10, page = 1 } = {}) {
    let data = [];
    try {
      ({ payload: data } = await Api({
        method: 'post',
        url: '/course/top-sell',
        body: {
          limit,
          page,
        },
      }));
    } catch (e) {
      console.log(
        'Error when get top sell courses ' + e?.response.data.message
      );
      throw e;
    } finally {
      return data;
    }
  },

  getCourseDetailAccount: async function (courseId, accountId) {
    let data = [];
    try {
      ({ payload: data } = await Api({
        method: 'get',
        url: `/course/get-course-detail/${courseId}/${accountId}`,
      }));
    } catch (e) {
      console.log('Error when get course detail' + e?.response.data.message);
      throw e;
    } finally {
      return data;
    }
  },

  getTopNewCourses: async function ({ limit = 10, page = 1 } = {}){
    let data = [];
    try {
      ({ payload: data } = await Api({
        method: 'post',
        url: '/course/top-new',
        body: {
          limit,
          page,
        },
      }));
    } catch (e) {
      console.log('Error when get top new courses ' + e?.response.data.message);
      throw e;
    } finally {
      return data;
    }
  },

  getAllCategory: async function () {
    try {
      const {payload: data} = await Api({
        method: 'get',
        url: '/category/all',
      });
      return data;
    } catch (e) {
      console.log('Error when get category' + e?.response.data.message);
      throw e;
    }
  }
};

export default CourseRepo;
