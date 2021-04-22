<template>
  <div class="input-group col">
    <div class="films-switcher-text">{{ message }}</div>
    <input
      type="radio"
      class="btn-check"
      :name="options"
      :id="firstOption"
      :value="firstOption"
      autocomplete="off"
      :checked="isChecked(firstOption)"
      @change="changeRadioInput(firstOption)"
    />
    <label class="btn btn-primary films-radio-left" :for="firstOption">{{
      firstButtonTitle
    }}</label>
    <input
      type="radio"
      class="btn-check"
      :name="options"
      :id="secondOption"
      :value="secondOption"
      autocomplete="off"
      :checked="isChecked(secondOption)"
      @change="changeRadioInput(secondOption)"
    />
    <label class="btn btn-primary films-radio-right" :for="secondOption">{{
      secondButtonTitle
    }}</label>
  </div>
</template>

<script>
import { ON_CHANGE_INPUT } from "@/core/events";

export default {
  name: "FilterButtons",
  props: {
    message: String,
    firstButtonTitle: String,
    secondButtonTitle: String,
    firstOption: String,
    secondOption: String,
    options: String,
    checked: String
  },
  methods: {
    changeRadioInput(inputValue) {
      this.$emit(ON_CHANGE_INPUT, inputValue);
    },
    isChecked(option) {
      return this.checked === option;
    }
  }
};
</script>

<style scoped>
input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
  border: none;
}

.films-radio-left {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.films-radio-right {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

input[type="radio"]:not(:checked) + label {
  background-color: rgba(61, 61, 61, 0.7);
}

input[type="radio"] + label {
  margin-top: auto;
  margin-bottom: auto;
  font-size: 10px;
  padding: 5px 12px;
}

.films-switcher-text {
  font-size: 10px;
  padding-right: 10px;
  margin-bottom: auto;
  margin-top: auto;
  color: white;
}
</style>
