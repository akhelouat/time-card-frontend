<template>
    <div class="container">
        <div class="form-control">
            <div v-show="error">{{ error }}</div>
            <input type="text" name="username" placeholder="username" v-model="user.username">
            <input type="text" name="password" placeholder="password" v-model="user.password">
            <button href="#" @click="getLoggedMember()">Log in</button>
        </div>
    </div>
</template>

<script>
    import { login } from '../services/api/member';

    export default {
        data: () => {
            return {
                user: {
                    username: "",
                    password: "",
                },
                error: ""
            }
        },
        methods: {
            isEmpty(usr) {
                if((usr.name.length && usr.password.length) === 0 || (usr.name.length || usr.password.length) === 0)
                    return this.error = "Error : empty values";
                else
                    return this.error = "Ok!";
            },
            getLoggedMember()
            {
                login(this.user.username, this.user.password)
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
