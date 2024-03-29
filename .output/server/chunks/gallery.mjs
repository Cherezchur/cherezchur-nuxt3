import { defineEventHandler } from 'h3';

const gallery$1 = {
	"illustration-and-design": {
	path: "/gallery/illustration-and-design",
	title: "Иллюстрации и дизайн",
	design: "ilDes",
	arts: {
		"cover-for-distorshn-li-and-harly-hantom": {
			title: "Обложка к альбому 'Distorshn Li and Harly Hantom'",
			path: "illustration-and-design/cover-for-distorshn-li-and-harly-hantom",
			description: "В центре композиции надпись в wild стиле. Cover создан для реп альбома. Послушать можно тут - https://vk.com/cherezzchur",
			imagesPaths: [
				"distorshn-li-and-harly-hantom.png",
				"distorshn-li-and-harly-hantom-2.jpg",
				"distorshn-li-and-harly-hantom-3.jpg",
				"distorshn-li-and-harly-hantom-4.jpg"
			],
			isLikes: false
		},
		"face-of-war": {
			title: "Лицо войны",
			path: "illustration-and-design/face-of-war",
			description: "Работа передает суть войны, которая выражена в кровавых слезах женщины. Выполнена в векторном масштабируемом формате svg.",
			imagesPaths: [
				"face-of-war.svg",
				"face-of-war-1.svg"
			],
			isLikes: false
		},
		"cover-ne-nado": {
			title: "Обложка для сингла 'Не надо'",
			path: "illustration-and-design/cover-ne-nado",
			description: "Обложка для сингла 'Не надо' - лирическая реп композиция",
			imagesPaths: [
				"cover-ne-nado.jpg"
			],
			isLikes: false
		},
		fck: {
			title: "F*ck",
			path: "illustration-and-design/fck",
			description: "Работа выражает юношеское беззаботное правило все посылать в одно место. Выполнена в векторном масштабируемом формате svg",
			imagesPaths: [
				"fck.svg",
				"fck-1.svg"
			],
			isLikes: false
		},
		"girls-with-smoke": {
			title: "Девушка и дым",
			path: "illustration-and-design/girls-with-smoke",
			description: "Иллюстрация изображает девушку, повернутую к нам в пол оборота. Она заигрывает и окутывая нас дымом своих страстей. Выполнена в векторном масштабируемом формате svg",
			imagesPaths: [
				"girls-with-smoke.svg"
			],
			isLikes: false
		},
		"itape1-cover": {
			title: "Обложка к альбому 'Itape1'",
			path: "illustration-and-design/itape1-cover",
			description: "Обложка к альбому 'Itape1' для групы ВИДWTF. Работа выполнена в технике наложения цветов, когда поэтапно один за другим усиливается один тон цвета и в итоге они накладываются друг на друга",
			imagesPaths: [
				"itape1-cover.png",
				"itape1-cover-1.png",
				"itape1-cover-2.png",
				"itape1-cover-3.png",
				"itape1-cover-4.png",
				"itape1-cover-5.png",
				"itape1-cover-6.png"
			],
			isLikes: false
		},
		"livename-art": {
			title: "Постер-иллюстрация LIVENAME",
			path: "illustration-and-design/livename-art",
			description: "Постер-иллюстрация для реп артиста LIVENAME. Выполнена в векторном масштабируемом формате svg",
			imagesPaths: [
				"livename-art.svg"
			],
			isLikes: false
		},
		"mother-portrait": {
			title: "Портрет матери",
			path: "illustration-and-design/mother-portrait",
			description: "На заказе изображена мать заказчицы. Выполнена в векторном масштабируемом формате svg. Цвета были переведены в формат CMYK для дальнейшей печати работы",
			imagesPaths: [
				"mother-portrait.svg",
				"mother-portrait-1.svg",
				"mother-portrait-2.svg"
			],
			isLikes: false
		}
	}
},
	"painting-and-graphics": {
	path: "/gallery/painting-and-graphics",
	title: "Живопись и графика",
	design: "paGr",
	arts: {
		"cover-for-distorshn-li-and-harly-hantom": {
			title: "Обложка к альбому 'Distorshn Li and Harly Hantom'",
			path: "illustration-and-design/cover-for-distorshn-li-and-harly-hantom",
			description: "В центре композиции надпись в wild стиле. Cover создан для реп альбома. Послушать можно тут - https://vk.com/cherezzchur",
			imagesPaths: [
				"distorshn-li-and-harly-hantom.png",
				"distorshn-li-and-harly-hantom-2.jpg",
				"distorshn-li-and-harly-hantom-3.jpg",
				"distorshn-li-and-harly-hantom-4.jpg"
			],
			isLikes: false
		}
	}
},
	"tattoo-sketch-and-letters": {
	path: "/gallery/tattoo-sketch-and-letters",
	title: "Тату скетчи и надписи",
	design: "taSk"
}
};

const gallery = defineEventHandler(() => {
  return gallery$1;
});

export { gallery as default };
//# sourceMappingURL=gallery.mjs.map
