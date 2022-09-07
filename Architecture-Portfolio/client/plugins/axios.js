export default function ({ store, app: { $axios }, redirect }) {
  const IGNORED_PATHS = ['/auth/login', '/auth/logout', '/auth/refresh']

  $axios.onRequest((config) => {
    if (store.state.auth.access_token) {
      config.headers.Authorization = 'Bearer ' + store.state.auth.access_token
    }
    return config
  })

  $axios.onError((error) => {
    return new Promise(async (resolve, reject) => {
      const isIgnored = IGNORED_PATHS.some(path => error.config.url.includes(path))
      const statusCode = error.response ? error.response.status : -1
      if ((statusCode === 401 || statusCode === 422) && !isIgnored) {
        const { data: { text_code } = { text_code: null } } = error.response || {}
        const refreshToken = store.state.auth.refresh_token
        if (text_code === 'TOKEN_EXPIRED' && refreshToken) {
          if (error.config.hasOwnProperty('retryAttempts')) {
            await store.dispatch('auth/logout')
            return redirect('/')
          } else {
            const config = { retryAttempts: 1, ...error.config }
            try {
              await store.dispatch('auth/refresh')
              return resolve($axios(config))
            } catch (e) {
              await store.dispatch('auth/logout')
              return redirect('/')
            }
          }
        } else if (text_code === 'TOKEN_INVALID') {
          await store.dispatch('auth/logout')
          return redirect('/')
        }
      }
      return reject(error)
    })
  })
}