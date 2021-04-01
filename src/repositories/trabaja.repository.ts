import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {MysqldsDataSource} from '../datasources';
import {ProfesionPersona, Trabaja, TrabajaRelations} from '../models';
import {ProfesionPersonaRepository} from './profesion-persona.repository';

export class TrabajaRepository extends DefaultCrudRepository<
  Trabaja,
  typeof Trabaja.prototype.id,
  TrabajaRelations
> {

  public readonly profesionPersonas: HasManyRepositoryFactory<ProfesionPersona, typeof Trabaja.prototype.id>;

  constructor(
    @inject('datasources.mysqlds') dataSource: MysqldsDataSource, @repository.getter('ProfesionPersonaRepository') protected profesionPersonaRepositoryGetter: Getter<ProfesionPersonaRepository>,
  ) {
    super(Trabaja, dataSource);
    this.profesionPersonas = this.createHasManyRepositoryFactoryFor('profesionPersonas', profesionPersonaRepositoryGetter,);
    this.registerInclusionResolver('profesionPersonas', this.profesionPersonas.inclusionResolver);
  }
}
