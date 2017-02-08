<template>
  <div id="search" class="search" v-show="this.$store.state.searchFlag">
   	<div class="search-box">
		<div class="top-bar">
			<a href="javascript:;" @click="close()">关闭</a>
			<form class="search-input">
				<input type="search">
			</form>
		</div>
		<div class="menu-box">
			<ul>
				<li>
					<a href="javascript:;" >
						<strong :style="{color : colorArr[0]}">电影</strong>
						<span>影院热映</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<strong :style="{color : colorArr[1]}">电视</strong>
						<span>正在热播</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<strong :style="{color : colorArr[2]}">图书</strong>
						<span>畅销排行</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<strong :style="{color : colorArr[3]}">同城</strong>
						<span>周末活动</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<strong :style="{color : colorArr[4]}">小组</strong>
						<span>志趣相投</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<strong :style="{color : colorArr[5]}">音乐</strong>
						<span>新碟榜</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<strong :style="{color : colorArr[6]}">阅读</strong>
						<span>电子书</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<strong :style="{color : colorArr[7]}">游戏</strong>
						<span>虚拟世界</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<strong :style="{color : colorArr[8]}">应用</strong>
						<span>玩手机</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<strong :style="{color : colorArr[9]}">东西</strong>
						<span>心爱之物</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<strong :style="{color : colorArr[10]}">FM</strong>
						<span>红心歌单</span>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<strong :style="{color : colorArr[11]}">市集</strong>
						<span>购买原创</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="quick-menu">
			<ul>
				<li>
					<a href="#">注册账号</a>
				</li>
				<li>
					<a href="#">登录豆瓣</a>
				</li>
				<li>
					<a href="#">桌面版网站</a>
				</li>
				<li>
					<a href="#">使用豆瓣App</a>
				</li>
			</ul>
		</div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      colorArr:[
      			'rgb(35, 132, 232)',
      			'rgb(122, 106, 219)',
      			'rgb(122, 106, 219)',
      			'rgb(230, 70, 126)',
      			'rgb(230, 70, 126)',
      			'rgb(244, 143, 46)',
      			'rgb(159, 120, 96)',
      			'rgb(87, 116, 197)',
      			'rgb(87, 116, 197)',
      			'rgb(225, 100, 77)',
      			'rgb(64, 207, 169)',
      			'rgb(66, 189, 86)',
      		]
    	}
  	},
 	mounted(){
		
	},
	methods: {
		close(){
			this.$store.dispatch('closeSearch');
			// console.log(this.$store.state.searchFlag);
			// console.log('关闭搜索栏');
		}
	}
}
</script>


<style scoped lang="scss">
.inline-close { letter-spacing: -3px; font-size: 0;}
.search-box {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: #fff;
    .top-bar {
        a { position: absolute; left: 18px; top: 20px; color: #42bd56; font-size: 16px; text-decoration: none;}
        .search-input {
            border-bottom: 1px solid #f3f3f3;
            padding: 15px 18px 15px 60px;
            input { box-sizing: border-box; -webkit-appearance: none; border: 0; width: 100%;
            height: 31px; padding: 0 10px; border-radius: 3px; font-size: 14px; line-height: normal;
            background: #f3f3f3 url(../assets/img/search2.png) no-repeat center center;
            background-size: 17.33333px;;
            }
        }
    }
    .menu-box {
        padding: 12px 0;
        ul {
            @extend .inline-close;
            li {
                display: inline-block;
                width: 33.3%;
                letter-spacing: normal;
                a {
                    display: block;
                    padding: 12px 0;
                    text-align: center;
                    text-decoration: none;
                    strong { display: block; font-size: 24px; line-height: 28px;font-weight: 400;}
                    span { display: block; height: 17px; color: #999; font-size: 12px;}
                }
            }
        }
    }
    .quick-menu {
        border-top: 1px solid #f3f3f3;
        ul {
            @extend .inline-close;
            li {
                display: inline-block;
                border-bottom: 1px solid #f3f3f3;
                width: 50%;
                padding: 13px 0;
                font-size: 15px;
                letter-spacing: normal;
                a {
                    display: block;
                    color: #42bd56;
                    text-align: center;
                    text-decoration: none;
                }
            }
            li:nth-child(odd) a { border-right: 1px solid #e5e5e5;}
        }
    }
}
</style>
