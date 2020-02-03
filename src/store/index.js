import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: [
      {
        id: 1,
        name: 'Hobbs & Shaw Full Hd Trailer',
        description: 'Hobbs and Shaw Come face to face , but this time against a black superman',
        image: '../assets/img1.jpeg',
        video: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
      },
      {
        id: 2,
        name: 'X-men Dark Pheonix',
        description: 'X-men have to fight the enemy but , They have to fight to jeny first',
        image: '../assets/img2.jpg',
        video: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
      },
      {
        id: 3,
        name: 'Halloween',
        description: 'Its Halloween time , Enjoy',
        image: '../assets/img3.jpg',
        video: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
      },
      {
        id: 4,
        name: 'Hustle',
        description: 'Its Hustle for action',
        image: '../assets/img4.jpg',
        video: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
      },
      {
        id: 5,
        name: 'Intruder',
        description: 'Intruder , Science Film ',
        image: '../assets/img5.jpg',
        video: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
      },
      {
        id: 6,
        name: 'Men in Black',
        description: 'Men in Black is Back Again',
        image: '../assets/img6.jpg',
        video: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
      },
      {
        id: 7,
        name: 'Video Seven',
        description: 'Video Seven description',
        image: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
