/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';

import { SectionContentQuizForCreateDto } from '../models/section-content-quiz-for-create-dto';
import { SectionContentQuizForUpdateDto } from '../models/section-content-quiz-for-update-dto';

@Injectable({ providedIn: 'root' })
export class SectionContentQuizService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiSectionContentSectionContentIdQuizAdminPut()` */
  static readonly ApiSectionContentSectionContentIdQuizAdminPutPath = '/api/section/content/{sectionContentId}/quiz/admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSectionContentSectionContentIdQuizAdminPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSectionContentSectionContentIdQuizAdminPut$Response(
    params: {
      sectionContentId: string;
      body?: SectionContentQuizForUpdateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, SectionContentQuizService.ApiSectionContentSectionContentIdQuizAdminPutPath, 'put');
    if (params) {
      rb.path('sectionContentId', params.sectionContentId, {"style":"simple"});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSectionContentSectionContentIdQuizAdminPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSectionContentSectionContentIdQuizAdminPut(
    params: {
      sectionContentId: string;
      body?: SectionContentQuizForUpdateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiSectionContentSectionContentIdQuizAdminPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiSectionContentSectionContentIdQuizAdminPost()` */
  static readonly ApiSectionContentSectionContentIdQuizAdminPostPath = '/api/section/content/{sectionContentId}/quiz/admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSectionContentSectionContentIdQuizAdminPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSectionContentSectionContentIdQuizAdminPost$Response(
    params: {
      sectionContentId: string;
      body?: SectionContentQuizForCreateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, SectionContentQuizService.ApiSectionContentSectionContentIdQuizAdminPostPath, 'post');
    if (params) {
      rb.path('sectionContentId', params.sectionContentId, {"style":"simple"});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSectionContentSectionContentIdQuizAdminPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSectionContentSectionContentIdQuizAdminPost(
    params: {
      sectionContentId: string;
      body?: SectionContentQuizForCreateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiSectionContentSectionContentIdQuizAdminPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiSectionContentSectionContentIdQuizAdminSectionContentQuizIdDelete()` */
  static readonly ApiSectionContentSectionContentIdQuizAdminSectionContentQuizIdDeletePath = '/api/section/content/{sectionContentId}/quiz/admin/{sectionContentQuizId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSectionContentSectionContentIdQuizAdminSectionContentQuizIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSectionContentSectionContentIdQuizAdminSectionContentQuizIdDelete$Response(
    params: {
      sectionContentId: string;
      sectionContentQuizId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, SectionContentQuizService.ApiSectionContentSectionContentIdQuizAdminSectionContentQuizIdDeletePath, 'delete');
    if (params) {
      rb.path('sectionContentId', params.sectionContentId, {"style":"simple"});
      rb.path('sectionContentQuizId', params.sectionContentQuizId, {"style":"simple"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSectionContentSectionContentIdQuizAdminSectionContentQuizIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSectionContentSectionContentIdQuizAdminSectionContentQuizIdDelete(
    params: {
      sectionContentId: string;
      sectionContentQuizId: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiSectionContentSectionContentIdQuizAdminSectionContentQuizIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
