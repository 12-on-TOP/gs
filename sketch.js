(function() {
  let sounds, coinSound, boomSound, boingSound, spowerUp, someTheme, wehiTheme, nightTheme, shortTheme, sleepTheme, lifeTheme, dreamTheme;
  let ball, itsover, x, y, collect, s, gameOver, q, dis, jump, lives, sy, amoes, cantShoot, explode, shoot, coinCount, shooterPowered, shieldPowered, ex2Powered, ex5Powered, exploded, ex_on, cwlm;
  let spikes, coins, platforms, lifes, shields, ammos, particles, ex_2_es, ex_5_es, monsterBUGS, currentPlatform;
  let shieldPowerTimer, shieldPowerTimerClock, ex2PowerTimer, ex2PowerTimerClock, ex5PowerTimer, ex5PowerTimerClock, gameOverFlashInterval, gameOverStartTime, gameOverVisible, flashInterval, lastFlashTime;
  let jjuummpp, ddoowwnn, qwerty, lastThing, SuperBallGame, zero, playMan, setMan, superMan, qplayMan, fourin, scrollplay, back, mutee, selectMusic, allSuperpowers, aaaaa, bbbbb, ccccc, atgl, pots, shot, getReadyToShoot, letUsShootWhenReady, music, codey, ex_two;
  let play, ssel, muteallon, allCollectedSuperpowers, totalCoins, amos, code, down, SUPERPOWERS, theCode, itCode, theICode, theSCode;
  let cc, qwe;
  let level1;
  let portals = [];
  let type = 0; // 0:ball, 1:flap flap
  let character = [];
  let charrie;
  let hhiigghh,llooww;
  let high,low;
  let justMoved;
  let upWasDown = false

function preload() {
  sounds = [];
  level1 = loadJSON("levels/level1.json");
  coinSound = new sound("sounds/coin.mp3");
  boomSound = new sound("sounds/explode.mp3");
  boingSound = new sound("sounds/boing.mp3");
  spowerUp = new sound("sounds/pick.mp3");
  someTheme = new sound("sounds/something.mp3");
  wehiTheme = new sound("sounds/wehi.mp3");
  nightTheme = new sound("sounds/night.mp3");
  shortTheme = new sound("sounds/short.mp3");
  sleepTheme = new sound("sounds/sleep.mp3");
  lifeTheme = new sound("sounds/life.mp3");
  dreamTheme = new sound("sounds/dream.mp3");
  alTheme = new sound("sounds/al.m4a");
  bangTheme = new sound("sounds/bang.mp3");
  daymienTheme = new sound("sounds/daymien.mp3");
  dnrfTheme = new sound("sounds/dnrf.m4a");
  highlandTheme = new sound("sounds/highland.m4a");
  specialTheme = new sound("sounds/special.mp3");
  tonebellTheme = new sound("sounds/tonebell.mp3");
  torcqueTheme = new sound("sounds/torcque.mp3");
  sounds = [
    coinSound,
    boomSound,
    boingSound,
    spowerUp,
    someTheme,
    wehiTheme,
    nightTheme,
    shortTheme,
    sleepTheme,
    lifeTheme,
    dreamTheme,
    alTheme,
    bangTheme,
    daymienTheme,
    dnrfTheme,
    highlandTheme,
    specialTheme,
    tonebellTheme,
    torcqueTheme
  ];
}
function loadLevel(data) {

  // CLEAR ARRAYS
  platforms = [];
  portals = [];
  spikes = [];
  monsterBUGS = [];

  if (!data) {
    return;
  }

  // PLAYER SPAWN
  if (data.spawn) {
    ball.x = data.spawn.x;
    ball.y = data.spawn.y;
  }

  // PLATFORMS
  if (data.platforms) {
    for (let p of data.platforms) {
      platforms.push(
        new platform(
          p.x,
          p.y,
          p.w,
          p.h,
          p.type
        )
      );
    }
  }

  // SPIKES
  if (data.spikes) {
    for (let s of data.spikes) {
      spikes.push(
        new spike(
          s.x1,
          s.y1,
          s.x2,
          s.y2,
          s.x3,
          s.y3
        )
      );
    }
  }

  // MONSTERS
  if (data.monsters) {
    for (let m of data.monsters) {
      monsterBUGS.push(
        new MONSTER(
          m.x,
          m.y,
          m.size,
          m.power,
          m.type
        )
      );
    }
  }

  if (data.portals) {
    for (let p of data.portals) {
      portals.push(
        new PortaL(
          p.x,
          p.y,
          p.t
        )
      );
    }
  }

}
function gamePrep() {

  ball = {
  x: 25,
  y: height * 0.75,
  sy: 0,
  jump: 0,
  dis: 0,
  down: 0,
  s: 50,
  origY: height * 0.75
};
  over = 0;
  itsover = createP();
  x = 25;
  y = height * 0.75;
  collect = 1;
  s = 1;
  gameOver = null;
  q = 0;
  6;
  dis = 0;
  jump = 0;
  lives = 0;
  sy = 0;
  amoes = 0;
  cantShoot = 0;
  explode = 0;
  shoot = 0;
  coinCount = 0;
  shooterPowered = 0;
  shieldPowered = 0;
  ex2Powered = 1/2;
  ex5Powered = 1/5;
  exploded = 0;
  ex_on = [];
  cwlm = 0;
  spikes = [];
  coins = [];
  platforms = [];
  lifes = [];
  shields = [];
  ammos = [];
  particles = [];
  ex_2_es = [];
  ex_5_es = [];
  monsterBUGS = [];
  currentPlatform = null;
  shieldPowerTimer = 0;
  shieldPowerTimerClock = null;
  ex2PowerTimer = 0;
  ex2PowerTimerClock = null;
  ex5PowerTimer = 0;
  ex5PowerTimerClock = null;
  gameOverFlashInterval = null;
  gameOverStartTime = null;
  gameOverVisible = true;
  flashInterval = 100;
  lastFlashTime = 0;
  clearInterval(shieldPowerTimerClock);
  clearInterval(ex2PowerTimerClock);
  clearInterval(gameOverFlashInterval);
  charrie = 0
  // for (let i = 0; i <= 9; i++) {
  //   let x1 = (i * width) / 5 + 1000;
  //   let y1 = height * 0.8 - (((height * 0.8) + width / 40)-(height * 0.8));
  //   spikes.push(new spike(x1,y1,x1 - width / 40,y1 + width / 40,x1 + width / 40,y1 + width / 40));
  // }
  // for (let i = 0; i <= 9; i++) {
  //   coins.push(new coin((i * width) / 5 + 1000, height * 0.5, 2));
  // }
  // for (let i = 0; i <= 9; i++) {
  //   coins.push(new coin((i * width) / 5 + 1000, height * 0.3, 1));
  // }
  // for (let i = 0; i <= 9; i++) {
  //   platforms.push(
  //     new platform(i * 250 + width * 2, height * 0.6, width, 30,"r")
  //   );
  // }
  // for (let i = 0; i <= 9; i++) {
  //   platforms.push(
  //     new platform(
  //       i * 250 + (width / 3 + width * 2),
  //       height * 0.4,
  //       width,
  //       30, "r"
  //     )
  //   );
  // }
  // for (let i = 0; i <= 4; i++) {
  //   platforms.push(
  //     new platform(
  //       i * 500 + (width / 3 + width * 1.8),
  //       height * 0.2,
  //       width,
  //       30, "e"
  //     )
  //   );
  // }
  // for (let i = 7; i <= 9; i++) {
  //   shields.push(new shield(i * 250 + width * 3, height * 0.5));
  //   lifes.push(new life(i * 250 + width * 2, height * 0.55));
  //   ammos.push(new ammo(i * 250 + width * 4, height * 0.3));
  // ex_2_es.push(new times_x(i * 250 + width * 5, height * 0.4, 2));
  // ex_5_es.push(new times_x(i * 250 + width * 10, height * 0.4, 5));
  // }
  // monsterBUGS.push(new MONSTER(width * 5,height * 0.78,10,1,"bug"));
  //portals.push(new PortaL(2000, height * 0.75 - 25, 1));

  if (level1) {
    loadLevel(level1);
  }

  amos = [];
}

function setup() {
  createCanvas(500, 500);
  jjuummpp = new button("Jump", 400, 0, 100, 50, "red", "blue");
  jjuummpp.$("hide");
  ddoowwnn = new button("Down", 400, 50, 100, 50, "blue", "red");
  ddoowwnn.$("hide");
  qwerty = new button("Play Again", 0, 0, 100, 50, "pink", "green");
  qwerty.$("hide");
  lastThing = new button("Home", 0, 0, 100, 50, "pink", "green");
  lastThing.$("hide");
  SuperBallGame = createP("You are playing the Super Ball Game!");
  SuperBallGame.style("color:blue;font-size:40px");
  SuperBallGame.hide();
  zero = createP("Welcome to the Superball Game!").style(
    "color:skyblue;font-size:50px;"
  );
  zero.position(0, 0);
  zero.hide();
  playMan = new button("Play", 100, 200, 100, 50, "skyblue", "black");
  playMan.$("hide");
  setMan = new button("Settings", 100, 300, 100, 50, "pink", "black");
  setMan.$("hide");
  superMan = new button(
    "Superpowers",
    300,
    200,
    100,
    50,
    "rgb(140, 70, 20)",
    "black"
  );
  superMan.$("hide");
  qplayMan = new button("How to play", 300, 300, 100, 50, "yellow", "black");
  qplayMan.$("hide");
  fourin = createP("How to Play:").style(
    "font-size:50px;text-align:center;text-decoration:underline;"
  );
  fourin.position(100, 0);
  fourin.hide();
  scrollplay = createDiv().style(
    "background-color:navy;width:400px;height:300px;color:white;overflow:scroll;"
  );
  scrollplay.position(50, 150);
  scrollplay.hide();
  back = new button("Back", 450, 0, 50, 20, "dimgrey", "white");
  back.$("hide");
  back.$("mousePressed", () => {
    play = 0;
  });
  mutee = createDiv(
    "<div style = 'background-color:darkgray;width:75px;height:10px;position:absolute;top:20px;left:10px'></div><div id = 'muteasw' style = 'position:absolute;background-color:black;width:20px;height:20px;border-radius:50%;top:15px;left:5px;'></div>"
  );
  mutee.position(200, 200);
  mutee.style(
    "background-color:white;border-radius:50%;width:100px;height:50px"
  );
  mutee.hide();
  selectMusic = createDiv(`
    Select Music:
    <select id = 'mmuussiicc'>
    <option value = 'something'>SOMETHING</option>
    <option value = 'wehi'>WEHI</option>
    <option value = 'life'>THE LIFE</option>
    <option value = 'night'>NIGHTIME</option>
    <option value = 'short'>SHORT BEATS</option>
    <option value = 'sleep'>SLEEP</option>
    <option value = 'dream'>WAKE UP IN A DREAM</option>
    <option value = 'alrite'>ALRITE</option>
    <option value = 'bang'>BANG</option>
    <option value = 'daymien'>DAYMIEN</option>
    <option value = 'dnrf'>DNFR</option>
    <option value = 'highland'>HIGHLAND</option>
    <option value = 'special'>SPECIAL</option>
    <option value = 'tonebell'>TONEBELL</option>
    <option value = 'torcque'>TORCQUE</option>
    </select>
  `).position(100, 100);
  selectMusic.hide();
  allSuperpowers = createDiv().hide();
  aaaaa = createP("null");
  bbbbb = createInput().value("c-345345345345345;p-life;p-shield;p-shooter;p-✕2;p-✕5;p-shooter1;");
  ccccc = new button("null", 0, 0, 60, 30, "gray", "white");
  aaaaa.hide();
  bbbbb.hide();
  ccccc.$("hide");
  atgl = new button("w", 0, 0, 40, 20, "gray", "white");
  pots = new button("w", 0, 0, 40, 20, "gray", "white");
  shot = new button("w", 0, 0, 40, 20, "gray", "white");
  atgl.$("hide");
  pots.$("hide");
  shot.$("hide");
  getReadyToShoot = new button(
    "Turn on Shooter",
    200,
    200,
    120,
    40,
    "gray",
    "white"
  );
  getReadyToShoot.$("hide");
  letUsShootWhenReady = new button("Shoot", 300, 200, 80, 40, "gray", "white");
  letUsShootWhenReady.$("hide");
  music = new button("w", 0, 0, 40, 20, "gray", "white");
  codey = new button("w", 0, 0, 40, 20, "gray", "white");
  music.$("hide");
  codey.$("hide");
  ex_two = new button("Collect", 0, 0, 80, 30, "gray", "white");
  ex_two.$("hide");
  play = -1;
  ssel = 1;
  muteallon = 0;
  allCollectedSuperpowers = [];
  explode = 0;
  totalCoins = 0;
  code = "c-345345739048593485793875934857;p-life;p-shield;p-shooter;p-✕2;p-✕5;";
  down = 0;
  gamePrep();
  theCode = createP().hide();
  itCode = createP().hide();
  theICode = createInput().hide();
  theSCode = createInput().hide();
  theCode.hide();
  itCode.hide();
  theICode.hide();
  theSCode.hide();
  SUPERPOWERS = [
  new superPower(53, "life", 100, "Ability to get lives:"),
  new superPower(106, "shield", 500, "The Shield:"),
  new superPower(159, "shooter", 1000, "Basic Shooter:"),
  new superPower(212, "✕2", 2000, "✕2:"),
  new superPower(265, "✕5", 5000, "✕5:"),
  new superPower(318, "shooter1", 10000, "Advanced Shooter 1:")
]
SUPERPOWERS.map((i) => {i.div.parent(allSuperpowers)});
character = [
  //rendering, jumplogic   in functions   collisions done in classes
   [
    function () {
      rotate(q);
      fill(0, 0, 255);
      circle(0, 0, 50 * s);
      push();
      for (let i = 0; i <= 4; i++) {
        rotate(i * 910);
        fill(255, 150, 140);
        ellipse(width / -33, 0, (width / 25) * s, (height / 50) * s);
      }
      pop();
    },
    function () {
      const gravity = 1;

      // save previous position
      ball.prevY = ball.y;

      // apply gravity
      ball.sy -= gravity;

      // move vertically
      ball.y -= ball.sy;

      let landedPlatform = null;
      let bestY = -Infinity;

      // feet position
      const feet = ball.y + (ball.s * s) / 2;
      const prevFeet = ball.prevY + (ball.s * s) / 2;

      for (let plat of platforms) {
        // ignore platforms while dropping down
        if (ball.down) continue;

        const withinX = ball.x >= plat.x && ball.x <= plat.x + plat.w;

        // crossed platform top this frame
        const crossedPlatform = prevFeet <= plat.y && feet >= plat.y;

        const falling = ball.sy < 0;

        if (withinX && crossedPlatform && falling) {
          if (plat.y > bestY) {
            bestY = plat.y;
            landedPlatform = plat;
          }
        }
      }

      // LANDING
      if (landedPlatform) {
        ball.y = landedPlatform.y - (ball.s * s) / 2;

        ball.sy = 0;

        ball.jump = 0;
        ball.dis = 0;

        if (!landedPlatform.on.includes(ball)) {
          landedPlatform.on.push(ball);
        }

        currentPlatform = landedPlatform;
      } else {
        // AIRBORNE
        ball.jump = 1;
        ball.dis = 1;

        // remove from platform lists
        for (let plat of platforms) {
          let idx = plat.on.indexOf(ball);

          if (idx !== -1) {
            plat.on.splice(idx, 1);
          }
        }

        currentPlatform = null;
      }

      // finish drop-through
      if (ball.down) {
        ball.down = 0;
      }

      // ground floor
      const groundY = height * 0.75;

      if (ball.y > groundY) {
        ball.y = groundY;
        ball.sy = 0;
        ball.jump = 0;
        ball.dis = 0;
      }
    }
  ],
  [
    function () {


// --- BODY ---
fill(0, 0, 255);
circle(0, 0, 50 * s);

// --- WINGS ---
push();
fill(255, 200, 200);

// left wing
ellipse(-70 * s, 0, 90 * s, 40 * s);

// right wing
ellipse(70 * s, 0, 90 * s, 40 * s);

pop();
// --- END WINGS ---

// --- ROTATING PETALS ---
push();
for (let i = 0; i <= 4; i++) {
  rotate(i * 910);
  fill(255, 150, 140);
  ellipse(width / -33, 0, (width / 25) * s, (height / 50) * s);
}
pop();
// --- END PETALS ---
    },
    function () {
        if (ball.y < 0) explode = 1;
        const gravity = 1;

      // save previous position
      ball.prevY = ball.y;

      // apply gravity
      ball.sy -= gravity;

      // move vertically
      ball.y -= ball.sy;

      let landedPlatform = null;
      let bestY = -Infinity;

      // feet position
      const feet = ball.y + (ball.s * s) / 2;
      const prevFeet = ball.prevY + (ball.s * s) / 2;

      for (let plat of platforms) {
        // ignore platforms while dropping down
        if (ball.down) continue;

        const withinX = ball.x >= plat.x && ball.x <= plat.x + plat.w;

        // crossed platform top this frame
        const crossedPlatform = prevFeet <= plat.y && feet >= plat.y;

        const falling = ball.sy < 0;

        if (withinX && crossedPlatform && falling) {
          if (plat.y > bestY) {
            bestY = plat.y;
            landedPlatform = plat;
          }
        }
      }

      // LANDING
      if (landedPlatform) {
        ball.y = landedPlatform.y - (ball.s * s) / 2;

        ball.sy = 0;

        ball.jump = 0;
        ball.dis = 0;

        if (!landedPlatform.on.includes(ball)) {
          landedPlatform.on.push(ball);
        }

        currentPlatform = landedPlatform;
      } else {
        // AIRBORNE
        ball.jump = 1;
        ball.dis = 0;

        // remove from platform lists
        for (let plat of platforms) {
          let idx = plat.on.indexOf(ball);

          if (idx !== -1) {
            plat.on.splice(idx, 1);
          }
        }

        currentPlatform = null;
      }

      // finish drop-through
      if (ball.down) {
        ball.down = 0;
      }

      // ground floor
      const groundY = height * 0.75;

      if (ball.y > groundY) {
        ball.y = groundY;
        ball.sy = 0;
        ball.jump = 0;
        ball.dis = 0;
      }


    }
  ],
  [
    function () {
        rotate((keyIsDown(UP_ARROW) || hhiigghh || llooww || keyIsDown(DOWN_ARROW))?-45:45)
        fill(0,0,255)
        triangle(25 + 0,
0,
0 - 25,
0 - 10,
0 - 25,
0 + 10)
    },
// triangle logic function (third character entry)
function () {

  push()
  ball.dis = 0; // wave never "lands"
  const waveSpeed = 5;

  // save previous position
  ball.prevY = ball.y;

  if (ball.y < 0) {
    explode = 1;
  }

  if (
    keyIsDown(UP_ARROW) ||
    hhiigghh ||
    llooww ||
    keyIsDown(DOWN_ARROW)
  ) {
    ball.y -= waveSpeed;
  }
  // otherwise → go down
  else if (ball.y < ball.origY) {
    ball.y += waveSpeed;
  }

  // --- LANDING LOGIC ONLY ---

  let landedPlatform = null;
  let bestY = Infinity;

  const feet = ball.y + (ball.s * s) / 2;
  const prevFeet = ball.prevY + (ball.s * s) / 2;

  for (let plat of platforms) {

    if (ball.down) continue;

    const withinX =
      ball.x >= plat.x &&
      ball.x <= plat.x + plat.w;

    const crossedPlatform =
      prevFeet <= plat.y &&
      feet >= plat.y;

    const falling = ball.y > ball.prevY;

    if (withinX && crossedPlatform && falling) {

      if (plat.y < bestY) {
        bestY = plat.y;
        landedPlatform = plat;
      }
    }
  }

  if (landedPlatform) {

    ball.y =
      landedPlatform.y - (ball.s * s) / 2;

    ball.jump = 0;
    ball.dis = 0;

    if (!landedPlatform.on.includes(ball)) {
      landedPlatform.on.push(ball);
    }

    currentPlatform = landedPlatform;

  } else {

    ball.jump = 1;
    ball.dis = 1;

    for (let plat of platforms) {

      let idx = plat.on.indexOf(ball);

      if (idx !== -1) {
        plat.on.splice(idx, 1);
      }
    }

    currentPlatform = null;
  }

  // finish drop-through
  if (ball.down) {
    ball.down = 0;
  }

  // ground floor
  const groundY = 380;

  if (ball.y > groundY) {

    ball.y = groundY;

    ball.jump = 0;
    ball.dis = 0;
  }
  pop();
}


  ], //add landing for the wave
  [
    function () {
      ellipse(0,0,100 * s,50 * s)
    },
function () {
  if (ball.y < 0) explode = 1;
  const gravity = 1;

  // previous position
  ball.prevY = ball.y;

  // movement
  if (hhiigghh || keyIsDown(UP_ARROW)) {
    ball.y -= 5;
    ball.sy = 0;
  } else {
    ball.sy += gravity;
    ball.y += ball.sy;
  }

  let landedPlatform = null;
  let bestY = Infinity;

  // feet positions
  const feet = ball.y + (ball.s * s) / 2;
  const prevFeet = ball.prevY + (ball.s * s) / 2;

  for (let plat of platforms) {

    // ignore while dropping down
    if (ball.down) continue;

    const withinX =
      ball.x >= plat.x &&
      ball.x <= plat.x + plat.w;

    // crossed platform top this frame
    const crossedPlatform =
      prevFeet <= plat.y &&
      feet >= plat.y;

    const falling = ball.sy > 0;

    if (withinX && crossedPlatform && falling) {
      if (plat.y < bestY) {
        bestY = plat.y;
        landedPlatform = plat;
      }
    }
  }

  // landing
  if (landedPlatform) {

    ball.y =
      landedPlatform.y - (ball.s * s) / 2;

    ball.sy = 0;
    ball.jump = 0;
    ball.dis = 0;

    if (!landedPlatform.on.includes(ball)) {
      landedPlatform.on.push(ball);
    }

    currentPlatform = landedPlatform;

  } else {

    // airborne
    ball.jump = 1;
    ball.dis = 1;

    for (let plat of platforms) {
      let idx = plat.on.indexOf(ball);

      if (idx !== -1) {
        plat.on.splice(idx, 1);
      }
    }

    currentPlatform = null;
  }

  // finish drop-through
  if (ball.down) {
    ball.down = 0;
  }

  // ground floor
  const groundY = height * 0.75;

  if (ball.y > groundY) {
    ball.y = groundY;
    ball.sy = 0;
    ball.jump = 0;
    ball.dis = 0;
  }
}
  ],
];

}

function draw() {
  if (explode && !exploded) {
   boomSound.$("play");
  } 
  if (muteallon === 1) {
    for (i of sounds) {
      i.$("setVolume", 0);
    }
  } else {
    coinSound.$("setVolume", 0.25);
    boomSound.$("setVolume", 0.25);
    boingSound.$("setVolume", 0.25);
    someTheme.$("setVolume", 0.5);
    wehiTheme.$("setVolume", 0.5);
    spowerUp.$("setVolume", 2);
    nightTheme.$("setVolume", 0.5);
    shortTheme.$("setVolume", 0.5);
    sleepTheme.$("setVolume", 0.5);
    sleepTheme.$("setVolume", 0.5);
    lifeTheme.$("setVolume", 0.5);
    dreamTheme.$("setVolume", 0.5);
    alTheme.$("setVolume", 0.5);
    bangTheme.$("setVolume", 0.5);
    daymienTheme.$("setVolume", 0.5);
    dnrfTheme.$("setVolume", 0.5);
    highlandTheme.$("setVolume", 0.5);
    specialTheme.$("setVolume", 0.5);
    tonebellTheme.$("setVolume", 0.5);
    torcqueTheme.$("setVolume", 0.5);
  }
  if (document.getElementById("mmuussiicc").value === "something") {
    if (!someTheme.$("isPlaying")) {
      someTheme.$("play");
    }
  } else {
    someTheme.$("stop");
  }
  if (document.getElementById("mmuussiicc").value === "wehi") {
    if (!wehiTheme.$("isPlaying")) {
      wehiTheme.$("play");
    }
  } else {
    wehiTheme.$("stop");
  }
  if (document.getElementById("mmuussiicc").value === "night") {
    if (!nightTheme.$("isPlaying")) {
      nightTheme.$("play");
    }
  } else {
    nightTheme.$("stop");
  }
  if (document.getElementById("mmuussiicc").value === "short") {
    if (!shortTheme.$("isPlaying")) {
      shortTheme.$("play");
    }
  } else {
    shortTheme.$("stop");
  }
  if (document.getElementById("mmuussiicc").value === "sleep") {
    if (!sleepTheme.$("isPlaying")) {
      sleepTheme.$("play");
    }
  } else {
    sleepTheme.$("stop");
  }
  if (document.getElementById("mmuussiicc").value === "life") {
    if (!lifeTheme.$("isPlaying")) {
      lifeTheme.$("play");
    }
  } else {
    lifeTheme.$("stop");
  }
  if (document.getElementById("mmuussiicc").value === "dream") {
    if (!dreamTheme.$("isPlaying")) {
      dreamTheme.$("play");
    }
  } else {
    dreamTheme.$("stop");
  }
    if (document.getElementById("mmuussiicc").value === "alrite") {
    if (!alTheme.$("isPlaying")) {
      alTheme.$("play");
    }
  } else {
    alTheme.$("stop");
  }
      if (document.getElementById("mmuussiicc").value === "bang") {
    if (!bangTheme.$("isPlaying")) {
      bangTheme.$("play");
    }
  } else {
    bangTheme.$("stop");
  }

          if (document.getElementById("mmuussiicc").value === "daymien") {
    if (!daymienTheme.$("isPlaying")) {
      daymienTheme.$("play");
    }
  } else {
    daymienTheme.$("stop");
  }
          if (document.getElementById("mmuussiicc").value === "dnrf") {
    if (!dnrfTheme.$("isPlaying")) {
      dnrfTheme.$("play");
    }
  } else {
    dnrfTheme.$("stop");
  }
  if (document.getElementById("mmuussiicc").value === "highland") {
    if (!highlandTheme.$("isPlaying")) {
      highlandTheme.$("play");
    }
  } else {
    highlandTheme.$("stop");
  }
      if (document.getElementById("mmuussiicc").value === "special") {
    if (!specialTheme.$("isPlaying")) {
      specialTheme.$("play");
    }
  } else {
    specialTheme.$("stop");
  }
          if (document.getElementById("mmuussiicc").value === "tonebell") {
    if (!tonebellTheme.$("isPlaying")) {
      tonebellTheme.$("play");
    }
  } else {
    tonebellTheme.$("stop");
  }
  if (document.getElementById("mmuussiicc").value === "torcque") {
    if (!torcqueTheme.$("isPlaying")) {
      torcqueTheme.$("play");
    }
  } else {
    torcqueTheme.$("stop");
  }
  if (play === -1) {
    itsover.hide();
    atgl.$("hide");
    selectMusic.hide();
    getReadyToShoot.$("hide");
    letUsShootWhenReady.$("hide");
    ddoowwnn.$("hide");
    jjuummpp.$("hide");
    mutee.hide();
    aaaaa.show();
    bbbbb.show();
    ccccc.$("show");
    aaaaa.position(0, -10);
    aaaaa.html("Please Enter Code (default is 0):");
    bbbbb.position(250, 0);
    bbbbb.id("wer");
    ccccc.$("position", 450, 0);
    ccccc.$("html", "ENTER");
    ccccc.$("mousePressed", () => {
      play = 0;
      var information = document.getElementById("wer").value;
      code = information;
      if (information != 0) {
        information = information.split(";");
        for (let i = 0; i <= information.length - 1; i++) {
          information[i] = information[i].split("-");
          if (information[i][0] === "c") {
            totalCoins = parseInt(information[i][1]);
          }
          if (information[i][0] === "p") {
            allCollectedSuperpowers.push(information[i][1]);
          }
        }
      } else {
        code = "0";
      }
    });
  } else {
    aaaaa.hide();
    bbbbb.hide();
    ccccc.$("hide");
  }
  if (play === 0) {
    background(50);
    itsover.hide();
    selectMusic.hide();
    ddoowwnn.$("hide");
    jjuummpp.$("hide");
    getReadyToShoot.$("hide");
    letUsShootWhenReady.$("hide");
    atgl.$("hide");
    back.$("hide");
    mutee.hide();
    zero.show();
    playMan.$("show");
    setMan.$("show");
    superMan.$("show");
    qplayMan.$("show");
    playMan.$("mousePressed", () => {
      resetGame();
    });
    setMan.$("mousePressed", () => {
      play = 3;
    });
    superMan.$("mousePressed", () => {
      play = 4;
    });
    qplayMan.$("mousePressed", () => {
      play = 5;
    });
  } else {
    zero.hide();
    playMan.$("hide");
    setMan.$("hide");
    superMan.$("hide");
    qplayMan.$("hide");
  }
  if (play === 1) {
    ddoowwnn.$("show");
    jjuummpp.$("show");
    atgl.$("hide");
    itsover.hide();
    selectMusic.hide();
    mutee.hide();
    if (allCollectedSuperpowers.includes("shooter")) {
      getReadyToShoot.$("show");
      letUsShootWhenReady.$("show");
      getReadyToShoot.$("mousePressed", () => {
        if (shooterPowered === 1) {
          shooterPowered = 0;
        } else {
          shooterPowered = 1;
        }
      });
      letUsShootWhenReady.$("mousePressed", () => {
        if (shooterPowered === 1 && cantShoot === 0 && amoes > 0) {
          amoes -= 1;
          amos.push(new amo(mouseX, mouseY, ball.x, ball.y));
        }
      });
    } else {
      getReadyToShoot.$("hide");
      letUsShootWhenReady.$("hide");
    }
    background(0, 200, 255);
    fill(255);
    textSize(20);
    text("Coins: " + coinCount, width / 20, height / 10);
    text("Lives: " + lives, width / 4, height / 10);
    if (shooterPowered === 1) {
      text("Ammos: " + amoes, 250, 25);
    }
      if (ex_on.includes("✕2")) {
        if (ex2PowerTimer >= 0) {
          fill(255);
          text("✕2: " + ex2PowerTimer, 100, 100);
        }
      }
      if (ex_on.includes("✕5")) {
        if (ex5PowerTimer >= 0) {
          fill(255);
          text("✕5: " + ex5PowerTimer, 200, 100);
        }
      }
    fill(0, 255, 0);
    noStroke();
    rect(0, height * 0.8, width, height * 0.2);
    push();
    translate(ball.x, ball.y);
    if (shieldPowered === 1) {
      push();
      fill("rgb(255, 255, 0)");
      circle(0, 0, 75 * s);
      pop();
    }
    if (shooterPowered === 1) {
      push();
      qwe = -atan2(mouseX - ball.x, mouseY - ball.y);
      fill(150);
      rotate(qwe);
      rect(-12.5, 0, 25, 100);
      pop();
    }
character[charrie][0]();
    pop();
    push();
    if (shieldPowered === 1) {
      fill("red");
      text("Shield Timer: " + shieldPowerTimer, width / 2, height / 10);
    }
    pop();
    if (explode === 0) {
      jjuummpp.$("mousePressed", () => {
        hhiigghh = 1
        if (ball.dis === 0) {
          ball.jump = 1;
          ball.sy = height / 30;
          boingSound.$("play");
          low = 1
        }
      })
      jjuummpp.$("mouseReleased", () => {
        hhiigghh = 0;
        low = 0;
      });
      ddoowwnn.$("mousePressed", () => {
        ball.down = 1;
        llooww = 1
        high = 1
      });
      ddoowwnn.$("mouseReleased", () => {
        llooww = 0
        ball.sy = 0
        low = 0
      });
      q += 0.2;
      if (ball.x <= width * 0.48) {
        ball.x += width / 100;
      }
      character[charrie][1]();
      cc = totalCoins;
    } else if (explode === 1) {
      exploded = 1;
      if (cc === totalCoins) {
        totalCoins += coinCount;
      }
      changeCode("c", totalCoins);
      if (s <= 10) {
        s += 1;
      } else {
        s = 1;
        ball.x = 2000;
        ball.y = 2000;
        gameOver = setTimeout(() => {
          over = 1;
        }, 5000);
        if (gameOverStartTime === null) {
          gameOverStartTime = millis();
        }

        let elapsed = millis() - gameOverStartTime;

        if (elapsed >= 3000) {
          if (itsover.html() !== "Game Over!!!!") {
            itsover.position(0, height / 4);
            itsover.style(`color:white;font-size:${width / 6}px`);
            itsover.html("Game Over!!!!");
          }

          if (millis() - lastFlashTime >= flashInterval) {
            if (gameOverVisible) {
              itsover.hide();
              gameOverVisible = false;
            } else {
              itsover.show();
              gameOverVisible = true;
            }
            lastFlashTime = millis();
          }

          if (elapsed >= 6000 && play === 1) {
            itsover.hide();
            play = 2;
            gameOverStartTime = null;
            gameOverVisible = true;
            lastFlashTime = 0;
          }
        }
      }
    }

    for (let i = 0; i <= spikes.length - 1; i++) {
      spikes[i].display();
    }
    for (let i = 0; i <= coins.length - 1; i++) {
      coins[i].display();
    }
    for (let i = 0; i <= platforms.length - 1; i++) {
      platforms[i].display();
    }
    if (allCollectedSuperpowers.includes("shield")) {
    for (let i = 0; i <= shields.length - 1; i++) {
      shields[i].display();
    }}
    if (allCollectedSuperpowers.includes("life")) {
    for (let i = 0; i <= lifes.length - 1; i++) {
      lifes[i].display();
    }}
    if (allCollectedSuperpowers.includes("shooter")) {
      for (let i of amos) {
        i.display();
      }
      for (let i = 0; i <= ammos.length - 1; i++) {
        ammos[i].display();
      }
    }
    if (allCollectedSuperpowers.includes("✕2")) {
      for (let i = 0; i <= ex_2_es.length - 1; i++) {
        ex_2_es[i].display();
      }
      for (let i of monsterBUGS) {
        i.display();
      }
    }
    if (allCollectedSuperpowers.includes("✕5")) {
      for (let i = 0; i <= ex_5_es.length - 1; i++) {
        ex_5_es[i].display();
      }
    }
    for (let i of portals) {
      i.display();
    }
    for (let i of particles) {
      i.display();
    }
  }
  if (play === 2) {
    itsover.hide();
    back.$("hide");
    ddoowwnn.$("hide");
    selectMusic.hide();
    jjuummpp.$("hide");
    getReadyToShoot.$("hide");
    letUsShootWhenReady.$("hide");
    atgl.$("hide");
    mutee.hide();
    background(150);
    SuperBallGame.position(0, 0);
    SuperBallGame.show();
    qwerty.$("show");
    qwerty.$("position", width / 2.75, height / 2);
    qwerty.$("mousePressed", () => {
      resetGame();
    });
    lastThing.$("position", width / 2.75, height / 2.5);
    lastThing.$("show");
    lastThing.$("mousePressed", () => {
      play = 0;
    });
  } else {
    SuperBallGame.hide();
    qwerty.$("hide");
    lastThing.$("hide");
    itCode.hide();
    theICode.hide();
  }
  if (play === 3) {
    background("pink");
    jjuummpp.$("hide");
    ddoowwnn.$("hide");
    atgl.$("hide");
    back.$("show");
    getReadyToShoot.$("hide");
    letUsShootWhenReady.$("hide");
    music.$("show");
    codey.$("show");
    music.$("position", 200, 25);
    music.$("html", "music");
    music.$("mousePressed", () => {
      ssel = 1;
    });
    codey.$("html", "code");
    codey.$("position", 250, 25);
    codey.$("mousePressed", () => {
      ssel = 2;
    });
    if (ssel === 1) {
      mutee.show();
      selectMusic.show();
    } else {
      mutee.hide();
      selectMusic.hide();
    }
    if (ssel === 2) {
      theCode.show();
      theSCode.show();
      theSCode.position(100, 200);
      theCode.position(150, 100);
      theCode.html("Your code is in an input:");
      theSCode.value(code);
    } else {
      theCode.hide();
      theSCode.hide();
    }
    textSize(20);
    if (ssel === 1) {
      text("Mute all:", 100, 230);
    }
    back.$("mousePressed", () => {
      play = 0;
    });
    mutee.mousePressed(() => {
      muteallon = muteallon === 0 ? 1 : 0;
      document.getElementById("muteasw").style.left =
        muteallon === 1 ? "70px" : "5px";
    });
  } else {
    music.$("hide");
    codey.$("hide");
    theCode.hide();
    theSCode.hide();
  }
  if (play === 4) {
    background("#ff9200");
    itsover.hide();
    selectMusic.hide();
    ddoowwnn.$("hide");
    jjuummpp.$("hide");
    getReadyToShoot.$("hide");
    letUsShootWhenReady.$("hide");
    mutee.hide();
    back.$("show");
    textSize(20);
    text("Total Coins: " + totalCoins, 0, 25);
    allSuperpowers.show();
    allSuperpowers.position(50, 150);
    allSuperpowers.style(
      "background-color:tan;width:415px;height:300px;overflow-y:scroll;overflow-x:hidden;"
    );
    allSuperpowers.html(`
<div style = "background-color:#ff5d00;width:150px;height:50px;position:absolute;left:0px;top:0px;text-align:center;font-size:20px;border-style: none none solid none;">Superpowers:</div>
<div style = "background-color:skyblue;width:170px;height:50px;position:absolute;left:150px;top:0px;text-align:center;font-size:20px;border-style: none none solid none;">Number of coins:</div>
<div style = "background-color:#00ff30;width:90px;height:50px;position:absolute;left:310px;top:0px;text-align:center;font-size:20px;border-style: none none solid none;">Collected:</div>
`);
SUPERPOWERS.map((i) => {i.display()});
SUPERPOWERS.map((i) => {i.div.parent(allSuperpowers)});
    back.$("mousePressed", () => {
      play = 0;
    });
    textSize(50);
    fill(255);
    stroke(20);
    text("Your Superpowers:", 50, 100);
  } else {
    allSuperpowers.hide();
SUPERPOWERS.map((i) => {i.hide()});
    pots.$("hide");
    shot.$("hide");
    atgl.$("hide");
    ex_two.$("hide");
  }
  if (play === 5) {
    background("yellow");
    jjuummpp.$("hide");
    atgl.$("hide");
    ddoowwnn.$("hide");
    mutee.hide();
    fourin.show();
    scrollplay.show();
    selectMusic.hide();
    getReadyToShoot.$("hide");
    letUsShootWhenReady.$("hide");
    back.$("show");
    back.$("mousePressed", () => {
      play = 0;
    });
    scrollplay.html(`
This game is called the Super Ball Game.<br>
It is a great game to play anywhere.<br>
The estimated Geometry Dash rating is 6 stars so it has a rating of Harder.
`);
  } else {
    fourin.hide();
    scrollplay.hide();
  }

}

function keyPressed() {
      justMoved = 0;
  if (explode === 0) {
    if (key === "ArrowUp") {
      high = 0;
      low = 1;
      ball.down = 0;
      if (ball.dis === 0) {
        ball.jump = 1;
        ball.sy = height / 30;
        if (play === 1) boingSound.$("play");
      }
    }
    if (key === "ArrowDown") {
      low = 0;
      high = 1;
      ball.down = 1;
    }
    if (allCollectedSuperpowers.includes("shooter")) {
      if (key === "s") {
        if (shooterPowered === 1) {
          shooterPowered = 0;
        } else {
          shooterPowered = 1;
        }
      }
      if (shooterPowered === 1) {
        if (key === "x" && cantShoot === 0 && amoes > 0) {
          amoes -= 1;
          amos = [new amo(mouseX, mouseY, ball.x, ball.y)];
        }
        if (key === "x" && amoes > 0 && allCollectedSuperpowers.includes("shooter1")) {
          amoes -= 1;
          amos.push(new amo(mouseX, mouseY, ball.x, ball.y));
        }
      }
    }
  }
}

function keyReleased() {
  if (key === "ArrowUp") {
    low = 0;
    ball.sy = 0;
    if (keyIsDown(DOWN_ARROW)) {
      high = 1;
      ball.down = 1;
    } else {
      high = 0;
      ball.down = 0;
    }
  }
  if (key === "ArrowDown") {
    high = 0;
    ball.down = 0;
    if (keyIsDown(UP_ARROW)) {
      low = 1;
      ball.down = 0;
    } else {
      low = 0;
    }
  }
}

 class spike {
   constructor(x1, y1, x2, y2, x3, y3) {
     this.x1 = x1;
     this.y1 = y1;
     this.x2 = x2;
     this.y2 = y2;
     this.x3 = x3;
     this.y3 = y3;
   }
   display() {
     push();
     fill("grey");
     noStroke();
     translate(this.x1, this.y1);
     triangle(0, 0, this.x2-this.x1, this.y2-this.y1, this.x3-this.x1, this.y3-this.y1);
     pop();
     if (explode === 0) {
       this.x1 -= 5;
       this.x2 -= 5;
       this.x3 -= 5;
       if (collideCirclePoly(ball.x, ball.y, 50 * s, this.getPoints())) {
         lives *= 10;
         if (shieldPowered === 0) {
           if (lives <= 0) {
              explode = 1;
           } else {
             lives -= 1;
           }
         }
         lives /= 10;
       }
     }
     if (this.x1 <= width / -10) {
       //this.x1 += width * 2;
        //this.x2 += width * 2;
          //this.x3 += width * 2;
     }
   }
   getPoints() {
     return [
        { x: this.x1, y: this.y1 },
        { x: this.x2, y: this.y2 },
        { x: this.x3, y: this.y3 },
     ];
   }
 }

class coin {
  constructor(x, y, val) {
    this.x = x;
    this.y = y;
    this.val = val;
    this.incr = 0;
  }
  display() {
    push();
    fill(255, 255, 0);
    noStroke();
    translate(this.x, this.y);
    circle(0, 0, width / 20);
    fill(0);
    textSize(height / 25);
    fill(255, 130, 0);
    text(`+${this.val}`, -10, 6);
    pop();
    if (explode === 0) {
      this.x -= 5;
      if (dist(ball.x, ball.y, this.x, this.y) <= width / 15) {
        this.y -= 2000;
        if (collect === 1) {
          this.incr = this.val * (ex2Powered * 2) * (ex5Powered * 5);
          coinCount += this.incr;
          particles.push(new particle(ball.x, ball.y, `+${this.incr}`));
          coinSound.$("play");
        }
        collect = 0;
      } else {
        collect = 1;
      }
      if (this.x <= width / -10) {
        this.x += width * 2;
        if (this.y <= -1000) {
          this.y += 2000;
        }
      }
    }
  }
}

class platform {
  constructor(x, y, w, h, type) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.on = [];
    this.type = type;
    this.spikeys = [];
    if (this.type === "e") {
          let x1 = x + w/2;
    let y1 = y - h/2;
    this.spikeys.push(new spike(x1,y1,x1 - width / 40,y1 + width / 40,x1 + width / 40,y1 + width / 40));
    }
  }
  display() {
    if (this.type==="r") {
    fill(140, 70, 20);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  } if (this.type==="e") {
    for (let i of this.spikeys) {
      i.display();
          fill(140, 70, 20);
    noStroke();
    rect(this.x, this.y - 3, this.w, this.h);
    }
  }
    if (explode === 0) {
      this.x -= 5;
      if (this.x <= -width) {
        //this.x += width * 3 + (Math.random() * (width/2));
        //this.y += (Math.random() * (height/2)) - (height/4); for levelsake
        if (this.y >= height * 0.75) {
          this.y -= height/4;
        }
      }
}
  }
}

class shield {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  display() {
    push();
    fill(150, 10, 10);
    noStroke();
    translate(this.x, this.y);
    circle(0, 0, width / 15);
    fill(50, 150, 255);
    text("1ø", -10, 6);
    pop();
    if (explode === 0) {
      this.x -= 5;
      if (cwlm === 0) {
        if (dist(ball.x, ball.y, this.x, this.y) <= width / 12) {
          this.y -= 2000;
          shieldPowered = 1;
          spowerUp.$("play");
          shieldPowerTimer += 10 * (ex2Powered * 2) * (ex5Powered * 5);
          clearInterval(shieldPowerTimerClock);
          shieldPowerTimerClock = setInterval(() => {
            if (shieldPowerTimer <= 0) {
              shieldPowered = 0;
              clearInterval(shieldPowerTimerClock);
            }
            shieldPowerTimer -= 1;
          }, 1000);
        }
      }
      if (this.x <= width / -10) {
        this.x += width * 8;
        if (this.y <= -1000) {
          this.y += 2000;
        }
      }
    }
  }
}

class life {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  display() {
    push();
    fill(255, 100, 100);
    noStroke();
    translate(this.x, this.y);
    circle(0, 0, width / 17);
    fill(0);
    textSize(20);
    text("❤️", -10, 6);
    pop();
    if (explode === 0) {
      this.x -= 5;
      if (dist(ball.x, ball.y, this.x, this.y) <= width / 13.6) {
        this.y -= 2000;
        lives += 1 * (ex2Powered * 2) * (ex5Powered * 5);
        spowerUp.$("play");
        boomSound.$("play");
      }
      if (this.x <= width / -10) {
        this.x += width * 2;
        if (this.y <= -1000) {
          this.y += 2000;
        }
      }
    }
  }
}

class amo {
   constructor(xa, ya, xx, yy) {
     this.x = xx;
     this.y = yy;
     this.speed = 10;
     this.d = 1;
     let angle = atan2(ya - yy, xa - xx);
     this.xx = cos(angle) * this.speed;
     this.yy = sin(angle) * this.speed;
   }
   display() {
     if (explode === 0) {
       push();
       if (this.d === 1) {
         if (this.x >= width || this.x <= 0 || this.y >= height || this.y <= 0) {
           this.d = 0;
           cantShoot = 0;
         } else {
            cantShoot = 1;
           for (let i = 0; i <= spikes.length - 1; i++) {
             if (abs(this.x - ball.x) >= 25 && abs(this.y - ball.y) >= 25) {
               if (
                 collideCirclePoly(
                   this.x,
                   this.y,
                   width / 20,
                   spikes[i].getPoints()
                 )
               ) {
                 this.d = 0;
                 cantShoot = 0;
                 spikes[i].x += width * 2;
               }
             }
           }
         }
         push();
         translate(this.x, this.y);
         fill("yellow");
         noStroke();
         circle(0, 0, width / 20);
         this.x += this.xx;
         this.y += this.yy;
         stroke("red");
         pop();
       }
       pop();
     }
   }
 }

class ammo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  display() {
    push();
    fill(255);
    stroke(0);
    translate(this.x, this.y);
    circle(0, 0, width / 17);
    text("+1⚪", -10, 10);
    pop();
    if (explode === 0) {
      this.x -= 5;
      if (dist(ball.x, ball.y, this.x, this.y) <= width / 13.6) {
        this.y -= 2000;
        amoes += 1 * (ex2Powered * 2) * (ex5Powered * 5);
        spowerUp.$("play");
      }
      if (this.x <= width / -10) {
        this.x += width * 5;
        if (this.y <= -1000) {
          this.y += 2000;
        }
      }
    }
  }
}

