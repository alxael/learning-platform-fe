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

import { UserAnswerDto } from '../models/user-answer-dto';
import { UserAnswerForCreateDto } from '../models/user-answer-for-create-dto';
import { UserAnswerForUpdateDto } from '../models/user-answer-for-update-dto';

@Injectable({ providedIn: 'root' })
export class UserAnswerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUserAnswerSectionContentIdGet()` */
  static readonly ApiUserAnswerSectionContentIdGetPath = '/api/user/answer/{sectionContentId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAnswerSectionContentIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAnswerSectionContentIdGet$Plain$Response(
    params: {
      sectionContentId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<UserAnswerDto>>> {
    const rb = new RequestBuilder(this.rootUrl, UserAnswerService.ApiUserAnswerSectionContentIdGetPath, 'get');
    if (params) {
      rb.path('sectionContentId', params.sectionContentId, {"style":"simple"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAnswerDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAnswerSectionContentIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAnswerSectionContentIdGet$Plain(
    params: {
      sectionContentId: string;
    },
    context?: HttpContext
  ): Observable<Array<UserAnswerDto>> {
    return this.apiUserAnswerSectionContentIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserAnswerDto>>): Array<UserAnswerDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAnswerSectionContentIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAnswerSectionContentIdGet$Json$Response(
    params: {
      sectionContentId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<UserAnswerDto>>> {
    const rb = new RequestBuilder(this.rootUrl, UserAnswerService.ApiUserAnswerSectionContentIdGetPath, 'get');
    if (params) {
      rb.path('sectionContentId', params.sectionContentId, {"style":"simple"});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAnswerDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAnswerSectionContentIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAnswerSectionContentIdGet$Json(
    params: {
      sectionContentId: string;
    },
    context?: HttpContext
  ): Observable<Array<UserAnswerDto>> {
    return this.apiUserAnswerSectionContentIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserAnswerDto>>): Array<UserAnswerDto> => r.body)
    );
  }

  /** Path part for operation `apiUserAnswerSectionContentIdQuizSectionContentQuizIdGet()` */
  static readonly ApiUserAnswerSectionContentIdQuizSectionContentQuizIdGetPath = '/api/user/answer/{sectionContentId}/quiz/{sectionContentQuizId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAnswerSectionContentIdQuizSectionContentQuizIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAnswerSectionContentIdQuizSectionContentQuizIdGet$Plain$Response(
    params: {
      sectionContentId: string;
      sectionContentQuizId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<UserAnswerDto>> {
    const rb = new RequestBuilder(this.rootUrl, UserAnswerService.ApiUserAnswerSectionContentIdQuizSectionContentQuizIdGetPath, 'get');
    if (params) {
      rb.path('sectionContentId', params.sectionContentId, {"style":"simple"});
      rb.path('sectionContentQuizId', params.sectionContentQuizId, {"style":"simple"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserAnswerDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAnswerSectionContentIdQuizSectionContentQuizIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAnswerSectionContentIdQuizSectionContentQuizIdGet$Plain(
    params: {
      sectionContentId: string;
      sectionContentQuizId: string;
    },
    context?: HttpContext
  ): Observable<UserAnswerDto> {
    return this.apiUserAnswerSectionContentIdQuizSectionContentQuizIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserAnswerDto>): UserAnswerDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAnswerSectionContentIdQuizSectionContentQuizIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAnswerSectionContentIdQuizSectionContentQuizIdGet$Json$Response(
    params: {
      sectionContentId: string;
      sectionContentQuizId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<UserAnswerDto>> {
    const rb = new RequestBuilder(this.rootUrl, UserAnswerService.ApiUserAnswerSectionContentIdQuizSectionContentQuizIdGetPath, 'get');
    if (params) {
      rb.path('sectionContentId', params.sectionContentId, {"style":"simple"});
      rb.path('sectionContentQuizId', params.sectionContentQuizId, {"style":"simple"});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserAnswerDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAnswerSectionContentIdQuizSectionContentQuizIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAnswerSectionContentIdQuizSectionContentQuizIdGet$Json(
    params: {
      sectionContentId: string;
      sectionContentQuizId: string;
    },
    context?: HttpContext
  ): Observable<UserAnswerDto> {
    return this.apiUserAnswerSectionContentIdQuizSectionContentQuizIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserAnswerDto>): UserAnswerDto => r.body)
    );
  }

  /** Path part for operation `apiUserAnswerSectionContentIdSelectedUserIdGet()` */
  static readonly ApiUserAnswerSectionContentIdSelectedUserIdGetPath = '/api/user/answer/{sectionContentId}/{selectedUserId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAnswerSectionContentIdSelectedUserIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAnswerSectionContentIdSelectedUserIdGet$Plain$Response(
    params: {
      sectionContentId: string;
      selectedUserId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<UserAnswerDto>>> {
    const rb = new RequestBuilder(this.rootUrl, UserAnswerService.ApiUserAnswerSectionContentIdSelectedUserIdGetPath, 'get');
    if (params) {
      rb.path('sectionContentId', params.sectionContentId, {"style":"simple"});
      rb.path('selectedUserId', params.selectedUserId, {"style":"simple"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAnswerDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAnswerSectionContentIdSelectedUserIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAnswerSectionContentIdSelectedUserIdGet$Plain(
    params: {
      sectionContentId: string;
      selectedUserId: string;
    },
    context?: HttpContext
  ): Observable<Array<UserAnswerDto>> {
    return this.apiUserAnswerSectionContentIdSelectedUserIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserAnswerDto>>): Array<UserAnswerDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAnswerSectionContentIdSelectedUserIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAnswerSectionContentIdSelectedUserIdGet$Json$Response(
    params: {
      sectionContentId: string;
      selectedUserId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<UserAnswerDto>>> {
    const rb = new RequestBuilder(this.rootUrl, UserAnswerService.ApiUserAnswerSectionContentIdSelectedUserIdGetPath, 'get');
    if (params) {
      rb.path('sectionContentId', params.sectionContentId, {"style":"simple"});
      rb.path('selectedUserId', params.selectedUserId, {"style":"simple"});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAnswerDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAnswerSectionContentIdSelectedUserIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAnswerSectionContentIdSelectedUserIdGet$Json(
    params: {
      sectionContentId: string;
      selectedUserId: string;
    },
    context?: HttpContext
  ): Observable<Array<UserAnswerDto>> {
    return this.apiUserAnswerSectionContentIdSelectedUserIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserAnswerDto>>): Array<UserAnswerDto> => r.body)
    );
  }

  /** Path part for operation `apiUserAnswerPut()` */
  static readonly ApiUserAnswerPutPath = '/api/user/answer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAnswerPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAnswerPut$Response(
    params?: {
      body?: UserAnswerForUpdateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, UserAnswerService.ApiUserAnswerPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiUserAnswerPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAnswerPut(
    params?: {
      body?: UserAnswerForUpdateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiUserAnswerPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserAnswerPost()` */
  static readonly ApiUserAnswerPostPath = '/api/user/answer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAnswerPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAnswerPost$Response(
    params?: {
      body?: UserAnswerForCreateDto
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, UserAnswerService.ApiUserAnswerPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiUserAnswerPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAnswerPost(
    params?: {
      body?: UserAnswerForCreateDto
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiUserAnswerPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserAnswerSectionContentQuizIdUserAnswerIdDelete()` */
  static readonly ApiUserAnswerSectionContentQuizIdUserAnswerIdDeletePath = '/api/user/answer/{sectionContentQuizId}/{userAnswerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAnswerSectionContentQuizIdUserAnswerIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAnswerSectionContentQuizIdUserAnswerIdDelete$Response(
    params: {
      sectionContentQuizId: string;
      userAnswerId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, UserAnswerService.ApiUserAnswerSectionContentQuizIdUserAnswerIdDeletePath, 'delete');
    if (params) {
      rb.path('sectionContentQuizId', params.sectionContentQuizId, {"style":"simple"});
      rb.path('userAnswerId', params.userAnswerId, {"style":"simple"});
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
   * To access the full response (for headers, for example), `apiUserAnswerSectionContentQuizIdUserAnswerIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAnswerSectionContentQuizIdUserAnswerIdDelete(
    params: {
      sectionContentQuizId: string;
      userAnswerId: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiUserAnswerSectionContentQuizIdUserAnswerIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUserAnswerSectionContentIdAdminSelectedUserIdGet()` */
  static readonly ApiUserAnswerSectionContentIdAdminSelectedUserIdGetPath = '/api/user/answer/{sectionContentId}/admin/{selectedUserId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAnswerSectionContentIdAdminSelectedUserIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAnswerSectionContentIdAdminSelectedUserIdGet$Plain$Response(
    params: {
      sectionContentId: string;
      selectedUserId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<UserAnswerDto>>> {
    const rb = new RequestBuilder(this.rootUrl, UserAnswerService.ApiUserAnswerSectionContentIdAdminSelectedUserIdGetPath, 'get');
    if (params) {
      rb.path('sectionContentId', params.sectionContentId, {"style":"simple"});
      rb.path('selectedUserId', params.selectedUserId, {"style":"simple"});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAnswerDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAnswerSectionContentIdAdminSelectedUserIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAnswerSectionContentIdAdminSelectedUserIdGet$Plain(
    params: {
      sectionContentId: string;
      selectedUserId: string;
    },
    context?: HttpContext
  ): Observable<Array<UserAnswerDto>> {
    return this.apiUserAnswerSectionContentIdAdminSelectedUserIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserAnswerDto>>): Array<UserAnswerDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAnswerSectionContentIdAdminSelectedUserIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAnswerSectionContentIdAdminSelectedUserIdGet$Json$Response(
    params: {
      sectionContentId: string;
      selectedUserId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<UserAnswerDto>>> {
    const rb = new RequestBuilder(this.rootUrl, UserAnswerService.ApiUserAnswerSectionContentIdAdminSelectedUserIdGetPath, 'get');
    if (params) {
      rb.path('sectionContentId', params.sectionContentId, {"style":"simple"});
      rb.path('selectedUserId', params.selectedUserId, {"style":"simple"});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAnswerDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserAnswerSectionContentIdAdminSelectedUserIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserAnswerSectionContentIdAdminSelectedUserIdGet$Json(
    params: {
      sectionContentId: string;
      selectedUserId: string;
    },
    context?: HttpContext
  ): Observable<Array<UserAnswerDto>> {
    return this.apiUserAnswerSectionContentIdAdminSelectedUserIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserAnswerDto>>): Array<UserAnswerDto> => r.body)
    );
  }

}
