import Vue from "vue";
import { stringify } from "postcss";
import Flickity from 'vue-flickity';


new Vue({
    el: "#reviews-item",
    template: "#reviews-components",
    components: {
      Flickity
    },
    props: {
        name: String,
        occ: String,
        authorPic: String
      },
    data() {
      return {
        flickityOptions: {
          prevNextButtons: false,
          pageDots: false,
          groupCells: true,
          
          reviews: []
        }
      }
    }, 
    
    methods: {
      makeArrWithRequiredImages(data) {
        return data.map(item => {
          const requiredPic = require(`../images/content/${item.authorPic}`);
          item.authorPic = requiredPic;
  
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
      const data = require("../data/reviews.json");
      
      console.log(JSON.stringify(data));
      this.reviews = this.makeArrWithRequiredImages(data);
    }
  });