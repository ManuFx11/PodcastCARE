import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_KruL9ryJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './_id__wuTGp1x2.mjs';
/* empty css                                 */
/* empty css                                 */

const cabeceraFondo = new Proxy({"src":"/_astro/Black-Elegant-Workout-Tips-YouTube-Channel-Art-1.Ahu1dhBG.webp","width":2560,"height":1440,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/manuelpaez/Programacion/Astro/podcast-care/public/Black-Elegant-Workout-Tips-YouTube-Channel-Art-1.webp";
							}
							
							return target[name];
						}
					});

const cabeceraFran = new Proxy({"src":"/_astro/FranciscoRubio-CARE-1.L6obZKPY.webp","width":421,"height":497,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/manuelpaez/Programacion/Astro/podcast-care/public/FranciscoRubio-CARE-1.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$CareExperts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CareExperts;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CARE Experts", "data-astro-cid-asaqytnj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="banner-podcast"${addAttribute(`background-image:url(${cabeceraFondo.src});`, "style")} class="bottom-background" data-astro-cid-asaqytnj> <main data-astro-cid-asaqytnj> <main data-astro-cid-asaqytnj> <div id="flex-care-experts" data-astro-cid-asaqytnj> <div data-astro-cid-asaqytnj> <h1 data-astro-cid-asaqytnj><strong style="color:#cba036;" data-astro-cid-asaqytnj>CARE</strong> Experts</h1> <p data-astro-cid-asaqytnj>En el Club de Alto Rendimiento Empresarial contamos con profesionales destacados en sus sectores que te darán a conocer, a través de <strong data-astro-cid-asaqytnj>masterclass</strong>, todo lo necesario para que avances con tu empresa</p> <p data-astro-cid-asaqytnj><strong data-astro-cid-asaqytnj>Importante:</strong> no son profesores, <strong data-astro-cid-asaqytnj> son empresarios y empresarias </strong>que ya han resuelto muchos de los problemas que te vas a encontrar en tu día a día.</p> <a class="btn-dorado" href="#" data-astro-cid-asaqytnj>Ver masterclass (solo para suscriptores disponible próximamente)</a> </div> <picture data-astro-cid-asaqytnj> <img${addAttribute(cabeceraFran.src, "src")} title="Francisco Rubio - CARE Experts" data-astro-cid-asaqytnj> </picture> </div> </main> </main> </div> <main data-astro-cid-asaqytnj> <center data-astro-cid-asaqytnj><h1 class="cabecera-titulo" data-astro-cid-asaqytnj>Nuestros <span class="text-gradient" data-astro-cid-asaqytnj>Expertos</span></h1></center> </main> ` })} `;
}, "/Users/manuelpaez/Programacion/Astro/podcast-care/src/pages/care-experts.astro", void 0);

const $$file = "/Users/manuelpaez/Programacion/Astro/podcast-care/src/pages/care-experts.astro";
const $$url = "/care-experts";

export { $$CareExperts as default, $$file as file, $$url as url };
