<template>
  <div id="book" class="book">
     <section v-for="item in swiper1">
      <hgroup class="title">
        <h2>{{item.headline}}</h2>
        <a class="more" href="javascript:;">更多</a>
      </hgroup>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="list in item.rank">
        	<a href="javascript:;"> 
	        	<div :style="{backgroundImage: 'url(https://'+list.domain+'.doubanio.com/lpic/'+list.cover+'.jpg)', 
	        		width: '100px', height: '142px'}" class="cover">
	        	</div>
        		<h3>{{list.title}}</h3>	
        		<div class="rank">
					<span class="star">
						<i class="rating-star star-full"></i>
						<i class="rating-star star-full"></i>
						<i class="rating-star star-full"></i>
						<i class="rating-star star-gray"></i>
						<i class="rating-star star-gray"></i>
					</span>
					<span>{{list.star}}</span>
				</div>
        	</a>
        </swiper-slide>
      </swiper>
    </section>

    <section>
		<hgroup class="title">
			<h2>{{swiper2.headline}}</h2>
			<a class="more" href="javascript:;">更多</a>
		</hgroup>
		<figure class="recommend">
			<a href="javascript:;">
				<img class="cover"  width="100" :src="'https://img3.doubanio.com/view/freyr_page_photo/raw/public/1213.jpg'">
				<figcaption class="info">
					<div class="title">
						<strong>{{swiper2.title}}</strong>
						<em>{{swiper2.price}}</em>
					</div>
					<p>{{swiper2.content}}</p>
				</figcaption>
			</a>
		</figure>
		<!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="list in swiper2.rank">
        	<a href="javascript:;"> 
	        	<div :style="{backgroundImage: 'url(https://'+list.domain+'.doubanio.com/view/freyr_page_photo/raw/public/'+list.cover+'.jpg)', 
	        		width: '100px', height: '142px'}" class="cover">
	        	</div>
        		<h3>{{list.title}}</h3>	
        		<div class="rank">
					<span>&yen;{{list.price}}</span>
				</div>
        	</a>
        </swiper-slide>
      </swiper>
	</section>
	<section>
		<hgroup class="title">
			<h2>{{findBook.title}}</h2>
		</hgroup>
		<swiper :options="swiperOption" class="find-book">
	        <swiper-slide class="tags-box">
	        	<ul>
	        		<li v-for="list in findBook.list1">
	        			<a :style="rndColor()">
	        				{{list}}
	        			</a>
	        		</li>
	        	</ul>
	        	<ul>
	        		<li v-for="list in findBook.list2">
	        			<a :style="rndColor()">
	        				{{list}}
	        			</a>
	        		</li>
	        	</ul>
	        </swiper-slide>
        </swiper>
	</section>
	<section>
		<hgroup class="title">
			<h2>{{catMenu.title}}</h2>
		</hgroup>
		<nav class="category">
			<ul>
				<li v-for="list in catMenu.list">
					<a href="javascript:;">{{list}}<i></i></a>
				</li>
			</ul>
		</nav>
	</section>
  </div>
</template>

<script>

export default {
	name: 'book',
	data () {
		return {
		  	books: [],
		  	swiper1: {},
		  	swiper2: {},
		  	findBook: {},
		  	catMenu: {},
		  	swiperOption: {
		      	slidesPerView: 'auto',
	        	freeMode: true,
	        	observer: true,
	        	observeParents: true,
	        	resistanceRatio:0
		    }
		}
	},
	mounted(){
		this.$nextTick(function(){
		  	this.fetchData();
		})
	},
	computed(){
		
	},
	methods: {
		fetchData(){
		    this.$http.get('/api/book').then(res => {
		        // console.log(res.data);
		        this.books = res.data.data;
		        this.swiper1 = this.books.swiper;
		        this.swiper2 = this.books.swiper2;
		        this.findBook = this.books.findBook;
		        this.catMenu = this.books.catMenu;
		    }, err => {
		        // error callback
		        console.log(err)
		    })
		  	// 不使用axios
		  	// var data = require('../json/book.json')
		  	// console.log(data)

		},
		rnd(n, m){
			return parseInt(Math.random() * (m - n) + n);
		},
		rndColor: function(){
			 return {
                color:'rgba('+this.rnd(0,255)+','+this.rnd(0,255)+','+this.rnd(0,255)+',1)'
            }

		}
	}
  

}	
</script>

