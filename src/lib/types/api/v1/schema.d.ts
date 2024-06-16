/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/v1/posts/{id}": {
    /** 글 단건조회 */
    get: operations["getPost"];
    /** 글 편집 */
    put: operations["edit"];
    /** 글 삭제 */
    delete: operations["delete"];
  };
  "/api/v1/posts/{id}/body": {
    /** 글(본문) 단건조회 */
    get: operations["getPostBody"];
    /** 글 본문 편집 */
    put: operations["editBody"];
  };
  "/api/v1/postComments/{postId}/{postCommentId}": {
    /** 댓글 수정 */
    put: operations["edit_1"];
    /** 댓글 삭제 */
    delete: operations["delete_1"];
  };
  "/api/v1/posts/{id}/like": {
    /** 글 추천 */
    post: operations["like"];
  };
  "/api/v1/posts/temp": {
    /** 임시 글 생성 */
    post: operations["makeTemp"];
  };
  "/api/v1/postComments/{postId}/temp": {
    /** 임시 댓글 생성 */
    post: operations["makeTemp_1"];
  };
  "/api/v1/members/logout": {
    /** 로그아웃 */
    post: operations["logout"];
  };
  "/api/v1/members/login": {
    /** 로그인, accessToken, refreshToken 쿠키 생성됨 */
    post: operations["login"];
  };
  "/api/v1/posts": {
    /** 글 다건조회 */
    get: operations["getPosts"];
  };
  "/api/v1/posts/mine": {
    /** 내글 다건조회 */
    get: operations["getMine"];
  };
  "/api/v1/postComments/{postId}": {
    /** 댓글 다건조회 */
    get: operations["getPosts_1"];
  };
  "/api/v1/members/me": {
    /** 내 정보 */
    get: operations["getMe"];
  };
  "/api/v1/posts/{id}/cancelLike": {
    /** 글 추천취소 */
    delete: operations["cancelLike"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Empty: Record<string, never>;
    RsDataEmpty: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["Empty"];
    };
    EditRequestBody: {
      title: string;
      body: string;
      tagContents: string[];
      published: boolean;
      listed: boolean;
    };
    EditResponseBody: {
      item: components["schemas"]["PostWithBodyDto"];
    };
    PostWithBodyDto: {
      /** Format: int64 */
      id: number;
      /** Format: date-time */
      createDate: string;
      /** Format: date-time */
      modifyDate: string;
      /** Format: int64 */
      authorId: number;
      authorName: string;
      authorProfileImgUrl: string;
      title: string;
      published: boolean;
      listed: boolean;
      /** Format: int64 */
      likesCount: number;
      tagContents: string[];
      actorCanRead?: boolean;
      actorCanEdit?: boolean;
      actorCanDelete?: boolean;
      actorCanLike?: boolean;
      actorCanCancelLike?: boolean;
      body: string;
    };
    RsDataEditResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["EditResponseBody"];
    };
    EditBodyRequestBody: {
      body: string;
    };
    EditCommentRequestBody: {
      body: string;
    };
    EditCommentResponseBody: {
      item: components["schemas"]["PostCommentDto"];
    };
    PostCommentDto: {
      /** Format: int64 */
      id: number;
      /** Format: date-time */
      createDate: string;
      /** Format: date-time */
      modifyDate: string;
      /** Format: int64 */
      authorId: number;
      authorName: string;
      authorProfileImgUrl: string;
      body: string;
      actorCanEdit?: boolean;
      actorCanDelete?: boolean;
      editing?: boolean;
    };
    RsDataEditCommentResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["EditCommentResponseBody"];
    };
    LikeResponseBody: {
      item: components["schemas"]["PostDto"];
    };
    PostDto: {
      /** Format: int64 */
      id: number;
      /** Format: date-time */
      createDate: string;
      /** Format: date-time */
      modifyDate: string;
      /** Format: int64 */
      authorId: number;
      authorName: string;
      authorProfileImgUrl: string;
      title: string;
      published: boolean;
      listed: boolean;
      /** Format: int64 */
      likesCount: number;
      tagContents: string[];
      actorCanRead?: boolean;
      actorCanEdit?: boolean;
      actorCanDelete?: boolean;
      actorCanLike?: boolean;
      actorCanCancelLike?: boolean;
    };
    RsDataLikeResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["LikeResponseBody"];
    };
    MakeTempResponseBody: {
      item: components["schemas"]["PostDto"];
    };
    RsDataMakeTempResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["MakeTempResponseBody"];
    };
    RsDataWriteCommentResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["WriteCommentResponseBody"];
    };
    WriteCommentResponseBody: {
      item: components["schemas"]["PostCommentDto"];
    };
    LoginRequestBody: {
      username: string;
      password: string;
    };
    LoginResponseBody: {
      item: components["schemas"]["MemberDto"];
    };
    MemberDto: {
      /** Format: int64 */
      id: number;
      /** Format: date-time */
      createDate: string;
      /** Format: date-time */
      modifyDate: string;
      name: string;
      profileImgUrl: string;
      authorities: string[];
    };
    RsDataLoginResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["LoginResponseBody"];
    };
    GetPostsResponseBody: {
      itemPage: components["schemas"]["PageDtoPostDto"];
    };
    PageDtoPostDto: {
      /** Format: int64 */
      totalElementsCount: number;
      /** Format: int64 */
      pageElementsCount: number;
      /** Format: int64 */
      totalPagesCount: number;
      /** Format: int32 */
      number: number;
      content: components["schemas"]["PostDto"][];
    };
    RsDataGetPostsResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["GetPostsResponseBody"];
    };
    GetPostResponseBody: {
      item: components["schemas"]["PostWithBodyDto"];
    };
    RsDataGetPostResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["GetPostResponseBody"];
    };
    GetPostBodyResponseBody: {
      /** Format: date-time */
      modifyDate: string;
      body: string;
    };
    RsDataGetPostBodyResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["GetPostBodyResponseBody"];
    };
    GetMineResponseBody: {
      itemPage: components["schemas"]["PageDtoPostDto"];
    };
    RsDataGetMineResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["GetMineResponseBody"];
    };
    GetPostCommentsResponseBody: {
      items: components["schemas"]["PostCommentDto"][];
    };
    RsDataGetPostCommentsResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["GetPostCommentsResponseBody"];
    };
    MeResponseBody: {
      item: components["schemas"]["MemberDto"];
    };
    RsDataMeResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["MeResponseBody"];
    };
    CancelLikeResponseBody: {
      item: components["schemas"]["PostDto"];
    };
    RsDataCancelLikeResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["CancelLikeResponseBody"];
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /** 글 단건조회 */
  getPost: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataGetPostResponseBody"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 글 편집 */
  edit: {
    parameters: {
      path: {
        id: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["EditRequestBody"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataEditResponseBody"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 글 삭제 */
  delete: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 글(본문) 단건조회 */
  getPostBody: {
    parameters: {
      query: {
        lastModifyDate: string;
      };
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataGetPostBodyResponseBody"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 글 본문 편집 */
  editBody: {
    parameters: {
      path: {
        id: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["EditBodyRequestBody"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 댓글 수정 */
  edit_1: {
    parameters: {
      path: {
        postId: number;
        postCommentId: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["EditCommentRequestBody"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataEditCommentResponseBody"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 댓글 삭제 */
  delete_1: {
    parameters: {
      path: {
        postId: number;
        postCommentId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 글 추천 */
  like: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataLikeResponseBody"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 임시 글 생성 */
  makeTemp: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataMakeTempResponseBody"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 임시 댓글 생성 */
  makeTemp_1: {
    parameters: {
      path: {
        postId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataWriteCommentResponseBody"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 로그아웃 */
  logout: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 로그인, accessToken, refreshToken 쿠키 생성됨 */
  login: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginRequestBody"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataLoginResponseBody"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 글 다건조회 */
  getPosts: {
    parameters: {
      query?: {
        page?: number;
        kw?: string;
        kwType?: "ALL" | "TITLE" | "BODY" | "NAME";
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataGetPostsResponseBody"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 내글 다건조회 */
  getMine: {
    parameters: {
      query?: {
        page?: number;
        kw?: string;
        kwType?: "ALL" | "TITLE" | "BODY" | "NAME";
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataGetMineResponseBody"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 댓글 다건조회 */
  getPosts_1: {
    parameters: {
      path: {
        postId: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataGetPostCommentsResponseBody"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 내 정보 */
  getMe: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataMeResponseBody"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 글 추천취소 */
  cancelLike: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataCancelLikeResponseBody"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
}
