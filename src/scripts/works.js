import Vue from "vue";
import axios from "axios";


const thumbs = {
  template: "#slider-thumbs",
  props: {
    works: Array,
    currentWork: Object
  }
};

const btns = {
  template: "#slider-btns"
};

const display = {
  template: "#slider-display",
  components: {
    btns,
    thumbs
  },
  props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number
  },
  computed: {
    reversedWorks() {
      const works = [...this.works];
      return works.reverse();
    }
  }
};

const tags = {
  template: "#slider-tags",
  props: {
    tags: String
  },
  computed: {
    tagArray() {
      return this.tags.split(',');
    }
  }
};

const info = {
  template: "#slider-info",
  components: {
    tags
  },
  props: {
    currentWork: Object
  }
};

new Vue({
  template: "#slider-container",
  el: "#slider-component",
  components: {
    display,
    info
  },
  data() {
    return {
      works: [],
      currentIndex: 0
    };
  },
  computed: {
    currentWork() {
      
      return this.works[this.currentIndex];
    }
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteLoopForCurIndex(value);
    }
  },
  methods: {
    makeInfiniteLoopForCurIndex(value) {
      const worksAmount = this.works.length - 1;
      if (value > worksAmount) this.currentIndex = 0;
      if (value < 0) this.currentIndex = worksAmount;
      const container = document.querySelector('.works-slider__thumbs');
      const wrapper = document.querySelector('.works-slider__thumbs-wrapper');
      const wrapHeight = wrapper.getBoundingClientRect().height;
      const curItem = document.querySelector('.works-slider__thumb-item');
      const curItemHeight = curItem.getBoundingClientRect().height;
      const curPos = (wrapHeight - curItemHeight)/2;
      const indexMove = worksAmount - this.currentIndex;
      const percent = curPos * indexMove;
      const background = document.querySelector('.works-slider__pics:before');
      container.style.transform=`translateY(-${percent}px)`;
      
    },
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = `https://webdev-api.loftschool.com/${item.photo}`;
        item.photo = requiredPic;

        return item;
      });
    },
    handleSlide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    },
    changeActiveClass(event) {
      const links = document.querySelectorAll('.works-slider__thumb-item');
      const wrapper = document.querySelector('.works-slider__thumbs-wrapper');
      Array.from(links).forEach(el => {
        el.classList.remove('active');
      });
      event.parentNode.classList.add('active');
      const index = [].indexOf.call(links, event.parentNode);
      const worksAmount = this.works.length - 1;
      this.currentIndex= worksAmount - index;
    }
  },
  created() {
    axios.get('https://webdev-api.loftschool.com/works/121')
      .then(response => {
        const data = response.data;
        this.works = this.makeArrWithRequiredImages(data);
      });
  }
});