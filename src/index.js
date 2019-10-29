import {Multic} from './main';
import sampleJSON from './sampleJSON.json';

const mul = new Multic(JSON.stringify(sampleJSON));

console.log(mul.svg);