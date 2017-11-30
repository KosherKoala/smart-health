import { Pipe, PipeTransform } from '@angular/core';
import { Doctor } from '../../../../server/classes/index'

@Pipe({
  name: 'doctorSearch'
})
export class DoctorSearchPipe implements PipeTransform {


  transform(items: Doctor[], name: string, specialty: string, zip: string, procedure: string ): any[] {
    console.log('searching');
    const checkProcedures = ( doctor ) => {
      for (let pro  of doctor.procedures)
      {
      //  console.log(pro.name)
        if (pro.name.toLowerCase().includes(procedure) ) {
          return true;
        }
      }
      return false;
    }

    if (!items) {
      return [];
    }

    const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);

    if (!name && !specialty && !isValidZip && !procedure) {
      return [];
    }

    name = name.toLowerCase();
    specialty = specialty.toLowerCase();
    procedure = procedure.toLowerCase();

  //  console.log("Filtering", name, specialty, zip);

    if ( isValidZip ) {
   //   console.log("Valid");
      return items.filter( it => {
          return ( (it.firstName.toLowerCase().includes(name) || it.lastName.toLowerCase().includes(name)) &&
                    it.specialty.toLowerCase().includes(specialty) && checkProcedures(it) &&
                    it.location.zip == zip)})
    } else {
      console.log('items', items)
      return items.filter( it => {
          return ( (it.firstName.toLowerCase().includes(name) || it.lastName.toLowerCase().includes(name)) &&
                    it.specialty.toLowerCase().includes(specialty) && checkProcedures(it)
                  )});
    }
  }

}
