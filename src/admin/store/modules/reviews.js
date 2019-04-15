import { generateStdError } from "../../helpers/errorHandler";
import user from './user'

export default {
  namespaced: true,
  state: {
    reviews: [],
    currentReview: {}
  },
  mutations: {
    SET_REVIEWS: (state, reviews) => {
      state.reviews = reviews;
    },
    ADD_REVIEW: (state, newReview) => {
      state.reviews.push(newReview);
    },
    REMOVE_REVIEW: (state, deletedReviewlId) => {
      state.reviews = state.reviews.filter(review => review.id !== deletedReviewId);
    },
    SET_CURRENT_REVIEW: (state, curReviewId) => {
      state.currentReview = state.reviews.filter(review => review.id === curReviewId);
    }
  },
  actions: {
    async addReview({ commit }, review) {
        console.log(review);
        const formData = new FormData();
        formData.append('id', review.id);
        formData.append('author', review.author);
        formData.append('occ', review.occ);
        formData.append('text', review.text);
        formData.append('photo', review.photo);
      try {
        const response = await this.$axios.post("/reviews", formData);
        commit("ADD_REVIEW", response.data);
        return response;
      } catch (error) {
        // error handling
      }
    },

    async fetchReviews({ commit }) {
      try {
        const response = await this.$axios.get(`/reviews/${user.state.user.id}`);
        commit("SET_REVIEWS", response.data);
        return response;
      } catch (error) {
        // error handling
      }
    },

    async removeReview({ commit }, reviewId) {
      try {
        const response = await this.$axios.delete(`/reviews/${reviewId}`);
        commit("REMOVE_REVIEW", reviewId);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },

    async updateReview({ commit }, review) {
      try {
        const response = await this.$axios.post(`/reviews/${review.id}`, review);
        commit('ADD_REVIEW', response.data.review);
        return response;
      } catch (error) {
        // error handling
      }
    },

    createReview(store, currentReview) {
      const formData = new FormData();
      formData.append('text', review.author);
      formData.append('text', review.occ);
      formData.append('text', review.text);
      formData.append('photo', review.photo);
    }
  }
};
