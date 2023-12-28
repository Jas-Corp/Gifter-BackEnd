import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
      rules.required(),
    ]),
    password: schema.string({}, [rules.minLength(8), rules.required()]),
  })

  public messages: CustomMessages = {
    'email.required': 'Email is required',
    'email.unique': 'Account already exists with this email',
    'email.email': 'Email is not valid',
    'password.required': 'Password is required',
    'password.minLength': 'Password must be at least 8 characters',
  }
}
