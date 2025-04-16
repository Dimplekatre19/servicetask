export interface Iproduct{
    pname: string;
    pdetail: string;
    pid: string;
    pstatus: Productstatus
}

export enum Productstatus{
      Inprogress='Inprogress',
      Dispatched='Dispatched',
      Delivered= 'Delivered'
}