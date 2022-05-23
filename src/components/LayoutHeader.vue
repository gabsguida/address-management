<template>
  <nav
    class="bg-tertiary-500 pl-6 flex items-center space-x-3 justify-between w-full"
  >
    <span class="flex items-center justify-start space-x-6 py-2">
      <UiIconLogo />
      <div
        class="border-2 border-white rounded-[10px] py-[10px] pl-4 w-72 text-white"
      >
        <p class="font-bold text-base">Surreal São Paulo</p>
        <p class="font-normal text-xs">VTEX</p>
      </div>
    </span>
    <div class="flex space-x-3 items-center">
      <UiButton>
        <UiIconBell />
      </UiButton>

      <div
        class="flex space-x-6 items-center border-l-2 border-l-white border-opacity-20 px-5"
      >
        <p class="font-bold text-white">Olá, Joaquim</p>
        <img
          class="rounded-full bg-white bg-opacity-40 cursor-pointer"
          src="~@/static/imgs/icons/usuario.svg"
          alt="Avatar do usuário"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import UiIconLogo from "@/components/UiIconLogo.vue";
import UiButton from "@/components/UiButton.vue";
import UiIconBell from "@/components/UiIconBell.vue";
export default {
  name: "LayoutHeader",
  components: {
    UiIconLogo,
    UiButton,
    UiIconBell,
  },
};
</script>
