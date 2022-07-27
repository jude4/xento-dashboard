<template>
    <vs-input
        type="search"
        style="border: none"
        v-model="search"
        placeholder="Search for result..."
        icon-after
        class="mx-8 d-none d-md-flex"
    >
        <template #icon>
            <i class="bx bx-search"></i>
        </template>
    </vs-input>
</template>

<script>
export default {
    data() {
        return {
            search: ""
        }
    }
};
</script>

<style></style>
