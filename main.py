while True:
    music.set_volume(70)
    if input.sound_level() <= 10 and input.light_level() <= 5:
        for i in range(5):
            music.ba_ding.play_until_done()
        light.set_all(light.rgb(255, 255, 255))
    music .stop_all_sounds()
    pause(10000)