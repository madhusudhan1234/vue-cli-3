<template>
  <div class="row">
    <div class="col-sm-4 padding-up-40" v-for="(moment, index) in moments" :key="index">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ moment.title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ moment.date }}</h6>
          <p class="card-text">{{ moment.description }}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        moments: [
          {
            title: 'Bungi Jump',
            description: 'I was involved in bungi Jump',
            date: '2016-01-12',
            created_at: '2018-01-23',
          },
          {
            title: 'Bungi Jump',
            description: 'I was involved in bungi Jump',
            date: '2016-01-12',
            created_at: '2018-01-23',
          },
          {
            title: 'Bungi Jump',
            description: 'I was involved in bungi Jump',
            date: '2016-01-12',
            created_at: '2018-01-23',
          },
          {
            title: 'Bungi Jump',
            description: 'I was involved in bungi Jump',
            date: '2016-01-12',
            created_at: '2018-01-23',
          },
          {
            title: 'Bungi Jump',
            description: 'I was involved in bungi Jump',
            date: '2016-01-12',
            created_at: '2018-01-23',
          },
          {
            title: 'Bungi Jump',
            description: 'I was involved in bungi Jump',
            date: '2016-01-12',
            created_at: '2018-01-23',
          },
          {
            title: 'Bungi Jump',
            description: 'I was involved in bungi Jump',
            date: '2016-01-12',
            created_at: '2018-01-23',
          },
          {
            title: 'Bungi Jump',
            description: 'I was involved in bungi Jump',
            date: '2016-01-12',
            created_at: '2018-01-23',
          },
          {
            title: 'Bungi Jump',
            description: 'I was involved in bungi Jump',
            date: '2016-01-12',
            created_at: '2018-01-23',
          },
          {
            title: 'Bungi Jump',
            description: 'I was involved in bungi Jump',
            date: '2016-01-12',
            created_at: '2018-01-23',
          },
          {
            title: 'Bungi Jump',
            description: 'I was involved in bungi Jump',
            date: '2016-01-12',
            created_at: '2018-01-23',
          },
          {
            title: 'Bungi Jump',
            description: 'I was involved in bungi Jump',
            date: '2016-01-12',
            created_at: '2018-01-23',
          },
          {
            title: 'Bungi Jump',
            description: 'I was involved in bungi Jump',
            date: '2016-01-12',
            created_at: '2018-01-23',
          },
        ],
      };
    },
  }
</script>

<style>
  .padding-up-40 {
    padding-top: 40px;
  }
</style>