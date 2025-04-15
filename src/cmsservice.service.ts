import { Injectable } from '@angular/core';
import { Urls } from './Urls folder/Urls';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CmsserviceService {

  constructor(private http:HttpClient) { }

  postincomingcylinder(data: string[], customerid: string): Observable<any> {
    const url = `${Urls.addincylinder}?customerid=${encodeURIComponent(customerid)}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(url, data, { headers });
  }
  getcustbyid(data:any){

    return this.http.get(Urls.getcustomerdetailsbyid+"?customerid="+data);
  }
  getOutBillByBillnumber(data:any){
    return this.http.get(Urls.getoutgoingbillbybillnumber+"?billnumber="+data);
  }
  getIncomingByBillnumber(data:any){

    return this.http.get(Urls.getincomingreceiptbybillnumber+"?receiptnumber="+data);
  }
  posttocustomer(data: string [], customerid:string){
    const url=`${Urls.addtocustomer}?customerid=${encodeURIComponent(customerid)}`;
    return this.http.post(url,data);
  }
  postcylindermaster(data:any){
    return this.http.post(Urls.postcylindermaster,data);
  }
  postcylindermasterlists(data:any){
    return this.http.post(Urls.postcylindermasterlist,data);
  }
  getcylinderbarcodebycylnumber(data:any):Observable<any>{
    return this.http.get(Urls.getbarcodebycylnumber+"?cylindernumber="+data);
  }
  getcylindermaster(){
    return this.http.get(Urls.getcylindermaster);
  }
  getcylindermasterbybarcode(data:any){
    return this.http.get(Urls.getcylinderbybarcode+"?barcode="+data);
  }
  getcylindermasterbymanufacturedate(data:any){
    return this.http.get(Urls.getcylinderbymanufacturedate+"?manufacture="+data);
  }
  postproductslists(data:any):Observable<any>{
    return this.http.post(Urls.postlistofproducts,data);
  }
  putproductsdetails(data:any):Observable<any>{
    return this.http.put(Urls.updateproductdetails,data);
  }
  getcylindermasterexpirydate(data:any){
    return this.http.get(Urls.getcylinderbyexpirydate+"?expirydate="+data);
  }
  postproduction(data:string[]):Observable<any>{
    return this.http.post(Urls.addtoproduction,data);
  }
  getcustomermaster(){
    return this.http.get(Urls.getcustmaster);
  }
  getlistofcylymasterdetails(data:any){
    return this.http.post(Urls.getdetailsofcylinderlist,data);
  }
  getvalidationforbarcodes(customerid: string, barcodes: string[]): Observable<boolean> {
    const url = `${Urls.checkbarcodes}?customerid=${encodeURIComponent(customerid)}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post<boolean>(url, barcodes, { headers });
  }
  trackthecylinder(data:any){
    return this.http.get(Urls.trackthecylinder+"?barcode="+data);
  }
  getvalidationforproductionbarcodes(data:any):Observable<any>{
    return this.http.post<boolean>(Urls.checkproductionbarcods,data);
  }
  
getvalidationforincomingbarcodes(data:any):Observable<any>{
  return this.http.post<boolean>(Urls.checkincomingbarcodes,data);
}
getbilling(){
  return this.http.get(Urls.getbill);
}
getinvoice(){
  return this.http.get(Urls.getinvoice);
}
postinvoice(data:any):Observable<any>{
  return this.http.post(Urls.postintoinvoice,data)
}
deletebill(data:any){
  return this.http.delete(Urls.deletebill+"?id="+data)
}
getproducts(){
  return this.http.get(Urls.getproducts);
}
getincomingreportfortoday(data:any){
  return this.http.get(Urls.incomingcylinderreportfortoday+"?today="+data);
}
getpurchaseorder(){
  return this.http.get(Urls.getpurchaseorder);
}

getoutgoingreportfortoday(data:any){
  return this.http.get(Urls.outgoingreportfortoday+"?today="+data);
}
getproductionreportfortoday(data:any){
  return this.http.get(Urls.productionreportfortoday+"?today="+data);
}
getincomingcylinderreportfordaterange(data1:any,data2:any){
  return this.http.get(Urls.incomingcylinderreportforrange+"?startdate="+data1+"&enddate="+data2);
}
getoutgoingcylinderreportfordaterange(data1:any,data2:any){
  return this.http.get(Urls.outgoingreportforrange+"?startdate="+data1+"&enddate="+data2);
}
getproductionreportfordaterange(data1:any,data2:any){
  return this.http.get(Urls.productionreportforrange+"?startdate="+data1+"&enddate="+data2);
}
generateincomingPdffortoday(data1:any): Observable<Blob> {
  return this.http.get(Urls.downloadtodaysinpdf+"?today="+data1,{ responseType: 'blob' });
}
generateprodPdffortoday(data1:any): Observable<Blob> {
  return this.http.get(Urls.downloadtodaysprodpdf+"?today="+data1, { responseType: 'blob' });
}
generateoutgoingPdffortoday(data1:any): Observable<Blob> {
  return this.http.get(Urls.downloadtodaysoutpdf+"?today="+data1, { responseType: 'blob' });
}
generateincomingPdfByDaterange(data1:any,data2:any): Observable<Blob> {
  return this.http.get(Urls.downloadincomingpdfbydaterange+"?startdate="+data1+"&enddate="+data2, { responseType: 'blob' });
}
generateoutgoingPdfByDaterange(data1:any,data2:any): Observable<Blob> {
  return this.http.get(Urls.downloadoutgoingpdfbydaterange+"?startdate="+data1+"&enddate="+data2, { responseType: 'blob' });
}
generateproductionPdfByDaterange(data1:any,data2:any): Observable<Blob> {
  return this.http.get(Urls.downloadproductionpdfbydaterange+"?startdate="+data1+"&enddate="+data2, { responseType: 'blob' });
}

downloaincomingdexcelbydaterange(data1: any, data2: any): void {
  const url = `${Urls.downloadincomingexcelbydaterange}?startdate=${encodeURIComponent(data1)}&enddate=${encodeURIComponent(data2)}`;
  this.http.get(url, { responseType: 'blob' }).subscribe(
    (data: Blob) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'incoming.xlsx';
      document.body.appendChild(a); 
      a.click(); 
      window.URL.revokeObjectURL(downloadUrl);
      a.remove(); 
    },
    (error) => {
      console.error('Error downloading Excel file:', error);
      alert('Failed to download the Excel file. Please try again.');
    }
  );
}

