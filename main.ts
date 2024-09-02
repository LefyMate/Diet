namespace SpriteKind {
    export const camera = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(50, -100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setVelocity(50, 100)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
let music_on = false
let projectile: Sprite = null
let mySprite: Sprite = null
game.setGameOverMessage(false, "You got FAT AGAIN!!")
game.setGameOverMessage(true, "Damn GOOD JOB look at that summer body!")
scene.setBackgroundColor(9)
game.splash("\"I see you. Don't you dare cheat on your diet!!\"")
mySprite = sprites.create(img`
    ..ccc.........ffffff....
    ..f4cc.......fcc22ff....
    ..f44cc...fffccccff.....
    ..f244cccc22224442cc....
    ..f224cc2222222244b9c...
    ..cf2222222222222b999c..
    .c22c222222222b11199b2c.
    f22ccccccc222299111b222c
    fffffcc222c222222222222f
    .....f2222442222222222f.
    ....f222244fc2222222ff..
    ...c222244ffffffffff....
    ...c2222cfffc2f.........
    ...ffffffff2ccf.........
    .......ffff2cf..........
    ........fffff...........
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.camera)
let update = 500
let music_playing = false
mySprite2.setVelocity(50, 0)
mySprite.setStayInScreen(true)
scene.cameraFollowSprite(mySprite2)
info.setLife(5)
game.onUpdateInterval(update, function () {
    if (game.runtime() < 20000) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . c c c b b b b b . . . . 
            . . c c b 4 4 4 4 4 4 b b b . . 
            . c c 4 4 4 4 4 5 4 4 4 4 b c . 
            . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
            e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
            e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
            e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
            . e b 4 4 4 4 4 5 4 4 4 4 b e . 
            8 7 e e b 4 4 4 4 4 4 b e e 6 8 
            8 7 2 e e e e e e e e e e 2 7 8 
            e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
            e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
            e b e 8 8 c c 8 8 c c c 8 e b e 
            e e b e c c e e e e e c e b e e 
            . e e b b 4 4 4 4 4 4 4 4 e e . 
            . . . c c c c c e e e e e . . . 
            `, -20, 0)
        projectile.y = randint(0, 100)
    } else if (game.runtime() > 20000 == game.runtime() < 20500) {
        game.splash("Wild ice cream truck appeared")
    } else if (game.runtime() > 20500 == game.runtime() < 35000) {
        update = 300
        music_on = true
        projectile = sprites.createProjectileFromSide(img`
            . . . . . 3 3 b 3 3 d d 3 3 . . 
            . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
            . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
            . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
            . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
            . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
            . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
            . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
            . 4 4 d 1 1 1 1 1 1 d d d b b . 
            . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
            4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
            4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
            4 5 5 d 5 5 d b b b d d 3 . . . 
            4 5 5 5 d d d d 4 4 b 3 . . . . 
            . 4 5 5 5 4 4 4 . . . . . . . . 
            . . 4 4 4 . . . . . . . . . . . 
            `, -20, 0)
        projectile.y = randint(0, 100)
    } else {
        game.gameOver(true)
    }
})
forever(function () {
    if (music_on && !(music_playing)) {
        music_playing = true
        music.play(music.createSong(assets.song`ice cream jingle`), music.PlaybackMode.LoopingInBackground)
    }
})
