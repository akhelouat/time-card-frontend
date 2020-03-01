<template>
    <div id="Manager">
        <AsideManager :promos="promos" :users="users" v-on:newUserCreator="getNewUserCreator" v-on:newPromoCreator="getNewPromoCreator" v-on:userSelector="getSelectedUser" />    
        <transition v-if="selectedUser" name="slide-fade">
            <UserUpdater :user="selectedUser" v-on:userCanceled="getSelectedUser" />
        </transition>
        <transition name="slide-fade">
            <UserCreator v-if="newUser" :users="users" :promos="promos" />
        </transition>

        <transition name="slide-fade">
            <PromoCreator v-if="newPromo"/>
        </transition>
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
    import UserCreator from './ManagerComponents/Test';
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

<style>
.slide-fade-enter-active{
    transition: all .3s ease;
}
.slide-fade-leave-active{
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter{
    transform: translateY(-25px);
}
.slide-fade-leave-to{
    transform: translateX(-5%);
    opacity: 0;
}
</style>