class times_x {
  constructor(x, y, val) {
    this.x = x;
    this.y = y;
    this.val = val;
  }
  display() {
    push();
    fill(255, 0, 0);
    stroke(0, 0, 255);
    translate(this.x, this.y);
    circle(0, 0, width / 12.5);
    text(`✕${this.val}¦1°`, -10, 10);
    pop();
    if (explode === 0) {
      this.x -= 5;
      if (dist(ball.x, ball.y, this.x, this.y) <= width / 10.8) {
        this.y -= 2000;
        ex_on.push(`✕${this.val}`);
        if (this.val === 2) {
        ex2PowerTimer += 10 * (ex2Powered * 2) * (ex5Powered * 5);
        ex2Powered = 1;
        clearInterval(ex2PowerTimerClock);
        ex2PowerTimerClock = setInterval(() => {
          if (ex2PowerTimer <= 0) {
            ex2Powered = 1/2;
            clearInterval(ex2PowerTimerClock);
          }
          ex2PowerTimer -= 1;
        }, 1000);
      }
      if (this.val === 5) {
        ex5PowerTimer += 10 * (ex2Powered * 2) * (ex5Powered * 5);
        ex5Powered = 1;
        clearInterval(ex5PowerTimerClock);
        ex5PowerTimerClock = setInterval(() => {
          if (ex5PowerTimer <= 0) {
            ex5Powered = 1/5;
            clearInterval(ex5PowerTimerClock);
          }
          ex5PowerTimer -= 1;
        }, 1000);
      }
      spowerUp.$("play");
      coinSound.$("play");
    }
    if (this.x <= width / -20) {
      this.x += width * 20;
        if (this.y <= -1000) {
          this.y += 2000;
        }
      }
    }
  }
}

