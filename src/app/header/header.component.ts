import { Component } from "@angular/core";
import { IMenu } from "../interface/menu";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  menus: IMenu[] = [
    {
      id: 1,
      title: "Trang chủ",
      url: "trang-chu",
      parent: 0,
    },
    {
      id: 2,
      title: "Giới thiệu",
      url: "trang-chu",
      parent: 0,
    },
    {
      id: 3,
      title: "Sản phẩm",
      url: "trang-chu",
      parent: 0,
    },
    {
      id: 4,
      title: "Liên hệ",
      url: "trang-chu",
      parent: 0,
    },
  ];
}
