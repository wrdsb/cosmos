import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { Asset } from "@cosmos/types";
import { QuartermasterAssetsService } from '../quartermaster-assets.service';

@Component({
  selector: 'cosmos-asset-detail-page',
  templateUrl: './asset-detail-page.component.html',
  styleUrls: ['./asset-detail-page.component.scss']
})
export class AssetDetailPageComponent implements OnInit {
  public selectedAsset$: Observable<Asset>;

  constructor(
    private assetsService: QuartermasterAssetsService
  ) {
    this.selectedAsset$ = this.assetsService.selectedAsset$;
  }

  ngOnInit(): void {
  }

}
