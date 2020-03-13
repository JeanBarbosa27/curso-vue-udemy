<template>
  <v-card class="card" :tile="true">
    <v-card-title 
      class="card__title"
      :class="{ 
        portfolio: module === 'portfolio',
        stocks: module === 'stocks',
      }"
    >
      <slot name="title"></slot>
      <span class="card__subtitle">
        <slot name="subtitle"></slot>
      </span>
    </v-card-title>
    <div class="card__content">
      <slot name="content"></slot>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    module: {
      type: String
    }
  }
}
</script>

<style lang="scss">

.card {
  &__title {
    padding: 10px;
    color: #ffffff;
    background: #777777;
    line-height: 1em;

    &.portfolio {
      background: #2196f3;
    }

    &.stocks {
      background: #487a3e;
    }
  }

  &__subtitle {
    padding-left: 1ch;
    font-size: 0.8em;
  }
}
</style>