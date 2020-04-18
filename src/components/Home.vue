<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-app-bar absolute color="white" elevate-on-scroll>
                    <v-toolbar-title class="ml-5">
                        <h3 class="font-weight-bold body-2">Where in the world?</h3>
                    </v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn depressed class="pl-2 text-capitalize">
                        <v-icon>mdi-moon-waxing-crescent</v-icon>
                        <span class="pl-2 text-capitalize">Dark Mode</span>
                    </v-btn>
                </v-app-bar>
            </v-col>

            <v-row class="mt-3">
                <v-col cols="12" md="6">
                    <v-toolbar dense floating>
                        <v-text-field hide-details prepend-icon="mdi-magnify" single-line></v-text-field>
                    </v-toolbar>
                </v-col>
            </v-row>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Home"
};
</script>

