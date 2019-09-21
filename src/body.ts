interface IBody {
  // Counting body coordinates from the neck
  neckX: number;
  neckY: number;

  // Size of the body, defaults to 1, which is the average human size
  bodySize: number;

  pose: ICharacterPose;
  hat?: IHat;
  leftHandItem?: IHoldableItem;
  rightHandItem?: IHoldableItem;
}

interface IHat {
  isHat: boolean;
}

interface IHoldableItem {

}

interface ICharacterPose {
  // Direction where the character is watching in degrees
  eyeDirection: number;

  // Angle of the character body
  bodyAngle: number;

  // Rotation of the both legs in degrees
  leftUpperLegRotation: number;
  leftLowerLegRotation: number;

  rightUpperLegRotation: number;
  rightLowerLegRotation: number;

  // Rotation of the both arms in degrees
  leftUpperArmRotation: number;
  leftLowerArmRotation: number;

  rightUpperArmRotation: number;
  rightLowerArmRotation: number;
}