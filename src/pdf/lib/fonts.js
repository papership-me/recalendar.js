function generateFontDefinition( font ) {
	const fontPath = `/fonts/${font}/${font}`;
	return {
		[ font ]: {
			family: font,
			fonts: [
				{ src: `${fontPath}-Regular.ttf` },
				{ src: `${fontPath}-Italic.ttf`, fontStyle: 'italic' },
				{ src: `${fontPath}-Bold.ttf`, fontWeight: 700 },
				{
					src: `${fontPath}-BoldItalic.ttf`,
					fontStyle: 'italic',
					fontWeight: 700,
				},
			],
		},
	};
}

const ARIMO = 'Arimo';
export const LATO = 'Lato';
const MONTSERRAT = 'Montserrat';
const SOURCE_SERIF_PRO = 'SourceSerifPro';
const KOPUB = 'KoPub Dotum';
const PRETENDARD = 'Pretendard';
export const AVAILABLE_FONTS = [ ARIMO, LATO, MONTSERRAT, SOURCE_SERIF_PRO, KOPUB, PRETENDARD ];

const FONT_DEFINITIONS = {
	...generateFontDefinition( ARIMO ),
	...generateFontDefinition( LATO ),
	...generateFontDefinition( MONTSERRAT ),
	...generateFontDefinition( SOURCE_SERIF_PRO ),
	...generateFontDefinition( KOPUB ),
	...generateFontDefinition( PRETENDARD ),
};

export function getFontDefinition( font ) {
	return FONT_DEFINITIONS[ font ] || FONT_DEFINITIONS[ LATO ];
}
