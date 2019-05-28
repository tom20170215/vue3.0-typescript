<template>
    <div class="setting"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Setting extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.setting{
  width: 100%;
  height: calc(100vh - 7rem);
}
</style>

