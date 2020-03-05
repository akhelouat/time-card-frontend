<!--
 * @ Author: Rahil Felix
 * @ Create Time: 5050-02-21 11:25:22
 * @ Modified by: Rahil Felix
 * @ Modified time: 2020-03-05 15:29:41
 * @ Description:
 -->

<template>

<div>
    <v-select v-model="promo" :rules="getPromotionsNames(promos)" :items="promotions" label="Promo" />
    <div v-if="members.length">
        <v-lazy
          :options="{
            threshold: .5
          }"
          min-height="200"
          transition="fade-transition"
          class="d-flex flex-row justify-center"
        >
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="secondary white--text text-left">Surname</th>
                    <th class="secondary white--text text-left">Name</th>

                    <th class="success white--text text-left">Presence %</th>
                    <th class="warning white--text text-left">Delay %</th>
                    <th class="error white--text text-left">Absence %</th>

                    <th class="success white--text text-left">Presence days counter</th>
                    <th class="warning white--text text-left">Delay Days counter</th>
                    <th class="error white--text text-left">Absence days counter</th>

                    <th class="secondary white--text text-left">Retard</th>

                    <th class="secondary white--text text-left">Absence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="member in members" :key="member._id" :rules="parseDay(member.presence)">
                    <!-- Student Name -->
                    <td>{{ member.firstName }}</td>
                    <td>{{ member.lastName }}</td>

                    <!-- Presence days percentage -->
                    <td>{{persentageInTime}}%</td>

                    <!-- Delay days percentage -->
                    <td>{{persentageLate}}%</td>

                    <!-- Absence days percentage -->
                    <td>{{persentageAbs}}%</td>

                    <!-- Prensence days counter -->
                    <td>{{nbrInTime.length}}</td>
                    
                    <!-- Delay days counter -->
                    <td>{{nbrLate.length}}</td>
                    
                    <!-- Absence days counter -->
                    <td>{{nbrAbs.length}}</td>

                    <td>
                      <v-btn>
                        <v-icon class="warning--text">mdi-flag</v-icon>
                        {{orangeFlag}}
                      </v-btn>
                    </td>

                    <td>
                      <v-btn>
                        <v-icon class="error--text">mdi-flag</v-icon>
                        {{redFlag}}
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
        </v-lazy>
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
        nbrDay: 0,
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
            this.nbrLate.push({
              "date": presence[checkDay].date,
              "hour": hour
            });
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
</script>

<style scoped>
/*  

  <v-app id="inspire">
    <v-card>
      <v-tabs
        background-color="primary"
        dark
        v-model="promo" :rules="getPromotionsNames(promos)" :items="promotions"
      >
        <v-tab
          v-for="promotion in promos"
          :key="promotion.name"
        >
          {{ promotion.name }}
        </v-tab>
      </v-tabs>
  
      <v-tabs-items >
        <v-lazy
          :options="{
            threshold: .5
          }"
          min-height="200"
          transition="fade-transition"
        >

            <v-simple-table >
              <template v-slot:default>
                <thead>
                  <tr class="">
                    <th class="secondary white--text text-left">Surname</th>
                    <th class="secondary white--text text-left">Name</th>

                    <th class="success text-left">Presence days counter</th>
                    <th class="success text-left">Presence Percentage</th>

                    <th class="warning text-left">Delay Days counter</th>
                    <th class="warning text-left">Delay Percentage</th>

                    <th class="error text-left">Absence days counter</th>
                    <th class="error text-left">Absence Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="member in members" :key="member.namePromo" :rules="parseDay(member.presence)">

                      <!-- Student Name -->
                    <td >{{ member.firstName }}</td>
                    <td>{{ member.lastName }}</td>

                    <!-- Prensence days counter -->
                    <td>{{nbrInTime.length}}</td>

                    <!-- Presence days percentage -->
                    <td>{{persentageInTime}}%</td>
                    
                    <!-- Delay days counter -->
                    <td>{{nbrLate.length}}</td>
                    
                    <!-- Delay days percentage -->
                    <td>{{persentageLate}}%</td>

                    <!-- Absence days counter -->
                    <td>{{nbrAbs.length}}</td>

                    <!-- Absence days percentage -->
                    <td>{{persentageAbs}}%</td>

                    
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
        </v-lazy>







      </v-tabs-items>
    </v-card>
  </v-app>







*/
</style>
