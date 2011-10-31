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
	<link rel="canonical" href="http://<?php echo $_SERVER['SERVER_NAME'].$path_parts['dirname'] ?>/hangman.php"/>
	<script type="text/javascript" src="loc_sess_storage.js"></script>
</head>
<body>
<h1>Hangman</h1>
<div id="container">
	<div id="game">
		<div id="hangman_img"></div>
		<div id="setup_scores">
			<ul class="letters">
				<li class="newgame">New game</li>
				<li id="level_easy" onclick="change_level('easy');">Easy</li>
				<li id="level_medium" onclick="change_level('medium');">Medium</li>
				<li id="level_hard" onclick="change_level('hard');">Hard</li>
			</ul>
			<ul class="scores">
				<li>Games Played: <span id="game_played">0</span></li>
				<li>Games Won: <span id="game_won">0</span></li>
			</ul>
		</div>
		<div id="words">
			<span id="guessword">
				If you see this text for more than 10 seconds, your browser doesn't 
				support javascript and you cannot play :-( <br/>
				Please visit this page with a browser that supports javascript.
			</span>
		</div>
		<div id="keyboard">
			<ul class="letters">
				<li>A</li><li>B</li><li>C</li><li>D</li><li>E</li><li>F</li><li>G</li><li>H</li><li>I</li><li>J</li><li>K</li><li>L</li><li>M</li>
				<li>N</li><li>O</li><li>P</li><li>Q</li><li>R</li><li>S</li><li>T</li><li>U</li><li>V</li><li>W</li><li>X</li><li>Y</li><li>Z</li>
			</ul>
		</div>
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
			<li><a href="<?php echo $path_parts['dirname']?>/hangman.php?vpa=m">View mobile version of this website</a></li>
			<li><a href="http://www.huntingground.freeserve.co.uk/main/mainfram.htm?../games/hangman/hangman1.htm">Visit the website that inspired this page</a></li>
		</ul>
	</div>
</div>
<script type="text/javascript" src="hangman.js"></script>
</body>
</html>