var updateZ = function ( token ) {
	var tokens = document.getElementsByClassName ( 'player' );
	for ( var i = 0; i < 4; i++ ) {
		tokens[i].style.zIndex = 5;
	}
	token.style.zIndex = 8;
}

var dragging = false;

var drag = function ( token ) {
	dragging = true;
	var board = document.getElementById ( 'board' );
	window.onmousemove = function () {
		if ( dragging ) {
			topPx = event.pageY - board.offsetTop - board.clientTop - token.offsetHeight / 2;
			leftPx = event.pageX - board.offsetLeft - board.clientLeft - token.offsetWidth / 2;
			token.style.top = topPx * 100 / board.offsetHeight + '%';
			token.style.left = leftPx * 100 / board.offsetWidth + '%';
		}
		
		if ( token.offsetLeft < - token.offsetWidth / 4 ) {
			token.style.left = ( - token.offsetWidth / 4 ) * 100 / board.offsetWidth + '%';
		}
		if ( token.offsetLeft > board.offsetWidth - 3 * token.offsetWidth / 4 ) {
			token.style.left = ( board.offsetWidth - 3 * token.offsetWidth / 4 ) * 100 / board.offsetWidth + '%';
		}
		if ( token.offsetTop < - token.offsetHeight / 4 ) {
			 token.style.top = ( - token.offsetHeight / 4 ) * 100 / board.offsetHeight + '%';
		}
		if ( token.offsetTop > board.offsetHeight - 3 * token.offsetHeight / 4 ) {
			token.style.top = ( board.offsetHeight - 3 * token.offsetHeight / 4 ) * 100 / board.offsetHeight + '%';
		}
	}
	window.ontouchmove = function () {
		if ( dragging ) {
			topPx = event.targetTouches[0].pageY - board.offsetTop - board.clientTop - token.offsetHeight / 2;
			leftPx = event.targetTouches[0].pageX - board.offsetLeft - board.clientLeft - token.offsetWidth / 2;
			token.style.top = topPx * 100 / board.offsetHeight + '%';
			token.style.left = leftPx * 100 / board.offsetWidth + '%';
		}
		
		if ( token.offsetLeft < - token.offsetWidth / 4 ) {
			token.style.left = ( - token.offsetWidth / 4 ) * 100 / board.offsetWidth + '%';
		}
		if ( token.offsetLeft > board.offsetWidth - 3 * token.offsetWidth / 4 ) {
			token.style.left = ( board.offsetWidth - 3 * token.offsetWidth / 4 ) * 100 / board.offsetWidth + '%';
		}
		if ( token.offsetTop < - token.offsetHeight / 4 ) {
			 token.style.top = ( - token.offsetHeight / 4 ) * 100 / board.offsetHeight + '%';
		}
		if ( token.offsetTop > board.offsetHeight - 3 * token.offsetHeight / 4 ) {
			token.style.top = ( board.offsetHeight - 3 * token.offsetHeight / 4 ) * 100 / board.offsetHeight + '%';
		}
	}
}

window.onmouseup = function () {
	dragging = false;
	return;
}

window.ontouchend = function () {
	dragging = false;
	return;
}

var hideStartPage = function () {
	document.getElementById ( 'startPage' ).style.right = '300%';
	document.getElementById ( 'money' ).value = null;
	return;
}

var toggleBank = function () {
	if ( document.getElementById ( 'bank' ).style.right == '300%' ) {
		document.getElementById ( 'bank' ).style.right = '0%';
		return;
	}
	document.getElementById ( 'bank' ).style.right = '300%';
	document.getElementById ( 'money' ).value = null;
	return;
}

var buildings = [ '', 'one-house', 'two-houses','three-houses','four-houses', 'hotel' ];

var rotateBuilding = function ( street ) {
	state = street.dataset.state;
	state++;
	if ( state > 5 ) {
		state = 0;
	}
	street.dataset.state = state;
	street.getElementsByTagName ( 'span' )[0].className = 'buildings ' + buildings[state];
}

var setPlayers = function ( num ) {
	switch ( num.value ) {
		case '3':
			document.getElementById ( 'player3' ).style.display = 'initial';
			document.getElementById ( 'player4' ).style.display = 'none';
			document.getElementById ( 'p3bank' ).style.display = 'table-row';
			document.getElementById ( 'p4bank' ).style.display = 'none';
			break;
		case '4':
			document.getElementById ( 'player3' ).style.display = 'initial';
			document.getElementById ( 'player4' ).style.display = 'initial';
			document.getElementById ( 'p3bank' ).style.display = 'table-row';
			document.getElementById ( 'p4bank' ).style.display = 'table-row';
			break;
		default:
			document.getElementById ( 'player3' ).style.display = 'none';
			document.getElementById ( 'player4' ).style.display = 'none';
			document.getElementById ( 'p3bank' ).style.display = 'none';
			document.getElementById ( 'p4bank' ).style.display = 'none';
		
	}
	return;
}

var passGo = function () {
	var players = document.getElementsByName ( 'second' );
	var player = '';
	for ( var i = 0; i < 4; i++ ) {
		if ( players[i].checked ) {
			player = players[i].value;
		}
	}
	if ( player == '' ) {
		return;
	}
	document.getElementById ( player ).value =  Number ( document.getElementById ( player ).value ) + 200;
	document.getElementById ( 'p0balance' ).value = 150000;
}

var transfer = function () {
	var players1 = document.getElementsByName ( 'first' );
	var players2 = document.getElementsByName ( 'second' );
	var player1 = '';
	var player2 = '';
	for ( var i = 0; i < 4; i++ ) {
		if ( players1[i].checked ) {
			player1 = players1[i].value;
		}
		if ( players2[i].checked ) {
			player2 = players2[i].value;
		}
	}
	if ( player1 == '' || player2 == '' ) {
		return;
	}
	document.getElementById ( player2 ).value = Number ( document.getElementById ( player2 ).value ) + Number ( document.getElementById ( 'money' ).value );
	document.getElementById ( player1 ).value = Number ( document.getElementById ( player1 ).value ) - Number ( document.getElementById ( 'money' ).value );
	document.getElementById ( 'p0balance' ).value = 150000;
}