<template>
  <v-snackbar
    v-model="snackbar"
    :color="NOTIFICATION.alertClass"
    bottom
    right
    :timeout="NOTIFICATION.timout"
  >
    <v-icon>notification_important</v-icon>
    {{ NOTIFICATION.text }}
    <template v-slot:action="{ attrs }">
      <v-btn color="white" text v-bind="attrs" @click="snackbar = false">X</v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "notification",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["NOTIFICATION"]),
    snackbar: {
      get() {
        return this.NOTIFICATION.display;
      },
      set() {
        this.$store.commit("SET_NOTIFICATION", {
          display: false,
        });
      },
    },
  },
};
</script>

<style>
</style>