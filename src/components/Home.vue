<template>
    <v-container fluid>
        <Header />
        <v-row class="pt-5">
            <v-col cols="12" class="ml-2" md="5">
                <v-toolbar dense>
                    <v-text-field
                        v-model="country"
                        hide-details
                        prepend-icon="mdi-magnify"
                        single-line
                    ></v-text-field>
                </v-toolbar>
            </v-col>
            <v-col cols="12" offset-md="3" md="3">
                <v-select
                    item-text="text"
                    item-value="value"
                    :items="regions"
                    label="Filter By Region"
                    solo
                    v-on:change="filterCountries"
                ></v-select>
            </v-col>
        </v-row>

        <v-row v-if="countries && countries.length > 0" class>
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
                    <router-link :to="{ name: 'detail', params: { name: country.name }}">
                        <v-img height="250" :src="country.flag"></v-img>
                    </router-link>

                    <v-card-title>{{country.name}}</v-card-title>

                    <v-card-text>
                        <div>
                            <p>
                                <span class="font-weight-bold">Population:</span>
                                {{country.population}}
                            </p>
                        </div>
                        <div>
                            <p>
                                <span class="font-weight-bold">Region:</span>
                                {{country.region}}
                            </p>
                        </div>
                        <div>
                            <p>
                                <span class="font-weight-bold">Capital:</span>
                                {{country.capital}}
                            </p>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-else class="text-center my-5">
            <v-col cols="12">
                <v-progress-circular :size="70" :width="7" indeterminate color="primary"></v-progress-circular>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Header from "../Header";
import { mapGetters, mapActions } from "vuex";
export default {
    name: "Home",
    components: {
        Header
    },
    data: function() {
        return {
            countries: [],
            regions: ["Africa", "America", "Asia", "Europe", "Oceania"],
            country: ""
        };
    },
    methods: {
        filterCountries(val) {
            switch (val) {
                case "Africa":
                    this.countries = this.$store.getters.Africa;
                    break;
                case "Europe":
                    this.countries = this.$store.getters.Europe;
                    break;
                case "America":
                    this.countries = this.$store.getters.America;
                    break;
                case "Oceania":
                    this.countries = this.$store.getters.Oceania;
                    break;
                case "Asia":
                    this.countries = this.$store.getters.Asia;
                    break;
                default:
                    break;
            }
            console.log(this.$store.getters.Africa);
        },

        ...mapActions(["getCountries"])
    },
    watch: {
        country: function(val) {
            if (val !== "") {
                this.countries = this.$store.getters.AllCountries.filter(
                    item => item.name.toLowerCase() === val.toLowerCase()
                );
            } else if (val === "") {
                this.countries = this.$store.getters.AllCountries;
            }
        }
    },
    computed: {
        ...mapGetters([
            "AllCountries",
            "Africa",
            "America",
            "Asia",
            "Europe",
            "Oceania"
        ])
    },
    created() {
        this.$store.dispatch("getCountries").then(() => {
            this.countries = this.$store.getters.AllCountries;
            console.log(this.countries);
        });
    }
};
</script>

