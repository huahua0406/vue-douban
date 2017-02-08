<template>
	<div id="footer" class="footer" v-show="!this.$store.state.searchFlag">
		<figure class="slogan">
			<img src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png" width="48">
			<figcaption>
				<strong>豆瓣</strong>
				<p>我们的精神角落</p>
			</figcaption>
		</figure>
		<div class="link2ios">
			<a href="javascript:;">免费下载 iOS / Android 版客户端</a>
		</div>
	</div>
</template>	

<script>

export default {
  name: 'footer',
  data(){
  	return{

  	}
  }
}
</script>

<style lang="scss">
.footer {
    margin-top: 30px;
    text-align: center;
    .slogan {
        margin-bottom: 15px;
        letter-spacing: -3px;
        font-size: 0;
        img { display: inline-block; margin-right: 12px; vertical-align: middle;}
        figcaption {
            display: inline-block;
            height: 48px;
            text-align: left;
            vertical-align: middle;
            letter-spacing: normal;
            strong { line-height: 28px; font-size: 24px;}
            p { line-height: 20px; font-size: 14px;}
        }
    }
    .link2ios a { color: #42bd56; font-size: 15px; text-decoration: none;}
}
</style>