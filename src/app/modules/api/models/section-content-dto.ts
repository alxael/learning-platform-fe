/* tslint:disable */
/* eslint-disable */
import { SectionContentQuizDto } from './section-content-quiz-dto';
import { SectionFileDto } from './section-file-dto';
export interface SectionContentDto {
  content?: null | string;
  id?: string;
  orderNumber?: number;
  sectionContentQuizzes?: null | Array<SectionContentQuizDto>;
  sectionFiles?: null | Array<SectionFileDto>;
  title?: null | string;
}
