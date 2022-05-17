import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {
experience = [
    { name: "Cachapuz", initDate:"2018, 4, 1,", duration: "4 months", address: "Braga", Description: "Develop KPI`s for the SLV Cement Solution. Participate in the Qt Team." },
    { name: "Cachapuz",  initDate:"2019, 1, 2,",duration: "8 months", address: "Braga", Description: "Migration of a waste collection solution (https://www.cachapuz.com/produto/software-e-automacao/slv-waste/) in Silverlight to Angular 5; Tools such as: -TSF -NodeJS -Bootstrap -Visual Studio Code -DevExpress." },
    { name: "Searchwind",  initDate:"2019, 9, 1,",duration: "8 months", address: "Porto", Description: "Client: Shared Services of the Ministry of Health Development of new single application for SPMS Development in Angular 7/9 NodeJS Utilizando ferramentas como: · Confluence · GitLab · Jira · NodeJS · Slack Seguindo a metodologia SCRUMClient" },
    { name: "Ciberbit S.A", initDate:"2020, 9, 1,", duration: "8 months", address: "Gaia", Description: "Development in the Thom hospital solution Tools used: Confluence, Jira, GitLab, IDE Rider, Less, SQL 2017, C#, Visual Studio 2019" },
    {name: "Prozis ", initDate:"2021, 5, 2,", duration: "1year 1 month", address: "Esposende", Description:"Vue 2, HTML, PHP, Jira, GitLab, Jquery"},
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
  ];
  initdate = [
    "2018, 4, 1,",
    "2019, 1, 2,",
    "2019, 9, 1,",
    "2020, 9, 1,",
    "2021, 5, 2,",
  ]
  currentDate: any;
  targetDate: any;
  cDateMillisecs: any;
  tDateMillisecs: any;
  d: any;
  h: any;
  m: any;
  s : any;
  difference: any;
  seconds: any;
  minutes: any;
  hours: any;
  days: any;
  year: number = 2023;
  month: number = 6;
  months = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  day: number = 31;

  ngAfterViewInit() {
    this.myTimer();
  }

  myTimer() {
    
    for (let i = 0; i < this.initdate.length; i++) {
      for (let x = 0; x < this.experience.length; x++) {
        this.currentDate = new Date();
        this.targetDate = new Date(this.initdate[i]);
        this.cDateMillisecs = this.currentDate.getTime();
        this.tDateMillisecs = this.targetDate.getTime();
        this.difference = this.tDateMillisecs - this.cDateMillisecs;
        this.seconds = Math.floor(this.difference / 1000);
        this.minutes = Math.floor(this.seconds / 60);
        this.hours = Math.floor(this.minutes / 60);
        this.days = Math.floor(this.hours / 24);
        this.hours %= 24;
        this.minutes %= 60;
        this.seconds %= 60;
        this.hours = this.hours < 10 ? '' + this.hours : this.hours;
        this.minutes = this.minutes < 10 ? '' + this.minutes : this.minutes;
        this.seconds = this.seconds < 10 ? '' + this.seconds : this.seconds;

        this.d = document.getElementById('days');

        this.d.innerText = Math.abs(this.days);
        console.log('numeber', this.hours)
        console.log('html', this.h);
        this.h = document.getElementById('hours');
        this.h.innerText = Math.abs(this.hours);

        this.m = document.getElementById('mins');
        this.m.innerText = Math.abs(this.minutes);
        this.s = document.getElementById('seconds');
        this.s.innerText = Math.abs(this.seconds);

        setInterval(this.myTimer, 1000);
      }
    }
  }
  ngOnInit(): void {

  }

}
