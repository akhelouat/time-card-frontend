<template>
    <div id="Manager">
        <AsideManager :promos="promos" :users="users" v-on:newUserCreator="getNewUserCreator" v-on:newPromoCreator="getNewPromoCreator" v-on:userSelector="getSelectedUser" />
        <UserUpdater :user="selectedUser" v-on:userCanceled="getSelectedUser" />
        <UserCreator v-if="newUser" :users="users" :promos="promos"/>
        <PromoCreator v-if="newPromo"/>
    </div>
</template>

<script>
    import AsideManager from './ManagerComponents/AsideManager';
    import UserUpdater from './ManagerComponents/UserUpdater';
    import UserCreator from './ManagerComponents/UserCreator';
    import PromoCreator from './ManagerComponents/PromoCreator';

    export default {
        components: {
            AsideManager,
            UserUpdater,
            UserCreator,
            PromoCreator
        },
        data() {
            return {
                title: 'Manage:',
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
                selectedUser: "",
                newUser: false,
                newPromo: false
            }
        },
        methods: {
            getSelectedUser(UserObject)
            {
                this.selectedUser = UserObject;
            },
            getNewUserCreator(boolean)
            {
                this.newUser = boolean;
            },
            getNewPromoCreator(boolean)
            {
                this.newPromo = boolean;
            }
        }
    }
</script>
