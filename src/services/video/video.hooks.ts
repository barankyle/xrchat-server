// import * as authentication from '@feathersjs/authentication'
import convertVideo from '../../hooks/convert-video'
import addAttribution from '../../hooks/add-attribution'
import * as commonHooks from 'feathers-hooks-common'
// import createResource from '../../hooks/create-resource'
// Don't remove this comment. It's needed to format import lines nicely.

export default {
  before: {
    all: [
      commonHooks.iff(
        process.env.SERVER_MODE !== 'media',
        commonHooks.disallow('external')
      )
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [addAttribution, convertVideo],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
