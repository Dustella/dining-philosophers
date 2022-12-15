import { reactive } from 'vue'
import Semaphore from 'ts-semaphore'

const chopsticks_lock = reactive([
  new Semaphore(1),
  new Semaphore(1),
  new Semaphore(1),
  new Semaphore(1),
  new Semaphore(1),
])

const chopsticks = reactive([false, false, false, false, false])

export type PhiStatus = 'thinking' | 'hungry' | 'eating'

const philosopher = reactive([
  'thinking' as PhiStatus,
  'thinking' as PhiStatus,
  'thinking' as PhiStatus,
  'thinking' as PhiStatus,
  'thinking' as PhiStatus,
])

const eat = async (index: number, time: number, leftfirst: boolean) => {
  philosopher[index] = 'hungry'
  const [a, b] = leftfirst ? [index % 5, (index + 1) % 5] : [(index + 1) % 5, index % 5]

  const [first_chop, second_chop] = [chopsticks_lock[a], chopsticks_lock[b]]

  await Promise.all([first_chop.aquire(), second_chop.aquire()])
  chopsticks[a] = true
  chopsticks[b] = true
  philosopher[index] = 'eating'

  console.log(`Philosopher ${index} is eating`)
  await new Promise(resolve => setTimeout(resolve, time * 1000))
  console.log(`Philosopher ${index} is done eating`)

  philosopher[index] = 'thinking'
  chopsticks[a] = false
  chopsticks[b] = false
  first_chop.release()
  second_chop.release()
}

export { eat, chopsticks, philosopher }
