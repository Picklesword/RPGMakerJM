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

	this.addCommand(this._actor._equips[0].name, 'sword', this._actor.canAttack());

	this.addSkillCommands();
		
    }
};
 })();