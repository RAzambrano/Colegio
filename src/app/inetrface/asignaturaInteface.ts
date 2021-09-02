export interface AsignaturaI {
  state:boolean;
  message:string;
  responseCode:string;
  data: {
      total: number,
      rows: [
          {
              nombre: string,
              curso: String,
              estudiante:[
              {
                nombre:string,
              }
              ]
          }
      ]
  }

}
