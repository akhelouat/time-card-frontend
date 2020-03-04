<template>
  <div id="app">
    <v-content v-if="isLogged === false">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="#c61e42" flat>
                <v-toolbar-title class="white--text">Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Username" name="login" type="text" v-model="user.username" />
                  <v-text-field id="password" label="Password" name="password" type="password" v-model="user.password" />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="white--text" color="#c61e42" @click=" logMember()">login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-container class="success" v-else>
      <h1 class="white--text">Success</h1>
      <p class="white--text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit vitae beatae, quod reprehenderit voluptate veritatis aliquid quisquam cum repudiandae asperiores exercitationem fugiat qui nemo quidem laborum quasi. Sunt, temporibus cum!</p>
    </v-container>
  </div>
</template>

<script>
  import {
    login
  } from '../services/api/member';
  export default {
    data: () => {
      return {
        user: {
          username: "",
          password: ""
        },
        isLogged:false,
        error: ""
      }
    },
    methods: {
      logMember() {
        login(this.user.username, this.user.password)
          .then(member => {
            this.$store.commit('logUser', member);
            this.isLogged = true;
          })
      },
    }
  }
</script>

