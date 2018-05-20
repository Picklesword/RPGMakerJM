var right = 1; var left = 1; var up = 1; var down = 1;
if((right==1) && ($gamePlayer.x < $gameMap.event(this._eventId).x && $gamePlayer.y == $gameMap.event(this._eventId).y)) {
  $gamePlayer.jump(2, 0); AudioManager.playSe({name: 'Jump1', pan: 0, pitch: 70, volume: 30});
}else if((left==1) && ($gamePlayer.x > $gameMap.event(this._eventId).x && $gamePlayer.y == $gameMap.event(this._eventId).y)) {
  $gamePlayer.jump(-2, 0); AudioManager.playSe({name: 'Jump1', pan: 0, pitch: 70, volume: 30});
}else if((up==1) && ($gamePlayer.y < $gameMap.event(this._eventId).y && $gamePlayer.x == $gameMap.event(this._eventId).x)) {
  $gamePlayer.jump(0, 2); AudioManager.playSe({name: 'Jump1', pan: 0, pitch: 70, volume: 30});
}else if((down==1) && ($gamePlayer.y > $gameMap.event(this._eventId).y && $gamePlayer.x == $gameMap.event(this._eventId).x)) {
  $gamePlayer.jump(0, -2); AudioManager.playSe({name: 'Jump1', pan: 0, pitch: 70, volume: 30});
}