<template>
  <div>
    <div class="mb-4">
      <b-button
          class="mr-2"
          variant="primary"
          @click="componenteSelecionado = 'AlertaInfo'"
      >
        Info
      </b-button>
      <b-button
          variant="warning"
          @click="componenteSelecionado = 'AlertaAdvertencia'"
      >
        Advertência
      </b-button>
    </div>
    <transition name="slide" mode="out-in">
      <component :is="componenteSelecionado"></component>
    </transition>
  </div>
</template>

<script>
  import AlertaAdvertencia from "@/components/dinamicos/AlertaAdvertencia";
  import AlertaInfo from "@/components/dinamicos/AlertaInfo";
  export default {
    name: "ComponenteDinamico",
    components: { AlertaAdvertencia, AlertaInfo },
    data() {
      return {
        componenteSelecionado: "AlertaInfo"
      }
    }
  }
</script>
