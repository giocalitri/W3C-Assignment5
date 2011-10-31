<?php 
header("Content-Type: text/css; charset=utf-8");
#header("Cache-Control: max-age=31536000, public");
?>

h1 {
	font-size:2em;
	margin-top:1%;
}

#game, #help {
	margin:1%;
}

#game {
	float:left;
	width: 65%;
	clear:left;
}
#help {
	float:right;
	width: 30%;
	clear:right;
}

#footer ul li {
	margin: 0.6em 0.2em;
	padding:0.2em;
	border:2px solid black;
	background-color:#F2F2BA;
    text-align:center;
    border-radius: 0.5em;
    box-shadow: rgba(0,0,0,0.2) 0.5em 0.5em 0.3em;	
}

#footer ul li{
	float: left;
	margin-left: 2em;
}

#footer:after {
	visibility: hidden;
	display: block;
	font-size: 0;
	line-height: 0;
	content: " ";
	clear: both;
	height: 0;
	width: 0;
}