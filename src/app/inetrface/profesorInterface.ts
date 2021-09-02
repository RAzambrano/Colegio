export interface ProfesorI {
  state:boolean;
  message:string;
  responseCode:string;
  data: {
      total: number,
      rows: [
          {
              nombre: string,
          }
      ]
  }

}
