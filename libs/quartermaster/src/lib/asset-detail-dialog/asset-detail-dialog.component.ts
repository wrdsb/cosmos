import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { Asset } from "@cosmos/types";
import { QuartermasterAssetsService } from '@cosmos/search-services';

@Component({
  selector: 'cosmos-asset-detail-dialog',
  templateUrl: './asset-detail-dialog.component.html',
  styleUrls: ['./asset-detail-dialog.component.scss']
})
export class AssetDetailDialogComponent implements OnInit {
  public selectedAsset$: Observable<Asset>;

  constructor(
    private assetsService: QuartermasterAssetsService
  ) {
    this.selectedAsset$ = this.assetsService.selectedItem$;
  }

  ngOnInit(): void {
  }

}
