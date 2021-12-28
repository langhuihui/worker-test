<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { reactive } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
const workers: Array<{ msg: number; }> = reactive([]);
let i = 0
setInterval(() => {
  i++
  const w = new Worker('./worker.js');
  const c = new MessageChannel();
  workers.push({ msg: 0 });
  const d = workers[workers.length - 1];
  c.port1.onmessage = (e) => {
    d.msg = e.data;
  };
  w.postMessage(null, [c.port2]);
  document.title = i.toString();
}, 100);
</script>

<template>
  <div>
    <HelloWorld v-for="w in workers" :msg="w.msg.toString()" />
  </div>
</template>

<style>
div {
  display: flex;
  flex-wrap: wrap;
}
</style>
