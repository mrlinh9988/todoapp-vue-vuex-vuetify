<template>
  <div>
    <v-card style="height: 100%; overflow: hidden">
      <v-toolbar color="blue" dark>
        <v-toolbar-title>List id: {{ listId }}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list two-line>
        <template v-for="(task, index) in tasks">
          <Task :key="index" :task="task" :index="index" />
        </template>
      </v-list>

      <v-divider></v-divider>
      <v-card-actions>
        <v-flex>
          <New-Task />
        </v-flex>
      </v-card-actions>
    </v-card>

    <router-view name="notes" key="$route.fullPath"></router-view>
  </div>
</template>

<script>
// TODO: CHÚ Ý: Để thêm key vào router-view để update component
import Task from "@/components/Task";
import NewTask from "@/components/NewTask";
// import NotesModal from "@/components/NotesModal";
export default {
  name: "tasks",
  components: {
    Task,
    NewTask,
    // NotesModal,
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "task 1",
          sub_title: "alo",
          isCompleted: false,
        },
        {
          id: 2,
          title: "task 1",
          sub_title: "alo",
          isCompleted: true,
        },
        {
          id: 3,
          title: "task 1",
          sub_title: "alo",
          isCompleted: true,
        },
      ],
    };
  },
  computed: {
    listId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style>
</style>