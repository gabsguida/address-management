<template>
  <aside
    class="flex flex-col justify-between h-full overflow-visible transition-colors space-y-3 bg-gray-100 px-2.5 pb-4 pt-9 w-24"
  >
    <span class="flex items-center flex-col space-y-16">
      <UiButton to="/">
        <UiIconSearch />
      </UiButton>
      <UiButton to="/">
        <UiIconFolder />
      </UiButton>
    </span>
    <UiButton class="bg-dark py-4" to="/">
      <UiIconFilter class="mx-auto" />
    </UiButton>
  </aside>
</template>

<script>
import UiButton from "@/components/UiButton.vue";
import UiIconFilter from "@/components/UiIconFilter.vue";
import UiIconSearch from "@/components/UiIconSearch.vue";
import UiIconFolder from "@/components/UiIconFolder.vue";
export default {
  name: "LayoutSidebar",
  components: {
    UiButton,
    UiIconFilter,
    UiIconSearch,
    UiIconFolder,
  },
};
</script>
