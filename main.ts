while (true) {
    music.setVolume(70)
    if (input.soundLevel() > 10 && input.lightLevel() <= 5) {
        for (let i = 0; i < 5; i++) {
            music.baDing.playUntilDone()
        }
    }
    
    music.stopAllSounds()
    pause(10000)
}
