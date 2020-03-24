import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Usuarios extends BaseSchema {
  protected $tableName = 'usuarios'

  public async up () {
    this.schema.createTable(this.$tableName, (table) => {
      table.increments('id')
      table.string('username').unique(),
      table.string('email').unique(),
      table.string('password'),
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.$tableName)
  }
}
