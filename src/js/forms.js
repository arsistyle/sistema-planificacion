/**
 * Validación de formularios
 * Librería interna Feline
 */

 import { validarFormulario } from './automatizar';

export const validarFormPerfil = (id, successId, errorId) => {
   if (id && successId && errorId) {
     validarFormulario(id, {
       texto: 'Ingrese ',
       exito() {
         /*
          * Se debe crear la consulta via ajax y ejecutar lo siguiente dependiendo del caso
          */

         // Exito
         $(successId).modal({
           show: true,
           backdrop: 'static',
         });

         // Error
         /* 
      $(errorId).modal({
        show: true,
        backdrop: 'static',
      });
      */
       },
     });
   }
 }