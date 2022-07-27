<template>
    <vs-sidebar
        absolute
        v-model="active"
        :hover-expand="mini ? true : false"
        :reduce="mini ? true : false"
        style="width: 260px"
        :open.sync="activeSidebar"
    >
        <template #logo>
            <h2 class="font-bold text-lg">Easycare</h2>
        </template>
        <vs-sidebar-item>
            <p class="text-sm caption">MAIN</p>
        </vs-sidebar-item>
        <inertia-link href="/dashboard">
            <vs-sidebar-item id="home">
                <template #icon>
                    <i class="bx bx-home"></i>
                </template>
                <span v-show="!mini">Dashboard</span>
            </vs-sidebar-item>
        </inertia-link>

        <vs-sidebar-item>
            <p class="text-sm caption">UI KIT</p>
        </vs-sidebar-item>

        <inertia-link href="/market-overview">
            <vs-sidebar-item id="market">
                <template #icon>
                    <i class="bx bx-grid-alt"></i>
                </template>
                <span v-show="!mini"> Market Overview </span>
            </vs-sidebar-item>
        </inertia-link>
        <vs-sidebar-item id="Music">
            <template #icon>
                <i class="bx bxs-music"></i>
            </template>
            <span v-show="!mini"> Music </span>
        </vs-sidebar-item>
        <vs-sidebar-item id="donate">
            <template #icon>
                <i class="bx bxs-donate-heart"></i>
            </template>
            <span v-show="!mini"> Donate </span>
        </vs-sidebar-item>
        <vs-sidebar-item>
            <p class="text-sm caption">PRE-BUILT PAGES</p>
        </vs-sidebar-item>
        <vs-sidebar-item id="drink">
            <template #icon>
                <i class="bx bx-drink"></i>
            </template>
            <span v-show="!mini"> Drink </span>
        </vs-sidebar-item>
        <vs-sidebar-item id="shopping">
            <template #icon>
                <i class="bx bxs-shopping-bags"></i>
            </template>
            <span v-show="!mini"> Shopping </span>
        </vs-sidebar-item>
        <vs-sidebar-item>
            <p class="text-sm caption">MISC PAGES</p>
        </vs-sidebar-item>
        <vs-sidebar-item id="chat">
            <template #icon>
                <i class="bx bx-chat"></i>
            </template>
            <span v-show="!mini"> Chat </span>
        </vs-sidebar-item>

        <vs-sidebar-item>
            <p class="text-sm caption">GENERAL</p>
        </vs-sidebar-item>
        <vs-sidebar-group>
            <template #header>
                <vs-sidebar-item arrow>
                    <template #icon>
                        <i class="bx bx-group"></i>
                    </template>
                    <span v-show="!mini"> Social media </span>
                </vs-sidebar-item>
            </template>

            <vs-sidebar-item id="Instagram">
                <template #icon>
                    <i class="bx bxl-instagram"></i>
                </template>
                <span v-show="!mini"> Instagram </span>
            </vs-sidebar-item>
            <vs-sidebar-item id="twitter">
                <template #icon>
                    <i class="bx bxl-twitter"></i>
                </template>
                <span v-show="!mini"> Twitter </span>
            </vs-sidebar-item>
            <vs-sidebar-item id="Facebook">
                <template #icon>
                    <i class="bx bxl-facebook"></i>
                </template>
                Facebook
            </vs-sidebar-item>
        </vs-sidebar-group>
        <template #footer>
            <vs-row justify="space-between">
                <vs-avatar>
                    <img src="" alt="" />
                </vs-avatar>

                <vs-avatar badge-color="danger" badge-position="top-right">
                    <i class="bx bx-bell"></i>

                    <template #badge> 28 </template>
                </vs-avatar>
            </vs-row>
        </template>
    </vs-sidebar>
</template>

<script>
export default {
    props: {
        mini: {
            type: Boolean,
            default: false,
        },

        activeSidebar: {
            type: Boolean,
            default: true,
        },
    },

    data() {
        return {
            active: "home",
        };
    },
};
</script>
