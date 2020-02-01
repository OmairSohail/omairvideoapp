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
         <router-link class="watchnow" to="/video/">Watch Now</router-link>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {},
  data () {
    return {
      mykey: 'Welcome',
      videos: [
        {
          id: 1,
          name: 'Hobbs & Shaw Full Hd Trailer',
          description: 'Hobbs and Shaw Come face to face , but this time against a black superman',
          image: '../assets/img1.jpeg'
        },
        {
          id: 2,
          name: 'Video Two',
          description: 'Video two description',
          image: '../assets/img2.jpg'
        },
        {
          id: 3,
          name: 'Video Three',
          description: 'Video three description',
          image: '../assets/img3.jpg'
        },
        {
          id: 4,
          name: 'Video Four',
          description: 'Video four description',
          image: '../assets/img4.jpg'
        },
        {
          id: 5,
          name: 'Video Five',
          description: 'Video Five description',
          image: '../assets/img5.jpg'
        },
        {
          id: 6,
          name: 'Video Six',
          description: 'Video six description',
          image: '../assets/img6.jpg'
        },
        {
          id: 7,
          name: 'Video Seven',
          description: 'Video Seven description',
          image: '../assets/img7.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.video-container{
}

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
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
}
</style>
