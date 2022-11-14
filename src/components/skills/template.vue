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

.skills{
  padding: 70px 20px;
  
  .content{
    
    .development-wrapper{
      
      .development-title{
        color: $title-color;
        font-size: 2em;
        text-align: center;
        margin-bottom: 20px;
      }
      
      .skills-bar-container{
        position: relative;
        width: 100%;
        list-style-type: none;
        
        li{
          width: 100%;
          margin-bottom: 20px;
          
          .progressbar-title{
            color: $title-color;
            margin-bottom: 5px;

            h3{
              display: inline-block;
            }
            
            .percent{
              position: absolute;
              right: 20px;
              font-size: 1.1em;
            }
          }
          
          .bar-container{
            background: $progressbar-bg;
            position: relative;
            width: 100%;
            height: 10px;

            .progressbar{
              background: $progressbar-color;
              position:absolute;
              width:0%;
              height: 100%;
            }
          }
        }
      }
    }
    
    .tools-knowledge-wrapper{
      width: 100%;
      
      .tools-wrapper,
      .knowledge-wrapper{
        position: relative;
        padding: 20px 0;
        widht: 100%;
        text-align:center;

        .title{
          color: $title-color;
          font-size: 2em;
          margin-bottom: 10px;
        }

        ul{
          list-style-type: none;
          margin-left: 40px;

          li{
            color: $text-color;
            font-weight: bold;
            font-size: 1.1em;
            text-align: left;

            i{
              color: #27ae60;
            }
          }
        }
      }    
    }
  }
}
</style>


