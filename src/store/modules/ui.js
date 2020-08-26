export default {
  state: {
    drawer: false,
    notification: {
      display: false,
      text: 'Notification',
      timeout: 3000,
      alertClass: 'success',
    },
  },
  getters: {
    DRAWER: (state) => state.drawer,
    NOTIFICATION: (state) => state.notification,
  },
  actions: {},
  mutations: {
    SET_DRAWER: (state, payload) => {
      state.drawer = payload;
    },
    SET_NOTIFICATION: (state, { display, text, alertClass, timeout }) => {
      state.notification.display = display;
      state.notification.text = text;
      state.notification.alertClass = alertClass;
      state.notification.timeout = timeout;
    },
  },
};
