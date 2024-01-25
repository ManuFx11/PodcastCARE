import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent } from '../astro_KruL9ryJ.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from './_id__wuTGp1x2.mjs';

const $$Astro = createAstro();
const $$SobreElClub = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SobreElClub;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sobre el Club" })}`;
}, "/Users/manuelpaez/Programacion/Astro/podcast-care/src/pages/sobre-el-club.astro", void 0);

const $$file = "/Users/manuelpaez/Programacion/Astro/podcast-care/src/pages/sobre-el-club.astro";
const $$url = "/sobre-el-club";

export { $$SobreElClub as default, $$file as file, $$url as url };
