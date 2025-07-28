import {Component, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
    IonContent,
    IonFooter,
    IonHeader, IonIcon,
    IonTitle,
    IonToolbar
} from '@ionic/angular/standalone';
import {FooterComponent} from "../../component/footer/footer.component";

@Component({
    selector: 'app-progressi',
    templateUrl: './progressi.page.html',
    styleUrls: ['./progressi.page.scss'],
    standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonFooter, FooterComponent, IonIcon]
})
export class ProgressiPage implements OnInit {
    viewedDate: Date = new Date();
    currentMonth: string = '';
    calendarDays: { day: number, date: string, emotion?: string }[] = [];

    emotionMap: { [key: string]: string } = {
        '2025-07-01': 'rabbia',
        '2025-07-04': 'tristezza',
        '2025-07-06': 'felice',
        '2025-07-09': 'paura',
        '2025-07-19': 'tristezza'
    };

    constructor(private location: Location) {
    }

    ngOnInit() {
        this.updateCalendar();
    }

    updateCalendar() {
        const year = this.viewedDate.getFullYear();
        const month = this.viewedDate.getMonth();
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'];

        this.currentMonth = monthNames[month] + ' ' + year;

        const firstDayOfMonth = new Date(year, month, 1);
        const startDay = firstDayOfMonth.getDay() || 7;

        const totalDays = new Date(year, month + 1, 0).getDate();

        this.calendarDays = [];

        for (let i = 1; i < startDay; i++) {
            this.calendarDays.push({day: 0, date: ''});
        }

        for (let i = 1; i <= totalDays; i++) {
            const dateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
            this.calendarDays.push({
                day: i,
                date: dateStr,
                emotion: this.emotionMap[dateStr]
            });
        }
    }

    prevMonth() {
        this.viewedDate = new Date(this.viewedDate.getFullYear(), this.viewedDate.getMonth() - 1, 1);
        this.updateCalendar();
    }

    nextMonth() {
        this.viewedDate = new Date(this.viewedDate.getFullYear(), this.viewedDate.getMonth() + 1, 1);
        this.updateCalendar();
    }

    goBack() {
        this.location.back();
    }

}
