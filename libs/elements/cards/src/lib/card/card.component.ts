import { Component, Input } from '@angular/core';
import {InfoCard} from "../models/schema/ui/card/InfoCard";

@Component({
  selector: 'elewa-website-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  info: InfoCard | undefined;
}
