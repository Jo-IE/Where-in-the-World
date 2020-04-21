<template>
    <v-container fluid>
        <Header />
        <v-row>
            <v-col cols="12" offset-md="1" md="5">
                <v-toolbar dense>
                    <v-text-field hide-details prepend-icon="mdi-magnify" single-line></v-text-field>
                </v-toolbar>
            </v-col>
            <v-col cols="12" offset-md="2" md="3">
                <v-select :items="items" label="Filter By Region" solo></v-select>
            </v-col>
        </v-row>
        <v-row></v-row>
    </v-container>
</template>

<script>
import Header from "../Header";
import { mapGetters, mapState } from "vuex";
export default {
    components: {
        Header
    },
    data: {
        countries: []
    },
    created: {}
};
</script>

