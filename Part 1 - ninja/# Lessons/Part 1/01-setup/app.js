/*
  Sass Compiler
  - Method 1
    # Extension: Live Sass Compiler
      -> since our project are in playground/ -> not in root of the project -> we need to setup 
      -> settings.json
          "liveSassCompile.settings.formats": [
            {
              "format": "expanded",
              "extensionName": ".css",
              "savePath": "/playground/css"
            }
          ],

  - Method 2
    # npm i -D sass
    # package.json
        "scripts": {
          "sass": "sass index.scss:css/index.css --watch --update --style=expanded"
          "sass-prod": "sass index.scss:css/index.css --no-source-map --style=compressed"
        }

  - Method 3 
    -> gulp


*/
