import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Persona} from './persona.model';

@model({
  settings: {
    foreignKeys: {
      fk_empresa_id: {
        name: 'fk_empresa_id',
        entity: 'Empresa',
        entityKey: 'id',
        foreignKey: 'empresaId',
      },

      fk_persona_id: {
        name: 'fk_persona_solicitud_id',
        entity: 'Persona',
        entityKey: 'id',
        foreignKey: 'personaId',
      },
    },
  },
})
export class SolicitudEmpresaPersona extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  asunto: string;

  @property({
    type: 'string',
    required: true,
  })
  contenido: string;

  @property({
    type: 'number',
  })
  empresaId?: number;

  @belongsTo(() => Persona)
  personaId: number;

  constructor(data?: Partial<SolicitudEmpresaPersona>) {
    super(data);
  }
}

export interface SolicitudEmpresaPersonaRelations {
  // describe navigational properties here
}

export type SolicitudEmpresaPersonaWithRelations = SolicitudEmpresaPersona & SolicitudEmpresaPersonaRelations;
