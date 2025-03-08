import { TaaSearchService } from './../../../services/taa-search.service';
import { TeaCatalogService } from './../../../services/tea-catalog.service';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, Subscription, tap } from 'rxjs';
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
  teas: any[] = [];
  title: string = 'Наши чайные коллекции';
  constructor(private teaCatalogService: TeaCatalogService,
    private router: Router, private teaSearchService: TaaSearchService, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.loadTeaCatalog();
    // моё мучение
    this.route.queryParams.subscribe(params => {
      const searchQuery = params['search'] || '';
      this.teaSearchService.getTeas(searchQuery).subscribe(teas => {
        this.teas = teas;
        console.log(teas)// нет ничего
        this.updateTitle(searchQuery);
      });
    });
  }

  updateTitle(searchQuery: string) {
    this.title = searchQuery ? `Результаты поиска по запросу "${searchQuery}"` : 'Наши чайные коллекции';
  }

  loadTeaCatalog(): void {
    this.subscriptionTeaCtalogService = this.teaCatalogService.getTeaCatalog()
      // .pipe(
      //   delay(2000)//..посмотреть на loader
      // )
      .subscribe({
        next: (data: TeaCard[]) => {
          this.teaCatalog = data;
          this.isLoading = false;
        },
        error: (error) => {
          this.router.navigate(['/'])
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
