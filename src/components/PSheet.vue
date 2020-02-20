
<template>
    <div>
        <v-calendar :attributes='attrs' color="red" is-dark is-inline @dayclick='dayClicked'>
        </v-calendar>
        {{ selectedDay }}
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                flagsnbr: 5,
                selectedDay: null,
                attrs: [{
                    key: 'today',
                    highlight: {
                        backgroundColor: '#ff8080',
                        // Other properties are available too, like `height` & `borderRadius`
                    },
                    popover: {
                        label: this.flagsnbr + 'flags aujourdhui',
                    },
                    dates: new Date(2020, 0, 1)
                }],
            };
        },
        methods: {
            dayClicked(day) {
                this.selectedDay = day;
            },
        },
    };
</script>

<style>

</style>