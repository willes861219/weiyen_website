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

.portfolio{
  background: $bg-color;
  padding: 80px 0;
  
  .content{
    text-align: center;
    
    h1{
      color: $title-color;
      font-size: 2em;
      margin-bottom: 50px;
    }

    .projects{
      width: 100%;

      .project{
        color: #fff;
        position: relative;
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 10%;
        overflow: hidden;
        
        &:last-child{
          margin-bottom: 0;
        }
        
        .project-image img{
          width: 100%;
        }
        .project-title{
          color: $title-color;
          padding: 10px 0;
        }
        .project-description{
          color: $text-color;
        }
      }
    }
  }
}
</style>