class particle {
  constructor(x, y, t) {
    this.x = x;
    this.y = y;
    this.t = t;
    this.a = 255;
  }
  display() {
    push();
    fill(255, this.a);
    text(this.t, this.x, this.y);
    this.y -= 1;
    this.a -= 2.55;
    pop();
  }
}

class MONSTER {
  constructor(x, y, s, p, t) {
    this.x = x; //xpos
    this.y = y; //ypos
    this.s = s; //size
    this.sp = 5;
    this.p = p; //power
    this.t = t; //type
    this.jump = 0; //jumping and falling like for the ball
    this.sy = 0; //speed , y
    this.origY = this.y;
    this.down = 0;
    this.dis = 0;

  }
display() {
  if (this.t == "bug") {

  // draw monster centered
  push();
  rectMode(CENTER);
  fill(255, 0, 0);
  rect(this.x, this.y, this.s, this.s);
  pop();

  if (explode === 0) {
    // steady horizontal movement
    this.x -= this.sp;

    // occasional jump (every ~3 seconds) if not already in air
    if (frameCount % 120 === 0 && this.dis === 0) {
      this.jump = 1;
      this.sy = 16;
    }

    if (frameCount % 60 === 0) {
this.sp = 10;
    } else {
this.sp = 5;
    }
        if (frameCount % 120 === 0) {
this.sp = -5;
    } else {
this.sp = 5;
    }

            if (frameCount % 32 === 0) {
this.sp = -5;
    } else {
this.sp = 10;
    }

    // apply shared jump/fall physics
    jumpLogicOf(this);
for (let i of amos) {
      if (dist(i.x, i.y, this.x, this.y) <= (this.s + width / 20) / 2) {
        i.d = 0;
        cantShoot = 0;
        this.x += width;
        this.y += height;
      }
    }
    if (dist(ball.x, ball.y, this.x, this.y) <= width / 15) {
      explode = 1;
    }

    if (this.x <= width / -10) {
      this.x += width * 4;
    }
  }
} else if (this.t == "chaser") {

}
}
// add more of these attributes that mean i don't need to use more code for other functions

}

