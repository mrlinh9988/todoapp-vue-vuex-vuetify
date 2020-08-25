<template>
  <div>
    <v-card height="100%">
      <v-toolbar color="pink" dark>
        <v-toolbar-title>Options</v-toolbar-title>
      </v-toolbar>

      <v-list>
        <v-list-group
          v-for="(item, index) in items"
          :key="index"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="(subItem, subIndex) in item.items"
            v-on="item.action === 'sort' ? { click: () => sort(subItem.by) } : { click: () => filter(subItem.by) }"
            :key="subIndex"
          >
            <v-list-item-content>
              <v-list-item-title>{{subItem.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
        </v-list-group>

        <v-list-group prepend-icon="filter" no-action>
          <template v-slot:activator>
            <v-list-item-title>List options</v-list-item-title>
          </template>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title color="danger">Remove list</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title color="danger">Change background</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </v-list-group>
      </v-list>
    </v-card>
    <!-- <MoreOptions /> -->
  </div>
</template>

<script>
// import MoreOptions from "@/components/MoreOptions";
export default {
  name: "optionBar",
  data() {
    return {
      items: [
        {
          action: "sort",
          title: "Sort by",
          active: true,
          items: [
            {
              title: "Date",
              by: "date",
            },
            {
              title: "Name",
              by: "name",
            },
          ],
        },
        {
          action: "filter_list",
          title: "Filter by",
          active: true,
          items: [
            {
              title: "Remaining",
              by: "remaining",
            },
            {
              title: "Completed",
              by: "completed",
            },
            {
              title: "All",
              by: "all",
            },
          ],
        },
      ],
    };
  },
  methods: {
    sort(value) {
      console.log("Sort by " + value);
    },
    filter(value) {
      console.log("Filter by " + value);
    },
  },
  components: {
    // MoreOptions,
  },
};
</script>

<style>
</style>