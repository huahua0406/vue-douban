<template>
  <div id="home" class="home">
      <section class="quick-nav">
		<ul>
			<li><a href="javascript:;">影院热映</a></li>
			<li><a href="javascript:;">生活在别处</a></li>
			<li><a href="javascript:;">没能说出口的感谢</a></li>
			<li><a href="javascript:;">使用豆瓣App</a></li>
		</ul>
	</section>
	<section class="art-list">
		<ul>
			<li v-for="item in list.list">
				<a>
					<div class="top">
						<div class="user">
							<span class="face" :style="{backgroundImage: 'url('+item.face+')'}">
								<span></span>
							</span>
							<span class="name">{{item.name}}</span>
						</div>
						<div class="tag"><i>{{item.tag}}</i></div>
					</div>
					<div class="center">
						<div :style="{backgroundImage: 'url('+item.cover+')'}" class="img" v-show="item.cover">
							<div></div>
						</div>
						<h3>{{item.title}}</h3>
						<p style="-webkit-box-orient: vertical;">{{item.cont}}</p>
					</div>
					<div class="bottom">
						<span class="like icon-box">{{item.like}}</span>
					</div>
				</a>
			</li>
		</ul>
		<div class="bottom-box">
			<div class="show-more">显示更多内容</div>
		</div>
	</section>
  </div>
</template>

<script>
export default {
  	name: 'home',
  	data () {
    	return {
      		list: []
    	}
  	},
  	mounted(){
		this.$nextTick(function(){
		  	this.fetchData();
		})
	},
	methods: {
		fetchData(){
			this.$http.get('/api/home').then(res => {
		        // console.log(res.data);
		        this.list = res.data.data;
		    }, err => {
		        // error callback
		        console.log(err)
		    })
		}
	}
}
</script>
<style lang="scss" scoped>
$active-bg: #f8f8f8;
.line-spacing { line-height: 22px; word-wrap: break-word;}
.icon-box { display: inline-block; margin: 10px 15px 0 0; font-size: 12px; color: #d4d4d4;}
.home{
    .quick-nav {
        margin: 20px 18px 0;
        padding-top: 6px;
        ul {
            letter-spacing: -3px;
            font-size: 0;
            li {
                display: inline-block;
                width: 50%;
                padding: 3px;
                box-sizing: border-box;
                font-size: 15px;
                letter-spacing: normal;
                a { overflow: hidden; display: block; border-radius: 2px; padding: 12px 0; max-width: 100%; background-color: #f6f6f6; color: #494949; text-align: center; line-height: 20px; text-overflow: ellipsis; white-space: nowrap; word-wrap: normal; text-decoration: none;}
            }
        }
    }
 	    .art-list {
	        li {
	            border-bottom: #e3e3e3 solid 1px;
	            a{
	                display: block;
	                padding: 15px 18px 18px;
	                color: #494949;
	                text-decoration: none;
	                &:active { background-color: $active-bg;}
	                .top {
	                    display: flex;
	                    height: 20px;
	                    justify-content: space-between;
	                    -webkit-box-align: center;
	                    align-items: center;
	                    .user {
	                        .face{
	                            display: inline-block;
	                            width: 18px;
	                            height: 18px;
	                            vertical-align: top;
	                            border-radius: 100%;
	                            margin-right: 6px;
	                            background-position: center center;
	                            background-repeat: no-repeat;
	                            background-size:cover;
	                            span { padding-top: 100%;}
	                        }
	                        .name { display: inline-block; font-size: 12px;}
	                    }
	                    .tag {
	                        height: 100%;
	                        i { 
							    border: 1px solid #ccc;
							    border-radius: 3px;
							    padding: 3px 10px;
							    color: #aaa;
							    font-size: 12px;
							    font-style: normal;
							    box-sizing: border-box;
	                        }
	                    }
	                }
	                .center:after { content: ""; display: block;  clear: both; visibility: hidden; height: 0;}
	                .center {
	                    clear: both;
	                    margin-top: 10px;
	                    h3 { font-size: 18px; @extend .line-spacing;}
	                    p{	overflow: hidden;
						    display: -webkit-box;
						    -webkit-box-orient: vertical;
						    -webkit-line-clamp: 3;
						    margin-top: 10px;
						    text-align: justify;
						    color: #aaa;
						    font-size: 13px;
						    line-height: 22px;
						    word-wrap: break-word;}
	                    .img {
	                        float: right;
	                        margin-left: 3%;
	                        width: 23.6%;
	                            background-size:cover;
	                            background-position: center center;
	                            background-repeat: no-repeat;
	                        div { padding-top: 100%;}
	                    }
	                }
	                
	                .bottom {
	                    .like:before { display: inline-block; margin: -1px 4px 0 0; width: 12px; height: 12px; background: url(https://img3.doubanio.com/f/talion/625409635d46500ea6f2f461cbb19cf657c09683/pics/card/ic_like_feed.svg) center no-repeat; content: ''; vertical-align: middle;}
	                }
	                
	            }
	        }
	        .bottom-box {
	            text-align: center;
	            .show-more { display: inline-block; border: limegreen solid 1px; margin: 20px auto 0; padding: 5px 10px; color: limegreen; font-size: 14px; border-radius: 3px;}
	        }
    	}
   
	}
</style>
