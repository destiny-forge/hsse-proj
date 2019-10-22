import { LocalStorage } from "node-localstorage";

global.localStorage = new LocalStorage('./scratch');

global.window = { localStorage: new LocalStorage('./scratch') };

// import { signin } from '../';

// global.localStorage = new LocalStorage('./scratch');

// global.window = { localStorage: new LocalStorage('./scratch') };




describe('signin', () => {

    it('has the correct payload', () => {

    })
})