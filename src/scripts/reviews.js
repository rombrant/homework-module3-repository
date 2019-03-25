import Vue from "vue";
import { stringify } from "postcss";



new Vue({
    el: "#reviews-item",
    template: "#reviews-components",
    props: {
        name: String,
        occ: String,
        author: Object
      },
    data() {
      return {
        reviews: {}
      };
    },
    created() {
      const data = require("../data/reviews.json");
      
      console.log(JSON.stringify(data));
      this.reviews = data;


      //console.log(data[1].author-name);
    }
  });