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

import { UserProfileDto } from '../models/user-profile-dto';
import { UserProfileForUpdateDto } from '../models/user-profile-for-update-dto';

@Injectable({ providedIn: 'root' })
export class ProfileService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiProfileGet()` */
  static readonly ApiProfileGetPath = '/api/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<UserProfileDto>> {
    const rb = new RequestBuilder(this.rootUrl, ProfileService.ApiProfileGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserProfileDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfileGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<UserProfileDto> {
    return this.apiProfileGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserProfileDto>): UserProfileDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<UserProfileDto>> {
    const rb = new RequestBuilder(this.rootUrl, ProfileService.ApiProfileGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserProfileDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProfileGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<UserProfileDto> {
    return this.apiProfileGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserProfileDto>): UserProfileDto => r.body)
    );
  }

  /** Path part for operation `apiProfilePut()` */
  static readonly ApiProfilePutPath = '/api/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfilePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProfilePut$Response(
    params?: {
      body?: UserProfileForUpdateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ProfileService.ApiProfilePutPath, 'put');
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
   * To access the full response (for headers, for example), `apiProfilePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProfilePut(
    params?: {
      body?: UserProfileForUpdateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiProfilePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiProfileDelete()` */
  static readonly ApiProfileDeletePath = '/api/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileDelete$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ProfileService.ApiProfileDeletePath, 'delete');
    if (params) {
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
   * To access the full response (for headers, for example), `apiProfileDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileDelete(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiProfileDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
