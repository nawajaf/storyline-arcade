window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const input = object('5UrXYmQLluD');

// boxes for first guess
const guess00 = object('5phXKIWBQef');
const guess01 = object('63J8pPUjUiQ');
const guess02 = object('6ALE93TDDRa');
const guess03 = object('6gBcnl8DV7z');
const guess04 = object('6NVY9BQumW3');

// boxes for second guess
const guess10 = object('6D7WBx3gnvL');
const guess11 = object('6AWBVcW9yip');
const guess12 = object('6Cw0WWLBs8a');
const guess13 = object('5ojopJzlofg');
const guess14 = object('6P6HE5Bj9Q1');

// boxes for third guess
const guess20 = object('6rojtUTJ6um');
const guess21 = object('6NDTWhErUkx');
const guess22 = object('6nr2rYLxGxp');
const guess23 = object('6A1vjdVdn04');
const guess24 = object('6b3Ol515nlV');

// boxes for fourth guess
const guess30 = object('5oxYDLwYByJ');
const guess31 = object('6YAMGocuiZW');
const guess32 = object('5zXANpaUQne');
const guess33 = object('6OM5HsHJ0Ob');
const guess34 = object('5yIABBDAyVx');

// boxes for fifth guess
const guess40 = object('65Ysmkx9fTz');
const guess41 = object('5VzJUo14kAS');
const guess42 = object('5gFX2ZOzZpP');
const guess43 = object('5ynMLZ1nRPl');
const guess44 = object('6ddW4YoaXck');

// boxes for sixth guess
const guess50 = object('69dnivZoFYq');
const guess51 = object('6IWb3HE1tAW');
const guess52 = object('6c0ypQBCdEh');
const guess53 = object('5nr9WHmUxj2');
const guess54 = object('6BM86H47JMO');

// 2D array — each inner array is one row of boxes
const allRows = [
    [guess00, guess01, guess02, guess03, guess04],
    [guess10, guess11, guess12, guess13, guess14],
    [guess20, guess21, guess22, guess23, guess24],
    [guess30, guess31, guess32, guess33, guess34],
    [guess40, guess41, guess42, guess43, guess44],
    [guess50, guess51, guess52, guess53, guess54]
];

// letter variable prefixes per row: row 0 = "letter0", row 1 = "letter1", etc.
const letterPrefixes = ["letter0", "letter1", "letter2", "letter3", "letter4", "letter5"];

//reset state of all boxes and text boxes
for (var i = 0; i < 6; i++) {
	for (var j = 0; j < 5; j++){
       allRows[i][j].state = "Normal";
       player.SetVar(letterPrefixes[i] + j, "");
    }
}

//set first row to active 
guess00.state = "active";
guess01.state = "active";
guess02.state = "active";
guess03.state = "active";
guess04.state = "active"; 

