<?php 
header("Content-Type: text/css; charset=utf-8");
#header("Cache-Control: max-age=31536000, public");
?>
@CHARSET "UTF-8";

html, body, #container {
margin: 0;
padding: 0;
background-color:#F5F5DC;
text-align: left;
width:100%;
}

h1, h2 {
	font-weight:bold;
	margin:0;
	padding:0;
}
h1 {
	font-size:1.5em;
	text-align: center;
}
h2 {
	font-size:1.3em;
}

div {
	clear:both;
}

#game{
	border: 1px solid black;
}

#hangman_img {
	min-height: 160px;
	min-width: 85px;
	margin-top: 1%;
}
#cur_img {
	min-height: 150px;
}

#words {
	border-bottom: 1px solid black;
	padding: 1em;
	font-size:1.5em;
}

#footer {
	margin: 1%;
	padding: 1%;
}

#hangman_img, #words, #keyboard {
	text-align:center;
}
#setup_scores {
	text-align:left;
}

#hangman_img, #setup_scores {
	float: left;
	width: 49%;
}
#hangman_img {
	clear: left;
}
#setup_scores {
	clear: right;
}

ul {
	margin:0;
	padding:0;
	list-style-type: none;
	clear:both;
}
#footer ul li, ul.letters li{
	margin:0;
}
#footer ul li {
	padding: 0.7em 0 0.7em 2%;
}

ul.letters {
	margin-left: 0.5em;
}
ul.letters li{
	padding: 0.4em;
	border:2px solid black;
	background-color:#F1F1BA;
	width:1.5em;
    text-align:center;
    border-radius: 0.5em;
    box-shadow: rgba(0,0,0,0.2) 0.5em 0.5em 0.3em;
    float: left;
    margin-right: 1em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-weight: bold;
    cursor:pointer;
}

ul.letters li.levelset {
	background-color:#D1D154;
}

ul.letters li.hideletter {
	display:none;
}

#help ul {
	margin-left:5%;
	list-style-type: disc;
}

#setup_scores ul.letters li {
	width:auto;
}
#setup_scores ul.letters li.newgame {
	clear: both;
	padding-left:2em;
	padding-right:2em;
}

ul.scores {
	margin-left:5%;
	font-weight:bold;
}

span.endgame {
	font-weight:bold;
}



