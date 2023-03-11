<script setup lang="ts">
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} · Vegeval` : 'Vegeval';
    }
})
</script>

<template>
    <div>
        <AppHeader />
        <NuxtPage />
        <AppFooter />
    </div>
</template>