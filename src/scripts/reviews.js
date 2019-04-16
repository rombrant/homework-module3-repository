import Vue from "vue";
import Flickity from 'vue-flickity';
import axios from "axios";

const review = {
  template: "#review",
  props: {
    review: Object
  }
};


new Vue({
    el: "#reviews-item",
    template: "#reviews-components",
    components: {
      Flickity,
      review
    },
    props: {
        name: String,
        occ: String,
        authorPic: String
      },
    data() {
      return {
        reviews: "",
        flickityOptions: {
          initialIndex: 0,
          prevNextButtons: false,
          pageDots: false,
          groupCells: true
          
          
        }
      }
    }, 
    methods: {
      makeArrWithRequiredImages(data) {
        return data.map(item => {
          const absolutePic = `https://webdev-api.loftschool.com/${item.photo}`;
          item.photo = absolutePic;
  
          return item;
        });
      },
      next() {
        this.$refs.flickity.next();
      },
      
      previous() {
        this.$refs.flickity.previous();
      }
    },
    created() {
      axios.get('https://webdev-api.loftschool.com/reviews/121')
      .then(response => {
        const data = response.data;
        this.reviews = this.makeArrWithRequiredImages(data);
      });
     }
  });