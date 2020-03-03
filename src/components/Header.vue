<template>

      <v-app-bar
        fixed
        dark
        color="#2f2f2f"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <div max-width="10%" max-height="100%">
            <v-img src="../assets/logo.png"></v-img>
        </div>

        <v-spacer></v-spacer>
        <!-- Admin menu -->
        <div v-if="user.role">
            <v-btn link color="#c61e42" class="white--text" :to="{name: 'adminhome'}">Home</v-btn>

            <v-btn link color="#c61e42" class="white--text" :to="{name: 'manager'}">Manager</v-btn>

            <v-btn link color="#c61e42" class="white--text" :to="{name: 'newpass'}">Change password</v-btn>

            <v-btn link color="#c61e42" class="white--text" :to="{name: 'login'}">Logout</v-btn>
        </div>
        <!-- Student menu -->
        <div v-if="user.role === false">
            <v-btn  color="#c61e42" class="white--text" link :to="{name: 'check'}">Check Presence</v-btn>

            <v-btn link  color="#c61e42" class="white--text" :to="{name: 'psheet'}">Presence Sheet</v-btn>

            <v-btn link  color="#c61e42" class="white--text" :to="{name: 'newpass'}">Change password</v-btn>

            <v-btn link  color="#c61e42" class="white--text" :to="{name: 'login'}">Logout</v-btn>
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
aside{
    position: fixed;
}
</style>