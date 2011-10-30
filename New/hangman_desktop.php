<?php
#Include the settings
require_once 'settings.php';
# Set the cache control header
#header("Cache-Control: max-age=604800");
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width,initial-scale=1.0" />
	
	<title>Hangman</title>
	<link rel="stylesheet" type="text/css" href="style.php"/>
	<link rel="stylesheet" type="text/css" href="style_desktop.php"/>
	<link rel="canonical" href="http://<?php echo $_SERVER['SERVER_NAME'].$path_parts['dirname'] ?>/hangman.php"/>
	<script type="text/javascript" src="loc_sess_storage.js"></script>
</head>
<body>
<h1>Hangman</h1>
<div id="container">
	<div id="game">
		
	</div>
	<div id="help">
		<h2>How to play</h2>
		<ul>
			<li>Press New Game</li>
			<li>Select the difficulty level. This sets the number of wrong attempts before hanging to 3, 6, or 12</li>
			<li>The game begins when you select your first character</li>
			<li>You cannot change the difficulty level once the game has started until the &quot;New Game&quot; button is pressed</li>
		</ul>
	</div>
	<div id="footer">
		<ul>
			<li><a href="<?php echo $path_parts['dirname']?>/hangman.php?vpa=m">Visit mobile version of this website</a></li>
			<li><a href="http://www.huntingground.freeserve.co.uk/main/mainfram.htm?../games/hangman/hangman1.htm">Visit the website that inspired this page</a></li>
		</ul>
	</div>
</div>
<script type="text/javascript">
var msg;

if (Modernizr.localstorage) {
  msg = 'Success! Web Storage is available either through native support or cookies.';
} else {
  msg = 'Sadly, there is no native support for Web Storage';
}

document.getElementById('game').innerHTML = msg;
</script>
</body>
</html>