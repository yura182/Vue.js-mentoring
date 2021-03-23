<template>
    <div class="input-group col">
      <div  class="films-switcher-text">{{ message }}</div>
        <input
          type="radio"
          class="btn-check"
          name="options"
          id="option1"
          autocomplete="off"
          checked
        />
        <label class="btn btn-primary films-radio-left" for="option1">{{ firstButtonTitle }}</label
        >
        <input
          type="radio"
          class="btn-check"
          name="options"
          id="option2"
          autocomplete="off"
        />
        <label class="btn btn-primary films-radio-right" for="option2">{{ secondButtonTitle }}</label
        >
      </div>
</template>

<script>
export default {
  props: {
    message: String,
    firstButtonTitle: String,
    secondButtonTitle: String
  }
}
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
  background-color: rgba(85, 85, 85, 0.8);
}

input[type="radio"]+ label {
  margin-top: auto;
  margin-bottom: auto;
}

.films-switcher-text{
  padding-right: 20px;
  margin-bottom: auto;
  margin-top: auto;
}
</style>
