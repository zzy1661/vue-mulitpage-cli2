<template>
  <div class="hello">
    <h1 id="msg">{{ msg }}</h1>
    <button id="btn">change message</button>
    <button @click="changeMsg">btn2</button>
    <h2>Essential Links</h2>
    1
    <select v-model="selected">
      <optgroup :label="msg">
          <option v-for="item in [{ text: 'A', value: 'a' },{ text: 'B', value: 'b' }]">
        {{item.value}}
      </option>
      </optgroup>
      
    </select>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
	import axios from 'axios';
	import Qs from 'qs';
	var url = 'https://www.easy-mock.com/mock/5b1545f587579c1c1f75fe98/bressanone/testAxiosArr';
//	var url = 'http://localhost:8082';
	var data = {ids:[1,2],name:'test'};
//	axios.defaults.headers = {
//		'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',		
//	}
	$.post(url,data).done(res=>{console.log(res)})
	axios.post(url,	data).then(({data})=>{
		console.log(data);
	})
	setTimeout(function() {
		console.log(decodeURIComponent(Qs.stringify(data)));
		axios.post(url,	Qs.stringify(data)).then(({data})=>{
			console.log(data);
		})
	},10000)
	
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: 'a',
      options : ['a', 'b', 'c']
    }
  },
  mounted() {
  	$('#btn').on('click',function(){
  		var time = new Date();
  		$('#msg').html('aaa');
  		var time2 = new Date();
  		console.log(time2-time);
  	})
  },
  methods: {
  	changeMsg() {
  		var time = new Date();
  		this.msg = 'aaa';
  		var time2 = new Date();
  		console.log(time2-time);
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