let wordList = [
    "ABOUT", "ABOVE", "ABUSE", "ACTOR", "ACUTE",
    "ADMIT", "ADOPT", "ADULT", "AFTER", "AGAIN",
    "AGENT", "AGREE", "AHEAD", "ALARM", "ALBUM",
    "ALERT", "ALIKE", "ALIVE", "ALLEY", "ALLOW",
    "ALONE", "ALONG", "ALOUD", "ALTER", "ANGEL",
    "ANGER", "ANGLE", "ANGRY", "ANIME", "ANKLE",
    "ANNEX", "APART", "APPLE", "APPLY", "ARENA",
    "ARGUE", "ARISE", "ARMED", "ARMY",  "AROSE",
    "APART", "ARROW", "ASHEN", "ASKED", "AVOID",
    "AWAKE", "AWARD", "AWARE", "AWFUL", "BASIC",
    "BASIS", "BATCH", "BEACH", "BEARD", "BEAST",
    "BEGIN", "BEING", "BELOW", "BENCH", "BIBLE",
    "BIRTH", "BLACK", "BLADE", "BLAME", "BLAND",
    "BLAST", "BLAZE", "BLEED", "BLEND", "BLESS",
    "BLIND", "BLOCK", "BLOOD", "BLOOM", "BLOWN",
    "BOARD", "BONUS", "BOOST", "BOUND", "BRAIN",
    "BRAND", "BRAVE", "BREAD", "BREAK", "BREED",
    "BRICK", "BRIDE", "BRIEF", "BRING", "BROKE",
    "BROWN", "BRUSH", "BUILD", "BUILT", "BUNCH",
    "BURST", "BUYER", "CABIN", "CAMEL", "CANDY",
    "CARRY", "CATCH", "CAUSE", "CHAIN", "CHAIR",
    "CHAOS", "CHARM", "CHART", "CHASE", "CHEAP",
    "CHECK", "CHEEK", "CHESS", "CHEST", "CHIEF",
    "CHILD", "CHINA", "CHUNK", "CIVIC", "CIVIL",
    "CLAIM", "CLASH", "CLASS", "CLEAN", "CLEAR",
    "CLIMB", "CLING", "CLOCK", "CLOSE", "CLOUD",
    "COACH", "COAST", "COLOR", "COMES", "COMIC",
    "CORAL", "COULD", "COUNT", "COURT", "COVER",
    "CRACK", "CRAFT", "CRASH", "CRAZY", "CREAM",
    "CREEK", "CRIME", "CROSS", "CROWD", "CROWN",
    "CRUSH", "CURVE", "CYCLE", "DAILY", "DANCE",
    "DATED", "DEALT", "DEATH", "DEBUT", "DECAL",
    "DECAY", "DELAY", "DEMON", "DEPOT", "DEPTH",
    "DERBY", "DEVIL", "DIRTY", "DISCO", "DODGE",
    "DOING", "DOUBT", "DOUGH", "DRAFT", "DRAIN",
    "DRAMA", "DRANK", "DRAWN", "DREAM", "DRESS",
    "DRIFT", "DRINK", "DRIVE", "DROVE", "DYING",
    "EAGLE", "EARLY", "EARTH", "EIGHT", "EMAIL",
    "EMPTY", "ENEMY", "ENJOY", "ENTER", "EQUAL",
    "ERROR", "ESSAY", "EVEN",  "EVENT", "EVERY",
    "EXACT", "EXIST", "EXTRA", "FAINT", "FAIRY",
    "FAITH", "FALSE", "FANCY", "FARCE", "FATAL",
    "FAULT", "FEAST", "FENCE", "FEVER", "FIELD",
    "FIFTH", "FIFTY", "FIGHT", "FINAL", "FIRST",
    "FIXED", "FLAME", "FLASH", "FLESH", "FLOCK",
    "FLOOD", "FLOOR", "FLOUR", "FLUID", "FLUNK",
    "FOCUS", "FORCE", "FORGE", "FORTH", "FORTY",
    "FORUM", "FOUND", "FRAME", "FRANK", "FRAUD",
    "FRESH", "FRONT", "FROZE", "FRUIT", "FULLY",
    "FUNNY", "GHOST", "GIANT", "GIVEN", "GLASS",
    "GLOOM", "GLOSS", "GLOVE", "GOING", "GRACE",
    "GRADE", "GRAND", "GRANT", "GRASP", "GRASS",
    "GRAVE", "GREAT", "GREEN", "GRIEF", "GRILL",
    "GROAN", "GROUP", "GROVE", "GROWN", "GUARD",
    "GUESS", "GUEST", "GUIDE", "GUILD", "GUILT",
    "GUISE", "HANDY", "HAPPY", "HARSH", "HAVEN",
    "HEART", "HEAVY", "HENCE", "HERBS", "HERON",
    "HONEY", "HONOR", "HORSE", "HOTEL", "HOUSE",
    "HUMAN", "HUMOR", "HURRY", "IDEAL", "IMAGE",
    "IMPLY", "INDEX", "INDIE", "INNER", "INPUT",
    "ISSUE", "ITALY", "IVORY", "JEWEL", "JOINT",
    "JONES", "JUDGE", "JUICE", "JUICY", "JUMBO",
    "KARMA", "KNIFE", "KNOCK", "KNOWN", "LABEL",
    "LARGE", "LASER", "LATER", "LAUGH", "LAYER",
    "LEARN", "LEASE", "LEAST", "LEAVE", "LEGAL",
    "LEVEL", "LIGHT", "LIMIT", "LINEN", "LIVER",
    "LOCAL", "LODGE", "LOGIC", "LOOSE", "LOVER",
    "LOWER", "LUCKY", "LUNCH", "LYING", "MAGIC",
    "MAJOR", "MAKER", "MANOR", "MAPLE", "MARCH",
    "MATCH", "MAYOR", "MEDIA", "MERCY", "MERGE",
    "MERIT", "METAL", "MIGHT", "MINOR", "MINUS",
    "MIXED", "MODEL", "MONEY", "MONTH", "MORAL",
    "MOTOR", "MOUNT", "MOUSE", "MOUTH", "MOVED",
    "MOVIE", "MUSIC", "NAIVE", "NASTY", "NERVE",
    "NEVER", "NIGHT", "NINJA", "NOBLE", "NOISE",
    "NORTH", "NOTED", "NOVEL", "NURSE", "NYLON",
    "OCCUR", "OFFER", "OFTEN", "OLIVE", "ONSET",
    "OPERA", "ORBIT", "ORDER", "OTHER", "OUGHT",
    "OUTER", "OWNER", "OZONE", "PAINT", "PANEL",
    "PANIC", "PAPER", "PARTY", "PASTA", "PATCH",
    "PAUSE", "PEACE", "PEACH", "PENNY", "PHASE",
    "PHONE", "PHOTO", "PIANO", "PIECE", "PILOT",
    "PITCH", "PIZZA", "PLACE", "PLAIN", "PLANE",
    "PLANT", "PLATE", "PLAZA", "PLEAD", "PLUCK",
    "PLUGS", "POINT", "POLAR", "POPPY", "POSED",
    "POUND", "POWER", "PRESS", "PRICE", "PRIDE",
    "PRIME", "PRINT", "PRIOR", "PRIZE", "PROBE",
    "PRONE", "PROOF", "PROUD", "PROVE", "PSALM",
    "PULSE", "PUNCH", "PUPIL", "PURSE", "QUEEN",
    "QUEST", "QUEUE", "QUICK", "QUIET", "QUOTA",
    "QUOTE", "RADAR", "RADIO", "RAISE", "RALLY",
    "RANCH", "RANGE", "RAPID", "RATIO", "REACH",
    "READY", "REALM", "REBEL", "REFER", "REIGN",
    "RELAX", "REPAY", "REPLY", "RIDER", "RIDGE",
    "RIGHT", "RIGID", "RISKY", "RIVAL", "RIVER",
    "ROBIN", "ROBOT", "ROCKY", "ROMAN", "ROUGH",
    "ROUND", "ROUTE", "ROYAL", "RULER", "RURAL",
    "SADLY", "SAINT", "SALAD", "SAUCE", "SCALE",
    "SCALP", "SCARY", "SCENE", "SCOPE", "SCORE",
    "SENSE", "SERVE", "SEVEN", "SHADE", "SHAKE",
    "SHALL", "SHAME", "SHAPE", "SHARE", "SHARK",
    "SHARP", "SHEEP", "SHEER", "SHELF", "SHELL",
    "SHIFT", "SHINE", "SHIRT", "SHOCK", "SHORE",
    "SHORT", "SHOUT", "SIGHT", "SILLY", "SINCE",
    "SIXTH", "SIXTY", "SIZED", "SKILL", "SLASH",
    "SLAVE", "SLEEP", "SLICE", "SLIDE", "SLOPE",
    "SMALL", "SMART", "SMELL", "SMILE", "SMOKE",
    "SNAKE", "SOLAR", "SOLID", "SOLVE", "SORRY",
    "SOUTH", "SPACE", "SPARE", "SPARK", "SPEAK",
    "SPEED", "SPEND", "SPILL", "SPINE", "SPITE",
    "SPLIT", "SPOKE", "SPOON", "SPORT", "SPRAY",
    "SQUAD", "STAFF", "STAGE", "STAIN", "STAIR",
    "STAKE", "STALE", "STAND", "STARK", "START",
    "STATE", "STAYS", "STEAL", "STEAM", "STEEL",
    "STEEP", "STEER", "STERN", "STICK", "STIFF",
    "STILL", "STOCK", "STONE", "STOOD", "STORE",
    "STORM", "STORY", "STRAP", "STRAW", "STRIP",
    "STUCK", "STUDY", "STUFF", "STYLE", "SUGAR",
    "SUITE", "SUNNY", "SUPER", "SURGE", "SWAMP",
    "SWEAR", "SWEEP", "SWEET", "SWEPT", "SWIFT",
    "SWING", "SWORD", "SWORE", "SWORN", "TABLE",
    "TASTE", "TEACH", "TEARS", "TEETH", "THANK",
    "THEIR", "THEME", "THERE", "THICK", "THING",
    "THINK", "THIRD", "THORN", "THOSE", "THREE",
    "THREW", "THROW", "TIGHT", "TIMER", "TIRED",
    "TITLE", "TODAY", "TOKEN", "TOTAL", "TOUCH",
    "TOUGH", "TOWEL", "TOWER", "TOXIC", "TRACK",
    "TRADE", "TRAIL", "TRAIN", "TRAIT", "TRAMP",
    "TRASH", "TREAT", "TREND", "TRIAL", "TRIBE",
    "TRICK", "TRIED", "TROOP", "TRUCK", "TRULY",
    "TRUMP", "TRUNK", "TRUST", "TRUTH", "TUMOR",
    "TWICE", "TWIST", "TYING", "TYPED", "ULTRA",
    "UNCLE", "UNDER", "UNDUE", "UNION", "UNITY",
    "UNTIL", "UPPER", "UPSET", "URBAN", "USAGE",
    "USUAL", "UTTER", "VAGUE", "VALID", "VALUE",
    "VALVE", "VIDEO", "VIGOR", "VIRAL", "VISIT",
    "VISTA", "VITAL", "VIVID", "VOCAL", "VOICE",
    "VOTER", "WAGON", "WASTE", "WATCH", "WATER",
    "WEARY", "WEAVE", "WEDGE", "WEIGH", "WEIRD",
    "WHALE", "WHEAT", "WHEEL", "WHERE", "WHICH",
    "WHILE", "WHITE", "WHOLE", "WHOSE", "WIDER",
    "WITCH", "WOMAN", "WOMEN", "WORLD", "WORRY",
    "WORSE", "WORST", "WORTH", "WOULD", "WOUND",
    "WRATH", "WRITE", "WRONG", "WROTE", "YACHT",
    "YOUNG", "YOURS", "YOUTH", "ZESTY", "ZEBRA"
];

