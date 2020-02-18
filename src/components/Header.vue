<template>
    <header class="menu">
        <nav>
            <div class="logo-container">
                <a href="/">
                    <img src="https://learn.openhackademy.com/images/lg-hd-2.png" alt="This is the OpenHackademy logo in the navigation menu">
                </a>
            </div>
            <router-link :to="{name: 'login'}">Home</router-link>
            <router-link :to="{name: 'check'}">check</router-link>
            <router-link :to="{name: 'present'}">Present</router-link>
            <router-link :to="{name: 'newpass'}">New pass</router-link>
        </nav>
    </header>
</template>

<script>
    export default {
        data: () => {
            return {};
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
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }
    
    img {
        width: 200px;
    }
    a {
        color: #fafafa;
        text-decoration: none;
    }
</style>
