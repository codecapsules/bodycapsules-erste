<template>
  <header class="w-full text-sm">
    <div class="fixed top w-full h-16 bg-gray-300 border border-gray-100">
      <div class="flex h-full justify-between items-center px-4">
        <div>
          <a href="">bodyC</a>
        </div>
        <div class="space-x-2">
          <a href="" :key="menuItem" v-for="menuItem in menuItems">{{ menuItem }}</a>
        </div>
        <div>
          <ActionButton />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue';
export default {
  name: "MainNav",
  components: {
    ActionButton,
},
  data() {
    return {
      compagny: "bodyC",
      url: "https://careers.google.com",
      menuItems: [
        "Teams",
        "Locations",
        "Life at Bc",
        "How we hire",
        "Students",
        "Jobs"
      ]
    }
  }
};
</script>
