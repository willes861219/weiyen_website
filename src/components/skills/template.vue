<script>
export default {
  data() {
    return {
      Skills: {
        程式語言: ["C#", "JavaScript", "Python"],
        前端: ["Vue", "TailwindCSS", "JavaScript (ES6+)", "HTML", "CSS"],
        後端: ["ASP.NET Core", "ASP .NET MVC", "JWT", "RESTful API"],
        資料庫: ["MSSQL", "PostgreSQL"],
        部署: ["IIS", "Docker"],
        版控: ["Git"],
      },
    };
  },
};
</script>

<template src="./template.html" />

<style lang="scss">
// Colors
$text-color: #444;
$title-color: #3c3c3c;
$bg-color: #f9f9f9;

.skills {
  padding: 70px 20px;

  .content {
    .tools-knowledge-wrapper {
      width: 100%;

      .tools-wrapper {
        position: relative;
        display: inline-grid;
        padding: 20px 0;
        width: 100%;
        text-align: center;

        .title {
          color: $title-color;
          font-size: 2em;
          margin-bottom: 10px;
        }

        ul {
          list-style-type: none;
          margin-left: 40px;

          li {
            color: $text-color;
            font-weight: bold;
            font-size: 1.1em;
            text-align: left;

            i {
              color: #27ae60;
            }
          }
        }
      }
    }
  }
}
</style>
