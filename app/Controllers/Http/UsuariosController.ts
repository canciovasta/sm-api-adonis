import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class UsuariosController {
  private table = 'usuarios'

  public async login ({ request, response }: HttpContextContract) {
    const loginSchema = validator.compile(schema.create({
      username: schema.string(),
      password: schema.string(),
    }))

    const data = await request.validate({ schema: loginSchema })
    const user = this.userExists(data)

    if (!user) {
      return response.forbidden({ mensagem: 'Usuário ou senha incorretos' })
    }

    return user
  }

  public async register ({ request, response }: HttpContextContract) {
    const loginSchema = validator.compile(schema.create({
      username: schema.string(),
      password: schema.string(),
      email: schema.string(),
    }))

    const data = await request.validate({ schema: loginSchema })

    const user = await Database
      .from(this.table)
      .select('id')
      .where('username', data.username)
      .orWhere('email', data.email)
      .first()

    if (user) {
      return response.forbidden({ mensagem: 'Usuário já cadastrado' })
    }

    const create = await Database
      .insertQuery()
      .insert(data)
      .table(this.table)
      .then(() => console.log('Sucesso'))
      .catch((err) => console.error(err))

    return create
  }

  public async userExists (data) {
    const users = await Database
      .from(this.table)
      .select('username', 'email')
      .where('username', data.username)
      .andWhere('password', data.password)
      .first()

    return users
  }
}
