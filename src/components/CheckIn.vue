<!--
 * @ Author: Rahil Felix
 * @ Create Time: 2020-02-18 12:02:04
 * @ Modified by: Rahil Felix
 * @ Modified time: 2020-02-27 16:36:04
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
        getOneMember,
        updateMember
    } from "../services/api/member"
    const moment = require('moment')
    export default {
        data: () => {
            return {
                send: null,
                member: [],
                error: ''
            };
        },
        computed: {
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
                    this.checkSign()
                    this.send = 'You are at time';
                } else if (time.isBefore(tooEarlyTime)) {
                    this.send = 'You cannot sign now, its too early';
                } else if (time.isBetween(tooLateTime, afterTime)) {
                    console.log('You are late')
                    this.checkSign()
                    this.send = 'You are late';
                }
                e.preventDefault();
            },
            checkSign: function() {
                this.member.presence[0]=2
                if (this.member.presence[0]===2) {
                    console.log('inin')
                    this.member.presence[0].push(this.checkTime())
                    console.log(this.member.presence[0])
                    updateMember(this.member._id, 'presence', this.member.presence)
                        .then(() => console.log('inserted'))
                        .catch(error => {
                            this.error = error;
                        });
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
        created() {
            console.log('cr')
            getOneMember("5e579b5150458e2465029b09")
                .then(member => {
                    this.member = member;
                })
                .catch(error => {
                    this.error = error;
                });
        }
    };
</script>

<style>

</style>