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
		//	var weaponId = this._actor._equips[0]._id;
			var weaponSkill = $dataWeapons[1].name;
			this.addCommand('Attack', 'singleSkil', this._actor.canAttack());

			this.addSkillCommands();
		
		}
	};

	Window_ActorCommand.prototype.addSkillCommands = function() {
    var skillTypes = this._actor.addedSkillTypes();
    skillTypes.sort(function(a, b) {
        return a - b;
    });
    skillTypes.forEach(function(stypeId) {
        var name = $dataSystem.skillTypes[stypeId];
        this.addCommand(name, 'skill', true, stypeId);
    }, this);
};

	Scene_Battle.prototype.commandSingleSkill = function() {
		var skill = this._actorCommandWindow.currentExt();
		var action = BattleManager.inputtingAction();
		action.setSkill(12)
		BattleManager.actor().setLastBattleSkill(skill);
		this.onSelectAction();
    };

 })();