class PortaL {
    constructor(x,y,t) {
        this.x = x;
        this.y = y;
        this.t = t;
        this.thru = 0
    }
    display() {
    push();
    fill(255, 0, 0);
    stroke(0, 0, 255);
    translate(this.x, this.y);
    ellipse(0,0,50,100)
    pop();
    if (explode === 0) {
      this.x -= 5;
      if (ball.x > this.x && !this.thru) {
        if (typeof this.t === "number") {
        charrie = this.t;
        if (charrie === 2) {
          ball.origY = 376
        }
        high = 1;
      } else if (this.t === "mm1") {
        ball.x = portals.find(p => p.t === "mm2").x;
        ball.y = portals.find(p => p.t === "mm2").y;
      }
        this.thru = 1;
      spowerUp.$("play");
      coinSound.$("play");
    }
    }
    }
}

function resetGame() {
  play = 1;
  gamePrep();
}

class button {
  constructor(v, x, y, w, h, b, c) {
    this.v = v;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.b = b;
    this.c = c;
    this.button = createButton(v).position(this.x, this.y);
    this.button.style(
      `width:${w}px;height:${h}px;background-color:${b};color:${c};`
    );
    this.button.mouseOver(() => {
      this.button.style(`background-color:${c};color:${b};`);
    });
    this.button.mouseOut(() => {
      this.button.style(`background-color:${b};color:${c};`);
    });
  }
  $(a, ...x) {
    if (typeof this.button[a] === "function") {
      return this.button[a](...x);
    } else {
      console.error(`Method "${a}" does not exist on button.`);
    }
  }
}

