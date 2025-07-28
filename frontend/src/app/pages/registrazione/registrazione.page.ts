import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';


import {
    IonButton,
    IonContent,
    IonIcon,
    ToastController
} from '@ionic/angular/standalone';
import {AuthService} from "../../Service/auth.service";

@Component({
    selector: 'app-registrazione',
    templateUrl: './registrazione.page.html',
    styleUrls: ['./registrazione.page.scss'],
    standalone: true,
    imports: [IonContent, CommonModule, FormsModule, IonButton, IonIcon, RouterLink]
})
export class RegistrazionePage implements OnInit {

    showPassword = false;
    name: string = '';
    email: string = '';
    password: string = '';

    constructor(private authService: AuthService, private router: Router, private toastController: ToastController) {
    }

    ngOnInit() {
    }

    togglePassword(): void {
        this.showPassword = !this.showPassword;
    }

    async onRegister(): Promise<void> {
        if (this.name && this.email && this.password) {
            this.authService.registerUser(this.name, this.email, this.password).subscribe({
                next: async (response) => {
                    console.log('User registered successfully:', response);
                    await (await this.toastController.create({
                        message: 'Registrazione avvenuta con successo!',
                        duration: 2000,
                        color: 'success'
                    })).present();
                    this.router.navigate(['/login']);
                },
                error: async (error) => {
                    console.error('Errore registrazione:', error);
                    await (await this.toastController.create({
                        message: error === 'Email già registrata' ? 'Email già registrata!' : 'Registrazione fallita.',
                        duration: 2000,
                        color: 'danger'
                    })).present();
                }
            });
        } else {
            await (await this.toastController.create({
                message: 'Compila tutti i campi.',
                duration: 2000,
                color: 'warning'
            })).present();
        }
    }

    redirectToApple(): void {
        window.location.href = 'https://appleid.apple.com/auth/authorize';
    }

    redirectToGoogle(): void {
        window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth';
    }

}