let randomIndex = Math.floor(Math.random() * wordList.length);
let chosenWord = wordList[randomIndex];
setVar("wordleAnswer", chosenWord);
setVar("wordleCurrentRow", 0);
setVar("wordleWin", false);
setVar("wordleLose", false);

// ===== TIMER (fixed) =====

// Stop any previous timer before starting a new one
if (window.wordleTimerInterval) {
    clearInterval(window.wordleTimerInterval);
    window.wordleTimerInterval = null;
}

let totalSeconds = 0;
setVar("wordleDisplayMinutes", "00");
setVar("wordleDisplaySeconds", "00");

window.wordleTimerInterval = setInterval(function() {
    totalSeconds++;

    let mins = Math.floor(totalSeconds / 60);
    let secs = totalSeconds % 60;

    let formattedMins = mins < 10 ? "0" + mins : mins;
    let formattedSecs = secs < 10 ? "0" + secs : secs;

    player.SetVar("wordleDisplayMinutes", formattedMins.toString());
    player.SetVar("wordleDisplaySeconds", formattedSecs.toString());
}, 1000);


}

window.Script2 = function()
{
  const input = object('5UrXYmQLluD');
// boxes for first guess
const guess00 = object('5phXKIWBQef');
const guess01 = object('63J8pPUjUiQ');
const guess02 = object('6ALE93TDDRa');
const guess03 = object('6gBcnl8DV7z');
const guess04 = object('6NVY9BQumW3');

// boxes for second guess
const guess10 = object('6D7WBx3gnvL');
const guess11 = object('6AWBVcW9yip');
const guess12 = object('6Cw0WWLBs8a');
const guess13 = object('5ojopJzlofg');
const guess14 = object('6P6HE5Bj9Q1');

// boxes for third guess
const guess20 = object('6rojtUTJ6um');
const guess21 = object('6NDTWhErUkx');
const guess22 = object('6nr2rYLxGxp');
const guess23 = object('6A1vjdVdn04');
const guess24 = object('6b3Ol515nlV');

// boxes for fourth guess
const guess30 = object('5oxYDLwYByJ');
const guess31 = object('6YAMGocuiZW');
const guess32 = object('5zXANpaUQne');
const guess33 = object('6OM5HsHJ0Ob');
const guess34 = object('5yIABBDAyVx');

// boxes for fifth guess
const guess40 = object('65Ysmkx9fTz');
const guess41 = object('5VzJUo14kAS');
const guess42 = object('5gFX2ZOzZpP');
const guess43 = object('5ynMLZ1nRPl');
const guess44 = object('6ddW4YoaXck');

// boxes for sixth guess
const guess50 = object('69dnivZoFYq');
const guess51 = object('6IWb3HE1tAW');
const guess52 = object('6c0ypQBCdEh');
const guess53 = object('5nr9WHmUxj2');
const guess54 = object('6BM86H47JMO');

// 2D array — each inner array is one row of boxes
const allRows = [
    [guess00, guess01, guess02, guess03, guess04],
    [guess10, guess11, guess12, guess13, guess14],
    [guess20, guess21, guess22, guess23, guess24],
    [guess30, guess31, guess32, guess33, guess34],
    [guess40, guess41, guess42, guess43, guess44],
    [guess50, guess51, guess52, guess53, guess54]
];

// letter variable prefixes per row: row 0 = "letter0", row 1 = "letter1", etc.
const letterPrefixes = ["letter0", "letter1", "letter2", "letter3", "letter4", "letter5"];

// get current values
let guess = player.GetVar("TextEntry").trim().toUpperCase();
let answer = player.GetVar("wordleAnswer").toUpperCase();
let row = player.GetVar("wordleCurrentRow"); // 0-5

var answerArr = answer.split("");
var result = ["", "", "", "", ""];

// validation
if (guess.length !== 5) {
    player.SetVar('errorMessage', "You must enter a 5 letter word");
    setVar("wordleShowError", true);
    player.SetVar("TextEntry", "");
    return;
} else if (row >= 6) {
    player.SetVar('errorMessage', "You have run out of guesses :(");
    setVar("wordleShowError", true);
    player.SetVar("TextEntry", "");
    return;
}


// first pass: greens
for (var i = 0; i < 5; i++) {
    if (guess[i] === answerArr[i]) {
        result[i] = "green";
        answerArr[i] = null;
    }
}

// second pass: yellows
for (var i = 0; i < 5; i++) {
    if (result[i] === "green") continue;
    var idx = answerArr.indexOf(guess[i]);
    if (idx !== -1) {
        result[i] = "yellow";
        answerArr[idx] = null;
    }
}

// write letters to the correct row's variables
for (var i = 0; i < 5; i++) {
    player.SetVar(letterPrefixes[row] + i, guess[i]);
}

// update box states for the correct row
for (var i = 0; i < 5; i++) {
    if (result[i] === "green") {
        allRows[row][i].state = "green";
    } else if (result[i] === "yellow") {
        allRows[row][i].state = "yellow";
    } else {
       allRows[row][i].state = "Normal";
    }
}

// check for win before incrementing
var win = result.every(function(r) { return r === "green"; });

// increment row
row = row + 1;
setVar('wordleCurrentRow', row);

// win/lose handling
if (win) {
    player.SetVar('errorMessage', "Well done! 🎉");
    setVar("wordleWin", true);
    setVar("stopTimer", true);
    setVar("wordlelose", false);
    // optional: player.GoToSlide('winSlide') or set a variable to trigger a layer
} else if (row >= 6) {
	setVar("gameStart", false);
	setVar("wordleWin", false);
	setVar("wordleLose", true);
	setVar("stopTimer", true);
    player.SetVar('errorMessage', "Out of guesses! The word was " + answer);
}

//set state of next row to active
for (var i = 0; i < 5; i++) {
   allRows[row][i].state = "active";
}

player.SetVar("TextEntry", "");

}

