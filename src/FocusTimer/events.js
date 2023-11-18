import { controls } from "./elements.js"
import * as actions from "./actions.js"
import { soundsControls } from "./elements.js"

export function registerControls() {
    controls.addEventListener('click', (event) => {
        
        let parent = event.target
        parent = parent.parentNode

        const action = parent.dataset.action
        if(typeof actions[action] != "function") {
            return
        }
        
        actions[action]()
    })
}

export function registerSounds() {
    soundsControls.addEventListener('click', (event) => {
        
        let parent = event.target
        parent = parent.parentNode

        const sound = parent.dataset.action
        if(typeof actions[sound] != "function") {
            return
        }
        
        actions[sound]()
    })
}