import { Component } from '@angular/core';
import { SidebarComponent } from './pages/includes/sidebar/sidebar.component';
import { faCoffee, faGamepad} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'angulartemp';
  faCoffe = faCoffee;
  faGamepad = faGamepad;
}
