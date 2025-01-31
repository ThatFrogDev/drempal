gdjs.GameOverCode = {};
gdjs.GameOverCode.localVariables = [];
gdjs.GameOverCode.GDGameOverTextObjects1= [];
gdjs.GameOverCode.GDGameOverTextObjects2= [];
gdjs.GameOverCode.GDGameOverScreenObjects1= [];
gdjs.GameOverCode.GDGameOverScreenObjects2= [];


gdjs.GameOverCode.asyncCallback12528244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameOverCode.localVariables);
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "CanReturn");
}gdjs.GameOverCode.localVariables.length = 0;
}
gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameOverCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.GameOverCode.asyncCallback12528244(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "game-over-2-sound-effect-230463.mp3", false, 40, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CanReturn");
}
{ //Subevents
gdjs.GameOverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerPaused(runtimeScene, "CanReturn");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", true);
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDGameOverTextObjects1.length = 0;
gdjs.GameOverCode.GDGameOverTextObjects2.length = 0;
gdjs.GameOverCode.GDGameOverScreenObjects1.length = 0;
gdjs.GameOverCode.GDGameOverScreenObjects2.length = 0;

gdjs.GameOverCode.eventsList1(runtimeScene);
gdjs.GameOverCode.GDGameOverTextObjects1.length = 0;
gdjs.GameOverCode.GDGameOverTextObjects2.length = 0;
gdjs.GameOverCode.GDGameOverScreenObjects1.length = 0;
gdjs.GameOverCode.GDGameOverScreenObjects2.length = 0;


return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
