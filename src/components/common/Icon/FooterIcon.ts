import { Component, Vue, Prop } from "vue-property-decorator";
import { Mutation } from "vuex-class";

import template from "./Icon.vue";

@Component({
  name: "FooterIcon",
  mixins: [template],
})
export default class FooterIcon extends Vue {
  @Prop() private name!: object;
  @Prop() private tagName!: string;
  @Prop() private isActived!: boolean;
  @Prop() private path!: string;
  @Prop() private id!: number;

  @Mutation private getActivePage!: (id: number) => void;
  @Mutation private changeHeader!: (id: number) => void;

  private changeActivePage(): void {
    const id = this.id;
    if (this.isActived) {
      return;
    } else {
      this.getActivePage(id);
      this.changeHeader(id);
    }
  }
}
