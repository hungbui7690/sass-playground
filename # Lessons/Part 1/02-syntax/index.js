/*
  Sass vs Scss
  - Sass: no curly braces, no semi-colon -> python style
      $font-stack: Helvetica, sans-serif
      $primary-color: #333

      body
        font: 100% $font-stack
        color: $primary-color

  - Scss: js style
      $font-stack: Helvetica, sans-serif;
      $primary-color: #333;

      body {
        font: 100% $font-stack;
        color: $primary-color;
      }


******************************

  Syntax
  - Css File
      #main {
          #main general rules
          ...  
      } 
      #main p {
          rules for <p> elements within main
          ...  
      } 
      #menu {
          #menu general rules
          ...  
      } 
      #menu ul {
          rules for <ul> elements within main
          ...
      } 

  - SCSS
      #main {
        -> #main general rules
        p {...} rules for <p> elements within main
        -> more #main general rules
          ...
      }
      #menu {
        -> #menu general rules
          ul {
            -> rules for <ul> elements within main
              ...
          } 
      }


*******************************

  Parent
  - CSS:
      .alert {
        &:hover {
          font-weight: bold;
        }
      }

  - SCSS:
      .alert:hover {
        font-weight: bold;
      }


*******************************

  Nested Properties -> rarely used
  - SCSS:
      font: {
        family: serif;
        size: 30rem;
        weight: bold;
      }
      text: {
        align: center;
        transform: uppercase;
        overflow: hidden;
      }
  - CSS: 
      font-family: serif;
      font-size: 30rem;
      font-weight: bold;

      text-align: center;
      text-transform: uppercase;
      text-overflow: hidden;


*******************************
















*/