class sound {
  constructor(x) {
    this.s = loadSound(x);
  }
  $(a, ...x) {
    if (typeof this.s[a] === "function") {
      return this.s[a](...x);
    } else {
      console.error(`Method "${a}" does not exist on sound.`);
    }
  }
}

class superPower {
    constructor(y,n,c,d) {
        this.n = n;
        this.c = c;
        this.collected = false;
        this.div = createDiv().position(0, y);
        this.div1 = createDiv(d)
        .style(`background-color:#ff5d00;width:150px;height:50px;text-align:center;font-size:20px;border-style: none none solid none;`)
        .parent(this.div);
        this.div2 = createDiv(c)
        .style(`background-color:skyblue;width:160px;height:50px;text-align:center;font-size:20px;border-style: none none solid none;`)
        .parent(this.div);
        this.div3 = createDiv()
        .style(`background-color:#00ff30;width:90px;height:50px;text-align:center;font-size:20px;border-style: none none solid none;`)
        .parent(this.div);
        this.button = new button("Collect", 0, 0, 70, 20, "dimgrey", "white")
        this.button.$("parent", this.div);
        this.div1.position(0,0);
        this.div2.position(150,0);
        this.div3.position(310,0);
        this.button.$("position", 320, 15);
        this.div.hide();
    }
    display() {
      this.div.show();
        this.div1.show();
        this.div2.show();
        this.div3.show();
        if (allCollectedSuperpowers.includes(this.n)) {
            this.button.$("hide");
            this.div3.html("✅");
        } else if (totalCoins >= this.c) {
            this.button.$("show");
            if (!this.collected) {
                this.button.$("mousePressed", () => {
                    totalCoins -= this.c;
                    allCollectedSuperpowers.push(this.n);
                    this.button.$("hide");
                    code += `p-${this.n};`;
                    this.div3.html("✅");
                    this.collected = true;
                });
                this.collected = true;
            }
        } else {
            this.button.$("hide");
            this.div3.html("❌");
        }
    }
    hide() {
      this.div.hide();
        this.div1.hide();
        this.div2.hide();
        this.div3.hide();
        this.button.$("hide");
    }
}

