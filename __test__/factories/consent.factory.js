import Faker from 'faker'

const posibleAgreements = ['newsletter', 'ads', 'statistics']

const getRandomArraySize = (size = 1, acc = [], elements = []) => {
  const elementToGet = Math.floor(Math.random() * elements.length)
  if (acc.length < size) {
    return getRandomArraySize(
      size,
      acc.push(elements[elementToGet]),
      [...elements.slice(0, elementToGet - 1), ...elements.slice(elementToGet)]
    )
  } else {
    return acc
  }
}
const randomAggrements = () => {
  const numberOfAgremments = Math.floor(Math.random() * posibleAgreements.length)
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
