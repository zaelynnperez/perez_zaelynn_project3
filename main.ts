while (true) {
    music.setVolume(70)
    if (input.lightLevel() >= 5) {
        for (let i = 0; i < 5; i++) {
            music.baDing.playUntilDone()
        }
        music.stopAllSounds()
        pause(5000)
    }
    
}
