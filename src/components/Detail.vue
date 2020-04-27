<template>
    <v-container fluid>
        <Header />
        <v-row class="pt-5">
            <v-col cols="12" offset-md="1" md="5">
                <router-link to="/">
                    <v-btn class="px-2 white">
                        <v-icon left>mdi-arrow-left</v-icon>Back
                    </v-btn>
                </router-link>
            </v-col>
        </v-row>

        <v-row v-if="selected" class="pt-5">
            <v-col cols="12" md="6" class="pt-5 mt-5">
                <v-img height="350" :src="selected.flag"></v-img>
            </v-col>
            <v-col cols="12" md="6" class="pt-5 mt-5">
                <h2 class="mb-5">{{selected.name}}</h2>
                <v-row>
                    <v-col cols="12" md="6">
                        <p>
                            <span class="font-weight-bold">Native Name:</span>
                            {{selected.nativeName}}
                        </p>
                        <p>
                            <span class="font-weight-bold">Population:</span>
                            {{selected.population}}
                        </p>
                        <p>
                            <span class="font-weight-bold">Region:</span>
                            {{selected.region}}
                        </p>
                        <p>
                            <span class="font-weight-bold">Sub Region:</span>
                            {{selected.subregion}}
                        </p>
                    </v-col>
                    <v-col cols="12" md="6">
                        <p>
                            <span class="font-weight-bold">Capital:</span>
                            {{selected.capital}}
                        </p>
                        <p>
                            <span class="font-weight-bold">Top Level Domain:</span>
                            {{selected.topLevelDomain}}
                        </p>
                        <p>
                            <span class="font-weight-bold">Currencies:</span>
                            <span
                                v-for="currency in selected.currencies"
                                :key="currency.name"
                            >{{currency.name}},</span>
                        </p>
                        <p>
                            <span class="font-weight-bold">Languages:</span>
                            <span
                                v-for="language in selected.languages"
                                :key="language.name"
                            >{{language.name + ", "}}</span>
                        </p>
                    </v-col>
                </v-row>

                <div>
                    <p>
                        <span class="font-weight-bold">Border Countries:</span>
                        <span v-if="selected.borders.length===0">None</span>
                        <span v-for="border in selected.borders" :key="border" class="px-2">
                            <v-btn
                                raised
                                class="text-capitalize white mt-2"
                            >{{getFullCountry(border)}}</v-btn>
                        </span>
                    </p>
                </div>
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
    name: "Detail",
    components: {
        Header
    },
    props: ["name"],
    data: function() {
        return {
            selected: {}
        };
    },
    methods: {
        getFullCountry(abbr) {
            return this.$store.getters.AllCountries.find(
                country => country.alpha3Code === abbr
            ).name;
        },
        ...mapActions(["getCountries"])
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
        if (this.$store.getters.AllCountries.length > 0) {
            this.selected = this.$store.getters.AllCountries.find(
                country => country.name === this.name
            );
        } else {
            this.$store.dispatch("getCountries").then(() => {
                this.selected = this.$store.getters.AllCountries.find(
                    country => country.name === this.name
                );
            });
        }
    }
};
</script>

<style scoped>
a {
    text-decoration: none;
}

p {
    line-height: 1.3rem;
}
</style>

