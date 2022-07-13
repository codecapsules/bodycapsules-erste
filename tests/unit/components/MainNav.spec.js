import { mount } from '@vue/test-utils';
import MainNav from "@/components/MainNav";

describe("MainNav", () => (
  it("display company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch('bodyC');
  }),
  
  it("display menu items for nav", () => {
    const wrapper = mount(MainNav);
    const navItems =  wrapper.findAll("li")
    const navMenuTexts = navItems.map(item => item.text())
    console.log(navMenuTexts);
  })
))