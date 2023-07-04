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

import { SectionContentDto } from '../models/section-content-dto';
import { SectionContentForCreateDto } from '../models/section-content-for-create-dto';
import { SectionContentForUpdateDto } from '../models/section-content-for-update-dto';

@Injectable({ providedIn: 'root' })
export class SectionContentService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiSectionSectionIdContentGet()` */
  static readonly ApiSectionSectionIdContentGetPath = '/api/section/{sectionId}/content';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSectionSectionIdContentGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSectionSectionIdContentGet$Plain$Response(
    params: {
      sectionId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SectionContentDto>>> {
    const rb = new RequestBuilder(this.rootUrl, SectionContentService.ApiSectionSectionIdContentGetPath, 'get');
    if (params) {
      rb.path('sectionId', params.sectionId, {"style":"simple"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SectionContentDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSectionSectionIdContentGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSectionSectionIdContentGet$Plain(
    params: {
      sectionId: string;
    },
    context?: HttpContext
  ): Observable<Array<SectionContentDto>> {
    return this.apiSectionSectionIdContentGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SectionContentDto>>): Array<SectionContentDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSectionSectionIdContentGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSectionSectionIdContentGet$Json$Response(
    params: {
      sectionId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SectionContentDto>>> {
    const rb = new RequestBuilder(this.rootUrl, SectionContentService.ApiSectionSectionIdContentGetPath, 'get');
    if (params) {
      rb.path('sectionId', params.sectionId, {"style":"simple"});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SectionContentDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSectionSectionIdContentGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSectionSectionIdContentGet$Json(
    params: {
      sectionId: string;
    },
    context?: HttpContext
  ): Observable<Array<SectionContentDto>> {
    return this.apiSectionSectionIdContentGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SectionContentDto>>): Array<SectionContentDto> => r.body)
    );
  }

  /** Path part for operation `apiSectionSectionIdContentAdminGet()` */
  static readonly ApiSectionSectionIdContentAdminGetPath = '/api/section/{sectionId}/content/admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSectionSectionIdContentAdminGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSectionSectionIdContentAdminGet$Plain$Response(
    params: {
      sectionId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SectionContentDto>>> {
    const rb = new RequestBuilder(this.rootUrl, SectionContentService.ApiSectionSectionIdContentAdminGetPath, 'get');
    if (params) {
      rb.path('sectionId', params.sectionId, {"style":"simple"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SectionContentDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSectionSectionIdContentAdminGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSectionSectionIdContentAdminGet$Plain(
    params: {
      sectionId: string;
    },
    context?: HttpContext
  ): Observable<Array<SectionContentDto>> {
    return this.apiSectionSectionIdContentAdminGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SectionContentDto>>): Array<SectionContentDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSectionSectionIdContentAdminGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSectionSectionIdContentAdminGet$Json$Response(
    params: {
      sectionId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SectionContentDto>>> {
    const rb = new RequestBuilder(this.rootUrl, SectionContentService.ApiSectionSectionIdContentAdminGetPath, 'get');
    if (params) {
      rb.path('sectionId', params.sectionId, {"style":"simple"});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SectionContentDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSectionSectionIdContentAdminGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSectionSectionIdContentAdminGet$Json(
    params: {
      sectionId: string;
    },
    context?: HttpContext
  ): Observable<Array<SectionContentDto>> {
    return this.apiSectionSectionIdContentAdminGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SectionContentDto>>): Array<SectionContentDto> => r.body)
    );
  }

  /** Path part for operation `apiSectionSectionIdContentAdminPut()` */
  static readonly ApiSectionSectionIdContentAdminPutPath = '/api/section/{sectionId}/content/admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSectionSectionIdContentAdminPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSectionSectionIdContentAdminPut$Response(
    params: {
      sectionId: string;
      body?: SectionContentForUpdateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, SectionContentService.ApiSectionSectionIdContentAdminPutPath, 'put');
    if (params) {
      rb.path('sectionId', params.sectionId, {"style":"simple"});
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
   * To access the full response (for headers, for example), `apiSectionSectionIdContentAdminPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSectionSectionIdContentAdminPut(
    params: {
      sectionId: string;
      body?: SectionContentForUpdateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiSectionSectionIdContentAdminPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiSectionSectionIdContentAdminPost()` */
  static readonly ApiSectionSectionIdContentAdminPostPath = '/api/section/{sectionId}/content/admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSectionSectionIdContentAdminPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSectionSectionIdContentAdminPost$Response(
    params: {
      sectionId: string;
      body?: SectionContentForCreateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, SectionContentService.ApiSectionSectionIdContentAdminPostPath, 'post');
    if (params) {
      rb.path('sectionId', params.sectionId, {"style":"simple"});
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
   * To access the full response (for headers, for example), `apiSectionSectionIdContentAdminPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSectionSectionIdContentAdminPost(
    params: {
      sectionId: string;
      body?: SectionContentForCreateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiSectionSectionIdContentAdminPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiSectionSectionIdContentAdminSectionContentIdDelete()` */
  static readonly ApiSectionSectionIdContentAdminSectionContentIdDeletePath = '/api/section/{sectionId}/content/admin/{sectionContentId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSectionSectionIdContentAdminSectionContentIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSectionSectionIdContentAdminSectionContentIdDelete$Response(
    params: {
      sectionId: string;
      sectionContentId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, SectionContentService.ApiSectionSectionIdContentAdminSectionContentIdDeletePath, 'delete');
    if (params) {
      rb.path('sectionId', params.sectionId, {"style":"simple"});
      rb.path('sectionContentId', params.sectionContentId, {"style":"simple"});
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
   * To access the full response (for headers, for example), `apiSectionSectionIdContentAdminSectionContentIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSectionSectionIdContentAdminSectionContentIdDelete(
    params: {
      sectionId: string;
      sectionContentId: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiSectionSectionIdContentAdminSectionContentIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
