<template>
    <div>
        <div v-if="user != reset" class="form-control">
            <h1>{{ title }}:</h1>
            <!-- User names -->
            <div class="control-container">
                <input type="text" name="fist-name" :value="user.firstName" />
                <input type="text" name="last-name" :value="user.lastName" />
            </div>
            <!--  User address -->
            <div class="control-container">
                <input type="text" name="address" :value="user.address" />
                <input type="text" name="address-cp" :value="user.addressCP" />
            </div>
            <input type="text" name="mail" :value="user.mail" />
            <input type="text" name="mobile-number" :value="user.mobileNumber" />
            <input type="text" name="pole-emploi-number" :value="user.poleEmploiNumber" />
            <div class="control-container">
                <button href="#">Update User</button>
                <button @click="deleteSelectedUser()">Cancel</button>
            </div>
        </div>
        <div v-else></div>
    </div>
</template>

<script>
    export default {
        props: ["user"],
        data() {
            return {
                title: 'Update User',
                reset: ""
            }
        },
        methods: {
            deleteSelectedUser() {
                this.$emit('userCanceled', this.reset);
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