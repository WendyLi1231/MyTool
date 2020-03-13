<template>
  <div class="goods">
    <div class="tab">
      <span :class="{'tab-item':i==index}" @click="fn(k,i)" v-for="(k,i) in titles" :key="i">{{k}}</span>
    </div>
    <ul v-if="arr[0]">
      <li v-for="(k,i) in arr[selectIndex].products" :key="i" class="goodItem" @click="goodsInf(k)">
        <img :src="'static/img/'+k.img_url" alt>
        {{k.name}} {{k.price}}
        <span class="add" @click.stop="add(k)">+</span>
      </li>
    </ul>
    <goodsInf ref="goodss" :goodsInfs="goodsInfs"></goodsInf>
  </div>
</template>
<script>
import axios from "axios";
import selectGoods from "@/components/selectGoods";
import shopCar from "@/components/shopCar/shopCar";
import goodsInf from "@/components/goods/goodsInf";
export default {
  name: "goods",
  data() {
    return {
      titles: ["冰箱", "手机", "电脑"],
      arr: [],
      index: 0,
      selectIndex: 0,
      selectedGoods: [],
      showFlag: false,
      goodsInfs: {}
      // url: "http://127.0.0.1:82"
    };
  },
  components: {
    selectGoods,
    shopCar,
    goodsInf
  },
  created() {
    axios
      .get("http://localhost:81/static/data.json")
      .then(data => {
        // console.log("21", data.data.list);
        this.arr = data.data.list;
        console.log("31", this.arr);
      })
      .catch(err => {
        console.log("34", err);
      });
  },
  methods: {
    goodsInf(k) {
      // console.log("53",this.$refs.goodss)
      console.log("54", k);
      this.goodsInfs = k;
      this.$refs.goodss.show();
    },
    fn(k, i) {
      this.index = i;
      this.selectIndex = i;
    },
    needShow() {
      return true;
    },
    add(k) {
      // console.log("+++", k);
      this.selectedGoods.push(k);
      // console.log("60", this.selectedGoods);
      axios
        .post("http://localhost:82/addPost", k)
        .then(data => {
          // console.log("74", data);
        })
        .catch(err => {
          console.log("79", err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 50px;
  height: 50px;
}
.add {
  border: solid 1px;
  padding: 0 5px;
}
ul {
  padding-inline-start: 0;
}
.goodItem {
  display: flex;
  justify-content: space-between;
  list-style: none;
  border: solid 1px gainsboro;
  line-height: 24px;
  padding: 5px;
  align-items: center;
}

.tab-item {
  background: pink;
}
.tab {
  display: flex;
  justify-content: space-around;
}
.tab span {
  border: solid 1px pink;
  display: inline-block;
  width: calc(100% / 3);
  text-align: center;
  padding: 15px 0;
}
</style>
