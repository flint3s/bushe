<template>
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g fill="none">
            <path d="M1.5 14a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13zm.5-3.75c0 .966.784 1.75 1.75 1.75h1.5A1.75 1.75 0 0 0 7 10.25v-6.5A1.75 1.75 0 0 0 5.25 2h-1.5A1.75 1.75 0 0 0 2 3.75v6.5zm1.75.75a.75.75 0 0 1-.75-.75v-6.5A.75.75 0 0 1 3.75 3h1.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75h-1.5zM9 10.25c0 .966.784 1.75 1.75 1.75h1.5A1.75 1.75 0 0 0 14 10.25v-4.5A1.75 1.75 0 0 0 12.25 4h-1.5A1.75 1.75 0 0 0 9 5.75v4.5zm1.75.75a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-1.5z"
                  :fill="color"></path>
        </g>
    </svg>
</template>

<script lang="ts" setup>
interface Props {
    color?: string
}

const props = withDefaults(defineProps<Props>(), {
    color: "white"
})
</script>

<style scoped>
* {
    transition: all .3s ease;
}
</style>