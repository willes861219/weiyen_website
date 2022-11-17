<template>
  <div id="app">
    <banner />
    <About />
    <Experience />
    <Skills />
    <Resume />
    <Projects />
    <Contact />
    <bottom />
  </div>
</template>

<script>
import Banner from "./components/banner/template.vue";
import About from "./components/about/template.vue";
import Experience from "./components/experience/template.vue";
import Skills from "./components/skills/template.vue";
import Resume from "./components/resume/template.vue";
import Projects from "./components/projects/template.vue";
import Contact from "./components/contact/template.vue";
import bottom from "./components/bottom/template.vue";

export default {
  name: "App",
  components: {
    Banner,
    About,
    Experience,
    Skills,
    Resume,
    Projects,
    Contact,
    bottom,
  },
  created() {
    document.title = "威延－個人履歷網站";
  },
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=PT+Sans);

$main-font: "PT Sans", sans-serif;

// Colors
$text-color: #444;
$title-color: #3c3c3c;
$bg-color: #f9f9f9;

$experience-bg-color: #002440;
$experience-content-bg-color: #f5f5f5;

$progressbar-bg: #ececec;
$progressbar-color: #34495e;

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  color: $text-color;
  background: $bg-color;
  font-size: 16px;
  font-family: $main-font;
}

a {
  color: inherit;
  text-decoration: none;
}

section {
  position: relative;
  width: 100%;
}

#app {
  width: 100%;
  height: 100%;
}

/* 響應式設定 */

@media screen and (min-width: 480px) {
  .skills .content {
    .tools-knowledge-wrapper {
      .tools-wrapper,
      .knowledge-wrapper {
        width: 50%;
        float: left;
        padding: 0;
      }
    }
    .clear {
      clear: both;
    }
  }
}

@media screen and (min-width: 640px) {
  .about-myself {
    padding: 100px 40px;
  }

  .skills {
    padding-left: 0;
    padding-right: 0;

    .content {
      .development-wrapper {
        width: 600px;
        margin: auto;
        margin-bottom: 50px;
      }

      .tools-knowledge-wrapper {
        width: 600px;
        margin: auto;
      }
    }
  }

  .contact {
    .content {
      .socials {
        width: 600px;
        margin: auto;
      }
    }
  }
}

@media screen and (min-width: 960px) {
  .experience {
    .content {
      ul {
        li {
          margin: 0 auto;

          .experience-content {
            width: 40vw;
          }

          &:nth-child(odd) .experience-content {
            left: 63px;
          }
          &:nth-child(odd) .experience-content:before {
            left: -50px;
            width: 50px;
          }
          &:nth-child(even) .experience-content {
            left: calc(-40vw - 57px);
            -webkit-border-radius: 5px 0px 5px 5px;
            -moz-border-radius: 5px 0px 5px 5px;
            border-radius: 5px 0px 5px 5px;
          }
          &:nth-child(even) .experience-content:before {
            left: auto;
            right: -50px;
            width: 50px;
          }
          &:nth-child(odd) .hidden {
            margin-left: 10vw;
          }
          &:nth-child(even) .hidden {
            margin-left: -10vw;
          }
        }
      }
    }
  }

  .skills {
    padding-left: 50px;
    padding-right: 50px;

    .content {
      max-width: 1100px;
      margin: auto;

      .development-wrapper {
        margin-bottom: 0;
        width: 60%;
      }

      .tools-knowledge-wrapper {
        width: 60%;
        margin-top: 60px;

        .tools-wrapper,
        .knowledge-wrapper {
          float: none;
          margin: auto;
        }

        .tools-wrapper {
          margin-bottom: 30px;
        }
      }
    }
  }

  .portfolio {
    .content {
      .projects {
        .project {
          position: relative;
          margin: auto;
          margin-bottom: 3%;
          width: 680px;
          height: 450px;
          overflow: hidden;

          &:hover .project-image {
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
          }

          &:hover .project-title,
          &:hover .project-description {
            opacity: 1;
          }

          .project-image {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            -webkit-transition: transform 0.5s ease;
            transition: transform 0.5s ease;
            -webkit-transform-origin: left top;
            transform-origin: left top;
            z-index: 3;
            overflow: hidden;

            img {
              width: 100%;
              height: auto;
              min-height: 100%;
              min-width: 100%;
              border-radius: 1em;
            }
          }
          .project-title,
          .project-description {
            position: absolute;
            height: 50%;
            opacity: 0;
            -webkit-transition: opacity 0.3s linear;
            transition: opacity 0.3s linear;
            overflow: hidden;
          }

          .project-title {
            width: 50%;
            top: 0;
            right: 0;
            padding: 10px;
            text-align: center;
            display: table;

            h2 {
              font-size: 2em;
              text-decoration: underline;
              display: table-cell;
              vertical-align: middle;
            }
          }

          .project-description {
            width: 100%;
            top: 50%;
            left: 0;
            padding: 0px 10px;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
