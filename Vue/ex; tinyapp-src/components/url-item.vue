<template>
  <li>
    <span>{{url.name}}</span> |
    <a v-bind:href="url.longUrl">{{url.id}}</a> |
    <span>{{url.longUrl}}</span> |
    <a @click="handleEdit(url.id)" href="javascript:;">Edit</a>
  </li>
</template>

<script>
export default {
  name: 'UrlItem',
  props: {
    url: {
      type: Object,
      required: true
    }
  },
  watch: {
    url (newValue, oldValue) {
      this.url = newValue
      this.url.name = this.url.name + ' Homepage'
    }
  },
  methods: {
    handleEdit (id) {
      this.$emit('edit', id)
    }
  }
}
</script>

<style scoped>
span {
  color: red;
}
</style>
