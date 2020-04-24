<template>
    <v-container fluid>
        <Header />
        <v-row class="grey lighten-4 pt-5">
            <v-col cols="12" offset-md="1" md="5"></v-col>
        </v-row>
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
        return {};
    },
    methods: {
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
    }
};
</script>

