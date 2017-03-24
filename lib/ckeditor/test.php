<!DOCTYPE html>
<!--
Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or http://ckeditor.com/license
-->
<html>
<head>
<meta charset="utf-8">
<title>Replace Textarea by Code &mdash; CKEditor Sample</title>
<script src="ckeditor.js"></script>
</head>
<body>
<h1 class="samples">&nbsp;</h1>
<form action="sample_posteddata.php" method="post">
  <div class="description"> </div>
  <textarea cols="80" id="editor1" name="editor1" rows="10">xx
		</textarea>
  <script>

			// This call can be placed at any point after the
			// <textarea>, or inside a <head><script> in a
			// window.onload event handler.

			// Replace the <textarea id="editor"> with an CKEditor
			// instance, using default configurations.

			//CKEDITOR.replace( 'editor1' );

var roxyFileman = '<?="/mygest/lib/ckeditor/plugins/fileman/index.html"?>'; 

   CKEDITOR.replace( 'editor1',{filebrowserBrowseUrl:roxyFileman, 
                                filebrowserUploadUrl:roxyFileman,
                                filebrowserImageBrowseUrl:roxyFileman+'?type=image',
                                filebrowserImageUploadUrl:roxyFileman+'?type=image'}); 


		</script>
  <p>
    <input type="submit" value="Submit">
  </p>
</form>
</body>
</html>
