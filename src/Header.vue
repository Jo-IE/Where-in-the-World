<template>
    <v-container fluid>
        <v-row class="mb-5">
            <v-col cols="12">
                <v-app-bar absolute color="white" flat>
                    <v-toolbar-title class="ml-5">
                        <h3 class="font-weight-bold headline">Where in the world?</h3>
                    </v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn depressed class="white">
                        <v-icon>mdi-moon-waxing-crescent</v-icon>
                        <span class="text-capitalize px-2">Dark Mode</span>
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

