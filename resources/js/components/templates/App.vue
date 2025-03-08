
<template>
    <v-app>
        <v-app-bar density="compact" color="rgba(72, 169, 166)" prominent>
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>VUE3/LARAVEL9 TEMPLATE</v-toolbar-title>
            <v-spacer></v-spacer>
            {{ user?.name }}
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" temporary>
            <v-list density="compact" nav>
                <v-list-item  v-for="(item, i) in items" :key="i"  :value="item"  color="rgba(72, 169, 166)" :to="item.path">
                    <template v-slot:prepend>
                        <v-icon :icon="item.icon"></v-icon>
                    </template>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <v-container fluid>
                <router-view v-slot="{ Component }">
                    <transition name="slide-fade" mode="out-in">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import {ref} from 'vue'

const drawer = ref(false)
const user = ref(false)
const items = ref(
[
    { title: 'Home', path: '/',icon: 'mdi-home'  },
])


</script>

<style>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>