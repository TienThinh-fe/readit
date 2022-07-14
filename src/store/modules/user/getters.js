const getters = {
  getUserName: (state) => state.user.name,
  getUserEmail: (state) => state.user.email,
  getUid: (state) => state.user.uid,
};

export default getters;
