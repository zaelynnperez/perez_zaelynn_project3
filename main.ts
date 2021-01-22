while (true) {
    music.setVolume(70)
    if (input.soundLevel() >= 2 && input.lightLevel() >= 5) {
        for (let i = 0; i < 5; i++) {
            music.baDing.playUntilDone()
        }
        music.stopAllSounds()
        pause(5000)
    }
    
}
