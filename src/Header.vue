<template>
    <v-container fluid>
        <v-row class="mb-5">
            <v-col cols="12">
                <v-app-bar absolute color="white" class="my-5" flat>
                    <v-row>
                        <v-col cols="5" offset-md="1">
                            <v-toolbar-title>
                                <h3 class="font-weight-bold headline">Where in the world?</h3>
                            </v-toolbar-title>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="3" offset-md="3">
                            <v-btn depressed class="white">
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
    name: "Header"
};
</script>

