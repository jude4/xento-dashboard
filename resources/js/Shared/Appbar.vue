<template>
    <v-app-bar color="white" app flat>
        <v-btn icon @click.stop="activateDrawer" class="d-flex d-sm-none">
            <i class="bx bx-menu-alt-left bx-sm"></i>
        </v-btn>
        <v-btn icon @click="$emit('mini')" class="d-none d-sm-flex">
            <i class="bx bx-menu-alt-left bx-sm"></i>
        </v-btn>
  
        <global-search></global-search>

        <div class="icon d-flex d-md-none mx-8">
            <i class="bx bx-search"></i>
        </div>

        <v-spacer></v-spacer>
       
       <shopping-cart></shopping-cart>

       <global-notification></global-notification>

        <avatar></avatar>
    </v-app-bar>
</template>

<script>
import Avatar from '../Components/Avatar.vue';
import GlobalNotification from '../Components/GlobalNotification.vue';
import GlobalSearch from '../Components/GlobalSearch.vue';
import ShoppingCart from '../Components/GlobalShoppingCart.vue';
export default {
  components: { ShoppingCart, GlobalSearch, GlobalNotification, Avatar },
    data() {
        return {
            search: "",
            drawer: false,
        };
    },
    methods: {
        activateDrawer() {
            this.$emit("drawer");
            this.$emit("activeSidebar");
        },
    },
};
</script>

<style></style>
