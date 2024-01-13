// To parse this data:
//
//   import { Convert } from "./file";
//
//   const podcast = Convert.toPodcast(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Podcast {
    id:                       number;
    date:                     Date;
    date_gmt:                 Date;
    guid:                     GUID;
    modified:                 Date;
    modified_gmt:             Date;
    slug:                     string;
    status:                   Status;
    type:                     PodcastType;
    link:                     string;
    title:                    GUID;
    content:                  Content;
    featured_media:           number;
    menu_order:               number;
    comment_status:           CommentStatus;
    ping_status:              PingStatus;
    template:                 string;
    meta:                     Meta;
    acf:                      Acf;
    yoast_head:               string;
    yoast_head_json:          YoastHeadJSON;
    yasr_visitor_votes:       YasrVisitorVotes;
    taxonomy_info:            any[];
    featured_image_src_large: Array<boolean | number | string>;
    author_info:              any[];
    comment_info:             number;
    _links:                   Links;
}

export interface Links {
    self:                  About[];
    collection:            About[];
    about:                 About[];
    replies:               Reply[];
    "version-history":     VersionHistory[];
    "predecessor-version": PredecessorVersion[];
    "wp:featuredmedia":    Reply[];
    "wp:attachment":       About[];
    curies:                Cury[];
}

export interface About {
    href: string;
}

export interface Cury {
    name:      Name;
    href:      Href;
    templated: boolean;
}

export enum Href {
    HTTPSAPIWOrgRel = "https://api.w.org/{rel}",
}

export enum Name {
    Wp = "wp",
}

export interface PredecessorVersion {
    id:   number;
    href: string;
}

export interface Reply {
    embeddable: boolean;
    href:       string;
}

export interface VersionHistory {
    count: number;
    href:  string;
}

export interface Acf {
    apartado_contenido: string;
    ivoox:              string;
    amazon_music:       string;
    apple_podcast:      string;
    google_podcast:     string;
    anchor_podcast:     string;
    spotify_podcast:    string;
}

export enum CommentStatus {
    Open = "open",
}

export interface Content {
    rendered:  string;
    protected: boolean;
}

export interface GUID {
    rendered: string;
}

export interface Meta {
    _kad_blocks_custom_css:       string;
    _kad_blocks_head_custom_js:   string;
    _kad_blocks_body_custom_js:   string;
    _kad_blocks_footer_custom_js: string;
    yasr_overall_rating:          number;
    yasr_post_is_review:          string;
    yasr_auto_insert_disabled:    string;
    yasr_review_type:             string;
}

export enum PingStatus {
    Closed = "closed",
}

export enum Status {
    Publish = "publish",
}

export enum PodcastType {
    Podcasts = "podcasts",
}

export interface YasrVisitorVotes {
    stars_attributes: StarsAttributes;
    number_of_votes:  number;
    sum_votes:        number;
}

export interface StarsAttributes {
    read_only:   boolean;
    span_bottom: string;
}

export interface YoastHeadJSON {
    title:                 string;
    description:           string;
    robots:                Robots;
    canonical:             string;
    og_locale:             OgLocale;
    og_type:               OgType;
    og_title:              string;
    og_description:        string;
    og_url:                string;
    og_site_name:          OgSiteName;
    article_modified_time: Date;
    og_image:              OgImage[];
    twitter_card:          TwitterCard;
    twitter_title:         string;
    twitter_image:         string;
    twitter_misc:          TwitterMisc;
    schema:                Schema;
}

export interface OgImage {
    width:  number;
    height: number;
    url:    string;
    type:   OgImageType;
}

export enum OgImageType {
    ImageJPEG = "image/jpeg",
}

export enum OgLocale {
    EsES = "es_ES",
}

export enum OgSiteName {
    Care = "CARE",
}

export enum OgType {
    Article = "article",
}

export interface Robots {
    index:               Index;
    follow:              Follow;
    "max-snippet":       MaxSnippet;
    "max-image-preview": MaxImagePreview;
    "max-video-preview": MaxVideoPreview;
}

export enum Follow {
    Follow = "follow",
}

export enum Index {
    Index = "index",
}

export enum MaxImagePreview {
    MaxImagePreviewLarge = "max-image-preview:large",
}

export enum MaxSnippet {
    MaxSnippet1 = "max-snippet:-1",
}

export enum MaxVideoPreview {
    MaxVideoPreview1 = "max-video-preview:-1",
}

export interface Schema {
    "@context": string;
    "@graph":   Array<boolean | GraphClass>;
}

