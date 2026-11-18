import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IAutoSuggestionPayload, IAutoSuggestionPayloadItemRecipe, IItemRecipeNameResponse } from '../../../core/models/interface/common.interface';
import { IItemGroupResponse } from '../../../core/models/interface/ilss-master.interface';
import { CommonService } from '../../../core/services/common.service';
import { UserProfileService } from '../../../core/services/get-user-profile.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-item-recipe-search-helper',
  standalone: true,
  imports: [MatTableModule, NgbPaginationModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './item-recipe-search-helper.component.html',
  styleUrl: './item-recipe-search-helper.component.scss'
})
export class ItemRecipeSearchHelperComponent {
  dataSource: any;
  displayedColumns: string[] = ['itemCode', 'itemName', 'Action'];
  public searchString = '';
  public page = 1;
  public pageSize = 10;
  public collectionSize = 0;
  private readonly apiErrorMessage = 'Request failed to execute';
  // Lazily inject the services
  public dialogRef = inject(MatDialogRef<ItemRecipeSearchHelperComponent>);
  private commonService = inject(CommonService);
  private toastrService = inject(ToastrService);
  private userProfileservice = inject(UserProfileService);
  public masterItemData: IAutoSuggestionPayloadItemRecipe = {
    recipeType: "",
    caterer_Id: 0,
    recordStatus: "",
    pagingParameters: {
      pageNumber: 1,
      pageSize: 10
    },
    searchString: "",
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.masterItemData.caterer_Id = data.caterer_Id; // Access directly
    this.masterItemData.recipeType = data.recipeType; // Access directly
  }
  ngOnInit(): void {
    this.GetItemRecipeDetails();
  }
  public GetItemRecipeDetails(): void {
    const tableRecords$ = lastValueFrom(this.commonService.GetItemRecipeDetails(this.masterItemData));
    tableRecords$.then((response: IItemRecipeNameResponse) => {
      const menuDataFromResponse = 'success' === response.status ? response.result : [];
      this.dataSource = menuDataFromResponse;
      this.collectionSize = response.pagingDetails.totalCount;
    }).catch(_ => {
      this.dataSource = [];
      this.toastrService.error(this.apiErrorMessage, 'error', environment.toastrConfig);
    });
  }
  public searchResult(): void {
    this.masterItemData['searchString'] = this.searchString;
    this.GetItemRecipeDetails();
  }
  public restoreResult(): void {
    this.searchString = '';
    this.searchResult();
  }
  public onPaginationClick(pageNumber: any) {
    this.masterItemData.pagingParameters.pageNumber = pageNumber;
    this.GetItemRecipeDetails();
  }
  selectRow(data: any) {
    this.dialogRef.close(data);
  }
}
