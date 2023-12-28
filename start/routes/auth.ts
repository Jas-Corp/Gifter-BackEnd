import Route from '@ioc:Adonis/Core/Route'

Route.post('/register', 'AuthController.register')
Route.post('/signin', 'AuthController.login')
Route.group(() => {
  Route.post('/logout', 'AuthController.logout')
  Route.get('/me', 'AuthController.me')
}).middleware('Auth')
