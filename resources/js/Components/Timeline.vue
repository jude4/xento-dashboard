<template>
    <vs-card class="mx-auto" max-width="400" flat>
        <template #title>
            <v-card flat>
                <v-card-title class="pa-2">
                    <h3 class="overline font-bold grow">Daily Activity</h3>
                </v-card-title>
            </v-card>
        </template>
        <template #text>
            <v-divider class="mb-2"></v-divider>

            <v-card-text class="py-0">
                <v-timeline align-top dense>
                    <v-timeline-item color="pink" small>
                        <v-row class="pt-1">
                            <v-col cols="" md="9" class="">
                                <strong>Task finished</strong>
                                <div>
                                    <small>09 July 2021</small>
                                </div>
                                <div>
                                    <p class="caption">
                                        Adam Berry finished tasks on
                                        <span class="blue--text"
                                            >Project management</span
                                        >
                                    </p>
                                </div>
                            </v-col>

                            <v-col md="2">
                                <div class="caption flex">
                                    <i class="bx bx-trash"></i>
                                    <i class="bx bx-edit"></i>
                                </div>
                            </v-col>
                        </v-row>
                    </v-timeline-item>

                    <v-timeline-item color="teal lighten-3" small>
                        <v-row class="pt-1">
                            <v-col cols="" md="9" class="">
                                <strong>New Comment</strong>
                                <div>
                                    <small>09 July 2021</small>
                                </div>
                                <div>
                                    <p class="caption">
                                        Victorial commented on
                                        <span class="blue--text"
                                            >Angularjs Template</span
                                        >
                                    </p>
                                </div>
                            </v-col>

                            <v-col md="2">
                                <div class="caption flex">
                                    <i class="bx bx-trash"></i>
                                    <i class="bx bx-edit"></i>
                                </div>
                            </v-col>
                        </v-row>
                    </v-timeline-item>

                    <v-timeline-item color="pink" small>
                        <v-row class="pt-1">
                            <v-col cols="" md="9" class="">
                                <strong>Task Overdue</strong>
                                <div>
                                    <small>14 June 2021</small>
                                </div>
                                <div>
                                    <p class="caption">
                                        James finished tasks on
                                        <span class="blue--text"
                                            >Integrated management</span
                                        >
                                    </p>
                                </div>
                            </v-col>

                            <v-col md="2">
                                <div class="caption flex">
                                    <i class="bx bx-trash"></i>
                                    <i class="bx bx-edit"></i>
                                </div>
                            </v-col>
                        </v-row>
                    </v-timeline-item>
                </v-timeline>
            </v-card-text>
        </template>
    </vs-card>
</template>
