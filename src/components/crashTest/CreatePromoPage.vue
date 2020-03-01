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
      
            <label for="nom">promo name:</label>
            <input type="text" name="nom" id="nom" v-model="name">
            <br> 1st
            <date-pick v-model="start" :displayFormat="'DD.MM.YYYY'" :format="'DD.MM.YYYY'"></date-pick>
            2nd
            <date-pick v-model="end" :displayFormat="'DD.MM.YYYY'" :format="'DD.MM.YYYY'"></date-pick>
            <button type="submit" @click=" createPromo()">send</button>
       
        {{start}}-{{end}}
    </div>
</template>

<script>
    //const moment = require('moment');
    import DatePick from 'vue-date-pick';
    import { addPromo } from '../../services/api/promo';
    import 'vue-date-pick/dist/vueDatePick.css';
    export default {
        data: () => {
            return {
                errors: [],
                name: '',
                start: '',
                end: ''
            };
        },
        components: {
            DatePick
        },
        methods: {
           /* checkForm: function(e) {
                const starttime = moment(this.start, 'DD.MM.YYYY')
                const endtime = moment(this.end, 'DD.MM.YYYY')
                if(this.nom && typeof this.nom === String && this.nom.length>0){
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
            },*/
            createPromo() {
                addPromo(this.name, this.start, this.end) 
                   .then(() => {
                        this.name = '';
                    })
                    .catch((error) => {
                        this.error = error;
                    });

                }

            }
        }
    
</script>

<style scoped>
    
</style>