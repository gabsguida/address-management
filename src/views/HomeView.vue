<template>
  <section class="flex flex-col flex-auto space-y-3 w-full">
    <span class="flex items-center space-x-3">
      <UiForm label="Insira o CEP" />
      <UiButton @click="addNewAddress" class="bg-primary-500 py-3.5 px-5">
        <UiIconPlus class="mr-2" />
        Adicionar endereço
      </UiButton>
    </span>
  </section>
</template>

<script>
import UiForm from "@/components/UiForm.vue";
import UiIconPlus from "@/components/UiIconPlus.vue";
import UiButton from "@/components/UiButton.vue";
export default {
  name: "HomeView",
  components: {
    UiForm,
    UiIconPlus,
    UiButton,
  },
  data() {
    return {
      cep: "",
      cepList: [],
      addressList: [],
    };
  },
  methods: {
    addNewAddress() {
      // TODO
    },
  },
};
</script>
