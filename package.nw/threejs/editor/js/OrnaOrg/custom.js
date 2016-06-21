
var win = nw.Window.get();

//win.enterKioskMode();
//win.leaveKioskMode();

document.addEventListener( 'keydown', function ( event ) {

				switch ( event.keyCode ) {

					case 82: // Register Ctrl-R for Reload

					 if ( event.ctrlKey ) {

							win.reload();

						}
						
						break;
                        
                        case 73: // Ctrl-Shift-I for DevTools

						if ( event.ctrlKey && event.shiftKey ) {

							win.showDevTools();

						} 
                        break;
						
				}

			}, false );
