<template>
  <div
    class="flex flex-col space-x-3 overflow-hidden h-screen mx-auto w-full bg-white"
  >
    <LayoutHeader />

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import LayoutHeader from "@/components/LayoutHeader.vue";
export default {
  name: "DefaultLayout",
  components: {
    LayoutHeader,
  },
};
</script>
