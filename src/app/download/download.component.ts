import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  search:any = "";
  constructor(private toast:ToastrService) { }

  ngOnInit(): void {
  }

  downLoadLink(){
    if(this.search === ""){
      this.toast.error("Please input a valid url, field seems empty!!!!")
    }else{
      this.toast.success("Link submited but am taking you nowhere, atleast for now!!!!")
    }
  }
}
