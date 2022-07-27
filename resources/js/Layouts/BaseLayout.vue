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
            <v-main>
                <v-container fluid fill-height>
                    <slot></slot>
                </v-container>
            </v-main>
            <application-footer></application-footer>
        </div>
    </v-app>
</template>

<script>
import ApplicationFooter from "../Shared/ApplicationFooter.vue";
export default {
    components: { ApplicationFooter },
    data() {
        return {
            loading: true,
            percent: 50,
        };
    },
    mounted() {
        this.openLoading();
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