function changeCode(a, v) {
  let f = "";
  let u = code.split(";");
  for (let i of u) {
    if (i != "") {
      h = i.split("-");
      if (a === h[0]) {
        h[1] = v;
      }
      f += h[0] + "-" + h[1] + ";";
    }
  }
  code = f;
}

function jumpLogicOf(c) {
  const gravity = 1;

  // save previous position
  c.prevY = c.y;

  // apply gravity
  c.sy -= gravity;

  // move vertically
  c.y -= c.sy;

  let landedPlatform = null;
  let bestY = -Infinity;

  // feet position
  const feet = c.y + (c.s * s) / 2;
  const prevFeet = c.prevY + (c.s * s) / 2;

  for (let plat of platforms) {

    // ignore platforms while dropping down
    if (c.down) continue;

    const withinX =
      c.x >= plat.x &&
      c.x <= plat.x + plat.w;

    // crossed platform top this frame
    const crossedPlatform =
      prevFeet <= plat.y &&
      feet >= plat.y;

    const falling = c.sy < 0;

    if (withinX && crossedPlatform && falling) {
      if (plat.y > bestY) {
        bestY = plat.y;
        landedPlatform = plat;
      }
    }
  }

  // LANDING
  if (landedPlatform) {

    c.y = landedPlatform.y - (c.s * s) / 2;

    c.sy = 0;

    c.jump = 0;
    c.dis = 0;

    if (!landedPlatform.on.includes(c)) {
      landedPlatform.on.push(c);
    }

    currentPlatform = landedPlatform;

  } else {

    // AIRBORNE
    c.jump = 1;
    c.dis = 1;

    // remove from platform lists
    for (let plat of platforms) {
      let idx = plat.on.indexOf(c);

      if (idx !== -1) {
        plat.on.splice(idx, 1);
      }
    }

    currentPlatform = null;
  }

  // finish drop-through
  if (c.down) {
    c.down = 0;
  }

  // ground floor
  const groundY = height * 0.75;

  if (c.y > groundY) {
    c.y = groundY;
    c.sy = 0;
    c.jump = 0;
    c.dis = 0;
  }
}

function createMatrixe() {
  // have all of the positions of objects and how often they come up. also randomise things like positionseach time and how often they come
}

window.preload = preload;
window.setup = setup;
window.draw = draw;
window.keyPressed = keyPressed;

})();
