import { defineEventHandler } from 'h3';

const sections = [
	{
		path: "/gallery/illustration-and-design",
		title: "Иллюстрации и дизайн",
		design: "ilDes"
	},
	{
		path: "/gallery/painting-and-graphics",
		title: "Живопись и графика",
		design: "paGr"
	},
	{
		path: "/gallery/tattoo-sketch-and-letters",
		title: "Тату скетчи и надписи",
		design: "taSk"
	}
];

const galleryParams = defineEventHandler(() => {
  const galleryPaths = sections.map((param) => param.path);
  return {
    sections,
    galleryPaths
  };
});

export { galleryParams as default };
//# sourceMappingURL=gallery-params.mjs.map
