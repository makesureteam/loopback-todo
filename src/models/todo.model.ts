import {Entity, model, property} from '@loopback/repository';

@model({settings: {"strict":false}})
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  desc?: string;

  @property({
    type: 'boolean',
  })
  isComplete?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}
