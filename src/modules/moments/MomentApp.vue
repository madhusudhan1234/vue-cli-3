<template>
  <div>
    <router-link :to="{ name: 'moment:create' }">
      <button v-if="this.$route.name !== 'moment:create'" type="button" class="btn btn-primary">Add</button>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "moment-app",
  };
</script>