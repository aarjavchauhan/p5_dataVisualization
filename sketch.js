var rg
var button
var displayRate = 200

var grammarJSON  = {
  "<start>":[
    "<5-line> <br/> <7-line> <br/> <5-line>"
  ],
  "<5-line>":[
    "<1> <4>",
    "<1> <3> <1>",
    "<1> <1> <3>",
    "<1> <2> <2>",
    "<1> <2> <1> <1>",
    "<1> <1> <2> <1>",
    "<1> <1> <1> <2>",
    "<1> <1> <1> <1> <1>",
    "<2> <3>",
    "<2> <2> <1>",
    "<2> <1> <2>",
    "<2> <1> <1> <1>",
    "<3> <2>",
    "<3> <1> <1>",
    "<4> <1>",
    "<5>"
  ],
  "<7-line>":[
    "<1> <1> <5-line>",
    "<2> <5-line>",
    "<5-line> <1> <1>",
    "<5-line> <2>"
  ],
  "<1>":[
    "red",
    "white",
    "black",
    "sky",
    "dawns",
    "breaks",
    "falls",
    "leaf",
    "rain",
    "pool",
    "my",
    "your",
    "sun",
    "clouds",
    "blue",
    "green",
    "night",
    "day",
    "dawn",
    "dusk",
    "birds",
    "fly",
    "grass",
    "tree",
    "branch",
    "through",
    "hell",
    "zen",
    "smile",
    "gray",
    "wave",
    "sea",
    "through",
    "sound",
    "mind",
    "smoke",
    "cranes",
    "fish"
  ],
  "<2>":[
    "drifting",
    "purple",
    "mountains",
    "skyline",
    "city",
    "faces",
    "toward",
    "empty",
    "buddhist",
    "temple",
    "japan",
    "under",
    "ocean",
    "thinking",
    "zooming",
    "rushing",
    "over",
    "rice field",
    "rising",
    "falling",
    "sparkling",
    "snowflake"
  ],
  "<3>":[
    "sunrises",
    "pheasant farms",
    "people farms",
    "samurai",
    "juniper",
    "fishing boats",
    "far away",
    "kimonos",
    "evenings",
    "peasant rain",
    "sad snow fall"
  ],
  "<4>":[
    "aluminum",
    "yakitori",
    "the east village",
    "west of the sun",
    "chrysanthemums",
    "cherry blossoms"
  ],
  "<5>":[
    "resolutional",
    "non-elemental",
    "rolling foothills rise",
    "toward mountains higher",
    "out over this country",
    "in the springtime again"
  ]
}

function setup() {
  createCanvas(600,600)
  background(0)
  createGrammar()
}

function draw() {
  showHaiku(random(width), random(height), getOrientation())
}

//Returns orientation of the haiku
function getOrientation(){
  if(random(0,1) > 0.5)
  {
    return 'horizontal'
  }
  else {
    return 'vertical'
  }
}

//Read and create the grammar rules & add words to the lexicon
function createGrammar(){
  for (var i = 1; i < 6; i++) {
    //pushing 100 words for each syllable type in the grammar
    for (var j = 0; j < 100; j++) {
      grammarJSON["<"+i+">"].push(RiTa.randomWord(i))
    }
  }
  rg = new RiGrammar()
  rg.load(grammarJSON)
}

//display the Haiku
function showHaiku(haikuX, haikuY, orientation) {

  push()
  if(frameCount%displayRate == 1 ){
    var result = rg.expand()
    var seperate = result.split(' <br/> ')

    //color variations
    // var randomRed = random(255)
    // var randomGreen = random(255)
    // var randomBlue = random(255)

    for (var i = 0; i < seperate.length; i ++) {
      var eachLetterArray = seperate[i].split('')
      for(var j = 0; j < eachLetterArray.length; j++)
      {
        //fill with white transparency
        fill(255, 255, 255, random(100, 255))
        if(orientation == 'horizontal'){
          text(eachLetterArray[j], haikuX+(j*10), haikuY+(i*10))
        }
        else {
          text(eachLetterArray[j], haikuX+(i*10), haikuY+(j*10))
        }
      }
    }
  }
  pop()
}
