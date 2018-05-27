 //=============================================================================
 /*:
 * @plugindesc Changes the defalut attack skill to the skill of the equiped
 *weapon
 * 
 * @author Matthew Greaves
 *
 * @help
 */
//=============================================================================


//=============================================================================
// Window_ActorCommand
//=============================================================================

 (function) {
   var TH_Window_ActorCommand_addAttackCommand = Window_ActorCommand.prototype.addAttackCommand;
	Window_ActorCommand.prototype.addAttackCommand = function () {
		this.addCommand(TextManager.guard, 'guard', this._actor.canGuard());
	}
 })();