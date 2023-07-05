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

import { SectionDto } from '../models/section-dto';
import { SectionForCreateDto } from '../models/section-for-create-dto';
import { SectionForUpdateDto } from '../models/section-for-update-dto';

@Injectable({ providedIn: 'root' })
export class SectionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiSectionGet()` */
  static readonly ApiSectionGetPath = '/api/section';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSectionGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSectionGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SectionDto>>> {
    const rb = new RequestBuilder(this.rootUrl, SectionService.ApiSectionGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SectionDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSectionGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSectionGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<SectionDto>> {
    return this.apiSectionGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SectionDto>>): Array<SectionDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSectionGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSectionGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SectionDto>>> {
    const rb = new RequestBuilder(this.rootUrl, SectionService.ApiSectionGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SectionDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSectionGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSectionGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<SectionDto>> {
    return this.apiSectionGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SectionDto>>): Array<SectionDto> => r.body)
    );
  }

  /** Path part for operation `apiSectionAdminPut()` */
  static readonly ApiSectionAdminPutPath = '/api/section/admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSectionAdminPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSectionAdminPut$Response(
    params?: {
      body?: SectionForUpdateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, SectionService.ApiSectionAdminPutPath, 'put');
    if (params) {
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
   * To access the full response (for headers, for example), `apiSectionAdminPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSectionAdminPut(
    params?: {
      body?: SectionForUpdateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiSectionAdminPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiSectionAdminPost()` */
  static readonly ApiSectionAdminPostPath = '/api/section/admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSectionAdminPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSectionAdminPost$Response(
    params?: {
      body?: SectionForCreateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, SectionService.ApiSectionAdminPostPath, 'post');
    if (params) {
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
   * To access the full response (for headers, for example), `apiSectionAdminPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSectionAdminPost(
    params?: {
      body?: SectionForCreateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiSectionAdminPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiSectionAdminSectionIdDelete()` */
  static readonly ApiSectionAdminSectionIdDeletePath = '/api/section/admin/{sectionId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSectionAdminSectionIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSectionAdminSectionIdDelete$Response(
    params: {
      sectionId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, SectionService.ApiSectionAdminSectionIdDeletePath, 'delete');
    if (params) {
      rb.path('sectionId', params.sectionId, {"style":"simple"});
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
   * To access the full response (for headers, for example), `apiSectionAdminSectionIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSectionAdminSectionIdDelete(
    params: {
      sectionId: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiSectionAdminSectionIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
