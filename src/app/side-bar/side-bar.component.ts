import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/university/list",
    title: "Universities",
    rtlTitle: "الرموز",
    icon: "icon-bank",
    class: ""
  },
  {
    path: "/department/list",
    title: "Department",
    rtlTitle: "خرائط",
    icon: "icon-vector",
    class: "" },
  {
    path: "/team/list",
    title: "Teams",
    rtlTitle: "إخطارات",
    icon: "icon-badge",
    class: ""
  },

  {
    path: "/student",
    title: "Students",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/tables",
    title: "Table List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/typography",
    title: "Typography",
    rtlTitle: "طباعة",
    icon: "icon-align-center",
    class: ""
  },
  {
    path: "/rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: ""
  }
];


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'  ]
})
export class SideBarComponent implements OnInit {

  menuItems: any[];

  constructor() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  ngOnInit(): void {
  }

}
