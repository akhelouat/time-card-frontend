<template>
    <div id="Manager">
        <AsideManager :promos="promos" :users="users" v-on:newUserCreator="getNewUserCreator" v-on:newPromoCreator="getNewPromoCreator" v-on:userSelector="getSelectedUser" />
        <UserUpdater :user="selectedUser" v-on:userCanceled="getSelectedUser" />
        <UserCreator v-if="newUser" :users="users" :promos="promos" />
        <PromoCreator v-if="newPromo" />
    </div>
</template>

<script>
    import {
        getPromo
    } from '../services/api/promo';
    import {
        getMember
    } from '../services/api/member';
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
                users: [],
                promos: [],
                selectedUser: "",
                newUser: false,
                newPromo: false
            }
        },
        methods: {
            loadPromo() {
                getPromo()
                    .then(promo => {
                        this.loading = false;
                        this.promos = promo;
                    })
                    .catch(error => {
                        this.loading = false;
                        this.error = error;
                    });
            },
            loadMember() {
                getMember()
                    .then(member => {
                        this.loading = false;
                        this.users = member;
                    })
                    .catch(error => {
                        this.loading = false;
                        this.error = error;
                    });
            },
            getSelectedUser(UserObject) {
                this.selectedUser = UserObject;
            },
            getNewUserCreator(boolean) {
                this.newUser = boolean;
            },
            getNewPromoCreator(boolean) {
                this.newPromo = boolean;
            }
        },
        created() {
            this.loadPromo();
            this.loadMember();
        },
    }
</script>