<style lang="scss">
	.book,.movie{
		padding-top: 10px;
		section{
			margin-bottom: 30px;
			.title {
	            margin: 0 auto 15px;
	            width: 90%;
	            h2 { overflow: hidden; display: inline-block; max-width: 550px; font-size: 18px;}
	            .more { float: right; color: #42bd56; font-size: 14px; text-decoration: none;}
	        }
	        .swiper-container{
	        	margin-left: 5%;
    			width: 95%;
    			.swiper-slide{
    				margin-right: 10px;
				    text-align: center;
				    font-size: 18px;
				    width: 100px;
				    a{
				    	display: block;
					    color: #111;
					    text-decoration: none;
				    	.cover{
				    		background-size: cover;
				    	}
				    	h3{
				    		margin-top: 12px;
						    white-space: nowrap;
						    overflow: hidden;
						    text-overflow: ellipsis;
						    font-size: 15px;
				    	}
				    	.rank {
	                        .star {
	                            .rating-star {
	                                display: inline-block;
	                                margin-right: 1px;
	                                width: 10px;
	                                height: 10px;
	                                background-size: 10px 10px;
	                                background-color: transparent;
	                                background-repeat: no-repeat;
	                                &.star-full { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==");}
	                                &.star-gray { background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=");}
	                            }
	                        }
	                        span { color: #aaa; font-size: 12px;}
	                    }
				    }
    			}
	        }
	        .recommend {
	            margin: 0 5%;
	            a {
	                overflow: hidden;
	                display: block;
	                margin-bottom: 20px;
	                color: #494949;
	                text-decoration: none;
	                .cover { float: left; margin-right: 15px;}
	                .info {
	                    overflow: hidden;
	                    .title {
	                        width: auto;
	                        strong { font-size: 19px;}
	                        em { float: right; color: #E76648; font-size: 16px; line-height: 22px;}
	                    }
	                    p { color: #9B9B9B; font-size: 13px; line-height: 1.5;}
	                    @media screen and (max-width: 400px) {
	                        p {
	                            display: -webkit-box;
								-webkit-box-orient: vertical;
								-webkit-line-clamp: 5;
								overflow: hidden;
	                        }
	                    }
	                    @media screen and (max-width: 360px) {
	                        p {
	                            display: -webkit-box;
	                            overflow: hidden;
	                            -webkit-box-orient: vertical;
	                            -webkit-line-clamp: 4;
	                        }
	                    }
	                }
	            }
	        }

	        .find-book{
	            margin-left: 5%;
	            .tags-box{
	                width: auto;
	                text-align: left;
	                ul {
	                    letter-spacing: -3px;
	                    font-size: 0;
	                    white-space: nowrap;
	                    li {
	                        display: inline-block;
	                        margin: 0 8px 8px 0;
	                        font-size: 15px;
	                        letter-spacing: normal;
	                        a { overflow: auto; display: block; border-radius: 5px; border: solid 1px; padding: 0 20px; height: 50px; line-height: 50px;  text-decoration: none;}
	                    }
	                }
	            }
	        }
	        .category {
	            margin-left: 5%;
	            ul {
	                letter-spacing: -3px;
	                font-size: 0;

	                li {
	                    display: inline-block;
	                    -webkit-box-sizing: border-box;
	                    box-sizing: border-box;
	                    border-bottom: solid 1px #eee;
	                    width: 50%;
	                    height: 42px;
	                    font-size: 15px;
	                    letter-spacing: normal;
	                    vertical-align: top;
	                    a {
	                        display: block;
	                        height: 42px;
	                        line-height: 42px;
	                        color: #42bd56;
	                        text-decoration: none;
	                        i { float: right; margin-top: 1rem; border-right: solid 1px #ccc; border-bottom: solid 1px #ccc; width: 9px; height: 9px; color: #ccc; font-weight: bold; transform: rotate(-45deg);}
	                    }
	                }
	                li:nth-child(odd) a { padding-right: 7%;}
	                li:nth-child(even) {
	                    border-left: solid 1px #eee;
	                    a { padding: 0 7%;}
	                }
	                li:nth-child(1),
	                li:nth-child(2) { border-top: solid 1px #eee;}
	            }
	        }
		}
	}
</style>
