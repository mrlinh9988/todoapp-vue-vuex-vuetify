<template>
  <v-layout row justify-center>
    <v-dialog v-model="open" persistent max-width="60%" scrollable>
      <v-card>
        <v-card-title>
          <span class="headline">Task title</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-form>
              <v-textarea
                outlined
                v-model="note"
                label="Note"
                placeholder="Start writing your note here"
              ></v-textarea>

              <v-btn color="success">Save</v-btn>
            </v-form>
          </v-container>

          <v-list three-line subheader>
            <v-subheader>Notes</v-subheader>

            <v-list-item v-for="(note, index) in notes" :key="index">
              {{ note.note }}
              <v-list-item-content>
                <v-list-item-title>{{ note.note }}</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="red">delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-list-item-action>
          <v-row align="center" justify="center" width="100%">
            <v-btn color="primary" @click="close">Close</v-btn>
            <v-btn color="red" dark>Remove Task</v-btn>
          </v-row>
        </v-list-item-action>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: "notesModal",
  data() {
    return {
      open: true,
      note: "",
      notes: [
        {
          id: 1,
          note: "Random note",
        },
        {
          id: 1,
          note: "Random note",
        },
        {
          id: 1,
          note: "Random note",
        },
        {
          id: 1,
          note: "Random note",
        },
      ],
    };
  },
  methods: {
    close() {
      this.open = false;
    },
  },
};
</script>

<style>
</style>