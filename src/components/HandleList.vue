<template>
  <div class="container" id="HandleList" v-cloak>
    <div class="hello">
      <h1>{{ msg }}</h1>
    </div>
    <p v-show="handledFile.length>0">预处理记录 ({{totalSize}})</p>
    <v-pagination :total="total" :current-page='current' @pagechange="pagechange"></v-pagination>
    <table>
      <thead>
                  <tr>
                      <th>编号</th>
                      <th>文件路径</th>
                      <th>IP</th>
                      <th>时间</th>
                      <th>拷贝</th>
                      <th>操作</th>
                  </tr>
      </thead>
      <tbody>
        <template>
            <tr v-for="(file, index) in handledFile" :key='index'>
                <td data-label="编号">{{file.FileJavaID}}</td>
                <td data-label="路径">{{file.FileURL}}</td>
                <td data-label="IP">{{file.IP}}</td>
                <td data-label="时间">{{file.CreateTime}}</td>
                <td data-label="拷贝">{{file.IsCopy}}</td>
                <td data-label="操作">
                  <button v-on:click="viewFile(file)" title="查看">查看</button>
                  <button v-on:click="downloadFile(file)" title="下载">下载</button>
                </td>
            </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios'
import pagination from '@/components/pagination'

export default {
  name: 'HandleList',
  // el: '#HandleList', // 挂载DOM元素的ID
  data: function () {
    return {
      page: 1, // 显示的是哪一页
      pageSize: 10, // 每一页显示的数据条数
      total: 1, // 记录总数
      maxPage: 9, // 最大页数
      Files: [],
      msg:'',
      current:1
    }
  },
  methods: {
    viewFile: function (file) { // 查看
      var strUrl = window.location.protocol + '//' + window.location.host + '/Handle/getViewURL?handleCode=' + file.FileJavaID + '&viewType=View&inOrOut=Both'
      axios.get(strUrl).then(function (result) {
        var dataStr = result.data
        console.log(dataStr)
        window.open(dataStr.Result.lan, 'blank')
      })
    },
    downloadFile: function (file) { // 下载
      var strUrl = window.location.protocol + '//' + window.location.host + '/Handle/getViewURL?handleCode=' + file.FileJavaID + '&viewType=Download&inOrOut=Both'
      axios.get(strUrl).then(function (result) {
        var dataStr = result.data
        console.log(dataStr)
        window.open(dataStr.Result.lan, 'blank')
      })
    },
    removeFile: function (file) { // 删除
      var _files = this.Files
      _files.forEach(function (item, index) {
        if (item.ID === file.ID) {
          _files.splice(index, 1)
          // /////app.$data.total--
        }
      })
    }, // pagehandler方法 跳转到page页
    pageHandler: function (page) {
      console.log(page)
      this.page = page
      var url = '/apis/List/getHandleList/?pageIndex=' + page + '&pageSize=10'
      var _this = this
      axios.get(url).then(function (result) {
        var temp_datas = result.data.split('|_CUT_|')
        console.log(result.data)
        var dataStr = temp_datas[1].replace(/\\/g, '\\\\')
        var _files = JSON.parse(dataStr)
        _this.$data.total = parseInt(temp_datas[0])
        _this.$data.Files = _files
      })
    },
    pagechange: function (current) {
      this.pageHandler(current)
    }
  },
  // 用于计算属性，属性的计算是基于它的依赖缓存(如vue实例中的Files)
  // 只有当Files数据变化时,才会重新取值
  computed: {
    handledFile: function () { // 筛选未完成的记录
      return this.Files.filter(function (File) { // filter过滤器
        return true
      })
    },
    totalSize: function () {
      return this.$data.total
    }
  },
  created: function () {
    this.pageHandler(1)
  },
  components: {
    'v-pagination': pagination
  }
}
</script>
<style>
table {
  border: 1px solid #ccc;
  width: 100%;
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 auto;
}
table tr {
  border: 1px solid #ddd;
  padding: 5px;
}
table th, table td {
  padding: 10px;
  text-align: center;
}
table th {
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
}
@@media screen and (max-width: 768px) {
  table {
  border: 0;
}
table thead {
  display: none;
}
table tr {
  margin-bottom: 10px;
  display: block;
  border-bottom: 2px solid #ddd;
}
table td {
  display: block;
  text-align: right;
  font-size: 13px;
  border-bottom: 1px dotted #ccc;
}
table td:last-child {
  border-bottom: 0;
}
table td:before {
  content: attr(data-label);
  float: left;
  text-transform: uppercase;
  font-weight: bold;
}
} .note {
  max-width: 80%;
  margin: 0 auto;
}
</style>
