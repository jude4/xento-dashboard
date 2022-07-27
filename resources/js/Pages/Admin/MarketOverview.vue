<template>
    <div>
        <div class="flex justify-space-between">
            <h1 class="font-bold text-h5 my-2">Market Overview</h1>
            <bread-crumbs :items="items"></bread-crumbs>
        </div>
    </div>
</template>

<script>
import BreadCrumbs from "../../Components/BreadCrumbs.vue";
import AppLayoutVue from "../../Layouts/AppLayout.vue";
export default {
    components: { BreadCrumbs },
    layout: AppLayoutVue,
    data() {
        return {
            items: [
                {
                    text: "Dashboard",
                    disabled: true,
                    href: "",
                },
                {
                    text: "Market overview",
                    disabled: false,
                    href: "breadcrumbs_dashboard",
                },
            ],
        };
    },
};
</script>

<style></style>
