import * as authentication from '@feathersjs/authentication'
import { HookContext } from '@feathersjs/feathers'
import limitUserId from '../../hooks/limit-user-id'
import setUserId from '../../hooks/set-user-id'
import xrSceneModel from '../../models/xr-scenes.model'
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks

function addObjects(context: HookContext) {

}

export default {
  before: {
    all: [authenticate('jwt')],
    find: [limitUserId],
    get: [limitUserId],
    create: [setUserId, addObjects],
    update: [limitUserId],
    patch: [limitUserId],
    remove: [limitUserId]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
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
