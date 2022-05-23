<template>
  <button
    :disabled="disabled"
    @click="$emit('click', $event)"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
    :type="type"
    :class="{
      'pointer-events-none opacity-50 cursor-not-allowed': disabled,
      relative: to != null,
    }"
    class="transition rounded-lg focus:outline-none active:outline-none inline-flex items-center whitespace-nowrap focus:bg-opacity-10 hover:bg-opacity-60 text-white font-bold rounded-lg"
  >
    <router-link
      v-if="to != null"
      :to="to"
      class="absolute inset-0 z-10 w-full h-full"
    ></router-link>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "UiButton",
  emits: ["click", "focus", "blur"],
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
      default: "button",
    },
    to: {
      type: String,
      required: false,
    },
  },
};
</script>
