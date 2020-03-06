<!--
 * @ Author: Rahil Felix
 * @ Create Time: 5050-02-21 11:25:22
 * @ Modified by: Rahil Felix
 * @ Modified time: 2020-03-05 15:25:59
 * @ Description:
 -->
<!--
<template>
  <div>
    <v-select v-model="promo" :rules="getPromotionsNames(promos)" :items="promotions" label="Promo" />
    <div v-if="members.length">
      <div class="d-flex flex-row mb-6" v-for="member in members" :key="member">
        <v-card width="200" height="50"> {{member.firstName}} {{member.lastName}}</v-card>
        <v-card class="d-flex flex-row mb-6" width="100%" height="50" :rules="parseDay(member.presence)">
          <v-card width="20%" height="50" class="green" v-if="nbrInTime.length>1">a l'heure: {{nbrInTime.length}} jours <br/>{{persentageInTime}}%</v-card>
          <v-card width="20%" height="50" class="green" v-else>a l'heure: {{nbrInTime.length}} jour <br/>{{persentageInTime}}%</v-card>
          <v-card width="20%" height="50" class="orange" v-if="nbrLate.length>1">en retard: {{nbrLate.length}} jours <br/>{{persentageLate}}%</v-card>
          <v-card width="20%" height="50" class="orange" v-else>en retard: {{nbrLate.length}} jour <br/>{{persentageLate}}%</v-card>
          <v-card width="20%" height="50" class="red" v-if="nbrAbs.length>1">absent: {{nbrAbs.length}} jours <br/>{{persentageAbs}}%</v-card>
          <v-card width="20%" height="50" class="red" v-else>absent: {{nbrAbs.length}} jour <br/>{{persentageAbs}}%</v-card>
          <v-card width="20%" height="50" class="red">orange flag: {{orangeFlag}}</v-card>
          <v-card width="20%" height="50" class="red">red flag: {{redFlag}}</v-card>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    getPromo
  } from "../services/api/promo";
  import {
    getMemberByPromo
  } from "../services/api/member"
  export default {
    data: () => {
      return {
        promos: [],
        error: null,
        members: [],
        promotions: [],
        promo: null,
        nbrAbs: [],
        nbrLate: [],
        nbrInTime: [],
        nbrDay: 0
      };
    },
    methods: {
      getPromotionsNames(promos) {
        for (const promo of promos) {
          if (this.promotions.includes(promo.name))
            break;
          else
            this.promotions.push(promo.name);
        }
      },
      parseDay(presence) {
        this.nbrAbs = [];
        this.nbrLate = [];
        this.nbrInTime = [];
        this.nbrDay = 0;
        for (const checkDay in presence) {
          if (presence[checkDay].date === null) {
            break;
          }
          if (presence[checkDay].check != 2) {
            this.nbrDay += 1
          }
          if (presence[checkDay].check === 0) {
            this.nbrInTime.push(presence[checkDay].date);
          } else if (presence[checkDay].check === 1) {
            const hour = Date(presence[checkDay].date).substr(15, 10);
            this.nbrLate.push({"date": presence[checkDay].date, "hour": hour});
          } else if (presence[checkDay].check === -1) {
            this.nbrAbs.push(presence[checkDay].date);
          }
        }
      }
    },
    computed: {
      persentageAbs: function() {
        if (this.nbrDay === 0) {
          return 0;
        }
        return ((this.nbrAbs.length / this.nbrDay) * 100).toFixed(0)
      },
      persentageLate: function() {
        if (this.nbrDay === 0) {
          return 0;
        }
        return ((this.nbrLate.length / this.nbrDay) * 100).toFixed(0)
      },
      persentageInTime: function() {
          if (this.nbrDay === 0) {
          return 0;
        }
        return ((this.nbrInTime.length / this.nbrDay) * 100).toFixed(0)
      },
      orangeFlag: function() {
        return (Math.floor(this.nbrLate.length/3))
      },
      redFlag: function() {
        return (Math.floor(this.nbrAbs.length/3))
      }
    },
    mounted() {
      getPromo()
        .then((promos) => {
          this.promos = promos;
        })
        .catch((error) => {
          this.error = error;
        });
    },
    watch: {
      promo(newValue) {
        getMemberByPromo(newValue)
          .then((members) => {
            this.members = members;
          })
          .catch((error) => {
            this.error = error;
          });
      }
    }
  };
</script> -->