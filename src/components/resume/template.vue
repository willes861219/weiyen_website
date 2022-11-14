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
// Colors
$text-color: #444;
$title-color: #3c3c3c;
$bg-color: #f9f9f9;

$experience-bg-color: #002440;
$experience-content-bg-color: #f5f5f5;

$progressbar-bg: #ececec;
$progressbar-color: #34495e;

.resume{
  background: url('https://source.unsplash.com/L8126OwlroY/');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  .content{
    background: rgba(0,0,0,0.3);
    padding: 50px 0;
    text-align: center;
    
    a{
      color: #fff;
      text-transform: uppercase;
      
      .btn-resume{
        display: inline-block;
        font-size: 1.1em;
        padding: 20px;
        margin: 0 15px;
        background: rgba(255,255,255,0.2);
        position:relative;
        border:2px solid #fff;
        border-radius: 5px;
        overflow: hidden;
        
        span{
          -webkit-transition: opacity 1.2s;
          -moz-transition: opacity 1.2s;
          transition: opacity 1.2s;
        }
        
        i{
          color:#fff;
          position:absolute;
          padding: 20px 0;
          top:-80px;
          width:100%;
          left:0;
          -webkit-transition: top .5s;
          -moz-transition: top .5s;
          transition: top .5s;
        }
        
        &:hover {
          span{
            opacity: 0;
            -webkit-transition: opacity .4s;
            -moz-transition: opacity .4s;
            transition: opacity .4s;
          }
          i {
            top:0;
          }
        }
      }
    }
  }
}
</style>


