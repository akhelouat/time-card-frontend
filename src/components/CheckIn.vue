<!--
 * @ Author: Rahil Felix
 * @ Create Time: 2020-02-18 12:02:04
 * @ Modified by: Rahil Felix
 * @ Modified time: 2020-02-18 13:26:53
 * @ Description:
 -->
 

<template>
    <div>
        <form action='abdelfaitdelapdo' method="post">
            <h3>We are : <span> {{ createdAtDisplay }}</span></h3>
            <button type="submit">benjam prezent</button>
            {{ checkTime }}
        </form>
    </div>
</template>

<script>
    const moment = require('moment')
    export default {
        computed: {
            createdAtDisplay() {
                return moment().format('YYYY-MM-DD h:mm A');
            }
        },
        methods: {
            checkTime() {
                var format = 'hh:mm:ss'
                var time = moment('09:31:00', format),
                    beforeTime = moment('09:30:00', format),
                    afterTime = moment('17:00:00', format);
                if (time.isBetween(beforeTime, afterTime)) {
                    console.log('is between')
                } else {
                    console.log('is not between')
                }
            }
        }
    };
</script>

<style>

</style>>