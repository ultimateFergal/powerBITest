import { Component, OnInit } from '@angular/core';
import {models} from 'powerbi-client';
import * as powerbi from 'powerbi-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'powerBITest Angular material added';

   // Read embed application token from Model
   public accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImFQY3R3X29kdlJPb0VOZzNWb09sSWgydGlFcyIsImtpZCI6ImFQY3R3X29kdlJPb0VOZzNWb09sSWgydGlFcyJ9.eyJhdWQiOiJodHRwczovL2lnZXJlbmNpYS5jb20vNzBlY2MxNGUtNzA3Zi00NjRjLTk0ODAtZWEyYzA1MTY4OGVjIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2QwNjc5OTktN2UyMy00NDFiLWFmZTQtNDkxN2RjMWM5MjY0LyIsImlhdCI6MTU3MDcxODA3OCwibmJmIjoxNTcwNzE4MDc4LCJleHAiOjE1NzA3MjE5NzgsImFpbyI6IjQyVmdZR0FOdTFZWSsyRENoV1ZkVTFSaVRPZHVCZ0E9IiwiYXBwaWQiOiI3MGQ3MDMzYS00ZjkwLTQwMzctOGVjYi03ZDFmZjE5ODIxY2UiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83ZDA2Nzk5OS03ZTIzLTQ0MWItYWZlNC00OTE3ZGMxYzkyNjQvIiwidGlkIjoiN2QwNjc5OTktN2UyMy00NDFiLWFmZTQtNDkxN2RjMWM5MjY0IiwidXRpIjoiTFJhdlpBZlZLRTZ1c2g2ZGdJVVdBQSIsInZlciI6IjEuMCJ9.oqdSrT-nn2sWrncGKejFMaWbGuHsmdpdnxd-Q3ctPNNWuJZ0t3uHGwuMnkb7R-cJrO-3_XaW6KZKYZ4_Y0wAVwCuOERzuIwsj3vkHGmiXVypjr_8pLkc_k6Y-U1ASKg_RTycZAuX5NqnJSweB6WZOD1hDqKLg0DZ13Zv8KmxsHw76fQAG_JwHgzwV2ZL2Pod72UFXe2lM_ozb8V6Sm0hLTTkUVEF2sL7lKaFt411Jkd0BXYi7A9x46tOgKdQOJvq9s763v7W-_9_hP61ah-CmSTJa5NFyzR34Md8rCsbGP61bOD_S77P5ivIWyffVFZAy2B5qj0Nn-TzpqK9fvSIBw";
   // Read embed URL from Model
   public embedUrl = "https://app.powerbi.com/reportEmbed?reportId=1a0d866d-84c7-40be-b0ec-00ef9649464c&groupId=2121bfbd-e220-4e52-bd28-3517927ee38a&autoAuth=true&ctid=7d067999-7e23-441b-afe4-4917dc1c9264&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWNlbnRyYWwtdXMtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3D%3D";

   // Read report Id from Model
   public embedReportId = "1a0d866d-84c7-40be-b0ec-00ef9649464c";

   // Get models. models contains enums that can be used.
   // public models = window['powerbi-client'].models;



   // Embed configuration used to describe what and how to embed.
   // This object is used when calling powerbi.embed.
   // This also includes settings and options such as filters.
   // You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details.
   public config: any = {
       type: 'report',
       tokenType: models.TokenType.Embed,
       accessToken: this.accessToken,
       embedUrl: this.embedUrl,
       id: this.embedReportId,
       permissions: models.Permissions.All,
       settings: {
           filterPaneEnabled: true,
           navContentPaneEnabled: true
       }
   };

   // Get a reference to the embedded report HTML element
   public reportContainer: HTMLElement;

   // Embed the report and display it within the div container.
   public pbiService = window.powerbi as powerbi.service.Service;
   public report;

   ngOnInit() {
     // Get a reference to the embedded report HTML element
    this.reportContainer =<HTMLElement>(document.getElementById("PowerBIQNA"));
    this.report = this.pbiService.embed(this.reportContainer, this.config);
    console.log(this.report);    

    // Report.off removes a given event handler if it exists.
    this.report.off("loaded");

    // Report.on will add an event handler which prints to Log window.
    this.report.on("loaded", function () {
      console.log("Loaded");
    });

    // Report.off removes a given event handler if it exists.
    this.report.off("rendered");

    // Report.on will add an event handler which prints to Log window.
    this.report.on("rendered", function () {
      console.log("Rendered");
    });

    this.report.on("error", function (event) {
      console.log(event.detail);
      this.report.off("error");
    });

    this.report.off("saved");
    this.report.on("saved", function (event) {
      console.log(event.detail);
      if (event.detail.saveAs) {
          console.log('In order to interact with the new report, create a new token and load the new report');
      }
    })
  }
  
}
