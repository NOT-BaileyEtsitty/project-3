namespace SpriteKind {
    export const platform = SpriteKind.create()
}
scene.setBackgroundColor(3)
let mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
controller.moveSprite(mySprite)
let mySprite2 = sprites.create(assets.image`myImage1`, SpriteKind.platform)
