<template>
  <div>
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="title">Title</label>
          <input type="title" class="form-control" id="title" placeholder="Title">
        </div>
        <div class="form-group col-md-6">
          <label for="date">Date</label>
          <input type="date" class="form-control" id="date" placeholder="date">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-12">
          <label for="description">Description</label>
          <textarea class="form-control" id="description" rows="3"></textarea>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "create"
  }
</script>

<style scoped>

</style>