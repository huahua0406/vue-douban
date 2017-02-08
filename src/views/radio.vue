<template>
  <div id="radio" class="radio">
      <section class="sendRadio">
		<div class="left">
			<a href="javascript:;">
				<span class="face">
					<img src="https://img1.doubanio.com/icon/user_normal.jpg" alt="未登陆">
				</span>
				<span class="txt">登录发广播</span>
			</a>
		</div>
		<div class="right">
			<div class="icon icon-camera"></div>
			<div class="icon icon-pen"></div>
		</div>
	</section>
	<section class="diary-list">
		<ul>
			<li v-for="item in radios.radio">
				<a>
					<div class="top">
						<div class="face">
							<img src="https://img5.doubanio.com/icon/up95805238-16.jpg" alt="豆瓣" />
						</div>
						<div class="author">
							<span><strong>{{item.author}}</strong>写了日记</span>
							<span class="time">{{item.time | getLocalTime}}</span>
						</div>
					</div>
					<div class="content-box">
						<h3>{{item.title}}</h3>
						<p style="-webkit-box-orient: vertical;">{{item.content}}</p>
					</div>
					<div class="info">
						<div class="icon icon-like"><em>{{item.like}}</em></div>
						<div class="icon icon-comment"><em>{{item.comment}}</em></div>
						<div class="icon icon-retweet"><em>{{item.retweet}}</em></div>
					</div>
				</a>
			</li>
		</ul>
	</section>
  </div>
</template>

<script>
export default {
    name: 'radio',
    data () {
        return {
            radios: []
        }
    },
    mounted(){
		this.$nextTick(function(){
		  	this.fetchData();
		})
	},
	computed: {
		
	},
    filters: {
        getLocalTime : function(value){     
           return new Date(parseInt(value)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ")   
        }    
    },
	methods: {
		fetchData(){
		    this.$http.get('/api/radio').then(res => {
		        // console.log(res.data);
		        this.radios = res.data.data;
		          
		    }, err => {
		        // error callback
		        console.log(err)
		    })

		}
        
		
	}
}
</script>

<style scoped lang="scss">
.inline-close { letter-spacing: -3px; font-size: 0;}
.radio {
    .sendRadio {
        display: -webkit-box;
        display: flex;
        border-bottom: #E8E8E8 solid 1px;
        padding: 10px 18px;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        .left{
            a {
                color: #aaa;
                text-decoration: none;
                .face {
                    overflow: hidden;
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    vertical-align: middle;
                    img { width: 100%; height: 100%;}
                }
                .txt { display: inline-block; padding-left: 10px; line-height: 40px; font-size: 15px; vertical-align: middle;}
            }
        }
        .right {
            .icon { position: relative; float: right; margin-right: 10px; width: 40px; height: 40px; padding: 8px; box-sizing: border-box;
            &.icon-pen:before { background-image: url(https://img3.doubanio.com/f/talion/d9ba3fa414721588284167944c70664e685993b1/pics/card/ic_status_pen.svg);}
            &.icon-camera:before { background-image: url(https://img3.doubanio.com/f/talion/68ab505eac3e7551815c06a5e03a26a6373bb46c/pics/card/ic_status_camera.svg);}
            }
            .icon-camera { margin-right: 0;}
            .icon:before { content: ''; position: absolute; width: 24px; height: 24px; background-size: contain; background-repeat: no-repeat;}
            
        }
    }
    .diary-list {
        margin: 0 18px;
        li {
            position: relative;
            margin: 20px 0;
            padding-bottom: 20px;
            a {
                overflow: hidden;
                display: block;
                text-decoration: none;
                .top {
                    @extend .inline-close;
                    .face {
                        overflow: hidden;
                        display: inline-block;
                        width: 40px;
                        height: 40px;
                        margin-right: 10px;
                        border-radius: 50%;
                        vertical-align: middle;
                        img { width: 100%; height: 100%;}
                    }
                    
                    .author {
                        display: inline-block;
                        height: 40px;
                        vertical-align: middle;
                        span {
                            display: block;
                            height: 20px;
                            color: #aaa;
                            font-size: 17px;
                            line-height: 20px;
                            letter-spacing: normal;
                            strong { margin-right: 6px; color: #494949;}
                            &.time { font-size: 14px;}
                        }
                    }
                }
                .content-box {
                    margin: 10px 0 20px 50px;
                    border: solid 0.5px #d8d8d8;
                    border-radius: 3px;
                    padding: 15px;
                    h3 { overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; margin-bottom: 5px; color: #494949; font-size: 17px; font-weight: bold; line-height: 1.4;}
                    p { overflow: hidden; display: -webkit-box; text-overflow: ellipsis; 
                        -webkit-line-clamp: 3; -webkit-box-orient: vertical; color: #aaa; font-size: 12px; line-height: 16px; word-wrap: break-word;}
                }
                .info {
                    clear: both;
                    margin-left: 50px;
                    @extend .inline-close;
                    .icon {
                        display: inline-block;
                        margin-right: 20px;
                        font-size: 14px;
                        cursor: pointer;
                        letter-spacing: normal;
                        &.icon-like:before { background-image: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg);}
                        &.icon-comment:before { background-image: url(https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg);}
                        &.icon-retweet:before { background-image: url(https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg);}
                        em { display: inline-block; margin-left: 3px; color: #ccc;}
                    }
                    .icon:before { display: inline-block; content: ''; margin-bottom: -2px; width: 20px; height: 20px; line-height: 20px; background-position: center center; background-repeat: no-repeat; vertical-align: bottom;}
                    
                }
            }
        }
        li:after { position: absolute; left: 46px; bottom: 0; width: 100%; height: 1px; background: #E8E8E8; -webkit-transform: scaleY(0.5); content: ''; -webkit-transform-origin: 0 bottom;}
    }
    .pop-note {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        width: 100%;
        height: 100%;
        background: #fff;
        box-sizing: border-box;
        .title {
            overflow: hidden;
            border-bottom: #E8E8E8 solid 1px;
            font-size: 17px;
            cursor: pointer;
            padding: 14px 0;
            .cancel { position: relative; z-index: 2; float: left; padding: 0 18px; color: #42bd56;}
            h2 { position: absolute; left: 0; top: 0; width: 100%; padding: inherit; text-align: center;}
            .send {
                position: relative;
                z-index: 2;
                float: right;
                padding: 0 18px;
                color: #ccc;
                &.on { color: #42bd56;}
            }
        }
        .text-area {
            border-bottom: #E8E8E8 solid 1px;
            padding: 18px;
            .input-wapper {
                overflow-x: hidden;
                overflow-y: auto;
                height: 150px;
                font-size: 17px;
                line-height: 1.5;
                color: #494949;
                outline: none;
                -webkit-user-modify: read-write;
                -webkit-user-select: text;
                &[contenteditable=plaintext-only]:empty::before { content: attr(placeholder); display: block; color: #ccc;}
                div { -webkit-user-modify: read-write;}
            }
        }
        .tools-box {
            overflow: hidden;
            border-bottom: #E8E8E8 solid 1px;
            padding: 10px 18px;
            .font-count {
                float: right;
                color: #aaa;
                font-size: 15px;
                line-height: 24px;
                text-align: right;
                &.warning { color: #ff3f51;}
            }
        }
    }
}
</style>
