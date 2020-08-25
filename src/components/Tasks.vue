<template>
  <div>
    <v-card style="height: 100%; overflow: hidden">
      <v-toolbar color="blue" dark>
        <v-toolbar-title>linh</v-toolbar-title>

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
      <notes-modal />
    </v-card>
  </div>
</template>

<script>
import Task from "@/components/Task";
import NewTask from "@/components/NewTask";
import NotesModal from "@/components/NotesModal";
export default {
  name: "tasks",
  components: {
    Task,
    NewTask,
    NotesModal,
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
          id: 1,
          title: "task 1",
          sub_title: "alo",
          isCompleted: true,
        },
        {
          id: 1,
          title: "task 1",
          sub_title: "alo",
          isCompleted: true,
        },
      ],
    };
  },
};
</script>

<style>
</style>