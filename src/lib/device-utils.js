export const REMARKABLE = 'ReMarkable 1 & 2';
const REMARKABLE_PAPER_PRO = 'ReMarkable Paper Pro';
const SUPERNOTE_A5_X = 'Supernote A5 X';
const ONYX_BOOX_GO_6_GEN_II = 'Onyx Boox Go 6 Gen II';
export const CUSTOM = 'Custom';

export const AVAILABLE_DEVICES = [
	REMARKABLE,
	REMARKABLE_PAPER_PRO,
	SUPERNOTE_A5_X,
	ONYX_BOOX_GO_6_GEN_II,
	CUSTOM,
];

export function getPageProperties( device ) {
	switch ( device ) {
		case REMARKABLE_PAPER_PRO:
			return {
				dpi: 229,
				pageSize: [ 1620, 2160 ],
			};

		case ONYX_BOOX_GO_6_GEN_II:
			return {
				dpi: 200,
				pageSize: [ 1072, 1400 ],
			};

		case SUPERNOTE_A5_X:
		case REMARKABLE:
		default:
			return {
				dpi: 226,
				pageSize: [ 1404, 1872 ],
			};
	}
}
