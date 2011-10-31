<?php
#Include the settings
require_once 'settings.php';
# Set the cache control header
header("Cache-Control: max-age=604800");
?>
<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" lang="en"
xml:lang="en"><head><meta charset="UTF-8" /><meta name="viewport"
content="width=device-width,initial-scale=1.0" /><title>Hangman</title><link rel="stylesheet" type="text/css"
href="style.php"/></head>
<body>
<div class="offline">
<h1>You seem to be offline!<br/>Try to access the game sections manually.</h1>
<ul class="letters">
	<li><a href="hangman_desktop.php">Hangman desktop version</a></li>
	<li><a href="hangman_mobile.php">Hangman mobile version</a></li>
</ul>
</div>
</body>
</html>