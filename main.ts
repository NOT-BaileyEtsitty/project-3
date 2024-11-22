namespace SpriteKind {
    export const platform = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile0, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.dissolve)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (doodle.vy <= 0) {
        doodle.vy = -150
    }
})
let doodle: Sprite = null
scene.setBackgroundColor(3)
scene.cameraFollowSprite(doodle)
doodle = sprites.create(assets.image`myImage0`, SpriteKind.Player)
controller.moveSprite(doodle, 80, 0)
tiles.setCurrentTilemap(tilemap`level2`)
doodle.setBounceOnWall(true)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections)
game.onUpdate(function () {
    if (doodle.vy > -150) {
        doodle.ay = 200
    }
})
