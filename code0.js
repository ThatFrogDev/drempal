gdjs.LevelCode = {};
gdjs.LevelCode.localVariables = [];
gdjs.LevelCode.GDJoystickObjects1_1final = [];

gdjs.LevelCode.GDJumpButtonObjects1_1final = [];

gdjs.LevelCode.GDPlatformer_9595CharacterObjects1= [];
gdjs.LevelCode.GDPlatformer_9595CharacterObjects2= [];
gdjs.LevelCode.GDCoinsObjects1= [];
gdjs.LevelCode.GDCoinsObjects2= [];
gdjs.LevelCode.GDJumpButtonObjects1= [];
gdjs.LevelCode.GDJumpButtonObjects2= [];
gdjs.LevelCode.GDJoystickObjects1= [];
gdjs.LevelCode.GDJoystickObjects2= [];
gdjs.LevelCode.GDPlatformsObjects1= [];
gdjs.LevelCode.GDPlatformsObjects2= [];
gdjs.LevelCode.GDTreesObjects1= [];
gdjs.LevelCode.GDTreesObjects2= [];
gdjs.LevelCode.GDBackgroundObjects1= [];
gdjs.LevelCode.GDBackgroundObjects2= [];
gdjs.LevelCode.GDBuildingsObjects1= [];
gdjs.LevelCode.GDBuildingsObjects2= [];
gdjs.LevelCode.GDKnifeObjects1= [];
gdjs.LevelCode.GDKnifeObjects2= [];
gdjs.LevelCode.GDScoreTextObjects1= [];
gdjs.LevelCode.GDScoreTextObjects2= [];


gdjs.LevelCode.eventsList0 = function(runtimeScene) {

};gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDKnifeObjects1Objects = Hashtable.newFrom({"Knife": gdjs.LevelCode.GDKnifeObjects1});
gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDCoinsObjects1Objects = Hashtable.newFrom({"Coins": gdjs.LevelCode.GDCoinsObjects1});
gdjs.LevelCode.eventsList1 = function(runtimeScene) {

};gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.LevelCode.GDPlatformer_9595CharacterObjects1});
gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDCoinsObjects1Objects = Hashtable.newFrom({"Coins": gdjs.LevelCode.GDCoinsObjects1});
gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.LevelCode.GDPlatformer_9595CharacterObjects1});
gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDKnifeObjects1Objects = Hashtable.newFrom({"Knife": gdjs.LevelCode.GDKnifeObjects1});
gdjs.LevelCode.eventsList2 = function(runtimeScene) {

};gdjs.LevelCode.eventsList3 = function(runtimeScene) {

{


gdjs.LevelCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.LevelCode.GDPlatformer_9595CharacterObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "2021-03-15_-_Fun_In_Kyoto_-_www.FesliyanStudios.com_Steve_Oxen.mp3", false, 60, 1);
}{for(var i = 0, len = gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KnifeSpawn");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "KnifeSpawn") >= 3;
if (isConditionTrue_0) {
gdjs.LevelCode.GDCoinsObjects1.length = 0;

gdjs.LevelCode.GDKnifeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDKnifeObjects1Objects, gdjs.randomInRange(0, 1280), -(250), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDCoinsObjects1Objects, gdjs.randomInRange(0, 1280), -(250), "");
}{for(var i = 0, len = gdjs.LevelCode.GDKnifeObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDKnifeObjects1[i].getBehavior("Scale").setScale(0.2);
}
}{for(var i = 0, len = gdjs.LevelCode.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDCoinsObjects1[i].getBehavior("Scale").setScale(0.1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "KnifeSpawn");
}}

}


{


gdjs.LevelCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.LevelCode.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.LevelCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDCoinsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LevelCode.GDCoinsObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.LevelCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDCoinsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "PickupCoin", false, 80, gdjs.randomFloatInRange(1, 1.1));
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.LevelCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDScoreTextObjects1[i].getBehavior("Text").setText("Score: " + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knife"), gdjs.LevelCode.GDKnifeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.LevelCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.LevelCode.mapOfGDgdjs_9546LevelCode_9546GDKnifeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LevelCode.GDKnifeObjects1 */
{for(var i = 0, len = gdjs.LevelCode.GDKnifeObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDKnifeObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.LevelCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[i].getY() >= 720 ) {
        isConditionTrue_0 = true;
        gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[k] = gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.LevelCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[i].getX() >= 1280 ) {
        isConditionTrue_0 = true;
        gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[k] = gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LevelCode.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[i].setX(1280);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.LevelCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[i].getX() <= -(250) ) {
        isConditionTrue_0 = true;
        gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[k] = gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LevelCode.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[i].setX(-(250));
}
}}

}


{


gdjs.LevelCode.eventsList2(runtimeScene);
}


