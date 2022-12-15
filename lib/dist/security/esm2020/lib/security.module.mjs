// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { SecurityComponent } from './security.component';
import * as i0 from "@angular/core";
// import { HttpModule } from '@angular/http';
// import { NgxSpinnerModule } from 'ngx-spinner';
export class SecurityModule {
}
SecurityModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SecurityModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SecurityModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SecurityModule, declarations: [SecurityComponent, LoginComponent], imports: [FormsModule,
        HttpClientModule,
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule], exports: [SecurityComponent, LoginComponent] });
SecurityModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SecurityModule, imports: [[
            FormsModule,
            HttpClientModule,
            BrowserModule,
            CommonModule,
            BrowserAnimationsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SecurityModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SecurityComponent, LoginComponent],
                    imports: [
                        FormsModule,
                        HttpClientModule,
                        BrowserModule,
                        CommonModule,
                        BrowserAnimationsModule,
                    ],
                    exports: [SecurityComponent, LoginComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvc2VjdXJpdHkvc3JjL2xpYi9zZWN1cml0eS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUVBQXVFO0FBRXZFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUV6RCw4Q0FBOEM7QUFJOUMsa0RBQWtEO0FBY2xELE1BQU0sT0FBTyxjQUFjOzsyR0FBZCxjQUFjOzRHQUFkLGNBQWMsaUJBVlYsaUJBQWlCLEVBQUUsY0FBYyxhQUU5QyxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixZQUFZO1FBQ1osdUJBQXVCLGFBRWYsaUJBQWlCLEVBQUUsY0FBYzs0R0FFaEMsY0FBYyxZQVRoQjtZQUNQLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLFlBQVk7WUFDWix1QkFBdUI7U0FDeEI7MkZBR1UsY0FBYztrQkFYMUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxjQUFjLENBQUM7b0JBQ2pELE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixZQUFZO3dCQUNaLHVCQUF1QjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsY0FBYyxDQUFDO2lCQUM3QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWN1cml0eUNvbXBvbmVudCB9IGZyb20gJy4vc2VjdXJpdHkuY29tcG9uZW50JztcclxuXHJcbi8vIGltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcblxyXG5cclxuLy8gaW1wb3J0IHsgTmd4U3Bpbm5lck1vZHVsZSB9IGZyb20gJ25neC1zcGlubmVyJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1NlY3VyaXR5Q29tcG9uZW50LCBMb2dpbkNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1NlY3VyaXR5Q29tcG9uZW50LCBMb2dpbkNvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWN1cml0eU1vZHVsZSB7fVxyXG4iXX0=