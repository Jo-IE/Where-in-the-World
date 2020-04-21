<template>
    <v-container fluid>
        <v-row class="mb-5">
            <v-col cols="12">
                <v-app-bar absolute color="white" elevate-on-scroll>
                    <v-toolbar-title class="ml-5">
                        <h3 class="font-weight-bold body-2">Where in the world?</h3>
                    </v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn depressed>
                        <v-icon>mdi-moon-waxing-crescent</v-icon>
                        <span class>Dark Mode</span>
                    </v-btn>
                </v-app-bar>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Header"
};
</script>

