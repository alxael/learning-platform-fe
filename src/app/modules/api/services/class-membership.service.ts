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

import { ClassMembershipForCreateDto } from '../models/class-membership-for-create-dto';
import { ClassMembershipForUpdateDto } from '../models/class-membership-for-update-dto';

@Injectable({ providedIn: 'root' })
export class ClassMembershipService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiClassClassIdMembershipPut()` */
  static readonly ApiClassClassIdMembershipPutPath = '/api/class/{classId}/membership';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClassClassIdMembershipPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClassClassIdMembershipPut$Response(
    params: {
      classId: string;
      body?: ClassMembershipForUpdateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ClassMembershipService.ApiClassClassIdMembershipPutPath, 'put');
    if (params) {
      rb.path('classId', params.classId, {"style":"simple"});
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
   * To access the full response (for headers, for example), `apiClassClassIdMembershipPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClassClassIdMembershipPut(
    params: {
      classId: string;
      body?: ClassMembershipForUpdateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiClassClassIdMembershipPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiClassClassIdMembershipPost()` */
  static readonly ApiClassClassIdMembershipPostPath = '/api/class/{classId}/membership';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClassClassIdMembershipPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClassClassIdMembershipPost$Response(
    params: {
      classId: string;
      body?: ClassMembershipForCreateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ClassMembershipService.ApiClassClassIdMembershipPostPath, 'post');
    if (params) {
      rb.path('classId', params.classId, {"style":"simple"});
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
   * To access the full response (for headers, for example), `apiClassClassIdMembershipPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClassClassIdMembershipPost(
    params: {
      classId: string;
      body?: ClassMembershipForCreateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiClassClassIdMembershipPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiClassClassIdMembershipClassMembershipIdDelete()` */
  static readonly ApiClassClassIdMembershipClassMembershipIdDeletePath = '/api/class/{classId}/membership/{classMembershipId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClassClassIdMembershipClassMembershipIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClassClassIdMembershipClassMembershipIdDelete$Response(
    params: {
      classId: string;
      classMembershipId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ClassMembershipService.ApiClassClassIdMembershipClassMembershipIdDeletePath, 'delete');
    if (params) {
      rb.path('classId', params.classId, {"style":"simple"});
      rb.path('classMembershipId', params.classMembershipId, {"style":"simple"});
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
   * To access the full response (for headers, for example), `apiClassClassIdMembershipClassMembershipIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClassClassIdMembershipClassMembershipIdDelete(
    params: {
      classId: string;
      classMembershipId: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiClassClassIdMembershipClassMembershipIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiClassClassIdMembershipAdminPut()` */
  static readonly ApiClassClassIdMembershipAdminPutPath = '/api/class/{classId}/membership/admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClassClassIdMembershipAdminPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClassClassIdMembershipAdminPut$Response(
    params: {
      classId: string;
      body?: ClassMembershipForUpdateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ClassMembershipService.ApiClassClassIdMembershipAdminPutPath, 'put');
    if (params) {
      rb.path('classId', params.classId, {"style":"simple"});
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
   * To access the full response (for headers, for example), `apiClassClassIdMembershipAdminPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClassClassIdMembershipAdminPut(
    params: {
      classId: string;
      body?: ClassMembershipForUpdateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiClassClassIdMembershipAdminPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiClassClassIdMembershipAdminPost()` */
  static readonly ApiClassClassIdMembershipAdminPostPath = '/api/class/{classId}/membership/admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClassClassIdMembershipAdminPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClassClassIdMembershipAdminPost$Response(
    params: {
      classId: string;
      body?: ClassMembershipForUpdateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ClassMembershipService.ApiClassClassIdMembershipAdminPostPath, 'post');
    if (params) {
      rb.path('classId', params.classId, {"style":"simple"});
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
   * To access the full response (for headers, for example), `apiClassClassIdMembershipAdminPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClassClassIdMembershipAdminPost(
    params: {
      classId: string;
      body?: ClassMembershipForUpdateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiClassClassIdMembershipAdminPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiClassClassIdMembershipAdminClassMembershipIdDelete()` */
  static readonly ApiClassClassIdMembershipAdminClassMembershipIdDeletePath = '/api/class/{classId}/membership/admin/{classMembershipId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClassClassIdMembershipAdminClassMembershipIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClassClassIdMembershipAdminClassMembershipIdDelete$Response(
    params: {
      classId: string;
      classMembershipId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ClassMembershipService.ApiClassClassIdMembershipAdminClassMembershipIdDeletePath, 'delete');
    if (params) {
      rb.path('classId', params.classId, {"style":"simple"});
      rb.path('classMembershipId', params.classMembershipId, {"style":"simple"});
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
   * To access the full response (for headers, for example), `apiClassClassIdMembershipAdminClassMembershipIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClassClassIdMembershipAdminClassMembershipIdDelete(
    params: {
      classId: string;
      classMembershipId: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiClassClassIdMembershipAdminClassMembershipIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
