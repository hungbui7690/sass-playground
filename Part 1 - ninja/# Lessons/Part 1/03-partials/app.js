/*
  Partials
  1. create _variables.scss
    -> underscore -> private 
  2. index.scss
    -> @import 'variables' -> without _

  🌲 We create "_variables.scss" instead of "variables.scss" because we don't want the sass compiler to generate the "variables.css" file


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  @import vs @use
  - @import: global
  - @use: local
    -> requires "namespace"


  - @import 'variables';
    -> $primary

  - @use 'variables'
    -> $variables.primary
    @use 'variables'
    -> $variables.primary

  - @use 'abstract/fonts'
    -> $fonts.primary

  🌲 if we don't want to use "namespace", then
      @use 'abstract/fonts' as *;
      -> $primary


*/
