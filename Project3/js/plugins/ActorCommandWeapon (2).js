/*:
 * @plugindesc Shows only a listing of all an actor's skills in the
 * actor command window
 * @author Michael Stroud edited by Matthew Greaves
 * @Attack command removed and replaced by the equipped weapon's skill
 * note section for weapon must only contain the phrase "Weapon Skill"
 * and include a skill on the weapon for function to work correctly
 */
 
(function(){
    var parameters = PluginManager.parameters('skillsOnlyBattleWindow');
    var showAttackCommand = Number(parameters['showAttackCommand'] || 0);
    var showItemCommand = Number(parameters['showItemCommand'] || 0);
    var showGuardCommand = Number(parameters['showGuardCommand'] || 0);
    Window_ActorCommand.prototype.makeCommandList = function() {
		if (this._actor) {
			this.addEachSkillCommand();
			this.addGuardCommand();
			this.addSkillCommands();
			this.addItemCommand();
        }
    };
   
    Window_ActorCommand.prototype.addEachSkillCommand = function() {
        var skills = this._actor.usableSkills();
        if (showAttackCommand && !this._actor.isSkillSealed(1)){
            this.addAttackCommand();
        }
        skills.forEach(function(skill) {
            var isWeaponSkill = skill.note.indexOf("<weapon skill>") == -1 ? 0 : 1;
			if(isWeaponSkill)
				this.addCommand('Attack', 'singleSkill', true, skill);
        }, this);
    };
   
    Scene_Battle.prototype.commandSingleSkill = function() {
        var skill = this._actorCommandWindow.currentExt();
        var action = BattleManager.inputtingAction();
        action.setSkill(skill.id);
        BattleManager.actor().setLastBattleSkill(skill);
        this.onSelectAction();
    };
   
    Scene_Battle.prototype.createActorCommandWindow = function() {
        this._actorCommandWindow = new Window_ActorCommand();
		this._actorCommandWindow.setHandler('singleSkill', this.commandSingleSkill.bind(this));
        this._actorCommandWindow.setHandler('cancel', this.selectPreviousCommand.bind(this));
        this._actorCommandWindow.setHandler('skill',  this.commandSkill.bind(this));
        this._actorCommandWindow.setHandler('attack', this.commandAttack.bind(this));
        this._actorCommandWindow.setHandler('guard', this.commandGuard.bind(this));
        this._actorCommandWindow.setHandler('item', this.commandItem.bind(this));
        this.addWindow(this._actorCommandWindow);
    };
})();