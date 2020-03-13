<template>
  <form class="form" @submit.prevent="formSubmit($event, inputName)">
    <div class="form__group">
      <label for="quantity" class="form__label" :class="{ error: hasError }" >{{ label }}</label>
      <input
        type="number"
        :name="inputName"
        class="form__input"
        :class="{ error: hasError }"
        value="0"
        min="0"
        @input="onInput($event, inputValue)"
      />
    </div>
    <button
      class="form__submit"
      :class="{ 
        stocks: module === 'stocks',
        portfolio: module === 'portfolio',
      }"
      :disabled="inputValue < 1"
    >
      {{ submitText }}
    </button>
  </form>
</template>

<script>

export default {
  name: 'Form',
  props: {
    module: {
      type: String,
      required: true
    },
    hasError: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
    },
    inputName: {
      type: String,
      required: true
    },
    inputValue: {
      type: Number,
      required: true
    },
    onInput: {
      type: Function,
      required: true
    },
    submitText: {
      type: String,
      default: 'Submit'
    },
    formSubmit: {
      type: Function,
      required: true
    }
  },
}
</script>

<style lang="scss">
.form {
  display: flex;
  padding: 20px;
  padding-bottom: 30px;
  justify-content: space-between;
  align-items: flex-end;

  &__group {
    flex: 0 1 70%;
  }

  &__label {
    display: block;
    margin-bottom: 10px;
    font-size: 0.6em;

    &.error {
      color: #dd5555;
    }
  }

  &__input {
    width: 100%;
    padding: 5px 0;
    font-weight: bold;
    border: 0;
    border-bottom: 1px solid #000000;
    outline: none;

    &.error {
      border-color: #dd5555;
    }
  }
    
  &__submit {
    padding: 10px;
    font-size: 0.8em;
    color: #ffffff;
    text-transform: uppercase;
    background: #777777;
    border-radius: 3px;
    flex: 0 1 10%;

    &.stocks {
      background: #487a3e;
    }

    &.portfolio {
      background: #2196f3;
    }

    &:disabled {
      color: #cccccc;
      background: #dddddd;
    }
  }    

}
</style>