<template>
  <img :src="imgLink" alt="" class="w-8 h-8 object-contain">
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imgLink: "https://cdn-icons-png.flaticon.com/128/892/892721.png"
    }
  }
}
</script>