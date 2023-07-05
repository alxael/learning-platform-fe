/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AuthService } from './services/auth.service';
import { ClassService } from './services/class.service';
import { ClassMembershipService } from './services/class-membership.service';
import { FileService } from './services/file.service';
import { ProfileService } from './services/profile.service';
import { SectionService } from './services/section.service';
import { SectionContentService } from './services/section-content.service';
import { SectionContentQuizService } from './services/section-content-quiz.service';
import { UserAnswerService } from './services/user-answer.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AuthService,
    ClassService,
    ClassMembershipService,
    FileService,
    ProfileService,
    SectionService,
    SectionContentService,
    SectionContentQuizService,
    UserAnswerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
