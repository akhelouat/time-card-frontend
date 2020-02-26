<!--
 * @ Author: Rahil Felix
 * @ Create Time: 2020-02-21 11:25:22
 * @ Modified by: Rahil Felix
 * @ Modified time: 2020-02-26 10:16:56
 * @ Description:
 -->

<template>
    <div>
        {{nbrDay}}
    </div>
</template>

<script>
    import {
        getMember
    } from "../services/api/getUser";
    const Moment = require('moment');
    const MomentRange = require('moment-range');
    const moment = MomentRange.extendMoment(Moment);
    export default {
        data: () => {
            return {
                day: null,
                start: moment([2019, 10, 15]),
                end: moment([2020, 2, 1]),
            };
        },
        computed: {
            nbrDay: function() {
                return this.end.diff(this.start, 'days')
            }
        },
        mounted() {
            getMember()
                .then((members) => {
                    this.members = members;
                })
                .catch((error) => {
                    this.error = error;
                });
        }
    };
    const range = moment.range('2019-10-01', '2020-03-01');
    for (let month of range.by('month')) {
        alert(month.format('YYYY-MM-DD'));
    }
</script>

<style>

</style>
