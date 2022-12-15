import { reactive } from 'vue'
import Semaphore from 'ts-semaphore'

const chopsticks = reactive([
  new Semaphore(1),
  new Semaphore(1),
  new Semaphore(1),
  new Semaphore(1),
  new Semaphore(1),
])

const philosopher = reactive([
  false,
  false,
  false,
  false,
  false,
])

const eat = async (index: number) => {
  const [a, b] = [index % 5, (index + 1) % 5]
  const [first_chop, second_chop] = [chopsticks[a], chopsticks[b]]
  philosopher[index] = true
  await Promise.all([first_chop.aquire(), second_chop.aquire()])

  console.log(`Philosopher ${index} is eating`)
  // await new Promise(resolve => setTimeout(resolve, 1000))
  console.log(`Philosopher ${index} is done eating`)

  philosopher[index] = false
  first_chop.release()
  second_chop.release()
}
export { eat, chopsticks, philosopher }
