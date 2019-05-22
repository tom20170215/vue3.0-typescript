<template>
    <section>
        <!-- footer icon-->
        <router-link v-if="!!path" :to="path">
            <span @click="changeActivePage">
                <icon
                    :name="!isActived ? name.defaultName : name.activedName"
                    style="width:2rem;height:2rem;"
                ></icon>
                <p :class="{active: isActived}">{{tagName}}</p>
            </span>
        </router-link>
        <!-- header icon -->
        <div v-else>
            <icon :name="name" style="width:1.6rem;height:1.8rem;"></icon>
        </div>
    </section>
</template>

<style lang="scss" scoped src="./style.scss">
</style>
