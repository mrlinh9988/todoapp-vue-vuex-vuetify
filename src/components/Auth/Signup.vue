<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="blue">
            <v-toolbar-title>Signup form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-alert
                :value="true"
                color="error"
                icon="warning"
                dark
              >This user already exists, Please try other one</v-alert>

              <v-text-field
                name="signup"
                label="Username"
                prepend-icon="person"
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                name="email"
                label="Email"
                prepend-icon="email"
                :rules="[rules.required, rules.email]"
              ></v-text-field>

              <v-text-field
                name="password"
                label="Password"
                type="password"
                prepend-icon="lock"
                autocomplete
                v-model="password"
                :rules="[rules.required]"
              ></v-text-field>

              <v-text-field
                name="password"
                label="Confirm Password"
                type="password"
                prepend-icon="lock"
                autocomplete
                v-model="confirm_password"
                :error="valid()"
                :rules="[rules.required]"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-divider light></v-divider>
          <v-card-actions>
            <v-btn color="black" dark>Signin</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="success" dark>
              Register
              <v-icon>keyboard_arrow_up</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      confirm_password: "",
      rules: {
        required: (value) => !!value || "Required",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    valid() {
      return this.password !== this.confirm_password ? true : false;
    },
  },
};
</script>

<style>
</style>