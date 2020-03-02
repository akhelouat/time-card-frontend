<template>

      <v-app-bar
        fixed
        dark
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <div max-width="10%" max-height="100%">
            <v-img src="../assets/logo.png"></v-img>
        </div>

        <v-spacer></v-spacer>
        <div v-if="user.role">

            <v-btn link :to="{name: 'adminhome'}">
                Home
            </v-btn>

            <v-btn link :to="{name: 'manager'}">
                Manager
            </v-btn>

            <v-btn link :to="{name: 'newpass'}">
                Change password
            </v-btn>

            <v-btn link :to="{name: 'login'}">
                Logout
            </v-btn>
        </div>
        <div v-if="user.role === false">
            <v-btn link :to="{name: 'check'}">
                Check Presence
            </v-btn>

            <v-btn link :to="{name: 'psheet'}">
                Presence Sheet
            </v-btn>

            <v-btn link :to="{name: 'newpass'}">
                Change password
            </v-btn>

            <v-btn link :to="{name: 'login'}">
                Logout
            </v-btn>
        </div>
        <div else></div>
      </v-app-bar>

</template>

<script>
    export default {
        data: () => {
            return {
                user: {
                    name: 'steph',
                    password: '1234',
                    role: true
                }
            };
        }
    }
</script>

<style scoped>
</style>