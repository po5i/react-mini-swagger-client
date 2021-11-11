/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { Item } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Items<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags items
   * @name GetItemsApi
   * @summary Returns the memory object
   * @request GET:/items/
   */
  getItemsApi = (params: RequestParams = {}) =>
    this.request<Item[], any>({
      path: `/items/`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags items
   * @name PostItemsApi
   * @summary Simple append something to the memory object
   * @request POST:/items/
   */
  postItemsApi = (data: { id?: number; name?: string }, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/items/`,
      method: "POST",
      body: data,
      type: ContentType.UrlEncoded,
      ...params,
    });
  /**
   * No description
   *
   * @tags items
   * @name GetItemApi
   * @summary Returns the memory object
   * @request GET:/items/{item_id}
   */
  getItemApi = (itemId: number, params: RequestParams = {}) =>
    this.request<Item, void>({
      path: `/items/${itemId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags items
   * @name PostItemApi
   * @summary Simple append details to the memory object
   * @request POST:/items/{item_id}
   */
  postItemApi = (itemId: number, data: { id?: number; name?: string }, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/items/${itemId}`,
      method: "POST",
      body: data,
      type: ContentType.UrlEncoded,
      ...params,
    });
}
