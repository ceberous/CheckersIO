function Checkersboard(containerId, config) {
	
	'use strict';

	// CSS stuff , WILL REMOVE LATER
	// ==============================================
		Checkersboard.ANIMATION = {
			fadeInTime: 1000,
			fadeOutTime: 1000
		};
		
		Checkersboard.CSS_PREFIX = 'checkers_';
		Checkersboard.CSS = {
			pathSeparator: '_',
			board: {
				id: Checkersboard.CSS_PREFIX +  'board',
				className: Checkersboard.CSS_PREFIX +  'board'
			},
			square: {
				className: Checkersboard.CSS_PREFIX + 'square',
				lastColumn: { className: Checkersboard.CSS_PREFIX + 'square_last_column'},
				idPrefix: Checkersboard.CSS_PREFIX + 'square',
				dark: { className: Checkersboard.CSS_PREFIX + 'square_dark' },
				light: { className: Checkersboard.CSS_PREFIX + 'square_light' },
				createClassName: function (index) {
					return ' ' + (((index + CheckersUtils.convertIndexToRow(index)) % 2 === 0) ?
										Checkersboard.CSS.square.dark.className + ' show_id' : Checkersboard.CSS.square.light.className);
				},
				selected: { className: Checkersboard.CSS_PREFIX + 'square_selected'},
				validMove: { className: Checkersboard.CSS_PREFIX + 'square_valid_move' }
			},
			/*
			player: {
				black: { className: Checkersboard.CSS_PREFIX + 'player_' + CheckersUtils.PLAYER.black.className },
				white: { className: Checkersboard.CSS_PREFIX + 'player_' + CheckersUtils.PLAYER.white.className },
				createClassName: function (player) {
					return (player === 'white') ?
							Checkersboard.CSS.player.white.className :
							Checkersboard.CSS.player.black.className;
				}
			},
			*/
			piece: {
				idPrefix: Checkersboard.CSS_PREFIX + 'piece',
				className: Checkersboard.CSS_PREFIX + 'piece',
				createClassName: function (piece) {
					return Checkersboard.CSS.piece.className + '_' + piece;
				},
				none: { className: Checkersboard.CSS_PREFIX + 'piece_none' }
			},
			label: {
				className: Checkersboard.CSS_PREFIX +  'label',
				hidden: { className: Checkersboard.CSS_PREFIX +  'label_hidden' },
				row: {
					className: Checkersboard.CSS_PREFIX +  'label_row',
					reversed: {	
						className: Checkersboard.CSS_PREFIX +  'label_row_reversed'
					}
				},
				column: {
					className: Checkersboard.CSS_PREFIX +  'label_column',
					reversed: { className: Checkersboard.CSS_PREFIX +  'label_column_reversed' }
				}
			},
			style: {
				id: Checkersboard.CSS_PREFIX + 'style'
			}
			
		};	
	// ==============================================

	// HELPER METHODS
	// ==============================================
		var cssGetSquareUniqueId = function (index) {
			/*
			return cssGetUniquePrefix() + Checkersboard.CSS.square.idPrefix + '_' +
				(_orientation === CheckersUtils.ORIENTATION.white ? index : 63 - index);
			*/
			return Checkersboard.CSS.square.idPrefix + '_' + index;
		};
	// ==============================================


	// Draw the Board
	var initDOM = function (containerId) {
		var i,
			html = '',
			id,
			className;
		
		var _containerSelector = '#' + containerId;
		if (!$(_containerSelector)) { throw new Error("ContainerId not Provided"); }
				
		
		// Board div
		// ==============================================
			html += '<div id="mainBoard"' + 'class="' +
				Checkersboard.CSS.board.className + '">';
			for (i = 0; i < 64; i++) {

				// Square div
				id = cssGetSquareUniqueId(i);
				className = Checkersboard.CSS.square.className;
				className += ' ' + Checkersboard.CSS.square.createClassName(i);
				html += '<div id="' + id + '" class="' + className + '">';
				html += '</div>';
			}
			html += '</div>';
		// ==============================================
		
		$(_containerSelector).html(html);
		$(_containerSelector).css('display', 'inline-block');
	};

	initDOM(containerId);


	// Load the Pieces
	var initializePieces = function () {

		var redPieces = [1,3,5,7,8,10,12,14,17,19,21,23];
		var bluePieces = [40,42,44,46,49,51,53,55,56,58,60,62];


		for (var i=0; i < redPieces.length; i++){
			$('#checkers_square_' + redPieces[i]).append('<div class="checkers_piece_red" </div>');
		}		

		for (var i=0; i < bluePieces.length; i++){
			$('#checkers_square_' + bluePieces[i]).append('<div class="checkers_piece_blue" </div>');
		}	

	};

	initializePieces();	


}


/*
----------------------------------------------------------------------------
----------------------------------------------------------------------------

CheckersUtils

----------------------------------------------------------------------------
----------------------------------------------------------------------------
*/


(function () {
	'use strict';
	
	var CheckersUtils = {};

	
	

	CheckersUtils.convertIndexToRow = function (index) {
		return 7 - Math.floor(index / 8);
	};

	
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports.CheckersUtils = CheckersUtils;
	} else {
		window.CheckersUtils = CheckersUtils;
	}
	
}());