window.Script3 = function()
{
  if (window.wordleTimerInterval) {
    clearInterval(window.wordleTimerInterval);
    window.wordleTimerInterval = null;
}
}

window.Script4 = function()
{
  const star = object('6BGudUibQJt');
const star1 = object('6UHLhByM3Qa');
const star10 = object('6NZd6YmDeE2');
const star11 = object('6MBOLMGiqQF');
const star12 = object('5gLte1JbF1E');
const star14 = object('5dz8LSjnwZC');
const star13 = object('6r18Ui5dfdC');
const star15 = object('5cGCFXlAgbh');
const star16 = object('6aS4Nrbjs2y');
const star17 = object('6bwlg86FXl9');
const star18 = object('642ncjyk8kZ');
const star19 = object('6JwBHVh18Jm');
const star2 = object('6pSOMU6Roel');
const star20 = object('5VCTJXhfLBx');
const star21 = object('5r7BZ055vSI');
const star22 = object('6ZWb2pWRxGZ');
const star23 = object('6oHLmXcnVFp');
const star24 = object('6Wlw1baeuii');
const star25 = object('6pw6SYRTQvo');
const star26 = object('6DPhG85brfL');
const star27 = object('69LP7wVzJqR');
const star28 = object('5y1ZJiTiTtC');
const star29 = object('5aLvhnc2BF0');
const star3 = object('5zwyRrwjp0F');
const star30 = object('5q6mvo7YUz4');
const star31 = object('67JOxfW4zzj');
const star32 = object('5Y5CTwQRz2z');
const star33 = object('5bIYBZmIlrV');
const star34 = object('6HDkwLXKrwL');
const star35 = object('6e7OL5JcPLC');
const star36 = object('6Ia9UjI5jMr');
const star37 = object('6EYIHSGk6T7');
const star38 = object('65f6kuwzquv');
const star39 = object('6Wil19fHesA');
const star4 = object('6o45pypdWG6');
const star40 = object('5br7x3Ookr7');
const star41 = object('5qw9haQCWSB');
const star42 = object('6b4xO5KfsBi');
const star43 = object('6cmrtvCs5II');
const star44 = object('5aSZOi05cmU');
const star45 = object('6ULxRDRa2a5');
const star46 = object('6DV7HWMDzpL');
const star47 = object('6cnQlaiMVK1');
const star48 = object('5mg6XG77xKz');
const star49 = object('63pdF1pMsAM');
const star5 = object('5pVhcHfImWJ');
const star6 = object('5o7xsLfiXz0');
const star7 = object('6A07Rn7knfL');
const star8 = object('5tDAEcw1Ppg');
const star9 = object('6YqGD7L4Dee');
const star50 = object('660DGZY2NBU');
const star51 = object('6J8rV060YWo');
const star52 = object('6TZJ9xrX8qT');
const star53 = object('6qvv6nxgSOR');
const star54 = object('65QK89lD4pW');
const star55 = object('6eINDg1sZRg');
const star56 = object('61SVGYDI2OI');
const star57 = object('6JBJgNS7o6o');
const star58 = object('6a2Q8KowZbT');
const star59 = object('6IKPSzPzsSb');
const star60 = object('665CoUVXhdl');
const star61 = object('6btTM7eGCTu');
const star62 = object('6FtYOAywu0I');
const star64 = object('5mx6NafJ7C8');
const star63 = object('5agMNEHlMWl');
const star66 = object('6iDn0Wt4WdG');
const star65 = object('6eRhBshuYAX');
const star67 = object('5cERzHAcvPY');
const star68 = object('6ZpZG3vjEln');
const star69 = object('5YZT1rMblke');
const star70 = object('5jEtwDdxMNS');
const star72 = object('5sklcO9Z7fg');
const star71 = object('6gvcNmxv5Gz');
const star73 = object('6VniKZIP5Lq');
const star74 = object('5nbbvUSaqGh');
const star75 = object('6hV3VKOz7Ca');
const star76 = object('68GDKtyA77A');
const star77 = object('6JNTxvdnlO6');
const star78 = object('6lJ1ljUNmsb');
const star79 = object('6WLMeqnamE3');
const you = object('6NlFJipfnJT');
const you2 = object('6GAsABvhdaX');
const win = object('6NVQrbfLQrm');
const win2 = object('6Q4AnDI0H3U');
const textBox1 = object('5Vs2fmZ39iQ');

const button1 = object('5baUFzf7g6o');

const word0 = object('6MhK45q17ma');
const word1 = object('5bqyTkYSqGY');
const word3 = object('69P14igbjOs');
const word4 = object('6JLIduI0LNw');
const word2 = object('6jeJe9zBLzh');

const words = [word0, word1, word2, word3, word4];
//put each word in an array
const youText = [you, you2];
const winText = [win, win2];
const text = [youText, winText];

if (window.wordleTimerInterval) {
    clearInterval(window.wordleTimerInterval);
    window.wordleTimerInterval = null;
}

//put all stars in an array
const stars = [
  star, star1, star2, star3, star4, star5, star6, star7, star8, star9,
  star10, star11, star12, star13, star14, star15, star16, star17, star18, star19,
  star20, star21, star22, star23, star24, star25, star26, star27, star28, star29,
  star30, star31, star32, star33, star34, star35, star36, star37, star38, star39,
  star40, star41, star42, star43, star44, star45, star46, star47, star48, star49
];
const stars2 = [
  star50, star51, star52, star53, star54, star55, star56, star57, star58, star59,
  star60, star61, star62, star63, star64, star65, star66, star67, star68, star69,
  star70, star71, star72, star73, star74, star75, star76, star77, star78, star79
];

//get winning wordle word 
let winningWord = getVar("wordleAnswer").split('');

// write letters to the correct row's variables
for (var i = 0; i < 5; i++) {
    player.SetVar("winWord" + i, winningWord[i]);
}


//animate you text in
gsap.from(youText, {
	y:-100, 
	duration:1.5, 
	ease:"bounce",
});
//animate was text in
gsap.from(winText, {
	y:-100, 
	duration:1.5, 
	ease:"bounce",
	delay: 1,
});
//animate you win to flash
gsap.to(text, {
  opacity: 0,
  duration: 1,
  repeat: -1, // Loops indefinitely
  yoyo: true, // Reverses back to 1, creating a flash
  ease: "power1.inOut",
  delay:3,
});


gsap.from(words, {
	y:700, 
	duration:0.7, 
	ease:"bounce",
	delay: 4,
	stagger: {
		each: 0.5,
	}
});

gsap.from(button1, {
	y:700, 
	duration:0.7, 
	ease:"bounce",
	delay: 10,
});

gsap.from(textBox1, {
	y:700, 
	duration:0.7, 
	ease:"bounce",
	delay: 8,
});
//have starts stagger and fall
gsap.to(stars2, {
  y: 550,
  duration: 11,
  ease: "back.inOut",
  stagger: {
    each: 0.3,
    repeat: -1,
  }
});
//have starts stagger and fall
gsap.to(stars, {
  y: 600,
  duration: 15,
  ease: "back.inOut",
  stagger: {
    each: 0.3,
    repeat: -1,
  }
});
}

