// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type _1DocumentDataSlicesSlice = PostagemSlice;

/**
 * Content for Card documents
 */
interface _1DocumentData {
  /**
   * Titulo field in *Card*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Card Titutlo
   * - **API ID Path**: 1.titulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  titulo: prismic.RichTextField;

  /**
   * descricao field in *Card*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: 1.descricao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  descricao: prismic.RichTextField;

  /**
   * cardImagem field in *Card*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: 1.cardimagem
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cardimagem: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Card*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: 1.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<_1DocumentDataSlicesSlice>;
}

/**
 * Card document from Prismic
 *
 * - **API ID**: `1`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type _1Document<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<_1DocumentData>, "1", Lang>;

type PageDocumentDataSlicesSlice = never;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * TItulo field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Titulo Principal
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * descricao field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.descricao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  descricao: prismic.RichTextField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = _1Document | PageDocument;

/**
 * Primary content in *Postagem → Default → Primary*
 */
export interface PostagemSliceDefaultPrimary {
  /**
   * articleinicio field in *Postagem → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: postagem.default.primary.articleinicio
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  articleinicio: prismic.RichTextField;

  /**
   * articleimagem2 field in *Postagem → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: postagem.default.primary.articleimagem2
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  articleimagem2: prismic.ImageField<never>;

  /**
   * articlemeio field in *Postagem → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: postagem.default.primary.articlemeio
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  articlemeio: prismic.RichTextField;

  /**
   * articletitulo2 field in *Postagem → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: postagem.default.primary.articletitulo2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  articletitulo2: prismic.RichTextField;

  /**
   * articlefinal field in *Postagem → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: postagem.default.primary.articlefinal
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  articlefinal: prismic.RichTextField;
}

/**
 * Default variation for Postagem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PostagemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PostagemSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Postagem*
 */
type PostagemSliceVariation = PostagemSliceDefault;

/**
 * Postagem Shared Slice
 *
 * - **API ID**: `postagem`
 * - **Description**: Postagem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PostagemSlice = prismic.SharedSlice<
  "postagem",
  PostagemSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      _1Document,
      _1DocumentData,
      _1DocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      PostagemSlice,
      PostagemSliceDefaultPrimary,
      PostagemSliceVariation,
      PostagemSliceDefault,
    };
  }
}
