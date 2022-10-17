Read before usage
========================

This code is an implementation of the file system UI.
Before adding code to your project, make sure you have:

* `jquery`
* `bootstrap js`
* `bootstrap css`
* `bootstrap icons`

In this example, they are injected via cdn:
```bash
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
```

This project includes three files, but only .js and .css files are worth paying attention to:

* `index.css needs for animations`
* `index.js contains the main logic`

Usage
========================

Embed the index.js and index.css files (you can rename them, these names are just an example) on the page you want
add foldersUI. Create an html block with id="folderWrapper", add data-href, data-files attributes:

* `the value of the data-files attribute is parsed into the folders and files list.
(An example of how that object should looks like you can see in index.html)`

* `With data-href, the path is taken to download files that are in folders`
