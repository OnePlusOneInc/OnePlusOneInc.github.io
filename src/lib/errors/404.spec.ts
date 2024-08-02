import Component from "./404.svelte";
import { render } from "@testing-library/svelte";

describe("404", () => {
  it("should display a 404 page", () => {
    const result = render(Component)
    expect(result.container).toMatchSnapshot()
  });
})