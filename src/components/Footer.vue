<template>
    <footer>
        <Icon
            v-for="item in activePage"
            :key="item.id"
            :tagName="item.tagName"
            :isActived="item.isActived"
            :path="item.path"
            :name="item.name"
            :id="item.id"
        ></Icon>
    </footer>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class';

import { PageInfo } from '@/store/state';
import Icon from './common/Icon/FooterIcon';

@Component({
  components: {
    Icon,
  },
})
export default class Footer extends Vue {
  @State private activePage!: PageInfo[];
}
</script>

<style lang="scss" scoped>
    @import './../style/mixin.scss';
    footer{
        width: 100%;
        height: 3.5rem;
        @include flex-layout(space-evenly);
        background-color: $grey;
    }
</style>

