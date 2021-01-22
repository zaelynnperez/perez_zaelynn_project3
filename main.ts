while (true) {
    music.setVolume(70)
    if (input.soundLevel() >= 8 && input.lightLevel() <= 5) {
        music.baDing.playUntilDone()
    }
    
}
