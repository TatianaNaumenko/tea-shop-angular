import { TaaSearchService } from './../../../services/taa-search.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
searchQuery:string = '';
  constructor(private route:Router, private teaSearchService: TaaSearchService) { }

  ngOnInit(): void {
  }
  onSearch() {
    if (this.searchQuery) {
      this.teaSearchService.setSearch(this.searchQuery)
      this.route.navigate(['/catalog'], { queryParams: { search: this.searchQuery.trim() } });
    }
  }

}
