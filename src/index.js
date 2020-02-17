
import router from './router'

addEventListener('fetch', event => {
  event.respondWith(router(event.request))
})
