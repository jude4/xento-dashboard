<template>
    <v-app class="application">
        <div v-if="loading" class="my-auto">
            <v-main>
                <v-container
                    fluid
                    fill-height
                    class="align-center justify-center my-auto"
                >
                    <div ref="target" id="target" class="center"></div>
                </v-container>
            </v-main>
        </div>
        <div v-else>
            <appbar
                app
                @mini="mini = !mini"
                @drawer="drawer = !drawer"
            ></appbar>

            <v-navigation-drawer
                :expand-on-hover="mini ? true : false"
                mini-variant-width="80"
                :mini-variant.sync="mini"
                app
                v-model="drawer"
                class=""
            >
                <sidebar :mini="mini" :activeSidebar="activeSidebar"></sidebar>
            </v-navigation-drawer>

            <!-- <v-navigation-drawer app right></v-navigation-drawer> -->
            <v-main>
                <v-container fluid>
                    <slot></slot>
                </v-container>
            </v-main>

            <application-footer></application-footer>
        </div>
    </v-app>
</template>

<script>
import Appbar from "../Shared/Appbar.vue";
import Sidebar from "../Shared/Sidebar.vue";
import ApplicationFooter from "../Shared/ApplicationFooter.vue";
export default {
    components: { Appbar, Sidebar, ApplicationFooter },
    data() {
        return {
            mini: false,
            drawer: false,
            activeSidebar: true,
            loading: true,
            value: 50,
            percent: 0,
        };
    },
    computed: {
        absolute() {
            return this.$vuetify.breakpoint.name != "xs" ? false : false;
        },
    },

    mounted() {
        this.openLoading();
    },

    created() {
        if (this.$vuetify.breakpoint.name != "xs") this.drawer = true;
    },
    methods: {
        openLoading() {
            const loading = this.$vs.loading({
                percent: this.percent,
            });
            const interval = setInterval(() => {
                if (this.percent <= 100) {
                    loading.changePercent(`${this.percent++}%`);
                }
            }, 40);
            setTimeout(() => {
                loading.close();
                clearInterval(interval);
                this.percent = 0;
                this.loading = false;
            }, 4800);
        },
    },
};
</script>

<style>
.application {
    background-color: #f0f0f5 !important;
    overflow: none !important;
}

.vs-input {
    width: 350px !important;
}
</style>
