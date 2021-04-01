import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqldsDataSource} from '../datasources';
import {SolicitudEmpresaPersona, SolicitudEmpresaPersonaRelations, Persona} from '../models';
import {PersonaRepository} from './persona.repository';

export class SolicitudEmpresaPersonaRepository extends DefaultCrudRepository<
  SolicitudEmpresaPersona,
  typeof SolicitudEmpresaPersona.prototype.id,
  SolicitudEmpresaPersonaRelations
> {

  public readonly persona: BelongsToAccessor<Persona, typeof SolicitudEmpresaPersona.prototype.id>;

  constructor(
    @inject('datasources.Mysqlds') dataSource: MysqldsDataSource, @repository.getter('PersonaRepository') protected personaRepositoryGetter: Getter<PersonaRepository>,
  ) {
    super(SolicitudEmpresaPersona, dataSource);
    this.persona = this.createBelongsToAccessorFor('persona', personaRepositoryGetter,);
    this.registerInclusionResolver('persona', this.persona.inclusionResolver);
  }
}
