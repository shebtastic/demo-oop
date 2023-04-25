console.clear()


const useState = (initialState) => {
  let state = {
    current: initialState
  }
  return [state, (newState) => {
    state.current = newState
  }]
}

const useStateWithGetter = (initialState) => {
  let state = initialState
  return [() => state, (newState) => {
    state = newState
  }]
}

class State {
  constructor(initialState) {
    this.state = initialState
  }

  setState(newState) {
    this.state = newState
  }
}

// const [state, setState] = useState()
// console.log(state.current)
// setState("test")
// console.log(state.current)


console.time("functional")
const [state, setState] = useStateWithGetter()
console.log(state())
setState("test")
console.log(state())
console.timeEnd("functional")

console.log("--- And I oop! ---")

console.time("object oriented")
const oopState = new State()
console.log(oopState.state)
oopState.setState("oop")
console.log(oopState.state)
console.timeEnd("object oriented")


console.log(`\n\ninheritance\n`)

class RaceTrack {
  constructor(goal) {
    this.goal = 100
    this.participants = []
  }

  //jsdocs
  /**
   * @method
   * @param {Animal} participant
   *
   * @description adds a new participant to the racetrack
   *
   * @example
   * new RaceTrack().signUp(new Animal("antje", 20))
   */
  signUp(participant) {
    this.participants.push(participant)
  }

  start() {
    while(!this.participants.some(animal => animal.position >= this.goal)) {
      this.participants.forEach((animal) => animal.move())
    }
    return this.participants.sort()[0]
  }
}

class Animal {

  static #counter = 0
  constructor(name, speed) {
    Animal.#counter++

    if(name === undefined || speed === undefined) {
      throw new Error("missing arguments")
    }

    this.name = name
    this.speed = speed
    this.position = 0
  }

  speedUp() {
    this.speed++
  }

  move() {
    this.position += this.speed
  }

  toString() {
    return `I'm ${this.name} and i'm ${this.speed} m/s fast!`
  }

  static count() {
    return this.#counter
  }
}

class Dragonfly extends Animal {
  constructor(...args) { //wird automatisch erstellt
    super(...args);
  }
  fly() {
    console.log("buzz")
  }
}

class Pug extends Animal {
  speedUp() {
    this.sprint()
  }

  sprint() {
    if(this.speed < 20) {
      this.speed++
    } else {
      this.wheeze()
    }
  }

  wheeze() {
    console.log("wäh!")
  }

  run() {
    console.log("trample")
  }
}

class Bat extends Animal {}

const antje = new Dragonfly("Antje", 20)
const bob = new Pug("Bob", 10)

const racetrack = new RaceTrack(100)
racetrack.signUp(antje)
racetrack.signUp(bob)

const winner = racetrack.start()
console.log(winner)

console.log(Animal.count())
// console.log(Animal.#counter)
const dennis = new Bat("dennis", 100)
console.log(Animal.count())

// console.log(antje)
// console.log(antje.toString())

// bob.speedUp()
// bob.speedUp()
// bob.speedUp()
// bob.speedUp()
// bob.speedUp()
// bob.speedUp()
// bob.speedUp()
// bob.speedUp()
// bob.speedUp()
// bob.speedUp()
// bob.speedUp()
// bob.speedUp()
// bob.speedUp()
// bob.speedUp()
// bob.speedUp()
// console.log(bob.toString())
//




function Person(name) {
  this.name = name
}

Person.prototype.sayHi = function () {
  console.log(`¡Hola! Me llamo ${this.name}.`)
}

const clive = new Person("Clive")
console.log(clive)
clive.sayHi()
