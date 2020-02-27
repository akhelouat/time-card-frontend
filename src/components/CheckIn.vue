<!--
 * @ Author: Rahil Felix
 * @ Create Time: 2020-02-18 12:02:04
 * @ Modified by: Rahil Felix
 * @ Modified time: 2020-02-27 14:18:53
 * @ Description:
 -->
 

<template>
    <div>
        <form @submit="checkForm">
            <h3>We are : <span> {{ createdAtDisplay }}</span></h3>
            <button type="submit">benjam?</button>
        </form>
        <p v-if="send"> {{send}}</p>
    </div>
</template>

<script>
    import {
        getOneMember,
        updateMember
    } from "../services/api/member"
    const moment = require('moment')
    export default {
        data: () => {
            return {
                send: null,
                registed: false,
                member: [],
                error: ''
            };
        },
        computed: {
            createdAtDisplay() {
                return moment().format('YYYY-MM-DD HH:mm');
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
        methods: {
            checkForm: function(e) {
                var format = 'HH:mm:ss'
                var time = moment(),
                    tooEarlyTime = moment('08:00:00', format),
                    tooLateTime = moment('09:30:00', format),
                    afterTime = moment('17:00:00', format);
                if (this.registed === true) {
                    this.send = 'already sign';
                } else if (time.isBetween(tooEarlyTime, tooLateTime)) {
                    this.registed = true;
                    this.send = 'You are at time';
                } else if (time.isBefore(tooEarlyTime)) {
                    this.send = 'You cannot sign now, its too early';
                } else if (time.isBetween(tooLateTime, afterTime)) {
                    this.registed = true;
                    this.send = 'You are late';
                }
                e.preventDefault();
            },
            getMember: function() {
                getOneMember()
                    .then(member => {
                        this.member = member;
                    })
                    .catch(error => {
                        this.error = error;
                    });
                if (!this.member.presence[moment()]) {
                    this.member.presence[moment()].push()
                    updateMember(this.member._id, this.member.presence)
                        .then(member => {
                            this.member = member;
                        })
                        .catch(error => {
                            this.error = error;
                        });
                }
            },
        }
    };
</script>

<style>

</style>