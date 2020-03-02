<!--
 * @ Author: Rahil Felix
 * @ Create Time: 2020-02-21 11:25:22
 * @ Modified by: Rahil Felix
 * @ Modified time: 2020-03-02 09:44:35
 * @ Description:
 -->

<template>
    <div>
        <select v-for="promo in promos" :key="promo">
            <span>{{ promo.name }}</span>
        </select>
        <div v-if='error'>
            Error while fetching user list: {{ error.message }}.
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
                members: []
            };
        },
        methods: {
            selectPromo(promo) {
                getMemberByPromo(promo)
                    .then((members) => {
                        this.members = members;
                    })
                    .catch((error) => {
                        this.error = error;
                    });
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
        }
    };
</script>

<style>

</style>
