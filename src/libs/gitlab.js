import {gitlab} from "./../templates"

const parse = (body) => {
  /**
   * object_kind:
   *    issue
   *    note
   *    push
   */
  const {object_kind: type} = body
  return gitlab.template[type](body)
}

export default {
  parse
}