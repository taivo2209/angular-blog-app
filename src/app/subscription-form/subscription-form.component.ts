import { Component, OnInit } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css'],
})
export class SubscriptionFormComponent implements OnInit {
  isEmailError: boolean = false;
  isSubscribed: boolean = false;

  constructor(private subService: SubscribersService) {}
  ngOnInit(): void {}
  onSubmit(formVal: any) {
    const subData: Sub = {
      name: formVal.value.name,
      email: formVal.value.email,
    };
    // console.log(subData);

    // this.subService.addSub(subData);

    this.subService.checkSubs(subData.email).then((data) => {
      // console.log(data);
      if (data.length > 0) {
        this.isEmailError = true;
      } else {
        this.subService.addSub(subData);
        this.isSubscribed = true;
      }
    });
  }
}
