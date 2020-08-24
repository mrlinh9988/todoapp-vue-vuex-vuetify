<template>
  <v-app>
    <!-- <login /> -->
    <signup />
  </v-app>
</template>

<script>
// import Login from "@/components/Auth/Login";
import Signup from "@/components/Auth/Signup";
export default {
  name: "Home",
  components: {
    // Login,
    Signup,
  },
};
</script>
