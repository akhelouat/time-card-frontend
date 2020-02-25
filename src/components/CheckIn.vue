<!--
 * @ Author: Rahil Felix
 * @ Create Time: 2020-02-18 12:02:04
 * @ Modified by: Rahil Felix
 * @ Modified time: 2020-02-24 15:25:13
 * @ Description:
 -->
 

<template>
    <div>
        <form @submit="checkForm">
            <h3>We are : <span> {{ createdAtDisplay }}</span></h3>
            <p>{{ checkTime }}</p>
            <button type="submit">benjam?</button>
        </form>
        <p v-if="send"> {{send}}</p>
    </div>
</template>

<script>
    const moment = require('moment')
    export default {
        data: () => {
            return {
                send: null,
                registed: false
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
                if (time.isBefore(tooEarlyTime)) {
                    return 'You cannot sign now, its too early'
                } else if (time.isBetween(tooEarlyTime, tooLateTime)) {
                    return 'You are at time';
                } else if (time.isBetween(tooLateTime, afterTime)) {
                    return 'You are late';
                } else {
                    return 'You cannot sign now';
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
            }
        }
    };
</script>

<style>

</style>