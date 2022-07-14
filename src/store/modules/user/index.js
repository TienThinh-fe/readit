import getters from "./getters";
import mutations from "./mutations";

const userModule = {
  state() {
    return {
      user: {
        name: "",
        email: "",
        uid: "",
      },
    };
  },
  mutations,
  getters,
};

export default userModule;
