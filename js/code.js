
  $(document).ready(function () {
      $( ".bandera" ).css( 'display','none' );
      $( ".lel" ).find( "a" ).css( 'color','black' );
      $( ".lel" ).find( "a" ).css( 'text-decoration','none' );
    $( ".lel" )
    .mouseenter(function() {
        $( this ).find( ".bandera" ).css( 'display','block' );
        $( this ).find( ".bandera" ).css( 'box-shadow','0px 0px 3px 0.2px red' );
        $( this ).find( "a" ).css( 'color','red' );
        $( this ).css( 'font-size','3rem' );
        $( this ).css( 'box-shadow','0px 0px 3px 0.2px red' );
    })
    .mouseleave(function() {
        $( this ).find( ".bandera" ).css( 'display','none' );
        $( this ).find( ".bandera" ).css( 'box-shadow','0px 0px 0px 0px red' );
        $( this ).find( "a" ).css( 'color','black' );
        $( this ).css( 'font-size','2.9rem' );
        $( this ).css( 'box-shadow','0px 0px 0px 0px red' );
    });
  });