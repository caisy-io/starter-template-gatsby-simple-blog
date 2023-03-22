export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `DateTime` scalar type represents a DateTime. The DateTime is serialized as an RFC 3339 quoted string */
  CAISY_DateTime: any;
  /** Any JSON value */
  CAISY_JSON: any;
};

export type IGenFile = IGenNode & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<IGenNode>;
  children: Array<IGenNode>;
  internal: IGenInternal;
};


export type IGenFileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenFileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenFileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenFileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenFileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenFileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenFileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type IGenNode = {
  id: Scalars['ID'];
  parent?: Maybe<IGenNode>;
  children: Array<IGenNode>;
  internal: IGenInternal;
};

export type IGenInternal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
  contentFilePath?: Maybe<Scalars['String']>;
};

export type IGenDirectory = IGenNode & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<IGenNode>;
  children: Array<IGenNode>;
  internal: IGenInternal;
};


export type IGenDirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenDirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenDirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenDirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenDirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenDirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenDirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenSite = IGenNode & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<IGenSiteSiteMetadata>;
  graphqlTypegen?: Maybe<IGenSiteGraphqlTypegen>;
  trailingSlash?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<IGenNode>;
  children: Array<IGenNode>;
  internal: IGenInternal;
};


export type IGenSiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenSiteGraphqlTypegen = {
  typesOutputPath?: Maybe<Scalars['String']>;
  documentSearchPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  generateOnBuild?: Maybe<Scalars['Boolean']>;
};

export type IGenSiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type IGenSiteFunction = IGenNode & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<IGenNode>;
  children: Array<IGenNode>;
  internal: IGenInternal;
};

export type IGenSitePage = IGenNode & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<IGenSitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<IGenNode>;
  children: Array<IGenNode>;
  internal: IGenInternal;
};

export type IGenSitePlugin = IGenNode & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<IGenNode>;
  children: Array<IGenNode>;
  internal: IGenInternal;
};

export type IGenSiteBuildMetadata = IGenNode & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<IGenNode>;
  children: Array<IGenNode>;
  internal: IGenInternal;
};


export type IGenSiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenGraphQlSource = IGenNode & {
  id: Scalars['ID'];
  parent?: Maybe<IGenNode>;
  children: Array<IGenNode>;
  internal: IGenInternal;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
};

