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
    width: 3.5rem;
    height: 3.5rem;
    margin: auto;
    border: 2px solid black;
    border-radius: 50%;
    background: #fff;
    svg{
        height: 100%;
    }
}
</style>
