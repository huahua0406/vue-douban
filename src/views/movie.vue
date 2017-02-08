<template>
  <div id="movie" class="movie">
     <section>
      <hgroup class="title">
        <h2>{{in_theaters.title}}</h2>
        <a class="more" href="javascript:;">更多</a>
      </hgroup>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in in_theaters.subjects">
          <a href="javascript:;"> 
            <div :style="{backgroundImage: 'url('+item.images.large+')', 
              width: '100px', height: '142px'}" class="cover">
            </div>
            <h3>{{item.title}}</h3> 
            <div class="rank">
              <span class="star">
                <i class="rating-star star-full"></i>
                <i class="rating-star star-full"></i>
                <i class="rating-star star-full"></i>
                <i class="rating-star star-gray"></i>
                <i class="rating-star star-gray"></i>
              </span>
              <span>{{item.rating.average}}</span>
            </div>
          </a>
        </swiper-slide>
      </swiper>
    </section>
    <section>
      <hgroup class="title">
        <h2>{{top250.title}}</h2>
        <a class="more" href="javascript:;">更多</a>
      </hgroup>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in top250.subjects">
          <a href="javascript:;"> 
            <div :style="{backgroundImage: 'url('+item.images.large+')', 
              width: '100px', height: '142px'}" class="cover">
            </div>
            <h3>{{item.title}}</h3> 
            <div class="rank">
              <span class="star">
                <i class="rating-star star-full"></i>
                <i class="rating-star star-full"></i>
                <i class="rating-star star-full"></i>
                <i class="rating-star star-gray"></i>
                <i class="rating-star star-gray"></i>
              </span>
              <span>{{item.rating.average}}</span>
            </div>
          </a>
        </swiper-slide>
      </swiper>
    </section>
    <section>
      <hgroup class="title">
        <h2>{{coming_soon.title}}</h2>
        <a class="more" href="javascript:;">更多</a>
      </hgroup>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in coming_soon.subjects">
          <a href="javascript:;"> 
            <div :style="{backgroundImage: 'url('+item.images.large+')', 
              width: '100px', height: '142px'}" class="cover">
            </div>
            <h3>{{item.title}}</h3> 
            <div class="rank">
              <span class="star">
                <i class="rating-star star-full"></i>
                <i class="rating-star star-full"></i>
                <i class="rating-star star-full"></i>
                <i class="rating-star star-gray"></i>
                <i class="rating-star star-gray"></i>
              </span>
              <span>{{item.rating.average}}</span>
            </div>
          </a>
        </swiper-slide>
      </swiper>
    </section>

  </div>
</template>

<script>

export default {
  name: 'movie',
  data () {
    return {
      in_theaters: [],
      top250: [],
      coming_soon: [],
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
      /*
      axios.get(API_PROXY+'https://api.douban.com/v2/movie/coming_soon')
      .then(function(res) {
        console.log(res.data)
        this.movies = res.data;
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
      */
        this.$http.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters').then(res => {
            // success callback
            // console.log(res.data);
            this.in_theaters = res.data;
        }, res => {
            // error callback
        });
        this.$http.get(API_PROXY+'https://api.douban.com/v2/movie/top250').then(res => {
            // success callback
            // console.log(res.data);
            this.top250 = res.data;
        }, res => {
            // error callback
        });
        this.$http.get(API_PROXY+'https://api.douban.com/v2/movie/coming_soon').then(res => {
            // success callback
            // console.log(res.data);
            this.coming_soon = res.data;
        }, res => {
            // error callback
        })
        
    }
  }
  
</script>

<style scoped lang="scss">

</style>
