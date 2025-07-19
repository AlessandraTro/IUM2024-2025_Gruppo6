import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // 👈 Aggiungi questo

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule // 👈 E aggiungilo qui
  ]
})
export class TrackCardComponent implements OnInit {
  @Input() level!: string;
  @Input() title!: string;
  @Input() guided!: string;
  @Input() duration!: string;
  @Input() image!: string;

  @Output() cardClicked = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.cardClicked.emit();
  }
}
