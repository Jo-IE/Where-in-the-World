<template>
    <v-container fluid>
        <Header />
        <v-row>
            <v-col cols="12" offset-md="1" md="5" class="pt-5">
                <v-toolbar dense>
                    <v-text-field hide-details prepend-icon="mdi-magnify" single-line></v-text-field>
                </v-toolbar>
            </v-col>
            <v-col cols="12" offset-md="2" md="3">
                <v-select
                    :items="regions"
                    label="Filter By Region"
                    solo
                    v-on:change="filterCountries"
                ></v-select>
            </v-col>
        </v-row>
        <v-container fluid>
            <v-row v-if="countries.length >0">
                <v-col
                    v-for="country in countries"
                    :key="country.name"
                    cols="12"
                    sm="6"
                    md="4"
                    lg="3"
                    justify="center"
                    align-content="center"
                >
                    <v-card class="mx-auto my-12" max-width="374">
                        <v-img height="250" :src="country.flag"></v-img>

                        <v-card-title>{{country.name}}</v-card-title>

                        <v-card-text>
                            <div>
                                <p>
                                    Population:
                                    <span>{{country.population}}</span>
                                </p>
                            </div>
                            <div>
                                <p>
                                    Region:
                                    <span>{{country.region}}</span>
                                </p>
                            </div>
                            <div>
                                <p>
                                    Capital:
                                    <span>{{country.capital}}</span>
                                </p>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import Header from "../Header";
import { mapGetters, mapActions } from "vuex";
export default {
    components: {
        Header
    },
    data: function() {
        return {
            countries: this.$store.getters.AllCountries,
            regions: ["Africa", "America", "Asia", "Europe", "Oceania"]
        };
    },
    methods: {
        filterCountries(val) {
            console.log(val);
        },
        ...mapActions(["getCountries"])
    },
    computed: {
        ...mapGetters(["AllCountries"])
    },
    created() {
        this.$store
            .dispatch("getCountries")
            .then(() => console.log(this.countries));
    }
};
</script>

