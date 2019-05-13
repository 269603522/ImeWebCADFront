<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
  </div>
</template>
        <table id="example" class="display" style="width:100%">
            <thead>
            </thead>
            <tbody></tbody>
        </table>

<script>
export default {
  name: 'ReadingList',
  data () {
    return {
      msg: '图纸查询下载记录列表'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
