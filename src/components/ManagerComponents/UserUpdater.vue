<template>
    <div id="updateUser">
        <div class="information">
            <p>First Name</p>
            <h2>{{ user.firstName }}</h2><button v-if="penToHidden !== 'firstName'" @click="editDisplay('firstName')">Edit</button>
            <div v-if="edit === 'firstName'" class="updateValue">
                <input type="text" v-model="valueToUpdate" />
                <button class="cancelButton" @click="editDisplay()">Cancel</button>
                <button class="editButton" @click="updateUser()">Edit</button>
                <p class="updateResponse"> {{ updateResponse}} </p>
            </div>
        </div>
        <div class="information">
            <p>Last Name</p>
            <h2>{{ user.lastName }}</h2><button v-if="penToHidden !== 'lastName'" @click="editDisplay('lastName')">Edit</button>
            <div v-if="edit === 'lastName'" class="updateValue">
                <input type="text" v-model="valueToUpdate" />
                <button class="cancelButton" @click="editDisplay()">Cancel</button>
                <button class="editButton" @click="updateUser()">Edit</button>
                <p class="updateResponse"> {{ updateResponse}} </p>
            </div>
        </div>
        <div class="information">
            <p>Email</p>
            <h2>{{ user.mail }}</h2><button v-if="penToHidden !== 'mail'" @click="editDisplay('mail')">Edit</button>
            <div v-if="edit === 'mail'" class="updateValue">
                <input type="text" v-model="valueToUpdate" />
                <button class="cancelButton" @click="editDisplay()">Cancel</button>
                <button class="editButton" @click="updateUser()">Edit</button>
                <p class="updateResponse"> {{ updateResponse}} </p>
            </div>
        </div>
        <div class="information">
            <p>Address</p>
            <h2>{{ user.address }}</h2><button v-if="penToHidden !== 'address'" @click="editDisplay('address')">Edit</button>
            <div v-if="edit === 'address'" class="updateValue">
                <input type="text" v-model="valueToUpdate" />
                <button class="cancelButton" @click="editDisplay()">Cancel</button>
                <button class="editButton" @click="updateUser()">Edit</button>
                <p class="updateResponse"> {{ updateResponse}} </p>
            </div>
        </div>
        <div class="information">
            <p>Postal Code</p>
            <h2>{{ user.addressCP }}</h2><button v-if="penToHidden !== 'addressCP'" @click="editDisplay('addressCP')">Edit</button>
            <div v-if="edit === 'addressCP'" class="updateValue">
                <input type="text" v-model="valueToUpdate" />
                <button class="cancelButton" @click="editDisplay()">Cancel</button>
                <button class="editButton" @click="updateUser()">Edit</button>
                <p class="updateResponse"> {{ updateResponse}} </p>
            </div>
        </div>
        <div class="information">
            <p>Pole Emploi Number</p>
            <h2>{{ user.poleEmploiNumber }}</h2><button v-if="penToHidden !== 'poleEmploiNumber'" @click="editDisplay('poleEmploiNumber')">Edit</button>
            <div v-if="edit === 'poleEmploiNumber'" class="updateValue">
                <input type="text" v-model="valueToUpdate" />
                <button class="cancelButton" @click="editDisplay()">Cancel</button>
                <button class="editButton" @click="updateUser()">Edit</button>
                <p class="updateResponse"> {{ updateResponse}} </p>
            </div>
        </div>
        <div class="information">
            <p>Mobile Number</p>
            <h2>{{ user.mobileNumber }}</h2><button v-if="penToHidden !== 'mobileNumber'" @click="editDisplay('mobileNumber')">Edit</button>
            <div v-if="edit ==='mobileNumber'" class="updateValue">
                <input type="text" v-model="valueToUpdate" />
                <button class="cancelButton" @click="editDisplay()">Cancel</button>
                <button class="editButton" @click="updateUser()">Edit</button>
                <p class="updateResponse"> {{ updateResponse}} </p>
            </div>
        </div>
        <div class="information">
            <p>Promo</p>
            <h2>{{ user.namePromo }}</h2><button v-if="penToHidden !== 'namePromo'" @click="editDisplay('namePromo')">Edit</button>
            <div v-if="edit === 'namePromo'" class="updateValue">
                <input type="text" v-model="valueToUpdate" />
                <button class="cancelButton" @click="editDisplay()">Cancel</button>
                <button class="editButton" @click="updateUser()">Edit</button>
                <p class="updateResponse"> {{ updateResponse}} </p>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        updateMember
    } from "../../services/api/member";
    export default {
        props: ["user"],
        data() {
            return {
                title: 'Update User',
                reset: "",
                test: false,
                penToHidden: null,
                edit: null,
                valueToUpdate: null,
                paramsToUpdate: "",
                updateResponse: null,
                users: {
                    firstName: "",
                    lastName: "",
                },
            }
        },
        methods: {
            updateUser() {
                updateMember(this.user._id, this.paramsToUpdate, this.valueToUpdate)
                    .then((response) => {
                        this.updateResponse = response
                    })
                    .catch((error) => {
                        this.error = error;
                    });
            },
            deleteSelectedUser() {
                this.$emit('userCanceled', this.reset);
            },
            editDisplay(object) {
                this.paramsToUpdate = object;
                this.edit = object;
                this.penToHidden = object
            }
        }
    }
</script>

<style scoped>
    #updateUser {
        max-height: 880px;
        overflow: scroll;
        text-align: start;
        margin: 5% 0 0 17%;
    }
    .information {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-bottom: 1px grey solid;
        width: 30%;
    }
    .information>button {
        align-self: end;
        margin-right: 5%;
        font-size: 1.2em;
        color: green;
    }
    .cancelButton {
        color: red
    }
    .editButton {
        color: green;
    }
    input {
        width: 60%;
        margin-bottom: 20px;
    }
    h2,
    p {
        margin: 1% 0 1% 5%;
    }
    .updateResponse {
        background-color: #56bd56;
        color: #003800;
        padding: 1.5%;
        display: inline-block;
        border-radius: 10px;
    }
</style>