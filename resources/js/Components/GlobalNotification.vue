<template>
    <v-menu
        v-model="notification"
        :close-on-content-click="false"
        :nudge-width="240"
        offset-y
        left
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
                <vs-avatar badge-color="danger" badge-position="top-right">
                    <i class="bx bx-bell bx-sm"></i>
                    <template #badge>10</template>
                </vs-avatar>
            </v-btn>
        </template>

        <v-card flat elevation="0">
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Notifications</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
                <v-list-item>
                    <v-list-item-icon>
                        <v-btn
                            fab
                            flat
                            elevation="0"
                            small
                            color="#6c5ffc"
                            dark
                        >
                            <i
                                class="bx bx-envelope"
                                style="font-size: 20px"
                            ></i>
                        </v-btn>
                    </v-list-item-icon>
                    <v-list-item-title>
                        <span class="text-sm">New Application recieved</span>
                        <div><small class="caption">3 days ago</small></div>
                    </v-list-item-title>
                </v-list-item>

                <v-divider></v-divider>
                <v-list-item>
                    <v-list-item-icon>
                        <v-btn
                            fab
                            flat
                            elevation="0"
                            small
                            color="#0dcaf0"
                            dark
                        >
                            <i
                                class="bx bx-check-circle"
                                style="font-size: 20px"
                            ></i>
                        </v-btn>
                    </v-list-item-icon>
                    <v-list-item-title>
                        <span class="text-sm">Project has been approved</span>
                        <div><small class="caption">2 days ago</small></div>
                    </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                    <v-list-item-icon>
                        <v-btn
                            fab
                            flat
                            elevation="0"
                            small
                            color="#20c997"
                            dark
                        >
                            <i
                                class="bx bx-cart"
                                style="font-size: 20px"
                            ></i>
                        </v-btn>
                    </v-list-item-icon>
                    <v-list-item-title>
                        <span class="text-sm">Your product delivered</span>
                        <div><small class="caption">30 min ago</small></div>
                    </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                    <v-list-item-icon>
                        <v-btn
                            fab
                            flat
                            elevation="0"
                            small
                            color="#fc5296"
                            dark
                        >
                            <i
                                class="bx bx-user-plus"
                                style="font-size: 20px"
                            ></i>
                        </v-btn>
                    </v-list-item-icon>
                    <v-list-item-title>
                        <span class="text-sm">Friend Requests</span>
                        <div><small class="caption">30 min ago</small></div>
                    </v-list-item-title>
                </v-list-item>
                <v-divider></v-divider>
            </v-list>

            <v-card-actions style="background-color: whitesmoke">
               <v-btn block text class="text-capitalize">View all Notifications</v-btn>
            </v-card-actions>
        </v-card>
    </v-menu>
</template>

<script>
export default {
    data() {
        return {
            notification: ""
        }
    }
};
</script>

<style></style>
