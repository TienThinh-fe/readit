import { createStore } from "vuex";

import UserModule from "./modules/user/index";

const store = createStore({
  modules: {
    user: UserModule,
  },
});

export default store;
