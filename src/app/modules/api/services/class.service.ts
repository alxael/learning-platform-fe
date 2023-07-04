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

import { ClassDto } from '../models/class-dto';
import { ClassForCreateDto } from '../models/class-for-create-dto';
import { ClassForUpdateDto } from '../models/class-for-update-dto';

@Injectable({ providedIn: 'root' })
export class ClassService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiClassGet()` */
  static readonly ApiClassGetPath = '/api/class';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClassGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClassGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<ClassDto>>> {
    const rb = new RequestBuilder(this.rootUrl, ClassService.ApiClassGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ClassDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClassGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClassGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<ClassDto>> {
    return this.apiClassGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ClassDto>>): Array<ClassDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClassGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClassGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<ClassDto>>> {
    const rb = new RequestBuilder(this.rootUrl, ClassService.ApiClassGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ClassDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClassGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClassGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<ClassDto>> {
    return this.apiClassGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ClassDto>>): Array<ClassDto> => r.body)
    );
  }

  /** Path part for operation `apiClassPut()` */
  static readonly ApiClassPutPath = '/api/class';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClassPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClassPut$Response(
    params?: {
      body?: ClassForUpdateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ClassService.ApiClassPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiClassPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClassPut(
    params?: {
      body?: ClassForUpdateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiClassPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiClassPost()` */
  static readonly ApiClassPostPath = '/api/class';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClassPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClassPost$Response(
    params?: {
      body?: ClassForCreateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ClassService.ApiClassPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiClassPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClassPost(
    params?: {
      body?: ClassForCreateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiClassPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiClassClassIdDelete()` */
  static readonly ApiClassClassIdDeletePath = '/api/class/{classId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClassClassIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClassClassIdDelete$Response(
    params: {
      classId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ClassService.ApiClassClassIdDeletePath, 'delete');
    if (params) {
      rb.path('classId', params.classId, {"style":"simple"});
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
   * To access the full response (for headers, for example), `apiClassClassIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClassClassIdDelete(
    params: {
      classId: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiClassClassIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiClassAdminGet()` */
  static readonly ApiClassAdminGetPath = '/api/class/admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClassAdminGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClassAdminGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<ClassDto>>> {
    const rb = new RequestBuilder(this.rootUrl, ClassService.ApiClassAdminGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ClassDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClassAdminGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClassAdminGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<ClassDto>> {
    return this.apiClassAdminGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ClassDto>>): Array<ClassDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClassAdminGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClassAdminGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<ClassDto>>> {
    const rb = new RequestBuilder(this.rootUrl, ClassService.ApiClassAdminGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ClassDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClassAdminGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClassAdminGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<ClassDto>> {
    return this.apiClassAdminGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ClassDto>>): Array<ClassDto> => r.body)
    );
  }

  /** Path part for operation `apiClassAdminPut()` */
  static readonly ApiClassAdminPutPath = '/api/class/admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClassAdminPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClassAdminPut$Response(
    params?: {
      body?: ClassForUpdateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ClassService.ApiClassAdminPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiClassAdminPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClassAdminPut(
    params?: {
      body?: ClassForUpdateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiClassAdminPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiClassAdminClassIdDelete()` */
  static readonly ApiClassAdminClassIdDeletePath = '/api/class/admin/{classId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClassAdminClassIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClassAdminClassIdDelete$Response(
    params: {
      classId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ClassService.ApiClassAdminClassIdDeletePath, 'delete');
    if (params) {
      rb.path('classId', params.classId, {"style":"simple"});
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
   * To access the full response (for headers, for example), `apiClassAdminClassIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClassAdminClassIdDelete(
    params: {
      classId: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiClassAdminClassIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
