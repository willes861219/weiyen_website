<script>

export default{
    data(){
        return{
        }
    }
}
</script>

<template src="./template.html" />

<style lang="scss"> 
.contact{
  padding: 30px 0;
  
  .socials{
    list-style-type: none;
    width: 100%;
    
    .social{
      width: 25%;
      float: left;
      text-align: center;
      
      a{
        color: #3d3d3d;
        font-size: 1.5em;
        -webkit-transition: color .3s;
        -moz-transition: color .3s;
        transition: color .3s;
      }
      .email:hover{color:#c8a028;}
      .github:hover{color:#57AEE7;}
      .linkedin:hover{color:#0177B5;}
      .blogger:hover{color:#707070;}
    }
  }
  .clear{
    clear:both;
  }
}
</style>


