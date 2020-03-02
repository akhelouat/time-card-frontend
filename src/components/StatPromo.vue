<!--
 * @ Author: Rahil Felix
 * @ Create Time: 2020-02-21 11:25:22
 * @ Modified by: Rahil Felix
 * @ Modified time: 2020-03-02 16:52:59
 * @ Description:
 -->

<template>
  <div>
    <v-select v-model="promo" :rules="getPromotionsNames(promos)" :items="promotions" label="Promo" />
    <div class="all" v-if="members.length">
      <div v-for="member in members" :key="member">{{member.firstName}} {{member.lastName}}
        <div v-for="stat in member.presence" :key="stat">
          <div v-if="stat.date != null">
            <div v-if="stat.check === 0" class="inTime">{{stat.check}}</div>
            <div v-if="stat.check === 1" class="late">{{stat.check}}</div>
            <div v-if="stat.check === 2" class="weekend">{{stat.check}}</div>
            <div v-if="stat.check === -1" class="abs">{{stat.check}}</div>
          </div>
        </div>
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
        promo: null
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
  .all {
    display: flex;
    flex-direction: row;
  }
  .inTime {
    background-color: greenyellow;
  }
  .late {
    background-color: rgb(255, 166, 0);
  }
  .weekend {
    background-color: rgb(202, 202, 202);
  }
  .abs {
    background-color: rgb(182, 81, 81);
  }
</style>
