import state from './state.js'
import * as timer from "./timer.js"
import * as el from './elements.js'
import * as sounds from '../sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
}

export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove('running')

    timer.updateDisplay()
}

export function addFiveMinutes() {
    let minutes = Number(el.minutes.textContent) + 5
    let seconds = Number(el.seconds.textContent)

    if(minutes > 60) {
        timer.updateDisplay(60, 0)
        return
    }

    timer.updateDisplay(minutes, seconds)
}

export function removeFiveMinutes() {
    let minutes = Number(el.minutes.textContent) -5
    let seconds = Number(el.seconds.textContent)
    
    if (minutes < 0 ) {
        timer.updateDisplay(0, 0)
        return
    }

    timer.updateDisplay(minutes, seconds)
}

const resetSounds = (playing) => {
    if(state.forestSoundOn && playing != sounds.forestSound) {
        state.forestSoundOn = false
        state.forestSoundOn = document.documentElement.classList.remove('forest-sound')
        sounds.forestSound.pause()
        sounds.forestSound.currentTime = 0
    }

    if(state.rainSoundOn && playing != sounds.rainSound) {
        state.rainSoundOn = false
        state.rainSoundOn = document.documentElement.classList.remove('rain-sound')
        sounds.rainSound.pause()
        sounds.rainSound.currentTime = 0
    }

    if (state.coffeeShopSoundOn && playing != sounds.coffeeShopSound) {
        state.coffeeShopSoundOn = false
        state.coffeeShopSoundOn = document.documentElement.classList.remove('coffee-shop-sound')
        sounds.coffeeShopSound.pause()
        sounds.coffeeShopSound.currentTime = 0
    }
    
    if (state.fireplaceSoundOn && playing != sounds.fireplaceSound) {
        state.fireplaceSoundOn = false
        state.fireplaceSoundOn = document.documentElement.classList.remove('fireplace-sound')
        sounds.fireplaceSound.pause()
        sounds.fireplaceSound.currentTime = 0
    }
}

export function toggleForestSound() {
    resetSounds(sounds.forestSound)
    state.forestSoundOn = document.documentElement.classList.toggle('forest-sound')
    
    if(state.forestSoundOn) {
        sounds.forestSound.play()
        return
    }

    sounds.forestSound.pause()
    sounds.forestSound.currentTime = 0
}

export function toggleRainSound() {
    resetSounds(sounds.rainSound)
    state.rainSoundOn = document.documentElement.classList.toggle('rain-sound')
    
    if(state.rainSoundOn) {
        sounds.rainSound.play()
        return
    }

    sounds.rainSound.pause()
    sounds.rainSound.currentTime = 0
}

export function toggleCoffeeShopSound() {
    resetSounds(sounds.coffeeShopSound)
    state.coffeeShopSoundOn = document.documentElement.classList.toggle('coffee-shop-sound')
    
    if(state.coffeeShopSoundOn) {
        sounds.coffeeShopSound.play()
        return
    }

    sounds.coffeeShopSound.pause()
    sounds.coffeeShopSound.currentTime = 0
}

export function toggleFireplaceSound() {
    resetSounds(sounds.fireplaceSound)
    state.fireplaceSoundOn = document.documentElement.classList.toggle('fireplace-sound')
    
    if(state.fireplaceSoundOn) {
        sounds.fireplaceSound.play()
        return
    }

    sounds.fireplaceSound.pause()
    sounds.fireplaceSound.currentTime = 0
}