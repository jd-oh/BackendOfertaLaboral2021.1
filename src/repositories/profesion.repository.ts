import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, repository} from '@loopback/repository';
import {MysqldsDataSource} from '../datasources';
import {Profesion, ProfesionRelations} from '../models';
import {ProfesionPersonaRepository} from './profesion-persona.repository';

export class ProfesionRepository extends DefaultCrudRepository<
  Profesion,
  typeof Profesion.prototype.id,
  ProfesionRelations
> {



  constructor(
    @inject('datasources.mysqlds') dataSource: MysqldsDataSource, @repository.getter('ProfesionPersonaRepository') protected profesionPersonaRepositoryGetter: Getter<ProfesionPersonaRepository>,
  ) {
    super(Profesion, dataSource);

  }
}
