import { Component, OnInit } from '@angular/core';
import { OrganizationService } from 'src/app/services/organization.service';
import { Organization } from 'src/app/common/organization';

@Component({
  selector: 'app-organizations-list',
  templateUrl: './organizations-list.component.html',
  styleUrls: ['./organizations-list.component.css']
})
export class OrganizationsListComponent implements OnInit {

  organizations: Organization[];

  constructor(private organizationService: OrganizationService) { }

  ngOnInit() {
    this.listOrganizations();
  }

  listOrganizations() {
    this.organizationService.getOrganizationList().subscribe(
      data => {
        this.organizations = data;
      }
    )
  }

}