<template>
  <div class="flex flex-col overflow-hidden h-screen mx-auto w-full bg-white">
    <LayoutHeader />

    <main class="flex h-full overflow-hidden">
      <LayoutSidebar />
      <router-view />
    </main>
  </div>
</template>

<script>
import LayoutHeader from "@/components/LayoutHeader.vue";
import LayoutSidebar from "@/components/LayoutSidebar.vue";
export default {
  name: "DefaultLayout",
  components: {
    LayoutHeader,
    LayoutSidebar,
  },
};
</script>
