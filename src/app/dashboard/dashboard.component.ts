import { Component,OnInit} from '@angular/core';
import { DisplayContactUsService } from '../display-contact-us.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModal for modal functionality



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  data: any[] = [];
  totalLength:any
  page:number =1;
  fullname:string |undefined;
  emailid:string |undefined;
  mobilenumber:string |undefined;
  subject:string|undefined;
  fullcontent:string|undefined
  dateandtime:string|undefined;
  searchQuery = "";
  

  

constructor(private contact_us_servive:DisplayContactUsService,private modalService:NgbModal){}
ngOnInit(): void {
  this.fetchdata()
}
fetchdata(){
  this.contact_us_servive.fetchData().subscribe(
    (response) => {
      this.data = response;
     
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
  );
}

// set the id
deleteId: number | null =null;

setDeleteId(id: number) {
  this.deleteId = id;
}

deleteData(): void {
  if (this.deleteId !== null) {
    this.contact_us_servive.deleteData(this.deleteId).subscribe(
      (response) => {
        console.log('Data deleted successfully:', response);
        // After successful deletion, you may want to update the data displayed in your table
        // For example, you can fetch the updated data again
        this.fetchdata();
      },
      (error) => {
        console.error('Error deleting data:', error);
      }
    );
  } else {
    console.error('No id to delete.');
  }
}


// popup
// open popup
openPopup(fullname:string,email:string,mobile:string,sub:string,content:string,datetimeFormat:string){


this.fullname = fullname;
this.emailid = email;
this.mobilenumber = mobile;

this.subject = sub;

this.fullcontent = content;
this.dateandtime = datetimeFormat



const modal = document.getElementById('myModal');
if(modal){
  modal.style.display = "block";
}
}
closePopup(){
  this.fullcontent = undefined;
  const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'none';
    }

}
}


