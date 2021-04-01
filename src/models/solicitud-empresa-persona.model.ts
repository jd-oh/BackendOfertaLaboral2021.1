import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Persona} from './persona.model';

@model()
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
