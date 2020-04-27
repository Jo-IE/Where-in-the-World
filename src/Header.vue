<template>
    <v-container fluid>
        <v-row class="mb-5">
            <v-col cols="12">
                <v-app-bar absolute class="my-5" flat>
                    <v-row>
                        <v-col cols="5" class="ml-2">
                            <v-toolbar-title>
                                <h3 class="font-weight-bold headline">Where in the world?</h3>
                            </v-toolbar-title>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="3" class="mr-2">
                            <v-btn depressed @click="toggleDarkMode">
                                <v-icon>mdi-moon-waxing-crescent</v-icon>
                                <span class="text-capitalize px-2">Dark Mode</span>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-app-bar>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Header",
    methods: {
        toggleDarkMode() {
            !this.$vuetify.theme.dark
                ? (this.$vuetify.theme.dark = true)
                : (this.$vuetify.theme.dark = false);
        }
    }
};
</script>

