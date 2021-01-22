while True:
    music.set_volume(70)
    if input.sound_level() >= 8 and input.light_level() <= 5:
            music.ba_ding.play_until_done()