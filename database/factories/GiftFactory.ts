import gift from 'App/Models/Gift'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(gift, ({ faker }) => {
  return {
    description: faker.lorem.sentence({ min: 30, max: 45 }),
    image_url: faker.image.url(),
    link: faker.internet.url(),
    price: faker.number.int(),
    title: faker.lorem.words(3),
    user_id: faker.number.int(),
  }
}).build()
