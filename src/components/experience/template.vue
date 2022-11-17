<script>
export default {
  data() {
    return {
      active_01: false,
      active_02: false,
    };
  },
  created() {
    document.addEventListener("scroll", this.handleHidden);
  },
  methods: {
    handleHidden() {
      if (!this.active_01 || !this.active_02) {
        if (window.scrollY > 600) {
          this.active_01 = true;
        }
        if (window.scrollY > 800) {
          this.active_02 = true;
        }
      }
    },
  },
};
</script>

<template src="./template.html" />

<style lang="scss">
// Colors
$text-color: #444;
$title-color: #3c3c3c;
$bg-color: #f9f9f9;

$experience-bg-color: #002440;
$experience-content-bg-color: #ffffff;

.experience {
  background: $experience-bg-color;
  padding: 50px 0;
  overflow-x: hidden;

  .content {
    text-align: center;

    h1 {
      font-size: 2em;
      color: #fff;
    }

    ul {
      padding: 50px 0;
      list-style-type: none;

      li {
        background: $experience-content-bg-color;
        position: relative;
        margin-left: 20px;
        width: 5px;
        padding-bottom: 40px;

        &:last-child {
          padding-bottom: 7px;
        }

        &:before {
          content: "";
          background: $experience-bg-color;
          position: absolute;
          left: 50%;
          top: 0;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          border: 4px solid $experience-content-bg-color;
        }

        .experience-content {
          background: $experience-content-bg-color;
          position: relative;
          top: 7px;
          left: 48px;
          width: calc(100vw - 100px);
          padding: 20px;
          text-align: center;
          -webkit-border-radius: 0 5px 5px;
          -moz-border-radius: 0 5px 5px;
          border-radius: 0 5px 5px;
          opacity: 0;

          h3 {
            color: $title-color;
            padding-bottom: 10px;
          }

          .experience-time {
            color: #777;
            font-size: 1.1em;
            padding-bottom: 10px;
          }

          p {
            color: #1a1a1a;
            padding-bottom: 10px;
          }

          &:before {
            content: "";
            background: $experience-content-bg-color;
            position: absolute;
            top: 0;
            left: -35px;
            width: 35px;
            height: 5px;
          }
        }
        .experience-content:hover {
          background-color: #edecec;
        }

        .hidden {
          opacity: 0;
        }

        .show {
          opacity: 1;
        }

        .animation_01 {
          animation-name: move-object;
          animation-duration: 2s;
          animation-iteration-count: 1;
          animation-timing-function: ease-in;
          animation-direction: reverse;
          animation-fill-mode: none;
          animation-play-state: running;
          opacity: 1;
        }

        @keyframes move-object {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(200%);
          }
        }

        .animation_02 {
          animation-name: move-object-reverse;
          animation-duration: 2s;
          animation-iteration-count: 1;
          animation-timing-function: ease-in;
          animation-direction: reverse;
          animation-fill-mode: none;
          animation-play-state: running;
          opacity: 1;
        }

        @keyframes move-object-reverse {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(200%);
          }
        }

        @media screen and (min-width: 960px) {
          .animation_01 {
            animation-name: move-object;
            animation-duration: 2s;
            animation-iteration-count: 1;
            animation-timing-function: ease-in;
            animation-direction: reverse;
            animation-fill-mode: none;
            animation-play-state: running;
            opacity: 1;
          }

          @keyframes move-object {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(200%);
            }
          }

          .animation_02 {
            animation-name: move-object-reverse;
            animation-duration: 2s;
            animation-iteration-count: 1;
            animation-timing-function: ease-in;
            animation-direction: normal;
            animation-fill-mode: none;
            animation-play-state: running;
            opacity: 1;
          }

          @keyframes move-object-reverse {
            0% {
              transform: translateX(-200%);
            }

            100% {
              transform: translateX(0%);
            }
          }
        }
      }
    }
  }
}
</style>
