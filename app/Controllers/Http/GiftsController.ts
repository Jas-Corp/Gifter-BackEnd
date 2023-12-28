import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Gift from 'App/Models/Gift'

export default class GiftsController {
  public async create({ request, response, auth }: HttpContextContract) {
    const { title, description, price } = request.body()
    const user = auth.user
    Gift.create({
      title,
      description,
      image_url: 'https://picsum.photos/200',
      price,
      link: 'https://picsum.photos/200',
      user_id: user?.id,
    })

    return response.ok({ title, description, price })
  }

  public async index({ response, params }: HttpContextContract) {
    const numberOfGiftsToGet = params.numberOfGift
    const gifts = await Database.from('gifts').orderByRaw('RAND()').limit(numberOfGiftsToGet)
    return response.ok(gifts)
  }
}
