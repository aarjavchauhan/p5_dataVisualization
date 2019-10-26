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
  if(frameCount%displayRate == 1 )
  {
    showHaiku(random(width), random(height), getOrientation())
  }
}

function getOrientation(){
  if(random(0,1) > 0.5)
  {
    return 'horizontal'
  }
  else {
    return 'vertical'
  }
}

function createGrammar(){
  for (var i = 1; i < 6; i++) {
    for (var j = 0; j < 100; j++) {
      grammarJSON["<"+i+">"].push(RiTa.randomWord(i))
    }
    console.log(grammarJSON["<"+i+">"])
  }
  rg = new RiGrammar()
  rg.load(grammarJSON)
  button = createButton('generate')
  button.mousePressed(showHaiku)
}

function newHaiku() {
  var result = rg.expand()
  createP(result)
}

function showHaiku(haikuX, haikuY, orientation) {
  push()

  fill(255, 255, 255, 125)
  var result = rg.expand()
  var seperate = result.split(' <br/> ')

  for (var variable in seperate) {
    text(seperate[variable], haikuX, haikuY+(variable*10))
    console.log(seperate[variable]);
    console.log(orientation);
  }

  pop()
}
