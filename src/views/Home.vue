/* eslint-disable no-trailing-spaces */
<template>
  <div class="home">
    <h1>Videos</h1>
    <h2>{{mykey}}</h2>

    <div v-for="video in videos" :key="video.id" class="video-container">
      <div class="video-box">
         <img :src="video.image" class="thumbnail" width="300px" height="150px">
         <div class="video-text">
          <h3>{{video.name}}</h3>
         <p>{{video.description}}</p>
         <router-link class="watchnow" :to="{name:'videowatch',params:{name:video.name}}">Watch Now</router-link>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data () {
    return {
      mykey: 'Welcome',
      videos: this.$store.state.videos
    }
  }
}
</script>

<style scoped>
.video-box
{
  border:1px solid black;
  padding-left:0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.2rem 0.5rem;
  border-radius:1rem;
  text-align: left;
  display:flex;
  flex-direction: row;
}

.video-box .video-text
{
margin-left:0.5rem;
}

.video-box .thumbnail{
  padding:1rem;
}

.watchnow{
  padding:1rem;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  background-color:aqua;
  color:white;
  cursor: pointer;
}
.watchnow:hover
{
  background-color:aquamarine;
}
</style>
