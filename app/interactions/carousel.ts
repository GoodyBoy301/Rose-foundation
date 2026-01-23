import Core from "smooothy";
import gsap from "gsap";

export class ControlsSlider extends Core {
  parallaxy: HTMLElement[];
  constructor(container: HTMLElement, config: { sensisitivity?: number }) {
    super(container.querySelector("[data-slider]")!, {
      scrollSensitivity: config?.sensisitivity || 2.5,
    });

    this.createInterface(container);
    this.parallaxy = [...container.querySelectorAll("[data-p]")] as HTMLElement[];

    this.onSlideChange(0, 0);
    gsap.ticker.add(this.update.bind(this));
  }

  createInterface(int: HTMLElement) {
    return;
    const arrows = [...int.querySelector("[data-arrows]")!.children] as HTMLElement[];

    arrows.forEach((arrow, index) => (arrow.onclick = () => (index === 0 ? this.goToPrev() : this.goToNext())));
  }

  override onSlideChange = (current: number, previous: number) => {
    // this.items[previous].children[0].children[0].classList.remove("active")
    // this.items[current].children[0].children[0].classList.add("active")
    // this.dots[previous].children[0].classList.remove("active-dot")
    // this.dots[current].children[0].classList.add("active-dot")
  };
}
