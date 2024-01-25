import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_KruL9ryJ.mjs';
import 'kleur/colors';
import { a as getPodcastWordpressGraphQL, $ as $$Layout } from './_id__wuTGp1x2.mjs';

const cabeceraFondo = new Proxy({"src":"/_astro/PodcastsCare.7q4iSj08.webp","width":1600,"height":421,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/manuelpaez/Programacion/Astro/podcast-care/public/PodcastsCare.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const data = await getPodcastWordpressGraphQL();
  function removerEtiquetasHTML(params) {
    let valor = params.replace(/<[^>]*>/g, "");
    return valor.slice(0, 120);
  }
  console.log(cabeceraFondo);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Podcast CARE" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div id="banner-podcast"${addAttribute(`background-image:url(${cabeceraFondo.src});`, "style")}> <main> <div> <h1><strong>Podcast</strong> CARE</h1> <p>Bienvenido/a al podcast del Club de Alto rendimiento empresarial. Un podcast en el que te contaré todo lo que a mi me hubiese gustado que me contaran cuando comencé con mi empresa.</p> <p>Cada semana hablaremos sobre <strong>marketing digital, estrategias de negocio, ventas, productividad, inversiones </strong>, y todo aquello que necesitarás como emprendedor, o como empresario ya consolidado, para mejorar tu conocimiento y hacer mucho más rentable tu empresa.</p> <p> <strong>Escuchalo en las siguientes plataformas</strong></p> </div> </main> </div> <main> <center><h1 class="cabecera-titulo">Últimos <span class="text-gradient">Podcast</span></h1></center> <div id="listado-podcast"> ${data.podcasts.nodes.map((item) => {
    let imagen = item.featuredImage.node.mediaItemUrl;
    return renderTemplate`<div> <img${addAttribute(imagen, "src")} width="100%" height="270px" alt="Podcast"> <div class="item-podcast"> <h3>${item.title}</h3> <hr> <p>${removerEtiquetasHTML(item.content)}</p> <a${addAttribute(`podcasts/${item.id}`, "href")}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 4v16l13 -8z"></path></svg> Reproducir</a> </div> </div>`;
  })} </div> </main> ` })}`;
}, "/Users/manuelpaez/Programacion/Astro/podcast-care/src/pages/index.astro", void 0);

const $$file = "/Users/manuelpaez/Programacion/Astro/podcast-care/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
