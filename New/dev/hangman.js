/**
 * Functions to play hangman
 */

//First of all I remove the content of the word section (so the user doesn't see the error)
document.getElementById('guessword').innerHTML = '';

//function that returns a random word
function getWord() {
  var a = new Array('abate','aberrant','abscond','accolade','acerbic','acumen','adulation','adulterate','aesthetic','aggrandize','alacrity','alchemy','amalgamate','ameliorate','amenable','anachronism','anomaly','approbation','archaic','arduous','ascetic','assuage','astringent','audacious','austere','avarice','aver','axiom','bolster','bombast','bombastic','bucolic','burgeon','cacophony','canon','canonical','capricious','castigation','catalyst','caustic','censure','chary','chicanery','cogent','complaisance','connoisseur','contentious','contrite','convention','convoluted','credulous','culpable','cynicism','dearth','decorum','demur','derision','desiccate','diatribe','didactic','dilettante','disabuse','discordant','discretion','disinterested','disparage','disparate','dissemble','divulge','dogmatic','ebullience','eccentric','eclectic','effrontery','elegy','eloquent','emollient','empirical','endemic','enervate','enigmatic','ennui','ephemeral','equivocate','erudite','esoteric','eulogy','evanescent','exacerbate','exculpate','exigent','exonerate','extemporaneous','facetious','fallacy','fawn','fervent','filibuster','flout','fortuitous','fulminate','furtive','garrulous','germane','glib','grandiloquence','gregarious','hackneyed','halcyon','harangue','hedonism','hegemony','heretical','hubris','hyperbole','iconoclast','idolatrous','imminent','immutable','impassive','impecunious','imperturbable','impetuous','implacable','impunity','inchoate','incipient','indifferent','inert','infelicitous','ingenuous','inimical','innocuous','insipid','intractable','intransigent','intrepid','inured','inveigle','irascible','laconic','laud','loquacious','lucid','luminous','magnanimity','malevolent','malleable','martial','maverick','mendacity','mercurial','meticulous','misanthrope','mitigate','mollify','morose','mundane','nebulous','neologism','neophyte','noxious','obdurate','obfuscate','obsequious','obstinate','obtuse','obviate','occlude','odious','onerous','opaque','opprobrium','oscillation','ostentatious','paean','parody','pedagogy','pedantic','penurious','penury','perennial','perfidy','perfunctory','pernicious','perspicacious','peruse','pervade','pervasive','phlegmatic','pine','pious','pirate','pith','pithy','placate','platitude','plethora','plummet','polemical','pragmatic','prattle','precipitate','precursor','predilection','preen','prescience','presumptuous','prevaricate','pristine','probity','proclivity','prodigal','prodigious','profligate','profuse','proliferate','prolific','propensity','prosaic','pungent','putrefy','quaff','qualm','querulous','query','quiescence','quixotic','quotidian','rancorous','rarefy','recalcitrant','recant','recondite','redoubtable','refulgent','refute','relegate','renege','repudiate','rescind','reticent','reverent','rhetoric','salubrious','sanction','satire','sedulous','shard','solicitous','solvent','soporific','sordid','sparse','specious','spendthrift','sporadic','spurious','squalid','squander','static','stoic','stupefy','stymie','subpoena','subtle','succinct','superfluous','supplant','surfeit','synthesis','tacit','tenacity','terse','tirade','torpid','torque','tortuous','tout','transient','trenchant','truculent','ubiquitous','unfeigned','untenable','urbane','vacillate','variegated','veracity','vexation','vigilant','vilify','virulent','viscous','vituperate','volatile','voracious','waver','zealous');
  return a[parseInt(Math.random()* a.length)];
}


//I check if there is JSON otherwise I load it
if (true)//(typeof JSON == 'undefined')
{
	var headID = document.getElementsByTagName("head")[0];
	var newScript = document.createElement('script');
	newScript.type = 'text/javascript';
	newScript.src='json2_js.php';
	headID.appendChild(newScript);
}

//Global variable that stores the current status of the game
var HANGMAN;

//function that saves to local storage when it is available, otherwise nothing happens
function save_to_localstorage(key, value)
{
	if (Modernizr.localstorage) 
	{
		localStorage.setItem(key, JSON.stringify(value));
	}
}

