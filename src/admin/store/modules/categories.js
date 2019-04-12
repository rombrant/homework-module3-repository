export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    },
    DELETE_CATEGORIES: (state, deletedCategoryId) => {
      state.categories = state.categories.filter(category => category.id !== deletedCategoryId)
    },
    ADD_CATEGORIES: (state, newCategory) => {
      state.categories.push(newCategory);
    }
  },
  actions: {
    async addNewSkillGroup({ commit }, groupTitle) {
      try {
        const response = await this.$axios.post("/categories", {
          title: groupTitle
        });
        commit("ADD_CATEGORIES", response.data);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchCategories({ commit }) {
      try {
        const response = await this.$axios.get("/categories");
        commit("SET_CATEGORIES", response.data.reverse());
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeCategories({ commit }, categoryId) {
      try {
        const response = await this.$axios.delete(`/categories/${categoryId}`);
        commit("DELETE_CATEGORIES", categoryId);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
};
