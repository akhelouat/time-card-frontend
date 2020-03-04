<!--
 * @ Author: Rahil Felix
 * @ Create Time: 2020-02-18 12:02:04
 * @ Modified by: Rahil Felix
 * @ Modified time: 2020-03-04 13:41:51
 * @ Description:
 -->
 

<template>
    <div>
        <h3>We are : <span> {{ createdAtDisplay }}</span></h3>
        <button @click="checkForm">benjam?</button>
        <p v-if="send"> {{send}}</p>
    </div>
</template>

<script>
    import {
        mapState
    } from "vuex";
    import {
        updateMember,
        getOneMember
    } from "../services/api/member"
    const moment = require('moment')
    export default {
        data: () => {
            return {
                send: null,
                member: [],
                error: '',
                user: []
            };
        },
        computed: {
            ...mapState({
                loggedUserInfo: "user"
            }),
            createdAtDisplay() {
                return moment().format('YYYY-MM-DD HH:mm');
            },
        },
        methods: {
            checkForm: function(e) {
                var format = 'HH:mm:ss'
                var time = moment(),
                    tooEarlyTime = moment('08:00:00', format),
                    tooLateTime = moment('09:30:00', format),
                    afterTime = moment('17:00:00', format);
                if (time.isBetween(tooEarlyTime, tooLateTime)) {
                    console.log('You are at time')
                    this.send = 'You are at time';
                    this.checkSign()
                } else if (time.isBefore(tooEarlyTime)) {
                    this.send = 'You cannot sign now, its too early';
                } else if (time.isBetween(tooLateTime, afterTime)) {
                    console.log('You are late')
                    this.send = 'You are late';
                    this.checkSign()
                }
                e.preventDefault();
            },
            checkSign: function() {
                if (this.loggedUserInfo.isSigned === false) {
                    updateMember(this.member._id, 'isSigned', true)
                        .then(() => console.log('inserted'))
                        .catch(error => {
                            this.error = error;
                        });
                    this.$store.commit('isSigned', true);
                    this.changeDate();
                } else {
                    this.send = 'already registred';
                }
            },
            changeDate() {
                getOneMember(this.loggedUserInfo._id)
                    .then(member => {
                        this.user = member
                    })
                    .catch(error => {
                        this.error = error;
                    });
                const dateNow = moment()
                for (const index in this.user) {
                    if (moment(this.user[index].date) == dateNow) {
                        /* updatePresence(this.member._id, 'presence', index, this.user[index].date)
                            .then(() => console.log('inserted'))
                            .catch(error => {
                                this.error = error;
                            }); */
                        break;
                    }
                }
            },
            checkTime() {
                var format = 'HH:mm:ss'
                var time = moment(),
                    tooEarlyTime = moment('08:00:00', format),
                    tooLateTime = moment('09:30:00', format),
                    afterTime = moment('17:00:00', format);
                //to early
                if (time.isBefore(tooEarlyTime)) {
                    return -1;
                    //in time
                } else if (time.isBetween(tooEarlyTime, tooLateTime)) {
                    return 0;
                    //to late
                } else if (time.isBetween(tooLateTime, afterTime)) {
                    return 1;
                } else {
                    return 2;
                }
            }
        },
    };
</script>

<style>

</style>