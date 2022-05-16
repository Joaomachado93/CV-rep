import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {
experience = [
    { name: "Cachapuz", duration: "4 months", address: "Braga", Description: "Develop KPI`s for the SLV Cement Solution. Participate in the Qt Team." },
    { name: "Cachapuz", duration: "8 months", address: "Braga", Description: "Migration of a waste collection solution (https://www.cachapuz.com/produto/software-e-automacao/slv-waste/) in Silverlight to Angular 5; Tools such as: -TSF -NodeJS -Bootstrap -Visual Studio Code -DevExpress." },
    { name: "Searchwind", duration: "8 months", address: "Porto", Description: "Client: Shared Services of the Ministry of Health Development of new single application for SPMS Development in Angular 7/9 NodeJS Utilizando ferramentas como: · Confluence · GitLab · Jira · NodeJS · Slack Seguindo a metodologia SCRUMClient" },
    { name: "Ciberbit S.A", duration: "8 months", address: "Gaia", Description: "Development in the Thom hospital solution Tools used: Confluence, Jira, GitLab, IDE Rider, Less, SQL 2017, C#, Visual Studio 2019" },
    {name: "Prozis ", duration: "1year 1 month", address: "Esposende", Description:"Vue 2, HTML, PHP, Jira, GitLab, Jquery"},
  ]
  person = {
    name: "João",
    age: 29,
    address: "Serzedelo, Guimarães",
    img:"../../assets/eu.jpg"
  }
  names = [
    "Ana",
    "João",
    "Miguel",
    "Cenas","Rute",
  ];
  cities = [
    { name: "São Paulo", state: "SP" },
    { name: "Guimarães", state: "SP" },
    {name: "Braga", state:"Br"},
  ]
  ngOnInit(): void {
  }

}
