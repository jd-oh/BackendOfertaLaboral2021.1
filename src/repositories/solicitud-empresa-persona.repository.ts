import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository} from '@loopback/repository';
import {MysqldsDataSource} from '../datasources';
import {Persona, SolicitudEmpresaPersona, SolicitudEmpresaPersonaRelations} from '../models';
import {PersonaRepository} from './persona.repository';

export class SolicitudEmpresaPersonaRepository extends DefaultCrudRepository<
  SolicitudEmpresaPersona,
  typeof SolicitudEmpresaPersona.prototype.id,
  SolicitudEmpresaPersonaRelations
> {

  public readonly persona: BelongsToAccessor<Persona, typeof SolicitudEmpresaPersona.prototype.id>;

  constructor(
    @inject('datasources.mysqlds') dataSource: MysqldsDataSource, @repository.getter('PersonaRepository') protected personaRepositoryGetter: Getter<PersonaRepository>,
  ) {
    super(SolicitudEmpresaPersona, dataSource);
    this.persona = this.createBelongsToAccessorFor('persona', personaRepositoryGetter,);
    this.registerInclusionResolver('persona', this.persona.inclusionResolver);
  }
}
