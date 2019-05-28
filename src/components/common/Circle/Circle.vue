<template>
    <div class="circle">
        <slot name="icon"></slot>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({

})
export default class Circles extends Vue {

}
</script>

<style lang="scss" scoped>
.circle{
    border: 2px solid black;
    border-radius: 50%;
    background: #fff;
}
</style>
