import { A as AstroError, c as InvalidImageService, d as ExpectedImageOptions, E as ExpectedImage, e as createAstro, f as createComponent, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderComponent, j as renderHead, k as renderSlot, F as Fragment, u as unescapeHTML } from '../astro_KruL9ryJ.mjs';
import 'kleur/colors';
import 'clsx';
import { i as isESMImportedImage, a as isLocalService, b as isRemoteImage, D as DEFAULT_HASH_PROPS } from '../astro/assets-service_TZM9G5wd.mjs';
/* empty css                                 */
import { Client, cacheExchange, fetchExchange, Provider } from 'urql';
/* empty css                         */

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../astro/assets-service_TZM9G5wd.mjs'
    ).then(n => n.g).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  const originalPath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : resolvedOptions.src;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash, originalPath);
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalPath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$6 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/manuelpaez/Programacion/Astro/podcast-care/node_modules/astro/components/Image.astro", void 0);

const $$Astro$5 = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/manuelpaez/Programacion/Astro/podcast-care/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[{"protocol":"https"}]};
					new URL("file:///Users/manuelpaez/Programacion/Astro/podcast-care/.vercel/output/static/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const logotipo = new Proxy({"src":"/_astro/logotipo-care.6FeqZG3z.png","width":147,"height":45,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/manuelpaez/Programacion/Astro/podcast-care/public/logotipo-care.png";
							}
							
							return target[name];
						}
					});

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <div class="content-header" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Image", $$Image, { "src": logotipo, "title": "Podcast CARE", "alt": "Podcast CARE", "data-astro-cid-3ef6ksr2": true })} <nav data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2>Inicio</a> <a href="/nosotros" data-astro-cid-3ef6ksr2>Sobre el Club</a> <a href="/" data-astro-cid-3ef6ksr2>Podcast</a> <a href="/care-experts" data-astro-cid-3ef6ksr2>Care Experts</a> <a href="/" data-astro-cid-3ef6ksr2>Actualidad</a> <a href="/" data-astro-cid-3ef6ksr2>Eventos</a> <a href="/" data-astro-cid-3ef6ksr2>Contacto</a> </nav> <button class="unete-ahora" data-astro-cid-3ef6ksr2>Únete ahora</button> </div> </header> `;
}, "/Users/manuelpaez/Programacion/Astro/podcast-care/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/manuelpaez/Programacion/Astro/podcast-care/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const client = new Client({
    url: "https://clubdealtorendimientoempresarial.com/graphql",
    exchanges: [cacheExchange, fetchExchange]
  });
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Provider", Provider, { "value": client }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </body></html>`;
}, "/Users/manuelpaez/Programacion/Astro/podcast-care/src/layouts/Layout.astro", void 0);

async function getPodcastWordpressGraphQL() {
  const token = "PEOn iQck NZ5w LLNw 4Ix9 QCLm";
  const usuario = "expacioweb";
  const response = await fetch("https://clubdealtorendimientoempresarial.com/graphql", {
    method: "post",
    headers: {
      "Authorization": "Basic " + btoa(usuario + ":" + token),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `{
                podcasts {
                nodes {
                  id
                  title
                  content
                  featuredImage {
                    node {
                      mediaItemUrl
                    }
                  }
                }
              }
            }
              `
    })
  });
  const { data } = await response.json();
  return data;
}
async function getPodcastWordpressRutasID() {
  const token = "PEOn iQck NZ5w LLNw 4Ix9 QCLm";
  const usuario = "expacioweb";
  const response = await fetch("https://clubdealtorendimientoempresarial.com/graphql", {
    method: "POST",
    headers: {
      "Authorization": "Basic " + btoa(usuario + ":" + token),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `{
          podcasts {
          nodes {
            id
          }
        }
      }
        `
    })
  });
  const { data } = await response.json();
  return data;
}
async function getPodcastWordpressID(id) {
  const token = "PEOn iQck NZ5w LLNw 4Ix9 QCLm";
  const usuario = "expacioweb";
  const response = await fetch("https://clubdealtorendimientoempresarial.com/graphql", {
    method: "POST",
    headers: {
      "Authorization": "Basic " + btoa(usuario + ":" + token),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `{
          podcast(id: "${id}") {
            id
            title
            content
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            cptPodcasts {
              amazonMusic
              anchorPodcast
              apartadoContenido
              applePodcast
              googlePodcast
              ivoox
              spotifyPodcast
            }
          }
        }
        `
    })
  });
  const { data } = await response.json();
  return data;
}

