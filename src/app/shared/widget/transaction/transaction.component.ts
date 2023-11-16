import { Component, OnInit, Input } from '@angular/core';
import { UserProfileService } from '../../../core/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  @Input() transactions: Array<{
    id?: string;
    index?: number,
    name?: string,
    date?: string,
    total?: string,
    status?: string,
    payment?: string[],
  }>;

  constructor(private modalService: NgbModal, private UserProfileService: UserProfileService) { }

  ngOnInit(): void {
    try {
      this.loadTransactions();
    } catch (error) {
      console.log(error)
    }

  }


  async loadTransactions(): Promise<void> {
    try {
      const data = await this.UserProfileService.getTransactions().toPromise();
      // this.transactions = data;
      console.log(data);
    } catch (error) {
      console.error('Error al consultar la API de usuarios', error);
    }
  }



  openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }


}
