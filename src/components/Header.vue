<template>
    <header>
        <aside v-if="!!headerInfo.left">
            <Icon :name="headerInfo.left"></Icon>
        </aside>
        <div v-else></div>
        <h3>{{headerInfo.title}}</h3>
        <aside v-if="!!headerInfo.right">
            <Icon :name="headerInfo.right"></Icon>
        </aside>
        <div v-else></div>
    </header>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {State} from 'vuex-class';

import { HeaderInfo } from '@/store/state';

import Icon from '@/components/common/Icon/HeaderIcon';

@Component({
    components: {
        Icon,
    },
})
export default class Header extends Vue {
    @State private headerInfo!: HeaderInfo;
}
</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';
header{
    width: 100%;
    height: 3.5rem;
    display: grid;
    grid-template-columns: 3rem auto 3rem;
    align-items: center;
    text-align: center;
}
</style>

