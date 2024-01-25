import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_KruL9ryJ.mjs';
import 'kleur/colors';
import 'clsx';
import { b as $$Image, $ as $$Layout } from './_id__wuTGp1x2.mjs';
/* empty css                             */

const imagen = new Proxy({"src":"/_astro/que-es-care.1MDhnVCB.png","width":631,"height":413,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/manuelpaez/Programacion/Astro/podcast-care/public/que-es-care.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Nosotros = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Nosotros;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Podcast CARE", "data-astro-cid-noeej2nj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-noeej2nj> <div id="content-about" data-astro-cid-noeej2nj> <div data-astro-cid-noeej2nj> <h1 data-astro-cid-noeej2nj>Qué es <strong data-astro-cid-noeej2nj>CARE</strong></h1> <p data-astro-cid-noeej2nj>En CARE vas a encontrar ese lugar exclusivo en el que conocer a empresarios, aprender de ellos, formarte con expertos en áreas que te ayudan a sacar más partido a tu negocio, obtener mayor visibilidad de lo que haces y establecer relaciones de calidad que hagan que las ventas de tu negocio aumenten.</p> <p data-astro-cid-noeej2nj>Pero sobre todo estarás en un Club de PERSONAS, donde lo más importante son las relaciones personales y profesionales, por delante de las transacciones comerciales.</p> <p data-astro-cid-noeej2nj>En un ambiente de confianza y seguridad, las ventas llegarán de manera natural. </p> <p data-astro-cid-noeej2nj>No es un Club comercial, y el acceso es exclusivo a través de una entrevista personal con las personas que dirigen el Club.</p> </div> <div data-astro-cid-noeej2nj> ${renderComponent($$result2, "Image", $$Image, { "src": imagen, "alt": "Qu\xE9 es Care", "data-astro-cid-noeej2nj": true })} </div> </div> </main> ` })} `;
}, "/Users/manuelpaez/Programacion/Astro/podcast-care/src/pages/nosotros.astro", void 0);

const $$file = "/Users/manuelpaez/Programacion/Astro/podcast-care/src/pages/nosotros.astro";
const $$url = "/nosotros";

export { $$Nosotros as default, $$file as file, $$url as url };
