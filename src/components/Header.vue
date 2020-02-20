<template>
    <header class="menu">
        <nav>
            <div class="logo-container">
                <router-link :to="{name: 'login'}">
                    <img src="../assets/logo.png" alt="This is the OpenHackademy logo in the navigation menu">
                </router-link>
            </div>
            <div class="links" v-if="user.role === false">
                <router-link :to="{name: 'check'}">Check</router-link>
                <router-link :to="{name: 'psheet'}">Precense sheet</router-link>
                <router-link :to="{name: 'newpass'}">Change Password</router-link>
            </div>
            <div class="links" v-else>
                <router-link :to="{name: 'adminhome'}">Home</router-link>
                <router-link :to="{name: 'createpromo'}">Create Promo</router-link>
                <router-link :to="{name: 'managepromo'}">Manage Promo</router-link>
                <router-link :to="{name: 'createuser'}">Create User</router-link>
                <router-link :to="{name: 'manageuser'}">Manage User</router-link>
                <router-link :to="{name: 'newpass'}">Change Password</router-link>
                <router-link :to="{name: 'login'}">Logout</router-link>
            </div>
        </nav>
    </header>
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
    .menu {
        background-color: #313131;
        width: 100%;
        height: 60px;
        position: fixed;
        top: 0;
        left: 0;
    }
    nav {
        display: flex;
        height: 100%;
    }
    .links{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    img {
        width: 200px;
    }
    a {
        color: #fafafa;
        text-decoration: none;
    }
</style>
