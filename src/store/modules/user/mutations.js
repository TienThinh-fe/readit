const mutations = {
  setUserName(state, payload) {
    state.user.name = payload;
  },
  setUserEmail(state, payload) {
    state.user.email = payload;
  },
  setUserUid(state, payload) {
    state.user.uid = payload;
  },
};

export default mutations;
