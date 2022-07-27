<template>
    <v-menu
        v-model="cart"
        :close-on-content-click="false"
        :nudge-width="80"
        offset-y
        left
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
                <v-avatar color="grey" size="30"> </v-avatar>
            </v-btn>
        </template>

        <v-card flat elevation="0">
            <v-list>
                <v-list-item>
                    <v-list-item-content class="">
                        <v-list-item-title class="text-center">
                            <span class="text-sm text-center"
                                >Percy Kewshun</span
                            >
                        </v-list-item-title>
                        <v-list-item-subtitle class="text-center"
                            ><small class="caption"
                                >Senior Admin</small
                            ></v-list-item-subtitle
                        >
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
                <v-list-item>
                    <v-list-item-icon>
                        <i
                            class="bx bx-user"
                            style="color: #6c5ffc; font-size: 20px"
                        ></i>
                    </v-list-item-icon>
                    <v-list-item-title
                        ><span class="text-xs">Profile</span></v-list-item-title
                    >
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                    <v-list-item-icon>
                        <i
                            class="bx bx-envelope"
                            style="color: #6c5ffc; font-size: 20px"
                        ></i>
                    </v-list-item-icon>
                    <v-list-item-title
                        ><span class="text-xs">Inbox</span></v-list-item-title
                    >
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                    <v-list-item-icon>
                        <i
                            class="bx bx-lock-alt"
                            style="color: #6c5ffc; font-size: 20px"
                        ></i>
                    </v-list-item-icon>
                    <v-list-item-title
                        ><span class="text-xs">Lockscreen</span></v-list-item-title
                    >

                    <v-list-item-action class="">
                        <v-badge content="5" color="red" class="mt-2" dark></v-badge>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-card>
    </v-menu>
</template>

<script>
export default {};
</script>

<style></style>
