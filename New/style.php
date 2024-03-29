<?php 
header("Content-Type: text/css; charset=utf-8");
header("Cache-Control: max-age=31536000, public");
?>
@CHARSET "UTF-8";
html,body,#container{background-color:#F5F5DC;text-align:left;width:100%;margin:0;padding:0}
h1,h2{font-weight:700;margin:0;padding:0}
h1{font-size:1.5em;text-align:center}
h2{font-size:1.3em}
div{clear:both}
#game{border:1px solid #000}
#hangman_img{min-height:160px;min-width:85px;margin-top:1%;clear:right; width:30%;}
#cur_img{min-height:150px}
#words{border-bottom:1px solid #000;font-size:1.2em;padding:.5em}
#footer{margin:1%;padding:1%}
#hangman_img,#words,#keyboard{text-align:center}
#hangman_img,#setup_scores{float:left}
#setup_scores{text-align:left;clear:left;}
ul{list-style-type:none;clear:both;margin:0;padding:0}
#footer ul li,ul.letters li{margin:0}
#footer ul li{padding:.7em 0 .7em 2%}
ul.letters{margin-left:.2em}
ul.letters li{border:2px solid #000;background-color:#F1F1BA;width:1.5em;text-align:center;border-radius:.5em;box-shadow:rgba(0,0,0,0.2) .5em .5em .3em;float:left;margin-right:.7em;margin-top:.5em;margin-bottom:.5em;font-weight:700;cursor:pointer;padding:.4em}
ul.letters li.levelset{background-color:#D1D154}
ul.letters li.hideletter{background-color:grey;cursor:auto}
.offline ul.letters li{width:auto;float:none;}
#help ul{margin-left:5%;list-style-type:disc}
#setup_scores ul.letters li{width:auto}
#setup_scores ul.letters li.newgame{float:none;clear:both}
dl.scores{font-weight:700;clear:both;margin-left:.5em}
dl.scores dd{margin-left:.5em}
span.endgame{font-weight:700}
.offline{text-align:center}
.sprites {display:inline-block;background:url('img/hangman.gif') no-repeat left center;background-position:0 0;width:75px;height:150px;}
.pos_thirteen {background-position:0 0}
.pos_twelve {background-position:-75px 0}
.pos_eleven {background-position:-150px 0}
.pos_ten {background-position:-225px 0}
.pos_nine {background-position:-300px 0}
.pos_eight {background-position:-375px 0}
.pos_seven {background-position:-450px 0}
.pos_six {background-position:-525px 0}
.pos_five {background-position:-600px 0}
.pos_four {background-position:-675px 0}
.pos_three {background-position:-750px 0}
.pos_two {background-position:-825px 0}
.pos_one {background-position:-900px 0}