//function that initializes the hangman variable for the first time
function initialize_hangman()
{
	HANGMAN = new Object();
	HANGMAN['played'] = 0;
	HANGMAN['won'] = 0;
	HANGMAN['level'] = 'medium';
	HANGMAN['curgame'] = new Object();
	return HANGMAN;
}
//function that initialize a new game
function new_hangman_game(hangman_var)
{
	hangman_var['curgame'] = new Object();
	var newword = getWord();
	hangman_var['curgame']['word'] = newword.toUpperCase();
	if (hangman_var['level'] == 'easy')
	{
		hangman_var['curgame']['rem_chances'] = 12;
	}
	else if (hangman_var['level'] == 'medium')
	{
		hangman_var['curgame']['rem_chances'] = 6;
	}
	else if (hangman_var['level'] == 'hard')
	{
		hangman_var['curgame']['rem_chances'] = 3;
	}
	hangman_var['curgame']['game_started'] = false;
	hangman_var['curgame']['game_status'] = 'play';
	hangman_var['curgame']['letter_guessed'] = new Object();
	//hangman_var['curgame']['letter_guessed']['A'] = true;
	return hangman_var;
}

//function that shows which level I have
function show_set_level(level)
{
	if (level == 'easy')
	{
		//I set the background color with another class
		document.getElementById("level_easy").className += " levelset";
		//I remove the background color from the others
		document.getElementById("level_medium").className = 
			   document.getElementById("level_medium").className.replace
			      ( /(?:^|\s)levelset(?!\S)/ , '' );
		document.getElementById("level_hard").className = 
			   document.getElementById("level_hard").className.replace
			      ( /(?:^|\s)levelset(?!\S)/ , '' );
	}
	else if (level == 'medium')
	{
		//I set the background color with another class
		document.getElementById("level_easy").className = 
			   document.getElementById("level_easy").className.replace
			      ( /(?:^|\s)levelset(?!\S)/ , '' );
		document.getElementById("level_medium").className += " levelset";
		document.getElementById("level_hard").className = 
			   document.getElementById("level_hard").className.replace
			      ( /(?:^|\s)levelset(?!\S)/ , '' );
	}
	else if (level == 'hard')
	{
		//I set the background color with another class
		document.getElementById("level_easy").className = 
			   document.getElementById("level_easy").className.replace
			      ( /(?:^|\s)levelset(?!\S)/ , '' );
		document.getElementById("level_medium").className = 
			   document.getElementById("level_medium").className.replace
			      ( /(?:^|\s)levelset(?!\S)/ , '' );
		document.getElementById("level_hard").className += " levelset";
	}
}

//function that changes the level of the game if the game is not started
function change_level(level)
{
	if (!HANGMAN['curgame']['game_started'])
	{
		if (level == 'easy')
		{
			HANGMAN['level'] = 'easy';
			HANGMAN['curgame']['rem_chances'] = 12;
		}
		else if (level == 'medium')
		{
			HANGMAN['level'] = 'medium';
			HANGMAN['curgame']['rem_chances'] = 6;
		}
		else if (level == 'hard')
		{
			HANGMAN['level'] = 'hard';
			HANGMAN['curgame']['rem_chances'] = 3;
		}
	
		//I save the change to the local Storage (if possible)
		save_to_localstorage('HANGMAN', HANGMAN);
		//finally I show the new level
		show_set_level(HANGMAN['level']);
		show_cur_game(HANGMAN);
	}
}
//function that shows the statistics
function show_statistics(hangman_var)
{
	//I show the number of games played
	document.getElementById("game_played").innerHTML = hangman_var['played'];
	//and the game won
	document.getElementById("game_won").innerHTML = hangman_var['won'];
}

//function that checks if a letter is in a word and in case returns an array of positions
function letter_in_word(letter, word)
{
	var positions = new Array();
	for (var i=0; i<word.length; i++)
	{
		var wl = word.charAt(i);
		if (wl == letter)
			positions.push(i);
	}
	return positions;
}

//function that checks the letters in the word
function check_word(hangman_var)
{
	//I take the word
	var word = hangman_var['curgame']['word'];
	//I create a new variable with underscore of the same lenght of the word 
	var word_underscore = new Array();
	for (var i=0; i<word.length; i++)
		word_underscore.push('_ ');
	//I take the letters already guessed
	var let_guess = hangman_var['curgame']['letter_guessed'];
	//for each letter I check if it is in the word and in case I reveal it
	for (lett in let_guess)
	{
		var positions = letter_in_word(lett, word);
		for (var x=0; x<positions.length; x++)
		{
			var cur_pos = positions[x];
			word_underscore[cur_pos] = lett + ' ';
		}
	}
	return word_underscore;
}