export type IGenCaisy_Category = {
  _meta?: Maybe<IGenCaisy_CaisyDocument_Meta>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type IGenCaisy_Caisy_Field_Document_NotFound = {
  id?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
};

export type IGenCaisy_NewsletterSignup_ConnectionEdge = {
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenCaisy_NewsletterSignup>;
};

export type IGenCaisy_SeoInformation_UpdateInput = {
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  ogImage?: InputMaybe<Scalars['ID']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_Headline_CreateInput = {
  titleInternal?: InputMaybe<Scalars['String']>;
  headline?: InputMaybe<Scalars['String']>;
  subheadline?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_CaisyField_String_Where = {
  neq?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_Page_Where = {
  slug?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCaisy_Page_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCaisy_Page_Where>>>;
  titleInternal?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
};

export type IGenCaisy_Author_Sort = {
  name?: InputMaybe<IGenCaisy_Order>;
  role?: InputMaybe<IGenCaisy_Order>;
  avatar?: InputMaybe<IGenCaisy_Order>;
};

export type IGenCaisy_NewsletterSignup_CreateInput = {
  titleInternal?: InputMaybe<Scalars['String']>;
  headline?: InputMaybe<Scalars['String']>;
  subheadline?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_Asset_Connection = {
  edges?: Maybe<Array<Maybe<IGenCaisy_Asset_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenCaisy_PageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenCaisy_BlogArticleGrid_Connection = {
  edges?: Maybe<Array<Maybe<IGenCaisy_BlogArticleGrid_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenCaisy_PageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenCaisy_Navigation = {
  _meta?: Maybe<IGenCaisy_CaisyDocument_Meta>;
  entries?: Maybe<Array<Maybe<IGenCaisy_Navigation_Entries>>>;
  homePage?: Maybe<IGenCaisy_Page>;
  id?: Maybe<Scalars['ID']>;
  notFoundPage?: Maybe<IGenCaisy_Page>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenCaisy_NavigationEntriesArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisy_NavigationHomePageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisy_NavigationNotFoundPageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_Page_UpdateInput = {
  titleInternal?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<Scalars['ID']>;
  components?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type IGenCaisy_Fulltext_UpdateInput = {
  titleInternal?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['CAISY_JSON']>;
};

export type IGenCaisy_Fulltext = {
  _meta?: Maybe<IGenCaisy_CaisyDocument_Meta>;
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<IGenCaisy_Fulltext_Text>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenCaisy_FulltextTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_ContactForm_ConnectionEdge = {
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenCaisy_ContactForm>;
};

export type IGenCaisy_FullwidthBlogTeaser_UpdateInput = {
  titleInternal?: InputMaybe<Scalars['String']>;
  featuredArticle?: InputMaybe<Scalars['ID']>;
};

export type IGenCaisy_Navigation_UpdateInput = {
  titleInternal?: InputMaybe<Scalars['String']>;
  homePage?: InputMaybe<Scalars['ID']>;
  notFoundPage?: InputMaybe<Scalars['ID']>;
  entries?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type IGenCaisy_Navigation_Entries = IGenCaisy_NavigationEntry;

export type IGenCaisy_Page_Connection = {
  edges?: Maybe<Array<Maybe<IGenCaisy_Page_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenCaisy_PageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenCaisy_FullwidthBlogTeaser_Connection = {
  edges?: Maybe<Array<Maybe<IGenCaisy_FullwidthBlogTeaser_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenCaisy_PageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenCaisy_BlogArticleGrid_CreateInput = {
  titleInternal?: InputMaybe<Scalars['String']>;
  headline?: InputMaybe<Scalars['String']>;
  subheadline?: InputMaybe<Scalars['String']>;
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type IGenCaisy_Page = {
  _meta?: Maybe<IGenCaisy_CaisyDocument_Meta>;
  components?: Maybe<Array<Maybe<IGenCaisy_Page_Components>>>;
  id?: Maybe<Scalars['ID']>;
  seo?: Maybe<IGenCaisy_SeoInformation>;
  slug?: Maybe<Scalars['String']>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenCaisy_PageComponentsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisy_PageSeoArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_SeoInformation_Where = {
  keywords?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCaisy_SeoInformation_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCaisy_SeoInformation_Where>>>;
  titleInternal?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  title?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  description?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
};

export type IGenCaisy_FullwidthBlogTeaser_Where = {
  titleInternal?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCaisy_FullwidthBlogTeaser_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCaisy_FullwidthBlogTeaser_Where>>>;
};

export type IGenCaisy_BlogArticle_UpdateInput = {
  teaserImage?: InputMaybe<Scalars['ID']>;
  author?: InputMaybe<Scalars['ID']>;
  teaserHeadline?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['CAISY_JSON']>;
  slug?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['ID']>;
  teaserDesciption?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_BlogArticle_Connection = {
  edges?: Maybe<Array<Maybe<IGenCaisy_BlogArticle_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenCaisy_PageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenCaisy_NavigationEntry_Sort = {
  connection?: InputMaybe<IGenCaisy_Order>;
  title?: InputMaybe<IGenCaisy_Order>;
};

export type IGenCaisy_SeoInformation = {
  _meta?: Maybe<IGenCaisy_CaisyDocument_Meta>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  keywords?: Maybe<Scalars['String']>;
  ogImage?: Maybe<IGenCaisy_Asset>;
  title?: Maybe<Scalars['String']>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenCaisy_SeoInformationOgImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_Fulltext_ConnectionEdge = {
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenCaisy_Fulltext>;
};

export type IGenCaisy_Page_ConnectionEdge = {
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenCaisy_Page>;
};

export type IGenCaisy_Asset_UpdateInput = {
  originType?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dominantColor?: InputMaybe<Scalars['String']>;
  originalName?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  copyright?: InputMaybe<Scalars['String']>;
  src?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_Footer = {
  _meta?: Maybe<IGenCaisy_CaisyDocument_Meta>;
  content?: Maybe<IGenCaisy_Footer_Content>;
  id?: Maybe<Scalars['ID']>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenCaisy_FooterContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_BlogArticle_Where = {
  slug?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  teaserDesciption?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  AND?: InputMaybe<Array<InputMaybe<IGenCaisy_BlogArticle_Where>>>;
  teaserHeadline?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  text?: InputMaybe<IGenCaisy_CaisyField_Richtext_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCaisy_BlogArticle_Where>>>;
};

export type IGenCaisy_NewsletterSignup_Connection = {
  edges?: Maybe<Array<Maybe<IGenCaisy_NewsletterSignup_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenCaisy_PageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenCaisy_Footer_UpdateInput = {
  titleInternal?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['CAISY_JSON']>;
};

export type IGenCaisy_Author_CreateInput = {
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['ID']>;
};

export type IGenCaisy_Author_ConnectionEdge = {
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenCaisy_Author>;
};

export type IGenCaisy_Navigation_CreateInput = {
  entries?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  titleInternal?: InputMaybe<Scalars['String']>;
  homePage?: InputMaybe<Scalars['ID']>;
  notFoundPage?: InputMaybe<Scalars['ID']>;
};

export type IGenCaisy_ContactForm_CreateInput = {
  titleInternal?: InputMaybe<Scalars['String']>;
  headline?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_Headline_UpdateInput = {
  titleInternal?: InputMaybe<Scalars['String']>;
  headline?: InputMaybe<Scalars['String']>;
  subheadline?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_BlogArticleGrid_Sort = {
  titleInternal?: InputMaybe<IGenCaisy_Order>;
  headline?: InputMaybe<IGenCaisy_Order>;
  subheadline?: InputMaybe<IGenCaisy_Order>;
  articles?: InputMaybe<IGenCaisy_Order>;
};

export type IGenCaisy_Fulltext_Text_Connections = IGenCaisy_Asset;

export type IGenCaisy_Fulltext_Sort = {
  titleInternal?: InputMaybe<IGenCaisy_Order>;
};

export type IGenCaisy_SeoInformation_ConnectionEdge = {
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenCaisy_SeoInformation>;
};

export type IGenCaisy_NewsletterSignup_Where = {
  headline?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  subheadline?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCaisy_NewsletterSignup_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCaisy_NewsletterSignup_Where>>>;
  titleInternal?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
};

export type IGenCaisy_BlogArticle = {
  _meta?: Maybe<IGenCaisy_CaisyDocument_Meta>;
  author?: Maybe<IGenCaisy_Author>;
  category?: Maybe<IGenCaisy_Category>;
  id?: Maybe<Scalars['ID']>;
  seo?: Maybe<IGenCaisy_SeoInformation>;
  slug?: Maybe<Scalars['String']>;
  teaserDesciption?: Maybe<Scalars['String']>;
  teaserHeadline?: Maybe<Scalars['String']>;
  teaserImage?: Maybe<IGenCaisy_Asset>;
  text?: Maybe<IGenCaisy_BlogArticle_Text>;
};


export type IGenCaisy_BlogArticleAuthorArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisy_BlogArticleCategoryArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisy_BlogArticleSeoArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisy_BlogArticleTeaserImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisy_BlogArticleTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_SeoInformation_Sort = {
  keywords?: InputMaybe<IGenCaisy_Order>;
  ogImage?: InputMaybe<IGenCaisy_Order>;
  titleInternal?: InputMaybe<IGenCaisy_Order>;
  title?: InputMaybe<IGenCaisy_Order>;
  description?: InputMaybe<IGenCaisy_Order>;
};

export type IGenCaisy_FullwidthBlogTeaser_Sort = {
  featuredArticle?: InputMaybe<IGenCaisy_Order>;
  titleInternal?: InputMaybe<IGenCaisy_Order>;
};

export type IGenCaisy_Category_UpdateInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_Fulltext_CreateInput = {
  text?: InputMaybe<Scalars['CAISY_JSON']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_Footer_Content = {
  connections?: Maybe<Array<Maybe<IGenCaisy_Footer_Content_Connections>>>;
  json?: Maybe<Scalars['CAISY_JSON']>;
};

export type IGenCaisy_BlogArticle_ConnectionEdge = {
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenCaisy_BlogArticle>;
};

export type IGenCaisy_Category_Sort = {
  name?: InputMaybe<IGenCaisy_Order>;
};

export type IGenCaisy_ContactForm_UpdateInput = {
  titleInternal?: InputMaybe<Scalars['String']>;
  headline?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_Headline_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenCaisy_Headline_Where>>>;
  titleInternal?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  headline?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  subheadline?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCaisy_Headline_Where>>>;
};

export type IGenCaisy_Category_Connection = {
  edges?: Maybe<Array<Maybe<IGenCaisy_Category_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenCaisy_PageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenCaisy_FullwidthBlogTeaser_CreateInput = {
  featuredArticle?: InputMaybe<Scalars['ID']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_CaisyDocument_Meta = {
  createdAt?: Maybe<Scalars['CAISY_DateTime']>;
  id?: Maybe<Scalars['ID']>;
  locale?: Maybe<Scalars['String']>;
  locales?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedAt?: Maybe<Scalars['CAISY_DateTime']>;
  updatedAt?: Maybe<Scalars['CAISY_DateTime']>;
};

export type IGenCaisy_FullwidthBlogTeaser = {
  _meta?: Maybe<IGenCaisy_CaisyDocument_Meta>;
  featuredArticle?: Maybe<IGenCaisy_BlogArticle>;
  id?: Maybe<Scalars['ID']>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenCaisy_FullwidthBlogTeaserFeaturedArticleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_ContactForm = {
  _meta?: Maybe<IGenCaisy_CaisyDocument_Meta>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  titleInternal?: Maybe<Scalars['String']>;
};

export type IGenCaisy_Category_Where = {
  name?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCaisy_Category_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCaisy_Category_Where>>>;
};

export type IGenCaisy_Asset_CreateInput = {
  originType?: InputMaybe<Scalars['String']>;
  copyright?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  dominantColor?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  src?: InputMaybe<Scalars['String']>;
  originalName?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_NavigationEntry = {
  _meta?: Maybe<IGenCaisy_CaisyDocument_Meta>;
  connection?: Maybe<IGenCaisy_Page>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};


export type IGenCaisy_NavigationEntryConnectionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_ContactForm_Sort = {
  titleInternal?: InputMaybe<IGenCaisy_Order>;
  headline?: InputMaybe<IGenCaisy_Order>;
};

export type IGenCaisy_ContactForm_Connection = {
  edges?: Maybe<Array<Maybe<IGenCaisy_ContactForm_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenCaisy_PageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenCaisy_Fulltext_Text = {
  connections?: Maybe<Array<Maybe<IGenCaisy_Fulltext_Text_Connections>>>;
  json?: Maybe<Scalars['CAISY_JSON']>;
};

export type IGenCaisy_Footer_Content_Connections = IGenCaisy_Caisy_Field_Document_NotFound;

export type IGenCaisy_Headline_ConnectionEdge = {
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenCaisy_Headline>;
};

export type IGenCaisy_Asset = {
  _meta?: Maybe<IGenCaisy_CaisyDocument_Meta>;
  author?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dominantColor?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  keywords?: Maybe<Scalars['String']>;
  originType?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type IGenCaisy_Headline_Sort = {
  headline?: InputMaybe<IGenCaisy_Order>;
  subheadline?: InputMaybe<IGenCaisy_Order>;
  titleInternal?: InputMaybe<IGenCaisy_Order>;
};

export type IGenCaisy_Page_Components = IGenCaisy_Fulltext | IGenCaisy_ContactForm | IGenCaisy_BlogArticleGrid | IGenCaisy_FullwidthBlogTeaser | IGenCaisy_NewsletterSignup | IGenCaisy_Headline;

export type IGenCaisy_Headline = {
  _meta?: Maybe<IGenCaisy_CaisyDocument_Meta>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  subheadline?: Maybe<Scalars['String']>;
  titleInternal?: Maybe<Scalars['String']>;
};

export type IGenCaisy_BlogArticleGrid_UpdateInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  titleInternal?: InputMaybe<Scalars['String']>;
  headline?: InputMaybe<Scalars['String']>;
  subheadline?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_PageInfo = {
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  startCursor?: Maybe<Scalars['String']>;
};

export type IGenCaisy_Headline_Connection = {
  edges?: Maybe<Array<Maybe<IGenCaisy_Headline_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenCaisy_PageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenCaisy_NavigationEntry_UpdateInput = {
  title?: InputMaybe<Scalars['String']>;
  connection?: InputMaybe<Scalars['ID']>;
};

export type IGenCaisy_Author_UpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<Scalars['ID']>;
};

export type IGenCaisy_ContactForm_Where = {
  headline?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCaisy_ContactForm_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCaisy_ContactForm_Where>>>;
  titleInternal?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
};

export type IGenCaisy_Asset_Sort = {
  author?: InputMaybe<IGenCaisy_Order>;
  copyright?: InputMaybe<IGenCaisy_Order>;
  dominantColor?: InputMaybe<IGenCaisy_Order>;
  title?: InputMaybe<IGenCaisy_Order>;
  description?: InputMaybe<IGenCaisy_Order>;
  keywords?: InputMaybe<IGenCaisy_Order>;
  originalName?: InputMaybe<IGenCaisy_Order>;
  originType?: InputMaybe<IGenCaisy_Order>;
};

export type IGenCaisy_Author = {
  _meta?: Maybe<IGenCaisy_CaisyDocument_Meta>;
  avatar?: Maybe<IGenCaisy_Asset>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};


export type IGenCaisy_AuthorAvatarArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_NewsletterSignup_UpdateInput = {
  subheadline?: InputMaybe<Scalars['String']>;
  titleInternal?: InputMaybe<Scalars['String']>;
  headline?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_NewsletterSignup = {
  _meta?: Maybe<IGenCaisy_CaisyDocument_Meta>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  subheadline?: Maybe<Scalars['String']>;
  titleInternal?: Maybe<Scalars['String']>;
};

export type IGenCaisy_Fulltext_Connection = {
  edges?: Maybe<Array<Maybe<IGenCaisy_Fulltext_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenCaisy_PageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenCaisy_Author_Connection = {
  edges?: Maybe<Array<Maybe<IGenCaisy_Author_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenCaisy_PageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenCaisy_BlogArticle_CreateInput = {
  category?: InputMaybe<Scalars['ID']>;
  teaserDesciption?: InputMaybe<Scalars['String']>;
  teaserImage?: InputMaybe<Scalars['ID']>;
  seo?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['CAISY_JSON']>;
  author?: InputMaybe<Scalars['ID']>;
  teaserHeadline?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_Category_CreateInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_NavigationEntry_Where = {
  title?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCaisy_NavigationEntry_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCaisy_NavigationEntry_Where>>>;
};

export type IGenCaisy_Page_CreateInput = {
  titleInternal?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  seo?: InputMaybe<Scalars['ID']>;
  components?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type IGenCaisy_CaisyField_Color_Where = {
  eq?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_BlogArticleGrid_ConnectionEdge = {
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenCaisy_BlogArticleGrid>;
};

export type IGenCaisy_CaisyField_Richtext_Where = {
  contains?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_SeoInformation_Connection = {
  edges?: Maybe<Array<Maybe<IGenCaisy_SeoInformation_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenCaisy_PageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenCaisy_Author_Where = {
  role?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCaisy_Author_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCaisy_Author_Where>>>;
  name?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
};

export type IGenCaisy_Fulltext_Where = {
  text?: InputMaybe<IGenCaisy_CaisyField_Richtext_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCaisy_Fulltext_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCaisy_Fulltext_Where>>>;
  titleInternal?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
};

export type IGenCaisy_Page_Sort = {
  titleInternal?: InputMaybe<IGenCaisy_Order>;
  slug?: InputMaybe<IGenCaisy_Order>;
  seo?: InputMaybe<IGenCaisy_Order>;
  components?: InputMaybe<IGenCaisy_Order>;
};

export type IGenCaisy_NewsletterSignup_Sort = {
  headline?: InputMaybe<IGenCaisy_Order>;
  subheadline?: InputMaybe<IGenCaisy_Order>;
  titleInternal?: InputMaybe<IGenCaisy_Order>;
};

export type IGenCaisy_NavigationEntry_Connection = {
  edges?: Maybe<Array<Maybe<IGenCaisy_NavigationEntry_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenCaisy_PageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IGenCaisy_BlogArticleGrid_Where = {
  headline?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  subheadline?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCaisy_BlogArticleGrid_Where>>>;
  AND?: InputMaybe<Array<InputMaybe<IGenCaisy_BlogArticleGrid_Where>>>;
  titleInternal?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
};

export type IGenCaisy_BlogArticleGrid_Articles = IGenCaisy_BlogArticle;

export type IGenCaisy_SeoInformation_CreateInput = {
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  ogImage?: InputMaybe<Scalars['ID']>;
  titleInternal?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_Footer_CreateInput = {
  titleInternal?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['CAISY_JSON']>;
};

export type IGenCaisy_FullwidthBlogTeaser_ConnectionEdge = {
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenCaisy_FullwidthBlogTeaser>;
};

export type IGenCaisy_NavigationEntry_CreateInput = {
  title?: InputMaybe<Scalars['String']>;
  connection?: InputMaybe<Scalars['ID']>;
};

export type IGenCaisy_Order =
  | 'DESC'
  | 'ASC';

export type IGenCaisy_Asset_Where = {
  dominantColor?: InputMaybe<IGenCaisy_CaisyField_Color_Where>;
  author?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  description?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  OR?: InputMaybe<Array<InputMaybe<IGenCaisy_Asset_Where>>>;
  keywords?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  originType?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  AND?: InputMaybe<Array<InputMaybe<IGenCaisy_Asset_Where>>>;
  title?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  originalName?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
  copyright?: InputMaybe<IGenCaisy_CaisyField_String_Where>;
};

export type IGenCaisy_BlogArticle_Text = {
  connections?: Maybe<Array<Maybe<IGenCaisy_BlogArticle_Text_Connections>>>;
  json?: Maybe<Scalars['CAISY_JSON']>;
};

export type IGenCaisy_BlogArticle_Text_Connections = IGenCaisy_Asset;

export type IGenCaisy_BlogArticle_Sort = {
  author?: InputMaybe<IGenCaisy_Order>;
  slug?: InputMaybe<IGenCaisy_Order>;
  category?: InputMaybe<IGenCaisy_Order>;
  teaserHeadline?: InputMaybe<IGenCaisy_Order>;
  teaserDesciption?: InputMaybe<IGenCaisy_Order>;
  teaserImage?: InputMaybe<IGenCaisy_Order>;
  seo?: InputMaybe<IGenCaisy_Order>;
};

export type IGenCaisy_NavigationEntry_ConnectionEdge = {
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenCaisy_NavigationEntry>;
};

export type IGenCaisy_Asset_ConnectionEdge = {
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenCaisy_Asset>;
};

export type IGenCaisy_BlogArticleGrid = {
  _meta?: Maybe<IGenCaisy_CaisyDocument_Meta>;
  articles?: Maybe<Array<Maybe<IGenCaisy_BlogArticleGrid_Articles>>>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  subheadline?: Maybe<Scalars['String']>;
  titleInternal?: Maybe<Scalars['String']>;
};


export type IGenCaisy_BlogArticleGridArticlesArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IGenCaisy_Category_ConnectionEdge = {
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<IGenCaisy_Category>;
};

export type IGenCaisy = {
  Asset?: Maybe<IGenCaisy_Asset>;
  Author?: Maybe<IGenCaisy_Author>;
  BlogArticle?: Maybe<IGenCaisy_BlogArticle>;
  BlogArticleGrid?: Maybe<IGenCaisy_BlogArticleGrid>;
  Category?: Maybe<IGenCaisy_Category>;
  ContactForm?: Maybe<IGenCaisy_ContactForm>;
  Footer?: Maybe<IGenCaisy_Footer>;
  Fulltext?: Maybe<IGenCaisy_Fulltext>;
  FullwidthBlogTeaser?: Maybe<IGenCaisy_FullwidthBlogTeaser>;
  Headline?: Maybe<IGenCaisy_Headline>;
  Navigation?: Maybe<IGenCaisy_Navigation>;
  NavigationEntry?: Maybe<IGenCaisy_NavigationEntry>;
  NewsletterSignup?: Maybe<IGenCaisy_NewsletterSignup>;
  Page?: Maybe<IGenCaisy_Page>;
  SeoInformation?: Maybe<IGenCaisy_SeoInformation>;
  allAsset?: Maybe<IGenCaisy_Asset_Connection>;
  allAuthor?: Maybe<IGenCaisy_Author_Connection>;
  allBlogArticle?: Maybe<IGenCaisy_BlogArticle_Connection>;
  allBlogArticleGrid?: Maybe<IGenCaisy_BlogArticleGrid_Connection>;
  allCategory?: Maybe<IGenCaisy_Category_Connection>;
  allContactForm?: Maybe<IGenCaisy_ContactForm_Connection>;
  allFulltext?: Maybe<IGenCaisy_Fulltext_Connection>;
  allFullwidthBlogTeaser?: Maybe<IGenCaisy_FullwidthBlogTeaser_Connection>;
  allHeadline?: Maybe<IGenCaisy_Headline_Connection>;
  allNavigationEntry?: Maybe<IGenCaisy_NavigationEntry_Connection>;
  allNewsletterSignup?: Maybe<IGenCaisy_NewsletterSignup_Connection>;
  allPage?: Maybe<IGenCaisy_Page_Connection>;
  allSeoInformation?: Maybe<IGenCaisy_SeoInformation_Connection>;
};


export type IGenCaisyAssetArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisyAuthorArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisyBlogArticleArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisyBlogArticleGridArgs = {
  locale?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type IGenCaisyCategoryArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisyContactFormArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisyFooterArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisyFulltextArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisyFullwidthBlogTeaserArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisyHeadlineArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisyNavigationArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisyNavigationEntryArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisyNewsletterSignupArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisyPageArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisySeoInformationArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
};


export type IGenCaisyAllAssetArgs = {
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenCaisy_Asset_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCaisy_Asset_Where>>>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type IGenCaisyAllAuthorArgs = {
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenCaisy_Author_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCaisy_Author_Where>>>;
};


export type IGenCaisyAllBlogArticleArgs = {
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenCaisy_BlogArticle_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCaisy_BlogArticle_Where>>>;
};


export type IGenCaisyAllBlogArticleGridArgs = {
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenCaisy_BlogArticleGrid_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCaisy_BlogArticleGrid_Where>>>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
};


export type IGenCaisyAllCategoryArgs = {
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenCaisy_Category_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCaisy_Category_Where>>>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type IGenCaisyAllContactFormArgs = {
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenCaisy_ContactForm_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCaisy_ContactForm_Where>>>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type IGenCaisyAllFulltextArgs = {
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenCaisy_Fulltext_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCaisy_Fulltext_Where>>>;
};


export type IGenCaisyAllFullwidthBlogTeaserArgs = {
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenCaisy_FullwidthBlogTeaser_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCaisy_FullwidthBlogTeaser_Where>>>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
};


export type IGenCaisyAllHeadlineArgs = {
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenCaisy_Headline_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCaisy_Headline_Where>>>;
};


export type IGenCaisyAllNavigationEntryArgs = {
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenCaisy_NavigationEntry_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCaisy_NavigationEntry_Where>>>;
};


export type IGenCaisyAllNewsletterSignupArgs = {
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenCaisy_NewsletterSignup_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCaisy_NewsletterSignup_Where>>>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type IGenCaisyAllPageArgs = {
  where?: InputMaybe<Array<InputMaybe<IGenCaisy_Page_Where>>>;
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenCaisy_Page_Sort>>>;
};


export type IGenCaisyAllSeoInformationArgs = {
  first?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<IGenCaisy_SeoInformation_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenCaisy_SeoInformation_Where>>>;
};

export type IGenQuery = {
  file?: Maybe<IGenFile>;
  allFile: IGenFileConnection;
  directory?: Maybe<IGenDirectory>;
  allDirectory: IGenDirectoryConnection;
  site?: Maybe<IGenSite>;
  allSite: IGenSiteConnection;
  siteFunction?: Maybe<IGenSiteFunction>;
  allSiteFunction: IGenSiteFunctionConnection;
  sitePage?: Maybe<IGenSitePage>;
  allSitePage: IGenSitePageConnection;
  sitePlugin?: Maybe<IGenSitePlugin>;
  allSitePlugin: IGenSitePluginConnection;
  siteBuildMetadata?: Maybe<IGenSiteBuildMetadata>;
  allSiteBuildMetadata: IGenSiteBuildMetadataConnection;
  graphQlSource?: Maybe<IGenGraphQlSource>;
  allGraphQlSource: IGenGraphQlSourceConnection;
  caisy: IGenCaisy;
};


export type IGenQueryFileArgs = {
  sourceInstanceName?: InputMaybe<IGenStringQueryOperatorInput>;
  absolutePath?: InputMaybe<IGenStringQueryOperatorInput>;
  relativePath?: InputMaybe<IGenStringQueryOperatorInput>;
  extension?: InputMaybe<IGenStringQueryOperatorInput>;
  size?: InputMaybe<IGenIntQueryOperatorInput>;
  prettySize?: InputMaybe<IGenStringQueryOperatorInput>;
  modifiedTime?: InputMaybe<IGenDateQueryOperatorInput>;
  accessTime?: InputMaybe<IGenDateQueryOperatorInput>;
  changeTime?: InputMaybe<IGenDateQueryOperatorInput>;
  birthTime?: InputMaybe<IGenDateQueryOperatorInput>;
  root?: InputMaybe<IGenStringQueryOperatorInput>;
  dir?: InputMaybe<IGenStringQueryOperatorInput>;
  base?: InputMaybe<IGenStringQueryOperatorInput>;
  ext?: InputMaybe<IGenStringQueryOperatorInput>;
  name?: InputMaybe<IGenStringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<IGenStringQueryOperatorInput>;
  dev?: InputMaybe<IGenIntQueryOperatorInput>;
  mode?: InputMaybe<IGenIntQueryOperatorInput>;
  nlink?: InputMaybe<IGenIntQueryOperatorInput>;
  uid?: InputMaybe<IGenIntQueryOperatorInput>;
  gid?: InputMaybe<IGenIntQueryOperatorInput>;
  rdev?: InputMaybe<IGenIntQueryOperatorInput>;
  ino?: InputMaybe<IGenFloatQueryOperatorInput>;
  atimeMs?: InputMaybe<IGenFloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<IGenFloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<IGenFloatQueryOperatorInput>;
  atime?: InputMaybe<IGenDateQueryOperatorInput>;
  mtime?: InputMaybe<IGenDateQueryOperatorInput>;
  ctime?: InputMaybe<IGenDateQueryOperatorInput>;
  birthtime?: InputMaybe<IGenDateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<IGenFloatQueryOperatorInput>;
  id?: InputMaybe<IGenStringQueryOperatorInput>;
  parent?: InputMaybe<IGenNodeFilterInput>;
  children?: InputMaybe<IGenNodeFilterListInput>;
  internal?: InputMaybe<IGenInternalFilterInput>;
};


export type IGenQueryAllFileArgs = {
  filter?: InputMaybe<IGenFileFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<IGenFileSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type IGenQueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<IGenStringQueryOperatorInput>;
  absolutePath?: InputMaybe<IGenStringQueryOperatorInput>;
  relativePath?: InputMaybe<IGenStringQueryOperatorInput>;
  extension?: InputMaybe<IGenStringQueryOperatorInput>;
  size?: InputMaybe<IGenIntQueryOperatorInput>;
  prettySize?: InputMaybe<IGenStringQueryOperatorInput>;
  modifiedTime?: InputMaybe<IGenDateQueryOperatorInput>;
  accessTime?: InputMaybe<IGenDateQueryOperatorInput>;
  changeTime?: InputMaybe<IGenDateQueryOperatorInput>;
  birthTime?: InputMaybe<IGenDateQueryOperatorInput>;
  root?: InputMaybe<IGenStringQueryOperatorInput>;
  dir?: InputMaybe<IGenStringQueryOperatorInput>;
  base?: InputMaybe<IGenStringQueryOperatorInput>;
  ext?: InputMaybe<IGenStringQueryOperatorInput>;
  name?: InputMaybe<IGenStringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<IGenStringQueryOperatorInput>;
  dev?: InputMaybe<IGenIntQueryOperatorInput>;
  mode?: InputMaybe<IGenIntQueryOperatorInput>;
  nlink?: InputMaybe<IGenIntQueryOperatorInput>;
  uid?: InputMaybe<IGenIntQueryOperatorInput>;
  gid?: InputMaybe<IGenIntQueryOperatorInput>;
  rdev?: InputMaybe<IGenIntQueryOperatorInput>;
  ino?: InputMaybe<IGenFloatQueryOperatorInput>;
  atimeMs?: InputMaybe<IGenFloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<IGenFloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<IGenFloatQueryOperatorInput>;
  atime?: InputMaybe<IGenDateQueryOperatorInput>;
  mtime?: InputMaybe<IGenDateQueryOperatorInput>;
  ctime?: InputMaybe<IGenDateQueryOperatorInput>;
  birthtime?: InputMaybe<IGenDateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<IGenFloatQueryOperatorInput>;
  id?: InputMaybe<IGenStringQueryOperatorInput>;
  parent?: InputMaybe<IGenNodeFilterInput>;
  children?: InputMaybe<IGenNodeFilterListInput>;
  internal?: InputMaybe<IGenInternalFilterInput>;
};


export type IGenQueryAllDirectoryArgs = {
  filter?: InputMaybe<IGenDirectoryFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<IGenDirectorySortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type IGenQuerySiteArgs = {
  buildTime?: InputMaybe<IGenDateQueryOperatorInput>;
  siteMetadata?: InputMaybe<IGenSiteSiteMetadataFilterInput>;
  graphqlTypegen?: InputMaybe<IGenSiteGraphqlTypegenFilterInput>;
  trailingSlash?: InputMaybe<IGenStringQueryOperatorInput>;
  polyfill?: InputMaybe<IGenBooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<IGenStringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<IGenStringQueryOperatorInput>;
  id?: InputMaybe<IGenStringQueryOperatorInput>;
  parent?: InputMaybe<IGenNodeFilterInput>;
  children?: InputMaybe<IGenNodeFilterListInput>;
  internal?: InputMaybe<IGenInternalFilterInput>;
};


export type IGenQueryAllSiteArgs = {
  filter?: InputMaybe<IGenSiteFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<IGenSiteSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type IGenQuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<IGenStringQueryOperatorInput>;
  pluginName?: InputMaybe<IGenStringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<IGenStringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<IGenStringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<IGenStringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<IGenStringQueryOperatorInput>;
  matchPath?: InputMaybe<IGenStringQueryOperatorInput>;
  id?: InputMaybe<IGenStringQueryOperatorInput>;
  parent?: InputMaybe<IGenNodeFilterInput>;
  children?: InputMaybe<IGenNodeFilterListInput>;
  internal?: InputMaybe<IGenInternalFilterInput>;
};


export type IGenQueryAllSiteFunctionArgs = {
  filter?: InputMaybe<IGenSiteFunctionFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<IGenSiteFunctionSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type IGenQuerySitePageArgs = {
  path?: InputMaybe<IGenStringQueryOperatorInput>;
  component?: InputMaybe<IGenStringQueryOperatorInput>;
  internalComponentName?: InputMaybe<IGenStringQueryOperatorInput>;
  componentChunkName?: InputMaybe<IGenStringQueryOperatorInput>;
  matchPath?: InputMaybe<IGenStringQueryOperatorInput>;
  pageContext?: InputMaybe<IGenJsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<IGenSitePluginFilterInput>;
  id?: InputMaybe<IGenStringQueryOperatorInput>;
  parent?: InputMaybe<IGenNodeFilterInput>;
  children?: InputMaybe<IGenNodeFilterListInput>;
  internal?: InputMaybe<IGenInternalFilterInput>;
};


export type IGenQueryAllSitePageArgs = {
  filter?: InputMaybe<IGenSitePageFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<IGenSitePageSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type IGenQuerySitePluginArgs = {
  resolve?: InputMaybe<IGenStringQueryOperatorInput>;
  name?: InputMaybe<IGenStringQueryOperatorInput>;
  version?: InputMaybe<IGenStringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<IGenStringQueryOperatorInput>;
  browserAPIs?: InputMaybe<IGenStringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<IGenStringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<IGenStringQueryOperatorInput>;
  pluginOptions?: InputMaybe<IGenJsonQueryOperatorInput>;
  packageJson?: InputMaybe<IGenJsonQueryOperatorInput>;
  id?: InputMaybe<IGenStringQueryOperatorInput>;
  parent?: InputMaybe<IGenNodeFilterInput>;
  children?: InputMaybe<IGenNodeFilterListInput>;
  internal?: InputMaybe<IGenInternalFilterInput>;
};


export type IGenQueryAllSitePluginArgs = {
  filter?: InputMaybe<IGenSitePluginFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<IGenSitePluginSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type IGenQuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<IGenDateQueryOperatorInput>;
  id?: InputMaybe<IGenStringQueryOperatorInput>;
  parent?: InputMaybe<IGenNodeFilterInput>;
  children?: InputMaybe<IGenNodeFilterListInput>;
  internal?: InputMaybe<IGenInternalFilterInput>;
};


export type IGenQueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<IGenSiteBuildMetadataFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<IGenSiteBuildMetadataSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type IGenQueryGraphQlSourceArgs = {
  id?: InputMaybe<IGenStringQueryOperatorInput>;
  parent?: InputMaybe<IGenNodeFilterInput>;
  children?: InputMaybe<IGenNodeFilterListInput>;
  internal?: InputMaybe<IGenInternalFilterInput>;
  typeName?: InputMaybe<IGenStringQueryOperatorInput>;
  fieldName?: InputMaybe<IGenStringQueryOperatorInput>;
};


export type IGenQueryAllGraphQlSourceArgs = {
  filter?: InputMaybe<IGenGraphQlSourceFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<IGenGraphQlSourceSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type IGenStringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IGenIntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type IGenDateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type IGenFloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type IGenNodeFilterInput = {
  id?: InputMaybe<IGenStringQueryOperatorInput>;
  parent?: InputMaybe<IGenNodeFilterInput>;
  children?: InputMaybe<IGenNodeFilterListInput>;
  internal?: InputMaybe<IGenInternalFilterInput>;
};

export type IGenNodeFilterListInput = {
  elemMatch?: InputMaybe<IGenNodeFilterInput>;
};

export type IGenInternalFilterInput = {
  content?: InputMaybe<IGenStringQueryOperatorInput>;
  contentDigest?: InputMaybe<IGenStringQueryOperatorInput>;
  description?: InputMaybe<IGenStringQueryOperatorInput>;
  fieldOwners?: InputMaybe<IGenStringQueryOperatorInput>;
  ignoreType?: InputMaybe<IGenBooleanQueryOperatorInput>;
  mediaType?: InputMaybe<IGenStringQueryOperatorInput>;
  owner?: InputMaybe<IGenStringQueryOperatorInput>;
  type?: InputMaybe<IGenStringQueryOperatorInput>;
  contentFilePath?: InputMaybe<IGenStringQueryOperatorInput>;
};

export type IGenBooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type IGenFileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IGenFileEdge>;
  nodes: Array<IGenFile>;
  pageInfo: IGenPageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<IGenFileGroupConnection>;
};


export type IGenFileConnectionDistinctArgs = {
  field: IGenFileFieldSelector;
};


export type IGenFileConnectionMaxArgs = {
  field: IGenFileFieldSelector;
};


export type IGenFileConnectionMinArgs = {
  field: IGenFileFieldSelector;
};


export type IGenFileConnectionSumArgs = {
  field: IGenFileFieldSelector;
};


export type IGenFileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: IGenFileFieldSelector;
};

export type IGenFileEdge = {
  next?: Maybe<IGenFile>;
  node: IGenFile;
  previous?: Maybe<IGenFile>;
};

export type IGenPageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type IGenFileFieldSelector = {
  sourceInstanceName?: InputMaybe<IGenFieldSelectorEnum>;
  absolutePath?: InputMaybe<IGenFieldSelectorEnum>;
  relativePath?: InputMaybe<IGenFieldSelectorEnum>;
  extension?: InputMaybe<IGenFieldSelectorEnum>;
  size?: InputMaybe<IGenFieldSelectorEnum>;
  prettySize?: InputMaybe<IGenFieldSelectorEnum>;
  modifiedTime?: InputMaybe<IGenFieldSelectorEnum>;
  accessTime?: InputMaybe<IGenFieldSelectorEnum>;
  changeTime?: InputMaybe<IGenFieldSelectorEnum>;
  birthTime?: InputMaybe<IGenFieldSelectorEnum>;
  root?: InputMaybe<IGenFieldSelectorEnum>;
  dir?: InputMaybe<IGenFieldSelectorEnum>;
  base?: InputMaybe<IGenFieldSelectorEnum>;
  ext?: InputMaybe<IGenFieldSelectorEnum>;
  name?: InputMaybe<IGenFieldSelectorEnum>;
  relativeDirectory?: InputMaybe<IGenFieldSelectorEnum>;
  dev?: InputMaybe<IGenFieldSelectorEnum>;
  mode?: InputMaybe<IGenFieldSelectorEnum>;
  nlink?: InputMaybe<IGenFieldSelectorEnum>;
  uid?: InputMaybe<IGenFieldSelectorEnum>;
  gid?: InputMaybe<IGenFieldSelectorEnum>;
  rdev?: InputMaybe<IGenFieldSelectorEnum>;
  ino?: InputMaybe<IGenFieldSelectorEnum>;
  atimeMs?: InputMaybe<IGenFieldSelectorEnum>;
  mtimeMs?: InputMaybe<IGenFieldSelectorEnum>;
  ctimeMs?: InputMaybe<IGenFieldSelectorEnum>;
  atime?: InputMaybe<IGenFieldSelectorEnum>;
  mtime?: InputMaybe<IGenFieldSelectorEnum>;
  ctime?: InputMaybe<IGenFieldSelectorEnum>;
  birthtime?: InputMaybe<IGenFieldSelectorEnum>;
  birthtimeMs?: InputMaybe<IGenFieldSelectorEnum>;
  id?: InputMaybe<IGenFieldSelectorEnum>;
  parent?: InputMaybe<IGenNodeFieldSelector>;
  children?: InputMaybe<IGenNodeFieldSelector>;
  internal?: InputMaybe<IGenInternalFieldSelector>;
};

export type IGenFieldSelectorEnum =
  | 'SELECT';

export type IGenNodeFieldSelector = {
  id?: InputMaybe<IGenFieldSelectorEnum>;
  parent?: InputMaybe<IGenNodeFieldSelector>;
  children?: InputMaybe<IGenNodeFieldSelector>;
  internal?: InputMaybe<IGenInternalFieldSelector>;
};

export type IGenInternalFieldSelector = {
  content?: InputMaybe<IGenFieldSelectorEnum>;
  contentDigest?: InputMaybe<IGenFieldSelectorEnum>;
  description?: InputMaybe<IGenFieldSelectorEnum>;
  fieldOwners?: InputMaybe<IGenFieldSelectorEnum>;
  ignoreType?: InputMaybe<IGenFieldSelectorEnum>;
  mediaType?: InputMaybe<IGenFieldSelectorEnum>;
  owner?: InputMaybe<IGenFieldSelectorEnum>;
  type?: InputMaybe<IGenFieldSelectorEnum>;
  contentFilePath?: InputMaybe<IGenFieldSelectorEnum>;
};

export type IGenFileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IGenFileEdge>;
  nodes: Array<IGenFile>;
  pageInfo: IGenPageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<IGenFileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type IGenFileGroupConnectionDistinctArgs = {
  field: IGenFileFieldSelector;
};


export type IGenFileGroupConnectionMaxArgs = {
  field: IGenFileFieldSelector;
};


export type IGenFileGroupConnectionMinArgs = {
  field: IGenFileFieldSelector;
};


export type IGenFileGroupConnectionSumArgs = {
  field: IGenFileFieldSelector;
};


export type IGenFileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: IGenFileFieldSelector;
};

export type IGenFileFilterInput = {
  sourceInstanceName?: InputMaybe<IGenStringQueryOperatorInput>;
  absolutePath?: InputMaybe<IGenStringQueryOperatorInput>;
  relativePath?: InputMaybe<IGenStringQueryOperatorInput>;
  extension?: InputMaybe<IGenStringQueryOperatorInput>;
  size?: InputMaybe<IGenIntQueryOperatorInput>;
  prettySize?: InputMaybe<IGenStringQueryOperatorInput>;
  modifiedTime?: InputMaybe<IGenDateQueryOperatorInput>;
  accessTime?: InputMaybe<IGenDateQueryOperatorInput>;
  changeTime?: InputMaybe<IGenDateQueryOperatorInput>;
  birthTime?: InputMaybe<IGenDateQueryOperatorInput>;
  root?: InputMaybe<IGenStringQueryOperatorInput>;
  dir?: InputMaybe<IGenStringQueryOperatorInput>;
  base?: InputMaybe<IGenStringQueryOperatorInput>;
  ext?: InputMaybe<IGenStringQueryOperatorInput>;
  name?: InputMaybe<IGenStringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<IGenStringQueryOperatorInput>;
  dev?: InputMaybe<IGenIntQueryOperatorInput>;
  mode?: InputMaybe<IGenIntQueryOperatorInput>;
  nlink?: InputMaybe<IGenIntQueryOperatorInput>;
  uid?: InputMaybe<IGenIntQueryOperatorInput>;
  gid?: InputMaybe<IGenIntQueryOperatorInput>;
  rdev?: InputMaybe<IGenIntQueryOperatorInput>;
  ino?: InputMaybe<IGenFloatQueryOperatorInput>;
  atimeMs?: InputMaybe<IGenFloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<IGenFloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<IGenFloatQueryOperatorInput>;
  atime?: InputMaybe<IGenDateQueryOperatorInput>;
  mtime?: InputMaybe<IGenDateQueryOperatorInput>;
  ctime?: InputMaybe<IGenDateQueryOperatorInput>;
  birthtime?: InputMaybe<IGenDateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<IGenFloatQueryOperatorInput>;
  id?: InputMaybe<IGenStringQueryOperatorInput>;
  parent?: InputMaybe<IGenNodeFilterInput>;
  children?: InputMaybe<IGenNodeFilterListInput>;
  internal?: InputMaybe<IGenInternalFilterInput>;
};

export type IGenFileSortInput = {
  sourceInstanceName?: InputMaybe<IGenSortOrderEnum>;
  absolutePath?: InputMaybe<IGenSortOrderEnum>;
  relativePath?: InputMaybe<IGenSortOrderEnum>;
  extension?: InputMaybe<IGenSortOrderEnum>;
  size?: InputMaybe<IGenSortOrderEnum>;
  prettySize?: InputMaybe<IGenSortOrderEnum>;
  modifiedTime?: InputMaybe<IGenSortOrderEnum>;
  accessTime?: InputMaybe<IGenSortOrderEnum>;
  changeTime?: InputMaybe<IGenSortOrderEnum>;
  birthTime?: InputMaybe<IGenSortOrderEnum>;
  root?: InputMaybe<IGenSortOrderEnum>;
  dir?: InputMaybe<IGenSortOrderEnum>;
  base?: InputMaybe<IGenSortOrderEnum>;
  ext?: InputMaybe<IGenSortOrderEnum>;
  name?: InputMaybe<IGenSortOrderEnum>;
  relativeDirectory?: InputMaybe<IGenSortOrderEnum>;
  dev?: InputMaybe<IGenSortOrderEnum>;
  mode?: InputMaybe<IGenSortOrderEnum>;
  nlink?: InputMaybe<IGenSortOrderEnum>;
  uid?: InputMaybe<IGenSortOrderEnum>;
  gid?: InputMaybe<IGenSortOrderEnum>;
  rdev?: InputMaybe<IGenSortOrderEnum>;
  ino?: InputMaybe<IGenSortOrderEnum>;
  atimeMs?: InputMaybe<IGenSortOrderEnum>;
  mtimeMs?: InputMaybe<IGenSortOrderEnum>;
  ctimeMs?: InputMaybe<IGenSortOrderEnum>;
  atime?: InputMaybe<IGenSortOrderEnum>;
  mtime?: InputMaybe<IGenSortOrderEnum>;
  ctime?: InputMaybe<IGenSortOrderEnum>;
  birthtime?: InputMaybe<IGenSortOrderEnum>;
  birthtimeMs?: InputMaybe<IGenSortOrderEnum>;
  id?: InputMaybe<IGenSortOrderEnum>;
  parent?: InputMaybe<IGenNodeSortInput>;
  children?: InputMaybe<IGenNodeSortInput>;
  internal?: InputMaybe<IGenInternalSortInput>;
};

export type IGenSortOrderEnum =
  | 'ASC'
  | 'DESC';

export type IGenNodeSortInput = {
  id?: InputMaybe<IGenSortOrderEnum>;
  parent?: InputMaybe<IGenNodeSortInput>;
  children?: InputMaybe<IGenNodeSortInput>;
  internal?: InputMaybe<IGenInternalSortInput>;
};

export type IGenInternalSortInput = {
  content?: InputMaybe<IGenSortOrderEnum>;
  contentDigest?: InputMaybe<IGenSortOrderEnum>;
  description?: InputMaybe<IGenSortOrderEnum>;
  fieldOwners?: InputMaybe<IGenSortOrderEnum>;
  ignoreType?: InputMaybe<IGenSortOrderEnum>;
  mediaType?: InputMaybe<IGenSortOrderEnum>;
  owner?: InputMaybe<IGenSortOrderEnum>;
  type?: InputMaybe<IGenSortOrderEnum>;
  contentFilePath?: InputMaybe<IGenSortOrderEnum>;
};

export type IGenDirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IGenDirectoryEdge>;
  nodes: Array<IGenDirectory>;
  pageInfo: IGenPageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<IGenDirectoryGroupConnection>;
};


export type IGenDirectoryConnectionDistinctArgs = {
  field: IGenDirectoryFieldSelector;
};


export type IGenDirectoryConnectionMaxArgs = {
  field: IGenDirectoryFieldSelector;
};


export type IGenDirectoryConnectionMinArgs = {
  field: IGenDirectoryFieldSelector;
};


export type IGenDirectoryConnectionSumArgs = {
  field: IGenDirectoryFieldSelector;
};


export type IGenDirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: IGenDirectoryFieldSelector;
};

export type IGenDirectoryEdge = {
  next?: Maybe<IGenDirectory>;
  node: IGenDirectory;
  previous?: Maybe<IGenDirectory>;
};

export type IGenDirectoryFieldSelector = {
  sourceInstanceName?: InputMaybe<IGenFieldSelectorEnum>;
  absolutePath?: InputMaybe<IGenFieldSelectorEnum>;
  relativePath?: InputMaybe<IGenFieldSelectorEnum>;
  extension?: InputMaybe<IGenFieldSelectorEnum>;
  size?: InputMaybe<IGenFieldSelectorEnum>;
  prettySize?: InputMaybe<IGenFieldSelectorEnum>;
  modifiedTime?: InputMaybe<IGenFieldSelectorEnum>;
  accessTime?: InputMaybe<IGenFieldSelectorEnum>;
  changeTime?: InputMaybe<IGenFieldSelectorEnum>;
  birthTime?: InputMaybe<IGenFieldSelectorEnum>;
  root?: InputMaybe<IGenFieldSelectorEnum>;
  dir?: InputMaybe<IGenFieldSelectorEnum>;
  base?: InputMaybe<IGenFieldSelectorEnum>;
  ext?: InputMaybe<IGenFieldSelectorEnum>;
  name?: InputMaybe<IGenFieldSelectorEnum>;
  relativeDirectory?: InputMaybe<IGenFieldSelectorEnum>;
  dev?: InputMaybe<IGenFieldSelectorEnum>;
  mode?: InputMaybe<IGenFieldSelectorEnum>;
  nlink?: InputMaybe<IGenFieldSelectorEnum>;
  uid?: InputMaybe<IGenFieldSelectorEnum>;
  gid?: InputMaybe<IGenFieldSelectorEnum>;
  rdev?: InputMaybe<IGenFieldSelectorEnum>;
  ino?: InputMaybe<IGenFieldSelectorEnum>;
  atimeMs?: InputMaybe<IGenFieldSelectorEnum>;
  mtimeMs?: InputMaybe<IGenFieldSelectorEnum>;
  ctimeMs?: InputMaybe<IGenFieldSelectorEnum>;
  atime?: InputMaybe<IGenFieldSelectorEnum>;
  mtime?: InputMaybe<IGenFieldSelectorEnum>;
  ctime?: InputMaybe<IGenFieldSelectorEnum>;
  birthtime?: InputMaybe<IGenFieldSelectorEnum>;
  birthtimeMs?: InputMaybe<IGenFieldSelectorEnum>;
  id?: InputMaybe<IGenFieldSelectorEnum>;
  parent?: InputMaybe<IGenNodeFieldSelector>;
  children?: InputMaybe<IGenNodeFieldSelector>;
  internal?: InputMaybe<IGenInternalFieldSelector>;
};

export type IGenDirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IGenDirectoryEdge>;
  nodes: Array<IGenDirectory>;
  pageInfo: IGenPageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<IGenDirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type IGenDirectoryGroupConnectionDistinctArgs = {
  field: IGenDirectoryFieldSelector;
};


export type IGenDirectoryGroupConnectionMaxArgs = {
  field: IGenDirectoryFieldSelector;
};


export type IGenDirectoryGroupConnectionMinArgs = {
  field: IGenDirectoryFieldSelector;
};


export type IGenDirectoryGroupConnectionSumArgs = {
  field: IGenDirectoryFieldSelector;
};


export type IGenDirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: IGenDirectoryFieldSelector;
};

export type IGenDirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<IGenStringQueryOperatorInput>;
  absolutePath?: InputMaybe<IGenStringQueryOperatorInput>;
  relativePath?: InputMaybe<IGenStringQueryOperatorInput>;
  extension?: InputMaybe<IGenStringQueryOperatorInput>;
  size?: InputMaybe<IGenIntQueryOperatorInput>;
  prettySize?: InputMaybe<IGenStringQueryOperatorInput>;
  modifiedTime?: InputMaybe<IGenDateQueryOperatorInput>;
  accessTime?: InputMaybe<IGenDateQueryOperatorInput>;
  changeTime?: InputMaybe<IGenDateQueryOperatorInput>;
  birthTime?: InputMaybe<IGenDateQueryOperatorInput>;
  root?: InputMaybe<IGenStringQueryOperatorInput>;
  dir?: InputMaybe<IGenStringQueryOperatorInput>;
  base?: InputMaybe<IGenStringQueryOperatorInput>;
  ext?: InputMaybe<IGenStringQueryOperatorInput>;
  name?: InputMaybe<IGenStringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<IGenStringQueryOperatorInput>;
  dev?: InputMaybe<IGenIntQueryOperatorInput>;
  mode?: InputMaybe<IGenIntQueryOperatorInput>;
  nlink?: InputMaybe<IGenIntQueryOperatorInput>;
  uid?: InputMaybe<IGenIntQueryOperatorInput>;
  gid?: InputMaybe<IGenIntQueryOperatorInput>;
  rdev?: InputMaybe<IGenIntQueryOperatorInput>;
  ino?: InputMaybe<IGenFloatQueryOperatorInput>;
  atimeMs?: InputMaybe<IGenFloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<IGenFloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<IGenFloatQueryOperatorInput>;
  atime?: InputMaybe<IGenDateQueryOperatorInput>;
  mtime?: InputMaybe<IGenDateQueryOperatorInput>;
  ctime?: InputMaybe<IGenDateQueryOperatorInput>;
  birthtime?: InputMaybe<IGenDateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<IGenFloatQueryOperatorInput>;
  id?: InputMaybe<IGenStringQueryOperatorInput>;
  parent?: InputMaybe<IGenNodeFilterInput>;
  children?: InputMaybe<IGenNodeFilterListInput>;
  internal?: InputMaybe<IGenInternalFilterInput>;
};

export type IGenDirectorySortInput = {
  sourceInstanceName?: InputMaybe<IGenSortOrderEnum>;
  absolutePath?: InputMaybe<IGenSortOrderEnum>;
  relativePath?: InputMaybe<IGenSortOrderEnum>;
  extension?: InputMaybe<IGenSortOrderEnum>;
  size?: InputMaybe<IGenSortOrderEnum>;
  prettySize?: InputMaybe<IGenSortOrderEnum>;
  modifiedTime?: InputMaybe<IGenSortOrderEnum>;
  accessTime?: InputMaybe<IGenSortOrderEnum>;
  changeTime?: InputMaybe<IGenSortOrderEnum>;
  birthTime?: InputMaybe<IGenSortOrderEnum>;
  root?: InputMaybe<IGenSortOrderEnum>;
  dir?: InputMaybe<IGenSortOrderEnum>;
  base?: InputMaybe<IGenSortOrderEnum>;
  ext?: InputMaybe<IGenSortOrderEnum>;
  name?: InputMaybe<IGenSortOrderEnum>;
  relativeDirectory?: InputMaybe<IGenSortOrderEnum>;
  dev?: InputMaybe<IGenSortOrderEnum>;
  mode?: InputMaybe<IGenSortOrderEnum>;
  nlink?: InputMaybe<IGenSortOrderEnum>;
  uid?: InputMaybe<IGenSortOrderEnum>;
  gid?: InputMaybe<IGenSortOrderEnum>;
  rdev?: InputMaybe<IGenSortOrderEnum>;
  ino?: InputMaybe<IGenSortOrderEnum>;
  atimeMs?: InputMaybe<IGenSortOrderEnum>;
  mtimeMs?: InputMaybe<IGenSortOrderEnum>;
  ctimeMs?: InputMaybe<IGenSortOrderEnum>;
  atime?: InputMaybe<IGenSortOrderEnum>;
  mtime?: InputMaybe<IGenSortOrderEnum>;
  ctime?: InputMaybe<IGenSortOrderEnum>;
  birthtime?: InputMaybe<IGenSortOrderEnum>;
  birthtimeMs?: InputMaybe<IGenSortOrderEnum>;
  id?: InputMaybe<IGenSortOrderEnum>;
  parent?: InputMaybe<IGenNodeSortInput>;
  children?: InputMaybe<IGenNodeSortInput>;
  internal?: InputMaybe<IGenInternalSortInput>;
};

export type IGenSiteSiteMetadataFilterInput = {
  title?: InputMaybe<IGenStringQueryOperatorInput>;
  description?: InputMaybe<IGenStringQueryOperatorInput>;
};

export type IGenSiteGraphqlTypegenFilterInput = {
  typesOutputPath?: InputMaybe<IGenStringQueryOperatorInput>;
  documentSearchPaths?: InputMaybe<IGenStringQueryOperatorInput>;
  generateOnBuild?: InputMaybe<IGenBooleanQueryOperatorInput>;
};

export type IGenSiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IGenSiteEdge>;
  nodes: Array<IGenSite>;
  pageInfo: IGenPageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<IGenSiteGroupConnection>;
};


export type IGenSiteConnectionDistinctArgs = {
  field: IGenSiteFieldSelector;
};


export type IGenSiteConnectionMaxArgs = {
  field: IGenSiteFieldSelector;
};


export type IGenSiteConnectionMinArgs = {
  field: IGenSiteFieldSelector;
};


export type IGenSiteConnectionSumArgs = {
  field: IGenSiteFieldSelector;
};


export type IGenSiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: IGenSiteFieldSelector;
};

export type IGenSiteEdge = {
  next?: Maybe<IGenSite>;
  node: IGenSite;
  previous?: Maybe<IGenSite>;
};

export type IGenSiteFieldSelector = {
  buildTime?: InputMaybe<IGenFieldSelectorEnum>;
  siteMetadata?: InputMaybe<IGenSiteSiteMetadataFieldSelector>;
  graphqlTypegen?: InputMaybe<IGenSiteGraphqlTypegenFieldSelector>;
  trailingSlash?: InputMaybe<IGenFieldSelectorEnum>;
  polyfill?: InputMaybe<IGenFieldSelectorEnum>;
  pathPrefix?: InputMaybe<IGenFieldSelectorEnum>;
  jsxRuntime?: InputMaybe<IGenFieldSelectorEnum>;
  id?: InputMaybe<IGenFieldSelectorEnum>;
  parent?: InputMaybe<IGenNodeFieldSelector>;
  children?: InputMaybe<IGenNodeFieldSelector>;
  internal?: InputMaybe<IGenInternalFieldSelector>;
};

export type IGenSiteSiteMetadataFieldSelector = {
  title?: InputMaybe<IGenFieldSelectorEnum>;
  description?: InputMaybe<IGenFieldSelectorEnum>;
};

export type IGenSiteGraphqlTypegenFieldSelector = {
  typesOutputPath?: InputMaybe<IGenFieldSelectorEnum>;
  documentSearchPaths?: InputMaybe<IGenFieldSelectorEnum>;
  generateOnBuild?: InputMaybe<IGenFieldSelectorEnum>;
};

export type IGenSiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IGenSiteEdge>;
  nodes: Array<IGenSite>;
  pageInfo: IGenPageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<IGenSiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type IGenSiteGroupConnectionDistinctArgs = {
  field: IGenSiteFieldSelector;
};


export type IGenSiteGroupConnectionMaxArgs = {
  field: IGenSiteFieldSelector;
};


export type IGenSiteGroupConnectionMinArgs = {
  field: IGenSiteFieldSelector;
};


export type IGenSiteGroupConnectionSumArgs = {
  field: IGenSiteFieldSelector;
};


export type IGenSiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: IGenSiteFieldSelector;
};

export type IGenSiteFilterInput = {
  buildTime?: InputMaybe<IGenDateQueryOperatorInput>;
  siteMetadata?: InputMaybe<IGenSiteSiteMetadataFilterInput>;
  graphqlTypegen?: InputMaybe<IGenSiteGraphqlTypegenFilterInput>;
  trailingSlash?: InputMaybe<IGenStringQueryOperatorInput>;
  polyfill?: InputMaybe<IGenBooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<IGenStringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<IGenStringQueryOperatorInput>;
  id?: InputMaybe<IGenStringQueryOperatorInput>;
  parent?: InputMaybe<IGenNodeFilterInput>;
  children?: InputMaybe<IGenNodeFilterListInput>;
  internal?: InputMaybe<IGenInternalFilterInput>;
};

export type IGenSiteSortInput = {
  buildTime?: InputMaybe<IGenSortOrderEnum>;
  siteMetadata?: InputMaybe<IGenSiteSiteMetadataSortInput>;
  graphqlTypegen?: InputMaybe<IGenSiteGraphqlTypegenSortInput>;
  trailingSlash?: InputMaybe<IGenSortOrderEnum>;
  polyfill?: InputMaybe<IGenSortOrderEnum>;
  pathPrefix?: InputMaybe<IGenSortOrderEnum>;
  jsxRuntime?: InputMaybe<IGenSortOrderEnum>;
  id?: InputMaybe<IGenSortOrderEnum>;
  parent?: InputMaybe<IGenNodeSortInput>;
  children?: InputMaybe<IGenNodeSortInput>;
  internal?: InputMaybe<IGenInternalSortInput>;
};

export type IGenSiteSiteMetadataSortInput = {
  title?: InputMaybe<IGenSortOrderEnum>;
  description?: InputMaybe<IGenSortOrderEnum>;
};

export type IGenSiteGraphqlTypegenSortInput = {
  typesOutputPath?: InputMaybe<IGenSortOrderEnum>;
  documentSearchPaths?: InputMaybe<IGenSortOrderEnum>;
  generateOnBuild?: InputMaybe<IGenSortOrderEnum>;
};

export type IGenSiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IGenSiteFunctionEdge>;
  nodes: Array<IGenSiteFunction>;
  pageInfo: IGenPageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<IGenSiteFunctionGroupConnection>;
};


export type IGenSiteFunctionConnectionDistinctArgs = {
  field: IGenSiteFunctionFieldSelector;
};


export type IGenSiteFunctionConnectionMaxArgs = {
  field: IGenSiteFunctionFieldSelector;
};


export type IGenSiteFunctionConnectionMinArgs = {
  field: IGenSiteFunctionFieldSelector;
};


export type IGenSiteFunctionConnectionSumArgs = {
  field: IGenSiteFunctionFieldSelector;
};


export type IGenSiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: IGenSiteFunctionFieldSelector;
};

export type IGenSiteFunctionEdge = {
  next?: Maybe<IGenSiteFunction>;
  node: IGenSiteFunction;
  previous?: Maybe<IGenSiteFunction>;
};

export type IGenSiteFunctionFieldSelector = {
  functionRoute?: InputMaybe<IGenFieldSelectorEnum>;
  pluginName?: InputMaybe<IGenFieldSelectorEnum>;
  originalAbsoluteFilePath?: InputMaybe<IGenFieldSelectorEnum>;
  originalRelativeFilePath?: InputMaybe<IGenFieldSelectorEnum>;
  relativeCompiledFilePath?: InputMaybe<IGenFieldSelectorEnum>;
  absoluteCompiledFilePath?: InputMaybe<IGenFieldSelectorEnum>;
  matchPath?: InputMaybe<IGenFieldSelectorEnum>;
  id?: InputMaybe<IGenFieldSelectorEnum>;
  parent?: InputMaybe<IGenNodeFieldSelector>;
  children?: InputMaybe<IGenNodeFieldSelector>;
  internal?: InputMaybe<IGenInternalFieldSelector>;
};

export type IGenSiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IGenSiteFunctionEdge>;
  nodes: Array<IGenSiteFunction>;
  pageInfo: IGenPageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<IGenSiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type IGenSiteFunctionGroupConnectionDistinctArgs = {
  field: IGenSiteFunctionFieldSelector;
};


export type IGenSiteFunctionGroupConnectionMaxArgs = {
  field: IGenSiteFunctionFieldSelector;
};


export type IGenSiteFunctionGroupConnectionMinArgs = {
  field: IGenSiteFunctionFieldSelector;
};


export type IGenSiteFunctionGroupConnectionSumArgs = {
  field: IGenSiteFunctionFieldSelector;
};


export type IGenSiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: IGenSiteFunctionFieldSelector;
};

export type IGenSiteFunctionFilterInput = {
  functionRoute?: InputMaybe<IGenStringQueryOperatorInput>;
  pluginName?: InputMaybe<IGenStringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<IGenStringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<IGenStringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<IGenStringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<IGenStringQueryOperatorInput>;
  matchPath?: InputMaybe<IGenStringQueryOperatorInput>;
  id?: InputMaybe<IGenStringQueryOperatorInput>;
  parent?: InputMaybe<IGenNodeFilterInput>;
  children?: InputMaybe<IGenNodeFilterListInput>;
  internal?: InputMaybe<IGenInternalFilterInput>;
};

export type IGenSiteFunctionSortInput = {
  functionRoute?: InputMaybe<IGenSortOrderEnum>;
  pluginName?: InputMaybe<IGenSortOrderEnum>;
  originalAbsoluteFilePath?: InputMaybe<IGenSortOrderEnum>;
  originalRelativeFilePath?: InputMaybe<IGenSortOrderEnum>;
  relativeCompiledFilePath?: InputMaybe<IGenSortOrderEnum>;
  absoluteCompiledFilePath?: InputMaybe<IGenSortOrderEnum>;
  matchPath?: InputMaybe<IGenSortOrderEnum>;
  id?: InputMaybe<IGenSortOrderEnum>;
  parent?: InputMaybe<IGenNodeSortInput>;
  children?: InputMaybe<IGenNodeSortInput>;
  internal?: InputMaybe<IGenInternalSortInput>;
};

export type IGenJsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type IGenSitePluginFilterInput = {
  resolve?: InputMaybe<IGenStringQueryOperatorInput>;
  name?: InputMaybe<IGenStringQueryOperatorInput>;
  version?: InputMaybe<IGenStringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<IGenStringQueryOperatorInput>;
  browserAPIs?: InputMaybe<IGenStringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<IGenStringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<IGenStringQueryOperatorInput>;
  pluginOptions?: InputMaybe<IGenJsonQueryOperatorInput>;
  packageJson?: InputMaybe<IGenJsonQueryOperatorInput>;
  id?: InputMaybe<IGenStringQueryOperatorInput>;
  parent?: InputMaybe<IGenNodeFilterInput>;
  children?: InputMaybe<IGenNodeFilterListInput>;
  internal?: InputMaybe<IGenInternalFilterInput>;
};

export type IGenSitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IGenSitePageEdge>;
  nodes: Array<IGenSitePage>;
  pageInfo: IGenPageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<IGenSitePageGroupConnection>;
};


export type IGenSitePageConnectionDistinctArgs = {
  field: IGenSitePageFieldSelector;
};


export type IGenSitePageConnectionMaxArgs = {
  field: IGenSitePageFieldSelector;
};


export type IGenSitePageConnectionMinArgs = {
  field: IGenSitePageFieldSelector;
};


export type IGenSitePageConnectionSumArgs = {
  field: IGenSitePageFieldSelector;
};


export type IGenSitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: IGenSitePageFieldSelector;
};

export type IGenSitePageEdge = {
  next?: Maybe<IGenSitePage>;
  node: IGenSitePage;
  previous?: Maybe<IGenSitePage>;
};

export type IGenSitePageFieldSelector = {
  path?: InputMaybe<IGenFieldSelectorEnum>;
  component?: InputMaybe<IGenFieldSelectorEnum>;
  internalComponentName?: InputMaybe<IGenFieldSelectorEnum>;
  componentChunkName?: InputMaybe<IGenFieldSelectorEnum>;
  matchPath?: InputMaybe<IGenFieldSelectorEnum>;
  pageContext?: InputMaybe<IGenFieldSelectorEnum>;
  pluginCreator?: InputMaybe<IGenSitePluginFieldSelector>;
  id?: InputMaybe<IGenFieldSelectorEnum>;
  parent?: InputMaybe<IGenNodeFieldSelector>;
  children?: InputMaybe<IGenNodeFieldSelector>;
  internal?: InputMaybe<IGenInternalFieldSelector>;
};

export type IGenSitePluginFieldSelector = {
  resolve?: InputMaybe<IGenFieldSelectorEnum>;
  name?: InputMaybe<IGenFieldSelectorEnum>;
  version?: InputMaybe<IGenFieldSelectorEnum>;
  nodeAPIs?: InputMaybe<IGenFieldSelectorEnum>;
  browserAPIs?: InputMaybe<IGenFieldSelectorEnum>;
  ssrAPIs?: InputMaybe<IGenFieldSelectorEnum>;
  pluginFilepath?: InputMaybe<IGenFieldSelectorEnum>;
  pluginOptions?: InputMaybe<IGenFieldSelectorEnum>;
  packageJson?: InputMaybe<IGenFieldSelectorEnum>;
  id?: InputMaybe<IGenFieldSelectorEnum>;
  parent?: InputMaybe<IGenNodeFieldSelector>;
  children?: InputMaybe<IGenNodeFieldSelector>;
  internal?: InputMaybe<IGenInternalFieldSelector>;
};

export type IGenSitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IGenSitePageEdge>;
  nodes: Array<IGenSitePage>;
  pageInfo: IGenPageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<IGenSitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type IGenSitePageGroupConnectionDistinctArgs = {
  field: IGenSitePageFieldSelector;
};


export type IGenSitePageGroupConnectionMaxArgs = {
  field: IGenSitePageFieldSelector;
};


export type IGenSitePageGroupConnectionMinArgs = {
  field: IGenSitePageFieldSelector;
};


export type IGenSitePageGroupConnectionSumArgs = {
  field: IGenSitePageFieldSelector;
};


export type IGenSitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: IGenSitePageFieldSelector;
};

export type IGenSitePageFilterInput = {
  path?: InputMaybe<IGenStringQueryOperatorInput>;
  component?: InputMaybe<IGenStringQueryOperatorInput>;
  internalComponentName?: InputMaybe<IGenStringQueryOperatorInput>;
  componentChunkName?: InputMaybe<IGenStringQueryOperatorInput>;
  matchPath?: InputMaybe<IGenStringQueryOperatorInput>;
  pageContext?: InputMaybe<IGenJsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<IGenSitePluginFilterInput>;
  id?: InputMaybe<IGenStringQueryOperatorInput>;
  parent?: InputMaybe<IGenNodeFilterInput>;
  children?: InputMaybe<IGenNodeFilterListInput>;
  internal?: InputMaybe<IGenInternalFilterInput>;
};

export type IGenSitePageSortInput = {
  path?: InputMaybe<IGenSortOrderEnum>;
  component?: InputMaybe<IGenSortOrderEnum>;
  internalComponentName?: InputMaybe<IGenSortOrderEnum>;
  componentChunkName?: InputMaybe<IGenSortOrderEnum>;
  matchPath?: InputMaybe<IGenSortOrderEnum>;
  pageContext?: InputMaybe<IGenSortOrderEnum>;
  pluginCreator?: InputMaybe<IGenSitePluginSortInput>;
  id?: InputMaybe<IGenSortOrderEnum>;
  parent?: InputMaybe<IGenNodeSortInput>;
  children?: InputMaybe<IGenNodeSortInput>;
  internal?: InputMaybe<IGenInternalSortInput>;
};

export type IGenSitePluginSortInput = {
  resolve?: InputMaybe<IGenSortOrderEnum>;
  name?: InputMaybe<IGenSortOrderEnum>;
  version?: InputMaybe<IGenSortOrderEnum>;
  nodeAPIs?: InputMaybe<IGenSortOrderEnum>;
  browserAPIs?: InputMaybe<IGenSortOrderEnum>;
  ssrAPIs?: InputMaybe<IGenSortOrderEnum>;
  pluginFilepath?: InputMaybe<IGenSortOrderEnum>;
  pluginOptions?: InputMaybe<IGenSortOrderEnum>;
  packageJson?: InputMaybe<IGenSortOrderEnum>;
  id?: InputMaybe<IGenSortOrderEnum>;
  parent?: InputMaybe<IGenNodeSortInput>;
  children?: InputMaybe<IGenNodeSortInput>;
  internal?: InputMaybe<IGenInternalSortInput>;
};

export type IGenSitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IGenSitePluginEdge>;
  nodes: Array<IGenSitePlugin>;
  pageInfo: IGenPageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<IGenSitePluginGroupConnection>;
};


export type IGenSitePluginConnectionDistinctArgs = {
  field: IGenSitePluginFieldSelector;
};


export type IGenSitePluginConnectionMaxArgs = {
  field: IGenSitePluginFieldSelector;
};


export type IGenSitePluginConnectionMinArgs = {
  field: IGenSitePluginFieldSelector;
};


export type IGenSitePluginConnectionSumArgs = {
  field: IGenSitePluginFieldSelector;
};


export type IGenSitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: IGenSitePluginFieldSelector;
};

export type IGenSitePluginEdge = {
  next?: Maybe<IGenSitePlugin>;
  node: IGenSitePlugin;
  previous?: Maybe<IGenSitePlugin>;
};

export type IGenSitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IGenSitePluginEdge>;
  nodes: Array<IGenSitePlugin>;
  pageInfo: IGenPageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<IGenSitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type IGenSitePluginGroupConnectionDistinctArgs = {
  field: IGenSitePluginFieldSelector;
};


export type IGenSitePluginGroupConnectionMaxArgs = {
  field: IGenSitePluginFieldSelector;
};


export type IGenSitePluginGroupConnectionMinArgs = {
  field: IGenSitePluginFieldSelector;
};


export type IGenSitePluginGroupConnectionSumArgs = {
  field: IGenSitePluginFieldSelector;
};


export type IGenSitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: IGenSitePluginFieldSelector;
};

export type IGenSiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IGenSiteBuildMetadataEdge>;
  nodes: Array<IGenSiteBuildMetadata>;
  pageInfo: IGenPageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<IGenSiteBuildMetadataGroupConnection>;
};


export type IGenSiteBuildMetadataConnectionDistinctArgs = {
  field: IGenSiteBuildMetadataFieldSelector;
};


export type IGenSiteBuildMetadataConnectionMaxArgs = {
  field: IGenSiteBuildMetadataFieldSelector;
};


export type IGenSiteBuildMetadataConnectionMinArgs = {
  field: IGenSiteBuildMetadataFieldSelector;
};


export type IGenSiteBuildMetadataConnectionSumArgs = {
  field: IGenSiteBuildMetadataFieldSelector;
};


export type IGenSiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: IGenSiteBuildMetadataFieldSelector;
};

export type IGenSiteBuildMetadataEdge = {
  next?: Maybe<IGenSiteBuildMetadata>;
  node: IGenSiteBuildMetadata;
  previous?: Maybe<IGenSiteBuildMetadata>;
};

export type IGenSiteBuildMetadataFieldSelector = {
  buildTime?: InputMaybe<IGenFieldSelectorEnum>;
  id?: InputMaybe<IGenFieldSelectorEnum>;
  parent?: InputMaybe<IGenNodeFieldSelector>;
  children?: InputMaybe<IGenNodeFieldSelector>;
  internal?: InputMaybe<IGenInternalFieldSelector>;
};

export type IGenSiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IGenSiteBuildMetadataEdge>;
  nodes: Array<IGenSiteBuildMetadata>;
  pageInfo: IGenPageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<IGenSiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type IGenSiteBuildMetadataGroupConnectionDistinctArgs = {
  field: IGenSiteBuildMetadataFieldSelector;
};


export type IGenSiteBuildMetadataGroupConnectionMaxArgs = {
  field: IGenSiteBuildMetadataFieldSelector;
};


export type IGenSiteBuildMetadataGroupConnectionMinArgs = {
  field: IGenSiteBuildMetadataFieldSelector;
};


export type IGenSiteBuildMetadataGroupConnectionSumArgs = {
  field: IGenSiteBuildMetadataFieldSelector;
};


export type IGenSiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: IGenSiteBuildMetadataFieldSelector;
};

export type IGenSiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<IGenDateQueryOperatorInput>;
  id?: InputMaybe<IGenStringQueryOperatorInput>;
  parent?: InputMaybe<IGenNodeFilterInput>;
  children?: InputMaybe<IGenNodeFilterListInput>;
  internal?: InputMaybe<IGenInternalFilterInput>;
};

export type IGenSiteBuildMetadataSortInput = {
  buildTime?: InputMaybe<IGenSortOrderEnum>;
  id?: InputMaybe<IGenSortOrderEnum>;
  parent?: InputMaybe<IGenNodeSortInput>;
  children?: InputMaybe<IGenNodeSortInput>;
  internal?: InputMaybe<IGenInternalSortInput>;
};

export type IGenGraphQlSourceConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IGenGraphQlSourceEdge>;
  nodes: Array<IGenGraphQlSource>;
  pageInfo: IGenPageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<IGenGraphQlSourceGroupConnection>;
};


export type IGenGraphQlSourceConnectionDistinctArgs = {
  field: IGenGraphQlSourceFieldSelector;
};


export type IGenGraphQlSourceConnectionMaxArgs = {
  field: IGenGraphQlSourceFieldSelector;
};


export type IGenGraphQlSourceConnectionMinArgs = {
  field: IGenGraphQlSourceFieldSelector;
};


export type IGenGraphQlSourceConnectionSumArgs = {
  field: IGenGraphQlSourceFieldSelector;
};


export type IGenGraphQlSourceConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: IGenGraphQlSourceFieldSelector;
};

export type IGenGraphQlSourceEdge = {
  next?: Maybe<IGenGraphQlSource>;
  node: IGenGraphQlSource;
  previous?: Maybe<IGenGraphQlSource>;
};

export type IGenGraphQlSourceFieldSelector = {
  id?: InputMaybe<IGenFieldSelectorEnum>;
  parent?: InputMaybe<IGenNodeFieldSelector>;
  children?: InputMaybe<IGenNodeFieldSelector>;
  internal?: InputMaybe<IGenInternalFieldSelector>;
  typeName?: InputMaybe<IGenFieldSelectorEnum>;
  fieldName?: InputMaybe<IGenFieldSelectorEnum>;
};

export type IGenGraphQlSourceGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IGenGraphQlSourceEdge>;
  nodes: Array<IGenGraphQlSource>;
  pageInfo: IGenPageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<IGenGraphQlSourceGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type IGenGraphQlSourceGroupConnectionDistinctArgs = {
  field: IGenGraphQlSourceFieldSelector;
};


export type IGenGraphQlSourceGroupConnectionMaxArgs = {
  field: IGenGraphQlSourceFieldSelector;
};


export type IGenGraphQlSourceGroupConnectionMinArgs = {
  field: IGenGraphQlSourceFieldSelector;
};


export type IGenGraphQlSourceGroupConnectionSumArgs = {
  field: IGenGraphQlSourceFieldSelector;
};


export type IGenGraphQlSourceGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: IGenGraphQlSourceFieldSelector;
};

export type IGenGraphQlSourceFilterInput = {
  id?: InputMaybe<IGenStringQueryOperatorInput>;
  parent?: InputMaybe<IGenNodeFilterInput>;
  children?: InputMaybe<IGenNodeFilterListInput>;
  internal?: InputMaybe<IGenInternalFilterInput>;
  typeName?: InputMaybe<IGenStringQueryOperatorInput>;
  fieldName?: InputMaybe<IGenStringQueryOperatorInput>;
};

export type IGenGraphQlSourceSortInput = {
  id?: InputMaybe<IGenSortOrderEnum>;
  parent?: InputMaybe<IGenNodeSortInput>;
  children?: InputMaybe<IGenNodeSortInput>;
  internal?: InputMaybe<IGenInternalSortInput>;
  typeName?: InputMaybe<IGenSortOrderEnum>;
  fieldName?: InputMaybe<IGenSortOrderEnum>;
};

export type IGenAssetFragment = { __typename: 'CAISY_Asset', title?: string | null, src?: string | null, originType?: string | null, keywords?: string | null, id?: string | null, dominantColor?: string | null, description?: string | null, copyright?: string | null, author?: string | null };

export type IGenAuthorFragment = { name?: string | null, role?: string | null, id?: string | null, avatar?: IGenAssetFragment | null };

export type IGenBlogArticleFragment = { teaserHeadline?: string | null, teaserDesciption?: string | null, slug?: string | null, id?: string | null, text?: { json?: any | null, connections?: Array<(
      { __typename: 'CAISY_Asset' }
      & IGenAssetFragment
    ) | null> | null } | null, teaserImage?: IGenAssetFragment | null, seo?: { id?: string | null, description?: string | null, keywords?: string | null, title?: string | null, ogImage?: IGenAssetFragment | null } | null };

export type IGenBlogArticleGridFragment = { id?: string | null, headline?: string | null, subheadline?: string | null, articles?: Array<{ id?: string | null, slug?: string | null, teaserDesciption?: string | null, teaserHeadline?: string | null, teaserImage?: IGenAssetFragment | null, text?: { json?: any | null, connections?: Array<(
        { __typename: 'CAISY_Asset' }
        & IGenAssetFragment
      ) | null> | null } | null } | null> | null };

export type IGenCategoryFragment = { name?: string | null, id?: string | null };

export type IGenContactFormFragment = { id?: string | null, headline?: string | null };

export type IGenFulltextFragment = { id?: string | null, text?: { json?: any | null, connections?: Array<(
      { __typename: 'CAISY_Asset' }
      & IGenAssetFragment
    ) | null> | null } | null };

export type IGenFullwidthBlogTeaserFragment = { id?: string | null, featuredArticle?: { id?: string | null, slug?: string | null, teaserHeadline?: string | null, teaserDesciption?: string | null, teaserImage?: IGenAssetFragment | null, text?: { json?: any | null, connections?: Array<(
        { __typename: 'CAISY_Asset' }
        & IGenAssetFragment
      ) | null> | null } | null, author?: IGenAuthorFragment | null, category?: IGenCategoryFragment | null } | null };

export type IGenHeadlineFragment = { subheadline?: string | null, id?: string | null, headline?: string | null };

export type IGenNavigationEntryFragment = { id?: string | null, title?: string | null, connection?: { id?: string | null, slug?: string | null } | null };

export type IGenNewsletterSignupFragment = { headline?: string | null, subheadline?: string | null, id?: string | null };

export type IGenPageFragment = { id?: string | null, slug?: string | null, components?: Array<(
    { __typename: 'CAISY_Fulltext' }
    & IGenFulltextFragment
  ) | (
    { __typename: 'CAISY_ContactForm' }
    & IGenContactFormFragment
  ) | (
    { __typename: 'CAISY_BlogArticleGrid' }
    & IGenBlogArticleGridFragment
  ) | (
    { __typename: 'CAISY_FullwidthBlogTeaser' }
    & IGenFullwidthBlogTeaserFragment
  ) | (
    { __typename: 'CAISY_NewsletterSignup' }
    & IGenNewsletterSignupFragment
  ) | (
    { __typename: 'CAISY_Headline' }
    & IGenHeadlineFragment
  ) | null> | null, seo?: { title?: string | null, keywords?: string | null, id?: string | null, description?: string | null, ogImage?: { id?: string | null } | null } | null };

export type IGenAllBlogArticleBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type IGenAllBlogArticleBySlugQuery = { caisy: { allBlogArticle?: { edges?: Array<{ node?: IGenBlogArticleFragment | null } | null> | null } | null } };

export type IGenAllBlogArticleMetaQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
}>;


export type IGenAllBlogArticleMetaQuery = { caisy: { allBlogArticle?: { totalCount?: number | null, pageInfo?: { hasNextPage?: boolean | null, endCursor?: string | null } | null, edges?: Array<{ node?: { id?: string | null, slug?: string | null, _meta?: { publishedAt?: any | null } | null } | null } | null> | null } | null } };

export type IGenAlleMetaQueryVariables = Exact<{ [key: string]: never; }>;


export type IGenAlleMetaQuery = { caisy: { allPage?: { totalCount?: number | null, pageInfo?: { hasNextPage?: boolean | null, endCursor?: string | null } | null, edges?: Array<{ node?: { id?: string | null, slug?: string | null, _meta?: { publishedAt?: any | null } | null } | null } | null> | null } | null, allBlogArticle?: { totalCount?: number | null, pageInfo?: { hasNextPage?: boolean | null, endCursor?: string | null } | null, edges?: Array<{ node?: { id?: string | null, slug?: string | null, _meta?: { publishedAt?: any | null } | null } | null } | null> | null } | null } };

export type IGenAllPageBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type IGenAllPageBySlugQuery = { caisy: { allPage?: { edges?: Array<{ node?: IGenPageFragment | null } | null> | null } | null } };

export type IGenAllPageMetaQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
}>;


export type IGenAllPageMetaQuery = { caisy: { allPage?: { totalCount?: number | null, pageInfo?: { hasNextPage?: boolean | null, endCursor?: string | null } | null, edges?: Array<{ node?: { id?: string | null, slug?: string | null, _meta?: { publishedAt?: any | null } | null } | null } | null> | null } | null } };

export type IGenFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type IGenFooterQuery = { caisy: { Footer?: { id?: string | null, content?: { json?: any | null } | null } | null } };

export type IGenNavigationQueryVariables = Exact<{ [key: string]: never; }>;


export type IGenNavigationQuery = { caisy: { Navigation?: { id?: string | null, homePage?: { id?: string | null, slug?: string | null } | null, notFoundPage?: { id?: string | null, slug?: string | null } | null, entries?: Array<IGenNavigationEntryFragment | null> | null } | null } };
