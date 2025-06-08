import { DatePipe } from "@angular/common";
import { Renderer2 } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";
import { showErrorMessage } from "./messages";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DAYS_OF_WEEK } from "angular-calendar";

export class Helpers {
    constructor(private renderer: Renderer2) { }

    public static trimObject(item: any) {
        if (item)
            for (var key in item) {
                if ((typeof item[key] === 'string' || item[key] instanceof String) && (item[key] != null && item[key]) && (key != 'currentPassword'))
                    item[key] = item[key].trim();
                else if (item[key] instanceof Array && item[key] != null && item[key]) {
                    var arr = item[key];
                    for (var key1 in arr) {
                        var obj = arr[key1];
                        if (obj instanceof Object) {
                            for (var key2 in obj) {
                                if ((typeof obj[key2] === 'string' || obj[key2] instanceof String) && (obj[key2] != null && obj[key2]) && (key != 'currentPassword'))
                                    obj[key2] = obj[key2].trim();
                            }
                        }
                    }
                }
            }
        return item;
    }

    public static getMinDate(value: any): Date {
        let currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() - value);  // Subtract years
        currentDate.setMonth(0); // Set to January (Month 0)
        currentDate.setDate(1); // Set to the first day of the month
        return currentDate;
    }
    

    public static ngbDateStructToDate(date: Date | null | undefined): Date | null {
        return date ? new Date(date) : null; // Return Date object directly or null
    }
    
    

    public static insertSlashInDate(control: any) {
        var str: string = control ? control.value : null;
        if (str) {
            let re = /^(?:(0[1-9]|[12][0-9]|3[01])[\- \/.](0[1-9]|1[012])[\- \/.](19|20)[0-9]{2})$/;
            str = str.replace(/\s+/g, '');
            var date: string | null = null;  // Initialize with null
            var lenw = str.split('/');
    
            if (lenw.length == 1) {
                var res = str.split('');
                if (res.length == 8) {
                    date = res[0] + res[1] + '/' + res[2] + res[3] + '/' + res[4] + res[5] + res[6] + res[7];
                }
            } else if (lenw.length == 2) {
                if (lenw[0].length == 2) {
                    var res = lenw[1].split('');
                    date = lenw[0] + '/' + res[0] + res[1] + '/' + res[2] + res[3] + res[4] + res[5];
                } else if (lenw[0].length == 4) {
                    var res = lenw[0].split('');
                    date = res[0] + res[1] + '/' + res[2] + res[3] + '/' + lenw[1];
                }
            }
    
            if (date && date.match(re)) {
                return date;
            }
        }
        return null;
    }
    

    public static getMaxDate(value: any): Date {
        let currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() - value);  // Subtract years
        currentDate.setMonth(11);  // Set to December (Month 11, zero-based index)
        currentDate.setDate(31);  // Set to the last day of the month
        return currentDate;
    }
    

    public static newGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    public static toggleButton($event:any) {
        let classToToggle: string = 'active';
        $event.target.parentElement.parentElement.children[0].classList.remove(classToToggle);
        $event.target.parentElement.parentElement.children[1].classList.remove(classToToggle);
        $event.target.parentElement.classList.add(classToToggle);
    }

    public static dateToMaterialDateStruct(date: any): Date | null {
        let d = new Date(date);
        
        if (isNaN(d.getTime())) {
            return null; // Handle invalid date
        }
        
        return d;
    }
    
    

    public static isDefaultAvatar(image: string) {
        let img: string = '../../../../../../../assets/images/avatar1.png';
        if (image != null && image != "null" && image != "" && image != undefined && image != "undefined")
            img = image
        return img;
    }
    public static appendPhoneNumber(val: any) {
        if (val.length == 9) {
          let mobile = '03' + val;
          return mobile;
        }
        return null;
      }
    public static isDefaultPicture(image: string) {
        let img: string = '../../../../../../../assets/img/logos/placeholder.png';
        if (image != null && image != "null" && image != "" && image != undefined && image != "undefined")
            img = image
        return img;
    }

    public static validateExtension(fileName:any, allowedFileTypes:any) {
        allowedFileTypes = allowedFileTypes.replace(/\s+/g, '');
        if (allowedFileTypes != "*") {
            var allowedFiles = allowedFileTypes.split(',');
            var regex = new RegExp("(^.*\.)+(" + allowedFiles.join('|') + ")$");
            if (!regex.test(fileName.toLowerCase())) {
                showErrorMessage("Please upload files having extensions: " + allowedFiles.join(', ') + " only.");
                return false;
            }
        }
        return true;
    }

    public static formatBytes(bytes:any, limit:any) {
        let mb = (Math.round(((bytes / 1024) / 1024) * 100) / 100);
        if (mb > limit) {
           showErrorMessage("Image size can not be more than " + limit + " MB.");
            return false;
        }
        return true;
    };

    public static textEllipsis(value:any, limit:any) {
        if (value.length > limit)
            return value.substring(0, limit) + '...';
        else
            return value;
    };

    public static playAudio() {
        let audio = document.getElementById("chatAudio") as HTMLAudioElement;
        audio.play();
    }

    public static searchParams(model: any) {
        let arr = [];
        for (let key in model)
            if (model[key])
                arr.push(key + '*' + model[key]);
        return arr.join('+');
    }

    public static enumToArray(e:any): Object[] {
        return Object.keys(e).filter(key => typeof e[key] === 'number')
            .map(key => ({ id: e[key], name: key.replace(/_/g, ' ') }))
    }

    public static enumStringToArray<T extends Record<string, string>>(e: T): { id: string; name: string }[] {
        return Object.keys(e)
            .filter(key => typeof e[key] === 'string')
            .map(key => ({ id: key, name: e[key] }));  // Ensure id is the key and name is the value
    }
    

    public static currencyFormat(value:any) {
        if (value) {
            return parseInt(value.replace(/,/g, ""))
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // return parseFloat(value.replace(/,/g, ""))
            //     .toFixed(2)
            //     .toString()
            //     .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else
            return ''

    }

    public static calculateValue(value:any, item:any, units:any) {
        let obj = item;
        let unit = units
        if (unit && unit != "null") {
            let marla = (value / unit);
            let kanal = (marla / 20);
            obj.marla = marla.toFixed(2).toString();
            obj.kanal = kanal.toFixed(2).toString();
            return obj;
        } else
            return obj;

    }

    public static removeValidators(form: UntypedFormGroup, controlArr:any) {
        for (var value of controlArr) {
            form.controls[value.controlName].clearValidators();
            form.controls[value.controlName].updateValueAndValidity();
        }
    }

    public static addValidators(form: UntypedFormGroup, controlArr:any) {
        for (var value of controlArr) {
            form.controls[value.controlName].setValidators(value.controlValidatoion);
            form.controls[value.controlName].updateValueAndValidity();
        }
    }

    public static removeCtrlValidators(form: UntypedFormGroup, formCtrl:any) {
        form.controls[formCtrl].clearValidators();
        form.controls[formCtrl].updateValueAndValidity();

    }

    public static addCtrlValidators(form: UntypedFormGroup, formCtrl:any, valdation:any) {

        form.controls[formCtrl].setValidators(valdation);
        form.controls[formCtrl].updateValueAndValidity();

    }

    public static dateFormatforfilter(date:any) {
        if (date) {
            var lenw = date.split('/');
            if (lenw.length == 1) {
                var res = date.split('');
                if (res.length == 8) {
                    date = res[4] + res[5] + res[6] + res[7] + '-' + res[2] + res[3] + '-' + res[0] + res[1];
                    return date;
                }
            }
        }
        else
            return date;
    }

    public static getDaysBetweenDates(start:any, end:any, dayName:any) {
        var result = [];
        let day: number = parseInt(DAYS_OF_WEEK[dayName.toUpperCase()]);
        // Copy start date
        var current = new Date(start);
        // Shift to next of required days
        current.setDate(current.getDate() + (day - current.getDay() + 7) % 7);
        // While less than end date, add dates to result array
        while (current < new Date(end)) {
            result.push(new Date(+current));
            current.setDate(current.getDate() + 7);
        }
        return result;
    }

    public static getHolidaysBetweenDates(start: any, end: any, days: string[]): Date[] {
        var result: Date[] = [];
    
        days.forEach((dayName: any) => {
            let day: number = parseInt(DAYS_OF_WEEK[dayName.toUpperCase()]);
    
            // Copy start date
            var current = new Date(start);
    
            // Shift to next of required days
            current.setDate(current.getDate() + (day - current.getDay() + 7) % 7);
    
            // While less than end date, add dates to result array
            while (current < new Date(end)) {
                let date = new Date(+current);
    
                if (!isNaN(date.getTime())) { // Ensure it's a valid date before pushing
                    result.push(date); // Directly push the Date object for Material Datepicker
                }
    
                current.setDate(current.getDate() + 7);
            }
        });
    
        return result;
    }
    
    
    

    static getvalidDate = function (d:any) { return new Date(d) }

    public static validateDateBetweenTwoDates(fromDate:any, toDate:any, givenDate:any) {
        return this.getvalidDate(givenDate) <= this.getvalidDate(toDate) && this.getvalidDate(givenDate) >= this.getvalidDate(fromDate);
    }
}

