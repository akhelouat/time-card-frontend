<template>
    <div>
        <aside class="container">
            <!-- Students promo -->
            <div class="links-container">
                <!-- Aside title -->
                <span class="title-container">
                        <h1>{{ selectedPromo }} Students:</h1>
                    </span>
                <!-- Select promo -->
                <select class="promo-selector" name="promo" v-model="selectedPromo">
                        <option value="">Please choose a promo</option>
                        <option value="Web">Dev Web</option>
                        <option value="Ops">Dev Ops</option>
                    </select>
                <!-- Student promo container -->
                <div class="promo-container" v-for="usr in users" :key="usr.firstName">
                    <!-- Web promo links -->
                    <span class="link-container">
                            <a href="#" v-if="usr.promo && usr.promo === promos[1].name && selectedPromo === promos[1].name" @click="getSelectedStudent(usr)">{{usr.firstName + ' ' + usr.lastName }}</a>
                        </span>
                    <!-- Ops promo links -->
                    <span class="link-container">
                            <a href="#" v-if="usr.promo && usr.promo === promos[0].name && selectedPromo === promos[0].name" @click="getSelectedStudent(usr)">{{usr.firstName + ' ' + usr.lastName }}</a>
                        </span>
                </div>
            </div>
        </aside>
        <!-- Student Updater -->
        <div>
            <h1>{{ title }}</h1>
            <!-- Form update -->
            <div class="form-control" v-if="selectedStudent.student !==''">
                <!-- User names -->
                <div class="test">
                    <input type="text" name="fist-name" :value="selectedStudent.student.firstName" />
                    <input type="text" name="last-name" :value="selectedStudent.student.lastName" />
                </div>
                <!--  User address -->
                <div class="test">
                    <input type="text" name="address" :value="selectedStudent.student.address" />
                    <input type="text" name="address-cp" placeholder="CP" :value="selectedStudent.student.addressCP" />
                </div>
                <input type="text" name="mail" :value="selectedStudent.student.mail" />
                <input type="text" name="mobile-number" :value="selectedStudent.student.mobileNumber" />
                <input type="text" name="pole-emploi-number" :value="selectedStudent.student.poleEmploiNumber" />
                <button href="#">Update User</button>
            </div>
            <div v-else>
                <p>Select promo in the panel then choose a student</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                title: 'Manage User',
                users: [{
                        firstName: "Abdel",
                        lastName: "Talk",
                        mail: "example@example.com",
                        address: "115 PDO street",
                        addressCP: "75013",
                        mobileNumber: "07 08 89 10 11",
                        poleEmploiNumber: "K72AZ6",
                        promo: "Web"
                    },
                    {
                        firstName: "Felix",
                        lastName: "Cat :3",
                        mail: "example@example.com",
                        address: "213 Calendar street",
                        addressCP: "75020",
                        mobileNumber: "07 12 13 10 11",
                        poleEmploiNumber: "L97AZ6",
                        promo: "Web"
                    },
                    {
                        firstName: "Ali",
                        lastName: "Eazhy",
                        mail: "example@example.com",
                        address: "11 VISION street",
                        addressCP: "94155",
                        mobileNumber: "07 89 98 78 87",
                        poleEmploiNumber: "P182A8",
                        promo: "Web"
                    },
                    {
                        firstName: "Ghiles",
                        lastName: "Dummy",
                        mail: "example@example.com",
                        address: "115 ALGOBOX street",
                        addressCP: "75019",
                        mobileNumber: "07 12 31 41 51",
                        poleEmploiNumber: "J114B6",
                        promo: "Ops"
                    },
                    {
                        firstName: "John",
                        lastName: "Codeur",
                        mail: "example@example.com",
                        address: "115 GITLAB street",
                        addressCP: "93270",
                        mobileNumber: "07 56 65 45 54",
                        poleEmploiNumber: "J114B6",
                        promo: "Ops"
                    },
                    {
                        firstName: "Fabien",
                        lastName: "Mysql",
                        mail: "example@example.com",
                        address: "115 ALGOBOX street",
                        addressCP: "75019",
                        mobileNumber: "07 12 31 41 51",
                        poleEmploiNumber: "J114B6",
                        promo: "Ops"
                    }
                ],
                promos: [{
                        name: 'Ops'
                    },
                    {
                        name: 'Web'
                    }
                ],
                selectedPromo: "",
                selectedStudent: {
                    student: ""
                }
            };
        },
        methods: {
            getSelectedStudent(student) {
                return this.selectedStudent = {
                    student
                };
            }
        }
    }
</script>

<style scoped>
    aside {
        background-color: #313131;
        position: fixed;
        left: 0;
        height: 80%;
        width: 18%;
    }
    .links-container {
        display: flex;
        flex-direction: column;
    }
    .title-container {
        width: 100%;
        background-color: #a5223e;
        color: #fafafa;
    }
    .promo-selector {
        width: 100%;
    }
    a {
        font-size: 1.2em;
        color: #fafafa;
        text-decoration: none;
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
    .test {
        display: flex;
    }
    .test>input {
        width: 39%;
    }
</style>