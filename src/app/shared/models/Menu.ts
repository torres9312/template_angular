

export class MenuItems {
    /* MENU ADMIN */
    public static MenuAdmin: Array<any> = [
     /*  {
        tipo : 'standard',
        nombre : 'Dashboard',
        ruta : 'dashboard',
        icono : 'fa-solid fa-gauge-high'
      },
       */
    ];

     /* MENU USERS */
    public static Menu: Array<any> = [

      {
        tipo : 'standard',
        nombre : 'Dashboard',
        ruta : 'dashboard',
        icono : 'fa fa-pie-chart'
      },
      {
        tipo : 'submenu',
        nombre : 'Forms',
        icono : 'fa fa-file-text',
        subitems : [
          {
            tipo : 'standard',
            nombre : 'Basico',
            ruta : 'example',
            
          }          
        ]
      },
      {
        tipo : 'standard',
        nombre : 'Tablas',
        ruta : 'tables',
        icono : 'fa fa-table'
      },
      {
        tipo : 'standard',
        nombre : 'Elements',
        ruta : 'buttons',
        icono : 'fa fa-paint-brush'
      },
      
  /*       {
          tipo : 'standard',
          nombre : 'Dashboard',
          ruta : 'dashboard',
          icono : 'fa-solid fa-gauge-high'
        },
 */
       /*  {
          tipo : 'submenu',
          nombre : 'Desplegable',
          icono : 'fa fa-file-text',
          subitems : [
            {
              tipo : 'standard',
              nombre : 'Item 1',
              ruta : 'demo-component/listado',
              
            },
            
          ]

        }  */
       
      ];
}