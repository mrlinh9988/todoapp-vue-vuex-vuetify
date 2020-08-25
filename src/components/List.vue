<template>
  <v-navigation-drawer permanent style="width: 100%">
    <v-toolbar color="blue" dark class="pl-2">
      <v-toolbar-title>Your lists</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list class="pl-2">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Create a new list</v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar>
          <v-btn icon>
            <v-icon>add</v-icon>
          </v-btn>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list class="pl-2">
      <v-list-item v-for="list in lists" :key="list.id">
        <v-list-item-content>
          <v-list-item-title>{{ list.title }}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar>{{ list.tasks }}</v-list-item-avatar>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "lists",
  data() {
    return {
      lists: [
        {
          id: 1,
          title: "List",
          tasks: 11,
        },
        {
          id: 2,
          title: "List",
          tasks: 23,
        },
        {
          id: 3,
          title: "List",
          tasks: 41,
        },
        {
          id: 4,
          title: "List",
          tasks: 11,
        },
        {
          id: 5,
          title: "List",
          tasks: 23,
        },
      ],
    };
  },
};
</script>

<style>
</style>