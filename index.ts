import { Application } from 'probot' // eslint-disable-line no-unused-vars

export = (app: Application) => {
  app.on('push', async (context) => {
    console.log(context.github.pulls)
  })
}
