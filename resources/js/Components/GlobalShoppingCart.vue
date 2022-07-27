<template>
    <v-menu
        v-model="cart"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-y
        left
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
                <vs-avatar badge-color="danger" badge-position="top-right">
                    <i class="bx bx-cart-alt bx-sm"></i>
                    <template #badge>5</template>
                </vs-avatar>
            </v-btn>
        </template>

        <v-card flat elevation="0">
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>My Shopping Cart</v-list-item-title>
                        <v-list-item-subtitle
                            >Founder of Vuetify</v-list-item-subtitle
                        >
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-btn
                            :class="fav ? 'red--text' : ''"
                            icon
                            @click="fav = !fav"
                        >
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
                <v-list-item>
                    <v-list-item-action>
                        <v-switch v-model="message" color="purple"></v-switch>
                    </v-list-item-action>
                    <v-list-item-title>Enable messages</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-action>
                        <v-switch v-model="hints" color="purple"></v-switch>
                    </v-list-item-action>
                    <v-list-item-title>Enable hints</v-list-item-title>
                </v-list-item>
            </v-list>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text @click="menu = false"> Cancel </v-btn>
                <v-btn color="primary" text @click="menu = false"> Save </v-btn>
            </v-card-actions>
        </v-card>
    </v-menu>
</template>

<script>
export default {
    data() {
        return {
            fav: true,
            cart: false,
            message: false,
            hints: true,
        };
    },
};
</script>

<style></style>
