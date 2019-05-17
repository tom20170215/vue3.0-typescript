import {Component, Vue, Prop} from 'vue-property-decorator';

import template from './Icon.vue';

@Component({
    name: 'HeaderIcon',
    mixins: [template],
})
export default class HeaderInfo extends Vue {
    @Prop() private name!: string;
    @Prop() private path!: string;
}
