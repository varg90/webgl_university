document.body.onkeydown = function move(event){
                var movementSpeed = 5;
                
                var SPACE_KEY_CODE = 32;
                var CTRL_KEY_CODE = 17;
                var Q_KEY_CODE = 81;
                var W_KEY_CODE = 87;
                var E_KEY_CODE = 69;
                var A_KEY_CODE = 65;
                var S_KEY_CODE = 83;
                var D_KEY_CODE = 68;
                
                switch (event.keyCode){ 
                    case S_KEY_CODE : 
                        camera.position.z += movementSpeed * Math.cos (camera.rotation.y); 
                        camera.position.x += movementSpeed * Math.sin (camera.rotation.y); break;
                    case W_KEY_CODE : 
                        camera.position.z -= movementSpeed * Math.cos (camera.rotation.y); 
                        camera.position.x -= movementSpeed * Math.sin (camera.rotation.y); break;
                    case D_KEY_CODE : 
                        camera.position.x += movementSpeed * Math.sin (camera.rotation.y + Math.PI/2); 
                        camera.position.z += movementSpeed * Math.cos (camera.rotation.y + Math.PI/2); break;
                    case A_KEY_CODE : 
                        camera.position.x -= movementSpeed * Math.sin (camera.rotation.y + Math.PI/2); 
                        camera.position.z -= movementSpeed * Math.cos (camera.rotation.y + Math.PI/2); break;
                    case Q_KEY_CODE : 
                        camera.rotation.y += 0.05; break;
                    case E_KEY_CODE : 
                        camera.rotation.y -= 0.05; break;
                    case SPACE_KEY_CODE : 
                        camera.position.y += movementSpeed; break;
                    case CTRL_KEY_CODE : 
                        camera.position.y -= movementSpeed; break;
                }
            }
