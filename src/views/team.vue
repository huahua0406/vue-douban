<template>
  <div id="team" class="team">
     	<section v-for="item in teams">
			<h2>{{item.headline}}</h2>
			<div class="note-list">
				<ul>
					<li v-for="list in item.list">
						<a href="javascript:;">
							<div class="title">
								<img class="group-icon" :src="'https://img3.doubanio.com/icon/'+list.face+'.jpg'" />
								<h3>{{list.title}}</h3>
								<em>{{list.num}}</em>
							</div>
							<div class="content">
								<span class="time">{{list.time}}</span>
								<p>{{list.content}}</p>
							</div>
						</a>
					</li>
				</ul>
			</div>
			<div class="to-more">
				<a href="javascript:;">更多相关小组</a>
			</div>
		</section>
  </div>
</template>

<script>
export default {
  name: 'team',
    data () {
        return {
          teams: []
        }
    },
    mounted(){
		this.$nextTick(function(){
		  	this.fetchData();
		})
	},
	computed(){
		
	},
    filters: {
        getLocalTime : function(value){     
           return new Date(parseInt(value)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ")   
        }    
    },
	methods: {
		fetchData(){
		    this.$http.get('/api/team').then(res => {
		        // console.log(res.data);
		        this.teams = res.data.data;
		          
		    }, err => {
		        // error callback
		        console.log(err)
		    })
		}
	}
}
</script>

<style scoped lang="scss">
$active-bg: #f8f8f8;
.team {
    margin-left: 18px;
    section {
        padding-top: 15px;
        h2 { display: inline-block; font-size: 18px; color: #111;}
        .note-list {
            li {
                border-bottom: #e8e8e8 solid 1px;
                a {
                    padding: 15px 15px 15px 0;
                    text-decoration: none;
                    display: block;
                    &:active { background-color: $active-bg;}
                    .title {
                            display: -webkit-box;
                            display: -webkit-flex;
                            display: -ms-flexbox;
                            display: flex;
                            margin-bottom: 10px;
                            -webkit-box-align: center;
                            -webkit-align-items: center;
                            -ms-flex-align: center;
                            align-items: center;
                        h3 { overflow: hidden; padding: 0 10px; color: #111; font-size: 18px; white-space: nowrap; text-overflow: ellipsis; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1;}
                        em { color: #ccc; font-size: 15px;}
                    }
                    .content {
                        color: #ccc;
                        font-size: 15px;
                        p { display: inline-block;}
                    }
                }
            }
        }
        .to-more {
            border-bottom: #e8e8e8 solid 1px;
            a { display: block; padding: 12px 0; color: #42bd56; font-size: 15px; text-align: center; text-decoration: none;}
        }
    }
}
</style>
