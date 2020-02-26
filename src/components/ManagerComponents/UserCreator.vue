<template>
    <div class="form-control">
        <h1>{{ title }}:</h1>
        <!-- User names -->
        <div class="control-container">
            <input type="text" name="fist-name" placeholder="First Name" v-model="user.firstName"/>
            <input type="text" name="last-name" placeholder="Last name" v-model="user.lastName"/>
        </div>
        <!--  User address -->
        <div class="control-container">
            <input type="text" name="address" placeholder="Address" v-model="user.address"/>
            <input type="text" name="address-cp" placeholder="CP address" v-model="user.addressCp"/>
        </div>
        <input type="text" name="mail" placeholder="mail" v-model="user.mail"/>
        <input type="text" name="mobile-number" placeholder="mobile" v-model="user.mobile"/>
        <input type="text" name="pole-emploi-number" placeholder="pole emploi Id" v-model="user.poleEmploiId"/>
        
        <select class="promo-selector" name="promo" v-model="selectedPromo">
            <option value="">Please choose a promo</option>
            <option v-for="promo in promos" :key="promo.name" :value="promo.name">{{ promo.name }}</option>
        </select>

        <div class="control-container">
            <button href="#">Create User</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["users", "promos"],
        data() {
            return {
                title: 'New User',
                user: {
                    firstName: "",
                    lastName: "",
                    address: "",
                    addressCp: "",
                    mail: "",
                    mobile: "",
                    poleEmploiId: "",
                    promo: ""
                }
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