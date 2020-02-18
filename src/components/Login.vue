<template>
    <div class="container">
        <div class="form-control">
            <input type="text" name="username" placeholder="username" v-model="user.name">
            <input type="text" name="password" placeholder="password" v-model="user.password">
            <button href="#" @click="isEmpty(user)">Log in</button>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                user: {
                    name: "",
                    password: ""
                }
            }
        },
        methods: {
            isEmpty(usr) {
                if ((usr.name || usr.password ) === "")
                    return "Error, empty values"
            }
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
    }
    .form-control {
        width: 20%;
        padding: 15px;
        display: flex;
        flex-direction: column;
        border: solid 1px #111;
    }
</style>
