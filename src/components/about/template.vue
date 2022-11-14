<script>

export default{
  data(){
    return{
      active: false,
    }
  },  
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if(!this.active){
        this.active = window.scrollY > 180 ? true : false;
        console.log(this.active)
      }
    }
  }
}

</script>

<template src="./template.html" />

<style lang="scss"> 

.about-myself{
  padding: 50px 20px;
  
  .content{
    text-align: center;
    
    h2{
      color: #3d3d3d;
      font-size: 3em;
      margin-bottom: 20px;
      transform: translateY(-50px) scale(0);
      -webkit-transition: transform .7s;
      -moz-transition: transform .7s;
      transition: transform .7s;  
    }
    
    .aboutTitleVisible{
      -webkit-transform: translateY(0px) scale(1);
      transform: translateX(0px) scale(1);
    }
    
    p{
      span{
        color: #c0392b;
        font-weight: bold;
      }
    }
  }
}

</style>


