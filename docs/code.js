google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {


    
  var a = 'EN CONTRA';
  var b = 'A FAVOR';
  var c = 'ABSTENCIÓN';
  var d = 'NO VOTÓ';
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'From');
  data.addColumn('string', 'To');
  data.addColumn('number', 'Weight');
  data.addRows([

  [ 'EDUARDO GEOVANNI ACATE CORONEL  ',b, 17 ],
  [ 'HUMBERTO ACUÑA PERALTA  ',b, 17 ],
  [ 'WALTER YONNI ASCONA CALDERON  ',b, 17 ],
  [ 'WALTER BENAVIDES GAVIDIA  ',b, 17 ],
  [ 'IRENE CARCAUSTO HUANCA  ',b, 17 ],
  [ 'OMAR KARIM CHEHADE MOYA  ',b, 17 ],
  [ 'CESAR AUGUSTO COMBINA SALVATIERRA  ',b, 17 ],
  [ 'JULIO FREDY CONDORI FLORES  ',b, 17 ],
  [ 'MOISES GONZALEZ CRUZ  ',b, 17 ],
  [ 'ALEXANDER HIDALGO ZAMALLOA  ',b, 17 ],
  [ 'FERNANDO MELENDEZ CELIS  ',b, 17 ],
  [ 'OMAR MERINO LOPEZ  ',b, 17 ],
  [ 'MARIA DEL CARMEN OMONTE DURAND  ',b, 17 ],
  [ 'JHOSEPT AMADO PEREZ MIMBELA  ',b, 17 ],
  [ 'LUSMILA PEREZ ESPIRITU  ',b, 17 ],
  [ 'NAPOLEON PUÑO LECARNAQUE  ',b, 17 ],
  [ 'MARIO JAVIER QUISPE SUAREZ  ',b, 17 ],
  [ 'PERCI RIVAS OCEJO  ',b, 17 ],
  [ 'TANIA ROSALIA RODAS MALCA  ',b, 17 ],
  [ 'ROBERTINA SANTILLANA PAREDES  ',b, 17 ],
  [ 'LUIS ALBERTO VALDEZ FARIAS  ',b, 17 ],
  [ 'MARCO ANTONIO VERDE HEIDINGER  ',b, 17 ],

  [ 'MANUEL AGUILAR ZAMORA  ',a, 17 ],
  [ 'JESUS ORLANDO ARAPA ROQUE  ',b, 17 ],
  [ 'WILMER SOLIS BAJONERO OLIVAS  ',b, 17 ],
  [ 'RICARDO MIGUEL BURGA CHUQUIPIONDO  ',b, 17 ],
  [ 'ROLANDO CAMPOS VILLALOBOS  ',a, 17 ],
  [ 'KENYON EDUARDO DURAND BUSTAMANTE  ',b, 17 ],
  [ 'YESSY NELIDA FABIAN DIAZ  ',b, 17 ],
  [ 'PAUL GABRIEL GARCIA OVIEDO  ',b, 17 ],
  [ 'OTTO NAPOLEON GUIBOVICH ARTEAGA  ',b, 17 ],
  [ 'LEONARDO INGA SALES  ',b, 17 ],
  [ 'LESLYE CAROL LAZO VILLON  ',c, 17 ],
  [ 'FREDDY LLAULLI ROMERO  ',b, 17 ],
  [ 'MANUEL ARTURO MERINO DE LAMA  ',d, 17 ],
  [ 'ANTHONY RENSON NOVOA CRUZADO  ',b, 17 ],
  [ 'JUAN CARLOS OYOLA RODRIGUEZ  ',b, 17 ],
  [ 'ROSARIO PAREDES EYZAGUIRRE  ',b, 17 ],
  [ 'CARLOS ANDRES PEREZ OCHOA  ',b, 17 ],
  [ 'WALTER JESUS RIVERA GUERRA  ',b, 17 ],
  [ 'LUIS ANDRES ROEL ALVA  ',a, 17 ],
  [ 'ROLANDO RUBEN RUIZ PINEDO  ',b, 17 ],
  [ 'MONICA ELIZABETH SAAVEDRA OCHARAN  ',b, 17 ],
  [ 'FRANCO SALINAS LOPEZ  ',b, 17 ],
  [ 'LUIS CARLOS SIMEON HURTADO  ',b, 17 ],
  [ 'HANS TROYES DELGADO  ',c, 17 ],
  [ 'JORGE VASQUEZ BECERRA  ',a, 17 ],

  [ 'JOSE LUIS ANCALLE GUTIERREZ  ',b, 17 ],
  [ 'LENIN FERNANDO BAZAN VILLANUEVA  ',b, 17 ],
  [ 'LENIN ABRAHAM CHECCO CHAUCA  ',b, 17 ],
  [ 'CINDY ARLETTE CONTRERAS BAUTISTA  ',a, 17 ],
  [ 'CARLOS ENRIQUE FERNANDEZ CHACON  ',b, 17 ],
  [ 'ABSALON MONTOYA GUIVIN  ',b, 17 ],
  [ 'YVAN QUISPE APAZA  ',b, 17 ],
  [ 'ROCIO YOLANDA ANGELICA SILVA SANTISTEBAN MANRIQUE  ',a, 17 ],
  [ 'MIRTHA ESTHER VASQUEZ CHUQUILIN  ',a, 17 ],

  [ 'JULIA BENIGNA AYQUIPA TORRES  ',b, 17 ],
  [ 'ALFREDO BENITES AGURTO  ',b, 17 ],
  [ 'LUZ MILAGROS CAYGUARAY GAMBINI  ',b, 17 ],
  [ 'WILMER CAYLLAHUA BARRIENTOS  ',b, 17 ],
  [ 'MARIA TERESA CESPEDES CARDENAS DE VELASQUEZ  ',b, 17 ],
  [ 'ROBLEDO NOE GUTARRA RAMOS  ',b, 17 ],
  [ 'JUAN DE DIOS HUAMAN CHAMPI  ',b, 17 ],
  [ 'NELLY HUAMANI MACHACA DE ESPINOZA  ',b, 17 ],
  [ 'RAUL MACHACA MAMANI  ',b, 17 ],
  [ 'JESUS DEL CARMEN NUÑEZ MARREROS  ',b, 17 ],
  [ 'DANIEL OSEDA YUCRA  ',b, 17 ],
  [ 'ISAIAS PINEDA SANTOS  ',b, 17 ],
  [ 'ALCIDES RAYME MARIN  ',b, 17 ],
  [ 'MARIA CRISTINA RETAMOZO LEZAMA  ',b, 17 ],
  [ 'RICHARD RUBIO GARIZA  ',d, 17 ],

  [ 'GILBERT JUAN ALONZO FERNANDEZ  ',b, 17 ],
  [ 'RITA ELENA AYASTA DE DIAZ  ',b, 17 ],
  [ 'MARTHA GLADYS CHAVEZ COSSIO  ',b, 17 ],
  [ 'DIETHELL COLUMBUS MURATA  ',b, 17 ],
  [ 'MARTIRES LIZANA SANTOS  ',b, 17 ],
  [ 'CARLOS FERNANDO MESIA RAMIREZ  ',b, 17 ],
  [ 'MARCOS ANTONIO PICHILINGUE GOMEZ  ',b, 17 ],
  [ 'LILIANA ANGELICA PINEDO ACHACA  ',b, 17 ],
  [ 'MARIA LUISA SILUPU INGA  ',b, 17 ],
  [ 'ERWIN TITO ORTEGA  ',b, 17 ],
  [ 'GILMER TRUJILLO ZEGARRA  ',b, 17 ],
  [ 'VALERIA CAROLINA VALER COLLADO  ',b, 17 ],
  [ 'WIDMAN NAPOLEON VIGO GUTIERREZ  ',b, 17 ],
  [ 'MIGUEL ANGEL VIVANCO REYES  ',b, 17 ],
  [ 'EDWARD ALEXANDER ZARATE ANTON  ',b, 17 ],

  [ 'HIRMA NORMA ALENCASTRE MIRANDA  ',b, 17 ],
  [ 'GUILLERMO ALEJANDRO ANTONIO ALIAGA PAJARES  ',b, 17 ],
  [ 'BETTO BARRIONUEVO ROMERO  ',b, 17 ],
  [ 'LUIS REYMUNDO DIOSES GUZMAN  ',b, 17 ],
  [ 'RENNAN SAMUEL ESPINOZA ROSALES  ',a, 17 ],
  [ 'MATILDE FERNANDEZ FLOREZ  ',a, 17 ],
  [ 'CESAR GONZALES TUANAMA  ',b, 17 ],
  [ 'JORGE LUIS PEREZ FLORES  ',b, 17 ],
  [ 'FELICITA MADALEINE TOCTO GUERRERO  ',b, 17 ],
  [ 'GRIMALDO VASQUEZ TAN  ',b, 17 ],
  [ 'MARIANO ANDRES YUPANQUI MIÑANO  ',b, 17 ],

  [ 'GINO FRANCISCO COSTA SANTOLALLA  ',a, 17 ],
  [ 'ALBERTO DE BELAUNDE DE CARDENAS  ',a, 17 ],
  [ 'MIGUEL ANGEL GONZALES SANTOS  ',a, 17 ],
  [ 'CAROLINA LIZARRAGA HOUGHTON  ',a, 17 ],
  [ 'JOSE ANTONIO NUÑEZ SALAS  ',a, 17 ],
  [ 'DANIEL FEDERICO OLIVARES CORTES  ',a, 17 ],
  [ 'ANGELICA MARIA PALOMINO SAAVEDRA  ',a, 17 ],
  [ 'FRANCISCO RAFAEL SAGASTI HOCHHAUSLER  ',a, 17 ],
  [ 'ZENAIDA SOLIS GUTIERREZ  ',a, 17 ],

  [ 'CARLOS ALBERTO ALMERI VERAMENDI  ',b, 17 ],
  [ 'MARIA TERESA CABRERA VEGA  ',b, 17 ],
  [ 'LUIS FELIPE CASTILLO OLIVA  ',b, 17 ],
  [ 'YEREMI ARON ESPINOZA VELARDE  ',b, 17 ],
  [ 'JOHAN FLORES VILLEGAS  ',b, 17 ],
  [ 'MARIA MARTINA GALLARDO BECERRA  ',b, 17 ],
  [ 'JAQUELINE CECILIA GARCIA RODRÍGUEZ  ',b, 17 ],
  [ 'ROBINSON DOCITEO GUPIOC RIOS  ',b, 17 ],
  [ 'JOSE LUIS LUNA MORALES  ',b, 17 ],
  [ 'ORESTES POMPEYO SANCHEZ LUIS  ',b, 17 ],
  [ 'DANIEL BELIZARIO URRESTI ELERA  ',a, 17 ],

  [ 'EDGAR ARNOLD ALARCON TEJADA  ',b, 17 ],
  [ 'YESSICA MARISELA APAZA QUISPE  ',b, 17 ],
  [ 'MARIA ISABEL BARTOLO ROMERO  ',b, 17 ],
  [ 'POSEMOSCROWTE IRRHOSCOPT CHAGUA PAYANO  ',b, 17 ],
  [ 'HIPOLITO CHAIÑA CONTRERAS  ',b, 17 ],
  [ 'ROBERTO CARLOS CHAVARRIA VILCATOMA  ',b, 17 ],
  [ 'ALEXANDER LOZANO INOSTROZA  ',b, 17 ],
  [ 'JIM ALI MAMANI BARRIGA  ',b, 17 ],
  [ 'HECTOR SIMON MAQUERA CHAVEZ  ',b, 17 ],
  [ 'JAVIER MENDOZA MARQUINA  ',b, 17 ],
  [ 'RUBEN PANTOJA CALVO  ',b, 17 ],
  [ 'RUBEN RAMOS ZAPANA  ',b, 17 ],
  [ 'JOSE ALEJANDRO VEGA ANTONIO  ',b, 17 ],

  

  
  [ 'ALIANZA PARA EL PROGRESO', 'EDUARDO GEOVANNI ACATE CORONEL  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'HUMBERTO ACUÑA PERALTA  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'WALTER YONNI ASCONA CALDERON  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'WALTER BENAVIDES GAVIDIA  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'IRENE CARCAUSTO HUANCA  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'OMAR KARIM CHEHADE MOYA  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'CESAR AUGUSTO COMBINA SALVATIERRA  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'JULIO FREDY CONDORI FLORES  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'MOISES GONZALEZ CRUZ  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'ALEXANDER HIDALGO ZAMALLOA  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'FERNANDO MELENDEZ CELIS  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'OMAR MERINO LOPEZ  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'MARIA DEL CARMEN OMONTE DURAND  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'JHOSEPT AMADO PEREZ MIMBELA  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'LUSMILA PEREZ ESPIRITU  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'NAPOLEON PUÑO LECARNAQUE  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'MARIO JAVIER QUISPE SUAREZ  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'PERCI RIVAS OCEJO  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'TANIA ROSALIA RODAS MALCA  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'ROBERTINA SANTILLANA PAREDES  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'LUIS ALBERTO VALDEZ FARIAS  ', 17 ],
  [ 'ALIANZA PARA EL PROGRESO', 'MARCO ANTONIO VERDE HEIDINGER  ', 17 ],

  [ 'ACCION POPULAR', 'MANUEL AGUILAR ZAMORA  ', 17 ],
  [ 'ACCION POPULAR', 'JESUS ORLANDO ARAPA ROQUE  ', 17 ],
  [ 'ACCION POPULAR', 'WILMER SOLIS BAJONERO OLIVAS  ', 17 ],
  [ 'ACCION POPULAR', 'RICARDO MIGUEL BURGA CHUQUIPIONDO  ', 17 ],
  [ 'ACCION POPULAR', 'ROLANDO CAMPOS VILLALOBOS  ', 17 ],
  [ 'ACCION POPULAR', 'KENYON EDUARDO DURAND BUSTAMANTE  ', 17 ],
  [ 'ACCION POPULAR', 'YESSY NELIDA FABIAN DIAZ  ', 17 ],
  [ 'ACCION POPULAR', 'PAUL GABRIEL GARCIA OVIEDO  ', 17 ],
  [ 'ACCION POPULAR', 'OTTO NAPOLEON GUIBOVICH ARTEAGA  ', 17 ],
  [ 'ACCION POPULAR', 'LEONARDO INGA SALES  ', 17 ],
  [ 'ACCION POPULAR', 'LESLYE CAROL LAZO VILLON  ', 17 ],
  [ 'ACCION POPULAR', 'FREDDY LLAULLI ROMERO  ', 17 ],
  [ 'ACCION POPULAR', 'MANUEL ARTURO MERINO DE LAMA  ', 17 ],
  [ 'ACCION POPULAR', 'ANTHONY RENSON NOVOA CRUZADO  ', 17 ],
  [ 'ACCION POPULAR', 'JUAN CARLOS OYOLA RODRIGUEZ  ', 17 ],
  [ 'ACCION POPULAR', 'ROSARIO PAREDES EYZAGUIRRE  ', 17 ],
  [ 'ACCION POPULAR', 'CARLOS ANDRES PEREZ OCHOA  ', 17 ],
  [ 'ACCION POPULAR', 'WALTER JESUS RIVERA GUERRA  ', 17 ],
  [ 'ACCION POPULAR', 'LUIS ANDRES ROEL ALVA  ', 17 ],
  [ 'ACCION POPULAR', 'ROLANDO RUBEN RUIZ PINEDO  ', 17 ],
  [ 'ACCION POPULAR', 'MONICA ELIZABETH SAAVEDRA OCHARAN  ', 17 ],
  [ 'ACCION POPULAR', 'FRANCO SALINAS LOPEZ  ', 17 ],
  [ 'ACCION POPULAR', 'LUIS CARLOS SIMEON HURTADO  ', 17 ],
  [ 'ACCION POPULAR', 'HANS TROYES DELGADO  ', 17 ],
  [ 'ACCION POPULAR', 'JORGE VASQUEZ BECERRA  ', 17 ],

  [ 'FRENTE AMPLIO', 'JOSE LUIS ANCALLE GUTIERREZ  ', 17 ],
  [ 'FRENTE AMPLIO', 'LENIN FERNANDO BAZAN VILLANUEVA  ', 17 ],
  [ 'FRENTE AMPLIO', 'LENIN ABRAHAM CHECCO CHAUCA  ', 17 ],
  [ 'FRENTE AMPLIO', 'CINDY ARLETTE CONTRERAS BAUTISTA  ', 17 ],
  [ 'FRENTE AMPLIO', 'CARLOS ENRIQUE FERNANDEZ CHACON  ', 17 ],
  [ 'FRENTE AMPLIO', 'ABSALON MONTOYA GUIVIN  ', 17 ],
  [ 'FRENTE AMPLIO', 'YVAN QUISPE APAZA  ', 17 ],
  [ 'FRENTE AMPLIO', 'ROCIO YOLANDA ANGELICA SILVA SANTISTEBAN MANRIQUE  ', 17 ],
  [ 'FRENTE AMPLIO', 'MIRTHA ESTHER VASQUEZ CHUQUILIN  ', 17 ],

  [ 'FREPAP', 'JULIA BENIGNA AYQUIPA TORRES  ', 17 ],
  [ 'FREPAP', 'ALFREDO BENITES AGURTO  ', 17 ],
  [ 'FREPAP', 'LUZ MILAGROS CAYGUARAY GAMBINI  ', 17 ],
  [ 'FREPAP', 'WILMER CAYLLAHUA BARRIENTOS  ', 17 ],
  [ 'FREPAP', 'MARIA TERESA CESPEDES CARDENAS DE VELASQUEZ  ', 17 ],
  [ 'FREPAP', 'ROBLEDO NOE GUTARRA RAMOS  ', 17 ],
  [ 'FREPAP', 'JUAN DE DIOS HUAMAN CHAMPI  ', 17 ],
  [ 'FREPAP', 'NELLY HUAMANI MACHACA DE ESPINOZA  ', 17 ],
  [ 'FREPAP', 'RAUL MACHACA MAMANI  ', 17 ],
  [ 'FREPAP', 'JESUS DEL CARMEN NUÑEZ MARREROS  ', 17 ],
  [ 'FREPAP', 'DANIEL OSEDA YUCRA  ', 17 ],
  [ 'FREPAP', 'ISAIAS PINEDA SANTOS  ', 17 ],
  [ 'FREPAP', 'ALCIDES RAYME MARIN  ', 17 ],
  [ 'FREPAP', 'MARIA CRISTINA RETAMOZO LEZAMA  ', 17 ],
  [ 'FREPAP', 'RICHARD RUBIO GARIZA  ', 17 ],

  [ 'FUERZA POPULAR', 'GILBERT JUAN ALONZO FERNANDEZ  ', 17 ],
  [ 'FUERZA POPULAR', 'RITA ELENA AYASTA DE DIAZ  ', 17 ],
  [ 'FUERZA POPULAR', 'MARTHA GLADYS CHAVEZ COSSIO  ', 17 ],
  [ 'FUERZA POPULAR', 'DIETHELL COLUMBUS MURATA  ', 17 ],
  [ 'FUERZA POPULAR', 'MARTIRES LIZANA SANTOS  ', 17 ],
  [ 'FUERZA POPULAR', 'CARLOS FERNANDO MESIA RAMIREZ  ', 17 ],
  [ 'FUERZA POPULAR', 'MARCOS ANTONIO PICHILINGUE GOMEZ  ', 17 ],
  [ 'FUERZA POPULAR', 'LILIANA ANGELICA PINEDO ACHACA  ', 17 ],
  [ 'FUERZA POPULAR', 'MARIA LUISA SILUPU INGA  ', 17 ],
  [ 'FUERZA POPULAR', 'ERWIN TITO ORTEGA  ', 17 ],
  [ 'FUERZA POPULAR', 'GILMER TRUJILLO ZEGARRA  ', 17 ],
  [ 'FUERZA POPULAR', 'VALERIA CAROLINA VALER COLLADO  ', 17 ],
  [ 'FUERZA POPULAR', 'WIDMAN NAPOLEON VIGO GUTIERREZ  ', 17 ],
  [ 'FUERZA POPULAR', 'MIGUEL ANGEL VIVANCO REYES  ', 17 ],
  [ 'FUERZA POPULAR', 'EDWARD ALEXANDER ZARATE ANTON  ', 17 ],

  [ 'SOMOS PERU', 'HIRMA NORMA ALENCASTRE MIRANDA  ', 17 ],
  [ 'SOMOS PERU', 'GUILLERMO ALEJANDRO ANTONIO ALIAGA PAJARES  ', 17 ],
  [ 'SOMOS PERU', 'BETTO BARRIONUEVO ROMERO  ', 17 ],
  [ 'SOMOS PERU', 'LUIS REYMUNDO DIOSES GUZMAN  ', 17 ],
  [ 'SOMOS PERU', 'RENNAN SAMUEL ESPINOZA ROSALES  ', 17 ],
  [ 'SOMOS PERU', 'MATILDE FERNANDEZ FLOREZ  ', 17 ],
  [ 'SOMOS PERU', 'CESAR GONZALES TUANAMA  ', 17 ],
  [ 'SOMOS PERU', 'JORGE LUIS PEREZ FLORES  ', 17 ],
  [ 'SOMOS PERU', 'FELICITA MADALEINE TOCTO GUERRERO  ', 17 ],
  [ 'SOMOS PERU', 'GRIMALDO VASQUEZ TAN  ', 17 ],
  [ 'SOMOS PERU', 'MARIANO ANDRES YUPANQUI MIÑANO  ', 17 ],

  [ 'PARTIDO MORADO', 'GINO FRANCISCO COSTA SANTOLALLA  ', 17 ],
  [ 'PARTIDO MORADO', 'ALBERTO DE BELAUNDE DE CARDENAS  ', 17 ],
  [ 'PARTIDO MORADO', 'MIGUEL ANGEL GONZALES SANTOS  ', 17 ],
  [ 'PARTIDO MORADO', 'CAROLINA LIZARRAGA HOUGHTON  ', 17 ],
  [ 'PARTIDO MORADO', 'JOSE ANTONIO NUÑEZ SALAS  ', 17 ],
  [ 'PARTIDO MORADO', 'DANIEL FEDERICO OLIVARES CORTES  ', 17 ],
  [ 'PARTIDO MORADO', 'ANGELICA MARIA PALOMINO SAAVEDRA  ', 17 ],
  [ 'PARTIDO MORADO', 'FRANCISCO RAFAEL SAGASTI HOCHHAUSLER  ', 17 ],
  [ 'PARTIDO MORADO', 'ZENAIDA SOLIS GUTIERREZ  ', 17 ],

  [ 'PODEMOS PERU', 'CARLOS ALBERTO ALMERI VERAMENDI  ', 17 ],
  [ 'PODEMOS PERU', 'MARIA TERESA CABRERA VEGA  ', 17 ],
  [ 'PODEMOS PERU', 'LUIS FELIPE CASTILLO OLIVA  ', 17 ],
  [ 'PODEMOS PERU', 'YEREMI ARON ESPINOZA VELARDE  ', 17 ],
  [ 'PODEMOS PERU', 'JOHAN FLORES VILLEGAS  ', 17 ],
  [ 'PODEMOS PERU', 'MARIA MARTINA GALLARDO BECERRA  ', 17 ],
  [ 'PODEMOS PERU', 'JAQUELINE CECILIA GARCIA RODRÍGUEZ  ', 17 ],
  [ 'PODEMOS PERU', 'ROBINSON DOCITEO GUPIOC RIOS  ', 17 ],
  [ 'PODEMOS PERU', 'JOSE LUIS LUNA MORALES  ', 17 ],
  [ 'PODEMOS PERU', 'ORESTES POMPEYO SANCHEZ LUIS  ', 17 ],
  [ 'PODEMOS PERU', 'DANIEL BELIZARIO URRESTI ELERA  ', 17 ],

  [ 'UNION POR EL PERU', 'EDGAR ARNOLD ALARCON TEJADA  ', 17 ],
  [ 'UNION POR EL PERU', 'YESSICA MARISELA APAZA QUISPE  ', 17 ],
  [ 'UNION POR EL PERU', 'MARIA ISABEL BARTOLO ROMERO  ', 17 ],
  [ 'UNION POR EL PERU', 'POSEMOSCROWTE IRRHOSCOPT CHAGUA PAYANO  ', 17 ],
  [ 'UNION POR EL PERU', 'HIPOLITO CHAIÑA CONTRERAS  ', 17 ],
  [ 'UNION POR EL PERU', 'ROBERTO CARLOS CHAVARRIA VILCATOMA  ', 17 ],
  [ 'UNION POR EL PERU', 'ALEXANDER LOZANO INOSTROZA  ', 17 ],
  [ 'UNION POR EL PERU', 'JIM ALI MAMANI BARRIGA  ', 17 ],
  [ 'UNION POR EL PERU', 'HECTOR SIMON MAQUERA CHAVEZ  ', 17 ],
  [ 'UNION POR EL PERU', 'JAVIER MENDOZA MARQUINA  ', 17 ],
  [ 'UNION POR EL PERU', 'RUBEN PANTOJA CALVO  ', 17 ],
  [ 'UNION POR EL PERU', 'RUBEN RAMOS ZAPANA  ', 17 ],
  [ 'UNION POR EL PERU', 'JOSE ALEJANDRO VEGA ANTONIO  ', 17 ],
  

  ]);


  // Sets chart options.

 var colors = [
   '#1E5BA8',
   '#3a4f77',
   '#1E5BA8',
   '#1E5BA8',
   '#1E5BA8',
   '#1E5BA8',
   '#1E5BA8',
   '#1E5BA8',
   '#1E5BA8',
   '#1E5BA8',
   '#1E5BA8',
   '#1E5BA8',
   '#1E5BA8',
   '#1E5BA8',
   '#1E5BA8',
   '#1E5BA8',
   '#1E5BA8',
   '#1E5BA8',
   '#1E5BA8',
   '#1E5BA8',
   '#1E5BA8',
   '#1E5BA8',
   '#1E5BA8',
   '#E32721',
   '#23cfcc',
   '#E32721',
   '#E32721',
   '#E32721',
   '#E32721',
   '#E32721',
   '#E32721',
   '#E32721',
   '#E32721',
   '#E32721',
   '#E32721',
   'green',
   '#E32721',
   '#E32721',
   'yellow',
   '#E32721',
   '#E32721',
   '#E32721',
   '#E32721',
   '#E32721',
   '#E32721',
   '#E32721',
   '#E32721',
   '#E32721',
   '#E32721',
   '#E32721',
   '#E32721',
   '#49B848',
   '#49B848',
   '#49B848',
   '#49B848',
   '#49B848',
   '#49B848',
   '#49B848',
   '#49B848',
   '#49B848',
   '#260D69',
   '#260D69',
   '#260D69',
   '#260D69',
   '#260D69',
   '#260D69',
   '#260D69',
   '#260D69',
   '#260D69',
   '#260D69',
   '#260D69',
   '#260D69',
   '#260D69',
   '#260D69',
   '#260D69',
   '#EC6E00',
   '#EC6E00',
   '#EC6E00',
   '#EC6E00',
   '#EC6E00',
   '#EC6E00',
   '#EC6E00',
   '#EC6E00',
   '#EC6E00',
   '#EC6E00',
   '#EC6E00',
   '#EC6E00',
   '#EC6E00',
   '#EC6E00',
   '#EC6E00',
   '#20488E',
   '#20488E',
   '#20488E',
   '#20488E',
   '#20488E',
   '#20488E',
   '#20488E',
   '#20488E',
   '#20488E',
   '#20488E',
   '#20488E',
   '#4F1B7F',
   '#4F1B7F',
   '#4F1B7F',
   '#4F1B7F',
   '#4F1B7F',
   '#4F1B7F',
   '#4F1B7F',
   '#4F1B7F',
   '#4F1B7F',
   '#C6A334',
   '#C6A334',
   '#C6A334',
   '#C6A334',
   '#C6A334',
   '#C6A334',
   '#C6A334',
   '#C6A334',
   '#C6A334',
   '#C6A334',
   '#C6A334',
   '#D8242A',
   '#D8242A',
   '#D8242A',
   '#D8242A',
   '#D8242A',
   '#D8242A',
   '#D8242A',
   '#D8242A',
   '#D8242A',
   '#D8242A',
   '#D8242A',
   '#D8242A',
   '#D8242A',
   '#1E5BA8',
   '#E32721',
   '#49B848',
   '#260D69',
   '#EC6E00',
   '#20488E',
   '#4F1B7F',
   '#C6A334',
   '#D8242A'
  ]

    var options = {
      width: 1200,
      height: 2700,
      sankey: {
        link: { color: { fill: '#c3c3c3' } },
        node: {
          colorMode: 'unique',
          colors: colors,
          label: { 
                         fontSize: 13,
                         color: 'black',
                         bold: true,
                         italic: false }
        },
        

      }
    };


  // Instantiates and draws our chart, passing in some options.
  var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
  chart.draw(data, options);
}