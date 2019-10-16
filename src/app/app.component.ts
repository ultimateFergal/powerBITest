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
   public accessToken = "H4sIAAAAAAAEACWWxQ7shhJE_-VuHckwpomUhZmZvTMzs6P372-k7HvT1V1V598_ZvL0U5L_-fsPdNOcaYY90b3XQq5lxsdS3SzuXuDY5OjfralQ2njyR4V4UkRoMEDIqJVSDBGgHsT36PDYXhNJnBpiukBNvMANakMyI6XRgXQJ0QJSvhWNORFUK1-o7xlNzeClNFVpUaOJPtvKw7tnaRXm-vuo3oyDsfmxkbE1OKUd8Qc9Oll_hUzEXlP1m5ywL-9AV3_tN-lsolPELmI50PNgYGUV6CYiyJB2bEoiyQX_FjwZ4fUyM4Rw3WrykS23WFbKPIn-Ss-XOutAznPMJEOsYknLOOGgiOi7VePpU2KBc9_hb84pw85D3lvS3wLHHwklHh4vhMaVSbLyTPH19lNflvNU2zsbo8X1AyTJLxaWBWVf8et-ybmOSWO7euTOs9Yz1OG47P3aP6XPeUFkcZvIDmedTIAUjfeVxux2hmRN5IC8k4X8ZOXYQJC_Gr3OK--UeEzucfEwZxmQdbe2aOETb9ZDruOlXMs71XhITjDUd0dMZn6b3QFrByPh4E6BNCXTjUz08Q-Jrvr-7g_LvUMz6HGZE2U2uZKvNrAXpztvWU_Qikvnlwmz_KTHloCLYnJVJTMBq9N0tiE3LdcBWIV7HsdG3KuWSajO4tFQRGEYNSJu0EoVoHM54DbBxqQ4b2DsizrVGhrpbBVxFHTl2_bEMWljRo_6FSGG-RTMIQmwdk-cklQNv-rkqQgcssGJJKPJEH9GEoROdfmQDLaRBZsVHmncGxPXhltX2yqL2jL7uoP2FcwSH48KLCkhAFztEJxmBTo3pI5LVF-Dqf01xqVsfi9g4FprwYBm4LbRnrNW2MWwW7wfoqCyN7T1UW2bBUiSSwRx2pdaV1m876XYWuyp06HvpRVBIyyjcfg5a4x2_4W2B2U6pTb1gdMnEsxdHxwhjsTx3Uyyxh1o2tK0jhIbKJyDkua5qZ_Kc9Oc8tMeEoXKwHzQhD0lREVH103kMUdbIX6n0kxR-vbOwpfvK22jJRTklR1ouFqf-sNwE7jWyS8CgmrDZLfIFV01vmlUYwPM3Xhp5MpDddG8aBLnn2r26Yzz_BLGHhNqW92Cc5mf43Q7Vuw9C1eWg5rfREw4oiG9bT8ShVxneT0JHOhqFhzGl-actS3rVs-AomXX2SyO94HNZtYcDEiVGFIdWLn8N0bBTERhIrTBkjJDSalWwVwLlCiD5d6QA6hB1wy39YBDaqUmV546TAQQRn3BrMqipUCVOMpbwP--wODOfGZOuLzK9GDTJJAulFkQeTZqyp18hVN6bh2IHt6-vp3YMUWAMxjVVNGUDLN5UWRRAq8hjwTV8YgniU_BD6ljXOdHah-7tO0YaMgcq4-UejSu82M2s9JfJNmsEOTNIbzEA6XNd_yiLNnEJhGkD8no4RO-tdDHlnmds0pDfuQ2KcAjX1bSCtJAiaJUnZVlnRL_di2D6sRXNaRq6iEuIV6Wdq5YfSuliHhOUqKKyYP9fP0GwF2FjRVxmjQOkNVOz6j3XCtzxGd2a3mZ_ujo_gYHONiALgDlJbSuxHinzUiyKllns5_rQx2OflJ7ODgcF6q-1Co3Lqhv84Rt2X5hZ-D65Xx_6T60ml0iHWXWtZDb4adwK5WJ2OU82jzGWe-35URWKHAmzSG13HH7KXaUjgwGg16GwSIFaTp0wZx556C1H1Rr0lmULp2IcgN0FuXzYI57xzFye19MvplA7s-AoNOE0MTCwZOWm10cGZgQHx69g4rCBGBCDedcgpzhQ_MAgA9-CyqH_LEflF6SGtir5U3ecvN2EF3gF52-PuKTs1uR2Goy8ps9-djikZUaqW5_D_m8OKTUNeLnUjDskl6HJ8Fi2EBziMcRm4qBYd0HjZQwUDfbs_K27xy9NRYmFNhqMHhJHzDQzJlu-2XWc-uhKU-tKwoV35si1Y99VctB-JtS4wcMPMbqfD62CzCEcRxcOiAuYpAwqRacglnrR5aWGlJNCxCCxBvPyBnAIjhaSBMO1Mbe-L0n4v14RoLGLzKl1GoooDbDlUsh0B77w_sBD09xzRJuVp47DXZMpwjKj4PQ45Ul2zl7Q-O8I1uKjNJs4SIBwrvs0Y8RbEJk0eE5-e2DiZVKkFAbrAj6lL4ZA5aH4LEgs_1c7hh8_ppqlFco4ptHJ4rLSm4PrIMC5ywnvA1xWX7xVYb81U1CxgPPeHJhKrGLAhhCRUx13AKdabHCdPKX0px8QcYddO8alRNDi5bah-LLo1KdWR3lI5x-TAKWW86F-WXEOlL6XjnFkY27X_4ksbrbKlANUaqmnQTbj3jE-kWKKeqff_789YdZn3mflOL5YU608xUUGE8Ts7v5HUkBYDj_lWvvO9yWorIpdYl7NNLJqIzz1cDWfjjxZzVyjsJk6MID1BF6LfCG0NHuuf8epkeG1C5uPI5MyXtsxaCNEkdWk2HLaMUNxTbsa5kKDHvDtNbq6so4lCA3gnFsIJ96FcxFa925kTiHUGM9U3hD6Acp4rj_0Y2RyJyJ95DfSQuHGWdnJRGQEOe66bCYXi8_4hf2KGXub8ed2j_YgtSK8CJl-_n6ysgSU1C2V5UX1xcgQMqiLiOM__IN183BczopTJzc_rXqXBI5ZWdvKWT1n3noXCDnyctFQT5o9-yw6uPdE2WQtkSFMKosp5KXG3-HKk-v5_WfzM9cF6vk_1QmgfJIfYgAvSxpeXEivOR0_juG01Rjsh9r8Rs7orFGQMdRo4_JF0wJyY54MFjPk2Vagm92k_zJd_B2W_KVEUXq2gXEr6VNRATnsUZeqJP87MSDkHLirtHcNCBFU8qXXdUu07YnBq0pA_iuXCXEHYt-2wfOwK9NE4rgZWBDuLhjLvhVyea55fsZ-UEZ6mf9cvv5YF0-rTrd8yHzEZuQ0x_L7HkzFcuHWDfbW3vTwl6IM0kiQUnIjw2DrzyQ7OIC_f0gOoVlBFn_mn0B1Awy7RcUNah6FNitdEvYCJXRAH5X6C4O35ifg-VEjRwCRnsHn6H4OMx2FcqWUKgLVTQtPrgzlPtVr8xEZg2BlfcI9Spbj_wIZ6yzjJ75rIM7ZdVP5v_9H60TE_naCwAA";
   // Read embed URL from Model
   public embedUrl = "https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d";

   // Read report Id from Model
   public embedReportId = "f6bfd646-b718-44dc-a378-b73e6b528204";

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
   public pbiService = new powerbi.service.Service(
    powerbi.factories.hpmFactory,
    powerbi.factories.wpmpFactory,
    powerbi.factories.routerFactory
  );
   // public pbiService = window.powerbi as powerbi.service.Service;
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
