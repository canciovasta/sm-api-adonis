import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('login', 'UsuariosController.login').as('Fazer login')
  Route.post('register', 'UsuariosController.register').as('Criar conta')
}).prefix('usuarios').middleware('authUser')
