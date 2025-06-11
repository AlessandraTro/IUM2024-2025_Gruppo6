import { Component, OnInit } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';



import {
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput, IonItem, IonLabel,
    IonList, IonRouterLinkWithHref,
    IonTitle,
    IonToolbar, ToastController
} from '@ionic/angular/standalone';
import {AuthService} from "../../Service/auth.service";

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
  standalone: true,
    imports: [IonContent, CommonModule, FormsModule, IonButton, IonIcon, NgOptimizedImage, RouterLink]
})
export class RegistrazionePage implements OnInit {

    showPassword = false; // stato per l'occhio
    name: string = '';
    email: string = '';
    password: string = '';
    constructor(private authService: AuthService, private router: Router, private toastController: ToastController) {}
    ngOnInit() {}

    togglePassword(): void {
        this.showPassword = !this.showPassword;
    }
    async onRegister(): Promise<void> {
        if (this.name && this.email && this.password) {
            this.authService.registerUser(this.name, this.email, this.password).subscribe({
                next: async (response) => {
                    console.log('User registered successfully:', response);
                    // Mostra il toast di successo
                    await (await this.toastController.create({
                        message: 'Registration successful!',
                        duration: 2000,
                        color: 'success'
                    })).present();
                    this.router.navigate(['/login']);  // Redirect alla pagina di login
                },
                error: async (error) => {
                    console.error('Registration failed:', error);
                    // Mostra il toast di errore
                    await (await this.toastController.create({
                        message: 'Registration failed. Please try again later.',
                        duration: 2000,
                        color: 'danger'
                    })).present();
                }
            });
        } else {
            // Mostra il toast per i campi mancanti
            await (await this.toastController.create({
                message: 'Please fill in all fields',
                duration: 2000,
                color: 'warning'
            })).present();
        }
    }
}
