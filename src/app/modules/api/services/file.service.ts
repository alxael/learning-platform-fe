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


@Injectable({ providedIn: 'root' })
export class FileService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiFileProfilePhotoPut()` */
  static readonly ApiFileProfilePhotoPutPath = '/api/file/profile-photo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileProfilePhotoPut()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFileProfilePhotoPut$Response(
    params?: {
      body?: {
'file'?: Blob;
}
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, FileService.ApiFileProfilePhotoPutPath, 'put');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
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
   * To access the full response (for headers, for example), `apiFileProfilePhotoPut$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFileProfilePhotoPut(
    params?: {
      body?: {
'file'?: Blob;
}
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiFileProfilePhotoPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiFileProfilePhotoDelete()` */
  static readonly ApiFileProfilePhotoDeletePath = '/api/file/profile-photo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileProfilePhotoDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileProfilePhotoDelete$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, FileService.ApiFileProfilePhotoDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiFileProfilePhotoDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileProfilePhotoDelete(
    params?: {
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiFileProfilePhotoDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiFileUserAnswerSectionContentQuizIdPost()` */
  static readonly ApiFileUserAnswerSectionContentQuizIdPostPath = '/api/file/user-answer/{sectionContentQuizId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileUserAnswerSectionContentQuizIdPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFileUserAnswerSectionContentQuizIdPost$Response(
    params: {
      sectionContentQuizId: string;
      body?: {
'file'?: Blob;
}
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, FileService.ApiFileUserAnswerSectionContentQuizIdPostPath, 'post');
    if (params) {
      rb.path('sectionContentQuizId', params.sectionContentQuizId, {"style":"simple"});
      rb.body(params.body, 'multipart/form-data');
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
   * To access the full response (for headers, for example), `apiFileUserAnswerSectionContentQuizIdPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFileUserAnswerSectionContentQuizIdPost(
    params: {
      sectionContentQuizId: string;
      body?: {
'file'?: Blob;
}
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiFileUserAnswerSectionContentQuizIdPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiFileUserAnswerSectionContentQuizIdUserAnswerIdDelete()` */
  static readonly ApiFileUserAnswerSectionContentQuizIdUserAnswerIdDeletePath = '/api/file/user-answer/{sectionContentQuizId}/{userAnswerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileUserAnswerSectionContentQuizIdUserAnswerIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileUserAnswerSectionContentQuizIdUserAnswerIdDelete$Response(
    params: {
      sectionContentQuizId: string;
      userAnswerId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, FileService.ApiFileUserAnswerSectionContentQuizIdUserAnswerIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiFileUserAnswerSectionContentQuizIdUserAnswerIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileUserAnswerSectionContentQuizIdUserAnswerIdDelete(
    params: {
      sectionContentQuizId: string;
      userAnswerId: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiFileUserAnswerSectionContentQuizIdUserAnswerIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiFileAdminSectionSectionContentIdPost()` */
  static readonly ApiFileAdminSectionSectionContentIdPostPath = '/api/file/admin/section/{sectionContentId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileAdminSectionSectionContentIdPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFileAdminSectionSectionContentIdPost$Response(
    params: {
      sectionContentId: string;
      body?: {
'file'?: Blob;
}
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, FileService.ApiFileAdminSectionSectionContentIdPostPath, 'post');
    if (params) {
      rb.path('sectionContentId', params.sectionContentId, {"style":"simple"});
      rb.body(params.body, 'multipart/form-data');
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
   * To access the full response (for headers, for example), `apiFileAdminSectionSectionContentIdPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiFileAdminSectionSectionContentIdPost(
    params: {
      sectionContentId: string;
      body?: {
'file'?: Blob;
}
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiFileAdminSectionSectionContentIdPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiFileAdminSectionSectionFileIdDelete()` */
  static readonly ApiFileAdminSectionSectionFileIdDeletePath = '/api/file/admin/section/{sectionFileId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileAdminSectionSectionFileIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileAdminSectionSectionFileIdDelete$Response(
    params: {
      sectionFileId: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, FileService.ApiFileAdminSectionSectionFileIdDeletePath, 'delete');
    if (params) {
      rb.path('sectionFileId', params.sectionFileId, {"style":"simple"});
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
   * To access the full response (for headers, for example), `apiFileAdminSectionSectionFileIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileAdminSectionSectionFileIdDelete(
    params: {
      sectionFileId: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiFileAdminSectionSectionFileIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
