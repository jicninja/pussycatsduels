import Animations from './Animations';
import { filterPlayerAssets } from '../globals/utils';

import {
  type CatType,
  type AssetObjectType,
  type AssetKeyType,
  Choices,
  OFFSET_TIME_RESULT,
} from '../globals/constants';

class Player {
  catType: CatType;

  anim?: Animations;

  assets: AssetObjectType = {} as AssetObjectType;

  playNow: boolean = false;

  isPreparing: boolean = false;

  choice?: Choices;

  onFinish?: Function;

  constructor(catType: CatType) {
    this.catType = catType;
  }

  showChoice(choice?: Choices) {
    const keys: Array<AssetKeyType> = Object.keys(
      this.assets,
    ) as Array<AssetKeyType>;
    const choiceType = `${choice}${this.catType}` as AssetKeyType;
    keys.forEach((assetKey: AssetKeyType) => {
      this.assets[assetKey].scene.visible = assetKey === choiceType;
    });
  }

  hidePlayer() {
    this.showChoice();
  }

  init(assetLibrary: AssetObjectType) {
    this.assets = filterPlayerAssets(assetLibrary, this.catType);
    this.hidePlayer();
    const rock = this.assets[`rock${this.catType}`];
    this.anim = new Animations(rock.scene, rock.animations, false, false);

    this.anim.mixer.addEventListener('finished', () => {
      if (this.isPreparing && !this.playNow) {
        this.playNow = true;
        this.isPreparing = false;
        this.anim?.anims[0].stop();
        this.showChoice(this.choice);
        if (this.onFinish) setTimeout(this.onFinish, OFFSET_TIME_RESULT);
      }
    });
  }

  play(choice: Choices) {
    if (!this.isPreparing) {
      this.playNow = false;
      this.isPreparing = true;
      this.choice = choice;
      this.anim?.anims[0].play();
      this.showChoice(Choices.ROCK);
    }
  }

  update() {
    this.anim?.update();
  }

  reset() {
    this.choice = undefined;
    this.isPreparing = false;
    this.playNow = false;
    this.hidePlayer();
  }
}

export default Player;
