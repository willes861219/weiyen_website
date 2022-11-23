<script>
export default {
  data() {
    return {
      chageImgStr: [
        `<img src="img/bike01.70133c7b.png" alt="">`,
        `<img src="img/bike02.129c4038.png" alt="">`,
        `<img src="img/bike03.1e23123a.png" alt="">`,
      ],
      nowImgStr: "",
    };
  },
  mounted() {
    // console.log(
    //   document.getElementsByClassName("project-image01")[0].innerHTML
    // );
    this.chageImage(3, this.chageImgStr[1]);
  },
  watch: {
    nowImgStr(newVal) {
      if (newVal == this.chageImgStr[0]) {
        this.chageImage(3, this.chageImgStr[1]);
      } else if (newVal == this.chageImgStr[1]) {
        this.chageImage(3, this.chageImgStr[2]);
      } else {
        this.chageImage(3, this.chageImgStr[0]);
      }
    },
  },
  methods: {
    async chageImage(sec, str) {
      await this.wait(sec);
      document.getElementsByClassName("project-image01")[0].innerHTML = str;
      this.nowImgStr = str;
    },
    async wait(sec) {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, sec * 1000);
      });
    }, //自製等待器
  },
};
</script>

<template src="./template.html" />

<style lang="scss">
// Colors
$text-color: #444;
$title-color: #3c3c3c;

.portfolio {
  background: rgb(240, 239, 239);
  padding: 80px 0;

  .content {
    text-align: center;

    h1 {
      color: $title-color;
      font-size: 2em;
      margin-bottom: 50px;
    }

    .projects {
      width: 100%;

      .project {
        color: #fff;
        position: relative;
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
        margin-bottom: 10%;
        overflow: hidden;

        &:last-child {
          margin-bottom: 0;
        }

        .project-image img {
          width: 100%;
        }
        .project-title {
          color: $title-color;
          padding: 10px 0;
        }
        .project-description {
          color: $text-color;

          .demo-link {
            display: flex;
            h3 {
              padding-right: 10px;
            }
          }
          h2 {
            padding-top: 10px;
            padding-bottom: 10px;
          }

          h3 {
            color: #4775fc;
            padding-top: 10px;
          }
          h3:hover {
            font-size: 22px;
            color: #2a5bed;
          }
          span {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