window.Script5 = function()
{
  const smileyFace1 = object('6PmbQHHvamo');
const smileyFace10 = object('5UouljonJQg');
const smileyFace11 = object('5z4b992LDFv');
const smileyFace12 = object('6eECjlZP8It');
const smileyFace13 = object('6U0HbmWwFWF');
const smileyFace15 = object('6Vx4mLOm99h');
const smileyFace14 = object('6D2eJ065YfI');
const smileyFace16 = object('6CbLhMtKVbX');
const smileyFace17 = object('5WgnqLYwSWx');
const smileyFace18 = object('6cukEiEgeDb');
const smileyFace19 = object('6D7NOUe6vVe');
const smileyFace2 = object('6IUzKv48Bow');
const smileyFace20 = object('6q8mJdPHlDN');
const smileyFace4 = object('6DEtp9doINH');
const smileyFace5 = object('6ZgvYQnD5yU');
const smileyFace6 = object('64M0H0u7UKh');
const smileyFace7 = object('6Olu44jlGEk');
const smileyFace8 = object('5j8XuwasaCe');
const smileyFace9 = object('5Vb6qi1U0e0');
const smileyFace21 = object('681U0UzbodX');
const smileyFace23 = object('6j4JMQmXwvr');
const smileyFace22 = object('6DfmjfkZt19');
const smileyFace24 = object('6XwimWngmIb');
const smileyFace25 = object('5nxe3Eb0XQK');
const smileyFace26 = object('6BZhAoRf7nl');
const smileyFace27 = object('6gabDu4Iv5e');
const smileyFace28 = object('5jwB5epqg6L');
const smileyFace29 = object('6Htu3fx1R1W');
const smileyFace30 = object('62vx8V1T8yr');
const smileyFace31 = object('61Hy9hYIva1');
const smileyFace32 = object('61kRMO3xNY0');
const smileyFace33 = object('5wGpjb18El0');
const smileyFace34 = object('6Azozjqn9q8');
const smileyFace35 = object('6RcQBMAp8aw');
const smileyFace36 = object('5g5h3YI1tYv');
const smileyFace37 = object('5yqDRW6aD1h');
const smileyFace38 = object('694GKn4mTIg');
const smileyFace39 = object('63orfDvzsg8');
const smileyFace40 = object('6feuOtNuHnY');
const smileyFace3 = object('6V3dY3qT7C4');
const textBox2 = object('6774YF3TTVP');

const button1 = object('63NS6ML5oN4');


const smileyFaces = [
  smileyFace1, smileyFace2, smileyFace3, smileyFace4, smileyFace5,
  smileyFace6, smileyFace7, smileyFace8, smileyFace9, smileyFace10,
  smileyFace11, smileyFace12, smileyFace13, smileyFace14, smileyFace15,
  smileyFace16, smileyFace17, smileyFace18, smileyFace19, smileyFace20
];

const smileyFaces2 = [
  smileyFace21, smileyFace22, smileyFace23, smileyFace24, smileyFace25,
  smileyFace26, smileyFace27, smileyFace28, smileyFace29, smileyFace30,
  smileyFace31, smileyFace32, smileyFace33, smileyFace34, smileyFace35,
  smileyFace36, smileyFace37, smileyFace38, smileyFace39, smileyFace40
];

if (window.wordleTimerInterval) {
    clearInterval(window.wordleTimerInterval);
    window.wordleTimerInterval = null;
}
const you = object('6bEOtxfWn3w');
const you2 = object('6gfAyXSPCBo');
const win = object('68klwUU0LJZ');
const win2 = object('5ghJE6BYp3u');

const word0 = object('6QRf0b5mjNy');
const word1 = object('65dsfp2gerT');
const word3 = object('6LOYQAmx8SL');
const word4 = object('5lTtJhP243m');
const word2 = object('6eLHvstawpH');

const words = [word0, word1, word2, word3, word4];
//put each word in an array
const youText = [you, you2];
const winText = [win, win2];
const text = [youText, winText];


//get winning wordle word 
let winningWord = getVar("wordleAnswer").split('');

// write letters to the correct row's variables
for (var i = 0; i < 5; i++) {
    player.SetVar("winWord" + i, winningWord[i]);
}


//animate you text in
gsap.from(youText, {
	y:-100, 
	duration:1.5, 
	ease:"bounce",
});
//animate was text in
gsap.from(winText, {
	y:-100, 
	duration:1.5, 
	ease:"bounce",
	delay: 1,
});
//animate you win to flash
gsap.to(text, {
  opacity: 0,
  duration: 1,
  repeat: -1, // Loops indefinitely
  yoyo: true, // Reverses back to 1, creating a flash
  ease: "power1.inOut",
  delay:3,
});


gsap.from(words, {
	y:700, 
	duration:0.7, 
	ease:"bounce",
	delay: 4,
	stagger: {
		each: 0.5,
	}
});


gsap.from(textBox2, {
	y:700, 
	duration:0.7, 
	ease:"bounce",
	delay: 9,
});
gsap.from(button1, {
	y:700, 
	duration:0.7, 
	ease:"bounce",
	delay: 10,
});


//have starts stagger and fall
gsap.to(smileyFaces, {
  y: 550,
  duration: 12,
  ease: "back.inOut",
  stagger: {
    each: 0.5,
    repeat: -1,
  }
});
//have starts stagger and fall
gsap.to(smileyFaces2, {
  y: 600,
  duration: 8,
  ease: "back.inOut",
  stagger: {
    each: 0.3,
    repeat: -1,
  }
});
}

