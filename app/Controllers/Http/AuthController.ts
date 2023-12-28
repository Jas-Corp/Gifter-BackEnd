import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserValidator from 'App/Validators/UserValidator'

export default class AuthController {
  public async register({ auth, request, response }: HttpContextContract) {
    const { email, password } = await request.validate(UserValidator)

    try {
      const user = await User.create({
        email: email,
        password: password,
      })

      await auth.use('web').login(user, true)
    } catch (err) {
      return response.badRequest('An error occurred while creating your account')
    }
  }

  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      await auth.use('web').attempt(email, password, true)
    } catch {
      return response.badRequest('Invalid email or password')
    }
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.use('web').logout(false)
  }

  public async me({ auth, response }: HttpContextContract) {
    return response.ok({ email: auth.user?.email })
  }
}
