<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<template src="./template.html" />

<style lang="scss">
.resume {
  // background: url("../../assets/images/image02.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgb(124, 124, 124);
  opacity: 0.8;

  .content {
    background: rgba(0, 0, 0, 0.3);
    padding: 50px 0;
    text-align: center;

    a {
      color: #fff;
      text-transform: uppercase;

      .btn-resume {
        display: inline-block;
        font-size: 1.1em;
        padding: 20px;
        margin: 0 15px;
        background: rgba(255, 255, 255, 0.2);
        position: relative;
        border: 2px solid #fff;
        border-radius: 5px;
        overflow: hidden;

        span {
          -webkit-transition: opacity 1.2s;
          -moz-transition: opacity 1.2s;
          transition: opacity 1.2s;
        }

        i {
          color: #fff;
          position: absolute;
          padding: 20px 0;
          top: -80px;
          width: 100%;
          left: 0;
          -webkit-transition: top 0.5s;
          -moz-transition: top 0.5s;
          transition: top 0.5s;
        }

        &:hover {
          span {
            opacity: 0;
            -webkit-transition: opacity 0.4s;
            -moz-transition: opacity 0.4s;
            transition: opacity 0.4s;
          }

          .hide {
            position: absolute;
            left: 65px;
            opacity: 1;
            -webkit-transition: opacity 0.4s;
            -moz-transition: opacity 0.4s;
            transition: opacity 0.4s;
          }

          .show {
            opacity: 1;
            -webkit-transition: opacity 1s;
            -moz-transition: opacity 1s;
            transition: opacity 1s;
          }
        }
        .show {
          position: absolute;
          left: 40%;
          opacity: 0;
        }
      }
    }
  }
}
</style>
