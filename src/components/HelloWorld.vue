<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <div>{{msg}}</div>
</template>

<style scoped>
div {
  width: 40px;
  height: 40px;
  border: 1px solid gray;
}
</style>
