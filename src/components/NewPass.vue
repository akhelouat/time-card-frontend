<!--
 * @ Author: Rahil Felix
 * @ Create Time: 2020-02-18 14:28:06
 * @ Modified by: Rahil Felix
 * @ Modified time: 2020-02-20 16:09:14
 * @ Description:
 -->

<template>
    <div>
        <p v-if="errors.length>0">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </p>
        <form action="/newpass" @submit="checkForm">
            <label for="old">old password:</label>
            <input type="password" name="old" id="old" v-model="old">
            <label for="new1">new password:</label>
            <input type="password" name="new1" id="new1" v-model="new1">
            <label for="new2">again new password:</label>
            <input type="password" name="new2" id="new2" v-model="new2">
            <button @click="createPromo()" type="submit">send</button>
        </form>
    </div>
</template>

<script>
  import {
        changePassword
    } from "../../services/api/promo";
    export default {
        data: () => {
            return {
                errors: [],
                old: null,
                new1: null,
                new2: null,
                user: {
                    name: "",
                    password: "pomme"
                }
            };
        },
        methods: {
            checkForm: function(e) {
                if ((this.old && this.new1 && this.new2) && (this.new1 === this.new2)) {
                    return true;
                }
                this.errors = [];
                if ((this.new1 != this.new2) && (this.new1 && this.new2)) {
                    this.errors.push('new passwd must match.');
                }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
            /*    if ((this.old != this.user.password) && (this.old)) {
                    this.errors.push('old pwd must match.');
                }*/
                if (!this.old) {
                    this.errors.push('old pwd required.');
                }
                if (!this.new1) {
                    this.errors.push('new pwd required.');
                }
                if (!this.new2) {
                    this.errors.push('new pwd required.');
                }
                e.preventDefault();
            },
               newPassword() {
                changePassword(this.old, this.new1, this.new2)
                    .then(() => {
                        this.old = ''
                        this.new1 = ''
                        this.new2 = ''
                    })
                    .catch((error) => {
                        this.error = error;
                    });
            },
        }
    }
</script>

<style scoped>
    input {
        display: flex;
        flex-direction: column;
        margin-left: 37%;
    }
</style>