//function that actually shows the word
function show_word(hangman_var)
{
	//I check the word
	var word_underscore = check_word(hangman_var);
	
	//before inserting I re-create the string
	str_underscore = '';
	for (var z in word_underscore)
		str_underscore += word_underscore[z];
	//Finally I insert the new word inside the final destination
	document.getElementById("guessword").innerHTML = str_underscore;
}

//function that checks if the word is complete
function is_word_complete(hangman_var)
{
	//I check the word
	var word_underscore = check_word(hangman_var);
	//and I control if there are underscore remaining
	for (var z in word_underscore)
	{
		if (word_underscore[z] == '_ ')
			return false;
	}
	return true;
}
//function that return the complete word
function reveal_complete_word(hangman_var)
{
	//I take the word
	var word = hangman_var['curgame']['word'];
	//I create a new variable
	var wsplit = new Array();
	for (var i=0; i<word.length; i++)
	{
		var wl = word.charAt(i);
		wsplit.push(wl + ' ');
	}
	//before inserting I re-create the string
	str_revealed = '';
	for (var z in wsplit)
		str_revealed += wsplit[z];
	//Finally I insert the new word inside the final destination
	document.getElementById("guessword").innerHTML = str_revealed;
}

//function that hides in the keyboard the letters already guessed 
function hide_keyboard_letters(hangman_var)
{
	//I take the letters already guessed
	var let_guess = hangman_var['curgame']['letter_guessed'];
	for (lett in let_guess)
	{
		document.getElementById("let_"+lett).className = "hideletter";
	}
}
//function that shows all the letters in the keyboard 
function show_keyboard_letters()
{
	var alphabet = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
	for (var x in alphabet)
	{
		var lett = alphabet[x];
		document.getElementById("let_"+lett).className = 
			   document.getElementById("let_"+lett).className.replace
			      ( /(?:^|\s)hideletter(?!\S)/ , '' );
	}
}

//function that checks if a letter has been already used
function is_alredy_guessed_letter(letter, hangman_var)
{
	var let_guess = hangman_var['curgame']['letter_guessed'];
	for (var guessed in let_guess)
	{
		if (guessed == letter)
			return true;
	}
	return false;	
}

//function that shos the hangman image given the current guesses remaining and the difficulty level
function show_img(hangman_var)
{
	var images_per_level = new Object;
	images_per_level['hard'] = new Array('gallows.gif', 'man1_2.gif', 'man1_1.gif','man1_0.gif');
	images_per_level['medium'] = new Array('gallows.gif', 'man1_5.gif', 'man1_4.gif', 'man1_3.gif', 'man1_2.gif', 'man1_1.gif','man1_0.gif');
	images_per_level['easy'] = new Array('', 'gallow1.gif', 'gallow2.gif', 'gallow3.gif', 'gallow4.gif', 'gallow5.gif', 'gallows.gif', 'man1_5.gif', 'man1_4.gif', 'man1_3.gif', 'man1_2.gif', 'man1_1.gif','man1_0.gif');
	
	var level = hangman_var['level'];
	var rem_chances = hangman_var['curgame']['rem_chances'];
	var img_to_show = '';
	if (level == 'easy')
	{
		var id = 12 - rem_chances;
		img_to_show = images_per_level['easy'][id];
	}
	else if (level == 'medium')
	{
		var id = 6 - rem_chances;
		img_to_show = images_per_level['medium'][id];
	}
	else if (level == 'hard')
	{
		var id = 3 - rem_chances;
		img_to_show = images_per_level['hard'][id];
	}
	
	//finally I show the image
	//first I remove the previous one
	document.getElementById("cur_img").innerHTML = '';
	if (img_to_show != '')
	{
		var oImg=document.createElement("img");
		oImg.setAttribute('src', 'img/'+img_to_show);
		oImg.setAttribute('alt', ('Image for remaining chances: '+rem_chances));
		oImg.setAttribute('height', '150');
		oImg.setAttribute('width', '75');
		var imgID = document.getElementById("cur_img");
		imgID.appendChild(oImg);
	}
}

