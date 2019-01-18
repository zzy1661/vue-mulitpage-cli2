<template>
	<div>
		<canvas id="canvas" width="1170" height="760"></canvas>
	</div>
</template>

<script>
	import WordCloud from 'wordcloud'

	export default {
		data() {
			return {
				list: [
//				{ word: 'web', weight: 11363.549769256868 },
  { word: 'javascript', weight: 6374.387938746363 },
  { word: 'js', weight: 5869.602153541771 },
  { word: 'css', weight: 5353.077164030095 },
  { word: 'java', weight: 5153.510690809675 },
  { word: 'html', weight: 4249.591959164242 },
  { word: 'react', weight: 3885.676625644652 },
  { word: 'html5', weight: 3838.7198084163183 },
  { word: 'vue', weight: 3333.9340232117256 },
  { word: 'jquery', weight: 3005.2363026133867 },
  { word: 'css3', weight: 2653.0601734008806 },
  { word: 'app', weight: 2347.8408614167083 },
  { word: 'ui', weight: 2077.839162353787 },
  { word: 'mysql', weight: 2042.6215494325363 },
  { word: 'spring', weight: 1890.0118934404502 },
  { word: 'ajax', weight: 1678.7062159129464 },
  { word: 'linux', weight: 1655.2278072987795 },
  { word: 'angular', weight: 1549.5749685350274 },
  { word: 'php', weight: 1549.5749685350274 },
  { word: 'h5', weight: 1467.4005383854428 },
  { word: 'webpack', weight: 1443.9221297712756 },
  { word: 'android', weight: 1432.182925464192 },
  { word: 'ios', weight: 1408.704516850025 },
  { word: 'git', weight: 1256.094860857939 },
  { word: 'node', weight: 1232.6164522437718 },
  { word: 'mvc', weight: 1220.8772479366883 },
  { word: 'pc', weight: 1209.1380436296047 },
  { word: 'python', weight: 1173.9204307083542 },
  { word: 'sql', weight: 1162.1812264012706 },
  { word: 'es6', weight: 1162.1812264012706 },
  { word: 'angularjs', weight: 1138.7028177871036 },
  { word: 'http', weight: 1103.485204865853 },
  { word: 'oracle', weight: 1091.7460005587693 },
  { word: 'nodejs', weight: 1080.0067962516857 },
  { word: 'bootstrap', weight: 974.3539574879339 },
  { word: 'redis', weight: 939.1363445666833 },
  { word: 'w3c', weight: 915.6579359525163 },
  { word: 'gulp', weight: 915.6579359525163 },
  { word: 'mybatis', weight: 845.222710110015 },
  { word: 'native', weight: 833.4835058029314 },
  { word: 'xml', weight: 798.2658928816809 },
  { word: 'api', weight: 774.7874842675137 },
  { word: 'json', weight: 739.5698713462631 },
  { word: 'experience', weight: 692.613054117929 },
  { word: 'reactjs', weight: 633.9170325825113 },
  { word: 'sdk', weight: 586.9602153541771 },
  { word: 'mobile', weight: 516.5249895116758 },
  { word: 'nosql', weight: 504.7857852045923 },
  { word: 'bug', weight: 504.7857852045923 },
  { word: 'tomcat', weight: 493.04658089750876 } ]
			}
		},
		mounted() {
			WordCloud(document.getElementById('canvas'), {
				list: this.list.map(i => [i.word, i.weight]),
				gridSize: 8,
				weightFactor: 0.03,
				fontFamily: 'Hiragino Mincho Pro, serif',
				color: 'random-dark',
				backgroundColor: '#f0f0f0',
				rotateRatio: Math.random()*90
			});

		},
		methods: {

		}
	}
</script>

<style>

</style>