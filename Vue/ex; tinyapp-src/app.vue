<template>
  <div class="container">
    <h1>{{title}}</h1>

    <p>{{urlObject}}</p>
    <input v-model="urlObject.name" type="text" placeholder="Enter a name">
    <input v-model="urlObject.longUrl" @keyup.enter="handleSubmit" type="text" placeholder="Enter your URL">

    <url-item :url="targetUrl" @edit="handleEdit"></url-item>

    <span v-if="urlDatabase.length === 0">There is no URL yet!</span>
    <span v-else>Total Url: {{urlDatabase.length}}</span>
  </div>
</template>

<script>
import _ from 'lodash'
import UrlItem from '@/components/url-item'

export default {
  name: 'app',
  components: {
    UrlItem
  },
  data () {
    return {
      title: 'VueJS Tinyapp',
      urlDatabase: [{
        id: 'test',
        name: 'Google',
        longUrl: 'http://google.ca'
      }],
      urlObject: {
        name: '',
        longUrl: 'http://'
      },
      targetUrl: {
        id: 'test',
        name: 'Google',
        longUrl: 'http://google.ca'
      }
    }
  },
  created () {
    setTimeout(() => {
      this.targetUrl = {
        id: 'test',
        name: 'Facebook',
        longUrl: 'http://facebook.ca'
      }
    }, 3000)
  },
  methods: {
    handleSubmit (e) {
      if (this.urlObject.id) {
        this.urlDatabase = _.reject(this.urlDatabase, (item) => { return item.id === this.urlObject.id })
      } else {
        this.urlObject.id = this.generateId()
      }

      this.urlDatabase.push(this.urlObject)
      this.urlObject = { name: '', longUrl: 'http://' }
    },
    handleEdit (id) {
      let urlObject = _.find(this.urlDatabase, { id: id })
      this.urlObject = _.cloneDeep(urlObject)
    },
    generateId () {
      var text = ''
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      }

      return text
    }
  }
}
</script>

<style>
.container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
