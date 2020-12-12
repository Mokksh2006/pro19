var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","fd57146e-67ad-47ce-a4f5-afdef04ba515","7ed1247a-0805-4369-8051-b93290fe2b06"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":9,"looping":true,"frameDelay":12,"version":"_10oK8nY8PHDQ56a1fCsLm1EfInv8ETU","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"93CHv7hDpwrqbDYc5Qpk0842YU4WOmH6","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"UAUrN9uxIVsY0noHgOw0OazHhpgmxvKI","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"fd57146e-67ad-47ce-a4f5-afdef04ba515":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"IE63E4hl1_qCqYpnRjAjSKlPhEW0_6AY","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/fd57146e-67ad-47ce-a4f5-afdef04ba515.png"},"7ed1247a-0805-4369-8051-b93290fe2b06":{"name":"farm_land_1","frameCount":1,"frameSize":{"x":400,"y":400},"looping":true,"frameDelay":12,"categories":["backgrounds"],"jsonLastModified":"2020-07-16 22:27:34 UTC","pngLastModified":"2020-01-29 19:48:00 UTC","version":"IfoQilTJEyRRcGxsPp5oLm8tA.ZtIi96","sourceUrl":null,"sourceSize":{"x":400,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/7ed1247a-0805-4369-8051-b93290fe2b06.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bckground  = createSprite(200,200,400,400);
bckground.setAnimation("farm_land_1");
bckground.x = bckground.width/2;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey = createSprite(200,380,20,50);
monkey.setAnimation("monkey");
monkey.setCollider("circle",0,0,280);
monkey.scale = 0.1;
monkey.x = 50;
var ground = createSprite(200,410,400,20);
var invisibleGround = createSprite(200,385,400,5);
invisibleGround.visible = false;
var StoneGroup = createGroup();
var BananaGroup = createGroup();
var count;
count =0;

var score = 0;


function draw() {
  textSize(18);
  //set background to white
 text.depth = bckground.depth+300;
   
  //display score

  
  if(gameState === PLAY){
    //move the ground
    ground.velocityX = 0;
    //scoring
    count = count + Math.round(World.frameRate/60);
    
   
   spawnStone();
    spawnBanana();
     if(BananaGroup.isTouching(monkey)){
      BananaGroup.destroyEach();
      score += 10;
}
switch(score){
  case 10: monkey.scale = 0.12;
  break;
  case 20: monkey.scale = 0.13;
  break;
  case 30: monkey.scale = 0.14;
  break;
  case 40: monkey.scale = 0.15;
  break;
  case 50: monkey.scale = 0.16;
  break;
  case 60: monkey.scale = 0.17;
  break;
}
    
     //jump when the space key is pressed
    if(keyDown("space")&& monkey.y > 340 ){
      monkey.velocityY = -12 ;
        }
  monkey.velocityY = monkey.velocityY + 0.8;

    if(StoneGroup.isTouching(monkey)){
     
      gameState = END;
      
    }
   
  }
  
  else if(gameState === END) {
    
    
    ground.velocityX = 0;
    monkey.velocityY = 0;
    StoneGroup.setVelocityXEach(0);
    BananaGroup.setVelocityEach(0);
    
    StoneGroup.setLifetimeEach(-1);
    BananaGroup.destroyEach();
    
    monkey.scale = 0.10;
  }
  
  monkey.collide(invisibleGround);
  
  drawSprites();
    text("Survival Time: "+ count, 200, 80);
  text("Score: "+score, 20, 80);
}



function spawnStone() {
  if(World.frameCount % 300 === 0) {
    var stone = createSprite(400,365,10,40);
    stone.setAnimation("Stone");
    stone.velocityX = - (6 + 3*count/100);
           
    stone.scale = 0.10;
    stone.lifetime = 70;
    stone.setCollider("circle",0,0,200);

    StoneGroup.add(stone);
  }
}
function spawnBanana() {
  if(World.frameCount % 80 === 0) {
    var x = randomNumber(150,250);
    var banana = createSprite(400,x,10,40);
    banana.setAnimation("Banana");
    banana.velocityX = - (6 + 4*count/100);
    
    
    
    // obstacle.setAnimation("obstacle" + rand);
    
    //assign scale and lifetime to the obstacle           
    banana.scale = 0.1;
    banana.lifetime = 70;
    
    
    
    //add each obstacle to the group
    BananaGroup.add(banana);
  }
}




  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
