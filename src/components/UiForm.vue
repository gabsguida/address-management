<template>
  <fieldset
    :class="{ 'pointer-events-none cursor-not-allowed opacity-50': disabled }"
    class="
      inline-block
      p-0.5
      text-sm
      font-light
      text-gray-500
      dark:text-gray-200
    "
  >
    <div class="relative">
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :maxLength="maxLength"
        @input="updateInput"
        placeholder=" "
        class="
          peer
          block
          h-full
          min-h-10
          w-full
          appearance-none
          rounded-[10px]
          border-2 border-gray-200
          bg-transparent
          px-2.5
          text-sm text-gray-300
          focus:border-primary-500 focus:outline-none focus:ring-0
          2xl:min-h-13
        "
      />
      <label
        :for="id"
        class="
          absolute
          top-2
          left-1
          z-10
          origin-[0]
          -translate-y-4
          scale-75
          transform
          bg-white
          px-2
          text-sm text-gray-300
          duration-300
          peer-placeholder-shown:top-1/2
          peer-placeholder-shown:-translate-y-1/2
          peer-placeholder-shown:scale-100
          peer-focus:top-2
          peer-focus:-translate-y-4
          peer-focus:scale-75
          peer-focus:px-2
          peer-focus:text-primary-500
        "
      >
        {{ label }}
      </label>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: "UiForm",
  props: {
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    maxLength: {
      type: String,
      default: "",
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
      this.$emit("input", event);
    },
  },
};
</script>
