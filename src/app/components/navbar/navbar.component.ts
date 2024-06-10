import {Component} from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import {BadgeModule} from "primeng/badge";
import {NgClass, NgIf} from "@angular/common";
import {AvatarModule} from "primeng/avatar";
import {Ripple} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {MenuItem, PrimeIcons} from "primeng/api";

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [MenubarModule, BadgeModule, NgClass, NgIf, AvatarModule, Ripple, InputTextModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    items!: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                url : '',
                icon : 'pi pi-home',
            },
            {
                label : 'Data Generator',
                url : 'http://localhost:4200/datagenerator/previewdata',
                icon : 'pi pi-microchip-ai'
            },
            {
                label : 'Data Analysis',
                icon : 'pi pi-chart-line',
                items : [
                    {
                        label : 'Numeric',
                        url : 'http://localhost:4200/dataanalysis/numeric',
                        icon : 'pi pi-table',
                    },
                    {
                        label : 'Non Numeric',
                        url : 'http://localhost:4200/dataanalysis/nonnumeric',
                        icon : 'pi pi-chart-bar',
                    }
                ]
            }
        ];
    }
}
