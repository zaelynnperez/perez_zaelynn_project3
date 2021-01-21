while (true) {
    music.setVolume(70)
    if (input.soundLevel() <= 10 && input.lightLevel() <= 5) {
        for (let i = 0; i < 5; i++) {
            music.baDing.playUntilDone()
        }
        light.setAll(light.rgb(255, 255, 255))
    }
    
    music.stopAllSounds()
    pause(10000)
}
