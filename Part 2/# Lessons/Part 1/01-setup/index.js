/*
  Setup 
  - Method 1: 
    ~~ npm install -g sass
      -> sass --w style.scss:style.css
      -> sass --watch styles.scss:css/styles.css


********************************

  - Method 2: 
    -> Install Extension -> Live Sass Compiler
    -> Click on the <Watching-Sass> in the status bar of VSCode
  

********************************

  Settings
  - Create a .vscode folder in the root of project. Inside of .vscode folder create a json file named settings.json. Inside of the settings.json, type following key-value pairs. By the way you'll get intelli-sense.

  - If the above method does not work -> Open VSCode Settings -> add these lines:

    {
      "liveSassCompile.settings.formats": [
        {
          "format": "expanded",
          "extensionName": ".css",
          "savePath": "/playground/css"
        },
        {
          "extensionName": ".min.css",
          "format": "compressed",
          "savePath": "playground/dist/css"
        }
      ],
      "liveSassCompile.settings.excludeList": [
        "**/ node_modules /**",
        ".vscode/**"
      ],
      "liveSassCompile.settings.generateMap": true,
      "liveSassCompile.settings.autoprefix": ["> 1%", "last 2 versions"]
    }



*/
