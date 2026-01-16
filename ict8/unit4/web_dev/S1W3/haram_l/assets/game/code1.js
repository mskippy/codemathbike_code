gdjs.game_32overCode = {};
gdjs.game_32overCode.localVariables = [];
gdjs.game_32overCode.GDbackgroundObjects1= [];
gdjs.game_32overCode.GDbackgroundObjects2= [];
gdjs.game_32overCode.GDgameoverObjects1= [];
gdjs.game_32overCode.GDgameoverObjects2= [];
gdjs.game_32overCode.GDscoreObjects1= [];
gdjs.game_32overCode.GDscoreObjects2= [];


gdjs.game_32overCode.asyncCallback10734380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.game_32overCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}gdjs.game_32overCode.localVariables.length = 0;
}
gdjs.game_32overCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.game_32overCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.game_32overCode.asyncCallback10734380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.game_32overCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.game_32overCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.game_32overCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.game_32overCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDbackgroundObjects1[i].setXOffset(gdjs.game_32overCode.GDbackgroundObjects1[i].getXOffset() + (1));
}
}{for(var i = 0, len = gdjs.game_32overCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDscoreObjects1[i].setBBText("Score : " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.game_32overCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32overCode.GDbackgroundObjects1.length = 0;
gdjs.game_32overCode.GDbackgroundObjects2.length = 0;
gdjs.game_32overCode.GDgameoverObjects1.length = 0;
gdjs.game_32overCode.GDgameoverObjects2.length = 0;
gdjs.game_32overCode.GDscoreObjects1.length = 0;
gdjs.game_32overCode.GDscoreObjects2.length = 0;

gdjs.game_32overCode.eventsList1(runtimeScene);
gdjs.game_32overCode.GDbackgroundObjects1.length = 0;
gdjs.game_32overCode.GDbackgroundObjects2.length = 0;
gdjs.game_32overCode.GDgameoverObjects1.length = 0;
gdjs.game_32overCode.GDgameoverObjects2.length = 0;
gdjs.game_32overCode.GDscoreObjects1.length = 0;
gdjs.game_32overCode.GDscoreObjects2.length = 0;


return;

}

gdjs['game_32overCode'] = gdjs.game_32overCode;
