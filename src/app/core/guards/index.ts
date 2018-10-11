import {AdminGuard} from './admin.guard';
import {TestGuard} from './test.guard';


const Guards = [
  AdminGuard,
  TestGuard
];

export default Guards;
