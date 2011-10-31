<?php
#default error for php
error_reporting(E_ALL & ~E_NOTICE);
#I set a default encoding
ini_set('default_charset', 'UTF-8');

$path_parts = pathinfo($_SERVER['PHP_SELF']);

#list of settings
#$DOMAIN = 'localhost';
$DOMAIN = 'www.dimilia.it';




?>