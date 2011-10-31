<?php 
header("Content-Type: text/css; charset=utf-8");
header("Cache-Control: max-age=31536000, public");
?>
@CHARSET "UTF-8";
h1{font-size:2em;margin-top:1%}
#game,#help{margin:1%}
#game{float:left;width:65%;clear:left}
#help{float:right;width:30%;clear:right}
#footer ul li{border:2px solid #000;background-color:#F2F2BA;text-align:center;border-radius:.5em;box-shadow:rgba(0,0,0,0.2) .5em .5em .3em;float:left;margin:.6em .2em .6em 2em;padding:.2em}
#footer:after{visibility:hidden;display:block;font-size:0;line-height:0;content:" ";clear:both;height:0;width:0}
#hangman_img,#setup_scores{width:49%}
#words{font-size:1.5em;padding:1em}
dl.scores,dl.scores dd{margin-left:1em}