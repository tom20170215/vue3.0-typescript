<template>
    <div class="new-habit" v-if='!!habitList[index]'>
        <!-- 图标 -->
        <section class="icon">
            <router-link :to="{path: `/edit/icon/`,query:{mode}}">
                <Circles>
                    <icon :name="iconComputed" slot="icon"></icon>
                </Circles>
            </router-link>
        </section>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {State} from 'vuex-class';
import {Field} from 'vant';

import { HabitList } from '@/store/state';
import Circles from '@/components/common/Circle/Circle.vue';
import config from '@/config';
import _ from '@/utils';

@Component({
    components: {
        [Field.name]: Field,
        Circles,
    }
})
export default class NewHabit extends Vue {
    @State private habitList!: HabitList[];

    private id!: number;
    private mode!: string;
    private index!: number;

    private data() {
        const id: number = parseInt((this.$route.query.id) as string, 10);
        const mode = id > config.habitLibrary.length ? 'edit' : 'new';
        return {
            mode,
        }
    }

    private created() {
        if (this.mode === 'edit') {
            // 编辑习惯
            this.id = parseInt((this.$route.query.id) as string, 10);
            return;
        }
        // 创建习惯
        const list = this.habitList;
        for (let i = 0;i < list.length;i++) {
            if (list[i].mode === 'creating') {
                this.id = list[i].id;
                this.index = i;
                return;
            }
        }
    } 
    
    // 计算当前图标
    private get iconComputed() {
        console.log(this.habitList);
        console.log(this.index);
        const habit = this.habitList[this.index];
        return habit.iconName;
    }
}
</script>
