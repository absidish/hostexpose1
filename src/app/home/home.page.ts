import { Component } from '@angular/core';
import { Zeroconf } from '@ionic-native/zeroconf/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private zeroconf: Zeroconf) {}

  startExpose() {
    // publish a zeroconf service of your own
    this.zeroconf.register('_http._tcp.', 'local.', 'Lfeline-Connect', 8086, {
      'foo': 'bar'
    }).then(result => {
      console.log('Service registered', result.service);
    });
  }

}
