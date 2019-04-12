import Vue from "vue";
import axios from "axios";
import user from '../admin/store/modules/user';

const skill = {
  template: "#skill",
  props: {
    title: String,
    percent: Number,
    skillId: Number,
    categoryId: Number
  },
  methods: {
    drawColoredCircle() {
      const circle = this.$refs["color-circle"];
      const dashArray = getComputedStyle(circle).getPropertyValue("stroke-dasharray");
  
      const cirPercent = (parseInt(dashArray) / 100) * (100 - this.percent);

      circle.style.strokeDashoffset = cirPercent;
    }
  },
  mounted() {
    this.drawColoredCircle();
  }
};

const skillsRow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: {
    category: Object,
    categoryId: Number
  },
data() {
  return {
    skills: {}
    };
  },
created() {
      axios.get(`https://webdev-api.loftschool.com/skills/121`).then(response=>{
      this.skills = response.data;
    });
  }
};

new Vue({
  el: "#skills-component",
  template: "#skills-list",
  components: {
    skillsRow
  },
  data() {
    return {
      categories: {}
    };
  },
  created() {
    axios.get(`https://webdev-api.loftschool.com/categories/121`).then(response=>{
        this.categories = response.data;
    });
    axios.get(`https://webdev-api.loftschool.com/skills/121`).then(response=>{
        this.skills = response.data;
    });
  }
});