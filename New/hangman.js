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
if (typeof JSON == 'undefined')
{
	var headID = document.getElementsByTagName("head")[0];
	var newScript = document.createElement('script');
	newScript.type = 'text/javascript';
	newScript.src='json2.js';
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
function new_hangman_game(hangman_status_var)
{
	hangman_status_var['curgame'] = new Object();
	hangman_status_var['curgame']['word'] = getWord();
	if (hangman_status_var['level'] == 'easy')
	{
		hangman_status_var['curgame']['rem_chances'] = 12;
	}
	else if (hangman_status_var['level'] == 'medium')
	{
		hangman_status_var['curgame']['rem_chances'] = 6;
	}
	else if (hangman_status_var['level'] == 'hard')
	{
		hangman_status_var['curgame']['rem_chances'] = 3;
	}
	hangman_status_var['curgame']['game_started'] = false;
	hangman_status_var['curgame']['letter_guessed'] = new Object();
	return hangman_status_var;
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
	}
	//I save the change to the local Storage (if possible)
	save_to_localstorage('HANGMAN', HANGMAN);
	//finally I show the new level
	show_set_level(HANGMAN['level']);
}
//function that shows the statistics
function show_statistics(hangman_var)
{
	//I show the number of games played
	document.getElementById("game_played").innerHTML = hangman_var['played'];
	//and the game won
	document.getElementById("game_won").innerHTML = hangman_var['won'];
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
