/*:
 * @plugindesc Reproduce sonidos de pasos en un mapa específico cada vez que el jugador se mueve.
 * @target MZ
 * @param stepSound
 * @text Sonido de Paso
 * @desc El nombre del archivo de sonido para los pasos (debe estar en la carpeta audio/se).
 * @default Step1
 *
 * @param stepVolume
 * @text Volumen de Paso
 * @desc El volumen del sonido de los pasos (0-100).
 * @default 90
 *
 * @param stepPitch
 * @text Tono de Paso
 * @desc El tono del sonido de los pasos (50-150).
 * @default 100
 *
 * @param mapId
 * @text ID del Mapa
 * @desc El ID del mapa donde se reproducirán los sonidos de pasos.
 * @default 5
 */

(function() {
  const parameters = PluginManager.parameters('Footsteps');
  const stepSound = String(parameters['stepSound'] || 'Step1');
  const stepVolume = Number(parameters['stepVolume'] || 90);
  const stepPitch = Number(parameters['stepPitch'] || 100);
  const mapId = Number(parameters['mapId'] || 1);

  const _Game_Player_increaseSteps = Game_Player.prototype.increaseSteps;
  Game_Player.prototype.increaseSteps = function() {
    _Game_Player_increaseSteps.call(this);
    if ($gameMap.mapId() === mapId) {
      this.playStepSound();
    }
  };

  Game_Player.prototype.playStepSound = function() {
    AudioManager.playSe({ name: stepSound, volume: stepVolume, pitch: stepPitch, pan: 0 });
  };
})();
