import Faker from 'faker'

const posibleAgreements = [
  'Receive news letters',
  'Be show targeted ads',
  'Contribute to anonymous visit statistics'
]

/**
 * Create a random aggrement
 * @param {Number} size
 * @param {Array} acc
 * @param {Array} elements
 * @returns {Array}
 */
const getRandomArraySize = (size = 1, acc = [], elements = []) => {
  const elementToGet = Math.floor(Math.random() * elements.length)
  if (acc.length < size) {
    acc.push(elements[elementToGet])
    return getRandomArraySize(
      size,
      acc,
      [...elements.slice(0, elementToGet), ...elements.slice(elementToGet + 1)]
    )
  }
  return acc
}
const randomNumberOfAggrements = () => (Math.floor(Math.random() * posibleAgreements.length) + 1)
const randomAggrements = (numberOfAgremments = randomNumberOfAggrements()) => {
  return getRandomArraySize(numberOfAgremments, [], posibleAgreements)
}

const factoryConsent = (withId) => {
  return {
    id: withId ? Faker.random.uuid() : undefined,
    userEmail: Faker.internet.email(),
    userName: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
    agreements: randomAggrements()
  }
}

export default factoryConsent
