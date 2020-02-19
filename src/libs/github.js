import {github} from "./../templates"

const parse = (body, event) => {
  /**
   * object_kind:
   *    issue
   *    note
   *    push
   */
  return github.template[event](body)
}

export default {
  parse
}