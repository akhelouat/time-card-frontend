<template>
    <div>
        <aside class="container">
            <!-- Select promo -->
            <div class="selector-container">
                <select class="promo-selector" name="promo" v-model="selectedPromo">
                    <option value="default">Please choose a promo</option>
                    <option value="web">Dev Web</option>
                    <option value="ops">Dev Ops</option>
                </select>
            </div>

            <!-- Students promo -->
            <div class="links-container">
                <h1>Students:</h1>

                <!-- Web promo links -->
                <ol v-if="selectedPromo === 'web'" class="links-list">
                    <li v-for="user in users" :key="user">
                        <a v-if="user.promo === 'web'" href="#">{{user.firstName + ' ' + user.lastName }}</a>
                    </li>
                </ol>

                <!-- Ops promo links -->
                <ol v-if="selectedPromo === 'ops'" class="links-list">
                    <li v-for="user in users" :key="user">
                        <a v-if="user.promo === 'ops'" href="#">{{user.firstName + ' ' + user.lastName }}</a>
                    </li>
                </ol>

                <div v-else></div>
            </div>
        </aside>

        <!-- Student -->
        <div>
            <h1>{{ title }}</h1>
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
                        promo: "web"
                    },
                    {
                        firstName: "Felix",
                        lastName: "Cat :3",
                        mail: "example@example.com",
                        address: "213 Calendar street",
                        addressCP: "75020",
                        mobileNumber: "07 12 13 10 11",
                        poleEmploiNumber: "L97AZ6",
                        promo: "web"
                    },
                    {
                        firstName: "Ali",
                        lastName: "Eazhy",
                        mail: "example@example.com",
                        address: "11 VISION street",
                        addressCP: "94155",
                        mobileNumber: "07 89 98 78 87",
                        poleEmploiNumber: "P182A8",
                        promo: "web"
                    },
                    {
                        firstName: "Ghiles",
                        lastName: "Dummy",
                        mail: "example@example.com",
                        address: "115 ALGOBOX street",
                        addressCP: "75019",
                        mobileNumber: "07 12 31 41 51",
                        poleEmploiNumber: "J114B6",
                        promo: "ops"
                    },
                    {
                        firstName: "John",
                        lastName: "Codeur",
                        mail: "example@example.com",
                        address: "115 GITLAB street",
                        addressCP: "93270",
                        mobileNumber: "07 56 65 45 54",
                        poleEmploiNumber: "J114B6",
                        promo: "ops"
                    },
                    {
                        firstName: "Fabien",
                        lastName: "Mysql",
                        mail: "example@example.com",
                        address: "115 ALGOBOX street",
                        addressCP: "75019",
                        mobileNumber: "07 12 31 41 51",
                        poleEmploiNumber: "J114B6",
                        promo: "ops"
                    }
                ],
                selectedPromo: "default"
            };
        }
    }
</script>

<style scoped>
    aside {
        background-color: #121212;
        position: fixed;
        left: 0;
        height: 100%;
        width: 15%;
    }
    .links-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .links-list {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .promo-selector{
        width: 100%;
    }

    a {
        font-size: 1.5em;
        color: #fafafa;
        text-decoration: none;
    }
</style>