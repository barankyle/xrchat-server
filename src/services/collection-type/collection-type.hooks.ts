// import * as authentication from '@feathersjs/authentication'
import { disallow } from 'feathers-hooks-common'
import convertVideo from '../../hooks/convert-video'
import addAttribution from '../../hooks/add-attribution'
import * as commonHooks from "feathers-hooks-common";
// import createResource from '../../hooks/create-resource'
// Don't remove this comment. It's needed to format import lines nicely.

export default {
  before: {
    all: [
      commonHooks.iff(
        process.env.SERVER_MODE === 'media' || process.env.SERVER_MODE === 'realtime',
        commonHooks.disallow('external')
      )
    ],
    find: [],
    get: [],
    create: [],
    update: [disallow()],
    patch: [disallow()],
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
