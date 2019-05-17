<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Collapse } from 'vant';

@Component({
  [Collapse.name]: Collapse,
  
})
export default class Home extends Vue {
}
</script>
