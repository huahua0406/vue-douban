<template>
	<div id="header" class="header" v-show="!this.$store.state.searchFlag">
		<div class="logo">
			<h1><router-link to="/home">豆瓣</router-link></h1>
		</div>
		<nav class="nav">
			<ul>
				<li><router-link to="/movie">电影</router-link></li>
				<li><router-link to="/book">图书</router-link></li>
				<li><router-link to="/radio">广播</router-link></li>
				<li><router-link to="/team">小组</router-link></li>
			</ul>
			<span class="search" @click="open()">搜索</span>
		</nav>
	</div>
</template>	

<script>

export default {
  name: 'header',
  data(){
  	return{

  	}
  },
  methods:{
  	open(){
  		this.$store.dispatch('openSearch');
		// console.log(this.$store.state.searchFlag);
		// console.log('打开搜索栏');
  	}
  }
}
</script>
<style lang="scss">
	.header {
		display: -webkit-box;
		display: flex;
		position: fixed;
		top: -1px;
		right: 0;
		left: 0;
		z-index: 9;
		border-bottom: 1px solid #f3f3f3;
		padding: 0 18px;
		height: 47px;
		justify-content: space-between;
		webkit-box-align: center;
		align-items: center;
		background-color: #fff;
		-webkit-box-shadow: 0 1px 5px #f0f0f0;
		box-shadow: 0 1px 5px #f0f0f0;

		.logo {
			h1 a{
				display: block;
	  			width: 46px;
	  			height: 22px;
	  			background:url(../assets/img/logo.png) no-repeat;
	  			background-size: cover;
	  			text-indent: -9999px;
  			}
		}

		.nav{
			white-space: nowrap;
			
			ul{
				display: inline-block;
            	vertical-align: middle;
				letter-spacing: -3px;
				font-size: 0;

				li{
					display: inline-block;
	                margin-right: 19px;
	                font-size: 15px;
	                letter-spacing: normal;
                	a{ 
                		text-decoration: none;
                	}
                	&:nth-child(1) a { color: rgb(35, 132, 232);}
                	&:nth-child(2) a { color: rgb(159, 120, 96);}
                	&:nth-child(3) a { color: rgb(228, 168, 19);}
                	&:nth-child(4) a { color: rgb(42, 184, 204);}
				}
			}
			.search{
				display: inline-block;
				margin-top: 4px;
				width: 24px;
				height: 18px;
				background:url(../assets/img/search.png) no-repeat;
				background-size: cover; 
				text-indent: -9999px;
				vertical-align: middle;
			}
		}

	}
</style>