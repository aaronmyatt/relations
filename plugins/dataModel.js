import { database, services, models } from '@aaronmyatt/relations-data-model';

export default (_, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('database', database);
    inject('services', services);
    inject('models', models);

    if(process.client){
        window.database = database;
        window.services = services;
        window.models = models;
    }
  };
  