import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, finalize, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientAppointmentService {

   private apiUrl = environment.baseUrl + 'WebsiteAppointment';
        constructor(private http: HttpClient) {}
           
            getAllDoctors(): Observable<any> {
              const endpoint = `${this.apiUrl}/GetAllDoctors`;
              return this.http.get<any>(endpoint).pipe(
                tap(() => console.log("API call started")),
                catchError(error => {
                  console.error("Error fetching doctors:", error);
                  return throwError(() => error);
                })
              );
            }
            
            getPatientAppointmentById(modal: any): Observable<any> {
              const params = new HttpParams().set('PatientId', modal.id);
              const endpoint = `${this.apiUrl}/GetPatientById`;
              return this.http.get<any>(endpoint, { params }).pipe(
                finalize(() => {
                  console.log("API call completed");
                })
              );
            }
            getDoctorFeeByDocotorId(doctorId: any): Observable<any> {
              const params = new HttpParams().set('DoctorId', doctorId);
              const endpoint = `${this.apiUrl}/GetDoctorFeeByDocotorId`;
              return this.http.get<any>(endpoint, { params }).pipe(
                finalize(() => {
                  console.log("API call completed");
                })
              );
            }
            
            addEditpatientAppointment(modal: any): Observable<any> {
              const endpoint = `${this.apiUrl}/AddEditPatient`;
              return this.http.post<any>(endpoint, modal).pipe( 
                finalize(() => {
                  console.log("API call completed");
                })
              );
            }
            
          
           getDoctorAppointmentsSlotsOfDay(modal: any): Observable<any> {
            const endpoint = `${this.apiUrl}/GetDoctorAppointmentsSlotsOfDay`;
            return this.http.post<any>(endpoint, modal).pipe( 
              finalize(() => {
                console.log("API call completed");
              })
            );
          }
          getDoctorHolidayByDoctorIdForPatientAppointment(modal: any): Observable<any> {              
            const endpoint = `${this.apiUrl}/GetDoctorHolidayByDoctorIdForPatientAppointment`;
            return this.http.post<any>(endpoint, modal).pipe( 
              finalize(() => {
                console.log("API call completed");
              })
            );
          }
           
}
