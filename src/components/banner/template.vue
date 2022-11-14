<script>

export default{
  data(){
      return{
        msg:"Welcome to Wei Yen's Web！",
        active:false,
      }
  },
  mounted(){
  },
  methods:{
    handleAnimate(){
      console.log(1)
    }
  }
}
</script>

<template src="./template.html" />

<style lang="scss"> 
.banner{
  height: 100%;
  background: url('../../assets/images/banner_01.jpg');
  background-size: cover;
  background-position: center;
  
  .content{
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    
    .header{
      position: absolute;
      top: 55%;
      width: 100%;
      -webkit-transform: translate(0%, -50%);
      transform: translate(0%, -50%);
      text-align: center;
      opacity:1;
      animation-name: example;
      animation-duration: 2s;
      
      h1{
        color: #fff;
        font-size: 2.5em;
        text-shadow: 0px 2px 3px #2d2d2d;
      }
    }
    @keyframes example {
      0%   {top:60%;opacity: 0;}
      100% {top:55%;opacity: 1;}
    }
  }
}
</style>


