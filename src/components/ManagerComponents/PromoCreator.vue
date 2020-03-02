<template>
    <v-container class="mt-12">
        <v-form>
            <!-- Promotion name -->
            <v-text-field
                v-model="name"
                :counter="15"
                label="Promotion Name"
                required
            />
            <!-- Start date picker -->
            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="start" transition="scale-transition" offset-y min-width="290px">
                <template v-slot:activator="{ on }">
                    <v-text-field
                        v-model="start"
                        label="Promotion starting date"
                        readonly
                        v-on="on"
                        required
                    />
                </template>
                <v-date-picker v-model="start" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(start)">OK</v-btn>
                </v-date-picker>
            </v-menu>
            <!-- End date picker -->
            <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" :return-value.sync="end" transition="scale-transition" offset-y min-width="290px">
                <template v-slot:activator="{ on }">
                    <v-text-field
                        v-model="end"
                        label="Promotion ending date"
                        readonly
                        v-on="on"
                        required
                    />
                </template>
                <v-date-picker v-model="end" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu2.save(end)">OK</v-btn>
                </v-date-picker>
            </v-menu>
            <!-- Button validate -->
            <v-btn color="success" class="mr-4" @click="createPromo()">Validate</v-btn>
        </v-form>
    </v-container>
</template>

<script>
    const moment = require('moment');
    import {
        addPromo
    } from "../../services/api/promo";
    export default {
        props: ["PromoCreator"],
        data: () => {
            return {
                title: 'new Promo',
                errors: [],
                name: '',
                start: new Date().toISOString().substr(0, 10),
                end: new Date().toISOString().substr(0, 10),
                menu: false,
                menu2: false,
            };
        },
        components: {},
        methods: {
            createPromo() {
                addPromo(this.name, this.start, this.end)
                    .then(() => {
                        this.name = ''
                    })
                    .catch((error) => {
                        this.error = error;
                    });
            },
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
form {
  width: 50%;
  margin-left: 20%;
}
</style>