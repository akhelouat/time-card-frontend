<template>
    <div class="form-control">
        <h1>{{ title }}:</h1>
        <!-- User names -->
        <div class="control-container">
            <input type="text" name="fist-name" placeholder="First Name" v-model="user.firstName" />
            <input type="text" name="last-name" placeholder="Last name" v-model="user.lastName" />
        </div>
        <!--  User address -->
        <div class="control-container">
            <input type="text" name="address" placeholder="Address" v-model="user.address" />
            <input type="text" name="address-cp" placeholder="CP address" v-model="user.addressCP" />
        </div>
        <input type="text" name="mail" placeholder="mail" v-model="user.mail" />
        <input type="text" name="mobile-number" placeholder="mobile" v-model="user.mobileNumber" />
        <input type="text" name="pole-emploi-number" placeholder="pole emploi Id" v-model="user.poleEmploiNumber" />
        <select class="promo-selector" name="promo" v-model="user.namePromo">
                <option value="">Please choose a promo</option>
                <option v-for="promo in promos" :key="promo.name" :value="promo.name" >{{ promo.name }}</option>
            </select>
        <div class="control-container">
            <button href="#" @click=" createMember()">Create User</button>
        </div>
    </div>
</template>

<script>
    import {
        addMember
    } from "../../services/api/member";
    export default {
        props: ["users", "promos"],
        data() {
            return {
                title: 'New User',
                user: {
                    firstName: "",
                    lastName: "",
                    address: "",
                    addressCP: "",
                    mail: "",
                    mobileNumber: "",
                    poleEmploiNumber: "",
                    namePromo: ""
                }
            }
        },
        methods: {
            createMember() {
                addMember(this.user.firstName, this.user.lastName, this.user.mail, this.user.address, this.user.addressCP, this.user.mobileNumber, this.user.poleEmploiNumber, this.user.namePromo)
                    .then(() => {
                        this.user.firstName = '';
                        this.user.lastName = '';
                        this.user.mail = '';
                        this.user.address = '';
                        this.user.addressCP = '';
                        this.user.mobileNumber = '';
                        this.user.poleEmploiNumber = '';
                        this.user.namePromo = ''
                    })
                    .catch((error) => {
                        this.error = error;
                    });
            }
        }
    }
</script>

<style scoped>
    h1 {
        background-color: #121212;
        color: #fafafa;
        width: 81%;
    }
    .form-control {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin-left: 20%;
    }
    .control-container {
        width: 100%;
        display: flex;
    }
    .control-container>input {
        width: 39.5%;
    }
    input {
        width: 80%;
        margin-bottom: 20px;
    }
</style>