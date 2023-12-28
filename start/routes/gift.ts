import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/', 'GiftsController.create')
  Route.get('/:numberOfGift', 'GiftsController.index')
})
  .middleware('Auth')
  .prefix('/gifts')
