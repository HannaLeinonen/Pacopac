

<template>
    <div class="breadcrumbs">
        <RouterLink v-for="(crumb, index) in crumbs" :key="index" :to="crumb.path" :class="{ 'breadcrumb-current': index === crumbs.length - 1 }">{{ crumb.label }}</RouterLink>
    </div>
</template>

<script>
export default {
  props: {
    crumbs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.breadcrumbs {
    margin-left: 0.3rem;
    font-family: "Kulim Park", sans-serif;
  font-weight: 400;
  font-style: normal;
}

a {
  text-decoration: none;
  color: black;
}
.breadcrumb-current {
    font-weight: 700;
}
</style>
