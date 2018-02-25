import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { RestService } from '../services/rest.service';
import { SharedDataService } from '../services/shared-data.service';

@Component({
    selector: 'app-manage-resources',
    templateUrl: './manage-resources.component.html',
    styleUrls: ['./manage-resources.component.css']
})
export class ManageResourcesComponent implements OnInit {

    newAdmin: number;
    sources;
    defaultTypes = [];
    sourceTypes = [];
    newSource = {
        defaultType: null,
        frequency: null,
        source: null,
        sourceType: null,
    };

    constructor(private restService: RestService, private sharedDataService: SharedDataService) { }

    ngOnInit() {
        this.restService.getSources().subscribe(sources => this.sources = sources);
        this.restService.getTypes().subscribe(types => {
            this.defaultTypes = types.eventDefaultTypes;
            this.sourceTypes = types.sourceTypes;
        });
    }

    addNewAdmin(): void {
        const body = { adminFbId: this.newAdmin };
        this.restService.addNewAdmin(body).subscribe();
        this.sharedDataService.confirmationMessage = {
            message: `You have added new admin with user id: '${this.newAdmin}'`,
            error: false
        };
        this.newAdmin = null;
    }

    updateFrequency(source, newFrequency): void {
        this.restService.updateSourceFrequency(source.sourceURL, newFrequency).subscribe(response => {
            for (let i = 0; i < this.sources.length; i++) {
                if (this.sources[i].id === response.id)
                    this.sources[i] = response;
            };
        });
        this.sharedDataService.confirmationMessage = {
            message: `You have changed frequency of event source '${source.sourceURL}' to ${newFrequency} hour(s).`,
            error: false
        };
    }

    deleteSource(source): void {
        this.restService.deleteSource(source.sourceURL).subscribe();
        for (let i = this.sources.length - 1; i >= 0; i--) {
            if (this.sources[i].id === source.id)
                this.sources.splice(i, 1);
        }
        this.sharedDataService.confirmationMessage = {
            message: `You have deleted event source: '${source.sourceURL}'`,
            error: false
        };
    }

    addSource(): void {
        this.restService.addSource(this.newSource).subscribe(newSource => this.sources.push(newSource));
        this.sharedDataService.confirmationMessage = {
            message: `You have added new event source: '${this.newSource.source}'`,
            error: false
        };
        this.newSource = {
            defaultType: null,
            frequency: null,
            source: null,
            sourceType: null,
        };;
    }

    isNewSourceValid(): boolean {
        return this.newSource.source && this.newSource.frequency && this.newSource.sourceType && this.newSource.defaultType;
    }

}
