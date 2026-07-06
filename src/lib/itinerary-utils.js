export const ITINERARY_ITEM = 'item';
export const ITINERARY_LINES = 'lines';
export const ITINERARY_NEW_PAGE = 'new_page';
export const DEFAULT_ITINERARY_LINE_SPACING = 20;

export function normalizeItineraryItem( item ) {
	if ( item.type !== ITINERARY_LINES ) {
		return item;
	}

	const spacing = Number( item.spacing );
	return {
		...item,
		spacing:
			Number.isFinite( spacing ) && spacing > 0
				? spacing
				: DEFAULT_ITINERARY_LINE_SPACING,
	};
}
