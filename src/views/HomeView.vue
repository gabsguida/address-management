<template>
  <section class="flex flex-col space-y-3 w-1/2 lg:w-1/3">
    <span class="grid grid-cols-1 lg:grid-cols-2 items-center gap-3 w-full">
      <UiForm
        label="Insira o CEP"
        v-model="cep"
        maxLength="9"
        @input="setCepValue"
        @keyup.enter="addNewAddress"
        :error="cepHasError"
      />
      <UiButton
        @click="addNewAddress"
        class="bg-primary-500 py-3.5 px-5 text-center"
      >
        <UiIconPlus class="mr-2" />
        Adicionar endereço
      </UiButton>

      <p class="text-sm text-red-500" v-if="messageError != null && cep != ''">
        {{ messageError }}
      </p>

      <div class="flex flex-col items-start space-y-3 w-full lg:col-span-2" v-if="isLoading">
        <div
          v-for="item in 2"
          :key="item"
          class="
            h-8
            animate-pulse
            bg-black
            rounded
            opacity-25
            w-1/2
          "
        ></div>
      </div>

      <p
        v-for="cep in cepList"
        :key="cep.cep"
        class="lg:col-span-2 flex items-center font-bold"
      >
        <UiIconPlace />
        <span class="text-dark">CEP</span>&nbsp;
        <span class="text-gray-200">{{
          cep.cep.split("-")[0] + "-" + cep.cep.split("-")[1]
        }}</span>
      </p>

      <span class="lg:col-span-2 justify-self-end">
        <UiButton
          v-if="cepList.length > 0"
          class="bg-primary-500 py-3.5 px-5 w-72 text-center"
          @click="generateAddress"
          >Gerar endereços
        </UiButton>
      </span>

      <div
        v-if="addressList.length > 0"
        class="
          lg:col-span-2
          border-t border-t-gray-500
          pt-8
          flex flex-col
          space-y-3
        "
      >
        <div
          v-for="address in addressList"
          :key="address.cep"
          class="
            bg-white
            shadow-md
            rounded-lg
            flex
            items-center
            space-x-3
            px-4
            py-2
          "
        >
          <UiIconPlace />
          <span class="flex items-center border-r-2 border-gray-100">
            <span>
              <p class="text-xl text-gray-400 font-bold">
                {{ address.logradouro + ", " + address.bairro }}
              </p>
              <p class="text-dark">
                {{ address.localidade + " - " + address.uf }}
              </p>
            </span>

            <p class="text-primary-500 whitespace-pre pr-2">
              {{ address.cep }}
            </p>
          </span>

          <UiButton @click="removeAddress(address)" title="Remover endereço">
            <UiIconTrash />
          </UiButton>
        </div>
      </div>
    </span>
  </section>
</template>

<script>
import UiForm from "@/components/UiForm.vue";
import UiIconPlus from "@/components/UiIconPlus.vue";
import UiButton from "@/components/UiButton.vue";
import UiIconPlace from "@/components/UiIconPlace.vue";
import UiIconTrash from "@/components/UiIconTrash.vue";

import jsonpAdapter from "axios-jsonp";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    UiForm,
    UiIconPlus,
    UiButton,
    UiIconPlace,
    UiIconTrash,
  },
  data() {
    return {
      cep: "",
      cepList: [],
      addressList: [],
      isLoading: false,
      messageError: null,
    };
  },
  computed: {
    cepHasError() {
      return !this.cep || this.cep.length < 9;
    },
  },
  methods: {
    async addNewAddress() {
      if (this.cep == "" || this.cep == null) {
        this.messageError = "Por favor, informe um CEP para adicionar endereço";
        return;
      }

      this.isLoading = true;
      this.messageError = null;

      try {
        const resp = await axios({
          url: `https://viacep.com.br/ws/${this.cep}/json`,
          adapter: jsonpAdapter,
          callbackParamName: "callback",
        });

        if (resp.data.erro == "true") {
          throw "CEP informado é inválido";
        }

        if (this.cepList.findIndex((cep) => cep.cep === resp.data.cep) > -1) {
          this.messageError = `O CEP ${resp.data.cep} já foi inserido na lista de endereços`;
          return;
        }

        this.cep = "";

        this.cepList.push(resp.data);
      } catch (error) {
        console.error(error);

        if (typeof error === "string") {
          this.messageError = error;
        }
      }
     // this.isLoading = false;
    },
    formatZipCode(zip) {
      if (zip.length === 8 && !zip.includes("-")) {
        const regex = /(\d{5})(\d{3})/;
        return zip.replace(regex, "$1-$2");
      }
      const regex = /[-]/g;
      if (zip.length < 8 && zip.includes("-")) return zip.replace(regex, "");
      return zip;
    },
    generateAddress() {
      this.cepList.map((cep) => {
        if (
          this.addressList.findIndex((address) => cep.cep === address.cep) ===
          -1
        ) {
          this.addressList.push(cep);
        }
      });

      this.cepList = [];
    },
    setCepValue(event) {
      this.cep = this.formatZipCode(event.target.value);

      if (this.cep != "") {
        this.messageError = null;
      }
    },
    removeAddress(address) {
      const index = this.addressList.findIndex(
        (addressItem) => addressItem.cep === address.cep
      );

      if (index > -1) {
        this.addressList.splice(index, 1);
      }

      // TODO: inserir mensagem de success (toast)
    },
  },
};
</script>
