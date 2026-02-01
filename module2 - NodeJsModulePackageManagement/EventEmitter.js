import EventsEmitter from 'events';

export default class EventEmitter {
    static #eventemitter = null;
    static getEventEmitter(){
        if(!this.#eventemitter){
            this.#eventemitter = new EventsEmitter();
        }
        return this.#eventemitter;
    }
}