<template>
  <v-app>
    <!-- <login /> -->
    <!-- <signup /> -->
    <todo />
  </v-app>
</template>

<script>
// import Login from "@/components/Auth/Login";
// import Signup from "@/components/Auth/Signup";
import Todo from "@/components/Todo";
export default {
  name: "Home",
  components: {
    // Login,
    // Signup,
    Todo,
  },
};
</script>
