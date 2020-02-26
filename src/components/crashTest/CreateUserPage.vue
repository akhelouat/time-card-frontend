<template>
    <section>
        <h1>{{ title }}</h1>
        <div class="form-control">
            <div class="error-message" v-show="error">{{ error }}</div>
            <!-- User names -->
            <div class="test">
                <input type="text" name="fist-name" placeholder="First Name" v-model="user.firstname" />
                <input type="text" name="last-name" placeholder="Last Name" v-model="user.lastname" />
            </div>
            <!--  User address -->
            <div class="test">
                <input type="text" name="address" placeholder="Address " v-model="user.address" />
                <input type="text" name="address-cp" placeholder="CP" v-model="user.addressCP" />
            </div>
            <input type="text" name="mail" placeholder="Mail" v-model="user.email" />
            <input type="text" name="mobile-number" placeholder="Mobile/Phone" v-model="user.mobileNumber" />
            <input type="text" name="pole-emploi-number" placeholder="Pole Emploi ID" v-model="user.poleEmploiNumber" />
            <input type="text" name="password" placeholder="Password" v-model="user.password" />
            <input type="text" name="password-confirm" placeholder="Confirm Password" v-model="user.passwordConfirm" />
            <button href="#" @click=" createMember()">Create User</button>
        </div>
    </section>
</template>

<script>
import { addMember } from '../services/api/data'
    export default {
        data: () => {
            return {
                title: "Create User",
                user: {
                    firstname: "",
                    lastname: "",
                    email: "",
                    address: "",
                    addressCP: "",
                    mobileNumber: "",
                    poleEmploiNumber: "",
                    password: "",
                    passwordConfirm: ""
                },
                error: ""
            };
        },
        methods: {
            isEmpty(usr) {
                let vals = Object.values(usr);
                for (const val in vals) {
                    if (vals[val].length === 0) {
                        console.log(val + ": emtpy");
                        this.error = "Empty";
                    } else if (vals[val].length > 0 && vals[val].length <= 4) {
                        console.log(val + ": min char 5");
                        this.error = "Error: Min char 5";
                    } else if (vals[val].length >= 5) {
                        console.log({
                            value: vals[val]
                        });
                        this.error = "Success !"
                    }
                    

                }
            },
            createMember () {
                addMember(this.user.firstname, this.user.lastname, this.user.email, this.user.adress, this.user.adressCP, this.user.mobileNumber, this.user.poleEmploiNumber)
                    .then(() => {
                    this.user.firstname = '';
                    this.user.lastname = '';
                    this.user.email = '';
                    this.user.adress = '';
                    this.user.adressCP = '';
                    this.user.mobileNumber = '';
                    this.user.poleEmploiNumber = ''
     
                    })
                    .catch((error) => {
                    this.error = error;
                     });
            }
      

        
        }
    };
</script>

<style scoped>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .form-control {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-left: 30%;
    }
    input,
    button {
        width: 80%;
        margin: 15px 0 0 0;
    }
    .test{
        display: flex;
    }

    .test>input{
        width: 39%;
    }

    .error-message{
        width: 80%;
        background-color: tomato;
    }
</style>