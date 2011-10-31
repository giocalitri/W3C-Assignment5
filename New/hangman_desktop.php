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
		<div id="hangman_img">
			<div id="cur_img"></div>
			<div id="rem_chances"></div>
		</div>
		<div id="setup_scores">
			<ul class="letters">
				<li id="level_easy" onclick="change_level('easy');">Easy</li>
				<li id="level_medium" onclick="change_level('medium');">Medium</li>
				<li id="level_hard" onclick="change_level('hard');">Hard</li>
				<li class="newgame" onclick="start_new_game();">New game</li>
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
				<li id="let_A" onclick="guess_letter('A');">A</li><li id="let_B" onclick="guess_letter('B');">B</li>
				<li id="let_C" onclick="guess_letter('C');">C</li><li id="let_D" onclick="guess_letter('D');">D</li>
				<li id="let_E" onclick="guess_letter('E');">E</li><li id="let_F" onclick="guess_letter('F');">F</li>
				<li id="let_G" onclick="guess_letter('G');">G</li><li id="let_H" onclick="guess_letter('H');">H</li>
				<li id="let_I" onclick="guess_letter('I');">I</li><li id="let_J" onclick="guess_letter('J');">J</li>
				<li id="let_K" onclick="guess_letter('K');">K</li><li id="let_L" onclick="guess_letter('L');">L</li>
				<li id="let_M" onclick="guess_letter('M');">M</li><li id="let_N" onclick="guess_letter('N');">N</li>
				<li id="let_O" onclick="guess_letter('O');">O</li><li id="let_P" onclick="guess_letter('P');">P</li>
				<li id="let_Q" onclick="guess_letter('Q');">Q</li><li id="let_R" onclick="guess_letter('R');">R</li>
				<li id="let_S" onclick="guess_letter('S');">S</li><li id="let_T" onclick="guess_letter('T');">T</li>
				<li id="let_U" onclick="guess_letter('U');">U</li><li id="let_V" onclick="guess_letter('V');">V</li>
				<li id="let_W" onclick="guess_letter('W');">W</li><li id="let_X" onclick="guess_letter('X');">X</li>
				<li id="let_Y" onclick="guess_letter('Y');">Y</li><li id="let_Z" onclick="guess_letter('Z');">Z</li>
			</ul>
		</div>
	</div>
	<div id="help">
		<h2>How to play</h2>
		<ul>
			<li>If you want select the difficulty level. This sets the number of wrong attempts before hanging to 3, 6, or 12</li>
			<li>Press New Game</li>
			<li>The game begins when you select your first character.</li>
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
<!-- <script type="text/javascript" src="jquery-1.6.4.min.js"></script> -->
<script type="text/javascript" src="hangman.js"></script>
</body>
</html>