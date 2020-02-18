<!--
 * @ Author: Rahil Felix
 * @ Create Time: 2020-02-18 14:28:06
 * @ Modified by: Rahil Felix
 * @ Modified time: 2020-02-18 14:29:06
 * @ Description:
 -->

<template>
    <div>
        <div v-bind:is="currentTabComponent"></div>
        <div v-bind:is="currentTabComponent"></div>
    </div>
</template>

<script>
    export default {
    }
</script>