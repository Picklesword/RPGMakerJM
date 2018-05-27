/*
 * @plugindesc Jump over object
 *
 * @Author Matthew Greaves 
 * 
 * @help
 *
 */

 (function() {
	Window_ActorCommand.prototype.makeCommandList = function() {
    if (this._actor) {
        this.addAttackCommand();
        this.addSkillCommands();
    }
};
 })();