{

gdjs.LevelCode.GDJumpButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.LevelCode.GDJumpButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.LevelCode.GDJumpButtonObjects2);
for (var i = 0, k = 0, l = gdjs.LevelCode.GDJumpButtonObjects2.length;i<l;++i) {
    if ( gdjs.LevelCode.GDJumpButtonObjects2[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.LevelCode.GDJumpButtonObjects2[k] = gdjs.LevelCode.GDJumpButtonObjects2[i];
        ++k;
    }
}
gdjs.LevelCode.GDJumpButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.LevelCode.GDJumpButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.LevelCode.GDJumpButtonObjects1_1final.indexOf(gdjs.LevelCode.GDJumpButtonObjects2[j]) === -1 )
            gdjs.LevelCode.GDJumpButtonObjects1_1final.push(gdjs.LevelCode.GDJumpButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.LevelCode.GDJumpButtonObjects1_1final, gdjs.LevelCode.GDJumpButtonObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.LevelCode.GDPlatformer_9595CharacterObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{

gdjs.LevelCode.GDJoystickObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.LevelCode.GDJoystickObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Joystick"), gdjs.LevelCode.GDJoystickObjects2);
for (var i = 0, k = 0, l = gdjs.LevelCode.GDJoystickObjects2.length;i<l;++i) {
    if ( gdjs.LevelCode.GDJoystickObjects2[i].IsDirectionPushed4Way("Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.LevelCode.GDJoystickObjects2[k] = gdjs.LevelCode.GDJoystickObjects2[i];
        ++k;
    }
}
gdjs.LevelCode.GDJoystickObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.LevelCode.GDJoystickObjects2.length; j < jLen ; ++j) {
        if ( gdjs.LevelCode.GDJoystickObjects1_1final.indexOf(gdjs.LevelCode.GDJoystickObjects2[j]) === -1 )
            gdjs.LevelCode.GDJoystickObjects1_1final.push(gdjs.LevelCode.GDJoystickObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.LevelCode.GDJoystickObjects1_1final, gdjs.LevelCode.GDJoystickObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.LevelCode.GDPlatformer_9595CharacterObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}{for(var i = 0, len = gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("Animation").setAnimationName("Walk");
}
}{for(var i = 0, len = gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.LevelCode.GDJoystickObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.LevelCode.GDJoystickObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Joystick"), gdjs.LevelCode.GDJoystickObjects2);
for (var i = 0, k = 0, l = gdjs.LevelCode.GDJoystickObjects2.length;i<l;++i) {
    if ( gdjs.LevelCode.GDJoystickObjects2[i].IsDirectionPushed4Way("Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.LevelCode.GDJoystickObjects2[k] = gdjs.LevelCode.GDJoystickObjects2[i];
        ++k;
    }
}
gdjs.LevelCode.GDJoystickObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.LevelCode.GDJoystickObjects2.length; j < jLen ; ++j) {
        if ( gdjs.LevelCode.GDJoystickObjects1_1final.indexOf(gdjs.LevelCode.GDJoystickObjects2[j]) === -1 )
            gdjs.LevelCode.GDJoystickObjects1_1final.push(gdjs.LevelCode.GDJoystickObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.LevelCode.GDJoystickObjects1_1final, gdjs.LevelCode.GDJoystickObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.LevelCode.GDPlatformer_9595CharacterObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}{for(var i = 0, len = gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("Animation").setAnimationName("Walk");
}
}{for(var i = 0, len = gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.LevelCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( !(gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[k] = gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LevelCode.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


};

gdjs.LevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.LevelCode.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.LevelCode.GDCoinsObjects1.length = 0;
gdjs.LevelCode.GDCoinsObjects2.length = 0;
gdjs.LevelCode.GDJumpButtonObjects1.length = 0;
gdjs.LevelCode.GDJumpButtonObjects2.length = 0;
gdjs.LevelCode.GDJoystickObjects1.length = 0;
gdjs.LevelCode.GDJoystickObjects2.length = 0;
gdjs.LevelCode.GDPlatformsObjects1.length = 0;
gdjs.LevelCode.GDPlatformsObjects2.length = 0;
gdjs.LevelCode.GDTreesObjects1.length = 0;
gdjs.LevelCode.GDTreesObjects2.length = 0;
gdjs.LevelCode.GDBackgroundObjects1.length = 0;
gdjs.LevelCode.GDBackgroundObjects2.length = 0;
gdjs.LevelCode.GDBuildingsObjects1.length = 0;
gdjs.LevelCode.GDBuildingsObjects2.length = 0;
gdjs.LevelCode.GDKnifeObjects1.length = 0;
gdjs.LevelCode.GDKnifeObjects2.length = 0;
gdjs.LevelCode.GDScoreTextObjects1.length = 0;
gdjs.LevelCode.GDScoreTextObjects2.length = 0;

gdjs.LevelCode.eventsList3(runtimeScene);
gdjs.LevelCode.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.LevelCode.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.LevelCode.GDCoinsObjects1.length = 0;
gdjs.LevelCode.GDCoinsObjects2.length = 0;
gdjs.LevelCode.GDJumpButtonObjects1.length = 0;
gdjs.LevelCode.GDJumpButtonObjects2.length = 0;
gdjs.LevelCode.GDJoystickObjects1.length = 0;
gdjs.LevelCode.GDJoystickObjects2.length = 0;
gdjs.LevelCode.GDPlatformsObjects1.length = 0;
gdjs.LevelCode.GDPlatformsObjects2.length = 0;
gdjs.LevelCode.GDTreesObjects1.length = 0;
gdjs.LevelCode.GDTreesObjects2.length = 0;
gdjs.LevelCode.GDBackgroundObjects1.length = 0;
gdjs.LevelCode.GDBackgroundObjects2.length = 0;
gdjs.LevelCode.GDBuildingsObjects1.length = 0;
gdjs.LevelCode.GDBuildingsObjects2.length = 0;
gdjs.LevelCode.GDKnifeObjects1.length = 0;
gdjs.LevelCode.GDKnifeObjects2.length = 0;
gdjs.LevelCode.GDScoreTextObjects1.length = 0;
gdjs.LevelCode.GDScoreTextObjects2.length = 0;


return;

}

gdjs['LevelCode'] = gdjs.LevelCode;
