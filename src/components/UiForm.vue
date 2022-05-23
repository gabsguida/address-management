<template>
  <form>
    <div class="relative">
      <input
        :type="type"
        class="block px-2.5 py-3.5 w-full text-sm text-gray-300 bg-transparent rounded-[10px] border-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-primary-500 peer"
        placeholder=" "
        :value="value"
        @input="$emit('input', $event)"
      />
      <label
        class="absolute text-sm text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >{{ label }}</label
      >
    </div>
  </form>
</template>

<script>
// TODO: ajustar o componente usando o input em slot
export default {
  name: "UiForm",
  emits: ["input", "changeValue"],
  model: {
    prop: "value",
    event: "changeValue",
  },
  props: {
    label: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
    value: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      required: true,
      default: "form",
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>
