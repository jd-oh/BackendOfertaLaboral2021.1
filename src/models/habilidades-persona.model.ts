import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_habilidad_id: {
        name: 'fk_habilidad_id',
        entity: 'Habilidad',
        entityKey: 'id',
        foreignKey: 'habilidadId',
      },

      fk_persona_id: {
        name: 'fk_persona_hab_per_id',
        entity: 'Persona',
        entityKey: 'id',
        foreignKey: 'personaId',
      },
    },
  },
})
export class HabilidadesPersona extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  personaId?: number;

  @property({
    type: 'number',
  })
  habilidadId?: number;

  constructor(data?: Partial<HabilidadesPersona>) {
    super(data);
  }
}

export interface HabilidadesPersonaRelations {
  // describe navigational properties here
}

export type HabilidadesPersonaWithRelations = HabilidadesPersona & HabilidadesPersonaRelations;
