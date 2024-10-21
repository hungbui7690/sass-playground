/*
  Using Own CSS Library
  - we will create a home page using our own css library

  1. _utilities.scss
    -> add "display" and "font-size" variables
  2. change html


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  PurgeCSS
  - https://purgecss.com/CLI.html
  - check css/index.css file -> we have a lot of unused styles
    -> PurgeCSS will remove them

    # npm i -D purgecss
    # purgecss --css ./css/index.css --content index.html --output ./index.css


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Use in Real App
  - rename scss/ to shinobi/
    -> now, we have shinobi css library (similar to tailwind...)
  - create new scss/index.scss 
    -> any variables we need to change will be in this file
    -> @use 'shinobi'
  
  🌲 and we need to compile the 


*/
