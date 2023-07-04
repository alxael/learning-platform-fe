/* tslint:disable */
/* eslint-disable */
import { ClassMembershipDto } from './class-membership-dto';
export interface ClassDto {
  classCode?: number;
  classMemberships?: null | Array<ClassMembershipDto>;
  id?: string;
  name?: null | string;
}
