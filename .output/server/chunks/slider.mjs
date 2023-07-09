import { defineEventHandler } from 'h3';

const slider$1 = [
	{
		design: "ilDes",
		imagePath: "/banner/ild-1.png"
	},
	{
		design: "paGr",
		imagePath: "/banner/pg-1.jpg"
	},
	{
		design: "taSk",
		imagePath: "/banner/tsl-1.jpg"
	},
	{
		design: "ilDes",
		imagePath: "/banner/ild-2.png"
	},
	{
		design: "paGr",
		imagePath: "/banner/pg-2.jpg"
	},
	{
		design: "taSk",
		imagePath: "/banner/tsl-2.png"
	},
	{
		design: "ilDes",
		imagePath: "/banner/ild-3.png"
	},
	{
		design: "paGr",
		imagePath: "/banner/pg-3.jpg"
	},
	{
		design: "taSk",
		imagePath: "/banner/tsl-3.jpg"
	}
];

const slider = defineEventHandler(() => {
  return slider$1;
});

export { slider as default };
//# sourceMappingURL=slider.mjs.map