export interface GraphClass {
    "@type":          GraphType;
    "@id":            string;
    url?:             string;
    name?:            string;
    isPartOf?:        Breadcrumb;
    datePublished?:   Date;
    dateModified?:    Date;
    description?:     string;
    breadcrumb?:      Breadcrumb;
    inLanguage?:      InLanguage;
    potentialAction?: PotentialAction[];
    itemListElement?: ItemListElement[];
    publisher?:       Breadcrumb;
    logo?:            Logo;
    image?:           Breadcrumb;
    sameAs?:          string[];
}

export enum GraphType {
    BreadcrumbList = "BreadcrumbList",
    Organization = "Organization",
    WebPage = "WebPage",
    WebSite = "WebSite",
}

export interface Breadcrumb {
    "@id": string;
}

export enum InLanguage {
    Es = "es",
}

export interface ItemListElement {
    "@type":  ItemListElementType;
    position: number;
    name:     string;
    item?:    string;
}

export enum ItemListElementType {
    ListItem = "ListItem",
}

export interface Logo {
    "@type":    LogoType;
    inLanguage: InLanguage;
    "@id":      string;
    url:        string;
    contentUrl: string;
    width:      number;
    height:     number;
    caption:    OgSiteName;
}

export enum LogoType {
    ImageObject = "ImageObject",
}

export interface PotentialAction {
    "@type":        PotentialActionType;
    target:         string[] | TargetClass;
    "query-input"?: QueryInput;
}

export enum PotentialActionType {
    ReadAction = "ReadAction",
    SearchAction = "SearchAction",
}

export enum QueryInput {
    RequiredNameSearchTermString = "required name=search_term_string",
}

export interface TargetClass {
    "@type":     TargetType;
    urlTemplate: string;
}

export enum TargetType {
    EntryPoint = "EntryPoint",
}

export enum TwitterCard {
    SummaryLargeImage = "summary_large_image",
}

export interface TwitterMisc {
    "Tiempo de lectura": TiempoDeLectura;
}

export enum TiempoDeLectura {
    The1Minuto = "1 minuto",
    The2Minutos = "2 minutos",
    The3Minutos = "3 minutos",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toPodcast(json: string): Podcast[] {
        return cast(JSON.parse(json), a(r("Podcast")));
    }

