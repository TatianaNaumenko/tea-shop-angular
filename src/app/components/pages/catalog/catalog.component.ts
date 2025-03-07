
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Subscription, tap } from 'rxjs';
import { TeaCatalogService } from 'src/app/services/tea-catalog.service';
import { TeaCard } from 'src/app/types/tea-card.type';

@Component({
  selector: 'catalog-component',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {

  public teaCatalog: TeaCard[] = [];
  public isLoading: boolean = false;
  private subscriptionTeaCtalogService: Subscription | null = null;

  constructor(private teaCatalogService: TeaCatalogService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.loadTeaCatalog()
  }


  loadTeaCatalog(): void {
    this.subscriptionTeaCtalogService = this.teaCatalogService.getTeaCatalog()
      .pipe(
        delay(2000)//..посмотреть на loader
      )
      .subscribe({
        next: (data: TeaCard[]) => {
          this.teaCatalog = data;
          this.isLoading = false;
        },
        error: (error) => {
          this.route.navigate(['/'])
          console.error('Ошибка при получении каталога', error);
          this.isLoading = false;
        }
      }
      );
  }

  ngOnDestroy() {
    this.subscriptionTeaCtalogService?.unsubscribe();
  }

}
