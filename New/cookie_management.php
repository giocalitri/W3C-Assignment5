<?php

/**
 * File containing the cookie management
 * 
 * It tries to detect the device and sets a cookie.
 * If there is a request for a specific page, the cookie is forced
 */

function cookie_management()
{
	$DOMAIN = $GLOBALS['DOMAIN'];
	
	#if there is a request to view the page in a particular way, I override the cookie in any case
	# so that I bypass the browser detection
	
	#I need another variable if I set the cookie here
	$COOKIE_EXSISTS = FALSE;
	if (isset($_REQUEST['vpa']))
	{
		#vpa = view_page_as
		if ($_REQUEST['vpa'] == 'm')
		{
			$is_mobile = 1;
		}
		elseif ($_REQUEST['vpa'] == 'd') 
		{
			$is_mobile = 0;
		}
		else
		{
			#if the request isdifferent from the previous 2 parameters I don't do anything here
		}
		
		if (isset($is_mobile))
		{
			#I set the cookie for 1 year
			setcookie('m', $is_mobile, time()+60*60*24*365, '/', $DOMAIN);
			$COOKIE_EXSISTS = TRUE;
		}
	}
	
	#I check if the cookie is set
	#if so I get the value
	if (isset($_COOKIE['m']) || $COOKIE_EXSISTS)
	{
		if ($COOKIE_EXSISTS)
		{
			#I already have the variable set
		}
		else 
		{
			#if the variable comes from a previus cookie
			$is_mobile = $_COOKIE['m'];
		}
	}
	#otherwise I try to detect if the browser is a mobile
	#and in any case I'll set the cookie for the next time
	else 
	{
		#I try to detect the browser
		require_once ("Mobile_Detect.php");
		$detect = new Mobile_Detect();
		if ($detect->isMobile()) 
		{
			#the request is from a mobile
			$is_mobile = 1;
		}
		else
		{
			#the request is from a desktop
			$is_mobile = 0;
		}
		#I set the cookie for 1 year
		setcookie('m', $is_mobile, time()+60*60*24*365, '/', $DOMAIN);
	}

	return $is_mobile;
}

?>