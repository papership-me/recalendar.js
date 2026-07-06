import { StyleSheet, Text, View } from '@react-pdf/renderer';
import PropTypes from 'prop-types';
import React from 'react';

import {
	ITINERARY_ITEM,
	ITINERARY_LINES,
	normalizeItineraryItem,
} from '~/lib/itinerary-utils';

class Itinerary extends React.PureComponent {
	styles = StyleSheet.create( {
		line: {
			borderBottom: '1 solid #AAA',
			fontSize: 12,
			fontWeight: 'bold',
			height: 20,
			minHeight: 20,
			padding: '2 0 0 5',
		},
		blankLine: {
			borderBottom: '1 solid #AAA',
			height: 20,
			minHeight: 20,
		},
	} );

	renderItineraryItem = ( item, index ) => {
		const { type, value, spacing } = normalizeItineraryItem( item );
		switch ( type ) {
			case ITINERARY_ITEM:
				return this.renderItem( value, index );

			case ITINERARY_LINES:
			default:
				return this.renderLines( value, spacing, index );
		}
	};

	renderItem( text, index ) {
		return (
			<Text key={ index } style={ this.styles.line }>
				{text}
			</Text>
		);
	}

	renderLines( count, spacing, groupIndex ) {
		const lines = [];
		const lineStyle = {
			...this.styles.blankLine,
			height: spacing,
			minHeight: spacing,
		};
		for ( let i = 0; i < count; i++ ) {
			lines.push(
				<View key={ groupIndex + '-' + i } style={ lineStyle }></View>,
			);
		}

		return lines;
	}

	render() {
		return <>{this.props.items.map( this.renderItineraryItem )}</>;
	}
}

Itinerary.propTypes = {
	items: PropTypes.array.isRequired,
};

export default Itinerary;