const $$Astro$1 = createAstro();
const $$Plataformas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Plataformas;
  const { apple, amazon, spotify, google } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="plataformas-podcast" data-astro-cid-t2hdcwfc> <div class="plat-podcast" data-astro-cid-t2hdcwfc> <a target="_blank"${addAttribute(spotify, "href")} data-astro-cid-t2hdcwfc><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-spotify" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-t2hdcwfc><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-t2hdcwfc></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" data-astro-cid-t2hdcwfc></path><path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" data-astro-cid-t2hdcwfc></path><path d="M9 15c1.5 -1 4 -1 5 .5" data-astro-cid-t2hdcwfc></path><path d="M7 9c2 -1 6 -2 10 .5" data-astro-cid-t2hdcwfc></path></svg>Escuchar en Spotify </a> </div> <div class="plat-podcast" data-astro-cid-t2hdcwfc> <a${addAttribute(amazon, "href")} data-astro-cid-t2hdcwfc><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-amazon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-t2hdcwfc><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-t2hdcwfc></path><path d="M17 12.5a15.198 15.198 0 0 1 -7.37 1.44a14.62 14.62 0 0 1 -6.63 -2.94" data-astro-cid-t2hdcwfc></path><path d="M19.5 15c.907 -1.411 1.451 -3.323 1.5 -5c-1.197 -.773 -2.577 -.935 -4 -1" data-astro-cid-t2hdcwfc></path></svg>Escuchar en Amazon Music </a> </div> <div class="plat-podcast" data-astro-cid-t2hdcwfc> <a${addAttribute(apple, "href")} data-astro-cid-t2hdcwfc><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-apple-podcast" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-t2hdcwfc><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-t2hdcwfc></path><path d="M18.364 18.364a9 9 0 1 0 -12.728 0" data-astro-cid-t2hdcwfc></path><path d="M11.766 22h.468a2 2 0 0 0 1.985 -1.752l.5 -4a2 2 0 0 0 -1.985 -2.248h-1.468a2 2 0 0 0 -1.985 2.248l.5 4a2 2 0 0 0 1.985 1.752z" data-astro-cid-t2hdcwfc></path><path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" data-astro-cid-t2hdcwfc></path></svg>Escuchar en Apple Podcast</a> </div> <div class="plat-podcast" data-astro-cid-t2hdcwfc> <a${addAttribute(google, "href")} data-astro-cid-t2hdcwfc><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-google" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-t2hdcwfc><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-t2hdcwfc></path><path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z" data-astro-cid-t2hdcwfc></path></svg>Escuchar en Google Podcast</a> </div> </div> `;
}, "/Users/manuelpaez/Programacion/Astro/podcast-care/src/components/Plataformas.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const data = await getPodcastWordpressRutasID();
  return data.podcasts.nodes.map((podcast) => ({
    params: { id: podcast.id }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const data = await getPodcastWordpressID(id);
  let imagen = data.podcast.featuredImage.node.mediaItemUrl;
  const podcast = data.podcast;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Podcast CARE", "data-astro-cid-4qveipgi": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-4qveipgi> <article data-astro-cid-4qveipgi> <div id="contenido-podcast" data-astro-cid-4qveipgi> <div class="left-podcast" data-astro-cid-4qveipgi> <img${addAttribute(imagen, "src")} data-astro-cid-4qveipgi> <p data-astro-cid-4qveipgi><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-playlist" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-4qveipgi><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-4qveipgi></path><path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" data-astro-cid-4qveipgi></path><path d="M17 17v-13h4" data-astro-cid-4qveipgi></path><path d="M13 5h-10" data-astro-cid-4qveipgi></path><path d="M3 9l10 0" data-astro-cid-4qveipgi></path><path d="M9 13h-6" data-astro-cid-4qveipgi></path></svg>Escuchalo donde quieras</p> <div data-astro-cid-4qveipgi> ${renderComponent($$result2, "PlataformasAstro", $$Plataformas, { "spotify": podcast.cptPodcasts.spotifyPodcast, "amazon": podcast.cptPodcasts.amazonMusic, "google": podcast.cptPodcasts.googlePodcast, "apple": podcast.cptPodcasts.applePodcast, "data-astro-cid-4qveipgi": true })} </div> </div> <div class="right-podcast" data-astro-cid-4qveipgi> <h1 data-astro-cid-4qveipgi>${podcast.title}</h1> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(podcast.cptPodcasts.apartadoContenido)}` })} <div class="content-podcast" data-astro-cid-4qveipgi> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(data.podcast.content)}` })} </div> </div> </div> </article> </main> ` })} `;
}, "/Users/manuelpaez/Programacion/Astro/podcast-care/src/pages/podcasts/[id].astro", void 0);

const $$file = "/Users/manuelpaez/Programacion/Astro/podcast-care/src/pages/podcasts/[id].astro";
const $$url = "/podcasts/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _id_ as _, getPodcastWordpressGraphQL as a, $$Image as b, getConfiguredImageService as g, imageConfig as i };
