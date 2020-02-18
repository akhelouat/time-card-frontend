<!--
 * @ Author: Rahil Felix
 * @ Create Time: 2020-02-18 12:02:04
 * @ Modified by: Rahil Felix
 * @ Modified time: 2020-02-18 13:26:53
 * @ Description:
 -->
 

<template>
    <div>
        <form action='/present'>
            <h3>We are : <span> {{ createdAtDisplay }}</span></h3>
            <p>{{ checkTime }}</p>
            <button type="submit" :disabled="validated == 1">benjam prezent</button>
            
        </form>
    </div>
</template>

<script>
    const moment = require('moment')
    export default {
        computed: {
            createdAtDisplay() {
                return moment().format('YYYY-MM-DD h:mm A');
            },
                checkTime() {
                var format = 'hh:mm:ss'
                var time = moment('17:29:00', format),
                    tooEarlyTime = moment('08:00:00', format), 
                    tooLateTime = moment('09:30:00', format),
                    afterTime = moment('17:00:00', format);
                if (time.isBefore(tooEarlyTime)) {
                    return 'You cannot sign now, its too early'
                } else if (time.isBetween(tooEarlyTime, tooLateTime)){
                       return 'You are at time';
                } else if (time.isBetween(tooLateTime, afterTime)){
                       return 'You are late';
                }
                else {
                    return 'You cannot sign now';
                }
            }
        },

    };
</script>

<style>

</style>>