window.Script6 = function()
{
  var player = GetPlayer();

window.addEventListener('message', function(e) {
  if (!e.data || !e.data.type) return;
  
  if (e.data.type === 'pairs') {
    player.SetVar('MM_PairsFound', e.data.value);
  }
  if (e.data.type === 'flips') {
    player.SetVar('MM_FlipsUsed', e.data.value);
  }
  if (e.data.type === 'time') {
    player.SetVar('MM_TimeSeconds', e.data.value);
  }
  if (e.data.type === 'complete') {
    player.SetVar('MM_GameComplete', true);
  }
  if (e.data.type === 'navigate') {
    player.GotoSlide('opening');
  }
});
}

window.Script7 = function()
{
  const spaceship = object('6mrJtPxJcaL');

//move spaceship to right then right key pressed

gsap.to(spaceship, {duration: 0.01, x: "+=10"});
}

window.Script8 = function()
{
  const spaceship = object('6mrJtPxJcaL');

//move spaceship to right then right key pressed

gsap.to(spaceship, {duration: 0.01, x: "-=10"});


}

window.Script9 = function()
{
  // Map ball IDs to objects using an array — cleaner than 21 individual consts
const balls = [
  '5aJfF91COK4','5qffW9BaGvP','6LvFTMMVQU4','5dYcepjpyKj','5uyygNplswH',
  '6jiZA3LRyYm','6BW6a3nDR9K','6qP5K2O4hc6','622oMvNwtTj','5XhyKaDn3CF',
  '6oLvp8pUXaI','5mdfNQ5Yzw3','65k4uHu4xvq','6pPOKUvWaha','6f1PyS0uWSQ',
  '6lrMZusq8Hf','5fUvq4yiuBv','6QQQnVMSG9u','6ji7d2dqbhM',
  '5tPkiJOUQKJ'
].map(id => object(id));

// Map alien IDs to objects the same way
const aliens = [
  '6pSaB7ODEka','6YVMxDWdBor','6RR6nWScBIS','6Hbmu1VOQU1','67G5mE51Wwu',
  '5oz7SNudBLg','6ppJR1Tf7pm','5i9zQn1JsFe','6pw4J7slLPY','5iLguEp6fv2',
  '5oJsFuyx6gO','61c1mLhJ0OA','6pdKJL7vbjK','6iM11YWGIhK'
].map(id => object(id));

const spaceship = object('6mrJtPxJcaL');


// Axis-aligned bounding box collision — checks if two objects overlap on both axes
function isTouching(obj1, obj2) {
  return !(
    obj1.x + obj1.width  < obj2.x ||
    obj1.x               > obj2.x + obj2.width  ||
    obj1.y + obj1.height < obj2.y ||
    obj1.y               > obj2.y + obj2.height
  );
}

// Cache the variable so we only call getVar once this trigger
const currBallIndex = getVar("currBall");
const currentBall = balls[currBallIndex];

// If this exact pooled ball already has a shot in flight, kill that old interval first
if (!window.ballIntervals) window.ballIntervals = {};
if (window.ballIntervals[currBallIndex]) {
    clearInterval(window.ballIntervals[currBallIndex]);
    window.ballIntervals[currBallIndex] = null;
}

// Spawn the ball at the center-top of the spaceship
currentBall.x = spaceship.x + (spaceship.width / 2) - (currentBall.width / 2);
currentBall.y = spaceship.y;

const speed = 10;

// Move the ball upward every 16ms (~60fps)
window.ballIntervals[currBallIndex] = setInterval(function() {
  currentBall.y -= speed;

  // If the ball has left the top of the screen, stop the interval
  if (currentBall.y <= 0) {
    currentBall.y = -50;
    clearInterval(window.ballIntervals[currBallIndex]);
    window.ballIntervals[currBallIndex] = null;
    return;
  }

  // Recompute active aliens each tick, excluding hidden AND already-locked-as-hit aliens
  const activeAliens = aliens.filter(a => a.state !== 'Died' && !a.hitLock);

  for (let i = 0; i < activeAliens.length; i++) {
    if (isTouching(currentBall, activeAliens[i])) {
      const hitAlien = activeAliens[i];

      hitAlien.state = 'Hit';   // visual hit animation starts now
      hitAlien.hitLock = true;  // lock immediately so no other ball can also register this hit

      currentBall.y = -100;
      clearInterval(window.ballIntervals[currBallIndex]);
      window.ballIntervals[currBallIndex] = null;

      setTimeout(function() {
        hitAlien.state = 'Died';
        hitAlien.x = 2000;
        hitAlien.y = 2000;
        setVar("aliensKilled", getVar("aliensKilled") + 1);
      }, 500);

      return;
    }
  }
}, 16);

// Increment currBall
setVar("currBall", currBallIndex >= 19 ? 0 : currBallIndex + 1);
}

