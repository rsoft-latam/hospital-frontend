export class SidenavItem {
  name: string;
  icon: string;
  route: any;
  parent: SidenavItem;
  subItems: SidenavItem[];
  position: number;
  badge: string;
  badgeColor: string;
  customClass: string;
  routerLinkActiveOptions: any;

  constructor(model: any = null) {
    if (model) {
      this.name = model.name;
      this.icon = model.icon;
      this.route = model.route;
      this.parent = model.parent;
      this.subItems = this.mapSubItems(model.subItems);
      this.position = model.position;
      this.badge = model.badge;
      this.badgeColor = model.badgeColor;
      this.customClass = model.customClass;
      this.routerLinkActiveOptions = model.routerLinkActiveOptions ? model.routerLinkActiveOptions : { exact: false };
    }
  }

  hasSubItems() {
    if (this.subItems) {
      return this.subItems.length > 0;
    }
    return false;
  }

  hasParent() {
    return !!this.parent;
  }

  mapSubItems(list: SidenavItem[]) {
    if (list) {
      list.forEach((item, index) => {
        list[index] = new SidenavItem(item);
      });

      return list;
    }
  }

  routeIsFunction() {
    return this.route instanceof Function || typeof this.route === 'function';
  }

  generateLetterIcon() {
    const words = this.name.split(' ');

    if (words.length > 1) {
      return words[0].charAt(0).toUpperCase() + words[1].charAt(0).toLowerCase();
    } else {
      return this.name.charAt(0).toUpperCase() + this.name.charAt(1).toLowerCase();
    }
  }
}
