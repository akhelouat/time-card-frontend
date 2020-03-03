<template>
    <div>
        <v-simple-table class="tableEditor">
            <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">informations</th>
              <th class="text-left">Values</th>
              <th class="text-left">Editor</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-left">
                <td>First Name</td>
                <td> {{user.firstName }}</td>
                <td>
                    <button v-if="penToHidden !== 'firstName'" @click="editDisplay('firstName')"><v-icon>mdi-account-edit</v-icon></button>
                <div v-if="edit === 'firstName'" class="updateValue">
                    <v-text-field :rules="nameRules"
                        v-model="valueToUpdate"
                        label="First Name"
                        shaped
                    />
                    <button class="cancelButton" @click="editDisplay()"><v-icon>mdi-cancel</v-icon></button>
                    <button class="editButton" @click="updateUser()"><v-icon>mdi-shaker</v-icon></button>
                    <p class="updateResponse"> {{ updateResponse}} </p>
                    </div>
                </td>
            </tr>
            <tr class="text-left">
                <td>Last Name</td>
                <td> {{user.lastName }}</td>
                <td>
                    <button v-if="penToHidden !== 'lastName'" @click="editDisplay('lastName')"><v-icon>mdi-account-edit</v-icon></button>
                    <div v-if="edit === 'lastName'" class="updateValue">
                        <v-text-field :rules="nameRules"
                            v-model="valueToUpdate"
                            label="First Name"
                            shaped
                        />
                        <button class="cancelButton" @click="editDisplay()"><v-icon>mdi-cancel</v-icon></button>
                        <button class="editButton" @click="updateUser()"><v-icon>mdi-shaker</v-icon></button>
                        <p class="updateResponse"> {{ updateResponse}} </p>
                        </div>
                    </td>
                </tr>
                <tr class="text-left">
                    <td>Mail</td>
                    <td> {{ user.mail }}</td>
                    <td>
                        <button v-if="penToHidden !== 'mail'" @click="editDisplay('mail')"><v-icon>mdi-account-edit</v-icon></button>
                        <div v-if="edit === 'mail'" class="updateValue">
                            <v-text-field  :rules="emailRules"
                                v-model="valueToUpdate"
                                label="Mail"
                                shaped
                            />
                            <button class="cancelButton" @click="editDisplay()"><v-icon>mdi-cancel</v-icon></button>
                            <button class="editButton" @click="updateUser()"><v-icon>mdi-shaker</v-icon></button>
                            <p class="updateResponse"> {{ updateResponse}} </p>
                        </div>
                    </td>
                </tr>
                <tr class="text-left">
                    <td>Address</td>
                    <td> {{ user.address }}</td>
                    <td>
                        <button v-if="penToHidden !== 'address'" @click="editDisplay('address')"><v-icon>mdi-account-edit</v-icon></button>
                        <div v-if="edit === 'address'" class="updateValue">
                            <v-text-field
                                v-model="valueToUpdate"
                                label="Address"
                                shaped
                            />
                            <button class="cancelButton" @click="editDisplay()"><v-icon>mdi-cancel</v-icon></button>
                            <button class="editButton" @click="updateUser()"><v-icon>mdi-shaker</v-icon></button>
                            <p class="updateResponse"> {{ updateResponse}} </p>
                        </div>
                    </td>
                </tr>
                <tr class="text-left">
                    <td>Postal code</td>
                    <td> {{ user.addressCP }}</td>
                    <td>
                        <button v-if="penToHidden !== 'addressCP'" @click="editDisplay('addressCP')"><v-icon>mdi-account-edit</v-icon></button>
                        <div v-if="edit === 'addressCP'" class="updateValue">
                            <v-text-field
                                v-model="valueToUpdate"
                                label="Postal Code"
                                shaped
                            />
                            <button class="cancelButton" @click="editDisplay()"><v-icon>mdi-cancel</v-icon></button>
                            <button class="editButton" @click="updateUser()"><v-icon>mdi-shaker</v-icon></button>
                            <p class="updateResponse"> {{ updateResponse}} </p>
                        </div>
                    </td>
                </tr>
                <tr class="text-left">
                    <td>Pole emploi</td>
                    <td> {{ user.poleEmploiNumber }}</td>
                    <td>
                        <button v-if="penToHidden !== 'poleEmploiNumber'" @click="editDisplay('poleEmploiNumber')"><v-icon>mdi-account-edit</v-icon></button>
                        <div v-if="edit === 'poleEmploiNumber'" class="updateValue">
                            <v-text-field
                                v-model="valueToUpdate"
                                label="Pole Emploi Number"
                                shaped
                            />
                            <button class="cancelButton" @click="editDisplay()"><v-icon>mdi-cancel</v-icon></button>
                            <button class="editButton" @click="updateUser()"><v-icon>mdi-shaker</v-icon></button>
                            <p class="updateResponse"> {{ updateResponse}} </p>
                        </div>
                    </td>
                </tr>
                <tr class="text-left">
                    <td>Mobile Number</td>
                    <td>{{ user.mobileNumber }}</td>
                    <td>
                        <button v-if="penToHidden !== 'mobileNumber'" @click="editDisplay('mobileNumber')"><v-icon>mdi-account-edit</v-icon></button>
                        <div v-if="edit ==='mobileNumber'" class="updateValue">
                            <v-text-field
                                v-model="valueToUpdate"
                                label="Mobile Number"
                                shaped
                            />
                            <button class="cancelButton" @click="editDisplay()"><v-icon>mdi-cancel</v-icon></button>
                            <button class="editButton" @click="updateUser()"><v-icon>mdi-shaker</v-icon></button>
                            <p class="updateResponse"> {{ updateResponse}} </p>
                        </div>
                    </td>
                </tr>
                <tr class="text-left">
                    <td>Promotion</td>
                    <td>{{ user.namePromo }}</td>
                    <td>
                        <button v-if="penToHidden !== 'namePromo'" @click="editDisplay('namePromo')"><v-icon>mdi-account-edit</v-icon></button>
                        <div v-if="edit === 'namePromo'" class="updateValue">
                            <!-- Promos -->
                            <v-select
                                v-model="valueToUpdate"
                                :rules="getPromotionsNames(promos)"
                                :items="promotions"
                                label="Promotion"
                            />
                            <button class="cancelButton" @click="editDisplay()"><v-icon>mdi-cancel</v-icon></button>
                            <button class="editButton" @click="updateUser()"><v-icon>mdi-shaker</v-icon></button>
                            <p class="updateResponse"> {{ updateResponse}} </p>
                        </div>
                    </td>
                </tr>
              </tbody>
</template>
  </v-simple-table>
  <v-btn color="#c61e42" class="white--text" @click="deleteSelectedUser"><v-icon>mdi-cancel</v-icon> Cancel edition</v-btn>
</div>
</template>

<script>
    import {
        updateMember
    } from "../../services/api/member";
    export default {
        props: ["user", "promos"],
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
                promotions: []
            }
        },
        computed: {
            nameRules() {
                return this.$store.state.nameRules
            },
            emailRules() {
                return this.$store.state.emailRules
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
            },
            getPromotionsNames(promos) {
                for (const promo of promos) {
                    if (this.promotions.includes(promo.name))
                        break;
                    else
                        this.promotions.push(promo.name);
                }
            }
        }
    }
</script>

<style scoped>
    .tableEditor {
        width: 80%;
        margin-left: 10%;
    }
</style>