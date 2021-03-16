import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const customMap = new CustomMap('map');

console.log(user);
customMap.addUserMarker(user);