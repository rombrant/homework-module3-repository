import { generateStdError } from "../../helpers/errorHandler";
import user from './user'

export default {
  namespaced: true,
  state: {
    works: [],
    currentWork: {}
  },
  mutations: {
    SET_WORKS: (state, works) => {
      state.works = works;
    },
    ADD_WORK: (state, newWork) => {
      state.works.push(newWork);
    },
    REMOVE_WORK: (state, deletedWorkId) => {
      state.works = state.works.filter(work => work.id !== deletedWorkId);
    },
    EDIT_WORK: (state, editedWork) => {
      state.works = state.works.map(work =>
        work.id === editedWork.id ? editedWork : work
      );
    },
    SET_CURRENT_WORK: (state, work) => {
      state.currentWork = {...work};
    }
  },
  actions: {
    async storeWork({ commit }, work) {
        console.log(work);
        const formData = new FormData();
        formData.append('id', work.id);
        formData.append('title', work.title);
        formData.append('techs', work.techs);
        formData.append('photo', work.photo);
        formData.append('link', work.link);
        formData.append('description', work.description);
      try {
        const response = await this.$axios.post("/works", formData);
        console.log(response.data);
        commit("ADD_WORK", response.data);
        return response;
      } catch (error) {
        // error handling
      }
    },

    async fetchWorks({ commit }) {
      try {
        const response = await this.$axios.get(`/works/${user.state.user.id}`);
        commit("SET_WORKS", response.data);
        return response;
      } catch (error) {
        // error handling
      }
    },

    async removeWork({ commit }, workId) {
      try {
        const response = await this.$axios.delete(`/works/${workId}`);
        commit("REMOVE_WORK", workId);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },

    async updateWork({ commit }, work) {
      try {
        const response = await this.$axios.post(`/works/${work.id}`, work);
        commit('EDIT_WORK', response.data.work);
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