//function that actually starts or recover a  game
function show_cur_game(hangman_var)
{
	if (HANGMAN['curgame']['game_status'] == 'play')
	{
		//I load the current attempts left
		document.getElementById("rem_chances").innerHTML = 'Remaining chances: ' + hangman_var['curgame']['rem_chances'];
		//I show the word
		show_word(hangman_var);
	}
	else if (HANGMAN['curgame']['game_status'] == 'won')
	{
		//I write the correct status
		document.getElementById("rem_chances").innerHTML = '<span class="endgame">YOU WON!</span>';
		//I show the word
		show_word(hangman_var);
		//I show the new statistics
		show_statistics(hangman_var);
	}
	else if (HANGMAN['curgame']['game_status'] == 'lost')
	{
		//I write the correct status
		document.getElementById("rem_chances").innerHTML = '<span class="endgame">YOU LOST!</span>';
		//I reveal the word
		reveal_complete_word(hangman_var);
		//I show the new statistics
		show_statistics(hangman_var);
	}
	//I hide the letters that I cannot click any more
	hide_keyboard_letters(hangman_var);
	//I show the right image
	show_img(hangman_var);
}

//function that force the start of a new game
function start_new_game()
{
	//I initialize a new game
	HANGMAN = new_hangman_game(HANGMAN);
	//I save the new variable in the localStorage
	save_to_localstorage('HANGMAN', HANGMAN);
	//I show all the keyboard again
	show_keyboard_letters();
	//I actually show the game
	show_cur_game(HANGMAN);
}


//function that guesses a letter
function guess_letter(lett)
{
	if (! is_alredy_guessed_letter(lett, HANGMAN))
	{
		if (HANGMAN['curgame']['rem_chances'] > 0)
		{
			//I update the status of the game if necessary
			if (!HANGMAN['curgame']['game_started'])
				HANGMAN['curgame']['game_started'] = true;
			
			//In any case I add the leter to the global variable
			HANGMAN['curgame']['letter_guessed'][lett] = true;
			
			//I get the word to find
			var word = HANGMAN['curgame']['word'];
			//I check if there are some instances of the current letter in the word
			var positions = letter_in_word(lett, word);
			//If I have at least one position, then I found a letter in the word 
			//and I have to check if all the word has been revealed
			if (positions.length >0)
			{
				//check if all the word has been revealed
				if (is_word_complete(HANGMAN))
				{
					//I update the stats
					HANGMAN['played'] = HANGMAN['played'] + 1;
					HANGMAN['won'] = HANGMAN['won'] + 1;
					HANGMAN['curgame']['game_status'] = 'won';
				}
			}
			//Otherwise I have to reduce the future changes and check if this was the last one!
			else
			{
				HANGMAN['curgame']['rem_chances'] = HANGMAN['curgame']['rem_chances'] -1;
				if (HANGMAN['curgame']['rem_chances'] == 0)
				{
					//I update the stats
					HANGMAN['played'] += 1;
					HANGMAN['curgame']['game_status'] = 'lost';
				}
			}
			//I save the new variable in the localStorage
			save_to_localstorage('HANGMAN', HANGMAN);
			//and I show the current situation
			show_cur_game(HANGMAN);
		}
	}
}

//////////////////
// MAIN
//////////////////
//then I actually initialize the game
if (Modernizr.localstorage) 
{
	//I try to get previous saved infos
	try
	{
		HANGMAN = JSON.parse(localStorage.getItem('HANGMAN'));
	}
	catch(err)
	{
		HANGMAN == null;
	}
	
	//if HANGMAN is null then I need to initialaze he variables
	if (HANGMAN == null)
	{
		HANGMAN = initialize_hangman();
		HANGMAN = new_hangman_game(HANGMAN);
		localStorage.setItem('HANGMAN', JSON.stringify(HANGMAN));
	}
} 
else 
{
	// 'Sadly, there is no support for Web Storage or cookies that we could use to emulate it.';
	HANGMAN = initialize_hangman();
	HANGMAN = new_hangman_game(HANGMAN);
}

//I show the set of the level
show_set_level(HANGMAN['level']);
//I show the statistics
show_statistics(HANGMAN);
//I show the game (new o recovered)
show_cur_game(HANGMAN);
