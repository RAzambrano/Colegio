export interface ColegioI {
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