downloadproductionexcelbydaterange(data1: any, data2: any): void {
  const url = `${Urls.downloadproductionexcelbydaterange}?startdate=${encodeURIComponent(data1)}&enddate=${encodeURIComponent(data2)}`;
  this.http.get(url, { responseType: 'blob' }).subscribe(
    (data: Blob) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'production.xlsx';
      document.body.appendChild(a); 
      a.click(); 
      window.URL.revokeObjectURL(downloadUrl);
      a.remove(); 
    },
    (error) => {
      console.error('Error downloading Excel file:', error);
      alert('Failed to download the Excel file. Please try again.');
    }
  );
}

downloadincomingexcelfortoday(data1: any): void {
  const url = `${Urls.downloadtodaysincomingexcel+"?today="+data1}`;
  this.http.get(url, { responseType: 'blob' }).subscribe(
    (data: Blob) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'excel.xlsx';
      document.body.appendChild(a); 
      a.click(); 
      window.URL.revokeObjectURL(downloadUrl);
      a.remove(); 
    },
    (error) => {
      console.error('Error downloading Excel file:', error);
      alert('Failed to download the Excel file. Please try again.');
    }
  );
}
downloaproductionexcelfortoday(data1: any): void {
  const url = `${Urls.downloadtodaysproductionexcel+"?today="+data1}`;
  this.http.get(url, { responseType: 'blob' }).subscribe(
    (data: Blob) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'excel.xlsx';
      document.body.appendChild(a); 
      a.click(); 
      window.URL.revokeObjectURL(downloadUrl);
      a.remove(); 
    },
    (error) => {
      console.error('Error downloading Excel file:', error);
      alert('Failed to download the Excel file. Please try again.');
    }
  );
}
downloaoutgoingdexcelfortoday(data1: any): void {
  const url = `${Urls.downloadtodaysoutgoingexcel+"?today="+data1}`;
    this.http.get(url, { responseType: 'blob' }).subscribe(
    (data: Blob) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'excel.xlsx';
      document.body.appendChild(a); 
      a.click(); 
      window.URL.revokeObjectURL(downloadUrl);
      a.remove(); 
    },
    (error) => {
      console.error('Error downloading Excel file:', error);
      alert('Failed to download the Excel file. Please try again.');
    }
  );
}
downloadcylmastersample(): void {
  const url = `${Urls.downloadcylindermastersample}`;
    this.http.get(url, { responseType: 'blob' }).subscribe(
    (data: Blob) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'excel.xlsx';
      document.body.appendChild(a); 
      a.click(); 
      window.URL.revokeObjectURL(downloadUrl);
      a.remove(); 
    },
    (error) => {
      console.error('Error downloading Excel file:', error);
      alert('Failed to download the Excel file. Please try again.');
    }
  );
}
uploadexcelforcylindermaster(data:any){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  this.http.post(Urls.uploadcylindermasterexcel,data,{headers}).subscribe(
    res=>{
      console.log('Data uploaded successfully:', res);
    },
    error => {
      console.error('Error uploading data:', error);
    }
  );

}

postdirecttoproduction(data:any):Observable<any>{
  return this.http.post(Urls.postdirecttoprod,data);
}
postpo(data:any): Observable <any>{
  return this.http.post(Urls.postpurchaseorder,data);
}

getbilltable(){
  return this.http.get(Urls.getbilllist);
}
getreceipttable(){
  return this.http.get(Urls.getreceiptlist);
}

getpurchaseorderbycond(customerid: any, deliverydate: any, orderdate: any) {
  let params = `?customerid=${encodeURIComponent(customerid)}`;
  
  if (orderdate) {
    params += `&orderdate=${encodeURIComponent(orderdate)}`;
  }
  
  if (deliverydate) {
    params += `&deliverydate=${encodeURIComponent(deliverydate)}`;
  }
  
  return this.http.get(Urls.getpolistbyconditions + params);
}

getpobyid(data:any){
  return this.http.get(Urls.getpurchaseorderbyid+"?id="+data);
}
getappliedtax(){
  return this.http.get(Urls.getappliedtax);
}
postincomreciept(data:any):Observable<any>{
  return this.http.post(Urls.postincomingreciept,data);
}
postoutbill(data:any):Observable<any>{
  return this.http.post(Urls.postaccountsbill,data);
}
postdirecttobill(data:any):Observable<any>{
  return this.http.post(Urls.postdirectbill,data);
}
getscannedbarcode(data:any):Observable<any>{
return this.http.get(Urls.getscannedbarcode+"?optype="+data);

}
postcustomermaster(data:any):Observable<any>{
  return this.http.post(Urls.postcustmaster,data);
}
}



