<template>
    <div>
        <inertia-head title="Administrator dashboard" />

        <div class="flex justify-space-between">
            <h1 class="font-bold text-h5 my-2">Dashboard</h1>
            <bread-crumbs :items="items"></bread-crumbs>
        </div>

        <v-container>
            <v-row>
                <v-col
                    cols="12"
                    md="3"
                    v-for="folder in folders"
                    :key="folder.id"
                >
                    <vs-card>
                        <template #title>
                            <p class="font-semibold">{{ folder.title }}</p>
                            <h3 class="font-bold text-h4">
                                {{ folder.total }}
                            </h3>
                        </template>

                        <template #text>
                            <div class="flex my-auto">
                                <i
                                    :class="
                                        folder.icon + ' indigo--text my-auto'
                                    "
                                ></i>
                                <span
                                    class="ml-1 indigo--text my-auto caption"
                                    >{{ folder.percentage }}</span
                                >
                                <div></div>
                            </div>
                        </template>
                        <template #interactions>
                            <vs-button danger icon>
                                <i class="bx bx-heart"></i>
                            </vs-button>
                            <vs-button class="btn-chat" shadow primary>
                                <i class="bx bx-chat"></i>
                                <span class="span"> 54 </span>
                            </vs-button>
                        </template>
                    </vs-card>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" md="4" v-for="n in 3" :key="n">
                    <timeline></timeline>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import BreadCrumbs from "../../Components/BreadCrumbs.vue";
import Timeline from "../../Components/Timeline.vue";
import AppLayoutVue from "../../Layouts/AppLayout.vue";

export default {
    components: { Timeline, BreadCrumbs },
    layout: AppLayoutVue,

    data: () => ({
        items: [
            {
                text: "Home",
                disabled: true,
                href: "",
            },
            {
                text: "Dashboard",
                disabled: false,
                href: "breadcrumbs_dashboard",
            },
        ],

        folders: [
            {
                id: 1,
                title: "Total Users",
                total: "44,728",
                percentage: "5% Last week",
                icon: "bx bx-up-arrow-circle",
            },
            {
                id: 2,
                title: "Total Profit",
                total: "67,987",
                percentage: "0.75% Last 6 days",
                icon: "bx bx-down-arrow-circle",
            },
            {
                id: 3,
                title: "Total Expenses",
                total: "$76,965",
                percentage: "0.9% Last 9 days",
                icon: "bx bx-left-arrow-circle",
            },
            {
                id: 4,
                title: "Total Cost",
                total: "$76,965",
                percentage: "0.6% Last year",
                icon: "bx bx-right-arrow-circle",
            },
        ],
    }),
};
</script>
