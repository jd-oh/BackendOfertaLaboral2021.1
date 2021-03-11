import {Entity, model, property} from '@loopback/repository';

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


  constructor(data?: Partial<SolicitudEmpresaPersona>) {
    super(data);
  }
}

export interface SolicitudEmpresaPersonaRelations {
  // describe navigational properties here
}

export type SolicitudEmpresaPersonaWithRelations = SolicitudEmpresaPersona & SolicitudEmpresaPersonaRelations;