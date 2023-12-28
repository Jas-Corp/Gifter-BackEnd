import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import GiftFactory from 'Database/factories/GiftFactory'

export default class extends BaseSeeder {
  public async run() {
    await GiftFactory.createMany(100)
  }
}