window.Script10 = function()
{
  // Map alien IDs directly to objects
const aliens = [
  '6pSaB7ODEka','6YVMxDWdBor','6RR6nWScBIS','6Hbmu1VOQU1','67G5mE51Wwu',
  '5oz7SNudBLg','6ppJR1Tf7pm','5i9zQn1JsFe','6pw4J7slLPY','5iLguEp6fv2',
  '5oJsFuyx6gO','61c1mLhJ0OA','6pdKJL7vbjK','6iM11YWGIhK'
].map(id => object(id));

// Map ball IDs directly to objects
const balls = [
  '5aJfF91COK4','5qffW9BaGvP','6LvFTMMVQU4','5dYcepjpyKj','5uyygNplswH',
  '6jiZA3LRyYm','6BW6a3nDR9K','6qP5K2O4hc6','622oMvNwtTj','5XhyKaDn3CF',
  '6oLvp8pUXaI','5mdfNQ5Yzw3','65k4uHu4xvq','6pPOKUvWaha','6f1PyS0uWSQ',
  '6lrMZusq8Hf','5fUvq4yiuBv','6QQQnVMSG9u','6ji7d2dqbhM'
].map(id => object(id));

// ===== CLEAN UP ANY LEFTOVER STATE FROM A PREVIOUS PLAYTHROUGH =====
if (window.alienTimerInterval) {
    clearInterval(window.alienTimerInterval);
    window.alienTimerInterval = null;
}
if (window.ballIntervals) {
    Object.keys(window.ballIntervals).forEach(function(key) {
        if (window.ballIntervals[key]) {
            clearInterval(window.ballIntervals[key]);
        }
    });
}
window.ballIntervals = {};
aliens.forEach(a => gsap.killTweensOf(a));
window.aliensStopped = false;

// ===== RESET ALIENS =====
aliens.forEach(function(a) {
    a.state = "Normal"; // back to visible/default — adjust if your default state has a different name
    a.hitLock = false;  // clear the hit lock so they're targetable again
});

// ===== RESET BALLS (cosmetic — move them off-screen until fired) =====
balls.forEach(function(b) {
    b.x = -100;
    b.y = -100;
});

// ===== RESET GAME VARIABLES =====
setVar("aliensKilled", 0);
setVar("currBall", 0);
setVar("alienTimer", "0:00");

// ===== START ALIEN MOVEMENT =====
function moveAlien(a) {
  if (a.state === 'Died') return;
  if (window.aliensStopped) return;

  const targetX = Math.random() * 950;
  const targetY = 90 + Math.random() * (350 - 90);
  const duration = 1 + Math.random() * 3;

  const proxy = { x: a.x, y: a.y };

  gsap.to(proxy, {
    x: targetX,
    y: targetY,
    duration: duration,
    ease: "power1.inOut",
    onUpdate: function() {
      a.x = proxy.x;
      a.y = proxy.y;
    },
    onComplete: function() {
      moveAlien(a);
    }
  });
}

aliens.forEach(moveAlien);

// ===== START TIMER =====
let seconds = 0;

window.alienTimerInterval = setInterval(function() {
  seconds++;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  setVar("alienTimer", mins + ":" + (secs < 10 ? "0" + secs : secs));

  if (getVar("aliensKilled") >= 14) {
    clearInterval(window.alienTimerInterval);
    window.alienTimerInterval = null;
  }
}, 1000);
}

window.Script11 = function()
{
  const aliens = [
  '6pSaB7ODEka','6YVMxDWdBor','6RR6nWScBIS','6Hbmu1VOQU1','67G5mE51Wwu',
  '5oz7SNudBLg','6ppJR1Tf7pm','5i9zQn1JsFe','6pw4J7slLPY','5iLguEp6fv2',
  '5oJsFuyx6gO','61c1mLhJ0OA','6pdKJL7vbjK','6iM11YWGIhK'
].map(id => object(id));

// Stop the alien timer
if (window.alienTimerInterval) {
    clearInterval(window.alienTimerInterval);
    window.alienTimerInterval = null;
}

// Freeze all alien movement
window.aliensStopped = true;
aliens.forEach(a => gsap.killTweensOf(a));

// Stop any balls still mid-flight
if (window.ballIntervals) {
    Object.keys(window.ballIntervals).forEach(function(key) {
        if (window.ballIntervals[key]) {
            clearInterval(window.ballIntervals[key]);
            window.ballIntervals[key] = null;
        }
    });
}
}