    public static podcastToJson(value: Podcast[]): string {
        return JSON.stringify(uncast(value, a(r("Podcast"))), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Podcast": o([
        { json: "id", js: "id", typ: 0 },
        { json: "date", js: "date", typ: Date },
        { json: "date_gmt", js: "date_gmt", typ: Date },
        { json: "guid", js: "guid", typ: r("GUID") },
        { json: "modified", js: "modified", typ: Date },
        { json: "modified_gmt", js: "modified_gmt", typ: Date },
        { json: "slug", js: "slug", typ: "" },
        { json: "status", js: "status", typ: r("Status") },
        { json: "type", js: "type", typ: r("PodcastType") },
        { json: "link", js: "link", typ: "" },
        { json: "title", js: "title", typ: r("GUID") },
        { json: "content", js: "content", typ: r("Content") },
        { json: "featured_media", js: "featured_media", typ: 0 },
        { json: "menu_order", js: "menu_order", typ: 0 },
        { json: "comment_status", js: "comment_status", typ: r("CommentStatus") },
        { json: "ping_status", js: "ping_status", typ: r("PingStatus") },
        { json: "template", js: "template", typ: "" },
        { json: "meta", js: "meta", typ: r("Meta") },
        { json: "acf", js: "acf", typ: r("Acf") },
        { json: "yoast_head", js: "yoast_head", typ: "" },
        { json: "yoast_head_json", js: "yoast_head_json", typ: r("YoastHeadJSON") },
        { json: "yasr_visitor_votes", js: "yasr_visitor_votes", typ: r("YasrVisitorVotes") },
        { json: "taxonomy_info", js: "taxonomy_info", typ: a("any") },
        { json: "featured_image_src_large", js: "featured_image_src_large", typ: a(u(true, 0, "")) },
        { json: "author_info", js: "author_info", typ: a("any") },
        { json: "comment_info", js: "comment_info", typ: 0 },
        { json: "_links", js: "_links", typ: r("Links") },
    ], false),
    "Links": o([
        { json: "self", js: "self", typ: a(r("About")) },
        { json: "collection", js: "collection", typ: a(r("About")) },
        { json: "about", js: "about", typ: a(r("About")) },
        { json: "replies", js: "replies", typ: a(r("Reply")) },
        { json: "version-history", js: "version-history", typ: a(r("VersionHistory")) },
        { json: "predecessor-version", js: "predecessor-version", typ: a(r("PredecessorVersion")) },
        { json: "wp:featuredmedia", js: "wp:featuredmedia", typ: a(r("Reply")) },
        { json: "wp:attachment", js: "wp:attachment", typ: a(r("About")) },
        { json: "curies", js: "curies", typ: a(r("Cury")) },
    ], false),
    "About": o([
        { json: "href", js: "href", typ: "" },
    ], false),
    "Cury": o([
        { json: "name", js: "name", typ: r("Name") },
        { json: "href", js: "href", typ: r("Href") },
        { json: "templated", js: "templated", typ: true },
    ], false),
    "PredecessorVersion": o([
        { json: "id", js: "id", typ: 0 },
        { json: "href", js: "href", typ: "" },
    ], false),
    "Reply": o([
        { json: "embeddable", js: "embeddable", typ: true },
        { json: "href", js: "href", typ: "" },
    ], false),
    "VersionHistory": o([
        { json: "count", js: "count", typ: 0 },
        { json: "href", js: "href", typ: "" },
    ], false),
    "Acf": o([
        { json: "apartado_contenido", js: "apartado_contenido", typ: "" },
        { json: "ivoox", js: "ivoox", typ: "" },
        { json: "amazon_music", js: "amazon_music", typ: "" },
        { json: "apple_podcast", js: "apple_podcast", typ: "" },
        { json: "google_podcast", js: "google_podcast", typ: "" },
        { json: "anchor_podcast", js: "anchor_podcast", typ: "" },
        { json: "spotify_podcast", js: "spotify_podcast", typ: "" },
    ], false),
    "Content": o([
        { json: "rendered", js: "rendered", typ: "" },
        { json: "protected", js: "protected", typ: true },
    ], false),
    "GUID": o([
        { json: "rendered", js: "rendered", typ: "" },
    ], false),
    "Meta": o([
        { json: "_kad_blocks_custom_css", js: "_kad_blocks_custom_css", typ: "" },
        { json: "_kad_blocks_head_custom_js", js: "_kad_blocks_head_custom_js", typ: "" },
        { json: "_kad_blocks_body_custom_js", js: "_kad_blocks_body_custom_js", typ: "" },
        { json: "_kad_blocks_footer_custom_js", js: "_kad_blocks_footer_custom_js", typ: "" },
        { json: "yasr_overall_rating", js: "yasr_overall_rating", typ: 0 },
        { json: "yasr_post_is_review", js: "yasr_post_is_review", typ: "" },
        { json: "yasr_auto_insert_disabled", js: "yasr_auto_insert_disabled", typ: "" },
        { json: "yasr_review_type", js: "yasr_review_type", typ: "" },
    ], false),
    "YasrVisitorVotes": o([
        { json: "stars_attributes", js: "stars_attributes", typ: r("StarsAttributes") },
        { json: "number_of_votes", js: "number_of_votes", typ: 0 },
        { json: "sum_votes", js: "sum_votes", typ: 0 },
    ], false),
    "StarsAttributes": o([
        { json: "read_only", js: "read_only", typ: true },
        { json: "span_bottom", js: "span_bottom", typ: "" },
    ], false),
    "YoastHeadJSON": o([
        { json: "title", js: "title", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "robots", js: "robots", typ: r("Robots") },
        { json: "canonical", js: "canonical", typ: "" },
        { json: "og_locale", js: "og_locale", typ: r("OgLocale") },
        { json: "og_type", js: "og_type", typ: r("OgType") },
        { json: "og_title", js: "og_title", typ: "" },
        { json: "og_description", js: "og_description", typ: "" },
        { json: "og_url", js: "og_url", typ: "" },
        { json: "og_site_name", js: "og_site_name", typ: r("OgSiteName") },
        { json: "article_modified_time", js: "article_modified_time", typ: Date },
        { json: "og_image", js: "og_image", typ: a(r("OgImage")) },
        { json: "twitter_card", js: "twitter_card", typ: r("TwitterCard") },
        { json: "twitter_title", js: "twitter_title", typ: "" },
        { json: "twitter_image", js: "twitter_image", typ: "" },
        { json: "twitter_misc", js: "twitter_misc", typ: r("TwitterMisc") },
        { json: "schema", js: "schema", typ: r("Schema") },
    ], false),
    "OgImage": o([
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "url", js: "url", typ: "" },
        { json: "type", js: "type", typ: r("OgImageType") },
    ], false),
    "Robots": o([
        { json: "index", js: "index", typ: r("Index") },
        { json: "follow", js: "follow", typ: r("Follow") },
        { json: "max-snippet", js: "max-snippet", typ: r("MaxSnippet") },
        { json: "max-image-preview", js: "max-image-preview", typ: r("MaxImagePreview") },
        { json: "max-video-preview", js: "max-video-preview", typ: r("MaxVideoPreview") },
    ], false),
    "Schema": o([
        { json: "@context", js: "@context", typ: "" },
        { json: "@graph", js: "@graph", typ: a(u(true, r("GraphClass"))) },
    ], false),
    "GraphClass": o([
        { json: "@type", js: "@type", typ: r("GraphType") },
        { json: "@id", js: "@id", typ: "" },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "isPartOf", js: "isPartOf", typ: u(undefined, r("Breadcrumb")) },
        { json: "datePublished", js: "datePublished", typ: u(undefined, Date) },
        { json: "dateModified", js: "dateModified", typ: u(undefined, Date) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "breadcrumb", js: "breadcrumb", typ: u(undefined, r("Breadcrumb")) },
        { json: "inLanguage", js: "inLanguage", typ: u(undefined, r("InLanguage")) },
        { json: "potentialAction", js: "potentialAction", typ: u(undefined, a(r("PotentialAction"))) },
        { json: "itemListElement", js: "itemListElement", typ: u(undefined, a(r("ItemListElement"))) },
        { json: "publisher", js: "publisher", typ: u(undefined, r("Breadcrumb")) },
        { json: "logo", js: "logo", typ: u(undefined, r("Logo")) },
        { json: "image", js: "image", typ: u(undefined, r("Breadcrumb")) },
        { json: "sameAs", js: "sameAs", typ: u(undefined, a("")) },
    ], false),
    "Breadcrumb": o([
        { json: "@id", js: "@id", typ: "" },
    ], false),
    "ItemListElement": o([
        { json: "@type", js: "@type", typ: r("ItemListElementType") },
        { json: "position", js: "position", typ: 0 },
        { json: "name", js: "name", typ: "" },
        { json: "item", js: "item", typ: u(undefined, "") },
    ], false),
    "Logo": o([
        { json: "@type", js: "@type", typ: r("LogoType") },
        { json: "inLanguage", js: "inLanguage", typ: r("InLanguage") },
        { json: "@id", js: "@id", typ: "" },
        { json: "url", js: "url", typ: "" },
        { json: "contentUrl", js: "contentUrl", typ: "" },
        { json: "width", js: "width", typ: 0 },
        { json: "height", js: "height", typ: 0 },
        { json: "caption", js: "caption", typ: r("OgSiteName") },
    ], false),
    "PotentialAction": o([
        { json: "@type", js: "@type", typ: r("PotentialActionType") },
        { json: "target", js: "target", typ: u(a(""), r("TargetClass")) },
        { json: "query-input", js: "query-input", typ: u(undefined, r("QueryInput")) },
    ], false),
    "TargetClass": o([
        { json: "@type", js: "@type", typ: r("TargetType") },
        { json: "urlTemplate", js: "urlTemplate", typ: "" },
    ], false),
    "TwitterMisc": o([
        { json: "Tiempo de lectura", js: "Tiempo de lectura", typ: r("TiempoDeLectura") },
    ], false),
    "Href": [
        "https://api.w.org/{rel}",
    ],
    "Name": [
        "wp",
    ],
    "CommentStatus": [
        "open",
    ],
    "PingStatus": [
        "closed",
    ],
    "Status": [
        "publish",
    ],
    "PodcastType": [
        "podcasts",
    ],
    "OgImageType": [
        "image/jpeg",
    ],
    "OgLocale": [
        "es_ES",
    ],
    "OgSiteName": [
        "CARE",
    ],
    "OgType": [
        "article",
    ],
    "Follow": [
        "follow",
    ],
    "Index": [
        "index",
    ],
    "MaxImagePreview": [
        "max-image-preview:large",
    ],
    "MaxSnippet": [
        "max-snippet:-1",
    ],
    "MaxVideoPreview": [
        "max-video-preview:-1",
    ],
    "GraphType": [
        "BreadcrumbList",
        "Organization",
        "WebPage",
        "WebSite",
    ],
    "InLanguage": [
        "es",
    ],
    "ItemListElementType": [
        "ListItem",
    ],
    "LogoType": [
        "ImageObject",
    ],
    "PotentialActionType": [
        "ReadAction",
        "SearchAction",
    ],
    "QueryInput": [
        "required name=search_term_string",
    ],
    "TargetType": [
        "EntryPoint",
    ],
    "TwitterCard": [
        "summary_large_image",
    ],
    "TiempoDeLectura": [
        "1 minuto",
        "2 minutos",
        "3 minutos",
    ],
};
