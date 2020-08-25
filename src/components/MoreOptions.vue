<template>
  <v-layout>
    <v-navigation-drawer v-model="open" absolute right temporary>
      <v-list shaped>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-icon>
              <v-avatar size="36px">
                <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" />
              </v-avatar>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <strong>Username</strong>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-divider></v-divider>

      <v-form>
        <v-container fluid>
          <v-flex xs12>
            <img :src="imgUrl" alt height="150px" />

            <v-text-field
              label="Select an image"
              v-model="imgName"
              prepend-icon="attach_file"
              @click="pickFile()"
            ></v-text-field>

            <input
              type="file"
              style="display: none"
              ref="image"
              accept="image/*"
              @change="onFilePicked"
            />

            <v-btn :loading="loading" :disabled="!imgFile" @click="uploadFile()">
              Set a background
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-container>
      </v-form>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  name: "moreOptions",
  data() {
    return {
      loading: false,
      open: false,
      imgUrl: "",
      imgName: "",
      imgFile: "",
    };
  },
  methods: {
    pickFile() {
      this.$refs.image.click();
    },
    onFilePicked(e) {
      const files = e.target.files;

      if (files[0]) {
        this.imgName = files[0].name;
        if (this.imgName.lastIndexOf(".") <= 0) {
          return;
        }

        const fileReader = new FileReader();
        fileReader.readAsDataURL(files[0]);
        fileReader.addEventListener("load", () => {
          this.imgUrl = fileReader.result;
          this.imgFile = files[0];
        });
      } else {
        this.imgName = "";
        this.imgFile = "";
        this.imgUrl = "";
      }

      console.log(files);
    },
    uploadFile() {
      console.log(this.imgFile);
    },
  },
};
</script>

<style>
</style>