window.Script12 = function()
{
  const star = object('5mJxHbprZLQ');
const star1 = object('6TneTZ71zYY');
const star10 = object('5qaUVKDQAhv');
const star11 = object('5rBIJQtbZ66');
const star12 = object('6aU51xTBTc7');
const star14 = object('6E1y7uTAeiQ');
const star13 = object('64mOG7fouoD');
const star15 = object('6mSK8weNmSY');
const star16 = object('5ahEbyBtYoP');
const star17 = object('6fde6XuZaKb');
const star18 = object('5oggZpKiwBa');
const star19 = object('6jvsdT47lCF');
const star2 = object('5nWj4DG62S5');
const star20 = object('5tQare2EF3c');
const star21 = object('6VWGq7kzLRV');
const star22 = object('5aZ8s8vpHGu');
const star23 = object('5yBpBCiWirJ');
const star24 = object('6eBLuFKv8H4');
const star25 = object('6LJcFWvHhRK');
const star26 = object('6ApRmj3AMD2');
const star27 = object('6rMOtDgL2TO');
const star28 = object('6NR7CQ8r2hd');
const star29 = object('6U98MueMm2S');
const star3 = object('66tt2BiVSDn');
const star30 = object('6UGOMR6fBgP');
const star31 = object('6CDcTiHcejL');
const star32 = object('6F1DVdCSk3Z');
const star33 = object('5XZrSHoabih');
const star34 = object('675sVPTp5P9');
const star35 = object('5fX5sJK4jPD');
const star36 = object('5xPqY9mkO7W');
const star37 = object('5xRxetA8D6t');
const star38 = object('6bKc8vpoqKV');
const star39 = object('5aBYAPv2bcQ');
const star4 = object('6c6qzIfKetH');
const star40 = object('6LItpBuCx6n');
const star41 = object('6gwUIaP1F4Z');
const star42 = object('5zZlszVd1zw');
const star43 = object('5aNjEIzheC6');
const star44 = object('61SYwIcBbH7');
const star45 = object('5oq4Fhhz5oR');
const star46 = object('6kJ4CbqWWY0');
const star47 = object('5dDCwsh0x3a');
const star48 = object('5p53WLriRpZ');
const star49 = object('5c5sX8hrSaL');
const star5 = object('5scME1GI5Dj');
const star6 = object('6U4iJUT7scD');
const star7 = object('5cd1Rzu6l04');
const star8 = object('68MfYNLwzVv');
const star9 = object('6mYgUjcWHF6');
const star50 = object('5eGfhTZRoIC');
const star51 = object('6oetzeeMevP');
const star52 = object('6W9Q48HW9ar');
const star53 = object('6SsENUqlPQ6');
const star54 = object('5md7bz1df2Z');
const star55 = object('6MljQThUDxl');
const star56 = object('5tXIWgAnzGi');
const star57 = object('5VS6rtoTiCr');
const star58 = object('5vIWqDbGr9E');
const star59 = object('6HzeSCUQfAF');
const star60 = object('6VnDUlERhyM');
const star61 = object('6EgtTHYFCqs');
const star62 = object('6Fx49jKWqHt');
const star64 = object('5nPFKUHMXgE');
const star63 = object('6TaDGWBkoKT');
const star66 = object('6dJSEikKe3Y');
const star65 = object('5aP4Zjeibci');
const star67 = object('6cmzvGLu1JZ');
const star68 = object('5zNZgacueSq');
const star69 = object('5xAESeVTLCY');
const star70 = object('5zwm3vqUfdi');
const star72 = object('5i5JcF3P6Ae');
const star71 = object('6EAWcQDG6Ix');
const star73 = object('5yTllJbslZo');
const star74 = object('6mkdKas0Dqy');
const star75 = object('68vLA1sIUFU');
const star76 = object('6MB1QzkI53g');
const star77 = object('5YpBUxr8zn7');
const star78 = object('6148BvC7tW5');
const star79 = object('64sPPho7UVa');
const you = object('6R6fNMfuJEu');
const you2 = object('64nxnlAf0Im');
const win = object('6qkUTmx1dKk');
const win2 = object('63KYXsISFUp');
const textBox1 = object('6QjPu4EV1Su');
const word0 = object('6eKBdVbv8sA');

const button1 = object('5jT0tviOFMe');

//put each word in an array
const youText = [you, you2];
const winText = [win, win2];
const text = [youText, winText];


//put all stars in an array
const stars = [
  star, star1, star2, star3, star4, star5, star6, star7, star8, star9,
  star10, star11, star12, star13, star14, star15, star16, star17, star18, star19,
  star20, star21, star22, star23, star24, star25, star26, star27, star28, star29,
  star30, star31, star32, star33, star34, star35, star36, star37, star38, star39,
  star40, star41, star42, star43, star44, star45, star46, star47, star48, star49
];
const stars2 = [
  star50, star51, star52, star53, star54, star55, star56, star57, star58, star59,
  star60, star61, star62, star63, star64, star65, star66, star67, star68, star69,
  star70, star71, star72, star73, star74, star75, star76, star77, star78, star79
];

//animate you text in
gsap.from(youText, {
	y:-100, 
	duration:1.5, 
	ease:"bounce",
});
//animate was text in
gsap.from(winText, {
	y:-100, 
	duration:1.5, 
	ease:"bounce",
	delay: 1,
});

gsap.from(word0, {
	y:-200, 
	duration:1.5, 
	ease:"bounce",
	delay: 3,
});





gsap.from(button1, {
	y:700, 
	duration:0.7, 
	ease:"bounce",
	delay: 10,
});

gsap.from(textBox1, {
	y:700, 
	duration:0.7, 
	ease:"bounce",
	delay: 8,
});
//have starts stagger and fall
gsap.to(stars2, {
  y: 550,
  duration: 11,
  ease: "back.inOut",
  stagger: {
    each: 0.3,
    repeat: -1,
  }
});
//have starts stagger and fall
gsap.to(stars, {
  y: 600,
  duration: 15,
  ease: "back.inOut",
  stagger: {
    each: 0.3,
    repeat: -1,
  }
});
}

};
