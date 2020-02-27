<!--
 * @ Author: Rahil Felix
 * @ Create Time: 2020-02-20 09:29:58
 * @ Modified by: Rahil Felix
 * @ Modified time: 2020-02-25 16:52:48
 * @ Description:
 -->

<template>
    <div>
    <p v-if="errors.length>0">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
    </p>
    <form class="form-control" @submit="checkForm">
        <h1>{{ title }}:</h1>
        <input type="text" name="nom" id="nom" placeholder="Promo Name" v-model="nom">

        <div class="control-container">
            <date-pick v-model="start" :displayFormat="'DD.MM.YYYY'" :format="'DD.MM.YYYY'"></date-pick>
            <date-pick v-model="end" :displayFormat="'DD.MM.YYYY'" :format="'DD.MM.YYYY'"></date-pick>
        </div>
        <span>Between : {{start}} and {{end}}</span>
        <div class="control-container">
            <button type="submit">add Promo</button>
        </div>
    </form>
     
    </div>
</template>

<script>
    const moment = require('moment');
    import DatePick from 'vue-date-pick';
    import 'vue-date-pick/dist/vueDatePick.css';
    export default {
        props: ["PromoCreator"],
        data: () => {
            return {
                title:'new Promo',
                errors: [],
                nom: null,
                start: moment().format('DD.MM.YYYY'),
                end: moment().format('DD.MM.YYYY')
            };
        },
        components: {
            DatePick
        },
        methods: {
            checkForm: function(e) {
                const starttime = moment(this.start, 'DD.MM.YYYY')
                const endtime = moment(this.end, 'DD.MM.YYYY')
                if (this.nom && typeof this.nom === String && this.nom.length > 0) {
                    return true;
                }
                this.errors = []
                if (starttime.isAfter(endtime)) {
                    this.errors.push('end date must be after start date');
                }
                if (!this.nom) {
                    this.errors.push('promo name is required.');
                }
                e.preventDefault();
            }
        }
    }
</script>

<style scoped>
 h1 {
        background-color: #121212;
        color: #fafafa;
        width: 81%;
    }
    .form-control {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin-left: 20%;
    }
    .control-container {
        width: 100%;
        display: flex;
    }
    .control-container>input {
        width: 39.5%;
    }
    input {
        width: 80%;
        margin-bottom: 20px;
    }
</style>