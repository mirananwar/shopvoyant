import Service from '../service';

export class StatusEnum extends Service {
  static __typename = 'statusEnum';

  static presets = {
    default: {
      id: null,
      name: null,
    }
  };
};