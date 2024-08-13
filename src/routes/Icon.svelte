<script lang="ts">
  import { cva } from "class-variance-authority"
  import Arrows from "$lib/assets/icons/arrows.svg"
  import Handshake from "$lib/assets/icons/handshake.svg"
  import Linkedin from "$lib/assets/icons/linkedin.svg"
  import Users from "$lib/assets/icons/users.svg"
  import Writing from "$lib/assets/icons/writing.svg"

  type IconName = "handshake" | "writing" | "arrows" | "users" | "linkedin"

  const icons: Record<IconName, string> = {
    handshake: Handshake,
    writing: Writing,
    arrows: Arrows,
    users: Users,
    linkedin: Linkedin,
  }

  const style = cva("aspect-square w-8 sm:w-14 p-2 rounded-md bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#FF8A00] via-[#FF5C00] via-56% to-[#F24405]")
  export let name: IconName
</script>

<img class={style({class: $$props.class})} src={icons[name]} alt="{name} icon" />

