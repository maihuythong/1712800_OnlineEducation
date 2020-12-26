import { Api } from "../axiosApi";

const CourseRepo = {
  getTopSell: async function ({ limit = 10, page = 1 } = {}) {
    let data = [];
    try {
      ({ payload: data } = await Api({
        method: "post",
        url: "/course/top-sell",
        body: {
          limit,
          page,
        },
      }));
    } catch (e) {
      console.log(
        "Error when get top sell courses " + e?.response.data.message
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
        method: "get",
        url: `/course/get-course-detail/${courseId}/${accountId}`,
      }));
    } catch (e) {
      console.log("Error when get course detail" + e?.response.data.message);
      throw e;
    } finally {
      return data;
    }
  },

  getCourseIntro: async function (courseId) {
    // let data = [];
    try {
      const { payload: data } = await Api({
        method: "get",
        url: `/course/get-course-info`,
        params: { id: courseId },
      });
      return data;
    } catch (e) {
      console.log(
        "Error when get course detail intro " + e?.response.data.message
      );
      throw e;
    } finally {
      // console.log(data);
      // return data;
    }
  },

  getCourseDetailWithLesson: async function (courseId) {
    let data = [];
    try {
      ({ payload: data } = await Api({
        method: "get",
        url: `/course/detail-with-lesson/${courseId}`,
      }));
    } catch (e) {
      console.log(
        "Error when get course detail with lesson" + e?.response.data.message
      );
      throw e;
    } finally {
      console.log(data);
      return data;
    }
  },

  getRecommendedCourses: async function ({
    id = "1364530c-90a2-4546-9be2-21f309d4e2db",
    limit = 10,
    page = 0,
  } = {}) {
    let data = [];
    try {
      ({ payload: data } = await Api({
        method: "get",
        url: `/user/recommend-course/${id}/${limit}/${page}`,
      }));
    } catch (e) {
      console.log(
        "Error when get course detail with lesson" + e?.response.data.message
      );
      throw e;
    } finally {
      // console.log(data);
      return data;
    }
  },

  getTopNewCourses: async function ({ limit = 10, page = 1 } = {}) {
    let data = [];
    try {
      ({ payload: data } = await Api({
        method: "post",
        url: "/course/top-new",
        body: {
          limit,
          page,
        },
      }));
    } catch (e) {
      console.log("Error when get top new courses " + e?.response.data.message);
      throw e;
    } finally {
      return data;
    }
  },

  getAllCategory: async function () {
    try {
      const { payload: data } = await Api({
        method: "get",
        url: "/category/all",
      });
      return data;
    } catch (e) {
      console.log("Error when get category" + e?.response.data.message);
      throw e;
    }
  },

  getFavoriteCourses: async function () {
    try {
      const { payload: courses } = await Api({
        method: "get",
        url: "/user/get-favorite-courses",
      });
      if (courses) {
        const res = await Promise.all(
          (courses || []).map((course) => CourseRepo.getCourseIntro(course.id))
        );
        if (res) {
          return res;
        }
      }
    } catch (e) {
      console.log("Error when get favorite courses " + e);
      throw e;
    }
  },

  getProcessingCourses: async function () {
    try {
      const { payload: courses } = await Api({
        method: "get",
        url: "/user/get-process-courses",
      });
      if (courses) {
        console.log('???');
        console.log(courses);
        const res = await Promise.all(
          (courses || []).map((course) => CourseRepo.getCourseIntro(course.id))
        );
        if (res) return res;
      }
    } catch (e) {
      console.log("Error when get processing courses " + e);
      throw e;
    }
  },

  getLessonInfo: async function (courseId, lessonId) {
    try {
      const [
        { payload: lessonData = {} },
        { payload: lessonVideo = {} },
      ] = await Promise.all([
        Api({
          method: "get",
          url: `/lesson/detail/${courseId}/${lessonId}`,
        }),
        Api({
          method: "get",
          url: `/lesson/video/${courseId}/${lessonId}`,
        }),
      ]);

      return {
        ...lessonData,
        ...lessonVideo,
      };
    } catch (e) {
      console.log("Error when get lesson info " + e?.response?.data?.message);
      throw e;
    }
  },

  getFreeCourse: async function(courseId) {
    console.log(courseId);
    try {
      const { freeCourseLink } = await Api({
        method: 'post',
        url: '/payment/get-free-courses',
        body: {
          courseId,
        },
      });

      console.log(freeCourseLink);

      return freeCourseLink;
    } catch (e) {
      console.log('Error when get free course ' + e?.response?.data?.message);
      throw e;
    }
  }
};

export default CourseRepo;
