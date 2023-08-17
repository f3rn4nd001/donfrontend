export const environment = {
    production: true,
//    direcurl:"http://192.168.1.67:8000/",
    direcurl:'http://localhost:8000/',
    header :{
        token : localStorage.getItem('logintoken'),
        ecodCorreo : localStorage.getItem('ecodCorreo')
    }
  };
  