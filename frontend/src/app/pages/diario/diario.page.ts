import {Component, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar
} from '@ionic/angular/standalone';
import {FooterComponent} from "../../component/footer/footer.component";
import {DiarioService} from "../../Service/diario.service";

@Component({
    selector: 'app-diario',
    templateUrl: './diario.page.html',
    styleUrls: ['./diario.page.scss'],
    standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FooterComponent, IonFooter, IonIcon]
})
export class DiarioPage implements OnInit {

    constructor(private location: Location, private diarioService: DiarioService) {
    }

    selectedDate = '20 Maggio 2025';
    selectedDay = 20;
    isModalOpen = false;
    currentInputText = '';
    diaryEntries: { [key: string]: string } = {};
    showSuccessMessage = false;
    today = new Date();
    currentMonth = this.today.getMonth();
    currentYear = this.today.getFullYear();
    daysInMonth: number[] = [];
    firstDayOfWeek: number = 0;
    monthNames = [
        'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
        'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
    ];

    getSortedDays(): string[] {
        return Object.keys(this.diaryEntries)
            .sort((a, b) => {
                const [da] = a.split('-').map(Number);
                const [db] = b.split('-').map(Number);
                return da - db;
            });
    }

    isInCurrentMonth(key: string): boolean {
        const [day, month, year] = key.split('-').map(Number);
        return month === this.currentMonth + 1 && year === this.currentYear;
    }

    getBoxColor(day: number): string {
        return day % 2 === 0 ? 'purple-box' : 'green-box';
    }

    getEntryKey(day: number, month: number, year: number): string {
        return `${day}-${month + 1}-${year}`;
    }

    ngOnInit() {
        this.generateCalendar(this.currentMonth, this.currentYear);

        const day = this.today.getDate();
        this.selectedDay = day;
        this.selectedDate = `${day} ${this.monthNames[this.currentMonth]} ${this.currentYear}`;

        // Carica le annotazioni salvate precedentemente
        this.diaryEntries = this.diarioService.loadDiaryEntries();

        const todayKey = this.getEntryKey(day, this.currentMonth, this.currentYear);
        if (!this.diaryEntries[todayKey]) {
            this.diaryEntries[todayKey] = `Oggi mi sento un po’ confusa...`;
        }
    }

    generateCalendar(month: number, year: number) {
        const firstDay = new Date(year, month, 1);
        const totalDays = new Date(year, month + 1, 0).getDate();

        this.firstDayOfWeek = firstDay.getDay(); // 0=DOMENICA
        this.daysInMonth = Array.from({length: totalDays}, (_, i) => i + 1);
    }

    changeMonth(direction: number) {
        this.currentMonth += direction;

        if (this.currentMonth < 0) {
            this.currentMonth = 11;
            this.currentYear--;
        } else if (this.currentMonth > 11) {
            this.currentMonth = 0;
            this.currentYear++;
        }
        this.generateCalendar(this.currentMonth, this.currentYear);
        this.selectedDay = -1;
    }

    getFormattedDate(key: string): string {
        const [day, month, year] = key.split('-').map(Number);
        const date = new Date(year, month - 1, day);

        const weekday = date.toLocaleDateString('it-IT', {weekday: 'long'});
        const monthName = date.toLocaleDateString('it-IT', {month: 'long'});

        return `${weekday[0].toUpperCase() + weekday.slice(1)} ${day} ${monthName} ${year}`;
    }

    openModal(day: number) {
        this.selectedDay = day;
        this.selectedDate = `${day} ${this.monthNames[this.currentMonth]} ${this.currentYear}`;
        const key = this.getEntryKey(day, this.currentMonth, this.currentYear);
        this.currentInputText = this.diaryEntries[key] || '';
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }

    saveEntry() {
        const key = this.getEntryKey(this.selectedDay, this.currentMonth, this.currentYear);
        this.diaryEntries[key] = this.currentInputText;

        // Salva le annotazioni nel localStorage
        this.diarioService.saveDiaryEntries(this.diaryEntries);

        this.closeModal();

        this.showSuccessMessage = true;
        setTimeout(() => {
            this.showSuccessMessage = false;
        }, 2500);
    }

    goBack() {
        this.location.back();
    }
}
